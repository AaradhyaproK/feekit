import type { PageContent } from '../types.ts';

export const connecticutContent: PageContent = {
  "slug": "connecticut",
  "family": "sales-tax",
  "title": "Connecticut Sales Tax Calculator (6.35% Flat & 7.75% Luxury) | FeeKit",
  "metaDescription": "Calculate Connecticut sales and use tax with DRS rates (6.35% flat, 7.75% luxury). Reduced 1% B2B computer services rate, clothing exemptions, and $100k nexus.",
  "h1": "Connecticut Sales Tax Calculator & Department of Revenue Services Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Connecticut Department of Revenue Services",
    "url": "https://portal.ct.gov/drs/sales-tax/sales-and-use-taxes-information",
    "citation": "Conn. Gen. Stat. Title 12, Chapter 219 (Sales and Use Taxes) and Conn. Agencies Regs. § 12-407(a)(37)(J)-1."
  },
  "overview": "The State of Connecticut imposes a flat statewide sales and use tax rate of 6.35% under Conn. Gen. Stat. § 12-408. Under Connecticut statutory law, municipalities and counties are strictly prohibited from assessing local option retail sales taxes, ensuring an identical 6.35% rate across all 169 towns (including Hartford, Stamford, New Haven, and Bridgeport). However, Connecticut features unique multi-tiered tax rates: luxury goods are taxed at 7.75% (motor vehicles over $50,000 and clothing/jewelry over $1,000), restaurant meals are taxed at 7.35%, and B2B computer software/data processing services are taxed at a reduced 1.00% rate. Remote sellers establish economic nexus upon reaching $100,000 in gross sales and 200 transactions.",
  "sections": [
    {
      "id": "ct-rate-tiers-and-luxury-tax",
      "title": "Connecticut Standard 6.35% Rate, 7.75% Luxury Surtax, and 7.35% Meals Tax",
      "body": "Connecticut’s sales tax code provides geographic uniformity combined with progressive product tiers:\n\n- **Standard Statewide Baseline**: **6.35%**. Applies to all standard retail sales of tangible personal property statewide with zero municipal additions.\n- **Luxury Goods Surtax (7.75%)**: Imposed under Conn. Gen. Stat. § 12-408(1)(D) on high-value retail purchases:\n  - Motor vehicles with a sales price exceeding **$50,000** (taxed at 7.75% on the entire purchase price).\n  - Jewelry (real or imitation) exceeding **$5,000** per item.\n  - Articles of clothing and footwear exceeding **$1,000** per item.\n- **Meals and Prepared Food Surtax (7.35%)**: Restaurant meals, catering, and prepared takeout food are taxed at **7.35%** (combining the 6.35% base with a mandatory 1.00% meals surtax)."
    },
    {
      "id": "ct-saas-reduced-rate-b2b",
      "title": "Taxability Framework: The 1.00% B2B Computer Services Rate vs 6.35% B2C SaaS",
      "body": "Connecticut maintains a specialized statutory tax structure for software and digital services:\n\n1. **B2B Computer Software and Data Processing (1.00% Reduced Rate)**: Under Conn. Gen. Stat. § 12-407(a)(37)(J), computer and data processing services (which include B2B SaaS, cloud hosting, software maintenance, and custom programming) are taxed at a statutory reduced rate of **1.00%**. Businesses purchasing software for internal commercial use pay only 1.00% sales tax.\n2. **B2C Consumer SaaS**: Cloud software and streaming media sold directly to individual consumers are taxed at the full standard rate of **6.35%**.\n3. **Clothing and Footwear**: Fully taxable at 6.35% year-round (or 7.75% if exceeding $1,000), except during the annual Sales Tax Free Week in August.\n4. **Groceries**: Food products for human consumption are exempt under Conn. Gen. Stat. § 12-412(13).\n5. **Freight and Delivery Charges**: Delivery charges billed by the seller for taxable property are fully taxable under Conn. Gen. Stat. § 12-407(a)(8)."
    },
    {
      "id": "ct-economic-nexus-and-sourcing",
      "title": "Connecticut Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Following post-Wayfair statutory rules codified in Conn. Gen. Stat. § 12-407(a)(12):\n\n- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Connecticut if, during the 12-month period ending on the preceding September 30:\n  - Gross receipts from retail sales delivered into Connecticut exceed **$100,000**; **AND**\n  - The seller conducts **200 or more retail transactions** into the state.\n- **Destination Sourcing**: Connecticut enforces destination sourcing for all delivered merchandise. Remote sellers collect Connecticut’s uniform 6.35% sales tax on all taxable shipments into the state.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, etc.) must collect and remit Connecticut sales tax on all sales made through their platforms, shielding third-party sellers from direct filing obligations."
    },
    {
      "id": "ct-filing-compliance-myconnect",
      "title": "myconneCT Portal Registration, Last-Day-of-the-Month Deadlines, and Tax-Free Week",
      "body": "Tax compliance administration enforced by the Connecticut Department of Revenue Services (DRS):\n\n- **myconneCT Portal Registration**: Businesses register for a Connecticut Sales and Use Tax Permit electronically through **myconneCT**. A $100 permit fee applies per physical business location.\n- **Filing Deadlines**: Sales tax returns (Form OS-114) are due on or before the **last day of the month** following the close of the reporting period (e.g. Q1 return due April 30).\n- **Annual Sales Tax Free Week**: Connecticut hosts an annual **7-day Sales Tax Free Week in late August**, exempting qualifying clothing and footwear priced at **$100 or less per item** from the 6.35% tax.\n- **Delinquency Penalties**: Late returns incur a penalty of **15% of the unpaid tax** or $50 (whichever is greater), plus statutory interest at 1% per month."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Cloud Software Invoice in Stamford (1.00% Reduced Rate)",
    "scenario": "A corporate financial firm in Stamford, Connecticut purchases a $5,000.00 monthly B2B enterprise SaaS license.",
    "inputs": {
      "saasSubtotal": "$5,000.00",
      "statutoryReducedRate": "1.00% (Conn. Gen. Stat. § 12-407(a)(37)(J))"
    },
    "steps": [
      {
        "label": "Taxable B2B Software Base",
        "formula": "$5,000.00 enterprise license",
        "amount": "$5,000.00",
        "note": "Subject to statutory 1% rate"
      },
      {
        "label": "Connecticut B2B Sales Tax (1.00%)",
        "formula": "$5,000.00 × 1.00%",
        "amount": "$50.00",
        "note": "Special reduced rate for data processing"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$5,000.00 + $50.00",
        "amount": "$5,050.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Connecticut’s reduced B2B computer services tax, a $5,000 enterprise software contract incurs only $50.00 in sales tax (1.00%), saving the business $267.50 compared to the standard 6.35% rate."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500 Hartford Receipt",
    "scenario": "A retail store in Hartford collects a flat $500.00 cash payment for taxable goods at the standard 6.35% rate. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "connecticutRate": "6.35%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.0635)",
        "amount": "$470.15",
        "note": "True retail revenue retained"
      },
      {
        "label": "Connecticut Sales Tax Owed",
        "formula": "$500.00 - $470.15",
        "amount": "$29.85",
        "note": "Remitted via myconneCT"
      },
      {
        "label": "Verification Calculation",
        "formula": "$470.15 × 6.35%",
        "amount": "$29.85",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in Hartford, the retailer retains $470.15 net revenue and owes $29.85 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the standard sales tax rate in Connecticut for 2026?",
      "answer": "The standard sales tax rate in Connecticut is a flat 6.35% statewide. Municipalities and counties do not levy local retail sales taxes.",
      "sourceUrl": "https://portal.ct.gov/drs/sales-tax/sales-and-use-taxes-information"
    },
    {
      "question": "What is Connecticut’s reduced 1% tax on B2B software?",
      "answer": "Under Conn. Gen. Stat. § 12-407(a)(37)(J), computer and data processing services (including B2B SaaS, cloud hosting, and software maintenance) are taxed at a reduced statutory rate of 1.00% rather than 6.35%.",
      "sourceUrl": "https://portal.ct.gov/drs/sales-tax/computer-and-data-processing-services"
    },
    {
      "question": "What is the luxury sales tax rate in Connecticut?",
      "answer": "Connecticut imposes a 7.75% luxury sales tax rate on motor vehicles exceeding $50,000, jewelry exceeding $5,000, and individual clothing or footwear items exceeding $1,000.",
      "sourceUrl": "https://portal.ct.gov/drs/sales-tax/sales-and-use-taxes-information"
    },
    {
      "question": "What is the economic nexus threshold in Connecticut?",
      "answer": "Out-of-state remote sellers establish economic nexus in Connecticut if they have at least $100,000 in gross receipts AND 200 or more retail transactions into the state during the preceding 12-month period.",
      "sourceUrl": "https://portal.ct.gov/drs/sales-tax/remote-sellers"
    },
    {
      "question": "When is Connecticut’s annual Sales Tax Free Week?",
      "answer": "Connecticut hosts an annual Sales Tax Free Week in late August, exempting qualifying clothing and footwear priced at $100 or less per item from sales tax.",
      "sourceUrl": "https://portal.ct.gov/drs/sales-tax/sales-tax-free-week"
    }
  ]
};

export default connecticutContent;
