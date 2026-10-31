import type { PageContent } from '../types.ts';

export const bulgariaVatContent: PageContent = {
  "slug": "bulgaria",
  "family": "vat",
  "title": "Bulgaria VAT Calculator (20% & 9% DDS) & NAP Guide | FeeKit",
  "metaDescription": "Calculate Bulgarian Danak varhu dobavenata stoynost (DDS / ДДС) with verified National Revenue Agency rates (20% standard, 9% hotel lodging). BGN 100k threshold and reverse charge.",
  "h1": "Bulgaria VAT Calculator & National Revenue Agency (NAP) Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "National Revenue Agency (NAP)",
    "url": "https://nra.bg/",
    "citation": "Zakon za danak varhu dobavenata stoynost (ZDDS) and National Revenue Agency Regulations."
  },
  "overview": "Value Added Tax in Bulgaria—known domestically as Danak varhu dobavenata stoynost (DDS or ДДС)—is governed by the Bulgarian Value Added Tax Act (ZDDS) and administered by the National Revenue Agency (Natsionalna agentsiya za prihodite - NAP). Bulgaria imposes a standard VAT rate of 20% on general goods, electronics, vehicles, and commercial services, alongside a single statutory reduced rate of 9% restricted primarily to hotel and holiday tourist accommodations. Small businesses with annual taxable turnover under BGN 100,000 qualify for exemption from mandatory VAT registration. VAT declarations are submitted monthly via NAP’s digital portal.",
  "sections": [
    {
      "id": "bg-statutory-vat-rates",
      "title": "Bulgarian DDS Architecture: Standard (20%), Reduced (9%), and Zero Rate",
      "body": "Bulgaria enforces two statutory rate tiers under the Value Added Tax Act (ZDDS):\n\n1. **Standard Rate (20%)**: Codified in Article 66, Paragraph 1 of ZDDS. Applies to general consumer merchandise, electronics, motor vehicles, apparel, restaurant dining, food, and commercial IT and professional consulting services.\n2. **Reduced Rate (9%)**: Codified in Article 66, Paragraph 2 of ZDDS. Applies strictly to hotel accommodations, holiday village rentals, and camping facilities.\n3. **Zero-Rated Supplies (0%)**: Intra-Community supplies of goods (WOD) to registered EU businesses, international transport, and direct export deliveries outside the EU."
    },
    {
      "id": "bg-small-business-threshold",
      "title": "BGN 100,000 Mandatory Registration Threshold (Prag za registratsiya)",
      "body": "Administrative relief under Article 96 of ZDDS:\n\n- **Turnover Threshold**: Any taxable person established in Bulgaria whose taxable turnover reaches **BGN 100,000** in a period not longer than 12 consecutive months must register for VAT.\n- **Registration Application Window**: The application must be filed with the territorial directorate of NAP within 7 days from the end of the month in which the threshold was reached.\n- **Operational Rules**: Exempt small businesses do not charge 20% DDS on customer invoices and cannot claim input VAT refunds on business expenses."
    },
    {
      "id": "bg-monthly-filing-and-nap-deadlines",
      "title": "Monthly Electronic Submissions & NAP Filing Deadlines",
      "body": "Reporting requirements administered by the National Revenue Agency (NAP):\n\n- **Strict Monthly Filing Schedule**: In Bulgaria, all registered VAT payers must file monthly returns, regardless of business size or turnover volume. Quarterly filing is not permitted.\n- **Filing Deadlines**: VAT declarations (Spravka-deklaratsiya), sales ledgers (Dnevnik za prodazhbite), and purchase ledgers (Dnevnik za pokupkite) must be submitted by the **14th day of the month** following the reporting period via NAP's electronic services.\n- **Mandatory Digital Signature**: Submissions require a qualified electronic signature (QES)."
    },
    {
      "id": "bg-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Obratno oblagane) & Cross-Border B2B Supplies",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Bulgarian DDS displaying: *\"Obratno oblagane (Reverse Charge)\"* alongside verified Bulgarian VAT numbers (BG + 9 or 10 digits).\n- **Domestic Reverse Charge**: Enforced under Article 163a of ZDDS for grain, industrial crops, and metal scrap."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise IT Infrastructure in Sofia (20% DDS)",
    "scenario": "A technology engineering firm in Sofia delivers BGN 10,000.00 net of custom cloud architecture services to a corporate client in Plovdiv. Standard 20% DDS applies.",
    "inputs": {
      "netSoftwareService": "BGN 10,000.00",
      "bulgarianStandardDdsRate": "20.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "BGN 10,000.00 consulting",
        "amount": "BGN 10,000.00",
        "note": "Subject to 20% Bulgarian DDS"
      },
      {
        "label": "Bulgarian DDS Output (20%)",
        "formula": "BGN 10,000.00 × 20.00%",
        "amount": "BGN 2,000.00",
        "note": "Output tax liability to NAP"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "BGN 10,000.00 + BGN 2,000.00",
        "amount": "BGN 12,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Bulgarian VAT, the corporate customer pays BGN 12,000.00 gross, with BGN 2,000.00 remitted on the vendor’s monthly NAP declaration."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a BGN 1,200.00 Retail Receipt",
    "scenario": "A consumer in Varna purchases BGN 1,200.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Bulgarian DDS component?",
    "inputs": {
      "totalInclusiveAmount": "BGN 1,200.00",
      "ddsRate": "20.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "BGN 1,200.00 ÷ (1 + 0.20)",
        "amount": "BGN 1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Bulgarian DDS Component",
        "formula": "BGN 1,200.00 - BGN 1,000.00",
        "amount": "BGN 200.00",
        "note": "Output DDS liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "BGN 1,000.00 × 20.00%",
        "amount": "BGN 200.00",
        "note": "Reconciles exactly to BGN 1,200.00 total"
      }
    ],
    "takeaway": "From an all-inclusive BGN 1,200.00 retail transaction in Bulgaria, the merchant retains BGN 1,000.00 net and remits BGN 200.00 in DDS to NAP."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (DDS) rate in Bulgaria?",
      "answer": "The standard VAT rate in Bulgaria is 20%. A single reduced rate of 9% applies strictly to hotel lodging and tourist holiday accommodations.",
      "sourceUrl": "https://nra.bg/"
    },
    {
      "question": "What is the Bulgarian VAT registration threshold for small businesses?",
      "answer": "The mandatory VAT registration threshold in Bulgaria is BGN 100,000 in taxable turnover within 12 consecutive months under Article 96 of ZDDS.",
      "sourceUrl": "https://nra.bg/"
    },
    {
      "question": "How frequently are Bulgarian VAT returns filed?",
      "answer": "In Bulgaria, all VAT-registered entities must file monthly VAT returns and sales/purchase ledgers by the 14th day of the following month. Quarterly filing is not permitted.",
      "sourceUrl": "https://nra.bg/"
    },
    {
      "question": "How is a Bulgarian VAT number formatted?",
      "answer": "Bulgarian VAT identification numbers (EIK/BULSTAT) are formatted with the country prefix BG followed by 9 or 10 numerical digits (e.g. BG123456789).",
      "sourceUrl": "https://nra.bg/"
    },
    {
      "question": "How is cross-border B2B software taxed in Bulgaria?",
      "answer": "B2B digital services provided to EU corporate clients are zero-rated under the reverse charge mechanism (Obratno oblagane), with tax self-assessed by the recipient.",
      "sourceUrl": "https://nra.bg/"
    }
  ]
};

export default bulgariaVatContent;
