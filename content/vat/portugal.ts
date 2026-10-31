import type { PageContent } from '../types.ts';

export const portugalVatContent: PageContent = {
  "slug": "portugal",
  "family": "vat",
  "title": "Portugal VAT Calculator (23%, 13%, 6% IVA) & AT Guide | FeeKit",
  "metaDescription": "Calculate Portuguese Imposto sobre o Valor Acrescentado (IVA) with Autoridade Tributária rates (23% mainland, Madeira 22%, Azores 16%). €15k threshold, SAF-T, and reverse charge.",
  "h1": "Portugal VAT Calculator & Autoridade Tributária Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Autoridade Tributária e Aduaneira (AT)",
    "url": "https://www.portaldasfinancas.gov.pt/",
    "citation": "Código do Imposto sobre o Valor Acrescentado (CIVA) and Portaria n.º 31/2017 (SAF-T Invoicing)."
  },
  "overview": "Value Added Tax in Portugal—known domestically as Imposto sobre o Valor Acrescentado or IVA—is governed by the Portuguese VAT Code (Código do IVA - CIVA) and administered by the Tax and Customs Authority (Autoridade Tributária e Aduaneira - AT). Portugal enforces a standard VAT rate of 23% in mainland Portugal, alongside reduced regional rates in the Autonomous Regions of Madeira (22%) and the Azores (16%). The mainland applies an intermediate rate of 13% (wine, musical performances, agricultural supplies) and a reduced rate of 6% (staple foods, books, hotel accommodations, urban rehabilitation). Small businesses with annual turnover under €15,000 qualify for exemption under Article 53 of CIVA. Invoicing software must be certified by the AT and export monthly SAF-T audit files.",
  "sections": [
    {
      "id": "pt-statutory-vat-rates-and-islands",
      "title": "Portuguese IVA Rate Architecture: Mainland (23%) vs Madeira (22%) and Azores (16%)",
      "body": "Portugal enforces differentiated rates across geographic territories under Article 18 of CIVA:\n\n- **Mainland Portugal (Continente)**:\n  - **Standard Rate (23%)**: General commercial goods, apparel, electronics, vehicles, IT and professional consulting.\n  - **Intermediate Rate (13%)**: Wine, restaurant food services (excluding alcoholic beverages), agricultural supplies, and cultural performances.\n  - **Reduced Rate (6%)**: Basic food staples (bread, milk, meat, fresh fruits), printed books, newspapers, pharmaceutical products, hotel lodging, and passenger transport.\n- **Autonomous Region of Madeira**: Standard: **22%**, Intermediate: **12%**, Reduced: **5%**.\n- **Autonomous Region of the Azores**: Standard: **16%**, Intermediate: **9%**, Reduced: **4%**."
    },
    {
      "id": "pt-small-business-exemption",
      "title": "€15,000 Small Business Exemption: Artigo 53.º do CIVA",
      "body": "Portugal provides statutory administrative relief for freelancers and micro-enterprises:\n\n- **Revenue Ceiling**: Sole proprietors and independent professionals whose annual business turnover did not exceed **€15,000** in the preceding calendar year qualify for the special exemption scheme under Art. 53 CIVA.\n- **Operational Rules**: Exempt professionals do not charge IVA on customer invoices and cannot deduct input IVA on business expenses.\n- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *\"IVA - regime de isenção [artigo 53.º do CIVA]\"*."
    },
    {
      "id": "pt-saf-t-mandate-and-certified-software",
      "title": "Mandatory Certified Invoicing Software & Monthly SAF-T (PT) Reporting",
      "body": "Portugal maintains one of the strictest digital invoice auditing systems in Europe:\n\n- **Certified Invoicing Software (Software Certificado)**: All commercial invoices must be produced using billing software certified by the Autoridade Tributária (AT), incorporating encrypted hash validation and sequential numbering.\n- **Monthly SAF-T Submissions**: Businesses must export structured SAF-T (PT) XML accounting files and submit them to the AT by the **5th day of the month** following invoice issuance via the Portal das Finanças.\n- **ATCUD Code & QR Code**: Every commercial invoice must display a unique Document Code (ATCUD) and two-dimensional QR code validating tax authenticity."
    },
    {
      "id": "pt-reverse-charge-and-filing",
      "title": "Reverse Charge (Autoliquidação) and Filing Frequencies",
      "body": "Cross-border trade and periodic filing rules:\n\n- **B2B Reverse Charge**: Cross-border services provided to EU corporate clients are invoiced net without Portuguese IVA displaying: *\"Autoliquidação (Reverse Charge)\"* alongside verified NIF/VAT numbers (PT + 9 digits).\n- **Filing Schedules**:\n  - Quarterly: SMEs with turnover under €650,000. Due on the **20th day of the second month** following the quarter.\n  - Monthly: Mandatory for businesses exceeding €650,000 turnover. Due on the **20th day of the second month** following the reporting month."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Software Implementation in Lisbon (23% IVA)",
    "scenario": "A digital consultancy in Lisbon delivers €6,000.00 net of custom software engineering services to a domestic corporate client in Porto. Standard 23% mainland IVA applies.",
    "inputs": {
      "netSoftwareService": "€6,000.00",
      "mainlandStandardIvaRate": "23.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€6,000.00 consulting",
        "amount": "€6,000.00",
        "note": "Subject to 23% mainland IVA"
      },
      {
        "label": "Portuguese IVA Output (23%)",
        "formula": "€6,000.00 × 23.00%",
        "amount": "€1,380.00",
        "note": "Output tax liability to AT"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€6,000.00 + €1,380.00",
        "amount": "€7,380.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard mainland Portuguese VAT, the corporate client pays €7,380.00 gross, with €1,380.00 remitted on the vendor’s quarterly IVA return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €1,230.00 Retail Receipt",
    "scenario": "A consumer in Coimbra purchases €1,230.00 all-inclusive of retail electronics. What is the net sales revenue and Portuguese IVA component?",
    "inputs": {
      "totalInclusiveAmount": "€1,230.00",
      "ivaRate": "23.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€1,230.00 ÷ (1 + 0.23)",
        "amount": "€1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Portuguese IVA Component",
        "formula": "€1,230.00 - €1,000.00",
        "amount": "€230.00",
        "note": "Output IVA liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€1,000.00 × 23.00%",
        "amount": "€230.00",
        "note": "Reconciles exactly to €1,230.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €1,230.00 retail transaction in mainland Portugal, the merchant retains €1,000.00 net and remits €230.00 in IVA to the tax authority."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (IVA) rate in Portugal?",
      "answer": "The standard VAT rate in mainland Portugal is 23%. Autonomous regions have lower standard rates: 22% in Madeira and 16% in the Azores.",
      "sourceUrl": "https://www.portaldasfinancas.gov.pt/"
    },
    {
      "question": "What is the Portuguese VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Portugal is €15,000 in annual turnover under Article 53 of the Portuguese VAT Code (CIVA).",
      "sourceUrl": "https://www.portaldasfinancas.gov.pt/"
    },
    {
      "question": "What is SAF-T (PT) and why is it mandatory in Portugal?",
      "answer": "SAF-T (PT) is an electronic standard audit file for tax. All Portuguese businesses must use certified billing software and submit monthly SAF-T files to the tax authority.",
      "sourceUrl": "https://www.portaldasfinancas.gov.pt/"
    },
    {
      "question": "How is a Portuguese VAT number formatted?",
      "answer": "Portuguese tax numbers (NIF/NIPC) are formatted with the country prefix PT followed by 9 numerical digits (e.g. PT123456789).",
      "sourceUrl": "https://www.portaldasfinancas.gov.pt/"
    },
    {
      "question": "When are Portuguese VAT returns due?",
      "answer": "Quarterly VAT returns are due on the 20th day of the second month following the quarter via the Portal das Finanças (e.g. Q1 return due May 20).",
      "sourceUrl": "https://www.portaldasfinancas.gov.pt/"
    }
  ]
};

export default portugalVatContent;
