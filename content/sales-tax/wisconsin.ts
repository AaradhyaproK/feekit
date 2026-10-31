import type { PageContent } from '../types.ts';

export const wisconsinContent: PageContent = {
  "slug": "wisconsin",
  "family": "sales-tax",
  "title": "Wisconsin Sales Tax Calculator (5.00% to 7.90%) | FeeKit",
  "metaDescription": "Calculate Wisconsin sales tax with DOR rates (5.0% state, 0.5% county, 2.0% Milwaukee city). Pub 240 SaaS exemption, origin sourcing for in-state retail, and $100k nexus.",
  "h1": "Wisconsin Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Wisconsin Department of Revenue",
    "url": "https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx",
    "citation": "Wis. Stat. Chapter 77, Subchapter III (General Sales and Use Tax) and Wisconsin DOR Publication 240."
  },
  "overview": "The State of Wisconsin levies a statutory baseline sales and use tax rate of 5.00% under Wis. Stat. § 77.52. In addition to the state base, 68 of Wisconsin’s 72 counties adopt an optional 0.50% county sales tax, resulting in a standard combined rate of 5.50% across most municipalities (including Madison and Green Bay). However, following major bipartisan municipal reform legislation (2023 Wisconsin Act 12), the City of Milwaukee enacted a 2.00% city sales tax and Milwaukee County increased its county tax to 0.90%, creating a combined sales tax rate of 7.90% within the City of Milwaukee. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Wisconsin sales.",
  "sections": [
    {
      "id": "wi-rates-and-milwaukee-act-12",
      "title": "Wisconsin Base Rate (5.00%), County Taxes, and Milwaukee Act 12 Rates (7.90%)",
      "body": "Wisconsin’s sales tax code combines state, county, and select municipal rates:\n\n- **Statewide Baseline Rate**: **5.00%**. Applies to all taxable retail transactions statewide.\n- **County Discretionary Taxes**: **0.50%**. Adopted by the vast majority of Wisconsin counties (e.g., Dane County/Madison, Brown County/Green Bay). Only a small handful of rural counties (Manitowoc, Menominee, Waupaca, Winnebago) maintain a flat 5.00% rate.\n- **Milwaukee Act 12 High-Rate District**: **7.90% total combined rate**. Under 2023 Wisconsin Act 12 (effective January 1, 2024):\n  - Milwaukee County increased its county sales tax from 0.50% to **0.90%**.\n  - The City of Milwaukee implemented a new **2.00% municipal sales tax**.\n  - Purchases made or delivered within the City of Milwaukee incur a combined rate of **7.90%** (5.00% state + 0.90% county + 2.00% city)."
    },
    {
      "id": "wi-saas-exemption-and-taxability",
      "title": "Taxability Framework: Complete SaaS Exemption, Clothing, and Groceries",
      "body": "Statutory product taxability under Wisconsin Department of Revenue regulations:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Wisconsin DOR Publication 240 and administrative rulings, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without downloading software locally. Prewritten software downloaded onto a local hard drive is taxable.\n2. **Clothing and Apparel**: **Fully Taxable (5.00% - 7.90%)**. Everyday clothing and footwear are subject to full combined state and county rates year-round.\n3. **Food and Food Ingredients (Groceries)**: **Exempt**. Unprepared food items for home consumption are exempt under Wis. Stat. § 77.54(20n). Candy, soft drinks, dietary supplements, and prepared hot meals are taxable.\n4. **Freight and Delivery Surcharges**: Under Wis. Stat. § 77.51(15b), delivery charges billed by the retailer for taxable products are included in the taxable sales price, even if stated separately."
    },
    {
      "id": "wi-economic-nexus-and-sourcing",
      "title": "Wisconsin Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework",
      "body": "Following post-Wayfair administrative rule changes under 2018 Act 368:\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Wisconsin upon exceeding **$100,000 in gross sales** delivered into the state during the current or preceding calendar year. (The previous 200-transaction count threshold was formally eliminated by the legislature in 2021).\n- **In-State Sourcing (Modified Origin/Destination)**: In-state retail storefront sales are sourced to the **retail store location**. In-state deliveries made by the seller or common carrier are sourced to the **delivery destination**.\n- **Remote Out-of-State Sellers (Destination Sourcing)**: Out-of-state remote sellers collect the exact combined rate applicable to the customer's **destination delivery address**.\n- **Marketplace Facilitator Legislation**: Platforms (Amazon, eBay, Etsy, Walmart) collect and remit Wisconsin sales tax on all marketplace orders, relieving third-party sellers of direct remittance duties."
    },
    {
      "id": "wi-filing-compliance-my-tax-account",
      "title": "My Tax Account Portal, Filing Deadlines, and Retailer’s Discounts",
      "body": "Tax compliance administration enforced by the Wisconsin Department of Revenue:\n\n- **My Tax Account Portal**: Businesses register for a Wisconsin Business Tax Registration (BTR) certificate electronically through **My Tax Account**. The initial registration fee is $20.\n- **Filing Deadlines**: Sales tax returns (Form ST-12) are due on the **last day of the month** following the close of the reporting period (e.g. Q1 return due April 30).\n- **Retailer’s Discount (Timely Filing Compensation)**: Under Wis. Stat. § 77.61(4)(c), retailers who file and pay returns on time may deduct a retailer’s discount of **0.50% of the sales tax collected** (capped at $1,000 per reporting period).\n- **Sales Tax Holiday**: Wisconsin does not host an annual sales tax holiday.\n- **Delinquency Penalties**: Late filings incur a mandatory **$20 late filing fee** plus a statutory penalty of **5% per month** of the unpaid tax (up to 25% maximum) and statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Electronics Purchase in Milwaukee (7.90% Rate)",
    "scenario": "A consumer in downtown Milwaukee, Wisconsin purchases a $400.00 tablet from a consumer electronics retailer.",
    "inputs": {
      "tabletSubtotal": "$400.00",
      "wisconsinStateRate": "5.00%",
      "milwaukeeCountyRate": "0.90%",
      "milwaukeeCityRate": "2.00%",
      "combinedRate": "7.90%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$400.00 merchandise",
        "amount": "$400.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Wisconsin State Component (5.00%)",
        "formula": "$400.00 × 5.00%",
        "amount": "$20.00",
        "note": "State general fund"
      },
      {
        "label": "Milwaukee County Component (0.90%)",
        "formula": "$400.00 × 0.90%",
        "amount": "$3.60",
        "note": "Act 12 county rate"
      },
      {
        "label": "City of Milwaukee Component (2.00%)",
        "formula": "$400.00 × 2.00%",
        "amount": "$8.00",
        "note": "Act 12 municipal rate"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$400.00 + $20.00 + $3.60 + $8.00",
        "amount": "$431.60",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In the City of Milwaukee, the 7.90% combined rate adds $31.60 in total sales tax to a $400 electronics purchase, compared to $22.00 ($5.50%) in neighboring Madison."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600.00 Madison Receipt",
    "scenario": "A retail store in Madison, Wisconsin (5.50% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "combinedRate": "5.50%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.055)",
        "amount": "$568.72",
        "note": "True retail revenue retained"
      },
      {
        "label": "Wisconsin Sales Tax Owed",
        "formula": "$600.00 - $568.72",
        "amount": "$31.28",
        "note": "Remitted to Wisconsin DOR"
      },
      {
        "label": "Verification Calculation",
        "formula": "$568.72 × 5.50%",
        "amount": "$31.28",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Madison, the business retains $568.72 net revenue and owes $31.28 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Wisconsin for 2026?",
      "answer": "The statewide base rate is 5.00%. Most counties levy a 0.50% local tax, making the rate 5.50%. However, in the City of Milwaukee, the combined rate is 7.90% following 2023 Wisconsin Act 12.",
      "sourceUrl": "https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx"
    },
    {
      "question": "Why is the sales tax rate in Milwaukee so high (7.90%)?",
      "answer": "Under 2023 Wisconsin Act 12, the City of Milwaukee enacted a 2.00% municipal sales tax and Milwaukee County increased its county rate from 0.50% to 0.90% to address municipal pension obligations, pushing the combined rate to 7.90%.",
      "sourceUrl": "https://www.revenue.wi.gov/Pages/TaxPro/2023/news-2023-11-28.aspx"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Wisconsin?",
      "answer": "No. Under Wisconsin DOR Publication 240, SaaS and remotely hosted cloud software are 100% exempt from sales tax because customers do not take physical or downloaded possession of the software.",
      "sourceUrl": "https://www.revenue.wi.gov/DORPublications/pb240.pdf"
    },
    {
      "question": "What is the economic nexus threshold in Wisconsin?",
      "answer": "Out-of-state remote sellers establish economic nexus in Wisconsin when retail sales delivered into the state exceed $100,000 in gross revenue during the current or preceding calendar year.",
      "sourceUrl": "https://www.revenue.wi.gov/Pages/FAQS/ise-RemoteSellers.aspx"
    },
    {
      "question": "Does Wisconsin have an annual sales tax holiday?",
      "answer": "No. Wisconsin does not hold an annual sales tax holiday.",
      "sourceUrl": "https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx"
    }
  ]
};

export default wisconsinContent;
