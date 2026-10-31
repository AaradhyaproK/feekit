import type { PageContent } from '../types.ts';

export const italyVatContent: PageContent = {
  slug: 'italy',
  family: 'vat',
  title: 'Italy VAT Calculator (22%, 10%, 5%, 4% IVA) & Agenzia delle Entrate Guide | FeeKit',
  metaDescription:
    'Calculate Italian Imposta sul Valore Aggiunto (IVA) with verified rates (22% standard, 10%, 5%, 4%). Covers the €85k Regime Forfettario, SDI electronic invoicing, and inversione contabile.',
  h1: 'Italy VAT Calculator & D.P.R. 633/1972 Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Agenzia delle Entrate (Italian Revenue Agency)',
    url: 'https://www.agenziaentrate.gov.it/',
    citation: 'D.P.R. 26 ottobre 1972, n. 633, Articoli 16, 17 (Inversione Contabile), 21 (Fatturazione), and Legge 190/2014.',
  },
  overview:
    'Value Added Tax in Italy—known domestically as the Imposta sul Valore Aggiunto (IVA)—is governed by Decreto del Presidente della Repubblica (D.P.R.) 26 ottobre 1972, n. 633, and administered by the Agenzia delle Entrate. Italy enforces four statutory IVA brackets: a standard rate of 22%, a reduced rate of 10% (hotel lodging, restaurant dining, passenger transport), a 5% rate (social services, specific foodstuffs), and a 4% super-reduced rate (staple foods, books, newspapers). Autonomous professionals earning under €85,000 operate under the Regime Forfettario, while all domestic transactions must pass through the Sistema di Interscambio (SDI) electronic invoicing hub.',
  sections: [
    {
      id: 'statutory-rates-italy-vat',
      title: 'Italian IVA Rates: Standard (22%), Reduced (10%), 5%, and Super-Reduced (4%)',
      body: `Italian tax law categorizes taxable supplies under Article 16 and Table A annexed to D.P.R. 633/1972:

1. **Standard Rate (Aliquota ordinaria — 22%)**: Codified in Art. 16 D.P.R. 633/1972. Applies to the vast majority of commercial transactions, including software licenses, cloud computing, legal and business consulting, adult clothing, consumer electronics, motor vehicles, and alcoholic beverages.
2. **Reduced Rate (Aliquota ridotta — 10%)**: Governed by Table A, Part III. Applies to general food products (meat, poultry, processed fish), electric power and methane gas for domestic use, passenger transport, hotel accommodations, restaurant meals, and residential maintenance renovations.
3. **Reduced Rate (Aliquota ridotta — 5%)**: Introduced under recent budget reforms. Applies to specific social welfare services, early childhood healthcare items, specific plant-based foodstuffs, and passenger maritime transport.
4. **Super-Reduced Rate (Aliquota minima — 4%)**: Governed by Table A, Part II. Applies to essential staple food products (fresh bread, pasteurized milk, pasta, olive oil, fresh fruit/vegetables), printed books and registered journalistic press, agricultural seeds, and orthopedic mobility prosthetics.`,
    },
    {
      id: 'regime-forfettario-exemption-italy',
      title: 'The Small Business Exemption: Regime Forfettario (€85,000 Cap)',
      body: `Italy provides substantial administrative relief for independent sole proprietors and freelancers under Legge 190/2014 (amended):

- **€85,000 Annual Revenue Ceiling**: Freelancers, autonomous professionals, and micro-enterprises whose annual gross receipts remain below **€85,000** qualify for the Regime Forfettario.
- **Operational Exemption from IVA**: A qualifying professional does not charge 22% IVA on customer invoices and is exempt from filing quarterly IVA settlements (LIPE). In return, they cannot deduct input IVA paid on business equipment or services.
- **Substitute Flat Tax (Imposta Sostitutiva)**: Instead of personal progressive income tax (IRPEF), professionals in the regime pay a flat substitute income tax of **15%** (discounted to **5%** for the first five years of a new business venture) on a statutory coefficient of profitability.
- **Mandatory Invoice Mention**: Invoices must display the statutory disclaimer: *"Operazione effettuata ai sensi dell'art. 1, commi da 54 a 89, della Legge n. 190/2014 - Regime Forfettario. Non soggetta ad IVA"*.`,
    },
    {
      id: 'sdi-electronic-invoicing-and-reverse-charge-italy',
      title: 'The Sistema di Interscambio (SDI) and Inversione Contabile (Reverse Charge)',
      body: `Italy was the first EU nation to mandate comprehensive real-time electronic invoicing across all commercial sectors:

- **Mandatory Electronic Invoicing (Fattura Elettronica via SDI)**: All commercial invoices issued between Italian resident businesses (B2B) and consumers (B2C)—including those in the Regime Forfettario—must be formatted in XML and transmitted through the governmental clearing hub, the **Sistema di Interscambio (SDI)**. Invoices delivered outside the SDI are legally null and void, incurring severe non-issuance penalties under D.Lgs. 471/1997.
- **Inversione Contabile (Article 17 D.P.R. 633/1972)**: For cross-border B2B digital services and specific domestic sectors (cleaning services, construction subcontracting), the obligation to pay IVA shifts from the supplier to the business customer. The recipient integrates the invoice (autofattura) and records both output and input tax.
- **One-Stop Shop (Regime OSS)**: Italian e-commerce merchants selling B2C goods or digital services across EU borders exceeding the €10,000 threshold declare destination EU VAT through the Agenzia delle Entrate OSS portal.`,
    },
    {
      id: 'invoicing-requirements-and-lipe-filing-italy',
      title: 'Partita IVA Invoicing Standards, Quarterly LIPE Returns, and Annual Deadlines',
      body: `Administrative requirements enforced by the Italian Revenue Agency:

- **Mandatory Invoice Data**: Invoices must state the supplier's corporate name, registered address, Partita IVA (formatted as IT + 11 numerical digits), Codice Fiscale, customer fiscal data, sequential invoice number, issue date, itemized description, net taxable base, applicable IVA rate, and total gross payable.
- **Periodic IVA Communications (LIPE - Liquidazioni Periodiche IVA)**: Registered businesses submit quarterly electronic summaries of their input and output tax positions via the Agenzia delle Entrate portal:
  - 1st Quarter: Due **May 31**.
  - 2nd Quarter: Due **September 30**.
  - 3rd Quarter: Due **November 30**.
  - 4th Quarter: Due **February 28** of the following year.
- **Annual VAT Return (Dichiarazione Annuale IVA)**: The comprehensive annual reconciliation return must be filed electronically between **February 1 and April 30** covering the preceding calendar tax year.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Enterprise IT Infrastructure Invoiced at Standard 22% IVA',
    scenario:
      'An Italian digital engineering consultancy provides a €5,000.00 net server architecture deployment to a corporate client in Milan. Standard 22% IVA applies under Art. 16 D.P.R. 633/1972.',
    inputs: {
      netContractFee: '€5,000.00',
      applicableIvaRate: '22.00% (Aliquota ordinaria)',
      clientStatus: 'Italian corporation with valid Partita IVA and SDI recipient code',
    },
    steps: [
      {
        label: 'Net Taxable Base (Imponibile)',
        formula: 'Agreed commercial contract price',
        amount: '€5,000.00',
        note: 'Supplier net business revenue.',
      },
      {
        label: 'Calculate 22% Imposta sul Valore Aggiunto',
        formula: '€5,000.00 × 0.22',
        amount: '€1,100.00',
        note: 'Art. 16 D.P.R. 633/1972 statutory output tax (IVA a debito).',
      },
      {
        label: 'Total Gross Amount Payable (Totale fattura)',
        formula: '€5,000.00 + €1,100.00',
        amount: '€6,100.00',
        note: 'Gross payment transmitted through SDI XML.',
      },
      {
        label: 'Client Input IVA Deduction (IVA a credito)',
        formula: 'Full €1,100.00 reclaimed on client periodic settlement',
        amount: '€1,100.00 (Net Cost: €5,000.00)',
        note: 'Commercial clients deduct 100% of input IVA under Art. 19 D.P.R. 633/72.',
      },
    ],
    takeaway:
      'The supplier transmits the XML invoice via SDI, collects €6,100.00, retains €5,000.00 net, and remits €1,100.00 to the Agenzia delle Entrate on their periodic settlement. The corporate client claims the €1,100.00 as input credit, maintaining complete tax neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 22% IVA from Gross Retail Price (€122.00 Total)',
    scenario:
      'A consumer pays €122.00 inclusive of standard 22% Italian IVA. The reverse extraction formula Net = Gross ÷ 1.22 is applied.',
    inputs: {
      grossTotalReceived: '€122.00',
      statutoryIvaRate: '22.00%',
      extractionFactor: '1.22 (1 + 0.22)',
    },
    steps: [
      {
        label: 'Determine Pre-IVA Net Revenue (Imponibile)',
        formula: '€122.00 ÷ 1.22',
        amount: '€100.00',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded IVA Liability (Imposta)',
        formula: '€122.00 − €100.00 (or €100.00 × 0.22)',
        amount: '€22.00',
        note: 'Output tax owed to the Agenzia delle Entrate.',
      },
    ],
    takeaway:
      'Dividing €122.00 by 1.22 yields exactly €100.00 in pre-tax business revenue and isolates €22.00 in statutory IVA payable on the periodic LIPE filing.',
  },
  faqs: [
    {
      question: 'What are the official VAT rates in Italy?',
      answer:
        'Under D.P.R. 633/1972, Italy enforces four statutory IVA rates: the standard rate of 22% (most commercial goods and services), a reduced rate of 10% (hotel accommodations, restaurants, passenger transport), a 5% rate (social services, specific baby foods), and a super-reduced rate of 4% (staple foods like bread and pasta, books, newspapers).',
    },
    {
      question: 'What is the Regime Forfettario and who qualifies for it?',
      answer:
        'The Regime Forfettario is a simplified tax regime for freelancers and individual sole proprietors with annual gross revenue below €85,000. Qualifying professionals do not charge IVA on invoices, are exempt from filing periodic IVA declarations, and pay a flat substitute income tax of 15% (or 5% for the first five years).',
    },
    {
      question: 'What is the Sistema di Interscambio (SDI) in Italy?',
      answer:
        'The Sistema di Interscambio (SDI) is the Italian Revenue Agency’s automated electronic invoicing platform. All domestic commercial B2B and B2C invoices must be issued in structured XML format and transmitted through the SDI to be legally valid. Paper or PDF invoices delivered outside the SDI are not recognized.',
    },
    {
      question: 'How does the inversione contabile (reverse charge) work in Italy?',
      answer:
        'Under Article 17 of D.P.R. 633/1972, the obligation to declare and pay VAT shifts from the seller to the buyer for cross-border B2B supplies and specific domestic industries like construction. The supplier issues a net invoice without VAT, and the Italian buyer self-assesses both input and output tax.',
    },
    {
      question: 'When must periodic IVA communications (LIPE) be submitted in Italy?',
      answer:
        'Periodic IVA communications (LIPE) must be submitted electronically to the Agenzia delle Entrate on a quarterly basis: Q1 due May 31, Q2 due September 30, Q3 due November 30, and Q4 due February 28 of the following year.',
    },
  ],
};

export default italyVatContent;

