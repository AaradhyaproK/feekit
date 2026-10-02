import fs from 'fs';
import path from 'path';

// Define the comprehensive dataset generator
const seoItems = [];

// 1. 50 US States Sales Tax
const usStates = [
  { slug: 'california', code: 'CA', name: 'California', rate: 7.25, local: 1.57, threshold: '$500,000' },
  { slug: 'texas', code: 'TX', name: 'Texas', rate: 6.25, local: 1.95, threshold: '$500,000' },
  { slug: 'new-york', code: 'NY', name: 'New York', rate: 4.0, local: 4.52, threshold: '$500,000 and 100 tx' },
  { slug: 'florida', code: 'FL', name: 'Florida', rate: 6.0, local: 1.02, threshold: '$100,000' },
  { slug: 'illinois', code: 'IL', name: 'Illinois', rate: 6.25, local: 2.55, threshold: '$100,000' },
  { slug: 'pennsylvania', code: 'PA', name: 'Pennsylvania', rate: 6.0, local: 0.34, threshold: '$100,000' },
  { slug: 'ohio', code: 'OH', name: 'Ohio', rate: 5.75, local: 1.49, threshold: '$100,000' },
  { slug: 'georgia', code: 'GA', name: 'Georgia', rate: 4.0, local: 3.35, threshold: '$100,000' },
  { slug: 'north-carolina', code: 'NC', name: 'North Carolina', rate: 4.75, local: 2.25, threshold: '$100,000' },
  { slug: 'michigan', code: 'MI', name: 'Michigan', rate: 6.0, local: 0.0, threshold: '$100,000' },
  { slug: 'new-jersey', code: 'NJ', name: 'New Jersey', rate: 6.625, local: 0.0, threshold: '$100,000' },
  { slug: 'virginia', code: 'VA', name: 'Virginia', rate: 5.3, local: 0.45, threshold: '$100,000' },
  { slug: 'washington', code: 'WA', name: 'Washington', rate: 6.5, local: 2.79, threshold: '$100,000' },
  { slug: 'arizona', code: 'AZ', name: 'Arizona', rate: 5.6, local: 2.77, threshold: '$100,000' },
  { slug: 'massachusetts', code: 'MA', name: 'Massachusetts', rate: 6.25, local: 0.0, threshold: '$100,000' },
  { slug: 'tennessee', code: 'TN', name: 'Tennessee', rate: 7.0, local: 2.55, threshold: '$100,000' },
  { slug: 'indiana', code: 'IN', name: 'Indiana', rate: 7.0, local: 0.0, threshold: '$100,000' },
  { slug: 'missouri', code: 'MO', name: 'Missouri', rate: 4.225, local: 4.16, threshold: '$100,000' },
  { slug: 'maryland', code: 'MD', name: 'Maryland', rate: 6.0, local: 0.0, threshold: '$100,000' },
  { slug: 'wisconsin', code: 'WI', name: 'Wisconsin', rate: 5.0, local: 0.43, threshold: '$100,000' },
  { slug: 'colorado', code: 'CO', name: 'Colorado', rate: 2.9, local: 4.87, threshold: '$100,000' },
  { slug: 'minnesota', code: 'MN', name: 'Minnesota', rate: 6.875, local: 0.62, threshold: '$100,000' },
  { slug: 'south-carolina', code: 'SC', name: 'South Carolina', rate: 6.0, local: 1.44, threshold: '$100,000' },
  { slug: 'alabama', code: 'AL', name: 'Alabama', rate: 4.0, local: 5.24, threshold: '$250,000' },
  { slug: 'louisiana', code: 'LA', name: 'Louisiana', rate: 4.45, local: 5.1, threshold: '$100,000' },
  { slug: 'kentucky', code: 'KY', name: 'Kentucky', rate: 6.0, local: 0.0, threshold: '$100,000' },
  { slug: 'oregon', code: 'OR', name: 'Oregon', rate: 0.0, local: 0.0, threshold: 'No sales tax' },
  { slug: 'oklahoma', code: 'OK', name: 'Oklahoma', rate: 4.5, local: 4.49, threshold: '$100,000' },
  { slug: 'connecticut', code: 'CT', name: 'Connecticut', rate: 6.35, local: 0.0, threshold: '$100,000 and 200 tx' },
  { slug: 'utah', code: 'UT', name: 'Utah', rate: 6.1, local: 1.09, threshold: '$100,000' },
  { slug: 'iowa', code: 'IA', name: 'Iowa', rate: 6.0, local: 0.94, threshold: '$100,000' },
  { slug: 'nevada', code: 'NV', name: 'Nevada', rate: 6.85, local: 1.38, threshold: '$100,000' },
  { slug: 'arkansas', code: 'AR', name: 'Arkansas', rate: 6.5, local: 2.94, threshold: '$100,000' },
  { slug: 'mississippi', code: 'MS', name: 'Mississippi', rate: 7.0, local: 0.07, threshold: '$250,000' },
  { slug: 'kansas', code: 'KS', name: 'Kansas', rate: 6.5, local: 2.17, threshold: '$100,000' },
  { slug: 'new-mexico', code: 'NM', name: 'New Mexico', rate: 5.0, local: 2.72, threshold: '$100,000' },
  { slug: 'nebraska', code: 'NE', name: 'Nebraska', rate: 5.5, local: 1.44, threshold: '$100,000' },
  { slug: 'idaho', code: 'ID', name: 'Idaho', rate: 6.0, local: 0.03, threshold: '$100,000' },
  { slug: 'west-virginia', code: 'WV', name: 'West Virginia', rate: 6.0, local: 0.57, threshold: '$100,000' },
  { slug: 'hawaii', code: 'HI', name: 'Hawaii', rate: 4.0, local: 0.44, threshold: '$100,000' },
  { slug: 'new-hampshire', code: 'NH', name: 'New Hampshire', rate: 0.0, local: 0.0, threshold: 'No sales tax' },
  { slug: 'maine', code: 'ME', name: 'Maine', rate: 5.5, local: 0.0, threshold: '$100,000' },
  { slug: 'rhode-island', code: 'RI', name: 'Rhode Island', rate: 7.0, local: 0.0, threshold: '$100,000' },
  { slug: 'montana', code: 'MT', name: 'Montana', rate: 0.0, local: 0.0, threshold: 'No sales tax' },
  { slug: 'delaware', code: 'DE', name: 'Delaware', rate: 0.0, local: 0.0, threshold: 'No sales tax' },
  { slug: 'south-dakota', code: 'SD', name: 'South Dakota', rate: 4.2, local: 1.91, threshold: '$100,000' },
  { slug: 'north-dakota', code: 'ND', name: 'North Dakota', rate: 5.0, local: 1.96, threshold: '$100,000' },
  { slug: 'alaska', code: 'AK', name: 'Alaska', rate: 0.0, local: 1.76, threshold: '$100,000 or 200 tx' },
  { slug: 'vermont', code: 'VT', name: 'Vermont', rate: 6.0, local: 0.36, threshold: '$100,000' },
  { slug: 'wyoming', code: 'WY', name: 'Wyoming', rate: 4.0, local: 1.36, threshold: '$100,000' },
  { slug: 'district-of-columbia', code: 'DC', name: 'District of Columbia', rate: 6.0, local: 0.0, threshold: '$100,000' }
];

