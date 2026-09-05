import fs from 'fs';
import path from 'path';

const geoItems = [];

// 1. 50 US States Sales Tax Suite (Strictly US Geo-targeted with rich goldmine FAQs & terms)
const usStates = [
  { slug: 'california', code: 'CA', name: 'California', rate: 7.25, local: 1.57, maxLocal: 3.00, threshold: '$500,000' },
  { slug: 'texas', code: 'TX', name: 'Texas', rate: 6.25, local: 1.95, maxLocal: 2.00, threshold: '$500,000' },
  { slug: 'new-york', code: 'NY', name: 'New York', rate: 4.0, local: 4.52, maxLocal: 4.875, threshold: '$500,000 and 100 transactions' },
  { slug: 'florida', code: 'FL', name: 'Florida', rate: 6.0, local: 1.02, maxLocal: 2.50, threshold: '$100,000' },
  { slug: 'illinois', code: 'IL', name: 'Illinois', rate: 6.25, local: 2.55, maxLocal: 4.75, threshold: '$100,000 or 200 transactions' },
  { slug: 'pennsylvania', code: 'PA', name: 'Pennsylvania', rate: 6.0, local: 0.34, maxLocal: 2.00, threshold: '$100,000' },
  { slug: 'ohio', code: 'OH', name: 'Ohio', rate: 5.75, local: 1.49, maxLocal: 2.25, threshold: '$100,000 or 200 transactions' },
  { slug: 'georgia', code: 'GA', name: 'Georgia', rate: 4.0, local: 3.35, maxLocal: 5.00, threshold: '$100,000 or 200 transactions' },
  { slug: 'north-carolina', code: 'NC', name: 'North Carolina', rate: 4.75, local: 2.25, maxLocal: 2.75, threshold: '$100,000' },
  { slug: 'michigan', code: 'MI', name: 'Michigan', rate: 6.0, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' },
  { slug: 'new-jersey', code: 'NJ', name: 'New Jersey', rate: 6.625, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' },
  { slug: 'virginia', code: 'VA', name: 'Virginia', rate: 5.3, local: 0.45, maxLocal: 1.70, threshold: '$100,000 or 200 transactions' },
  { slug: 'washington', code: 'WA', name: 'Washington', rate: 6.5, local: 2.79, maxLocal: 4.10, threshold: '$100,000' },
  { slug: 'arizona', code: 'AZ', name: 'Arizona', rate: 5.6, local: 2.77, maxLocal: 5.60, threshold: '$100,000' },
  { slug: 'massachusetts', code: 'MA', name: 'Massachusetts', rate: 6.25, local: 0.0, maxLocal: 0.0, threshold: '$100,000' },
  { slug: 'tennessee', code: 'TN', name: 'Tennessee', rate: 7.0, local: 2.55, maxLocal: 2.75, threshold: '$100,000' },
  { slug: 'indiana', code: 'IN', name: 'Indiana', rate: 7.0, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' },
  { slug: 'missouri', code: 'MO', name: 'Missouri', rate: 4.225, local: 4.16, maxLocal: 5.763, threshold: '$100,000' },
  { slug: 'maryland', code: 'MD', name: 'Maryland', rate: 6.0, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' },
  { slug: 'wisconsin', code: 'WI', name: 'Wisconsin', rate: 5.0, local: 0.43, maxLocal: 0.90, threshold: '$100,000' },
  { slug: 'colorado', code: 'CO', name: 'Colorado', rate: 2.9, local: 4.87, maxLocal: 8.30, threshold: '$100,000' },
  { slug: 'minnesota', code: 'MN', name: 'Minnesota', rate: 6.875, local: 0.62, maxLocal: 2.00, threshold: '$100,000 or 200 transactions' },
  { slug: 'south-carolina', code: 'SC', name: 'South Carolina', rate: 6.0, local: 1.44, maxLocal: 3.00, threshold: '$100,000' },
  { slug: 'alabama', code: 'AL', name: 'Alabama', rate: 4.0, local: 5.24, maxLocal: 7.50, threshold: '$250,000' },
  { slug: 'louisiana', code: 'LA', name: 'Louisiana', rate: 4.45, local: 5.1, maxLocal: 7.00, threshold: '$100,000 or 200 transactions' },
  { slug: 'kentucky', code: 'KY', name: 'Kentucky', rate: 6.0, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' },
  { slug: 'oregon', code: 'OR', name: 'Oregon', rate: 0.0, local: 0.0, maxLocal: 0.0, threshold: 'No general sales tax' },
  { slug: 'oklahoma', code: 'OK', name: 'Oklahoma', rate: 4.5, local: 4.49, maxLocal: 7.00, threshold: '$100,000' },
  { slug: 'connecticut', code: 'CT', name: 'Connecticut', rate: 6.35, local: 0.0, maxLocal: 0.0, threshold: '$100,000 and 200 transactions' },
  { slug: 'utah', code: 'UT', name: 'Utah', rate: 6.1, local: 1.09, maxLocal: 2.95, threshold: '$100,000 or 200 transactions' },
  { slug: 'iowa', code: 'IA', name: 'Iowa', rate: 6.0, local: 0.94, maxLocal: 1.00, threshold: '$100,000' },
  { slug: 'nevada', code: 'NV', name: 'Nevada', rate: 6.85, local: 1.38, maxLocal: 1.53, threshold: '$100,000 or 200 transactions' },
  { slug: 'arkansas', code: 'AR', name: 'Arkansas', rate: 6.5, local: 2.94, maxLocal: 5.125, threshold: '$100,000 or 200 transactions' },
  { slug: 'mississippi', code: 'MS', name: 'Mississippi', rate: 7.0, local: 0.07, maxLocal: 1.00, threshold: '$250,000' },
  { slug: 'kansas', code: 'KS', name: 'Kansas', rate: 6.5, local: 2.17, maxLocal: 4.00, threshold: '$100,000' },
  { slug: 'new-mexico', code: 'NM', name: 'New Mexico', rate: 5.0, local: 2.72, maxLocal: 4.0625, threshold: '$100,000' },
  { slug: 'nebraska', code: 'NE', name: 'Nebraska', rate: 5.5, local: 1.44, maxLocal: 2.50, threshold: '$100,000 or 200 transactions' },
  { slug: 'idaho', code: 'ID', name: 'Idaho', rate: 6.0, local: 0.03, maxLocal: 3.00, threshold: '$100,000' },
  { slug: 'west-virginia', code: 'WV', name: 'West Virginia', rate: 6.0, local: 0.57, maxLocal: 1.00, threshold: '$100,000 or 200 transactions' },
  { slug: 'hawaii', code: 'HI', name: 'Hawaii', rate: 4.0, local: 0.44, maxLocal: 0.50, threshold: '$100,000 or 200 transactions' },
  { slug: 'new-hampshire', code: 'NH', name: 'New Hampshire', rate: 0.0, local: 0.0, maxLocal: 0.0, threshold: 'No general sales tax' },
  { slug: 'maine', code: 'ME', name: 'Maine', rate: 5.5, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' },
  { slug: 'rhode-island', code: 'RI', name: 'Rhode Island', rate: 7.0, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' },
  { slug: 'montana', code: 'MT', name: 'Montana', rate: 0.0, local: 0.0, maxLocal: 0.0, threshold: 'No general sales tax' },
  { slug: 'delaware', code: 'DE', name: 'Delaware', rate: 0.0, local: 0.0, maxLocal: 0.0, threshold: 'No general sales tax' },
  { slug: 'south-dakota', code: 'SD', name: 'South Dakota', rate: 4.2, local: 1.91, maxLocal: 2.00, threshold: '$100,000' },
  { slug: 'north-dakota', code: 'ND', name: 'North Dakota', rate: 5.0, local: 1.96, maxLocal: 3.50, threshold: '$100,000' },
  { slug: 'alaska', code: 'AK', name: 'Alaska', rate: 0.0, local: 1.76, maxLocal: 7.50, threshold: '$100,000 or 200 transactions' },
  { slug: 'vermont', code: 'VT', name: 'Vermont', rate: 6.0, local: 0.36, maxLocal: 1.00, threshold: '$100,000 or 200 transactions' },
  { slug: 'wyoming', code: 'WY', name: 'Wyoming', rate: 4.0, local: 1.36, maxLocal: 2.00, threshold: '$100,000 or 200 transactions' },
  { slug: 'district-of-columbia', code: 'DC', name: 'District of Columbia', rate: 6.0, local: 0.0, maxLocal: 0.0, threshold: '$100,000 or 200 transactions' }
];

usStates.forEach(s => {
  const combined = (s.rate + s.local).toFixed(2);
  geoItems.push({
    category: 'sales-tax-calculator',
    slug: s.slug,
    title: `${s.name} Sales Tax Calculator (2026 Updated Rates)`,
    shortTitle: `${s.name} Sales Tax`,
    subtitle: `Calculate combined state (${s.rate}%) and county/municipal surtaxes in ${s.name}. Instant net-to-gross and gross-to-net reverse calculations for Form 1040 Schedule C and state tax remittance.`,
    suiteType: 'tax',
    geoRegion: 'US',
    stateName: s.name,
    jurisdictionCode: s.code,
    defaultAmount: 250,
    currencySymbol: '$',
    formulaLatex: `\\text{Total Sales Tax} = \\text{Net Amount} \\times (${s.rate}\\% \\text{ State} + ${s.local}\\% \\text{ County Surtax}) = \\text{Net} \\times ${combined}\\%`,
    formulaExplanation: `In ${s.name}, the state levies a statutory sales tax of ${s.rate}%. County, municipal, and transit tax districts add an average surtax of ${s.local}%, resulting in a typical effective tax burden of ${combined}%. To extract sales tax from a gross invoice: Net = Gross / (1 + ${(combined/100).toFixed(4)}).`,
    sampleTiers: [
      { amount: 50, tax: Number((50 * (combined/100)).toFixed(2)), total: Number((50 * (1 + combined/100)).toFixed(2)) },
      { amount: 250, tax: Number((250 * (combined/100)).toFixed(2)), total: Number((250 * (1 + combined/100)).toFixed(2)) },
      { amount: 1000, tax: Number((1000 * (combined/100)).toFixed(2)), total: Number((1000 * (1 + combined/100)).toFixed(2)) },
      { amount: 5000, tax: Number((5000 * (combined/100)).toFixed(2)), total: Number((5000 * (1 + combined/100)).toFixed(2)) }
    ],
    faqs: [
      {
        question: `What is the current sales tax rate in ${s.name}?`,
        answer: `The statewide base sales tax rate in ${s.name} is ${s.rate}%. When combined with municipal and county surtaxes (which average ${s.local}% and cap around ${s.maxLocal}%), the total effective rate paid by consumers typically ranges between ${s.rate}% and ${(s.rate + s.maxLocal).toFixed(2)}%.`
      },
      {
        question: `What is the economic nexus threshold for remote sellers in ${s.name}?`,
        answer: `Following South Dakota v. Wayfair, remote out-of-state merchants must register and remit ${s.name} sales tax once annual sales into the state exceed ${s.threshold}. Once crossed, destination-based tax collection becomes legally mandatory.`
      },
      {
        question: `How do resale and exemption certificates work in ${s.name}?`,
        answer: `Businesses purchasing wholesale goods intended for resale can present a valid state resale exemption certificate to avoid paying upfront sales tax. The seller must retain this certificate in their records for at least three years to satisfy state audit requirements.`
      },
      {
        question: `Are SaaS and digital goods taxable in ${s.name}?`,
        answer: `Taxability of digital software, subscriptions, and downloadable goods depends on specific state statutes. In ${s.name}, prewritten computer software delivered electronically and digital audio-visual downloads are subject to statutory state tax rules.`
      },
      {
        question: `How do I report sales tax on IRS Form 1040 Schedule C?`,
        answer: `Sales tax collected from customers is not business gross income. Small business owners should exclude state sales tax from Line 1 (Gross Receipts) or report it under gross income and offset it with an identical tax deduction on Line 23 (Taxes and Licenses).`
      }
    ]
  });
});

// 2. UK Specialized Routes
const ukItems = [
  {
    category: 'vat-calculator',
    slug: 'united-kingdom',
    title: 'UK VAT Calculator 2026 (HMRC Standard 20% & Reduced 5%)',
    shortTitle: 'UK VAT Calculator',
    subtitle: 'Calculate HMRC Value Added Tax in the United Kingdom. Add 20% standard VAT to net quotes or remove VAT from gross commercial invoices for Making Tax Digital compliance.',
    suiteType: 'tax',
    geoRegion: 'UK',
    jurisdictionCode: 'GB',
    defaultAmount: 500,
    currencySymbol: '£',
    formulaLatex: `\\text{Gross (Inc. VAT)} = \\text{Net} \\times 1.20 \\quad | \\quad \\text{Net (Ex. VAT)} = \\frac{\\text{Gross}}{1.20}`,
    formulaExplanation: `In the UK, HMRC mandates a standard VAT rate of 20% for most taxable goods and services, with a 5% reduced rate for domestic energy and mobility aids. Businesses with taxable turnover exceeding £90,000 must register for VAT and submit quarterly digital returns under Making Tax Digital.`,
    sampleTiers: [
      { amount: 50, tax: 10.00, total: 60.00 },
      { amount: 250, tax: 50.00, total: 300.00 },
      { amount: 1000, tax: 200.00, total: 1200.00 },
      { amount: 5000, tax: 1000.00, total: 6000.00 }
    ],
    faqs: [
      {
        question: 'What is the UK VAT registration threshold in 2026?',
        answer: 'The UK taxable turnover threshold for mandatory HMRC registration is £90,000 on a rolling 12-month basis. Businesses with turnover below this threshold can voluntarily register to reclaim input VAT on business purchases.'
      },
      {
        question: 'How do I extract 20% VAT from a gross price in the UK?',
        answer: 'To remove 20% VAT from an all-inclusive gross figure, divide the gross total by 1.20 (or multiply by the VAT fraction of 1/6). For instance, an invoice total of £120.00 contains exactly £100.00 net value and £20.00 VAT.'
      },
      {
        question: 'What supplies qualify for the 5% reduced rate or 0% zero rate?',
        answer: 'Zero-rated items (0%) include essential foodstuffs, physical and digital books, and children clothing. Reduced rate (5%) applies to residential power, utility energy, and child car seats. Financial services and insurance are generally exempt.'
      },
      {
        question: 'How does the B2B Reverse Charge work post-Brexit?',
        answer: 'For cross-border supplies of services to business customers in the EU or overseas, the Reverse Charge Mechanism applies under Article 196 rules. Specify 0% VAT on the invoice, cite your client VAT ID, and add the notation "Reverse Charge: customer to account for VAT".'
      },
      {
        question: 'What is the Flat Rate Scheme (FRS) threshold?',
        answer: 'Small businesses with estimated annual turnover of £150,000 or less can apply to join the Flat Rate Scheme, paying a fixed sector-specific percentage of gross turnover to HMRC while simplifying bookkeeping.'
      }
    ]
  },
  {
    category: 'stripe-fee-calculator',
    slug: 'uk',
    title: 'Stripe UK Fee Calculator (1.5% + 20p Standard UK Cards)',
    shortTitle: 'Stripe UK Fee',
    subtitle: 'Exact Stripe processing deductions for UK businesses. Calculate standard UK consumer cards (1.5% + 20p), EEA cards (2.5% + 20p), and international cards (3.25% + 20p).',
    suiteType: 'merchant',
    geoRegion: 'UK',
    gatewayId: 'stripe',
    defaultAmount: 250,
    currencySymbol: '£',
    formulaLatex: `\\text{UK Fee} = (\\text{Gross} \\times 1.5\\%) + £0.20 \\quad | \\quad \\text{Reverse Gross} = \\frac{\\text{Net} + 0.20}{1 - 0.015}`,
    formulaExplanation: `Stripe UK pricing charges 1.5% + 20p for domestic standard UK credit and debit cards. European EEA cards incur 2.5% + 20p, while international non-European cards are 3.25% + 20p. Use FeeKit reverse mode to ensure your UK bank account receives the exact net invoice amount.`,
    sampleTiers: [
      { amount: 50, fee: 0.95, net: 49.05 },
      { amount: 250, fee: 3.95, net: 246.05 },
      { amount: 1000, fee: 15.20, net: 984.80 },
      { amount: 5000, fee: 75.20, net: 4924.80 }
    ],
    faqs: [
      {
        question: 'What are Stripe card processing fees in the UK?',
        answer: 'Stripe UK charges 1.5% + 20p for standard UK consumer cards, 2.5% + 20p for European Economic Area (EEA) cards, and 3.25% + 20p for non-European international cards. Commercial corporate cards carry an additional +1.2%.'
      },
      {
        question: 'How do I charge a UK client so Stripe fees are absorbed?',
        answer: 'To receive a target net payout of £500.00, invoice £507.82. Stripe takes £7.82 (1.5% + 20p), leaving you with exactly £500.00 in your UK bank account.'
      },
      {
        question: 'Is Stripe fee deduction subject to UK VAT?',
        answer: 'Card processing and merchant gateway services provided by Stripe Payments Europe are categorized as financial payment processing and are exempt from UK VAT.'
      },
      {
        question: 'What is the payout schedule for UK Stripe accounts?',
        answer: 'Standard UK payouts clear into your UK bank account on a 3-business-day rolling schedule (or 7-day for new accounts), with instant payouts available for a 1.5% fee.'
      }
    ]
  },
  {
    category: 'paypal-fee-calculator',
    slug: 'uk',
    title: 'PayPal UK Fee Calculator (2.9% + 30p Domestic Transactions)',
    shortTitle: 'PayPal UK Fee',
    subtitle: 'Calculate PayPal merchant deductions in the United Kingdom with reverse invoice charge markup.',
    suiteType: 'merchant',
    geoRegion: 'UK',
    gatewayId: 'paypal',
    defaultAmount: 250,
    currencySymbol: '£',
    formulaLatex: `\\text{Fee} = (\\text{Gross} \\times 2.9\\%) + £0.30 \\quad | \\quad \\text{Reverse Gross} = \\frac{\\text{Net} + 0.30}{1 - 0.029}`,
    formulaExplanation: `PayPal standard UK commercial transactions incur 2.9% + 30p for domestic purchases. Cross-border payments carry additional percentage markups.`,
    sampleTiers: [
      { amount: 50, fee: 1.75, net: 48.25 },
      { amount: 250, fee: 7.55, net: 242.45 },
      { amount: 1000, fee: 29.30, net: 970.70 },
      { amount: 5000, fee: 145.30, net: 4854.70 }
    ],
    faqs: [
      {
        question: 'How much does PayPal charge merchants in the UK?',
        answer: 'Standard domestic PayPal checkout rate is 2.9% + 30p. In-person QR payments are discounted to 1.5% + 10p, while micropayments tier charges 4.99% + 9p.'
      },
      {
        question: 'What are international cross-border PayPal fees in the UK?',
        answer: 'PayPal adds a 1.29% to 1.99% cross-border surcharge for payments originating outside the UK, plus an approximate 3% currency conversion margin.'
      }
    ]
  },
  {
    category: 'freelance-rate-calculator',
    slug: 'uk-contractor',
    title: 'UK Freelance Contractor Day Rate & Tax Calculator (Inside/Outside IR35)',
    shortTitle: 'UK Contractor Rate',
    subtitle: 'Calculate optimal day rates, corporation tax allowances, and dividend splits for UK Ltd contractors.',
    suiteType: 'freelance',
    geoRegion: 'UK',
    roleTitle: 'UK Contractor',
    defaultAmount: 75000,
    currencySymbol: '£',
    formulaLatex: `\\text{Day Rate} = \\frac{\\text{Target Net} + \\text{Corp Tax / NICs} + \\text{Overhead}}{\\text{Working Weeks} \\times \\text{Days per Week}}`,
    formulaExplanation: `Designed for UK freelancers and Limited Company contractors balancing Director salary, dividend taxes, and business overheads.`,
    sampleTiers: [
      { amount: 50000, rate: 52.08, dayRate: 416.67, monthly: 2083.33 },
      { amount: 75000, rate: 78.13, dayRate: 625.00, monthly: 3125.00 },
      { amount: 100000, rate: 104.17, dayRate: 833.33, monthly: 4166.67 },
      { amount: 150000, rate: 156.25, dayRate: 1250.00, monthly: 6250.00 }
    ],
    faqs: [
      {
        question: 'How do UK contractors quote professional day rates?',
        answer: 'Standard commercial practice is quoting an 8-hour professional day rate (typically £500–£900/day for senior tech and management roles), clearly defining whether the contract is Outside IR35.'
      },
      {
        question: 'What is the financial impact of Inside IR35 vs Outside IR35?',
        answer: 'An Inside IR35 contract requires deemed employment deductions (PAYE income tax, Employee NICs, and Employer NICs), resulting in roughly 20% to 25% lower net take-home compared to a tax-efficient salary/dividend split Outside IR35.'
      }
    ]
  }
];

// 3. US Specialized Merchant Routes
const usMerchant = [
  {
    category: 'stripe-fee-calculator',
    slug: 'usa',
    title: 'Stripe Fee Calculator USA (2.9% + $0.30 Domestic Cards)',
    shortTitle: 'Stripe US Fee',
    subtitle: 'Official US Stripe credit card processing fee calculator. Forward & reverse invoice calculations for US domestic businesses.',
    suiteType: 'merchant',
    geoRegion: 'US',
    gatewayId: 'stripe',
    defaultAmount: 500,
    currencySymbol: '$',
    formulaLatex: `\\text{Fee} = (\\text{Gross} \\times 2.9\\%) + \\$0.30 \\quad | \\quad \\text{Reverse Gross} = \\frac{\\text{Net} + 0.30}{1 - 0.029}`,
    formulaExplanation: `Stripe standard domestic US card pricing is 2.9% + $0.30 per successful charge. International non-US cards add +1.5%, and currency conversion adds +1%. To receive exactly $1,000 net, invoice $1,030.18.`,
    sampleTiers: [
      { amount: 50, fee: 1.75, net: 48.25 },
      { amount: 250, fee: 7.55, net: 242.45 },
      { amount: 1000, fee: 29.30, net: 970.70 },
      { amount: 5000, fee: 145.30, net: 4854.70 }
    ],
    faqs: [
      {
        question: 'What is the standard Stripe fee in the United States?',
        answer: 'Stripe US charges 2.9% plus $0.30 per successful domestic card charge. There are no monthly gateway fees, setup charges, or hidden cancellation penalties.'
      },
      {
        question: 'Can I legally pass Stripe credit card fees to my customer?',
        answer: 'Yes, in the majority of US states, merchants can legally pass credit card processing fees via an explicit surcharge, provided it is clearly disclosed before payment, does not exceed actual processing cost (or 3%), and is not applied to debit cards.'
      },
      {
        question: 'How do I calculate reverse invoice markup for Stripe?',
        answer: 'Use the reverse formula: Gross = (Desired Net + $0.30) / (1 - 0.029). For a $1,000.00 target payout, invoice $1,030.18.'
      },
      {
        question: 'How much do international cards cost extra on Stripe?',
        answer: 'Cards issued outside the United States carry an extra +1.5% cross-border surcharge. If currency conversion is also required, Stripe adds another +1.0%, bringing the total variable fee to 5.4%.'
      },
      {
        question: 'How does Stripe Instant Payout work?',
        answer: 'Merchants can initiate instant transfers to an eligible business debit card for an additional 1.5% fee (minimum $0.50), available 24/7 including weekends and bank holidays.'
      }
    ]
  },
  {
    category: 'paypal-fee-calculator',
    slug: 'usa',
    title: 'PayPal Fee Calculator USA (3.49% + $0.49 Commerce Rate)',
    shortTitle: 'PayPal US Fee',
    subtitle: 'Standard US PayPal checkout and commercial invoice calculator with reverse fee absorption math.',
    suiteType: 'merchant',
    geoRegion: 'US',
    gatewayId: 'paypal',
    defaultAmount: 500,
    currencySymbol: '$',
    formulaLatex: `\\text{Fee} = (\\text{Gross} \\times 3.49\\%) + \\$0.49 \\quad | \\quad \\text{Reverse Gross} = \\frac{\\text{Net} + 0.49}{1 - 0.0349}`,
    formulaExplanation: `Standard PayPal commercial transactions in the US incur 3.49% + $0.49. In-person QR codes incur 1.9% + $0.10.`,
    sampleTiers: [
      { amount: 50, fee: 2.24, net: 47.76 },
      { amount: 250, fee: 9.22, net: 240.78 },
      { amount: 1000, fee: 35.39, net: 964.61 },
      { amount: 5000, fee: 174.99, net: 4825.01 }
    ],
    faqs: [
      {
        question: 'What is the standard PayPal merchant rate in the US?',
        answer: 'Standard PayPal commercial checkout in the US costs 3.49% + $0.49. Invoicing transactions sent via PayPal Invoicing incur the same 3.49% + $0.49 rate.'
      },
      {
        question: 'How do PayPal fees compare to Stripe?',
        answer: 'On a $500 invoice, Stripe costs $14.80 (2.9% + 30¢), while PayPal costs $17.94 (3.49% + 49¢). You save $3.14 per $500 transaction with Stripe.'
      }
    ]
  },
  {
    category: 'square-fee-calculator',
    slug: 'usa',
    title: 'Square Fee Calculator USA (2.6% + $0.10 POS / 2.9% + $0.30 Online)',
    shortTitle: 'Square US Fee',
    subtitle: 'Calculate processing deductions for Square in-person hardware, online storefronts, and invoices.',
    suiteType: 'merchant',
    geoRegion: 'US',
    gatewayId: 'square',
    defaultAmount: 250,
    currencySymbol: '$',
    formulaLatex: `\\text{POS Fee} = (\\text{Gross} \\times 2.6\\%) + \\$0.10 \\quad | \\quad \\text{Online Fee} = (\\text{Gross} \\times 2.9\\%) + \\$0.30`,
    formulaExplanation: `Square charges 2.6% + $0.10 for contactless, chip, and swipe payments. Online e-commerce store orders are 2.9% + $0.30.`,
    sampleTiers: [
      { amount: 50, fee: 1.40, net: 48.60 },
      { amount: 250, fee: 6.60, net: 243.40 },
      { amount: 1000, fee: 26.10, net: 973.90 },
      { amount: 5000, fee: 130.10, net: 4869.90 }
    ],
    faqs: [
      {
        question: 'What is Square fee for in-person payments?',
        answer: 'Square in-person tap, dip, or swipe payments cost 2.6% + $0.10 per transaction.'
      }
    ]
  }
];

geoItems.push(...ukItems);
geoItems.push(...usMerchant);

// Import remaining existing items
const existing = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/seo-matrix.json'), 'utf-8'));
existing.forEach(item => {
  if (!geoItems.some(x => x.category === item.category && x.slug === item.slug)) {
    let reg = 'GLOBAL';
    if (item.category === 'sales-tax-calculator') reg = 'US';
    if (item.slug === 'united-kingdom' || item.slug === 'uk') reg = 'UK';
    if (item.currencySymbol === '$') reg = 'US';
    if (item.currencySymbol === '£') reg = 'UK';
    geoItems.push({
      ...item,
      geoRegion: reg,
      stateName: item.stateName || (reg === 'US' && item.title.includes('Sales Tax') ? item.shortTitle.replace(' Sales Tax', '') : undefined)
    });
  }
});

console.log(`Writing ${geoItems.length} geo-targeted SEO items...`);

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/geo-matrix.json'),
  JSON.stringify(geoItems, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/seo-matrix.json'),
  JSON.stringify(geoItems, null, 2),
  'utf-8'
);
