import type { PageContent } from '../types.ts';

export const finlandVatContent: PageContent = {
  "slug": "finland",
  "family": "vat",
  "title": "Finland VAT Calculator (25.5%, 14%, 10% ALV) & Verohallinto Guide | FeeKit",
  "metaDescription": "Calculate Finnish Arvonlisävero (ALV) with official Verohallinto rates (25.5% standard enacted Sept 2024, 14% food, 10% books). €20k threshold and OmaVero filing.",
  "h1": "Finland VAT Calculator & Verohallinto Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Verohallinto",
    "url": "https://www.vero.fi/en/businesses/taxes-and-charges/vat/",
    "citation": "Arvonlisäverolaki (1501/1993) and 2024 VAT Rate Reform Act (HE 61/2024 vp)."
  },
  "overview": "Value Added Tax in Finland—known domestically as Arvonlisävero or ALV—is governed by the Finnish VAT Act (Arvonlisäverolaki) and administered by the Finnish Tax Administration (Verohallinto). Under landmark fiscal consolidation legislation effective September 1, 2024, Finland raised its standard VAT rate from 24.0% to 25.5%, ranking as the second-highest standard rate in the European Union. Finland applies reduced rates of 14% (groceries, restaurant meals, animal feed) and 10% (books, pharmaceuticals, public transport, cultural admissions, hotel lodging). The small business threshold is €20,000 annually. Tax returns are filed electronically via Verohallinto’s digital portal (OmaVero).",
  "sections": [
    {
      "id": "fi-statutory-vat-rates-2024",
      "title": "Finnish ALV Rates: The September 2024 Standard Increase to 25.5% & Reduced Rates",
      "body": "Finland enforces three primary statutory tax brackets under Arvonlisäverolaki:\n\n1. **Standard Rate (25.5%)**: Enacted under Government Proposal HE 61/2024 vp, increasing the baseline rate from 24.0% to **25.5% effective September 1, 2024**. Applies to the vast majority of consumer goods, vehicles, industrial machinery, electronics, adult apparel, and commercial IT and consulting services.\n2. **First Reduced Rate (14%)**: Governed by Section 85a. Applies to food and groceries for human consumption, restaurant dining and catering, and animal feed. Excludes alcohol, tobacco, and live animals.\n3. **Second Reduced Rate (10%)**: Governed by Section 85a. Applies to books and e-books, pharmaceuticals, public passenger transport, cultural events, sports facilities, cinema admissions, and hotel accommodation.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international maritime vessels, and exports outside the EU."
    },
    {
      "id": "fi-small-business-threshold",
      "title": "€20,000 Small Business Exemption (Vähäisen toiminnan raja)",
      "body": "Finland provides administrative relief for micro-enterprises under Section 3 of Arvonlisäverolaki:\n\n- **Turnover Threshold**: Sole proprietors and businesses with annual taxable turnover not exceeding **€20,000** (increased from €15,000) are exempt from VAT registration.\n- **Phase-Out of Tax Relief (Alarajahuojennus)**: Under EU Directive 2020/285 reforms, Finland abolished its historical sliding-scale tax relief (alarajahuojennus) for businesses earning between €15,000 and €30,000. From 2025 onwards, businesses above €20,000 pay full VAT with zero partial relief.\n- **Operational Rules**: Exempt businesses do not charge 25.5% ALV and cannot deduct input VAT on equipment."
    },
    {
      "id": "fi-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Käännetty verovelvollisuus) & Cross-Border B2B Trade",
      "body": "Compliance mechanisms administered under EU directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services and consulting delivered to registered business clients in another EU member state are invoiced net without Finnish ALV displaying the note: *\"Käännetty verovelvollisuus (Reverse Charge)\"* and both parties' VAT IDs (FI + 8 digits).\n- **Domestic Construction Reverse Charge**: Applied to commercial construction services under Section 8c of Arvonlisäverolaki, shifting tax liability to the purchasing building contractor."
    },
    {
      "id": "fi-filing-frequencies-and-omavero",
      "title": "OmaVero Filing Deadlines and Electronic Compliance",
      "body": "Tax compliance requirements administered by Verohallinto:\n\n- **Filing Deadlines**: Monthly VAT returns and payments are due on the **12th day of the second month** following the reporting period (e.g., January tax is due March 12).\n- **Filing Frequencies**:\n  - Annual: Micro-enterprises with turnover under €30,000.\n  - Quarterly: SMEs with turnover between €30,000 and €100,000.\n  - Monthly: Mandatory for businesses with annual turnover exceeding €100,000.\n- **Mandatory Digital Submissions**: All returns must be transmitted electronically through **OmaVero (MyTax)**."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise IT Consulting in Helsinki (25.5% ALV)",
    "scenario": "A Finnish technology consultancy in Helsinki delivers €8,000.00 net of custom software engineering services to a domestic corporate client in Espoo. Standard 25.5% ALV applies.",
    "inputs": {
      "netSoftwareService": "€8,000.00",
      "finnishStandardAlvRate": "25.50%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€8,000.00 consulting",
        "amount": "€8,000.00",
        "note": "Subject to 25.5% Finnish ALV"
      },
      {
        "label": "Finnish ALV Output (25.5%)",
        "formula": "€8,000.00 × 25.50%",
        "amount": "€2,040.00",
        "note": "Output tax liability to Verohallinto"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€8,000.00 + €2,040.00",
        "amount": "€10,040.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Finland’s 25.5% standard VAT rate, the corporate client pays €10,040.00 gross, with €2,040.00 in ALV remitted on the consultant’s periodic OmaVero return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €1,255.00 Retail Receipt",
    "scenario": "A consumer in Tampere purchases €1,255.00 all-inclusive of retail electronics. What is the net sales revenue and Finnish ALV component?",
    "inputs": {
      "totalInclusiveAmount": "€1,255.00",
      "alvRate": "25.50%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€1,255.00 ÷ (1 + 0.255)",
        "amount": "€1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Finnish ALV Component",
        "formula": "€1,255.00 - €1,000.00",
        "amount": "€255.00",
        "note": "Output ALV liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€1,000.00 × 25.50%",
        "amount": "€255.00",
        "note": "Reconciles exactly to €1,255.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €1,255.00 retail transaction in Finland, the merchant retains €1,000.00 net and remits €255.00 in ALV to Verohallinto."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (ALV) rate in Finland?",
      "answer": "The standard VAT rate in Finland is 25.5%, which took effect on September 1, 2024 (increased from 24.0%). Reduced rates of 14% (food, restaurant meals) and 10% (books, medicine, hotels) apply to specific goods.",
      "sourceUrl": "https://www.vero.fi/en/businesses/taxes-and-charges/vat/"
    },
    {
      "question": "What is the Finnish VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Finland is €20,000 in annual turnover under Section 3 of Arvonlisäverolaki.",
      "sourceUrl": "https://www.vero.fi/en/businesses/taxes-and-charges/vat/"
    },
    {
      "question": "How is a Finnish VAT number formatted?",
      "answer": "Finnish VAT identification numbers are formatted with the country prefix FI followed by 8 numerical digits (e.g. FI12345678).",
      "sourceUrl": "https://www.vero.fi/en/businesses/taxes-and-charges/vat/"
    },
    {
      "question": "When are Finnish VAT returns due?",
      "answer": "Monthly VAT returns and tax payments are due on the 12th day of the second month following the reporting period via OmaVero (e.g. Q1 return due May 12).",
      "sourceUrl": "https://www.vero.fi/en/businesses/taxes-and-charges/vat/"
    },
    {
      "question": "What happened to the Finnish small business tax relief (alarajahuojennus)?",
      "answer": "The sliding-scale small business tax relief (alarajahuojennus) was abolished in Finland effective 2025 to comply with EU VAT Directive harmonizations.",
      "sourceUrl": "https://www.vero.fi/en/businesses/taxes-and-charges/vat/"
    }
  ]
};

export default finlandVatContent;