usStates.forEach(s => {
  const combined = (s.rate + s.local).toFixed(2);
  seoItems.push({
    category: 'sales-tax-calculator',
    slug: s.slug,
    title: `${s.name} Sales Tax Calculator (2026 Updated Rates)`,
    shortTitle: `${s.name} Sales Tax`,
    subtitle: `Calculate combined state (${s.rate}%) and local sales tax in ${s.name}. Instant net-to-gross and gross-to-net reverse calculations.`,
    suiteType: 'tax',
    jurisdictionCode: s.code,
    defaultAmount: 250,
    currencySymbol: '$',
    formulaLatex: `\\text{Total Tax} = \\text{Net Amount} \\times (${s.rate}\\% + \\text{Local Average } ${s.local}\\%) = \\text{Net} \\times ${combined}\\%`,
    formulaExplanation: `In ${s.name}, the state imposes a statutory base sales tax of ${s.rate}%. Municipalities, counties, and special tax districts add an average local rate of ${s.local}%, yielding a typical effective burden of ${combined}%. For reverse calculation (extracting sales tax from a gross receipt): Net = Gross / (1 + ${(combined/100).toFixed(4)}).`,
    sampleTiers: [
      { amount: 50, tax: Number((50 * (combined/100)).toFixed(2)), total: Number((50 * (1 + combined/100)).toFixed(2)) },
      { amount: 250, tax: Number((250 * (combined/100)).toFixed(2)), total: Number((250 * (1 + combined/100)).toFixed(2)) },
      { amount: 1000, tax: Number((1000 * (combined/100)).toFixed(2)), total: Number((1000 * (1 + combined/100)).toFixed(2)) },
      { amount: 5000, tax: Number((5000 * (combined/100)).toFixed(2)), total: Number((5000 * (1 + combined/100)).toFixed(2)) }
    ],
    faqs: [
      {
        question: `What is the current sales tax rate in ${s.name}?`,
        answer: `The base statewide rate in ${s.name} is ${s.rate}%. When combined with municipal and county surtaxes, the effective average rate is approximately ${combined}%.`
      },
      {
        question: `What is the economic nexus threshold for remote sellers in ${s.name}?`,
        answer: `Out-of-state businesses and e-commerce merchants must register and collect ${s.name} sales tax once annual gross sales reach ${s.threshold}.`
      },
      {
        question: `How do I calculate tax-inclusive vs tax-exclusive prices in ${s.name}?`,
        answer: `To add tax, multiply the net price by ${combined}%. To remove tax from an all-inclusive receipt, divide the total gross amount by ${(1 + combined/100).toFixed(4)}.`
      }
    ]
  });
});

