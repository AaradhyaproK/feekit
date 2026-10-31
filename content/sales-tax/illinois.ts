import type { PageContent } from '../types.ts';

export const illinoisContent: PageContent = {
  slug: 'illinois',
  family: 'sales-tax',
  title: 'Illinois Sales Tax Calculator (6.25% to 11.00%) | FeeKit',
  metaDescription:
    'Calculate Illinois Retailers’ Occupation Tax (ROT) with verified IDOR rates (6.25% base, max 11.00%). Details Chicago 10.25%, Chicago 9% Lease Tax on SaaS, and $100k/200 tx nexus.',
  h1: 'Illinois Sales Tax Calculator & Department of Revenue Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Illinois Department of Revenue',
    url: 'https://tax.illinois.gov/research/taxrates/sales.html',
    citation: '35 ILCS 120/ (Retailers’ Occupation Tax Act), Leveling the Playing Field for Illinois Retail Act, and Chicago Municipal Code 3-32.',
  },
  overview:
    'Illinois structures its sales tax system through the Retailers’ Occupation Tax (ROT) and Use Tax framework codified in 35 ILCS 120. The state baseline rate is 6.25% (composed of a 5.00% state levy, 1.00% municipal allocation, and 0.25% county allocation). Local home-rule municipalities and transit authorities impose additional taxes, reaching 10.25% in Chicago and up to 11.00% in specialized dining and entertainment districts. Under the Leveling the Playing Field for Illinois Retail Act, out-of-state remote vendors collect destination ROT, while the City of Chicago enforces an independent 9.00% Cloud Lease Tax on Software as a Service.',
  sections: [
    {
      id: 'statutory-rates-local-examples-illinois',
      title: 'Illinois Base ROT Rate, Chicago Surtaxes, and Benchmarks',
      body: `The statutory base rate of 6.25% applies in jurisdictions without home-rule powers. Major urban centers exercise statutory home-rule authority to levy additional local sales taxes:

1. **Chicago (Cook County)**: **10.25% combined rate**. Consists of the 6.25% statewide base ROT, 1.25% City of Chicago Home Rule municipal tax, 1.75% Cook County local tax, and 1.00% Regional Transportation Authority (RTA) tax.
2. **Peoria (Peoria County)**: **9.75% combined rate**. Combines the 6.25% base rate with Peoria municipal home-rule sales taxes and county public safety measures.
3. **Rockford (Winnebago County)**: **8.75% combined rate**. Combines 6.25% state base with Winnebago County and Rockford municipal infrastructure taxes.
4. **Springfield (Sangamon County)**: **9.75% combined rate**. Composed of 6.25% state base and 3.50% Sangamon County and City of Springfield municipal taxes.`,
    },
    {
      id: 'saas-chicago-lease-tax-groceries-illinois',
      title: 'Illinois Taxability: State SaaS Rules vs. Chicago 9% Cloud Lease Tax',
      body: `Illinois maintains a critical divergence between state-level sales tax and Chicago municipal tax codes:

- **Statewide SaaS Treatment**: **Non-Taxable at State Level**. The Illinois Department of Revenue does not classify true cloud Software as a Service (SaaS)—where software resides on remote servers without downloadable code—as tangible personal property under the Retailers’ Occupation Tax Act. State sales tax does not apply to pure cloud subscriptions.
- **Chicago Personal Property Lease Transaction Tax (9.00%)**: **Taxable within Chicago**. Under Chicago Municipal Code Chapter 3-32, the City of Chicago levies a **9.00% Lease Tax** on the lease or rental of personal property, explicitly defined to include cloud computing, remote database access, and SaaS utilized by customers within the city limits of Chicago. Providers or Chicago-based customers must remit 9.00% to the Chicago Department of Finance.
- **Unprepared Groceries & Prescription Drugs**: Qualifying food items not prepared for immediate consumption historically received a reduced 1.00% statewide rate, subject to recent state legislative transitions granting municipal flexibility. Prepared hot meals, restaurant dining, and soft drinks are fully taxable at standard rates.
- **Clothing and Apparel**: **Fully Taxable**. Clothing and footwear are subject to full statewide and local combined ROT rates.
- **Freight and Shipping**: Under 86 Ill. Adm. Code 130.415, delivery charges are non-taxable if they are separately stated on the invoice, reflect actual transportation costs, and the customer has the option to pick up the merchandise.`,
    },
    {
      id: 'leveling-playing-field-economic-nexus-illinois',
      title: 'Economic Nexus: The Leveling the Playing Field Act ($100k or 200 Transactions)',
      body: `Remote sellers shipping into Illinois are governed by the Leveling the Playing Field for Illinois Retail Act:

- **Dual-Threshold Standard**: An out-of-state remote retailer creates economic nexus if, over the preceding 12-month period:
  1. Cumulative gross receipts from sales of tangible personal property delivered into Illinois reach or exceed **$100,000**, **OR**
  2. The retailer enters into **200 or more separate transactions** delivered into Illinois.
- **Destination ROT Mandate**: Under the Act, remote sellers with economic nexus collect Destination Retailers’ Occupation Tax at the specific local tax rate of the delivery address (e.g., 10.25% in Chicago), rather than the historical flat 6.25% state Use Tax rate.
- **Marketplace Facilitator Law**: Registered marketplace platforms (Amazon, Walmart, eBay) collect and remit Illinois destination ROT for third-party marketplace sales. Third-party sales through platforms count toward the $100,000 / 200 transaction nexus threshold.`,
    },
    {
      id: 'origin-vs-destination-sourcing-and-filing-illinois',
      title: 'Origin vs. Destination Sourcing, MyTax Illinois, and Filing Due Dates',
      body: `Illinois applies a dual sourcing methodology depending on seller location:

- **Dual Sourcing Model**:
  - **In-State Illinois Retailers**: Generally subject to **origin sourcing**, collecting the sales tax rate applicable to their brick-and-mortar store or business premises.
  - **Remote Out-of-State Retailers**: Subject to **destination sourcing**, collecting the combined ROT rate of the purchaser’s delivery address.
- **Registration (MyTax Illinois)**: Dealers register through MyTax Illinois to obtain an Illinois Business Tax (IBT) number and Certificate of Registration (Form CRT-61).
- **Return Due Dates (Form ST-1 / ST-2)**: Monthly sales tax returns are due on or before the **20th day of the month** following the reporting period (e.g., January tax is due February 20).
- **Statutory Penalties**: Failure to file on time results in a penalty of 2% of the tax due (or $250, whichever is less) if filed within 30 days, escalating to 10% for extended delinquency, plus statutory interest.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: E-Commerce Retail Sale Delivered into Chicago (Destination ROT)',
    scenario:
      'A remote e-commerce retailer with Illinois economic nexus sells $350.00 of commercial office supplies delivered to an address in downtown Chicago. The Chicago combined destination ROT rate is 10.25%.',
    inputs: {
      merchandiseSubtotal: '$350.00',
      destinationLocation: 'Chicago, IL (Cook County)',
      stateBaseRate: '6.25%',
      chicagoHomeRuleRate: '1.25%',
      cookCountyRate: '1.75%',
      rtaTransitRate: '1.00%',
      combinedDestinationRate: '10.25%',
    },
    steps: [
      {
        label: 'Compute Statewide Base ROT (6.25%)',
        formula: '$350.00 × 0.0625',
        amount: '$21.88',
        note: 'State base tax allocation.',
      },
      {
        label: 'Compute Chicago Municipal Home Rule Tax (1.25%)',
        formula: '$350.00 × 0.0125',
        amount: '$4.38',
        note: 'City of Chicago municipal levy.',
      },
      {
        label: 'Compute Cook County Local Tax (1.75%)',
        formula: '$350.00 × 0.0175',
        amount: '$6.13',
        note: 'Cook County infrastructure and public safety.',
      },
      {
        label: 'Compute Regional Transportation Authority (RTA) Tax (1.00%)',
        formula: '$350.00 × 0.0100',
        amount: '$3.50',
        note: 'Dedicated transit authority levy.',
      },
      {
        label: 'Total Destination ROT Collected',
        formula: '$21.88 + $4.38 + $6.13 + $3.50 (or $350.00 × 0.1025)',
        amount: '$35.89',
        note: 'Total destination tax collected from customer.',
      },
      {
        label: 'Gross Invoiced Amount Charged to Customer',
        formula: '$350.00 + $35.89',
        amount: '$385.89',
        note: 'Merchant remits $35.89 to IDOR on Form ST-1.',
      },
    ],
    takeaway:
      'Under the Leveling the Playing Field for Illinois Retail Act, remote sellers charge the full 10.25% Chicago destination ROT rate rather than the 6.25% state use tax rate.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A retailer in Chicago collects a flat $100.00 cash or card payment inclusive of all applicable Illinois and municipal sales taxes. The combined Chicago tax rate is 10.25%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Chicago, IL (Cook County)',
      combinedTaxRate: '10.25%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.1025)',
        amount: '$90.70',
        note: '$100.00 ÷ 1.1025 = $90.7029, rounded to $90.70.',
      },
      {
        label: 'Extract Embedded Retailers’ Occupation Tax',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $90.70)',
        amount: '$9.30',
        note: 'Tax liability owed to Illinois Department of Revenue.',
      },
    ],
    takeaway:
      'Applying the extraction formula Net = Gross ÷ (1 + r), a $100.00 tax-inclusive transaction in Chicago yields $90.70 in net revenue and $9.30 in sales tax liability.',
  },
  faqs: [
    {
      question: 'Is Software as a Service (SaaS) taxable in Illinois?',
      answer:
        'At the state level, pure cloud SaaS is not subject to Illinois Retailers’ Occupation Tax. However, the City of Chicago imposes an independent 9.00% Personal Property Lease Transaction Tax (Cloud Lease Tax) under Chicago Municipal Code Chapter 3-32 on cloud software, database subscriptions, and remote computing used by customers located within the city limits of Chicago.',
    },
    {
      question: 'What is the Leveling the Playing Field for Illinois Retail Act?',
      answer:
        'Enacted in 2021, the Act requires out-of-state remote retailers with economic nexus to collect destination Retailers’ Occupation Tax (ROT) at the local tax rate applicable to where the customer receives the goods (e.g., 10.25% in Chicago), rather than the flat 6.25% state Use Tax.',
    },
    {
      question: 'What are the economic nexus thresholds for remote sellers shipping to Illinois?',
      answer:
        'A remote seller establishes economic nexus in Illinois under 35 ILCS 120/2(b) if, over the preceding 12 months, its cumulative retail sales delivered into Illinois reach $100,000 OR if the retailer conducts 200 or more separate retail transactions into the state.',
    },
    {
      question: 'Does Illinois use origin or destination sourcing for sales tax?',
      answer:
        'Illinois uses a dual system. In-state brick-and-mortar merchants generally follow origin sourcing (charging the rate where their facility is located). Remote out-of-state sellers follow destination sourcing (charging the local ROT rate of the purchaser’s delivery address).',
    },
    {
      question: 'When are monthly sales tax returns due to the Illinois Department of Revenue?',
      answer:
        'Monthly sales tax returns (Form ST-1) are due on or before the 20th day of the month following the close of the reporting period. Electronic filing and payment through MyTax Illinois is mandatory for most registered retailers.',
    },
  ],
};

export default illinoisContent;

