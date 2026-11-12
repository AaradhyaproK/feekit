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
 * Run: node src/scripts/generate-site-stats.mjs
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MATRIX_PATH = path.join(ROOT, 'src/data/geo-matrix.json');
const OUT_PATH = path.join(ROOT, 'src/data/site-stats.json');

const matrix = JSON.parse(fs.readFileSync(MATRIX_PATH, 'utf8'));
const items = Array.isArray(matrix) ? matrix : matrix.items || matrix.tools || [];

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

const stats = {
  toolCount: items.length,
  categoryCount: new Set(items.map((x) => x.category)).size,
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
  // 15 static + trust pages, + every category hub, + every tool page,
  // + 32 blog posts, + 4 comparison pages.
  sitemapUrlCount: 15 + new Set(items.map((x) => x.category)).size + items.length + 32 + 4,
};

fs.writeFileSync(OUT_PATH, `${JSON.stringify(stats, null, 2)}\n`);
console.log(
  `site-stats: ${stats.toolCount} tools, ${stats.categoryCount} categories, ${stats.sitemapUrlCount} sitemap URLs`
);
