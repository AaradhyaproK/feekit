import type { PageContent } from '../types.ts';

export const greeceVatContent: PageContent = {
  "slug": "greece",
  "family": "vat",
  "title": "Greece VAT Calculator (24%, 13%, 6% FPA) & AADE Guide | FeeKit",
  "metaDescription": "Calculate Greek Foros Prostithemenis Axias (FPA / ΦΠΑ) with verified AADE rates (24% standard, 13% food, 6% medicine). €10k threshold, myDATA e-books, and island discounts.",
  "h1": "Greece VAT Calculator & Independent Authority for Public Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Independent Authority for Public Revenue (AADE)",
    "url": "https://www.aade.gr/",
    "citation": "Greek VAT Code (Law 2859/2000) and Law 4646/2019 (myDATA Digital Books)."
  },
  "overview": "Value Added Tax in Greece—known domestically as Foros Prostithemenis Axias (FPA or ΦΠΑ)—is governed by the Greek VAT Code (Law 2859/2000) and administered by the Independent Authority for Public Revenue (AADE / ΑΑΔΕ). Greece enforces a standard VAT rate of 24% across general commercial goods and services, alongside reduced rates of 13% (staple grocery foods, restaurant dining, hotel accommodations, energy) and 6% (pharmaceuticals, medical supplies, books, theatrical admissions). Specific remote Aegean islands benefit from a statutory 30% VAT rate reduction (resulting in a 17% standard rate). Small businesses with annual turnover under €10,000 qualify for exemption. All commercial invoices must be synchronized in real time with AADE’s digital book platform (myDATA).",
  "sections": [
    {
      "id": "gr-statutory-vat-rates-and-islands",
      "title": "Greek FPA Architecture: Standard (24%), Reduced (13% & 6%), and Island Reductions",
      "body": "Greece enforces three primary statutory tax brackets under Article 21 of the VAT Code:\n\n1. **Standard Rate (24%)**: Applies to general merchandise, consumer electronics, passenger vehicles, clothing, alcoholic beverages, and commercial professional consulting.\n2. **First Reduced Rate (13%)**: Applies to staple grocery foods (meat, fish, milk, bread, produce), restaurant dining and catering, hotel and tourism lodging, public passenger transport, and residential electricity.\n3. **Second Reduced Rate (6%)**: Applies to prescription medicines, vaccines, printed books, newspapers, and theatrical tickets.\n4. **Aegean Island Surtax Reduction (17%)**: Designated Aegean border islands (Leros, Lesbos, Kos, Samos, Chios) qualify for a statutory 30% reduction on all VAT brackets, yielding rates of **17%** (standard), **9%** (reduced), and **4%** (super-reduced)."
    },
    {
      "id": "gr-small-business-exemption",
      "title": "€10,000 Small Business Exemption (Special Scheme for Small Enterprises)",
      "body": "Administrative relief under Article 39 of the Greek VAT Code:\n\n- **Revenue Ceiling**: Micro-enterprises and freelancers whose annual gross sales turnover did not exceed **€10,000** in the preceding tax year can elect exemption from VAT.\n- **Operational Rules**: Exempt small businesses do not charge 24% FPA on customer invoices and cannot claim input VAT refunds on business purchases.\n- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *\"Χωρίς Φ.Π.Α. - απαλλαγή μικρών επιχειρήσεων άρθρο 39 ν. 2859/2000\"* (Exempt from VAT under Article 39)."
    },
    {
      "id": "gr-mydata-realtime-invoicing",
      "title": "Mandatory myDATA Electronic Bookkeeping & Invoicing Mandates",
      "body": "AADE enforces aggressive digital tax transparency under Law 4646/2019:\n\n- **myDATA Platform (my Digital Accounting and Tax Application)**: All businesses operating in Greece must record and transmit revenue invoices electronically to the central myDATA platform in real time.\n- **MARK Number**: Every validated commercial invoice receives a unique Electronic Registry Number (MARK) from AADE and an embedded QR code validating transmission authenticity.\n- **Discrepancy Matching**: AADE automatically cross-checks supplier revenue transmissions against customer expense deductions to detect VAT fraud."
    },
    {
      "id": "gr-reverse-charge-and-filing",
      "title": "Reverse Charge and Filing Frequencies via TAXISnet",
      "body": "Compliance requirements administered by AADE:\n\n- **B2B Reverse Charge**: Cross-border services provided to registered EU corporate clients are invoiced net without Greek FPA displaying: *\"Αντίστροφη επιβάρυνση (Reverse Charge)\"* alongside Greek VAT numbers (EL + 9 digits).\n- **Filing Schedules**:\n  - Quarterly: Businesses operating under single-entry accounting (simplified books). Due on the **last business day of the month** following the quarter.\n  - Monthly: Businesses operating under double-entry accounting (corporations). Due on the **last business day of the following month**."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Athens (24% FPA)",
    "scenario": "A digital consultancy in Athens delivers a €5,000.00 net cloud software implementation project to a domestic corporate client in Thessaloniki. Standard 24% FPA applies.",
    "inputs": {
      "netSoftwareService": "€5,000.00",
      "greekStandardFpaRate": "24.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€5,000.00 consulting",
        "amount": "€5,000.00",
        "note": "Subject to 24% Greek FPA"
      },
      {
        "label": "Greek FPA Output (24%)",
        "formula": "€5,000.00 × 24.00%",
        "amount": "€1,200.00",
        "note": "Output tax liability to AADE"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€5,000.00 + €1,200.00",
        "amount": "€6,200.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Greek VAT, the corporate customer pays €6,200.00 gross, with €1,200.00 remitted on the vendor’s periodic TAXISnet VAT return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €620.00 Retail Receipt",
    "scenario": "A consumer in Heraklion purchases €620.00 all-inclusive of retail electronics. What is the net sales revenue and Greek FPA component?",
    "inputs": {
      "totalInclusiveAmount": "€620.00",
      "fpaRate": "24.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€620.00 ÷ (1 + 0.24)",
        "amount": "€500.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Greek FPA Component",
        "formula": "€620.00 - €500.00",
        "amount": "€120.00",
        "note": "Output FPA liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€500.00 × 24.00%",
        "amount": "€120.00",
        "note": "Reconciles exactly to €620.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €620.00 retail transaction in Greece, the merchant retains €500.00 net and remits €120.00 in FPA to AADE."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (FPA) rate in Greece?",
      "answer": "The standard VAT rate in Greece is 24%. Reduced rates of 13% (food, restaurant dining, hotels) and 6% (medicine, books, theater) apply to specific goods. Certain Aegean islands qualify for a 17% rate.",
      "sourceUrl": "https://www.aade.gr/"
    },
    {
      "question": "What is the Greek VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Greece is €10,000 in annual turnover under Article 39 of the Greek VAT Code.",
      "sourceUrl": "https://www.aade.gr/"
    },
    {
      "question": "What is the AADE myDATA platform in Greece?",
      "answer": "myDATA is Greece’s mandatory digital bookkeeping platform. All businesses must synchronize commercial revenue invoices in real time with AADE to receive an electronic MARK validation number.",
      "sourceUrl": "https://www.aade.gr/"
    },
    {
      "question": "How is a Greek VAT number formatted?",
      "answer": "Greek VAT numbers (AFM) are formatted with the country prefix EL followed by 9 numerical digits (e.g. EL123456789). Note that EL is used internationally, while AFM is used domestically.",
      "sourceUrl": "https://www.aade.gr/"
    },
    {
      "question": "When are Greek VAT returns due?",
      "answer": "VAT returns are submitted electronically via TAXISnet on the last business day of the month following the reporting period (quarterly for simplified single-entry books, monthly for double-entry).",
      "sourceUrl": "https://www.aade.gr/"
    }
  ]
};

export default greeceVatContent;
