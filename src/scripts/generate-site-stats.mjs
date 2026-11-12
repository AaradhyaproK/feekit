/**
 * ==============================================================================
 * Generate the site statistics file
 * ==============================================================================
 * `src/lib/site-stats.ts` derives the tool counts shown across the site. If
 * that module imported `src/data/geo-matrix.json` directly, the WHOLE
 * matrix - every state's rate table, every FAQ, every sample tier - would
 * be pulled into the client bundle of every page that displays a count.
 *
 * This script computes the counts at build time and writes a tiny JSON file
 * that the client can import safely.
 *
 * The sitemap URL count is computed with the EXACT same rules the sitemap
 * generator uses (`isIndexableTool` + the canonical-redirect filter + the
 * static page registry), so the "N pages" claim in the footer and in
 * `public/robots.txt` cannot drift away from the real sitemap.
 *
 * Run: node --experimental-strip-types src/scripts/generate-site-stats.mjs
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MATRIX_PATH = path.join(ROOT, 'src/data/geo-matrix.json');
const OUT_PATH = path.join(ROOT, 'src/data/site-stats.json');
const BLOG_DIR = path.join(ROOT, 'content/blog');
const ROBOTS_PATH = path.join(ROOT, 'public/robots.txt');

const matrix = JSON.parse(fs.readFileSync(MATRIX_PATH, 'utf8'));
const items = Array.isArray(matrix) ? matrix : matrix.items || matrix.tools || [];

const { isIndexableTool, isIndexableArticle } = await import(
  '../lib/seo/indexing-policy.ts'
);
const { CANONICAL_REDIRECTS } = await import('../lib/seo/canonical-redirects.ts');
const { SITEMAP_STATIC_PAGES } = await import('../lib/seo/sitemap-pages.ts');
const { COMPARISONS_DATA } = await import('../data/comparisons.ts');

const count = (category) => items.filter((x) => x.category === category).length;

const GATEWAY_CATEGORIES = [
  'stripe-fee-calculator',
  'paypal-fee-calculator',
  'square-fee-calculator',
  'authorize-net-calculator',
  'venmo-fee-calculator',
  'gumroad-fee-calculator',
  'lemon-squeezy-calculator',
  'shopify-fee-calculator',
  'wise-vs-stripe',
  'gateway-comparator',
];

// ---------------------------------------------------------------------------
// Sitemap URL count - mirrors src/app/sitemap.ts exactly.
// ---------------------------------------------------------------------------
const categoryCount = new Set(items.map((x) => x.category)).size;

const indexableToolCount = items
  .filter((item) => isIndexableTool(item.category, item.slug))
  .filter((item) => !CANONICAL_REDIRECTS[`/tools/${item.category}/${item.slug}`])
  .length;

const indexableBlogCount = fs
  .readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
  .map((f) => f.replace(/\.mdx?$/, ''))
  .filter((slug) => isIndexableArticle(slug)).length;

const comparisonCount = Object.keys(COMPARISONS_DATA).length;

const sitemapUrlCount =
  SITEMAP_STATIC_PAGES.length +
  categoryCount +
  indexableToolCount +
  indexableBlogCount +
  comparisonCount;

const stats = {
  toolCount: items.length,
  categoryCount,
  salesTaxCount: count('sales-tax-calculator'),
  vatCount: count('vat-calculator'),
  canadaTaxCount: count('canada-sales-tax'),
  freelanceRoleCount: count('freelance-rate-calculator'),
  ecommerceNicheCount: count('ecommerce-profit-calculator'),
  stripeCount: count('stripe-fee-calculator'),
  paypalCount: count('paypal-fee-calculator'),
  squareCount: count('square-fee-calculator'),
  wiseCount: count('wise-vs-stripe'),
  authorizeNetCount: count('authorize-net-calculator'),
  venmoCount: count('venmo-fee-calculator'),
  gatewayCategoryCount: new Set(
    items.filter((x) => GATEWAY_CATEGORIES.includes(x.category)).map((x) => x.category)
  ).size,
  sitemapUrlCount,
};

fs.writeFileSync(OUT_PATH, `${JSON.stringify(stats, null, 2)}\n`);

// ---------------------------------------------------------------------------
// Keep the robots.txt comment in sync with the real sitemap size.
// ---------------------------------------------------------------------------
if (fs.existsSync(ROBOTS_PATH)) {
  const robots = fs.readFileSync(ROBOTS_PATH, 'utf8');
  const updated = robots.replace(
    /(containing all )\d+(\+ static pages)/,
    `$1${sitemapUrlCount}$2`
  );
  if (updated !== robots) {
    fs.writeFileSync(ROBOTS_PATH, updated);
  }
}

console.log(
  `site-stats: ${stats.toolCount} tools, ${stats.categoryCount} categories, ${sitemapUrlCount} sitemap URLs`
);
