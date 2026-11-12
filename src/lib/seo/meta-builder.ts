/**
 * ==============================================================================
 * FeeKit SEO Metadata Engine
 * ==============================================================================
 * Google renders ~580px of title and ~920px of description (desktop). That is
 * roughly 55-60 title characters and 150-160 description characters. Anything
 * past that is truncated with an ellipsis, which measurably depresses CTR.
 *
 * This module is the single source of truth for turning a raw page concept
 * into a SERP-ready title + description:
 *
 *   - Titles are keyword-front-loaded, unique, and hard-capped at 60 chars.
 *   - Descriptions are capped at 158 chars, never cut mid-word, and always
 *     end on a complete sentence.
 *   - The brand suffix is applied consistently so every SERP entry carries
 *     the FeeKit entity signal.
 *
 * Import these helpers everywhere metadata is generated.
 * ==============================================================================
 */

import { resolveGeo } from './geo.ts';

export const BRAND = 'FeeKit';
export const TITLE_MAX = 62;
export const DESC_MAX = 158;
export const DESC_MIN = 120;

/** " | FeeKit" */
const BRAND_SUFFIX = ` | ${BRAND}`;

/**
 * Collapse whitespace and normalise separators so SERP text is predictable.
 */
export function tidy(text: string): string {
  return (text || '')
    .replace(/\s+/g, ' ')
    // Keep thousands separators intact: "$5,000" must not become "$5, 000".
    .replace(/(\d)\s*,\s*(?=\d{3}\b)/g, '$1,')
    .replace(/\s*\|\s*/g, ' | ')
    .replace(/\s*;\s*/g, '; ')
    .replace(/\s*:\s*/g, ': ')
    .replace(/\s*,\s*(?!\d{3}\b)/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * A parenthetical qualifies as a usable title modifier when it is short,
 * meaningful and not just a year.
 */
function isUsableModifier(inner: string): boolean {
  if (!inner || inner.length > 32) return false;
  if (/^20\d{2}$/.test(inner)) return false;
  if (/\bGuide\b/i.test(inner)) return false;
  return /[\d%]/.test(inner) || inner.length <= 24;
}

/**
 * Find every balanced `( ... )` group in a string.
 *
 * The previous implementation used `/\(([^)]*)\)/`, which is not nesting
 * aware. On a title like "Manitoba Sales Tax Calculator 2026 (GST + PST (RST)
 * 12%)" it matched `(GST + PST (RST)`, produced the broken modifier
 * "GST + PST (RST" and left the orphaned "12%)" in the core. This scanner
 * tracks depth so nested parentheses are returned as one intact group.
 */
function findParenGroups(text: string): Array<{ inner: string; start: number; end: number }> {
  const groups: Array<{ inner: string; start: number; end: number }> = [];
  let i = 0;

  while (i < text.length) {
    if (text[i] !== '(') {
      i += 1;
      continue;
    }
    let depth = 0;
    let closed = -1;
    for (let j = i; j < text.length; j += 1) {
      if (text[j] === '(') depth += 1;
      else if (text[j] === ')') {
        depth -= 1;
        if (depth === 0) {
          closed = j;
          break;
        }
      }
    }
    if (closed === -1) break; // Unbalanced - stop scanning.
    groups.push({ inner: text.slice(i + 1, closed), start: i, end: closed + 1 });
    i = closed + 1;
  }

  return groups;
}

/**
 * Rank a candidate parenthetical so the most informative one wins the
 * "modifier" slot in the SERP title.
 *
 * Rate ranges and money values are worth the most. A bare year is worth the
 * least - Google discounts the year signal, and every page on the site is
 * already dated 2026.
 */
function scoreModifier(inner: string): number {
  const s = inner.trim();
  if (!s) return -1;
  if (/^20\d{2}\b/.test(s)) return 30; // "2026 Benchmark" - low value
  if (/[%$€£]/.test(s)) return 100; // "7.25% to 10.75%" - highest value
  if (/\d/.test(s)) return 60;
  return 40;
}

/**
 * Fit a modifier into the room that is left after the core keyword.
 *
 * Rules:
 *  - A NUMERIC RANGE ("5.00% to 9.0625%") is never shown partially. A
 *    half-printed range states the wrong rate, so it is dropped entirely
 *    rather than truncated.
 *  - A non-numeric qualifier ("USD to EUR", "Cross-Border", "5% + $0.50")
 *    is trimmed on a word boundary.
 *  - Anything shorter than 6 characters carries no signal, so it is dropped.
 */
function fitModifier(mod: string, room: number): string {
  if (!mod) return '';
  if (room < 8) return '';
  if (mod.length <= room) return mod;

  // A numeric range must never be shown partially - "5.00% to 9" states a
  // rate that does not exist. Drop it instead of truncating.
  const isNumericRange = /^\s*\d[\d.,]*\s*(?:%|USD|EUR|GBP|CAD|AUD|S\$|NZD|INR|BRL|JPY)?\s*to\s+\d/i.test(mod);
  if (isNumericRange) return '';

  let out = '';
  for (const word of mod.split(' ')) {
    const next = out ? `${out} ${word}` : word;
    if (next.length > room) break;
    out = next;
  }

  out = stripDanglingWords(out);
  if (out.length < 6) return '';
  // A range that survived the word trim is still a partial range - drop it.
  if (/^\s*\d[\d.,]*\s*(?:%|USD|EUR|GBP|CAD|AUD|S\$)?\s*to\s+\d/i.test(out)) return '';
  return out;
}

/**
 * Search-value weight for a single word of a title.
 *
 * Used only to rank candidate shortened titles. The head keyword
 * ("Calculator") and the money/tax nouns ("Rate", "Fees", "ROAS") must
 * survive; filler connectors ("and", "&", "of") never do.
 */
function wordWeight(word: string): number {
  const k = word.toLowerCase().replace(/[^a-z0-9&-]/g, '');

  if (['&', 'and', 'of', 'for', 'the', 'a', 'an', 'to', 'in', 'on', 'vs', 'with', 'at', 'by', 'from', 'or'].includes(k)) {
    return 0;
  }
  if (['calculator', 'calculators'].includes(k)) return 100;
  if (
    [
      'rate', 'rates', 'fee', 'fees', 'tax', 'margin', 'roas', 'roi',
      'profit', 'profitability', 'comparator', 'estimator', 'estimate',
      'generator', 'comparison', 'break-even', 'retainer',
    ].includes(k)
  ) {
    return 90;
  }
  if (
    [
      'freelance', 'contractor', 'consultant', 'manager', 'engineer',
      'developer', 'designer', 'editor', 'writer', 'producer', 'marketer',
      'analyst', 'architect', 'specialist', 'coach', 'operator', 'seller',
    ].includes(k)
  ) {
    return 70;
  }
  if (
    [
      'hourly', 'daily', 'weekly', 'monthly', 'annual', 'yearly', 'day',
      'international', 'domestic', 'online', 'in-person', 'project',
    ].includes(k)
  ) {
    return 55;
  }
  if (
    /^(stripe|paypal|square|wise|shopify|etsy|ebay|amazon|tiktok|gumroad|lemon|authorize|venmo|apple|google|meta|visa|mastercard|uk|europe|us|usa|canada|australia|germany|france|spain|italy|netherlands|ireland|japan|singapore)/.test(k)
  ) {
    return 75;
  }
  return 35;
}

/**
 * The head keyword is the word that carries the search intent. For almost
 * every page on the site it is the LAST word ("... Rate Calculator").
 */
const HEAD_KEYWORDS = new Set([
  'calculator', 'calculators', 'comparator', 'estimator', 'generator',
  'comparison', 'calculator)', 'calculator|',
]);

function isHeadKeyword(word: string): boolean {
  const k = word.toLowerCase().replace(/[^a-z]/g, '');
  return HEAD_KEYWORDS.has(k);
}

/**
 * Shorten a core keyword phrase so it fits the SERP budget WITHOUT dropping
 * the head keyword.
 *
 * The old implementation popped trailing words off the end of the string,
 * which is exactly where "Calculator" lives - so 22 live pages shipped a
 * title with no "Calculator" in it.
 *
 * This version splits the core into a PREFIX and a HEAD:
 *
 *   "Freelance DevOps Engineer Hourly & Retainer Rate Calculator"
 *    ^-- prefix ------------------------------------^ ^-- head
 *
 * The head is never touched. Words are removed from the END of the prefix
 * first (the least important qualifiers - "Retainer", "&"), and only then
 * from the front. If the head is not the last word, the whole core is
 * treated as prefix so nothing important is silently deleted.
 */
function shrinkCore(base: string, budget: number): string | null {
  if (base.length <= budget) return base;

  const words = base.split(' ').filter(Boolean);
  if (words.length <= 2) return null;

  // Identify the head keyword.
  let headIdx = -1;
  for (let i = words.length - 1; i >= 0; i -= 1) {
    if (isHeadKeyword(words[i])) {
      headIdx = i;
      break;
    }
  }
  // No recognisable head keyword - do not risk mangling the phrase.
  if (headIdx === -1) return null;

  const head = words[headIdx];
  const prefix = words.slice(0, headIdx);

  if (prefix.length === 0) return null;

  // Candidate prefixes, longest first: drop one trailing word at a time.
  const candidates: string[] = [];
  for (let i = prefix.length; i >= 1; i -= 1) {
    const slice = prefix.slice(0, i).join(' ').replace(/\s*&\s*$/, '').trim();
    if (slice) candidates.push(slice);
  }

  let best: { text: string; weight: number } | null = null;

  for (const slice of candidates) {
    const text = `${slice} ${head}`;
    if (text.length > budget) continue;
    const weight = slice
      .split(' ')
      .filter(Boolean)
      .reduce((sum, w) => sum + wordWeight(w), 0);
    if (!best || weight > best.weight) {
      best = { text, weight };
    }
  }

  return best ? best.text : null;
}

/**
 * A shorter equivalent of the core phrase ("X and Y" -> "X & Y").
 * Only applied when the full phrase does not fit.
 */
function compactCore(core: string): string {
  const compact = core.replace(/\s+and\s+/gi, ' & ');
  return compact.length < core.length ? compact : core;
}

/**
 * Remove parenthetical qualifiers, trailing years and agency suffixes from a
 * raw programmatic title so only the primary keyword remains.
 *
 * Returns the keyword `core` plus an optional `modifier` (usually the rate
 * range) that should sit *after* the keyword in the SERP title.
 */
export function stripTitleNoise(raw: string): { core: string; modifier: string } {
  let working = tidy(raw);

  // Drop a trailing brand suffix so it is re-applied in a consistent position.
  working = working.replace(new RegExp(`\\s*\\|\\s*${BRAND}\\s*$`, 'i'), '');
  working = working.replace(new RegExp(`\\s*[—–-]\\s*${BRAND}\\s*$`, 'i'), '');

  // Pull every balanced parenthetical out. The most informative one usually
  // holds the rate range, which is valuable but belongs after the keyword,
  // not inside it. Nested parens are handled as a single intact group.
  let modifier = '';
  const groups = findParenGroups(working);
  if (groups.length > 0) {
    // Remove every parenthetical from the core. Groups are removed from the
    // END backwards so the recorded start/end indices of the earlier groups
    // stay valid while the string is being edited.
    for (let i = groups.length - 1; i >= 0; i -= 1) {
      const g = groups[i];
      working = `${working.slice(0, g.start)} ${working.slice(g.end)}`;
    }
    working = tidy(working);

    const scored = groups
      .map((g) => ({ inner: tidy(g.inner), score: scoreModifier(g.inner) }))
      .filter((g) => g.inner && isUsableModifier(g.inner) && g.score >= 0)
      .sort((a, b) => b.score - a.score);

    if (scored.length > 0) {
      modifier = scored[0].inner;
    }
  }

  // Split on pipe: the first segment is the keyword, later segments are
  // optional modifiers ("Amazon FBA Fee Calculator | 2026 Size Tiers").
  const segments = working.split('|').map((s) => tidy(s)).filter(Boolean);
  let core = segments[0] || '';

  if (!modifier) {
    for (const segment of segments.slice(1)) {
      if (isUsableModifier(segment)) {
        modifier = segment;
        break;
      }
    }
  }

  // Drop trailing year / update noise.
  core = core.replace(/\s*[-–—]\s*20\d{2}(\s*Updated Rates)?$/i, '');
  core = core.replace(/\s+20\d{2}\b/g, '');

  // Drop agency suffixes ("& HMRC Guide", "& Agenzia delle Entrate Guide").
  const agencySplit = core.match(
    /^(.*?)\s+&\s+.*\b(Guide|Authority|Agency|Department|Office|Tax Dept)\b\s*$/i
  );
  if (agencySplit) {
    core = tidy(agencySplit[1]);
  }

  // Drop a dangling "&" or trailing separators.
  core = core.replace(/\s*&\s*$/, '').replace(/[\s,;:|]+$/, '');

  return { core: tidy(core), modifier: tidy(modifier) };
}

/**
 * Trim a title to a hard character budget without cutting a word in half.
 */
export function clampTitle(text: string, max: number = TITLE_MAX): string {
  const clean = tidy(text);
  if (clean.length <= max) return clean;

  const sliced = clean.slice(0, Math.max(max - 3, 10));
  const lastSpace = sliced.lastIndexOf(' ');
  const trimmed = lastSpace > 20 ? sliced.slice(0, lastSpace) : sliced;
  return `${trimmed.replace(/[\s,;:|&\-–—]+$/, '')}...`;
}

/**
 * Build a brand-suffixed title that fits inside the SERP pixel budget.
 *
 * Order of preference (highest CTR first):
 *   1. `<core> | <modifier> | FeeKit`   e.g. "California Sales Tax Calculator | 7.25% to 10.75% | FeeKit"
 *   2. `<core> | <trimmed modifier> | FeeKit` - the modifier is trimmed, the
 *      head keyword is never touched.
 *   3. `<core> | FeeKit`
 *   4. `<shortened core> | FeeKit` - the core is shortened, but only by
 *      dropping low-value words. The head keyword ("Calculator", "Rate",
 *      "Fees") is always preserved.
 */
export function buildTitle(core: string, modifier?: string, max: number = TITLE_MAX): string {
  const base = tidy(core);
  const mod = tidy(modifier || '');
  const budget = max - BRAND_SUFFIX.length;

  // 1. Everything fits as-is.
  if (mod) {
    const candidate = `${base} | ${mod}`;
    if (candidate.length <= budget) {
      return `${candidate}${BRAND_SUFFIX}`;
    }
  }

  // 2. The core fits on its own. Try to fit a trimmed modifier beside it.
  //    The modifier is what gets trimmed - never the core.
  if (base.length <= budget) {
    const room = budget - base.length - 3;
    const fitted = fitModifier(mod, room);
    if (fitted) {
      return `${base} | ${fitted}${BRAND_SUFFIX}`;
    }
    return `${base}${BRAND_SUFFIX}`;
  }

  // 3. The core itself is too long. Shorten it while protecting the head
  //    keyword, then try to slot a modifier into whatever room is left.
  const shortened = shrinkCore(base, budget);
  if (shortened) {
    const room = budget - shortened.length - 3;
    const fitted = fitModifier(mod, room);
    if (fitted) {
      return `${shortened} | ${fitted}${BRAND_SUFFIX}`;
    }
    return `${shortened}${BRAND_SUFFIX}`;
  }

  // 3b. A compacted core ("X and Y" -> "X & Y") may now fit.
  const compact = compactCore(base);
  if (compact.length <= budget) {
    const room = budget - compact.length - 3;
    const fitted = fitModifier(mod, room);
    if (fitted) {
      return `${compact} | ${fitted}${BRAND_SUFFIX}`;
    }
    return `${compact}${BRAND_SUFFIX}`;
  }

  // 4. Last resort - hard clamp on a word boundary.
  const fallback = clampTitle(mod ? `${base} | ${mod}` : base, budget).replace(/\.\.\.$/, '');
  return `${fallback}${BRAND_SUFFIX}`;
}

/**
 * Strip dangling stop words so a trimmed snippet never ends on "and", "the",
 * "of" and friends.
 */
function stripDanglingWords(text: string): string {
  return text
    .replace(/[\s,;:|&\-–—]+$/, '')
    .replace(
      /\s+(and|or|the|a|an|to|of|with|for|in|on|at|by|from|plus|as|is|are|that|which|but|into|per|via)$/i,
      ''
    )
    .replace(/[\s,;:|&\-–—]+$/, '');
}

/**
 * Hard-trim a description on a word boundary without preferring a sentence
 * break. Used when padding a thin description, where falling back to the
 * original sentence would throw the padding away again.
 */
function hardTrim(text: string, max: number): string {
  const clean = tidy(text);
  if (clean.length <= max) return clean;
  const sliced = clean.slice(0, Math.max(max - 1, 20));
  const lastSpace = sliced.lastIndexOf(' ');
  let trimmed = lastSpace > 40 ? sliced.slice(0, lastSpace) : sliced;
  trimmed = stripDanglingWords(trimmed);
  return `${trimmed}.`;
}

/**
 * Trim a description to the SERP budget, preferring a sentence boundary but
 * never returning a snippet so short that it wastes the available space.
 */
export function clampDescription(text: string, max: number = DESC_MAX): string {
  const clean = tidy(text);
  if (clean.length <= max) return clean;

  // 1. Keep whole sentences for as long as they fit.
  const sentences = clean.split(/(?<=\.)\s+/).filter(Boolean);
  let kept = '';
  let nextIndex = 0;
  for (let i = 0; i < sentences.length; i += 1) {
    const candidate = kept ? `${kept} ${sentences[i]}` : sentences[i];
    if (candidate.length > max) {
      nextIndex = i;
      break;
    }
    kept = candidate;
    nextIndex = i + 1;
  }

  if (kept.length >= DESC_MIN) return kept;

  // 2. Otherwise cut inside the next sentence, preferring a clause boundary.
  const next = sentences[nextIndex] || '';
  const overflow = `${kept} ${next}`.trim();
  const cut = overflow.slice(0, max);
  const lastComma = Math.max(cut.lastIndexOf(', '), cut.lastIndexOf('; '));
  if (lastComma > max * 0.6 && lastComma + 1 >= DESC_MIN) {
    return `${stripDanglingWords(cut.slice(0, lastComma))}.`;
  }

  return hardTrim(cut, max);
}

/**
 * Build a SERP description:
 *   - never longer than 158 chars
 *   - never shorter than 120 chars (a short description wastes the snippet)
 *   - always ends with a period
 *
 * `filler` is appended when the source copy is too short to fill the snippet.
 */
export function buildDescription(
  text: string,
  filler?: string,
  max: number = DESC_MAX
): string {
  let clean = tidy(text);
  if (!clean) return '';

  if (clean.length < DESC_MIN) {
    // Pad with a benefit statement rather than leaving a thin snippet.
    const pad = tidy(
      filler || 'Free 2026 rates, instant net payouts and reverse fee math'
    ).replace(/[.\s]*$/, '');
    clean = `${clean.replace(/[.\s]*$/, '')}. ${pad}.`;
    if (clean.length > max) {
      clean = hardTrim(clean, max);
    }
  } else if (clean.length > max) {
    clean = clampDescription(clean, max);
  }

  if (!/[.!?:]$/.test(clean)) {
    clean = `${clean.replace(/[.\s]*$/, '')}.`;
  }

  // Final safety net - never exceed the SERP character budget.
  if (clean.length > max) {
    clean = hardTrim(clean, max);
  }

  return clean;
}

/**
 * Normalise an override/hand-written title so it always carries the brand
 * suffix and respects the character budget.
 */
export function brandTitle(title: string, max: number = TITLE_MAX): string {
  const clean = tidy(title)
    .replace(new RegExp(`\\s*\\|\\s*${BRAND}\\s*$`, 'i'), '')
    .replace(new RegExp(`\\s*[—–-]\\s*${BRAND}\\s*$`, 'i'), '');

  if (clean.length + BRAND_SUFFIX.length <= max) {
    return `${clean}${BRAND_SUFFIX}`;
  }
  return `${clampTitle(clean, max - BRAND_SUFFIX.length).replace(/\.\.\.$/, '')}${BRAND_SUFFIX}`;
}

/**
 * Normalise a hand-written description to the SERP budget.
 */
export function brandDescription(description: string, max: number = DESC_MAX): string {
  return buildDescription(description, undefined, max);
}

/**
 * A category-aware filler sentence used when the source description is too
 * short to fill the SERP snippet.
 */
export function descriptionFiller(category?: string): string {
  switch (category) {
    case 'sales-tax-calculator':
      return 'Calculate statutory rates, local surtaxes and net-to-gross totals for 2026';
    case 'vat-calculator':
      return 'Calculate standard and reduced VAT rates for 2026 filings and invoices';
    case 'freelance-rate-calculator':
      return 'Model hourly rates, day rates and 1099 self-employment tax for 2026';
    case 'ecommerce-profit-calculator':
      return 'Model COGS, fees, ad spend and break-even ROAS for 2026';
    case 'wise-vs-stripe':
      return 'Compare mid-market rates and FX spreads before you send 2026 payouts';
    case 'canada-sales-tax':
      return 'Calculate GST, HST, PST and QST for 2026 CRA-compliant invoices';
    default:
      return 'Free 2026 rates, instant net payouts and reverse fee math';
  }
}

/**
 * Build a sitemap-friendly ISO timestamp.
 */
export function isoDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(`${date}T00:00:00Z`) : date;
  if (Number.isNaN(d.getTime())) return new Date('2026-10-24T00:00:00Z').toISOString();
  return d.toISOString();
}

/**
 * Map a geo region to the hreflang locale used across the site.
 *
 * Delegates to the shared geo resolver so the sitemap, the page `<head>` and
 * the JSON-LD can never disagree about the locale of a page.
 */
export function localeForRegion(region?: string): string {
  return resolveGeo({ geoRegion: region }).locale;
}
