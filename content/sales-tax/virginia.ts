import type { PageContent } from '../types.ts';

export const virginiaContent: PageContent = {
  "slug": "virginia",
  "family": "sales-tax",
  "title": "Virginia Sales Tax Calculator (5.30% to 7.00%) | FeeKit",
  "metaDescription": "Calculate Virginia sales tax with Department of Taxation rates (5.3% base, 6.0% Northern VA/Hampton Roads, 7.0% Historic Triangle). Sourcing, SaaS exemption, and $100k nexus.",
  "h1": "Virginia Sales Tax Calculator & Department of Taxation Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Virginia Department of Taxation",
    "url": "https://www.tax.virginia.gov/retail-sales-and-use-tax",
    "citation": "Va. Code Ann. §§ 58.1-603, 58.1-604, 58.1-605, and Virginia Tax Ruling P.D. 05-44."
  },
  "overview": "The Commonwealth of Virginia imposes a statutory baseline retail sales and use tax rate of 5.30%, comprised of a 4.30% state levy and a mandatory 1.00% local option tax adopted by all cities and counties under Va. Code Ann. § 58.1-605. However, regional transportation districts enforce additional surcharges: the Northern Virginia Transportation Authority (NVTA) and Hampton Roads Transportation Accountability Commission (HRTAC) areas levy a combined 6.00% rate, the Central Virginia Transportation Authority (CVTA) region imposes 6.00%, and the Historic Triangle (Williamsburg, James City, and York County) levies a state-high combined rate of 7.00%. Out-of-state remote sellers establish economic nexus when gross sales reach $100,000 or 200 transactions annually.",
  "sections": [
    {
      "id": "va-rates-and-regional-districts",
      "title": "Virginia Base Rate & Regional Transportation Surcharges (NVTA, HRTAC, CVTA)",
      "body": "Virginia’s sales tax code distinguishes between the standard commonwealth baseline and specialized transportation districts:\n\n- **Standard Commonwealth Rate**: **5.30%**. Applies across general rural and non-transit regions (e.g., Charlottesville, Roanoke, Lynchburg), combining 4.30% state tax with the 1.00% local option tax.\n- **Northern Virginia (NVTA) District**: **6.00%**. Enforced in Fairfax, Arlington, Loudoun, and Prince William Counties, and the cities of Alexandria, Falls Church, Fairfax, Manassas, and Manassas Park (combines 4.3% state + 1.0% local + 0.70% regional transit tax).\n- **Hampton Roads (HRTAC) District**: **6.00%**. Enforced in Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, and Portsmouth.\n- **Central Virginia (CVTA) District**: **6.00%**. Imposed across the Richmond metropolitan area (City of Richmond, Henrico County, and Chesterfield County) to fund regional expressway and transit improvements.\n- **Historic Triangle District**: **7.00%**. Enacted under special legislation for the City of Williamsburg, James City County, and York County (includes an additional 1.00% historic preservation tourism tax)."
    },
    {
      "id": "va-taxability-groceries-saas-services",
      "title": "Taxability in Virginia: 1% Grocery Tax, SaaS Exemption, and Shipping Rules",
      "body": "Virginia maintains specific statutory exemptions designed to protect essential consumer staples and technology services:\n\n1. **Food for Home Consumption (Groceries)**: **Taxed at 1.00% Local Only**. Under legislation effective January 1, 2023, the Commonwealth eliminated the 1.50% state sales tax on qualifying grocery items and essential personal hygiene products. Only the 1.00% local option tax remains, resulting in an effective grocery tax rate of exactly 1.00% statewide. Prepared hot meals, restaurant catering, and alcoholic beverages remain subject to full standard retail rates plus local meals taxes.\n2. **Software as a Service (SaaS)**: **Exempt**. Virginia Tax Commissioner Ruling P.D. 05-44 established that cloud-hosted software and remote application hosting are classified as non-taxable personal or professional services under Va. Code Ann. § 58.1-609.5(1). Because the customer acquires no tangible personal property or downloaded physical media, SaaS subscriptions incur zero Virginia sales tax.\n3. **Clothing and Footwear**: **Fully Taxable**. Standard apparel and footwear are subject to full combined rates year-round, except during the annual 3-day Sales Tax Holiday in August.\n4. **Freight and Delivery Charges**: Separately stated transportation charges billed by a common carrier or postal service are exempt under Va. Code Ann. § 58.1-609.5(3). However, combined \"shipping and handling\" charges are deemed taxable in full."
    },
    {
      "id": "va-economic-nexus-and-marketplace",
      "title": "Virginia Remote Seller Nexus ($100,000 / 200 Transactions) and Sourcing Rules",
      "body": "Following House Bill 1722 and Senate Bill 1083, out-of-state merchants selling into Virginia face strict economic compliance standards:\n\n- **Economic Nexus Rule**: A remote merchant must register and collect Virginia sales tax if, during the previous or current calendar year, the business achieves:\n  - More than **$100,000 in gross revenue** from retail sales delivered into Virginia; **OR**\n  - **200 or more separate retail transactions** with Virginia purchasers.\n- **Destination Sourcing for Remote Sellers**: Remote merchants with economic nexus must source transactions to the customer’s **delivery destination**, collecting the precise local rate (5.30%, 6.00%, or 7.00%) applicable to the delivery address.\n- **In-State Virginia Sellers (Origin Sourcing)**: In-state merchants with physical storefronts or warehouses in Virginia generally collect sales tax based on the **origin location** of the place of business where the sale is negotiated or fulfilled.\n- **Marketplace Facilitator Law**: Amazon, eBay, Etsy, and other qualifying marketplace facilitators are legally obligated to collect and remit Virginia sales tax on all facilitated transactions, relieving third-party merchants of liability on marketplace orders."
    },
    {
      "id": "va-filing-compliance-timely-discount",
      "title": "Permit Registration, 20th-of-the-Month Due Date, and Dealer Discount Rules",
      "body": "Tax administration requirements enforced by Virginia Tax:\n\n- **Sales Tax Registration**: Businesses must register online for a Virginia Sales and Use Tax Certificate of Registration using the **VATAX Online Services for Businesses** portal.\n- **Filing Deadlines**: Standard sales tax returns (Form ST-9 for monthly or quarterly filers) are due on or before the **20th day of the month** following the close of the reporting period.\n- **Dealer Discount (Timely Filing Compensation)**: Under Va. Code Ann. § 58.1-622, dealers who file and pay their returns on time are permitted to retain a small percentage of the state sales tax collected (ranging from 1.6% down to 0.8% depending on volume) as compensation for accounting expenses.\n- **Delinquency Penalties**: Late returns incur a penalty of **6% per month** of the unpaid tax, up to a statutory maximum penalty of **30%**, plus interest accruing at the federal underpayment rate plus 2%."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Furniture Order in Northern Virginia (6.00% Rate)",
    "scenario": "A resident of Arlington, Virginia orders a dining table for $1,200.00 with a separately stated $100.00 delivery freight fee from an online merchant.",
    "inputs": {
      "furnitureSubtotal": "$1,200.00",
      "deliveryFreightCharge": "$100.00 (Separately Stated)",
      "arlingtonCombinedRate": "6.00% (NVTA District)"
    },
    "steps": [
      {
        "label": "Taxable Furniture Base",
        "formula": "$1,200.00 merchandise",
        "amount": "$1,200.00",
        "note": "Furniture is taxable personal property"
      },
      {
        "label": "Freight Delivery Status",
        "formula": "Separately stated actual freight",
        "amount": "$0.00 tax",
        "note": "Exempt under Va. Code Ann. § 58.1-609.5(3)"
      },
      {
        "label": "Combined Virginia Tax (6.00%)",
        "formula": "$1,200.00 × 6.00%",
        "amount": "$72.00",
        "note": "Includes 4.3% state + 1.0% local + 0.7% NVTA"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$1,200.00 + $100.00 + $72.00",
        "amount": "$1,372.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Arlington, the 6.00% NVTA tax applies only to the $1,200 furniture base ($72.00 tax), keeping the separately stated $100 delivery fee completely tax-free."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from an $800.00 Richmond Invoice",
    "scenario": "A commercial vendor in Richmond (CVTA district, 6.00% combined rate) issues a flat $800.00 all-inclusive receipt for taxable supplies. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$800.00",
      "combinedRate": "6.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$800.00 ÷ (1 + 0.06)",
        "amount": "$754.72",
        "note": "Retained commercial revenue"
      },
      {
        "label": "Virginia Sales Tax Liability",
        "formula": "$800.00 - $754.72",
        "amount": "$45.28",
        "note": "Remitted on Form ST-9"
      },
      {
        "label": "Verification Calculation",
        "formula": "$754.72 × 6.00%",
        "amount": "$45.28",
        "note": "Reconciles exactly to $800.00 receipt"
      }
    ],
    "takeaway": "From an $800.00 tax-inclusive transaction in Richmond, the vendor retains $754.72 net revenue and owes $45.28 in sales tax to Virginia Tax."
  },
  "faqs": [
    {
      "question": "What is the standard sales tax rate in Virginia?",
      "answer": "The baseline sales tax rate in Virginia is 5.30% (4.30% state + 1.00% local). However, in Northern Virginia, Hampton Roads, and Central Virginia, the combined rate is 6.00%. In the Historic Triangle, the rate is 7.00%.",
      "sourceUrl": "https://www.tax.virginia.gov/retail-sales-and-use-tax"
    },
    {
      "question": "Are groceries subject to sales tax in Virginia?",
      "answer": "Qualifying food items for home consumption and essential hygiene products are subject only to a 1.00% local sales tax. The 1.50% state grocery tax was eliminated on January 1, 2023.",
      "sourceUrl": "https://www.tax.virginia.gov/food-tax"
    },
    {
      "question": "Does Virginia tax cloud software and SaaS subscriptions?",
      "answer": "No. Virginia classifies SaaS as an exempt service under Tax Ruling P.D. 05-44 because no tangible personal property or downloadable software is transferred to the customer.",
      "sourceUrl": "https://www.tax.virginia.gov/laws-rules-decisions/rulings-tax-commissioner/05-44"
    },
    {
      "question": "What is the Virginia economic nexus threshold for remote businesses?",
      "answer": "Out-of-state remote sellers establish economic nexus in Virginia when retail sales into the commonwealth exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.",
      "sourceUrl": "https://www.tax.virginia.gov/remote-sellers"
    },
    {
      "question": "When does Virginia hold its annual sales tax holiday?",
      "answer": "Virginia hosts an annual 3-day Sales Tax Holiday in early August, exempting qualifying clothing and footwear ($100 or less per item) and school supplies ($20 or less) from sales tax.",
      "sourceUrl": "https://www.tax.virginia.gov/virginia-sales-tax-holiday"
    }
  ]
};

export default virginiaContent;
