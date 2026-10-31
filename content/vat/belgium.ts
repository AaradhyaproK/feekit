import type { PageContent } from '../types.ts';

export const belgiumVatContent: PageContent = {
  slug: 'belgium',
  family: 'vat',
  title: 'Belgium VAT Calculator (21%, 12%, 6% TVA) & FPS Finance Guide | FeeKit',
  metaDescription:
    'Calculate Belgian Taxe sur la Valeur Ajoutée (TVA / BTW) with verified FPS Finance rates (21% standard, 12% & 6% reduced). Details the €25k small business regime, Intervat, and reverse charge.',
  h1: 'Belgium VAT Calculator & Code de la TVA / W.BTW Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Federal Public Service Finance (FPS Finance / SPF Finances)',
    url: 'https://finances.belgium.be/fr/entreprises/tva',
    citation: 'Code de la TVA (W.BTW), Articles 38 (Taux), 51 (Autoliquidation), 53 (Facturation), et 56bis.',
  },
  overview:
    'Value Added Tax in Belgium—known in French as Taxe sur la Valeur Ajoutée (TVA) and in Dutch as Belasting over de Toegevoegde Waarde (BTW)—is governed by the Code de la TVA (Wetboek van de BTW) and administered by the Federal Public Service Finance (FPS Finance). Belgium enforces four statutory rate brackets: a standard rate of 21%, an intermediate rate of 12% (restaurant dining, social housing), a reduced rate of 6% (basic food, books, pharmaceuticals, housing renovation over 10 years), and a 0% zero-rate on daily newspapers and cross-border intra-Community supplies. Small businesses earning under €25,000 annually can elect exemption under Article 56bis.',
  sections: [
    {
      id: 'statutory-rates-belgium-vat',
      title: 'Belgian TVA Rates: Standard (21%), Intermediate (12%), Reduced (6%), and Zero-Rated (0%)',
      body: `Belgian tax law divides goods and services across four statutory rate brackets under Article 38 of the Code de la TVA and Royal Decree No. 20:

1. **Standard Rate (Taux normal / Normaal tarief — 21%)**: Governed by Article 38 § 1. Applies to the vast majority of goods and professional services, including commercial software, legal and financial consulting, adult clothing, consumer electronics, motor vehicles, and alcoholic beverages.
2. **Intermediate Rate (Taux intermédiaire — 12%)**: Governed by Table B annexed to Royal Decree No. 20. Applies to restaurant meals consumed on premises (excluding all beverages, which incur standard 21%), social housing construction, and specific combustible energy products.
3. **Reduced Rate (Taux réduit — 6%)**: Governed by Table A annexed to Royal Decree No. 20. Applies to essential grocery foodstuffs, water distribution, prescription and non-prescription pharmaceuticals, printed and electronic books, newspapers, passenger transport, cultural admissions, and renovation work on private dwellings older than 10 years.
4. **Zero Rate (Taux zéro — 0%)**: Applies to daily newspapers and periodicals with general informative character, as well as intra-Community deliveries of goods and international exports outside the European Union.`,
    },
    {
      id: 'small-business-franchise-regime-belgium',
      title: 'The Small Business Exemption: Régime de la Franchise (Article 56bis — €25,000 Cap)',
      body: `Belgium provides administrative relief for independent sole traders and small enterprises under Article 56bis of the Code de la TVA:

- **€25,000 Annual Turnover Threshold**: Small enterprises established in Belgium whose annual turnover does not exceed **€25,000** (excluding VAT) can elect into the *régime de la franchise pour les petites entreprises*.
- **Operational Impact**: An exempt business does not charge 21%, 12%, or 6% TVA on invoices and is exempt from filing periodic Intervat declarations. In exchange, they cannot claim deduction of input TVA (TVA déductible) paid on business expenses, laptops, or equipment.
- **Mandatory Invoice Mention**: Any invoice issued by an exempt small business must display the legal notice: *"Régime particulier de franchise des petites entreprises - TVA non applicable"* (Special small enterprise franchise regime - VAT not applicable).`,
    },
    {
      id: 'reverse-charge-and-article-20-belgium',
      title: 'Autoliquidation (Reverse Charge) and Article 20 Real Estate Subcontracting',
      body: `Cross-border transactions and specific domestic sectors operate under statutory reverse charge procedures:

- **Autoliquidation under EU B2B Rules (Article 51 § 2 W.BTW)**: For cross-border B2B digital services and supplies between EU businesses, the liability to pay TVA is shifted to the customer. The supplier issues a net invoice with both parties' VAT numbers stating: *"Autoliquidation (Reverse charge)"*.
- **Article 20 Domestic Real Estate Subcontracting (Arrêté Royal n° 1)**: In the construction sector, when a registered contractor performs building or maintenance work for another VAT-registered business, the contractor must not charge TVA. The invoice must state: *"Autoliquidation - Art. 20 de l'AR n° 1"*, and the client accounts for the tax on their own return.
- **One-Stop Shop (Guichet unique / OSS)**: Belgian e-commerce merchants selling B2C goods or digital services across EU borders exceeding the unified €10,000 threshold declare destination EU VAT through the FPS Finance Intervat OSS module.`,
    },
    {
      id: 'invoicing-requirements-and-intervat-filing-belgium',
      title: 'FPS Finance Invoicing Rules, Intervat Portal, and Annual Client Listing',
      body: `Administrative requirements enforced by the Federal Public Service Finance:

- **Mandatory Invoice Elements (Article 53 W.BTW)**: Invoices must display the supplier's legal name, registered office address, enterprise number / VAT ID (BE + 10 digits formatted as BE 0123.456.789), customer details, sequential invoice number, issue date, date of supply, description of goods/services, net price breakdown by rate, and total TVA amount.
- **Return Deadlines (Intervat Periodic Returns)**: Registered businesses submit periodic declarations electronically via the FPS Finance Intervat portal:
  - Monthly filers: Due by the **20th day of the month** following the reporting period (mandatory if annual turnover exceeds €2.5M).
  - Quarterly filers: Due by the **20th day of the month** following the calendar quarter (April 20, July 20, October 20, January 20).
- **Annual Client Listing (Listing Clients)**: By **March 31** each year, registered businesses must submit an electronic annual listing of all Belgian VAT-registered customers to whom they supplied goods or services exceeding €250 during the preceding calendar year.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Enterprise Software Implementation Invoiced at Standard 21% TVA',
    scenario:
      'A Belgian technology consultancy delivers an enterprise cloud integration for €5,000.00 net to a corporate client in Brussels. Standard 21% TVA applies under Article 38 § 1 of the Code de la TVA.',
    inputs: {
      netContractPrice: '€5,000.00',
      applicableTvaRate: '21.00% (Taux normal)',
      clientStatus: 'Belgian commercial company with valid enterprise number and VAT ID',
    },
    steps: [
      {
        label: 'Net Taxable Base (Base d’imposition)',
        formula: 'Agreed commercial contract price',
        amount: '€5,000.00',
        note: 'Supplier gross business income.',
      },
      {
        label: 'Calculate 21% Taxe sur la Valeur Ajoutée',
        formula: '€5,000.00 × 0.21',
        amount: '€1,050.00',
        note: 'Article 38 § 1 statutory output tax (TVA due).',
      },
      {
        label: 'Total Gross Invoiced Amount',
        formula: '€5,000.00 + €1,050.00',
        amount: '€6,050.00',
        note: 'Gross payment transferred by client.',
      },
      {
        label: 'Client Input Tax Deduction (TVA déductible)',
        formula: 'Full €1,050.00 claimed on client Intervat return',
        amount: '€1,050.00 (Net Cost: €5,000.00)',
        note: 'Belgian commercial clients deduct 100% of input TVA under Article 45.',
      },
    ],
    takeaway:
      'The supplier collects €6,050.00, retains €5,000.00 net, and remits €1,050.00 to FPS Finance on their periodic Intervat declaration. The corporate client claims €1,050.00 as deductible input tax, preserving complete commercial neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 21% TVA from Gross Retail Total (€121.00 Total)',
    scenario:
      'A consumer pays a round €121.00 inclusive of standard 21% Belgian TVA. The reverse extraction formula Net = Gross ÷ 1.21 is applied.',
    inputs: {
      grossTotalReceived: '€121.00',
      statutoryTvaRate: '21.00%',
      extractionFactor: '1.21 (1 + 0.21)',
    },
    steps: [
      {
        label: 'Determine Net Revenue (Montant HT)',
        formula: '€121.00 ÷ 1.21',
        amount: '€100.00',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded TVA Liability',
        formula: '€121.00 − €100.00 (or €100.00 × 0.21)',
        amount: '€21.00',
        note: 'Output tax owed to FPS Finance.',
      },
    ],
    takeaway:
      'Dividing €121.00 by 1.21 isolates exactly €100.00 in pre-tax business revenue and €21.00 in statutory TVA payable on the periodic Intervat declaration.',
  },
  faqs: [
    {
      question: 'What are the official VAT rates in Belgium?',
      answer:
        'Under Article 38 of the Code de la TVA, Belgium applies four rates: the standard rate of 21% (most commercial goods and services), an intermediate rate of 12% (restaurant dining excluding drinks, social housing), a reduced rate of 6% (essential groceries, books, pharmaceuticals, renovation of homes older than 10 years), and a 0% zero-rate (daily newspapers, cross-border intra-Community supplies).',
    },
    {
      question: 'What is the small business exemption threshold in Belgium?',
      answer:
        'Under Article 56bis of the Code de la TVA, small businesses with an annual turnover under €25,000 can operate under the régime de la franchise. Qualifying businesses do not charge TVA on invoices and do not submit periodic VAT declarations, but cannot deduct input TVA on business expenses.',
    },
    {
      question: 'How does the Article 20 reverse charge work for construction in Belgium?',
      answer:
        'Under Article 20 of Royal Decree No. 1, when construction, renovation, or maintenance work on real estate is performed by a contractor for a VAT-registered business, the contractor does not charge TVA on the invoice. Instead, the customer self-assesses the TVA on their own periodic declaration.',
    },
    {
      question: 'How is a Belgian VAT number formatted?',
      answer:
        'A Belgian VAT number is based on the entity’s 10-digit enterprise number (numéro d’entreprise / ondernemingsnummer), prefixed by "BE" and typically formatted with dots (e.g., BE 0123.456.789).',
    },
    {
      question: 'When are quarterly VAT declarations due to FPS Finance in Belgium?',
      answer:
        'Quarterly VAT declarations must be submitted electronically via the Intervat portal by the 20th day of the month following the calendar quarter: April 20 (Q1), July 20 (Q2), October 20 (Q3), and January 20 (Q4). Registered businesses must also submit an annual client listing by March 31.',
    },
  ],
};

export default belgiumVatContent;

