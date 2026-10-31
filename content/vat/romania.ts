import type { PageContent } from '../types.ts';

export const romaniaVatContent: PageContent = {
  "slug": "romania",
  "family": "vat",
  "title": "Romania VAT Calculator (19%, 9%, 5% TVA) & ANAF Guide | FeeKit",
  "metaDescription": "Calculate Romanian Taxa pe valoarea adăugată (TVA) with verified ANAF rates (19% standard, 9% food/pharma, 5% eco-housing). RON 300k threshold, RO e-Factura, and reverse charge.",
  "h1": "Romania VAT Calculator & Agenția Națională de Administrare Fiscală Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Agenția Națională de Administrare Fiscală (ANAF)",
    "url": "https://www.anaf.ro/",
    "citation": "Codul Fiscal (Legea nr. 227/2015) Titlul VII (TVA) and OUG nr. 120/2021 (RO e-Factura)."
  },
  "overview": "Value Added Tax in Romania—known domestically as Taxa pe valoarea adăugată or TVA—is governed by the Romanian Fiscal Code (Codul Fiscal - Legea 227/2015) and administered by the National Agency for Fiscal Administration (Agenția Națională de Administrare Fiscală - ANAF). Romania applies a standard VAT rate of 19% across general commercial goods and services, alongside reduced rates of 9% (food, non-alcoholic beverages, pharmaceuticals, hotel lodging) and 5% (firewood, thermal energy, ecological housing). Small businesses with annual turnover not exceeding RON 300,000 qualify for exemption. Romania enforces mandatory electronic B2B invoice transmission through the national RO e-Factura clearinghouse.",
  "sections": [
    {
      "id": "ro-statutory-vat-rates",
      "title": "Romanian TVA Rate Architecture: Standard (19%), Reduced (9% & 5%), and Zero Rate",
      "body": "Romania enforces three primary statutory tax brackets under Article 291 of Codul Fiscal:\n\n1. **Standard Rate (19%)**: Applies to general merchandise, consumer electronics, passenger vehicles, apparel, alcohol, restaurant catering, and commercial IT and professional consulting services.\n2. **First Reduced Rate (9%)**: Applies to human food and non-alcoholic beverages, agricultural seeds and fertilizer, medical and dental prosthetics, prescription medicines, and hotel and tourism accommodation.\n3. **Second Reduced Rate (5%)**: Applies to books, newspapers, cultural and sports admissions, delivery of qualifying ecological residential housing (meeting surface and price ceilings), and school textbooks.\n4. **Zero-Rated Supplies (0%)**: Intra-Community supplies of goods, international transport, and direct exports outside the European Union."
    },
    {
      "id": "ro-small-business-exemption",
      "title": "RON 300,000 Small Business Exemption (Regimul special de scutire)",
      "body": "Administrative relief under Article 310 of Codul Fiscal:\n\n- **Revenue Ceiling**: Small enterprises and sole traders whose annual turnover does not exceed **RON 300,000** qualify for the special exemption scheme.\n- **Registration Deadline**: Once the RON 300,000 threshold is reached during the tax year, the business must apply for VAT registration within 10 days of the end of the month in which the limit was exceeded.\n- **Operational Rules**: Exempt small enterprises do not charge 19% TVA on invoices and cannot deduct input VAT on equipment."
    },
    {
      "id": "ro-e-factura-mandate-and-anaf",
      "title": "Mandatory RO e-Factura B2B Clearinghouse & Form 300 Filing",
      "body": "ANAF enforces aggressive digital monitoring under Government Emergency Ordinance OUG 120/2021:\n\n- **RO e-Factura System**: Mandatory for all B2B transactions established in Romania. Invoices must be generated in standardized XML format (UBL 2.1) and transmitted directly to the Ministry of Finance SPV portal (Spațiul Privat Virtual), where ANAF applies an electronic validation signature.\n- **Filing Deadlines (Decontul de TVA - Form 300)**: VAT returns and payments are due on or before the **25th day of the month** following the reporting period via ANAF’s online portal.\n- **Filing Frequency**:\n  - Monthly: Standard for businesses with previous year turnover exceeding €100,000.\n  - Quarterly: Businesses with turnover below €100,000."
    },
    {
      "id": "ro-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Taxare inversă) & Cross-Border B2B Supplies",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Romanian TVA displaying: *\"Taxare inversă (Reverse Charge)\"* alongside verified CIF numbers (RO + 2 to 10 digits).\n- **Domestic Reverse Charge**: Enforced under Article 331 of Codul Fiscal for grain, timber, scrap metal, and energy certificate wholesale trade."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Bucharest (19% TVA)",
    "scenario": "A software engineering firm in Bucharest delivers RON 20,000.00 net of custom cloud integration services to a corporate client in Cluj-Napoca. Standard 19% TVA applies.",
    "inputs": {
      "netSoftwareService": "RON 20,000.00",
      "romanianStandardTvaRate": "19.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "RON 20,000.00 consulting",
        "amount": "RON 20,000.00",
        "note": "Subject to 19% Romanian TVA"
      },
      {
        "label": "Romanian TVA Output (19%)",
        "formula": "RON 20,000.00 × 19.00%",
        "amount": "RON 3,800.00",
        "note": "Output tax liability to ANAF"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "RON 20,000.00 + RON 3,800.00",
        "amount": "RON 23,800.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Romanian VAT, the corporate customer pays RON 23,800.00 gross, with RON 3,800.00 in TVA transmitted through RO e-Factura and remitted on Form 300."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a RON 1,190.00 Retail Receipt",
    "scenario": "A consumer in Timișoara purchases RON 1,190.00 all-inclusive of retail electronics. What is the net sales revenue and Romanian TVA component?",
    "inputs": {
      "totalInclusiveAmount": "RON 1,190.00",
      "tvaRate": "19.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "RON 1,190.00 ÷ (1 + 0.19)",
        "amount": "RON 1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Romanian TVA Component",
        "formula": "RON 1,190.00 - RON 1,000.00",
        "amount": "RON 190.00",
        "note": "Output TVA liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "RON 1,000.00 × 19.00%",
        "amount": "RON 190.00",
        "note": "Reconciles exactly to RON 1,190.00 total"
      }
    ],
    "takeaway": "From an all-inclusive RON 1,190.00 retail transaction in Romania, the merchant retains RON 1,000.00 net and remits RON 190.00 in TVA to ANAF."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (TVA) rate in Romania?",
      "answer": "The standard VAT rate in Romania is 19%. Reduced rates of 9% (food, medicine, hotel accommodation) and 5% (books, cultural events, eco-housing) apply to specific qualifying goods.",
      "sourceUrl": "https://www.anaf.ro/"
    },
    {
      "question": "What is the Romanian VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Romania is RON 300,000 in annual turnover under Article 310 of Codul Fiscal.",
      "sourceUrl": "https://www.anaf.ro/"
    },
    {
      "question": "What is the RO e-Factura system in Romania?",
      "answer": "RO e-Factura is Romania’s mandatory electronic invoicing platform. All domestic B2B invoices must be transmitted in standardized XML format to the Ministry of Finance SPV portal.",
      "sourceUrl": "https://www.anaf.ro/"
    },
    {
      "question": "How is a Romanian VAT number formatted?",
      "answer": "Romanian VAT identification numbers (Cod de Identificare Fiscală - CIF) are formatted with the country prefix RO followed by 2 to 10 numerical digits (e.g. RO12345678).",
      "sourceUrl": "https://www.anaf.ro/"
    },
    {
      "question": "When are Romanian VAT returns due?",
      "answer": "VAT returns (Decontul de TVA - Form 300) are due on or before the 25th day of the month following the close of the reporting period via the ANAF electronic filing portal.",
      "sourceUrl": "https://www.anaf.ro/"
    }
  ]
};

export default romaniaVatContent;
