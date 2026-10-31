import type { PageContent } from '../types.ts';

export const californiaContent: PageContent = {
  slug: 'california',
  family: 'sales-tax',
  title: 'California Sales Tax Calculator (7.25% to 10.75%) | FeeKit',
  metaDescription:
    'Calculate California sales tax with verified CDTFA base rates (7.25%) and local district surtaxes up to 10.75%. Covers SaaS exemptions, AB 147 economic nexus, and origin/destination sourcing rules.',
  h1: 'California Sales Tax Calculator & CDTFA Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'California Department of Tax and Fee Administration (CDTFA)',
    url: 'https://www.cdtfa.ca.gov/taxes-and-fees/rates.aspx',
    citation: 'Cal. Rev. & Tax. Code §§ 6051, 6201, 7202, and Regulation 1502 (Computers, Programs, and Data Processing).',
  },
  overview:
    'California enforces a statewide base sales and use tax rate of 7.25%, composed of a 6.00% state rate and a 1.25% mandatory local rate (under the Bradley-Burns Local Sales and Use Tax Law). Additionally, local cities and counties levy special district taxes (transactions and use taxes) that elevate effective tax rates up to 10.75%. Because California operates a hybrid origin and destination sourcing framework with distinctive rules for software, digital goods, and out-of-state economic nexus, online sellers and brick-and-mortar merchants must apply exact street-level district rates to stay compliant.',
  sections: [
    {
      id: 'statutory-rates-local-examples',
      title: 'Statewide Base Rate and Real Local Rate Benchmarks',
      body: `The California statewide statutory floor of 7.25% applies in jurisdictions that have enacted no additional local district taxes. However, the majority of California municipalities impose voter-approved district taxes for transportation, public safety, and general civic operations.

Here are three real, verified municipal district rates active across California:
1. **Los Angeles (Los Angeles County)**: **9.50% total combined rate**. The 7.25% statewide baseline is supplemented by 2.25% in countywide and municipal district transactions taxes (including Los Angeles County Transportation Commission taxes Measure R, Measure M, and Measure H for homeless services).
2. **San Francisco (San Francisco County)**: **8.625% total combined rate**. The baseline is augmented by 1.375% in county transit and education district taxes (San Francisco County Transportation Authority and San Francisco Unified School District financing).
3. **Hayward / Union City (Alameda County)**: **10.75% total combined rate**. Represents the statutory maximum ceiling permitted under California Revenue and Taxation Code § 7251.1 in Alameda County, combining county transportation measures and city-specific essential services district transactions taxes.

Conversely, unincorporated regions within Kern, Ventura, and Placer counties frequently maintain the baseline 7.25% rate where voters have rejected optional municipal surcharges.`,
    },
    {
      id: 'taxability-rules-digital-saas-groceries',
      title: 'California Product Taxability: SaaS, Digital Goods, Clothing, and Groceries',
      body: `California maintains clear statutory boundaries regarding what transactions constitute taxable tangible personal property (TPP) versus exempt intangible goods and professional services:

- **Software as a Service (SaaS)**: **Non-taxable / Exempt**. Under CDTFA Regulation 1502(f)(1)(D), hosted cloud software where the customer accesses programs remotely over the internet without receiving tangible storage media (such as physical disks or USB keys) does not constitute a sale of tangible personal property.
- **Digital Downloads (Music, eBooks, Software)**: **Non-taxable / Exempt**. Electronically transmitted digital audio files, digital books, and downloadable software transferred without any physical media are exempt from California sales and use tax.
- **Unprepared Groceries & Food**: **Exempt**. Under Cal. Rev. & Tax. Code § 6359, essential food products for human consumption purchased at grocery stores are exempt. However, heated prepared meals, restaurant food, and food served for consumption on premises are subject to full standard tax.
- **Clothing and Apparel**: **Fully Taxable**. California levies standard state and local sales tax on all general apparel, footwear, and accessories; there is no basic clothing exemption.
- **Shipping and Delivery Charges**: **Conditionally Exempt**. Under CDTFA Regulation 1628, freight charges are non-taxable if goods are shipped directly to the purchaser via common carrier or US Postal Service, the charge is stated separately on the invoice, and the shipping fee does not exceed actual postage costs. Delivery using the merchant's own vehicles or mandatory combined "shipping and handling" fees are fully taxable.
- **Professional Services**: **Exempt**. Services such as legal representation, custom coding consulting, accounting, and copywriting are exempt, provided they do not involve the fabrication or alteration of physical goods.`,
    },
    {
      id: 'economic-nexus-marketplace-facilitator',
      title: 'California Economic Nexus (AB 147) and Marketplace Facilitator Rules',
      body: `Following the Supreme Court's ruling in *South Dakota v. Wayfair*, California codified economic nexus under Assembly Bill 147 (Cal. Rev. & Tax. Code § 6203):

- **$500,000 Gross Sales Threshold**: An out-of-state remote seller establishes economic nexus in California if total combined gross sales of tangible personal property delivered into California exceed **$500,000** in the preceding or current calendar year.
- **No Transaction Count Threshold**: Unlike states that apply a 200-transaction threshold, California completely eliminated transaction count tests. Small merchants with thousands of low-dollar orders do not trigger nexus until their cumulative sales reach $500,000.
- **Marketplace Facilitator Act**: If you sell exclusively through qualifying marketplace facilitators (such as Amazon, Etsy, eBay, or Walmart Marketplace), the facilitator is legally required to collect and remit California sales tax on your behalf. These marketplace sales count toward your $500,000 threshold, but you do not independently remit tax on transactions processed by the platform. Direct sales via your own Shopify or WooCommerce website remain your direct responsibility once nexus is crossed.`,
    },
    {
      id: 'origin-vs-destination-sourcing',
      title: 'California Sourcing Framework: State Origin vs District Destination',
      body: `California operates a unique hybrid sourcing rule governed by CDTFA Regulation 1827:

1. **State, County, and City Tax (The 7.25% Base)**: For in-state California merchants making retail sales from an established brick-and-mortar storefront or office, the standard local portion is sourced to the **origin location** (the place of business where negotiation occurs).
2. **District Taxes (The Local Surtaxes)**: District taxes are strictly **destination-based**. Under California law, a district use tax is owed based on where the merchandise is delivered or placed into service. If a seller in Irvine (7.75%) ships merchandise to a client in Los Angeles (9.50%), the seller is required to collect the Los Angeles district tax rate if the seller is "engaged in business" in that district or has crossed statewide economic nexus.
3. **Out-of-State Remote Sellers**: Remote sellers with California economic nexus must source all deliveries to the **purchaser's delivery destination address**, collecting the exact composite state-plus-district rate applicable at the customer's street address.`,
    },
    {
      id: 'registration-filing-and-deadlines',
      title: 'CDTFA Permit Registration, Return Deadlines, and Statutory Penalties',
      body: `All merchants with physical or economic nexus must register for a California Seller's Permit via the CDTFA Online Services portal (onlineservices.cdtfa.ca.gov) prior to conducting business:

- **Permit Fee**: California does not charge a fee to issue a standard Seller's Permit, though security deposits may be requested for high-volume historical default profiles.
- **Filing Schedules**: Assigned by the CDTFA based on projected quarterly tax liability: Monthly, Quarterly Prepay, Standard Quarterly, or Annual.
- **Return Due Dates**: Standard quarterly returns are due on or before the **last day of the month following the calendar quarter** (April 30, July 31, October 31, and January 31).
- **Statutory Penalties**: Under Cal. Rev. & Tax. Code § 6591, failure to file on time triggers an automatic **10% penalty** of the tax due, plus compounding statutory interest. Intentional tax evasion or fraud triggers an additional 25% penalty under § 6485.
- **Resale Certificates**: Sellers accepting resale exemptions must collect a signed California Form CDTFA-230 (California Resale Certificate) detailing the purchaser's valid permit number and property description, retaining records for a minimum of 4 years under CDTFA Publication 17.`,
    },
    {
      id: 'sales-tax-holidays',
      title: 'California Sales Tax Holidays Policy',
      body: `The State of California **does not conduct sales tax holidays**. Unlike states in the Southeastern US that sponsor annual back-to-school or severe-weather tax-free weekends, the California State Legislature has consistently declined to pass sales tax holiday statutes due to constitutional uniform-taxation constraints and municipal revenue allocation complexities. All taxable sales in California remain subject to full applicable rates 365 days a year.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Add-Tax Calculation for Los Angeles Delivery ($150.00 Sale)',
    scenario:
      'A boutique merchant delivers a retail leather bag ($150.00 retail price) to a consumer address in the City of Los Angeles, where the combined state and district sales tax rate is 9.50%. Shipping via USPS is billed separately at an actual postal cost of $12.00.',
    inputs: {
      itemSubtotal: '$150.00',
      shippingMethod: 'USPS Common Carrier (Separately Stated)',
      shippingCost: '$12.00',
      deliveryJurisdiction: 'City of Los Angeles, CA',
      combinedTaxRate: '9.50%',
    },
    steps: [
      {
        label: 'Determine Taxable Base',
        formula: '$150.00 (Bag) + $0.00 (Exempt USPS Shipping)',
        amount: '$150.00',
        note: 'Under CDTFA Reg 1628, separately stated common-carrier postage at actual cost is non-taxable.',
      },
      {
        label: 'Compute California State Base Tax (7.25%)',
        formula: '$150.00 × 0.0725',
        amount: '$10.88',
        note: 'CDTFA round-half-up statutory penny arithmetic.',
      },
      {
        label: 'Compute Los Angeles District Surtaxes (2.25%)',
        formula: '$150.00 × 0.0225',
        amount: '$3.38',
        note: 'LA County and Municipal transportation and civic measures.',
      },
      {
        label: 'Calculate Total Sales Tax Collected',
        formula: '$10.88 + $3.38 (or $150.00 × 0.0950)',
        amount: '$14.25',
        note: 'Exact total tax due to CDTFA.',
      },
      {
        label: 'Final Invoice Charged to Consumer',
        formula: '$150.00 (Goods) + $12.00 (Postage) + $14.25 (Tax)',
        amount: '$176.25',
        note: 'Merchant remits $14.25 to CDTFA and retains $162.00.',
      },
    ],
    takeaway:
      'Because separately itemized USPS delivery is non-taxable in California, tax applies strictly to the $150.00 merchandise. Applying the composite 9.50% rate yields exactly $14.25 in sales tax, avoiding the common mistake of taxing postal freight.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A food vendor or event retailer in San Francisco sells taxable merchandise with tax included in the round $100.00 cash or tap payment. The local San Francisco combined sales tax rate is 8.625%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'City and County of San Francisco, CA',
      combinedTaxRate: '8.625%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.08625)',
        amount: '$92.06',
        note: '$100.00 ÷ 1.08625 = $92.0598, rounded to $92.06.',
      },
      {
        label: 'Isolate Sales Tax Element to Remit',
        formula: 'Gross Total − Pre-Tax Net Revenue',
        amount: '$7.94',
        note: '$100.00 − $92.06 = $7.94 tax liability owed to CDTFA.',
      },
      {
        label: 'Integrity Check',
        formula: '$92.06 × 0.08625',
        amount: '$7.94',
        note: '$92.06 net + $7.94 tax equals exactly $100.00 gross receipt.',
      },
    ],
    takeaway:
      'When prices include sales tax, simply taking 8.625% of $100 ($8.63) overstates your tax liability by 69 cents. Always divide by (1 + tax rate) to isolate true net revenue and avoid overpaying the CDTFA.',
  },
  faqs: [
    {
      question: 'What is the current base sales tax rate in California?',
      answer:
        'The statewide baseline sales and use tax rate in California is 7.25%. This consists of a 6.00% state rate and a 1.25% mandatory local county and city rate under the Bradley-Burns Law. In most cities, local district taxes add between 0.50% and 3.50%, producing total effective rates between 7.75% and 10.75%.',
      sourceUrl: 'https://www.cdtfa.ca.gov/taxes-and-fees/rates.aspx',
    },
    {
      question: 'Are SaaS and cloud software taxable in California?',
      answer:
        'No. Under CDTFA Regulation 1502, software accessed remotely over the cloud (SaaS) is not considered a sale of tangible personal property and is exempt from California sales and use tax, provided no physical media (such as disks or flash drives) is transferred to the customer.',
      sourceUrl: 'https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1502.html',
    },
    {
      question: 'What is the California economic nexus threshold for remote out-of-state sellers?',
      answer:
        'Under California AB 147 (codified in Cal. Rev. & Tax. Code § 6203), remote sellers trigger economic nexus if their cumulative gross sales of tangible personal property delivered into California exceed $500,000 during the preceding or current calendar year. California has no 200-transaction count threshold.',
      sourceUrl: 'https://www.cdtfa.ca.gov/industry/wayfair.htm',
    },
    {
      question: 'Is shipping taxable in California?',
      answer:
        'Separately stated shipping charges delivered via common carrier (USPS, FedEx, UPS) are exempt from sales tax if the charge does not exceed the actual postal freight cost incurred by the merchant (CDTFA Reg 1628). However, handling fees, mandatory combined shipping-and-handling fees, or delivery via the seller’s own fleet are fully taxable.',
      sourceUrl: 'https://www.cdtfa.ca.gov/formspubs/pub100/',
    },
    {
      question: 'Does California have an annual sales tax holiday?',
      answer:
        'No. The State of California does not participate in or sponsor any sales tax holidays. All retail transactions involving taxable tangible personal property are subject to standard state and district rates year-round.',
      sourceUrl: 'https://www.cdtfa.ca.gov/taxes-and-fees/rates.aspx',
    },
    {
      question: 'How do I obtain a California Seller’s Permit and what is the fee?',
      answer:
        'You can register for a Seller’s Permit online at no charge through the CDTFA Online Services portal (onlineservices.cdtfa.ca.gov). Anyone actively engaged in business in California who sells or leases taxable tangible personal property must hold a valid permit before making sales.',
      sourceUrl: 'https://www.cdtfa.ca.gov/services/permits-licenses.htm',
    },
  ],
};

export default californiaContent;

