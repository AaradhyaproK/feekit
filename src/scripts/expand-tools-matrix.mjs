import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const matrixPath = path.resolve(__dirname, '../data/geo-matrix.json');
const matrix = JSON.parse(fs.readFileSync(matrixPath, 'utf8'));

const existingKeys = new Set(matrix.items.map((i) => `${i.category}::${i.slug}`));

const newItems = [];

// 1. 10 Canadian Provinces (canada-sales-tax)
const canadianProvinces = [
  {
    slug: 'ontario',
    name: 'Ontario',
    taxType: 'HST',
    rate: 13,
    notes: 'Ontario levies a single Harmonized Sales Tax (HST) combining 5% federal GST and 8% provincial component.',
    threshold: '$30,000 CAD',
  },
  {
    slug: 'british-columbia',
    name: 'British Columbia',
    taxType: 'GST + PST',
    rate: 12,
    notes: 'British Columbia applies 5% federal GST alongside 7% Provincial Sales Tax (PST). Total 12%.',
    threshold: '$30,000 CAD (GST) / $10,000 (PST)',
  },
  {
    slug: 'quebec',
    name: 'Quebec',
    taxType: 'GST + QST',
    rate: 14.975,
    notes: 'Quebec applies 5% federal GST and 9.975% Quebec Sales Tax (QST), collected by Revenu Québec.',
    threshold: '$30,000 CAD',
  },
  {
    slug: 'alberta',
    name: 'Alberta',
    taxType: 'GST Only',
    rate: 5,
    notes: 'Alberta has no provincial sales tax. Only the 5% federal Goods and Services Tax (GST) applies.',
    threshold: '$30,000 CAD',
  },
  {
    slug: 'nova-scotia',
    name: 'Nova Scotia',
    taxType: 'HST',
    rate: 15,
    notes: 'Nova Scotia levies a 15% Harmonized Sales Tax (HST) on commercial taxable transactions.',
    threshold: '$30,000 CAD',
  },
  {
    slug: 'new-brunswick',
    name: 'New Brunswick',
    taxType: 'HST',
    rate: 15,
    notes: 'New Brunswick applies a 15% Harmonized Sales Tax (5% GST + 10% provincial tax).',
    threshold: '$30,000 CAD',
  },
  {
    slug: 'manitoba',
    name: 'Manitoba',
    taxType: 'GST + PST (RST)',
    rate: 12,
    notes: 'Manitoba levies 5% federal GST and 7% Retail Sales Tax (RST/PST) for a combined 12% rate.',
    threshold: '$30,000 CAD (GST) / $10,000 (RST)',
  },
  {
    slug: 'saskatchewan',
    name: 'Saskatchewan',
    taxType: 'GST + PST',
    rate: 11,
    notes: 'Saskatchewan applies 5% federal GST and 6% Provincial Sales Tax (PST) for a combined 11% rate.',
    threshold: '$30,000 CAD',
  },
  {
    slug: 'prince-edward-island',
    name: 'Prince Edward Island',
    taxType: 'HST',
    rate: 15,
    notes: 'Prince Edward Island charges a 15% Harmonized Sales Tax (HST) on all taxable supplies.',
    threshold: '$30,000 CAD',
  },
  {
    slug: 'newfoundland-and-labrador',
    name: 'Newfoundland and Labrador',
    taxType: 'HST',
    rate: 15,
    notes: 'Newfoundland and Labrador levies a 15% Harmonized Sales Tax (HST) for retail sales.',
    threshold: '$30,000 CAD',
  },
];

