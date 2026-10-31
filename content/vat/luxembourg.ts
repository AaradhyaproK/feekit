import type { PageContent } from '../types.ts';

export const luxembourgVatContent: PageContent = {
  "slug": "luxembourg",
  "family": "vat",
  "title": "Luxembourg VAT Calculator (17%, 14%, 8%, 3% TVA) & AED Guide | FeeKit",
  "metaDescription": "Calculate Luxembourg Taxe sur la valeur ajoutée (TVA) with verified AED rates (17% lowest standard in EU, 14%, 8%, 3%). €35k threshold, eCDF, and reverse charge.",
  "h1": "Luxembourg VAT Calculator & Administration de l’enregistrement Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Administration de l'enregistrement, des domaines et de la TVA (AED)",
    "url": "https://pfi.public.lu/",
    "citation": "Loi modifiée du 12 février 1979 concernant la taxe sur la valeur ajoutée (TVA) and eCDF portal rules."
  },
  "overview": "Value Added Tax in the Grand Duchy of Luxembourg—known domestically as Taxe sur la valeur ajoutée or TVA—is governed by the Luxembourg VAT Act of February 12, 1979 and administered by the Registration Duties, Estates and VAT Authority (Administration de l'enregistrement, des domaines et de la TVA - AED). Luxembourg maintains a standard VAT rate of 17%, representing the lowest standard VAT rate in the European Union. Luxembourg features an intermediate rate of 14% (fuel, adult wines, advertising), a reduced rate of 8% (heating energy, cleaning), and a super-reduced rate of 3% (staple foods, pharmaceutical products, books, e-books, children’s clothing, and restaurant dining excluding alcohol). Small businesses with annual turnover under €35,000 qualify for exemption. Tax returns are filed via eCDF.",
  "sections": [
    {
      "id": "lu-statutory-vat-rates-lowest-in-eu",
      "title": "Luxembourg TVA Architecture: The 17% EU-Lowest Standard & Tiered Brackets (14%, 8%, 3%)",
      "body": "Luxembourg enforces four statutory rate brackets under Article 39 of the Luxembourg VAT Law:\n\n1. **Standard Rate (17%)**: Represents the lowest standard general VAT rate across all 27 EU member states. Applies to general consumer goods, electronics, motor vehicles, apparel, and commercial IT and professional consulting services.\n2. **Intermediate Rate (14%)**: Applies to solid mineral fuels, mineral oils, cleaning products, advertising services, and print promotional materials.\n3. **Reduced Rate (8%)**: Applies to gas and electricity supplies for residential use, district heating, and floral supplies.\n4. **Super-Reduced Rate (3%)**: Governed by Article 40. Applies to staple foodstuffs, non-alcoholic restaurant meals, printed and electronic books, newspapers, pharmaceutical drugs, children’s clothing and footwear, and residential property construction/renovations.\n5. **Zero-Rated Supplies (0%)**: Intra-Community B2B deliveries of goods and direct exports outside the EU."
    },
    {
      "id": "lu-small-business-exemption",
      "title": "€35,000 Small Business Exemption (Régime de la franchise de taxe)",
      "body": "Administrative relief under Article 57 of the Luxembourg VAT Law:\n\n- **Turnover Threshold**: Small enterprises and sole traders whose annual pre-tax turnover did not exceed **€35,000** in the preceding calendar year qualify for the small business exemption scheme.\n- **Operational Rules**: Exempt small businesses do not charge 17% TVA on customer invoices and cannot deduct input VAT on equipment.\n- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *\"Régime de franchise de taxe, article 57 de la loi modifiée du 12 février 1979\"*."
    },
    {
      "id": "lu-ecdf-and-filing-deadlines",
      "title": "eCDF Electronic Platform Submissions & Filing Schedules",
      "body": "Compliance requirements administered by the AED:\n\n- **Mandatory Digital Submissions**: All periodic and annual VAT declarations must be transmitted through the **eCDF electronic platform** (plateforme de collecte de données financières).\n- **Filing Deadlines**: Monthly and quarterly returns are due on or before the **15th day of the month** following the reporting period via eCDF.\n- **Filing Frequency**:\n  - Annual: Taxpayers with annual turnover under €112,000.\n  - Quarterly: Businesses with turnover between €112,000 and €620,000.\n  - Monthly: Mandatory for enterprises with annual turnover exceeding €620,000."
    },
    {
      "id": "lu-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Autoliquidation) & Cross-Border B2B Supplies",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Luxembourg TVA displaying: *\"Autoliquidation (Reverse Charge)\"* alongside verified Luxembourg VAT numbers (LU + 8 digits).\n- **Financial Services Center**: Luxembourg serves as Europe’s premier fund management hub; specialized VAT exemptions apply to collective investment management under Article 44."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Luxembourg City (17% TVA)",
    "scenario": "A digital consultancy in Luxembourg City delivers €10,000.00 net of custom cloud integration services to a domestic corporate client in Kirchberg. Standard 17% TVA applies.",
    "inputs": {
      "netSoftwareService": "€10,000.00",
      "luxembourgStandardTvaRate": "17.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€10,000.00 consulting",
        "amount": "€10,000.00",
        "note": "Subject to 17% Luxembourg TVA"
      },
      {
        "label": "Luxembourg TVA Output (17%)",
        "formula": "€10,000.00 × 17.00%",
        "amount": "€1,700.00",
        "note": "Output tax liability to AED"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€10,000.00 + €1,700.00",
        "amount": "€11,700.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Luxembourg’s competitive 17% standard VAT rate, the corporate customer pays €11,700.00 gross, with €1,700.00 in TVA remitted on the vendor’s periodic eCDF return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €585.00 Retail Receipt",
    "scenario": "A consumer in Esch-sur-Alzette purchases €585.00 all-inclusive of retail electronics. What is the net sales revenue and Luxembourg TVA component?",
    "inputs": {
      "totalInclusiveAmount": "€585.00",
      "tvaRate": "17.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€585.00 ÷ (1 + 0.17)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Luxembourg TVA Component",
        "formula": "€585.00 - €500.00",
        "amount": "€85.00",
        "note": "Output TVA liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 17.00%",
        "amount": "€85.00",
        "note": "Reconciles exactly to €585.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €585.00 retail transaction in Luxembourg, the merchant retains €500.00 net and remits €85.00 in TVA to the AED."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (TVA) rate in Luxembourg?",
      "answer": "The standard VAT rate in Luxembourg is 17%, which is the lowest standard VAT rate in the European Union. Tiered rates of 14% (fuels, advertising), 8% (utilities), and 3% (food, books, children’s clothes) apply to specific goods.",
      "sourceUrl": "https://pfi.public.lu/"
    },
    {
      "question": "What is the Luxembourg VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Luxembourg is €35,000 in annual pre-tax turnover under Article 57 of the Luxembourg VAT Law.",
      "sourceUrl": "https://pfi.public.lu/"
    },
    {
      "question": "What is the eCDF system in Luxembourg?",
      "answer": "eCDF is Luxembourg’s centralized electronic platform used for submitting periodic and annual VAT declarations, financial statements, and VIES recapitulative statements to the AED.",
      "sourceUrl": "https://pfi.public.lu/"
    },
    {
      "question": "How is a Luxembourg VAT number formatted?",
      "answer": "Luxembourg VAT identification numbers (numéro d’identification TVA) are formatted with the country prefix LU followed by 8 numerical digits (e.g. LU12345678).",
      "sourceUrl": "https://pfi.public.lu/"
    },
    {
      "question": "When are Luxembourg VAT returns due?",
      "answer": "Periodic VAT declarations are due on or before the 15th day of the month following the close of the reporting period via the eCDF electronic portal.",
      "sourceUrl": "https://pfi.public.lu/"
    }
  ]
};

export default luxembourgVatContent;
