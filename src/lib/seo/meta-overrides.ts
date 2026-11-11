/**
 * ==============================================================================
 * FeeKit Hand-Written SEO Overrides
 * ==============================================================================
 * Only used for pages that are NOT covered by bespoke content and cannot be
 * generated from the tool matrix. Category hub metadata lives in
 * `src/lib/seo/category-names.ts` so there is a single source of truth per page.
 *
 * Rules for every entry in this file:
 *   - `title` must be at most 51 characters. The "| FeeKit" brand suffix is
 *     appended automatically, keeping the SERP title inside 60 characters so
 *     Google never truncates it.
 *   - `description` must be between 120 and 158 characters.
 *   - Every title and description must be unique across the site.
 * ==============================================================================
 */

export interface SeoMetaEntry {
  title: string;
  description: string;
}

export const TARGET_SEO_METADATA: Record<string, SeoMetaEntry> = {
  // 1. 1099 Self-Employment Tax Estimator
  //    (the /tools/freelance-rate-calculator hub targets "freelance rate
  //     calculator", so this page needs its own distinct SERP entry)
  'freelance-rate-calculator/1099-tax-estimator': {
    title: '1099 Tax Estimator: 15.3% SE Tax Calculator',
    description:
      'Estimate quarterly self-employment tax on every 1099 invoice. Calculates 15.3% SE tax, 15.3% effective rate after deductions and your 2026 set-aside.',
  },

  // 2. Canadian Provincial Sales Taxes (GST / HST / PST / QST)
  'canada-sales-tax/ontario': {
    title: 'Ontario Sales Tax Calculator: 13% HST',
    description:
      'Calculate Ontario 13% Harmonized Sales Tax. Add HST to net prices or reverse-calculate tax from gross invoices for CRA compliance in 2026.',
  },
  'canada-sales-tax/british-columbia': {
    title: 'BC Sales Tax Calculator: 12% GST + PST',
    description:
      'Calculate British Columbia sales tax with 5% federal GST and 7% provincial PST. Instant net-to-gross and gross-to-net reverse calculations for 2026.',
  },
  'canada-sales-tax/quebec': {
    title: 'Quebec Sales Tax Calculator: 14.975%',
    description:
      'Calculate Quebec sales tax with 5% federal GST and 9.975% QST. Price products and issue accurate 2026 invoices for Revenu Quebec compliance.',
  },
  'canada-sales-tax/alberta': {
    title: 'Alberta Sales Tax Calculator: 5% GST',
    description:
      'Calculate Alberta sales tax at the 5% federal GST rate. Alberta charges 0% provincial sales tax, so the GST is the full combined rate in 2026.',
  },

  // 3. Top GSC Impression & High-Intent International Gateway Queries
  'paypal-fee-calculator/uk': {
    title: 'PayPal UK Charges & Fee Calculator | 2.9% + 30p',
    description:
      'Calculate PayPal UK business charges for 2026: 2.9% + 30p domestic checkout, +1.29% EEA cross-border, +1.99% international fees and net GBP payouts.',
  },
  'stripe-fee-calculator/japan': {
    title: 'Stripe Japan Pricing & Fee Calculator | 3.6%',
    description:
      'Calculate Stripe Japan pricing and net JPY payouts for 2026: 3.6% flat card rate, zero Yen fixed fee, JCB support and +1.5% international surcharges.',
  },
  'vat-calculator/hungary': {
    title: 'Hungary VAT Calculator: 27%, 18% & 5% Rates',
    description:
      'Calculate 2026 Hungary VAT rates: 27% standard ÁFA rate, 18% and 5% reduced tiers, reverse VAT extraction and HUF invoice math for NAV compliance.',
  },
};

/**
 * Returns custom SEO metadata for a category and optional slug, or null if not registered.
 */
export function getCustomSeoMetadata(
  category: string,
  slug?: string
): SeoMetaEntry | null {
  if (slug) {
    const key = `${category}/${slug}`;
    return TARGET_SEO_METADATA[key] || null;
  }

  return TARGET_SEO_METADATA[category] || null;
}
