import type { PageContent } from '../types.ts';

export const mississippiContent: PageContent = {
  "slug": "mississippi",
  "family": "sales-tax",
  "title": "Mississippi Sales Tax Calculator (7.00% to 8.00%) | FeeKit",
  "metaDescription": "Calculate Mississippi sales tax with MDOR rates (7.0% state, 8.0% Jackson). Taxable computer software and SaaS under Admin Code 35.IV.5.06, and $250k nexus.",
  "h1": "Mississippi Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Mississippi Department of Revenue",
    "url": "https://www.dor.ms.gov/business/sales-and-use-tax",
    "citation": "Miss. Code Ann. Title 27, Chapter 65 (Sales Tax) and Miss. Admin. Code 35.IV.5.06."
  },
  "overview": "The State of Mississippi levies a statewide base sales and use tax rate of 7.00% under Miss. Code Ann. § 27-65-17. Unlike most southern states, Mississippi has very few general local municipal sales taxes: the vast majority of cities (including Gulfport, Biloxi, Southaven, and Hattiesburg) levy an exact 7.00% combined rate with zero municipal additions. The City of Jackson imposes a 1.00% infrastructure tax, bringing the combined rate to 8.00%. Mississippi treats Software as a Service (SaaS) and computer software as fully taxable under Miss. Admin. Code 35.IV.5.06. Remote out-of-state sellers establish economic nexus upon reaching $250,000 in annual Mississippi sales.",
  "sections": [
    {
      "id": "ms-rates-and-local-options",
      "title": "Mississippi Uniform 7.00% Rate and Jackson 8.00% Infrastructure Tax",
      "body": "Mississippi’s sales tax code provides broad geographic stability:\n\n- **Statewide Baseline Rate**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable enumerated services.\n- **Minimal Local Surtaxes**: Unlike neighboring states, Mississippi general retail sales are exempt from municipal add-ons across almost all jurisdictions:\n  - **Gulfport / Biloxi (Harrison County)**: **7.00% flat rate** (State base with zero local municipal retail tax).\n  - **Southaven (DeSoto County)**: **7.00% flat rate** (Standard state baseline).\n  - **Jackson (Hinds County)**: **8.00% combined rate** (7.00% state + 1.00% City of Jackson infrastructure tax).\n  - **Special Tourism and Restaurant Taxes**: Cities levy specialized 1.00% to 3.00% restaurant and hotel taxes, but these excises do not apply to general retail merchandise."
    },
    {
      "id": "ms-saas-taxability-and-clothing",
      "title": "Taxability Framework: Fully Taxable SaaS, Groceries (7.00%), and Clothing",
      "body": "Statutory product taxability under Mississippi Department of Revenue regulations:\n\n1. **Software as a Service (SaaS) & Cloud Software**: **Fully Taxable (7.00%)**. Under Miss. Admin. Code 35.IV.5.06, Mississippi treats computer software, cloud software, remotely hosted applications, and SaaS access as taxable computer software services subject to the full 7.00% rate.\n2. **Groceries & Food for Home Consumption**: **Fully Taxable (7.00%)**. Mississippi is one of only two states that taxes unprepared grocery food staples at the full standard state sales tax rate of 7.00%.\n3. **Clothing and Footwear**: **Fully Taxable (7.00%)**. Apparel is subject to the standard 7.00% rate year-round (except during the annual July sales tax holiday).\n4. **Freight and Delivery Charges**: Under Miss. Code Ann. § 27-65-3, freight and shipping charges billed by the seller are included in the taxable gross proceeds of sale."
    },
    {
      "id": "ms-economic-nexus-and-sourcing",
      "title": "Mississippi Remote Seller Nexus ($250,000 Threshold) & Sourcing Framework",
      "body": "Following post-Wayfair statutory rules codified in Miss. Admin. Code 35.IV.3.09:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Mississippi upon exceeding **$250,000 in gross retail sales** delivered into the state during the preceding 12-month period. (Mississippi has no transaction count threshold).\n- **Destination Sourcing**: Mississippi operates under destination sourcing rules for all delivered merchandise. Remote sellers collect Mississippi’s 7.00% (or 8.00% in Jackson) sales tax on all taxable shipments into the state.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Mississippi sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "ms-filing-compliance-tap",
      "title": "Taxpayer Access Point (TAP), 20th-of-the-Month Deadlines, and Tax Holiday",
      "body": "Tax compliance administration enforced by the Mississippi Department of Revenue (MDOR):\n\n- **TAP Portal Registration**: Businesses register for a Mississippi Sales Tax Permit online via **Taxpayer Access Point (TAP)**.\n- **Filing Deadlines**: Sales tax returns (Form 72-010) are due on or before the **20th day of the month** following the reporting period for monthly remitters.\n- **Vendor Compensation (Timely Filing Discount)**: Under Miss. Code Ann. § 27-65-33, retailers who file and pay returns on time may deduct a discount of **2.00% of the sales tax collected** (capped at $50 per month).\n- **Annual Sales Tax Holiday**: Mississippi holds an annual **2-day Sales Tax Holiday in late July**, exempting qualifying clothing and footwear priced at **$100 or less per item** from sales tax.\n- **Delinquency Penalties**: Late filings incur a penalty of **10% of the unpaid tax**, plus statutory interest at 1% per month."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B SaaS Cloud Subscription in Jackson (8.00% Rate)",
    "scenario": "A business in Jackson, Mississippi purchases a $1,000.00 monthly cloud analytics software subscription.",
    "inputs": {
      "saasSubtotal": "$1,000.00",
      "mississippiStateRate": "7.00%",
      "jacksonCityRate": "1.00%",
      "combinedRate": "8.00%"
    },
    "steps": [
      {
        "label": "Taxable SaaS Base",
        "formula": "$1,000.00 software subscription",
        "amount": "$1,000.00",
        "note": "Taxable under Miss. Admin. Code 35.IV.5.06"
      },
      {
        "label": "Mississippi State Tax (7.00%)",
        "formula": "$1,000.00 × 7.00%",
        "amount": "$70.00",
        "note": "State general fund"
      },
      {
        "label": "Jackson Infrastructure Tax (1.00%)",
        "formula": "$1,000.00 × 1.00%",
        "amount": "$10.00",
        "note": "City of Jackson share"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$1,000.00 + $70.00 + $10.00",
        "amount": "$1,080.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Mississippi law, cloud software subscriptions are fully taxable, adding $80.00 in total sales tax to a $1,000 invoice in Jackson."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500 Gulfport Receipt",
    "scenario": "A retail store in Gulfport, Mississippi (7.00% rate) collects an all-inclusive $500.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "gulfportRate": "7.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.07)",
        "amount": "$467.29",
        "note": "True retail revenue retained"
      },
      {
        "label": "Mississippi Sales Tax Owed",
        "formula": "$500.00 - $467.29",
        "amount": "$32.71",
        "note": "Remitted via TAP"
      },
      {
        "label": "Verification Calculation",
        "formula": "$467.29 × 7.00%",
        "amount": "$32.71",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in Gulfport, the business retains $467.29 net revenue and owes $32.71 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Mississippi for 2026?",
      "answer": "The statewide sales tax rate in Mississippi is a flat 7.00%. Almost all cities levy 7.00%, with the exception of the City of Jackson, which levies an 8.00% combined rate.",
      "sourceUrl": "https://www.dor.ms.gov/business/sales-and-use-tax"
    },
    {
      "question": "Does Mississippi tax Software as a Service (SaaS)?",
      "answer": "Yes. Under Miss. Admin. Code 35.IV.5.06, SaaS, cloud software, and computer software services are fully taxable at the standard 7.00% rate.",
      "sourceUrl": "https://www.dor.ms.gov/business/sales-and-use-tax"
    },
    {
      "question": "Are groceries subject to sales tax in Mississippi?",
      "answer": "Yes. Mississippi is one of only two states that taxes unprepared grocery food items at the full standard sales tax rate of 7.00%.",
      "sourceUrl": "https://www.dor.ms.gov/business/sales-and-use-tax"
    },
    {
      "question": "What is the economic nexus threshold in Mississippi?",
      "answer": "Out-of-state remote sellers establish economic nexus in Mississippi when gross sales into the state exceed $250,000 in the prior 12-month period. There is no transaction count threshold.",
      "sourceUrl": "https://www.dor.ms.gov/business/remote-sellers"
    },
    {
      "question": "When is Mississippi’s annual sales tax holiday?",
      "answer": "Mississippi holds an annual 2-day Sales Tax Holiday in late July, exempting qualifying clothing and footwear priced at $100 or less per item from sales tax.",
      "sourceUrl": "https://www.dor.ms.gov/sales-tax-holiday"
    }
  ]
};

export default mississippiContent;