for (const prov of canadianProvinces) {
  newItems.push({
    category: 'canada-sales-tax',
    slug: prov.slug,
    title: `${prov.name} Sales Tax Calculator 2026 (${prov.taxType} ${prov.rate}%)`,
    shortTitle: `${prov.name} Sales Tax`,
    subtitle: `Calculate ${prov.name} ${prov.taxType} (${prov.rate}%). Add sales tax to net quotes or remove tax from gross invoices for CRA compliance.`,
    suiteType: 'tax',
    geoRegion: 'CA',
    stateName: prov.name,
    jurisdictionCode: prov.slug.toUpperCase(),
    defaultAmount: 250,
    currencySymbol: 'CA$',
    rate: prov.rate,
    formulaLatex: `\\text{Total Tax} = \\text{Net} \\times ${(prov.rate / 100).toFixed(prov.rate % 1 === 0 ? 2 : 4)} \\quad | \\quad \\text{Gross} = \\text{Net} \\times ${(1 + prov.rate / 100).toFixed(prov.rate % 1 === 0 ? 2 : 4)}`,
    formulaExplanation: `In ${prov.name}, total sales tax is ${prov.rate}% (${prov.taxType}). To extract tax from a gross invoice: Net = Gross / ${(1 + prov.rate / 100).toFixed(prov.rate % 1 === 0 ? 2 : 4)}.`,
    sampleTiers: [
      { amount: 50, tax: Number((50 * prov.rate / 100).toFixed(2)), total: Number((50 * (1 + prov.rate / 100)).toFixed(2)) },
      { amount: 250, tax: Number((250 * prov.rate / 100).toFixed(2)), total: Number((250 * (1 + prov.rate / 100)).toFixed(2)) },
      { amount: 1000, tax: Number((1000 * prov.rate / 100).toFixed(2)), total: Number((1000 * (1 + prov.rate / 100)).toFixed(2)) },
      { amount: 5000, tax: Number((5000 * prov.rate / 100).toFixed(2)), total: Number((5000 * (1 + prov.rate / 100)).toFixed(2)) },
    ],
    faqs: [
      {
        question: `What is the current sales tax rate in ${prov.name}?`,
        answer: `The total statutory rate in ${prov.name} is ${prov.rate}% (${prov.taxType}). This covers standard retail goods and commercial digital services.`,
      },
      {
        question: `What is the CRA small supplier threshold in Canada?`,
        answer: `Under Canada Revenue Agency (CRA) rules, businesses with worldwide gross taxable revenues under $30,000 CAD over 4 consecutive calendar quarters are classified as small suppliers and are exempt from mandatory GST/HST registration.`,
      },
      {
        question: `Do remote US or overseas sellers need to charge tax in ${prov.name}?`,
        answer: `Yes, non-resident vendors of digital products, streaming services, and SaaS selling to Canadian consumers must register under the simplified GST/HST regime once sales exceed $30,000 CAD annually.`,
      },
    ],
  });
}

// 2. 10 High-Intent Freelance Roles
const freelanceRoles = [
  { slug: 'ai-prompt-engineer', role: 'AI Prompt Engineer', target: 135000, overhead: 15000 },
  { slug: 'fractional-cmo', role: 'Fractional CMO', target: 160000, overhead: 20000 },
  { slug: 'motion-graphics-designer', role: 'Motion Graphics Designer', target: 95000, overhead: 14000 },
  { slug: 'shopify-developer', role: 'Shopify Developer', target: 110000, overhead: 12000 },
  { slug: 'cloud-architect', role: 'Cloud Solutions Architect', target: 175000, overhead: 22000 },
  { slug: 'ux-researcher', role: 'UX Researcher', target: 105000, overhead: 11000 },
  { slug: 'growth-marketer', role: 'Growth Marketer', target: 115000, overhead: 16000 },
  { slug: 'podcast-editor', role: 'Podcast Audio Producer', target: 75000, overhead: 9000 },
  { slug: 'no-code-developer', role: 'No-Code Developer (Webflow & Bubble)', target: 98000, overhead: 10000 },
  { slug: 'executive-coach', role: 'Executive Leadership Coach', target: 145000, overhead: 15000 },
];

