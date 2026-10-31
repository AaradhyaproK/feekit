import type { PageContent } from '../types.ts';

export const oklahomaContent: PageContent = {
  "slug": "oklahoma",
  "family": "sales-tax",
  "title": "Oklahoma Sales Tax Calculator (4.50% to 11.50%) | FeeKit",
  "metaDescription": "Calculate Oklahoma sales tax with OTC rates (4.5% state, max 11.50%). Municipal sales taxes, OAC 710:65-19-156 SaaS exemption, and $100k remote seller nexus.",
  "h1": "Oklahoma Sales Tax Calculator & Tax Commission Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Oklahoma Tax Commission",
    "url": "https://oklahoma.gov/tax/businesses/sales-use-tax.html",
    "citation": "68 Okla. Stat. § 1350 et seq. (Oklahoma Sales Tax Code) and Okla. Admin. Code r. 710:65-19-156."
  },
  "overview": "The State of Oklahoma levies a statutory base sales and use tax rate of 4.50% under 68 Okla. Stat. § 1354. However, Oklahoma municipalities and counties rely extensively on local option sales taxes to fund municipal operations: combined city and county rates routinely add between 3.50% and 7.00%, resulting in combined sales tax rates between 8.50% and 11.50% across major commercial markets (including Oklahoma City, Tulsa, and Norman). Oklahoma treats Software as a Service (SaaS) as a non-taxable service under administrative rule OAC 710:65-19-156. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Oklahoma sales.",
  "sections": [
    {
      "id": "ok-rates-and-municipal-districts",
      "title": "Oklahoma Base Rate (4.50%) and Municipal Surtaxes (Max 11.50%)",
      "body": "Oklahoma’s sales tax code combines a moderate state baseline with significant municipal levies:\n\n- **Statewide Baseline Rate**: **4.50%**. Applies to all retail sales of tangible personal property statewide.\n- **Municipal and County Discretionary Surtaxes**:\n  - **Oklahoma City (Oklahoma County)**: **8.625% combined rate** (4.50% state + 4.125% Oklahoma City municipal tax).\n  - **Tulsa (Tulsa County)**: **8.517% combined rate** (4.50% state + 0.367% county + 3.65% Tulsa municipal tax).\n  - **Norman (Cleveland County)**: **8.875% combined rate** (4.50% state + 0.25% county + 4.125% City of Norman tax).\n  - **High-Rate Municipalities**: Smaller rural commercial hubs add overlapping hospital and public safety levies, pushing combined rates up to the state ceiling of **11.50%**."
    },
    {
      "id": "ok-saas-exemption-and-taxability",
      "title": "Taxability Framework: Non-Taxable SaaS, Groceries, and Clothing",
      "body": "Statutory product taxability under Oklahoma Tax Commission (OTC) regulations:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Oklahoma Administrative Code r. 710:65-19-156, remotely hosted cloud software is classified as a non-taxable service, provided the customer accesses software hosted on remote vendor servers without downloading software locally.\n2. **Groceries & Food for Home Consumption**: **Exempt from State Tax (0.00%), Local Taxes Apply**. Effective February 2024 (under House Bill 1955), Oklahoma eliminated its 4.50% state sales tax on grocery food staples. However, municipal and county sales taxes still apply in full to grocery purchases (typically 3.5% to 4.5%).\n3. **Clothing and Apparel**: **Fully Taxable (4.50% - 11.50%)**. Clothing is taxable year-round at combined rates (except during the annual August 3-day sales tax holiday).\n4. **Freight and Delivery Charges**: Separately stated transportation charges are exempt from Oklahoma sales tax if billed at actual freight costs and delivery occurs after purchase."
    },
    {
      "id": "ok-economic-nexus-and-sourcing",
      "title": "Oklahoma Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework",
      "body": "Following post-Wayfair statutory rules codified in 68 Okla. Stat. § 1392:\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Oklahoma upon exceeding **$100,000 in aggregate gross sales** delivered into the state during the current or preceding calendar year. (Oklahoma has no transaction count threshold).\n- **Destination Sourcing**: Oklahoma operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state, county, and city rate applicable to the delivery address.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Oklahoma sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "ok-filing-compliance-oktap",
      "title": "OkTAP Portal Registration, 20th-of-the-Month Deadlines, and Tax Holiday",
      "body": "Tax compliance administration enforced by the Oklahoma Tax Commission (OTC):\n\n- **OkTAP Portal Registration**: Businesses register for an Oklahoma Sales Tax Permit online via **OkTAP** (Oklahoma Taxpayer Access Point). A $20 state fee applies per business location.\n- **Filing Deadlines**: Sales tax returns (Form STS-20002) are due on or before the **20th day of the month** following the reporting period for monthly remitters.\n- **Timely Filing Discount**: Under 68 Okla. Stat. § 1367.1, retailers who file and pay returns on time may deduct a discount of **1.00% of the sales tax collected** (capped at $2,500 per reporting period).\n- **Annual Sales Tax Holiday**: Oklahoma holds an annual **3-day Sales Tax Holiday on the first weekend of August**, exempting qualifying clothing and footwear ($100 or less per item) from state and local sales taxes.\n- **Delinquency Penalties**: Late filings incur a penalty of **10% of the tax due**, plus statutory interest at 1.25% per month."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Hardware Purchase in Oklahoma City (8.625% Rate)",
    "scenario": "A resident in Oklahoma City purchases $500.00 of commercial tools from a home improvement retailer.",
    "inputs": {
      "toolsSubtotal": "$500.00",
      "oklahomaStateRate": "4.50%",
      "okcCityRate": "4.125%",
      "combinedRate": "8.625%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 tools",
        "amount": "$500.00",
        "note": "Subject to retail sales tax"
      },
      {
        "label": "Oklahoma State Tax (4.50%)",
        "formula": "$500.00 × 4.50%",
        "amount": "$22.50",
        "note": "State general fund"
      },
      {
        "label": "Oklahoma City Municipal Tax (4.125%)",
        "formula": "$500.00 × 4.125%",
        "amount": "$20.63",
        "note": "City of Oklahoma City share"
      },
      {
        "label": "Total Oklahoma Sales Tax",
        "formula": "$22.50 + $20.63",
        "amount": "$43.13",
        "note": "Combined 8.625% sales tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $43.13",
        "amount": "$543.13",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Oklahoma City, the 8.625% combined sales tax on a $500 tool purchase equals $43.13, bringing total checkout cost to $543.13."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Tulsa Receipt",
    "scenario": "A retail store in Tulsa, Oklahoma (8.517% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "tulsaRate": "8.517%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.08517)",
        "amount": "$552.91",
        "note": "True retail revenue retained"
      },
      {
        "label": "Oklahoma Sales Tax Owed",
        "formula": "$600.00 - $552.91",
        "amount": "$47.09",
        "note": "Remitted via OkTAP"
      },
      {
        "label": "Verification Calculation",
        "formula": "$552.91 × 8.517%",
        "amount": "$47.09",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Tulsa, the business retains $552.91 net revenue and owes $47.09 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Oklahoma for 2026?",
      "answer": "The statewide base sales tax rate in Oklahoma is 4.50%. Local city and county taxes push combined rates between 8.50% and 11.50% across most commercial markets.",
      "sourceUrl": "https://oklahoma.gov/tax/businesses/sales-use-tax.html"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Oklahoma?",
      "answer": "No. Under Oklahoma Administrative Code r. 710:65-19-156, cloud-based SaaS and remotely hosted software are classified as non-taxable services.",
      "sourceUrl": "https://oklahoma.gov/tax/businesses/sales-use-tax.html"
    },
    {
      "question": "Did Oklahoma eliminate sales tax on groceries?",
      "answer": "Yes, at the state level. Effective February 2024 (House Bill 1955), the 4.50% state sales tax on grocery food staples was eliminated. However, city and county local sales taxes (typically 3.5% to 4.5%) still apply to groceries.",
      "sourceUrl": "https://oklahoma.gov/tax/news/2024/grocery-sales-tax-elimination.html"
    },
    {
      "question": "What is the economic nexus threshold in Oklahoma?",
      "answer": "Out-of-state remote sellers establish economic nexus in Oklahoma when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.",
      "sourceUrl": "https://oklahoma.gov/tax/businesses/remote-sellers.html"
    },
    {
      "question": "When is Oklahoma’s annual sales tax holiday?",
      "answer": "Oklahoma holds an annual 3-day Sales Tax Holiday on the first weekend of August, exempting qualifying clothing and footwear ($100 or less per item) from state and local sales taxes.",
      "sourceUrl": "https://oklahoma.gov/tax/individuals/sales-tax-holiday.html"
    }
  ]
};

export default oklahomaContent;
