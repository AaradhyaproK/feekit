/**
 * FeeKit SEO Metadata Auditor
 *
 * Computes the FINAL <title> / meta description for every indexable URL
 * (category hubs, programmatic tool pages, bespoke content pages) using the
 * exact same helpers the app uses, then reports:
 *   - duplicate titles / descriptions across URLs
 *   - titles that are too long (> 60 chars) or too short (< 25 chars)
 *   - descriptions outside the 120-158 char sweet spot
 *   - titles missing the brand suffix
 *
 * Run: node --experimental-strip-types src/scripts/audit-seo-metadata.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

const { getCustomSeoMetadata } = await import('../lib/seo/meta-overrides.ts');
const { getPageContent } = await import('../../content/index.ts');
const { CATEGORY_NAMES } = await import('../lib/seo/category-names.ts');
const { CANONICAL_REDIRECTS } = await import('../lib/seo/canonical-redirects.ts');
const {
  brandDescription,
  brandTitle,
  buildDescription,
  buildTitle,
  descriptionFiller,
  DESC_MAX,
  stripTitleNoise,
  tidy,
  TITLE_MAX,
} = await import('../lib/seo/meta-builder.ts');

const rawGeo = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src/data/geo-matrix.json'), 'utf8')
);
const items = Array.isArray(rawGeo) ? rawGeo : rawGeo.items || rawGeo.tools || [];

const rows = [];

for (const item of items) {
  const category = item.category;
  const slug = item.slug;
  const bespoke = getPageContent(category, slug);
  const custom = getCustomSeoMetadata(category, slug);
  const filler = descriptionFiller(category);

  let title;
  let description;
  let source;

  if (custom) {
    title = brandTitle(custom.title);
    description = brandDescription(custom.description);
    source = 'override';
  } else if (bespoke) {
    const { core, modifier } = stripTitleNoise(bespoke.title);
    title = buildTitle(core, modifier);
    description = buildDescription(bespoke.metaDescription, filler);
    source = 'bespoke';
  } else {
    const { core, modifier } = stripTitleNoise(item.title);
    title = buildTitle(core, modifier);
    description = buildDescription(item.subtitle, filler);
    source = 'generated';
  }

  rows.push({ url: `/tools/${category}/${slug}`, title, description, source });
}

// Category hubs (included in rows so hubs are audited alongside tool pages)
const cats = [...new Set(items.map((i) => i.category))];
for (const category of cats) {
  const custom = getCustomSeoMetadata(category);
  const meta = CATEGORY_NAMES[category];
  const rawTitle = custom ? custom.title : (meta ? meta.title : `${category.replace(/-/g, ' ')} Calculators`);
  const rawDescription = custom
    ? custom.description
    : (meta ? meta.desc : `Free, instant client-side calculators for ${category.replace(/-/g, ' ')}.`);
  const { core, modifier } = stripTitleNoise(rawTitle);
  rows.push({
    url: `/tools/${category}`,
    title: buildTitle(core, modifier),
    description: buildDescription(rawDescription),
    source: 'hub',
  });
}

// URLs that 301 redirect to a canonical page are excluded - they are not
// indexed, so a shared title with the canonical page is expected.
const redirectSources = new Set(Object.keys(CANONICAL_REDIRECTS));
const indexedRows = rows.filter((r) => !redirectSources.has(r.url));
const redirectedRows = rows.filter((r) => redirectSources.has(r.url));

// Reports
const byTitle = new Map();
const byDesc = new Map();
for (const r of indexedRows) {
  if (!byTitle.has(r.title)) byTitle.set(r.title, []);
  byTitle.get(r.title).push(r.url);
  if (!byDesc.has(r.description)) byDesc.set(r.description, []);
  byDesc.get(r.description).push(r.url);
}

console.log(`\nAudited ${indexedRows.length} indexable URLs (${redirectedRows.length} redirect sources excluded).\n`);

console.log('=== DUPLICATE TITLES ===');
let dupT = 0;
for (const [t, urls] of byTitle) {
  if (urls.length > 1) {
    dupT++;
    console.log(`  "${t}"`);
    urls.forEach((u) => console.log(`      ${u}`));
  }
}
console.log(dupT === 0 ? '  none' : `  ${dupT} duplicate title groups`);

console.log('\n=== DUPLICATE DESCRIPTIONS ===');
let dupD = 0;
for (const [d, urls] of byDesc) {
  if (urls.length > 1) {
    dupD++;
    console.log(`  "${d.slice(0, 90)}..."`);
    urls.forEach((u) => console.log(`      ${u}`));
  }
}
console.log(dupD === 0 ? '  none' : `  ${dupD} duplicate description groups`);

console.log(`\n=== TITLE LENGTH ISSUES (>${TITLE_MAX} or <30 chars) ===`);
const titleIssues = indexedRows.filter((r) => r.title.length > TITLE_MAX || r.title.length < 30);
titleIssues.forEach((r) =>
  console.log(`  ${String(r.title.length).padStart(3)}  ${r.url}  "${r.title}"`)
);
console.log(titleIssues.length === 0 ? '  none' : `  ${titleIssues.length} issues`);

console.log(`\n=== DESCRIPTION LENGTH ISSUES (not 120-158) ===`);
const descIssues = indexedRows.filter((r) => r.description.length < 120 || r.description.length > DESC_MAX);
descIssues.forEach((r) => console.log(`  ${String(r.description.length).padStart(3)}  ${r.url}`));
console.log(descIssues.length === 0 ? '  none' : `  ${descIssues.length} issues`);

console.log('\n=== TITLES WITHOUT BRAND ===');
const noBrand = indexedRows.filter((r) => !/FeeKit/i.test(r.title));
noBrand.forEach((r) => console.log(`  ${r.url}  "${r.title}"`));
console.log(noBrand.length === 0 ? '  none' : `  ${noBrand.length} issues`);

console.log('\n=== SOURCE BREAKDOWN ===');
console.log(
  indexedRows.reduce((acc, r) => {
    acc[r.source] = (acc[r.source] || 0) + 1;
    return acc;
  }, {})
);

if (dupT > 0 || dupD > 0 || titleIssues.length > 0 || descIssues.length > 0 || noBrand.length > 0) {
  console.error('\n❌ SEO metadata audit FAILED.');
  process.exitCode = 1;
} else {
  console.log('\n✅ SEO metadata audit PASSED.');
}
