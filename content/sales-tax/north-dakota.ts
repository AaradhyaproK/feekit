import type { PageContent } from '../types.ts';

export const northDakotaContent: PageContent = {
  "slug": "north-dakota",
  "family": "sales-tax",
  "title": "North Dakota Sales Tax Calculator (5.00% to 8.50%) | FeeKit",
  "metaDescription": "Calculate North Dakota sales and use tax with Office of State Tax Commissioner rates (5.0% state, max 8.5% municipal). SaaS exemption, grocery rules, and $100k nexus.",
  "h1": "North Dakota Sales Tax Calculator & Tax Commissioner Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "North Dakota Office of State Tax Commissioner",
    "url": "https://www.tax.nd.gov/business/sales-and-use-tax",
    "citation": "N.D. Cent. Code Chapter 57-39.2 (Sales Tax) and Guideline: Computer Software."
  },
  "overview": "The State of North Dakota imposes a statutory baseline retail sales and use tax rate of 5.00% under N.D. Cent. Code § 57-39.2-02.1. Home-rule cities and counties across North Dakota are authorized to levy municipal and county local option sales taxes (ranging from 0.50% to 3.50%), pushing combined retail sales tax rates between 5.50% and 8.50% in major commercial centers including Fargo (7.50%), Grand Forks (7.25%), Bismarck (6.50%), and Minot (7.00%). Under official administrative guidelines, Software as a Service (SaaS) and remotely hosted applications are exempt from North Dakota sales tax. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in gross taxable sales.",
  "sections": [
    {
      "id": "nd-rate-structure-and-municipalities",
      "title": "North Dakota 5.00% Base Rate & Municipal Local Option Add-Ons (Max 8.50%)",
      "body": "North Dakota’s sales tax code combines a statutory state baseline with municipal home-rule taxes:\n\n- **Statewide Baseline Rate**: **5.00%**. Governed by N.D. Cent. Code § 57-39.2-02.1, applying to retail sales of tangible personal property.\n- **Municipal and County Option Taxes**: Local jurisdictions enact municipal sales taxes administered centrally by the Office of State Tax Commissioner:\n  - **Fargo (Cass County)**: **7.50% combined rate** (5.00% state + 2.50% city).\n  - **Grand Forks (Grand Forks County)**: **7.25% combined rate** (5.00% state + 2.25% city).\n  - **Minot (Ward County)**: **7.00% combined rate** (5.00% state + 2.00% city).\n  - **Bismarck (Burleigh County)**: **6.50% combined rate** (5.00% state + 1.50% city).\n  - **Williston (Williams County)**: **6.50% combined rate** (5.00% state + 1.50% city).\n- **Maximum Combined Ceilings**: Several smaller home-rule jurisdictions levy up to 3.50% in combined municipal and county taxes, resulting in a state maximum of 8.50%."
    },
    {
      "id": "nd-taxability-saas-groceries-clothing",
      "title": "Taxability Framework: SaaS Exemption, Grocery Protection, and Freight Rules",
      "body": "Statutory product taxability rules enforced by the North Dakota Office of State Tax Commissioner:\n\n1. **Software as a Service (SaaS)**: **100% Exempt**. Under North Dakota Guideline: Computer Software, prewritten software hosted on remote cloud infrastructure where the customer only accesses functionality without receiving downloaded code is classified as a non-taxable service.\n2. **Food for Home Consumption (Groceries)**: **Exempt**. Staple grocery items are exempt from sales tax under N.D. Cent. Code § 57-39.2-04.1. Prepared hot meals, restaurant dining, soft drinks, and candy remain taxable at standard rates.\n3. **Everyday Clothing and Footwear**: **Fully Taxable (5.00% - 8.50%)**. Clothing and footwear are taxable year-round in North Dakota.\n4. **Freight and Delivery Fees**: Under N.D. Admin. Code 81-04.1-01-10, separately stated delivery and shipping charges are exempt from sales tax, provided the delivery occurs after the purchase is negotiated."
    },
    {
      "id": "nd-economic-nexus-and-sourcing",
      "title": "North Dakota Remote Seller Nexus ($100,000 Threshold) & Sourcing",
      "body": "Codified under N.D. Cent. Code § 57-39.2-02.2 following post-Wayfair legislation:\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in North Dakota if, during the current or preceding calendar year, the business achieves:\n  - Taxable gross sales delivered into North Dakota exceeding **$100,000**.\n  - *Elimination of Transaction Test*: Under Senate Bill 2191, North Dakota repealed the 200-transaction threshold, meaning nexus is evaluated solely on the $100,000 gross taxable revenue test.\n- **Destination Sourcing**: North Dakota is a full member of the Streamlined Sales Tax Agreement (SSTA) and enforces destination sourcing. Remote sellers collect the combined rate based on the delivery destination.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit North Dakota sales tax on marketplace sales."
    },
    {
      "id": "nd-registration-and-filing-compliance",
      "title": "ND TAP Registration, Filing Due Dates, and Delinquency Penalties",
      "body": "Tax compliance requirements administered by the North Dakota Tax Commissioner:\n\n- **Permit Registration**: Remote and in-state retailers register online for a North Dakota Sales Tax Permit via **ND TAP (Taxpayer Access Point)**.\n- **Filing Deadlines**: Sales tax returns (Form ST) are filed monthly or quarterly and are due on or before the **last day of the month** following the end of the reporting period.\n- **Statutory Penalties**: Failure to file or pay on time incurs a penalty of **$5 or 5% of the tax due** (whichever is greater) for the first month, plus **1% per month** thereafter under N.D. Cent. Code § 57-39.2-18, plus statutory monthly interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Electronics Purchase in Fargo (7.50% Combined Rate)",
    "scenario": "A resident of Fargo, North Dakota orders a $600.00 4K television with a separately stated $50.00 freight delivery charge from an online retailer.",
    "inputs": {
      "televisionSubtotal": "$600.00",
      "deliveryFreightCharge": "$50.00 (Separately Stated)",
      "fargoCombinedRate": "7.50% (5% State + 2.5% City)"
    },
    "steps": [
      {
        "label": "Taxable Television Base",
        "formula": "$600.00 merchandise",
        "amount": "$600.00",
        "note": "Taxable tangible personal property"
      },
      {
        "label": "Separately Stated Freight Status",
        "formula": "Separately stated common carrier",
        "amount": "$0.00 tax",
        "note": "Exempt under N.D. Admin. Code 81-04.1-01-10"
      },
      {
        "label": "Combined Fargo Sales Tax (7.50%)",
        "formula": "$600.00 × 7.50%",
        "amount": "$45.00",
        "note": "State ($30.00) + Fargo ($15.00)"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$600.00 + $50.00 + $45.00",
        "amount": "$695.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Fargo, the 7.50% combined sales tax applies only to the $600 television ($45.00 tax), keeping the separately stated $50 freight charge completely tax-free."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from an $800.00 Bismarck Invoice",
    "scenario": "A retail contractor in Bismarck collects an all-inclusive $800.00 payment for taxable retail supplies at a 6.50% combined rate. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$800.00",
      "combinedRate": "6.50%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$800.00 ÷ (1 + 0.065)",
        "amount": "$751.17",
        "note": "Retained business net revenue"
      },
      {
        "label": "Combined Sales Tax Liability",
        "formula": "$800.00 - $751.17",
        "amount": "$48.83",
        "note": "State ($37.56) and Bismarck ($11.27)"
      },
      {
        "label": "Verification Calculation",
        "formula": "$751.17 × 6.50%",
        "amount": "$48.83",
        "note": "Reconciles exactly to $800.00 receipt"
      }
    ],
    "takeaway": "From an $800.00 tax-inclusive transaction in Bismarck, the merchant retains $751.17 net revenue and remits $48.83 in combined sales tax to the state."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in North Dakota?",
      "answer": "The baseline statutory state sales tax rate is 5.00%. With municipal and county option taxes, combined rates range from 5.50% to 8.50% (7.50% in Fargo, 6.50% in Bismarck).",
      "sourceUrl": "https://www.tax.nd.gov/business/sales-and-use-tax"
    },
    {
      "question": "Does North Dakota tax Software as a Service (SaaS)?",
      "answer": "No. Under North Dakota Guideline: Computer Software, cloud-hosted SaaS subscriptions and remote software access are classified as exempt services.",
      "sourceUrl": "https://www.tax.nd.gov/business/sales-and-use-tax"
    },
    {
      "question": "Are groceries exempt from sales tax in North Dakota?",
      "answer": "Yes. Staple groceries and food for home consumption are exempt from sales tax under N.D. Cent. Code § 57-39.2-04.1. Prepared hot food and dining remain taxable.",
      "sourceUrl": "https://www.tax.nd.gov/business/sales-and-use-tax"
    },
    {
      "question": "What is the North Dakota economic nexus threshold for remote sellers?",
      "answer": "Out-of-state remote sellers establish economic nexus upon reaching $100,000 in gross taxable sales delivered into North Dakota. The 200-transaction test was repealed.",
      "sourceUrl": "https://www.tax.nd.gov/business/sales-and-use-tax"
    },
    {
      "question": "Does North Dakota offer a sales tax holiday?",
      "answer": "No. North Dakota does not host an annual statewide sales tax holiday.",
      "sourceUrl": "https://www.tax.nd.gov/business/sales-and-use-tax"
    }
  ]
};

export default northDakotaContent;
