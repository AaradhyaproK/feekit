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

  // 9. Stripe vs PayPal vs Square 3-Way Comparator
  'gateway-comparator/stripe-paypal-square': {
    title: 'Stripe vs PayPal vs Square Fee Calculator: 2026 Comparison',
    description:
      'Compare Stripe (2.9% + $0.30), PayPal (3.49% + $0.49), and Square in real time. See exact payout differences and discover the lowest fee processor.',
  },
  'gateway-comparator': {
    title: 'Stripe vs PayPal vs Square 3-Way Fee Comparator',
    description:
      'Side-by-side merchant fee calculator for online and POS card processing. Find out which payment gateway saves you the most money per transaction.',
  },

  // 10. Profit Margin & Markup Calculator
  'profit-margin-calculator/standard': {
    title: 'Profit Margin Calculator: Gross Margin %, Net Profit & Markup',
    description:
      'Free profit margin calculator. Calculate gross profit margin, net profit margin, and markup percentage from your revenue and cost of goods sold (COGS).',
  },
  'profit-margin-calculator': {
    title: 'Profit Margin & Markup Calculator | Free Online Business Tool',
    description:
      'Calculate gross profit margin, net profit, and markup multipliers. Understand your pricing structure and maximize your business profitability.',
  },

  // 11. Break-Even Point Calculator
  'break-even-calculator/standard': {
    title: 'Break-Even Point Calculator: Calculate Units & Sales Revenue',
    description:
      'Calculate your exact break-even point in units and sales volume. Enter fixed costs, unit price, and variable costs to determine profitability.',
  },
  'break-even-calculator': {
    title: 'Break-Even Calculator | Units, Revenue & Contribution Margin',
    description:
      'Calculate break-even units and sales revenue needed to cover fixed overhead. Free, instant, and private business planning calculator.',
  },

  // 12. ROI & Annualized CAGR Calculator
  'roi-calculator/standard': {
    title: 'ROI Calculator: Return on Investment & Annualized CAGR %',
    description:
      'Calculate total return on investment (ROI) percentage, annualized CAGR return, and investment multiple. Fast, accurate, and free.',
  },
  'roi-calculator': {
    title: 'ROI Calculator | Return on Investment & Annualized Returns',
    description:
      'Calculate ROI percentage, net profit, and annualized return for business, marketing, real estate, and capital investments.',
  },

  // 13. IRS Form 1040-ES Quarterly Tax Calculator
  'quarterly-tax-calculator/1040-es': {
    title: 'Quarterly Estimated Tax Calculator 2026: IRS Form 1040-ES',
    description:
      'Calculate 2026 IRS quarterly estimated taxes for 1099 freelancers and self-employed businesses. Computes 15.3% SE tax and 4 payment vouchers.',
  },
  'quarterly-tax-calculator': {
    title: 'Quarterly Estimated Tax Calculator | IRS 1040-ES Vouchers',
    description:
      'Estimate quarterly self-employment taxes and statutory payment amounts. Avoid IRS underpayment penalties with accurate Schedule SE estimates.',
  },

  // 14. UK IR35 Calculator
  'uk-ir35-calculator/contractor': {
    title: 'UK IR35 Calculator 2026: Inside vs Outside IR35 Take-Home',
    description:
      'Compare Inside vs Outside IR35 take-home pay for UK contractors. Calculates Employer NI, Apprenticeship Levy, PAYE tax, and dividend income.',
  },
  'uk-ir35-calculator': {
    title: 'UK IR35 Calculator 2026 | Inside vs Outside Contractor Pay',
    description:
      'Accurate HMRC IR35 contractor take-home calculator. Discover your exact net monthly pay difference between an umbrella and a limited company.',
  },

  // 15. Venmo Business Fee Calculator
  'venmo-fee-calculator/standard': {
    title: 'Venmo Business Fee Calculator: 1.9% QR & 2.29% App Rates',
    description:
      'Calculate Venmo for Business transaction fees. See exact deductions for 1.9% + $0.10 contactless QR codes and 2.29% + $0.10 app checkout.',
  },
  'venmo-fee-calculator': {
    title: 'Venmo Business Fee Calculator | 2026 Processing Rates',
    description:
      'Calculate merchant fees for Venmo business profiles. Discover net payouts and learn how much to charge clients to cover fees.',
  },

  // 16. Gumroad Fee Calculator
  'gumroad-fee-calculator/standard': {
    title: 'Gumroad Fee Calculator: Net Creator Payout After 10% Cut',
    description:
      'Calculate net creator earnings on Gumroad. Computes the flat 10% platform fee and ~2.9% + $0.30 credit card processing charge.',
  },
  'gumroad-fee-calculator': {
    title: 'Gumroad Fee Calculator | Creator Payouts & Platform Cut',
    description:
      'Discover how much Gumroad takes from each digital product sale. Calculate exact net payouts for e-books, courses, and digital files.',
  },

  // 17. Lemon Squeezy Fee Calculator
  'lemon-squeezy-calculator/standard': {
    title: 'Lemon Squeezy Fee Calculator: 5% MoR SaaS Payout',
    description:
      'Calculate net payouts with Lemon Squeezy Merchant of Record (MoR). Computes the 5% + $0.50 platform fee for SaaS and digital software.',
  },
  'lemon-squeezy-calculator': {
    title: 'Lemon Squeezy Fee Calculator | MoR SaaS & Digital Payouts',
    description:
      'Calculate Merchant of Record fees for SaaS and digital creators. Compare Lemon Squeezy 5% + $0.50 against direct payment processing.',
  },

  // 18. Shopify Payments Fee Calculator
  'shopify-fee-calculator/standard': {
    title: 'Shopify Payments Fee Calculator: Basic 2.9% vs Advanced',
    description:
      'Calculate credit card transaction fees for Shopify stores. Compares Basic (2.9% + $0.30), Shopify (2.6%), and third-party gateway penalty fees.',
  },
  'shopify-fee-calculator': {
    title: 'Shopify Payments Fee Calculator | 2026 Merchant Rates',
    description:
      'Calculate Shopify transaction fees across all plan tiers. Learn whether upgrading your Shopify plan saves you money on credit card fees.',
  },

  // 19. Canadian Provincial Sales Taxes (GST / HST / PST)
  'canada-sales-tax/ontario': {
    title: 'Ontario Sales Tax Calculator: 13% HST & CRA Small Supplier',
    description:
      'Calculate Ontario 13% Harmonized Sales Tax (HST). Add HST to net prices or reverse-calculate tax from gross invoices for CRA compliance.',
  },
  'canada-sales-tax/british-columbia': {
    title: 'BC Sales Tax Calculator: 12% Combined GST (5%) + PST (7%)',
    description:
      'Calculate British Columbia sales tax with 5% federal GST and 7% provincial PST. Instant net-to-gross and gross-to-net reverse calculations.',
  },
  'canada-sales-tax/quebec': {
    title: 'Quebec Sales Tax Calculator: 14.975% GST (5%) + QST (9.975%)',
    description:
      'Calculate Quebec sales tax with 5% federal GST and 9.975% QST. Accurately invoice customers and ensure Revenu Québec compliance.',
  },
  'canada-sales-tax/alberta': {
    title: 'Alberta Sales Tax Calculator: 5% GST (Zero Provincial Tax)',
    description:
      'Calculate Alberta sales tax at the statutory 5% federal GST rate. Alberta has 0% provincial sales tax. Get instant invoice calculations.',
  },
  'canada-sales-tax': {
    title: 'Canada Sales Tax Calculator: GST, HST & PST for 10 Provinces',
    description:
      'Calculate sales tax across all 10 Canadian provinces and territories. Handles 13%–15% HST, 5% GST, and provincial PST/QST with CRA compliance.',
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
    return null;
  }

  if (TARGET_SEO_METADATA[category]) {
    return TARGET_SEO_METADATA[category];
  }

  return null;
}
