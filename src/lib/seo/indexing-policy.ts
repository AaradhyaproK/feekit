/**
 * Central Indexing Policy & Quality Whitelist for FeeKit
 * Single source of truth for sitemap.xml and robots meta tags.
 * Prunes thin/templated programmatic URLs from Google indexing to guarantee high quality.
 */

export const TOP_15_STATES = new Set([
  'california',
  'texas',
  'new-york',
  'florida',
  'illinois',
  'pennsylvania',
  'ohio',
  'georgia',
  'north-carolina',
  'michigan',
  'new-jersey',
  'virginia',
  'washington',
  'arizona',
  'massachusetts',
]);

export const TOP_10_FREELANCE_ROLES = new Set([
  'software-engineer',
  'fullstack-developer',
  'frontend-developer',
  'backend-developer',
  'ai-engineer',
  'devops-engineer',
  'ui-ux-designer',
  'product-manager',
  'technical-writer',
  'seo-specialist',
]);

export const TOP_VAT_COUNTRIES = new Set([
  'united-kingdom',
  'germany',
  'france',
  'ireland',
  'australia',
  'canada',
]);

export const TOP_ECOMMERCE_NICHES = new Set([
  'amazon-fba',
  'shopify-store',
  'digital-products',
  'dropshipping',
  'print-on-demand',
]);

export const TOP_CANADA_PROVINCES = new Set([
  'ontario',
  'quebec',
  'british-columbia',
]);

export const TOP_20_ARTICLES = new Set([
  'paypal-goods-and-services-fee-guide-2026',
  'stripe-vs-paypal-fees-2026',
  'square-vs-stripe-fees-2026',
  'stripe-hidden-fees-2026',
  'shopify-payments-vs-stripe-fees-2026',
  'wise-vs-stripe-fees-2026',
  'venmo-business-vs-paypal-2026',
  'gumroad-vs-lemon-squeezy-fees-2026',
  'authorize-net-vs-stripe-fees-2026',
  'ach-vs-wire-vs-credit-card-fees-guide',
  'interchange-plus-pricing-vs-flat-rate-merchant-guide',
  'how-to-pass-credit-card-fees-to-customers-legally',
  'us-sales-tax-economic-nexus-guide',
  'uk-vat-guide-freelancers-merchants',
  '1099-vs-w2-tax-rate-freelance-guide',
  'quarterly-estimated-tax-deadlines-calculator-2026',
  'freelance-hourly-rate-formula-guide',
  'how-much-100k-freelancer-actually-makes-2026',
  'llc-vs-scorp-freelance-tax-guide',
  'shopify-vs-amazon-fba-fees-2026',
]);

/**
 * Returns true if a tool page meets the high-value content threshold for search indexing.
 * Non-whitelisted programmatic pages return false (and should receive noindex, follow).
 */
export function isIndexableTool(category: string, slug: string): boolean {
  if (category === 'sales-tax-calculator') {
    return TOP_15_STATES.has(slug);
  }

  if (category === 'freelance-rate-calculator') {
    return TOP_10_FREELANCE_ROLES.has(slug);
  }

  if (category === 'vat-calculator') {
    return TOP_VAT_COUNTRIES.has(slug);
  }

  if (category === 'ecommerce-profit-calculator') {
    return TOP_ECOMMERCE_NICHES.has(slug);
  }

  if (category === 'canada-sales-tax') {
    return TOP_CANADA_PROVINCES.has(slug);
  }

  if (category === 'wise-vs-stripe') {
    return slug === 'usa' || slug === 'uk' || slug === 'europe';
  }

  // Core gateway and individual tools are all indexable
  return true;
}

export function isIndexableArticle(slug: string): boolean {
  return TOP_20_ARTICLES.has(slug);
}
