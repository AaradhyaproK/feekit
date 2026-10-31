import type { PageContent } from '../types.ts';

export const georgiaContent: PageContent = {
  slug: 'georgia',
  family: 'sales-tax',
  title: 'Georgia Sales Tax Calculator (4.00% to 9.00%) | FeeKit',
  metaDescription:
    'Calculate Georgia sales and use tax with verified GDOR rates (4.00% base, max 9.00%). Covers Atlanta 8.90%, food state exemption with local tax, SaaS rules, and $100k/200 tx nexus.',
  h1: 'Georgia Sales Tax Calculator & Department of Revenue Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Georgia Department of Revenue',
    url: 'https://dor.georgia.gov/taxes/sales-use-tax',
    citation: 'O.C.G.A. §§ 48-8-30, 48-8-3(57) (Food Exemption), 48-8-2(8)(M) (Nexus), and 48-8-77.',
  },
  overview:
    'The State of Georgia levies a statewide base sales and use tax of 4.00% under O.C.G.A. § 48-8-30. Counties and municipalities are authorized to levy multiple local option taxes—including LOST, SPLOST, E-SPLOST, TSPLOST, MARTA transit taxes, and Atlanta’s Municipal Option Sales Tax (MOST)—resulting in combined rates ranging from 6.00% to 8.90% (and up to 9.00% in select jurisdictions). Uniquely, Georgia exempts grocery food from the 4.00% state tax while permitting counties to levy local taxes on groceries, treats cloud SaaS as a non-taxable service, and provides a statutory vendor collection allowance.',
  sections: [
    {
      id: 'statutory-rates-local-examples-georgia',
      title: 'Georgia Base Rate, Atlanta Layered Taxes, and Local Benchmarks',
      body: `Georgia's 4.00% state rate is layered with multiple voter-approved county and municipal option taxes:

1. **Atlanta (Fulton County)**: **8.90% combined rate**. Composed of 4.00% Georgia state tax, 1.00% Local Option Sales Tax (LOST), 1.00% MARTA transit tax, 1.00% Atlanta Municipal Option Sales Tax (MOST for water and sewer infrastructure), 0.50% City TSPLOST, and 0.40% Fulton County TSPLOST.
2. **Savannah (Chatham County)**: **7.00% combined rate**. Combines 4.00% State base with 1.00% Chatham County LOST, 1.00% SPLOST, and 1.00% Education SPLOST (E-SPLOST).
3. **Augusta (Richmond County)**: **8.00% combined rate**. Composed of 4.00% State tax and 4.00% Richmond County local option levies.
4. **Macon (Bibb County)**: **8.00% combined rate**. Combines 4.00% State base and 4.00% Macon-Bibb County discretionary local taxes.`,
    },
    {
      id: 'grocery-state-exemption-saas-georgia',
      title: 'Grocery Split Exemption, SaaS Treatment, Clothing, and Shipping',
      body: `Georgia tax statutes establish distinct rules for food items, cloud technology, and physical deliveries:

- **Unprepared Groceries & Food**: **State-Exempt, Locally Taxable**. Under O.C.G.A. § 48-8-3(57), food and food ingredients purchased for off-premises consumption are completely exempt from the 4.00% Georgia state sales tax. However, local counties retain the authority to levy local sales taxes (LOST, SPLOST, MARTA) on food. Consequently, groceries purchased in Atlanta are exempt from the 4% state tax but subject to local taxes (effective rate 4.90%). Prepared hot food, heated deli takeout, and candy/sodas remain fully taxable at the total combined 8.90% rate.
- **Software as a Service (SaaS)**: **Non-Taxable**. Under Georgia Department of Revenue Policy Bulletin SUT-2010-01 and Letter Ruling LR SUT-2014-04, cloud-hosted software and SaaS accessed remotely across the internet are classified as non-taxable computer services, provided the customer does not receive tangible software media or a permanent downloadable license.
- **Clothing and Footwear**: **Fully Taxable**. Clothing and shoes are subject to full statewide and local combined sales tax year-round. Georgia does not offer an annual clothing sales tax holiday.
- **Freight and Shipping Charges**: **Taxable if Linked to Taxable Goods**. Under O.C.G.A. § 48-8-2(34), delivery charges billed by the seller are included in the taxable sales price when associated with taxable merchandise. If goods are exempt, delivery charges are exempt.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-georgia',
      title: 'Georgia Economic Nexus: The $100,000 or 200 Transactions Standard',
      body: `Under O.C.G.A. § 48-8-2(8)(M), out-of-state remote sellers are subject to statutory nexus standards:

- **Dual Nexus Threshold**: An out-of-state remote vendor must register and collect Georgia sales tax if, during the previous or current calendar year:
  1. Gross retail sales delivered into Georgia exceed **$100,000**, **OR**
  2. The vendor conducts **200 or more separate retail transactions** delivered into Georgia.
- **Marketplace Facilitator Law**: Under O.C.G.A. § 48-8-30(c.2), registered marketplace facilitators (Amazon, Walmart, eBay, Etsy) must collect and remit Georgia sales tax on marketplace sales. Marketplace sales count toward the remote vendor’s $100,000 / 200 transaction economic nexus threshold.`,
    },
    {
      id: 'destination-sourcing-and-gtc-filing-georgia',
      title: 'Destination Sourcing, Georgia Tax Center, and Vendor Compensation',
      body: `Administrative requirements enforced by the Georgia Department of Revenue (GDOR):

- **Destination-Based Sourcing**: Under O.C.G.A. § 48-8-77, sales tax on delivered goods is sourced to the physical destination where the customer takes delivery.
- **Dealer Registration (Georgia Tax Center)**: Businesses register online via the Georgia Tax Center (GTC) to receive a State Taxpayer Identification Number (STIN) and Sales and Use Tax Certificate of Registration (Form ST-2).
- **Return Due Dates (Form ST-3)**: Monthly sales and use tax returns are due on or before the **20th day of the month** following the reporting period (e.g., January tax is due February 20).
- **Vendor Compensation (Timely Filing Discount)**: Under O.C.G.A. § 48-8-50, dealers who file and pay their returns on time are allowed a statutory vendor compensation deduction of **3% of the first $3,000** of tax due, plus **0.5% of any tax amount exceeding $3,000**.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Retail General Merchandise Sale Delivered into Atlanta',
    scenario:
      'A consumer in Atlanta (Fulton County) purchases $250.00 of home goods from an e-commerce retailer. The combined Atlanta sales tax rate is 8.90%.',
    inputs: {
      merchandiseSubtotal: '$250.00',
      destinationLocation: 'Atlanta, GA (Fulton County)',
      stateBaseRate: '4.00%',
      localOptionTaxes: '4.90% (LOST, MARTA, MOST, TSPLOST)',
      combinedSalesTaxRate: '8.90%',
    },
    steps: [
      {
        label: 'Compute Georgia State Sales Tax (4.00%)',
        formula: '$250.00 × 0.0400',
        amount: '$10.00',
        note: 'O.C.G.A. § 48-8-30 state baseline portion.',
      },
      {
        label: 'Compute Atlanta Layered Local Option Taxes (4.90%)',
        formula: '$250.00 × 0.0490',
        amount: '$12.25',
        note: 'Combined LOST, MARTA transit, MOST, and TSPLOST levies.',
      },
      {
        label: 'Total Sales Tax Due to GDOR',
        formula: '$10.00 + $12.25 (or $250.00 × 0.0890)',
        amount: '$22.25',
        note: 'Exact statutory tax due.',
      },
      {
        label: 'Gross Invoiced Amount Charged to Consumer',
        formula: '$250.00 + $22.25',
        amount: '$272.25',
        note: 'Customer pays $272.25; retailer remits $22.25 on Form ST-3.',
      },
    ],
    takeaway:
      'Applying the composite 8.90% rate across state and local option levies yields exactly $22.25 in sales tax on a $250.00 order. If the order were grocery food, the 4% state tax ($10.00) would be waived under § 48-8-3(57), leaving only the $12.25 local portion.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A retailer in Atlanta collects a flat $100.00 payment inclusive of sales tax on taxable general merchandise. The combined Atlanta tax rate is 8.90%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Atlanta, GA (Fulton County)',
      combinedTaxRate: '8.90%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.0890)',
        amount: '$91.83',
        note: '$100.00 ÷ 1.0890 = $91.8273, rounded to $91.83.',
      },
      {
        label: 'Extract Embedded Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $91.83)',
        amount: '$8.17',
        note: 'Tax liability owed to Georgia Department of Revenue.',
      },
    ],
    takeaway:
      'Using the statutory extraction formula Net = Gross ÷ (1 + r), a $100.00 tax-inclusive transaction in Atlanta yields $91.83 in merchant net revenue and $8.17 in sales tax liability.',
  },
  faqs: [
    {
      question: 'Are groceries subject to sales tax in Georgia?',
      answer:
        'Groceries are partially exempt. Under O.C.G.A. § 48-8-3(57), eligible food and food ingredients are completely exempt from the 4.00% Georgia state sales tax. However, local county option sales taxes (such as LOST, SPLOST, and MARTA) still apply to food. In Atlanta, groceries are taxed at 4.90% (the local portion), rather than the full 8.90% combined general merchandise rate.',
    },
    {
      question: 'Is Software as a Service (SaaS) taxable in Georgia?',
      answer:
        'No. Under Georgia Department of Revenue Policy Bulletin SUT-2010-01 and Letter Ruling LR SUT-2014-04, SaaS and remotely accessed cloud applications are non-taxable services, provided the customer does not receive tangible software media or a permanent downloadable license.',
    },
    {
      question: 'What are the economic nexus thresholds for remote sellers in Georgia?',
      answer:
        'An out-of-state remote seller establishes economic nexus in Georgia under O.C.G.A. § 48-8-2(8)(M) if gross retail sales delivered into the state exceed $100,000 OR if the vendor enters into 200 or more separate retail transactions delivered into Georgia during the previous or current calendar year.',
    },
    {
      question: 'Does Georgia allow a vendor discount for timely sales tax filing?',
      answer:
        'Yes. Under O.C.G.A. § 48-8-50, registered dealers who file Form ST-3 and remit payment on or before the 20th of the month are entitled to vendor compensation of 3% on the first $3,000 of tax due, plus 0.5% on amounts exceeding $3,000.',
    },
    {
      question: 'When are monthly sales tax returns due to the Georgia Department of Revenue?',
      answer:
        'Monthly sales tax returns are due on or before the 20th day of the month following the close of the reporting period via the Georgia Tax Center (GTC) online portal.',
    },
  ],
};

export default georgiaContent;

