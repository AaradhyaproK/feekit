import type { PageContent } from '../types.ts';

export const vermontContent: PageContent = {
  "slug": "vermont",
  "family": "sales-tax",
  "title": "Vermont Sales Tax Calculator (6.00% to 7.00%) | FeeKit",
  "metaDescription": "Calculate Vermont sales and use tax with Department of Taxes rates (6.0% state, 7.0% local option). SaaS exemption under Act 51, clothing exemption, and $100k nexus.",
  "h1": "Vermont Sales Tax Calculator & Department of Taxes Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Vermont Department of Taxes",
    "url": "https://tax.vermont.gov/business/sales-and-use-tax",
    "citation": "32 V.S.A. Chapter 233 (Sales and Use Tax) and Vermont Act 51 (2015 Prewritten Software Access Exemption)."
  },
  "overview": "The State of Vermont imposes a statutory baseline retail sales and use tax rate of 6.00% under 32 V.S.A. § 9771. Municipalities that have adopted a 1.00% local option sales tax—including Burlington, Montpelier, Rutland, South Burlington, and St. Albans—enforce a combined retail sales tax rate of 7.00%. Vermont provides broad statutory exemptions for consumer essentials, completely exempting everyday clothing, footwear, and unprepared grocery foods. Under landmark legislation (Act 51), Vermont permanently exempted Software as a Service (SaaS) and remotely accessed prewritten software from sales tax. Remote out-of-state merchants establish economic nexus upon reaching $100,000 in sales or 200 transactions.",
  "sections": [
    {
      "id": "vt-rate-structure-and-local-options",
      "title": "Vermont 6.00% State Rate & 1.00% Municipal Local Options (Max 7.00%)",
      "body": "Vermont’s sales tax code combines a state baseline with municipal option surcharges:\n\n- **Statewide Baseline Rate**: **6.00%**. Governed by 32 V.S.A. § 9771, applying across all non-option municipalities.\n- **Municipal Local Option Tax (1.00%)**: **7.00% combined rate**. Participating municipalities levy a 1.00% local option tax administered centrally by the Vermont Department of Taxes:\n  - **Burlington (Chittenden County)**: **7.00%** (6.00% state + 1.00% city).\n  - **South Burlington (Chittenden County)**: **7.00%** (6.00% state + 1.00% city).\n  - **Montpelier (Washington County)**: **7.00%** (6.00% state + 1.00% city).\n  - **Rutland (Rutland County)**: **7.00%** (6.00% state + 1.00% city).\n  - **St. Albans (Franklin County)**: **7.00%** (6.00% state + 1.00% city).\n  - **Winooski (Chittenden County)**: **7.00%** (6.00% state + 1.00% city).\n- **Meals and Rooms Tax**: Vermont levies a separate **9.00% Meals and Rooms Tax** (10.00% in local option towns) on prepared restaurant food and lodging accommodations under 32 V.S.A. Chapter 225."
    },
    {
      "id": "vt-taxability-clothing-saas-groceries",
      "title": "Taxability Framework: Act 51 SaaS Exemption, Clothing Exemption, and Groceries",
      "body": "Statutory product taxability rules enforced by the Vermont Department of Taxes:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Following the enactment of Act 51 in 2015, Vermont permanently codified that prewritten software accessed remotely via the cloud where the customer does not receive physical media or download software code is completely exempt from sales and use tax.\n2. **Everyday Clothing and Footwear**: **100% Exempt Statewide**. Under 32 V.S.A. § 9741(45), all standard articles of clothing and footwear designed for everyday human wear are exempt year-round with **zero dollar ceiling**. Specialty athletic clothing and protective gear remain taxable.\n3. **Food for Home Consumption (Groceries)**: **Exempt**. Food, fresh produce, and beverages for home consumption are non-taxable under 32 V.S.A. § 9741(13).\n4. **Freight and Delivery Fees**: Under 32 V.S.A. § 9701(4), delivery and shipping charges billed by the vendor for taxable goods are taxable. If the merchandise shipped is exempt (such as everyday clothing), the shipping fee is also exempt."
    },
    {
      "id": "vt-economic-nexus-and-sourcing",
      "title": "Vermont Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Codified under 32 V.S.A. § 9701(9)(F) following post-Wayfair statutory updates:\n\n- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in Vermont upon exceeding either threshold during any preceding 12-month period:\n  - More than **$100,000 in gross sales** delivered into Vermont; **OR**\n  - **200 or more separate retail transactions** delivered into the state.\n- **Destination Sourcing**: Vermont is a full member of the Streamlined Sales Tax Agreement (SSTA) and enforces destination sourcing. Remote sellers collect either 6.00% or 7.00% depending on the customer's delivery destination.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, Etsy, eBay, etc.) collect and remit Vermont sales tax on behalf of third-party marketplace sellers."
    },
    {
      "id": "vt-registration-and-filing-compliance",
      "title": "myVTax Registration, Return Due Dates, and Penalty Rules",
      "body": "Compliance requirements administered by the Vermont Department of Taxes:\n\n- **Sales Tax Licensing**: Retailers register for a Vermont Sales and Use Tax License online via **myVTax**.\n- **Filing Deadlines**: Standard sales tax returns (Form SUT-451) are due on or before the **25th day of the month** following the end of the reporting period.\n- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **5% per month** of the unpaid tax, up to a maximum of **25%** under 32 V.S.A. § 3202, plus statutory monthly interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Electronics vs Apparel Order in Burlington (7.00% Rate)",
    "scenario": "A resident of Burlington, Vermont orders a $500.00 audio speaker and a $150.00 winter coat with a separately stated $30.00 shipping fee.",
    "inputs": {
      "speakerSubtotal": "$500.00",
      "winterCoatSubtotal": "$150.00",
      "shippingFee": "$30.00",
      "burlingtonCombinedRate": "7.00%"
    },
    "steps": [
      {
        "label": "Taxable Audio Speaker Base",
        "formula": "$500.00 electronics",
        "amount": "$500.00",
        "note": "Taxable personal property"
      },
      {
        "label": "Winter Coat Status",
        "formula": "Everyday apparel",
        "amount": "$0.00 tax",
        "note": "100% exempt under 32 V.S.A. § 9741(45)"
      },
      {
        "label": "Taxable Shipping Proportion",
        "formula": "$30.00 shipping on taxable goods",
        "amount": "$30.00",
        "note": "Delivery for taxable speaker is taxable"
      },
      {
        "label": "Combined Vermont Tax (7.00%)",
        "formula": "($500.00 + $30.00) × 7.00%",
        "amount": "$37.10",
        "note": "State ($31.80) + Burlington ($5.30)"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "$500.00 + $150.00 + $30.00 + $37.10",
        "amount": "$717.10",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Burlington, the 7.00% sales tax applies to the speaker and delivery fee ($37.10 tax), while the $150 winter coat is completely tax-free."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $700.00 Montpelier Receipt",
    "scenario": "A commercial vendor in Montpelier collects an all-inclusive $700.00 payment for taxable retail goods at a 7.00% combined rate. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$700.00",
      "combinedRate": "7.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$700.00 ÷ (1 + 0.07)",
        "amount": "$654.21",
        "note": "Retained business net revenue"
      },
      {
        "label": "Combined Sales Tax Liability",
        "formula": "$700.00 - $654.21",
        "amount": "$45.79",
        "note": "State ($39.25) and Montpelier ($6.54)"
      },
      {
        "label": "Verification Calculation",
        "formula": "$654.21 × 7.00%",
        "amount": "$45.79",
        "note": "Reconciles exactly to $700.00 receipt"
      }
    ],
    "takeaway": "From an all-inclusive $700.00 transaction in Montpelier, the merchant retains $654.21 net revenue and remits $45.79 in sales tax on Form SUT-451."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Vermont?",
      "answer": "The baseline state sales tax rate is 6.00%. In municipalities that have adopted a 1.00% local option tax (including Burlington, Montpelier, and Rutland), the combined rate is 7.00%.",
      "sourceUrl": "https://tax.vermont.gov/business/sales-and-use-tax"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Vermont?",
      "answer": "No. Following Act 51, Vermont permanently exempted remotely accessed prewritten software (SaaS) and cloud services from state and local sales tax.",
      "sourceUrl": "https://tax.vermont.gov/business/sales-and-use-tax"
    },
    {
      "question": "Are clothes taxed in Vermont?",
      "answer": "No. Everyday clothing and footwear are 100% exempt from sales tax in Vermont with no price ceiling. Specialty sports apparel and accessories remain taxable.",
      "sourceUrl": "https://tax.vermont.gov/business/sales-and-use-tax"
    },
    {
      "question": "What is the Vermont economic nexus threshold for remote sellers?",
      "answer": "Out-of-state remote sellers establish economic nexus in Vermont upon exceeding $100,000 in gross sales or completing 200 individual transactions delivered into Vermont in any preceding 12-month period.",
      "sourceUrl": "https://tax.vermont.gov/business/sales-and-use-tax"
    },
    {
      "question": "When are Vermont sales tax returns due?",
      "answer": "Vermont sales tax returns are due on or before the 25th day of the month following the close of the reporting period via myVTax.",
      "sourceUrl": "https://tax.vermont.gov/business/sales-and-use-tax"
    }
  ]
};

export default vermontContent;
