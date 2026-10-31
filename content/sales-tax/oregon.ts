import type { PageContent } from '../types.ts';

export const oregonContent: PageContent = {
  "slug": "oregon",
  "family": "sales-tax",
  "title": "Oregon Sales Tax Calculator (0.00% — Zero Sales Tax State) | FeeKit",
  "metaDescription": "Calculate Oregon sales tax (0.00% retail sales tax). Comprehensive guide to Oregon zero sales tax, the Corporate Activity Tax (CAT 0.57%), and local taxes.",
  "h1": "Oregon Sales Tax Calculator: 0.00% Retail Tax & Corporate Activity Tax Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Oregon Department of Revenue",
    "url": "https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx",
    "citation": "Or. Rev. Stat. Chapter 317A (Corporate Activity Tax) and Oregon Constitution Article IX."
  },
  "overview": "The State of Oregon is one of only five US states with no general statewide retail sales tax, and the only state on the US West Coast with zero state and zero general local municipal sales taxes. Consumers shopping at retail storefronts or ordering online in Portland, Eugene, Salem, or Bend pay an exact 0.00% sales tax at checkout. However, businesses operating in Oregon must account for the Corporate Activity Tax (CAT), enacted under House Bill 3427 (codified in ORS Chapter 317A). The CAT is a gross receipts excise tax levied on business commercial activity exceeding $1,000,000 in Oregon, structured as a $250 base fee plus a 0.57% tax on taxable commercial activity.",
  "sections": [
    {
      "id": "or-zero-sales-tax-regime",
      "title": "Oregon Zero Retail Sales Tax Framework Across All Cities and Counties",
      "body": "Oregon voters have repeatedly rejected statewide retail sales tax referendums:\n\n- **Statewide Retail Sales Tax Rate**: **0.00%**. Consumers pay zero sales tax on retail purchases of clothing, electronics, groceries, furniture, motor vehicles, and restaurant dining.\n- **Zero Local Option Retail Surcharges**: Cities and counties in Oregon do not possess statutory authority to levy general municipal sales taxes.\n- **Specialized Local Excises**: A small number of localized industry-specific excises exist:\n  - **City of Portland Clean Energy Surcharge (CES)**: A 1.00% surcharge levied on large commercial retailers with over $1 billion in national sales and $500,000 in Portland sales.\n  - **State Lodging Tax (1.50%)**: Imposed on transient lodging (hotels, motels, short-term rentals) plus local municipal lodging taxes.\n  - **State Vehicle Privilege Tax (0.50%)**: Levied on retail vehicle dealers on the sale of new motor vehicles."
    },
    {
      "id": "or-cat-tax-for-businesses",
      "title": "The Oregon Corporate Activity Tax (CAT): The 0.57% Gross Receipts Surcharge",
      "body": "While consumers pay zero sales tax, businesses operating in Oregon face the Corporate Activity Tax:\n\n1. **Who is Subject to the CAT?**: Any business entity (corporation, partnership, LLC, sole proprietorship) with taxable commercial activity delivered or sourced to Oregon exceeding **$1,000,000** annually.\n2. **CAT Tax Rate & Computation**:\n   - Flat base tax of **$250.00** on the first $1,000,000 in commercial activity; **PLUS**\n   - **0.57%** on all commercial activity exceeding $1,000,000.\n3. **The 35% Cost Subtraction**: Taxpayers are entitled to deduct **35% of either cost inputs (COGS) OR 35% of labor costs** (apportioned to Oregon), reducing effective tax liabilities.\n4. **Economic Nexus for the CAT ($750,000 Threshold)**: Out-of-state remote businesses establish nexus for the CAT if they exceed **$750,000 in commercial activity** in Oregon, $50,000 in Oregon property, $50,000 in payroll, or 25% of total activity."
    },
    {
      "id": "or-border-commerce-cross-state-rules",
      "title": "Cross-Border Commerce: Washington and California Residents Shopping in Oregon",
      "body": "Because Oregon borders Washington (6.5% - 10.6% sales tax) and California (7.25% - 10.75% sales tax), border retail dynamics are intense:\n\n- **In-Person Shopping in Oregon**: Out-of-state shoppers who travel into Oregon to make retail purchases pay **0.00% sales tax** at the Oregon cash register.\n- **Use Tax Liability Upon Returning Home**: Under Washington and California tax law, residents who purchase tangible personal property in tax-free Oregon and transport it back to their home state for use are legally obligated to declare and pay **Consumer Use Tax** at their local home tax rate.\n- **Shipments Sent Out of Oregon**: If an Oregon retailer ships merchandise to a customer in Washington or California, the transaction is subject to the destination state’s sales tax, not Oregon’s 0% rate."
    },
    {
      "id": "or-cat-filing-compliance",
      "title": "Revenue Online Registration, CAT Quarterly Deadlines, and Compliance",
      "body": "Tax compliance administration enforced by the Oregon Department of Revenue:\n\n- **CAT Registration**: Businesses exceeding $750,000 in Oregon commercial activity must register for the CAT within 30 days of crossing the threshold via **Revenue Online**.\n- **Quarterly Estimated Payments**: Businesses projecting a CAT liability exceeding $5,000 must remit quarterly estimated tax payments due on **April 30, July 31, October 31, and January 31**.\n- **Annual Reconciliation Return**: The annual CAT return is due on or before **April 15** of the following calendar year.\n- **Sales Tax Holiday**: Not applicable (Oregon has no general sales tax)."
    }
  ],
  "workedExample": {
    "title": "Worked Example: $2,000 Consumer Electronics Purchase in Portland (0.00% Tax)",
    "scenario": "A consumer in Portland, Oregon purchases a $2,000.00 high-end laptop from a local computer electronics store.",
    "inputs": {
      "laptopPrice": "$2,000.00",
      "oregonSalesTaxRate": "0.00%",
      "localMunicipalRate": "0.00%"
    },
    "steps": [
      {
        "label": "Laptop Merchandise Subtotal",
        "formula": "$2,000.00 purchase price",
        "amount": "$2,000.00",
        "note": "Retail price agreed"
      },
      {
        "label": "State Sales Tax (0.00%)",
        "formula": "$2,000.00 × 0.00%",
        "amount": "$0.00",
        "note": "Oregon levies zero state retail sales tax"
      },
      {
        "label": "City of Portland Local Tax (0.00%)",
        "formula": "$2,000.00 × 0.00%",
        "amount": "$0.00",
        "note": "Zero municipal sales tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$2,000.00 + $0.00",
        "amount": "$2,000.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Oregon, consumer retail sales tax is 0.00%. The customer pays exactly $2,000.00, saving $170 to $210 compared to buying in neighboring Washington or California."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Retail Cash Receipt in Eugene ($500.00 Total)",
    "scenario": "A clothing retailer in Eugene, Oregon collects $500.00 cash for apparel. How much represents sales tax?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "oregonSalesTaxRate": "0.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.00)",
        "amount": "$500.00",
        "note": "100% of receipt is retained sales revenue"
      },
      {
        "label": "Sales Tax Owed",
        "formula": "$500.00 - $500.00",
        "amount": "$0.00",
        "note": "Zero sales tax liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "$500.00 × 0.00%",
        "amount": "$0.00",
        "note": "Zero sales tax remitted"
      }
    ],
    "takeaway": "In Oregon, 100% of customer checkout revenue is retained by the business as gross sales, with zero sales tax remittance owed to the state."
  },
  "faqs": [
    {
      "question": "Does Oregon have a sales tax?",
      "answer": "No. Oregon has no general state or local retail sales tax. Consumers pay 0.00% sales tax on goods, electronics, clothing, and services at retail checkout.",
      "sourceUrl": "https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx"
    },
    {
      "question": "What is the Oregon Corporate Activity Tax (CAT)?",
      "answer": "The CAT is a business gross receipts tax (not a sales tax) of $250 plus 0.57% on taxable commercial activity in Oregon exceeding $1,000,000 annually, with a 35% deduction for labor or COGS.",
      "sourceUrl": "https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx"
    },
    {
      "question": "Can Washington residents shop tax-free in Oregon?",
      "answer": "Yes, when shopping in person at Oregon storefronts, Washington residents pay 0.00% sales tax. However, under Washington state law, residents must declare and remit Consumer Use Tax upon bringing items home.",
      "sourceUrl": "https://dor.wa.gov/taxes-rates/use-tax"
    },
    {
      "question": "Is Software as a Service (SaaS) subject to sales tax in Oregon?",
      "answer": "No. Because Oregon levies zero retail sales tax, SaaS and cloud software services are completely free of sales tax at checkout.",
      "sourceUrl": "https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx"
    },
    {
      "question": "What taxes apply to motor vehicles in Oregon?",
      "answer": "Oregon imposes a 0.50% Vehicle Privilege Tax on car dealers for new vehicle sales and a 0.50% Vehicle Use Tax on vehicles purchased out-of-state and registered in Oregon.",
      "sourceUrl": "https://www.oregon.gov/dor/programs/businesses/Pages/vehicle-privilege-and-use.aspx"
    }
  ]
};

export default oregonContent;
