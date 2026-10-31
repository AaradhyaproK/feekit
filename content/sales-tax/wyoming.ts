import type { PageContent } from '../types.ts';

export const wyomingContent: PageContent = {
  "slug": "wyoming",
  "family": "sales-tax",
  "title": "Wyoming Sales Tax Calculator (4.00% to 6.00%) | FeeKit",
  "metaDescription": "Calculate Wyoming sales and use tax with Department of Revenue rates (4.0% state, max 6.0% county). SaaS exemption policy, grocery exemption, and $100k nexus.",
  "h1": "Wyoming Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Wyoming Department of Revenue",
    "url": "https://revenue.wyo.gov/",
    "citation": "Wyo. Stat. Ann. Title 39, Chapter 15 (Sales Tax) and Chapter 16 (Use Tax)."
  },
  "overview": "The State of Wyoming imposes a statutory baseline retail sales tax rate of 4.00% under Wyo. Stat. Ann. § 39-15-104. Counties across Wyoming are legally authorized to levy optional local sales taxes—including a 1.00% general purpose tax and a 1.00% specific purpose tax—pushing combined retail sales tax rates between 5.00% and 6.00% in commercial hubs such as Cheyenne (6.00%), Casper (5.00%), Jackson (6.00%), and Laramie (6.00%). Under Wyoming Department of Revenue administrative policy, Software as a Service (SaaS) is exempt from sales tax. Out-of-state remote sellers establish economic nexus upon reaching $100,000 in gross sales or 200 transactions.",
  "sections": [
    {
      "id": "wy-rate-structure-and-county-options",
      "title": "Wyoming 4.00% State Rate & County Local Option Taxes (Max 6.00%)",
      "body": "Wyoming’s sales tax code combines a statutory baseline with county-level option surcharges:\n\n- **Statewide Baseline Rate**: **4.00%**. Enacted under Wyo. Stat. Ann. § 39-15-104, applying to all retail sales of tangible personal property.\n- **County Local Option Taxes (1.00% - 2.00%)**: Enacted by voter referendum across Wyoming counties:\n  - **Cheyenne (Laramie County)**: **6.00% combined rate** (4.00% state + 1.00% general purpose + 1.00% specific purpose).\n  - **Jackson (Teton County)**: **6.00% combined rate** (4.00% state + 1.00% general purpose + 1.00% specific purpose).\n  - **Laramie (Albany County)**: **6.00% combined rate** (4.00% state + 2.00% local option taxes).\n  - **Casper (Natrona County)**: **5.00% combined rate** (4.00% state + 1.00% county option).\n  - **Gillette (Campbell County)**: **5.00% combined rate** (4.00% state + 1.00% county option).\n- **Sublette County**: One of the few Wyoming jurisdictions maintaining the pure statutory base rate of 4.00%."
    },
    {
      "id": "wy-taxability-saas-groceries-clothing",
      "title": "Taxability Framework: SaaS Exemption, Grocery Protection, and Freight Rules",
      "body": "Statutory product taxability rules enforced by the Wyoming Department of Revenue:\n\n1. **Software as a Service (SaaS)**: **100% Exempt**. Under Wyoming Department of Revenue administrative policy, cloud SaaS subscriptions where software is accessed remotely without delivering executable code or storage media are classified as non-taxable services.\n2. **Food for Home Consumption (Groceries)**: **Exempt**. Staple grocery items are exempt from sales tax under Wyo. Stat. Ann. § 39-15-105(a)(vi)(E). Prepared hot meals, restaurant dining, candy, and soft drinks remain taxable at standard combined rates.\n3. **Everyday Clothing and Footwear**: **Fully Taxable (4.00% - 6.00%)**. Clothing is taxable year-round in Wyoming at combined state and county rates.\n4. **Freight and Delivery Fees**: Under Wyo. Stat. Ann. § 39-15-101(a)(viii), separately stated transportation and freight charges are exempt from sales tax if billed directly to the customer."
    },
    {
      "id": "wy-economic-nexus-and-sourcing",
      "title": "Wyoming Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Codified under Wyo. Stat. Ann. § 39-15-501 following post-Wayfair statutory updates:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Wyoming if, during the current or preceding calendar year, the business achieves:\n  - Gross sales exceeding **$100,000** delivered into Wyoming; **OR**\n  - **200 or more separate transactions** delivered into the state.\n- **Destination Sourcing**: Wyoming is a full member of the Streamlined Sales Tax Agreement (SSTA) and enforces destination sourcing. Remote sellers collect the combined rate based on the delivery destination.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Wyoming sales tax on marketplace sales."
    },
    {
      "id": "wy-registration-and-filing-compliance",
      "title": "WYIFS Registration, Filing Due Dates, and Delinquency Penalties",
      "body": "Compliance requirements administered by the Wyoming Department of Revenue:\n\n- **License Registration**: Remote and in-state retailers register online for a Wyoming Sales Tax License via the **Wyoming Internet Filing System for Business (WYIFS)**.\n- **Filing Deadlines**: Sales tax returns (Form 41) are filed monthly or quarterly and are due on or before the **last day of the month** following the end of the reporting period.\n- **Statutory Penalties**: Failure to file or pay on time incurs a late filing penalty of **$10 or 10% of the tax due** (whichever is greater) under Wyo. Stat. Ann. § 39-15-108, plus statutory monthly interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Cheyenne (6.00% Combined Rate)",
    "scenario": "A homeowner in Cheyenne, Wyoming orders $800.00 of power tools with a separately stated $50.00 delivery freight fee from an online merchant.",
    "inputs": {
      "toolsSubtotal": "$800.00",
      "deliveryFreightCharge": "$50.00 (Separately Stated)",
      "cheyenneCombinedRate": "6.00% (4% State + 2% County)"
    },
    "steps": [
      {
        "label": "Taxable Tools Base",
        "formula": "$800.00 hardware",
        "amount": "$800.00",
        "note": "Taxable tangible personal property"
      },
      {
        "label": "Separately Stated Freight Status",
        "formula": "Separately stated common carrier",
        "amount": "$0.00 tax",
        "note": "Exempt under Wyo. Stat. Ann. § 39-15-101(a)(viii)"
      },
      {
        "label": "Combined Cheyenne Sales Tax (6.00%)",
        "formula": "$800.00 × 6.00%",
        "amount": "$48.00",
        "note": "State ($32.00) + Laramie County ($16.00)"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$800.00 + $50.00 + $48.00",
        "amount": "$898.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Cheyenne, the 6.00% combined sales tax applies only to the $800 tools ($48.00 tax), keeping the separately stated $50 freight charge completely tax-free."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600.00 Casper Invoice",
    "scenario": "A retail contractor in Casper collects an all-inclusive $600.00 payment for taxable retail goods at a 5.00% combined rate. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$600.00",
      "combinedRate": "5.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.05)",
        "amount": "$571.43",
        "note": "Retained business net revenue"
      },
      {
        "label": "Combined Sales Tax Liability",
        "formula": "$600.00 - $571.43",
        "amount": "$28.57",
        "note": "State ($22.86) and Natrona County ($5.71)"
      },
      {
        "label": "Verification Calculation",
        "formula": "$571.43 × 5.00%",
        "amount": "$28.57",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 tax-inclusive transaction in Casper, the merchant retains $571.43 net revenue and remits $28.57 in combined sales tax on Form 41."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Wyoming?",
      "answer": "The baseline statutory state sales tax rate is 4.00%. With county local option taxes, combined rates range from 4.00% to 6.00% (6.00% in Cheyenne and Jackson, 5.00% in Casper).",
      "sourceUrl": "https://revenue.wyo.gov/"
    },
    {
      "question": "Does Wyoming tax Software as a Service (SaaS)?",
      "answer": "No. Under Wyoming Department of Revenue administrative policy, cloud-hosted SaaS subscriptions and remote software access are classified as exempt services.",
      "sourceUrl": "https://revenue.wyo.gov/"
    },
    {
      "question": "Are groceries exempt from sales tax in Wyoming?",
      "answer": "Yes. Staple groceries and food for home consumption are exempt from sales tax under Wyo. Stat. Ann. § 39-15-105(a)(vi)(E). Prepared meals and restaurant dining remain taxable.",
      "sourceUrl": "https://revenue.wyo.gov/"
    },
    {
      "question": "What is the Wyoming economic nexus threshold for remote sellers?",
      "answer": "Out-of-state remote sellers establish economic nexus upon reaching $100,000 in gross sales or completing 200 individual transactions delivered into Wyoming during the current or preceding year.",
      "sourceUrl": "https://revenue.wyo.gov/"
    },
    {
      "question": "When are Wyoming sales tax returns due?",
      "answer": "Wyoming sales tax returns are due on or before the last day of the month following the close of the reporting period via WYIFS.",
      "sourceUrl": "https://revenue.wyo.gov/"
    }
  ]
};

export default wyomingContent;