// 2. 28 EU & UK Countries VAT
const vatCountries = [
  { slug: 'germany', code: 'DE', name: 'Germany', standard: 19, reduced: 7, currency: '€' },
  { slug: 'france', code: 'FR', name: 'France', standard: 20, reduced: 10, currency: '€' },
  { slug: 'italy', code: 'IT', name: 'Italy', standard: 22, reduced: 10, currency: '€' },
  { slug: 'spain', code: 'ES', name: 'Spain', standard: 21, reduced: 10, currency: '€' },
  { slug: 'netherlands', code: 'NL', name: 'Netherlands', standard: 21, reduced: 9, currency: '€' },
  { slug: 'poland', code: 'PL', name: 'Poland', standard: 23, reduced: 8, currency: '€' },
  { slug: 'sweden', code: 'SE', name: 'Sweden', standard: 25, reduced: 12, currency: '€' },
  { slug: 'belgium', code: 'BE', name: 'Belgium', standard: 21, reduced: 12, currency: '€' },
  { slug: 'austria', code: 'AT', name: 'Austria', standard: 20, reduced: 10, currency: '€' },
  { slug: 'ireland', code: 'IE', name: 'Ireland', standard: 23, reduced: 13.5, currency: '€' },
  { slug: 'denmark', code: 'DK', name: 'Denmark', standard: 25, reduced: 25, currency: '€' },
  { slug: 'finland', code: 'FI', name: 'Finland', standard: 25.5, reduced: 14, currency: '€' },
  { slug: 'portugal', code: 'PT', name: 'Portugal', standard: 23, reduced: 13, currency: '€' },
  { slug: 'greece', code: 'GR', name: 'Greece', standard: 24, reduced: 13, currency: '€' },
  { slug: 'czech-republic', code: 'CZ', name: 'Czech Republic', standard: 21, reduced: 12, currency: '€' },
  { slug: 'romania', code: 'RO', name: 'Romania', standard: 19, reduced: 9, currency: '€' },
  { slug: 'hungary', code: 'HU', name: 'Hungary', standard: 27, reduced: 18, currency: '€' },
  { slug: 'slovakia', code: 'SK', name: 'Slovakia', standard: 20, reduced: 10, currency: '€' },
  { slug: 'bulgaria', code: 'BG', name: 'Bulgaria', standard: 20, reduced: 9, currency: '€' },
  { slug: 'croatia', code: 'HR', name: 'Croatia', standard: 25, reduced: 13, currency: '€' },
  { slug: 'lithuania', code: 'LT', name: 'Lithuania', standard: 21, reduced: 9, currency: '€' },
  { slug: 'slovenia', code: 'SI', name: 'Slovenia', standard: 22, reduced: 9.5, currency: '€' },
  { slug: 'latvia', code: 'LV', name: 'Latvia', standard: 21, reduced: 12, currency: '€' },
  { slug: 'estonia', code: 'EE', name: 'Estonia', standard: 22, reduced: 9, currency: '€' },
  { slug: 'cyprus', code: 'CY', name: 'Cyprus', standard: 19, reduced: 9, currency: '€' },
  { slug: 'luxembourg', code: 'LU', name: 'Luxembourg', standard: 17, reduced: 14, currency: '€' },
  { slug: 'malta', code: 'MT', name: 'Malta', standard: 18, reduced: 7, currency: '€' },
  { slug: 'united-kingdom', code: 'GB', name: 'United Kingdom', standard: 20, reduced: 5, currency: '£' }
];

vatCountries.forEach(c => {
  const rateDec = c.standard / 100;
  seoItems.push({
    category: 'vat-calculator',
    slug: c.slug,
    title: `${c.name} VAT Calculator (${c.standard}% Standard Rate)`,
    shortTitle: `${c.name} VAT`,
    subtitle: `Calculate Value Added Tax in ${c.name}. Instantly add ${c.standard}% VAT to net quotes or remove VAT from gross commercial invoices.`,
    suiteType: 'tax',
    jurisdictionCode: c.code,
    defaultAmount: 500,
    currencySymbol: c.currency,
    formulaLatex: `\\text{Gross} = \\text{Net} \\times (1 + ${rateDec}) \\quad | \\quad \\text{Net} = \\frac{\\text{Gross}}{1 + ${rateDec}}`,
    formulaExplanation: `In ${c.name}, the statutory standard VAT rate is ${c.standard}% (reduced rate ${c.reduced}%). For B2B cross-border transactions within the EU with a valid VIES VAT number, the Reverse Charge mechanism applies with 0% tax charged on invoice.`,
    sampleTiers: [
      { amount: 50, tax: Number((50 * rateDec).toFixed(2)), total: Number((50 * (1 + rateDec)).toFixed(2)) },
      { amount: 250, tax: Number((250 * rateDec).toFixed(2)), total: Number((250 * (1 + rateDec)).toFixed(2)) },
      { amount: 1000, tax: Number((1000 * rateDec).toFixed(2)), total: Number((1000 * (1 + rateDec)).toFixed(2)) },
      { amount: 5000, tax: Number((5000 * rateDec).toFixed(2)), total: Number((5000 * (1 + rateDec)).toFixed(2)) }
    ],
    faqs: [
      {
        question: `What are the VAT rates in ${c.name}?`,
        answer: `${c.name} applies a standard rate of ${c.standard}% on general goods and services, with reduced rates of ${c.reduced}% on qualified essentials like books, food, and hospitality.`
      },
      {
        question: `How does the reverse charge mechanism work in ${c.name}?`,
        answer: `If you are invoicing a VAT-registered business in another EU member state, you provide your VAT ID and the client's VAT ID, applying 0% VAT and adding the note 'Reverse Charge - Article 196 EU VAT Directive'.`
      },
      {
        question: `How to reverse-calculate VAT from a total price in ${c.name}?`,
        answer: `To extract the net amount and VAT component from a gross total of ${c.currency}100, divide 100 by ${(1 + rateDec).toFixed(2)} to find the net, then subtract the net from the total.`
      }
    ]
  });
});

