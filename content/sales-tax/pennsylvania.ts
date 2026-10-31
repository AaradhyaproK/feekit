import type { PageContent } from '../types.ts';

export const pennsylvaniaContent: PageContent = {
  slug: 'pennsylvania',
  family: 'sales-tax',
  title: 'Pennsylvania Sales Tax Calculator (6.00% to 8.00%) | FeeKit',
  metaDescription:
    'Calculate Pennsylvania sales and use tax with verified PA DOR rates (6.00% base, max 8.00%). Covers Philadelphia 8%, clothing exemption, taxable SaaS, and $100k economic nexus.',
  h1: 'Pennsylvania Sales Tax Calculator & Department of Revenue Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Pennsylvania Department of Revenue',
    url: 'https://www.revenue.pa.gov/TaxTypes/SUT/Pages/default.aspx',
    citation: '72 P.S. §§ 7202, 7204(26) (Clothing Exemption), 7201(m) (Taxable Canned Software & SaaS), and 7213.',
  },
  overview:
    'The Commonwealth of Pennsylvania levies a 6.00% statewide sales and use tax under 72 P.S. § 7202. Pennsylvania limits local sales taxing authority strictly to two jurisdictions: the City of Philadelphia (which imposes a 2.00% local tax, totaling 8.00%) and Allegheny County / Pittsburgh (which imposes a 1.00% local tax, totaling 7.00%). Across the remaining 65 counties in the state, the combined sales tax rate is a flat 6.00%. Key statutory features include a broad sales tax exemption for everyday clothing, taxable treatment of cloud SaaS subscriptions, and destination-based sourcing under a $100,000 economic nexus threshold.',
  sections: [
    {
      id: 'statutory-rates-local-examples-pennsylvania',
      title: 'Pennsylvania Base Rate, Philadelphia/Allegheny Surtaxes, and Benchmarks',
      body: `Pennsylvania has one of the cleanest local sales tax structures in the United States, as only two counties possess statutory authorization to levy local surtaxes:

1. **Philadelphia (Philadelphia County)**: **8.00% combined rate**. Composed of the 6.00% Pennsylvania state rate and a 2.00% City of Philadelphia local sales tax authorized under the Pennsylvania Intergovernmental Cooperation Authority Act.
2. **Pittsburgh (Allegheny County)**: **7.00% combined rate**. Combines the 6.00% state rate with the 1.00% Allegheny County Regional Asset District sales tax.
3. **Allentown (Lehigh County)**: **6.00% combined rate**. Lehigh County possesses no local sales tax authority; sales are taxed strictly at the 6.00% Commonwealth rate.
4. **Harrisburg (Dauphin County)**: **6.00% combined rate**. The state capital region levies zero county or city sales taxes, remaining at the 6.00% baseline.`,
    },
    {
      id: 'clothing-exemption-saas-taxability-pennsylvania',
      title: 'Everyday Clothing Exemption, Taxable SaaS, and Grocery Rules',
      body: `Pennsylvania tax law provides specific statutory protections for basic necessities alongside taxable treatment of digital technology:

- **Everyday Clothing and Footwear**: **Exempt**. Under 72 P.S. § 7204(26), wearing apparel and footwear designed for everyday human use are completely exempt from Pennsylvania sales tax at both state and local levels. Exceptions include formal apparel rentals (tuxedos, prom gowns), fur coats, and specialized athletic gear (e.g., cleated athletic shoes, ski boots).
- **Software as a Service (SaaS) & Canned Software**: **Fully Taxable**. Under 72 P.S. § 7201(m) and Pennsylvania Department of Revenue Ruling SUT-12-001, the Commonwealth treats canned computer software—regardless of whether delivered on physical media, downloaded, or accessed remotely via cloud SaaS—as taxable tangible personal property. Invoiced SaaS subscriptions delivered to users in Pennsylvania are taxed at the applicable 6.00%, 7.00%, or 8.00% destination rate.
- **Digital Products & Streaming**: **Taxable**. Under Act 84 of 2016, digital audio, video streaming, digital books, and digital games delivered electronically are subject to Pennsylvania sales tax.
- **Unprepared Groceries & Food**: **Exempt**. Basic foodstuffs, produce, milk, and bakery items purchased for home consumption are exempt under 72 P.S. § 7204(1). Prepared hot food, heated deli items, restaurant meals, and soft drinks are fully taxable.
- **Shipping & Freight Charges**: **Tied to Taxability of Items**. If the merchandise sold is taxable, shipping and handling charges billed by the seller are fully taxable. If the goods are exempt (such as everyday clothing), shipping charges are exempt.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-pennsylvania',
      title: 'Pennsylvania Economic Nexus: The $100,000 Remote Seller Threshold',
      body: `Under 72 P.S. § 7213 and Department of Revenue directives:

- **$100,000 Gross Sales Standard**: An out-of-state remote seller establishes economic nexus if gross sales of tangible personal property or taxable services delivered into Pennsylvania exceed **$100,000** in the preceding 12 calendar months.
- **No Transaction Count Test**: Pennsylvania does not enforce a 200-transaction count threshold. Economic nexus is governed exclusively by gross sales revenue.
- **Marketplace Facilitator Law**: Registered marketplace platforms (Amazon, eBay, Etsy, Walmart) are required to collect and remit Pennsylvania sales tax on sales made by third-party sellers. Marketplace sales count toward the remote vendor’s $100,000 gross sales threshold.`,
    },
    {
      id: 'destination-sourcing-and-mypath-filing-pennsylvania',
      title: 'Destination Sourcing, myPATH Registration, and Filing Due Dates',
      body: `Administrative requirements enforced by the Pennsylvania Department of Revenue:

- **Destination Sourcing**: Sales tax is sourced to the location where the customer receives delivery of the merchandise. Deliveries to Philadelphia incur 8.00%; deliveries to Pittsburgh incur 7.00%; deliveries to the rest of the state incur 6.00%.
- **Dealer Registration (myPATH)**: Businesses register electronically through the PA Department of Revenue online portal (myPATH) to obtain a Sales, Use, and Hotel Occupancy Tax license.
- **Return Due Dates (Form REV-1500)**: Monthly sales tax returns are due on the **20th day of the month** following the reporting period (e.g., January tax is due February 20). Quarterly filers submit returns by the 20th of April, July, October, and January. Semi-annual filers submit by August 20 and February 20.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Retail Apparel and taxable Accessories Sale in Philadelphia',
    scenario:
      'A retailer in Philadelphia sells a $120.00 winter wool coat (exempt apparel) and a $60.00 matching leather handbag (taxable accessory). The Philadelphia combined sales tax rate is 8.00% (6.0% state + 2.0% city).',
    inputs: {
      winterCoatPrice: '$120.00 (Exempt everyday apparel under § 7204(26))',
      leatherHandbagPrice: '$60.00 (Taxable accessory)',
      destinationLocation: 'Philadelphia, PA',
      combinedTaxRate: '8.00%',
    },
    steps: [
      {
        label: 'Assess Winter Coat Taxability',
        formula: '$120.00 × 0.0000',
        amount: '$0.00',
        note: 'Statutorily exempt everyday clothing.',
      },
      {
        label: 'Compute State Tax on Handbag (6.00%)',
        formula: '$60.00 × 0.0600',
        amount: '$3.60',
        note: '72 P.S. § 7202 state sales tax on accessories.',
      },
      {
        label: 'Compute Philadelphia Local Tax on Handbag (2.00%)',
        formula: '$60.00 × 0.0200',
        amount: '$1.20',
        note: 'City of Philadelphia local sales tax.',
      },
      {
        label: 'Total Sales Tax Due',
        formula: '$0.00 + $3.60 + $1.20 (or $60.00 × 0.0800)',
        amount: '$4.80',
        note: 'Exact statutory tax due to PA DOR.',
      },
      {
        label: 'Gross Invoiced Amount Charged to Consumer',
        formula: '$120.00 + $60.00 + $4.80',
        amount: '$184.80',
        note: 'Customer pays $184.80; merchant remits $4.80.',
      },
    ],
    takeaway:
      'Because everyday clothing is completely exempt in Pennsylvania, no tax applies to the $120.00 coat. The 8.00% Philadelphia rate applies strictly to the $60.00 taxable handbag.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A merchant in Philadelphia collects $100.00 inclusive of sales tax on taxable merchandise. The combined Philadelphia sales tax rate is 8.00%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Philadelphia, PA',
      combinedTaxRate: '8.00%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.0800)',
        amount: '$92.59',
        note: '$100.00 ÷ 1.0800 = $92.5926, rounded to $92.59.',
      },
      {
        label: 'Extract Embedded Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $92.59)',
        amount: '$7.41',
        note: 'Tax liability owed to PA Department of Revenue.',
      },
    ],
    takeaway:
      'Using the statutory formula Net = Gross ÷ (1 + r), a $100.00 tax-inclusive transaction in Philadelphia yields $92.59 in merchant net income and $7.41 in sales tax payable on Form REV-1500.',
  },
  faqs: [
    {
      question: 'Is clothing sales tax-free throughout Pennsylvania?',
      answer:
        'Yes. Under 72 P.S. § 7204(26), everyday clothing and footwear designed for human wear are completely exempt from both the 6.00% state sales tax and the local sales taxes in Philadelphia and Allegheny County. Non-exempt items include formalwear rentals, real fur apparel, and sports-specific athletic gear.',
    },
    {
      question: 'Which counties in Pennsylvania have a local sales tax?',
      answer:
        'Only two counties in Pennsylvania impose local sales taxes: Philadelphia County (2.00% local tax, making the combined rate 8.00%) and Allegheny County (Pittsburgh, 1.00% local tax, making the combined rate 7.00%). In all other 65 Pennsylvania counties, only the 6.00% state rate applies.',
    },
    {
      question: 'Is Software as a Service (SaaS) taxable in Pennsylvania?',
      answer:
        'Yes. The Pennsylvania Department of Revenue considers canned computer software, including cloud-hosted Software as a Service (SaaS) and digital application access, to be tangible personal property subject to sales and use tax under 72 P.S. § 7201(m) and Ruling SUT-12-001.',
    },
    {
      question: 'What is the economic nexus threshold for remote sellers shipping into Pennsylvania?',
      answer:
        'An out-of-state remote seller establishes economic nexus in Pennsylvania when cumulative gross sales delivered into the Commonwealth exceed $100,000 in the preceding 12 calendar months. Pennsylvania does not enforce a 200-transaction count threshold.',
    },
    {
      question: 'When are monthly sales tax returns due in Pennsylvania?',
      answer:
        'Monthly sales tax returns (Form REV-1500) are due to the Pennsylvania Department of Revenue on or before the 20th day of the month following the close of the reporting period via the myPATH online portal.',
    },
  ],
};

export default pennsylvaniaContent;

