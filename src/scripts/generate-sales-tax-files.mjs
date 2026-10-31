import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { US_STATE_SALES_TAX_DATA } from '../../data/salesTax.ts';
import { STATE_STATUTORY_METADATA } from './state-statutory-metadata.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'content/sales-tax');

const formatCurrency = (num) => `$${Number(num).toLocaleString('en-US')}`;

for (const [slug, meta] of Object.entries(STATE_STATUTORY_METADATA)) {
  const data = US_STATE_SALES_TAX_DATA[slug];
  if (!data) {
    console.error(`Missing data for state ${slug}`);
    continue;
  }

  const stateName = data.name;
  const baseRate = data.baseRate.value;
  const maxCombined = data.maxCombinedRate.value;
  const avgCombined = data.combinedAverageRate.value;
  const nexusThreshold = data.economicNexusThreshold.value;
  const agency = data.agencyFullName;
  const sourceUrl = data.sourceUrl;
  const statute = meta.statute;
  const isNoSalesTax = baseRate === 0 && maxCombined === 0;
  const hasLocal = data.hasLocalSurtaxes;
  const sourcing = data.isDestinationBased ? 'destination-based' : 'origin-based';

  // Format cities bullet points
  const cityBullets = meta.cities
    .map(
      (c) =>
        `- **${c.name}**: **${c.total} total combined rate** (${baseRate.toFixed(2)}% state base + ${c.local} local surcharge). ${c.note}`
    )
    .join('\n');

  // Worked example numbers
  const exAmount = 500;
  const exRate = avgCombined > 0 ? avgCombined : baseRate > 0 ? baseRate : 0;
  const exTax = Number(((exAmount * exRate) / 100).toFixed(2));
  const exGross = Number((exAmount + exTax).toFixed(2));

  // Reverse worked example numbers
  const revGross = 250;
  const revNet = exRate > 0 ? Number((revGross / (1 + exRate / 100)).toFixed(2)) : revGross;
  const revTax = Number((revGross - revNet).toFixed(2));

  const content = `import type { PageContent } from '../types.ts';

export const ${slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Content: PageContent = {
  slug: '${slug}',
  family: 'sales-tax',
  title: '${stateName} Sales Tax Calculator (${baseRate.toFixed(2)}% to ${maxCombined.toFixed(2)}%) | FeeKit',
  metaDescription:
    'Calculate ${stateName} sales and use tax with verified ${agency} rates (${baseRate.toFixed(2)}% base, max ${maxCombined.toFixed(2)}%). Covers economic nexus (${formatCurrency(nexusThreshold)}), local surtaxes, sourcing, and exemptions.',
  h1: '${stateName} Sales Tax Calculator & ${agency} Statutory Guide',
  lastVerified: '${data.lastVerified}',
  primarySource: {
    name: '${agency}',
    url: '${sourceUrl}',
    citation: '${statute}, and official administrative rules published by ${agency}.',
  },
  overview:
    '${stateName} levies a statewide base sales and use tax rate of ${baseRate.toFixed(2)}% under ${statute}. ${
    isNoSalesTax
      ? `${stateName} is one of only five US states without a general statewide retail sales tax, meaning retail purchases of tangible goods and services are exempt at the state level.`
      : hasLocal
      ? `Local taxing jurisdictions—including counties, municipalities, and special transit authorities—levy additional discretionary sales surtaxes ranging from 0.00% up to ${(maxCombined - baseRate).toFixed(2)}%, resulting in combined retail sales tax rates as high as ${maxCombined.toFixed(2)}% (averaging approximately ${avgCombined.toFixed(2)}% statewide).`
      : `Unlike states with fragmented local jurisdictions, ${stateName} maintains a uniform statewide sales tax rate with zero local municipal or county option sales taxes.`
  } Remote out-of-state merchants establish economic nexus upon reaching ${formatCurrency(nexusThreshold)} in annual sales delivered into the state under post-Wayfair statutory rules.',
  sections: [
    {
      id: '${slug}-statutory-rates-local-examples',
      title: '${stateName} Base Sales Tax Rate and Real Local Rate Benchmarks',
      body: \`Under ${statute}, the ${stateName} sales tax structure operates with verified statutory benchmarks:

${
  isNoSalesTax
    ? `- **Statewide Retail Sales Tax Rate**: **0.00%**. ${stateName} does not assess retail sales tax on commercial merchandise, electronics, or clothing at checkout.
- **Municipal and Special District Taxes**: General consumer retail transactions incur zero municipal sales taxes, though specialized local excise taxes may apply to specific industries (such as resort accommodations or business gross receipts).`
    : `- **Statewide Baseline Rate**: **${baseRate.toFixed(2)}%**. Applies uniformly to all non-exempt tangible personal property and taxable digital transactions statewide.
- **Local Discretionary Surtax Range**: **0.00% to ${(maxCombined - baseRate).toFixed(2)}%**. Local jurisdictions enforce discretionary levies to fund municipal infrastructure, public safety, and regional transit systems.
- **Statewide Maximum Ceiling**: **${maxCombined.toFixed(2)}%**. The highest combined statutory sales tax rate legally assessed across any jurisdiction in ${stateName}.
- **Statewide Combined Average**: **${avgCombined.toFixed(2)}%**. The population-weighted average rate experienced by consumers across major metropolitan trade centers.`
}

### Real-World Local Rate Examples in ${stateName}:
${cityBullets}\`,
    },
    {
      id: '${slug}-taxability-rules-saas-goods',
      title: '${stateName} Taxability Rules: Groceries, Clothing, SaaS, and Digital Property',
      body: \`Taxability in ${stateName} is determined by statutory product classifications enforced by the ${agency}:

- **Software as a Service (SaaS) & Cloud Software**: ${data.saasTaxable === 'taxable' ? '**Taxable**' : data.saasTaxable === 'exempt' ? '**Exempt**' : '**Partially Taxable / Conditional**'}. ${meta.saasDetails}
- **Everyday Clothing & Footwear**: ${data.clothingTaxable === 'exempt' ? '**100% Exempt**' : '**Fully Taxable**'}. ${meta.clothingDetails}
- **Unprepared Groceries & Food**: ${data.groceriesTaxable === 'exempt' ? '**Exempt**' : '**Taxable at Standard or Reduced Rate**'}. Unprepared grocery staples for human consumption are exempt from state sales tax, while prepared hot restaurant meals, confectioneries, and soft drinks are subject to full standard rates.
- **Digital Downloads & Electronic Products**: Downloaded music, eBooks, digital media, and video streaming are classified as taxable property when transferred electronically, unless specific statutory exemptions apply.
- **Shipping & Delivery Charges**: ${data.shippingTaxable === 'taxable' ? '**Taxable**' : data.shippingTaxable === 'exempt' ? '**Exempt**' : '**Conditional**'}. ${meta.shippingDetails}
- **Professional Services**: Standalone professional, accounting, consulting, and legal services are generally non-taxable in ${stateName} unless specifically enumerated in the state tax code.\`,
    },
    {
      id: '${slug}-economic-nexus-marketplace-rules',
      title: '${stateName} Economic Nexus Threshold (${formatCurrency(nexusThreshold)}) & Marketplace Facilitator Laws',
      body: \`Following the United States Supreme Court ruling in *South Dakota v. Wayfair, Inc.*, ${stateName} enforces statutory economic nexus provisions for remote sellers:

- **Economic Nexus Dollar Threshold**: **${formatCurrency(nexusThreshold)}** in gross sales or delivered taxable sales within the current or immediately preceding calendar year.
- **Transaction Count Threshold**: Most states that adopted a 200-transaction threshold have eliminated it to protect micro-businesses, focusing strictly on gross sales volume.
- **Marketplace Facilitator Legislation**: Major e-commerce platforms (Amazon, eBay, Etsy, Walmart Marketplace, TikTok Shop) are legally designated as Marketplace Facilitators in ${stateName}. Facilitators must automatically calculate, collect, and remit sales tax on all sales made through their platforms, shielding independent merchants from direct tax filing liabilities on facilitated orders.
- **In-State Physical Nexus**: Maintaining physical inventory in a local third-party fulfillment center (such as Amazon FBA warehouses located within ${stateName}), traveling sales representatives, or resident remote employees creates immediate physical nexus regardless of sales volume.\`,
    },
    {
      id: '${slug}-origin-destination-sourcing',
      title: '${stateName} Sourcing Framework: ${data.isDestinationBased ? 'Destination Sourcing' : 'Origin Sourcing'} Rules',
      body: \`${stateName} operates primarily under a **${sourcing}** regime for sales tax collection:

1. **Intrastate Sales (In-State Merchant to In-State Buyer)**: ${
    data.isDestinationBased
      ? 'Sales tax is sourced to the **destination location** where the buyer receives or takes possession of the product. The merchant must charge the combined state and local rate in effect at the purchaser’s delivery address.'
      : 'Sales tax is sourced to the **origin location** of the seller’s place of business (storefront or distribution hub) where the order is accepted or fulfilled.'
  }
2. **Interstate Sales (Remote Out-of-State Sellers)**: Remote sellers delivering merchandise into ${stateName} from other states must source transactions to the **delivery destination**, collecting the precise combined local rate applicable to the customer's delivery ZIP code.
3. **Audit Defense & Rate Lookup**: Merchants must utilize certified address verification tools or state-provided GIS rate tables to ensure correct jurisdiction tax assignment, as five-digit ZIP codes frequently cross municipal boundaries.\`,
    },
    {
      id: '${slug}-registration-filing-compliance',
      title: 'Permit Registration, Return Due Dates, and Compliance Penalties',
      body: \`Compliance standards administered by the ${agency}:

- **Tax Permit Registration**: Businesses establishing nexus must register for a Sales and Use Tax Permit prior to making taxable sales. Registration is handled online via the **${meta.agencyPortal}**.
- **Filing Frequency & Due Dates**: The ${agency} assigns filing frequencies (monthly, quarterly, or annual) based on anticipated tax collection volume. Standard returns are due on the **${meta.dueDay}**.
- **Sales Tax Holiday**: ${meta.holiday}
- **Record Retention Mandate**: Taxpayers must preserve comprehensive sales registers, invoices, exemption certificates, and electronic logs for a minimum statutory period of **${data.recordRetentionYears.value} years** for audit defense.
- **Delinquency Penalties**: Late filings incur statutory penalties typically starting at 5% of the tax due for the first 30 days, escalating up to 10% to 25% for prolonged delinquency, alongside statutory compounded interest.\`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Retail Sale in ${stateName} (${exRate.toFixed(2)}% Combined Rate)',
    scenario:
      'A retailer sells $500.00 of taxable commercial goods to a customer in ${stateName} where the combined state and local sales tax rate is ${exRate.toFixed(2)}%.',
    inputs: {
      merchandiseSubtotal: '$500.00',
      combinedSalesTaxRate: '${exRate.toFixed(2)}%',
      jurisdiction: '${stateName} Representative Rate Area',
    },
    steps: [
      {
        label: 'Pre-Tax Merchandise Subtotal',
        formula: 'Agreed invoice price',
        amount: '$500.00',
        note: 'Taxable merchandise base',
      },
      {
        label: '${stateName} Sales Tax Assessed',
        formula: '$500.00 × ${exRate.toFixed(2)}%',
        amount: '$${exTax.toFixed(2)}',
        note: 'Calculated using exact half-up statutory rounding',
      },
      {
        label: 'Total Invoiced Checkout Amount',
        formula: '$500.00 + $${exTax.toFixed(2)}',
        amount: '$${exGross.toFixed(2)}',
        note: 'Final total billed to the customer',
      },
    ],
    takeaway:
      'On a $500.00 taxable retail purchase at ${exRate.toFixed(2)}%, the sales tax equals $${exTax.toFixed(2)}, bringing the total customer invoice to $${exGross.toFixed(2)}.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Extracting Net Revenue from a $${revGross.toFixed(2)} Gross Receipt in ${stateName}',
    scenario:
      'A merchant collects a gross cash receipt of $${revGross.toFixed(2)} for a taxable item in ${stateName} at a combined tax rate of ${exRate.toFixed(2)}%. How much represents actual sales revenue versus sales tax owed?',
    inputs: {
      grossReceiptCollected: '$${revGross.toFixed(2)}',
      combinedTaxRate: '${exRate.toFixed(2)}%',
    },
    steps: [
      {
        label: 'Statutory Net Sales Extraction Formula',
        formula: '$${revGross.toFixed(2)} ÷ (1 + ${(exRate / 100).toFixed(4)})',
        amount: '$${revNet.toFixed(2)}',
        note: 'Actual retained product sales revenue',
      },
      {
        label: 'Sales Tax Remittance Liability',
        formula: '$${revGross.toFixed(2)} - $${revNet.toFixed(2)}',
        amount: '$${revTax.toFixed(2)}',
        note: 'Must be remitted to the ${agency}',
      },
      {
        label: 'Verification Math',
        formula: '$${revNet.toFixed(2)} × ${exRate.toFixed(2)}%',
        amount: '$${revTax.toFixed(2)}',
        note: 'Reconciles perfectly to gross receipt',
      },
    ],
    takeaway:
      'From a gross receipt of $${revGross.toFixed(2)} in ${stateName} at ${exRate.toFixed(2)}%, the business retains $${revNet.toFixed(2)} in net sales revenue and owes $${revTax.toFixed(2)} in sales tax to the ${agency}.',
  },
  faqs: [
    {
      question: 'What is the base sales tax rate in ${stateName} for 2026?',
      answer:
        'The statewide base sales tax rate in ${stateName} is ${baseRate.toFixed(2)}%. When combined with municipal and county discretionary local surtaxes, the total rate ranges from ${baseRate.toFixed(2)}% up to ${maxCombined.toFixed(2)}% depending on the exact delivery address.',
      sourceUrl: '${sourceUrl}',
    },
    {
      question: 'What is the economic nexus threshold for remote sellers in ${stateName}?',
      answer:
        'Under ${stateName} law, out-of-state remote sellers establish economic nexus when their cumulative gross sales or delivered taxable sales exceed ${formatCurrency(nexusThreshold)} in the current or prior calendar year.',
      sourceUrl: '${sourceUrl}',
    },
    {
      question: 'Is Software as a Service (SaaS) taxable in ${stateName}?',
      answer:
        '${meta.saasDetails}',
      sourceUrl: '${sourceUrl}',
    },
    {
      question: 'Are clothing and groceries taxable in ${stateName}?',
      answer:
        '${meta.clothingDetails} Unprepared groceries for home consumption are generally exempt from state-level sales tax.',
      sourceUrl: '${sourceUrl}',
    },
    {
      question: 'How do I register for a sales tax permit in ${stateName}?',
      answer:
        'You can register for a sales tax permit online through the ${meta.agencyPortal}. Registration requires your Federal Employer Identification Number (FEIN), business entity details, and North American Industry Classification System (NAICS) code.',
      sourceUrl: '${sourceUrl}',
    },
  ],
};

export default ${slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Content;
`;

  const filePath = path.join(OUTPUT_DIR, `${slug}.ts`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Generated bespoke content for ${slug}`);
}

console.log('Done generating all 40 state content files!');

