import type { PageContent } from '../types.ts';

export const southCarolinaContent: PageContent = {
  "slug": "south-carolina",
  "family": "sales-tax",
  "title": "South Carolina Sales Tax Calculator (6.00% to 9.00%) | FeeKit",
  "metaDescription": "Calculate South Carolina sales tax with SCDOR rates (6.0% state, max 9.0% Charleston). Taxable SaaS under Revenue Ruling 03-5, annual August tax holiday, and $100k nexus.",
  "h1": "South Carolina Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "South Carolina Department of Revenue",
    "url": "https://dor.sc.gov/tax/sales",
    "citation": "S.C. Code Ann. Title 12, Chapter 36 (Sales and Use Tax Act) and SC Revenue Ruling 03-5."
  },
  "overview": "The State of South Carolina imposes a statutory base sales and use tax rate of 6.00% under S.C. Code Ann. § 12-36-910. Local county governments are authorized to levy discretionary local option sales taxes—including transportation, capital project, and education capital improvement taxes—ranging from 1.00% to 3.00%, creating combined rates as high as 9.00% in major urban and tourist centers (including Charleston, Columbia, and Myrtle Beach). South Carolina treats Software as a Service (SaaS) as fully taxable communication services under SC Revenue Ruling 03-5. Remote out-of-state merchants establish economic nexus upon reaching $100,000 in gross sales delivered into South Carolina.",
  "sections": [
    {
      "id": "sc-rates-and-local-county-taxes",
      "title": "South Carolina Base Rate (6.00%) and County Option Surtaxes (Max 9.00%)",
      "body": "South Carolina’s sales tax code combines a uniform state baseline with county-level capital project levies:\n\n- **Statewide Baseline Rate**: **6.00%**. Applies to all retail sales of tangible personal property and taxable communication services statewide.\n- **Local Option Surtaxes**: Counties enact local option sales taxes (LOST), capital project sales taxes (CPST), and transportation taxes:\n  - **Charleston (Charleston County)**: **9.00% combined rate** (6.00% state + 1.00% transportation tax + 1.00% education tax + 1.00% local option tax).\n  - **Columbia (Richland County)**: **8.00% combined rate** (6.00% state + 1.00% local option + 1.00% transportation tax).\n  - **Myrtle Beach (Horry County)**: **8.00% combined rate** (6.00% state + 1.00% education tax + 1.00% tourist development tax).\n  - **Greenville (Greenville County)**: **6.00% flat rate** (State baseline with zero county discretionary tax)."
    },
    {
      "id": "sc-saas-taxability-communication-services",
      "title": "Taxability Framework: Taxable SaaS as Communication Services & Groceries",
      "body": "Statutory product taxability enforced by the South Carolina Department of Revenue (SCDOR):\n\n1. **Software as a Service (SaaS)**: **Fully Taxable (6.00% + Local)**. Under SC Revenue Ruling 03-5 and SC Private Letter Ruling 12-1, South Carolina treats cloud software, remotely accessed applications, and database access as taxable communication services under S.C. Code Ann. § 12-36-910(B)(3).\n2. **Clothing and Apparel**: **Fully Taxable**. Everyday clothing and footwear are subject to full combined rates year-round, except during the annual August sales tax holiday.\n3. **Groceries & Food for Home Consumption**: **Exempt from State Tax (0.00%), Local Taxes May Apply**. Basic grocery staples are exempt from the 6.00% state sales tax under S.C. Code Ann. § 12-36-2120(75). However, certain local option county taxes still apply to food. Prepared hot meals are taxable at full rates.\n4. **Freight and Delivery Charges**: Freight and shipping charges billed in connection with the sale of taxable property are taxable under S.C. Code Ann. § 12-36-90(1)(b), regardless of separate stating."
    },
    {
      "id": "sc-economic-nexus-and-sourcing",
      "title": "South Carolina Remote Seller Nexus ($100,000 Threshold) & Sourcing Rules",
      "body": "Following post-Wayfair statutory rules codified in SC Revenue Ruling 18-14:\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in South Carolina upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (South Carolina has no transaction count threshold).\n- **Destination Sourcing**: South Carolina enforces destination sourcing for all delivered merchandise. Remote sellers collect the exact combined state and county rate applicable to the delivery address.\n- **Marketplace Facilitator Law**: Under Senate Bill 214 (effective November 2019), marketplace facilitators (Amazon, eBay, Etsy, Walmart) collect and remit South Carolina sales tax on all marketplace orders, relieving third-party sellers of direct liability."
    },
    {
      "id": "sc-filing-compliance-mydorway",
      "title": "MyDORWAY Portal Registration, 20th-of-the-Month Deadlines, and Tax Holiday",
      "body": "Compliance requirements administered by the South Carolina Department of Revenue:\n\n- **MyDORWAY Portal Registration**: Remote and physical merchants obtain a South Carolina Retail License online via **MyDORWAY**. A $50 license fee applies per physical retail location.\n- **Filing Deadlines**: Sales tax returns (Form ST-3) are due on or before the **20th day of the month** following the reporting period for monthly remitters.\n- **Timely Filing Discount**: Under S.C. Code Ann. § 12-36-2610, retailers who file and pay returns on time may deduct a taxpayer discount of **3.00% of the state sales tax collected** (capped at $3,000 per fiscal year).\n- **Annual Sales Tax Holiday**: South Carolina holds an annual **3-day Sales Tax Holiday during the first weekend of August**, exempting qualifying clothing, school supplies, computers, and musical instruments with **no price ceiling**.\n- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Furniture Order in Charleston (9.00% Rate)",
    "scenario": "A resident in Charleston, South Carolina purchases an $800.00 dining set from a retail furniture showroom.",
    "inputs": {
      "furnitureSubtotal": "$800.00",
      "stateRate": "6.00%",
      "charlestonLocalRate": "3.00%",
      "combinedRate": "9.00%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$800.00 merchandise",
        "amount": "$800.00",
        "note": "Furniture is taxable personal property"
      },
      {
        "label": "South Carolina State Tax (6.00%)",
        "formula": "$800.00 × 6.00%",
        "amount": "$48.00",
        "note": "State general fund"
      },
      {
        "label": "Charleston County Taxes (3.00%)",
        "formula": "$800.00 × 3.00%",
        "amount": "$24.00",
        "note": "Transportation + education + local option"
      },
      {
        "label": "Total South Carolina Sales Tax",
        "formula": "$48.00 + $24.00",
        "amount": "$72.00",
        "note": "Combined 9.00% sales tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$800.00 + $72.00",
        "amount": "$872.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Charleston, the 9.00% combined tax on an $800 furniture purchase equals $72.00, bringing total checkout cost to $872.00."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Columbia Receipt",
    "scenario": "A retail store in Columbia, South Carolina (8.00% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "columbiaRate": "8.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.08)",
        "amount": "$555.56",
        "note": "True retail revenue retained"
      },
      {
        "label": "South Carolina Sales Tax Owed",
        "formula": "$600.00 - $555.56",
        "amount": "$44.44",
        "note": "Remitted via MyDORWAY"
      },
      {
        "label": "Verification Calculation",
        "formula": "$555.56 × 8.00%",
        "amount": "$44.44",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Columbia, the business retains $555.56 net revenue and owes $44.44 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in South Carolina for 2026?",
      "answer": "The statewide base sales tax rate in South Carolina is 6.00%. Local county surtaxes add between 1.00% and 3.00%, making the total combined rate 6.00% to 9.00%.",
      "sourceUrl": "https://dor.sc.gov/tax/sales"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in South Carolina?",
      "answer": "Yes. South Carolina treats cloud software and SaaS subscriptions as taxable communication services under SC Revenue Ruling 03-5.",
      "sourceUrl": "https://dor.sc.gov/policy-index/RR03-5.pdf"
    },
    {
      "question": "Are groceries subject to sales tax in South Carolina?",
      "answer": "Unprepared food items for home consumption are exempt from the 6.00% state sales tax, although certain county local option taxes still apply to groceries in select jurisdictions.",
      "sourceUrl": "https://dor.sc.gov/tax/sales/food-tax"
    },
    {
      "question": "What is the economic nexus threshold in South Carolina?",
      "answer": "Out-of-state remote sellers establish economic nexus in South Carolina when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.",
      "sourceUrl": "https://dor.sc.gov/tax/sales/remote-sellers"
    },
    {
      "question": "When is South Carolina’s annual sales tax holiday?",
      "answer": "South Carolina hosts an annual 3-day Sales Tax Holiday during the first weekend of August, exempting qualifying clothing, school supplies, computers, and musical instruments with no dollar cap.",
      "sourceUrl": "https://dor.sc.gov/tax-free-weekend"
    }
  ]
};

export default southCarolinaContent;
