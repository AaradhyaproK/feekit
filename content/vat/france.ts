import type { PageContent } from '../types.ts';

export const franceVatContent: PageContent = {
  slug: 'france',
  family: 'vat',
  title: 'France VAT Calculator (20%, 10%, 5.5% TVA) & DGFiP Guide | FeeKit',
  metaDescription:
    'Calculate French Taxe sur la Valeur Ajoutée (TVA) with verified DGFiP rates (20% standard, 10% & 5.5% reduced). Covers Franchise en base, autoliquidation, and CA3 returns.',
  h1: 'France VAT Calculator & Code Général des Impôts (CGI) Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Direction Générale des Finances Publiques (DGFiP)',
    url: 'https://www.impots.gouv.fr/',
    citation: 'Code Général des Impôts (CGI) Articles 278, 278-0 bis, 279, 283 (Autoliquidation), and 293 B.',
  },
  overview:
    'Value Added Tax in France—known domestically as Taxe sur la Valeur Ajoutée (TVA)—is codified in the Code Général des Impôts (CGI) and administered by the Direction Générale des Finances Publiques (DGFiP). France enforces four statutory TVA tiers: the standard 20% rate, a 10% intermediate rate (restaurant dining, passenger transport, renovation), a 5.5% reduced rate (basic food, books, domestic energy), and a 2.1% specific rate (reimbursable medications, press). Micro-enterprises operating below €36,800 (services) or €91,900 (goods) are exempt under the Franchise en base de TVA.',
  sections: [
    {
      id: 'statutory-rates-france-vat',
      title: 'French TVA Rates: Standard (20%), Intermediate (10%), Reduced (5.5%), and Super-Reduced (2.1%)',
      body: `French tax law divides goods and services across four statutory rate tiers under the CGI:

1. **Standard Rate (Taux normal — 20%)**: Codified in CGI Article 278. Applies to the vast majority of consumer goods, commercial technology, digital software, legal and financial consulting, adult apparel, electronics, and alcoholic beverages.
2. **Intermediate Rate (Taux intermédiaire — 10%)**: Codified in CGI Article 279. Applies to restaurant meals and prepared food for immediate consumption, passenger transport (trains, buses, taxis), residential renovation and maintenance work on housing completed over two years ago, and hotel accommodations.
3. **Reduced Rate (Taux réduit — 5.5%)**: Codified in CGI Article 278-0 bis. Applies to essential grocery food products, feminine hygiene products, physical and digital books, school cafeteria meals, gas and electricity subscription contracts, and home energy-efficiency improvements.
4. **Special Super-Reduced Rate (Taux particulier — 2.1%)**: Codified in CGI Article 281 quater. Applies to prescription pharmaceutical medicines reimbursable by French Social Security, printed and online journalistic press publications, and certain live theatrical performances.`,
    },
    {
      id: 'franchise-en-base-exemption-france',
      title: 'The Small Business Exemption: Franchise en Base de TVA (Art. 293 B du CGI)',
      body: `France provides statutory administrative relief for micro-enterprises and independent freelancers under CGI Article 293 B:

- **Dual Threshold Structure**: A business qualifies for exemption from collecting TVA if turnover remains below:
  - **€36,800** (annual baseline threshold) or **€39,100** (tolerated threshold) for service activities and liberal professions.
  - **€91,900** (annual baseline threshold) or **€101,000** (tolerated threshold) for commercial retail sales and accommodation.
- **Operational Impact**: An exempt micro-entrepreneur does not charge TVA on client invoices and cannot claim deduction of input TVA on business equipment or purchases.
- **Mandatory Invoice Mention**: Any invoice issued under this regime must display the statutory wording: *"TVA non applicable, art. 293 B du CGI"* (VAT not applicable pursuant to Article 293 B of the General Tax Code).`,
    },
    {
      id: 'reverse-charge-and-eu-rules-france',
      title: 'Autoliquidation de la TVA (Reverse Charge) and EU Intra-Community Supplies',
      body: `Cross-border commercial operations and specialized domestic sectors operate under statutory reverse charge procedures:

- **Autoliquidation de la TVA (CGI Article 283)**: When a foreign business provides cross-border B2B digital services or subcontracts building work to a French VAT-registered company, the liability to pay TVA is transferred to the French client. The supplier issues a net invoice without TVA bearing both parties' VAT numbers and the notice: *"Autoliquidation de la TVA - Article 283 du CGI"*.
- **Intra-Community B2B Supplies**: Goods dispatched to a VAT-registered business in another EU member state are exempt from French TVA under CGI Article 262 ter I, provided the supplier verifies the buyer's VAT number via the European VIES database.
- **One-Stop Shop (Guichet Unique / OSS)**: French e-commerce businesses selling B2C goods or digital services across EU borders declare and remit foreign VAT via the DGFiP OSS portal for transactions exceeding the €10,000 EU-wide threshold.`,
    },
    {
      id: 'invoicing-requirements-and-dgfip-filing-france',
      title: 'DGFiP Invoicing Rules, B2B E-Invoicing Reforms, and Periodic Returns',
      body: `Administrative requirements enforced by the Direction Générale des Finances Publiques:

- **Mandatory Invoice Information**: Invoices must display the supplier's corporate name, SIREN number, intra-Community VAT number (FR + 2-digit key + 9-digit SIREN), client name and address, invoice number from a continuous numerical sequence, date of issue, delivery date, detailed description of goods/services, net price breakdown by rate, and total TVA.
- **B2B E-Invoicing Reform (Facturation électronique)**: France is phasing in mandatory electronic B2B invoicing through approved Partner Dematerialization Platforms (PDP) and the Public Invoicing Portal (PPF) conforming to European standard EN 16931.
- **Return Filing Frequencies (Formulaire CA3 / CA12)**: Businesses under the standard regime (régime réel normal) file monthly electronic returns (Formulaire CA3) via their space professionnel on impots.gouv.fr between the **15th and 24th day of the month** following the reporting period. Smaller businesses under the simplified regime (régime réel simplifié) make biannual installment payments with an annual CA12 reconciliation return.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Strategic Consulting Invoiced at Standard 20% TVA',
    scenario:
      'A French digital strategy agency delivers a €6,000.00 net corporate consulting engagement to a commercial enterprise in Paris. Standard 20% TVA applies under CGI Article 278.',
    inputs: {
      netContractFee: '€6,000.00',
      applicableTvaRate: '20.00% (Taux normal)',
      clientStatus: 'French commercial enterprise with valid SIREN and VAT ID',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal',
        formula: 'Agreed commercial contract price',
        amount: '€6,000.00',
        note: 'Supplier net business turnover.',
      },
      {
        label: 'Calculate 20% Taxe sur la Valeur Ajoutée',
        formula: '€6,000.00 × 0.20',
        amount: '€1,200.00',
        note: 'CGI Article 278 statutory output TVA.',
      },
      {
        label: 'Total Gross Amount Payable (TTC)',
        formula: '€6,000.00 + €1,200.00',
        amount: '€7,200.00',
        note: 'Total gross payment transferred by client.',
      },
      {
        label: 'Client Input TVA Deduction (TVA déductible)',
        formula: 'Full €1,200.00 reclaimed on client Formulaire CA3',
        amount: '€1,200.00 (Net Cost: €6,000.00)',
        note: 'Commercial clients deduct 100% of input TVA under CGI Art. 271.',
      },
    ],
    takeaway:
      'The supplier collects €7,200.00 TTC, retains €6,000.00 HT, and remits €1,200.00 to the DGFiP on their next monthly CA3 return. The client reclaims the €1,200.00 as deductible TVA, preserving cash neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 20% TVA from Gross Retail Price (€120.00 TTC)',
    scenario:
      'A retailer receives €120.00 TTC inclusive of standard 20% French TVA. The reverse extraction formula Net = Gross ÷ 1.20 is applied.',
    inputs: {
      grossTotalReceived: '€120.00 TTC',
      statutoryTvaRate: '20.00%',
      extractionFactor: '1.20 (1 + 0.20)',
    },
    steps: [
      {
        label: 'Determine Pre-TVA Net Revenue (HT)',
        formula: '€120.00 ÷ 1.20',
        amount: '€100.00 HT',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded TVA Amount',
        formula: '€120.00 − €100.00 (or €100.00 × 0.20)',
        amount: '€20.00',
        note: 'Output tax owed to the DGFiP.',
      },
    ],
    takeaway:
      'Dividing €120.00 by 1.20 yields exactly €100.00 HT in net business revenue and isolates €20.00 in statutory TVA payable on Formulaire CA3.',
  },
  faqs: [
    {
      question: 'What are the main VAT rates in France?',
      answer:
        'France applies four statutory TVA rates: the standard rate of 20% (most commercial goods and services), an intermediate rate of 10% (restaurant dining, passenger transport, home renovation), a reduced rate of 5.5% (basic groceries, books, domestic energy), and a super-reduced rate of 2.1% (reimbursable medications, press publications).',
    },
    {
      question: 'What is the Franchise en base de TVA threshold in France?',
      answer:
        'Under CGI Article 293 B, businesses qualify for the Franchise en base (exemption from charging TVA) if annual turnover is below €36,800 for service providers and liberal professions, or below €91,900 for commercial retail sales. Qualifying businesses must state "TVA non applicable, art. 293 B du CGI" on invoices.',
    },
    {
      question: 'How does the autoliquidation (reverse charge) mechanism work in France?',
      answer:
        'Under CGI Article 283, autoliquidation transfers the obligation to declare and pay TVA from the seller to the buyer. It applies to cross-border B2B services supplied by non-French entities and subcontracting in the building sector. The supplier issues a net invoice, and the buyer self-assesses TVA on their French return.',
    },
    {
      question: 'How is a French VAT number (numéro de TVA intracommunautaire) constructed?',
      answer:
        'A French intra-Community VAT number begins with the country code "FR", followed by a 2-digit computer verification key (numbers or letters), followed by the business’s 9-digit SIREN identification number (e.g., FR 12 345678901).',
    },
    {
      question: 'When are monthly TVA returns due to the DGFiP in France?',
      answer:
        'Under the régime réel normal, businesses file monthly returns (Formulaire CA3) electronically on impots.gouv.fr between the 15th and 24th day of the month following the close of the reporting period, depending on the business’s legal form and geographical location.',
    },
  ],
};

export default franceVatContent;