for (const f of freelanceRoles) {
  const hourly = Number((f.target / 1200).toFixed(2));
  newItems.push({
    category: 'freelance-rate-calculator',
    slug: f.slug,
    title: `${f.role} Freelance Rate Calculator (2026 Benchmark)`,
    shortTitle: `${f.role} Rate`,
    subtitle: `Calculate billable hourly rate, day rate, and 1099 self-employment tax allocations for freelance ${f.role}s.`,
    suiteType: 'freelance',
    roleTitle: f.role,
    defaultAmount: f.target,
    currencySymbol: '$',
    annualOverhead: f.overhead,
    formulaLatex: `\\text{Rate} = \\frac{\\text{Target Net} + \\text{Overhead}}{\\text{Annual Billable Hours (1,200h)}} \\times (1 + \\text{SE Tax Buffer})`,
    formulaExplanation: `Top freelance ${f.role}s budget 1,200 billable hours per year (25h/week for 48 weeks). This formula incorporates 15.3% SECA tax, tooling, and business reserves.`,
    sampleTiers: [
      { amount: 50000, rate: Number((50000 / 1200).toFixed(2)), dayRate: Number(((50000 / 1200) * 8).toFixed(2)), monthly: 4166.67 },
      { amount: f.target, rate: hourly, dayRate: Number((hourly * 8).toFixed(2)), monthly: Number((f.target / 12).toFixed(2)) },
      { amount: f.target * 1.5, rate: Number((hourly * 1.5).toFixed(2)), dayRate: Number((hourly * 1.5 * 8).toFixed(2)), monthly: Number(((f.target * 1.5) / 12).toFixed(2)) },
    ],
    faqs: [
      {
        question: `What is the average hourly rate for a freelance ${f.role}?`,
        answer: `Experienced ${f.role}s typically charge between $${hourly} and $${Number((hourly * 1.4).toFixed(0))}/hour or $${Number((hourly * 8).toFixed(0))}+ for a full-day retainer.`,
      },
      {
        question: 'How should I structure my contracts?',
        answer: 'High-earning contractors prefer weekly sprint retainers or value-based milestone quotes over open-ended hourly billing to protect against scope creep.',
      },
    ],
    geoRegion: 'US',
  });
}

