import type { PageContent } from '../types.ts';

export const irelandVatContent: PageContent = {
  slug: 'ireland',
  family: 'vat',
  title: 'Ireland VAT Calculator (23%, 13.5%, 9%, 0%) & Revenue Guide | FeeKit',
  metaDescription:
    'Calculate Irish Value-Added Tax (VAT) with verified Revenue Commissioners rates (23% standard, 13.5% reduced). Covers €40k/€80k thresholds, reverse charge, and VAT3 returns.',
  h1: 'Ireland VAT Calculator & Revenue Commissioners Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Office of the Revenue Commissioners (Revenue)',
    url: 'https://www.revenue.ie/en/vat/index.aspx',
    citation: 'Value-Added Tax Consolidation Act 2010 (VATCA 2010), Sections 46, 56, and Schedules 1–3.',
  },
  overview:
    'Value-Added Tax (VAT) in Ireland is governed by the Value-Added Tax Consolidation Act 2010 (VATCA 2010) and administered by the Office of the Revenue Commissioners. Ireland levies a standard VAT rate of 23% on most commercial goods and services, a reduced rate of 13.5% (fuel, electricity, restaurant catering, construction), a second reduced rate of 9% (periodicals, newspapers, sporting facilities), and a 0% zero-rate on basic food, books, oral medicines, and children’s clothing. Businesses exceeding €40,000 in annual turnover for services or €80,000 for goods must register for VAT and submit bi-monthly VAT3 returns via the Revenue Online Service (ROS).',
  sections: [
    {
      id: 'statutory-rates-ireland-vat',
      title: 'Irish VAT Rates: Standard (23%), Reduced (13.5%), Second Reduced (9%), and Zero-Rated (0%)',
      body: `Irish statutory tax law establishes four primary rate tiers under Section 46 of VATCA 2010:

1. **Standard Rate (23%)**: Codified in Section 46(1)(a). Applies to the vast majority of goods and professional services, including commercial software, IT consulting, adult apparel, consumer electronics, motor vehicles, cosmetics, telecommunications, and alcoholic beverages.
2. **Reduced Rate (13.5%)**: Codified in Section 46(1)(c) and Schedule 3. Applies to domestic coal, gas, electricity, heating oil, restaurant dining and hot takeaway meals, hotel and guest accommodations, hairdressing, and construction and building services.
3. **Second Reduced Rate (9%)**: Applies to newspapers and printed/online periodicals, certain musical and cultural events, and sporting facility admissions.
4. **Zero-Rated (0%)**: Specified in VATCA 2010 Schedule 2. Distinct from exempt supplies because zero-rated businesses can reclaim input VAT on their expenses. Covers basic unprepared food and ingredients (meat, bread, milk, vegetables), printed books and eBooks, children’s clothing and footwear, oral medicines, and medical equipment for hospitals.
5. **Exempt Supplies**: Specified in Schedule 1. Includes financial services, insurance underwriting, passenger transport, medical and dental care by registered practitioners, and primary/secondary education. Entities providing exclusively exempt services cannot register for VAT or reclaim input tax.`,
    },
    {
      id: 'registration-thresholds-ireland-vat',
      title: 'Irish VAT Registration Thresholds: €40,000 for Services vs. €80,000 for Goods',
      body: `Under Section 6 of VATCA 2010, businesses established in Ireland must register for VAT when turnover exceeds statutory thresholds:

- **€40,000 Services Threshold**: Any sole trader, contractor, or business supplying services whose turnover over a continuous 12-month period exceeds **€40,000** must register for VAT.
- **€80,000 Goods Threshold**: Businesses engaged exclusively in the retail or wholesale sale of tangible personal goods must register when turnover exceeds **€80,000** over a 12-month period.
- **Mixed Supplies**: If turnover is derived from both goods and services, the €40,000 services threshold applies if services exceed 10% of total turnover.
- **Voluntary Registration**: Micro-enterprises and early-stage startups below the statutory thresholds may register voluntarily to reclaim input VAT paid on capital equipment, software subscriptions, and commercial leases.`,
    },
    {
      id: 'reverse-charge-and-cross-border-ireland',
      title: 'Postponed Accounting, Reverse Charge, and EU Intra-Community Supplies',
      body: `Ireland is a major global technology and corporate hub with streamlined cross-border VAT mechanisms:

- **B2B General Rule Reverse Charge (Section 12 VATCA 2010)**: For B2B services supplied to or by Irish businesses across EU borders, the place of supply is where the business customer is established. An Irish software firm billing an EU corporate client issues a net invoice without Irish VAT, displaying both parties' VAT numbers and the notice: *"VAT Reverse Charge - Article 196 EU VAT Directive"*. The foreign client self-assesses VAT.
- **Postponed Accounting for Imports**: Following Brexit, Ireland introduced Postponed Accounting under the Withdrawal of the United Kingdom from the European Union Act 2020. Registered Irish importers account for import VAT on their periodic VAT3 return rather than paying cash at customs upon entry.
- **Two-Tier Section 56 Relief**: Under Section 56 of VATCA 2010, qualifying Irish export companies that sell at least 75% of their output abroad can apply for a Section 56 Authorization, enabling them to purchase goods and services from domestic suppliers at a statutory 0% VAT rate.`,
    },
    {
      id: 'invoicing-standards-and-ros-filing-ireland',
      title: 'Revenue Invoice Standards, Bi-Monthly VAT3 Returns, and Deadlines',
      body: `Administrative requirements enforced by the Office of the Revenue Commissioners:

- **Mandatory Invoice Elements (VAT Regulations 2010)**: Invoices must contain the supplier's trading name, address, and VAT number (IE + 7 or 8 digits and letters), customer name and address, sequential invoice number, date of issue, date of supply, description of goods/services, unit net price, applicable VAT rate, total VAT amount, and total gross payable.
- **Filing Deadlines (Form VAT3)**: The standard taxable period in Ireland is bi-monthly (every two months: Jan/Feb, Mar/Apr, May/Jun, Jul/Aug, Sep/Oct, Nov/Dec). Electronic returns submitted via the Revenue Online Service (ROS) are due on the **23rd day of the month** following the end of the bi-monthly period (e.g., January/February period is due March 23).
- **Annual Return of Trading Details (RTD)**: All registered businesses must file an annual RTD detailing annual purchases and sales broken down by VAT rate within 23 days of their accounting year-end. Failure to file the RTD can result in Revenue withholding tax refunds.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Technology Consulting Invoiced at Standard 23% VAT',
    scenario:
      'An Irish software consultancy provides a €4,500.00 net digital transformation sprint to a commercial client in Dublin. Standard 23% Irish VAT applies under Section 46(1)(a) of VATCA 2010.',
    inputs: {
      netServiceFee: '€4,500.00',
      applicableVatRate: '23.00% (Standard Rate)',
      customerStatus: 'Irish commercial company registered on ROS with valid VAT ID',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal',
        formula: 'Agreed commercial contract fee',
        amount: '€4,500.00',
        note: 'Supplier gross business revenue.',
      },
      {
        label: 'Calculate 23% Value-Added Tax',
        formula: '€4,500.00 × 0.23',
        amount: '€1,035.00',
        note: 'Section 46(1)(a) statutory output VAT (T1).',
      },
      {
        label: 'Total Gross Invoiced Amount',
        formula: '€4,500.00 + €1,035.00',
        amount: '€5,535.00',
        note: 'Gross payment transferred by client.',
      },
      {
        label: 'Client Input Tax Recovery (T2)',
        formula: 'Full €1,035.00 reclaimed on client Form VAT3',
        amount: '€1,035.00 (Net Cost: €4,500.00)',
        note: 'Irish commercial clients reclaim 100% of input VAT under Section 59.',
      },
    ],
    takeaway:
      'The supplier collects €5,535.00, retains €4,500.00 net, and remits €1,035.00 (Box T1) to the Revenue Commissioners via ROS on their bi-monthly VAT3 return. The corporate client claims €1,035.00 (Box T2) as deductible input tax, ensuring complete tax neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 23% VAT from Gross Retail Price (€123.00 Total)',
    scenario:
      'A retailer receives €123.00 inclusive of standard 23% Irish VAT. The reverse extraction formula Net = Gross ÷ 1.23 is applied.',
    inputs: {
      grossTotalReceived: '€123.00',
      statutoryVatRate: '23.00%',
      extractionFactor: '1.23 (1 + 0.23)',
    },
    steps: [
      {
        label: 'Determine Pre-VAT Net Revenue',
        formula: '€123.00 ÷ 1.23',
        amount: '€100.00',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded VAT Liability',
        formula: '€123.00 − €100.00 (or €100.00 × 0.23)',
        amount: '€23.00',
        note: 'Output tax owed to Revenue Commissioners.',
      },
    ],
    takeaway:
      'Dividing €123.00 by 1.23 yields exactly €100.00 in pre-tax business revenue and isolates €23.00 in statutory VAT payable on Form VAT3.',
  },
  faqs: [
    {
      question: 'What are the official VAT rates in Ireland?',
      answer:
        'Under Section 46 of VATCA 2010, Ireland applies four primary rates: the standard rate of 23% (most commercial goods and services), a reduced rate of 13.5% (domestic fuel, electricity, restaurant catering, hotel lodging, construction), a second reduced rate of 9% (periodicals, newspapers, sporting facilities), and a 0% zero-rate (basic groceries, books, children’s clothing, oral medicines).',
    },
    {
      question: 'What are the VAT registration thresholds for businesses in Ireland?',
      answer:
        'Under Section 6 of VATCA 2010, the statutory registration threshold is €40,000 in annual turnover for suppliers of services, and €80,000 for suppliers of tangible goods. Businesses generating turnover above these thresholds must register with the Revenue Commissioners.',
    },
    {
      question: 'How often do businesses file VAT returns in Ireland?',
      answer:
        'The standard filing frequency is bi-monthly (every two months). Electronic returns (Form VAT3) submitted via the Revenue Online Service (ROS) are due on the 23rd day of the month following the bi-monthly period. In addition, registered businesses must submit an annual Return of Trading Details (RTD).',
    },
    {
      question: 'How is an Irish VAT number formatted?',
      answer:
        'An Irish VAT number begins with the country code "IE", followed by 7 or 8 digits and letters (e.g., IE 1234567T or IE 1234567FA).',
    },
    {
      question: 'What is the reverse charge rule for B2B cross-border services in Ireland?',
      answer:
        'Under Section 12 of VATCA 2010 (Article 196 EU VAT Directive), when an Irish business provides services to a VAT-registered business in another EU member state, the supplier does not charge Irish VAT. The invoice is issued net with both parties’ VAT numbers, and the recipient self-assesses VAT in their home jurisdiction.',
    },
  ],
};

export default irelandVatContent;

