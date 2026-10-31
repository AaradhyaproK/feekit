import type { PageContent } from '../types.ts';

export const utahContent: PageContent = {
  "slug": "utah",
  "family": "sales-tax",
  "title": "Utah Sales Tax Calculator (6.10% to 9.05%) | FeeKit",
  "metaDescription": "Calculate Utah sales tax with Tax Commission rates (4.85% base + 1.25% mandatory local = 6.10% baseline, max 9.05%). Taxable SaaS, grocery reduced rate (3.0%), and $100k nexus.",
  "h1": "Utah Sales Tax Calculator & State Tax Commission Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Utah State Tax Commission",
    "url": "https://tax.utah.gov/sales",
    "citation": "Utah Code Title 59, Chapter 12 (Sales and Use Tax Act) and Utah Admin. Code R865-19S-92."
  },
  "overview": "The State of Utah imposes a statewide baseline sales and use tax rate of 4.85% under Utah Code § 59-12-103. However, all Utah jurisdictions enforce a mandatory 1.00% local option sales tax plus a mandatory 0.25% county option tax, establishing a true practical minimum baseline rate of 6.10% statewide. Additional municipal, county transit, and resort community taxes push combined retail sales tax rates between 7.25% and 9.05% across major urban and tourist centers (including Salt Lake City, Provo, and Park City). Utah treats Software as a Service (SaaS) as fully taxable prewritten computer software under administrative rule R865-19S-92. Remote sellers establish economic nexus upon reaching $100,000 in annual Utah sales.",
  "sections": [
    {
      "id": "ut-rates-and-resort-taxes",
      "title": "Utah Mandatory Baseline (6.10%) and Resort Community Surtaxes (Max 9.05%)",
      "body": "Utah’s sales tax code combines state, mandatory county, and localized transit levies:\n\n- **True Statewide Minimum Baseline**: **6.10%**. Combines the 4.85% state rate with the mandatory 1.00% local option tax and 0.25% county option tax.\n- **Municipal and County Transit Surtaxes**:\n  - **Salt Lake City (Salt Lake County)**: **7.75% combined rate** (6.10% baseline + 0.90% county transit + 0.75% municipal transit taxes).\n  - **Provo (Utah County)**: **7.25% combined rate** (6.10% baseline + 0.65% Utah County transit + 0.50% city transit).\n  - **Park City (Summit County)**: **9.05% combined rate** (6.10% baseline + transit + 1.60% resort community sales tax).\n  - **Moab (Grand County)**: **8.85% combined rate** (6.10% baseline + 1.60% municipal resort tax + emergency medical taxes)."
    },
    {
      "id": "ut-taxability-saas-food-services",
      "title": "Taxability Framework: Taxable SaaS, Groceries (3.00%), and Digital Goods",
      "body": "Statutory product taxability under Utah State Tax Commission regulations:\n\n1. **Software as a Service (SaaS) & Cloud Software**: **Fully Taxable (6.10% - 9.05%)**. Under Utah Admin. Code R865-19S-92, accessing prewritten computer software remotely via the cloud is statutorily treated as a taxable purchase of prewritten software, regardless of whether installed locally or hosted remotely.\n2. **Food and Food Ingredients (Groceries)**: **Taxed at 3.00% Statewide**. Unprepared food items for home consumption enjoy a statutory reduced rate of 3.00% (1.75% state + 1.25% local option). Prepared hot restaurant meals and candy are taxed at full combined rates.\n3. **Clothing and Footwear**: **Fully Taxable**. Apparel and footwear are subject to full combined rates year-round.\n4. **Freight and Delivery Charges**: Separately stated freight and transportation charges are exempt from Utah sales tax under Utah Code § 59-12-102(38)."
    },
    {
      "id": "ut-economic-nexus-and-sourcing",
      "title": "Utah Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework",
      "body": "Following post-Wayfair statutory rules codified in Utah Code § 59-12-107:\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Utah upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (Utah’s 200-transaction count threshold was formally repealed).\n- **In-State vs Remote Sourcing**: In-state storefront sales are sourced to the **retail store location** (origin). Delivered goods shipped to customers are sourced to the **delivery destination**.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, Walmart) collect and remit Utah sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "ut-filing-compliance-tap",
      "title": "Tax Commission TAP Portal, Last-Day-of-the-Month Deadlines, and Penalties",
      "body": "Tax compliance administration enforced by the Utah State Tax Commission:\n\n- **TAP Portal Registration**: Businesses register for a Utah Sales Tax License online via **Taxpayer Access Point (TAP)**.\n- **Filing Deadlines**: Sales tax returns (Form TC-62S) are due on or before the **last day of the month** following the close of the reporting period (e.g. Q1 return due April 30).\n- **Sales Tax Holiday**: Utah does not host an annual sales tax holiday.\n- **Delinquency Penalties**: Late filings incur a penalty of **10% of the unpaid tax** (or $20, whichever is greater), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Sporting Goods Purchase in Salt Lake City (7.75% Rate)",
    "scenario": "A consumer in Salt Lake City, Utah purchases $500.00 of outdoor camping equipment from a local sporting goods retailer.",
    "inputs": {
      "equipmentSubtotal": "$500.00",
      "combinedSaltLakeRate": "7.75%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 merchandise",
        "amount": "$500.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Utah Combined Sales Tax (7.75%)",
        "formula": "$500.00 × 7.75%",
        "amount": "$38.75",
        "note": "Includes 4.85% state + 1.25% mandatory local + 1.65% transit"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $38.75",
        "amount": "$538.75",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Salt Lake City, the 7.75% combined sales tax on a $500 purchase equals $38.75, bringing total checkout cost to $538.75."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Park City Receipt",
    "scenario": "A retail store in Park City, Utah (9.05% combined resort rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "parkCityRate": "9.05%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.0905)",
        "amount": "$550.21",
        "note": "True retail revenue retained"
      },
      {
        "label": "Utah Sales Tax Owed",
        "formula": "$600.00 - $550.21",
        "amount": "$49.79",
        "note": "Remitted via TAP"
      },
      {
        "label": "Verification Calculation",
        "formula": "$550.21 × 9.05%",
        "amount": "$49.79",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Park City, the business retains $550.21 net revenue and owes $49.79 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Utah for 2026?",
      "answer": "The statewide base rate is 4.85%, but all Utah jurisdictions enforce a mandatory 1.25% local/county tax, making the practical baseline rate 6.10%. Combined rates range from 6.10% to 9.05% across the state.",
      "sourceUrl": "https://tax.utah.gov/sales"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Utah?",
      "answer": "Yes. Under Utah Admin. Code R865-19S-92, remotely accessed cloud software and SaaS subscriptions are fully taxable as prewritten computer software.",
      "sourceUrl": "https://tax.utah.gov/sales"
    },
    {
      "question": "Are groceries taxed at a lower rate in Utah?",
      "answer": "Yes. Food and food ingredients for home consumption are taxed at a reduced rate of 3.00% statewide, compared to standard combined rates of 6.10% to 9.05%.",
      "sourceUrl": "https://tax.utah.gov/sales/food"
    },
    {
      "question": "What is the economic nexus threshold in Utah?",
      "answer": "Out-of-state remote sellers establish economic nexus in Utah when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.",
      "sourceUrl": "https://tax.utah.gov/sales/remote-sellers"
    },
    {
      "question": "Does Utah have an annual sales tax holiday?",
      "answer": "No. Utah does not host an annual sales tax holiday.",
      "sourceUrl": "https://tax.utah.gov/sales"
    }
  ]
};

export default utahContent;
