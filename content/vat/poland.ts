import type { PageContent } from '../types.ts';

export const polandVatContent: PageContent = {
  "slug": "poland",
  "family": "vat",
  "title": "Poland VAT Calculator (23%, 8%, 5% PTU) & KAS Guide | FeeKit",
  "metaDescription": "Calculate Polish Podatek od towarów i usług (PTU / VAT) with verified KAS rates (23% standard, 8% and 5% reduced). Covers PLN 200,000 threshold, JPK_V7 filing, and split payment.",
  "h1": "Poland VAT Calculator & Krajowa Administracja Skarbowa Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Krajowa Administracja Skarbowa (KAS)",
    "url": "https://www.podatki.gov.pl/vat/",
    "citation": "Ustawa z dnia 11 marca 2004 r. o podatku od towarów i usług (Dz. U. z 2024 r. poz. 361) and JPK_V7 structure."
  },
  "overview": "Value Added Tax in Poland—formally known as Podatek od towarów i usług (PTU or VAT)—is governed by the Polish VAT Act of March 11, 2004 and administered by the National Revenue Administration (Krajowa Administracja Skarbowa - KAS). Poland applies a standard VAT rate of 23% across commercial commerce, alongside reduced rates of 8% (passenger transport, construction, restaurant catering) and 5% (basic groceries, books, e-books). Small businesses with annual turnover under PLN 200,000 qualify for subjective exemption under Article 113 of the VAT Act. Poland operates a mandatory Split Payment Mechanism (mechanizm podzielonej płatności - MPP) for sensitive commodities and requires monthly unified SAF-T audits (JPK_V7M/JPK_V7K).",
  "sections": [
    {
      "id": "pl-statutory-vat-rates",
      "title": "Polish VAT Rate Architecture: Standard (23%), Reduced (8% & 5%), and Zero Rate",
      "body": "Poland enforces three primary statutory tax brackets under Article 41 of the VAT Act:\n\n1. **Standard Rate (23%)**: Governed by Art. 41 ust. 1 in conjunction with Art. 146ef ust. 1 pkt 1. Applies to general consumer merchandise, electronics, passenger motor vehicles, professional IT and consulting services, industrial equipment, and adult clothing.\n2. **First Reduced Rate (8%)**: Governed by Art. 41 ust. 2. Applies to passenger transport, residential construction services, hotel lodging, certain medical equipment, and restaurant dining (excluding beverages).\n3. **Second Reduced Rate (5%)**: Governed by Art. 41 ust. 2a. Applies to staple foodstuffs (bread, dairy, meat, fresh fruits, vegetables), printed books, e-books, specialized baby food, and hygienic products.\n4. **Zero Rate (0%)**: Intra-Community supplies of goods (WDT) to registered EU businesses (Art. 42) and direct export of goods outside the European Union (Art. 41 ust. 4)."
    },
    {
      "id": "pl-small-business-exemption",
      "title": "PLN 200,000 Small Business Exemption (Zwolnienie podmiotowe z VAT)",
      "body": "Poland provides statutory administrative relief under Article 113 of the VAT Act:\n\n- **Revenue Ceiling**: Businesses whose aggregate net sales turnover did not exceed **PLN 200,000** in the preceding tax year, or a proportional share for new businesses starting mid-year, are exempt from registering for VAT.\n- **Excluded Activities**: Certain sectors are legally barred from the small business exemption regardless of revenue: consulting services, legal advice, jewelry sales, and online sales of cosmetic or electronic parts.\n- **Operational Impact**: Exempt businesses do not charge 23% VAT on invoices but cannot reclaim input VAT on commercial hardware or operational supplies."
    },
    {
      "id": "pl-split-payment-and-jpk-filing",
      "title": "Mandatory Split Payment (MPP) & Unified JPK_V7 Reporting Standards",
      "body": "Poland enforces strict digital tax compliance to prevent VAT carousel fraud:\n\n- **Split Payment Mechanism (MPP)**: Under Article 108a, B2B invoices exceeding **PLN 15,000 gross** covering Annex 15 goods (electronics, steel, construction, automotive parts) mandate the split payment method. The net amount is transferred to the vendor’s primary business bank account, while the 23% VAT component is routed automatically into a dedicated, state-monitored VAT sub-account (rachunek VAT).\n- **Unified SAF-T (JPK_V7M / JPK_V7K)**: Poland eliminated paper VAT returns. All registered taxpayers must transmit structured XML audit files (JPK_V7M for monthly filers or JPK_V7K for quarterly filers) by the **25th day of the month** following the reporting period via the Ministry of Finance portal.\n- **National e-Invoicing System (KSeF)**: Phased implementation of mandatory structured B2B electronic invoices issued through the centralized government KSeF clearinghouse."
    },
    {
      "id": "pl-b2b-reverse-charge-and-oss",
      "title": "EU Cross-Border Reverse Charge and One-Stop Shop (OSS) Rules",
      "body": "Cross-border trade governed by European Union directives:\n\n- **B2B Reverse Charge**: Cross-border services delivered to registered EU business clients are invoiced without Polish VAT displaying the annotation: *\"Odwrotne obciążenie (Reverse Charge)\"* alongside both parties' VAT-EU numbers.\n- **One-Stop Shop (OSS)**: Polish e-commerce merchants shipping physical products or digital services to EU consumers exceeding the joint €10,000 EU-wide threshold declare destination VAT through the simplified Polish OSS portal."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise IT Equipment Sale in Warsaw (23% Rate)",
    "scenario": "A technology hardware vendor in Warsaw delivers PLN 10,000.00 net of server equipment to a Polish corporate client, subject to standard 23% VAT and mandatory split payment.",
    "inputs": {
      "netEquipmentPrice": "PLN 10,000.00",
      "polishStandardVatRate": "23.00%"
    },
    "steps": [
      {
        "label": "Net Hardware Base",
        "formula": "PLN 10,000.00 merchandise",
        "amount": "PLN 10,000.00",
        "note": "Subject to 23% Polish PTU"
      },
      {
        "label": "Polish VAT Component (23%)",
        "formula": "PLN 10,000.00 × 23.00%",
        "amount": "PLN 2,300.00",
        "note": "Owed to Polish Tax Office"
      },
      {
        "label": "Total Invoiced Gross Amount",
        "formula": "PLN 10,000.00 + PLN 2,300.00",
        "amount": "PLN 12,300.00",
        "note": "Total customer payment"
      },
      {
        "label": "Split Payment Routing",
        "formula": "Direct split bank transfer",
        "amount": "PLN 2,300.00 to VAT Account",
        "note": "Routed to dedicated KAS sub-account"
      }
    ],
    "takeaway": "Under Polish VAT, the corporate customer pays PLN 12,300 gross, with PLN 10,000 reaching the vendor’s checking account and PLN 2,300 routed directly into the monitored VAT account."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a PLN 1,230.00 Retail Receipt",
    "scenario": "A retail electronics store in Krakow issues an all-inclusive PLN 1,230.00 receipt for taxable computer accessories at 23% VAT. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "PLN 1,230.00",
      "vatRate": "23.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "PLN 1,230.00 ÷ (1 + 0.23)",
        "amount": "PLN 1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Polish VAT Output Liability",
        "formula": "PLN 1,230.00 - PLN 1,000.00",
        "amount": "PLN 230.00",
        "note": "Reported on monthly JPK_V7M"
      },
      {
        "label": "Verification Calculation",
        "formula": "PLN 1,000.00 × 23.00%",
        "amount": "PLN 230.00",
        "note": "Reconciles exactly to PLN 1,230.00 total"
      }
    ],
    "takeaway": "From an all-inclusive PLN 1,230.00 transaction, the retailer retains PLN 1,000.00 net turnover and remits PLN 230.00 in VAT to the tax office."
  },
  "faqs": [
    {
      "question": "What is the standard VAT rate in Poland?",
      "answer": "The standard VAT rate in Poland is 23%. Reduced rates of 8% (passenger transport, construction, hotel lodging) and 5% (basic groceries, books, e-books) apply to qualifying supplies.",
      "sourceUrl": "https://www.podatki.gov.pl/vat/"
    },
    {
      "question": "What is the Polish VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Poland is PLN 200,000 in annual net sales turnover under Article 113 of the VAT Act. Certain advisory and electronics businesses are excluded.",
      "sourceUrl": "https://www.podatki.gov.pl/vat/"
    },
    {
      "question": "What is the Split Payment Mechanism (MPP) in Poland?",
      "answer": "Split payment is mandatory for B2B invoices exceeding PLN 15,000 gross covering sensitive goods (electronics, construction, steel). The net amount is paid to the merchant and VAT is routed to a monitored VAT bank account.",
      "sourceUrl": "https://www.podatki.gov.pl/vat/"
    },
    {
      "question": "When are Polish VAT returns due?",
      "answer": "Unified JPK_V7 files (JPK_V7M for monthly filers or JPK_V7K for quarterly filers) must be submitted electronically by the 25th day of the month following the reporting period via the Ministry of Finance portal.",
      "sourceUrl": "https://www.podatki.gov.pl/vat/"
    },
    {
      "question": "How is cross-border B2B software taxed in Poland?",
      "answer": "Cross-border B2B software services provided to other EU business customers are zero-rated under the reverse charge mechanism (Odwrotne obciążenie), with VAT self-assessed by the foreign buyer.",
      "sourceUrl": "https://www.podatki.gov.pl/vat/"
    }
  ]
};

export default polandVatContent;
