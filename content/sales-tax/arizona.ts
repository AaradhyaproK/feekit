import type { PageContent } from '../types.ts';

export const arizonaContent: PageContent = {
  "slug": "arizona",
  "family": "sales-tax",
  "title": "Arizona Transaction Privilege Tax Calculator (5.60% to 11.20%) | FeeKit",
  "metaDescription": "Calculate Arizona Transaction Privilege Tax (TPT) with ADOR rates (5.6% state, max 11.20%). Model City Tax Code, city privilege rates, and $100k remote seller nexus.",
  "h1": "Arizona Transaction Privilege Tax (TPT) Calculator & ADOR Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Arizona Department of Revenue",
    "url": "https://azdor.gov/transaction-privilege-tax",
    "citation": "A.R.S. Title 42, Chapter 5 (Transaction Privilege and Use Tax) and Arizona Model City Tax Code (MCTC)."
  },
  "overview": "Unlike standard retail sales tax states where the tax is levied directly upon the consumer, Arizona levies a Transaction Privilege Tax (TPT) under A.R.S. Title 42. TPT is a gross receipts excise tax levied upon the vendor for the legal privilege of conducting business in the state of Arizona. While merchants routinely pass this economic cost forward to purchasers at checkout, the vendor remains legally liable for the tax. Arizona imposes a statewide baseline TPT rate of 5.60%, but county excise levies and highly independent municipal tax rates under the Model City Tax Code (MCTC) push combined privilege tax rates between 7.50% and 11.20% across major metropolitan areas.",
  "sections": [
    {
      "id": "az-tpt-structure-and-city-codes",
      "title": "Arizona TPT Architecture: State, County, and Model City Tax Code Rates",
      "body": "Arizona’s TPT system features two tiers of tax administration:\n\n- **Statewide TPT Base Rate**: **5.60%**. Governed by the state legislature under A.R.S. § 42-5010, applying to retail classification business activities.\n- **County Excise Taxes**: Counties levy optional surtaxes (typically 0.20% to 1.10%) to fund regional transportation and flood control. Maricopa County levies 0.70%, while Pima County imposes 0.50%.\n- **Municipal Privilege Taxes (Model City Tax Code)**: Individual incorporated cities levy independent municipal privilege taxes that vary dramatically:\n  - **Phoenix (Maricopa County)**: **8.60% combined rate** (5.60% state + 0.70% county + 2.30% city).\n  - **Tucson (Pima County)**: **8.70% combined rate** (5.60% state + 0.50% county + 2.60% city).\n  - **Scottsdale (Maricopa County)**: **8.05% combined rate** (5.60% state + 0.70% county + 1.75% city).\n  - **Flagstaff (Coconino County)**: **9.181% combined rate** (5.60% state + 1.30% county + 2.281% city).\n  - **Glendale (Maricopa County)**: **9.55% combined rate** (5.60% state + 0.70% county + 3.25% city)."
    },
    {
      "id": "az-taxability-saas-food-services",
      "title": "Arizona Taxability Rules: SaaS Status, Food Exemption, and Commercial Leases",
      "body": "Product taxability under the Arizona Transaction Privilege Tax code:\n\n1. **Software as a Service (SaaS)**: **State-Exempt, City-Specific Variations**. Under Arizona Private Taxpayer Ruling PTR 17-1, SaaS is not taxable at the state level under the retail classification, as the customer does not gain possession of tangible software. However, under the Model City Tax Code (MCTC Section 445), certain municipal jurisdictions previously asserted rental of personal property taxation on cloud software; current ADOR centralized administration generally treats true cloud hosting as non-taxable services.\n2. **Groceries & Food for Home Consumption**: **Exempt at State Level, Taxable in Certain Cities**. Unprepared groceries are exempt from the 5.60% state TPT. However, cities that have opted out of the Model City food exemption levy local municipal privilege tax on food sales.\n3. **Clothing and Apparel**: **Fully Taxable**. Everyday clothing and footwear are subject to full combined state, county, and city TPT rates.\n4. **Commercial Lease TPT**: Historically, Arizona cities levied a commercial lease tax on landlords leasing business real estate. Legislation enacted in 2024 eliminated municipal commercial lease taxes effective December 31, 2024, providing substantial relief to commercial tenants."
    },
    {
      "id": "az-economic-nexus-and-remote-seller-rules",
      "title": "Arizona Remote Seller Economic Nexus ($100,000 Threshold) and Centralization",
      "body": "Following House Bill 2757, Arizona standardized remote vendor rules:\n\n- **Economic Nexus Threshold**: A remote out-of-state vendor establishes economic nexus upon exceeding **$100,000 in gross sales** delivered into Arizona during the current or previous calendar year. Arizona does not enforce a transaction count test.\n- **Uniform Single-Point Filing**: Remote sellers file a single consolidated return with the Arizona Department of Revenue (ADOR) via **AZTaxes.gov**, eliminating the historic burden of filing separate returns with individual non-program cities.\n- **Destination Sourcing for Remote Sellers**: Out-of-state merchants with economic nexus calculate TPT based on the **delivery destination** of the Arizona customer, applying the exact state, county, and city rate for that location.\n- **Marketplace Facilitator Legislation**: Platforms like Amazon, Walmart, and eBay collect and remit Arizona TPT on all facilitated third-party sales, relieving remote marketplace sellers of tax remittance obligations."
    },
    {
      "id": "az-tpt-licensing-and-penalties",
      "title": "TPT License Application, Filing Deadlines, and Accounting Credits",
      "body": "Compliance operations under the Arizona Department of Revenue:\n\n- **TPT License Requirement**: Businesses must obtain a state TPT License before engaging in business. ADOR charges a $12 state license fee plus individual municipal license fees (ranging from $0 to $50 per city location).\n- **Filing Deadlines**: TPT returns (Form TPT-2) are due on the **20th day of the month** following the reporting period, and become legally delinquent if not received by the second-to-last business day of that month.\n- **Accounting Credit (Timely Filing Discount)**: Under A.R.S. § 42-5017, retailers who file and pay electronically on time are entitled to claim an accounting credit equal to **1.2% of the state tax due** (capped at $10,000 per calendar year).\n- **Delinquency Penalties**: Late filings trigger a statutory penalty of **4.5% of the tax due per month** (up to 25% maximum), plus an additional 0.5% late payment penalty and statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Phoenix (8.60% Combined TPT)",
    "scenario": "A consumer in Phoenix, Arizona purchases $500.00 of plumbing supplies from a local retail supplier.",
    "inputs": {
      "supplySubtotal": "$500.00",
      "arizonaStateTpt": "5.60%",
      "maricopaCountyTax": "0.70%",
      "phoenixCityTax": "2.30%",
      "combinedTptRate": "8.60%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 retail merchandise",
        "amount": "$500.00",
        "note": "Subject to retail classification TPT"
      },
      {
        "label": "State TPT Component (5.60%)",
        "formula": "$500.00 × 5.60%",
        "amount": "$28.00",
        "note": "State of Arizona share"
      },
      {
        "label": "Maricopa County Component (0.70%)",
        "formula": "$500.00 × 0.70%",
        "amount": "$3.50",
        "note": "County regional transit fund"
      },
      {
        "label": "City of Phoenix Component (2.30%)",
        "formula": "$500.00 × 2.30%",
        "amount": "$11.50",
        "note": "City of Phoenix municipal privilege tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $28.00 + $3.50 + $11.50",
        "amount": "$543.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "On a $500.00 purchase in Phoenix, the total 8.60% TPT equals $43.00, distributed across state ($28), county ($3.50), and city ($11.50) authorities."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $1,000.00 Tucson Receipt",
    "scenario": "A contractor in Tucson collects a flat $1,000.00 tax-inclusive payment for retail parts at an 8.70% combined TPT rate. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$1,000.00",
      "combinedRate": "8.70%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$1,000.00 ÷ (1 + 0.087)",
        "amount": "$919.96",
        "note": "True retail revenue retained"
      },
      {
        "label": "Arizona TPT Liability",
        "formula": "$1,000.00 - $919.96",
        "amount": "$80.04",
        "note": "Remitted to ADOR on Form TPT-2"
      },
      {
        "label": "Verification Math",
        "formula": "$919.96 × 8.70%",
        "amount": "$80.04",
        "note": "Reconciles perfectly to $1,000.00 receipt"
      }
    ],
    "takeaway": "From a $1,000.00 gross receipt in Tucson, the vendor retains $919.96 net revenue and owes $80.04 in Transaction Privilege Tax."
  },
  "faqs": [
    {
      "question": "What is Transaction Privilege Tax (TPT) in Arizona?",
      "answer": "TPT is an excise tax levied on the vendor for the privilege of conducting business in Arizona. Although merchants typically pass the tax to consumers at checkout, the business is legally responsible for remitting the tax to the Arizona Department of Revenue.",
      "sourceUrl": "https://azdor.gov/transaction-privilege-tax"
    },
    {
      "question": "What is the base sales tax rate in Arizona?",
      "answer": "The statewide base TPT rate in Arizona is 5.60%. However, county and municipal taxes push combined rates between 7.50% and 11.20% across most Arizona cities.",
      "sourceUrl": "https://azdor.gov/transaction-privilege-tax/rates"
    },
    {
      "question": "Does Arizona tax SaaS and cloud software?",
      "answer": "At the state level, SaaS is generally exempt under Arizona Private Taxpayer Ruling PTR 17-1 because no tangible personal property is transferred. Some cities historically asserted tax on software access, but centralized ADOR administration treats pure cloud services as non-taxable.",
      "sourceUrl": "https://azdor.gov/legal-research/private-taxpayer-rulings"
    },
    {
      "question": "What is the economic nexus threshold in Arizona?",
      "answer": "Out-of-state remote sellers establish economic nexus in Arizona when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.",
      "sourceUrl": "https://azdor.gov/transaction-privilege-tax/remote-sellers"
    },
    {
      "question": "Does Arizona have an annual sales tax holiday?",
      "answer": "No. Arizona does not host an annual sales tax holiday.",
      "sourceUrl": "https://azdor.gov/transaction-privilege-tax"
    }
  ]
};

export default arizonaContent;