// 3. Merchant Fee Calculators (Stripe, PayPal, Wise, Square, Authorize.Net)
const merchantVariations = [
  { category: 'stripe-fee-calculator', slug: 'usa', title: 'Stripe Fee Calculator (USA 2.9% + $0.30)', gateway: 'stripe', subtitle: 'Exact Stripe processing fees for US domestic cards. Forward & reverse payout calculations.', currency: '$' },
  { category: 'stripe-fee-calculator', slug: 'manual-entry', title: 'Stripe Manual Keyed-In Fee Calculator (3.4% + $0.30)', gateway: 'stripe', subtitle: 'Calculate Stripe Virtual Terminal and manually entered card processing fees (3.4% + $0.30) in the US.', currency: '$', percentageRate: 0.034, fixedFee: 0.30 },
  { category: 'stripe-fee-calculator', slug: 'keyed-entry', title: 'Stripe Keyed-In Card Fee Calculator (3.4% + $0.30)', gateway: 'stripe', subtitle: 'Calculate Stripe Virtual Terminal and manually entered card processing fees (3.4% + $0.30) in the US.', currency: '$', percentageRate: 0.034, fixedFee: 0.30 },
  { category: 'stripe-fee-calculator', slug: 'international', title: 'Stripe International Card Fee Calculator', gateway: 'stripe', subtitle: 'Account for the +1.5% international card fee and +1% currency conversion fee.', currency: '$', isInternational: true, applyFx: true },
  { category: 'stripe-fee-calculator', slug: 'united-kingdom', title: 'Stripe UK Fee Calculator (1.5% + £0.20)', gateway: 'stripe', subtitle: 'UK domestic standard card processing fee calculator with payout breakdowns.', currency: '£' },
  { category: 'stripe-fee-calculator', slug: 'eurozone', title: 'Stripe Europe Fee Calculator (1.5% + €0.25)', gateway: 'stripe', subtitle: 'Standard European interchange-plus fee structure for EEA card processing.', currency: '€' },
  { category: 'stripe-fee-calculator', slug: 'canada', title: 'Stripe Canada Fee Calculator (2.9% + $0.30 CAD)', gateway: 'stripe', subtitle: 'Domestic and international Canadian dollar fee calculator for Stripe accounts.', currency: 'CA$' },
  { category: 'stripe-fee-calculator', slug: 'australia', title: 'Stripe Australia Fee Calculator (1.75% + A$0.30)', gateway: 'stripe', subtitle: 'Calculate Stripe Australia domestic and international credit card merchant fees.', currency: 'A$' },
  { category: 'stripe-fee-calculator', slug: 'japan', title: 'Stripe Japan Fee Calculator (3.6% No Fixed Fee)', gateway: 'stripe', subtitle: 'Stripe Japan processing fee model for domestic yen and JCB/Visa transactions.', currency: '¥' },
  { category: 'stripe-fee-calculator', slug: 'singapore', title: 'Stripe Singapore Fee Calculator (3.4% + S$0.50)', gateway: 'stripe', subtitle: 'Stripe processing fees in Singapore for domestic and cross-border digital payments.', currency: 'S$' },
  { category: 'stripe-fee-calculator', slug: 'micropayments', title: 'Stripe Micropayments Fee Calculator (5% + $0.10)', gateway: 'stripe', subtitle: 'Specialized low-ticket fee modeling for transactions under $10.', currency: '$' },
  { category: 'stripe-fee-calculator', slug: 'non-profit', title: 'Stripe Non-Profit Discount Calculator (2.2% + $0.30)', gateway: 'stripe', subtitle: 'Calculate 501(c)(3) registered non-profit charity discount rates on Stripe.', currency: '$' },

  { category: 'paypal-fee-calculator', slug: 'usa', title: 'PayPal Commerce Fee Calculator (3.49% + $0.49)', gateway: 'paypal', subtitle: 'Standard US PayPal merchant fee calculator with reverse invoice markup.', currency: '$' },
  { category: 'paypal-fee-calculator', slug: 'international', title: 'PayPal International Fee Calculator (+1.5% Cross-Border)', gateway: 'paypal', subtitle: 'Calculate cross-border and currency conversion fees on international PayPal sales.', currency: '$', isInternational: true, applyFx: true },
  { category: 'paypal-fee-calculator', slug: 'qr-code', title: 'PayPal In-Person QR Code Fee Calculator (1.9% + $0.10)', gateway: 'paypal', subtitle: 'Calculate PayPal QR contactless payment fees for brick-and-mortar sales.', currency: '$' },
  { category: 'paypal-fee-calculator', slug: 'invoice', title: 'PayPal Invoicing Fee Calculator (3.49% + $0.49)', gateway: 'paypal', subtitle: 'Determine exact charge amount so client invoices cover all PayPal processing cuts.', currency: '$' },
  { category: 'paypal-fee-calculator', slug: 'micropayments', title: 'PayPal Micropayments Calculator (4.99% + $0.09)', gateway: 'paypal', subtitle: 'Optimize small transaction revenue using PayPal specialized micropayment tier.', currency: '$' },
  { category: 'paypal-fee-calculator', slug: 'charitable', title: 'PayPal Charity Fee Calculator (1.99% + $0.49)', gateway: 'paypal', subtitle: 'Calculate processing deductions for non-profit fundraising campaigns.', currency: '$' },
  { category: 'paypal-fee-calculator', slug: 'uk', title: 'PayPal UK Fee Calculator (2.9% + £0.30)', gateway: 'paypal', subtitle: 'HMRC and UK commerce merchant processing deductions for PayPal.', currency: '£' },
  { category: 'paypal-fee-calculator', slug: 'eu', title: 'PayPal Europe Fee Calculator (2.9% + €0.35)', gateway: 'paypal', subtitle: 'Euro commercial checkout fees and reverse invoice generator for PayPal EU.', currency: '€' },

  { category: 'wise-vs-stripe', slug: 'usd-to-eur', title: 'Wise vs Stripe Fee Calculator (USD to EUR)', gateway: 'wise', subtitle: 'Compare mid-market exchange rate savings with Wise vs Stripe 1% fx buffer.', currency: '$' },
  { category: 'wise-vs-stripe', slug: 'usd-to-gbp', title: 'Wise vs Stripe Fee Calculator (USD to GBP)', gateway: 'wise', subtitle: 'See how much you save on transatlantic client retainers using Wise Business.', currency: '$' },
  { category: 'wise-vs-stripe', slug: 'gbp-to-eur', title: 'Wise vs Stripe Fee Calculator (GBP to EUR)', gateway: 'wise', subtitle: 'UK to Eurozone cross-border merchant fee comparison.', currency: '£' },
  { category: 'wise-vs-stripe', slug: 'eur-to-usd', title: 'Wise vs Stripe Fee Calculator (EUR to USD)', gateway: 'wise', subtitle: 'European exporters and freelancers invoicing US clients with Wise.', currency: '€' },
  { category: 'wise-vs-stripe', slug: 'usd-to-inr', title: 'Wise vs Stripe Fee Calculator (USD to INR)', gateway: 'wise', subtitle: 'Compare direct bank wire conversion vs payment gateway deductions.', currency: '$' },
  { category: 'wise-vs-stripe', slug: 'cad-to-usd', title: 'Wise vs Stripe Fee Calculator (CAD to USD)', gateway: 'wise', subtitle: 'Cross-border North American merchant remittance savings calculator.', currency: 'CA$' },
  { category: 'wise-vs-stripe', slug: 'aud-to-usd', title: 'Wise vs Stripe Fee Calculator (AUD to USD)', gateway: 'wise', subtitle: 'Calculate Australian dollar to US dollar international payout efficiency.', currency: 'A$' },
  { category: 'wise-vs-stripe', slug: 'usd-to-brl', title: 'Wise vs Stripe Fee Calculator (USD to BRL)', gateway: 'wise', subtitle: 'Save on Brazilian real currency exchange fees for global contracts.', currency: '$' },

  { category: 'square-fee-calculator', slug: 'in-person', title: 'Square In-Person POS Fee Calculator (2.6% + $0.10)', gateway: 'square', subtitle: 'Card present tap, dip, and swipe fee calculator for retail & pop-ups.', currency: '$' },
  { category: 'square-fee-calculator', slug: 'online-store', title: 'Square Online Fee Calculator (2.9% + $0.30)', gateway: 'square', subtitle: 'E-commerce and online order processing fees for Square merchants.', currency: '$' },
  { category: 'square-fee-calculator', slug: 'invoice', title: 'Square Invoice Fee Calculator (3.3% + $0.30)', gateway: 'square', subtitle: 'Square client billing and recurring contract invoice calculator.', currency: '$' },
  { category: 'square-fee-calculator', slug: 'keyed-entry', title: 'Square Manual Keyed-In Fee Calculator (3.5% + $0.15)', gateway: 'square', subtitle: 'Calculate higher risk card-not-present manually entered phone orders.', currency: '$' },
  { category: 'square-fee-calculator', slug: 'restaurant', title: 'Square for Restaurants Fee Calculator (2.6% + $0.10)', gateway: 'square', subtitle: 'Calculate hospitality credit card interchange deductions and net ticket payout.', currency: '$' },

  { category: 'authorize-net-calculator', slug: 'standard-merchant', title: 'Authorize.Net All-in-One Fee Calculator (2.9% + $0.30)', gateway: 'authorize_net', subtitle: 'Calculate Authorize.Net merchant gateway deductions plus $25/mo amortized.', currency: '$' },
  { category: 'authorize-net-calculator', slug: 'gateway-only', title: 'Authorize.Net Payment Gateway Only Calculator ($0.10/tx)', gateway: 'authorize_net', subtitle: 'Gateway-only pricing with your own third-party merchant account.', currency: '$' },
  { category: 'authorize-net-calculator', slug: 'echeck', title: 'Authorize.Net eCheck Fee Calculator (0.75%)', gateway: 'authorize_net', subtitle: 'ACH and electronic direct debit fee calculator for enterprise merchants.', currency: '$' },
  { category: 'authorize-net-calculator', slug: 'international', title: 'Authorize.Net International Fee Calculator (+1.5%)', gateway: 'authorize_net', subtitle: 'Global transaction processing with Authorize.Net cross-border surcharge.', currency: '$', isInternational: true }
];

