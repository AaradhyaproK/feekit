import type { PageContent } from '../types.ts';

export const nevadaContent: PageContent = {
  "slug": "nevada",
  "family": "sales-tax",
  "title": "Nevada Sales Tax Calculator (6.85% to 8.375%) | FeeKit",
  "metaDescription": "Calculate Nevada sales tax with Department of Taxation rates (6.85% state, max 8.375% Las Vegas). NAC 372.660 SaaS exemption, destination sourcing, and $100k nexus.",
  "h1": "Nevada Sales Tax Calculator & Department of Taxation Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Nevada Department of Taxation",
    "url": "https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/",
    "citation": "Nev. Rev. Stat. Chapter 372 (Sales and Use Taxes) and Nev. Admin. Code ch. 372."
  },
  "overview": "The State of Nevada imposes a statutory base sales and use tax rate of 6.85% under Nev. Rev. Stat. § 372.105. Nevada counties enforce additional local option sales taxes to fund public safety, flood control, and regional transportation, pushing combined rates between 6.85% and 8.375% across major urban areas (including Las Vegas, Reno, and Carson City). Clark County (Las Vegas) imposes the highest rate in the state at 8.375%, while Washoe County (Reno) levies an 8.265% combined rate. Nevada provides a complete sales tax exemption for cloud software (SaaS) under NAC 372.660. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Nevada sales or 200 separate transactions.",
  "sections": [
    {
      "id": "nv-rates-and-county-options",
      "title": "Nevada Base Rate (6.85%) and County Option Rates (Las Vegas 8.375%)",
      "body": "Nevada’s sales tax code combines a uniform state baseline with county-level public safety levies:\n\n- **Statewide Baseline Rate**: **6.85%**. Comprised of 2.00% state general tax, 2.60% Local School Support Tax (LSST), and 2.25% Basic City-County Relief Tax (BCCRT).\n- **County Local Option Taxes**:\n  - **Clark County (Las Vegas / Henderson)**: **8.375% combined rate** (6.85% baseline + 1.525% county flood control, police, and transit taxes).\n  - **Washoe County (Reno / Sparks)**: **8.265% combined rate** (6.85% baseline + 1.415% Washoe County local taxes).\n  - **Carson City**: **7.60% combined rate** (6.85% baseline + 0.75% Carson City municipal tax).\n  - **Rural Counties (Eureka, Esmeralda, Mineral)**: **6.85% flat rate** (State base rate with zero county optional tax)."
    },
    {
      "id": "nv-saas-exemption-and-taxability",
      "title": "Taxability Framework: Complete SaaS Exemption, Clothing, and Groceries",
      "body": "Statutory product taxability under Nevada Department of Taxation regulations:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Nevada Administrative Code (NAC) 372.660, cloud SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.\n2. **Clothing and Footwear**: **Fully Taxable (6.85% - 8.375%)**. Everyday apparel and footwear are fully taxable at combined rates year-round.\n3. **Food for Home Consumption (Groceries)**: **Exempt**. Essential food products for home preparation and consumption are exempt under NRS 372.284. Prepared hot restaurant meals, candy, and soft drinks are taxable at full rates.\n4. **Freight and Delivery Charges**: Under NAC 372.101, delivery charges are exempt from Nevada sales tax if stated separately on the invoice and delivery occurs directly to the purchaser."
    },
    {
      "id": "nv-economic-nexus-and-sourcing",
      "title": "Nevada Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Following post-Wayfair statutory rules codified in NRS 372.7243:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Nevada upon exceeding either threshold in the current or preceding calendar year:\n  - More than **$100,000 in gross revenue** from retail sales delivered into Nevada; **OR**\n  - **200 or more separate retail transactions** delivered into the state.\n- **Destination Sourcing**: Nevada operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state and county rate applicable to the delivery address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, Walmart) collect and remit Nevada sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "nv-filing-compliance-nevadatax",
      "title": "NevadaTax Portal Registration, Last-Day-of-the-Month Deadlines, and Penalties",
      "body": "Tax compliance administration enforced by the Nevada Department of Taxation:\n\n- **NevadaTax Portal Registration**: Businesses register for a Nevada Sales Tax Permit online via **NevadaTax**. A $15 permit fee applies per physical business location.\n- **Filing Deadlines**: Sales tax returns (Form TXR-01) are due on or before the **last day of the month** following the reporting period for monthly remitters.\n- **Collection Allowance (Timely Filing Discount)**: Under NRS 372.370, retailers who file and pay returns on time may deduct a collection allowance of **0.25% of the sales tax collected** as compensation.\n- **Sales Tax Holiday**: Nevada holds an annual \"Nevada Day\" sales tax holiday in late October exclusively for qualifying members of the Nevada National Guard.\n- **Delinquency Penalties**: Late filings incur a penalty of **10% of the unpaid tax**, plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Furniture Order in Las Vegas (8.375% Rate)",
    "scenario": "A resident in Las Vegas, Nevada (Clark County, 8.375% rate) purchases an $800.00 sofa from a home furnishings showroom.",
    "inputs": {
      "sofaSubtotal": "$800.00",
      "clarkCountyRate": "8.375%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$800.00 furniture",
        "amount": "$800.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Nevada Sales Tax (8.375%)",
        "formula": "$800.00 × 8.375%",
        "amount": "$67.00",
        "note": "Includes 6.85% state + 1.525% Clark County"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$800.00 + $67.00",
        "amount": "$867.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Las Vegas, the 8.375% combined sales tax on an $800 furniture purchase equals $67.00, bringing total checkout cost to $867.00."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500 Reno Receipt",
    "scenario": "A retail store in Reno, Nevada (Washoe County, 8.265% rate) collects an all-inclusive $500.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "renoRate": "8.265%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.08265)",
        "amount": "$461.82",
        "note": "True retail revenue retained"
      },
      {
        "label": "Nevada Sales Tax Owed",
        "formula": "$500.00 - $461.82",
        "amount": "$38.18",
        "note": "Remitted via NevadaTax"
      },
      {
        "label": "Verification Calculation",
        "formula": "$461.82 × 8.265%",
        "amount": "$38.18",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in Reno, the business retains $461.82 net revenue and owes $38.18 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Nevada for 2026?",
      "answer": "The statewide base rate in Nevada is 6.85%. County local option taxes push combined rates between 6.85% and 8.375% (8.375% in Las Vegas/Clark County, 8.265% in Reno/Washoe County).",
      "sourceUrl": "https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Nevada?",
      "answer": "No. Under NAC 372.660, cloud SaaS, remotely hosted software, and online data access are 100% exempt from sales tax.",
      "sourceUrl": "https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/"
    },
    {
      "question": "Are groceries subject to sales tax in Nevada?",
      "answer": "Unprepared food items for home consumption are 100% exempt from Nevada sales tax under NRS 372.284. Prepared meals, alcohol, and candy remain taxable.",
      "sourceUrl": "https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/"
    },
    {
      "question": "What is the economic nexus threshold in Nevada?",
      "answer": "Out-of-state remote sellers establish economic nexus in Nevada when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding calendar year.",
      "sourceUrl": "https://tax.nv.gov/Tax_Types/Remote_Sellers/"
    },
    {
      "question": "Does Nevada have an annual sales tax holiday?",
      "answer": "Nevada holds a specialized sales tax holiday in late October exclusively for qualifying members of the Nevada National Guard. There is no general public tax holiday.",
      "sourceUrl": "https://tax.nv.gov/Tax_Types/Nevada_Day_Sales_Tax_Holiday/"
    }
  ]
};

export default nevadaContent;
