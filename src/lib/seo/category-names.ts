/**
 * Canonical category hub metadata.
 *
 * Single source of truth shared by the category page renderer, the metadata
 * generator and the SEO auditor.
 *
 * `title` is keyword-front-loaded so the hub can compete for head terms such as
 * "sales tax calculator", "stripe fees calculator" and "paypal fees". Keep every
 * title at or below 51 characters - the "| FeeKit" brand suffix is appended by
 * the metadata engine and the total must stay inside the 60-character SERP
 * budget so Google never truncates it.
 *
 * `desc` must stay inside 120-158 characters so the snippet is not cut off.
 */

export interface CategoryMeta {
  title: string;
  desc: string;
  defaultSlug: string;
}

export const CATEGORY_NAMES: Record<string, CategoryMeta> = {
  'sales-tax-calculator': {
    title: 'Sales Tax Calculators for All 50 US States',
    desc: 'Free sales tax calculator for every US state and DC. Get 2026 state base rates, county surtaxes, net-to-gross totals and nexus thresholds instantly.',
    defaultSlug: 'california',
  },
  'vat-calculator': {
    title: 'VAT Calculators: UK, EU & Canada Rates',
    desc: 'Free VAT calculator for the UK, EU, Canada and Australia. Add or extract VAT at 2026 standard and reduced rates for accurate HMRC filings and invoices.',
    defaultSlug: 'united-kingdom',
  },
  'stripe-fee-calculator': {
    title: 'Stripe Fee Calculators: Rates by Country',
    desc: 'Free Stripe fee calculator for the US, UK, EU, Canada and Australia. See exact 2026 fees, net payouts and what to charge to net a set amount.',
    defaultSlug: 'usa',
  },
  'paypal-fee-calculator': {
    title: 'PayPal Fee Calculators: US, UK & Intl',
    desc: 'Free PayPal fee calculator for commercial, goods and services, QR code, invoice and micropayment rates. See 2026 fees and exact net payouts instantly.',
    defaultSlug: 'usa',
  },
  'freelance-rate-calculator': {
    title: 'Freelance Rate Calculators for 37 Roles',
    desc: 'Free freelance rate calculator for 37 roles. Model 1099 self-employment tax, hourly and day rates, and the real take-home on every invoice in 2026.',
    defaultSlug: 'software-engineer',
  },
  'ecommerce-profit-calculator': {
    title: 'Ecommerce Profit Calculators: Margin & ROAS',
    desc: 'Free ecommerce profit calculator for Amazon FBA, Shopify, Etsy and eBay. Model COGS, fees, ad spend and break-even ROAS to protect your 2026 margins.',
    defaultSlug: 'shopify-dropshipping',
  },
  'square-fee-calculator': {
    title: 'Square Fee Calculators: POS & Online',
    desc: 'Free Square fee calculator for in-person POS, keyed-in and online checkout. Compare 2026 Square, Stripe and PayPal fees on the same transaction instantly.',
    defaultSlug: 'usa',
  },
  'wise-vs-stripe': {
    title: 'Wise vs Stripe Fee Comparison Calculators',
    desc: 'Compare Wise and Stripe fees for 8 currency pairs. See the mid-market rate, the hidden FX spread and the cheapest way to pay international contractors.',
    defaultSlug: 'usd-to-eur',
  },
  'authorize-net-calculator': {
    title: 'Authorize.Net Fee Calculators & Pricing',
    desc: 'Free Authorize.Net fee calculator for all-in-one, gateway-only and eCheck pricing. See 2026 monthly fees, per-transaction costs and net payouts.',
    defaultSlug: 'standard-merchant',
  },
  'canada-sales-tax': {
    title: 'Canada Sales Tax Calculators: GST, HST & PST',
    desc: 'Free Canada sales tax calculator for all 10 provinces. Add or extract GST, HST, PST and QST at 2026 rates and stay CRA compliant on every invoice.',
    defaultSlug: 'ontario',
  },
  'venmo-fee-calculator': {
    title: 'Venmo Business Fee Calculators',
    desc: 'Free Venmo for Business fee calculator. See 2026 QR code and app checkout rates, exact deductions and the net amount deposited to your bank.',
    defaultSlug: 'standard',
  },
  'gumroad-fee-calculator': {
    title: 'Gumroad Fee Calculators for Creators',
    desc: 'Free Gumroad fee calculator for digital creators. See the 10% platform fee, card processing and your exact net payout on every 2026 sale.',
    defaultSlug: 'standard',
  },
  'lemon-squeezy-calculator': {
    title: 'Lemon Squeezy Fee Calculators (MoR)',
    desc: 'Free Lemon Squeezy fee calculator for SaaS and digital products. See the 5% + $0.50 Merchant of Record fee and your exact net payout.',
    defaultSlug: 'standard',
  },
  'shopify-fee-calculator': {
    title: 'Shopify Payments Fee Calculators',
    desc: 'Free Shopify Payments fee calculator. Compare Basic 2.9%, Shopify 2.6% and third-party gateway penalties to find the cheapest 2026 plan tier.',
    defaultSlug: 'standard',
  },
  'profit-margin-calculator': {
    title: 'Profit Margin & Markup Calculators',
    desc: 'Free profit margin calculator. Work out gross margin, net margin and markup percentage from revenue and COGS, then price every product with confidence.',
    defaultSlug: 'standard',
  },
  'break-even-calculator': {
    title: 'Break-Even Point Calculators',
    desc: 'Free break-even calculator. Find the units and revenue you need to cover fixed costs and variable costs, plus the contribution margin on each sale.',
    defaultSlug: 'standard',
  },
  'roi-calculator': {
    title: 'Return on Investment (ROI) Calculators',
    desc: 'Free ROI calculator for business, marketing, real estate and capital investments. See total return, net gain, annualized CAGR and the investment multiple.',
    defaultSlug: 'standard',
  },
  'quarterly-tax-calculator': {
    title: 'IRS 1040-ES Quarterly Tax Calculators',
    desc: 'Free quarterly estimated tax calculator for 2026. Computes 15.3% Schedule SE self-employment tax and the four IRS Form 1040-ES payment amounts.',
    defaultSlug: '1040-es',
  },
  'uk-ir35-calculator': {
    title: 'UK IR35 Contractor Calculators',
    desc: 'Free UK IR35 calculator. Compare Inside and Outside IR35 take-home pay including Employer NI, the Apprenticeship Levy, PAYE and dividends.',
    defaultSlug: 'contractor',
  },
  'gateway-comparator': {
    title: 'Stripe vs PayPal vs Square Fee Comparison',
    desc: 'Compare Stripe, PayPal, Square, Wise, Authorize.Net and Venmo fees side by side on the same transaction and find the lowest fee processor in 2026.',
    defaultSlug: 'stripe-paypal-square',
  },
};
