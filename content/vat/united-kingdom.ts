import type { PageContent } from '../types.ts';

export const unitedKingdomVatContent: PageContent = {
  slug: 'united-kingdom',
  family: 'vat',
  title: 'UK VAT Calculator (20%, 5%, 0%) & HMRC Guide | FeeKit',
  metaDescription:
    'Calculate UK Value Added Tax (VAT) with verified HMRC rates (20% standard, 5% reduced). Covers the £90k threshold, Making Tax Digital (MTD), 1/6 VAT fraction, and reverse charge.',
  h1: 'UK VAT Calculator & HMRC Value Added Tax Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'HM Revenue and Customs (HMRC)',
    url: 'https://www.gov.uk/vat-rates',
    citation: 'Value Added Tax Act 1994 (VATA 1994), Sections 2, 4, 30, and Schedule 7A.',
  },
  overview:
    'Value Added Tax (VAT) in the United Kingdom is governed by the Value Added Tax Act 1994 (VATA 1994) and administered by HM Revenue and Customs (HMRC). The standard VAT rate is 20%, applied to the majority of goods and commercial services. A reduced rate of 5% applies to domestic energy, child safety seats, and specific residential renovations, while a 0% zero-rate applies to most unprepared food, books, children’s clothing, and public transport. Businesses with a rolling 12-month taxable turnover exceeding £90,000 must register for VAT and submit quarterly returns via Making Tax Digital (MTD) compliant software.',
  sections: [
    {
      id: 'statutory-rates-uk-vat',
      title: 'UK VAT Rates: Standard (20%), Reduced (5%), and Zero-Rated (0%)',
      body: `HMRC classifies all supplies of goods and services into four distinct VAT categories under VATA 1994:

1. **Standard Rate (20%)**: Applies to the vast majority of goods and professional services, including commercial software, legal and financial consulting, adult clothing, electronics, restaurant meals, hot takeout foods, and alcoholic beverages.
2. **Reduced Rate (5%)**: Specified in VATA 1994 Schedule 7A. Covers domestic home energy (electricity, gas, heating oil), installation of energy-saving materials in residential homes, mobility aids for the elderly, children's car seats, and smoking cessation products.
3. **Zero-Rated (0%)**: Specified in VATA 1994 Schedule 8. Crucially distinct from "exempt" supplies because zero-rated businesses can still reclaim input VAT on business purchases. Includes most basic grocery food, books, newspapers, magazines, children's clothing and shoes, prescription medications, and newly constructed residential buildings.
4. **Exempt Supplies**: Certain transactions are outside the scope of VAT or specifically exempt under VATA 1994 Schedule 9, including financial services, insurance, postal services by Royal Mail, medical care by registered practitioners, and education. Businesses providing exclusively exempt supplies cannot register for VAT or reclaim input tax.`,
    },
    {
      id: 'vat-registration-threshold-mtd-uk',
      title: 'The £90,000 Registration Threshold and Making Tax Digital (MTD)',
      body: `Operating a business in the UK involves statutory thresholds and digital compliance requirements:

- **£90,000 Rolling 12-Month Threshold**: Under UK tax law, a business must register for VAT if its total taxable turnover over the **past 12 consecutive months** exceeds **£90,000** (effective since the Spring Budget threshold increase), or if the business expects turnover to exceed £90,000 in the **next 30 days alone**. 
- **Voluntary Registration**: Businesses below the £90,000 threshold may choose voluntary registration to reclaim input VAT on business equipment, software, and inventory, or to present a credible enterprise profile when billing corporate clients.
- **Making Tax Digital (MTD) for VAT**: All VAT-registered businesses—regardless of turnover level—are legally required to maintain digital accounting records and submit their quarterly VAT returns directly to HMRC using functional compatible software (e.g., Xero, QuickBooks, FreeAgent) via HMRC’s MTD API.`,
    },
    {
      id: 'the-vat-fraction-and-reverse-charge-uk',
      title: 'The 1/6 VAT Fraction Formula and B2B Reverse Charge Rules',
      body: `Calculating UK VAT requires mastering forward and reverse extraction formulas codified in HMRC Notice 700:

- **The Statutory 1/6 VAT Fraction**: When prices are quoted inclusive of 20% VAT (standard consumer retail), the exact VAT element embedded in the gross price is calculated by multiplying by the statutory **VAT Fraction of 1/6** (derived as 20 ÷ 120 = 1/6). For example, a gross receipt of £120.00 contains exactly £20.00 in VAT (£120 × 1/6), leaving £100.00 net. For the 5% reduced rate, the fraction is **1/21** (5 ÷ 105).
- **Domestic Reverse Charge for Construction (CIS)**: Under Section 55A VATA 1994, when subcontractors provide building and construction services to another VAT-registered contractor who is not the end customer, the subcontractor does not charge VAT on their invoice. Instead, the buyer accounts for the VAT directly on their own VAT return.
- **Cross-Border Digital Services & Post-Brexit Rules**: For B2B cross-border services supplied to non-UK business clients, the place of supply is where the customer belongs under Section 7A VATA 1994, meaning UK VAT is not charged (the foreign customer accounts for tax under their local reverse charge).`,
    },
    {
      id: 'vat-invoicing-requirements-and-deadlines-uk',
      title: 'HMRC Valid VAT Invoice Requirements and Quarterly Deadlines',
      body: `HMRC Notice 700 requires registered businesses to issue valid tax invoices containing mandatory fields:

- **Mandatory Invoice Details**: Invoices must display the supplier's trading name, address, and 9-digit UK VAT registration number (prefixed by GB), a unique sequential invoice number, the tax point (time of supply), customer name and address, description of goods/services, net unit price, applicable VAT rate (20%, 5%, or 0%), total VAT charged, and total gross payable.
- **Filing Deadlines**: Standard VAT returns are filed quarterly. The statutory deadline for submitting the return online and paying HMRC is **1 calendar month and 7 days** after the end of the VAT accounting period. (For example, a quarter ending March 31 must be filed and paid by May 7).
- **Penalty Reform**: HMRC enforces a points-based late submission penalty system and percentage-based late payment penalties accruing at 2% after 15 days, escalating to 4% after 30 days plus Bank of England base rate + 2.5% statutory interest.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Commercial Software License Invoiced at 20% Standard VAT',
    scenario:
      'A UK digital agency provides a bespoke commercial software development sprint for £4,500.00 net to a UK corporate client. Standard 20% VAT applies under VATA 1994 Section 2.',
    inputs: {
      netServiceFee: '£4,500.00',
      applicableVatRate: '20.00% (Standard UK Rate)',
      customerStatus: 'UK VAT-registered business',
      timeOfSupply: 'Standard invoice date',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal',
        formula: 'Agreed commercial contract price',
        amount: '£4,500.00',
        note: 'Supplier gross revenue.',
      },
      {
        label: 'Calculate 20% Output VAT',
        formula: '£4,500.00 × 0.20',
        amount: '£900.00',
        note: 'VATA 1994 Section 2 statutory output tax.',
      },
      {
        label: 'Total Gross Invoice Amount',
        formula: '£4,500.00 + £900.00',
        amount: '£5,400.00',
        note: 'Amount paid by client.',
      },
      {
        label: 'Client Input Tax Recovery',
        formula: 'Full £900.00 reclaimed on client quarterly return',
        amount: '£900.00 (Net Cost: £4,500.00)',
        note: 'UK VAT-registered clients reclaim 100% of input VAT.',
      },
    ],
    takeaway:
      'The supplier collects £5,400.00 from the client, retains £4,500.00, and remits £900.00 output VAT to HMRC on their next quarterly MTD return. Because the client is VAT-registered, they reclaim the £900.00 as input tax on their own return.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 20% VAT from a Gross Receipt (£120.00) using 1/6 Fraction',
    scenario:
      'A retail shop or hospitality business receives a round £120.00 cash or card payment inclusive of standard 20% UK VAT. The statutory HMRC 1/6 VAT fraction formula is applied.',
    inputs: {
      grossTotalReceived: '£120.00',
      statutoryVatRate: '20.00%',
      hmrcVatFraction: '1/6 (Notice 700 Section 7.3)',
    },
    steps: [
      {
        label: 'Apply HMRC 1/6 VAT Fraction',
        formula: '£120.00 × (1 ÷ 6)',
        amount: '£20.00',
        note: 'Exact embedded output VAT owed to HMRC.',
      },
      {
        label: 'Determine Pre-VAT Net Revenue',
        formula: '£120.00 − £20.00 (or £120.00 ÷ 1.20)',
        amount: '£100.00',
        note: 'True business turnover excluding tax.',
      },
    ],
    takeaway:
      'Under HMRC Notice 700, multiplying the gross price by the 1/6 fraction directly isolates the £20.00 VAT element without rounding discrepancies, leaving £100.00 in net business income.',
  },
  faqs: [
    {
      question: 'What is the current UK VAT registration threshold?',
      answer:
        'The UK VAT registration threshold is £90,000 of taxable turnover within any rolling 12-month period. If a business anticipates that its turnover will exceed £90,000 in the next 30 days alone, it must register immediately. Businesses below the threshold may register voluntarily.',
    },
    {
      question: 'How do you calculate VAT backwards from a gross amount in the UK?',
      answer:
        'To extract 20% standard VAT from a gross price, multiply the gross amount by the statutory VAT fraction of 1/6 (or divide the gross amount by 1.20 and subtract the result from the gross). For example, £60.00 gross × (1/6) = £10.00 VAT, leaving £50.00 net.',
    },
    {
      question: 'What is the difference between zero-rated and exempt goods in the UK?',
      answer:
        'Zero-rated goods (such as books, children’s clothing, and most basic food) are taxed at 0% VAT, and businesses selling them can reclaim input VAT on their business expenses. Exempt supplies (such as financial services, medical care, and residential rent) are completely outside the VAT system, and businesses providing exempt supplies cannot reclaim input tax.',
    },
    {
      question: 'What are the deadlines for filing quarterly UK VAT returns?',
      answer:
        'Under HMRC rules, the deadline for submitting a quarterly VAT return online via Making Tax Digital (MTD) software and paying the tax owed is 1 calendar month and 7 days following the end of the quarterly accounting period.',
    },
    {
      question: 'What is the UK domestic reverse charge for the construction industry (CIS)?',
      answer:
        'Under Section 55A of VATA 1994, the domestic reverse charge applies to B2B building and construction services where both the supplier and customer are VAT-registered and reported under the Construction Industry Scheme (CIS). The subcontractor does not charge VAT on their invoice; instead, the contractor reports both the input and output VAT on their own return.',
    },
  ],
};

export default unitedKingdomVatContent;

