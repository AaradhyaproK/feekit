import type { PageContent } from '../types.ts';

export const coloradoContent: PageContent = {
  "slug": "colorado",
  "family": "sales-tax",
  "title": "Colorado Sales Tax Calculator (2.90% to 11.20%) | FeeKit",
  "metaDescription": "Calculate Colorado sales tax with DOR rates (2.9% state, max 11.20%). Home-Rule cities, SUTS portal, retail delivery fee ($0.29), and $100k nexus.",
  "h1": "Colorado Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Colorado Department of Revenue",
    "url": "https://tax.colorado.gov/sales-use-tax",
    "citation": "Colo. Rev. Stat. Title 39, Article 26 (Sales and Use Tax) and Colorado SUTS (Sales & Use Tax System)."
  },
  "overview": "The State of Colorado imposes the lowest statewide base sales tax rate in the nation at 2.90% under C.R.S. § 39-26-104. However, Colorado operates the most decentralized local sales tax system in the United States due to constitutional \"Home Rule\" provisions under Article XX of the Colorado Constitution. Over 70 Home-Rule municipalities administer, audit, and collect their own local sales taxes independently from the state Department of Revenue, resulting in combined sales tax rates ranging from 7.00% to 11.20% across major cities (including Denver, Boulder, and Colorado Springs). Furthermore, Colorado levies a mandatory $0.29 Retail Delivery Fee on motorized deliveries. Remote sellers establish economic nexus upon reaching $100,000 in annual Colorado sales.",
  "sections": [
    {
      "id": "co-home-rule-architecture-rates",
      "title": "The Home-Rule Divide: State-Collected vs Self-Administered Cities",
      "body": "Colorado’s sales tax landscape is split into two distinct administrative categories:\n\n- **State-Collected Jurisdictions**: The Colorado Department of Revenue (CDOR) collects the 2.90% state rate, statutory county taxes (typically 0.50% to 2.00%), and special district taxes (e.g., Regional Transportation District RTD 1.00%, Scientific and Cultural Facilities District SCFD 0.10%).\n- **Self-Administered Home-Rule Cities**: Over 70 autonomous cities establish their own independent tax bases, taxability rules, and collection systems:\n  - **Denver (Denver County Home-Rule)**: **8.81% combined rate** (2.90% state + 1.10% RTD/SCFD + 4.81% City/County of Denver home-rule tax).\n  - **Boulder (Boulder County Home-Rule)**: **9.06% combined rate** (2.90% state + county + RTD + 3.86% municipal home-rule tax).\n  - **Colorado Springs (El Paso County Home-Rule)**: **8.20% combined rate** (2.90% state + 1.23% county + 0.95% PPRTA transit + 3.12% municipal home-rule tax).\n  - **Aurora (Adams/Arapahoe/Douglas Home-Rule)**: **8.50% combined rate** (combines state, county, RTD, and 3.75% City of Aurora tax)."
    },
    {
      "id": "co-retail-delivery-fee-and-saas",
      "title": "Unique Colorado Rules: The $0.29 Retail Delivery Fee & Home-Rule SaaS Divergence",
      "body": "Colorado enforces unique statutory mechanisms found nowhere else in the country:\n\n1. **The Retail Delivery Fee ($0.29 Flat per Delivery)**: Enacted under Senate Bill 21-260, Colorado imposes a mandatory **Retail Delivery Fee of $0.29** on every retail transaction delivered by motor vehicle to a location in Colorado that contains at least one taxable item. Small businesses with annual Colorado retail sales under $500,000 are exempt from collecting this fee.\n2. **Software as a Service (SaaS) Divergence**:\n   - *State Level*: **100% Exempt**. Under Colorado Department of Revenue FYI Sales 89, cloud-based software where the user does not take title or possession of tangible personal property is exempt from state sales tax.\n   - *Home-Rule Municipalities*: **Taxable in Denver and Other Cities**. The City of Denver specifically treats SaaS as taxable under its home-rule municipal code as the rental or lease of computer software.\n3. **Groceries**: **Exempt at State Level**. Food for domestic home consumption is exempt from the 2.90% state rate, but taxable in select home-rule cities.\n4. **Clothing**: **Fully Taxable**. Apparel and footwear are taxable at standard combined rates across all Colorado jurisdictions."
    },
    {
      "id": "co-suts-system-economic-nexus",
      "title": "The SUTS Portal and Colorado Economic Nexus ($100,000 Threshold)",
      "body": "Following post-Wayfair administrative modernization:\n\n- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in Colorado upon reaching **$100,000 in gross retail sales** delivered into the state during the current or previous calendar year.\n- **The SUTS (Sales & Use Tax System) Portal**: To resolve historic compliance nightmares where remote merchants had to register and file with dozens of independent cities, the state created the **SUTS portal**. Remote merchants can register and file a single consolidated return that distributes local taxes to participating home-rule cities.\n- **Destination Sourcing**: In 2019, Colorado transitioned completely to destination sourcing for delivered goods, requiring merchants to calculate rates based on the specific delivery address of the purchaser.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, etc.) must collect and remit Colorado state, county, special district, and participating home-rule city sales taxes on all facilitated sales."
    },
    {
      "id": "co-filing-compliance-and-penalties",
      "title": "Revenue Online Registration, 20th-of-the-Month Deadlines, and Service Fee Discounts",
      "body": "Tax compliance administration enforced by the Colorado Department of Revenue:\n\n- **Revenue Online Registration**: Remote and in-state merchants obtain a Colorado Sales Tax License online via **Revenue Online**. A $16 deposit/fee applies for physical locations.\n- **Filing Deadlines**: Sales tax returns (Form DR 0100) are due on or before the **20th day of the month** following the close of the reporting period.\n- **Vendor Service Fee (Timely Filing Discount)**: Under C.R.S. § 39-26-105, timely filers may retain a statutory vendor fee of **4.00% of the state sales tax collected** (capped at $1,000 per filing period).\n- **Sales Tax Holiday**: Colorado does not host an annual sales tax holiday.\n- **Delinquency Penalties**: Delinquent returns incur a penalty of **10% of the tax due**, plus 0.5% per month (up to 18% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Home Goods Order Delivered in Denver (8.81% Rate + $0.29 RDF)",
    "scenario": "A resident in Denver, Colorado orders $300.00 of kitchenware delivered by motor vehicle to their home.",
    "inputs": {
      "merchandiseSubtotal": "$300.00",
      "coloradoStateRate": "2.90%",
      "rtdScfdRate": "1.10%",
      "denverCityRate": "4.81%",
      "combinedRate": "8.81%",
      "retailDeliveryFee": "$0.29"
    },
    "steps": [
      {
        "label": "Taxable Merchandise Base",
        "formula": "$300.00 home goods",
        "amount": "$300.00",
        "note": "Subject to combined state/local sales tax"
      },
      {
        "label": "Colorado State Tax (2.90%)",
        "formula": "$300.00 × 2.90%",
        "amount": "$8.70",
        "note": "State general fund"
      },
      {
        "label": "Special District Taxes (1.10%)",
        "formula": "$300.00 × 1.10%",
        "amount": "$3.30",
        "note": "RTD transit + SCFD cultural fund"
      },
      {
        "label": "City of Denver Home-Rule Tax (4.81%)",
        "formula": "$300.00 × 4.81%",
        "amount": "$14.43",
        "note": "City & County of Denver share"
      },
      {
        "label": "Total Sales Tax",
        "formula": "$8.70 + $3.30 + $14.43",
        "amount": "$26.43",
        "note": "Combined 8.81% sales tax"
      },
      {
        "label": "Colorado Retail Delivery Fee (RDF)",
        "formula": "Mandatory state delivery fee",
        "amount": "$0.29",
        "note": "Senate Bill 21-260 motorized delivery levy"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$300.00 + $26.43 + $0.29",
        "amount": "$326.72",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Denver, a $300 motorized delivery order incurs $26.43 in combined sales tax (8.81%) plus Colorado’s mandatory $0.29 Retail Delivery Fee, totaling $326.72."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500.00 Boulder Receipt",
    "scenario": "A retail store in Boulder, Colorado (9.06% combined rate) collects an all-inclusive $500.00 cash payment for taxable goods. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "boulderRate": "9.06%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.0906)",
        "amount": "$458.46",
        "note": "True retail revenue retained"
      },
      {
        "label": "Combined Colorado Sales Tax Owed",
        "formula": "$500.00 - $458.46",
        "amount": "$41.54",
        "note": "Distributed across state, county, RTD, and city"
      },
      {
        "label": "Verification Calculation",
        "formula": "$458.46 × 9.06%",
        "amount": "$41.54",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in Boulder, the business retains $458.46 net revenue and owes $41.54 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Colorado for 2026?",
      "answer": "The statewide base sales tax rate in Colorado is 2.90% (the lowest in the nation). However, county, special transit district, and municipal home-rule taxes push combined rates between 7.00% and 11.20% in most cities.",
      "sourceUrl": "https://tax.colorado.gov/sales-use-tax"
    },
    {
      "question": "What is a Home-Rule city in Colorado?",
      "answer": "Under the Colorado Constitution, over 70 Home-Rule cities (including Denver, Boulder, and Colorado Springs) independently administer, collect, and audit their own municipal sales taxes, establishing local taxability rules distinct from the state.",
      "sourceUrl": "https://tax.colorado.gov/home-rule-cities"
    },
    {
      "question": "What is the Colorado Retail Delivery Fee?",
      "answer": "Colorado imposes a statutory $0.29 Retail Delivery Fee on all retail deliveries made by motor vehicle that include at least one item subject to state sales tax. Small businesses with under $500,000 in Colorado sales are exempt.",
      "sourceUrl": "https://tax.colorado.gov/retail-delivery-fee"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Colorado?",
      "answer": "SaaS is exempt from state sales tax under FYI Sales 89. However, several major Home-Rule cities (including the City of Denver) tax SaaS independently under municipal code as tangible software rental.",
      "sourceUrl": "https://tax.colorado.gov/sales-tax-digital-goods"
    },
    {
      "question": "What is the SUTS system in Colorado?",
      "answer": "SUTS (Sales & Use Tax System) is Colorado’s centralized portal allowing remote businesses to calculate local sales tax rates and file a single return covering state, county, and participating home-rule municipal taxes.",
      "sourceUrl": "https://tax.colorado.gov/SUTS"
    }
  ]
};

export default coloradoContent;
