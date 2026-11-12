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
  /**
   * Optional intro copy for the hub page. The hubs for single-tool
   * categories were previously 266-300 words of body copy - too thin to
   * compete for the head term they target ("roi calculator",
   * "break even calculator"). Each hub now carries 150-250 words of
   * category-specific prose that no other page on the site repeats.
   */
  intro?: string;
  /**
   * Optional bullet list rendered under the intro. Used to add scannable,
   * entity-rich content to the hubs without padding the word count.
   */
  highlights?: string[];
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
    title: 'PayPal Business Fee Calculators (2026 Rates)',
    desc: 'Free PayPal business fee calculator for commercial, goods & services, UK 2.9% + 30p, QR and invoice fees. Calculate exact 2026 charges and net payouts.',
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
    defaultSlug: 'online-store',
  },
  'wise-vs-stripe': {
    title: 'Wise vs Stripe Fee Comparison Calculators',
    desc: 'Compare Wise and Stripe fees for 8 currency pairs. See the mid-market rate, the hidden FX spread and the cheapest way to pay international contractors.',
    defaultSlug: 'usd-to-eur',
  },
  'gateway-comparator': {
    title: 'Stripe vs PayPal vs Square Fee Comparison',
    desc: 'Compare Stripe, PayPal, Square, Wise, Authorize.Net and Venmo fees side by side on the same transaction and find the lowest fee processor in 2026.',
    defaultSlug: 'stripe-paypal-square',
    intro:
      'Every processor publishes a rate card, but rate cards are not comparable on their own. The percentage looks like the whole story until you notice the fixed fee, the international card surcharge and the currency conversion spread all sit underneath it. The only way to know which processor is cheapest for your business is to apply all of them to the same transaction.',
    highlights: [
      'Applies the full rate card - percentage, fixed fee, international surcharge and FX spread - not just the headline rate.',
      'Models low, mid and high ticket sizes so you can see where the fixed fee stops dominating.',
      'Includes Stripe, PayPal, Square, Venmo Business, Wise and Authorize.Net in one comparison.',
    ],
  },
  'roi-calculator': {
    title: 'Return on Investment (ROI) Calculators',
    desc: 'Free ROI calculator for business, marketing, real estate and capital investments. See total return, net gain, annualized CAGR and the investment multiple.',
    defaultSlug: 'standard',
    intro:
      'ROI is the first number anyone asks about after an investment, and it is also the number most often reported without the context that makes it meaningful. A 120% return over five years is a far weaker outcome than an 80% return over six months. The calculator therefore reports the total return, the net gain, the investment multiple and the annualized compound return side by side, so the timeframe is always visible.',
    highlights: [
      'Total ROI, net gain, investment multiple and annualized CAGR from one set of inputs.',
      'Accepts any cash flow profile - a single lump sum or a series of dated cash flows.',
      'Ships with practical benchmarks for marketing spend, equipment and hiring decisions.',
    ],
  },
  'break-even-calculator': {
    title: 'Break-Even Point Calculators',
    desc: 'Free break-even calculator. Find the units and revenue you need to cover fixed costs and variable costs, plus the contribution margin on each sale.',
    defaultSlug: 'standard',
    intro:
      'Break-even is the smallest version of your business that does not lose money, and it is the most useful number for deciding whether to take on a project, hire someone, or sign a lease. The critical step is splitting costs correctly: fixed costs are incurred whether or not you sell anything, while variable costs scale with every unit. Misclassifying a variable cost as fixed is the single most common modelling error, and it makes break-even look far more reachable than it really is.',
    highlights: [
      'Break-even in units, in revenue and as a percentage of capacity.',
      'Contribution margin per unit and as a percentage, with the fixed-cost total shown alongside.',
      'Break-even ROAS for paid acquisition, derived from the same contribution margin.',
    ],
  },
  'profit-margin-calculator': {
    title: 'Profit Margin & Markup Calculators',
    desc: 'Free profit margin calculator. Work out gross margin, net margin and markup percentage from revenue and COGS, then price every product with confidence.',
    defaultSlug: 'standard',
    intro:
      'Margin and markup are calculated on different bases and are routinely confused. A product with a $20 cost sold for $40 is a 100% markup and a 50% margin - the same outcome described two ways. Getting this wrong is one of the most common reasons a business that looks profitable on a spreadsheet loses money in the bank. The calculator separates gross margin from net margin, shows the true profit after every variable cost, and converts a target margin directly into the price you need to charge.',
    highlights: [
      'Gross margin, net margin, markup percentage and break-even price from the same inputs.',
      'Reverse pricing: enter a target margin and get the price that delivers it.',
      'Shows how much of a sale is consumed by fees, fulfilment and ad spend before profit appears.',
    ],
  },
  'quarterly-tax-calculator': {
    title: 'IRS 1040-ES Quarterly Tax Calculators',
    desc: 'Free quarterly estimated tax calculator for 2026. Computes 15.3% Schedule SE self-employment tax and the four IRS Form 1040-ES payment amounts.',
    defaultSlug: '1040-es',
    intro:
      'Quarterly estimated tax is the single largest cash-flow surprise for a new 1099 contractor. Income arrives irregularly, but tax is due on fixed calendar dates whether or not an invoice has been paid. The calculator applies the Schedule SE self-employment tax rules to your projected profit, splits the result across the four Form 1040-ES vouchers, and checks your payments against the IRS safe-harbour thresholds so you can see whether a penalty is possible before the year is over.',
    highlights: [
      'Schedule SE self-employment tax at the 2026 15.3% rate with the Social Security wage cap applied.',
      'The four Form 1040-ES amounts with the correct 15 April, 15 June, 15 September and 15 January deadlines.',
      'A safe-harbour check against 90% of current-year tax and 100% of prior-year tax.',
    ],
  },
  'uk-ir35-calculator': {
    title: 'UK IR35 Contractor Calculators',
    desc: 'Free UK IR35 calculator. Compare Inside and Outside IR35 take-home pay including Employer NI, the Apprenticeship Levy, PAYE and dividends.',
    defaultSlug: 'contractor',
    intro:
      'IR35 decides whether a contractor is taxed as self-employed or as an employee, and the difference in take-home pay is frequently thousands of pounds a year. Working through a limited company on an Inside IR35 contract means PAYE and National Insurance are deducted from every invoice before you are paid. Working Outside IR35 keeps the contractor status and lets the company retain profits before dividends are extracted. The calculator models both outcomes from the same day rate so the gap is explicit rather than theoretical.',
    highlights: [
      'Inside IR35 take-home with PAYE and Employee Class 1 National Insurance deducted.',
      'Outside IR35 take-home after corporation tax, salary and dividends.',
      'Applies 2026/27 thresholds and rates to both scenarios for a like-for-like comparison.',
    ],
  },
  'venmo-fee-calculator': {
    title: 'Venmo Business Fee Calculators',
    desc: 'Free Venmo for Business fee calculator. See 2026 QR code and app checkout rates, exact deductions and the net amount deposited to your bank.',
    defaultSlug: 'standard',
    intro:
      'Venmo Business has quietly become the cheapest mainstream way for a US merchant to accept a card in person. The QR rate of 1.90% + $0.10 is lower than any major processor percentage, because the customer scans a code from your device rather than handing over a physical card. The calculator applies each Venmo acceptance channel - QR code, Tap to Pay and online checkout - to the same transaction so you can see which channel to steer customers towards.',
    highlights: [
      'QR code, Tap to Pay and online checkout rates applied to the same amount.',
      'Net deposit calculation with the fixed fee shown separately from the percentage.',
      'No monthly fee, no setup cost and no minimum volume, stated explicitly.',
    ],
  },
  'gumroad-fee-calculator': {
    title: 'Gumroad Fee Calculators for Creators',
    desc: 'Free Gumroad fee calculator for digital creators. See the 10% platform fee, card processing and your exact net payout on every 2026 sale.',
    defaultSlug: 'standard',
    intro:
      'Gumroad pricing looks simple until you stack the layers: a 10% platform fee, a $0.50 fixed fee, card processing on top of that, and a completely different rate for traffic arriving through the Gumroad Discover marketplace. For a creator selling a $12 ebook, the fixed components alone consume a meaningful share of the sale. The calculator separates every layer and shows what actually lands in your account, because the difference between a direct sale and a marketplace sale is usually the whole margin story.',
    highlights: [
      'Direct sale stack: 10% platform fee, $0.50 fixed fee and card processing, itemised.',
      'Gumroad Discover marketplace rate applied as a single 30% fee including processing.',
      'Net payout at any price point, so you can see where the fixed costs stop being viable.',
    ],
  },
  'lemon-squeezy-calculator': {
    title: 'Lemon Squeezy Fee Calculators (MoR)',
    desc: 'Free Lemon Squeezy fee calculator for SaaS and digital products. See the 5% + $0.50 Merchant of Record fee and your exact net payout.',
    defaultSlug: 'standard',
    intro:
      'Lemon Squeezy charges 5% + $0.50, and that is the entire fee. The reason it can be so much lower than a conventional payment processor is that Lemon Squeezy acts as a merchant of record: it is the legal seller, it collects the customer payment, it applies the correct sales tax or VAT for the customer country, and it remits it. The compliance work that would otherwise cost a SaaS founder a VAT registration in a dozen countries is folded into the rate.',
    highlights: [
      '5% platform fee plus $0.50 per order, itemised against your net payout.',
      'Merchant of record model explained, including what it removes from your compliance load.',
      'Direct comparison against Gumroad and Stripe on the same sale amount.',
    ],
  },
  'shopify-fee-calculator': {
    title: 'Shopify Payments Fee Calculators',
    desc: 'Free Shopify Payments fee calculator. Compare Basic 2.9%, Grow 2.7%, Advanced 2.5% and third-party gateway fees across 2026 plan tiers.',
    defaultSlug: 'standard',
    intro:
      'Shopify Payments is usually the cheapest way to take payments on a Shopify store, but only if you use it. Route a transaction through a third-party gateway instead and Shopify applies an additional fee on top - 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Shopify Plus. On a $50 order that surcharge is $1.00 on Basic, which is often more than any discount you would get by switching processors. The calculator models the full stack including the plan tier surcharge.',
    highlights: [
      'Shopify Payments online and in-person rates across Basic, Grow, Advanced and Shopify Plus.',
      'Third-party gateway fee applied per plan tier so the real cost is visible.',
      'Plan fee and transaction fee modelled together rather than in isolation.',
    ],
  },
  'authorize-net-calculator': {
    title: 'Authorize.Net Fee Calculators & Pricing',
    desc: 'Free Authorize.Net fee calculator for all-in-one, gateway-only and eCheck pricing. See 2026 monthly fees, per-transaction costs and net payouts.',
    defaultSlug: 'standard-merchant',
    intro:
      'Authorize.Net is the oldest major payment gateway and still wins in two specific situations: a merchant who already has their own merchant account and wants to keep it, and an enterprise with a custom ERP or EDI integration. The pricing follows that split. All-in-One bundles the gateway for 2.9% + $0.30 with no monthly fee, while Payment Gateway Only costs a $25 monthly gateway fee plus $0.10 per transaction on top of your own acquirer. Which is cheaper depends entirely on your volume.',
    highlights: [
      'All-in-One at 2.9% + $0.30 with no monthly gateway fee.',
      'Payment Gateway Only with the $25 monthly gateway fee, $0.10 per transaction and daily batch settlement fee.',
      'eCheck and international processing rates shown alongside card pricing.',
    ],
  },
  'canada-sales-tax': {
    title: 'Canada Sales Tax Calculators: GST, HST & PST',
    desc: 'Free Canada sales tax calculator for all 10 provinces. Add or extract GST, HST, PST and QST at 2026 rates and stay CRA compliant on every invoice.',
    defaultSlug: 'ontario',
    intro:
      'Canadian sales tax is layered rather than stacked, and the structure differs by province. Five provinces and territories run a single combined HST rate, while the rest apply the 5% federal GST and a separate provincial PST, and Quebec adds its own QST on top of both. Getting the structure wrong produces an invoice that is wrong by several percentage points, so each province calculator here states its exact combined rate and the statutory authority behind it.',
    highlights: [
      'HST provinces: Ontario, New Brunswick, Nova Scotia, Prince Edward Island and Newfoundland and Labrador.',
      'GST plus separate PST for British Columbia, Saskatchewan, Manitoba and Alberta, and GST plus QST for Quebec.',
      'Add tax to a net amount or extract it from a gross invoice at the correct combined rate.',
    ],
  },
};
