import type { PageContent } from '../types.ts';

export const austriaVatContent: PageContent = {
  "slug": "austria",
  "family": "vat",
  "title": "Austria VAT Calculator (20%, 10%, 13% USt.) & BMF Guide | FeeKit",
  "metaDescription": "Calculate Austrian Umsatzsteuer (USt. / MwSt.) with verified BMF rates (20% standard, 10% food/rent, 13% cultural). €35k Kleinunternehmer, FinanzOnline, and reverse charge.",
  "h1": "Austria VAT Calculator & Bundesministerium für Finanzen Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Bundesministerium für Finanzen (BMF)",
    "url": "https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html",
    "citation": "Umsatzsteuergesetz 1994 (UStG 1994) § 10, § 6 Abs. 1 Z 27 (Kleinunternehmer), and § 19 (Reverse Charge)."
  },
  "overview": "Value Added Tax in Austria—known domestically as Umsatzsteuer (USt.) or Mehrwertsteuer (MwSt.)—is governed by the Austrian VAT Act (Umsatzsteuergesetz 1994 - UStG 1994) and administered by the Federal Ministry of Finance (Bundesministerium für Finanzen - BMF). Austria applies a standard VAT rate of 20% across commercial commerce, alongside reduced rates of 10% (staple foods, residential rent, books, public transport) and 13% (cultural events, domestic flights, wine production, hotel accommodation). Freelancers and micro-enterprises with net annual revenue under €35,000 qualify for exemption under the Austrian Kleinunternehmerregelung. Tax returns are filed electronically via FinanzOnline.",
  "sections": [
    {
      "id": "at-statutory-vat-rates",
      "title": "Austrian VAT Rate Architecture: Standard (20%), Reduced (10% & 13%), and Exempt Supplies",
      "body": "Austrian tax law enforces three statutory rate brackets under § 10 UStG 1994:\n\n1. **Standard Rate (Normalsteuersatz — 20%)**: Codified in § 10 Abs. 1. Applies to the broad majority of commercial merchandise, consumer electronics, motor vehicles, apparel, and commercial IT and professional consulting services.\n2. **First Reduced Rate (10%)**: Codified in § 10 Abs. 2. Applies to basic foodstuffs, water supplies, printed books and periodicals, residential apartment leasing, passenger transport, and pharmaceuticals.\n3. **Second Reduced Rate (13%)**: Codified in § 10 Abs. 3. Enacted under tax reform legislation, applying to hotel and tourism accommodations, cultural entrance admissions (theaters, museums, zoos), domestic air passenger transport, live animals, plants, and farm wine sales.\n4. **Special Enclave Rate (19%)**: Jungholz and Mittelberg apply a specialized 19% rate matching German MwSt. due to geographic customs isolation."
    },
    {
      "id": "at-small-business-exemption",
      "title": "€35,000 Small Business Exemption: Kleinunternehmerregelung (§ 6 Abs. 1 Z 27 UStG)",
      "body": "Austria provides statutory relief for freelancers and sole proprietors:\n\n- **Revenue Threshold**: Businesses whose annual net turnover does not exceed **€35,000** in a calendar year qualify for the small business exemption. Under Austrian law, this is evaluated on net revenue, allowing up to **€42,000 gross** equivalent. A single tolerance overshoot of up to 15% once every four years is permitted.\n- **Operational Rules**: Exempt Kleinunternehmer do not charge 20% USt. on invoices and cannot claim input tax deduction (Vorsteuerabzug) on equipment purchases.\n- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *\"Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung gemäß § 6 Abs. 1 Z 27 UStG\"* (Tax-exempt pursuant to the small business regulation)."
    },
    {
      "id": "at-reverse-charge-and-eu-b2b",
      "title": "The § 19 UStG Reverse Charge & Cross-Border EU Supplies",
      "body": "Cross-border commercial trade and specialized domestic sectors:\n\n- **The § 19 UStG Reverse Charge (Übergang der Steuerschuld)**: Applied to cross-border B2B digital services and construction work. The Austrian vendor issues a net invoice without Austrian USt. displaying both parties' VAT numbers (ATU + 8 digits) and stating: *\"Steuerschuldnerschaft des Leistungsempfängers (Reverse Charge)\"*.\n- **One-Stop Shop (OSS)**: Austrian e-commerce sellers shipping consumer goods across EU borders exceeding the unified €10,000 EU threshold declare foreign VAT via the Austrian BMF OSS portal."
    },
    {
      "id": "at-filing-deadlines-and-finanzonline",
      "title": "USt-Voranmeldung (U30) Deadlines and FinanzOnline Compliance",
      "body": "Compliance requirements administered by the Austrian Tax Office (Finanzamt Österreich):\n\n- **Filing Deadlines (USt-Voranmeldung - Form U30)**: Advance returns and payments are due on the **15th day of the second month** following the reporting period (e.g., January tax is due March 15).\n- **Filing Frequency**:\n  - Quarterly: Businesses with previous year turnover between €35,000 and €100,000.\n  - Monthly: Mandatory for businesses exceeding €100,000 annual turnover.\n- **Mandatory Digital Filing**: All VAT returns and summary statements must be transmitted via **FinanzOnline**, Austria’s federal electronic tax platform."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Consulting Project in Vienna (20% USt.)",
    "scenario": "A management consultancy in Vienna delivers a €10,000.00 net organizational strategy project to a domestic Austrian corporate client. Standard 20% Umsatzsteuer applies.",
    "inputs": {
      "netConsultingFee": "€10,000.00",
      "austrianStandardVatRate": "20.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€10,000.00 consulting",
        "amount": "€10,000.00",
        "note": "Subject to 20% Austrian USt."
      },
      {
        "label": "Austrian USt. Output (20%)",
        "formula": "€10,000.00 × 20.00%",
        "amount": "€2,000.00",
        "note": "Output tax liability to BMF"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€10,000.00 + €2,000.00",
        "amount": "€12,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Austrian VAT, the corporate customer pays €12,000.00 gross, with €2,000.00 remitted on the consultant’s periodic U30 return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €600.00 Retail Receipt",
    "scenario": "A consumer in Salzburg purchases €600.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Austrian VAT component?",
    "inputs": {
      "totalInclusiveAmount": "€600.00",
      "ustRate": "20.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€600.00 ÷ (1 + 0.20)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Austrian USt. Component",
        "formula": "€600.00 - €500.00",
        "amount": "€100.00",
        "note": "Output USt. liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 20.00%",
        "amount": "€100.00",
        "note": "Reconciles exactly to €600.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €600.00 retail transaction in Austria, the merchant retains €500.00 net and remits €100.00 in VAT to the tax office."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (USt.) rate in Austria?",
      "answer": "The standard VAT rate in Austria is 20%. Reduced rates of 10% (staple foods, books, residential rent) and 13% (hotel lodging, cultural admissions, domestic flights) apply to qualifying supplies.",
      "sourceUrl": "https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html"
    },
    {
      "question": "What is the Austrian Kleinunternehmer threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Austria is €35,000 in net annual turnover (€42,000 gross). Businesses below this threshold do not charge VAT on invoices.",
      "sourceUrl": "https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html"
    },
    {
      "question": "How is an Austrian VAT number formatted?",
      "answer": "Austrian VAT identification numbers (UID-Nummer) are formatted with the country prefix AT followed by the letter U and 8 numerical digits (e.g. ATU12345678).",
      "sourceUrl": "https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html"
    },
    {
      "question": "When are Austrian advance VAT returns (USt-Voranmeldung) due?",
      "answer": "Advance returns (Form U30) and payments are due on the 15th day of the second month following the reporting period via FinanzOnline (e.g. Q1 due May 15).",
      "sourceUrl": "https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html"
    },
    {
      "question": "How does the B2B reverse charge work in Austria?",
      "answer": "Under § 19 UStG, cross-border B2B digital services and construction services shift the VAT liability to the business recipient, who self-assesses the tax on their domestic return.",
      "sourceUrl": "https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html"
    }
  ]
};

export default austriaVatContent;
