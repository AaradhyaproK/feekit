import type { PageContent } from '../types.ts';

export const czechRepublicVatContent: PageContent = {
  "slug": "czech-republic",
  "family": "vat",
  "title": "Czech Republic VAT Calculator (21% & 12% DPH) & Finanční správa Guide | FeeKit",
  "metaDescription": "Calculate Czech Daň z přidané hodnoty (DPH) with verified rates (21% standard, 12% unified reduced rate enacted 2024). CZK 2M threshold, Kontrolní hlášení, and reverse charge.",
  "h1": "Czech Republic VAT Calculator & Finanční správa Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Finanční správa",
    "url": "https://www.financnisprava.cz/",
    "citation": "Zákon č. 235/2004 Sb., o dani z přidané hodnoty (DPH) and 2024 Consolidation Package (Zákon č. 349/2023 Sb.)."
  },
  "overview": "Value Added Tax in the Czech Republic—known domestically as Daň z přidané hodnoty or DPH—is governed by the Czech VAT Act (Zákon o DPH č. 235/2004 Sb.) and administered by the Financial Administration (Finanční správa). Under the major 2024 Consolidation Package (Zákon č. 349/2023 Sb.), the Czech Republic reformed its tax structure by consolidating its previous two reduced rates (10% and 15%) into a single, unified reduced rate of 12%, while preserving the standard rate at 21%. Printed books are completely zero-rated (0%). The small business registration threshold is CZK 2,000,000 annually. Taxpayers must submit monthly VAT returns and the mandatory VAT Control Statement (Kontrolní hlášení) by the 25th.",
  "sections": [
    {
      "id": "cz-statutory-vat-rates-2024",
      "title": "Czech DPH Architecture: Standard (21%), Unified Reduced (12%), and Zero-Rated Books",
      "body": "The Czech Republic operates across three statutory tax brackets under Section 47 of Zákon o DPH:\n\n1. **Standard Rate (Základní sazba — 21%)**: Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant beer, and commercial IT and professional consulting.\n2. **Unified Reduced Rate (Snížená sazba — 12%)**: Effective January 1, 2024, merging the former 10% and 15% brackets. Applies to basic foodstuffs, restaurant meals (food only), tap water, pharmaceutical products, medical equipment, residential construction, and hotel accommodations.\n3. **Zero Rate (0%)**: Following 2024 reforms, printed and electronic books are fully zero-rated (0%). Cross-border intra-Community B2B deliveries of goods and exports outside the EU are also zero-rated.\n4. **Tax-Exempt Supplies**: Financial and banking services, insurance, healthcare, and educational services."
    },
    {
      "id": "cz-small-business-threshold",
      "title": "CZK 2,000,000 Registration Threshold (Registrační limit pro DPH)",
      "body": "Administrative relief under Section 6 of Zákon o DPH:\n\n- **Revenue Threshold**: A business or sole proprietor (OSVČ) whose turnover exceeds **CZK 2,000,000** in any 12 consecutive calendar months must register as a VAT payer.\n- **Voluntary Flat-Rate Tax (Paušální daň)**: Non-VAT registered sole traders earning under CZK 2 million can elect the Czech simplified flat-rate tax regime combining income tax, social security, and health insurance into a single monthly payment.\n- **Mandatory Filing Trigger**: Once the CZK 2,000,000 threshold is breached, the business must file an application for registration within 15 days following the month of breach."
    },
    {
      "id": "cz-control-statement-and-filing",
      "title": "Mandatory VAT Control Statement (Kontrolní hlášení) & Electronic Filing",
      "body": "Anti-fraud reporting procedures administered by Finanční správa:\n\n- **VAT Control Statement (Kontrolní hlášení)**: All registered VAT payers must submit a detailed transaction-level Control Statement pairing supplier and buyer invoice numbers to prevent carousel fraud. Legal entities file monthly; natural persons file according to their VAT return frequency.\n- **Filing Deadlines**: VAT returns (DPH přiznání) and Control Statements are due on or before the **25th day of the month** following the reporting period via the **Moje daně** portal.\n- **Severe Penalties**: Failure to respond to a Control Statement discrepancy call within 5 working days triggers automatic statutory fines starting at CZK 1,000 up to CZK 50,000."
    },
    {
      "id": "cz-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Režim přenesení daňové povinnosti) & Cross-Border B2B",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU business clients are invoiced net without Czech DPH displaying: *\"Daň odvede zákazník (Reverse Charge)\"* alongside verified DIČ numbers (CZ + 8, 9, or 10 digits).\n- **Domestic Reverse Charge**: Enforced under Sections 92a–92g for scrap metal, construction work, and high-value wholesale electronics."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise IT Infrastructure in Prague (21% DPH)",
    "scenario": "A technology consultancy in Prague delivers CZK 100,000.00 net of custom cloud architecture services to a corporate client in Brno. Standard 21% DPH applies.",
    "inputs": {
      "netConsultingService": "CZK 100,000.00",
      "czechStandardDphRate": "21.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "CZK 100,000.00 consulting",
        "amount": "CZK 100,000.00",
        "note": "Subject to 21% Czech DPH"
      },
      {
        "label": "Czech DPH Output (21%)",
        "formula": "CZK 100,000.00 × 21.00%",
        "amount": "CZK 21,000.00",
        "note": "Output tax liability to Finanční správa"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "CZK 100,000.00 + CZK 21,000.00",
        "amount": "CZK 121,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Czech VAT, the corporate customer pays CZK 121,000.00 gross, with CZK 21,000.00 remitted on the vendor’s monthly Moje daně return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a CZK 1,210.00 Retail Receipt",
    "scenario": "A consumer in Ostrava purchases CZK 1,210.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Czech DPH component?",
    "inputs": {
      "totalInclusiveAmount": "CZK 1,210.00",
      "dphRate": "21.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "CZK 1,210.00 ÷ (1 + 0.21)",
        "amount": "CZK 1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Czech DPH Component",
        "formula": "CZK 1,210.00 - CZK 1,000.00",
        "amount": "CZK 210.00",
        "note": "Output DPH liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "CZK 1,000.00 × 21.00%",
        "amount": "CZK 210.00",
        "note": "Reconciles exactly to CZK 1,210.00 total"
      }
    ],
    "takeaway": "From an all-inclusive CZK 1,210.00 retail transaction in the Czech Republic, the merchant retains CZK 1,000.00 net and remits CZK 210.00 in DPH to the state."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (DPH) rate in the Czech Republic?",
      "answer": "The standard VAT rate in the Czech Republic is 21%. Following 2024 tax reforms, a single unified reduced rate of 12% applies to food, pharmaceuticals, and hotels, while books are 0%.",
      "sourceUrl": "https://www.financnisprava.cz/"
    },
    {
      "question": "What is the Czech VAT registration threshold for small businesses?",
      "answer": "The VAT registration threshold in the Czech Republic is CZK 2,000,000 in turnover over any 12 consecutive calendar months under Section 6 of Zákon o DPH.",
      "sourceUrl": "https://www.financnisprava.cz/"
    },
    {
      "question": "What is the Czech VAT Control Statement (Kontrolní hlášení)?",
      "answer": "The Control Statement is a mandatory electronic report submitted alongside the VAT return that lists individual invoice numbers to detect tax evasion and cross-check transaction data.",
      "sourceUrl": "https://www.financnisprava.cz/"
    },
    {
      "question": "How is a Czech VAT number formatted?",
      "answer": "Czech VAT identification numbers (DIČ) are formatted with the prefix CZ followed by 8, 9, or 10 digits (often matching the legal entity’s IČO or individual’s birth number).",
      "sourceUrl": "https://www.financnisprava.cz/"
    },
    {
      "question": "When are Czech VAT returns due?",
      "answer": "VAT returns and Control Statements are due on or before the 25th day of the month following the end of the reporting period via the Moje daně electronic portal.",
      "sourceUrl": "https://www.financnisprava.cz/"
    }
  ]
};

export default czechRepublicVatContent;
