import type { PageContent } from '../types.ts';

export const indianaContent: PageContent = {
  "slug": "indiana",
  "family": "sales-tax",
  "title": "Indiana Sales Tax Calculator (7.00% Flat Rate) | FeeKit",
  "metaDescription": "Calculate Indiana sales tax with Department of Revenue rates (7.0% flat statewide). Zero local taxes, Information Bulletin #8 SaaS exemption, and $100k nexus.",
  "h1": "Indiana Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Indiana Department of Revenue",
    "url": "https://www.in.gov/dor/business-tax/sales-tax/",
    "citation": "Ind. Code § 6-2.5 (State Gross Retail and Use Tax) and Sales Tax Information Bulletin #8."
  },
  "overview": "The State of Indiana enforces a flat statewide sales and use tax rate of 7.00% under Ind. Code § 6-2.5-2-2. Under Indiana statutory law, local municipalities, townships, and counties are prohibited from enacting local option retail sales taxes, guaranteeing a uniform 7.00% tax rate across all 92 counties (from Indianapolis and Fort Wayne to South Bend and Evansville). Indiana provides a complete statutory sales tax exemption for cloud software (SaaS) under Information Bulletin #8, while everyday clothing and footwear are fully taxable at 7.00%. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual gross sales delivered into Indiana.",
  "sections": [
    {
      "id": "in-flat-rate-structure",
      "title": "Uniform 7.00% Statewide Rate Across All 92 Indiana Counties",
      "body": "Indiana maintains a streamlined single-rate structure:\n\n- **Flat Statewide Baseline**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable transactions statewide.\n- **Zero Local Option Retail Surcharges**: Local counties and cities cannot levy local sales taxes on retail goods. Whether shopping in downtown Indianapolis (Marion County), Bloomington (Monroe County), or rural farmland, the sales tax rate is identical.\n- **Specialized Food and Beverage Taxes (F&B)**: Select counties and municipalities levy a 1.00% or 2.00% Food and Beverage Tax on restaurant meals and prepared food (e.g., Marion County levies a 2.00% F&B tax, making restaurant meals 9.00%), but this does not apply to general retail merchandise."
    },
    {
      "id": "in-saas-exemption-and-taxability",
      "title": "Taxability Framework: Complete SaaS Exemption & Full Clothing Taxation",
      "body": "Product taxability rules administered by the Indiana Department of Revenue:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Sales Tax Information Bulletin #8, cloud-based SaaS, remotely accessed applications, and hosted cloud software are non-taxable services, provided the customer accesses software hosted remotely without obtaining ownership or local executable software.\n2. **Everyday Clothing and Footwear**: **Fully Taxable (7.00%)**. Unlike New York or New Jersey, Indiana does not exempt clothing. Standard shirts, pants, coats, and shoes are subject to the full 7.00% rate.\n3. **Groceries & Food for Home Consumption**: **Exempt**. Essential food products (meat, bread, produce, dairy) are exempt under Ind. Code § 6-2.5-5-20. Candy, soft drinks, and prepared hot food are taxable at 7.00%.\n4. **Delivery and Freight Charges**: Under Ind. Code § 6-2.5-1-5, delivery charges billed by the seller are included in the taxable gross sales price, unless the underlying merchandise is exempt."
    },
    {
      "id": "in-economic-nexus-and-remote-seller-rules",
      "title": "Indiana Economic Nexus ($100,000 Threshold) & Marketplace Facilitator Laws",
      "body": "Following post-Wayfair legislative amendments under Senate Bill 228:\n\n- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in Indiana upon reaching **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (The previous 200-transaction count threshold was formally repealed).\n- **Destination Sourcing**: Indiana operates under destination sourcing rules for all delivered goods. Remote sellers collect Indiana’s uniform 7.00% state sales tax on all taxable deliveries.\n- **Marketplace Facilitator Legislation**: Platforms such as Amazon, eBay, and Etsy are legally required to collect and remit Indiana sales tax on all sales made through their marketplaces, shielding individual third-party merchants from direct filing obligations."
    },
    {
      "id": "in-filing-compliance-intime-portal",
      "title": "INTIME Registration, 20th-of-the-Month Deadlines, and Collection Allowances",
      "body": "Administrative requirements enforced by the Indiana Department of Revenue (DOR):\n\n- **INTIME Portal Registration**: Remote and in-state merchants register for a Registered Retail Merchant Certificate (RRMC) online via **INTIME** (Indiana Taxpayer Information Management Engine). There is a $25 registration fee for physical merchants.\n- **Filing Deadlines**: Sales tax returns (Form ST-103) are due on or before the **20th day of the month** following the reporting period for monthly remitters (or the 30th day for small annual filers).\n- **Collection Allowance (Timely Filing Discount)**: Under Ind. Code § 6-2.5-6-10, retailers who file and pay their returns on time may deduct a collection allowance ranging from 0.73% down to 0.26% of the sales tax collected as compensation.\n- **Sales Tax Holiday**: Indiana does not hold an annual sales tax holiday.\n- **Delinquency Penalties**: Late returns incur a penalty of **10% of the unpaid tax** plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Tool Purchase in Indianapolis (7.00% Flat Rate)",
    "scenario": "A contractor in Indianapolis, Indiana purchases $600.00 of commercial tools with a $40.00 delivery freight fee from an industrial supply company.",
    "inputs": {
      "toolsSubtotal": "$600.00",
      "deliveryFreightCharge": "$40.00",
      "statewideSalesTaxRate": "7.00%"
    },
    "steps": [
      {
        "label": "Taxable Tools Base",
        "formula": "$600.00 merchandise",
        "amount": "$600.00",
        "note": "Tools are taxable personal property"
      },
      {
        "label": "Taxable Delivery Fee",
        "formula": "$40.00 freight",
        "amount": "$40.00",
        "note": "Delivery is taxable under Ind. Code § 6-2.5-1-5"
      },
      {
        "label": "Total Taxable Sales Base",
        "formula": "$600.00 + $40.00",
        "amount": "$640.00",
        "note": "Subject to 7.00% state sales tax"
      },
      {
        "label": "Indiana Sales Tax (7.00%)",
        "formula": "$640.00 × 7.00%",
        "amount": "$44.80",
        "note": "State sales tax remitted via INTIME"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$640.00 + $44.80",
        "amount": "$684.80",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "On a $600.00 tool order with $40 shipping in Indiana, the 7.00% tax applies to both merchandise and shipping, totaling $44.80."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from an $800.00 Gross Receipt in Indiana",
    "scenario": "A retail store in Fort Wayne collects an $800.00 tax-inclusive cash payment for taxable home goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$800.00",
      "indianaRate": "7.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$800.00 ÷ (1 + 0.07)",
        "amount": "$747.66",
        "note": "True retail revenue retained"
      },
      {
        "label": "Indiana Sales Tax Owed",
        "formula": "$800.00 - $747.66",
        "amount": "$52.34",
        "note": "Remitted to Indiana DOR"
      },
      {
        "label": "Verification Calculation",
        "formula": "$747.66 × 7.00%",
        "amount": "$52.34",
        "note": "Reconciles exactly to $800.00 receipt"
      }
    ],
    "takeaway": "From an $800.00 gross receipt in Indiana, the business retains $747.66 net revenue and owes $52.34 in sales tax to the state."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Indiana for 2026?",
      "answer": "The sales tax rate in Indiana is a flat 7.00% statewide. Municipalities and counties do not levy local retail sales taxes.",
      "sourceUrl": "https://www.in.gov/dor/business-tax/sales-tax/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Indiana?",
      "answer": "No. Under Sales Tax Information Bulletin #8, cloud SaaS and hosted software applications are 100% exempt from Indiana sales tax.",
      "sourceUrl": "https://www.in.gov/dor/files/reference/ib08.pdf"
    },
    {
      "question": "Is clothing taxable in Indiana?",
      "answer": "Yes. Clothing and footwear are fully taxable at Indiana’s 7.00% sales tax rate.",
      "sourceUrl": "https://www.in.gov/dor/business-tax/sales-tax/"
    },
    {
      "question": "What is the Indiana economic nexus threshold for remote sellers?",
      "answer": "Out-of-state remote sellers establish economic nexus in Indiana when retail sales delivered into the state exceed $100,000 in gross revenue during the current or prior calendar year.",
      "sourceUrl": "https://www.in.gov/dor/business-tax/remote-seller-information/"
    },
    {
      "question": "Does Indiana have a sales tax holiday?",
      "answer": "No. Indiana does not host an annual sales tax holiday.",
      "sourceUrl": "https://www.in.gov/dor/business-tax/sales-tax/"
    }
  ]
};

export default indianaContent;
