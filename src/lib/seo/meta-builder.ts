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
 * Trim text to a character budget without cutting a word in half.
 */
function trimToWord(text: string, max: number): string {
  const clean = tidy(text);
  if (clean.length <= max) return clean;
  const sliced = clean.slice(0, max);
  const lastSpace = sliced.lastIndexOf(' ');
  let trimmed = lastSpace > 8 ? sliced.slice(0, lastSpace) : sliced;
  // Never leave a dangling conjunction behind.
  trimmed = trimmed.replace(/[\s,;:|&\-–—]+$/, '');
  trimmed = trimmed.replace(/\s+(and|or|&|,)$/i, '');
  return trimmed.replace(/[\s,;:|&\-–—]+$/, '');
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

  // Pull the first parenthetical out - it usually holds the rate range, which
  // is valuable but belongs after the keyword, not inside it.
  let modifier = '';
  const paren = working.match(/\(([^)]*)\)/);
  if (paren) {
    const inner = tidy(paren[1]);
    working = working.replace(/\s*\([^)]*\)/g, '');
    if (isUsableModifier(inner)) {
      modifier = inner;
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
 *   2. `<core> | <modifier> | FeeKit` with the modifier trimmed to fit
 *   3. `<core> | FeeKit`
 *   4. shortened `<core> | FeeKit`
 */
export function buildTitle(core: string, modifier?: string, max: number = TITLE_MAX): string {
  const base = tidy(core);
  const mod = tidy(modifier || '');
  const budget = max - BRAND_SUFFIX.length;

  if (mod) {
    const candidate = `${base} | ${mod}`;
    if (candidate.length <= budget) {
      return `${candidate}${BRAND_SUFFIX}`;
    }
  }

  if (base.length <= budget) {
    // There is room for a (trimmed) qualifier. A title with a rate, a scope or
    // a year converts better than a bare two-word title.
    const room = budget - base.length - 3;
    if (mod && room >= 10) {
      return `${base} | ${trimToWord(mod, room)}${BRAND_SUFFIX}`;
    }
    return `${base}${BRAND_SUFFIX}`;
  }

  // Need to shrink the core. Remove the lowest-value trailing words first.
  const words = base.split(' ').filter(Boolean);
  while (words.length > 2) {
    words.pop();
    const shrunk = words.join(' ');
    const withMod = mod ? `${shrunk} | ${mod}` : shrunk;
    if (withMod.length <= budget) {
      return `${withMod}${BRAND_SUFFIX}`;
    }
  }

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
      filler || 'Free, instant, and updated for 2026 rates with full source citations'
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
      return 'Free, instant, and updated for 2026 rates with full source citations';
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
 */
export function localeForRegion(region?: string): string {
  const r = (region || '').toUpperCase();
  if (r === 'UK') return 'en-GB';
  if (r === 'CA') return 'en-CA';
  if (r === 'GLOBAL') return 'en';
  return 'en-US';
}
