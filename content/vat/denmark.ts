import type { PageContent } from '../types.ts';

export const denmarkVatContent: PageContent = {
  "slug": "denmark",
  "family": "vat",
  "title": "Denmark VAT Calculator (25% Moms Flat Rate) & Skat Guide | FeeKit",
  "metaDescription": "Calculate Danish Merværdiafgift (Moms) with verified Skattestyrelsen rates (25% uniform flat rate). DKK 50,000 threshold, TastSelv Erhverv filing, and zero reduced rate.",
  "h1": "Denmark VAT Calculator & Skattestyrelsen Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Skattestyrelsen",
    "url": "https://skat.dk/erhverv/moms",
    "citation": "Momsloven (Lovbekendtgørelse nr. 1021 af 26. september 2019) and Skattestyrelsen Guidelines."
  },
  "overview": "Value Added Tax in Denmark—known domestically as Merværdiafgift or Moms—is governed by the Danish VAT Act (Momsloven) and administered by the Danish Tax Agency (Skattestyrelsen). Denmark is unique among European Union member states for enforcing a single, uniform standard VAT rate of 25% with zero statutory reduced rates. Every commercial transaction—from staple grocery foods and restaurant dining to luxury automobiles and enterprise SaaS—is subject to the identical 25% Moms rate. Businesses with annual taxable turnover exceeding DKK 50,000 must register for VAT. VAT declarations are submitted electronically via Skat’s digital portal (TastSelv Erhverv).",
  "sections": [
    {
      "id": "dk-uniform-flat-rate-policy",
      "title": "Denmark’s Single 25% Flat Rate: Zero Reduced Rates Across All Sectors",
      "body": "Unlike most EU jurisdictions that provide 5% to 10% reduced brackets for essentials, Denmark maintains complete rate uniformity:\n\n- **Uniform Standard Rate**: **25%**. Codified in Section 33 of Momsloven. Applies to groceries, bread, milk, clothing, restaurant dining, books, hotel accommodations, electronics, SaaS software, and commercial consulting.\n- **Zero-Rated Supplies (0% Moms)**: Codified in Section 34. Applies strictly to newspapers published at least once weekly, international passenger transport, intra-Community B2B deliveries of goods to registered EU businesses, and exports outside the EU.\n- **Statutory Exemptions (Momsfritaget)**: Codified in Section 13. Healthcare, dental treatments, primary and higher education, financial and banking transactions, insurance, and long-term residential real estate leasing are exempt from VAT."
    },
    {
      "id": "dk-small-business-threshold",
      "title": "DKK 50,000 Registration Threshold (Momsregistreringsgrænse)",
      "body": "Denmark enforces a strict, low registration ceiling under Section 48 of Momsloven:\n\n- **Threshold Level**: Any business or self-employed sole proprietorship (enkeltmandsvirksomhed) whose annual turnover exceeds **DKK 50,000** within any rolling 12-month period must register for Moms.\n- **Proactive Registration Requirement**: A business must register as soon as it anticipates exceeding DKK 50,000. Failure to register triggers retroactive tax assessments and interest penalties.\n- **Zero Input Tax for Non-Registered Entities**: Unregistered micro-businesses under DKK 50,000 cannot add Moms to invoices and cannot reclaim input Moms paid on purchases."
    },
    {
      "id": "dk-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Omvendt betalingspligt) & EU B2B Trade",
      "body": "Compliance mechanisms administered under EU directives:\n\n- **EU Cross-Border B2B Supplies**: When a Danish company delivers digital services or SaaS to a business client in another EU member state, the invoice is issued net without Danish Moms displaying the note: *\"Omvendt betalingspligt (Reverse Charge)\"* alongside both parties' VAT/CVR numbers (DK + 8 digits).\n- **Domestic Reverse Charge**: Enforced in high-risk sectors under Section 46 of Momsloven, including commercial scrap metal, gold, and mobile phone/tablet wholesale trade."
    },
    {
      "id": "dk-tastselv-filing-and-deadlines",
      "title": "TastSelv Erhverv Filing Deadlines and Frequencies",
      "body": "VAT reporting rules enforced by Skattestyrelsen:\n\n- **Filing Schedules**:\n  - **Semi-Annual (Halvårlig)**: Default for newly registered businesses and SMEs with annual turnover under DKK 5 million. Due on March 1 and September 1.\n  - **Quarterly (Kvartalsvis)**: Businesses with turnover between DKK 5M and 50M. Due on March 1, June 1, September 1, and December 1.\n  - **Monthly (Månedlig)**: Mandatory for large enterprises with annual turnover exceeding DKK 50 million. Due on the **25th day of the following month**.\n- **Electronic Submissions**: All VAT declarations must be submitted via **TastSelv Erhverv** with payment executed via PBS / Nets direct debit or online banking."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Software Implementation in Copenhagen (25% Moms)",
    "scenario": "A software engineering firm in Copenhagen delivers DKK 20,000.00 net of custom web architecture services to a corporate client in Aarhus. Standard 25% Moms applies.",
    "inputs": {
      "netSoftwareService": "DKK 20,000.00",
      "danishMomsRate": "25.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "DKK 20,000.00 consulting",
        "amount": "DKK 20,000.00",
        "note": "Subject to 25% Danish Moms"
      },
      {
        "label": "Danish Moms Output (25%)",
        "formula": "DKK 20,000.00 × 25.00%",
        "amount": "DKK 5,000.00",
        "note": "Output tax liability to Skattestyrelsen"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "DKK 20,000.00 + DKK 5,000.00",
        "amount": "DKK 25,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Denmark’s uniform 25% flat rate, the Aarhus client pays DKK 25,000.00 gross, with DKK 5,000.00 remitted on the vendor’s periodic TastSelv return."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a DKK 1,000.00 Retail Receipt",
    "scenario": "A consumer in Odense purchases DKK 1,000.00 all-inclusive of retail groceries or clothing. What is the net sales revenue and Moms component?",
    "inputs": {
      "totalInclusiveAmount": "DKK 1,000.00",
      "momsRate": "25.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "DKK 1,000.00 ÷ (1 + 0.25)",
        "amount": "DKK 800.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Danish Moms Component",
        "formula": "DKK 1,000.00 - DKK 800.00",
        "amount": "DKK 200.00",
        "note": "Output Moms liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "DKK 800.00 × 25.00%",
        "amount": "DKK 200.00",
        "note": "Reconciles exactly to DKK 1,000.00 total"
      }
    ],
    "takeaway": "From an all-inclusive DKK 1,000.00 retail transaction in Denmark, the merchant retains DKK 800.00 net and owes DKK 200.00 in Moms to Skat."
  },
  "faqs": [
    {
      "question": "What is the VAT rate in Denmark?",
      "answer": "Denmark has a single uniform VAT (Moms) rate of 25%. Unlike other EU countries, Denmark does not have any reduced VAT rates for food, restaurants, or books.",
      "sourceUrl": "https://skat.dk/erhverv/moms"
    },
    {
      "question": "What is the Danish VAT registration threshold?",
      "answer": "The VAT registration threshold in Denmark is DKK 50,000 in annual turnover within any rolling 12-month period under Section 48 of Momsloven.",
      "sourceUrl": "https://skat.dk/erhverv/moms"
    },
    {
      "question": "How is a Danish VAT number formatted?",
      "answer": "Danish VAT numbers are identical to the business CVR number, formatted with the country code DK followed by 8 digits (e.g. DK12345678).",
      "sourceUrl": "https://skat.dk/erhverv/moms"
    },
    {
      "question": "Are groceries subject to reduced VAT in Denmark?",
      "answer": "No. Denmark is the only EU country where staple groceries, fresh produce, meat, and dairy are fully taxed at the standard 25% VAT rate.",
      "sourceUrl": "https://skat.dk/erhverv/moms"
    },
    {
      "question": "When are Danish VAT returns due?",
      "answer": "Quarterly VAT returns are due on the 1st day of the third month following the quarter via TastSelv Erhverv (e.g. Q1 due June 1).",
      "sourceUrl": "https://skat.dk/erhverv/moms"
    }
  ]
};

export default denmarkVatContent;
