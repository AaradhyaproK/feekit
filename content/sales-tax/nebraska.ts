import type { PageContent } from '../types.ts';

export const nebraskaContent: PageContent = {
  "slug": "nebraska",
  "family": "sales-tax",
  "title": "Nebraska Sales Tax Calculator (5.50% to 7.50%) | FeeKit",
  "metaDescription": "Calculate Nebraska sales tax with Department of Revenue rates (5.5% state, max 7.50% Omaha). Regulation 1-071 SaaS exemption, destination sourcing, and $100k nexus.",
  "h1": "Nebraska Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Nebraska Department of Revenue",
    "url": "https://revenue.nebraska.gov/businesses/sales-and-use-tax",
    "citation": "Neb. Rev. Stat. Chapter 77, Article 27 (Nebraska Revenue Act of 1967) and Sales and Use Tax Reg 1-071."
  },
  "overview": "The State of Nebraska levies a statutory base sales and use tax rate of 5.50% under Neb. Rev. Stat. § 77-2701.02. Local municipalities are authorized to levy local option sales taxes ranging from 0.50% to 2.00%, pushing combined retail sales tax rates between 6.00% and 7.50% across major commercial markets (including Omaha, Lincoln, and Bellevue). Omaha levies a combined 7.00% rate, while Lincoln imposes a 7.25% rate. Nebraska provides a sales tax exemption for cloud software (SaaS) under Sales and Use Tax Regulation 1-071. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Nebraska sales or 200 separate transactions.",
  "sections": [
    {
      "id": "ne-rates-and-municipal-options",
      "title": "Nebraska Base Rate (5.50%) and Municipal Option Surtaxes (Max 7.50%)",
      "body": "Nebraska’s sales tax code combines a uniform state baseline with city-level options:\n\n- **Statewide Baseline Rate**: **5.50%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable enumerated services.\n- **Municipal Local Option Taxes**:\n  - **Omaha (Douglas County)**: **7.00% combined rate** (5.50% state + 1.50% City of Omaha municipal tax).\n  - **Lincoln (Lancaster County)**: **7.25% combined rate** (5.50% state + 1.75% City of Lincoln municipal tax).\n  - **Bellevue (Sarpy County)**: **7.00% combined rate** (5.50% state + 1.50% City of Bellevue tax).\n  - **High-Rate Municipalities**: Certain smaller cities levy a 2.00% municipal tax, reaching the statutory maximum ceiling of **7.50%**."
    },
    {
      "id": "ne-saas-exemption-and-taxability",
      "title": "Taxability Framework: Non-Taxable SaaS, Groceries, and Clothing",
      "body": "Statutory product taxability under Nebraska Department of Revenue regulations:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Nebraska Sales and Use Tax Regulation 1-071, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.\n2. **Clothing and Footwear**: **Fully Taxable (5.50% - 7.50%)**. Everyday apparel and footwear are fully taxable at combined rates year-round.\n3. **Food and Food Ingredients (Groceries)**: **Exempt**. Food items for home consumption are exempt under Neb. Rev. Stat. § 77-2704.10. Prepared hot food, candy, and soft drinks are taxable at full rates.\n4. **Freight and Delivery Charges**: Under Neb. Rev. Stat. § 77-2701.35, delivery charges billed by the retailer for taxable products are included in the taxable sales price."
    },
    {
      "id": "ne-economic-nexus-and-sourcing",
      "title": "Nebraska Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Following post-Wayfair statutory rules codified in Neb. Rev. Stat. § 77-2701.13:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Nebraska upon exceeding either threshold in the current or preceding calendar year:\n  - More than **$100,000 in gross revenue** from retail sales delivered into Nebraska; **OR**\n  - **200 or more separate retail transactions** delivered into the state.\n- **Destination Sourcing**: Nebraska operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state and municipal rate applicable to the delivery address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Nebraska sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "ne-filing-compliance-nebtax",
      "title": "NebTax Portal Registration, 20th-of-the-Month Deadlines, and Penalties",
      "body": "Tax compliance administration enforced by the Nebraska Department of Revenue:\n\n- **NebTax Portal Registration**: Businesses register for a Nebraska Sales Tax Permit online via **NebTax**.\n- **Filing Deadlines**: Sales tax returns (Form 10) are due on or before the **20th day of the month** following the reporting period for monthly remitters.\n- **Collection Fee (Timely Filing Discount)**: Under Neb. Rev. Stat. § 77-2708, retailers who file and pay returns on time may deduct a collection fee of **3.00% of the first $3,000** of tax collected, and **0.33% of the excess**, capped at $150 per month.\n- **Sales Tax Holiday**: Nebraska does not host an annual sales tax holiday.\n- **Delinquency Penalties**: Late filings incur a penalty of **$25 or 10% of the unpaid tax** (whichever is greater), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Omaha (7.00% Rate)",
    "scenario": "A resident in Omaha, Nebraska purchases $500.00 of commercial tools from a home improvement retailer.",
    "inputs": {
      "toolsSubtotal": "$500.00",
      "nebraskaStateRate": "5.50%",
      "omahaCityRate": "1.50%",
      "combinedRate": "7.00%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 tools",
        "amount": "$500.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Nebraska State Tax (5.50%)",
        "formula": "$500.00 × 5.50%",
        "amount": "$27.50",
        "note": "State general fund"
      },
      {
        "label": "City of Omaha Tax (1.50%)",
        "formula": "$500.00 × 1.50%",
        "amount": "$7.50",
        "note": "Municipal sales tax share"
      },
      {
        "label": "Total Nebraska Sales Tax",
        "formula": "$27.50 + $7.50",
        "amount": "$35.00",
        "note": "Combined 7.00% sales tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $35.00",
        "amount": "$535.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Omaha, the 7.00% combined sales tax on a $500 tool purchase equals $35.00, bringing total checkout cost to $535.00."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Lincoln Receipt",
    "scenario": "A retail store in Lincoln, Nebraska (7.25% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "lincolnRate": "7.25%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.0725)",
        "amount": "$559.44",
        "note": "True retail revenue retained"
      },
      {
        "label": "Nebraska Sales Tax Owed",
        "formula": "$600.00 - $559.44",
        "amount": "$40.56",
        "note": "Remitted via NebTax"
      },
      {
        "label": "Verification Calculation",
        "formula": "$559.44 × 7.25%",
        "amount": "$40.56",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Lincoln, the business retains $559.44 net revenue and owes $40.56 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Nebraska for 2026?",
      "answer": "The statewide base sales tax rate in Nebraska is 5.50%. Municipal local option taxes push combined rates between 6.00% and 7.50% across most commercial markets.",
      "sourceUrl": "https://revenue.nebraska.gov/businesses/sales-and-use-tax"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Nebraska?",
      "answer": "No. Under Nebraska Sales and Use Tax Regulation 1-071, cloud-based SaaS and remotely hosted software are classified as non-taxable services.",
      "sourceUrl": "https://revenue.nebraska.gov/businesses/sales-and-use-tax"
    },
    {
      "question": "Are groceries subject to sales tax in Nebraska?",
      "answer": "Unprepared food items for home consumption are 100% exempt from sales tax under Neb. Rev. Stat. § 77-2704.10. Prepared food and candy are taxable.",
      "sourceUrl": "https://revenue.nebraska.gov/businesses/sales-and-use-tax"
    },
    {
      "question": "What is the economic nexus threshold in Nebraska?",
      "answer": "Out-of-state remote sellers establish economic nexus in Nebraska when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.",
      "sourceUrl": "https://revenue.nebraska.gov/businesses/remote-sellers"
    },
    {
      "question": "Does Nebraska have an annual sales tax holiday?",
      "answer": "No. Nebraska does not host an annual sales tax holiday.",
      "sourceUrl": "https://revenue.nebraska.gov/businesses/sales-and-use-tax"
    }
  ]
};

export default nebraskaContent;
