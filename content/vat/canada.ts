import type { PageContent } from '../types.ts';

export const canadaVatContent: PageContent = {
  slug: 'canada',
  family: 'vat',
  title: 'Canada GST/HST Calculator (5% to 15%) & CRA Sales Tax Guide | FeeKit',
  metaDescription:
    'Calculate Canadian Goods and Services Tax (GST) and Harmonized Sales Tax (HST) with verified CRA rates (5% to 15%). Details the C$30k small supplier threshold, ITCs, and provincial breakdowns.',
  h1: 'Canada GST/HST Calculator & Canada Revenue Agency (CRA) Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Canada Revenue Agency (CRA)',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html',
    citation: 'Excise Tax Act (R.S.C., 1985, c. E-15), Part IX (Goods and Services Tax), Sections 165, 240, and Schedule VI.',
  },
  overview:
    'Consumption tax in Canada operates under a federal-provincial framework governed by Part IX of the Excise Tax Act (R.S.C., 1985, c. E-15) and administered by the Canada Revenue Agency (CRA). The federal Goods and Services Tax (GST) is 5.0% nationwide. In participating provinces (Ontario, Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island), the federal GST is blended with provincial tax into a single Harmonized Sales Tax (HST) ranging from 13.0% to 15.0%. Businesses exceeding C$30,000 in worldwide taxable sales across four calendar quarters must register for GST/HST and file periodic GST34 returns.',
  sections: [
    {
      id: 'statutory-rates-provincial-matrix-canada',
      title: 'Canadian Sales Tax Systems: GST, HST, PST, and QST Across Provinces',
      body: `Canada operates three distinct indirect tax structures depending on the province or territory of supply:

1. **Harmonized Sales Tax (HST) Provinces (Single Tax Collected by CRA)**:
   - **Ontario**: **13.0% HST** (5.0% federal GST + 8.0% provincial component).
   - **Nova Scotia, New Brunswick, Newfoundland and Labrador, Prince Edward Island**: **15.0% HST** (5.0% federal GST + 10.0% provincial component).
2. **Dual-Tax Provinces (Separate GST and Provincial Sales Tax)**:
   - **Quebec**: **14.975% combined** (5.0% federal GST + 9.975% Quebec Sales Tax / QST administered by Revenu Québec).
   - **British Columbia**: **12.0% combined** (5.0% federal GST + 7.0% Provincial Sales Tax / PST).
   - **Saskatchewan**: **11.0% combined** (5.0% federal GST + 6.0% PST).
   - **Manitoba**: **12.0% combined** (5.0% federal GST + 7.0% Retail Sales Tax / RST).
3. **GST-Only Jurisdictions (0% Provincial Sales Tax)**:
   - **Alberta, Northwest Territories, Nunavut, and Yukon**: **5.0% flat rate** (only the 5.0% federal GST applies; no provincial or territorial sales taxes exist).`,
    },
    {
      id: 'small-supplier-threshold-and-itcs-canada',
      title: 'The C$30,000 Small Supplier Exemption and Input Tax Credits (ITCs)',
      body: `Under Section 240 of the Excise Tax Act, registration depends on small supplier status:

- **C$30,000 Small Supplier Threshold**: A business or independent self-employed sole proprietor is considered a small supplier and is **not required to register** for GST/HST if gross taxable revenues (worldwide, including associated entities) remain below **C$30,000** across any single calendar quarter or over the previous four consecutive calendar quarters. (The threshold is **C$50,000** for public service bodies like charities and non-profits).
- **Mandatory Registration Trigger**: If gross taxable revenue exceeds C$30,000 in a single calendar quarter, the small supplier status ceases immediately, and the business must collect tax on the transaction that breaches the limit. If breached over four consecutive quarters, registration is mandatory within 29 days following the end of the fourth quarter.
- **Input Tax Credits (ITCs)**: Registered businesses recover 100% of the GST/HST paid on commercial business purchases (office equipment, software subscriptions, commercial rent, legal services) by claiming ITCs on line 108 of their periodic GST34 return.`,
    },
    {
      id: 'zero-rated-vs-exempt-and-non-resident-digital-rules-canada',
      title: 'Zero-Rated vs. Exempt Supplies and Non-Resident Digital Tax Laws',
      body: `The Excise Tax Act distinguishes between non-taxable categories and enforces digital cross-border rules:

- **Zero-Rated Supplies (0% Tax with Full ITC Recovery)**: Specified in Schedule VI of the Excise Tax Act. Includes basic groceries (fresh meat, milk, bread, produce), prescription drugs and dispensing fees, medical devices (artificial limbs, hearing aids, wheelchairs), and international export services provided to non-residents.
- **Exempt Supplies (No Tax and No ITC Recovery)**: Specified in Schedule V. Includes long-term residential rents, residential land sales, most healthcare and dental services, daycare services, and domestic financial services.
- **Cross-Border Digital Economy Tax (Bill C-30)**: Non-resident vendors supplying digital products, cloud software, or streaming services to Canadian consumers without physical nexus must register under the CRA Simplified GST/HST Regime and collect 5% GST (plus applicable provincial taxes) if sales to Canadian consumers exceed C$30,000 annually.`,
    },
    {
      id: 'invoicing-standards-and-cra-filing-deadlines-canada',
      title: 'CRA Invoicing Requirements and Periodic GST34 Return Deadlines',
      body: `Administrative requirements enforced by the Canada Revenue Agency:

- **Mandatory Invoice Elements**: For sales of C$100 or more, invoices must state the supplier's legal or business name, date of supply, 15-digit GST/HST Business Number (formatted as 123456789 RT 0001), description of goods/services, total amount paid or payable, and the specific GST/HST rate charged.
- **Filing Frequency and Deadlines (Form GST34)**: The CRA assigns reporting periods based on annual taxable sales:
  - **Annual Filers (Sales under C$1.5M)**: Return and payment are due within **three months** after the fiscal year-end (for self-employed individuals with a December 31 year-end, the return is due June 15, but tax payment is due April 30).
  - **Quarterly Filers (Sales C$1.5M to C$6M)**: Return and payment are due within **one month** after the end of the fiscal quarter.
  - **Monthly Filers (Sales over C$6M)**: Return and payment are due within **one month** after the end of the reporting month.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Commercial Software License Invoiced in Ontario (13% HST)',
    scenario:
      'A Canadian software consultancy delivers an enterprise cloud deployment for C$5,000.00 net to a corporate client located in Toronto, Ontario. Ontario enforces a combined 13.0% HST under the Excise Tax Act.',
    inputs: {
      netContractPrice: 'C$5,000.00',
      applicableSalesTaxRate: '13.00% (Ontario Harmonized Sales Tax)',
      clientLocation: 'Toronto, Ontario',
      customerStatus: 'GST/HST-registered Canadian corporation',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal',
        formula: 'Agreed commercial contract price',
        amount: 'C$5,000.00',
        note: 'Supplier gross business income.',
      },
      {
        label: 'Calculate 13% Harmonized Sales Tax',
        formula: 'C$5,000.00 × 0.13',
        amount: 'C$650.00',
        note: 'Section 165(2) statutory HST payable (Line 105 on GST34).',
      },
      {
        label: 'Total Invoiced Gross Amount',
        formula: 'C$5,000.00 + C$650.00',
        amount: 'C$5,650.00',
        note: 'Gross payment transferred by client.',
      },
      {
        label: 'Client Input Tax Credit Recovery (ITC)',
        formula: 'Full C$650.00 claimed on client GST34 return (Line 108)',
        amount: 'C$650.00 (Net Cost: C$5,000.00)',
        note: 'Registered Canadian businesses recover 100% of input tax.',
      },
    ],
    takeaway:
      'The vendor collects C$5,650.00, retains C$5,000.00 net, and remits C$650.00 to the CRA. The corporate client claims C$650.00 as an Input Tax Credit (ITC) on line 108 of their return, ensuring complete commercial tax neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 13% HST from Gross Retail Total (C$113.00 Total)',
    scenario:
      'A consumer in Ontario pays C$113.00 inclusive of standard 13% HST. The reverse extraction formula Net = Gross ÷ 1.13 is applied.',
    inputs: {
      grossTotalReceived: 'C$113.00',
      statutoryHstRate: '13.00%',
      extractionFactor: '1.13 (1 + 0.13)',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'C$113.00 ÷ 1.13',
        amount: 'C$100.00',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded Harmonized Sales Tax',
        formula: 'C$113.00 − C$100.00 (or C$100.00 × 0.13)',
        amount: 'C$13.00',
        note: 'HST liability owed to the Canada Revenue Agency.',
      },
    ],
    takeaway:
      'Dividing C$113.00 by 1.13 isolates exactly C$100.00 in pre-tax business income and C$13.00 in statutory HST payable to the CRA on Form GST34.',
  },
  faqs: [
    {
      question: 'What is the difference between GST and HST in Canada?',
      answer:
        'The Goods and Services Tax (GST) is a 5% federal consumption tax applied nationwide. In participating provinces (Ontario, Nova Scotia, New Brunswick, PEI, and Newfoundland and Labrador), the federal GST is blended with the provincial sales tax into a single Harmonized Sales Tax (HST) ranging from 13% to 15%, collected jointly by the CRA.',
    },
    {
      question: 'What is the small supplier threshold for GST/HST registration in Canada?',
      answer:
        'Under Section 240 of the Excise Tax Act, a business is a small supplier and not required to register if its worldwide taxable gross revenues remain below C$30,000 over four consecutive calendar quarters. Once sales exceed C$30,000, registration with the CRA is mandatory.',
    },
    {
      question: 'Which Canadian provinces charge only the 5% federal GST?',
      answer:
        'Alberta, Northwest Territories, Nunavut, and Yukon charge only the 5% federal GST because they have no provincial or territorial sales taxes. All other provinces levy either an HST (13% to 15%) or a separate provincial sales tax (PST/QST/RST).',
    },
    {
      question: 'What are Input Tax Credits (ITCs) in Canada?',
      answer:
        'Input Tax Credits (ITCs) allow GST/HST-registered businesses to recover the sales tax paid on business operating expenses, inventory purchases, and capital investments. ITCs are deducted from the GST/HST collected from customers on line 108 of Form GST34.',
    },
    {
      question: 'Do foreign online businesses have to collect Canadian GST/HST on digital services?',
      answer:
        'Yes. Under the digital economy tax rules enacted under Bill C-30, non-resident businesses that sell digital products, software subscriptions, or streaming services to Canadian consumers must register under the CRA simplified GST/HST regime if sales exceed C$30,000 annually.',
    },
  ],
};

export default canadaVatContent;

