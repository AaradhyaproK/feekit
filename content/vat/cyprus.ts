import type { PageContent } from '../types.ts';

export const cyprusVatContent: PageContent = {
  "slug": "cyprus",
  "family": "vat",
  "title": "Cyprus VAT Calculator (19%, 9%, 5%, 3% FPA) & Tax Dept Guide | FeeKit",
  "metaDescription": "Calculate Cypriot Foros Prostithemenis Axias (FPA / ΦΠΑ) with verified Tax Department rates (19% standard, 9% dining, 5% food, 3% books). €15.6k threshold and Taxisnet filing.",
  "h1": "Cyprus VAT Calculator & Tax Department Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Cyprus Tax Department",
    "url": "https://www.mof.gov.cy/tax",
    "citation": "The Value Added Tax Law of 2000 (Law 95(I)/2000) and Taxisnet regulations."
  },
  "overview": "Value Added Tax in Cyprus—known domestically as Foros Prostithemenis Axias (FPA or ΦΠΑ)—is governed by the Cyprus Value Added Tax Law of 2000 (Law 95(I)/2000) and administered by the Tax Department (Τμήμα Φορολογίας) of the Ministry of Finance. Cyprus applies a competitive standard VAT rate of 19% across commercial goods and professional services, alongside reduced rates of 9% (restaurant dining, hotel accommodation, domestic passenger transport), 5% (staple foodstuffs, pharmaceuticals, residential property acquisition under conditions), and a 3% super-reduced rate (printed and electronic books, theater tickets). Small businesses with annual taxable turnover exceeding €15,600 must register for VAT. VAT returns are submitted electronically via Taxisnet.",
  "sections": [
    {
      "id": "cy-statutory-vat-rates",
      "title": "Cypriot FPA Rate Architecture: Standard (19%), Reduced (9%, 5%, 3%), and Zero Rate",
      "body": "Cyprus enforces four statutory rate brackets under the Value Added Tax Law:\n\n1. **Standard Rate (19%)**: Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, commercial software, and professional consulting services.\n2. **First Reduced Rate (9%)**: Applies to restaurant dining, catering services, hotel and tourist accommodations, and domestic passenger transport (taxis, buses).\n3. **Second Reduced Rate (5%)**: Applies to basic food supplies, confectionery, pharmaceuticals, medical equipment, and the supply/construction of primary residential dwellings (up to statutory surface limits).\n4. **Super-Reduced Rate (3%)**: Enacted under recent harmonizations, applying to books, newspapers, cultural admissions, and special orthopaedic appliances.\n5. **Zero-Rated Supplies (0%)**: Intra-Community supplies of goods and exports outside the European Union."
    },
    {
      "id": "cy-small-business-threshold",
      "title": "€15,600 Registration Threshold (Υποχρέωση Εγγραφής)",
      "body": "Administrative relief under Schedule 1 of the Cyprus VAT Law:\n\n- **Turnover Threshold**: Any business or individual whose taxable turnover of goods and services exceeds **€15,600** in any preceding 12-month period, or is expected to exceed €15,600 in the next 30 days, must register for VAT.\n- **Voluntary Registration**: Small enterprises below €15,600 can voluntarily register if carrying out commercial transactions and seeking input tax deductions.\n- **Operational Rules**: Exempt businesses do not charge 19% FPA and cannot deduct input VAT on equipment."
    },
    {
      "id": "cy-taxisnet-and-filing-deadlines",
      "title": "Taxisnet Submissions & Quarterly Filing Schedules",
      "body": "Compliance requirements administered by the Cyprus Tax Department:\n\n- **Filing Deadlines**: VAT declarations (Form VAT 100) and tax payments are due on or before the **10th day of the second month** following the end of the VAT period (e.g., period ending March 31 is due May 10).\n- **Quarterly Cadence**: Registered businesses are allocated into one of three quarterly staggering cycles by the Tax Department.\n- **Mandatory Digital Filing**: All returns must be transmitted electronically through **Taxisnet Cyprus** with payments executed via the **Tax Portal** or Internet Banking."
    },
    {
      "id": "cy-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Αντίστροφη Χρέωση) & Cross-Border B2B Supplies",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Cypriot FPA displaying: *\"Αντίστροφη Χρέωση (Reverse Charge)\"* alongside verified Cypriot VAT numbers (CY + 8 digits + 1 letter).\n- **Domestic Construction Reverse Charge**: Enforced under Article 11B of the VAT Law for commercial construction and demolition services."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Nicosia (19% FPA)",
    "scenario": "A digital consultancy in Nicosia delivers €5,000.00 net of custom cloud integration services to a corporate client in Limassol. Standard 19% FPA applies.",
    "inputs": {
      "netSoftwareService": "€5,000.00",
      "cypriotStandardFpaRate": "19.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€5,000.00 consulting",
        "amount": "€5,000.00",
        "note": "Subject to 19% Cypriot FPA"
      },
      {
        "label": "Cypriot FPA Output (19%)",
        "formula": "€5,000.00 × 19.00%",
        "amount": "€950.00",
        "note": "Output tax liability to Tax Department"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€5,000.00 + €950.00",
        "amount": "€5,950.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Cypriot VAT, the corporate customer pays €5,950.00 gross, with €950.00 in FPA remitted on the vendor’s quarterly Taxisnet return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €595.00 Retail Receipt",
    "scenario": "A consumer in Larnaca purchases €595.00 all-inclusive of retail electronics. What is the net sales revenue and Cypriot FPA component?",
    "inputs": {
      "totalInclusiveAmount": "€595.00",
      "fpaRate": "19.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€595.00 ÷ (1 + 0.19)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Cypriot FPA Component",
        "formula": "€595.00 - €500.00",
        "amount": "€95.00",
        "note": "Output FPA liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 19.00%",
        "amount": "€95.00",
        "note": "Reconciles exactly to €595.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €595.00 retail transaction in Cyprus, the merchant retains €500.00 net and remits €95.00 in FPA to the Tax Department."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (FPA) rate in Cyprus?",
      "answer": "The standard VAT rate in Cyprus is 19%. Reduced rates of 9% (restaurants, hotels, domestic transport), 5% (basic food, medicine, residential housing), and 3% (books, culture) apply to qualifying supplies.",
      "sourceUrl": "https://www.mof.gov.cy/tax"
    },
    {
      "question": "What is the Cyprus VAT registration threshold for small businesses?",
      "answer": "The VAT registration threshold in Cyprus is €15,600 in annual taxable turnover within any rolling 12-month period under Schedule 1 of the VAT Law.",
      "sourceUrl": "https://www.mof.gov.cy/tax"
    },
    {
      "question": "What is the Taxisnet system in Cyprus?",
      "answer": "Taxisnet is Cyprus’s mandatory digital tax portal used for the electronic filing of quarterly VAT returns (Form VAT 100) and VIES summary statements.",
      "sourceUrl": "https://www.mof.gov.cy/tax"
    },
    {
      "question": "How is a Cypriot VAT number formatted?",
      "answer": "Cyprus VAT numbers are formatted with the country prefix CY followed by 8 numerical digits and 1 check letter (e.g. CY12345678X).",
      "sourceUrl": "https://www.mof.gov.cy/tax"
    },
    {
      "question": "When are Cyprus VAT returns due?",
      "answer": "VAT returns and tax payments are due on or before the 10th day of the second month following the end of the quarterly VAT period via Taxisnet (e.g. Q1 due May 10).",
      "sourceUrl": "https://www.mof.gov.cy/tax"
    }
  ]
};

export default cyprusVatContent;
