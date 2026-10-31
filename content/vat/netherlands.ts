import type { PageContent } from '../types.ts';

export const netherlandsVatContent: PageContent = {
  slug: 'netherlands',
  family: 'vat',
  title: 'Netherlands VAT Calculator (21% & 9% BTW) & Belastingdienst Guide | FeeKit',
  metaDescription:
    'Calculate Dutch Belasting over de Toegevoegde Waarde (BTW) with verified Belastingdienst rates (21% standard, 9% reduced). Details the €20k KOR scheme, verleggingsregeling, and BTW-aangifte.',
  h1: 'Netherlands VAT Calculator & Wet op de omzetbelasting 1968 Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Belastingdienst (Dutch Tax and Customs Administration)',
    url: 'https://www.belastingdienst.nl/wps/wcm/connect/nl/omzetbelasting/omzetbelasting',
    citation: 'Wet op de omzetbelasting 1968 (Wet OB 1968), Artikelen 9, 12 (Verleggingsregeling), en 25 (KOR).',
  },
  overview:
    'Value Added Tax in the Netherlands—known domestically as the Belasting over de Toegevoegde Waarde (BTW) or Omzetbelasting (OB)—is governed by the Wet op de omzetbelasting 1968 and administered by the Belastingdienst. The Netherlands levies a standard BTW rate of 21% on commercial goods and services, and a reduced rate of 9% on basic food products, books, pharmaceuticals, and passenger transport. Small enterprises and independent zzp’ers generating under €20,000 annually can elect exemption under the Kleineondernemersregeling (KOR).',
  sections: [
    {
      id: 'statutory-rates-netherlands-vat',
      title: 'Dutch BTW Rates: Standard (21%), Reduced (9%), and Zero-Rated (0%)',
      body: `The Dutch turnover tax act categorizes supplies across three statutory rate tiers under Artikel 9 Wet OB 1968:

1. **Standard Rate (Algemeen tarief — 21%)**: Governed by Artikel 9 lid 1. Applies to the vast majority of goods and commercial services, including software licenses, cloud computing, legal and management consulting, adult clothing, consumer electronics, motor vehicles, and alcoholic beverages.
2. **Reduced Rate (Verlaagd tarief — 9%)**: Governed by Artikel 9 lid 2 and Tabel I annexed to the Act. Applies to foodstuffs and non-alcoholic beverages for human consumption, prescription and over-the-counter medicines, printed and electronic books, newspapers, passenger transport, hotel accommodations, and labor-intensive repair services (bicycles, clothing, hairdressing).
3. **Zero Rate (Nultarief — 0%)**: Governed by Artikel 9 lid 2 and Tabel II. Crucially distinct from tax exemptions because suppliers can reclaim input BTW (voorbelasting). Applies to cross-border intra-Community supplies of goods to VAT-registered businesses in other EU member states and export deliveries to non-EU countries.
4. **Exempt Supplies (Vrijstellingen)**: Governed by Artikel 11. Includes healthcare services provided by certified practitioners, financial transactions, insurance services, childcare, and recognized educational courses. Entities providing exempt services cannot charge BTW or deduct input tax.`,
    },
    {
      id: 'kleineondernemersregeling-kor-netherlands',
      title: 'The Small Business Exemption: Kleineondernemersregeling (KOR — €20,000 Cap)',
      body: `The Netherlands provides administrative relief for sole proprietors (eenmanszaken), freelancers (zzp’ers), and small businesses under Artikel 25 Wet OB 1968:

- **€20,000 Annual Revenue Threshold**: Businesses established in the Netherlands whose annual turnover remains below **€20,000** in a calendar year can register for the Kleineondernemersregeling (KOR).
- **Operational Impact**: An entrepreneur participating in the KOR does not charge 21% or 9% BTW on sales invoices and is exempt from filing quarterly BTW declarations (BTW-aangifte). In return, they cannot reclaim input BTW (voorbelasting) paid on business expenses, computers, or tools.
- **Three-Year Commitment**: Electing into the KOR is binding for a minimum period of three years, unless turnover exceeds €20,000 during the year, at which point the exemption terminates immediately.`,
    },
    {
      id: 'reverse-charge-and-eu-rules-netherlands',
      title: 'Verleggingsregeling (Reverse Charge) and EU Cross-Border Trade',
      body: `Cross-border commercial operations and high-risk domestic sectors operate under statutory reverse charge procedures:

- **Verleggingsregeling (Artikel 12 Wet OB 1968)**: When an overseas business supplies B2B services or digital goods to a Dutch corporate client, the liability to pay BTW is shifted to the Dutch customer. The provider issues a net invoice without Dutch tax, displaying both parties' VAT numbers and stating: *"Btw verlegd (Reverse charge)"*. The Dutch recipient reports both output and input tax on Box 4 of their periodic return.
- **Article 23 Import License (Artikel 23 Vergunning)**: A major competitive advantage of the Netherlands. Under an Artikel 23 permit, Dutch importing businesses avoid paying cash import VAT at customs. Instead, the import VAT is deferred and accounted for on their regular quarterly BTW return, eliminating cash flow drag.
- **One-Stop Shop (Unieregeling / OSS)**: Dutch e-commerce merchants selling B2C goods or digital services across EU borders exceeding the unified €10,000 threshold declare destination EU VAT through the Belastingdienst OSS portal.`,
    },
    {
      id: 'invoicing-requirements-and-belastingdienst-filing-netherlands',
      title: 'Belastingdienst Invoicing Standards and Quarterly BTW-Aangifte Deadlines',
      body: `Administrative compliance requirements enforced by the Dutch Tax and Customs Administration:

- **Mandatory Invoice Elements (Artikel 35a Wet OB)**: Invoices must display the supplier's full legal name, trading address, KVK number (Chamber of Commerce registration), BTW-identificatienummer (formatted as NL + 9 digits + B + 2 digits), customer's fiscal details, sequential invoice number, date of issue, date of supply, description of goods/services, net price breakdown by rate, and total BTW amount.
- **Quarterly Return Deadlines (BTW-Aangifte)**: Most Dutch entrepreneurs and SMEs submit returns quarterly via Mijn Belastingdienst Zakelijk:
  - 1st Quarter (January–March): Due **April 30**.
  - 2nd Quarter (April–June): Due **July 31**.
  - 3rd Quarter (July–September): Due **October 31**.
  - 4th Quarter (October–December): Due **January 31**.
- **Payment Compliance**: Return submission and electronic payment must both clear the Belastingdienst account on or before the statutory deadline to avoid automated failure-to-pay penalties.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Technology Consulting Invoiced at Standard 21% BTW',
    scenario:
      'A Dutch IT consultancy provides a €4,500.00 net cloud software deployment to a commercial client in Amsterdam. Standard 21% BTW applies under Artikel 9 lid 1 Wet OB 1968.',
    inputs: {
      netContractFee: '€4,500.00',
      applicableBtwRate: '21.00% (Algemeen tarief)',
      clientStatus: 'Dutch commercial company with valid KVK and BTW-id',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal (Bedrag exclusief btw)',
        formula: 'Agreed commercial contract price',
        amount: '€4,500.00',
        note: 'Supplier gross business turnover.',
      },
      {
        label: 'Calculate 21% Belasting over de Toegevoegde Waarde',
        formula: '€4,500.00 × 0.21',
        amount: '€945.00',
        note: 'Artikel 9 lid 1 statutory output tax (Verschuldigde btw).',
      },
      {
        label: 'Total Gross Amount Payable (Bedrag inclusief btw)',
        formula: '€4,500.00 + €945.00',
        amount: '€5,445.00',
        note: 'Gross payment transferred by client.',
      },
      {
        label: 'Client Input Tax Deduction (Voorbelasting)',
        formula: 'Full €945.00 deducted on client BTW-aangifte (Rubriek 5b)',
        amount: '€945.00 (Net Cost: €4,500.00)',
        note: 'Dutch commercial clients deduct 100% of input BTW under Artikel 15.',
      },
    ],
    takeaway:
      'The supplier collects €5,445.00, retains €4,500.00 net, and remits €945.00 to the Belastingdienst on their quarterly BTW-aangifte. The corporate client claims €945.00 as voorbelasting on Box 5b, preserving commercial neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 21% BTW from Gross Retail Price (€121.00 Total)',
    scenario:
      'A consumer pays €121.00 inclusive of standard 21% Dutch BTW. The reverse extraction formula Net = Gross ÷ 1.21 is applied.',
    inputs: {
      grossTotalReceived: '€121.00',
      statutoryBtwRate: '21.00%',
      extractionFactor: '1.21 (1 + 0.21)',
    },
    steps: [
      {
        label: 'Determine Pre-BTW Net Revenue',
        formula: '€121.00 ÷ 1.21',
        amount: '€100.00',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded BTW Liability',
        formula: '€121.00 − €100.00 (or €100.00 × 0.21)',
        amount: '€21.00',
        note: 'Output tax owed to the Belastingdienst.',
      },
    ],
    takeaway:
      'Dividing €121.00 by 1.21 yields exactly €100.00 in pre-tax business revenue and isolates €21.00 in statutory BTW payable on the quarterly tax return.',
  },
  faqs: [
    {
      question: 'What are the standard and reduced VAT rates in the Netherlands?',
      answer:
        'Under Artikel 9 of the Wet op de omzetbelasting 1968, the Netherlands levies a standard BTW rate of 21% on most goods and commercial services, and a reduced rate of 9% on food, non-alcoholic drinks, books, pharmaceuticals, hotel lodging, and passenger transport.',
    },
    {
      question: 'What is the Kleineondernemersregeling (KOR) in the Netherlands?',
      answer:
        'The KOR is a small business scheme that exempts entrepreneurs with annual turnover under €20,000 from charging BTW and filing quarterly declarations. In exchange, participating businesses cannot reclaim input BTW (voorbelasting) on business expenses.',
    },
    {
      question: 'How does the verleggingsregeling (reverse charge) work in the Netherlands?',
      answer:
        'Under the verleggingsregeling (Artikel 12 Wet OB), the obligation to report and pay BTW shifts from the supplier to the business customer. The supplier issues an invoice stating "Btw verlegd" with both parties’ VAT numbers, and the recipient declares the tax on their own return.',
    },
    {
      question: 'What is an Article 23 import license in the Netherlands?',
      answer:
        'An Article 23 license (Artikel 23 vergunning) allows Dutch businesses to defer import VAT at customs. Instead of paying VAT immediately upon arrival of goods, the tax is reported and settled on the company’s regular quarterly BTW return, eliminating cash flow delays.',
    },
    {
      question: 'When is the quarterly BTW-aangifte due to the Belastingdienst?',
      answer:
        'Quarterly BTW returns and electronic payments must be received by the Belastingdienst by the last day of the month following the end of the quarter: April 30 (Q1), July 31 (Q2), October 31 (Q3), and January 31 (Q4).',
    },
  ],
};

export default netherlandsVatContent;

