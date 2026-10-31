import type { PageContent } from '../types.ts';

export const kansasContent: PageContent = {
  "slug": "kansas",
  "family": "sales-tax",
  "title": "Kansas Sales Tax Calculator (6.50% to 10.60%) | FeeKit",
  "metaDescription": "Calculate Kansas sales tax with KDOR rates (6.5% state, max 10.60%). Grocery state tax phase-out (0.0%), PLR P-2014-004 SaaS exemption, and $100k nexus.",
  "h1": "Kansas Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Kansas Department of Revenue",
    "url": "https://www.ksrevenue.gov/bussales.html",
    "citation": "Kan. Stat. Ann. Chapter 79, Article 36 (Kansas Retailers Sales Tax Act) and Private Letter Ruling P-2014-004."
  },
  "overview": "The State of Kansas imposes a statutory baseline sales and use tax rate of 6.50% under K.S.A. 79-3603. Local county governments and incorporated cities levy additional local option sales taxes, pushing combined rates between 7.50% and 10.60% across major commercial markets (including Wichita, Overland Park, and Topeka). Following major tax relief legislation (House Bill 2106), Kansas completed its multi-year phase-out of the state sales tax on groceries, reducing the state grocery tax to 0.00% on January 1, 2025. Kansas treats Software as a Service (SaaS) as a non-taxable service under Private Letter Ruling P-2014-004. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Kansas sales.",
  "sections": [
    {
      "id": "ks-rates-and-local-surtaxes",
      "title": "Kansas Base Rate (6.50%) and Municipal Surtaxes (Max 10.60%)",
      "body": "Kansas’s sales tax code combines a moderate state baseline with significant local levies:\n\n- **Statewide Baseline Rate**: **6.50%**. Applies to all retail sales of tangible personal property and taxable enumerated services statewide.\n- **Municipal and County Discretionary Surtaxes**:\n  - **Wichita (Sedgwick County)**: **7.50% combined rate** (6.50% state + 1.00% Sedgwick County local tax).\n  - **Overland Park (Johnson County)**: **9.10% combined rate** (6.50% state + 1.475% county + 1.125% municipal taxes).\n  - **Topeka (Shawnee County)**: **9.15% combined rate** (6.50% state + 1.15% county + 1.50% city tax).\n  - **High-Rate Commercial Plazas**: Certain shopping districts with transportation development districts (TDDs) reach combined rates as high as **10.60%**."
    },
    {
      "id": "ks-saas-exemption-and-grocery-phaseout",
      "title": "Taxability Framework: Non-Taxable SaaS, 0% State Grocery Tax, and Clothing",
      "body": "Statutory product taxability under Kansas Department of Revenue (KDOR) regulations:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Kansas Private Letter Ruling P-2014-004 and Opinion 2007-02, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.\n2. **Food and Food Ingredients (Groceries)**: **0.00% State Tax, Local Taxes Apply**. Under House Bill 2106, Kansas phased out its state sales tax on groceries completely by January 1, 2025. Unprepared food items are exempt from the 6.50% state tax, but local city and county sales taxes still apply (typically 1.0% to 3.0%).\n3. **Clothing and Apparel**: **Fully Taxable (6.50% - 10.60%)**. Clothing is taxable year-round in Kansas at combined rates.\n4. **Freight and Delivery Charges**: Under K.S.A. 79-3602(ll), delivery charges billed by the seller in connection with taxable property are included in the taxable sales price."
    },
    {
      "id": "ks-economic-nexus-and-sourcing",
      "title": "Kansas Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework",
      "body": "Following post-Wayfair statutory rules codified in K.S.A. 79-3670:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Kansas upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (Kansas’s historic controversial \"zero-dollar\" notice was overturned by legislative enactment of the $100k threshold).\n- **Destination Sourcing**: Kansas operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state, county, and city rate applicable to the delivery address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Kansas sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "ks-filing-compliance-kdor",
      "title": "KDOR Customer Service Center, 25th-of-the-Month Deadlines, and Penalties",
      "body": "Tax compliance administration enforced by the Kansas Department of Revenue:\n\n- **Customer Service Center Registration**: Businesses register for a Kansas Retailers’ Sales Tax Registration Certificate online via the **Kansas Customer Service Center**.\n- **Filing Deadlines**: Sales tax returns (Form ST-36) are due on or before the **25th day of the month** following the reporting period for monthly remitters.\n- **Sales Tax Holiday**: Kansas does not hold an annual sales tax holiday.\n- **Delinquency Penalties**: Late filings incur a penalty of **1% per month** of the unpaid tax (up to 24% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Wichita (7.50% Rate)",
    "scenario": "A resident in Wichita, Kansas purchases $500.00 of commercial tools from a home improvement retailer.",
    "inputs": {
      "toolsSubtotal": "$500.00",
      "kansasStateRate": "6.50%",
      "sedgwickCountyRate": "1.00%",
      "combinedRate": "7.50%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 tools",
        "amount": "$500.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Kansas State Tax (6.50%)",
        "formula": "$500.00 × 6.50%",
        "amount": "$32.50",
        "note": "State general fund"
      },
      {
        "label": "Sedgwick County Tax (1.00%)",
        "formula": "$500.00 × 1.00%",
        "amount": "$5.00",
        "note": "County sales tax share"
      },
      {
        "label": "Total Kansas Sales Tax",
        "formula": "$32.50 + $5.00",
        "amount": "$37.50",
        "note": "Combined 7.50% sales tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $37.50",
        "amount": "$537.50",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Wichita, the 7.50% combined sales tax on a $500 tool purchase equals $37.50, bringing total checkout cost to $537.50."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Overland Park Receipt",
    "scenario": "A retail store in Overland Park, Kansas (9.10% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "overlandParkRate": "9.10%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.091)",
        "amount": "$549.95",
        "note": "True retail revenue retained"
      },
      {
        "label": "Kansas Sales Tax Owed",
        "formula": "$600.00 - $549.95",
        "amount": "$50.05",
        "note": "Remitted via KDOR"
      },
      {
        "label": "Verification Calculation",
        "formula": "$549.95 × 9.10%",
        "amount": "$50.05",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Overland Park, the business retains $549.95 net revenue and owes $50.05 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Kansas for 2026?",
      "answer": "The statewide base sales tax rate in Kansas is 6.50%. Local city, county, and special taxing district taxes push combined rates between 7.50% and 10.60% across most commercial markets.",
      "sourceUrl": "https://www.ksrevenue.gov/bussales.html"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Kansas?",
      "answer": "No. Under Kansas Private Letter Ruling P-2014-004, cloud-based SaaS and remotely hosted software are classified as non-taxable services.",
      "sourceUrl": "https://www.ksrevenue.gov/bussales.html"
    },
    {
      "question": "What is the sales tax rate on groceries in Kansas?",
      "answer": "Under House Bill 2106, the Kansas state sales tax on groceries was completely eliminated (reduced to 0.00%) as of January 1, 2025. However, local city and county sales taxes (typically 1.0% to 3.0%) still apply.",
      "sourceUrl": "https://www.ksrevenue.gov/foodsales.html"
    },
    {
      "question": "What is the economic nexus threshold in Kansas?",
      "answer": "Out-of-state remote sellers establish economic nexus in Kansas when retail sales delivered into the state exceed $100,000 in gross revenue during the current or preceding calendar year.",
      "sourceUrl": "https://www.ksrevenue.gov/remotesellers.html"
    },
    {
      "question": "Does Kansas hold an annual sales tax holiday?",
      "answer": "No. Kansas does not host an annual sales tax holiday.",
      "sourceUrl": "https://www.ksrevenue.gov/bussales.html"
    }
  ]
};

export default kansasContent;
