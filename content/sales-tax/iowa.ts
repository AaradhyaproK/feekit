import type { PageContent } from '../types.ts';

export const iowaContent: PageContent = {
  "slug": "iowa",
  "family": "sales-tax",
  "title": "Iowa Sales Tax Calculator (6.00% to 7.00%) | FeeKit",
  "metaDescription": "Calculate Iowa sales tax with Department of Revenue rates (6.0% state, 7.0% with 1% LOST). Taxable digital products and SaaS under Iowa Code § 423.2, and $100k nexus.",
  "h1": "Iowa Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Iowa Department of Revenue",
    "url": "https://tax.iowa.gov/iowa-sales-and-use-tax-guide",
    "citation": "Iowa Code Chapter 423 (Streamlined Sales and Use Tax Act) and Iowa Admin. Code r. 701-200 et seq."
  },
  "overview": "The State of Iowa imposes a statewide base sales and use tax rate of 6.00% under Iowa Code § 423.2. Most Iowa cities and counties adopt an optional 1.00% Local Option Sales Tax (LOST), establishing a combined retail sales tax rate of 7.00% across major commercial markets (including Des Moines, Cedar Rapids, Davenport, and Iowa City). In rural areas without LOST, the flat 6.00% state rate applies. Iowa treats Software as a Service (SaaS) and electronically transferred digital products as fully taxable under Iowa Code § 423.2(6)(bs). Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Iowa sales.",
  "sections": [
    {
      "id": "ia-rates-and-lost-surtaxes",
      "title": "Iowa Base Rate (6.00%) and 1.00% Local Option Sales Tax (LOST)",
      "body": "Iowa’s sales tax code features a simple two-tier geographic structure:\n\n- **Statewide Baseline Rate**: **6.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable enumerated services.\n- **Local Option Sales Tax (LOST)**: **1.00%**. Enacted by county-wide voter referendums under Iowa Code Chapter 423B:\n  - **Des Moines (Polk County)**: **7.00% combined rate** (6.00% state + 1.00% LOST).\n  - **Cedar Rapids (Linn County)**: **7.00% combined rate** (6.00% state + 1.00% LOST).\n  - **Davenport (Scott County)**: **7.00% combined rate** (6.00% state + 1.00% LOST).\n  - **Unincorporated Non-LOST Areas**: **6.00% flat rate** (State base rate with zero local tax)."
    },
    {
      "id": "ia-digital-products-and-saas-taxability",
      "title": "Taxability Framework: Taxable Digital Products, SaaS, and Groceries",
      "body": "Statutory product taxability under Iowa Department of Revenue regulations:\n\n1. **Software as a Service (SaaS) & Digital Products**: **Fully Taxable (6.00% - 7.00%)**. Under Iowa Code § 423.2(6)(bs) and Iowa Admin. Code r. 701-211.1, cloud-based software, remote SaaS access, digital downloads, and electronic data storage are fully subject to sales tax as specified digital products.\n2. **Clothing and Footwear**: **Fully Taxable**. Everyday apparel and footwear are subject to combined rates year-round (except during the annual August 2-day sales tax holiday).\n3. **Groceries & Food for Home Consumption**: **Exempt**. Food items for home consumption are exempt under Iowa Code § 423.3(57). Prepared food, candy, and soft drinks are taxable at 7.00%.\n4. **Freight and Delivery Charges**: Separately stated transportation and delivery charges are generally exempt from Iowa sales tax under Iowa Admin. Code r. 701-288.13."
    },
    {
      "id": "ia-economic-nexus-and-sourcing",
      "title": "Iowa Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework",
      "body": "Following post-Wayfair statutory rules codified in Iowa Code § 423.14A:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Iowa upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (The previous 200-transaction count threshold was repealed in 2019).\n- **Destination Sourcing**: Iowa operates under destination sourcing rules for all delivered goods. Remote sellers collect the exact combined rate (6.00% or 7.00%) applicable to the customer's delivery address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, Walmart) collect and remit Iowa sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "ia-filing-compliance-govconnect",
      "title": "GovConnectIowa Registration, Last-Day-of-the-Month Deadlines, and Tax Holiday",
      "body": "Tax compliance administration enforced by the Iowa Department of Revenue:\n\n- **GovConnectIowa Portal Registration**: Businesses register for an Iowa Sales and Use Tax Permit online via **GovConnectIowa**.\n- **Filing Deadlines**: Sales tax returns are due on or before the **last day of the month** following the reporting period for monthly remitters (e.g. Q1 return due April 30).\n- **Annual Sales Tax Holiday**: Iowa holds an annual **2-day Sales Tax Holiday on the first Friday and Saturday of August**, exempting qualifying clothing and footwear priced at **under $100 per item** from state and local sales taxes.\n- **Delinquency Penalties**: Late returns incur a penalty of **5% of the unpaid tax** per month (up to 25% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Des Moines (7.00% Combined Rate)",
    "scenario": "A resident in Des Moines, Iowa purchases $500.00 of commercial tools from a home improvement retailer.",
    "inputs": {
      "toolsSubtotal": "$500.00",
      "iowaStateRate": "6.00%",
      "polkCountyLost": "1.00%",
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
        "label": "Iowa State Tax (6.00%)",
        "formula": "$500.00 × 6.00%",
        "amount": "$30.00",
        "note": "State general fund"
      },
      {
        "label": "Polk County LOST (1.00%)",
        "formula": "$500.00 × 1.00%",
        "amount": "$5.00",
        "note": "Local option sales tax share"
      },
      {
        "label": "Total Iowa Sales Tax",
        "formula": "$30.00 + $5.00",
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
    "takeaway": "In Des Moines, the 7.00% combined sales tax on a $500 tool purchase equals $35.00, bringing total checkout cost to $535.00."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Cedar Rapids Receipt",
    "scenario": "A retail store in Cedar Rapids, Iowa (7.00% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "cedarRapidsRate": "7.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.07)",
        "amount": "$560.75",
        "note": "True retail revenue retained"
      },
      {
        "label": "Iowa Sales Tax Owed",
        "formula": "$600.00 - $560.75",
        "amount": "$39.25",
        "note": "Remitted via GovConnectIowa"
      },
      {
        "label": "Verification Calculation",
        "formula": "$560.75 × 7.00%",
        "amount": "$39.25",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Cedar Rapids, the business retains $560.75 net revenue and owes $39.25 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Iowa for 2026?",
      "answer": "The statewide base sales tax rate in Iowa is 6.00%. Most cities and counties levy a 1.00% Local Option Sales Tax (LOST), making the total combined rate 7.00%.",
      "sourceUrl": "https://tax.iowa.gov/iowa-sales-and-use-tax-guide"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Iowa?",
      "answer": "Yes. Under Iowa Code § 423.2(6)(bs), SaaS, cloud software, and digital products are fully taxable at standard state and local rates.",
      "sourceUrl": "https://tax.iowa.gov/digital-products-faqs"
    },
    {
      "question": "Are groceries subject to sales tax in Iowa?",
      "answer": "No. Essential food products for home consumption are 100% exempt from sales tax under Iowa Code § 423.3(57). Prepared food and candy are taxable.",
      "sourceUrl": "https://tax.iowa.gov/iowa-sales-and-use-tax-guide"
    },
    {
      "question": "What is the economic nexus threshold in Iowa?",
      "answer": "Out-of-state remote sellers establish economic nexus in Iowa when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.",
      "sourceUrl": "https://tax.iowa.gov/remote-sellers"
    },
    {
      "question": "When is Iowa’s annual sales tax holiday?",
      "answer": "Iowa holds an annual 2-day Sales Tax Holiday on the first Friday and Saturday of August, exempting qualifying clothing and footwear priced under $100 per item.",
      "sourceUrl": "https://tax.iowa.gov/iowas-annual-sales-tax-holiday"
    }
  ]
};

export default iowaContent;
