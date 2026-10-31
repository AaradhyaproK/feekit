import type { PageContent } from '../types.ts';

export const southDakotaContent: PageContent = {
  "slug": "south-dakota",
  "family": "sales-tax",
  "title": "South Dakota Sales Tax Calculator (4.20% to 6.20%) | FeeKit",
  "metaDescription": "Calculate South Dakota sales and use tax with Department of Revenue rates (4.2% state statutory, 6.2% max municipal). Sourced SaaS taxation, grocery rules, and $100k nexus.",
  "h1": "South Dakota Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "South Dakota Department of Revenue",
    "url": "https://dor.sd.gov/businesses/taxes/sales-use-tax/",
    "citation": "S.D. Codified Laws Chapter 10-45 (Retail Sales and Service Tax) and Chapter 10-46."
  },
  "overview": "The State of South Dakota levies a statutory retail sales and service tax rate of 4.20% under S.D. Codified Laws § 10-45-2 (a rate reduction from 4.50% enacted under 2023 House Bill 1137 through June 30, 2027). South Dakota is nationally renowned as the petitioner in the landmark 2018 U.S. Supreme Court decision, *South Dakota v. Wayfair, Inc.*, which legalized economic nexus across the United States. Municipalities in South Dakota are authorized to levy a general municipal sales tax of up to 2.00%, resulting in a combined retail sales tax rate of 6.20% in major metropolitan areas such as Sioux Falls, Rapid City, and Aberdeen. South Dakota maintains one of the broadest sales tax bases in the country, taxing Software as a Service (SaaS) and groceries.",
  "sections": [
    {
      "id": "sd-rates-and-municipal-surcharges",
      "title": "South Dakota 4.20% Statutory State Rate & Municipal Add-Ons (Max 6.20%)",
      "body": "South Dakota’s rate structure features two integrated administrative tiers:\n\n- **State Statutory Base Rate**: **4.20%**. Enacted under HB 1137, applying to all retail sales of personal property, digital property, and commercial services.\n- **Municipal General Sales Taxes (Up to 2.00%)**: Incorporated cities levy local option taxes administered centrally by the state:\n  - **Sioux Falls (Minnehaha / Lincoln Counties)**: **6.20% combined rate** (4.20% state + 2.00% city).\n  - **Rapid City (Pennington County)**: **6.20% combined rate** (4.20% state + 2.00% city).\n  - **Aberdeen (Brown County)**: **6.20% combined rate** (4.20% state + 2.00% city).\n  - **Brookings (Brookings County)**: **6.20% combined rate** (4.20% state + 2.00% city).\n- **Municipal Gross Receipts Tax (1.00% MGRT)**: Cities may also levy a 1.00% special gross receipts tax on restaurant dining, alcoholic beverages, and lodging."
    },
    {
      "id": "sd-comprehensive-tax-base-saas-groceries",
      "title": "Comprehensive Tax Base: Full Taxation of SaaS, Groceries, Clothing, and Services",
      "body": "South Dakota applies a presumption that all sales of services and tangible property are taxable unless specifically exempted:\n\n1. **Software as a Service (SaaS)**: **Fully Taxable (4.20% - 6.20%)**. Under S.D. Codified Laws § 10-45-5.2 and Streamlined Sales Tax definitions, remote prewritten software access, cloud hosting, and software maintenance services are fully subject to standard state and municipal sales tax.\n2. **Groceries & Food for Home Consumption**: **Fully Taxable (4.20% - 6.20%)**. Unlike most states, South Dakota taxes grocery food at the standard state and local rates.\n3. **Everyday Clothing and Footwear**: **Fully Taxable**. Apparel and footwear are subject to standard combined rates year-round.\n4. **Freight and Delivery Fees**: Under SDCL § 10-45-1(14), delivery and transportation charges billed by the retailer are included in the taxable gross sales price."
    },
    {
      "id": "sd-the-wayfair-standard-economic-nexus",
      "title": "The Wayfair Standard: South Dakota Remote Seller Nexus ($100,000 Threshold)",
      "body": "As the origin state of modern remote seller taxation under S.D. Codified Laws § 10-64-1:\n\n- **Economic Nexus Standard**: A remote seller establishes economic nexus in South Dakota if, during the previous or current calendar year, the business achieves:\n  - Gross sales exceeding **$100,000** delivered into South Dakota.\n  - *Repeal of 200-Transaction Threshold*: Under 2023 Senate Bill 30, South Dakota formally eliminated the 200-transaction test, making $100,000 in gross revenue the sole nexus benchmark.\n- **Destination Sourcing**: South Dakota is a full member of the Streamlined Sales and Use Tax Agreement (SSUTA) and enforces strict destination sourcing based on delivery location.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, Walmart, eBay) collect and remit South Dakota sales tax on behalf of marketplace sellers."
    },
    {
      "id": "sd-registration-and-filing-compliance",
      "title": "E-Path Registration, Filing Due Dates, and Penalty Provisions",
      "body": "Tax administration requirements enforced by the South Dakota Department of Revenue:\n\n- **Business Registration**: Retailers register for a South Dakota Sales Tax License online via the **South Dakota E-Path** system.\n- **Filing Deadlines**: Sales tax returns are filed monthly or bi-monthly and are due on or before the **20th day of the month** following the reporting period (extended to the last day of the month for electronic filers with payment via EFT).\n- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **10% of the tax due** (minimum $10) under SDCL § 10-59-6, plus statutory monthly interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware & Software Purchase in Sioux Falls (6.20% Rate)",
    "scenario": "A small business in Sioux Falls, South Dakota purchases a $1,000.00 office computer and a $200.00 cloud accounting software subscription.",
    "inputs": {
      "hardwareAmount": "$1,000.00",
      "cloudSaaSAmount": "$200.00",
      "siouxFallsCombinedRate": "6.20% (4.2% State + 2.0% City)"
    },
    "steps": [
      {
        "label": "Taxable Hardware Base",
        "formula": "$1,000.00 hardware",
        "amount": "$1,000.00",
        "note": "Taxable tangible personal property"
      },
      {
        "label": "Taxable SaaS Base",
        "formula": "$200.00 cloud subscription",
        "amount": "$200.00",
        "note": "Taxable under SDCL § 10-45-5.2"
      },
      {
        "label": "Combined Taxable Base",
        "formula": "$1,000.00 + $200.00",
        "amount": "$1,200.00",
        "note": "Total taxable purchase"
      },
      {
        "label": "Combined Sales Tax (6.20%)",
        "formula": "$1,200.00 × 6.20%",
        "amount": "$74.40",
        "note": "State ($50.40) + Sioux Falls ($24.00)"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$1,200.00 + $74.40",
        "amount": "$1,274.40",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Sioux Falls, both hardware and SaaS subscriptions are fully taxable at the combined 6.20% rate, generating $74.40 in total sales tax on the $1,200 purchase."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500.00 Rapid City Receipt",
    "scenario": "A retail merchant in Rapid City collects an all-inclusive $500.00 payment for taxable goods at the combined 6.20% rate. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$500.00",
      "combinedRate": "6.20%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.062)",
        "amount": "$470.81",
        "note": "Retained business net revenue"
      },
      {
        "label": "Combined Sales Tax Due",
        "formula": "$500.00 - $470.81",
        "amount": "$29.19",
        "note": "State ($19.77) and Rapid City ($9.42)"
      },
      {
        "label": "Verification Calculation",
        "formula": "$470.81 × 6.20%",
        "amount": "$29.19",
        "note": "Reconciles exactly to $500.00 total"
      }
    ],
    "takeaway": "From an all-inclusive $500.00 transaction in Rapid City, the retailer retains $470.81 and owes $29.19 in sales tax on their South Dakota E-Path return."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in South Dakota?",
      "answer": "The statutory state sales tax rate is 4.20% (reduced from 4.5% through June 30, 2027). In cities with a 2.00% municipal tax (such as Sioux Falls and Rapid City), the combined rate is 6.20%.",
      "sourceUrl": "https://dor.sd.gov/businesses/taxes/sales-use-tax/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in South Dakota?",
      "answer": "Yes. South Dakota has one of the broadest sales tax codes in the nation; SaaS, cloud software access, and digital products are fully taxable at standard combined rates.",
      "sourceUrl": "https://dor.sd.gov/businesses/taxes/sales-use-tax/"
    },
    {
      "question": "Are groceries taxable in South Dakota?",
      "answer": "Yes. Food products and groceries for home consumption are fully taxable in South Dakota at the combined state and municipal sales tax rate.",
      "sourceUrl": "https://dor.sd.gov/businesses/taxes/sales-use-tax/"
    },
    {
      "question": "What is the South Dakota economic nexus threshold for remote sellers?",
      "answer": "Out-of-state remote sellers establish economic nexus when gross sales delivered into South Dakota exceed $100,000 annually. The 200-transaction test was repealed in 2023.",
      "sourceUrl": "https://dor.sd.gov/businesses/taxes/sales-use-tax/"
    },
    {
      "question": "Does South Dakota hold an annual sales tax holiday?",
      "answer": "No. South Dakota does not hold an annual statewide sales tax holiday.",
      "sourceUrl": "https://dor.sd.gov/businesses/taxes/sales-use-tax/"
    }
  ]
};

export default southDakotaContent;