merchantVariations.forEach(m => {
  seoItems.push({
    category: m.category,
    slug: m.slug,
    title: m.title,
    shortTitle: m.title.split('(')[0].trim(),
    subtitle: m.subtitle,
    suiteType: 'merchant',
    gatewayId: m.gateway,
    defaultAmount: 500,
    currencySymbol: m.currency,
    isInternational: !!m.isInternational,
    applyCurrencyConversion: !!m.applyFx,
    formulaLatex: `\\text{Fee} = (\\text{Gross} \\times \\text{Rate}) + \\text{Fixed Fee} \\quad | \\quad \\text{Reverse Gross} = \\frac{\\text{Net} + \\text{Fixed}}{1 - \\text{Rate}}`,
    formulaExplanation: `To calculate forward deductions: multiply gross volume by the gateway rate (e.g. 2.9%) and add the fixed fee ($0.30). To ensure you receive an exact net amount in your bank, use the reverse formula to invoice your customer accordingly.`,
    sampleTiers: [
      { amount: 50, fee: 1.75, net: 48.25 },
      { amount: 250, fee: 7.55, net: 242.45 },
      { amount: 1000, fee: 29.30, net: 970.70 },
      { amount: 5000, fee: 145.30, net: 4854.70 }
    ],
    faqs: [
      {
        question: `How do I charge a client so I receive the full invoice amount?`,
        answer: `Use FeeKit's reverse calculation mode. For a $1,000 target payout at 2.9% + $0.30, charge $1,030.18. Stripe takes $30.18, leaving you with exactly $1,000.00.`
      },
      {
        question: `How much do international cards cost extra?`,
        answer: `Most gateways add a +1.5% surcharge for cards issued outside your domestic country, plus an additional 1.0% to 3.0% if currency conversion is involved.`
      },
      {
        question: `How does Wise compare to traditional merchant gateways?`,
        answer: `Wise charges true mid-market exchange rates with a nominal ~0.45% transfer fee, saving merchants between 2% and 3% on foreign invoice settlements.`
      }
    ]
  });
});

