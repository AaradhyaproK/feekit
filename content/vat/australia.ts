import type { PageContent } from '../types.ts';

export const australiaVatContent: PageContent = {
  slug: 'australia',
  family: 'vat',
  title: 'Australia GST Calculator (Flat 10% Goods & Services Tax) & ATO Guide | FeeKit',
  metaDescription:
    'Calculate Australian Goods and Services Tax (GST) with verified ATO rates (flat 10%). Details the A$75k turnover threshold, GST-free food exemptions, BAS returns, and Division 84 reverse charge.',
  h1: 'Australia GST Calculator & Australian Taxation Office (ATO) Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Australian Taxation Office (ATO)',
    url: 'https://www.ato.gov.au/business/gst/',
    citation: 'A New Tax System (Goods and Services Tax) Act 1999, Sections 9-5, 38-1 (GST-free), and 40-1.',
  },
  overview:
    'The Goods and Services Tax (GST) in Australia is a broad-based federal consumption tax governed by the *A New Tax System (Goods and Services Tax) Act 1999* and administered by the Australian Taxation Office (ATO). Australia levies a uniform, nationwide rate of 10% on most goods, services, and digital products consumed domestically. Basic foodstuffs, medical services, education, and exports are classified as GST-free (0%). Businesses with a current or projected GST turnover of A$75,000 or more must register for GST and lodge periodic Business Activity Statements (BAS).',
  sections: [
    {
      id: 'statutory-rates-australia-gst',
      title: 'Australian GST Framework: Standard (10%), GST-Free (0%), and Input-Taxed Supplies',
      body: `The Australian GST framework categorizes all commercial transactions under three statutory definitions within the GST Act 1999:

1. **Taxable Supplies (Standard Rate — 10%)**: Under Section 9-5 of the Act, a supply is taxable if it is made for consideration in the course of an enterprise connected with the indirect tax zone (Australia). Covers commercial software, professional consulting, adult apparel, electronics, motor vehicles, restaurant dining, hot takeaway food, and alcoholic beverages.
2. **GST-Free Supplies (0% Rate with Input Tax Credits)**: Governed by Division 38. Distinct from input-taxed supplies because businesses selling GST-free products can claim full input tax credits for GST included in their business inputs. Covers most basic grocery foods for home preparation (fresh meat, poultry, fish, bread, milk, fruit, vegetables), medical and dental services by registered practitioners, prescription pharmaceuticals, education courses, childcare, and exports of goods and services.
3. **Input-Taxed Supplies (Exempt from GST)**: Governed by Division 40. The supplier does not charge GST to the customer, but cannot claim input tax credits for GST included in purchases related to making the supply. Applies to financial supplies (bank loans, credit cards, mortgages) and residential rent or the sale of existing residential premises.`,
    },
    {
      id: 'registration-thresholds-and-ride-sourcing-australia',
      title: 'The A$75,000 Registration Threshold and Mandatory Taxi/Ride-Share Rules',
      body: `Under Division 23 of the GST Act 1999, registration obligations depend on enterprise turnover:

- **A$75,000 GST Turnover Threshold**: A business or independent sole trader must register for GST within 21 days if its current GST turnover (turnover in the current month plus the preceding 11 months) or projected GST turnover (turnover in the current month plus the next 11 months) reaches or exceeds **A$75,000**. (The threshold is **A$150,000** for non-profit entities).
- **Mandatory Ride-Sourcing & Taxi Driver Registration**: Under Section 144-5 of the Act, anyone providing taxi travel or ride-sourcing services (e.g., driving for Uber, Didi, or traditional cabs) **must register for GST regardless of turnover**, even if earning only A$500 per year.
- **Voluntary Registration**: Small businesses earning under A$75,000 can choose voluntary registration to claim input tax credits on capital equipment, computers, software, and commercial vehicle purchases.`,
    },
    {
      id: 'the-1-11-gst-fraction-and-cross-border-rules-australia',
      title: 'The 1/11th GST Extraction Formula and Division 84 Cross-Border Rules',
      body: `Calculating Australian GST involves standardized statutory extraction mathematics and offshore compliance rules:

- **The Statutory 1/11th GST Fraction**: In consumer retail transactions across Australia, prices must be quoted inclusive of GST under the *Competition and Consumer Act 2010*. The exact GST component embedded within any GST-inclusive price is calculated by multiplying by the statutory fraction of **1/11th** (derived as 10 ÷ 110 = 1/11). For example, a receipt of A$110.00 contains exactly A$10.00 in GST (A$110 × 1/11), leaving A$100.00 net.
- **Offshore Digital Supplies & Low-Value Imported Goods (Division 84)**: Overseas businesses supplying digital services (streaming, cloud software, eBooks) or selling imported physical goods valued at A$1,000 or less to Australian consumers must register and remit 10% GST if their sales to Australian customers reach A$75,000 annually.
- **Reverse Charge for Cross-Border B2B Supplies**: Under Division 84, when an Australian business purchases services or intangibles from an overseas vendor solely for creditable business purposes, the transaction is non-taxable (or the Australian business accounts for it under a reverse charge if input credits are restricted).`,
    },
    {
      id: 'tax-invoice-standards-and-bas-filing-australia',
      title: 'ATO Valid Tax Invoice Requirements and Business Activity Statement (BAS) Deadlines',
      body: `Administrative compliance enforced by the Australian Taxation Office:

- **Valid Tax Invoice Requirements**: For sales exceeding A$82.50 (including GST), suppliers must issue a valid tax invoice stating that the document is intended as a tax invoice, the supplier's identity and Australian Business Number (ABN, an 11-digit identifier), invoice date, description of goods/services, GST amount (or statement that the total price includes GST), and the buyer's identity or ABN if the sale exceeds A$1,000.
- **Business Activity Statement (BAS) Deadlines**: Most small-to-medium businesses lodge quarterly BAS returns:
  - Quarter 1 (July–September): Due **October 28**.
  - Quarter 2 (October–December): Due **February 28**.
  - Quarter 3 (January–March): Due **April 28**.
  - Quarter 4 (April–June): Due **July 28**.
- **Payment & Net Settlement**: On the BAS, businesses report total sales (G1), output GST collected (1A), and input tax credits paid on purchases (1B). The business remits the net difference to the ATO (or receives a refund if credits exceed output tax).`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Commercial Software Implementation Invoiced at 10% GST',
    scenario:
      'An Australian IT consultancy delivers an enterprise cloud migration project for A$5,000.00 net to a corporate client in Sydney. Standard 10% Australian GST applies under Section 9-5 of the GST Act 1999.',
    inputs: {
      netConsultingFee: 'A$5,000.00',
      applicableGstRate: '10.00% (Standard Australian Rate)',
      customerStatus: 'Australian company with valid ABN registered for GST',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal (GST-Exclusive)',
        formula: 'Agreed commercial contract price',
        amount: 'A$5,000.00',
        note: 'Supplier gross business income.',
      },
      {
        label: 'Calculate 10% Goods and Services Tax',
        formula: 'A$5,000.00 × 0.10',
        amount: 'A$500.00',
        note: 'Section 9-5 statutory GST payable (Box 1A on BAS).',
      },
      {
        label: 'Total Invoiced Amount (GST-Inclusive)',
        formula: 'A$5,000.00 + A$500.00',
        amount: 'A$5,500.00',
        note: 'Gross payment transferred by client.',
      },
      {
        label: 'Client Input Tax Credit Recovery',
        formula: 'Full A$500.00 claimed on client quarterly BAS (Box 1B)',
        amount: 'A$500.00 (Net Cost: A$5,000.00)',
        note: 'Australian registered businesses recover 100% of input GST.',
      },
    ],
    takeaway:
      'The consultancy collects A$5,500.00 from the client, retains A$5,000.00 net, and remits A$500.00 to the ATO on their quarterly BAS. The client claims A$500.00 as an input tax credit on Box 1B, resulting in zero net tax cost.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 10% GST from a Gross Receipt (A$110.00) using 1/11th Fraction',
    scenario:
      'A retailer receives A$110.00 cash or card payment inclusive of 10% Australian GST. The statutory ATO 1/11th GST fraction formula is applied.',
    inputs: {
      grossTotalReceived: 'A$110.00',
      statutoryGstRate: '10.00%',
      atoGstFraction: '1/11th (Section 195-1 GST Act)',
    },
    steps: [
      {
        label: 'Apply ATO 1/11th GST Fraction',
        formula: 'A$110.00 × (1 ÷ 11)',
        amount: 'A$10.00',
        note: 'Exact embedded GST owed to the ATO.',
      },
      {
        label: 'Determine Pre-GST Net Revenue',
        formula: 'A$110.00 − A$10.00 (or A$110.00 ÷ 1.10)',
        amount: 'A$100.00',
        note: 'True business revenue excluding tax.',
      },
    ],
    takeaway:
      'Multiplying any GST-inclusive price by 1/11th immediately isolates the exact GST element (A$10.00), leaving the GST-exclusive net revenue of A$100.00.',
  },
  faqs: [
    {
      question: 'What is the current Goods and Services Tax (GST) rate in Australia?',
      answer:
        'Australia levies a single flat nationwide GST rate of 10% on most goods, services, and digital products. Unlike the US or Canada, there are no state or provincial sales taxes in Australia; the 10% federal GST is uniform across all states and territories.',
    },
    {
      question: 'What is the GST registration threshold in Australia?',
      answer:
        'Businesses and sole proprietors must register for GST with the ATO if their annual GST turnover is A$75,000 or more (A$150,000 for non-profits). Taxi and ride-share drivers (such as Uber) must register for GST regardless of how much they earn.',
    },
    {
      question: 'How do you calculate GST backwards from a total price in Australia?',
      answer:
        'To extract GST from a GST-inclusive price, multiply the total by the statutory fraction of 1/11th (or divide the total by 11). For example, on a total price of A$55.00, the GST is A$55.00 ÷ 11 = A$5.00, leaving A$50.00 net.',
    },
    {
      question: 'What items are considered GST-free in Australia?',
      answer:
        'Under Division 38 of the GST Act 1999, GST-free items include most basic grocery foods (bread, milk, fresh meat, vegetables), most medical and dental services, prescription medicines, education courses, and international exports. Businesses selling GST-free items can claim input tax credits on their business purchases.',
    },
    {
      question: 'When are quarterly Business Activity Statements (BAS) due to the ATO?',
      answer:
        'Quarterly BAS returns are due on the 28th day of the month following the end of the quarter: October 28 (Q1), February 28 (Q2), April 28 (Q3), and July 28 (Q4). If lodging through a registered tax or BAS agent, extensions typically apply.',
    },
  ],
};

export default australiaVatContent;

