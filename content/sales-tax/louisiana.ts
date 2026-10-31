import type { PageContent } from '../types.ts';

export const louisianaContent: PageContent = {
  "slug": "louisiana",
  "family": "sales-tax",
  "title": "Louisiana Sales Tax Calculator (5.00% to 12.00%) | FeeKit",
  "metaDescription": "Calculate Louisiana sales tax with verified rates (5.0% state base post-Act 11, max 12.0%). Parish sales tax, Uniform Local Sales Tax Board, and $100k nexus.",
  "h1": "Louisiana Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Louisiana Department of Revenue",
    "url": "https://revenue.louisiana.gov/SalesTax",
    "citation": "La. Rev. Stat. Title 47, Subtitle II, Chapter 2 (Sales Tax) and 2024 Special Legislative Session Act 11."
  },
  "overview": "The State of Louisiana levies a statutory baseline sales and use tax rate of 5.00%, enacted under 2024 Special Legislative Session Act 11 (effective 2025 through 2029) to replace the historic 4.45% rate. Louisiana possesses the most decentralized, parish-administered local sales tax structure in the country: each of Louisiana’s 64 parishes functions as an independent taxing jurisdiction with its own parish sales tax collector, levying municipal and parish sales taxes ranging from 4.00% to 7.00%. Combined retail sales tax rates range from 9.00% to 12.00% across major commercial centers (including New Orleans, Baton Rouge, and Shreveport). Out-of-state remote sellers establish economic nexus upon reaching $100,000 in annual Louisiana sales or 200 separate transactions.",
  "sections": [
    {
      "id": "la-rates-and-parish-structure",
      "title": "Louisiana 5.00% State Rate (Act 11) and Independent Parish Sales Taxes (Max 12.00%)",
      "body": "Louisiana’s sales tax code combines an updated state baseline with independent parish collections:\n\n- **Statewide Baseline Rate**: **5.00%**. Enacted under 2024 Act 11 (effective 2025–2029), standardizing state-level sales tax at 5.00%.\n- **Parish Sales and Use Taxes**: Administered independently by Parish School Boards or Parish Commissions under the Louisiana Uniform Local Sales Tax Board:\n  - **New Orleans (Orleans Parish)**: **10.45% combined rate** (5.00% state + 5.45% Orleans Parish municipal/school board tax).\n  - **Baton Rouge (East Baton Rouge Parish)**: **10.50% combined rate** (5.00% state + 5.50% parish/city taxes).\n  - **Shreveport (Caddo Parish)**: **10.35% combined rate** (5.00% state + 5.35% parish and municipal taxes).\n  - **Monroe (Ouachita Parish)**: **11.99% combined rate** (High combined parish, city, and economic district levies approaching the 12.00% statutory ceiling)."
    },
    {
      "id": "la-saas-and-product-taxability",
      "title": "Taxability Framework: Non-Taxable SaaS, Groceries, and Clothing",
      "body": "Statutory product taxability under Louisiana Department of Revenue regulations:\n\n1. **Software as a Service (SaaS)**: **State-Exempt**. Under Louisiana Revenue Information Bulletin RIB 12-005, cloud-based SaaS and remote software hosting are classified as non-taxable services, as no tangible personal property is transferred. However, prewritten software downloaded onto a customer's computer is taxable tangible property.\n2. **Food for Home Consumption (Groceries)**: **Exempt at State Level, Taxable in Certain Parishes**. Basic grocery staples are exempt from the 5.00% state sales tax under Article VII, Section 2.2 of the Louisiana Constitution. However, many individual parishes continue to levy local parish sales taxes on food.\n3. **Clothing and Apparel**: **Fully Taxable (5.00% - 11.50%)**. Everyday clothing and footwear are fully taxable at combined state and parish rates year-round.\n4. **Freight and Delivery Surcharges**: Under La. Rev. Stat. § 47:301(13)(a), freight and delivery charges billed by the seller are included in the taxable gross sales price, regardless of whether stated separately on the invoice."
    },
    {
      "id": "la-economic-nexus-and-remote-seller-commission",
      "title": "Louisiana Remote Seller Nexus ($100,000 / 200 Transactions) & Uniform Commission",
      "body": "Following post-Wayfair statutory reforms administered by the Louisiana Sales and Use Tax Commission for Remote Sellers (LARS):\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Louisiana upon exceeding either threshold in the prior or current calendar year:\n  - More than **$100,000 in gross revenue** from sales delivered into Louisiana; **OR**\n  - **200 or more separate transactions** delivered into the state.\n- **Centralized Remote Seller Filing**: Remote sellers file a single consolidated return through the **Louisiana Remote Sellers Commission (LARS)** portal, which automatically calculates and distributes parish and municipal taxes.\n- **Destination Sourcing**: Remote merchants collect sales tax based on the **delivery destination** of the Louisiana customer, applying the exact combined state and parish rate for that location.\n- **Marketplace Facilitator Legislation**: Platforms (Amazon, eBay, Walmart, etc.) collect and remit Louisiana state and parish sales tax on all marketplace orders, shielding third-party sellers from direct filing duties."
    },
    {
      "id": "la-filing-compliance-latap",
      "title": "LaTAP Portal Registration, 20th-of-the-Month Deadlines, and Penalties",
      "body": "Tax compliance administration enforced by the Louisiana Department of Revenue (LDR):\n\n- **LaTAP Portal Registration**: Physical merchants register for a sales tax account online via **LaTAP** (Louisiana Taxpayer Access Point). In-state physical merchants must also register separately with each individual Parish Tax Collector where they operate.\n- **Filing Deadlines**: Sales tax returns (Form R-1029) are due on or before the **20th day of the month** following the close of the reporting period.\n- **Vendor Compensation (Timely Filing Discount)**: Under La. Rev. Stat. § 47:306, retailers who file and pay returns on time may deduct a vendor compensation discount of **0.84% of the state sales tax collected** (capped at $1,500 per month).\n- **Sales Tax Holiday**: Louisiana does not currently host an annual sales tax holiday.\n- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus a 5% late payment penalty and statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Merchandise Order in New Orleans (10.45% Rate)",
    "scenario": "A consumer in New Orleans, Louisiana purchases $500.00 of commercial goods from a retail distributor.",
    "inputs": {
      "merchandiseSubtotal": "$500.00",
      "louisianaStateRate": "5.00% (Act 11)",
      "orleansParishRate": "5.45%",
      "combinedRate": "10.45%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$500.00 merchandise",
        "amount": "$500.00",
        "note": "Subject to combined state/parish sales tax"
      },
      {
        "label": "Louisiana State Tax (5.00%)",
        "formula": "$500.00 × 5.00%",
        "amount": "$25.00",
        "note": "State general fund under 2024 Act 11"
      },
      {
        "label": "Orleans Parish Local Taxes (5.45%)",
        "formula": "$500.00 × 5.45%",
        "amount": "$27.25",
        "note": "City of New Orleans & School Board share"
      },
      {
        "label": "Total Louisiana Sales Tax",
        "formula": "$25.00 + $27.25",
        "amount": "$52.25",
        "note": "Combined 10.45% sales tax"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$500.00 + $52.25",
        "amount": "$552.25",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In New Orleans, the 10.45% combined sales tax on a $500 purchase equals $52.25, split between the State of Louisiana ($25.00) and Orleans Parish ($27.25)."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600 Baton Rouge Receipt",
    "scenario": "A retail store in Baton Rouge (10.50% combined rate) collects an all-inclusive $600.00 cash payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "batonRougeRate": "10.50%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$600.00 ÷ (1 + 0.105)",
        "amount": "$542.99",
        "note": "True retail revenue retained"
      },
      {
        "label": "Combined Louisiana Sales Tax Owed",
        "formula": "$600.00 - $542.99",
        "amount": "$57.01",
        "note": "Split between LDR and East Baton Rouge Parish"
      },
      {
        "label": "Verification Calculation",
        "formula": "$542.99 × 10.50%",
        "amount": "$57.01",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross receipt in Baton Rouge, the business retains $542.99 net revenue and owes $57.01 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Louisiana for 2026?",
      "answer": "The statewide base sales tax rate in Louisiana is 5.00%, enacted under 2024 Special Legislative Session Act 11 (effective 2025–2029). Independent parish sales taxes add 4.00% to 7.00%, pushing combined rates between 9.00% and 12.00%.",
      "sourceUrl": "https://revenue.louisiana.gov/SalesTax"
    },
    {
      "question": "Why does Louisiana have parish sales tax collectors?",
      "answer": "Under the Louisiana Constitution, each parish independently administers, audits, and collects its own local sales taxes. Remote sellers use the centralized Louisiana Remote Sellers Commission (LARS) to file a single return.",
      "sourceUrl": "https://revenue.louisiana.gov/SalesTax/RemoteSellers"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Louisiana?",
      "answer": "At the state level, SaaS is exempt under Revenue Information Bulletin RIB 12-005 because no tangible personal property is transferred. Prewritten downloadable software is taxable.",
      "sourceUrl": "https://revenue.louisiana.gov/LawServices/RIB%2012-005.pdf"
    },
    {
      "question": "What is the economic nexus threshold in Louisiana?",
      "answer": "Out-of-state remote sellers establish economic nexus in Louisiana when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or prior calendar year.",
      "sourceUrl": "https://revenue.louisiana.gov/SalesTax/RemoteSellers"
    },
    {
      "question": "Does Louisiana have an annual sales tax holiday?",
      "answer": "No. Louisiana does not currently hold an annual sales tax holiday.",
      "sourceUrl": "https://revenue.louisiana.gov/SalesTax"
    }
  ]
};

export default louisianaContent;
