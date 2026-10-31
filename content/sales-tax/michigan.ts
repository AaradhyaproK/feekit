import type { PageContent } from '../types.ts';

export const michiganContent: PageContent = {
  slug: 'michigan',
  family: 'sales-tax',
  title: 'Michigan Sales Tax Calculator (Flat 6.00% Statewide) | FeeKit',
  metaDescription:
    'Calculate Michigan sales and use tax with verified Treasury rates (flat 6.00% statewide, 0% local). Details the Auto-Owners SaaS exemption, 2023 shipping reform, and $100k/200 tx nexus.',
  h1: 'Michigan Sales Tax Calculator & Department of Treasury Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Michigan Department of Treasury',
    url: 'https://www.michigan.gov/taxes/business-taxes/sales-use-tax',
    citation: 'Mich. Comp. Laws (MCL) §§ 205.52, 205.54g (Food Exemption), 205.52d (Nexus), and Public Acts 20 & 21 of 2023 (Delivery Charges).',
  },
  overview:
    'The State of Michigan levies a uniform statewide sales tax rate of 6.00% under MCL § 205.52. Under Article IX, Section 8 of the Michigan Constitution, local city and county governments are prohibited from levying local sales taxes, establishing an unvarying 6.00% statutory sales tax rate across all 83 Michigan counties. Key statutory benchmarks include the Auto-Owners Supreme Court precedent exempting cloud SaaS, recent legislative reforms exempting separately stated shipping charges under Public Acts 20 & 21 of 2023, and early payment discounts for registered dealers.',
  sections: [
    {
      id: 'flat-rate-structure-local-examples-michigan',
      title: 'Michigan’s Flat 6.00% Statewide Rate and Prohibition on Local Taxes',
      body: `Unlike the majority of US states, Michigan does not permit local sales tax surtaxes. The 6.00% rate applies uniformly across all jurisdictions:

1. **Detroit (Wayne County)**: **6.00% flat rate**. Composed of the 6.00% Michigan state levy and 0.00% local tax.
2. **Grand Rapids (Kent County)**: **6.00% flat rate**. Composed of the 6.00% Michigan state levy and 0.00% local tax.
3. **Ann Arbor (Washtenaw County)**: **6.00% flat rate**. Composed of the 6.00% Michigan state levy and 0.00% local tax.
4. **Lansing (Ingham County)**: **6.00% flat rate**. Composed of the 6.00% Michigan state levy and 0.00% local tax.`,
    },
    {
      id: 'auto-owners-saas-exemption-shipping-reform-michigan',
      title: 'The Auto-Owners SaaS Exemption, 2023 Shipping Exemption, and Food',
      body: `Michigan tax law contains landmark statutory protections and recent administrative reforms:

- **Software as a Service (SaaS)**: **Non-Taxable**. Following the landmark Michigan Supreme Court ruling in *Auto-Owners Insurance Co. v. Department of Treasury*, 870 N.W.2d 893 (Mich. 2015), remotely hosted software, cloud applications, and SaaS where the vendor retains possession and control of the code on third-party servers do not constitute taxable tangible personal property. However, prewritten software downloaded directly to a customer’s local computer or device remains taxable under MCL § 205.51a(q).
- **Separately Stated Shipping Charges**: **Exempt under 2023 Reform**. Enacted under Public Acts 20 and 21 of 2023 (effective April 2023), delivery and installation charges are **exempt from Michigan sales and use tax**, provided they are separately stated on the customer invoice and the seller maintains books and records showing actual delivery costs.
- **Unprepared Groceries & Food**: **Exempt**. Under MCL § 205.54g, food and food ingredients sold for human consumption are completely exempt from Michigan sales tax. Prepared hot food, heated deli takeout, restaurant meals, and soft drinks are fully taxable at 6.00%.
- **Clothing and Apparel**: **Fully Taxable**. Apparel and footwear are subject to the standard 6.00% sales tax year-round. Michigan does not offer a sales tax holiday for clothing.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-michigan',
      title: 'Michigan Economic Nexus: The $100,000 or 200 Transactions Standard',
      body: `Remote out-of-state retailers shipping into Michigan must comply with statutory nexus standards under MCL § 205.52d:

- **Dual Nexus Threshold**: An out-of-state vendor establishes economic nexus if, during the previous calendar year:
  1. Gross sales of tangible personal property delivered into Michigan exceed **$100,000**, **OR**
  2. The vendor conducts **200 or more separate transactions** delivered into Michigan.
- **Marketplace Facilitator Law**: Under MCL § 205.52d(2), marketplace facilitators (Amazon, Walmart, eBay, Etsy) must collect and remit Michigan sales tax on behalf of marketplace sellers. Sales made through registered marketplaces count toward the remote vendor’s $100,000 / 200 transaction economic nexus threshold.`,
    },
    {
      id: 'destination-sourcing-and-mto-filing-michigan',
      title: 'Destination Sourcing, Michigan Treasury Online, and Early Payment Discounts',
      body: `Administrative guidelines enforced by the Michigan Department of Treasury:

- **Destination-Based Sourcing**: Under MCL § 205.69, retail sales are sourced to the destination location where the customer takes delivery within Michigan. Because the rate is a flat 6.00% statewide, rate calculations remain consistent across all delivery addresses.
- **Business Registration**: Businesses register online through Michigan Treasury Online (MTO) to obtain a Michigan Sales and Use Tax License.
- **Return Due Dates (Form 5080 / 5081)**: Monthly sales and use tax returns are due on or before the **20th day of the month** following the reporting period (e.g., January tax is due February 20). Annual reconciliation returns (Form 5081) are due by February 28.
- **Statutory Early Payment Discounts**: Under MCL § 205.54, retailers who file and pay early are entitled to a statutory collection discount:
  - If paid on or before the **12th day of the month**, the discount is **0.75% of the tax due** (maximum $20,000 per month).
  - If paid between the **13th and 20th day of the month**, the discount is **0.50% of the tax due** (maximum $15,000 per month).`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Retail E-Commerce Sale in Detroit with Separately Itemized Shipping',
    scenario:
      'A consumer in Detroit purchases $200.00 of home electronics with $18.00 in separately itemized standard delivery charges. Under Michigan Public Acts 20 & 21 of 2023, separately stated delivery charges are exempt from sales tax.',
    inputs: {
      electronicsPurchasePrice: '$200.00',
      separatelyStatedDelivery: '$18.00 (Exempt under PA 20 & 21 of 2023)',
      deliveryAddress: 'Detroit, MI (Wayne County)',
      stateSalesTaxRate: '6.00% (Flat statewide rate, 0% local)',
    },
    steps: [
      {
        label: 'Compute Sales Tax on Merchandise ($200.00)',
        formula: '$200.00 × 0.0600',
        amount: '$12.00',
        note: 'MCL § 205.52 statutory 6.00% state rate.',
      },
      {
        label: 'Assess Tax on Separately Stated Delivery ($18.00)',
        formula: '$18.00 × 0.0000',
        amount: '$0.00',
        note: 'Statutorily exempt under 2023 legislative reform.',
      },
      {
        label: 'Total Sales Tax Due to Michigan Treasury',
        formula: '$12.00 + $0.00',
        amount: '$12.00',
        note: 'Exact statutory tax due.',
      },
      {
        label: 'Gross Invoiced Amount Charged to Consumer',
        formula: '$200.00 (Goods) + $18.00 (Delivery) + $12.00 (Tax)',
        amount: '$230.00',
        note: 'Customer pays $230.00; retailer remits $12.00 on Form 5080.',
      },
    ],
    takeaway:
      'Because delivery charges are separately itemized on the invoice, they are 100% exempt from Michigan sales tax under Public Acts 20 & 21 of 2023. Tax is levied strictly on the $200.00 merchandise at the flat 6.00% statewide rate.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A retailer in Grand Rapids collects a flat $100.00 payment inclusive of Michigan sales tax. The flat statewide sales tax rate is 6.00%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Grand Rapids, MI (Kent County)',
      salesTaxRate: '6.00%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.0600)',
        amount: '$94.34',
        note: '$100.00 ÷ 1.0600 = $94.3396, rounded to $94.34.',
      },
      {
        label: 'Extract Embedded Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $94.34)',
        amount: '$5.66',
        note: 'Tax liability owed to Michigan Department of Treasury.',
      },
    ],
    takeaway:
      'Applying the statutory extraction formula Net = Gross ÷ (1 + r), a $100.00 tax-inclusive transaction in Michigan yields $94.34 in net merchant revenue and $5.66 in sales tax.',
  },
  faqs: [
    {
      question: 'Are there any local city or county sales taxes in Michigan?',
      answer:
        'No. Under Article IX, Section 8 of the Michigan Constitution, local governments are barred from imposing local sales taxes. Michigan enforces a flat, uniform 6.00% sales and use tax rate across all 83 counties and municipalities statewide.',
    },
    {
      question: 'Is Software as a Service (SaaS) taxable in Michigan?',
      answer:
        'No. Under the Michigan Supreme Court precedent in Auto-Owners Insurance Co. v. Department of Treasury (2015), remotely accessed cloud software and SaaS where the vendor retains possession and control on remote servers do not constitute taxable tangible personal property.',
    },
    {
      question: 'Are shipping and delivery charges taxable in Michigan?',
      answer:
        'Under Public Acts 20 and 21 of 2023 (effective April 2023), delivery and installation charges are exempt from Michigan sales and use tax, provided they are separately stated on the customer’s invoice and the seller maintains adequate records.',
    },
    {
      question: 'What are the economic nexus thresholds for remote sellers shipping into Michigan?',
      answer:
        'A remote seller establishes economic nexus in Michigan under MCL § 205.52d if gross sales delivered into the state exceed $100,000 OR if the vendor enters into 200 or more separate transactions delivered into Michigan during the previous calendar year.',
    },
    {
      question: 'Does Michigan provide a discount for early sales tax filing?',
      answer:
        'Yes. Under MCL § 205.54, retailers who pay on or before the 12th day of the month receive a 0.75% discount (up to $20,000). Retailers who pay between the 13th and 20th receive a 0.50% discount (up to $15,000).',
    },
  ],
};

export default michiganContent;

