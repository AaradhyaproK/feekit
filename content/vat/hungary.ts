import type { PageContent } from '../types.ts';

export const hungaryVatContent: PageContent = {
  "slug": "hungary",
  "family": "vat",
  "title": "Hungary VAT Calculator (27%, 18%, 5% ÁFA) & NAV Guide | FeeKit",
  "metaDescription": "Calculate Hungarian Általános forgalmi adó (ÁFA) with verified NAV rates (27% EU-highest standard, 18% dairy, 5% books). HUF 12M threshold, Online Számla, and reverse charge.",
  "h1": "Hungary VAT Calculator & Nemzeti Adó- és Vámhivatal Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Nemzeti Adó- és Vámhivatal (NAV)",
    "url": "https://nav.gov.hu/",
    "citation": "2007. évi CXXVII. törvény az általános forgalmi adóról (Áfa tv.) and Online Számla XML Data Reporting."
  },
  "overview": "Value Added Tax in Hungary—known domestically as Általános forgalmi adó or ÁFA—is governed by the Hungarian VAT Act (2007. évi CXXVII. törvény az áfáról) and administered by the National Tax and Customs Administration (Nemzeti Adó- és Vámhivatal - NAV). Hungary imposes a standard VAT rate of 27%, representing the highest standard VAT rate in the European Union. Hungary applies reduced rates of 18% (dairy products, bakery items, commercial hotel lodging) and 5% (printed and electronic books, pharmaceuticals, medical equipment, district heating, internet access services). Small businesses with annual turnover under HUF 12,000,000 qualify for exemption (alanyi adómentesség). Hungary operates mandatory real-time electronic invoice reporting (Online Számla).",
  "sections": [
    {
      "id": "hu-statutory-vat-rates-highest-in-eu",
      "title": "Hungarian ÁFA Architecture: The 27% EU-Highest Standard & Reduced Brackets (18% & 5%)",
      "body": "Hungary enforces three statutory tax brackets under Section 82 of the Hungarian VAT Act:\n\n1. **Standard Rate (27%)**: Codified in Section 82 (1). Represents the highest general VAT rate in Europe, applying to the vast majority of commercial goods, electronics, motor vehicles, apparel, alcohol, and professional IT and consulting services.\n2. **First Reduced Rate (18%)**: Codified in Section 82 (2). Applies to dairy and milk products, bakery goods, and commercial hotel accommodations.\n3. **Second Reduced Rate (5%)**: Codified in Section 82 (3). Applies to fresh meat (poultry, pork, beef), fish, eggs, printed and electronic books, newspapers, medical products, district heating, and residential internet access services.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international passenger transport, and direct exports outside the EU."
    },
    {
      "id": "hu-small-business-exemption",
      "title": "HUF 12,000,000 Small Business Exemption (Alanyi adómentesség - AAM)",
      "body": "Administrative relief under Chapter XIII of the Hungarian VAT Act:\n\n- **Revenue Ceiling**: Small businesses and sole proprietors whose annual domestic turnover does not exceed **HUF 12,000,000** qualify for subjective tax exemption (alanyi adómentesség).\n- **Operational Rules**: Exempt small businesses do not add 27% ÁFA to customer invoices and cannot deduct input VAT on equipment.\n- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *\"Alanyi adómentes\"* (Subjectively tax-exempt)."
    },
    {
      "id": "hu-online-szamla-realtime-reporting",
      "title": "Mandatory Real-Time Invoice Reporting (Online Számla System)",
      "body": "NAV enforces total transaction transparency under Section 10 of Annex 10 to the VAT Act:\n\n- **Online Számla Mandate**: All invoices issued by Hungarian taxpayers must be transmitted electronically in real time to the NAV Online Számla system via API, with zero minimum threshold.\n- **Automated Audit Cross-Matching**: NAV’s automated algorithms cross-check supplier invoice data against buyer VAT deduction claims, eliminating unrecorded business transactions.\n- **Electronic XML Delivery**: Invoicing software must be capable of generating valid XML schemas conforming to NAV specifications."
    },
    {
      "id": "hu-reverse-charge-and-filing",
      "title": "Reverse Charge (Fordított adózás) and Periodic Filing Schedules",
      "body": "Compliance requirements administered by NAV:\n\n- **B2B Reverse Charge**: Cross-border services delivered to registered EU business clients are invoiced net without Hungarian ÁFA displaying: *\"Fordított adózás (Reverse Charge)\"* alongside Hungarian VAT numbers (HU + 8 digits).\n- **Filing Schedules (Form 65)**:\n  - Monthly: Large enterprises and newly registered VAT payers. Due on the **20th day of the month** following the reporting period.\n  - Quarterly: Standard for SMEs with annual net tax liability under HUF 1 million. Due on the **20th day of the month** following the quarter."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Budapest (27% ÁFA)",
    "scenario": "A digital consultancy in Budapest delivers HUF 1,000,000.00 net of custom software engineering services to a domestic corporate client in Debrecen. Standard 27% ÁFA applies.",
    "inputs": {
      "netSoftwareService": "HUF 1,000,000.00",
      "hungarianStandardAfaRate": "27.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "HUF 1,000,000.00 consulting",
        "amount": "HUF 1,000,000.00",
        "note": "Subject to 27% Hungarian ÁFA"
      },
      {
        "label": "Hungarian ÁFA Output (27%)",
        "formula": "HUF 1,000,000.00 × 27.00%",
        "amount": "HUF 270,000.00",
        "note": "Output tax liability to NAV"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "HUF 1,000,000.00 + HUF 270,000.00",
        "amount": "HUF 1,270,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Hungary’s 27% standard VAT rate, the corporate customer pays HUF 1,270,000.00 gross, with HUF 270,000.00 transmitted through Online Számla and remitted on Form 65."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a HUF 12,700.00 Retail Receipt",
    "scenario": "A consumer in Szeged purchases HUF 12,700.00 all-inclusive of retail electronics. What is the net sales revenue and Hungarian ÁFA component?",
    "inputs": {
      "totalInclusiveAmount": "HUF 12,700.00",
      "afaRate": "27.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "HUF 12,700.00 ÷ (1 + 0.27)",
        "amount": "HUF 10,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Hungarian ÁFA Component",
        "formula": "HUF 12,700.00 - HUF 10,000.00",
        "amount": "HUF 2,700.00",
        "note": "Output ÁFA liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "HUF 10,000.00 × 27.00%",
        "amount": "HUF 2,700.00",
        "note": "Reconciles exactly to HUF 12,700.00 total"
      }
    ],
    "takeaway": "From an all-inclusive HUF 12,700.00 retail transaction in Hungary, the merchant retains HUF 10,000.00 net and remits HUF 2,700.00 in ÁFA to NAV."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (ÁFA) rate in Hungary?",
      "answer": "The standard VAT rate in Hungary is 27%, which is the highest standard VAT rate in the European Union. Reduced rates of 18% (dairy, bakery, hotel lodging) and 5% (books, medicine, internet) apply to specific goods.",
      "sourceUrl": "https://nav.gov.hu/"
    },
    {
      "question": "What is the Hungarian VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Hungary is HUF 12,000,000 in annual turnover under the subjective tax exemption scheme (alanyi adómentesség).",
      "sourceUrl": "https://nav.gov.hu/"
    },
    {
      "question": "What is the NAV Online Számla system in Hungary?",
      "answer": "Online Számla is Hungary’s mandatory real-time electronic invoice reporting platform. All commercial invoices issued by Hungarian businesses must be transmitted to NAV via API instantly upon creation.",
      "sourceUrl": "https://nav.gov.hu/"
    },
    {
      "question": "How is a Hungarian VAT number formatted?",
      "answer": "Hungarian VAT identification numbers (adószám) are formatted with the country prefix HU followed by 8 numerical digits (e.g. HU12345678).",
      "sourceUrl": "https://nav.gov.hu/"
    },
    {
      "question": "When are Hungarian VAT returns due?",
      "answer": "Periodic VAT returns (Form 65) and tax payments are due on or before the 20th day of the month following the close of the reporting period via the NAV digital portal.",
      "sourceUrl": "https://nav.gov.hu/"
    }
  ]
};

export default hungaryVatContent;
