import type { PageContent } from '../types.ts';

export const alabamaContent: PageContent = {
  "slug": "alabama",
  "family": "sales-tax",
  "title": "Alabama Sales Tax Calculator (4.00% to 11.50%) | FeeKit",
  "metaDescription": "Calculate Alabama sales tax with ADOR rates (4.0% state, max 11.50%). Simplified Sellers Use Tax (SSUT 8.0%), destination sourcing, and $250k nexus.",
  "h1": "Alabama Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Alabama Department of Revenue",
    "url": "https://revenue.alabama.gov/sales-use/",
    "citation": "Ala. Code Title 40, Chapter 23 (Sales and Use Taxes) and Simplified Sellers Use Tax Program (SSUT)."
  },
  "overview": "The State of Alabama levies a statewide base sales and use tax rate of 4.00% under Ala. Code § 40-23-2. However, Alabama possesses some of the highest local option sales tax rates in the nation: overlapping county and municipal taxes routinely add between 5.00% and 7.50%, creating combined retail sales tax rates as high as 10.00% to 11.50% across major cities (including Birmingham, Mobile, and Montgomery). To simplify compliance for out-of-state e-commerce merchants, Alabama established the optional Simplified Sellers Use Tax (SSUT) program, which allows qualifying remote sellers to collect a flat 8.00% tax statewide. Remote sellers establish economic nexus upon reaching $250,000 in annual Alabama sales.",
  "sections": [
    {
      "id": "al-rates-and-local-surplus-taxes",
      "title": "Alabama Base Rate (4.00%) and Steep Local Municipal Levies (Max 11.50%)",
      "body": "Alabama’s tax structure features a low state baseline offset by aggressive municipal and county taxes:\n\n- **Statewide Baseline Rate**: **4.00%**. Applies to all retail sales of tangible personal property.\n- **Municipal and County Discretionary Surtaxes**: Local cities and counties independently administer or levy local sales taxes:\n  - **Birmingham (Jefferson County)**: **10.00% combined rate** (4.00% state + 2.00% county + 4.00% City of Birmingham tax).\n  - **Mobile (Mobile County)**: **10.00% combined rate** (4.00% state + 1.00% county + 5.00% City of Mobile tax).\n  - **Montgomery (Montgomery County)**: **10.00% combined rate** (4.00% state + 3.50% county + 2.50% city tax).\n  - **High-Rate Municipal Plazas**: Certain localized commercial zones layer additional improvement district taxes, reaching the statutory maximum ceiling of **11.50%**."
    },
    {
      "id": "al-ssut-program-for-remote-sellers",
      "title": "The Simplified Sellers Use Tax (SSUT) Flat 8.00% Option for Remote Vendors",
      "body": "To eliminate the burden of tracking hundreds of separate Alabama municipal jurisdictions, the legislature created the SSUT:\n\n1. **Flat 8.00% Rate Option**: Eligible out-of-state remote sellers with no physical presence in Alabama can apply to collect a flat **8.00% Simplified Sellers Use Tax (SSUT)** on all sales delivered into Alabama, regardless of local city/county boundaries.\n2. **Revenue Distribution**: The state retains 50% of the SSUT revenue, while the remaining 50% is redistributed to local counties and municipalities.\n3. **Purchaser Benefit**: Collecting the flat 8.00% SSUT protects remote merchants and customers from local audits and local municipal sales tax assessments."
    },
    {
      "id": "al-taxability-saas-food-clothing",
      "title": "Taxability Framework: Non-Taxable SaaS, Groceries (3.00%), and Clothing",
      "body": "Statutory product taxability under Alabama Department of Revenue regulations:\n\n- **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Alabama Department of Revenue administrative rulings and Revenue Ruling 08-011, cloud-based SaaS and remotely accessed software are non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.\n- **Groceries & Food for Home Consumption**: **Taxed at 3.00% State Rate + Full Local Taxes**. Effective September 1, 2023 (under Act 2023-554), Alabama reduced its state sales tax on food staples from 4.00% to 3.00% (with provisions for future reductions). Local municipal and county taxes still apply in full.\n- **Clothing and Apparel**: **Fully Taxable (4.00% - 10.00%)**. Clothing is taxable year-round at combined rates (except during the annual July sales tax holiday).\n- **Freight and Delivery Charges**: Delivery charges billed by the seller are taxable unless transportation is arranged and paid independently by the purchaser under Ala. Admin. Code r. 810-6-1-.178."
    },
    {
      "id": "al-economic-nexus-and-filing",
      "title": "Alabama Economic Nexus ($250,000 Threshold) & My Alabama Taxes (MAT)",
      "body": "Compliance requirements administered by the Alabama Department of Revenue:\n\n- **Economic Nexus Standard**: Under Ala. Admin. Code r. 810-6-2-.90.03, remote sellers establish economic nexus when retail sales delivered into Alabama exceed **$250,000** during the previous calendar year.\n- **My Alabama Taxes (MAT) Portal**: Remote and in-state merchants register and remit sales tax electronically via **My Alabama Taxes (MAT)**.\n- **Filing Deadlines**: Sales tax returns are due on or before the **20th day of the month** following the reporting period for monthly remitters.\n- **Timely Filing Discount**: Under Ala. Code § 40-23-36, retailers filing returns on time receive a discount of 5% on the first $100 of tax and 2% on the remainder, capped at $400 per month.\n- **Annual Sales Tax Holiday**: Alabama holds an annual **3-day Back-to-School Sales Tax Holiday in late July**, exempting qualifying clothing ($100 or less) and school supplies ($50 or less)."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Tool Purchase in Birmingham (10.00% Rate vs 8.00% SSUT)",
    "scenario": "A resident in Birmingham, Alabama purchases $500.00 of power equipment from an in-state dealer (10.00% local rate) versus an SSUT remote seller (8.00% flat rate).",
    "inputs": {
      "equipmentSubtotal": "$500.00",
      "birminghamInStateRate": "10.00%",
      "remoteSsutRate": "8.00%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 equipment",
        "amount": "$500.00",
        "note": "Subject to Alabama sales tax"
      },
      {
        "label": "In-State Birmingham Tax (10.00%)",
        "formula": "$500.00 × 10.00%",
        "amount": "$50.00",
        "note": "4% state + 2% county + 4% city"
      },
      {
        "label": "Remote SSUT Tax (8.00%)",
        "formula": "$500.00 × 8.00%",
        "amount": "$40.00",
        "note": "Flat Simplified Sellers Use Tax"
      },
      {
        "label": "SSUT Remote Consumer Savings",
        "formula": "$50.00 - $40.00",
        "amount": "$10.00 savings",
        "note": "Remote seller rate advantage"
      },
      {
        "label": "Total Invoiced Checkout Amount (SSUT)",
        "formula": "$500.00 + $40.00",
        "amount": "$540.00",
        "note": "Total customer payment via SSUT"
      }
    ],
    "takeaway": "In Birmingham, an in-state purchase incurs $50.00 in sales tax (10.00%), while a remote merchant enrolled in the SSUT program charges $40.00 (8.00%), saving the consumer $10.00."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $750 Mobile Receipt",
    "scenario": "A retail store in Mobile, Alabama (10.00% combined rate) collects an all-inclusive $750.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$750.00",
      "mobileRate": "10.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$750.00 ÷ (1 + 0.10)",
        "amount": "$681.82",
        "note": "True retail revenue retained"
      },
      {
        "label": "Alabama Sales Tax Owed",
        "formula": "$750.00 - $681.82",
        "amount": "$68.18",
        "note": "Remitted via My Alabama Taxes"
      },
      {
        "label": "Verification Calculation",
        "formula": "$681.82 × 10.00%",
        "amount": "$68.18",
        "note": "Reconciles exactly to $750.00 receipt"
      }
    ],
    "takeaway": "From a $750.00 gross receipt in Mobile, the business retains $681.82 net revenue and owes $68.18 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Alabama for 2026?",
      "answer": "The statewide base sales tax rate in Alabama is 4.00%. Local city and county taxes push combined rates between 8.00% and 11.50% across most metropolitan areas.",
      "sourceUrl": "https://revenue.alabama.gov/sales-use/"
    },
    {
      "question": "What is the Simplified Sellers Use Tax (SSUT) in Alabama?",
      "answer": "SSUT is an optional program for eligible remote out-of-state sellers allowing them to collect a flat 8.00% tax on all sales delivered into Alabama, rather than calculating individual local rates across hundreds of municipalities.",
      "sourceUrl": "https://revenue.alabama.gov/sales-use/simplified-sellers-use-tax-ssut/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Alabama?",
      "answer": "No. Under Alabama Department of Revenue administrative rulings and Revenue Ruling 08-011, cloud SaaS and hosted software access are 100% exempt from sales tax.",
      "sourceUrl": "https://revenue.alabama.gov/sales-use/"
    },
    {
      "question": "What is the economic nexus threshold in Alabama?",
      "answer": "Out-of-state remote sellers establish economic nexus in Alabama when retail sales delivered into the state exceed $250,000 in gross revenue during the previous calendar year.",
      "sourceUrl": "https://revenue.alabama.gov/sales-use/remote-sellers/"
    },
    {
      "question": "When is Alabama’s annual sales tax holiday?",
      "answer": "Alabama holds an annual 3-day Back-to-School Sales Tax Holiday in late July, exempting qualifying clothing ($100 or less per item) and school supplies ($50 or less).",
      "sourceUrl": "https://revenue.alabama.gov/sales-use/sales-tax-holidays/"
    }
  ]
};

export default alabamaContent;
