import type { PageContent } from '../types.ts';

export const minnesotaContent: PageContent = {
  "slug": "minnesota",
  "family": "sales-tax",
  "title": "Minnesota Sales Tax Calculator (6.875% to 9.025%) | FeeKit",
  "metaDescription": "Calculate Minnesota sales tax with Department of Revenue rates (6.875% base, max 9.025% Minneapolis). 100% clothing exemption, Revenue Notice 10-04 SaaS rules, and $100k nexus.",
  "h1": "Minnesota Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Minnesota Department of Revenue",
    "url": "https://www.revenue.state.mn.us/sales-and-use-tax",
    "citation": "Minn. Stat. Chapter 297A (General Sales and Use Taxes) and Revenue Notice 10-04."
  },
  "overview": "The State of Minnesota levies a statutory baseline sales and use tax rate of 6.875% under Minn. Stat. § 297A.62. Local counties, municipalities, and regional transit districts impose additional local option sales taxes, pushing combined rates between 7.375% and 9.025% across major metropolitan areas (including Minneapolis, St. Paul, and Duluth). Minnesota is famous for its broad consumer protections: everyday clothing and footwear are 100% exempt from sales tax with no dollar limitation under Minn. Stat. § 297A.67, and Software as a Service (SaaS) is non-taxable under Revenue Notice 10-04. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Minnesota sales or 200 separate transactions.",
  "sections": [
    {
      "id": "mn-rates-and-metro-transit-taxes",
      "title": "Minnesota Base Rate (6.875%) and Twin Cities Metro Transit Surcharges",
      "body": "Minnesota’s sales tax code combines a high state baseline with localized transit levies:\n\n- **Statewide Baseline Rate**: **6.875%**. Dedicated by constitutional amendments to general state revenue, the clean water fund, parks and trails, and arts/cultural heritage.\n- **Twin Cities Metropolitan Area Taxes**: Local option taxes enacted across the 7-county metropolitan region to fund regional highways and light rail transit:\n  - **Minneapolis (Hennepin County)**: **9.025% combined rate** (6.875% state + transit + Hennepin County + City of Minneapolis municipal tax).\n  - **St. Paul (Ramsey County)**: **8.875% combined rate** (6.875% state + Ramsey County + St. Paul 1.00% sales tax).\n  - **Duluth (St. Louis County)**: **9.125% combined rate** (combines state base with St. Louis County and City of Duluth municipal taxes).\n  - **Rochester (Olmsted County)**: **8.125% combined rate** (combines state base with Olmsted County and Rochester sales taxes)."
    },
    {
      "id": "mn-clothing-exemption-and-saas",
      "title": "Taxability Framework: Complete Clothing Exemption & SaaS Non-Taxability",
      "body": "Statutory product taxability under Minnesota Department of Revenue regulations:\n\n1. **Everyday Clothing and Footwear**: **100% Exempt Statewide**. Under Minn. Stat. § 297A.67, subd. 8, all standard articles of clothing and footwear designed for human wear are exempt from sales tax year-round with **no price ceiling**. A $2,000 winter coat or formal dress is completely tax-free at checkout.\n   - *Taxable Apparel Exceptions*: Specialty athletic protective gear (ski boots, football pads), costumes, and belt buckles/cufflinks sold separately remain taxable.\n2. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Minnesota Revenue Notice 10-04, cloud SaaS, remotely accessed software, and web-based application hosting are non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.\n3. **Groceries & Food Staples**: **Exempt**. Essential food products for home consumption are exempt under Minn. Stat. § 297A.67, subd. 2. Candy, soft drinks, and prepared hot food are taxable at full standard rates.\n4. **Freight and Delivery Charges**: Under Minn. Stat. § 297A.61, subd. 7, delivery charges billed by the seller for taxable merchandise are fully taxable, regardless of whether stated separately on the invoice."
    },
    {
      "id": "mn-economic-nexus-and-sourcing",
      "title": "Minnesota Remote Seller Economic Nexus ($100,000 / 200 Transactions) & Sourcing",
      "body": "Following post-Wayfair statutory rules codified in Minn. Stat. § 297A.66:\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Minnesota upon exceeding either statutory threshold in the prior 12-month period:\n  - More than **$100,000 in retail sales** delivered into Minnesota; **OR**\n  - **200 or more separate retail transactions** delivered into the state.\n- **Destination Sourcing**: Minnesota operates under destination sourcing rules for all delivered goods. Remote sellers collect the exact combined state and local rate applicable to the customer's delivery address.\n- **Marketplace Facilitator Legislation**: Platforms such as Amazon, eBay, and Etsy must collect and remit Minnesota sales tax on all sales made through their marketplaces, shielding independent third-party sellers from direct filing liabilities."
    },
    {
      "id": "mn-filing-compliance-and-penalties",
      "title": "Minnesota e-Services Registration, 20th-of-the-Month Deadlines, and Penalties",
      "body": "Compliance requirements administered by the Minnesota Department of Revenue:\n\n- **e-Services Portal Registration**: Remote and physical merchants obtain a Minnesota Tax ID Number electronically through **Minnesota e-Services**.\n- **Filing Deadlines**: Sales tax returns (Form ST3) are due on or before the **20th day of the month** following the end of the reporting period for monthly remitters.\n- **Sales Tax Holiday**: Minnesota does not hold an annual sales tax holiday (everyday clothing and footwear are already exempt year-round).\n- **Delinquency Penalties**: Late returns incur a penalty of **5% of the unpaid tax** for the first 30 days, plus an additional 5% for each subsequent 30-day period (up to 15% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Apparel vs Electronics in Minneapolis (9.025% Rate)",
    "scenario": "A consumer in Minneapolis, Minnesota purchases a $200.00 winter jacket and a $300.00 pair of wireless headphones.",
    "inputs": {
      "jacketPrice": "$200.00 (Everyday Clothing)",
      "headphonesPrice": "$300.00 (Electronics)",
      "minneapolisCombinedRate": "9.025%"
    },
    "steps": [
      {
        "label": "Clothing Taxability Status",
        "formula": "$200.00 everyday apparel",
        "amount": "$0.00 tax",
        "note": "100% exempt under Minn. Stat. § 297A.67"
      },
      {
        "label": "Taxable Electronics Base",
        "formula": "$300.00 headphones",
        "amount": "$300.00",
        "note": "Subject to combined Minneapolis sales tax"
      },
      {
        "label": "Minnesota Sales Tax (9.025%)",
        "formula": "$300.00 × 9.025%",
        "amount": "$27.08",
        "note": "Applies only to taxable headphones"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$200.00 + $300.00 + $27.08",
        "amount": "$527.08",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Minneapolis, the 9.025% tax applies only to the $300 headphones ($27.08 tax), keeping the $200 winter jacket completely tax-free."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500 St. Paul Receipt",
    "scenario": "A retail store in St. Paul (8.875% combined rate) collects an all-inclusive $500.00 cash payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "stPaulRate": "8.875%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.08875)",
        "amount": "$459.24",
        "note": "True retail revenue retained"
      },
      {
        "label": "Minnesota Sales Tax Owed",
        "formula": "$500.00 - $459.24",
        "amount": "$40.76",
        "note": "Remitted to Minnesota DOR"
      },
      {
        "label": "Verification Calculation",
        "formula": "$459.24 × 8.875%",
        "amount": "$40.76",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in St. Paul, the business retains $459.24 net revenue and owes $40.76 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Minnesota for 2026?",
      "answer": "The statewide base rate in Minnesota is 6.875%. Local city, county, and transit taxes push combined rates between 7.375% and 9.025% across major metropolitan areas.",
      "sourceUrl": "https://www.revenue.state.mn.us/sales-and-use-tax"
    },
    {
      "question": "Is clothing really completely tax-free in Minnesota?",
      "answer": "Yes. Under Minn. Stat. § 297A.67, everyday clothing and footwear are 100% exempt from sales tax year-round with no dollar cap. Only specialty protective sports gear and costume apparel are taxable.",
      "sourceUrl": "https://www.revenue.state.mn.us/clothing"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Minnesota?",
      "answer": "No. Under Minnesota Revenue Notice 10-04, cloud SaaS and hosted software access are classified as non-taxable services because customers do not take physical possession of executable software.",
      "sourceUrl": "https://www.revenue.state.mn.us/revenue-notices/10-04"
    },
    {
      "question": "What is the economic nexus threshold in Minnesota?",
      "answer": "Out-of-state remote sellers establish economic nexus in Minnesota when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the prior 12 months.",
      "sourceUrl": "https://www.revenue.state.mn.us/remote-sellers"
    },
    {
      "question": "Does Minnesota hold an annual sales tax holiday?",
      "answer": "No. Minnesota does not hold an annual sales tax holiday because everyday clothing, footwear, and groceries are already exempt year-round.",
      "sourceUrl": "https://www.revenue.state.mn.us/sales-and-use-tax"
    }
  ]
};

export default minnesotaContent;
