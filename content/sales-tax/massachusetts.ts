import type { PageContent } from '../types.ts';

export const massachusettsContent: PageContent = {
  "slug": "massachusetts",
  "family": "sales-tax",
  "title": "Massachusetts Sales Tax Calculator (6.25% Flat Rate) | FeeKit",
  "metaDescription": "Calculate Massachusetts sales tax with DOR rates (6.25% flat). Covers the $175 clothing exemption threshold, taxable SaaS under 830 CMR 64H.1.3, and $100k nexus.",
  "h1": "Massachusetts Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Massachusetts Department of Revenue",
    "url": "https://www.mass.gov/sales-and-use-tax",
    "citation": "Mass. Gen. Laws ch. 64H, §§ 1–33 and 830 CMR 64H.1.3 (Computer Industry Services and Products)."
  },
  "overview": "The Commonwealth of Massachusetts levies a flat statewide sales and use tax rate of 6.25% under Mass. Gen. Laws ch. 64H. Under Massachusetts statutory law, cities, towns, and counties are strictly prohibited from assessing local option sales taxes on general retail merchandise, creating a uniform 6.25% checkout rate from Boston to Springfield and Cape Cod. Massachusetts features unique statutory taxability rules: everyday clothing is exempt up to $175 per item (with tax applying only to the excess value over $175), while Software as a Service (SaaS) and prewritten computer software are fully taxable at 6.25% under 830 CMR 64H.1.3. Out-of-state sellers establish economic nexus upon reaching $100,000 in annual Massachusetts sales.",
  "sections": [
    {
      "id": "ma-flat-rate-structure",
      "title": "Uniform 6.25% Statewide Rate with Zero Municipal Option Surcharges",
      "body": "Massachusetts maintains one of the simplest geographic sales tax structures in the United States:\n\n- **Flat Statewide Baseline**: **6.25%**. Applies uniformly to all retail transactions across all 351 cities and towns in the commonwealth.\n- **Zero Local Option Retail Taxes**: Unlike neighboring New York or Vermont, Massachusetts municipalities cannot enact local sales taxes on retail goods. A purchase in Boston, Cambridge, Worcester, or Lowell is taxed at the identical 6.25% rate.\n- **Local Option Meals and Lodging Exceptions**: Municipalities are authorized to levy a 0.75% local option tax on restaurant meals (bringing the meals tax to 7.00%) and local lodging excise taxes (up to 6.00% or 6.50% in Boston) on hotel and short-term rental accommodations."
    },
    {
      "id": "ma-clothing-threshold-saas-taxability",
      "title": "Taxability Rules: The $175 Clothing Exemption Rule & Taxable SaaS",
      "body": "Massachusetts applies distinct rules to apparel, cloud software, and essential items:\n\n1. **The $175 Clothing Exemption Threshold**: Under Mass. Gen. Laws ch. 64H, § 6(k), articles of clothing and footwear are exempt from sales tax up to **$175.00 per item**. For individual luxury apparel items exceeding $175, sales tax is assessed **only on the incremental dollar amount exceeding $175**:\n   - A pair of shoes priced at **$150.00** is **100% tax-free**.\n   - A designer coat priced at **$300.00** is taxed only on the $125.00 excess ($300 - $175). The 6.25% tax equals $7.81, producing an effective tax rate of just 2.60% on the total garment.\n   - *Exceptions*: Specialty athletic protective gear, costumes, and separate accessories (handbags, umbrellas, jewelry) are taxable on their full value.\n2. **Software as a Service (SaaS) & Canned Software**: **Fully Taxable (6.25%)**. Under 830 CMR 64H.1.3(14), Massachusetts considers cloud-based SaaS, remotely accessed applications, and canned software downloads fully subject to sales tax, as the state treats software access as the transfer of taxable standardized computer software.\n3. **Groceries**: **100% Exempt**. Food products for human consumption (bread, milk, produce, unprepared meats) are exempt under Mass. Gen. Laws ch. 64H, § 6(h).\n4. **Separately Stated Freight Charges**: Shipping and delivery charges are exempt from Massachusetts sales tax under M.G.L. c. 64H, § 1, provided the charge is stated separately on the invoice and occurs after the purchase."
    },
    {
      "id": "ma-economic-nexus-and-marketplace",
      "title": "Massachusetts Economic Nexus ($100,000 Threshold) & Sourcing Rules",
      "body": "Following the repeal of the historic \"Cookie Nexus\" rule and enactment of post-Wayfair standards under TIR 19-9:\n\n- **Economic Nexus Standard**: A remote vendor must register and collect Massachusetts sales tax if total gross sales delivered into the commonwealth exceed **$100,000** during the current or prior calendar year. The previous 100-transaction count threshold was eliminated.\n- **Destination Sourcing**: Massachusetts enforces destination sourcing for all delivered merchandise. In-state and out-of-state deliveries are taxed at the single statewide 6.25% rate.\n- **Marketplace Facilitator Law**: Under Mass. Gen. Laws ch. 64H, § 1, marketplace facilitators (Amazon, Etsy, eBay, etc.) must collect and remit sales tax on sales made through their platform once facilitator sales exceed $100,000 annually."
    },
    {
      "id": "ma-filing-compliance-and-penalties",
      "title": "MassTaxConnect Registration, Filing Deadlines, and Annual Sales Tax Holiday",
      "body": "Administrative requirements enforced by the Massachusetts Department of Revenue (DOR):\n\n- **MassTaxConnect Portal**: Remote and physical merchants register for a Sales and Use Tax account electronically through **MassTaxConnect (MTC)**.\n- **Filing Deadlines**: Sales tax returns (Form ST-9) are due on or before the **30th day of the month** following the end of the reporting period (e.g. Q1 return due April 30).\n- **Advance Payment Mandate**: Large taxpayers with annual sales tax collections exceeding $150,000 must remit an advance payment on the 25th day of the current month covering taxable sales through the 21st day.\n- **Annual Sales Tax Holiday**: Massachusetts holds a statutory **Sales Tax Holiday weekend in mid-August** under Mass. Gen. Laws ch. 64H, § 6A. Retail purchases of tangible personal property priced at **$2,500 or less per item** are completely exempt from the 6.25% tax.\n- **Delinquency Penalties**: Late returns incur a penalty of **1% per month** of the tax due (up to 25%), plus a late payment penalty of **1% per month** and interest at the federal short-term rate plus 4%."
    }
  ],
  "workedExample": {
    "title": "Worked Example: $300 Designer Winter Jacket ($175 Exemption Rule)",
    "scenario": "A consumer in Boston, Massachusetts purchases a $300.00 winter jacket and a $50.00 pair of gloves from a clothing boutique.",
    "inputs": {
      "jacketPrice": "$300.00",
      "glovesPrice": "$50.00",
      "clothingThreshold": "$175.00",
      "statewideRate": "6.25%"
    },
    "steps": [
      {
        "label": "Gloves Taxability",
        "formula": "$50.00 < $175 threshold",
        "amount": "$0.00 tax",
        "note": "Everyday apparel under $175 is 100% exempt"
      },
      {
        "label": "Jacket Taxable Incremental Base",
        "formula": "$300.00 - $175.00 threshold",
        "amount": "$125.00 taxable base",
        "note": "Tax applies only to portion over $175"
      },
      {
        "label": "Massachusetts Sales Tax (6.25%)",
        "formula": "$125.00 × 6.25%",
        "amount": "$7.81",
        "note": "Calculated on incremental base"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$300.00 + $50.00 + $7.81",
        "amount": "$357.81",
        "note": "Effective tax rate is only 2.23% on order"
      }
    ],
    "takeaway": "On a $350 clothing order in Massachusetts, only $125 is taxable, resulting in just $7.81 in total sales tax."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $600.00 B2B SaaS Receipt",
    "scenario": "A software company collects a flat $600.00 gross payment for taxable monthly cloud software in Cambridge, Massachusetts (6.25% rate). What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$600.00",
      "massachusettsRate": "6.25%"
    },
    "steps": [
      {
        "label": "Net Software Revenue Extraction",
        "formula": "$600.00 ÷ (1 + 0.0625)",
        "amount": "$564.71",
        "note": "Retained SaaS revenue"
      },
      {
        "label": "Massachusetts Sales Tax Liability",
        "formula": "$600.00 - $564.71",
        "amount": "$35.29",
        "note": "Remitted via MassTaxConnect"
      },
      {
        "label": "Verification Calculation",
        "formula": "$564.71 × 6.25%",
        "amount": "$35.29",
        "note": "Reconciles exactly to $600.00 receipt"
      }
    ],
    "takeaway": "From a $600.00 gross SaaS invoice in Massachusetts, the software vendor retains $564.71 net revenue and owes $35.29 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Massachusetts for 2026?",
      "answer": "The sales tax rate in Massachusetts is a flat 6.25% statewide. Cities and towns are prohibited from levying local sales taxes on general retail merchandise.",
      "sourceUrl": "https://www.mass.gov/sales-and-use-tax"
    },
    {
      "question": "How does the Massachusetts clothing sales tax exemption work?",
      "answer": "Clothing and footwear are exempt up to $175 per item. For items priced over $175, sales tax is charged only on the portion of the price exceeding $175. For example, a $200 shirt is taxed on only $25 ($1.56 tax).",
      "sourceUrl": "https://www.mass.gov/service-details/clothing-sales-tax"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Massachusetts?",
      "answer": "Yes. Massachusetts considers SaaS, cloud software, and prewritten computer software accessed over the internet fully taxable at the standard 6.25% rate under 830 CMR 64H.1.3.",
      "sourceUrl": "https://www.mass.gov/regulations/830-CMR-64h13-computer-industry-services-and-products"
    },
    {
      "question": "What is the Massachusetts economic nexus threshold for remote sellers?",
      "answer": "Out-of-state sellers establish economic nexus in Massachusetts when sales delivered into the commonwealth exceed $100,000 in gross revenue during the current or prior calendar year.",
      "sourceUrl": "https://www.mass.gov/technical-information-release/tir-19-9-remote-sellers-and-marketplace-facilitators"
    },
    {
      "question": "Does Massachusetts hold an annual sales tax holiday?",
      "answer": "Yes. Massachusetts hosts an annual 2-day Sales Tax Holiday weekend in mid-August, exempting qualifying retail purchases of tangible personal property up to $2,500 per item.",
      "sourceUrl": "https://www.mass.gov/info-details/massachusetts-sales-tax-holiday-faq"
    }
  ]
};

export default massachusettsContent;
