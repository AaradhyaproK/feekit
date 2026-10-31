import type { PageContent } from '../types.ts';

export const districtOfColumbiaContent: PageContent = {
  "slug": "district-of-columbia",
  "family": "sales-tax",
  "title": "Washington D.C. Sales Tax Calculator (6.00% to 10.25%) | FeeKit",
  "metaDescription": "Calculate Washington D.C. sales tax with Office of Tax and Revenue rates (6.0% general retail, 10.0% restaurant meals). Taxable SaaS, grocery rules, and $100k nexus.",
  "h1": "Washington D.C. Sales Tax Calculator & Office of Tax and Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "District of Columbia Office of Tax and Revenue",
    "url": "https://otr.cfo.dc.gov/page/sales-and-use-tax",
    "citation": "D.C. Code Title 47, Chapter 20 (Gross Sales Tax) and Chapter 22 (Compensating Use Tax)."
  },
  "overview": "The District of Columbia levies a statutory general retail sales and use tax rate of 6.00% under D.C. Code § 47-2002. Because the District operates as a consolidated municipal-state jurisdiction, there are no independent county or municipal sub-tier sales taxes. However, the District enforces specialized statutory sales tax tiers for distinct economic sectors: general retail goods (6.00%), restaurant dining and prepared foods (10.00%), commercial parking facilities (10.25%), and transient hotel accommodations (14.95% plus $0.20/night). Under D.C. Code § 47-2001(n)(1)(N), Software as a Service (SaaS) and digital goods are fully taxable at 6.00%. Remote sellers establish economic nexus upon reaching $100,000 in gross revenue or 200 transactions.",
  "sections": [
    {
      "id": "dc-specialized-rate-tiers",
      "title": "Washington D.C. Specialized Sales Tax Tiers (6.00% to 14.95%)",
      "body": "The District of Columbia enforces a multi-tiered sales tax rate structure:\n\n- **General Retail Rate**: **6.00%**. Governed by D.C. Code § 47-2002, applying to retail sales of tangible personal property, specified digital products, and taxable commercial services.\n- **Restaurant Meals & Prepared Food**: **10.00%**. Applies to all meals, food, and beverages served in restaurants, carryout establishments, catering venues, and bars.\n- **Commercial Parking Facilities**: **10.25%**. Applies to parking and storage of motor vehicles in commercial parking lots and garages.\n- **Transient Hotel Accommodations**: **14.95%** (combining a 10.05% basic hotel tax and 4.90% convention center surcharge, plus a $0.20 per room per night fee).\n- **Off-Premises Alcoholic Beverages**: **10.25%**. Applies to sales of packaged alcoholic beverages sold in liquor stores for off-premises consumption."
    },
    {
      "id": "dc-taxability-saas-groceries-clothing",
      "title": "Taxability Framework: Full SaaS Taxation, Grocery Exemption, and Freight Rules",
      "body": "Statutory product taxability rules enforced by the D.C. Office of Tax and Revenue (OTR):\n\n1. **Software as a Service (SaaS)**: **Fully Taxable (6.00%)**. Enacted under D.C. Code § 47-2001(n)(1)(N), the District explicitly taxes the sale or charge for any prewritten computer software transferred electronically or accessed remotely, including cloud SaaS, hosted applications, and digital code.\n2. **Food for Home Consumption (Groceries)**: **100% Exempt**. Staple grocery items, fresh produce, meat, dairy, and bakery products are exempt from sales tax under D.C. Code § 47-2005(2). Restaurant dining and prepared meals are taxable at 10.00%.\n3. **Everyday Clothing and Footwear**: **Fully Taxable (6.00%)**. Clothing is subject to the standard 6.00% retail sales tax year-round.\n4. **Freight and Delivery Fees**: Under D.C. Code § 47-2001(p), transportation charges billed by the vendor in connection with the sale of taxable merchandise are included in the taxable sales price."
    },
    {
      "id": "dc-economic-nexus-and-sourcing",
      "title": "Washington D.C. Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Codified under D.C. Code § 47-2001(n)(1) following post-Wayfair statutory updates:\n\n- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in the District of Columbia if, during the previous or current calendar year, the business achieves:\n  - Gross receipts exceeding **$100,000** from retail sales delivered into the District; **OR**\n  - **200 or more separate retail transactions** delivered into the District.\n- **Destination Sourcing**: The District enforces destination sourcing. Remote merchants collect the applicable rate (6.00% retail or 10.00% restaurant/catering) based on delivery into D.C.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, DoorDash, Uber Eats, Etsy, etc.) collect and remit D.C. sales tax on behalf of marketplace vendors."
    },
    {
      "id": "dc-registration-and-filing-compliance",
      "title": "MyTax DC Registration, Filing Due Dates, and Delinquency Penalties",
      "body": "Compliance requirements administered by the D.C. Office of Tax and Revenue:\n\n- **Sales Tax Licensing**: Retailers register for a D.C. Sales and Use Tax account online via the **MyTax DC** portal.\n- **Filing Deadlines**: Standard sales tax returns (Form FR-800M for monthly remitters or FR-800Q for quarterly filers) are due on or before the **20th day of the month** following the end of the reporting period.\n- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **5% per month** of the unpaid tax, up to a statutory ceiling of **25%** under D.C. Code § 47-4213, plus statutory monthly interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Cloud Software Subscription in Washington D.C. (6.00% Rate)",
    "scenario": "A public policy consultancy headquartered in downtown Washington D.C. subscribes to an enterprise SaaS analytics platform billed at $2,000.00 annually.",
    "inputs": {
      "annualSaaSContract": "$2,000.00",
      "dcGeneralSalesTaxRate": "6.00%"
    },
    "steps": [
      {
        "label": "Taxable Service Base",
        "formula": "$2,000.00 cloud subscription",
        "amount": "$2,000.00",
        "note": "Taxable under D.C. Code § 47-2001(n)(1)(N)"
      },
      {
        "label": "D.C. General Sales Tax (6.00%)",
        "formula": "$2,000.00 × 6.00%",
        "amount": "$120.00",
        "note": "Standard District rate"
      },
      {
        "label": "Total Invoiced SaaS Cost",
        "formula": "$2,000.00 + $120.00",
        "amount": "$2,120.00",
        "note": "Full customer payment"
      }
    ],
    "takeaway": "Because Washington D.C. statutorily taxes remotely accessed prewritten software, the consultancy incurs a 6.00% sales tax ($120.00) on the SaaS contract."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $550.00 Restaurant Catering Receipt",
    "scenario": "A catering service in Washington D.C. issues an all-inclusive $550.00 invoice for prepared corporate luncheon dining subject to the 10.00% restaurant rate.",
    "inputs": {
      "totalInclusiveAmount": "$550.00",
      "dcRestaurantRate": "10.00%"
    },
    "steps": [
      {
        "label": "Net Catering Extraction Formula",
        "formula": "$550.00 ÷ (1 + 0.10)",
        "amount": "$500.00",
        "note": "Retained catering business revenue"
      },
      {
        "label": "D.C. Restaurant Sales Tax Liability",
        "formula": "$550.00 - $500.00",
        "amount": "$50.00",
        "note": "Remitted on Form FR-800"
      },
      {
        "label": "Verification Calculation",
        "formula": "$500.00 × 10.00%",
        "amount": "$50.00",
        "note": "Reconciles exactly to $550.00 receipt"
      }
    ],
    "takeaway": "From an all-inclusive $550.00 catering bill in Washington D.C., the caterer retains $500.00 net revenue and owes $50.00 in sales tax at the 10.00% restaurant rate."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Washington D.C.?",
      "answer": "The general retail sales tax rate in Washington D.C. is 6.00%. Specialized rates apply to restaurant dining (10.00%), commercial parking (10.25%), and hotels (14.95%).",
      "sourceUrl": "https://otr.cfo.dc.gov/page/sales-and-use-tax"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Washington D.C.?",
      "answer": "Yes. Washington D.C. explicitly taxes SaaS, cloud software access, and digital products at the standard 6.00% retail sales tax rate under D.C. Code § 47-2001(n)(1)(N).",
      "sourceUrl": "https://otr.cfo.dc.gov/page/sales-and-use-tax"
    },
    {
      "question": "Are groceries taxable in Washington D.C.?",
      "answer": "No. Grocery staples and food items purchased for home consumption are 100% exempt from sales tax in D.C. Prepared meals and restaurant dining are taxed at 10.00%.",
      "sourceUrl": "https://otr.cfo.dc.gov/page/sales-and-use-tax"
    },
    {
      "question": "What is the Washington D.C. economic nexus threshold for remote sellers?",
      "answer": "Out-of-state remote vendors establish economic nexus upon reaching $100,000 in gross receipts or completing 200 individual transactions delivered into the District.",
      "sourceUrl": "https://otr.cfo.dc.gov/page/sales-and-use-tax"
    },
    {
      "question": "When are Washington D.C. sales tax returns due?",
      "answer": "D.C. sales tax returns are due on or before the 20th day of the month following the close of the reporting period via MyTax DC.",
      "sourceUrl": "https://otr.cfo.dc.gov/page/sales-and-use-tax"
    }
  ]
};

export default districtOfColumbiaContent;
