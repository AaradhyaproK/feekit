import type { PageContent } from '../types.ts';

export const idahoContent: PageContent = {
  "slug": "idaho",
  "family": "sales-tax",
  "title": "Idaho Sales Tax Calculator (6.00% to 9.00%) | FeeKit",
  "metaDescription": "Calculate Idaho sales tax with Tax Commission rates (6.0% state, max 9.0% resort cities). Rule 027 SaaS exemption, grocery tax credit, and $100k nexus.",
  "h1": "Idaho Sales Tax Calculator & State Tax Commission Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Idaho State Tax Commission",
    "url": "https://tax.idaho.gov/taxes/sales-use/",
    "citation": "Idaho Code Title 63, Chapter 36 (Idaho Sales Tax Act) and Idaho Admin. Code r. 35.01.02.027."
  },
  "overview": "The State of Idaho imposes a statewide base sales and use tax rate of 6.00% under Idaho Code § 63-3619. Under Idaho statutory law, general municipalities and counties are prohibited from enacting local option retail sales taxes, ensuring a standardized 6.00% rate across major urban centers (including Boise, Meridian, Nampa, and Idaho Falls). However, a small number of qualifying resort communities (including Sun Valley, Ketchum, and McCall) levy localized resort sales taxes ranging from 1.00% to 3.00%, creating combined rates up to 9.00% in tourist zones. Idaho treats Software as a Service (SaaS) as a non-taxable service under Administrative Rule 027. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Idaho sales.",
  "sections": [
    {
      "id": "id-rates-and-resort-cities",
      "title": "Idaho Base Rate (6.00%) and Resort Community Surtaxes (Max 9.00%)",
      "body": "Idaho’s sales tax code combines a uniform state baseline with destination resort options:\n\n- **Standard Statewide Baseline**: **6.00%**. Applies to all retail sales of tangible personal property, digital property, and taxable services across general commercial areas.\n- **Zero General Municipal Taxes**: General cities and counties cannot levy retail sales taxes. The rate in Boise (Ada County), Meridian, and Idaho Falls is identical at 6.00%.\n- **Resort Community Sales Taxes (1.00% - 3.00%)**: Under Idaho Code § 50-1043, designated resort cities with populations under 10,000 whose economies rely on tourism are authorized to levy local resort taxes:\n  - **Sun Valley / Ketchum (Blaine County Resort)**: **9.00% combined rate** (6.00% state + 3.00% municipal resort tax).\n  - **McCall (Valley County Resort)**: **7.00% combined rate** (6.00% state + 1.00% municipal resort tax).\n  - **Sandpoint (Bonner County Resort)**: **7.00% combined rate** (6.00% state + 1.00% resort tax)."
    },
    {
      "id": "id-saas-exemption-and-grocery-credit",
      "title": "Taxability Framework: Non-Taxable SaaS, Groceries (Grocery Credit), and Clothing",
      "body": "Statutory product taxability under Idaho State Tax Commission regulations:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Idaho Administrative Code r. 35.01.02.027, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.\n2. **Groceries & Food for Home Consumption**: **Taxed at Full 6.00% Rate (Grocery Credit System)**. Idaho is one of the few states that taxes groceries at the full 6.00% state rate at checkout. To offset this, Idaho provides a statutory Grocery Credit (typically $100 to $120 per resident) claimed on annual state income tax returns.\n3. **Clothing and Apparel**: **Fully Taxable (6.00% - 9.00%)**. Clothing is taxable year-round in Idaho at standard rates.\n4. **Freight and Delivery Charges**: Separately stated transportation and delivery charges are exempt from Idaho sales tax under Idaho Code § 63-3613."
    },
    {
      "id": "id-economic-nexus-and-sourcing",
      "title": "Idaho Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework",
      "body": "Following post-Wayfair statutory rules codified in Idaho Code § 63-3615A:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Idaho upon exceeding **$100,000 in cumulative gross sales** delivered into the state during the current or preceding calendar year. (Idaho has no transaction count threshold).\n- **Destination Sourcing**: Idaho operates under destination sourcing rules for all delivered merchandise. Remote sellers collect Idaho’s 6.00% state sales tax (plus local resort taxes where applicable) on all taxable shipments into the state.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Idaho sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "id-filing-compliance-tap",
      "title": "TAP Portal Registration, 20th-of-the-Month Deadlines, and Penalties",
      "body": "Tax compliance administration enforced by the Idaho State Tax Commission:\n\n- **TAP Portal Registration**: Businesses register for an Idaho Sales Tax Permit online via **Taxpayer Access Point (TAP)**. There is no state permit fee.\n- **Filing Deadlines**: Sales tax returns (Form 850) are due on or before the **20th day of the month** following the reporting period for monthly remitters.\n- **Sales Tax Holiday**: Idaho does not host an annual sales tax holiday.\n- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus a minimum $10 penalty and statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Boise (6.00% Flat Rate)",
    "scenario": "A resident in Boise, Idaho purchases $500.00 of commercial tools from a home improvement retailer.",
    "inputs": {
      "toolsSubtotal": "$500.00",
      "idahoStateRate": "6.00%",
      "localMunicipalRate": "0.00%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 tools",
        "amount": "$500.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Idaho State Tax (6.00%)",
        "formula": "$500.00 × 6.00%",
        "amount": "$30.00",
        "note": "State general fund"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $30.00",
        "amount": "$530.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Boise, the flat 6.00% sales tax on a $500 tool purchase equals $30.00, bringing total checkout cost to $530.00."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Sun Valley Receipt",
    "scenario": "A retail store in Sun Valley, Idaho (9.00% combined resort rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "sunValleyRate": "9.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.09)",
        "amount": "$550.46",
        "note": "True retail revenue retained"
      },
      {
        "label": "Idaho Sales Tax Owed",
        "formula": "$600.00 - $550.46",
        "amount": "$49.54",
        "note": "Split between State (6%) and City Resort Tax (3%)"
      },
      {
        "label": "Verification Calculation",
        "formula": "$550.46 × 9.00%",
        "amount": "$49.54",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Sun Valley, the business retains $550.46 net revenue and owes $49.54 in combined state and resort sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Idaho for 2026?",
      "answer": "The statewide base sales tax rate in Idaho is a flat 6.00%. General cities do not levy municipal sales taxes, though qualifying resort communities (such as Sun Valley) levy local taxes up to 3.00% (totaling 9.00%).",
      "sourceUrl": "https://tax.idaho.gov/taxes/sales-use/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Idaho?",
      "answer": "No. Under Idaho Administrative Code r. 35.01.02.027, cloud-based SaaS and remotely hosted software are classified as non-taxable services.",
      "sourceUrl": "https://tax.idaho.gov/taxes/sales-use/"
    },
    {
      "question": "Are groceries subject to sales tax in Idaho?",
      "answer": "Yes. Idaho taxes groceries at the full 6.00% sales tax rate at checkout. Residents receive an annual Grocery Tax Credit claimed on their state income tax return to offset this cost.",
      "sourceUrl": "https://tax.idaho.gov/taxes/income-tax/grocery-credit/"
    },
    {
      "question": "What is the economic nexus threshold in Idaho?",
      "answer": "Out-of-state remote sellers establish economic nexus in Idaho when cumulative sales into the state exceed $100,000 in gross revenue during the current or preceding calendar year.",
      "sourceUrl": "https://tax.idaho.gov/taxes/sales-use/remote-sellers/"
    },
    {
      "question": "Does Idaho have an annual sales tax holiday?",
      "answer": "No. Idaho does not host an annual sales tax holiday.",
      "sourceUrl": "https://tax.idaho.gov/taxes/sales-use/"
    }
  ]
};

export default idahoContent;