// 4. Freelance Rate Calculators (25 distinct professions)
const freelanceRoles = [
  { slug: 'software-engineer', title: 'Software Engineer Hourly Rate & Tax Calculator', role: 'Software Engineer', defaultNet: 120000, overhead: 12000 },
  { slug: 'fullstack-developer', title: 'Fullstack Developer Freelance Rate Calculator', role: 'Fullstack Developer', defaultNet: 110000, overhead: 10000 },
  { slug: 'frontend-developer', title: 'Frontend Developer Hourly Rate Calculator', role: 'Frontend Developer', defaultNet: 95000, overhead: 8000 },
  { slug: 'backend-developer', title: 'Backend Developer Freelance Rate Calculator', role: 'Backend Developer', defaultNet: 115000, overhead: 10000 },
  { slug: 'ai-engineer', title: 'AI & Machine Learning Engineer Rate Calculator', role: 'AI Engineer', defaultNet: 140000, overhead: 18000 },
  { slug: 'devops-engineer', title: 'DevOps & Cloud Architect Freelance Rate Calculator', role: 'DevOps Architect', defaultNet: 130000, overhead: 14000 },
  { slug: 'ui-ux-designer', title: 'UI/UX Product Designer Freelance Rate Calculator', role: 'Product Designer', defaultNet: 95000, overhead: 9000 },
  { slug: 'product-designer', title: 'Senior Product Designer Day Rate Calculator', role: 'Lead Product Designer', defaultNet: 105000, overhead: 10000 },
  { slug: 'copywriter', title: 'Direct-Response Copywriter Rate Calculator', role: 'Senior Copywriter', defaultNet: 85000, overhead: 6000 },
  { slug: 'technical-writer', title: 'Technical Documentation Writer Rate Calculator', role: 'Technical Writer', defaultNet: 80000, overhead: 5000 },
  { slug: 'seo-specialist', title: 'SEO Consultant & Strategist Rate Calculator', role: 'SEO Strategist', defaultNet: 90000, overhead: 11000 },
  { slug: 'digital-marketer', title: 'Growth & Digital Marketing Consultant Rate Calculator', role: 'Growth Marketer', defaultNet: 95000, overhead: 12000 },
  { slug: 'video-editor', title: 'Video Editor & Motion Designer Rate Calculator', role: 'Motion Designer', defaultNet: 75000, overhead: 12000 },
  { slug: 'mobile-app-developer', title: 'iOS / Android Mobile Developer Freelance Rate', role: 'Mobile App Developer', defaultNet: 110000, overhead: 10000 },
  { slug: 'smart-contract-developer', title: 'Web3 & Solidity Smart Contract Auditor Rate', role: 'Smart Contract Auditor', defaultNet: 160000, overhead: 15000 },
  { slug: 'data-scientist', title: 'Freelance Data Scientist & Analyst Rate Calculator', role: 'Data Scientist', defaultNet: 115000, overhead: 12000 },
  { slug: 'indie-hacker', title: 'Indie Hacker & Solopreneur Hourly Worth Calculator', role: 'Indie Hacker', defaultNet: 80000, overhead: 8000 },
  { slug: 'fractional-cto', title: 'Fractional CTO Retainer & Advisory Rate Calculator', role: 'Fractional CTO', defaultNet: 180000, overhead: 20000 },
  { slug: 'business-consultant', title: 'Management & Strategy Consultant Day Rate', role: 'Strategy Consultant', defaultNet: 130000, overhead: 15000 },
  { slug: 'virtual-assistant', title: 'Executive Virtual Assistant Hourly Rate Calculator', role: 'Executive VA', defaultNet: 45000, overhead: 4000 },
  { slug: 'ghostwriter', title: 'Executive Ghostwriter Book & Article Rate Calculator', role: 'Executive Ghostwriter', defaultNet: 100000, overhead: 8000 },
  { slug: 'photographer', title: 'Commercial & Editorial Photographer Day Rate', role: 'Commercial Photographer', defaultNet: 70000, overhead: 16000 },
  { slug: 'cybersecurity-analyst', title: 'Cybersecurity & Pentesting Consultant Rate', role: 'Security Consultant', defaultNet: 140000, overhead: 15000 },
  { slug: 'product-manager', title: 'Fractional Product Manager Retainer Calculator', role: 'Fractional PM', defaultNet: 125000, overhead: 10000 },
  { slug: 'financial-modeler', title: 'Fintech & Financial Modeler Hourly Rate Calculator', role: 'Financial Modeler', defaultNet: 120000, overhead: 10000 }
];

