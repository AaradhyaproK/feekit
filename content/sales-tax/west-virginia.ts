import type { PageContent } from '../types.ts';

export const westVirginiaContent: PageContent = {
  "slug": "west-virginia",
  "family": "sales-tax",
  "title": "West Virginia Sales Tax Calculator (6.00% to 7.00%) | FeeKit",
  "metaDescription": "Calculate West Virginia Consumers Sales and Service Tax with State Tax Department rates (6.0% state, 7.0% Home Rule cities). Taxable SaaS, groceries exemption, and $100k nexus.",
  "h1": "West Virginia Sales Tax Calculator & State Tax Department Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "West Virginia State Tax Department",
    "url": "https://tax.wv.gov/Business/SalesAndUseTax/",
    "citation": "W. Va. Code Chapter 11, Article 15 (Consumers Sales and Service Tax) and West Virginia Tax Division Publication TSD-300."
  },
  "overview": "The State of West Virginia levies a statutory Consumers Sales and Service Tax rate of 6.00% under W. Va. Code § 11-15-3. While West Virginia counties are prohibited from imposing local sales taxes, municipalities participating in the Municipal Home Rule Program are legally authorized to levy a 1.00% municipal sales tax. As a result, major urban centers including Charleston, Huntington, Morgantown, Parkersburg, and Wheeling enforce a combined 7.00% sales tax rate, while unincorporated areas remain at 6.00%. Out-of-state remote sellers establish economic nexus when sales into the state exceed $100,000 in gross revenue or 200 individual transactions.",
  "sections": [
    {
      "id": "wv-rate-structure-home-rule",
      "title": "West Virginia Base Rate & Municipal Home Rule Surcharges (6.00% vs 7.00%)",
      "body": "West Virginia’s sales tax architecture operates across two distinct municipal tiers:\n\n- **Statewide Base Rate**: **6.00%**. Governed by W. Va. Code § 11-15-3, this baseline applies across all unincorporated territories and municipalities without Home Rule sales taxes.\n- **Municipal Home Rule Cities (1.00% Local Add-On)**: **7.00% combined rate**. Over 40 municipalities have enacted a 1.00% local sales tax under the West Virginia Municipal Home Rule Program:\n  - **Charleston (Kanawha County)**: **7.00%** (6.00% state + 1.00% city).\n  - **Huntington (Cabell / Wayne Counties)**: **7.00%** (6.00% state + 1.00% city).\n  - **Morgantown (Monongalia County)**: **7.00%** (6.00% state + 1.00% city).\n  - **Wheeling (Ohio County)**: **7.00%** (6.00% state + 1.00% city).\n  - **Parkersburg (Wood County)**: **7.00%** (6.00% state + 1.00% city).\n- **County-Level Taxes**: Counties do not possess independent authority to levy general retail sales taxes in West Virginia."
    },
    {
      "id": "wv-taxability-groceries-saas-clothing",
      "title": "Taxability Framework: SaaS Taxation, Grocery Exemption, and Delivery Rules",
      "body": "Statutory product taxability rules enforced by the West Virginia State Tax Department:\n\n1. **Software as a Service (SaaS)**: **Fully Taxable (6.00% - 7.00%)**. Under W. Va. Code § 11-15-2(b)(8) and Administrative Notice 2014-04, SaaS and electronic software hosting are classified as taxable computer services. Any remote software access provided to users in West Virginia is subject to full state and municipal sales tax.\n2. **Food for Home Consumption (Groceries)**: **100% Exempt**. Effective July 1, 2013, West Virginia eliminated the state sales tax on qualifying grocery food under W. Va. Code § 11-15-3a. Prepared meals, catering, vending machine items, and soft drinks remain subject to the full standard rate.\n3. **Everyday Clothing and Footwear**: **Fully Taxable**. Clothing is subject to standard state and local rates year-round, except during the annual August sales tax holiday.\n4. **Freight and Delivery Fees**: Shipping and delivery charges billed by the retailer in connection with the sale of taxable merchandise are considered part of the gross taxable sales price under W. Va. Code § 11-15-2."
    },
    {
      "id": "wv-economic-nexus-and-sourcing",
      "title": "West Virginia Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Following House Bill 2496 and post-Wayfair statutory updates:\n\n- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in West Virginia upon meeting either condition during the current or preceding calendar year:\n  - More than **$100,000 in gross revenue** from sales delivered into West Virginia; **OR**\n  - **200 or more separate transactions** delivered into the state.\n- **Destination Sourcing**: West Virginia is a full member of the Streamlined Sales and Use Tax Agreement (SSUTA) and enforces strict destination sourcing. Remote merchants collect the combined rate (6.00% or 7.00%) based on the delivery destination where the buyer takes physical or electronic possession.\n- **Marketplace Facilitator Rule**: Online marketplaces (Amazon, eBay, Walmart, etc.) are statutorily required to collect and remit West Virginia sales tax on all sales facilitated for third-party sellers."
    },
    {
      "id": "wv-registration-and-filing-compliance",
      "title": "Business Registration, MyTaxes Filing, and Late Penalties",
      "body": "Tax compliance requirements administered by the West Virginia State Tax Department:\n\n- **Business Registration**: Remote and in-state retailers must obtain a Business Registration Certificate via the **MyTaxes** portal before making taxable sales.\n- **Return Due Dates**: Standard monthly and quarterly returns (Form CST-200CU) are due on or before the **20th day of the month** following the end of the reporting period.\n- **Delinquency Penalties**: Late filing incurs a penalty of **5% per month** of the unpaid tax, up to a statutory ceiling of **25%** under W. Va. Code § 11-10-18, plus statutory monthly interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Software Subscription in Charleston (7.00% Combined Rate)",
    "scenario": "An architectural firm headquartered in Charleston, West Virginia subscribes to an enterprise SaaS modeling suite billed at $1,500.00 annually by an out-of-state vendor.",
    "inputs": {
      "annualSaaSContract": "$1,500.00",
      "charlestonCombinedRate": "7.00% (6% State + 1% Home Rule)"
    },
    "steps": [
      {
        "label": "Taxable Service Base",
        "formula": "$1,500.00 software subscription",
        "amount": "$1,500.00",
        "note": "SaaS is taxable under W. Va. Code § 11-15-2"
      },
      {
        "label": "State Consumers Sales Tax (6.00%)",
        "formula": "$1,500.00 × 6.00%",
        "amount": "$90.00",
        "note": "West Virginia state base tax"
      },
      {
        "label": "Charleston Municipal Home Rule Tax (1.00%)",
        "formula": "$1,500.00 × 1.00%",
        "amount": "$15.00",
        "note": "City of Charleston local option"
      },
      {
        "label": "Total Invoiced SaaS Cost",
        "formula": "$1,500.00 + $90.00 + $15.00",
        "amount": "$1,605.00",
        "note": "Full customer remittance"
      }
    ],
    "takeaway": "Because West Virginia classifies remote software access as a taxable computer service, the Charleston firm incurs a 7.00% combined tax ($105.00 total) on the SaaS contract."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500.00 Morgantown Invoice",
    "scenario": "A retail contractor in Morgantown collects a flat $500.00 tax-inclusive payment for taxable equipment rental at a combined 7.00% rate. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$500.00",
      "combinedRate": "7.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.07)",
        "amount": "$467.29",
        "note": "Retained business gross revenue"
      },
      {
        "label": "Combined Sales Tax Due",
        "formula": "$500.00 - $467.29",
        "amount": "$32.71",
        "note": "State ($28.04) and Morgantown ($4.67)"
      },
      {
        "label": "Verification Calculation",
        "formula": "$467.29 × 7.00%",
        "amount": "$32.71",
        "note": "Reconciles exactly to $500.00 total"
      }
    ],
    "takeaway": "From a $500.00 tax-inclusive transaction in Morgantown, the merchant retains $467.29 and remits $32.71 to the West Virginia State Tax Department."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in West Virginia?",
      "answer": "The baseline sales tax rate is 6.00%. In municipalities that have enacted a Home Rule local tax (such as Charleston, Huntington, and Morgantown), the combined rate is 7.00%.",
      "sourceUrl": "https://tax.wv.gov/Business/SalesAndUseTax/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in West Virginia?",
      "answer": "Yes. West Virginia treats SaaS and remote cloud software access as taxable computer services subject to the full combined sales tax rate of 6.00% to 7.00%.",
      "sourceUrl": "https://tax.wv.gov/Business/SalesAndUseTax/"
    },
    {
      "question": "Are groceries exempt from sales tax in West Virginia?",
      "answer": "Yes. Qualifying food items for home consumption are 100% exempt from West Virginia sales tax. Prepared hot foods, soft drinks, and restaurant dining remain fully taxable.",
      "sourceUrl": "https://tax.wv.gov/Business/SalesAndUseTax/"
    },
    {
      "question": "What is the West Virginia economic nexus threshold for remote sellers?",
      "answer": "Out-of-state remote sellers establish economic nexus upon exceeding $100,000 in gross sales delivered into West Virginia or completing 200 or more individual transactions in the state.",
      "sourceUrl": "https://tax.wv.gov/Business/SalesAndUseTax/"
    },
    {
      "question": "Does West Virginia offer an annual sales tax holiday?",
      "answer": "Yes. West Virginia holds an annual 3-day Sales Tax Holiday in early August, exempting qualifying clothing and footwear ($125 or less) and laptop/tablet computers ($500 or less).",
      "sourceUrl": "https://tax.wv.gov/Business/SalesAndUseTax/"
    }
  ]
};

export default westVirginiaContent;
