import type { PageContent } from '../types.ts';

export const arkansasContent: PageContent = {
  "slug": "arkansas",
  "family": "sales-tax",
  "title": "Arkansas Sales Tax Calculator (6.50% to 11.50%) | FeeKit",
  "metaDescription": "Calculate Arkansas sales tax with DFA rates (6.5% state, max 11.50%). Municipal sales taxes, Legal Opinion 20200818 SaaS exemption, and $100k nexus.",
  "h1": "Arkansas Sales Tax Calculator & Department of Finance Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Arkansas Department of Finance and Administration",
    "url": "https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/",
    "citation": "Ark. Code Ann. Title 26, Chapter 52 (Gross Receipts Tax) and DFA Legal Opinion 20200818."
  },
  "overview": "The State of Arkansas levies a statutory base sales and use tax rate of 6.50% under Ark. Code Ann. § 26-52-301. Local county governments and incorporated cities impose substantial local option sales taxes, pushing combined rates between 8.50% and 11.50% across major commercial markets (including Little Rock, Fayetteville, and Fort Smith). Arkansas provides a sales tax exemption for cloud software (SaaS) under Department of Finance and Administration Legal Opinion 20200818, while grocery food items enjoy a statutory reduced state rate of 0.125%. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Arkansas sales or 200 separate transactions.",
  "sections": [
    {
      "id": "ar-rates-and-local-surtaxes",
      "title": "Arkansas Base Rate (6.50%) and Municipal Surtaxes (Max 11.50%)",
      "body": "Arkansas’s sales tax code combines a moderate state baseline with significant local levies:\n\n- **Statewide Baseline Rate**: **6.50%**. Applies to all retail sales of tangible personal property and taxable enumerated services statewide.\n- **Municipal and County Discretionary Surtaxes**:\n  - **Little Rock (Pulaski County)**: **9.00% combined rate** (6.50% state + 1.00% county + 1.50% City of Little Rock tax).\n  - **Fort Smith (Sebastian County)**: **9.75% combined rate** (6.50% state + 1.25% county + 2.00% city tax).\n  - **Fayetteville (Washington County)**: **9.75% combined rate** (6.50% state + 1.25% county + 2.00% municipal tax).\n  - **High-Rate Municipalities**: Certain smaller cities add overlapping hospital, school, and park taxes, reaching the statutory maximum ceiling of **11.50%**."
    },
    {
      "id": "ar-saas-exemption-and-taxability",
      "title": "Taxability Framework: Non-Taxable SaaS, Groceries (0.125%), and Clothing",
      "body": "Statutory product taxability under Arkansas Department of Finance and Administration (DFA) regulations:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under DFA Legal Opinion 20200818 and Revenue Legal Counsel rulings, cloud SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.\n2. **Food and Food Ingredients (Groceries)**: **Taxed at 0.125% State Rate + Full Local Taxes**. Under Ark. Code Ann. § 26-52-317, qualifying food staples for home consumption enjoy a heavily reduced state rate of 0.125% (essentially exempt at the state level). However, county and municipal sales taxes still apply in full.\n3. **Clothing and Apparel**: **Fully Taxable (6.50% - 11.50%)**. Clothing is taxable year-round at combined rates (except during the annual August sales tax holiday).\n4. **Freight and Delivery Charges**: Under Ark. Code Ann. § 26-52-103(13), delivery charges billed by the seller in connection with taxable property are included in the taxable gross receipts."
    },
    {
      "id": "ar-economic-nexus-and-sourcing",
      "title": "Arkansas Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Following post-Wayfair statutory rules codified in Ark. Code Ann. § 26-52-110:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Arkansas upon exceeding either threshold in the current or preceding calendar year:\n  - More than **$100,000 in gross revenue** from sales delivered into Arkansas; **OR**\n  - **200 or more separate transactions** delivered into the state.\n- **Destination Sourcing**: Arkansas operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state, county, and city rate applicable to the delivery address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Arkansas sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "ar-filing-compliance-atap",
      "title": "ATAP Portal Registration, 20th-of-the-Month Deadlines, and Tax Holiday",
      "body": "Tax compliance administration enforced by the Arkansas Department of Finance and Administration:\n\n- **ATAP Portal Registration**: Businesses register for an Arkansas Sales and Use Tax Permit online via **ATAP** (Arkansas Taxpayer Access Point). A $50 permit fee applies.\n- **Filing Deadlines**: Sales tax returns (Form ET-1) are due on or before the **20th day of the month** following the reporting period for monthly remitters.\n- **Timely Filing Discount**: Under Ark. Code Ann. § 26-52-503, retailers who file and pay returns on time may deduct a discount of **2.00% of the first $2,500** of tax due, and **1.00% of the excess**, capped at $1,000 per month.\n- **Annual Sales Tax Holiday**: Arkansas holds an annual **2-day Sales Tax Holiday on the first weekend of August**, exempting qualifying clothing ($100 or less per item), school supplies, and electronic devices from state and local sales taxes.\n- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 35% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Little Rock (9.00% Rate)",
    "scenario": "A resident in Little Rock, Arkansas purchases $500.00 of commercial tools from a home improvement retailer.",
    "inputs": {
      "toolsSubtotal": "$500.00",
      "arkansasStateRate": "6.50%",
      "littleRockCityRate": "1.50%",
      "pulaskiCountyRate": "1.00%",
      "combinedRate": "9.00%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 tools",
        "amount": "$500.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Arkansas State Tax (6.50%)",
        "formula": "$500.00 × 6.50%",
        "amount": "$32.50",
        "note": "State general fund"
      },
      {
        "label": "Pulaski County Tax (1.00%)",
        "formula": "$500.00 × 1.00%",
        "amount": "$5.00",
        "note": "County sales tax"
      },
      {
        "label": "City of Little Rock Tax (1.50%)",
        "formula": "$500.00 × 1.50%",
        "amount": "$7.50",
        "note": "Municipal sales tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $32.50 + $5.00 + $7.50",
        "amount": "$545.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Little Rock, the 9.00% combined sales tax on a $500 tool purchase equals $45.00, bringing total checkout cost to $545.00."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Fayetteville Receipt",
    "scenario": "A retail store in Fayetteville, Arkansas (9.75% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "fayettevilleRate": "9.75%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.0975)",
        "amount": "$546.70",
        "note": "True retail revenue retained"
      },
      {
        "label": "Arkansas Sales Tax Owed",
        "formula": "$600.00 - $546.70",
        "amount": "$53.30",
        "note": "Remitted via ATAP"
      },
      {
        "label": "Verification Calculation",
        "formula": "$546.70 × 9.75%",
        "amount": "$53.30",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Fayetteville, the business retains $546.70 net revenue and owes $53.30 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Arkansas for 2026?",
      "answer": "The statewide base sales tax rate in Arkansas is 6.50%. Local city and county taxes push combined rates between 8.50% and 11.50% across most commercial markets.",
      "sourceUrl": "https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Arkansas?",
      "answer": "No. Under DFA Legal Opinion 20200818, cloud-based SaaS and remotely hosted software are 100% exempt from sales tax.",
      "sourceUrl": "https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/"
    },
    {
      "question": "Are groceries taxed at a lower rate in Arkansas?",
      "answer": "Yes. Food and food ingredients for home consumption enjoy a heavily reduced state rate of 0.125% (essentially exempt from state tax), though local city and county taxes still apply in full.",
      "sourceUrl": "https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/"
    },
    {
      "question": "What is the economic nexus threshold in Arkansas?",
      "answer": "Out-of-state remote sellers establish economic nexus in Arkansas when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.",
      "sourceUrl": "https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/remote-sellers/"
    },
    {
      "question": "When is Arkansas’s annual sales tax holiday?",
      "answer": "Arkansas holds an annual 2-day Sales Tax Holiday on the first weekend of August, exempting qualifying clothing ($100 or less per item), school supplies, and electronic devices from state and local sales taxes.",
      "sourceUrl": "https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/sales-tax-holiday/"
    }
  ]
};

export default arkansasContent;
