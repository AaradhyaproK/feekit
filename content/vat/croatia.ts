import type { PageContent } from '../types.ts';

export const croatiaVatContent: PageContent = {
  "slug": "croatia",
  "family": "vat",
  "title": "Croatia VAT Calculator (25%, 13%, 5% PDV) & Porezna uprava Guide | FeeKit",
  "metaDescription": "Calculate Croatian Porez na dodanu vrijednost (PDV) with verified rates (25% standard, 13% dining/hotel, 5% bread/milk). €40k threshold, Fiskalizacija, and reverse charge.",
  "h1": "Croatia VAT Calculator & Porezna uprava Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Porezna uprava",
    "url": "https://www.porezna-uprava.hr/",
    "citation": "Zakon o porezu na dodanu vrijednost (NN br. 73/13 do 114/23) and Zakon o fiskalizaciji."
  },
  "overview": "Value Added Tax in Croatia—known domestically as Porez na dodanu vrijednost or PDV—is governed by the Croatian VAT Act (Zakon o PDV-u) and administered by the Tax Administration (Porezna uprava). Following full adoption of the Euro (€) on January 1, 2023, Croatia enforces a standard VAT rate of 25%, alongside reduced rates of 13% (prepared restaurant food, hotel accommodations, electricity, water utility) and 5% (staple bread, milk, pharmaceuticals, books). Small businesses with annual turnover under €40,000 qualify for exemption. Croatia enforces mandatory real-time electronic cash register fiscalization (Fiskalizacija).",
  "sections": [
    {
      "id": "hr-statutory-vat-rates",
      "title": "Croatian PDV Architecture: Standard (25%), Reduced (13% & 5%), and Zero Rate",
      "body": "Croatia enforces three statutory rate brackets under Article 38 of Zakon o PDV-u:\n\n1. **Standard Rate (25%)**: Applies to general merchandise, consumer electronics, passenger vehicles, apparel, alcohol, and commercial IT and professional consulting services.\n2. **First Reduced Rate (13%)**: Applies to restaurant dining, hotel and tourist accommodation, residential electricity, public water utility, garbage collection, and menstrual hygiene products.\n3. **Second Reduced Rate (5%)**: Applies to staple bread and milk, baby formula, prescription pharmaceuticals, medical implants, printed books, e-books, and daily newspapers.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B deliveries of goods and direct exports outside the European Union."
    },
    {
      "id": "hr-small-business-threshold",
      "title": "€40,000 Small Business Exemption (Mali porezni obveznik)",
      "body": "Administrative relief under Article 90 of Zakon o PDV-u:\n\n- **Revenue Threshold**: Businesses and self-employed professionals whose annual turnover does not exceed **€40,000** in the preceding or current calendar year are exempt from registering for PDV.\n- **Operational Rules**: Exempt small taxpayers (mali porezni obveznici) do not charge 25% PDV on customer invoices and cannot deduct input VAT on equipment.\n- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *\"Oslobođeno plaćanja PDV-a temeljem članka 90. stavka 2. Zakona o PDV-u\"* (Exempt from PDV under Article 90)."
    },
    {
      "id": "hr-fiskalizacija-and-eporezna",
      "title": "Mandatory Real-Time Fiscalization (Fiskalizacija) & ePorezna Submissions",
      "body": "Anti-fraud reporting procedures administered by Porezna uprava:\n\n- **Fiskalizacija Mandate**: All retail point-of-sale cash and card transactions must be certified by Porezna uprava in real time via an encrypted web service, returning a unique JIR code (Jedinstveni identifikator računa) and ZKI security code printed on every customer receipt.\n- **Filing Deadlines (Obrazac PDV)**: VAT returns and tax payments are due on or before the **20th day of the month** following the reporting period via the **ePorezna** portal.\n- **Filing Frequency**:\n  - Quarterly: SMEs with previous year turnover under €110,000.\n  - Monthly: Mandatory for businesses exceeding €110,000 annual turnover."
    },
    {
      "id": "hr-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Prijenos porezne obveze) & Cross-Border B2B",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Croatian PDV displaying: *\"Prijenos porezne obveze (Reverse Charge)\"* alongside verified OIB numbers (HR + 11 digits).\n- **Domestic Reverse Charge**: Enforced under Article 75 for commercial construction services and scrap metal trade."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Zagreb (25% PDV)",
    "scenario": "A digital consultancy in Zagreb delivers €8,000.00 net of custom cloud integration services to a corporate client in Split. Standard 25% PDV applies.",
    "inputs": {
      "netSoftwareService": "€8,000.00",
      "croatianStandardPdvRate": "25.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€8,000.00 consulting",
        "amount": "€8,000.00",
        "note": "Subject to 25% Croatian PDV"
      },
      {
        "label": "Croatian PDV Output (25%)",
        "formula": "€8,000.00 × 25.00%",
        "amount": "€2,000.00",
        "note": "Output tax liability to Porezna uprava"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€8,000.00 + €2,000.00",
        "amount": "€10,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Croatian VAT, the corporate customer pays €10,000.00 gross, with €2,000.00 remitted on the vendor’s periodic ePorezna VAT return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €1,250.00 Retail Receipt",
    "scenario": "A consumer in Rijeka purchases €1,250.00 all-inclusive of retail electronics. What is the net sales revenue and Croatian PDV component?",
    "inputs": {
      "totalInclusiveAmount": "€1,250.00",
      "pdvRate": "25.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€1,250.00 ÷ (1 + 0.25)",
        "amount": "€1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Croatian PDV Component",
        "formula": "€1,250.00 - €1,000.00",
        "amount": "€250.00",
        "note": "Output PDV liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€1,000.00 × 25.00%",
        "amount": "€250.00",
        "note": "Reconciles exactly to €1,250.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €1,250.00 retail transaction in Croatia, the merchant retains €1,000.00 net and remits €250.00 in PDV to the tax office."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (PDV) rate in Croatia?",
      "answer": "The standard VAT rate in Croatia is 25%. Reduced rates of 13% (restaurant dining, hotel lodging, utilities) and 5% (bread, milk, medicine, books) apply to specific qualifying supplies.",
      "sourceUrl": "https://www.porezna-uprava.hr/"
    },
    {
      "question": "What is the Croatian VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Croatia is €40,000 in annual turnover under Article 90 of Zakon o PDV-u.",
      "sourceUrl": "https://www.porezna-uprava.hr/"
    },
    {
      "question": "What is Fiskalizacija in Croatia?",
      "answer": "Fiskalizacija is Croatia’s mandatory real-time electronic cash register system. Invoices are authenticated via web service with Porezna uprava, returning a unique JIR code printed on the receipt.",
      "sourceUrl": "https://www.porezna-uprava.hr/"
    },
    {
      "question": "How is a Croatian VAT number formatted?",
      "answer": "Croatian VAT numbers are formatted with the country prefix HR followed by the 11-digit Personal Identification Number (OIB) (e.g. HR12345678901).",
      "sourceUrl": "https://www.porezna-uprava.hr/"
    },
    {
      "question": "When are Croatian VAT returns due?",
      "answer": "Periodic VAT returns (Obrazac PDV) and tax payments are due on or before the 20th day of the month following the close of the reporting period via the ePorezna digital portal.",
      "sourceUrl": "https://www.porezna-uprava.hr/"
    }
  ]
};

export default croatiaVatContent;
