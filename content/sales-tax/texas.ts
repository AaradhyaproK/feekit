import type { PageContent } from '../types.ts';

export const texasContent: PageContent = {
  slug: 'texas',
  family: 'sales-tax',
  title: 'Texas Sales Tax Calculator (6.25% to 8.25%) | FeeKit',
  metaDescription:
    'Calculate Texas sales and use tax with verified Comptroller rates (6.25% base, max 8.25%). Covers the 20% SaaS exemption, Single Local Tax (SLT 1.75%), origin sourcing, and $500k nexus.',
  h1: 'Texas Sales Tax Calculator & Comptroller Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Texas Comptroller of Public Accounts',
    url: 'https://comptroller.texas.gov/taxes/sales/',
    citation: 'Tex. Tax Code Ann. §§ 151.051, 151.351 (Information Services & Data Processing), and Rule 3.334.',
  },
  overview:
    'Texas enforces a statewide base sales and use tax rate of 6.25%. Local taxing jurisdictions—including incorporated cities, counties, transit authorities, and special purpose districts (SPDs)—may levy up to an additional 2.00% in local sales tax, creating a statutory maximum combined rate ceiling of 8.25% statewide under Tex. Tax Code § 321.101. Unlike destination-only states, Texas applies an origin-sourcing framework for intrastate orders and offers remote out-of-state sellers a flat Single Local Tax (SLT) rate option of 1.75%.',
  sections: [
    {
      id: 'statutory-rates-local-examples-texas',
      title: 'Texas Base Rate and Real Local Rate Benchmarks',
      body: `The Texas statewide baseline of 6.25% applies in rural areas where no municipal or transit districts exist. However, all major metropolitan regions impose the full 2.00% local cap, reaching the statutory maximum ceiling of **8.25%**:

1. **Houston (Harris County)**: **8.25% total combined rate**. Consists of the 6.25% state rate, 1.00% City of Houston municipal tax, and 1.00% Metropolitan Transit Authority of Harris County (METRO) tax.
2. **Dallas (Dallas County)**: **8.25% total combined rate**. Combines 6.25% state rate, 1.00% City of Dallas municipal tax, and 1.00% Dallas Area Rapid Transit (DART) sales tax.
3. **Austin (Travis County)**: **8.25% total combined rate**. Combines 6.25% state rate, 1.00% City of Austin municipal tax, and 1.00% Capital Metropolitan Transportation Authority (CapMetro) tax.
4. **Unincorporated Midland / Ector County**: **6.25% to 7.00%**. Rural unincorporated areas outside city boundaries levy zero municipal tax, charging only the 6.25% base plus optional county road/hospital districts.`,
    },
    {
      id: 'taxability-rules-saas-data-processing-texas',
      title: 'Texas Taxability Rules: The 20% SaaS Exemption, Clothing, and Groceries',
      body: `Texas law has unique statutory rules regarding software and digital goods:

- **Software as a Service (SaaS) & Data Processing**: **Partially Taxable (80% Taxable / 20% Exempt)**. Under Tex. Tax Code § 151.351 and Comptroller Rule 3.330, data processing and information services (which include cloud SaaS, automated database hosting, and streaming data) receive a statutory **20% exemption**. Only 80% of the invoiced SaaS amount is subject to Texas state and local sales tax, producing an effective tax rate of **6.60%** in an 8.25% jurisdiction (80% × 8.25%).
- **Digital Downloads**: **Taxable**. Downloaded software, digital music, games, and streaming digital media are classified as taxable tangible personal property in Texas.
- **Unprepared Groceries & Food**: **Exempt**. Food products for human consumption (bread, milk, fresh produce) are exempt. Prepared hot meals, restaurant food, and candy/sodas are fully taxable.
- **Clothing and Apparel**: **Fully Taxable**. Standard clothing and footwear are subject to full sales tax year-round, except during the annual August sales tax holiday.
- **Shipping & Freight Charges**: **Taxable if Linked to Taxable Items**. Under Tex. Tax Code § 151.007, shipping and handling charges billed by the seller in connection with a taxable sale are considered part of the sales price and are fully taxable, regardless of whether stated separately on the invoice.
- **Professional Services**: **Exempt**. Unrelated services such as accounting, legal counsel, and custom bespoke software programming are non-taxable unless specifically enumerated in the Texas Tax Code.`,
    },
    {
      id: 'economic-nexus-and-single-local-tax',
      title: 'Texas Economic Nexus ($500,000) & Single Local Tax (1.75%)',
      body: `Following the *Wayfair* decision, Texas established economic nexus standards under House Bill 2153:

- **$500,000 Total Gross Revenue Threshold**: Out-of-state remote sellers establish nexus if total gross revenue from sales of tangible personal property or services delivered into Texas exceeds **$500,000** in the preceding 12 calendar months. Texas does not enforce a transaction count threshold.
- **Single Local Tax (SLT) Rate Option (1.75%)**: Rather than tracking local tax rates across more than 1,500 individual Texas cities, counties, and SPDs, remote sellers can elect to collect a flat **Single Local Tax (SLT) rate of 1.75%** on all deliveries into Texas (totaling a flat 8.00% combined rate). Remote merchants must notify the Comptroller before adopting the SLT.
- **Marketplace Facilitator Law**: Amazon, Etsy, eBay, and Walmart Marketplace collect and remit Texas sales tax on behalf of third-party sellers. Marketplace volume counts toward your $500,000 economic nexus threshold.`,
    },
    {
      id: 'origin-vs-destination-sourcing-texas',
      title: 'Texas Sourcing Rules: Origin for In-State vs Destination for Remote',
      body: `Texas enforces modified origin sourcing governed by Comptroller Rule 3.334:

1. **In-State Texas Sellers (Origin Sourcing)**: If an in-state Texas merchant receives or processes an order at an established place of business in Texas (storefront, sales office, or order-processing warehouse), local sales tax is sourced to the **origin location** of that business. If a business in Dallas (8.25%) ships merchandise to a customer in an unincorporated county area (6.25%), the seller must collect the full 8.25% Dallas origin rate.
2. **Remote Out-of-State Sellers (Destination Sourcing)**: Remote out-of-state merchants with Texas economic nexus source orders to the **destination delivery address** of the customer (or apply the flat 1.75% SLT rate).`,
    },
    {
      id: 'registration-filing-and-deadlines-texas',
      title: 'Permit Registration, 20th-of-the-Month Due Date, and 0.5% Timely Filing Discount',
      body: `Merchants collecting Texas sales tax must register for an official Sales Tax Permit through the Comptroller’s WebFile portal:

- **Permit Fee**: Free ($0.00).
- **Return Due Date**: All monthly, quarterly, and annual Texas sales tax returns and payments are due on or before the **20th day of the month** following the end of the reporting period (e.g., Q1 return due April 20).
- **Timely Filing Discount (0.50%)**: Under Tex. Tax Code § 151.423, taxpayers who file and pay their returns on time are entitled to deduct a **0.50% timely filing discount** directly from the tax due. An additional 1.25% prepayment discount is available for quarterly taxpayers who prepay early.
- **Statutory Late Penalty**: Late returns incur a mandatory **5% penalty** of the tax due if filed 1 to 30 days late, increasing to **10%** if more than 30 days delinquent, plus statutory annual interest. An automatic $50 late filing penalty applies to every delinquent return, even if zero tax was due.
- **Sales Tax Holiday**: Texas holds an annual 3-day sales tax holiday in **mid-August**, exempting qualifying clothing, footwear, school supplies, and backpacks priced under $100 from state and local sales tax.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B SaaS Invoice in Austin with 20% Statutory Exemption',
    scenario:
      'A cloud analytics provider bills a business client in Austin, Texas $1,000.00 for monthly software access. The combined state and local Austin sales tax rate is 8.25%.',
    inputs: {
      saasInvoiceSubtotal: '$1,000.00',
      statutoryExemption: '20% (Tex. Tax Code § 151.351)',
      taxableBasePercentage: '80%',
      austinCombinedRate: '8.25%',
    },
    steps: [
      {
        label: 'Apply 20% Data Processing Exemption',
        formula: '$1,000.00 × 0.20',
        amount: '$200.00 Exempt',
        note: 'Statutory non-taxable portion under Texas law.',
      },
      {
        label: 'Determine Taxable Base (80%)',
        formula: '$1,000.00 − $200.00 (or $1,000 × 0.80)',
        amount: '$800.00 Taxable',
        note: 'Only $800 is subject to state and local tax.',
      },
      {
        label: 'Compute Texas Combined Tax (8.25%)',
        formula: '$800.00 × 0.0825',
        amount: '$66.00 Tax Due',
        note: 'Effective tax rate on gross invoice is 6.60% ($66 ÷ $1,000).',
      },
      {
        label: 'Total Invoice Charged to Client',
        formula: '$1,000.00 + $66.00',
        amount: '$1,066.00',
        note: 'Client pays $1,066.00; merchant remits $66.00 to the Comptroller.',
      },
    ],
    takeaway:
      'Applying the Texas 20% SaaS exemption reduces tax liability from $82.50 down to $66.00, saving the customer $16.50 on a $1,000 invoice.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Cash Receipts ($100.00 Total)',
    scenario:
      'A retail vendor in Houston sells a taxable consumer product for a flat $100.00 cash inclusive of the combined 8.25% Houston sales tax rate.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'City of Houston, TX',
      combinedTaxRate: '8.25%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: '$100.00 ÷ (1 + 0.0825)',
        amount: '$92.38',
        note: '$100.00 ÷ 1.0825 = $92.3787, rounded to $92.38.',
      },
      {
        label: 'Isolate Sales Tax Remittance Element',
        formula: '$100.00 − $92.38',
        amount: '$7.62',
        note: 'Exact sales tax owed to the Texas Comptroller.',
      },
      {
        label: 'Verification Check',
        formula: '$92.38 × 0.0825',
        amount: '$7.62',
        note: '$92.38 net + $7.62 tax equals exactly $100.00 gross receipt.',
      },
    ],
    takeaway:
      'Divide by 1.0825 to isolate true net revenue ($92.38). Calculating 8.25% of $100 ($8.25) would erroneously overstate tax liability by 63 cents.',
  },
  faqs: [
    {
      question: 'What is the base sales tax rate in Texas and how high can local taxes go?',
      answer:
        'The statewide base sales tax rate in Texas is 6.25%. Local jurisdictions (cities, counties, transit authorities, and special purpose districts) can add up to an additional 2.00%, making the maximum combined sales tax rate 8.25% across all major metro areas like Houston, Dallas, Austin, and San Antonio.',
      sourceUrl: 'https://comptroller.texas.gov/taxes/sales/',
    },
    {
      question: 'Is SaaS taxable in Texas and what is the 20% exemption?',
      answer:
        'SaaS and data processing services are partially taxable in Texas. Under Tex. Tax Code § 151.351, SaaS receives an automatic 20% statutory exemption, meaning only 80% of the invoice amount is subject to state and local sales tax (an effective tax rate of 6.60% in an 8.25% jurisdiction).',
      sourceUrl: 'https://comptroller.texas.gov/taxes/publications/96-259.php',
    },
    {
      question: 'What is the Texas economic nexus threshold for out-of-state remote sellers?',
      answer:
        'Under Texas HB 2153, remote out-of-state sellers establish economic nexus once total gross revenue from sales delivered into Texas exceeds $500,000 over the prior 12 calendar months. Texas has no transaction count threshold.',
      sourceUrl: 'https://comptroller.texas.gov/taxes/sales/remote-sellers.php',
    },
    {
      question: 'What is the Texas Single Local Tax (SLT) rate of 1.75%?',
      answer:
        'Remote out-of-state sellers with Texas economic nexus can elect to collect a flat Single Local Tax (SLT) rate of 1.75% on all deliveries instead of tracking local municipal rates. Combined with the 6.25% state rate, remote sellers collect a uniform 8.00% statewide.',
      sourceUrl: 'https://comptroller.texas.gov/taxes/sales/single-local-use-tax.php',
    },
    {
      question: 'Does Texas offer a timely filing discount for sales tax returns?',
      answer:
        'Yes. Taxpayers who file and pay their Texas sales and use tax returns on or before the due date (the 20th of the month) are entitled to deduct a 0.50% timely filing discount from the tax due under Tex. Tax Code § 151.423.',
      sourceUrl: 'https://comptroller.texas.gov/taxes/sales/faq/filing.php',
    },
    {
      question: 'When is the Texas annual sales tax holiday held?',
      answer:
        'Texas holds an annual sales tax holiday during the second or third weekend of August, exempting qualifying clothing, footwear, school supplies, and backpacks priced under $100 from all state and local sales tax.',
      sourceUrl: 'https://comptroller.texas.gov/taxes/publications/98-490/',
    },
  ],
};

export default texasContent;

