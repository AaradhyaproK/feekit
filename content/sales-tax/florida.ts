import type { PageContent } from '../types.ts';

export const floridaContent: PageContent = {
  slug: 'florida',
  family: 'sales-tax',
  title: 'Florida Sales Tax Calculator (6.00% to 7.50%) | FeeKit',
  metaDescription:
    'Calculate Florida sales and use tax with verified FDOR rates (6.00% base, max 7.50%). Details the $5,000 discretionary surtax cap, SaaS exemption, and $100k economic nexus.',
  h1: 'Florida Sales Tax Calculator & Department of Revenue Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Florida Department of Revenue',
    url: 'https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx',
    citation: 'Fla. Stat. §§ 212.05, 212.054 (Discretionary Surtax $5,000 Cap), and 212.0596 (Remote Sales).',
  },
  overview:
    'Florida levies a statewide base sales tax of 6.00% under Fla. Stat. § 212.05. Florida counties are authorized to levy discretionary sales surtaxes ranging from 0.50% to 1.50%, bringing effective combined tax rates between 6.50% and 7.50% in most metropolitan regions. A critical statutory hallmark of Florida sales tax is the $5,000 local discretionary surtax limitation: county surtaxes apply only to the first $5,000 of purchase price on a single item of tangible personal property, with any remaining value taxed strictly at the 6.00% state rate.',
  sections: [
    {
      id: 'statutory-rates-local-examples-florida',
      title: 'Florida Base Rate, County Discretionary Surtaxes, and Benchmarks',
      body: `The state rate of 6.00% applies universally, while county discretionary surtaxes vary based on local voter referendums:

1. **Miami-Dade County (Miami, Coral Gables)**: **7.00% combined rate**. Consists of 6.00% Florida base rate and 1.00% Miami-Dade County discretionary surtax (dedicated to transit and county infrastructure).
2. **Hillsborough County (Tampa)**: **7.50% combined rate**. Combines 6.00% state base rate and 1.50% county discretionary surtaxes (school board and general county infrastructure levies).
3. **Orange County (Orlando)**: **6.50% combined rate**. Combines 6.00% state base rate and 0.50% school capital outlay discretionary surtax.
4. **Citrus County**: **6.00% combined rate**. Citrus County levies 0.00% in local surtaxes, making transactions subject exclusively to the 6.00% state baseline.`,
    },
    {
      id: 'surtax-cap-saas-taxability-florida',
      title: 'The Florida $5,000 Discretionary Surtax Cap and SaaS Exemption Rules',
      body: `Florida maintains specific statutory exemptions and caps that distinguish it from other high-population states:

- **The Statutory $5,000 Discretionary Surtax Cap**: Under Fla. Stat. § 212.054(2)(b), the local discretionary sales surtax applies **only to the first $5,000** of the purchase price on a single item of tangible personal property. The portion of the item's purchase price exceeding $5,000 is subject exclusively to the 6.00% Florida state sales tax. For example, a $12,000 commercial equipment sale in a 7.00% jurisdiction (1.00% surtax) incurs 7.00% on the first $5,000 ($350) and 6.00% on the remaining $7,000 ($420), totaling $770 rather than $840.
- **Software as a Service (SaaS)**: **Non-Taxable**. Under Florida Department of Revenue guidance and Technical Assistance Advisement (TAA) 20A-018, remotely hosted software, cloud applications, and data access where the customer does not receive tangible storage media or exclusive operational control are classified as non-taxable services.
- **Digital Products & Downloads**: Pure digital goods such as eBooks, digital music, and online streaming without transfer of tangible property are generally exempt from Florida sales tax (subject to specific communications services tax rules for streaming services).
- **Unprepared Groceries & Food**: **Exempt**. Essential food products, produce, and dairy sold in grocery stores are exempt under Fla. Stat. § 212.08(1). Prepared meals, heated takeout food, and alcoholic beverages are fully taxable.
- **Clothing & Footwear**: **Taxable**. Clothing is subject to full state and county sales tax year-round, except during official legislative sales tax holidays (such as the annual Back-to-School holiday).
- **Shipping & Freight**: **Taxable if Mandatory**. Under Fla. Admin. Code R. 12A-1.045, delivery charges are taxable if they are included in the taxable item's purchase price or cannot be avoided by the purchaser (e.g., in-store pickup is not offered).`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-florida',
      title: 'Florida Economic Nexus: The $100,000 Remote Sales Threshold',
      body: `Under Florida Senate Bill 50 codified at Fla. Stat. § 212.0596:

- **$100,000 Gross Retail Sales Standard**: An out-of-state remote seller or marketplace vendor creates economic nexus in Florida if total retail sales of tangible personal property delivered into the state exceed **$100,000** during the previous calendar year.
- **No Transaction Count Rule**: Florida does not enforce a 200-transaction count threshold. Economic nexus is governed exclusively by the $100,000 gross revenue threshold.
- **Marketplace Facilitator Provisions**: Marketplace facilitators such as Amazon, Walmart, and Etsy are legally required to collect and remit Florida sales tax on all sales made through their platforms into Florida. Remote sellers do not need to register or remit tax for sales conducted exclusively through registered marketplace facilitators.`,
    },
    {
      id: 'registration-filing-and-collection-allowance-florida',
      title: 'Destination Sourcing, Vendor Filing, and Timely Filing Allowances',
      body: `Operating as a registered dealer in Florida involves specific administrative guidelines:

- **Destination-Based Sourcing**: For goods delivered to a Florida customer, sales tax is calculated based on the delivery destination within Florida, applying the local county surtax of the recipient's county.
- **Dealer Registration**: Businesses register online through Florida Business Tax Application (Form DR-1) to receive a Florida Certificate of Registration and Annual Resale Certificate for Sales Tax (Form DR-13).
- **Return Due Dates (Form DR-15)**: Sales tax returns are due on the **1st day of the month** following each reporting period and are considered delinquent after the **20th day of that month**. If the 20th falls on a weekend or state holiday, returns are due on the next business day.
- **Vendor Collection Allowance**: Dealers who file Form DR-15 and pay electronically on or before the 20th are granted a statutory collection allowance under Fla. Stat. § 212.12 of **2.5% of the first $1,200** of tax due (capped at a maximum discount of **$30.00** per monthly return).`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Commercial Equipment Purchase in Miami-Dade County ($5,000 Surtax Cap)',
    scenario:
      'A business in Miami-Dade County purchases a commercial refrigeration unit for $15,000.00. The combined Florida sales tax rate is 7.00% (6.00% state + 1.00% Miami-Dade discretionary surtax).',
    inputs: {
      equipmentPurchasePrice: '$15,000.00',
      deliveryLocation: 'Miami, FL (Miami-Dade County)',
      stateSalesTaxRate: '6.00%',
      countyDiscretionarySurtax: '1.00% (Subject to $5,000 statutory cap)',
    },
    steps: [
      {
        label: 'Compute Florida State Sales Tax (6.00%)',
        formula: '$15,000.00 × 0.0600',
        amount: '$900.00',
        note: 'State tax applies to the full purchase price without limitation.',
      },
      {
        label: 'Compute Miami-Dade Surtax on First $5,000',
        formula: '$5,000.00 × 0.0100',
        amount: '$50.00',
        note: 'Fla. Stat. § 212.054(2)(b) discretionary surtax cap.',
      },
      {
        label: 'Compute Surtax on Remaining $10,000 Balance',
        formula: '$10,000.00 × 0.0000',
        amount: '$0.00',
        note: 'Statutorily exempt from local surtax.',
      },
      {
        label: 'Total Sales Tax Due to FDOR',
        formula: '$900.00 (State) + $50.00 (Local Surtax)',
        amount: '$950.00',
        note: 'Exact statutory tax due.',
      },
      {
        label: 'Total Invoiced Amount Charged to Purchaser',
        formula: '$15,000.00 + $950.00',
        amount: '$15,950.00',
        note: 'The $5,000 cap saves the purchaser $100.00 in local tax.',
      },
    ],
    takeaway:
      'Under Fla. Stat. § 212.054(2)(b), the county discretionary surtax applies only to the first $5,000 of purchase price for a single item of tangible personal property. The remaining $10,000 is taxed exclusively at the 6.00% state rate.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A retail vendor in Tampa (Hillsborough County) collects $100.00 cash inclusive of sales tax. Hillsborough County enforces a combined tax rate of 7.50% (6.0% state + 1.5% county surtax).',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Tampa, FL (Hillsborough County)',
      combinedTaxRate: '7.50%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.0750)',
        amount: '$93.02',
        note: '$100.00 ÷ 1.0750 = $93.0233, rounded to $93.02.',
      },
      {
        label: 'Extract Embedded Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $93.02)',
        amount: '$6.98',
        note: 'Tax liability owed to Florida Department of Revenue.',
      },
    ],
    takeaway:
      'Using the statutory reverse extraction formula Price ÷ (1 + r), a $100.00 tax-inclusive transaction in Tampa yields $93.02 in net retail revenue and $6.98 in sales tax.',
  },
  faqs: [
    {
      question: 'How does Florida’s $5,000 discretionary sales surtax cap work in practice?',
      answer:
        'Under Fla. Stat. § 212.054(2)(b), when a single item of tangible personal property is sold, the local county discretionary sales surtax (ranging from 0.50% to 1.50%) applies only to the first $5,000 of the purchase price. Any portion of the price above $5,000 is exempt from county surtax and is taxed exclusively at the 6.00% Florida state rate. Note that this cap applies on a per-item basis, not across the aggregate total of multiple smaller items on an invoice.',
    },
    {
      question: 'Is Software as a Service (SaaS) taxable in Florida?',
      answer:
        'No. Under current Florida Department of Revenue guidance and Technical Assistance Advisement 20A-018, SaaS subscriptions and cloud hosted software where the customer accesses programs across the internet without receiving tangible software media are non-taxable professional services.',
    },
    {
      question: 'What is the economic nexus threshold for remote sellers in Florida?',
      answer:
        'Florida requires remote sellers to register and collect sales tax once their gross retail sales of tangible personal property delivered into Florida exceed $100,000 during the prior calendar year. Florida does not enforce an order count threshold (such as 200 transactions).',
    },
    {
      question: 'When are monthly sales tax returns due to the Florida Department of Revenue?',
      answer:
        'Florida sales tax returns (Form DR-15) are due on the 1st day of the month following the reporting period and become delinquent if not received or postmarked by the 20th day of the month. If the 20th falls on a weekend or state legal holiday, filing is due on the next business day.',
    },
    {
      question: 'Can merchants keep a collection allowance discount for timely sales tax filing in Florida?',
      answer:
        'Yes. Registered dealers who file and pay their returns electronically on or before the 20th are entitled to a statutory collection allowance under Fla. Stat. § 212.12 of 2.5% of the first $1,200 of tax due, providing a maximum discount of $30.00 per return.',
    },
  ],
};

export default floridaContent;
