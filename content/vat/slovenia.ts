import type { PageContent } from '../types.ts';

export const sloveniaVatContent: PageContent = {
  "slug": "slovenia",
  "family": "vat",
  "title": "Slovenia VAT Calculator (22%, 9.5%, 5% DDV) & FURS Guide | FeeKit",
  "metaDescription": "Calculate Slovenian Davek na dodano vrednost (DDV) with verified FURS rates (22% standard, 9.5% food, 5% books). €50k threshold, eDavki filing, and reverse charge.",
  "h1": "Slovenia VAT Calculator & Finančna uprava Republike Slovenije Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Finančna uprava Republike Slovenije (FURS)",
    "url": "https://edavki.durs.si/",
    "citation": "Zakon o davku na dodano vrednost (ZDDV-1) and Pravilnik o izvajanju ZDDV-1."
  },
  "overview": "Value Added Tax in Slovenia—known domestically as Davek na dodano vrednost or DDV—is governed by the Slovenian VAT Act (Zakon o davku na dodano vrednost - ZDDV-1) and administered by the Financial Administration of the Republic of Slovenia (Finančna uprava Republike Slovenije - FURS). Slovenia applies a standard VAT rate of 22% across commercial commerce, alongside reduced rates of 9.5% (food, restaurant meals, hotel lodging, passenger transport) and a special 5% super-reduced rate (printed and electronic books, newspapers). Small businesses with annual turnover under €50,000 qualify for exemption. Periodic tax declarations are submitted via FURS’s electronic portal (eDavki).",
  "sections": [
    {
      "id": "si-statutory-vat-rates",
      "title": "Slovenian DDV Architecture: Standard (22%), Reduced (9.5% & 5%), and Zero Rate",
      "body": "Slovenia enforces three statutory rate brackets under Article 41 of ZDDV-1:\n\n1. **Standard Rate (22%)**: Codified in Article 41, Paragraph 1. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, and commercial IT and professional consulting services.\n2. **First Reduced Rate (9.5%)**: Codified in Article 41, Paragraph 2. Applies to staple foodstuffs for human consumption, water supply, pharmaceuticals, medical equipment, passenger transport, hotel accommodations, and restaurant food services.\n3. **Special Super-Reduced Rate (5%)**: Codified in Article 41, Paragraph 3. Applies to physical and electronic books, newspapers, and non-advertising periodicals.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B deliveries of goods and direct exports outside the European Union."
    },
    {
      "id": "si-small-business-threshold",
      "title": "€50,000 Small Business Exemption (Oprostitev za male davčne zavezance)",
      "body": "Administrative relief under Article 94 of ZDDV-1:\n\n- **Revenue Threshold**: A taxable person established in Slovenia whose taxable turnover does not exceed **€50,000** in the preceding 12 months qualifies for exemption from DDV.\n- **Operational Rules**: Exempt small taxpayers do not charge 22% DDV on customer invoices and cannot deduct input VAT on business purchases.\n- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *\"DDV ni obračunan na podlagi 1. odstavka 94. člena Zakona o davku na dodano vrednost\"* (DDV is not charged pursuant to Article 94(1) of ZDDV-1)."
    },
    {
      "id": "si-edavki-and-fiscal-cash-registers",
      "title": "Fiscal Cash Registers (Davčne blagajne) & eDavki Filing Deadlines",
      "body": "Compliance requirements administered by FURS:\n\n- **Davčne blagajne (Fiscal Cash Registers)**: Mandatory real-time electronic authorization with FURS for all point-of-sale cash and card transactions, printing a unique EOR security code and QR verification code on customer receipts.\n- **Filing Deadlines (Obrazec DDV-O)**: VAT returns and payments are due on or before the **last business day of the month** following the reporting period via **eDavki** (or the 20th day if conducting EU transactions).\n- **Filing Frequency**:\n  - Monthly: Standard for entities with previous year turnover exceeding €210,000 or new businesses.\n  - Quarterly: Small businesses with turnover below €210,000 without cross-border EU trade."
    },
    {
      "id": "si-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Obrnjena davčna obveznost) & Cross-Border B2B",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Slovenian DDV displaying: *\"Obrnjena davčna obveznost (Reverse Charge)\"* alongside verified Slovenian VAT numbers (SI + 8 digits).\n- **Domestic Reverse Charge**: Enforced under Article 76a of ZDDV-1 for construction services, scrap metal, and greenhouse gas emission allowances."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Ljubljana (22% DDV)",
    "scenario": "A digital consultancy in Ljubljana delivers €5,000.00 net of custom cloud integration services to a corporate client in Maribor. Standard 22% DDV applies.",
    "inputs": {
      "netSoftwareService": "€5,000.00",
      "slovenianStandardDdvRate": "22.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€5,000.00 consulting",
        "amount": "€5,000.00",
        "note": "Subject to 22% Slovenian DDV"
      },
      {
        "label": "Slovenian DDV Output (22%)",
        "formula": "€5,000.00 × 22.00%",
        "amount": "€1,100.00",
        "note": "Output tax liability to FURS"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€5,000.00 + €1,100.00",
        "amount": "€6,100.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Slovenian VAT, the corporate customer pays €6,100.00 gross, with €1,100.00 in DDV remitted on the vendor’s periodic eDavki return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €610.00 Retail Receipt",
    "scenario": "A consumer in Celje purchases €610.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Slovenian DDV component?",
    "inputs": {
      "totalInclusiveAmount": "€610.00",
      "ddvRate": "22.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€610.00 ÷ (1 + 0.22)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Slovenian DDV Component",
        "formula": "€610.00 - €500.00",
        "amount": "€110.00",
        "note": "Output DDV liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 22.00%",
        "amount": "€110.00",
        "note": "Reconciles exactly to €610.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €610.00 retail transaction in Slovenia, the merchant retains €500.00 net and remits €110.00 in DDV to FURS."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (DDV) rate in Slovenia?",
      "answer": "The standard VAT rate in Slovenia is 22%. Reduced rates of 9.5% (food, restaurant meals, hotel lodging, passenger transport) and 5% (books, newspapers) apply to specific qualifying supplies.",
      "sourceUrl": "https://edavki.durs.si/"
    },
    {
      "question": "What is the Slovenian VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Slovenia is €50,000 in annual turnover over the preceding 12 months under Article 94 of ZDDV-1.",
      "sourceUrl": "https://edavki.durs.si/"
    },
    {
      "question": "What are Davčne blagajne in Slovenia?",
      "answer": "Davčne blagajne are mandatory online fiscal cash registers that communicate in real time with FURS for every cash or card transaction, returning an encrypted EOR authorization code.",
      "sourceUrl": "https://edavki.durs.si/"
    },
    {
      "question": "How is a Slovenian VAT number formatted?",
      "answer": "Slovenian VAT identification numbers (davčna številka) are formatted with the country prefix SI followed by 8 numerical digits (e.g. SI12345678).",
      "sourceUrl": "https://edavki.durs.si/"
    },
    {
      "question": "When are Slovenian VAT returns due?",
      "answer": "VAT returns (Obrazac DDV-O) are submitted via eDavki on the last business day of the month following the reporting period (or the 20th day if conducting EU cross-border trade).",
      "sourceUrl": "https://edavki.durs.si/"
    }
  ]
};

export default sloveniaVatContent;
