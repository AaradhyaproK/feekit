import type { PageContent } from '../types.ts';

export const latviaVatContent: PageContent = {
  "slug": "latvia",
  "family": "vat",
  "title": "Latvia VAT Calculator (21%, 12%, 5% PVN) & VID Guide | FeeKit",
  "metaDescription": "Calculate Latvian Pievienotās vērtības nodoklis (PVN) with verified VID rates (21% standard, 12% medicine/heating, 5% fresh produce). €50k threshold, EDS, and reverse charge.",
  "h1": "Latvia VAT Calculator & Valsts ieņēmumu dienests Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Valsts ieņēmumu dienests (VID)",
    "url": "https://www.vid.gov.lv/",
    "citation": "Pievienotās vērtības nodokļa likums (PVN likums) and Electronic Declaration System (EDS) regulations."
  },
  "overview": "Value Added Tax in Latvia—known domestically as Pievienotās vērtības nodoklis or PVN—is governed by the Latvian Value Added Tax Law (Pievienotās vērtības nodokļa likums) and administered by the State Revenue Service (Valsts ieņēmumu dienests - VID). Latvia applies a standard VAT rate of 21% on commercial goods and services, alongside reduced rates of 12% (pharmaceuticals, medical devices, baby food, domestic passenger transport, hotel accommodations, district heating) and a specialized 5% reduced rate for fresh fruits, berries, and vegetables typical of Latvia. Small businesses with annual turnover under €50,000 qualify for exemption. Tax declarations are submitted electronically through VID’s Electronic Declaration System (EDS).",
  "sections": [
    {
      "id": "lv-statutory-vat-rates",
      "title": "Latvian PVN Architecture: Standard (21%), Reduced (12% & 5%), and Zero Rate",
      "body": "Latvia enforces three statutory rate brackets under Sections 41 and 42 of the PVN Law:\n\n1. **Standard Rate (21%)**: Governed by Section 41, Paragraph 1. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant food, and commercial IT and professional consulting services.\n2. **First Reduced Rate (12%)**: Governed by Section 42. Applies to prescription and non-prescription medicines, medical devices, infant food, domestic passenger transport, books, newspapers, hotel accommodations, and residential thermal energy.\n3. **Second Reduced Rate (5%)**: Governed by Section 42, Paragraph 16. Applies to fresh fruits, berries, and vegetables characteristic of the local agricultural sector.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international transport, and direct export deliveries outside the EU."
    },
    {
      "id": "lv-small-business-threshold",
      "title": "€50,000 Small Business Exemption (Reģistrācijas slieksnis)",
      "body": "Administrative relief under Section 59 of the PVN Law:\n\n- **Turnover Threshold**: A taxable person established in Latvia whose aggregate taxable turnover of goods and services did not exceed **€50,000** during the preceding 12 months is not required to register as a VAT payer.\n- **Mandatory Registration Window**: Once the €50,000 limit is reached, an application for VAT registration must be submitted to VID not later than the **15th day of the month** following the month of breach.\n- **Operational Rules**: Exempt small businesses do not charge 21% PVN and cannot deduct input VAT on equipment."
    },
    {
      "id": "lv-eds-and-filing-deadlines",
      "title": "Electronic Declaration System (EDS) Submissions & Deadlines",
      "body": "Compliance requirements administered by the State Revenue Service (VID):\n\n- **Mandatory Digital Submissions**: All VAT returns (PVN 1 declaration) and annexes must be transmitted via **VID EDS (Elektroniskās deklarēšanas sistēma)**.\n- **Filing Deadlines**: Monthly returns and tax payments are due on or before the **20th day of the month** following the reporting period.\n- **Filing Frequency**:\n  - Monthly: Mandatory for businesses exceeding €50,000 turnover or carrying out cross-border EU trade.\n  - Quarterly: Taxable persons with annual turnover under €50,000 who do not conduct intra-Community transactions."
    },
    {
      "id": "lv-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Reversais PVN) & Cross-Border B2B Supplies",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Latvian PVN displaying: *\"Apgrieztā PVN maksāšana (Reverse Charge)\"* alongside verified Latvian VAT numbers (LV + 11 digits).\n- **Domestic Reverse Charge**: Enforced under Sections 141–143 of the PVN Law for timber, scrap metal, mobile electronics, and commercial construction services."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Riga (21% PVN)",
    "scenario": "A digital consultancy in Riga delivers €5,000.00 net of custom cloud integration services to a corporate client in Daugavpils. Standard 21% PVN applies.",
    "inputs": {
      "netSoftwareService": "€5,000.00",
      "latvianStandardPvnRate": "21.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€5,000.00 consulting",
        "amount": "€5,000.00",
        "note": "Subject to 21% Latvian PVN"
      },
      {
        "label": "Latvian PVN Output (21%)",
        "formula": "€5,000.00 × 21.00%",
        "amount": "€1,050.00",
        "note": "Output tax liability to VID"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€5,000.00 + €1,050.00",
        "amount": "€6,050.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Latvian VAT, the corporate customer pays €6,050.00 gross, with €1,050.00 in PVN remitted on the vendor’s monthly VID EDS return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €605.00 Retail Receipt",
    "scenario": "A consumer in Liepāja purchases €605.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Latvian PVN component?",
    "inputs": {
      "totalInclusiveAmount": "€605.00",
      "pvnRate": "21.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€605.00 ÷ (1 + 0.21)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Latvian PVN Component",
        "formula": "€605.00 - €500.00",
        "amount": "€105.00",
        "note": "Output PVN liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 21.00%",
        "amount": "€105.00",
        "note": "Reconciles exactly to €605.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €605.00 retail transaction in Latvia, the merchant retains €500.00 net and remits €105.00 in PVN to VID."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (PVN) rate in Latvia?",
      "answer": "The standard VAT rate in Latvia is 21%. Reduced rates of 12% (medicine, medical devices, heating, domestic transit, books, hotels) and 5% (local fresh produce) apply to specific qualifying goods.",
      "sourceUrl": "https://www.vid.gov.lv/"
    },
    {
      "question": "What is the Latvian VAT registration threshold for small businesses?",
      "answer": "The small business VAT registration threshold in Latvia is €50,000 in annual turnover over the preceding 12 months under Section 59 of the PVN Law.",
      "sourceUrl": "https://www.vid.gov.lv/"
    },
    {
      "question": "What is VID EDS in Latvia?",
      "answer": "VID EDS (Elektroniskās deklarēšanas sistēma) is Latvia’s mandatory electronic tax declaration portal. All VAT returns, annexes, and tax payments must be submitted through EDS.",
      "sourceUrl": "https://www.vid.gov.lv/"
    },
    {
      "question": "How is a Latvian VAT number formatted?",
      "answer": "Latvian VAT identification numbers are formatted with the country prefix LV followed by 11 numerical digits (e.g. LV12345678901).",
      "sourceUrl": "https://www.vid.gov.lv/"
    },
    {
      "question": "When are Latvian VAT returns due?",
      "answer": "Monthly VAT returns and tax payments are due on or before the 20th day of the month following the close of the reporting period via the VID EDS portal.",
      "sourceUrl": "https://www.vid.gov.lv/"
    }
  ]
};

export default latviaVatContent;