freelanceRoles.forEach(f => {
  seoItems.push({
    category: 'freelance-rate-calculator',
    slug: f.slug,
    title: f.title,
    shortTitle: `${f.role} Rate`,
    subtitle: `Calculate optimal hourly rate, day rate, and 1099 self-employment tax allocations for ${f.role}s.`,
    suiteType: 'freelance',
    roleTitle: f.role,
    defaultAmount: f.defaultNet,
    currencySymbol: '$',
    annualOverhead: f.overhead,
    formulaLatex: `\\text{Rate} = \\frac{\\frac{\\text{Target Net}}{1 - \\text{Tax Rate}} + \\text{Overhead}}{\\text{Billable Weeks} \\times \\text{Weekly Billable Hours}} \\times (1 + \\text{Margin})`,
    formulaExplanation: `Freelancers typically achieve 20–25 billable hours per week (the rest spent on client acquisition, proposals, and operations). This formula covers 15.3% SECA self-employment tax, federal income tax, tooling overhead, and a 15% rainy-day business buffer.`,
    sampleTiers: [
      { amount: 50000, rate: 58.33, dayRate: 466.67, monthly: 2333.33 },
      { amount: 90000, rate: 98.44, dayRate: 787.50, monthly: 3937.50 },
      { amount: 120000, rate: 128.52, dayRate: 1028.13, monthly: 5140.63 },
      { amount: 180000, rate: 188.67, dayRate: 1509.38, monthly: 7546.88 }
    ],
    faqs: [
      {
        question: `How many billable hours should a ${f.role} budget per year?`,
        answer: `Top freelance ${f.role}s budget 48 working weeks at 25 billable hours per week, for approximately 1,200 annual billable hours. The remaining time is required for business development and administrative overhead.`
      },
      {
        question: `How much should I set aside for 1099 self-employment tax?`,
        answer: `In the US, 1099 contractors pay 15.3% SECA tax (Social Security + Medicare) plus federal and state income taxes. A safe rule of thumb is setting aside 25% to 30% of each gross invoice.`
      },
      {
        question: `Should I charge hourly or quote fixed project / day rates?`,
        answer: `While hourly tracking is useful for internal benchmarking, quoting full day rates (8x hourly) or weekly value-based retainers minimizes scope creep and protects project profitability.`
      }
    ]
  });
});

