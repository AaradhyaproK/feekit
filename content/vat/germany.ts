import type { PageContent } from '../types.ts';

export const germanyVatContent: PageContent = {
  slug: 'germany',
  family: 'vat',
  title: 'Germany VAT Calculator (19% & 7% MwSt.) & UStG Guide | FeeKit',
  metaDescription:
    'Calculate German Mehrwertsteuer (MwSt. / USt.) with verified BZSt rates (19% standard, 7% reduced). Details § 19 UStG Kleinunternehmer, § 13b reverse charge, and ELSTER filing.',
  h1: 'Germany VAT Calculator & Umsatzsteuergesetz (UStG) Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Bundeszentralamt für Steuern (BZSt) / Federal Ministry of Finance',
    url: 'https://www.bzst.de/',
    citation: 'Umsatzsteuergesetz (UStG) §§ 12, 13b (Reverse Charge), 14 (Invoicing), and 19 (Kleinunternehmer).',
  },
  overview:
    'Value Added Tax in Germany—known domestically as Umsatzsteuer (USt.) or Mehrwertsteuer (MwSt.)—is governed by the Umsatzsteuergesetz (UStG) and administered by local tax offices (Finanzämter) under federal guidance from the Bundeszentralamt für Steuern (BZSt). Germany levies a standard VAT rate of 19% on commercial goods and services, and a reduced rate of 7% on basic food, books, public transport, and hotel accommodation. Self-employed freelancers and micro-businesses generating under €22,000 annually can elect exemption under the Kleinunternehmerregelung (§ 19 UStG).',
  sections: [
    {
      id: 'statutory-rates-germany-vat',
      title: 'German VAT Rates: Standard (19%), Reduced (7%), and Zero-Rated Supplies',
      body: `German tax law establishes two primary statutory tax brackets under § 12 UStG:

1. **Standard Rate (Regelsteuersatz — 19%)**: Codified in § 12 Abs. 1 UStG. Applies to the vast majority of commercial products and professional services, including commercial software, legal and financial consulting, adult apparel, consumer electronics, motor vehicles, restaurant dining (non-delivery meals), and general industrial goods.
2. **Reduced Rate (Ermäßigter Steuersatz — 7%)**: Codified in § 12 Abs. 2 UStG. Applies to basic foodstuffs (meat, fish, milk, bread, produce), printed books, newspapers, cultural admissions (theaters, museums, concerts), short-distance passenger rail transport, and short-term hotel lodging (excluding breakfast).
3. **Zero-Rated & Tax-Exempt Transactions**: Under § 4 UStG, intra-Community B2B deliveries to other EU member states and export deliveries to non-EU nations are zero-rated (steuerfreie Ausfuhrlieferungen). Real estate leasing, medical treatments by licensed physicians, and financial credit arrangements are generally exempt.`,
    },
    {
      id: 'kleinunternehmer-exemption-germany',
      title: 'The Small Business Exemption: Kleinunternehmerregelung (§ 19 UStG)',
      body: `Germany provides statutory administrative relief for freelancers and micro-enterprises under § 19 UStG:

- **Revenue Thresholds**: A sole proprietor or small business qualifies for the Kleinunternehmerregelung if total turnover (plus VAT) did not exceed **€22,000** in the preceding calendar year and is not expected to exceed **€50,000** in the current calendar year.
- **Operational Impact**: A registered Kleinunternehmer does not charge 19% or 7% MwSt. on customer invoices. However, they are legally barred from claiming input tax deduction (Vorsteuerabzug) on business equipment, software, or inventory purchases.
- **Mandatory Invoice Disclaimer**: Invoices issued by an exempt small business must include an explicit statutory notice: *"Gemäß § 19 UStG wird keine Umsatzsteuer berechnet"* (No VAT is charged pursuant to Section 19 of the German VAT Act).`,
    },
    {
      id: 'reverse-charge-and-eu-b2b-rules-germany',
      title: 'The § 13b UStG Reverse Charge and Cross-Border EU Supplies',
      body: `Cross-border commercial transactions and high-risk domestic sectors operate under statutory reverse charge mechanisms:

- **The § 13b UStG Mechanism (Steuerschuldnerschaft des Leistungsempfängers)**: For cross-border B2B digital services and construction work, the liability to pay VAT shifts from the supplier to the business recipient. The German supplier issues a net invoice without German MwSt. displaying both parties' VAT numbers (USt-IdNr.) and stating: *"Steuerschuldnerschaft des Leistungsempfängers (Reverse Charge)"*. The recipient self-assesses VAT on their local return.
- **Intra-Community Acquisitions**: German businesses purchasing goods or digital services from other EU member states account for 19% acquisition tax while simultaneously reclaiming it as input tax, yielding a neutral cash flow impact.
- **One-Stop Shop (OSS)**: For B2C cross-border sales of digital goods and e-commerce across EU borders exceeding the unified €10,000 EU threshold, German merchants declare foreign VAT through the federal BZSt OSS portal.`,
    },
    {
      id: 'invoicing-requirements-and-elster-filing-germany',
      title: '§ 14 UStG Invoicing Standards, B2B E-Invoicing, and ELSTER Deadlines',
      body: `Administrative requirements enforced by the German Federal Ministry of Finance:

- **Mandatory Invoice Elements (§ 14 UStG)**: Invoices exceeding €250 must contain the supplier's full legal name and address, customer address, tax number (Steuernummer) or VAT ID (USt-IdNr. formatted as DE + 9 digits), invoice issue date, sequential invoice number, delivery date/performance period, net breakdown by tax rate, and exact VAT amount.
- **B2B E-Invoicing Mandate (Wachstumschancengesetz)**: Under recent legislative reforms, German businesses operating in the domestic B2B sector must transition to structured electronic invoicing (ZUGFeRD or XRechnung formats conforming to European standard EN 16931).
- **Advance VAT Return Deadlines (USt-Voranmeldung)**: Registered businesses submit periodic advance returns electronically via the ELSTER tax portal by the **10th day of the month** following the reporting period (e.g., January tax is due February 10). New businesses or entities owing over €7,500 annually file monthly; others file quarterly. A permanent one-month extension (Dauerfristverlängerung) can be requested.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Enterprise Software Implementation Invoiced at 19% MwSt.',
    scenario:
      'A German IT consultancy delivers a €5,000.00 net cloud software configuration project to a domestic corporate client in Munich. Standard 19% Umsatzsteuer applies under § 12 Abs. 1 UStG.',
    inputs: {
      netContractPrice: '€5,000.00',
      applicableVatRate: '19.00% (Regelsteuersatz)',
      customerStatus: 'German corporate entity with valid Steuernummer',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal',
        formula: 'Agreed commercial contract price',
        amount: '€5,000.00',
        note: 'Supplier net revenue.',
      },
      {
        label: 'Calculate 19% Mehrwertsteuer',
        formula: '€5,000.00 × 0.19',
        amount: '€950.00',
        note: '§ 12 Abs. 1 UStG output tax (Umsatzsteuer).',
      },
      {
        label: 'Total Gross Invoice Amount',
        formula: '€5,000.00 + €950.00',
        amount: '€5,950.00',
        note: 'Gross payment transferred by client.',
      },
      {
        label: 'Client Input Tax Deduction (Vorsteuerabzug)',
        formula: '€950.00 reclaimed on client USt-VA return',
        amount: '€950.00 (Net Cost: €5,000.00)',
        note: 'German business clients reclaim 100% of input VAT under § 15 UStG.',
      },
    ],
    takeaway:
      'The supplier collects €5,950.00, retains €5,000.00 net, and remits €950.00 to the local Finanzamt via ELSTER. The corporate buyer reclaims the €950.00 as Vorsteuer on line 66 of their advance return, maintaining tax neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 19% MwSt. from Gross Price (€119.00 Total)',
    scenario:
      'A retail consumer pays a round €119.00 inclusive of standard 19% German VAT. The reverse extraction formula Net = Gross ÷ 1.19 is applied.',
    inputs: {
      grossTotalReceived: '€119.00',
      statutoryVatRate: '19.00%',
      extractionFactor: '1.19 (1 + 0.19)',
    },
    steps: [
      {
        label: 'Determine Net Revenue',
        formula: '€119.00 ÷ 1.19',
        amount: '€100.00',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded Mehrwertsteuer',
        formula: '€119.00 − €100.00 (or €100.00 × 0.19)',
        amount: '€19.00',
        note: 'Output tax owed to the Finanzamt.',
      },
    ],
    takeaway:
      'Dividing €119.00 by 1.19 reveals exactly €100.00 in pre-tax business revenue and €19.00 in statutory Umsatzsteuer payable on the monthly ELSTER return.',
  },
  faqs: [
    {
      question: 'What are the standard and reduced VAT rates in Germany?',
      answer:
        'Under § 12 UStG, Germany enforces a standard VAT rate (Regelsteuersatz) of 19% on most goods and commercial services, and a reduced rate (ermäßigter Steuersatz) of 7% on basic groceries, books, newspapers, cultural admissions, and passenger rail travel.',
    },
    {
      question: 'What is the Kleinunternehmerregelung and who qualifies for it?',
      answer:
        'The Kleinunternehmerregelung under § 19 UStG allows small businesses and freelancers with previous calendar year turnover below €22,000 and expected current year turnover below €50,000 to operate without charging VAT. However, qualifying businesses cannot deduct input VAT (Vorsteuer) on their expenses.',
    },
    {
      question: 'How does the reverse charge mechanism work under § 13b UStG?',
      answer:
        'Under § 13b UStG, the liability to pay VAT shifts from the service provider to the business customer for B2B cross-border services within the EU and specific domestic sectors like construction. The provider issues a net invoice with their USt-IdNr., and the buyer accounts for both input and output tax.',
    },
    {
      question: 'When must the advance VAT return (Umsatzsteuer-Voranmeldung) be filed in Germany?',
      answer:
        'Periodic advance VAT returns must be submitted electronically via ELSTER by the 10th day of the month following the close of the reporting period (monthly or quarterly). Businesses can apply for a permanent 1-month filing extension (Dauerfristverlängerung).',
    },
    {
      question: 'What information must be included on a valid German VAT invoice?',
      answer:
        'Under § 14 UStG, an invoice over €250 must include the full legal names and addresses of both parties, the supplier’s tax number (Steuernummer) or VAT ID (DE + 9 digits), a unique sequential invoice number, issue date, date of supply, net price breakdown by rate, and total VAT amount.',
    },
  ],
};

export default germanyVatContent;

