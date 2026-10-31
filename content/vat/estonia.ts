import type { PageContent } from '../types.ts';

export const estoniaVatContent: PageContent = {
  "slug": "estonia",
  "family": "vat",
  "title": "Estonia VAT Calculator (22%, 9%, 5% KM) & e-MTA Guide | FeeKit",
  "metaDescription": "Calculate Estonian Käibemaks (KM) with verified Maksu- ja Tolliamet rates (22% standard enacted 2024, 9% accommodation, 5% press). €40k threshold and e-Residency filing.",
  "h1": "Estonia VAT Calculator & Maksu- ja Tolliamet Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Maksu- ja Tolliamet (MTA)",
    "url": "https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks",
    "citation": "Käibemaksuseadus (KMS) and 2024 VAT Amendment Act (RT I, 01.07.2023, 2)."
  },
  "overview": "Value Added Tax in Estonia—known domestically as Käibemaks or KM—is governed by the Estonian Value Added Tax Act (Käibemaksuseadus - KMS) and administered by the Estonian Tax and Customs Board (Maksu- ja Tolliamet - MTA). Under statutory tax reforms effective January 1, 2024, Estonia increased its standard VAT rate from 20% to 22%. Estonia applies reduced rates of 9% (hotel and tourist accommodation, printed and electronic books, pharmaceuticals) and 5% (press publications). The small business threshold is €40,000 annually. As the world pioneer in digital government and e-Residency, 100% of Estonian VAT declarations are submitted electronically via e-MTA.",
  "sections": [
    {
      "id": "ee-statutory-vat-rates-2024",
      "title": "Estonian Käibemaks Rates: The 2024 Standard Increase to 22% & Reduced Brackets",
      "body": "Estonia enforces three statutory rate brackets under Section 15 of Käibemaksuseadus:\n\n1. **Standard Rate (22%)**: Effective **January 1, 2024**, increasing the general rate from 20% to **22%** under the 2023 Amendment Act. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant meals, and commercial IT and professional consulting services.\n2. **First Reduced Rate (9%)**: Governed by Section 15, Subsection 2. Applies to accommodation services, books and learning materials (both physical and electronic), pharmaceuticals, and medical devices. Note: Accommodation rate rises to 13% effective 2025 under enacted reforms.\n3. **Second Reduced Rate (5%)**: Governed by Section 15, Subsection 2^1. Applies to physical and digital press publications (periodicals, newspapers, magazines), excluding publications consisting predominantly of advertising or pornography.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international transport, and direct export deliveries outside the EU."
    },
    {
      "id": "ee-small-business-threshold",
      "title": "€40,000 Registration Threshold (Käibemaksukohustuslaseks registreerimine)",
      "body": "Administrative relief under Section 19 of Käibemaksuseadus:\n\n- **Turnover Threshold**: A business or sole proprietor (FIE) whose taxable turnover exceeds **€40,000** from the beginning of a calendar year must register as a VAT payer.\n- **Mandatory Filing Deadline**: The application for registration must be submitted to Maksu- ja Tolliamet within 3 working days from the date on which the threshold was exceeded.\n- **Operational Rules**: Exempt small businesses do not charge 22% KM and cannot deduct input VAT on equipment."
    },
    {
      "id": "ee-emta-and-digital-filing",
      "title": "100% Digital e-MTA Filing & Form KMD Submissions",
      "body": "Digital tax administration administered by Maksu- ja Tolliamet:\n\n- **e-Residency & Digital ID**: Estonian company founders and e-Residents authenticate using their digital identity cards (or Smart-ID / Mobile-ID) to manage VAT filings from anywhere in the world.\n- **Filing Deadlines (Form KMD & INF)**: VAT returns (Vorm KMD) and the Annex of Invoices (KMD INF, listing B2B invoices exceeding €1,000) are due on or before the **20th day of the month** following the reporting period via **e-MTA**.\n- **Unified Monthly Cadence**: All registered taxpayers file monthly returns; quarterly filing is not used in Estonia."
    },
    {
      "id": "ee-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Pöördmaksustamine) & Cross-Border B2B Supplies",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Estonian KM displaying: *\"Pöördmaksustamine (Reverse Charge)\"* alongside verified Estonian VAT numbers (EE + 9 digits).\n- **Domestic Reverse Charge**: Enforced under Section 41^1 of KMS for commercial real estate, scrap metal, precious metals, and investment gold."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Tallinn (22% KM)",
    "scenario": "A digital consultancy in Tallinn delivers €5,000.00 net of custom cloud software services to a corporate client in Tartu. Standard 22% KM applies.",
    "inputs": {
      "netSoftwareService": "€5,000.00",
      "estonianStandardKmRate": "22.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€5,000.00 consulting",
        "amount": "€5,000.00",
        "note": "Subject to 22% Estonian KM"
      },
      {
        "label": "Estonian KM Output (22%)",
        "formula": "€5,000.00 × 22.00%",
        "amount": "€1,100.00",
        "note": "Output tax liability to e-MTA"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€5,000.00 + €1,100.00",
        "amount": "€6,100.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Estonia’s 22% standard VAT rate, the corporate customer pays €6,100.00 gross, with €1,100.00 in KM remitted on the vendor’s monthly Form KMD return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €610.00 Retail Receipt",
    "scenario": "A consumer in Pärnu purchases €610.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Estonian KM component?",
    "inputs": {
      "totalInclusiveAmount": "€610.00",
      "kmRate": "22.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€610.00 ÷ (1 + 0.22)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Estonian KM Component",
        "formula": "€610.00 - €500.00",
        "amount": "€110.00",
        "note": "Output KM liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 22.00%",
        "amount": "€110.00",
        "note": "Reconciles exactly to €610.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €610.00 retail transaction in Estonia, the merchant retains €500.00 net and remits €110.00 in KM to Maksu- ja Tolliamet."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (KM) rate in Estonia?",
      "answer": "The standard VAT rate in Estonia is 22%, which took effect on January 1, 2024 (increased from 20%). Reduced rates of 9% (accommodation, books, medicine) and 5% (press publications) apply to specific goods.",
      "sourceUrl": "https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks"
    },
    {
      "question": "What is the Estonian VAT registration threshold for small businesses?",
      "answer": "The VAT registration threshold in Estonia is €40,000 in taxable turnover from the beginning of a calendar year under Section 19 of Käibemaksuseadus.",
      "sourceUrl": "https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks"
    },
    {
      "question": "Can e-Residents file Estonian VAT returns online?",
      "answer": "Yes. 100% of Estonian VAT returns (Form KMD) are filed digitally through the e-MTA electronic portal using Estonian digital ID cards, Smart-ID, or Mobile-ID.",
      "sourceUrl": "https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks"
    },
    {
      "question": "How is an Estonian VAT number formatted?",
      "answer": "Estonian VAT identification numbers (KMKR number) are formatted with the country prefix EE followed by 9 numerical digits (e.g. EE123456789).",
      "sourceUrl": "https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks"
    },
    {
      "question": "When are Estonian VAT returns due?",
      "answer": "VAT declarations (Form KMD) and the Annex of Invoices (KMD INF) are due on or before the 20th day of the month following the reporting period via e-MTA.",
      "sourceUrl": "https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks"
    }
  ]
};

export default estoniaVatContent;