// 5. E-Commerce & Dropshipping Profit Hub (20 platforms & niches)
const ecommerceNiches = [
  { slug: 'amazon-fba-private-label', title: 'Amazon FBA Private Label Profit Calculator', platform: 'amazon_fba', price: 34.99, cogs: 8.50, freight: 2.0, prep: 1.0, adSpend: 7.0 },
  { slug: 'amazon-fba-arbitrage', title: 'Amazon FBA Online Arbitrage Profit Margin Calculator', platform: 'amazon_fba', price: 49.99, cogs: 22.00, freight: 1.5, prep: 1.5, adSpend: 0.0 },
  { slug: 'amazon-fba-electronics', title: 'Amazon FBA Electronics Profit & Referral Fee Calculator', platform: 'amazon_fba', price: 79.99, cogs: 28.00, freight: 4.5, prep: 2.0, adSpend: 15.0 },
  { slug: 'amazon-fba-apparel', title: 'Amazon FBA Apparel & Clothing Profit Calculator (17% Referral)', platform: 'amazon_fba', price: 29.99, cogs: 6.50, freight: 1.5, prep: 1.0, adSpend: 6.0 },
  { slug: 'amazon-fba-beauty', title: 'Amazon FBA Beauty & Personal Care Margin Calculator', platform: 'amazon_fba', price: 24.99, cogs: 4.00, freight: 1.2, prep: 0.8, adSpend: 6.5 },

  { slug: 'shopify-dropshipping', title: 'Shopify Dropshipping Break-Even ROAS & Profit Calculator', platform: 'shopify', price: 49.99, cogs: 14.00, freight: 4.0, prep: 0.0, adSpend: 18.0 },
  { slug: 'shopify-apparel-brand', title: 'Shopify DTC Apparel Brand Profit Margin Calculator', platform: 'shopify', price: 65.00, cogs: 16.00, freight: 2.5, prep: 2.0, adSpend: 20.0 },
  { slug: 'shopify-supplements', title: 'Shopify Dietary Supplements & Nutrition Profit Calculator', platform: 'shopify', price: 54.99, cogs: 9.50, freight: 1.8, prep: 1.2, adSpend: 22.0 },

  { slug: 'etsy-digital-downloads', title: 'Etsy Digital Downloads Fee & Profit Calculator (0% COGS)', platform: 'etsy', price: 12.99, cogs: 0.00, freight: 0.0, prep: 0.0, adSpend: 2.5 },
  { slug: 'etsy-handmade-jewelry', title: 'Etsy Handmade Jewelry Profit & Listing Fee Calculator', platform: 'etsy', price: 38.00, cogs: 7.00, freight: 1.0, prep: 2.5, adSpend: 5.0 },
  { slug: 'etsy-custom-apparel', title: 'Etsy Custom Apparel & Gift Profit Margin Calculator', platform: 'etsy', price: 32.00, cogs: 11.00, freight: 2.0, prep: 1.5, adSpend: 6.0 },
  { slug: 'etsy-print-on-demand', title: 'Etsy Print on Demand (POD) Break-Even Calculator', platform: 'etsy', price: 28.50, cogs: 14.50, freight: 3.5, prep: 0.0, adSpend: 4.5 },

  { slug: 'ebay-electronics', title: 'eBay Electronics & Gadgets Final Value Fee Calculator', platform: 'ebay', price: 120.00, cogs: 70.00, freight: 5.0, prep: 2.0, adSpend: 0.0 },
  { slug: 'ebay-vintage-collectibles', title: 'eBay Vintage & Collectibles Profit Margin Calculator', platform: 'ebay', price: 85.00, cogs: 25.00, freight: 4.0, prep: 3.0, adSpend: 0.0 },
  { slug: 'ebay-refurbished-tech', title: 'eBay Refurbished Tech Margin & Buyer Shipping Calculator', platform: 'ebay', price: 199.99, cogs: 110.00, freight: 8.0, prep: 5.0, adSpend: 10.0 },

  { slug: 'tiktok-shop-dropshipping', title: 'TikTok Shop Dropshipping Profit & Commission Calculator', platform: 'shopify', price: 29.99, cogs: 8.00, freight: 3.0, prep: 0.0, adSpend: 10.0 },
  { slug: 'woocommerce-b2b', title: 'WooCommerce Wholesale & B2B Margin Calculator', platform: 'custom', price: 150.00, cogs: 75.00, freight: 10.0, prep: 5.0, adSpend: 15.0 },
  { slug: 'subscription-box-profit', title: 'Subscription Box Unit Economics & Churn Profit Calculator', platform: 'shopify', price: 45.00, cogs: 16.00, freight: 4.5, prep: 3.0, adSpend: 14.0 },
  { slug: 'direct-to-consumer-skincare', title: 'DTC Skincare Brand Unit Economics & ROAS Calculator', platform: 'shopify', price: 58.00, cogs: 8.00, freight: 1.5, prep: 2.0, adSpend: 24.0 },
  { slug: 'high-ticket-dropshipping', title: 'High Ticket Dropshipping Profit Margin Calculator', platform: 'shopify', price: 899.00, cogs: 520.00, freight: 45.0, prep: 10.0, adSpend: 120.0 }
];

ecommerceNiches.forEach(e => {
  seoItems.push({
    category: 'ecommerce-profit-calculator',
    slug: e.slug,
    title: e.title,
    shortTitle: e.title.split('(')[0].replace('Calculator', '').trim(),
    subtitle: `Analyze unit economics, landed COGS, platform marketplace fees, packaging, and break-even ROAS for ${e.slug.replace(/-/g, ' ')}.`,
    suiteType: 'ecommerce',
    platform: e.platform,
    defaultPrice: e.price,
    defaultCogs: e.cogs,
    defaultFreight: e.freight,
    defaultPrep: e.prep,
    defaultAdSpend: e.adSpend,
    currencySymbol: '$',
    formulaLatex: `\\text{Net Profit} = \\text{Price} - (\\text{Landed Cost} + \\text{Platform Fees} + \\text{Fulfillment} + \\text{CAC}) \\quad | \\quad \\text{Break-Even ROAS} = \\frac{\\text{Price}}{\\text{Gross Contribution}}`,
    formulaExplanation: `Net profit is computed by subtracting all landed product expenses, marketplace referral commission (e.g. 15% Amazon or 6.5% Etsy), fulfillment pick-and-pack, and ad spend (CAC). Break-even ROAS represents the minimum ad return required to avoid losing money.`,
    sampleTiers: [
      { units: 100, label: '100 Units / mo' },
      { units: 500, label: '500 Units / mo' },
      { units: 1000, label: '1,000 Units / mo' },
      { units: 5000, label: '5,000 Units / mo' }
    ],
    faqs: [
      {
        question: `What is the difference between Margin % and Markup %?`,
        answer: `Margin % is calculated as Net Profit divided by Selling Price. Markup % is Net Profit divided by Total Unit Cost. For instance, a product made for $50 and sold for $100 has a 50% margin and a 100% markup.`
      },
      {
        question: `How do I calculate my Break-Even Target ROAS?`,
        answer: `Divide the retail price by your gross contribution margin (Price minus all non-ad expenses). If a product sells for $50 and non-ad costs are $25, your gross contribution is $25, and your break-even ROAS is 2.0x.`
      },
      {
        question: `What hidden fees should e-commerce sellers watch out for?`,
        answer: `Be sure to factor in returns and restock fees (typically 3-8% in fashion/apparel), seasonal Amazon storage surcharges in Q4, and payment gateway chargeback buffer funds.`
      }
    ]
  });
});

console.log(`Generated ${seoItems.length} SEO items.`);

fs.mkdirSync(path.join(process.cwd(), 'src/data'), { recursive: true });
fs.writeFileSync(
  path.join(process.cwd(), 'src/data/seo-matrix.json'),
  JSON.stringify(seoItems, null, 2),
  'utf-8'
);
