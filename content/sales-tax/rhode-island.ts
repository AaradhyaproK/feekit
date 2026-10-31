import type { PageContent } from '../types.ts';

export const rhodeIslandContent: PageContent = {
  "slug": "rhode-island",
  "family": "sales-tax",
  "title": "Rhode Island Sales Tax Calculator (7.00% Flat Rate) | FeeKit",
  "metaDescription": "Calculate Rhode Island sales and use tax with Division of Taxation rates (7.0% flat statewide). Clothing exemption under $250, SaaS taxation, and $100k nexus.",
  "h1": "Rhode Island Sales Tax Calculator & Division of Taxation Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Rhode Island Division of Taxation",
    "url": "https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax",
    "citation": "R.I. Gen. Laws Title 44, Chapter 18 (Sales and Use Taxes: Liability and Computation) and Chapter 19."
  },
  "overview": "The State of Rhode Island levies a uniform statewide retail sales and use tax rate of 7.00% under R.I. Gen. Laws § 44-18-18. General municipal and county-level sales taxes do not exist in Rhode Island, providing complete geographic uniformity across all 39 cities and towns from Providence and Warwick to Newport. Under Rhode Island law, everyday clothing and footwear priced under $250 per item are 100% exempt from sales tax, with the 7.00% tax applying only to the incremental amount over $250. Following enacted tax legislation, Rhode Island codified remote prewritten software access (SaaS) as fully taxable. Remote sellers establish economic nexus upon exceeding $100,000 in gross revenue or 200 transactions.",
  "sections": [
    {
      "id": "ri-flat-7-percent-rate",
      "title": "Uniform 7.00% Statewide Rate Across All 39 Rhode Island Municipalities",
      "body": "Rhode Island enforces a centralized rate structure:\n\n- **Statewide Baseline Rate**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable services under R.I. Gen. Laws § 44-18-18.\n- **Zero Local Option Retail Taxes**: Municipalities cannot enact general local sales taxes. A retail purchase in Providence, Cranston, Pawtucket, or Warwick carries the exact same 7.00% rate.\n- **Meals and Beverage Surcharge**: Rhode Island levies an additional **1.00% local meals and beverage tax** on restaurant dining and prepared meals, resulting in an 8.00% combined rate on restaurant checks."
    },
    {
      "id": "ri-taxability-clothing-saas-groceries",
      "title": "Taxability Framework: $250 Clothing Exemption, SaaS Taxation, and Groceries",
      "body": "Statutory product taxability rules enforced by the Rhode Island Division of Taxation:\n\n1. **Everyday Clothing and Footwear**: **Exempt up to $250 per item**. Under R.I. Gen. Laws § 44-18-30(27), articles of clothing and footwear costing less than $250 are 100% exempt from sales tax. For items priced at $250 or more, the 7.00% sales tax applies **only to the incremental portion exceeding $250** (for example, on a $350 coat, only $100 is taxable, resulting in $7.00 tax).\n2. **Software as a Service (SaaS)**: **Fully Taxable (7.00%)**. Following enacted budget legislation amending R.I. Gen. Laws § 44-18-7.3, Rhode Island explicitly taxes prewritten computer software accessed remotely (cloud SaaS) and digital goods at 7.00%.\n3. **Groceries & Food Products**: **Exempt**. Unprepared food items for human consumption are exempt under R.I. Gen. Laws § 44-18-30(9). Prepared meals, candy, and soft drinks are taxable.\n4. **Freight and Delivery Fees**: Delivery charges billed by the retailer in connection with the sale of taxable merchandise are subject to sales tax under R.I. Gen. Laws § 44-18-12(a)(2)."
    },
    {
      "id": "ri-economic-nexus-and-sourcing",
      "title": "Rhode Island Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Codified under R.I. Gen. Laws § 44-18.2-3 (Non-Collecting Retailers and Remote Sellers):\n\n- **Economic Nexus Standard**: A remote seller establishes economic nexus in Rhode Island if, during the preceding calendar year, they have:\n  - Gross revenue exceeding **$100,000** from sales delivered into Rhode Island; **OR**\n  - **200 or more separate transactions** delivered into the state.\n- **Destination Sourcing**: Rhode Island is a full member of the Streamlined Sales Tax (SST) initiative and enforces destination sourcing. Remote merchants collect the 7.00% rate on all taxable shipments delivered to a Rhode Island address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, Etsy, eBay, etc.) collect and remit Rhode Island sales tax on all sales conducted through their platforms."
    },
    {
      "id": "ri-registration-and-filing-compliance",
      "title": "Sales Tax Permit, Electronic Filing Portal, and Statutory Penalties",
      "body": "Tax compliance requirements administered by the Rhode Island Division of Taxation:\n\n- **Retail Permit**: Retailers must obtain a Sales and Use Tax Permit via the **Rhode Island Division of Taxation Tax Portal** and pay an annual $10 permit fee.\n- **Filing Deadlines**: Sales tax returns (Form T-204) are due on or before the **20th day of the month** following the end of the reporting period.\n- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **10% of the tax due** under R.I. Gen. Laws § 44-19-12, plus interest accruing at the statutory statutory underpayment rate."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Designer Apparel Purchase in Providence ($400 Order)",
    "scenario": "A shopper in Providence, Rhode Island purchases a designer winter coat priced at $400.00 at a local clothing boutique.",
    "inputs": {
      "coatPurchasePrice": "$400.00",
      "clothingThreshold": "$250.00 Exemption Ceiling",
      "rhodeIslandSalesTaxRate": "7.00%"
    },
    "steps": [
      {
        "label": "Statutory Exempt Portion",
        "formula": "First $250.00 of clothing price",
        "amount": "$250.00",
        "note": "100% exempt under R.I. Gen. Laws § 44-18-30(27)"
      },
      {
        "label": "Taxable Incremental Base",
        "formula": "$400.00 - $250.00",
        "amount": "$150.00",
        "note": "Only excess over $250 is taxable"
      },
      {
        "label": "Rhode Island Sales Tax (7.00%)",
        "formula": "$150.00 × 7.00%",
        "amount": "$10.50",
        "note": "7% applied to incremental excess"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$400.00 + $10.50",
        "amount": "$410.50",
        "note": "Total customer checkout payment"
      }
    ],
    "takeaway": "Under Rhode Island’s clothing threshold rule, the shopper pays only $10.50 in sales tax on the $400 coat because the first $250 is completely tax-free."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from an $850.00 Newport Invoice",
    "scenario": "A marine equipment retailer in Newport collects a flat $850.00 tax-inclusive payment for taxable boat accessories. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$850.00",
      "stateTaxRate": "7.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$850.00 ÷ (1 + 0.07)",
        "amount": "$794.39",
        "note": "Retained business net revenue"
      },
      {
        "label": "Rhode Island Sales Tax Liability",
        "formula": "$850.00 - $794.39",
        "amount": "$55.61",
        "note": "Remitted on Form T-204"
      },
      {
        "label": "Verification Calculation",
        "formula": "$794.39 × 7.00%",
        "amount": "$55.61",
        "note": "Reconciles exactly to $850.00 receipt"
      }
    ],
    "takeaway": "From an $850.00 tax-inclusive transaction in Newport, the vendor retains $794.39 net revenue and owes $55.61 in sales tax to the Division of Taxation."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Rhode Island?",
      "answer": "Rhode Island has a uniform statewide sales tax rate of 7.00%. Local option sales taxes do not exist on retail goods.",
      "sourceUrl": "https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax"
    },
    {
      "question": "How is clothing taxed in Rhode Island?",
      "answer": "Everyday clothing and footwear under $250 per item are 100% exempt from sales tax. For items costing $250 or more, the 7.00% tax applies only to the incremental portion over $250.",
      "sourceUrl": "https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Rhode Island?",
      "answer": "Yes. Rhode Island taxes prewritten computer software accessed remotely, including cloud SaaS and electronic data products, at the standard 7.00% rate.",
      "sourceUrl": "https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax"
    },
    {
      "question": "What is the Rhode Island economic nexus threshold for remote sellers?",
      "answer": "Remote sellers establish economic nexus upon reaching $100,000 in gross revenue or completing 200 individual transactions delivered into Rhode Island in the preceding calendar year.",
      "sourceUrl": "https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax"
    },
    {
      "question": "When are Rhode Island sales tax returns due?",
      "answer": "Rhode Island sales tax returns are due on or before the 20th day of the month following the end of the reporting period via the Division of Taxation Tax Portal.",
      "sourceUrl": "https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax"
    }
  ]
};

export default rhodeIslandContent;
