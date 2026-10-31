import type { PageContent } from '../types.ts';

export const maineContent: PageContent = {
  "slug": "maine",
  "family": "sales-tax",
  "title": "Maine Sales Tax Calculator (5.50% Flat Rate) | FeeKit",
  "metaDescription": "Calculate Maine sales and use tax with Maine Revenue Services rates (5.5% statewide flat). SaaS exemption under Bulletin 27, grocery rules, and $100k economic nexus.",
  "h1": "Maine Sales Tax Calculator & Maine Revenue Services Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Maine Revenue Services",
    "url": "https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax",
    "citation": "36 M.R.S. Chapter 211 (Sales and Use Tax) and Maine Revenue Services Instructional Bulletin No. 27."
  },
  "overview": "The State of Maine imposes a uniform statewide sales and use tax rate of 5.50% under 36 M.R.S. § 1811. Municipalities and counties in Maine are prohibited by state statute from levying local option sales taxes on general retail goods, providing complete geographic consistency across all 16 counties. Under Maine Revenue Services Instructional Bulletin No. 27, Software as a Service (SaaS) and remote cloud hosting are classified as non-taxable professional services. Remote sellers establish economic nexus once gross retail sales delivered into Maine reach $100,000 annually.",
  "sections": [
    {
      "id": "me-flat-rate-structure",
      "title": "Uniform 5.50% Statewide Rate Across All 16 Maine Counties",
      "body": "Maine’s retail sales tax operates under statutory centralization:\n\n- **Statewide General Rate**: **5.50%**. Enforced on all retail sales of tangible personal property under 36 M.R.S. § 1811.\n- **Zero Local Option Retail Taxes**: Local jurisdictions cannot levy municipal or county sales taxes on retail goods. A purchase in Portland, Lewiston, Bangor, or Bar Harbor incurs the exact same 5.50% rate.\n- **Specialized Industry Excises**: Maine enforces higher statutory rates for specific tourism sectors:\n  - **Prepared Food & Restaurant Dining**: **8.00%**.\n  - **Lodging and Short-Term Rentals**: **9.00%**.\n  - **Short-Term Motor Vehicle Rentals**: **10.00%** (17.00% for short-term peer-to-peer rentals)."
    },
    {
      "id": "me-taxability-saas-groceries-clothing",
      "title": "Taxability Framework: SaaS Exemption, Grocery Protection, and Freight Rules",
      "body": "Statutory product taxability rules enforced by Maine Revenue Services (MRS):\n\n1. **Software as a Service (SaaS)**: **100% Exempt**. Under Maine Revenue Services Instructional Bulletin No. 27, remote software access where the customer does not receive physical media or download executable software code is classified as an exempt service.\n2. **Food for Home Consumption (Groceries)**: **Exempt**. Staple grocery items are exempt from sales tax under 36 M.R.S. § 1760(3). Prepared hot meals, restaurant catering, and confections are taxable at the 8.00% meals rate.\n3. **Everyday Clothing and Footwear**: **Fully Taxable (5.50%)**. Maine does not provide a point-of-sale clothing exemption; all apparel is taxable at the standard 5.50% rate.\n4. **Freight and Delivery Fees**: Under 36 M.R.S. § 1752(14)(B)(1), transportation charges are exempt if stated separately and delivery occurs by common carrier, contract carrier, or the postal service."
    },
    {
      "id": "me-economic-nexus-and-sourcing",
      "title": "Maine Remote Seller Nexus ($100,000 Threshold) & Sourcing",
      "body": "Following post-Wayfair statutory updates codified in 36 M.R.S. § 1951-A:\n\n- **Economic Nexus Standard**: A remote seller establishes economic nexus in Maine if, during the previous or current calendar year, the business generates:\n  - More than **$100,000 in gross retail sales** delivered into Maine.\n  - *Note on Transaction Count*: Under legislation enacted in LD 2205, Maine repealed the 200-transaction threshold, meaning nexus is evaluated solely on the $100,000 revenue benchmark.\n- **Destination Sourcing**: Maine enforces destination sourcing. Out-of-state vendors collect Maine’s 5.50% sales tax on all taxable shipments delivered into the state.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Maine sales tax on third-party marketplace orders."
    },
    {
      "id": "me-registration-and-filing-compliance",
      "title": "Permit Registration, Maine Tax Portal Filing, and Due Dates",
      "body": "Compliance obligations enforced by Maine Revenue Services:\n\n- **Retailer Registration**: Remote and physical merchants register for a Maine Sales Tax Certificate via the **Maine Tax Portal (MTP)**.\n- **Filing Deadlines**: Sales tax returns (Form ST-7) are due on or before the **15th day of the month** following the end of the reporting period (e.g., April 15 for Q1 filers).\n- **Penalties for Delinquency**: Failure to file incurs a penalty of **$25 or 10% of the tax due** (whichever is greater), up to a maximum penalty of **25%** under 36 M.R.S. § 187-B, plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Portland ($500 Order)",
    "scenario": "A resident of Portland, Maine purchases $450.00 of woodworking tools with a separately stated $50.00 UPS ground freight charge from an online merchant.",
    "inputs": {
      "toolsSubtotal": "$450.00",
      "freightShippingCharge": "$50.00 (Separately Stated)",
      "maineSalesTaxRate": "5.50%"
    },
    "steps": [
      {
        "label": "Taxable Tools Subtotal",
        "formula": "$450.00 hardware merchandise",
        "amount": "$450.00",
        "note": "Subject to Maine retail sales tax"
      },
      {
        "label": "UPS Freight Delivery Charge",
        "formula": "Separately stated common carrier",
        "amount": "$0.00 tax",
        "note": "Exempt under 36 M.R.S. § 1752(14)(B)(1)"
      },
      {
        "label": "Maine Sales Tax (5.50%)",
        "formula": "$450.00 × 5.50%",
        "amount": "$24.75",
        "note": "Statutory 5.50% state rate"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "$450.00 + $50.00 + $24.75",
        "amount": "$524.75",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Maine, the 5.50% sales tax applies only to the $450.00 tool subtotal ($24.75 tax), keeping the separately stated $50 freight charge completely tax-free."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $650.00 Bangor Invoice",
    "scenario": "A retail merchant in Bangor collects an all-inclusive $650.00 payment for taxable retail merchandise. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$650.00",
      "stateTaxRate": "5.50%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$650.00 ÷ (1 + 0.055)",
        "amount": "$616.11",
        "note": "Retained business net revenue"
      },
      {
        "label": "Maine Sales Tax Liability",
        "formula": "$650.00 - $616.11",
        "amount": "$33.89",
        "note": "Remitted to Maine Revenue Services"
      },
      {
        "label": "Verification Calculation",
        "formula": "$616.11 × 5.50%",
        "amount": "$33.89",
        "note": "Reconciles exactly to $650.00 total"
      }
    ],
    "takeaway": "From an all-inclusive $650.00 transaction in Maine, the retailer retains $616.11 net revenue and owes $33.89 in state sales tax on Form ST-7."
  },
  "faqs": [
    {
      "question": "What is the standard sales tax rate in Maine?",
      "answer": "Maine has a flat statewide sales tax rate of 5.50%. Local cities and counties are prohibited from enacting local option retail sales taxes.",
      "sourceUrl": "https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax"
    },
    {
      "question": "Does Maine tax Software as a Service (SaaS)?",
      "answer": "No. Under Maine Revenue Services Instructional Bulletin No. 27, cloud-hosted SaaS subscriptions and remote software access are classified as exempt services.",
      "sourceUrl": "https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax"
    },
    {
      "question": "Are groceries subject to sales tax in Maine?",
      "answer": "No. Grocery staples and food items purchased for home consumption are exempt from Maine sales tax under 36 M.R.S. § 1760(3). Prepared hot food is taxed at 8.00%.",
      "sourceUrl": "https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax"
    },
    {
      "question": "What is the Maine economic nexus threshold for remote sellers?",
      "answer": "Remote out-of-state retailers establish economic nexus in Maine when gross retail sales delivered into the state reach $100,000 annually. The 200-transaction test was repealed.",
      "sourceUrl": "https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax"
    },
    {
      "question": "When are Maine sales tax returns due?",
      "answer": "Maine sales tax returns are due on or before the 15th day of the month following the close of the reporting period via the Maine Tax Portal.",
      "sourceUrl": "https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax"
    }
  ]
};

export default maineContent;
