import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const matrixPath = path.resolve(__dirname, '../data/geo-matrix.json');
const raw = fs.readFileSync(matrixPath, 'utf8');
const data = JSON.parse(raw);

// Check if 1099-tax-estimator already exists
const has1099 = data.some((x) => x.category === 'freelance-rate-calculator' && x.slug === '1099-tax-estimator');
if (!has1099) {
  data.push({
    category: 'freelance-rate-calculator',
    slug: '1099-tax-estimator',
    title: '1099 Tax Estimator | Calculate 15.3% SE Tax',
    shortTitle: '1099 Tax Estimator',
    subtitle: 'Estimate quarterly self-employment taxes with the 15.3% SE tax rate. Know exactly how much to set aside from every invoice and avoid IRS penalty fees.',
    suiteType: 'freelance',
    roleTitle: '1099 Self-Employed Contractor',
    defaultAmount: 100000,
    currencySymbol: '$',
    annualOverhead: 12000,
    formulaLatex: '\\text{Rate} = \\frac{\\frac{\\text{Target Net}}{1 - \\text{Tax Rate}} + \\text{Overhead}}{\\text{Billable Weeks} \\times \\text{Weekly Billable Hours}} \\times (1 + \\text{Margin})',
    formulaExplanation: 'Freelancers and 1099 contractors pay 15.3% SECA self-employment tax (Social Security + Medicare) plus federal and state income taxes. This calculator budgets tax reserve payments, overhead, and take-home pay.',
    sampleTiers: [
      { amount: 50000, rate: 58.33, dayRate: 466.67, monthly: 2333.33 },
      { amount: 90000, rate: 98.44, dayRate: 787.5, monthly: 3937.5 },
      { amount: 120000, rate: 128.52, dayRate: 1028.13, monthly: 5140.63 },
      { amount: 180000, rate: 188.67, dayRate: 1509.38, monthly: 7546.88 },
    ],
    faqs: [
      {
        question: 'What is the self-employment tax rate for 1099 contractors?',
        answer: 'The federal self-employment tax rate is 15.3%, consisting of 12.4% for Social Security (up to annual wage base limits) and 2.9% for Medicare with no wage cap.',
      },
      {
        question: 'When are quarterly estimated taxes due for 1099 contractors?',
        answer: 'IRS Form 1040-ES quarterly estimated taxes are due on April 15, June 15, September 15, and January 15 of the following tax year.',
      },
      {
        question: 'How much of each invoice should a 1099 contractor save for taxes?',
        answer: 'Most financial advisors recommend saving 25% to 30% of every client payment into a dedicated tax savings account to cover self-employment and income taxes.',
      },
    ],
    geoRegion: 'US',
  });
  console.log('Added 1099-tax-estimator');
}

// Check if amazon-fba-fee-calculator already exists
const hasFba = data.some((x) => x.category === 'ecommerce-profit-calculator' && x.slug === 'amazon-fba-fee-calculator');
if (!hasFba) {
  data.push({
    category: 'ecommerce-profit-calculator',
    slug: 'amazon-fba-fee-calculator',
    title: 'Amazon FBA Fee Calculator | 2024 Rates & Profit',
    shortTitle: 'Amazon FBA Fee Calculator',
    subtitle: 'Calculate 2024 Amazon FBA fulfillment and 15% referral fees. See your exact net profit per unit and break-even ROAS to protect your e-commerce margins.',
    suiteType: 'ecommerce',
    platform: 'amazon_fba',
    defaultPrice: 39.99,
    defaultCogs: 10.0,
    defaultFreight: 2.5,
    defaultPrep: 1.2,
    defaultAdSpend: 8.0,
    currencySymbol: '$',
    formulaLatex: '\\text{Net Profit} = \\text{Price} - (\\text{Landed Cost} + \\text{Platform Fees} + \\text{Fulfillment} + \\text{CAC}) \\quad | \\quad \\text{Break-Even ROAS} = \\frac{\\text{Price}}{\\text{Gross Contribution}}',
    formulaExplanation: 'Calculates 2024 Amazon FBA referral commission (standard 15%), pick-and-pack fulfillment fees, landed product costs, and advertising CAC to determine exact unit margin and break-even ROAS.',
    sampleTiers: [
      { units: 100, label: '100 Units / mo' },
      { units: 500, label: '500 Units / mo' },
      { units: 1000, label: '1,000 Units / mo' },
      { units: 5000, label: '5,000 Units / mo' },
    ],
    faqs: [
      {
        question: 'What are the 2024 Amazon FBA fee changes?',
        answer: '2024 Amazon FBA rates include updated size-tier fulfillment rates, a low-inventory-level fee for products with under 28 days of supply, and inbound placement service fee options.',
      },
      {
        question: 'How much is the Amazon referral fee?',
        answer: 'Amazon charges a standard referral commission of 15% for most retail categories, ranging between 8% and 20% depending on the specific product category.',
      },
      {
        question: 'How do I calculate Amazon FBA net profit per unit?',
        answer: 'Subtract landed COGS, inbound shipping, Amazon referral fee (typically 15%), FBA fulfillment pick-and-pack, and advertising cost per sale (CAC) from the retail selling price.',
      },
    ],
    geoRegion: 'US',
  });
  console.log('Added amazon-fba-fee-calculator');
}

fs.writeFileSync(matrixPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Total items now:', data.length);
