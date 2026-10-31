import type { PageContent } from '../types.ts';

export const newMexicoContent: PageContent = {
  "slug": "new-mexico",
  "family": "sales-tax",
  "title": "New Mexico Gross Receipts Tax Calculator (5.00% to 9.0625%) | FeeKit",
  "metaDescription": "Calculate New Mexico Gross Receipts Tax (GRT) with TRD rates (5.0% state, max 9.0625%). Comprehensive taxation of SaaS, services, and $100k remote seller nexus.",
  "h1": "New Mexico Gross Receipts Tax (GRT) Calculator & TRD Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "New Mexico Taxation and Revenue Department",
    "url": "https://www.tax.newmexico.gov/businesses/gross-receipts-tax/",
    "citation": "N.M. Stat. Ann. Chapter 7, Article 9 (Gross Receipts and Compensating Tax Act)."
  },
  "overview": "Unlike traditional retail sales tax states where the tax is levied directly upon the consumer, the State of New Mexico levies a Gross Receipts Tax (GRT) under NMSA 1978, § 7-9-4. GRT is an excise tax imposed upon the seller for the privilege of engaging in business in New Mexico. While merchants routinely pass this economic cost forward to purchasers on the invoice, the business remains legally liable for the tax. New Mexico imposes a statewide base GRT rate of 5.00% (reduced from 5.125% in 2023), but county and municipal local option taxes push combined rates between 6.50% and 9.0625% across major urban areas (including Albuquerque, Santa Fe, and Las Cruces). Virtually all services, cloud computing, and SaaS are fully taxable under New Mexico GRT.",
  "sections": [
    {
      "id": "nm-grt-architecture-and-rates",
      "title": "New Mexico GRT Architecture: State Base (5.00%) and Municipal Additions",
      "body": "New Mexico’s Gross Receipts Tax code combines a state baseline with localized city and county options:\n\n- **Statewide Baseline GRT Rate**: **5.00%**. Governed by NMSA 1978, § 7-9-4, applying to gross receipts from sales of property and performance of services.\n- **Municipal and County Local Option Taxes**:\n  - **Albuquerque (Bernalillo County)**: **7.875% combined rate** (5.00% state + 2.875% Bernalillo County and City of Albuquerque GRT).\n  - **Santa Fe (Santa Fe County)**: **8.4375% combined rate** (5.00% state + 3.4375% Santa Fe municipal/county GRT).\n  - **Las Cruces (Doña Ana County)**: **8.3125% combined rate** (5.00% state + 3.3125% Doña Ana County and Las Cruces GRT).\n  - **Taos (Taos County)**: **8.6875% combined rate** (Combines state, county, and municipal tourism levies)."
    },
    {
      "id": "nm-services-saas-broad-taxability",
      "title": "Taxability Framework: Broad Taxation of SaaS, Professional Services, and Goods",
      "body": "Because New Mexico operates a Gross Receipts Tax rather than a narrow sales tax, the tax base is extraordinarily broad:\n\n1. **Software as a Service (SaaS) & Cloud Services**: **Fully Taxable (5.00% - 9.0625%)**. Under NMSA 1978, § 7-9-3.5, gross receipts from selling or licensing property, including cloud software access, digital services, and SaaS, are fully subject to GRT.\n2. **Professional and Consulting Services**: **Fully Taxable**. Legal services, accounting, marketing, engineering, and architectural services performed in or sourced to New Mexico are subject to full GRT rates.\n3. **Food and Groceries**: **Exempt from State GRT**. Under NMSA 1978, § 7-9-92, receipts from the retail sale of food at grocery stores are eligible for a state GRT deduction. However, certain local option taxes may still apply.\n4. **Freight and Delivery Charges**: Freight and transportation charges are taxable gross receipts under New Mexico law unless a specific statutory deduction applies."
    },
    {
      "id": "nm-economic-nexus-and-sourcing",
      "title": "New Mexico Remote Seller Economic Nexus ($100,000 Threshold) & Sourcing",
      "body": "Following post-Wayfair statutory rules codified in NMSA 1978, § 7-9-3.3:\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in New Mexico upon exceeding **$100,000 in total gross receipts** from sales or services delivered into the state during the previous calendar year.\n- **Destination Sourcing (July 2021 Reform)**: Under House Bill 6, New Mexico transitioned completely from origin-based sourcing to **destination-based sourcing** for all delivered goods and services. Remote and in-state sellers report GRT based on the customer’s delivery address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit New Mexico GRT on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "nm-filing-compliance-tap",
      "title": "Taxpayer Access Point (TAP), 25th-of-the-Month Deadlines, and Tax Holiday",
      "body": "Tax compliance administration enforced by the New Mexico Taxation and Revenue Department (TRD):\n\n- **TAP Portal Registration**: Businesses register for a New Mexico Business Tax ID online via **TAP** (Taxpayer Access Point).\n- **Filing Deadlines**: GRT returns (Form TRD-41413) are due on or before the **25th day of the month** following the reporting period for monthly remitters.\n- **Annual Gross Receipts Tax Holiday**: New Mexico holds an annual **3-day Gross Receipts Tax Holiday on the first weekend of August**, exempting qualifying clothing and footwear ($100 or less per item), school supplies ($30 or less), and computers ($1,000 or less).\n- **Delinquency Penalties**: Late filings incur a penalty of **2% per month** of the unpaid tax (up to 20% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Professional Consulting & Software Invoice in Albuquerque (7.875% Rate)",
    "scenario": "A technology consulting firm in Albuquerque, New Mexico bills an engineering client $2,000.00 for technical consulting and cloud software services.",
    "inputs": {
      "consultingSubtotal": "$2,000.00",
      "albuquerqueGrtRate": "7.875%"
    },
    "steps": [
      {
        "label": "Taxable Service Base",
        "formula": "$2,000.00 consulting services",
        "amount": "$2,000.00",
        "note": "Subject to New Mexico GRT"
      },
      {
        "label": "New Mexico Gross Receipts Tax (7.875%)",
        "formula": "$2,000.00 × 7.875%",
        "amount": "$157.50",
        "note": "Includes 5.0% state + 2.875% local GRT"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$2,000.00 + $157.50",
        "amount": "$2,157.50",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under New Mexico’s broad GRT laws, professional services and cloud software are fully taxable, adding $157.50 in tax to a $2,000 invoice in Albuquerque."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500 Santa Fe Receipt",
    "scenario": "A retail store in Santa Fe, New Mexico (8.4375% combined GRT rate) collects an all-inclusive $500.00 payment. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "santaFeRate": "8.4375%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.084375)",
        "amount": "$461.09",
        "note": "True retail revenue retained"
      },
      {
        "label": "New Mexico GRT Owed",
        "formula": "$500.00 - $461.09",
        "amount": "$38.91",
        "note": "Remitted via TAP"
      },
      {
        "label": "Verification Calculation",
        "formula": "$461.09 × 8.4375%",
        "amount": "$38.91",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in Santa Fe, the business retains $461.09 net revenue and owes $38.91 in Gross Receipts Tax."
  },
  "faqs": [
    {
      "question": "What is Gross Receipts Tax (GRT) in New Mexico?",
      "answer": "GRT is an excise tax levied on the business for the privilege of conducting business in New Mexico. Unlike standard sales taxes, GRT applies broadly to virtually all goods, services, and digital products.",
      "sourceUrl": "https://www.tax.newmexico.gov/businesses/gross-receipts-tax/"
    },
    {
      "question": "What is the base GRT rate in New Mexico for 2026?",
      "answer": "The statewide base GRT rate in New Mexico is 5.00%. Local city and county taxes push combined rates between 6.50% and 9.0625% across major urban areas.",
      "sourceUrl": "https://www.tax.newmexico.gov/businesses/gross-receipts-tax/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in New Mexico?",
      "answer": "Yes. Under NMSA 1978, § 7-9-3.5, cloud software, SaaS, digital services, and software licensing are fully subject to New Mexico Gross Receipts Tax.",
      "sourceUrl": "https://www.tax.newmexico.gov/businesses/gross-receipts-tax/"
    },
    {
      "question": "What is the economic nexus threshold in New Mexico?",
      "answer": "Out-of-state remote sellers establish economic nexus in New Mexico when gross receipts delivered into the state exceed $100,000 during the previous calendar year.",
      "sourceUrl": "https://www.tax.newmexico.gov/businesses/remote-sellers/"
    },
    {
      "question": "When is New Mexico’s annual tax holiday?",
      "answer": "New Mexico holds an annual 3-day Gross Receipts Tax Holiday on the first weekend of August, exempting qualifying clothing and footwear ($100 or less per item), school supplies ($30 or less), and computers ($1,000 or less).",
      "sourceUrl": "https://www.tax.newmexico.gov/businesses/gross-receipts-tax-holiday/"
    }
  ]
};

export default newMexicoContent;
