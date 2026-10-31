import type { PageContent } from '../types.ts';

export const slovakiaVatContent: PageContent = {
  "slug": "slovakia",
  "family": "vat",
  "title": "Slovakia VAT Calculator (20%, 10%, 5% DPH) & Finančná správa Guide | FeeKit",
  "metaDescription": "Calculate Slovak Daň z pridanej hodnoty (DPH) with verified Finančná správa rates (20% standard, 10% food/pharma, 5% housing). €50k threshold, e-Kasa, and reverse charge.",
  "h1": "Slovakia VAT Calculator & Finančná správa Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Finančná správa SR",
    "url": "https://www.financnasprava.sk/",
    "citation": "Zákon č. 222/2004 Z. z. o dani z pridanej hodnoty (DPH) and e-Kasa Act."
  },
  "overview": "Value Added Tax in Slovakia—known domestically as Daň z pridanej hodnoty or DPH—is governed by the Slovak VAT Act (Zákon č. 222/2004 Z. z.) and administered by the Financial Administration of the Slovak Republic (Finančná správa SR). Slovakia enforces a standard VAT rate of 20% on general goods and professional services, alongside reduced rates of 10% (staple foodstuffs, pharmaceuticals, medical aids, printed books) and 5% (social housing supplies). The small business registration threshold is €50,000 over 12 consecutive calendar months. All retail transactions must be recorded through online fiscal cash registers (e-Kasa), and periodic tax filings are submitted electronically.",
  "sections": [
    {
      "id": "sk-statutory-vat-rates",
      "title": "Slovak DPH Rate Architecture: Standard (20%), Reduced (10% & 5%), and Zero Rate",
      "body": "Slovakia enforces three statutory tax brackets under Section 27 of Zákon o DPH:\n\n1. **Standard Rate (20%)**: Applies to general merchandise, consumer electronics, passenger vehicles, apparel, alcohol, restaurant beer, and commercial IT and professional consulting services.\n2. **First Reduced Rate (10%)**: Applies to basic food items (fresh meat, milk, butter, fresh bread), pharmaceuticals, prescription eyeglasses, medical equipment, and printed books.\n3. **Second Reduced Rate (5%)**: Applies to state-supported social housing construction and materials.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods to registered EU businesses and direct exports outside the EU."
    },
    {
      "id": "sk-small-business-threshold",
      "title": "€50,000 Registration Threshold (Registračná povinnosť)",
      "body": "Administrative relief under Section 4 of Zákon o DPH:\n\n- **Revenue Threshold**: A taxable person with business seat or permanent address in Slovakia whose turnover reaches **€50,000** for at most 12 preceding consecutive calendar months must file an application for VAT registration.\n- **Registration Deadline**: The application must be filed with the tax authority by the **20th day of the calendar month** following the month in which the turnover threshold was breached.\n- **Operational Rules**: Exempt small businesses do not charge 20% DPH and cannot deduct input VAT on equipment."
    },
    {
      "id": "sk-e-kasa-and-control-statement",
      "title": "Mandatory e-Kasa Online Registers & VAT Control Statement (Kontrolný výkaz)",
      "body": "Anti-fraud compliance measures enforced by Finančná správa:\n\n- **e-Kasa System**: All cash and electronic card retail transactions must be transmitted in real time to the central Finančná správa database via certified e-Kasa fiscal cash register hardware.\n- **VAT Control Statement (Kontrolný výkaz DPH)**: Mandatory electronic report submitted alongside the VAT return, pairing individual B2B invoice numbers, tax bases, and partner VAT IDs.\n- **Filing Deadlines**: VAT returns (Daňové priznanie k DPH) and Control Statements are due on or before the **25th day of the month** following the reporting period via the Finančná správa portal."
    },
    {
      "id": "sk-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Prenesenie daňovej povinnosti) & Cross-Border B2B",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Slovak DPH displaying: *\"Prenesenie daňovej povinnosti (Reverse Charge)\"* alongside verified IČ DPH numbers (SK + 10 digits).\n- **Domestic Reverse Charge**: Enforced under Section 69 for construction work, metal scrap, and high-value agricultural supplies."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Software Implementation in Bratislava (20% DPH)",
    "scenario": "A digital consultancy in Bratislava delivers €5,000.00 net of custom cloud integration services to a corporate client in Košice. Standard 20% DPH applies.",
    "inputs": {
      "netSoftwareService": "€5,000.00",
      "slovakStandardDphRate": "20.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€5,000.00 consulting",
        "amount": "€5,000.00",
        "note": "Subject to 20% Slovak DPH"
      },
      {
        "label": "Slovak DPH Output (20%)",
        "formula": "€5,000.00 × 20.00%",
        "amount": "€1,000.00",
        "note": "Output tax liability to Finančná správa"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€5,000.00 + €1,000.00",
        "amount": "€6,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Slovak VAT, the corporate customer pays €6,000.00 gross, with €1,000.00 in DPH remitted on the vendor’s monthly tax return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €600.00 Retail Receipt",
    "scenario": "A consumer in Žilina purchases €600.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Slovak DPH component?",
    "inputs": {
      "totalInclusiveAmount": "€600.00",
      "dphRate": "20.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€600.00 ÷ (1 + 0.20)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Slovak DPH Component",
        "formula": "€600.00 - €500.00",
        "amount": "€100.00",
        "note": "Output DPH liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 20.00%",
        "amount": "€100.00",
        "note": "Reconciles exactly to €600.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €600.00 retail transaction in Slovakia, the merchant retains €500.00 net and remits €100.00 in DPH to the state."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (DPH) rate in Slovakia?",
      "answer": "The standard VAT rate in Slovakia is 20%. Reduced rates of 10% (staple foods, medicine, books) and 5% (social housing) apply to specific qualifying supplies.",
      "sourceUrl": "https://www.financnasprava.sk/"
    },
    {
      "question": "What is the Slovak VAT registration threshold for small businesses?",
      "answer": "The VAT registration threshold in Slovakia is €50,000 in turnover over any 12 consecutive calendar months under Section 4 of Zákon o DPH.",
      "sourceUrl": "https://www.financnasprava.sk/"
    },
    {
      "question": "What is the Slovak e-Kasa system?",
      "answer": "e-Kasa is Slovakia’s mandatory online fiscal cash register system. All cash and electronic retail transactions must be transmitted in real time to the tax authority database.",
      "sourceUrl": "https://www.financnasprava.sk/"
    },
    {
      "question": "How is a Slovak VAT number formatted?",
      "answer": "Slovak VAT identification numbers (IČ DPH) are formatted with the country prefix SK followed by 10 numerical digits (e.g. SK1234567890).",
      "sourceUrl": "https://www.financnasprava.sk/"
    },
    {
      "question": "When are Slovak VAT returns due?",
      "answer": "VAT returns and Control Statements are due on or before the 25th day of the month following the reporting period via the Finančná správa electronic portal.",
      "sourceUrl": "https://www.financnasprava.sk/"
    }
  ]
};

export default slovakiaVatContent;
