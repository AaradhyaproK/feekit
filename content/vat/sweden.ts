import type { PageContent } from '../types.ts';

export const swedenVatContent: PageContent = {
  "slug": "sweden",
  "family": "vat",
  "title": "Sweden VAT Calculator (25%, 12%, 6% Moms) & Skatteverket Guide | FeeKit",
  "metaDescription": "Calculate Swedish Mervärdesskatt (Moms) with verified Skatteverket rates (25% standard, 12% food/hotel, 6% books). SEK 80k threshold, reverse charge, and Skattedeklaration.",
  "h1": "Sweden VAT Calculator & Skatteverket Statutory Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Skatteverket",
    "url": "https://www.skatteverket.se/foretag/moms.html",
    "citation": "Mervärdesskattelagen (2023:200) and Skatteverket Administrative Regulations."
  },
  "overview": "Value Added Tax in Sweden—known domestically as Mervärdesskatt or Moms—is governed by the Swedish VAT Act (Mervärdesskattelagen) and administered by the Swedish Tax Agency (Skatteverket). Sweden levies one of the highest standard VAT rates in the European Union at 25%, alongside reduced rates of 12% (grocery foods, restaurant dining, hotel accommodations) and 6% (printed books, newspapers, cultural admissions, passenger transport). Small businesses with annual turnover not exceeding SEK 80,000 qualify for exemption from VAT registration. Cross-border B2B services operate under EU reverse charge (omvänd skattskyldighet), and electronic reporting is conducted via Skatteverket’s digital portal.",
  "sections": [
    {
      "id": "se-statutory-vat-rates",
      "title": "Swedish Moms Architecture: Standard (25%), Reduced (12% & 6%), and Zero-Rated Supplies",
      "body": "Sweden enforces three statutory VAT brackets under Mervärdesskattelagen:\n\n1. **Standard Rate (25%)**: The general rate applying to the vast majority of goods and professional services, including electronics, motor vehicles, software licensing, clothing, commercial consulting, and fuel.\n2. **Intermediate Reduced Rate (12%)**: Applies to grocery food for human consumption (excluding alcohol and tobacco), restaurant dining and catering, hotel accommodation, camping fees, and minor repair services (bicycles, shoes, clothing).\n3. **Low Reduced Rate (6%)**: Applies to books, audiobooks, newspapers, passenger transport within Sweden (trains, buses, domestic flights), cultural entrance fees (concerts, museums, theater), and copyright royalties for artistic works.\n4. **Zero-Rated & Tax-Exempt Supplies**: Cross-border intra-Community supplies of goods, healthcare, dental services, social care, financial banking services, and insurance."
    },
    {
      "id": "se-small-business-threshold",
      "title": "SEK 80,000 Small Business Exemption (Befrielse från moms)",
      "body": "Sweden provides simplified VAT exemption rules for micro-enterprises under Chapter 9 of Mervärdesskattelagen:\n\n- **Turnover Threshold**: Sole traders (enskild näringsidkare) and micro-enterprises whose annual taxable turnover does not exceed **SEK 80,000** in the current or preceding two tax years can elect exemption from Moms.\n- **Operational Rules**: Exempt businesses do not add 25% Moms to customer invoices and cannot claim input VAT refunds on business assets or software subscriptions.\n- **Voluntary Registration**: Small businesses expecting high equipment startup expenses or conducting B2B commerce can voluntarily register for Moms to reclaim input tax."
    },
    {
      "id": "se-reverse-charge-and-invoicing",
      "title": "Reverse Charge (Omvänd skattskyldighet) & Skatteverket Invoicing Standards",
      "body": "Compliance procedures enforced by Skatteverket:\n\n- **Cross-Border EU Reverse Charge**: When providing B2B digital services to a business client in another EU member state, the Swedish vendor issues a net invoice without Moms stating: *\"Omvänd skattskyldighet (Reverse Charge)\"* and validating both parties' VAT numbers (SE + 10 digits + 01).\n- **Domestic Reverse Charge**: Enforced in high-risk domestic sectors, particularly commercial construction and scrap metal trade, shifting tax liability to the purchasing contractor.\n- **Invoice Requirements**: Must state invoice date, unique sequential invoice number, seller's Momsregistreringsnummer (VAT ID), buyer's details, taxable unit price, applied Moms rate, and total Moms amount in SEK."
    },
    {
      "id": "se-filing-frequencies-and-deadlines",
      "title": "Skattedeklaration Deadlines and Electronic Filing Portals",
      "body": "Periodic tax filing schedules administered via Skatteverket's e-tjänster:\n\n- **Filing Cadence**:\n  - **Annual Filers**: Businesses with turnover under SEK 1 million typically file annually on the **26th day of the second month** following the fiscal year (or May 12 for calendar-year businesses).\n  - **Quarterly Filers**: Standard for SMEs with turnover between SEK 1M and 40M, due on the **12th day of the second month** following the quarter (or 17th day in August).\n  - **Monthly Filers**: Mandatory for enterprises with annual turnover exceeding SEK 40 million, due on the **26th day of the following month**."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Software Implementation in Stockholm (25% Moms)",
    "scenario": "A Stockholm IT engineering firm delivers SEK 40,000.00 net of custom cloud integration services to a corporate client based in Gothenburg. Standard 25% Moms applies.",
    "inputs": {
      "netSoftwareService": "SEK 40,000.00",
      "swedishStandardMomsRate": "25.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "SEK 40,000.00 consulting",
        "amount": "SEK 40,000.00",
        "note": "Subject to 25% Swedish Moms"
      },
      {
        "label": "Swedish Moms Output (25%)",
        "formula": "SEK 40,000.00 × 25.00%",
        "amount": "SEK 10,000.00",
        "note": "Output tax liability to Skatteverket"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "SEK 40,000.00 + SEK 10,000.00",
        "amount": "SEK 50,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Swedish VAT, the Gothenburg client pays SEK 50,000.00 gross, with SEK 10,000.00 in Moms remitted on the vendor’s quarterly Skattedeklaration."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a SEK 1,250.00 Retail Receipt",
    "scenario": "A consumer in Malmö purchases SEK 1,250.00 all-inclusive of retail electronics. What is the net sales revenue and Moms component?",
    "inputs": {
      "totalInclusiveAmount": "SEK 1,250.00",
      "momsRate": "25.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "SEK 1,250.00 ÷ (1 + 0.25)",
        "amount": "SEK 1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Swedish Moms Component",
        "formula": "SEK 1,250.00 - SEK 1,000.00",
        "amount": "SEK 250.00",
        "note": "Output Moms liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "SEK 1,000.00 × 25.00%",
        "amount": "SEK 250.00",
        "note": "Reconciles exactly to SEK 1,250.00 total"
      }
    ],
    "takeaway": "From an all-inclusive SEK 1,250.00 retail transaction in Sweden, the merchant retains SEK 1,000.00 net and remits SEK 250.00 in Moms to Skatteverket."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (Moms) rate in Sweden?",
      "answer": "The standard VAT rate in Sweden is 25%. Reduced rates of 12% (food, restaurant meals, hotel lodging) and 6% (books, cultural admissions, passenger transport) apply to specific sectors.",
      "sourceUrl": "https://www.skatteverket.se/foretag/moms.html"
    },
    {
      "question": "What is the Swedish VAT registration threshold for small businesses?",
      "answer": "The small business VAT exemption threshold in Sweden is SEK 80,000 in annual turnover. Businesses below this limit do not charge Moms on sales.",
      "sourceUrl": "https://www.skatteverket.se/foretag/moms.html"
    },
    {
      "question": "How is Moms formatted on Swedish business invoices?",
      "answer": "Swedish VAT registration numbers are formatted as SE followed by the 10-digit Swedish personal or corporate identity number and 01 (e.g. SE556123456701).",
      "sourceUrl": "https://www.skatteverket.se/foretag/moms.html"
    },
    {
      "question": "When are Swedish VAT returns due?",
      "answer": "Quarterly VAT returns are due on the 12th day of the second month following the quarter via Skatteverket’s digital e-tjänster (e.g. Q1 return due May 12).",
      "sourceUrl": "https://www.skatteverket.se/foretag/moms.html"
    },
    {
      "question": "How is cross-border B2B software taxed in Sweden?",
      "answer": "B2B software and digital services delivered to business clients in other EU countries are billed without Swedish Moms under the reverse charge mechanism (omvänd skattskyldighet).",
      "sourceUrl": "https://www.skatteverket.se/foretag/moms.html"
    }
  ]
};

export default swedenVatContent;
