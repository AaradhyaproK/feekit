import type { PageContent } from '../types.ts';

export const tennesseeContent: PageContent = {
  "slug": "tennessee",
  "family": "sales-tax",
  "title": "Tennessee Sales Tax Calculator (7.00% to 9.75%) | FeeKit",
  "metaDescription": "Calculate Tennessee sales tax with Department of Revenue rates (7.0% state, max 9.75%). Single article local tax cap ($1,600/$3,200), taxable SaaS, and $100k nexus.",
  "h1": "Tennessee Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Tennessee Department of Revenue",
    "url": "https://www.tn.gov/revenue/taxes/sales-and-use-tax.html",
    "citation": "Tenn. Code Ann. Title 67, Chapter 6 (Sales and Use Tax) and Tenn. Comp. R. & Regs. 1320-05-01."
  },
  "overview": "Tennessee levies a statewide base sales and use tax rate of 7.00% under Tenn. Code Ann. § 67-6-202. Local counties and incorporated municipalities impose additional local option sales taxes ranging from 1.50% to 2.75%, pushing combined sales tax rates between 8.50% and 9.75% across major metropolitan areas (including Nashville, Memphis, and Knoxville). Tennessee features a unique \"Single Article Local Tax Cap\" that limits local sales tax to the first $1,600 of a single tangible personal property item, with a special state single article tax of 2.75% applied to value between $1,600 and $3,200. Out-of-state remote sellers establish economic nexus upon reaching $100,000 in annual Tennessee sales.",
  "sections": [
    {
      "id": "tn-rates-and-local-caps",
      "title": "Tennessee Base Rate (7.00%) and Local Option Ceilings (Max 9.75%)",
      "body": "Tennessee relies heavily on sales tax revenue as the state levies no individual earned income tax:\n\n- **Statewide Baseline Rate**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable services.\n- **Local Option Surtax Range**: **1.50% to 2.75%**. Set by county referendums under Tenn. Code Ann. § 67-6-702.\n  - **Memphis (Shelby County)**: **9.75% combined rate** (7.00% state + 2.75% local tax, the statutory maximum in TN).\n  - **Nashville (Davidson County)**: **9.25% combined rate** (7.00% state + 2.25% local tax).\n  - **Knoxville (Knox County)**: **9.25% combined rate** (7.00% state + 2.25% local tax).\n  - **Chattanooga (Hamilton County)**: **9.25% combined rate** (7.00% state + 2.25% local tax)."
    },
    {
      "id": "tn-single-article-tax-cap-rule",
      "title": "The Single Article Local Tax Cap ($1,600 / $3,200 Rule)",
      "body": "One of Tennessee’s most distinctive statutory features is the Single Article Tax limitation under Tenn. Code Ann. § 67-6-702:\n\n1. **First $1,600 of Purchase Price**: Subject to the full combined rate (7.00% state rate + local county rate, e.g. 2.25% in Nashville = 9.25%).\n2. **Value from $1,600.01 to $3,200.00**: Local sales tax terminates at $1,600. The incremental $1,600 portion is subject to the **7.00% state base rate PLUS a special 2.75% state single article tax** (totaling 9.75% state tax, with $0.00 local tax).\n3. **Value Above $3,200.00**: Only the standard **7.00% state base sales tax** applies. Zero local tax and zero state single article tax apply to the portion of price exceeding $3,200.\n- *Applies to Single Articles*: This cap applies only to single items of tangible personal property (such as a piano, a diamond ring, or a piece of industrial machinery), not to aggregated baskets of separate goods."
    },
    {
      "id": "tn-taxability-saas-food-services",
      "title": "Taxability Framework: Taxable SaaS, Groceries (4.00%), and Digital Goods",
      "body": "Product taxability rules enforced by the Tennessee Department of Revenue:\n\n- **Software as a Service (SaaS)**: **Fully Taxable (7.00% + Local)**. Under Tenn. Code Ann. § 67-6-231, remote access to computer software is statutorily treated as taxable computer software regardless of whether installed locally or hosted remotely in the cloud.\n- **Food and Food Ingredients (Groceries)**: **Taxed at 4.00% State Rate + Full Local Tax**. Unprepared food items enjoy a reduced state rate of 4.00% (plus standard local tax, totaling 6.25% in Nashville). Prepared hot meals and candy are taxed at full standard rates.\n- **Clothing and Footwear**: **Fully Taxable**. Apparel is subject to standard combined rates year-round (except during the annual July sales tax holiday).\n- **Freight and Delivery Charges**: Under Tenn. Code Ann. § 67-6-102, delivery charges billed by the seller are included in the taxable sales price, even if separately stated on the invoice."
    },
    {
      "id": "tn-economic-nexus-and-filing",
      "title": "Tennessee Remote Seller Nexus ($100,000) & TNTAP Portal Filing",
      "body": "Compliance requirements administered by the Tennessee Department of Revenue:\n\n- **Economic Nexus Standard**: Remote sellers establish nexus if gross sales into Tennessee exceed **$100,000** in the previous or current calendar year.\n- **Standard Local Sourcing for Remote Sellers**: Remote merchants must collect the specific local option tax applicable to the purchaser's **destination delivery address** (or historically elect a uniform 2.25% local rate for remote sellers).\n- **TNTAP Filing System**: Taxpayers remit sales and use tax returns electronically via the **Tennessee Taxpayer Access Point (TNTAP)**. Returns (Form SLS-450) are due on or before the **20th day of the month** following the reporting period.\n- **Sales Tax Holiday**: Tennessee hosts an annual 3-day Sales Tax Holiday in late July covering clothing ($100 or less) and school supplies ($100 or less)."
    }
  ],
  "workedExample": {
    "title": "Worked Example: $5,000 Commercial Machinery Sale in Nashville (Single Article Cap)",
    "scenario": "A contractor in Nashville, Tennessee (7.00% state + 2.25% local = 9.25% rate) purchases an industrial generator priced at $5,000.00.",
    "inputs": {
      "equipmentPrice": "$5,000.00",
      "stateRate": "7.00%",
      "localRate": "2.25%",
      "singleArticleStateRate": "2.75%"
    },
    "steps": [
      {
        "label": "First Tier ($0 - $1,600)",
        "formula": "$1,600.00 × 9.25% (state + local)",
        "amount": "$148.00",
        "note": "Subject to full 7% state + 2.25% local tax"
      },
      {
        "label": "Second Tier ($1,600.01 - $3,200)",
        "formula": "$1,600.00 × 9.75% (7% state + 2.75% single article)",
        "amount": "$156.00",
        "note": "State single article tax tier"
      },
      {
        "label": "Third Tier ($3,200.01 - $5,000)",
        "formula": "$1,800.00 × 7.00% (state rate only)",
        "amount": "$126.00",
        "note": "Exceeds $3,200 cap; zero local/single article tax"
      },
      {
        "label": "Total Tennessee Sales Tax",
        "formula": "$148.00 + $156.00 + $126.00",
        "amount": "$430.00",
        "note": "Effective tax rate is 8.60% (vs 9.25% un-capped)"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$5,000.00 + $430.00",
        "amount": "$5,430.00",
        "note": "Saves $32.50 due to single article cap"
      }
    ],
    "takeaway": "Under Tennessee’s single article tax cap, an item priced at $5,000 in Nashville incurs $430.00 in tax rather than $462.50, saving the buyer $32.50."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from an $800 Memphis B2B SaaS Invoice",
    "scenario": "A Memphis digital agency collects an $800.00 tax-inclusive payment for cloud software at the maximum 9.75% combined rate. What is the net software revenue?",
    "inputs": {
      "totalReceiptCollected": "$800.00",
      "memphisRate": "9.75%"
    },
    "steps": [
      {
        "label": "Net Revenue Extraction Formula",
        "formula": "$800.00 ÷ (1 + 0.0975)",
        "amount": "$728.93",
        "note": "Retained SaaS revenue"
      },
      {
        "label": "Tennessee Sales Tax Owed",
        "formula": "$800.00 - $728.93",
        "amount": "$71.07",
        "note": "Remitted via TNTAP"
      },
      {
        "label": "Verification Calculation",
        "formula": "$728.93 × 9.75%",
        "amount": "$71.07",
        "note": "Reconciles exactly to $800.00 receipt"
      }
    ],
    "takeaway": "From an $800.00 gross receipt in Memphis, the vendor retains $728.93 net revenue and owes $71.07 in sales tax to the Department of Revenue."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Tennessee?",
      "answer": "The statewide base sales tax rate in Tennessee is 7.00%. Local county surtaxes add between 1.50% and 2.75%, making the total combined rate 8.50% to 9.75%.",
      "sourceUrl": "https://www.tn.gov/revenue/taxes/sales-and-use-tax.html"
    },
    {
      "question": "What is the Tennessee Single Article Tax Cap?",
      "answer": "Tennessee caps local sales tax at the first $1,600 of a single tangible personal property item. The portion between $1,600 and $3,200 incurs a 2.75% state single article tax, while value above $3,200 incurs only the 7.00% state rate.",
      "sourceUrl": "https://www.tn.gov/revenue/taxes/sales-and-use-tax/local-sales-tax.html"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Tennessee?",
      "answer": "Yes. Tennessee treats remotely accessed software and cloud SaaS as fully taxable computer software under Tenn. Code Ann. § 67-6-231.",
      "sourceUrl": "https://www.tn.gov/revenue/taxes/sales-and-use-tax.html"
    },
    {
      "question": "Are groceries taxed at a lower rate in Tennessee?",
      "answer": "Yes. Food and food ingredients for home consumption are taxed at a reduced state rate of 4.00% (plus standard local county taxes), compared to the 7.00% standard rate.",
      "sourceUrl": "https://www.tn.gov/revenue/taxes/sales-and-use-tax.html"
    },
    {
      "question": "What is the economic nexus threshold in Tennessee?",
      "answer": "Out-of-state remote sellers establish economic nexus in Tennessee when gross sales into the state exceed $100,000 in the current or prior calendar year.",
      "sourceUrl": "https://www.tn.gov/revenue/taxes/sales-and-use-tax/remote-sellers.html"
    }
  ]
};

export default tennesseeContent;
