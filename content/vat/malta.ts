import type { PageContent } from '../types.ts';

export const maltaVatContent: PageContent = {
  "slug": "malta",
  "family": "vat",
  "title": "Malta VAT Calculator (18%, 7%, 5% VAT) & CfR Guide | FeeKit",
  "metaDescription": "Calculate Maltese Value Added Tax with verified Commissioner for Revenue rates (18% standard, 7% hotel, 5% electricity, 0% food/medicine). Article 11 threshold and CfR portal.",
  "h1": "Malta VAT Calculator & Commissioner for Revenue Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Commissioner for Revenue (CfR)",
    "url": "https://cfr.gov.mt/en/taxes/vat/",
    "citation": "Value Added Tax Act (Chapter 406 of the Laws of Malta) and CfR Guidelines."
  },
  "overview": "Value Added Tax in Malta—known officially as Value Added Tax or VAT—is governed by the Maltese Value Added Tax Act (Chapter 406 of the Laws of Malta) and administered by the Commissioner for Revenue (CfR). Malta applies a standard VAT rate of 18% on commercial merchandise and professional services, alongside reduced rates of 7% (hotel accommodations and licensed tourist lodging), 5% (residential electricity, printed and electronic books, medical accessories), and a statutory 0% zero-rate for staple groceries and prescription pharmaceuticals. Small businesses with annual turnover under €30,000 (services) or €35,000 (goods) qualify for Article 11 Small Undertakings exemption. VAT declarations are submitted via CfR’s online portal.",
  "sections": [
    {
      "id": "mt-statutory-vat-rates",
      "title": "Maltese VAT Rate Architecture: Standard (18%), Reduced (7% & 5%), and Zero Rate",
      "body": "Malta enforces four statutory rate brackets under the Value Added Tax Act:\n\n1. **Standard Rate (18%)**: Governed by Section 19. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant meals, commercial software, and professional consulting services.\n2. **First Reduced Rate (7%)**: Applies to holiday accommodation in hotels, guesthouses, and tourist holiday premises, and the letting of sites for camping.\n3. **Second Reduced Rate (5%)**: Applies to residential electricity supplies, printed and electronic books, newspapers, medical equipment for disabled persons, and minor repair services.\n4. **Zero-Rated Supplies (0%)**: Under Part One of the Fifth Schedule, staple foods for human consumption (bread, milk, meat, fresh produce) and human prescription pharmaceuticals are zero-rated (0% VAT with full input deduction)."
    },
    {
      "id": "mt-small-business-threshold",
      "title": "Article 11 Small Undertakings Exemption (€30,000 / €35,000 Threshold)",
      "body": "Administrative relief under Article 11 of the Maltese VAT Act:\n\n- **Turnover Ceilings**:\n  - **€30,000**: For businesses primarily providing services with relatively low value added.\n  - **€35,000**: For economic activities consisting primarily in the supply of goods.\n- **Operational Rules**: Registered Article 11 small undertakings do not charge 18% VAT on customer invoices, do not submit quarterly VAT returns, and cannot claim input tax deductions on equipment.\n- **Article 10 vs Article 11 Registration**: Businesses operating above the threshold register under Article 10 as standard taxable persons."
    },
    {
      "id": "mt-cfr-and-filing-deadlines",
      "title": "Commissioner for Revenue (CfR) Online Portal Submissions & Deadlines",
      "body": "Compliance requirements administered by the Commissioner for Revenue (CfR):\n\n- **Filing Deadlines**: Standard quarterly VAT returns and payments are due on or before the **15th day of the second month** following the end of the quarterly tax period (extended to the 22nd day for electronic filers submitting via the CfR online services portal).\n- **Quarterly Cadence**: Article 10 registered businesses file on a standard quarterly staggering cycle assigned by the CfR.\n- **Mandatory Electronic Submissions**: Submissions and electronic bank payments are executed via the **CfR Online Tax Portal**."
    },
    {
      "id": "mt-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge & Cross-Border EU Supplies",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Maltese VAT displaying: *\"Reverse Charge\"* alongside verified Maltese VAT numbers (MT + 8 digits).\n- **International Corporate Hub**: Malta hosts extensive remote gaming, maritime shipping, and aviation holding entities operating under specialized international VAT exemption frameworks."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Valletta (18% VAT)",
    "scenario": "A digital consultancy in Valletta delivers €5,000.00 net of custom software engineering services to a corporate client in Sliema. Standard 18% VAT applies.",
    "inputs": {
      "netSoftwareService": "€5,000.00",
      "malteseStandardVatRate": "18.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€5,000.00 consulting",
        "amount": "€5,000.00",
        "note": "Subject to 18% Maltese VAT"
      },
      {
        "label": "Maltese VAT Output (18%)",
        "formula": "€5,000.00 × 18.00%",
        "amount": "€900.00",
        "note": "Output tax liability to CfR"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€5,000.00 + €900.00",
        "amount": "€5,900.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Maltese VAT, the corporate customer pays €5,900.00 gross, with €900.00 in VAT remitted on the vendor’s quarterly CfR tax return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €590.00 Retail Receipt",
    "scenario": "A consumer in St. Julian’s purchases €590.00 all-inclusive of retail electronics. What is the net sales revenue and Maltese VAT component?",
    "inputs": {
      "totalInclusiveAmount": "€590.00",
      "vatRate": "18.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€590.00 ÷ (1 + 0.18)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Maltese VAT Component",
        "formula": "€590.00 - €500.00",
        "amount": "€90.00",
        "note": "Output VAT liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 18.00%",
        "amount": "€90.00",
        "note": "Reconciles exactly to €590.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €590.00 retail transaction in Malta, the merchant retains €500.00 net and remits €90.00 in VAT to the Commissioner for Revenue."
  },
  "faqs": [
    {
      "question": "What is the standard VAT rate in Malta?",
      "answer": "The standard VAT rate in Malta is 18%. Reduced rates of 7% (hotel accommodation), 5% (electricity, books, medical devices), and 0% (groceries, prescription drugs) apply to specific qualifying supplies.",
      "sourceUrl": "https://cfr.gov.mt/en/taxes/vat/"
    },
    {
      "question": "What is the Maltese Article 11 Small Undertakings threshold?",
      "answer": "The small business VAT exemption threshold in Malta is €30,000 for service providers and €35,000 for economic activities consisting primarily of the supply of goods under Article 11 of the VAT Act.",
      "sourceUrl": "https://cfr.gov.mt/en/taxes/vat/"
    },
    {
      "question": "Are groceries subject to VAT in Malta?",
      "answer": "No. Staple groceries, fresh produce, bread, milk, and human pharmaceuticals are zero-rated (0% VAT) under Part One of the Fifth Schedule to the Maltese VAT Act.",
      "sourceUrl": "https://cfr.gov.mt/en/taxes/vat/"
    },
    {
      "question": "How is a Maltese VAT number formatted?",
      "answer": "Maltese VAT identification numbers are formatted with the country prefix MT followed by 8 numerical digits (e.g. MT12345678).",
      "sourceUrl": "https://cfr.gov.mt/en/taxes/vat/"
    },
    {
      "question": "When are Maltese VAT returns due?",
      "answer": "Quarterly VAT returns are due on the 15th day of the second month following the end of the tax period (or the 22nd day for electronic filers via the CfR portal).",
      "sourceUrl": "https://cfr.gov.mt/en/taxes/vat/"
    }
  ]
};

export default maltaVatContent;
