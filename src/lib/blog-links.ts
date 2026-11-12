import blogManifest from '@/data/blog-manifest.json';

/**
 * Internal-link map from programmatic tool categories to the FeeKit blog
 * posts that genuinely answer the same question.
 *
 * Every tool page is a money page: it ranks for a fee/tax calculation
 * intent. Linking the matching long-form guide passes topical authority
 * from the guide cluster back into the calculator and gives readers a
 * deeper explanation of the numbers the calculator produces.
 *
 * Only posts whose subject matter genuinely matches the category are
 * listed here - a reader who lands on a VAT calculator should not be
 * offered a guide about POS hardware.
 */
export const CATEGORY_BLOG_SLUGS: Record<string, string[]> = {
  'sales-tax-calculator': [
    'us-sales-tax-economic-nexus-guide',
    'how-to-create-an-invoice-for-freelance-work',
    'invoice-vs-receipt',
  ],
  'canada-sales-tax': [
    'canada-gst-hst-pst-rates-guide-2026',
    'us-sales-tax-economic-nexus-guide',
    'how-to-create-an-invoice-for-freelance-work',
  ],
  'vat-calculator': [
    'uk-vat-guide-freelancers-merchants',
    'eu-vat-oss-reverse-charge-rates-guide-2026',
    'gumroad-vs-lemon-squeezy-fees-2026',
    'how-to-create-an-invoice-for-freelance-work',
  ],
  'stripe-fee-calculator': [
    'stripe-vs-paypal-fees-2026',
    'stripe-hidden-fees-2026',
    'stripe-international-uk-eu-japan-fees-guide-2026',
    'paypal-goods-and-services-fee-guide-2026',
  ],
  'paypal-fee-calculator': [
    'paypal-goods-and-services-fee-guide-2026',
    'stripe-vs-paypal-fees-2026',
    'venmo-business-vs-paypal-2026',
  ],
  'square-fee-calculator': [
    'square-vs-stripe-fees-2026',
    'venmo-business-vs-paypal-2026',
    'stripe-vs-paypal-fees-2026',
  ],
  'venmo-fee-calculator': [
    'venmo-business-vs-paypal-2026',
    'paypal-goods-and-services-fee-guide-2026',
    'square-vs-stripe-fees-2026',
  ],
  'gumroad-fee-calculator': [
    'gumroad-vs-lemon-squeezy-fees-2026',
    'saas-profit-margin-benchmarks-guide',
    'etsy-vs-shopify-fees-2026',
  ],
  'lemon-squeezy-calculator': [
    'gumroad-vs-lemon-squeezy-fees-2026',
    'saas-profit-margin-benchmarks-guide',
  ],
  'shopify-fee-calculator': [
    'shopify-payments-vs-stripe-fees-2026',
    'shopify-vs-amazon-fba-fees-2026',
    'etsy-vs-shopify-fees-2026',
  ],
  'authorize-net-calculator': [
    'authorize-net-vs-stripe-fees-2026',
    'interchange-plus-pricing-vs-flat-rate-merchant-guide',
    'stripe-hidden-fees-2026',
  ],
  'wise-vs-stripe': [
    'wise-vs-stripe-fees-2026',
    'stripe-international-uk-eu-japan-fees-guide-2026',
    'stripe-vs-paypal-fees-2026',
  ],
  'gateway-comparator': [
    'stripe-vs-paypal-fees-2026',
    'square-vs-stripe-fees-2026',
    'venmo-business-vs-paypal-2026',
    'wise-vs-stripe-fees-2026',
  ],
  'ecommerce-profit-calculator': [
    'break-even-roas-contribution-margin-ecommerce-guide-2026',
    'shopify-vs-amazon-fba-fees-2026',
    'etsy-vs-shopify-fees-2026',
    'gumroad-vs-lemon-squeezy-fees-2026',
  ],
  'freelance-rate-calculator': [
    'freelance-hourly-rate-formula-guide',
    'how-much-100k-freelancer-actually-makes-2026',
    'llc-vs-scorp-freelance-tax-guide',
  ],
  'profit-margin-calculator': [
    'break-even-roas-contribution-margin-ecommerce-guide-2026',
    'service-business-profit-margin',
    'saas-profit-margin-benchmarks-guide',
  ],
  'break-even-calculator': [
    'break-even-roas-contribution-margin-ecommerce-guide-2026',
    'service-business-profit-margin',
    'saas-profit-margin-benchmarks-guide',
  ],
  'roi-calculator': [
    'break-even-roas-contribution-margin-ecommerce-guide-2026',
    'saas-profit-margin-benchmarks-guide',
    'service-business-profit-margin',
  ],
  'quarterly-tax-calculator': [
    'quarterly-estimated-tax-deadlines-calculator-2026',
    'llc-vs-scorp-freelance-tax-guide',
    '1099-vs-w2-tax-rate-freelance-guide',
  ],
  'uk-ir35-calculator': [
    'uk-ir35-inside-vs-outside-take-home-pay-guide-2026',
    'uk-vat-guide-freelancers-merchants',
    'freelance-hourly-rate-formula-guide',
  ],
};

export interface RelatedBlogPost {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: string;
}

const MANIFEST_BY_SLUG = new Map(blogManifest.map((post) => [post.slug, post]));

/**
 * Returns the blog posts linked from a given tool category.
 * Unknown categories return an empty list rather than throwing, so a new
 * programmatic category can never break the build.
 */
export function getRelatedBlogPosts(category: string): RelatedBlogPost[] {
  const slugs = CATEGORY_BLOG_SLUGS[category];
  if (!slugs) return [];

  const posts: RelatedBlogPost[] = [];
  for (const slug of slugs) {
    const entry = MANIFEST_BY_SLUG.get(slug);
    if (!entry) continue;
    posts.push({
      slug: entry.slug,
      href: `/blog/${entry.slug}`,
      title: entry.title,
      description: entry.description,
      category: entry.category,
    });
  }
  return posts;
}

/**
 * Blog posts linked from the accounting software comparison pages.
 */
export const COMPARISON_BLOG_SLUGS: string[] = [
  'accounting-software-vs-spreadsheet',
  'small-business-bookkeeping-basics',
  'how-to-create-an-invoice-for-freelance-work',
];

export function getComparisonBlogPosts(): RelatedBlogPost[] {
  const posts: RelatedBlogPost[] = [];
  for (const slug of COMPARISON_BLOG_SLUGS) {
    const entry = MANIFEST_BY_SLUG.get(slug);
    if (!entry) continue;
    posts.push({
      slug: entry.slug,
      href: `/blog/${entry.slug}`,
      title: entry.title,
      description: entry.description,
      category: entry.category,
    });
  }
  return posts;
}
