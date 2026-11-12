/**
 * ==============================================================================
 * FeeKit Site Statistics - Single Source of Truth
 * ==============================================================================
 * The site previously claimed three different tool counts in different
 * places ("199+", "197", "195") plus wrong sub-counts, and got the blog
 * count and the profession count wrong as well. Every one of those is a
 * trust signal with Google AND a visible inconsistency for the reader.
 *
 * These figures are now DERIVED from the canonical matrix by
 * `src/scripts/generate-site-stats.mjs` and published as a tiny JSON file.
 *
 * The stats are deliberately NOT derived from `src/data/geo-matrix.json` at
 * runtime: that module is 250KB+ of rates, FAQs and sample tiers, and
 * importing it here would pull the entire matrix into the client bundle of
 * every page that displays a count.
 * ==============================================================================
 */

import stats from '@/data/site-stats.json';

/** Total number of programmatic calculator pages. */
export const TOOL_COUNT = stats.toolCount;

/** Number of distinct calculator suites (category hubs). */
export const CATEGORY_COUNT = stats.categoryCount;

/** Number of US states + DC with a sales tax calculator. */
export const SALES_TAX_COUNT = stats.salesTaxCount;

/** Number of countries with a VAT calculator. */
export const VAT_COUNT = stats.vatCount;

/** Number of Canadian provinces with a sales tax calculator. */
export const CANADA_TAX_COUNT = stats.canadaTaxCount;

/** Number of freelance roles with a rate calculator. */
export const FREELANCE_ROLE_COUNT = stats.freelanceRoleCount;

/** Number of ecommerce niches with a profit calculator. */
export const ECOMMERCE_NICHE_COUNT = stats.ecommerceNicheCount;

/** Number of Stripe calculators. */
export const STRIPE_COUNT = stats.stripeCount;

/** Number of PayPal calculators. */
export const PAYPAL_COUNT = stats.paypalCount;

/** Number of Square calculators. */
export const SQUARE_COUNT = stats.squareCount;

/** Number of Wise vs Stripe currency corridor calculators. */
export const WISE_COUNT = stats.wiseCount;

/** Number of Authorize.Net calculators. */
export const AUTHORIZENET_COUNT = stats.authorizeNetCount;

/** Number of Venmo Business calculators. */
export const VENMO_COUNT = stats.venmoCount;

/** Number of payment gateway suites. */
export const GATEWAY_CATEGORY_COUNT = stats.gatewayCategoryCount;

/**
 * Total number of calculators across every payment-gateway suite
 * (Stripe, PayPal, Square, Authorize.Net, Venmo, Gumroad, Lemon Squeezy,
 * Shopify Payments, Wise and the 3-way comparator).
 */
export const GATEWAY_TOOL_COUNT = stats.gatewayToolCount;

/** Human-readable tool count, e.g. "197". */
export const TOOL_COUNT_LABEL = String(TOOL_COUNT);

/** Human-readable tool count with the "plus" suffix, e.g. "197+". */
export const TOOL_COUNT_LABEL_PLUS = `${TOOL_COUNT}+`;

/** Number of indexable editorial blog guides. */
export const BLOG_COUNT = (stats as { blogCount?: number }).blogCount ?? 32;

/** Number of URLs in the XML sitemap. */
export const SITEMAP_URL_COUNT = stats.sitemapUrlCount;