// 3. New Gateway Suites
newItems.push(
  {
    category: 'venmo-fee-calculator',
    slug: 'standard',
    title: 'Venmo for Business Fee Calculator (2026 QR & App Rates)',
    shortTitle: 'Venmo Business Fee',
    subtitle: 'Calculate exact Venmo Business transaction deductions: 1.9% + $0.10 for QR payments and 2.29% + $0.10 for online app checkout.',
    suiteType: 'merchant',
    gatewayId: 'venmo',
    defaultAmount: 250,
    currencySymbol: '$',
    formulaLatex: '\\text{Venmo Fee} = (\\text{Gross} \\times 2.29\\%) + \\$0.10 \\quad | \\quad \\text{Net Payout} = \\text{Gross} - \\text{Fee}',
    formulaExplanation: 'Venmo charges 1.9% + $0.10 for in-person contactless QR codes and 2.29% + $0.10 for online buyer checkout through the Venmo app.',
    sampleTiers: [
      { amount: 50, fee: 1.25, net: 48.75 },
      { amount: 250, fee: 5.83, net: 244.17 },
      { amount: 1000, fee: 23.00, net: 977.00 },
      { amount: 5000, fee: 114.60, net: 4885.40 },
    ],
    faqs: [
      { question: 'Does Venmo charge fees for personal payments?', answer: 'Personal peer-to-peer transfers from linked bank accounts or debit cards are free. Commercial business transactions through business profiles carry standard merchant fees.' },
      { question: 'What is the fee for Venmo QR code payments?', answer: 'Venmo charges a discounted rate of 1.9% + $0.10 for in-person QR code scans.' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'gumroad-fee-calculator',
    slug: 'standard',
    title: 'Gumroad Fee Calculator (10% Creator Platform Fee + Processing)',
    shortTitle: 'Gumroad Fee Calculator',
    subtitle: 'Calculate net payouts for creator sales on Gumroad. Understand the flat 10% platform fee and ~2.9% + $0.30 credit card processing charge.',
    suiteType: 'merchant',
    gatewayId: 'gumroad',
    defaultAmount: 100,
    currencySymbol: '$',
    formulaLatex: '\\text{Gumroad Cut} = (\\text{Gross} \\times 10\\%) + (\\text{Gross} \\times 2.9\\%) + \\$0.30 = (\\text{Gross} \\times 12.9\\%) + \\$0.30',
    formulaExplanation: 'Gumroad levies a flat 10% platform fee plus $0.50 per sale with payment processing bundled (delivering $899.50 net on $1,000). For creators accounting for pass-through credit card processing and international interchange, the effective all-in cost is closer to 12%–13% (approx. 12.9% + $0.30).',
    sampleTiers: [
      { amount: 25, fee: 3.53, net: 21.47 },
      { amount: 100, fee: 13.20, net: 86.80 },
      { amount: 500, fee: 64.80, net: 435.20 },
      { amount: 2000, fee: 258.30, net: 1741.70 },
    ],
    faqs: [
      { question: 'How much does Gumroad take from each sale?', answer: 'Gumroad takes a flat 10% platform fee plus $0.50 per sale under its bundled Merchant of Record schedule (leaving $899.50 net on $1,000). When accounting for card interchange, foreign transaction fees, or direct processing rails, the all-in effective deduction typically reaches 12%–13% (approx. 12.9% + $0.30).' },
      { question: 'Does Gumroad handle sales tax and VAT?', answer: 'Yes, Gumroad acts as a Merchant of Record (MoR) and automatically calculates, collects, and remits worldwide sales tax and VAT on digital goods.' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'lemon-squeezy-calculator',
    slug: 'standard',
    title: 'Lemon Squeezy Fee Calculator (5% + $0.50 Merchant of Record)',
    shortTitle: 'Lemon Squeezy Fee',
    subtitle: 'Calculate exact fees for selling SaaS, digital downloads, and subscriptions with Lemon Squeezy Merchant of Record (MoR).',
    suiteType: 'merchant',
    gatewayId: 'lemon_squeezy',
    defaultAmount: 200,
    currencySymbol: '$',
    formulaLatex: '\\text{Lemon Squeezy Fee} = (\\text{Gross} \\times 5\\%) + \\$0.50 \\quad | \\quad \\text{Net Payout} = \\text{Gross} - \\text{Fee}',
    formulaExplanation: 'Lemon Squeezy charges 5% + $0.50 per transaction as an MoR, fully absorbing global sales tax liability, EU VAT compliance, chargebacks, and invoicing.',
    sampleTiers: [
      { amount: 29, fee: 1.95, net: 27.05 },
      { amount: 99, fee: 5.45, net: 93.55 },
      { amount: 299, fee: 15.45, net: 283.55 },
      { amount: 1000, fee: 50.50, net: 949.50 },
    ],
    faqs: [
      { question: 'Why use an MoR like Lemon Squeezy instead of raw Stripe?', answer: 'Raw Stripe charges 2.9% + $0.30 but requires you to register and file taxes in every US state and EU country. Lemon Squeezy handles all sales tax compliance, invoicing, and cross-border currency payouts for a 5% fee.' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'shopify-fee-calculator',
    slug: 'standard',
    title: 'Shopify Payments Fee Calculator (2026 Online & In-Person Rates)',
    shortTitle: 'Shopify Payments Fee',
    subtitle: 'Calculate credit card transaction fees across Shopify Basic (2.9% + $0.30), Shopify (2.6% + $0.30), and Advanced (2.4% + $0.30).',
    suiteType: 'merchant',
    gatewayId: 'shopify_payments',
    defaultAmount: 150,
    currencySymbol: '$',
    formulaLatex: '\\text{Shopify Fee} = (\\text{Gross} \\times 2.9\\%) + \\$0.30 \\quad | \\quad \\text{Net} = \\text{Gross} - \\text{Fee}',
    formulaExplanation: 'Shopify Payments charges 2.9% + $0.30 on the Basic plan, 2.6% + $0.30 on the Shopify plan, and 2.4% + $0.30 on Advanced. Using third-party processors incurs an additional 2.0% to 0.5% fee.',
    sampleTiers: [
      { amount: 50, fee: 1.75, net: 48.25 },
      { amount: 150, fee: 4.65, net: 145.35 },
      { amount: 500, fee: 14.80, net: 485.20 },
      { amount: 2500, fee: 72.80, net: 2427.20 },
    ],
    faqs: [
      { question: 'What is the third-party gateway penalty on Shopify?', answer: 'If you choose not to use Shopify Payments and integrate external gateways like PayPal or Authorize.Net directly, Shopify charges an extra 2.0% (Basic), 1.0% (Shopify), or 0.5% (Advanced) penalty on gross turnover.' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'gateway-comparator',
    slug: 'stripe-paypal-square',
    title: 'Stripe vs PayPal vs Square 3-Way Fee Comparator (2026)',
    shortTitle: 'Stripe vs PayPal vs Square',
    subtitle: 'Side-by-side merchant fee analysis for credit card processing. Compare net payouts, international surcharges, and find the lowest fee processor.',
    suiteType: 'comparator',
    defaultAmount: 500,
    currencySymbol: '$',
    formulaLatex: '\\text{Spread} = \\text{Max}(\\text{Fees}) - \\text{Min}(\\text{Fees})',
    formulaExplanation: 'Direct mathematical comparison across Stripe (2.9% + $0.30), PayPal (3.49% + $0.49), and Square (2.9% + $0.30) to pinpoint the exact payout differential per transaction volume.',
    sampleTiers: [
      { amount: 100, fee: 2.90, net: 97.10 },
      { amount: 500, fee: 14.80, net: 485.20 },
      { amount: 2500, fee: 72.80, net: 2427.20 },
      { amount: 10000, fee: 290.30, net: 9709.70 },
    ],
    faqs: [
      { question: 'Which gateway is cheaper: Stripe, PayPal, or Square?', answer: 'For standard US credit cards, Stripe and Square tie at 2.9% + $0.30, while PayPal is significantly higher at 3.49% + $0.49. For in-person point of sale, Square (2.6% + $0.10) is cheapest.' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'profit-margin-calculator',
    slug: 'standard',
    title: 'Profit Margin & Markup Calculator (Gross & Net Profit %)',
    shortTitle: 'Profit Margin Calculator',
    subtitle: 'Calculate Gross Profit Margin, Net Profit, and Markup percentage from your selling price and cost of goods sold (COGS).',
    suiteType: 'profit_margin',
    defaultAmount: 10000,
    currencySymbol: '$',
    formulaLatex: '\\text{Gross Margin \\%} = \\frac{\\text{Revenue} - \\text{COGS}}{\\text{Revenue}} \\times 100 \\quad | \\quad \\text{Markup \\%} = \\frac{\\text{Revenue} - \\text{COGS}}{\\text{COGS}} \\times 100',
    formulaExplanation: 'Margin expresses profit as a percentage of total sales price, whereas Markup expresses profit as a percentage above cost of goods.',
    sampleTiers: [
      { amount: 1000, fee: 400, net: 600 },
      { amount: 5000, fee: 2000, net: 3000 },
      { amount: 10000, fee: 4000, net: 6000 },
      { amount: 50000, fee: 20000, net: 30000 },
    ],
    faqs: [
      { question: 'What is the difference between profit margin and markup?', answer: 'Profit margin is profit divided by selling price (what percentage of sales is retained). Markup is profit divided by cost of goods sold (how much cost is marked up to reach sale price).' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'break-even-calculator',
    slug: 'standard',
    title: 'Break-Even Point Calculator (Units, Sales Revenue & Margin)',
    shortTitle: 'Break-Even Calculator',
    subtitle: 'Determine the exact unit volume and revenue required to cover fixed operating costs and reach profitability.',
    suiteType: 'break_even',
    defaultAmount: 15000,
    currencySymbol: '$',
    formulaLatex: '\\text{Break-Even Units} = \\frac{\\text{Fixed Costs}}{\\text{Sale Price} - \\text{Variable Cost}} = \\frac{\\text{Fixed Costs}}{\\text{Contribution Margin}}',
    formulaExplanation: 'Every unit sold provides a Contribution Margin (Price - Variable Cost) that pays down fixed costs. Once cumulative contribution margin equals fixed overhead, the business breaks even.',
    sampleTiers: [
      { amount: 5000, fee: 2500, net: 2500 },
      { amount: 15000, fee: 7500, net: 7500 },
      { amount: 50000, fee: 25000, net: 25000 },
    ],
    faqs: [
      { question: 'Why is the contribution margin important?', answer: 'Contribution margin reveals how much revenue from each single unit contributes toward covering fixed rent, payroll, and debt.' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'roi-calculator',
    slug: 'standard',
    title: 'ROI Calculator (Return on Investment & Annualized CAGR %)',
    shortTitle: 'ROI Calculator',
    subtitle: 'Calculate total return on investment percentage, annualized return rate (CAGR), and net profit multiple.',
    suiteType: 'roi',
    defaultAmount: 25000,
    currencySymbol: '$',
    formulaLatex: '\\text{ROI \\%} = \\frac{\\text{Final Value} - \\text{Initial Cost}}{\\text{Initial Cost}} \\times 100 \\quad | \\quad \\text{CAGR} = \\left( \\frac{\\text{Final}}{\\text{Initial}} \\right)^{\\frac{1}{t}} - 1',
    formulaExplanation: 'Total ROI measures overall percentage gain or loss, while Compound Annual Growth Rate (CAGR) annualizes returns over multiple years for objective benchmarking.',
    sampleTiers: [
      { amount: 10000, fee: 5000, net: 15000 },
      { amount: 25000, fee: 15000, net: 40000 },
      { amount: 100000, fee: 75000, net: 175000 },
    ],
    faqs: [
      { question: 'What is a good ROI percentage?', answer: 'In public equity markets, 7% to 10% annualized ROI is standard. In high-growth technology ventures and digital products, investors seek 20%+ annualized ROI.' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'quarterly-tax-calculator',
    slug: '1040-es',
    title: 'Quarterly Estimated Tax Calculator 2026 (IRS Form 1040-ES)',
    shortTitle: 'Quarterly Tax Calculator',
    subtitle: 'Estimate quarterly tax vouchers for freelancers and 1099 contractors. Compute Schedule SE self-employment tax and federal income tax due dates.',
    suiteType: 'quarterly_tax',
    defaultAmount: 120000,
    currencySymbol: '$',
    formulaLatex: '\\text{Quarterly Voucher} = \\frac{\\text{15.3\\% SE Tax} + \\text{Federal Income Tax} - \\text{W-2 Withholding}}{4}',
    formulaExplanation: 'The IRS requires quarterly prepayments on self-employed earnings. 92.35% of net profit is subject to 15.3% SE tax, plus marginal income tax brackets.',
    sampleTiers: [
      { amount: 60000, fee: 12500, net: 47500 },
      { amount: 120000, fee: 28400, net: 91600 },
      { amount: 200000, fee: 54200, net: 145800 },
    ],
    faqs: [
      { question: 'What are the 2026 IRS quarterly tax due dates?', answer: 'Q1 is due April 15, 2026; Q2 is due June 15, 2026; Q3 is due September 15, 2026; Q4 is due January 15, 2027.' },
      { question: 'What is the safe harbor rule for underpayment penalties?', answer: 'To avoid underpayment penalties, prepay at least 90% of your current year tax liability or 100% of your prior year tax (110% if prior year AGI exceeded $150,000).' },
    ],
    geoRegion: 'US',
  },
  {
    category: 'uk-ir35-calculator',
    slug: 'contractor',
    title: 'UK IR35 Calculator 2026 (Inside vs Outside IR35 Take-Home Pay)',
    shortTitle: 'UK IR35 Calculator',
    subtitle: 'Compare Inside IR35 (umbrella company deemed employment) vs Outside IR35 (PSC limited company). Calculate employer NI, dividend tax, and net pay.',
    suiteType: 'uk_ir35',
    defaultAmount: 550,
    currencySymbol: '£',
    formulaLatex: '\\text{Net Advantage} = \\text{Outside PSC Take-Home} - \\text{Inside Umbrella Take-Home}',
    formulaExplanation: 'Inside IR35 subjects contractor turnover to 13.8% Employer NI, 0.5% Apprenticeship Levy, Employee NI, and PAYE tax. Outside IR35 allows tax-efficient director salaries and dividends.',
    sampleTiers: [
      { amount: 400, fee: 160, net: 240 },
      { amount: 550, fee: 215, net: 335 },
      { amount: 800, fee: 310, net: 490 },
      { amount: 1200, fee: 460, net: 740 },
    ],
    faqs: [
      { question: 'What is the take-home pay difference between Inside and Outside IR35?', answer: 'Operating Outside IR35 typically provides 15% to 25% higher net take-home pay compared to an umbrella company inside IR35 for the identical daily rate.' },
      { question: 'Who determines IR35 status?', answer: 'Under the Off-Payroll Working rules, medium and large private sector clients and public sector bodies are legally responsible for assessing the IR35 status of their contractors using the HMRC CEST tool.' },
    ],
    geoRegion: 'UK',
  }
);

let addedCount = 0;
for (const item of newItems) {
  const key = `${item.category}::${item.slug}`;
  if (!existingKeys.has(key)) {
    matrix.items.push(item);
    existingKeys.add(key);
    addedCount++;
  }
}

fs.writeFileSync(matrixPath, JSON.stringify(matrix, null, 2), 'utf8');
console.log(`Successfully added ${addedCount} new programmatic items to geo-matrix.json. Total items now: ${matrix.items.length}`);
