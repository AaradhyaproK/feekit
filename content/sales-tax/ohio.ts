import type { PageContent } from '../types.ts';

export const ohioContent: PageContent = {
  slug: 'ohio',
  family: 'sales-tax',
  title: 'Ohio Sales Tax Calculator (5.75% to 8.00%) | FeeKit',
  metaDescription:
    'Calculate Ohio sales and use tax with verified ODT rates (5.75% base, max 8.00%). Details Cuyahoga 8%, B2B SaaS taxation under R.C. 5739.01, and $100k/200 tx nexus.',
  h1: 'Ohio Sales Tax Calculator & Department of Taxation Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Ohio Department of Taxation',
    url: 'https://tax.ohio.gov/business/taxes/sales-and-use',
    citation: 'Ohio Rev. Code (R.C.) §§ 5739.02, 5739.01(B)(3)(e) (Electronic Information Services), and 5739.033.',
  },
  overview:
    'The State of Ohio levies a statewide base sales and use tax rate of 5.75% under Ohio Revised Code (R.C.) § 5739.02. Ohio counties and regional transit authorities (RTAs) levy permissive sales taxes ranging from 0.75% to 2.25%, producing combined rates from 6.50% to 8.00% across the state, with Cuyahoga County (Cleveland) reaching the statutory 8.00% maximum. Ohio maintains a distinct statutory framework that taxes computer services and SaaS when provided for business use (B2B), while exempting consumer-facing subscriptions, and provides a 0.75% vendor discount for timely filing.',
  sections: [
    {
      id: 'statutory-rates-local-examples-ohio',
      title: 'Ohio Base Rate, County Permissive Taxes, and Local Benchmarks',
      body: `Ohio's base rate of 5.75% is supplemented by county permissive sales taxes and regional transit authority levies:

1. **Cleveland (Cuyahoga County)**: **8.00% combined rate**. Composed of 5.75% State tax, 1.25% Cuyahoga County permissive tax, and 1.00% Greater Cleveland Regional Transit Authority (GCRTA) tax.
2. **Columbus (Franklin County)**: **7.50% combined rate**. Combines 5.75% State tax, 1.25% Franklin County permissive tax, and 0.50% Central Ohio Transit Authority (COTA) sales tax.
3. **Cincinnati (Hamilton County)**: **7.80% combined rate**. Combines 5.75% State tax, 1.25% Hamilton County tax, and 0.80% Southwest Ohio Regional Transit Authority (SORTA) levy.
4. **Dayton (Montgomery County)**: **7.50% combined rate**. Composed of 5.75% State tax, 1.25% Montgomery County permissive tax, and 0.50% Greater Dayton RTA tax.`,
    },
    {
      id: 'b2b-saas-data-processing-groceries-ohio',
      title: 'Ohio Taxability: B2B SaaS Taxation, Grocery Rules, and Clothing',
      body: `Ohio tax law features a specialized statutory distinction between commercial and personal digital services:

- **B2B Software as a Service & Electronic Information Services**: **Taxable for Business Use**. Under R.C. § 5739.01(B)(3)(e) and R.C. § 5739.01(Y)(1), "automatic data processing, computer services, and electronic information services" are subject to Ohio sales tax when provided for use in business. If a business customer in Ohio purchases cloud software, hosted infrastructure, or database access for commercial operations, the transaction is taxable at the destination rate.
- **B2C Consumer SaaS**: **Exempt**. Under R.C. § 5739.01(Y)(1)(c), if automatic data processing or computer services are purchased by an individual exclusively for personal, non-business use, they are exempt from Ohio sales tax.
- **Unprepared Groceries & Food**: **Exempt**. Food products purchased for human consumption off the premises where sold are exempt under R.C. § 5739.02(B)(1) and Article XII, Section 13 of the Ohio Constitution. Food consumed on premises (restaurant meals) and soft drinks are fully taxable.
- **Clothing and Apparel**: **Taxable**. Clothing and footwear are taxable at standard combined rates, except during Ohio's expanded annual Sales Tax Holiday in August.
- **Delivery and Freight Charges**: **Taxable if Linked to Taxable Goods**. Under R.C. § 5739.01(H)(1)(a)(iv), delivery charges by the vendor are included in the taxable sales price unless the underlying merchandise is exempt.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-ohio',
      title: 'Ohio Economic Nexus: The $100,000 or 200 Transactions Standard',
      body: `Remote out-of-state vendors shipping into Ohio must comply with statutory nexus thresholds under R.C. § 5739.01(I):

- **Dual Nexus Threshold**: An out-of-state seller establishes economic nexus if, during the current or preceding calendar year:
  1. Gross sales of tangible personal property or taxable services delivered into Ohio exceed **$100,000**, **OR**
  2. The seller engages in **200 or more separate transactions** delivered into Ohio.
- **Marketplace Facilitator Relief**: Under R.C. § 5739.052, registered marketplace facilitators (Amazon, eBay, Walmart, Etsy) must collect and remit Ohio sales tax on behalf of marketplace sellers. Sales facilitated by registered platforms count toward the $100,000 / 200 transaction threshold.`,
    },
    {
      id: 'destination-sourcing-and-gateway-filing-ohio',
      title: 'Destination Sourcing, Ohio Business Gateway, and Timely Filing Discount',
      body: `Administrative requirements enforced by the Ohio Department of Taxation (ODT):

- **Destination-Based Sourcing**: Under R.C. § 5739.033, retail sales are sourced to the location where the customer receives the property or service.
- **Vendor Licensing (Ohio Business Gateway)**: Businesses register online via the Ohio Business Gateway to obtain a Vendor’s License (for in-state businesses) or an Out-of-State Seller’s Use Tax Account.
- **Return Due Dates (Form UST-1 / UET-1)**: Monthly sales tax returns are due on or before the **23rd day of the month** following the reporting period (e.g., January tax is due February 23).
- **Vendor Timely Filing Discount**: Under R.C. § 5739.12, vendors who file and pay their sales tax returns on or before the 23rd are granted a statutory discount of **0.75% of the total tax liability**, deducted directly on Form UST-1.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Enterprise Cloud Software Sale Delivered to Columbus Business',
    scenario:
      'A software company sells a $2,000.00 monthly cloud computing package to a commercial business in Columbus, Ohio. In Ohio, B2B data processing and electronic services are taxable under R.C. § 5739.01(B)(3)(e).',
    inputs: {
      monthlyB2BLicense: '$2,000.00',
      clientLocation: 'Columbus, OH (Franklin County)',
      stateBaseRate: '5.75%',
      franklinCountyPermissiveRate: '1.25%',
      cotaTransitRate: '0.50%',
      combinedTaxRate: '7.50%',
    },
    steps: [
      {
        label: 'Compute Ohio State Sales Tax (5.75%)',
        formula: '$2,000.00 × 0.0575',
        amount: '$115.00',
        note: 'R.C. § 5739.02 state portion.',
      },
      {
        label: 'Compute Franklin County Permissive Tax (1.25%)',
        formula: '$2,000.00 × 0.0125',
        amount: '$25.00',
        note: 'County infrastructure and operations levy.',
      },
      {
        label: 'Compute COTA Transit Surtax (0.50%)',
        formula: '$2,000.00 × 0.0050',
        amount: '$10.00',
        note: 'Central Ohio Transit Authority Dedicated Levy.',
      },
      {
        label: 'Total Sales Tax Due',
        formula: '$115.00 + $25.00 + $10.00 (or $2,000.00 × 0.0750)',
        amount: '$150.00',
        note: 'Total statutory sales tax collected from client.',
      },
      {
        label: 'Gross Invoiced Amount Charged to Client',
        formula: '$2,000.00 + $150.00',
        amount: '$2,150.00',
        note: 'Customer pays $2,150.00; vendor remits $150.00 on Form UST-1.',
      },
    ],
    takeaway:
      'Because the customer is a commercial business, Ohio law treats cloud software and electronic information services as taxable. At the Columbus destination rate of 7.50%, the tax is $150.00. (If sold to an individual consumer for personal use, it would be exempt under R.C. 5739.01(Y)(1)(c)).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A retail vendor in Cleveland (Cuyahoga County) collects a flat $100.00 cash or card payment inclusive of all applicable Ohio and local sales taxes. The combined Cuyahoga County tax rate is 8.00%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Cleveland, OH (Cuyahoga County)',
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
        label: 'Extract Embedded Ohio Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $92.59)',
        amount: '$7.41',
        note: 'Tax liability owed to Ohio Department of Taxation.',
      },
    ],
    takeaway:
      'Applying the statutory extraction formula Net = Gross ÷ (1 + r), a $100.00 tax-inclusive transaction in Cleveland yields $92.59 in net revenue and $7.41 in sales tax.',
  },
  faqs: [
    {
      question: 'Is Software as a Service (SaaS) taxable in Ohio?',
      answer:
        'In Ohio, the taxability of SaaS depends on whether the customer is a business or a consumer. Under R.C. § 5739.01(B)(3)(e), cloud software, data processing, and electronic information services are taxable when sold to a business for commercial use. When sold to individual consumers for personal use, SaaS is exempt under R.C. § 5739.01(Y)(1)(c).',
    },
    {
      question: 'What is the maximum combined sales tax rate in Ohio?',
      answer:
        'The maximum combined sales tax rate in Ohio is 8.00%, which applies in Cuyahoga County (Cleveland). It consists of the 5.75% statewide rate, a 1.25% county permissive tax, and a 1.00% Regional Transit Authority (GCRTA) tax.',
    },
    {
      question: 'What are the economic nexus thresholds for remote sellers shipping into Ohio?',
      answer:
        'A remote seller establishes economic nexus in Ohio under R.C. § 5739.01(I) if gross sales delivered into the state exceed $100,000 OR if the seller enters into 200 or more separate transactions delivered into Ohio during the current or preceding calendar year.',
    },
    {
      question: 'Does Ohio provide a vendor discount for timely sales tax filing?',
      answer:
        'Yes. Under R.C. § 5739.12, vendors who submit their sales tax returns and pay the liability on or before the due date (the 23rd of the month) are entitled to a statutory discount of 0.75% of the total tax due.',
    },
    {
      question: 'When are monthly sales tax returns due to the Ohio Department of Taxation?',
      answer:
        'Monthly sales tax returns (Form UST-1) are due on or before the 23rd day of the month following the close of the reporting period through the Ohio Business Gateway portal.',
    },
  ],
};

export default ohioContent;

