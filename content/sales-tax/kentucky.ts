import type { PageContent } from '../types.ts';

export const kentuckyContent: PageContent = {
  "slug": "kentucky",
  "family": "sales-tax",
  "title": "Kentucky Sales Tax Calculator (6.00% Flat Rate) | FeeKit",
  "metaDescription": "Calculate Kentucky sales tax with Department of Revenue rates (6.0% flat statewide). Zero local taxes, taxable SaaS under House Bill 8, and $100k nexus.",
  "h1": "Kentucky Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Kentucky Department of Revenue",
    "url": "https://revenue.ky.gov/Business/Sales-Use-Tax/",
    "citation": "Ky. Rev. Stat. Chapter 139 (Sales and Use Taxes) and 2022 House Bill 8 (Service Tax Expansion)."
  },
  "overview": "The Commonwealth of Kentucky imposes a uniform statewide sales and use tax rate of 6.00% under KRS 139.200. Kentucky statutory law strictly prohibits cities, counties, and municipal governments from enacting local option sales taxes on general retail goods, guaranteeing an identical 6.00% sales tax rate from Louisville and Lexington to Bowling Green and Paducah. In 2023, under landmark tax reform legislation (House Bill 8), Kentucky significantly expanded its sales tax base to include over 30 service categories, formally codifying Software as a Service (SaaS), prewritten computer software access, and cloud computing as fully taxable services at 6.00%. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in gross sales or 200 separate transactions.",
  "sections": [
    {
      "id": "ky-flat-rate-structure",
      "title": "Uniform 6.00% Statewide Rate Across All 120 Kentucky Counties",
      "body": "Kentucky’s sales tax code provides complete geographic uniformity:\n\n- **Flat Statewide Baseline**: **6.00%**. Applies to all retail sales of tangible personal property, digital property, and taxable services.\n- **Zero Local Option Retail Taxes**: Local jurisdictions cannot levy municipal or county sales taxes on retail goods. A purchase in Louisville (Jefferson County), Lexington (Fayette County), or rural Appalachia incurs the exact same 6.00% rate.\n- **Local Transient Room Taxes**: Cities and counties are authorized to levy local transient room taxes (ranging from 1.00% to 7.00%) on hotel and short-term accommodations, but this excise does not apply to consumer goods or software."
    },
    {
      "id": "ky-hb8-saas-and-services-expansion",
      "title": "House Bill 8 Reform: Full Taxation of SaaS, Cloud Computing, and Services",
      "body": "Statutory product taxability under Kentucky Department of Revenue regulations:\n\n1. **Software as a Service (SaaS) & Cloud Software**: **Fully Taxable (6.00%)**. Enacted under House Bill 8, Kentucky amended KRS 139.200 to explicitly tax prewritten computer software access services. Cloud SaaS, hosted software, software maintenance, and digital data storage are fully subject to 6.00% sales tax.\n2. **Everyday Clothing and Footwear**: **Fully Taxable (6.00%)**. Clothing is taxable year-round in Kentucky at the statewide 6.00% rate.\n3. **Groceries & Food for Home Consumption**: **Exempt**. Food products for human consumption are exempt from sales tax under KRS 139.485. Candy, soft drinks, and prepared hot meals are taxable at 6.00%.\n4. **Freight and Delivery Charges**: Under KRS 139.010(7), delivery and shipping charges billed by the seller for taxable products are included in the taxable sales price, even if stated separately."
    },
    {
      "id": "ky-economic-nexus-and-sourcing",
      "title": "Kentucky Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Following post-Wayfair statutory rules codified in KRS 139.340:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Kentucky upon exceeding either threshold in the current or preceding calendar year:\n  - More than **$100,000 in gross receipts** from retail sales delivered into Kentucky; **OR**\n  - **200 or more separate retail transactions** delivered into the commonwealth.\n- **Destination Sourcing**: Kentucky operates under destination sourcing rules for all delivered goods. Remote sellers collect Kentucky’s uniform 6.00% sales tax on all taxable shipments into the state.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Kentucky sales tax on all marketplace orders, relieving third-party sellers of direct remittance duties."
    },
    {
      "id": "ky-filing-compliance-and-penalties",
      "title": "Kentucky Online Gateway, 20th-of-the-Month Deadlines, and Penalties",
      "body": "Compliance administration enforced by the Kentucky Department of Revenue:\n\n- **Online Portal Registration**: Businesses register for a Kentucky Sales and Use Tax account electronically through the **Kentucky Online Gateway (KOG)**.\n- **Filing Deadlines**: Sales tax returns (Form 51A102) are due on or before the **20th day of the month** following the close of the reporting period.\n- **Vendor Compensation (Timely Filing Discount)**: Under KRS 139.570, retailers who file and pay returns on time may deduct a compensation allowance of **1.75% of the first $1,000** of tax due, and **1.00% of the excess**, capped at $1,500 per year.\n- **Sales Tax Holiday**: Kentucky does not host an annual sales tax holiday.\n- **Delinquency Penalties**: Late returns incur a penalty of **2% of the unpaid tax per 30 days** (up to 20% maximum), plus a minimum $10 penalty and statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Cloud Software Subscription in Louisville (6.00% Rate)",
    "scenario": "A logistics business in Louisville, Kentucky purchases an $800.00 monthly fleet management SaaS subscription.",
    "inputs": {
      "saasSubtotal": "$800.00",
      "kentuckyRate": "6.00% (House Bill 8 Taxable SaaS)"
    },
    "steps": [
      {
        "label": "Taxable SaaS Base",
        "formula": "$800.00 software subscription",
        "amount": "$800.00",
        "note": "Taxable under KRS 139.200"
      },
      {
        "label": "Kentucky Sales Tax (6.00%)",
        "formula": "$800.00 × 6.00%",
        "amount": "$48.00",
        "note": "State sales tax on cloud software"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$800.00 + $48.00",
        "amount": "$848.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Kentucky’s expanded service tax laws, cloud SaaS subscriptions are fully taxable at 6.00%, adding $48.00 to an $800 invoice."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500.00 Lexington Receipt",
    "scenario": "A retail merchant in Lexington collects an all-inclusive $500.00 cash payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "kentuckyRate": "6.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.06)",
        "amount": "$471.70",
        "note": "True retail revenue retained"
      },
      {
        "label": "Kentucky Sales Tax Owed",
        "formula": "$500.00 - $471.70",
        "amount": "$28.30",
        "note": "Remitted to Kentucky DOR"
      },
      {
        "label": "Verification Calculation",
        "formula": "$471.70 × 6.00%",
        "amount": "$28.30",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in Lexington, the merchant retains $471.70 net revenue and owes $28.30 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Kentucky for 2026?",
      "answer": "The sales tax rate in Kentucky is a flat 6.00% statewide for general retail merchandise. Cities and counties do not levy local option sales taxes.",
      "sourceUrl": "https://revenue.ky.gov/Business/Sales-Use-Tax/"
    },
    {
      "question": "Does Kentucky tax Software as a Service (SaaS)?",
      "answer": "Yes. Under House Bill 8 (effective 2023), Kentucky explicitly taxes SaaS, cloud software, digital computing services, and prewritten computer software access at the standard 6.00% rate.",
      "sourceUrl": "https://revenue.ky.gov/News/Pages/Tax-Reform.aspx"
    },
    {
      "question": "Are groceries subject to sales tax in Kentucky?",
      "answer": "Unprepared food items for home consumption are 100% exempt from Kentucky sales tax under KRS 139.485. Prepared meals and candy remain taxable.",
      "sourceUrl": "https://revenue.ky.gov/Business/Sales-Use-Tax/"
    },
    {
      "question": "What is the economic nexus threshold in Kentucky?",
      "answer": "Out-of-state remote sellers establish economic nexus in Kentucky when retail sales delivered into the commonwealth exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.",
      "sourceUrl": "https://revenue.ky.gov/Business/Sales-Use-Tax/Pages/Remote-Sellers.aspx"
    },
    {
      "question": "Does Kentucky have a sales tax holiday?",
      "answer": "No. Kentucky does not host an annual sales tax holiday.",
      "sourceUrl": "https://revenue.ky.gov/Business/Sales-Use-Tax/"
    }
  ]
};

export default kentuckyContent;
