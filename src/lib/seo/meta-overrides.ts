export interface SeoMetaEntry {
  title: string;
  description: string;
}

export const TARGET_SEO_METADATA: Record<string, SeoMetaEntry> = {
  // 1. California Sales Tax Calculator
  'sales-tax-calculator/california': {
    title: 'California Sales Tax Calculator: 7.25% to 10.75%',
    description:
      'Calculate exact California sales tax with 7.25% state rate and local surtaxes up to 10.75%. Get instant net-to-gross totals for CDTFA filing.',
  },

  // 2. Texas Sales Tax Calculator
  'sales-tax-calculator/texas': {
    title: 'Texas Sales Tax Calculator | 6.25% to 8.25% Rates',
    description:
      'Calculate Texas sales tax instantly. Combines the 6.25% state rate with local surtaxes up to 8.25% so you invoice customers with complete accuracy.',
  },

  // 3. New York Sales Tax Calculator
  'sales-tax-calculator/new-york': {
    title: 'New York Sales Tax Calculator | 4% to 8.875% NYC',
    description:
      'Calculate New York sales tax with the 4% state rate and NYC rate of 8.875%. Get exact invoice totals instantly and avoid state compliance penalties.',
  },

  // 4. Stripe Fee Calculator USA
  'stripe-fee-calculator/usa': {
    title: 'Stripe Fee Calculator USA | 2.9% + $0.30 Rates',
    description:
      'Calculate standard US Stripe merchant fees (2.9% + $0.30). Discover your exact net payout or reverse-calculate invoices to keep 100% of your earnings.',
  },
  'stripe-fee-calculator': {
    title: 'Stripe Fee Calculator USA | 2.9% + $0.30 Rates',
    description:
      'Calculate standard US Stripe merchant fees (2.9% + $0.30). Discover your exact net payout or reverse-calculate invoices to keep 100% of your earnings.',
  },

  // 5. UK VAT Calculator
  'vat-calculator/united-kingdom': {
    title: 'UK VAT Calculator | 20% Standard & 5% Reduced',
    description:
      'Calculate UK VAT instantly using 20% standard or 5% reduced rates. Add or extract VAT with one click to keep your HMRC quarterly returns 100% accurate.',
  },
  'vat-calculator': {
    title: 'UK VAT Calculator | 20% Standard & 5% Reduced',
    description:
      'Calculate UK VAT instantly using 20% standard or 5% reduced rates. Add or extract VAT with one click to keep your HMRC quarterly returns 100% accurate.',
  },

  // 6. PayPal Fee Calculator USA
  'paypal-fee-calculator/usa': {
    title: 'PayPal Fee Calculator USA | 3.49% + $0.49 Fees',
    description:
      'Calculate US PayPal merchant fees at 3.49% + $0.49. Find your exact net take-home or see how much to charge clients so you never lose margin on fees.',
  },
  'paypal-fee-calculator': {
    title: 'PayPal Fee Calculator USA | 3.49% + $0.49 Fees',
    description:
      'Calculate US PayPal merchant fees at 3.49% + $0.49. Find your exact net take-home or see how much to charge clients so you never lose margin on fees.',
  },

  // 7. 1099 Tax Estimator
  'freelance-rate-calculator/1099-tax-estimator': {
    title: '1099 Tax Estimator | Calculate 15.3% SE Tax',
    description:
      'Estimate quarterly self-employment taxes with the 15.3% SE tax rate. Know exactly how much to set aside from every invoice and avoid IRS penalty fees.',
  },
  'freelance-rate-calculator': {
    title: '1099 Tax Estimator | Calculate 15.3% SE Tax',
    description:
      'Estimate quarterly self-employment taxes with the 15.3% SE tax rate. Know exactly how much to set aside from every invoice and avoid IRS penalty fees.',
  },

  // 8. Amazon FBA Fee Calculator
  'ecommerce-profit-calculator/amazon-fba-fee-calculator': {
    title: 'Amazon FBA Fee Calculator | 2026 Rates & Profit',
    description:
      'Calculate 2026 Amazon FBA fulfillment and 15% referral fees. See your exact net profit per unit and break-even ROAS to protect your e-commerce margins.',
  },
  'ecommerce-profit-calculator/amazon-fba-private-label': {
    title: 'Amazon FBA Fee Calculator | 2026 Rates & Profit',
    description:
      'Calculate 2026 Amazon FBA fulfillment and 15% referral fees. See your exact net profit per unit and break-even ROAS to protect your e-commerce margins.',
  },
  'ecommerce-profit-calculator/amazon-fba-arbitrage': {
    title: 'Amazon FBA Fee Calculator | 2026 Rates & Profit',
    description:
      'Calculate 2026 Amazon FBA fulfillment and 15% referral fees. See your exact net profit per unit and break-even ROAS to protect your e-commerce margins.',
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
    if (TARGET_SEO_METADATA[key]) {
      return TARGET_SEO_METADATA[key];
    }
  }

  if (TARGET_SEO_METADATA[category]) {
    return TARGET_SEO_METADATA[category];
  }

  return null;
}
