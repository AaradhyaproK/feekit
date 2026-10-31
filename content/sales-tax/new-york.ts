import type { PageContent } from '../types.ts';

export const newYorkContent: PageContent = {
  slug: 'new-york',
  family: 'sales-tax',
  title: 'New York Sales Tax Calculator (4.00% to 8.875%) | FeeKit',
  metaDescription:
    'Calculate New York sales and use tax with verified DTF rates (4.00% base, max 8.875%). Details clothing under $110 exemption, MCTD surcharges, taxable SaaS, and $500k + 100 tx nexus.',
  h1: 'New York Sales Tax Calculator & Department of Taxation and Finance Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'New York State Department of Taxation and Finance',
    url: 'https://www.tax.ny.gov/bus/st/stidx.htm',
    citation: 'NYS Tax Law §§ 1105, 1109 (MCTD District), 1115(a)(30) (Clothing Exemption), and TB-ST-128.',
  },
  overview:
    'New York State levies a 4.00% base sales and compensating use tax under NYS Tax Law § 1105. In addition to the state tax, local counties and cities impose discretionary sales taxes ranging from 3.00% to 4.875%, plus a mandatory 0.375% Metropolitan Commuter Transportation District (MCTD) surcharge across the 12-county downstate commuter zone. This creates a statutory maximum combined sales tax rate of 8.875% in New York City and Westchester jurisdictions. Remote sellers are subject to destination sourcing and a cumulative nexus standard requiring both $500,000 in gross receipts and 100 transactions.',
  sections: [
    {
      id: 'statutory-rates-local-examples-new-york',
      title: 'New York State Base Rate, MCTD Surcharge, and Local Benchmarks',
      body: `The state rate of 4.00% is only the starting point for New York transactions. The total sales tax rate depends on whether the delivery address sits within the Metropolitan Commuter Transportation District (MCTD) and the specific county or city tax rate:

1. **New York City (Five Boroughs — Manhattan, Brooklyn, Queens, Bronx, Staten Island)**: **8.875% total combined rate**. Composed of 4.00% NY State tax, 4.50% NYC local municipal tax, and 0.375% MCTD commuter transit surcharge.
2. **Yonkers (Westchester County)**: **8.875% total combined rate**. Combines 4.00% State tax, 3.00% Westchester County tax, 1.50% City of Yonkers municipal tax, and 0.375% MCTD surcharge.
3. **Buffalo (Erie County)**: **8.75% total combined rate**. Consists of 4.00% State tax and 4.75% Erie County local tax. Buffalo sits outside the commuter transit district, so no MCTD tax applies.
4. **Saratoga Springs (Saratoga County)**: **7.00% total combined rate**. Composed of 4.00% State tax and 3.00% Saratoga County tax, representing one of the lowest combined county tax rates in New York.`,
    },
    {
      id: 'taxability-rules-clothing-saas-new-york',
      title: 'New York Taxability: The $110 Clothing Rule, SaaS, Groceries, and Delivery',
      body: `New York maintains intricate taxability statutes codified in Article 28 of the Tax Law:

- **Clothing and Footwear (Under $110)**: **State-Exempt, Locally Variable**. Under NYS Tax Law § 1115(a)(30), items of clothing and footwear sold for less than $110 per item or pair are completely exempt from the 4.00% state sales tax and the 0.375% MCTD tax. In New York City, qualifying items under $110 are also fully exempt from the 4.50% city sales tax (0% total rate). However, some upstate counties do not adopt the local clothing exemption, meaning local county tax may still apply while the 4% state portion is waived.
- **Clothing and Footwear ($110 and Over)**: **Fully Taxable**. Any individual garment or footwear item priced at $110 or higher is taxed at the full combined statutory rate on the entire purchase price.
- **Software as a Service (SaaS) & Cloud Software**: **Fully Taxable**. New York State considers prewritten software delivered via cloud hosting, ASP (Application Service Provider), or remote download to be taxable prewritten software under Tax Law § 1101(b)(6) and Technical Memorandum TSB-M-08(7)S. If customers in New York access software remotely, it is treated as a constructive transfer of possession and is subject to full sales tax.
- **Digital Products & Streaming**: Prewritten computer software is taxable. Streaming audio, video, and digital books are generally exempt from New York sales tax unless bundled with taxable software.
- **Unprepared Groceries**: **Exempt**. Basic grocery foods, milk, produce, and bakery products for home preparation are exempt under § 1115(a)(1). Prepared food, hot deli takeout, and carbonated beverages are fully taxable.
- **Shipping and Handling**: **Taxable with Taxable Goods**. Under NYS Tax Law § 1101(b)(3), shipping, handling, and delivery fees charged by a vendor in connection with the sale of taxable goods are taxable, regardless of whether stated separately on the invoice. If an order contains both exempt and taxable goods, shipping is prorated.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-new-york',
      title: 'New York Economic Nexus: The Two-Pronged $500,000 + 100 Transactions Rule',
      body: `Unlike states with an "either/or" economic nexus threshold, New York enforces a strict two-pronged standard under NYS Tax Law § 1101(b)(8)(vi):

- **Two-Pronged Statutory Standard**: An out-of-state remote vendor establishes economic nexus in New York ONLY if, during the immediately preceding four sales tax quarters:
  1. The vendor's gross receipts from sales of tangible personal property delivered into New York exceed **$500,000**, **AND**
  2. The vendor conducted more than **100 separate retail sales** delivered into the state.
- **Evaluation Calendar**: Sales tax quarters run March–May, June–August, September–November, and December–February. Remote sellers must evaluate trailing quarterly volume at the close of each quarter.
- **Marketplace Facilitator Relief**: Under NYS Tax Law § 1101(e), registered marketplace facilitators (Amazon, eBay, Walmart, Etsy) must collect and remit New York sales tax on behalf of marketplace sellers. Sales facilitated through registered platforms count toward the $500,000 revenue prong and the 100-transaction count prong.`,
    },
    {
      id: 'sourcing-rules-and-filing-due-dates-new-york',
      title: 'Destination Sourcing, Vendor Registration, and Return Filing Due Dates',
      body: `New York strictly enforces destination-based sales tax sourcing:

- **Destination-Based Sourcing**: Sales tax is calculated based on the jurisdiction where the product or service is delivered to the customer, not where the vendor is located. Intrastate and out-of-state orders shipping to a Brooklyn address are taxed at the 8.875% NYC rate.
- **Vendor Registration (Certificate of Authority)**: Any business required to collect sales tax must register with the New York State Department of Taxation and Finance online through New York Business Express (NYBE) at least 20 days before commencing business operations. The state issues a Form DTF-17A Certificate of Authority, which must be displayed at each retail location.
- **Return Due Dates**: Quarterly returns (Form ST-100) are due on the **20th day of the month** following the close of the quarterly sales tax period (June 20, September 20, December 20, and March 20). Annual filers (Form ST-101) file by March 20. Monthly part-quarterly filers (Form ST-810) file on the 20th of each calendar month.
- **Record Retention & Penalties**: Sales tax records, exemption certificates (Form ST-120), and register audit tapes must be maintained for a minimum of **3 years** under NYS Tax Law § 1135. Late filing incurs a minimum statutory penalty of $50 or 5% of the tax due per month (up to 25%), plus daily compounding statutory interest.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Enterprise SaaS License Invoiced to Manhattan Corporate Client',
    scenario:
      'A software vendor licenses enterprise cloud software for $2,400.00/month to a corporate client located in Midtown Manhattan, New York City. In New York, SaaS is classified as taxable prewritten computer software.',
    inputs: {
      monthlyLicenseFee: '$2,400.00',
      clientLocation: 'Midtown Manhattan, NYC',
      stateSalesTax: '4.00%',
      mctdTransitSurcharge: '0.375%',
      nycMunicipalTax: '4.50%',
      combinedTaxRate: '8.875%',
    },
    steps: [
      {
        label: 'Compute New York State Base Tax (4.00%)',
        formula: '$2,400.00 × 0.0400',
        amount: '$96.00',
        note: 'NYS Tax Law § 1105 statutory state portion.',
      },
      {
        label: 'Compute MCTD Commuter Surcharge (0.375%)',
        formula: '$2,400.00 × 0.00375',
        amount: '$9.00',
        note: '12-county downstate commuter transit surcharge.',
      },
      {
        label: 'Compute New York City Municipal Tax (4.50%)',
        formula: '$2,400.00 × 0.0450',
        amount: '$108.00',
        note: 'NYC Administrative Code local tax.',
      },
      {
        label: 'Total Combined Sales Tax Collected',
        formula: '$96.00 + $9.00 + $108.00 (or $2,400.00 × 0.08875)',
        amount: '$213.00',
        note: 'Full statutory tax due to NYS DTF.',
      },
      {
        label: 'Final Invoiced Amount Charged to Client',
        formula: '$2,400.00 (SaaS License) + $213.00 (Sales Tax)',
        amount: '$2,613.00',
        note: 'Merchant remits $213.00 to NYS DTF on Form ST-100.',
      },
    ],
    takeaway:
      'Under NYS Technical Memorandum TSB-M-08(7)S, SaaS subscriptions are fully taxable prewritten software. The vendor must collect the full 8.875% combined downstate rate based on the corporate customer user address in Manhattan.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Tax-Inclusive Retail Total ($100.00)',
    scenario:
      'A merchant in New York City sells taxable merchandise with sales tax included in the $100.00 cash or contactless total. The combined NYC sales tax rate is 8.875%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'New York City (Five Boroughs)',
      combinedTaxRate: '8.875%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.08875)',
        amount: '$91.85',
        note: '$100.00 ÷ 1.08875 = $91.8484, rounded to $91.85.',
      },
      {
        label: 'Extract Embedded Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $91.85)',
        amount: '$8.15',
        note: 'Statutory sales tax owed to NYS DTF.',
      },
    ],
    takeaway:
      'Using the reverse extraction formula Price ÷ (1 + r), a $100.00 tax-inclusive transaction yields $91.85 in true net revenue and $8.15 in statutory sales tax payable on quarterly Form ST-100.',
  },
  faqs: [
    {
      question: 'Is clothing sales tax-free throughout the entire state of New York?',
      answer:
        'No. Clothing and footwear items priced under $110 per individual item are exempt from the 4.00% New York State sales tax and the 0.375% MCTD tax statewide. However, local county and city sales tax rules vary. While New York City exempts eligible clothing from its 4.50% local tax, several upstate counties choose not to adopt the local exemption. In non-exempt counties, merchants must collect the local county tax rate while exempting the state portion.',
    },
    {
      question: 'How does New York determine economic nexus for remote sellers?',
      answer:
        'New York enforces a dual-prong threshold under NYS Tax Law § 1101(b)(8)(vi). An out-of-state remote vendor must have both gross sales exceeding $500,000 delivered into New York AND more than 100 separate retail transactions over the preceding four calendar sales tax quarters. If a business generates $600,000 across only 60 transactions, it does not meet the statutory threshold.',
    },
    {
      question: 'Are SaaS and digital downloads taxable under New York State law?',
      answer:
        'Yes. New York classifies prewritten computer software as tangible personal property. Cloud-based Software as a Service (SaaS), hosted application subscriptions, and downloaded digital software are fully taxable at the combined state and local rate of the customer location under Technical Memorandum TSB-M-08(7)S.',
    },
    {
      question: 'What is the MCTD surcharge and where does it apply?',
      answer:
        'The Metropolitan Commuter Transportation District (MCTD) surcharge is an additional 0.375% sales tax levied to fund public transportation across 12 downstate counties: New York (Manhattan), Bronx, Kings (Brooklyn), Queens, Richmond (Staten Island), Rockland, Nassau, Suffolk, Orange, Putnam, Dutchess, and Westchester. It is added to the 4.00% state rate and local county rates.',
    },
    {
      question: 'What form does an out-of-state vendor file to claim a resale exemption in New York?',
      answer:
        'Wholesale buyers and resellers must issue New York Form ST-120 (Resale Certificate) to the seller. Out-of-state businesses that are not registered with the NYS DTF may use Form ST-120 by providing their home state sales tax registration number or Federal Employer Identification Number (FEIN), provided the goods are purchased for resale.',
    },
  ],
};

export default newYorkContent;
