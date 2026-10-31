import type { PageContent } from '../types.ts';

export const spainVatContent: PageContent = {
  slug: 'spain',
  family: 'vat',
  title: 'Spain VAT Calculator (21%, 10%, 4% IVA) & AEAT Guide | FeeKit',
  metaDescription:
    'Calculate Spanish Impuesto sobre el Valor Añadido (IVA) with verified AEAT rates (21% standard, 10% & 4% reduced). Details recargo de equivalencia, inversión del sujeto pasivo, and Modelo 303.',
  h1: 'Spain VAT Calculator & Ley del IVA (LIVA) Statutory Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Agencia Estatal de Administración Tributaria (AEAT)',
    url: 'https://sede.agenciatributaria.gob.es/',
    citation: 'Ley 37/1992, de 28 de diciembre, del Impuesto sobre el Valor Añadido (LIVA), Artículos 90, 91, y 84.',
  },
  overview:
    'Value Added Tax in Spain—known domestically as the Impuesto sobre el Valor Añadido (IVA)—is governed by Ley 37/1992 (LIVA) and administered by the Agencia Estatal de Administración Tributaria (AEAT). Spain applies three statutory rates on the Iberian Peninsula and Balearic Islands: a standard rate of 21%, a reduced rate of 10% (general foodstuffs, passenger transport, hotel accommodation), and a super-reduced rate of 4% (basic staple foods, books, human medications). Freelancers and businesses file periodic returns via Modelo 303, while unincorporated retail merchants are subject to the mandatory recargo de equivalencia regime.',
  sections: [
    {
      id: 'statutory-rates-spain-vat',
      title: 'Spanish IVA Rates: Standard (21%), Reduced (10%), and Super-Reduced (4%)',
      body: `Spanish statutory tax law establishes three primary tax brackets under Ley 37/1992:

1. **Standard Rate (Tipo general — 21%)**: Codified in LIVA Article 90. Applies to the majority of goods and professional services, including commercial software, legal and architectural consulting, adult clothing, consumer electronics, motor vehicles, cosmetics, and alcoholic beverages.
2. **Reduced Rate (Tipo reducido — 10%)**: Codified in LIVA Article 91.Uno. Applies to general food products for human and animal consumption, municipal water supplies, passenger transport (trains, buses, domestic flights), hotel and holiday accommodations, restaurant dining, and residential real estate construction.
3. **Super-Reduced Rate (Tipo superreducido — 4%)**: Codified in LIVA Article 91.Dos. Applies to essential staple foods (bread, baking flour, milk, eggs, fresh fruits, vegetables, olive oil), human medicines and active pharmaceutical ingredients, printed and electronic books, newspapers, magazines, and mobility aids for disabled persons.
4. **Regional Exclusions**: The Canary Islands operate under an independent indirect tax system called the Impuesto General Indirecto Canario (IGIC, standard rate 7%), while the autonomous cities of Ceuta and Melilla apply the Impuesto sobre la Producción, los Servicios y la Importación (IPSI).`,
    },
    {
      id: 'recargo-de-equivalencia-spain',
      title: 'The Special Retail Surcharge: Recargo de Equivalencia',
      body: `Spain maintains a mandatory statutory regime for sole proprietorship retailers under LIVA Title IX:

- **Mandatory Application**: Unincorporated sole proprietors (autónomos) who sell goods directly to end consumers without transforming the products are legally required to operate under the **recargo de equivalencia** regime.
- **Supplier Surcharge Collection**: The retailer does not file periodic VAT returns (Modelo 303). Instead, their wholesale suppliers charge both the standard IVA and an additional statutory surcharge directly on the wholesale invoice:
  - **5.2% surcharge** on standard 21% goods (total wholesale tax: 26.2%).
  - **1.4% surcharge** on reduced 10% goods (total wholesale tax: 11.4%).
  - **0.5% surcharge** on super-reduced 4% goods (total wholesale tax: 4.5%).
- **Administrative Simplicity**: In exchange for paying the higher upfront surcharge, the retail merchant is exempt from submitting quarterly VAT returns or accounting for output VAT to the AEAT.`,
    },
    {
      id: 'reverse-charge-and-inversion-sujeto-pasivo-spain',
      title: 'Inversión del Sujeto Pasivo (Reverse Charge) and EU VIES Rules',
      body: `Cross-border transactions and specific high-risk domestic sectors operate under statutory reverse charge rules:

- **Inversión del Sujeto Pasivo (LIVA Article 84.Uno.2º)**: When an overseas business provides B2B services or digital goods to a Spanish company, the obligation to account for IVA transfers to the Spanish recipient. The provider issues a net invoice without Spanish tax, displaying both parties' NIF-IVA and noting: *"Operación con inversión del sujeto pasivo conforme al artículo 84.Uno.2º de la Ley 37/1992"*.
- **Intra-Community Operator Registry (ROI / VIES)**: Spanish businesses conducting cross-border commerce with EU partners must register in the Registro de Operadores Intracomunitarios (ROI) to activate their European VAT number (NIF-IVA formatted as ES + 9 alphanumeric characters).
- **One-Stop Shop (Ventanilla Única / OSS)**: Spanish e-commerce merchants selling B2C products or digital services across EU borders exceeding the €10,000 threshold declare destination EU VAT through the AEAT Ventanilla Única portal.`,
    },
    {
      id: 'invoicing-requirements-and-modelo-303-filing-spain',
      title: 'AEAT Invoicing Requirements, SII System, and Modelo 303 Deadlines',
      body: `Administrative requirements enforced by the Agencia Tributaria:

- **Mandatory Invoice Elements (RD 1619/2012)**: Invoices must display the issuer’s full legal name, fiscal address, and NIF/CIF, the recipient's tax information, a unique sequential invoice number, issue date, date of transaction, itemized description, net taxable base, applicable IVA rate, and total invoice amount.
- **Quarterly Return Deadlines (Modelo 303)**: Standard self-employed autónomos and SMEs submit quarterly declarations (Modelo 303) electronically via the AEAT Sede Electrónica:
  - 1st Quarter (January–March): Due **April 1–20**.
  - 2nd Quarter (April–June): Due **July 1–20**.
  - 3rd Quarter (July–September): Due **October 1–20**.
  - 4th Quarter (October–December): Due **January 1–30** (alongside annual summary Modelo 390).
- **Immediate Information Supply (SII)**: Large enterprises with annual turnover exceeding €6,010,121.04 are mandated to submit invoice records electronically within 4 business days to the AEAT Suministro Inmediato de Información (SII) system.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Technology Consulting Invoiced at Standard 21% IVA',
    scenario:
      'A Spanish software engineering firm provides a €4,000.00 net digital infrastructure configuration to a corporate client in Madrid. Standard 21% IVA applies under LIVA Article 90.',
    inputs: {
      netContractFee: '€4,000.00',
      applicableIvaRate: '21.00% (Tipo general)',
      clientStatus: 'Spanish commercial company with valid CIF and fiscal address',
    },
    steps: [
      {
        label: 'Net Invoice Subtotal (Base imponible)',
        formula: 'Agreed commercial contract price',
        amount: '€4,000.00',
        note: 'Supplier net business turnover.',
      },
      {
        label: 'Calculate 21% Impuesto sobre el Valor Añadido',
        formula: '€4,000.00 × 0.21',
        amount: '€840.00',
        note: 'LIVA Article 90 statutory output IVA (IVA repercutido).',
      },
      {
        label: 'Total Gross Amount Payable (Total factura)',
        formula: '€4,000.00 + €840.00',
        amount: '€4,840.00',
        note: 'Gross payment transferred by client.',
      },
      {
        label: 'Client Input IVA Deduction (IVA soportado deducible)',
        formula: 'Full €840.00 deducted on client Modelo 303 return',
        amount: '€840.00 (Net Cost: €4,000.00)',
        note: 'Spanish corporate clients deduct 100% of input IVA under LIVA Art. 92.',
      },
    ],
    takeaway:
      'The consultant collects €4,840.00, retains €4,000.00 net, and remits €840.00 to the AEAT on quarterly Modelo 303. The corporate client deducts the €840.00 as IVA soportado on their own return, ensuring tax neutrality.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting 21% IVA from Gross Retail Price (€121.00 Total)',
    scenario:
      'A merchant receives a round €121.00 payment inclusive of standard 21% Spanish IVA. The reverse extraction formula Net = Gross ÷ 1.21 is applied.',
    inputs: {
      grossTotalReceived: '€121.00',
      statutoryIvaRate: '21.00%',
      extractionFactor: '1.21 (1 + 0.21)',
    },
    steps: [
      {
        label: 'Determine Net Taxable Base (Base imponible)',
        formula: '€121.00 ÷ 1.21',
        amount: '€100.00',
        note: 'True business turnover excluding tax.',
      },
      {
        label: 'Extract Embedded IVA Liability (Cuota de IVA)',
        formula: '€121.00 − €100.00 (or €100.00 × 0.21)',
        amount: '€21.00',
        note: 'Output tax owed to the AEAT on Modelo 303.',
      },
    ],
    takeaway:
      'Dividing €121.00 by 1.21 yields exactly €100.00 in pre-tax business revenue and isolates €21.00 in statutory IVA payable to the tax authority.',
  },
  faqs: [
    {
      question: 'What are the official VAT rates in Spain?',
      answer:
        'Under Ley 37/1992, Spain applies three statutory rates: the standard rate of 21% (most commercial goods and services), a reduced rate of 10% (general food, passenger transport, hotel lodging, residential housing), and a super-reduced rate of 4% (staple foods like bread, milk, eggs, books, medications). Note that the Canary Islands apply an independent tax (IGIC at 7%).',
    },
    {
      question: 'What is the recargo de equivalencia in Spain?',
      answer:
        'The recargo de equivalencia is a mandatory special VAT regime for unincorporated retail merchants selling to final consumers. Instead of filing quarterly returns, the retailer pays a surcharge to their wholesale suppliers (5.2% on 21% goods, 1.4% on 10% goods). The retailer does not collect or remit VAT to the AEAT.',
    },
    {
      question: 'How does the inversión del sujeto pasivo (reverse charge) work in Spain?',
      answer:
        'Under LIVA Article 84, the tax liability shifts from the seller to the buyer for cross-border B2B services and specific domestic sectors like construction subcontracting. The supplier issues a net invoice without IVA, and the Spanish business recipient accounts for both output and input IVA on Modelo 303.',
    },
    {
      question: 'When are quarterly Modelo 303 returns due to the AEAT?',
      answer:
        'Quarterly VAT declarations (Modelo 303) are due between the 1st and 20th of the month following each calendar quarter: April 1–20 (Q1), July 1–20 (Q2), October 1–20 (Q3), and January 1–30 (Q4), along with the annual informative summary (Modelo 390).',
    },
    {
      question: 'What is a Spanish NIF-IVA and how is it obtained?',
      answer:
        'A NIF-IVA is an intra-Community VAT identification number formatted as "ES" followed by the entity’s 9-character fiscal identification code. Spanish businesses obtain it by registering in the Registro de Operadores Intracomunitarios (ROI) via Modelo 036.',
    },
  ],
};

export default spainVatContent;

