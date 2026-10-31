/**
 * Bespoke content profiles for US State Sales Tax (Part 1: 13 States)
 * Virginia, Arizona, Massachusetts, Tennessee, Indiana, Missouri, Maryland,
 * Wisconsin, Colorado, Minnesota, South Carolina, Alabama, Louisiana
 */

export const STATE_PROFILES_PART1 = {
  'virginia': {
    slug: 'virginia',
    name: 'Virginia',
    title: 'Virginia Sales Tax Calculator (5.30% to 7.00%) | FeeKit',
    metaDescription: 'Calculate Virginia sales tax with Department of Taxation rates (5.3% base, 6.0% Northern VA/Hampton Roads, 7.0% Historic Triangle). Sourcing, SaaS exemption, and $100k nexus.',
    h1: 'Virginia Sales Tax Calculator & Department of Taxation Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.tax.virginia.gov/retail-sales-and-use-tax',
    citation: 'Va. Code Ann. §§ 58.1-603, 58.1-604, 58.1-605, and Virginia Tax Ruling P.D. 05-44.',
    overview: 'The Commonwealth of Virginia imposes a statutory baseline retail sales and use tax rate of 5.30%, comprised of a 4.30% state levy and a mandatory 1.00% local option tax adopted by all cities and counties under Va. Code Ann. § 58.1-605. However, regional transportation districts enforce additional surcharges: the Northern Virginia Transportation Authority (NVTA) and Hampton Roads Transportation Accountability Commission (HRTAC) areas levy a combined 6.00% rate, the Central Virginia Transportation Authority (CVTA) region imposes 6.00%, and the Historic Triangle (Williamsburg, James City, and York County) levies a state-high combined rate of 7.00%. Out-of-state remote sellers establish economic nexus when gross sales reach $100,000 or 200 transactions annually.',
    sections: [
      {
        id: 'va-rates-and-regional-districts',
        title: 'Virginia Base Rate & Regional Transportation Surcharges (NVTA, HRTAC, CVTA)',
        body: `Virginia’s sales tax code distinguishes between the standard commonwealth baseline and specialized transportation districts:

- **Standard Commonwealth Rate**: **5.30%**. Applies across general rural and non-transit regions (e.g., Charlottesville, Roanoke, Lynchburg), combining 4.30% state tax with the 1.00% local option tax.
- **Northern Virginia (NVTA) District**: **6.00%**. Enforced in Fairfax, Arlington, Loudoun, and Prince William Counties, and the cities of Alexandria, Falls Church, Fairfax, Manassas, and Manassas Park (combines 4.3% state + 1.0% local + 0.70% regional transit tax).
- **Hampton Roads (HRTAC) District**: **6.00%**. Enforced in Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, and Portsmouth.
- **Central Virginia (CVTA) District**: **6.00%**. Imposed across the Richmond metropolitan area (City of Richmond, Henrico County, and Chesterfield County) to fund regional expressway and transit improvements.
- **Historic Triangle District**: **7.00%**. Enacted under special legislation for the City of Williamsburg, James City County, and York County (includes an additional 1.00% historic preservation tourism tax).`
      },
      {
        id: 'va-taxability-groceries-saas-services',
        title: 'Taxability in Virginia: 1% Grocery Tax, SaaS Exemption, and Shipping Rules',
        body: `Virginia maintains specific statutory exemptions designed to protect essential consumer staples and technology services:

1. **Food for Home Consumption (Groceries)**: **Taxed at 1.00% Local Only**. Under legislation effective January 1, 2023, the Commonwealth eliminated the 1.50% state sales tax on qualifying grocery items and essential personal hygiene products. Only the 1.00% local option tax remains, resulting in an effective grocery tax rate of exactly 1.00% statewide. Prepared hot meals, restaurant catering, and alcoholic beverages remain subject to full standard retail rates plus local meals taxes.
2. **Software as a Service (SaaS)**: **Exempt**. Virginia Tax Commissioner Ruling P.D. 05-44 established that cloud-hosted software and remote application hosting are classified as non-taxable personal or professional services under Va. Code Ann. § 58.1-609.5(1). Because the customer acquires no tangible personal property or downloaded physical media, SaaS subscriptions incur zero Virginia sales tax.
3. **Clothing and Footwear**: **Fully Taxable**. Standard apparel and footwear are subject to full combined rates year-round, except during the annual 3-day Sales Tax Holiday in August.
4. **Freight and Delivery Charges**: Separately stated transportation charges billed by a common carrier or postal service are exempt under Va. Code Ann. § 58.1-609.5(3). However, combined "shipping and handling" charges are deemed taxable in full.`
      },
      {
        id: 'va-economic-nexus-and-marketplace',
        title: 'Virginia Remote Seller Nexus ($100,000 / 200 Transactions) and Sourcing Rules',
        body: `Following House Bill 1722 and Senate Bill 1083, out-of-state merchants selling into Virginia face strict economic compliance standards:

- **Economic Nexus Rule**: A remote merchant must register and collect Virginia sales tax if, during the previous or current calendar year, the business achieves:
  - More than **$100,000 in gross revenue** from retail sales delivered into Virginia; **OR**
  - **200 or more separate retail transactions** with Virginia purchasers.
- **Destination Sourcing for Remote Sellers**: Remote merchants with economic nexus must source transactions to the customer’s **delivery destination**, collecting the precise local rate (5.30%, 6.00%, or 7.00%) applicable to the delivery address.
- **In-State Virginia Sellers (Origin Sourcing)**: In-state merchants with physical storefronts or warehouses in Virginia generally collect sales tax based on the **origin location** of the place of business where the sale is negotiated or fulfilled.
- **Marketplace Facilitator Law**: Amazon, eBay, Etsy, and other qualifying marketplace facilitators are legally obligated to collect and remit Virginia sales tax on all facilitated transactions, relieving third-party merchants of liability on marketplace orders.`
      },
      {
        id: 'va-filing-compliance-timely-discount',
        title: 'Permit Registration, 20th-of-the-Month Due Date, and Dealer Discount Rules',
        body: `Tax administration requirements enforced by Virginia Tax:

- **Sales Tax Registration**: Businesses must register online for a Virginia Sales and Use Tax Certificate of Registration using the **VATAX Online Services for Businesses** portal.
- **Filing Deadlines**: Standard sales tax returns (Form ST-9 for monthly or quarterly filers) are due on or before the **20th day of the month** following the close of the reporting period.
- **Dealer Discount (Timely Filing Compensation)**: Under Va. Code Ann. § 58.1-622, dealers who file and pay their returns on time are permitted to retain a small percentage of the state sales tax collected (ranging from 1.6% down to 0.8% depending on volume) as compensation for accounting expenses.
- **Delinquency Penalties**: Late returns incur a penalty of **6% per month** of the unpaid tax, up to a statutory maximum penalty of **30%**, plus interest accruing at the federal underpayment rate plus 2%.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Furniture Order in Northern Virginia (6.00% Rate)',
      scenario: 'A resident of Arlington, Virginia orders a dining table for $1,200.00 with a separately stated $100.00 delivery freight fee from an online merchant.',
      inputs: { furnitureSubtotal: '$1,200.00', deliveryFreightCharge: '$100.00 (Separately Stated)', arlingtonCombinedRate: '6.00% (NVTA District)' },
      steps: [
        { label: 'Taxable Furniture Base', formula: '$1,200.00 merchandise', amount: '$1,200.00', note: 'Furniture is taxable personal property' },
        { label: 'Freight Delivery Status', formula: 'Separately stated actual freight', amount: '$0.00 tax', note: 'Exempt under Va. Code Ann. § 58.1-609.5(3)' },
        { label: 'Combined Virginia Tax (6.00%)', formula: '$1,200.00 × 6.00%', amount: '$72.00', note: 'Includes 4.3% state + 1.0% local + 0.7% NVTA' },
        { label: 'Total Invoiced Checkout Amount', formula: '$1,200.00 + $100.00 + $72.00', amount: '$1,372.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Arlington, the 6.00% NVTA tax applies only to the $1,200 furniture base ($72.00 tax), keeping the separately stated $100 delivery fee completely tax-free.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from an $800.00 Richmond Invoice',
      scenario: 'A commercial vendor in Richmond (CVTA district, 6.00% combined rate) issues a flat $800.00 all-inclusive receipt for taxable supplies. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$800.00', combinedRate: '6.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$800.00 ÷ (1 + 0.06)', amount: '$754.72', note: 'Retained commercial revenue' },
        { label: 'Virginia Sales Tax Liability', formula: '$800.00 - $754.72', amount: '$45.28', note: 'Remitted on Form ST-9' },
        { label: 'Verification Calculation', formula: '$754.72 × 6.00%', amount: '$45.28', note: 'Reconciles exactly to $800.00 receipt' }
      ],
      takeaway: 'From an $800.00 tax-inclusive transaction in Richmond, the vendor retains $754.72 net revenue and owes $45.28 in sales tax to Virginia Tax.'
    },
    faqs: [
      { question: 'What is the standard sales tax rate in Virginia?', answer: 'The baseline sales tax rate in Virginia is 5.30% (4.30% state + 1.00% local). However, in Northern Virginia, Hampton Roads, and Central Virginia, the combined rate is 6.00%. In the Historic Triangle, the rate is 7.00%.', sourceUrl: 'https://www.tax.virginia.gov/retail-sales-and-use-tax' },
      { question: 'Are groceries subject to sales tax in Virginia?', answer: 'Qualifying food items for home consumption and essential hygiene products are subject only to a 1.00% local sales tax. The 1.50% state grocery tax was eliminated on January 1, 2023.', sourceUrl: 'https://www.tax.virginia.gov/food-tax' },
      { question: 'Does Virginia tax cloud software and SaaS subscriptions?', answer: 'No. Virginia classifies SaaS as an exempt service under Tax Ruling P.D. 05-44 because no tangible personal property or downloadable software is transferred to the customer.', sourceUrl: 'https://www.tax.virginia.gov/laws-rules-decisions/rulings-tax-commissioner/05-44' },
      { question: 'What is the Virginia economic nexus threshold for remote businesses?', answer: 'Out-of-state remote sellers establish economic nexus in Virginia when retail sales into the commonwealth exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.', sourceUrl: 'https://www.tax.virginia.gov/remote-sellers' },
      { question: 'When does Virginia hold its annual sales tax holiday?', answer: 'Virginia hosts an annual 3-day Sales Tax Holiday in early August, exempting qualifying clothing and footwear ($100 or less per item) and school supplies ($20 or less) from sales tax.', sourceUrl: 'https://www.tax.virginia.gov/virginia-sales-tax-holiday' }
    ]
  },

  'arizona': {
    slug: 'arizona',
    name: 'Arizona',
    title: 'Arizona Transaction Privilege Tax Calculator (5.60% to 11.20%) | FeeKit',
    metaDescription: 'Calculate Arizona Transaction Privilege Tax (TPT) with ADOR rates (5.6% state, max 11.20%). Model City Tax Code, city privilege rates, and $100k remote seller nexus.',
    h1: 'Arizona Transaction Privilege Tax (TPT) Calculator & ADOR Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://azdor.gov/transaction-privilege-tax',
    citation: 'A.R.S. Title 42, Chapter 5 (Transaction Privilege and Use Tax) and Arizona Model City Tax Code (MCTC).',
    overview: 'Unlike standard retail sales tax states where the tax is levied directly upon the consumer, Arizona levies a Transaction Privilege Tax (TPT) under A.R.S. Title 42. TPT is a gross receipts excise tax levied upon the vendor for the legal privilege of conducting business in the state of Arizona. While merchants routinely pass this economic cost forward to purchasers at checkout, the vendor remains legally liable for the tax. Arizona imposes a statewide baseline TPT rate of 5.60%, but county excise levies and highly independent municipal tax rates under the Model City Tax Code (MCTC) push combined privilege tax rates between 7.50% and 11.20% across major metropolitan areas.',
    sections: [
      {
        id: 'az-tpt-structure-and-city-codes',
        title: 'Arizona TPT Architecture: State, County, and Model City Tax Code Rates',
        body: `Arizona’s TPT system features two tiers of tax administration:

- **Statewide TPT Base Rate**: **5.60%**. Governed by the state legislature under A.R.S. § 42-5010, applying to retail classification business activities.
- **County Excise Taxes**: Counties levy optional surtaxes (typically 0.20% to 1.10%) to fund regional transportation and flood control. Maricopa County levies 0.70%, while Pima County imposes 0.50%.
- **Municipal Privilege Taxes (Model City Tax Code)**: Individual incorporated cities levy independent municipal privilege taxes that vary dramatically:
  - **Phoenix (Maricopa County)**: **8.60% combined rate** (5.60% state + 0.70% county + 2.30% city).
  - **Tucson (Pima County)**: **8.70% combined rate** (5.60% state + 0.50% county + 2.60% city).
  - **Scottsdale (Maricopa County)**: **8.05% combined rate** (5.60% state + 0.70% county + 1.75% city).
  - **Flagstaff (Coconino County)**: **9.181% combined rate** (5.60% state + 1.30% county + 2.281% city).
  - **Glendale (Maricopa County)**: **9.55% combined rate** (5.60% state + 0.70% county + 3.25% city).`
      },
      {
        id: 'az-taxability-saas-food-services',
        title: 'Arizona Taxability Rules: SaaS Status, Food Exemption, and Commercial Leases',
        body: `Product taxability under the Arizona Transaction Privilege Tax code:

1. **Software as a Service (SaaS)**: **State-Exempt, City-Specific Variations**. Under Arizona Private Taxpayer Ruling PTR 17-1, SaaS is not taxable at the state level under the retail classification, as the customer does not gain possession of tangible software. However, under the Model City Tax Code (MCTC Section 445), certain municipal jurisdictions previously asserted rental of personal property taxation on cloud software; current ADOR centralized administration generally treats true cloud hosting as non-taxable services.
2. **Groceries & Food for Home Consumption**: **Exempt at State Level, Taxable in Certain Cities**. Unprepared groceries are exempt from the 5.60% state TPT. However, cities that have opted out of the Model City food exemption levy local municipal privilege tax on food sales.
3. **Clothing and Apparel**: **Fully Taxable**. Everyday clothing and footwear are subject to full combined state, county, and city TPT rates.
4. **Commercial Lease TPT**: Historically, Arizona cities levied a commercial lease tax on landlords leasing business real estate. Legislation enacted in 2024 eliminated municipal commercial lease taxes effective December 31, 2024, providing substantial relief to commercial tenants.`
      },
      {
        id: 'az-economic-nexus-and-remote-seller-rules',
        title: 'Arizona Remote Seller Economic Nexus ($100,000 Threshold) and Centralization',
        body: `Following House Bill 2757, Arizona standardized remote vendor rules:

- **Economic Nexus Threshold**: A remote out-of-state vendor establishes economic nexus upon exceeding **$100,000 in gross sales** delivered into Arizona during the current or previous calendar year. Arizona does not enforce a transaction count test.
- **Uniform Single-Point Filing**: Remote sellers file a single consolidated return with the Arizona Department of Revenue (ADOR) via **AZTaxes.gov**, eliminating the historic burden of filing separate returns with individual non-program cities.
- **Destination Sourcing for Remote Sellers**: Out-of-state merchants with economic nexus calculate TPT based on the **delivery destination** of the Arizona customer, applying the exact state, county, and city rate for that location.
- **Marketplace Facilitator Legislation**: Platforms like Amazon, Walmart, and eBay collect and remit Arizona TPT on all facilitated third-party sales, relieving remote marketplace sellers of tax remittance obligations.`
      },
      {
        id: 'az-tpt-licensing-and-penalties',
        title: 'TPT License Application, Filing Deadlines, and Accounting Credits',
        body: `Compliance operations under the Arizona Department of Revenue:

- **TPT License Requirement**: Businesses must obtain a state TPT License before engaging in business. ADOR charges a $12 state license fee plus individual municipal license fees (ranging from $0 to $50 per city location).
- **Filing Deadlines**: TPT returns (Form TPT-2) are due on the **20th day of the month** following the reporting period, and become legally delinquent if not received by the second-to-last business day of that month.
- **Accounting Credit (Timely Filing Discount)**: Under A.R.S. § 42-5017, retailers who file and pay electronically on time are entitled to claim an accounting credit equal to **1.2% of the state tax due** (capped at $10,000 per calendar year).
- **Delinquency Penalties**: Late filings trigger a statutory penalty of **4.5% of the tax due per month** (up to 25% maximum), plus an additional 0.5% late payment penalty and statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Phoenix (8.60% Combined TPT)',
      scenario: 'A consumer in Phoenix, Arizona purchases $500.00 of plumbing supplies from a local retail supplier.',
      inputs: { supplySubtotal: '$500.00', arizonaStateTpt: '5.60%', maricopaCountyTax: '0.70%', phoenixCityTax: '2.30%', combinedTptRate: '8.60%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 retail merchandise', amount: '$500.00', note: 'Subject to retail classification TPT' },
        { label: 'State TPT Component (5.60%)', formula: '$500.00 × 5.60%', amount: '$28.00', note: 'State of Arizona share' },
        { label: 'Maricopa County Component (0.70%)', formula: '$500.00 × 0.70%', amount: '$3.50', note: 'County regional transit fund' },
        { label: 'City of Phoenix Component (2.30%)', formula: '$500.00 × 2.30%', amount: '$11.50', note: 'City of Phoenix municipal privilege tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $28.00 + $3.50 + $11.50', amount: '$543.00', note: 'Total customer payment' }
      ],
      takeaway: 'On a $500.00 purchase in Phoenix, the total 8.60% TPT equals $43.00, distributed across state ($28), county ($3.50), and city ($11.50) authorities.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $1,000.00 Tucson Receipt',
      scenario: 'A contractor in Tucson collects a flat $1,000.00 tax-inclusive payment for retail parts at an 8.70% combined TPT rate. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$1,000.00', combinedRate: '8.70%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$1,000.00 ÷ (1 + 0.087)', amount: '$919.96', note: 'True retail revenue retained' },
        { label: 'Arizona TPT Liability', formula: '$1,000.00 - $919.96', amount: '$80.04', note: 'Remitted to ADOR on Form TPT-2' },
        { label: 'Verification Math', formula: '$919.96 × 8.70%', amount: '$80.04', note: 'Reconciles perfectly to $1,000.00 receipt' }
      ],
      takeaway: 'From a $1,000.00 gross receipt in Tucson, the vendor retains $919.96 net revenue and owes $80.04 in Transaction Privilege Tax.'
    },
    faqs: [
      { question: 'What is Transaction Privilege Tax (TPT) in Arizona?', answer: 'TPT is an excise tax levied on the vendor for the privilege of conducting business in Arizona. Although merchants typically pass the tax to consumers at checkout, the business is legally responsible for remitting the tax to the Arizona Department of Revenue.', sourceUrl: 'https://azdor.gov/transaction-privilege-tax' },
      { question: 'What is the base sales tax rate in Arizona?', answer: 'The statewide base TPT rate in Arizona is 5.60%. However, county and municipal taxes push combined rates between 7.50% and 11.20% across most Arizona cities.', sourceUrl: 'https://azdor.gov/transaction-privilege-tax/rates' },
      { question: 'Does Arizona tax SaaS and cloud software?', answer: 'At the state level, SaaS is generally exempt under Arizona Private Taxpayer Ruling PTR 17-1 because no tangible personal property is transferred. Some cities historically asserted tax on software access, but centralized ADOR administration treats pure cloud services as non-taxable.', sourceUrl: 'https://azdor.gov/legal-research/private-taxpayer-rulings' },
      { question: 'What is the economic nexus threshold in Arizona?', answer: 'Out-of-state remote sellers establish economic nexus in Arizona when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.', sourceUrl: 'https://azdor.gov/transaction-privilege-tax/remote-sellers' },
      { question: 'Does Arizona have an annual sales tax holiday?', answer: 'No. Arizona does not host an annual sales tax holiday.', sourceUrl: 'https://azdor.gov/transaction-privilege-tax' }
    ]
  },

  'massachusetts': {
    slug: 'massachusetts',
    name: 'Massachusetts',
    title: 'Massachusetts Sales Tax Calculator (6.25% Flat Rate) | FeeKit',
    metaDescription: 'Calculate Massachusetts sales tax with DOR rates (6.25% flat). Covers the $175 clothing exemption threshold, taxable SaaS under 830 CMR 64H.1.3, and $100k nexus.',
    h1: 'Massachusetts Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.mass.gov/sales-and-use-tax',
    citation: 'Mass. Gen. Laws ch. 64H, §§ 1–33 and 830 CMR 64H.1.3 (Computer Industry Services and Products).',
    overview: 'The Commonwealth of Massachusetts levies a flat statewide sales and use tax rate of 6.25% under Mass. Gen. Laws ch. 64H. Under Massachusetts statutory law, cities, towns, and counties are strictly prohibited from assessing local option sales taxes on general retail merchandise, creating a uniform 6.25% checkout rate from Boston to Springfield and Cape Cod. Massachusetts features unique statutory taxability rules: everyday clothing is exempt up to $175 per item (with tax applying only to the excess value over $175), while Software as a Service (SaaS) and prewritten computer software are fully taxable at 6.25% under 830 CMR 64H.1.3. Out-of-state sellers establish economic nexus upon reaching $100,000 in annual Massachusetts sales.',
    sections: [
      {
        id: 'ma-flat-rate-structure',
        title: 'Uniform 6.25% Statewide Rate with Zero Municipal Option Surcharges',
        body: `Massachusetts maintains one of the simplest geographic sales tax structures in the United States:

- **Flat Statewide Baseline**: **6.25%**. Applies uniformly to all retail transactions across all 351 cities and towns in the commonwealth.
- **Zero Local Option Retail Taxes**: Unlike neighboring New York or Vermont, Massachusetts municipalities cannot enact local sales taxes on retail goods. A purchase in Boston, Cambridge, Worcester, or Lowell is taxed at the identical 6.25% rate.
- **Local Option Meals and Lodging Exceptions**: Municipalities are authorized to levy a 0.75% local option tax on restaurant meals (bringing the meals tax to 7.00%) and local lodging excise taxes (up to 6.00% or 6.50% in Boston) on hotel and short-term rental accommodations.`
      },
      {
        id: 'ma-clothing-threshold-saas-taxability',
        title: 'Taxability Rules: The $175 Clothing Exemption Rule & Taxable SaaS',
        body: `Massachusetts applies distinct rules to apparel, cloud software, and essential items:

1. **The $175 Clothing Exemption Threshold**: Under Mass. Gen. Laws ch. 64H, § 6(k), articles of clothing and footwear are exempt from sales tax up to **$175.00 per item**. For individual luxury apparel items exceeding $175, sales tax is assessed **only on the incremental dollar amount exceeding $175**:
   - A pair of shoes priced at **$150.00** is **100% tax-free**.
   - A designer coat priced at **$300.00** is taxed only on the $125.00 excess ($300 - $175). The 6.25% tax equals $7.81, producing an effective tax rate of just 2.60% on the total garment.
   - *Exceptions*: Specialty athletic protective gear, costumes, and separate accessories (handbags, umbrellas, jewelry) are taxable on their full value.
2. **Software as a Service (SaaS) & Canned Software**: **Fully Taxable (6.25%)**. Under 830 CMR 64H.1.3(14), Massachusetts considers cloud-based SaaS, remotely accessed applications, and canned software downloads fully subject to sales tax, as the state treats software access as the transfer of taxable standardized computer software.
3. **Groceries**: **100% Exempt**. Food products for human consumption (bread, milk, produce, unprepared meats) are exempt under Mass. Gen. Laws ch. 64H, § 6(h).
4. **Separately Stated Freight Charges**: Shipping and delivery charges are exempt from Massachusetts sales tax under M.G.L. c. 64H, § 1, provided the charge is stated separately on the invoice and occurs after the purchase.`
      },
      {
        id: 'ma-economic-nexus-and-marketplace',
        title: 'Massachusetts Economic Nexus ($100,000 Threshold) & Sourcing Rules',
        body: `Following the repeal of the historic "Cookie Nexus" rule and enactment of post-Wayfair standards under TIR 19-9:

- **Economic Nexus Standard**: A remote vendor must register and collect Massachusetts sales tax if total gross sales delivered into the commonwealth exceed **$100,000** during the current or prior calendar year. The previous 100-transaction count threshold was eliminated.
- **Destination Sourcing**: Massachusetts enforces destination sourcing for all delivered merchandise. In-state and out-of-state deliveries are taxed at the single statewide 6.25% rate.
- **Marketplace Facilitator Law**: Under Mass. Gen. Laws ch. 64H, § 1, marketplace facilitators (Amazon, Etsy, eBay, etc.) must collect and remit sales tax on sales made through their platform once facilitator sales exceed $100,000 annually.`
      },
      {
        id: 'ma-filing-compliance-and-penalties',
        title: 'MassTaxConnect Registration, Filing Deadlines, and Annual Sales Tax Holiday',
        body: `Administrative requirements enforced by the Massachusetts Department of Revenue (DOR):

- **MassTaxConnect Portal**: Remote and physical merchants register for a Sales and Use Tax account electronically through **MassTaxConnect (MTC)**.
- **Filing Deadlines**: Sales tax returns (Form ST-9) are due on or before the **30th day of the month** following the end of the reporting period (e.g. Q1 return due April 30).
- **Advance Payment Mandate**: Large taxpayers with annual sales tax collections exceeding $150,000 must remit an advance payment on the 25th day of the current month covering taxable sales through the 21st day.
- **Annual Sales Tax Holiday**: Massachusetts holds a statutory **Sales Tax Holiday weekend in mid-August** under Mass. Gen. Laws ch. 64H, § 6A. Retail purchases of tangible personal property priced at **$2,500 or less per item** are completely exempt from the 6.25% tax.
- **Delinquency Penalties**: Late returns incur a penalty of **1% per month** of the tax due (up to 25%), plus a late payment penalty of **1% per month** and interest at the federal short-term rate plus 4%.`
      }
    ],
    workedExample: {
      title: 'Worked Example: $300 Designer Winter Jacket ($175 Exemption Rule)',
      scenario: 'A consumer in Boston, Massachusetts purchases a $300.00 winter jacket and a $50.00 pair of gloves from a clothing boutique.',
      inputs: { jacketPrice: '$300.00', glovesPrice: '$50.00', clothingThreshold: '$175.00', statewideRate: '6.25%' },
      steps: [
        { label: 'Gloves Taxability', formula: '$50.00 < $175 threshold', amount: '$0.00 tax', note: 'Everyday apparel under $175 is 100% exempt' },
        { label: 'Jacket Taxable Incremental Base', formula: '$300.00 - $175.00 threshold', amount: '$125.00 taxable base', note: 'Tax applies only to portion over $175' },
        { label: 'Massachusetts Sales Tax (6.25%)', formula: '$125.00 × 6.25%', amount: '$7.81', note: 'Calculated on incremental base' },
        { label: 'Total Invoiced Checkout Amount', formula: '$300.00 + $50.00 + $7.81', amount: '$357.81', note: 'Effective tax rate is only 2.23% on order' }
      ],
      takeaway: 'On a $350 clothing order in Massachusetts, only $125 is taxable, resulting in just $7.81 in total sales tax.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600.00 B2B SaaS Receipt',
      scenario: 'A software company collects a flat $600.00 gross payment for taxable monthly cloud software in Cambridge, Massachusetts (6.25% rate). What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', massachusettsRate: '6.25%' },
      steps: [
        { label: 'Net Software Revenue Extraction', formula: '$600.00 ÷ (1 + 0.0625)', amount: '$564.71', note: 'Retained SaaS revenue' },
        { label: 'Massachusetts Sales Tax Liability', formula: '$600.00 - $564.71', amount: '$35.29', note: 'Remitted via MassTaxConnect' },
        { label: 'Verification Calculation', formula: '$564.71 × 6.25%', amount: '$35.29', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross SaaS invoice in Massachusetts, the software vendor retains $564.71 net revenue and owes $35.29 in sales tax.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Massachusetts for 2026?', answer: 'The sales tax rate in Massachusetts is a flat 6.25% statewide. Cities and towns are prohibited from levying local sales taxes on general retail merchandise.', sourceUrl: 'https://www.mass.gov/sales-and-use-tax' },
      { question: 'How does the Massachusetts clothing sales tax exemption work?', answer: 'Clothing and footwear are exempt up to $175 per item. For items priced over $175, sales tax is charged only on the portion of the price exceeding $175. For example, a $200 shirt is taxed on only $25 ($1.56 tax).', sourceUrl: 'https://www.mass.gov/service-details/clothing-sales-tax' },
      { question: 'Is Software as a Service (SaaS) taxable in Massachusetts?', answer: 'Yes. Massachusetts considers SaaS, cloud software, and prewritten computer software accessed over the internet fully taxable at the standard 6.25% rate under 830 CMR 64H.1.3.', sourceUrl: 'https://www.mass.gov/regulations/830-CMR-64h13-computer-industry-services-and-products' },
      { question: 'What is the Massachusetts economic nexus threshold for remote sellers?', answer: 'Out-of-state sellers establish economic nexus in Massachusetts when sales delivered into the commonwealth exceed $100,000 in gross revenue during the current or prior calendar year.', sourceUrl: 'https://www.mass.gov/technical-information-release/tir-19-9-remote-sellers-and-marketplace-facilitators' },
      { question: 'Does Massachusetts hold an annual sales tax holiday?', answer: 'Yes. Massachusetts hosts an annual 2-day Sales Tax Holiday weekend in mid-August, exempting qualifying retail purchases of tangible personal property up to $2,500 per item.', sourceUrl: 'https://www.mass.gov/info-details/massachusetts-sales-tax-holiday-faq' }
    ]
  }
};

Object.assign(STATE_PROFILES_PART1, {
  'tennessee': {
    slug: 'tennessee',
    name: 'Tennessee',
    title: 'Tennessee Sales Tax Calculator (7.00% to 9.75%) | FeeKit',
    metaDescription: 'Calculate Tennessee sales tax with Department of Revenue rates (7.0% state, max 9.75%). Single article local tax cap ($1,600/$3,200), taxable SaaS, and $100k nexus.',
    h1: 'Tennessee Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.tn.gov/revenue/taxes/sales-and-use-tax.html',
    citation: 'Tenn. Code Ann. Title 67, Chapter 6 (Sales and Use Tax) and Tenn. Comp. R. & Regs. 1320-05-01.',
    overview: 'Tennessee levies a statewide base sales and use tax rate of 7.00% under Tenn. Code Ann. § 67-6-202. Local counties and incorporated municipalities impose additional local option sales taxes ranging from 1.50% to 2.75%, pushing combined sales tax rates between 8.50% and 9.75% across major metropolitan areas (including Nashville, Memphis, and Knoxville). Tennessee features a unique "Single Article Local Tax Cap" that limits local sales tax to the first $1,600 of a single tangible personal property item, with a special state single article tax of 2.75% applied to value between $1,600 and $3,200. Out-of-state remote sellers establish economic nexus upon reaching $100,000 in annual Tennessee sales.',
    sections: [
      {
        id: 'tn-rates-and-local-caps',
        title: 'Tennessee Base Rate (7.00%) and Local Option Ceilings (Max 9.75%)',
        body: `Tennessee relies heavily on sales tax revenue as the state levies no individual earned income tax:

- **Statewide Baseline Rate**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable services.
- **Local Option Surtax Range**: **1.50% to 2.75%**. Set by county referendums under Tenn. Code Ann. § 67-6-702.
  - **Memphis (Shelby County)**: **9.75% combined rate** (7.00% state + 2.75% local tax, the statutory maximum in TN).
  - **Nashville (Davidson County)**: **9.25% combined rate** (7.00% state + 2.25% local tax).
  - **Knoxville (Knox County)**: **9.25% combined rate** (7.00% state + 2.25% local tax).
  - **Chattanooga (Hamilton County)**: **9.25% combined rate** (7.00% state + 2.25% local tax).`
      },
      {
        id: 'tn-single-article-tax-cap-rule',
        title: 'The Single Article Local Tax Cap ($1,600 / $3,200 Rule)',
        body: `One of Tennessee’s most distinctive statutory features is the Single Article Tax limitation under Tenn. Code Ann. § 67-6-702:

1. **First $1,600 of Purchase Price**: Subject to the full combined rate (7.00% state rate + local county rate, e.g. 2.25% in Nashville = 9.25%).
2. **Value from $1,600.01 to $3,200.00**: Local sales tax terminates at $1,600. The incremental $1,600 portion is subject to the **7.00% state base rate PLUS a special 2.75% state single article tax** (totaling 9.75% state tax, with $0.00 local tax).
3. **Value Above $3,200.00**: Only the standard **7.00% state base sales tax** applies. Zero local tax and zero state single article tax apply to the portion of price exceeding $3,200.
- *Applies to Single Articles*: This cap applies only to single items of tangible personal property (such as a piano, a diamond ring, or a piece of industrial machinery), not to aggregated baskets of separate goods.`
      },
      {
        id: 'tn-taxability-saas-food-services',
        title: 'Taxability Framework: Taxable SaaS, Groceries (4.00%), and Digital Goods',
        body: `Product taxability rules enforced by the Tennessee Department of Revenue:

- **Software as a Service (SaaS)**: **Fully Taxable (7.00% + Local)**. Under Tenn. Code Ann. § 67-6-231, remote access to computer software is statutorily treated as taxable computer software regardless of whether installed locally or hosted remotely in the cloud.
- **Food and Food Ingredients (Groceries)**: **Taxed at 4.00% State Rate + Full Local Tax**. Unprepared food items enjoy a reduced state rate of 4.00% (plus standard local tax, totaling 6.25% in Nashville). Prepared hot meals and candy are taxed at full standard rates.
- **Clothing and Footwear**: **Fully Taxable**. Apparel is subject to standard combined rates year-round (except during the annual July sales tax holiday).
- **Freight and Delivery Charges**: Under Tenn. Code Ann. § 67-6-102, delivery charges billed by the seller are included in the taxable sales price, even if separately stated on the invoice.`
      },
      {
        id: 'tn-economic-nexus-and-filing',
        title: 'Tennessee Remote Seller Nexus ($100,000) & TNTAP Portal Filing',
        body: `Compliance requirements administered by the Tennessee Department of Revenue:

- **Economic Nexus Standard**: Remote sellers establish nexus if gross sales into Tennessee exceed **$100,000** in the previous or current calendar year.
- **Standard Local Sourcing for Remote Sellers**: Remote merchants must collect the specific local option tax applicable to the purchaser's **destination delivery address** (or historically elect a uniform 2.25% local rate for remote sellers).
- **TNTAP Filing System**: Taxpayers remit sales and use tax returns electronically via the **Tennessee Taxpayer Access Point (TNTAP)**. Returns (Form SLS-450) are due on or before the **20th day of the month** following the reporting period.
- **Sales Tax Holiday**: Tennessee hosts an annual 3-day Sales Tax Holiday in late July covering clothing ($100 or less) and school supplies ($100 or less).`
      }
    ],
    workedExample: {
      title: 'Worked Example: $5,000 Commercial Machinery Sale in Nashville (Single Article Cap)',
      scenario: 'A contractor in Nashville, Tennessee (7.00% state + 2.25% local = 9.25% rate) purchases an industrial generator priced at $5,000.00.',
      inputs: { equipmentPrice: '$5,000.00', stateRate: '7.00%', localRate: '2.25%', singleArticleStateRate: '2.75%' },
      steps: [
        { label: 'First Tier ($0 - $1,600)', formula: '$1,600.00 × 9.25% (state + local)', amount: '$148.00', note: 'Subject to full 7% state + 2.25% local tax' },
        { label: 'Second Tier ($1,600.01 - $3,200)', formula: '$1,600.00 × 9.75% (7% state + 2.75% single article)', amount: '$156.00', note: 'State single article tax tier' },
        { label: 'Third Tier ($3,200.01 - $5,000)', formula: '$1,800.00 × 7.00% (state rate only)', amount: '$126.00', note: 'Exceeds $3,200 cap; zero local/single article tax' },
        { label: 'Total Tennessee Sales Tax', formula: '$148.00 + $156.00 + $126.00', amount: '$430.00', note: 'Effective tax rate is 8.60% (vs 9.25% un-capped)' },
        { label: 'Total Invoiced Checkout Amount', formula: '$5,000.00 + $430.00', amount: '$5,430.00', note: 'Saves $32.50 due to single article cap' }
      ],
      takeaway: 'Under Tennessee’s single article tax cap, an item priced at $5,000 in Nashville incurs $430.00 in tax rather than $462.50, saving the buyer $32.50.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from an $800 Memphis B2B SaaS Invoice',
      scenario: 'A Memphis digital agency collects an $800.00 tax-inclusive payment for cloud software at the maximum 9.75% combined rate. What is the net software revenue?',
      inputs: { totalReceiptCollected: '$800.00', memphisRate: '9.75%' },
      steps: [
        { label: 'Net Revenue Extraction Formula', formula: '$800.00 ÷ (1 + 0.0975)', amount: '$728.93', note: 'Retained SaaS revenue' },
        { label: 'Tennessee Sales Tax Owed', formula: '$800.00 - $728.93', amount: '$71.07', note: 'Remitted via TNTAP' },
        { label: 'Verification Calculation', formula: '$728.93 × 9.75%', amount: '$71.07', note: 'Reconciles exactly to $800.00 receipt' }
      ],
      takeaway: 'From an $800.00 gross receipt in Memphis, the vendor retains $728.93 net revenue and owes $71.07 in sales tax to the Department of Revenue.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Tennessee?', answer: 'The statewide base sales tax rate in Tennessee is 7.00%. Local county surtaxes add between 1.50% and 2.75%, making the total combined rate 8.50% to 9.75%.', sourceUrl: 'https://www.tn.gov/revenue/taxes/sales-and-use-tax.html' },
      { question: 'What is the Tennessee Single Article Tax Cap?', answer: 'Tennessee caps local sales tax at the first $1,600 of a single tangible personal property item. The portion between $1,600 and $3,200 incurs a 2.75% state single article tax, while value above $3,200 incurs only the 7.00% state rate.', sourceUrl: 'https://www.tn.gov/revenue/taxes/sales-and-use-tax/local-sales-tax.html' },
      { question: 'Is Software as a Service (SaaS) taxable in Tennessee?', answer: 'Yes. Tennessee treats remotely accessed software and cloud SaaS as fully taxable computer software under Tenn. Code Ann. § 67-6-231.', sourceUrl: 'https://www.tn.gov/revenue/taxes/sales-and-use-tax.html' },
      { question: 'Are groceries taxed at a lower rate in Tennessee?', answer: 'Yes. Food and food ingredients for home consumption are taxed at a reduced state rate of 4.00% (plus standard local county taxes), compared to the 7.00% standard rate.', sourceUrl: 'https://www.tn.gov/revenue/taxes/sales-and-use-tax.html' },
      { question: 'What is the economic nexus threshold in Tennessee?', answer: 'Out-of-state remote sellers establish economic nexus in Tennessee when gross sales into the state exceed $100,000 in the current or prior calendar year.', sourceUrl: 'https://www.tn.gov/revenue/taxes/sales-and-use-tax/remote-sellers.html' }
    ]
  },

  'indiana': {
    slug: 'indiana',
    name: 'Indiana',
    title: 'Indiana Sales Tax Calculator (7.00% Flat Rate) | FeeKit',
    metaDescription: 'Calculate Indiana sales tax with Department of Revenue rates (7.0% flat statewide). Zero local taxes, Information Bulletin #8 SaaS exemption, and $100k nexus.',
    h1: 'Indiana Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.in.gov/dor/business-tax/sales-tax/',
    citation: 'Ind. Code § 6-2.5 (State Gross Retail and Use Tax) and Sales Tax Information Bulletin #8.',
    overview: 'The State of Indiana enforces a flat statewide sales and use tax rate of 7.00% under Ind. Code § 6-2.5-2-2. Under Indiana statutory law, local municipalities, townships, and counties are prohibited from enacting local option retail sales taxes, guaranteeing a uniform 7.00% tax rate across all 92 counties (from Indianapolis and Fort Wayne to South Bend and Evansville). Indiana provides a complete statutory sales tax exemption for cloud software (SaaS) under Information Bulletin #8, while everyday clothing and footwear are fully taxable at 7.00%. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual gross sales delivered into Indiana.',
    sections: [
      {
        id: 'in-flat-rate-structure',
        title: 'Uniform 7.00% Statewide Rate Across All 92 Indiana Counties',
        body: `Indiana maintains a streamlined single-rate structure:

- **Flat Statewide Baseline**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable transactions statewide.
- **Zero Local Option Retail Surcharges**: Local counties and cities cannot levy local sales taxes on retail goods. Whether shopping in downtown Indianapolis (Marion County), Bloomington (Monroe County), or rural farmland, the sales tax rate is identical.
- **Specialized Food and Beverage Taxes (F&B)**: Select counties and municipalities levy a 1.00% or 2.00% Food and Beverage Tax on restaurant meals and prepared food (e.g., Marion County levies a 2.00% F&B tax, making restaurant meals 9.00%), but this does not apply to general retail merchandise.`
      },
      {
        id: 'in-saas-exemption-and-taxability',
        title: 'Taxability Framework: Complete SaaS Exemption & Full Clothing Taxation',
        body: `Product taxability rules administered by the Indiana Department of Revenue:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Sales Tax Information Bulletin #8, cloud-based SaaS, remotely accessed applications, and hosted cloud software are non-taxable services, provided the customer accesses software hosted remotely without obtaining ownership or local executable software.
2. **Everyday Clothing and Footwear**: **Fully Taxable (7.00%)**. Unlike New York or New Jersey, Indiana does not exempt clothing. Standard shirts, pants, coats, and shoes are subject to the full 7.00% rate.
3. **Groceries & Food for Home Consumption**: **Exempt**. Essential food products (meat, bread, produce, dairy) are exempt under Ind. Code § 6-2.5-5-20. Candy, soft drinks, and prepared hot food are taxable at 7.00%.
4. **Delivery and Freight Charges**: Under Ind. Code § 6-2.5-1-5, delivery charges billed by the seller are included in the taxable gross sales price, unless the underlying merchandise is exempt.`
      },
      {
        id: 'in-economic-nexus-and-remote-seller-rules',
        title: 'Indiana Economic Nexus ($100,000 Threshold) & Marketplace Facilitator Laws',
        body: `Following post-Wayfair legislative amendments under Senate Bill 228:

- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in Indiana upon reaching **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (The previous 200-transaction count threshold was formally repealed).
- **Destination Sourcing**: Indiana operates under destination sourcing rules for all delivered goods. Remote sellers collect Indiana’s uniform 7.00% state sales tax on all taxable deliveries.
- **Marketplace Facilitator Legislation**: Platforms such as Amazon, eBay, and Etsy are legally required to collect and remit Indiana sales tax on all sales made through their marketplaces, shielding individual third-party merchants from direct filing obligations.`
      },
      {
        id: 'in-filing-compliance-intime-portal',
        title: 'INTIME Registration, 20th-of-the-Month Deadlines, and Collection Allowances',
        body: `Administrative requirements enforced by the Indiana Department of Revenue (DOR):

- **INTIME Portal Registration**: Remote and in-state merchants register for a Registered Retail Merchant Certificate (RRMC) online via **INTIME** (Indiana Taxpayer Information Management Engine). There is a $25 registration fee for physical merchants.
- **Filing Deadlines**: Sales tax returns (Form ST-103) are due on or before the **20th day of the month** following the reporting period for monthly remitters (or the 30th day for small annual filers).
- **Collection Allowance (Timely Filing Discount)**: Under Ind. Code § 6-2.5-6-10, retailers who file and pay their returns on time may deduct a collection allowance ranging from 0.73% down to 0.26% of the sales tax collected as compensation.
- **Sales Tax Holiday**: Indiana does not hold an annual sales tax holiday.
- **Delinquency Penalties**: Late returns incur a penalty of **10% of the unpaid tax** plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Tool Purchase in Indianapolis (7.00% Flat Rate)',
      scenario: 'A contractor in Indianapolis, Indiana purchases $600.00 of commercial tools with a $40.00 delivery freight fee from an industrial supply company.',
      inputs: { toolsSubtotal: '$600.00', deliveryFreightCharge: '$40.00', statewideSalesTaxRate: '7.00%' },
      steps: [
        { label: 'Taxable Tools Base', formula: '$600.00 merchandise', amount: '$600.00', note: 'Tools are taxable personal property' },
        { label: 'Taxable Delivery Fee', formula: '$40.00 freight', amount: '$40.00', note: 'Delivery is taxable under Ind. Code § 6-2.5-1-5' },
        { label: 'Total Taxable Sales Base', formula: '$600.00 + $40.00', amount: '$640.00', note: 'Subject to 7.00% state sales tax' },
        { label: 'Indiana Sales Tax (7.00%)', formula: '$640.00 × 7.00%', amount: '$44.80', note: 'State sales tax remitted via INTIME' },
        { label: 'Total Invoiced Checkout Amount', formula: '$640.00 + $44.80', amount: '$684.80', note: 'Total customer payment' }
      ],
      takeaway: 'On a $600.00 tool order with $40 shipping in Indiana, the 7.00% tax applies to both merchandise and shipping, totaling $44.80.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from an $800.00 Gross Receipt in Indiana',
      scenario: 'A retail store in Fort Wayne collects an $800.00 tax-inclusive cash payment for taxable home goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$800.00', indianaRate: '7.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$800.00 ÷ (1 + 0.07)', amount: '$747.66', note: 'True retail revenue retained' },
        { label: 'Indiana Sales Tax Owed', formula: '$800.00 - $747.66', amount: '$52.34', note: 'Remitted to Indiana DOR' },
        { label: 'Verification Calculation', formula: '$747.66 × 7.00%', amount: '$52.34', note: 'Reconciles exactly to $800.00 receipt' }
      ],
      takeaway: 'From an $800.00 gross receipt in Indiana, the business retains $747.66 net revenue and owes $52.34 in sales tax to the state.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Indiana for 2026?', answer: 'The sales tax rate in Indiana is a flat 7.00% statewide. Municipalities and counties do not levy local retail sales taxes.', sourceUrl: 'https://www.in.gov/dor/business-tax/sales-tax/' },
      { question: 'Is Software as a Service (SaaS) taxable in Indiana?', answer: 'No. Under Sales Tax Information Bulletin #8, cloud SaaS and hosted software applications are 100% exempt from Indiana sales tax.', sourceUrl: 'https://www.in.gov/dor/files/reference/ib08.pdf' },
      { question: 'Is clothing taxable in Indiana?', answer: 'Yes. Clothing and footwear are fully taxable at Indiana’s 7.00% sales tax rate.', sourceUrl: 'https://www.in.gov/dor/business-tax/sales-tax/' },
      { question: 'What is the Indiana economic nexus threshold for remote sellers?', answer: 'Out-of-state remote sellers establish economic nexus in Indiana when retail sales delivered into the state exceed $100,000 in gross revenue during the current or prior calendar year.', sourceUrl: 'https://www.in.gov/dor/business-tax/remote-seller-information/' },
      { question: 'Does Indiana have a sales tax holiday?', answer: 'No. Indiana does not host an annual sales tax holiday.', sourceUrl: 'https://www.in.gov/dor/business-tax/sales-tax/' }
    ]
  }
});

Object.assign(STATE_PROFILES_PART1, {
  'missouri': {
    slug: 'missouri',
    name: 'Missouri',
    title: 'Missouri Sales Tax Calculator (4.225% to 10.35%) | FeeKit',
    metaDescription: 'Calculate Missouri sales tax with Department of Revenue rates (4.225% state, max 10.35%). Complex local taxing districts, Letter Ruling LR 7943 SaaS exemption, and $100k nexus.',
    h1: 'Missouri Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://dor.mo.gov/taxation/business/tax-types/sales-use/',
    citation: 'Mo. Rev. Stat. Chapter 144 (Sales and Use Tax) and Missouri Department of Revenue Letter Ruling LR 7943.',
    overview: 'The State of Missouri imposes a statutory base sales tax rate of 4.225% under Mo. Rev. Stat. § 144.020. However, Missouri possesses one of the most complex local taxing district environments in the country: overlapping county taxes, municipal levies, transportation development districts (TDDs), community improvement districts (CIDs), and ambulance districts push combined rates between 8.00% and 10.35% across major metropolitan areas (including Kansas City, St. Louis, and Springfield). Out-of-state remote sellers establish economic nexus under Missouri’s Wayfair legislation (effective 2023) upon reaching $100,000 in annual Missouri sales.',
    sections: [
      {
        id: 'mo-rates-and-overlapping-districts',
        title: 'Missouri Base Rate (4.225%) and Complex Overlapping Special Districts (TDD/CID)',
        body: `Missouri’s 4.225% state rate is split into dedicated statutory funds (3.00% General Revenue, 1.00% School District Trust Fund, 0.125% Conservation Commission Fund, and 0.10% Parks and Soils Fund). On top of the state base, localized surtaxes create significant rate variation:

- **Kansas City (Jackson County)**: **9.085% to 9.85%**. Combines 4.225% state + Jackson County + Kansas City municipal tax + transit/public safety levies.
- **St. Louis City**: **9.679% to 10.35%**. St. Louis operates as an independent city, layering municipal, police, transit, and zoo-museum district taxes.
- **Springfield (Greene County)**: **8.10% combined rate**. Combines 4.225% state + 1.25% Greene County + 2.625% City of Springfield sales taxes.
- **Special Taxing Districts (CIDs and TDDs)**: Across commercial shopping centers, property owners establish Community Improvement Districts (CIDs) and Transportation Development Districts (TDDs) that add an additional 0.50% to 1.00% sales tax, resulting in total rates exceeding 10.00% within specific commercial plazas.`
      },
      {
        id: 'mo-saas-exemption-and-shipping-rules',
        title: 'Taxability Framework: Non-Taxable SaaS, Groceries (1.225%), and Title-Passing Shipping',
        body: `Statutory product taxability under the Missouri Sales Tax Law:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Missouri Department of Revenue Letter Ruling LR 7943 and Letter Ruling LR 8177, remotely hosted cloud software is classified as a non-taxable service. Because customers access software over the internet without receiving tangible storage media or downloading executable software, SaaS is exempt.
2. **Food for Home Consumption (Groceries)**: **Taxed at Reduced 1.225% State Rate + Full Local Taxes**. Basic grocery staples are exempt from the 3.00% state general revenue tax, paying only the remaining 1.225% state rate plus local county/city sales taxes. Prepared food and dining remain subject to full rates.
3. **Clothing and Apparel**: **Fully Taxable**. Everyday clothing is subject to combined state and local rates year-round (except during the annual August 3-day sales tax holiday).
4. **Freight and Delivery Charges**: Under Mo. Code Regs. tit. 12, § 10-103.600, shipping charges are exempt from Missouri sales tax if the charge is separately stated on the invoice and the parties intended title to the merchandise to pass to the buyer before delivery.`
      },
      {
        id: 'mo-economic-nexus-and-sourcing',
        title: 'Missouri Remote Seller Nexus ($100,000) & Sourcing Regulations',
        body: `Following Senate Bills 153 & 97 (effective January 1, 2023), Missouri enacted comprehensive remote seller rules:

- **Economic Nexus Standard**: A remote out-of-state seller establishes economic nexus if gross retail sales delivered into Missouri exceed **$100,000** in the current or prior calendar year. (Missouri does not enforce a transaction count threshold).
- **Destination Sourcing for Remote Sellers**: Remote merchants with economic nexus collect Vendor's Use Tax based on the **delivery destination** of the Missouri purchaser.
- **In-State Sellers (Origin Sourcing)**: In-state Missouri merchants selling to in-state customers generally source sales to the **origin location** of their retail establishment.
- **Marketplace Facilitator Law**: Facilitators (such as Amazon and Walmart) collect and remit Missouri sales and use tax on all facilitated third-party sales, relieving independent sellers of tax collection duties on marketplace orders.`
      },
      {
        id: 'mo-filing-compliance-and-penalties',
        title: 'MyTax Missouri Portal, 20th-of-the-Month Deadlines, and Timely Filing Discounts',
        body: `Compliance administration enforced by the Missouri Department of Revenue:

- **MyTax Missouri Registration**: Businesses register for a Missouri Retail Sales Tax License online via **MyTax Missouri**.
- **Filing Deadlines**: Standard sales tax returns (Form 53-1) are due on or before the **20th day of the month** following the end of the reporting period.
- **Timely Payment Allowance**: Under Mo. Rev. Stat. § 144.140, retailers who file and pay returns on time are permitted to retain **2.00% of the sales tax collected** as a timely filing discount.
- **Annual Sales Tax Holiday**: Missouri holds an annual **3-day Sales Tax Holiday in early August**, exempting qualifying clothing ($100 or less per item), school supplies ($50 or less), and personal computers ($1,500 or less) from state and participating local taxes.
- **Delinquency Penalties**: Late returns incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Furniture Order in Kansas City (9.085% Rate)',
      scenario: 'A consumer in Kansas City, Missouri purchases an $800.00 sofa from a home furnishings retailer.',
      inputs: { sofaSubtotal: '$800.00', stateRate: '4.225%', kcLocalRate: '4.86%', combinedRate: '9.085%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$800.00 merchandise', amount: '$800.00', note: 'Furniture is taxable personal property' },
        { label: 'Missouri State Tax (4.225%)', formula: '$800.00 × 4.225%', amount: '$33.80', note: 'State of Missouri share' },
        { label: 'Kansas City Local Taxes (4.86%)', formula: '$800.00 × 4.86%', amount: '$38.88', note: 'Municipal + county + transit levies' },
        { label: 'Total Missouri Sales Tax', formula: '$33.80 + $38.88', amount: '$72.68', note: 'Combined 9.085% rate' },
        { label: 'Total Invoiced Checkout Amount', formula: '$800.00 + $72.68', amount: '$872.68', note: 'Total customer payment' }
      ],
      takeaway: 'In Kansas City, the 9.085% combined tax on an $800 furniture purchase equals $72.68, bringing the total invoice to $872.68.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500 St. Louis Receipt',
      scenario: 'A retail merchant in St. Louis collects a flat $500.00 tax-inclusive cash payment at a 9.679% combined rate. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', stLouisRate: '9.679%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.09679)', amount: '$455.88', note: 'True retail revenue retained' },
        { label: 'Missouri Sales Tax Owed', formula: '$500.00 - $455.88', amount: '$44.12', note: 'Remitted via MyTax Missouri' },
        { label: 'Verification Calculation', formula: '$455.88 × 9.679%', amount: '$44.12', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in St. Louis, the merchant retains $455.88 net revenue and owes $44.12 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Missouri for 2026?', answer: 'The statewide base sales tax rate in Missouri is 4.225%. Local city, county, and special taxing district taxes push combined rates between 8.00% and 10.35% across most urban areas.', sourceUrl: 'https://dor.mo.gov/taxation/business/tax-types/sales-use/' },
      { question: 'Is Software as a Service (SaaS) taxable in Missouri?', answer: 'No. Under Missouri Department of Revenue Letter Ruling LR 7943, cloud SaaS and hosted software services are 100% exempt from sales tax.', sourceUrl: 'https://dor.mo.gov/taxation/business/tax-types/sales-use/' },
      { question: 'Are groceries taxed at a lower rate in Missouri?', answer: 'Yes. Food products for home consumption enjoy a reduced state tax rate of 1.225% (plus applicable local taxes), compared to the standard 4.225% state rate.', sourceUrl: 'https://dor.mo.gov/taxation/business/tax-types/sales-use/' },
      { question: 'What is the economic nexus threshold in Missouri?', answer: 'Out-of-state remote sellers establish economic nexus in Missouri when retail sales delivered into the state exceed $100,000 in gross revenue during the current or preceding calendar year.', sourceUrl: 'https://dor.mo.gov/taxation/business/tax-types/sales-use/remote-sellers/' },
      { question: 'When is Missouri’s annual sales tax holiday?', answer: 'Missouri holds an annual 3-day Sales Tax Holiday during the first weekend of August, exempting qualifying clothing ($100 or less per item), school supplies ($50 or less), and computers ($1,500 or less).', sourceUrl: 'https://dor.mo.gov/taxation/business/tax-types/sales-use/holidays/back-to-school/' }
    ]
  },

  'maryland': {
    slug: 'maryland',
    name: 'Maryland',
    title: 'Maryland Sales Tax Calculator (6.00% Flat Rate) | FeeKit',
    metaDescription: 'Calculate Maryland sales and use tax with Comptroller rates (6.0% flat statewide). 2021 Digital Products Act (taxable SaaS), 9% alcohol tax, and $100k nexus.',
    h1: 'Maryland Sales Tax Calculator & Comptroller of Maryland Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.marylandtaxes.gov/business/sales-use/',
    citation: 'Md. Code Ann., Tax-Gen. Title 11 (Sales and Use Tax) and 2021 Digital Products Act (House Bill 932).',
    overview: 'The State of Maryland levies a uniform statewide sales and use tax rate of 6.00% under Md. Code Ann., Tax-Gen. § 11-102. Under Maryland statutory law, county governments and municipalities are prohibited from assessing general local option retail sales taxes, ensuring a standardized 6.00% checkout rate across all 23 counties and Baltimore City. However, Maryland enforces specialized tax rates on specific goods: alcoholic beverages are taxed at a statutory 9.00% rate. Furthermore, under the landmark 2021 Digital Products Act, Maryland became one of the first states to enact broad taxation on digital goods, SaaS, and electronically accessed software.',
    sections: [
      {
        id: 'md-rate-structure-alcohol-surtax',
        title: 'Uniform 6.00% Statewide Rate and the 9.00% Alcoholic Beverage Surtax',
        body: `Maryland’s sales tax code provides geographic uniformity with product-specific rate tiers:

- **Standard Statewide Baseline**: **6.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable customer services.
- **Zero Local Option Retail Taxes**: Local jurisdictions cannot levy municipal or county sales taxes on retail goods. The rate in Baltimore City, Bethesda (Montgomery County), Annapolis, and Frederick is identical at 6.00%.
- **Alcoholic Beverage Tax (9.00%)**: Under Md. Code Ann., Tax-Gen. § 11-104(g), sales of alcoholic beverages (beer, wine, liquor) for on-premises or off-premises consumption are taxed at a statutory rate of **9.00%** (a 3.00% surtax above the general rate).`
      },
      {
        id: 'md-digital-products-act-saas',
        title: 'The 2021 Digital Products Act: Comprehensive Taxation of SaaS and Digital Goods',
        body: `Maryland maintains one of the most comprehensive digital tax regimes in the United States:

1. **Software as a Service (SaaS) & Cloud Applications**: **Fully Taxable (6.00%)**. Enacted under House Bill 932 (effective March 2021), Maryland expanded sales tax to include digital products and digital codes. Under Md. Code Ann., Tax-Gen. § 11-101(c-4), SaaS, cloud computing access, remote software subscriptions, and digital media are treated as taxable digital products.
2. **Everyday Clothing and Footwear**: **Fully Taxable (6.00%)**. Clothing is taxable year-round in Maryland, except during the annual "Shop Maryland Tax-Free Week" in August.
3. **Groceries & Food Staples**: **100% Exempt**. Unprepared food products sold by grocery stores for human consumption are exempt under Md. Code Ann., Tax-Gen. § 11-206. Prepared food and restaurant dining are taxable at 6.00%.
4. **Delivery and Shipping Surcharges**: Under COMAR 03.06.01.26, separately stated transportation or delivery charges are non-taxable if delivery occurs directly by common carrier or postal service. Combined handling charges remain taxable.`
      },
      {
        id: 'md-economic-nexus-and-sourcing',
        title: 'Maryland Remote Seller Economic Nexus ($100,000 / 200 Transactions) and Sourcing',
        body: `Following post-Wayfair administrative rules codified in COMAR 03.06.01.33:

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Maryland upon exceeding:
  - **$100,000 in gross revenue** from retail sales delivered into Maryland; **OR**
  - **200 or more separate transactions** delivered into the state during the current or preceding calendar year.
- **Destination Sourcing**: Maryland enforces destination sourcing rules for all delivered goods. Remote sellers collect Maryland’s uniform 6.00% sales tax on all taxable shipments into the state.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, etc.) are legally mandated to collect and remit Maryland sales tax on all sales made through their platforms, shielding third-party sellers from direct filing obligations.`
      },
      {
        id: 'md-filing-compliance-and-penalties',
        title: 'Maryland Tax Connect Portal, 20th-of-the-Month Deadlines, and Tax-Free Week',
        body: `Tax administration requirements enforced by the Comptroller of Maryland:

- **Maryland Tax Connect Portal**: Remote and in-state merchants register for a Sales and Use Tax License electronically through **Maryland Tax Connect**.
- **Filing Deadlines**: Sales tax returns (Form 202) are due on or before the **20th day of the month** following the close of the reporting period for monthly remitters.
- **Timely Filing Vendor Credit**: Under Md. Code Ann., Tax-Gen. § 11-105, vendors who file and pay returns on time may deduct an expense credit of **1.2% of the first $6,000** of tax collected, and **0.9% of the excess**, capped at $500 per return.
- **Shop Maryland Tax-Free Week**: Maryland hosts an annual **7-day sales tax holiday during the second week of August**, exempting qualifying clothing and footwear priced at **$100 or less per item** from sales tax.
- **Delinquency Penalties**: Late returns incur a penalty of **10% of the unpaid tax**, plus statutory interest at 1% per month.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B SaaS Cloud Subscription in Baltimore (6.00% Rate)',
      scenario: 'A cybersecurity firm in Baltimore, Maryland purchases a $1,000.00 monthly cloud analytics software subscription.',
      inputs: { saasSubscriptionSubtotal: '$1,000.00', marylandTaxRate: '6.00% (2021 Digital Products Act)' },
      steps: [
        { label: 'Taxable SaaS Base', formula: '$1,000.00 software subscription', amount: '$1,000.00', note: 'Taxable under Md. Code Ann., Tax-Gen. § 11-101' },
        { label: 'Maryland Sales Tax (6.00%)', formula: '$1,000.00 × 6.00%', amount: '$60.00', note: 'State sales tax on digital products' },
        { label: 'Total Invoiced Checkout Amount', formula: '$1,000.00 + $60.00', amount: '$1,060.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Maryland’s Digital Products Act, cloud software subscriptions are fully taxable at 6.00%, adding $60.00 to a $1,000 monthly invoice.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500.00 Retail Receipt in Maryland',
      scenario: 'A retail store in Bethesda collects a flat $500.00 tax-inclusive payment for taxable merchandise. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', marylandRate: '6.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.06)', amount: '$471.70', note: 'True retail revenue retained' },
        { label: 'Maryland Sales Tax Owed', formula: '$500.00 - $471.70', amount: '$28.30', note: 'Remitted via Maryland Tax Connect' },
        { label: 'Verification Calculation', formula: '$471.70 × 6.00%', amount: '$28.30', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in Maryland, the retailer retains $471.70 net revenue and owes $28.30 in sales tax to the Comptroller.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Maryland for 2026?', answer: 'The sales tax rate in Maryland is a flat 6.00% statewide for general retail merchandise. Counties and cities do not levy local option retail sales taxes.', sourceUrl: 'https://www.marylandtaxes.gov/business/sales-use/' },
      { question: 'Does Maryland tax Software as a Service (SaaS)?', answer: 'Yes. Under the 2021 Digital Products Act (House Bill 932), Maryland taxes SaaS, cloud software, digital downloads, and electronic data services at the standard 6.00% rate.', sourceUrl: 'https://www.marylandtaxes.gov/business/sales-use/digital-products.php' },
      { question: 'What is Maryland’s sales tax on alcoholic beverages?', answer: 'Maryland imposes a specialized 9.00% sales and use tax rate on retail sales of alcoholic beverages (beer, wine, liquor) for both on-premises and off-premises consumption.', sourceUrl: 'https://www.marylandtaxes.gov/business/alcohol/' },
      { question: 'What is the economic nexus threshold in Maryland?', answer: 'Out-of-state remote sellers establish economic nexus in Maryland when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.', sourceUrl: 'https://www.marylandtaxes.gov/business/sales-use/remote-sellers.php' },
      { question: 'When does Maryland hold Shop Maryland Tax-Free Week?', answer: 'Shop Maryland Tax-Free Week takes place annually during the second week of August, exempting qualifying clothing and footwear priced at $100 or less per item from sales tax.', sourceUrl: 'https://www.marylandtaxes.gov/tax-free-week/' }
    ]
  }
});

Object.assign(STATE_PROFILES_PART1, {
  'wisconsin': {
    slug: 'wisconsin',
    name: 'Wisconsin',
    title: 'Wisconsin Sales Tax Calculator (5.00% to 7.90%) | FeeKit',
    metaDescription: 'Calculate Wisconsin sales tax with DOR rates (5.0% state, 0.5% county, 2.0% Milwaukee city). Pub 240 SaaS exemption, origin sourcing for in-state retail, and $100k nexus.',
    h1: 'Wisconsin Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx',
    citation: 'Wis. Stat. Chapter 77, Subchapter III (General Sales and Use Tax) and Wisconsin DOR Publication 240.',
    overview: 'The State of Wisconsin levies a statutory baseline sales and use tax rate of 5.00% under Wis. Stat. § 77.52. In addition to the state base, 68 of Wisconsin’s 72 counties adopt an optional 0.50% county sales tax, resulting in a standard combined rate of 5.50% across most municipalities (including Madison and Green Bay). However, following major bipartisan municipal reform legislation (2023 Wisconsin Act 12), the City of Milwaukee enacted a 2.00% city sales tax and Milwaukee County increased its county tax to 0.90%, creating a combined sales tax rate of 7.90% within the City of Milwaukee. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Wisconsin sales.',
    sections: [
      {
        id: 'wi-rates-and-milwaukee-act-12',
        title: 'Wisconsin Base Rate (5.00%), County Taxes, and Milwaukee Act 12 Rates (7.90%)',
        body: `Wisconsin’s sales tax code combines state, county, and select municipal rates:

- **Statewide Baseline Rate**: **5.00%**. Applies to all taxable retail transactions statewide.
- **County Discretionary Taxes**: **0.50%**. Adopted by the vast majority of Wisconsin counties (e.g., Dane County/Madison, Brown County/Green Bay). Only a small handful of rural counties (Manitowoc, Menominee, Waupaca, Winnebago) maintain a flat 5.00% rate.
- **Milwaukee Act 12 High-Rate District**: **7.90% total combined rate**. Under 2023 Wisconsin Act 12 (effective January 1, 2024):
  - Milwaukee County increased its county sales tax from 0.50% to **0.90%**.
  - The City of Milwaukee implemented a new **2.00% municipal sales tax**.
  - Purchases made or delivered within the City of Milwaukee incur a combined rate of **7.90%** (5.00% state + 0.90% county + 2.00% city).`
      },
      {
        id: 'wi-saas-exemption-and-taxability',
        title: 'Taxability Framework: Complete SaaS Exemption, Clothing, and Groceries',
        body: `Statutory product taxability under Wisconsin Department of Revenue regulations:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Wisconsin DOR Publication 240 and administrative rulings, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without downloading software locally. Prewritten software downloaded onto a local hard drive is taxable.
2. **Clothing and Apparel**: **Fully Taxable (5.00% - 7.90%)**. Everyday clothing and footwear are subject to full combined state and county rates year-round.
3. **Food and Food Ingredients (Groceries)**: **Exempt**. Unprepared food items for home consumption are exempt under Wis. Stat. § 77.54(20n). Candy, soft drinks, dietary supplements, and prepared hot meals are taxable.
4. **Freight and Delivery Surcharges**: Under Wis. Stat. § 77.51(15b), delivery charges billed by the retailer for taxable products are included in the taxable sales price, even if stated separately.`
      },
      {
        id: 'wi-economic-nexus-and-sourcing',
        title: 'Wisconsin Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework',
        body: `Following post-Wayfair administrative rule changes under 2018 Act 368:

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Wisconsin upon exceeding **$100,000 in gross sales** delivered into the state during the current or preceding calendar year. (The previous 200-transaction count threshold was formally eliminated by the legislature in 2021).
- **In-State Sourcing (Modified Origin/Destination)**: In-state retail storefront sales are sourced to the **retail store location**. In-state deliveries made by the seller or common carrier are sourced to the **delivery destination**.
- **Remote Out-of-State Sellers (Destination Sourcing)**: Out-of-state remote sellers collect the exact combined rate applicable to the customer's **destination delivery address**.
- **Marketplace Facilitator Legislation**: Platforms (Amazon, eBay, Etsy, Walmart) collect and remit Wisconsin sales tax on all marketplace orders, relieving third-party sellers of direct remittance duties.`
      },
      {
        id: 'wi-filing-compliance-my-tax-account',
        title: 'My Tax Account Portal, Filing Deadlines, and Retailer’s Discounts',
        body: `Tax compliance administration enforced by the Wisconsin Department of Revenue:

- **My Tax Account Portal**: Businesses register for a Wisconsin Business Tax Registration (BTR) certificate electronically through **My Tax Account**. The initial registration fee is $20.
- **Filing Deadlines**: Sales tax returns (Form ST-12) are due on the **last day of the month** following the close of the reporting period (e.g. Q1 return due April 30).
- **Retailer’s Discount (Timely Filing Compensation)**: Under Wis. Stat. § 77.61(4)(c), retailers who file and pay returns on time may deduct a retailer’s discount of **0.50% of the sales tax collected** (capped at $1,000 per reporting period).
- **Sales Tax Holiday**: Wisconsin does not host an annual sales tax holiday.
- **Delinquency Penalties**: Late filings incur a mandatory **$20 late filing fee** plus a statutory penalty of **5% per month** of the unpaid tax (up to 25% maximum) and statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Electronics Purchase in Milwaukee (7.90% Rate)',
      scenario: 'A consumer in downtown Milwaukee, Wisconsin purchases a $400.00 tablet from a consumer electronics retailer.',
      inputs: { tabletSubtotal: '$400.00', wisconsinStateRate: '5.00%', milwaukeeCountyRate: '0.90%', milwaukeeCityRate: '2.00%', combinedRate: '7.90%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$400.00 merchandise', amount: '$400.00', note: 'Subject to retail sales tax' },
        { label: 'Wisconsin State Component (5.00%)', formula: '$400.00 × 5.00%', amount: '$20.00', note: 'State general fund' },
        { label: 'Milwaukee County Component (0.90%)', formula: '$400.00 × 0.90%', amount: '$3.60', note: 'Act 12 county rate' },
        { label: 'City of Milwaukee Component (2.00%)', formula: '$400.00 × 2.00%', amount: '$8.00', note: 'Act 12 municipal rate' },
        { label: 'Total Invoiced Checkout Amount', formula: '$400.00 + $20.00 + $3.60 + $8.00', amount: '$431.60', note: 'Total customer payment' }
      ],
      takeaway: 'In the City of Milwaukee, the 7.90% combined rate adds $31.60 in total sales tax to a $400 electronics purchase, compared to $22.00 ($5.50%) in neighboring Madison.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600.00 Madison Receipt',
      scenario: 'A retail store in Madison, Wisconsin (5.50% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', combinedRate: '5.50%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.055)', amount: '$568.72', note: 'True retail revenue retained' },
        { label: 'Wisconsin Sales Tax Owed', formula: '$600.00 - $568.72', amount: '$31.28', note: 'Remitted to Wisconsin DOR' },
        { label: 'Verification Calculation', formula: '$568.72 × 5.50%', amount: '$31.28', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Madison, the business retains $568.72 net revenue and owes $31.28 in sales tax.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Wisconsin for 2026?', answer: 'The statewide base rate is 5.00%. Most counties levy a 0.50% local tax, making the rate 5.50%. However, in the City of Milwaukee, the combined rate is 7.90% following 2023 Wisconsin Act 12.', sourceUrl: 'https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx' },
      { question: 'Why is the sales tax rate in Milwaukee so high (7.90%)?', answer: 'Under 2023 Wisconsin Act 12, the City of Milwaukee enacted a 2.00% municipal sales tax and Milwaukee County increased its county rate from 0.50% to 0.90% to address municipal pension obligations, pushing the combined rate to 7.90%.', sourceUrl: 'https://www.revenue.wi.gov/Pages/TaxPro/2023/news-2023-11-28.aspx' },
      { question: 'Is Software as a Service (SaaS) taxable in Wisconsin?', answer: 'No. Under Wisconsin DOR Publication 240, SaaS and remotely hosted cloud software are 100% exempt from sales tax because customers do not take physical or downloaded possession of the software.', sourceUrl: 'https://www.revenue.wi.gov/DORPublications/pb240.pdf' },
      { question: 'What is the economic nexus threshold in Wisconsin?', answer: 'Out-of-state remote sellers establish economic nexus in Wisconsin when retail sales delivered into the state exceed $100,000 in gross revenue during the current or preceding calendar year.', sourceUrl: 'https://www.revenue.wi.gov/Pages/FAQS/ise-RemoteSellers.aspx' },
      { question: 'Does Wisconsin have an annual sales tax holiday?', answer: 'No. Wisconsin does not hold an annual sales tax holiday.', sourceUrl: 'https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx' }
    ]
  },

  'colorado': {
    slug: 'colorado',
    name: 'Colorado',
    title: 'Colorado Sales Tax Calculator (2.90% to 11.20%) | FeeKit',
    metaDescription: 'Calculate Colorado sales tax with DOR rates (2.9% state, max 11.20%). Home-Rule cities, SUTS portal, retail delivery fee ($0.29), and $100k nexus.',
    h1: 'Colorado Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.colorado.gov/sales-use-tax',
    citation: 'Colo. Rev. Stat. Title 39, Article 26 (Sales and Use Tax) and Colorado SUTS (Sales & Use Tax System).',
    overview: 'The State of Colorado imposes the lowest statewide base sales tax rate in the nation at 2.90% under C.R.S. § 39-26-104. However, Colorado operates the most decentralized local sales tax system in the United States due to constitutional "Home Rule" provisions under Article XX of the Colorado Constitution. Over 70 Home-Rule municipalities administer, audit, and collect their own local sales taxes independently from the state Department of Revenue, resulting in combined sales tax rates ranging from 7.00% to 11.20% across major cities (including Denver, Boulder, and Colorado Springs). Furthermore, Colorado levies a mandatory $0.29 Retail Delivery Fee on motorized deliveries. Remote sellers establish economic nexus upon reaching $100,000 in annual Colorado sales.',
    sections: [
      {
        id: 'co-home-rule-architecture-rates',
        title: 'The Home-Rule Divide: State-Collected vs Self-Administered Cities',
        body: `Colorado’s sales tax landscape is split into two distinct administrative categories:

- **State-Collected Jurisdictions**: The Colorado Department of Revenue (CDOR) collects the 2.90% state rate, statutory county taxes (typically 0.50% to 2.00%), and special district taxes (e.g., Regional Transportation District RTD 1.00%, Scientific and Cultural Facilities District SCFD 0.10%).
- **Self-Administered Home-Rule Cities**: Over 70 autonomous cities establish their own independent tax bases, taxability rules, and collection systems:
  - **Denver (Denver County Home-Rule)**: **8.81% combined rate** (2.90% state + 1.10% RTD/SCFD + 4.81% City/County of Denver home-rule tax).
  - **Boulder (Boulder County Home-Rule)**: **9.06% combined rate** (2.90% state + county + RTD + 3.86% municipal home-rule tax).
  - **Colorado Springs (El Paso County Home-Rule)**: **8.20% combined rate** (2.90% state + 1.23% county + 0.95% PPRTA transit + 3.12% municipal home-rule tax).
  - **Aurora (Adams/Arapahoe/Douglas Home-Rule)**: **8.50% combined rate** (combines state, county, RTD, and 3.75% City of Aurora tax).`
      },
      {
        id: 'co-retail-delivery-fee-and-saas',
        title: 'Unique Colorado Rules: The $0.29 Retail Delivery Fee & Home-Rule SaaS Divergence',
        body: `Colorado enforces unique statutory mechanisms found nowhere else in the country:

1. **The Retail Delivery Fee ($0.29 Flat per Delivery)**: Enacted under Senate Bill 21-260, Colorado imposes a mandatory **Retail Delivery Fee of $0.29** on every retail transaction delivered by motor vehicle to a location in Colorado that contains at least one taxable item. Small businesses with annual Colorado retail sales under $500,000 are exempt from collecting this fee.
2. **Software as a Service (SaaS) Divergence**:
   - *State Level*: **100% Exempt**. Under Colorado Department of Revenue FYI Sales 89, cloud-based software where the user does not take title or possession of tangible personal property is exempt from state sales tax.
   - *Home-Rule Municipalities*: **Taxable in Denver and Other Cities**. The City of Denver specifically treats SaaS as taxable under its home-rule municipal code as the rental or lease of computer software.
3. **Groceries**: **Exempt at State Level**. Food for domestic home consumption is exempt from the 2.90% state rate, but taxable in select home-rule cities.
4. **Clothing**: **Fully Taxable**. Apparel and footwear are taxable at standard combined rates across all Colorado jurisdictions.`
      },
      {
        id: 'co-suts-system-economic-nexus',
        title: 'The SUTS Portal and Colorado Economic Nexus ($100,000 Threshold)',
        body: `Following post-Wayfair administrative modernization:

- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in Colorado upon reaching **$100,000 in gross retail sales** delivered into the state during the current or previous calendar year.
- **The SUTS (Sales & Use Tax System) Portal**: To resolve historic compliance nightmares where remote merchants had to register and file with dozens of independent cities, the state created the **SUTS portal**. Remote merchants can register and file a single consolidated return that distributes local taxes to participating home-rule cities.
- **Destination Sourcing**: In 2019, Colorado transitioned completely to destination sourcing for delivered goods, requiring merchants to calculate rates based on the specific delivery address of the purchaser.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, etc.) must collect and remit Colorado state, county, special district, and participating home-rule city sales taxes on all facilitated sales.`
      },
      {
        id: 'co-filing-compliance-and-penalties',
        title: 'Revenue Online Registration, 20th-of-the-Month Deadlines, and Service Fee Discounts',
        body: `Tax compliance administration enforced by the Colorado Department of Revenue:

- **Revenue Online Registration**: Remote and in-state merchants obtain a Colorado Sales Tax License online via **Revenue Online**. A $16 deposit/fee applies for physical locations.
- **Filing Deadlines**: Sales tax returns (Form DR 0100) are due on or before the **20th day of the month** following the close of the reporting period.
- **Vendor Service Fee (Timely Filing Discount)**: Under C.R.S. § 39-26-105, timely filers may retain a statutory vendor fee of **4.00% of the state sales tax collected** (capped at $1,000 per filing period).
- **Sales Tax Holiday**: Colorado does not host an annual sales tax holiday.
- **Delinquency Penalties**: Delinquent returns incur a penalty of **10% of the tax due**, plus 0.5% per month (up to 18% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Home Goods Order Delivered in Denver (8.81% Rate + $0.29 RDF)',
      scenario: 'A resident in Denver, Colorado orders $300.00 of kitchenware delivered by motor vehicle to their home.',
      inputs: { merchandiseSubtotal: '$300.00', coloradoStateRate: '2.90%', rtdScfdRate: '1.10%', denverCityRate: '4.81%', combinedRate: '8.81%', retailDeliveryFee: '$0.29' },
      steps: [
        { label: 'Taxable Merchandise Base', formula: '$300.00 home goods', amount: '$300.00', note: 'Subject to combined state/local sales tax' },
        { label: 'Colorado State Tax (2.90%)', formula: '$300.00 × 2.90%', amount: '$8.70', note: 'State general fund' },
        { label: 'Special District Taxes (1.10%)', formula: '$300.00 × 1.10%', amount: '$3.30', note: 'RTD transit + SCFD cultural fund' },
        { label: 'City of Denver Home-Rule Tax (4.81%)', formula: '$300.00 × 4.81%', amount: '$14.43', note: 'City & County of Denver share' },
        { label: 'Total Sales Tax', formula: '$8.70 + $3.30 + $14.43', amount: '$26.43', note: 'Combined 8.81% sales tax' },
        { label: 'Colorado Retail Delivery Fee (RDF)', formula: 'Mandatory state delivery fee', amount: '$0.29', note: 'Senate Bill 21-260 motorized delivery levy' },
        { label: 'Total Invoiced Checkout Amount', formula: '$300.00 + $26.43 + $0.29', amount: '$326.72', note: 'Total customer payment' }
      ],
      takeaway: 'In Denver, a $300 motorized delivery order incurs $26.43 in combined sales tax (8.81%) plus Colorado’s mandatory $0.29 Retail Delivery Fee, totaling $326.72.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500.00 Boulder Receipt',
      scenario: 'A retail store in Boulder, Colorado (9.06% combined rate) collects an all-inclusive $500.00 cash payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', boulderRate: '9.06%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.0906)', amount: '$458.46', note: 'True retail revenue retained' },
        { label: 'Combined Colorado Sales Tax Owed', formula: '$500.00 - $458.46', amount: '$41.54', note: 'Distributed across state, county, RTD, and city' },
        { label: 'Verification Calculation', formula: '$458.46 × 9.06%', amount: '$41.54', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in Boulder, the business retains $458.46 net revenue and owes $41.54 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Colorado for 2026?', answer: 'The statewide base sales tax rate in Colorado is 2.90% (the lowest in the nation). However, county, special transit district, and municipal home-rule taxes push combined rates between 7.00% and 11.20% in most cities.', sourceUrl: 'https://tax.colorado.gov/sales-use-tax' },
      { question: 'What is a Home-Rule city in Colorado?', answer: 'Under the Colorado Constitution, over 70 Home-Rule cities (including Denver, Boulder, and Colorado Springs) independently administer, collect, and audit their own municipal sales taxes, establishing local taxability rules distinct from the state.', sourceUrl: 'https://tax.colorado.gov/home-rule-cities' },
      { question: 'What is the Colorado Retail Delivery Fee?', answer: 'Colorado imposes a statutory $0.29 Retail Delivery Fee on all retail deliveries made by motor vehicle that include at least one item subject to state sales tax. Small businesses with under $500,000 in Colorado sales are exempt.', sourceUrl: 'https://tax.colorado.gov/retail-delivery-fee' },
      { question: 'Is Software as a Service (SaaS) taxable in Colorado?', answer: 'SaaS is exempt from state sales tax under FYI Sales 89. However, several major Home-Rule cities (including the City of Denver) tax SaaS independently under municipal code as tangible software rental.', sourceUrl: 'https://tax.colorado.gov/sales-tax-digital-goods' },
      { question: 'What is the SUTS system in Colorado?', answer: 'SUTS (Sales & Use Tax System) is Colorado’s centralized portal allowing remote businesses to calculate local sales tax rates and file a single return covering state, county, and participating home-rule municipal taxes.', sourceUrl: 'https://tax.colorado.gov/SUTS' }
    ]
  }
});

Object.assign(STATE_PROFILES_PART1, {
  'minnesota': {
    slug: 'minnesota',
    name: 'Minnesota',
    title: 'Minnesota Sales Tax Calculator (6.875% to 9.025%) | FeeKit',
    metaDescription: 'Calculate Minnesota sales tax with Department of Revenue rates (6.875% base, max 9.025% Minneapolis). 100% clothing exemption, Revenue Notice 10-04 SaaS rules, and $100k nexus.',
    h1: 'Minnesota Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.revenue.state.mn.us/sales-and-use-tax',
    citation: 'Minn. Stat. Chapter 297A (General Sales and Use Taxes) and Revenue Notice 10-04.',
    overview: 'The State of Minnesota levies a statutory baseline sales and use tax rate of 6.875% under Minn. Stat. § 297A.62. Local counties, municipalities, and regional transit districts impose additional local option sales taxes, pushing combined rates between 7.375% and 9.025% across major metropolitan areas (including Minneapolis, St. Paul, and Duluth). Minnesota is famous for its broad consumer protections: everyday clothing and footwear are 100% exempt from sales tax with no dollar limitation under Minn. Stat. § 297A.67, and Software as a Service (SaaS) is non-taxable under Revenue Notice 10-04. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Minnesota sales or 200 separate transactions.',
    sections: [
      {
        id: 'mn-rates-and-metro-transit-taxes',
        title: 'Minnesota Base Rate (6.875%) and Twin Cities Metro Transit Surcharges',
        body: `Minnesota’s sales tax code combines a high state baseline with localized transit levies:

- **Statewide Baseline Rate**: **6.875%**. Dedicated by constitutional amendments to general state revenue, the clean water fund, parks and trails, and arts/cultural heritage.
- **Twin Cities Metropolitan Area Taxes**: Local option taxes enacted across the 7-county metropolitan region to fund regional highways and light rail transit:
  - **Minneapolis (Hennepin County)**: **9.025% combined rate** (6.875% state + transit + Hennepin County + City of Minneapolis municipal tax).
  - **St. Paul (Ramsey County)**: **8.875% combined rate** (6.875% state + Ramsey County + St. Paul 1.00% sales tax).
  - **Duluth (St. Louis County)**: **9.125% combined rate** (combines state base with St. Louis County and City of Duluth municipal taxes).
  - **Rochester (Olmsted County)**: **8.125% combined rate** (combines state base with Olmsted County and Rochester sales taxes).`
      },
      {
        id: 'mn-clothing-exemption-and-saas',
        title: 'Taxability Framework: Complete Clothing Exemption & SaaS Non-Taxability',
        body: `Statutory product taxability under Minnesota Department of Revenue regulations:

1. **Everyday Clothing and Footwear**: **100% Exempt Statewide**. Under Minn. Stat. § 297A.67, subd. 8, all standard articles of clothing and footwear designed for human wear are exempt from sales tax year-round with **no price ceiling**. A $2,000 winter coat or formal dress is completely tax-free at checkout.
   - *Taxable Apparel Exceptions*: Specialty athletic protective gear (ski boots, football pads), costumes, and belt buckles/cufflinks sold separately remain taxable.
2. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Minnesota Revenue Notice 10-04, cloud SaaS, remotely accessed software, and web-based application hosting are non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.
3. **Groceries & Food Staples**: **Exempt**. Essential food products for home consumption are exempt under Minn. Stat. § 297A.67, subd. 2. Candy, soft drinks, and prepared hot food are taxable at full standard rates.
4. **Freight and Delivery Charges**: Under Minn. Stat. § 297A.61, subd. 7, delivery charges billed by the seller for taxable merchandise are fully taxable, regardless of whether stated separately on the invoice.`
      },
      {
        id: 'mn-economic-nexus-and-sourcing',
        title: 'Minnesota Remote Seller Economic Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Following post-Wayfair statutory rules codified in Minn. Stat. § 297A.66:

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Minnesota upon exceeding either statutory threshold in the prior 12-month period:
  - More than **$100,000 in retail sales** delivered into Minnesota; **OR**
  - **200 or more separate retail transactions** delivered into the state.
- **Destination Sourcing**: Minnesota operates under destination sourcing rules for all delivered goods. Remote sellers collect the exact combined state and local rate applicable to the customer's delivery address.
- **Marketplace Facilitator Legislation**: Platforms such as Amazon, eBay, and Etsy must collect and remit Minnesota sales tax on all sales made through their marketplaces, shielding independent third-party sellers from direct filing liabilities.`
      },
      {
        id: 'mn-filing-compliance-and-penalties',
        title: 'Minnesota e-Services Registration, 20th-of-the-Month Deadlines, and Penalties',
        body: `Compliance requirements administered by the Minnesota Department of Revenue:

- **e-Services Portal Registration**: Remote and physical merchants obtain a Minnesota Tax ID Number electronically through **Minnesota e-Services**.
- **Filing Deadlines**: Sales tax returns (Form ST3) are due on or before the **20th day of the month** following the end of the reporting period for monthly remitters.
- **Sales Tax Holiday**: Minnesota does not hold an annual sales tax holiday (everyday clothing and footwear are already exempt year-round).
- **Delinquency Penalties**: Late returns incur a penalty of **5% of the unpaid tax** for the first 30 days, plus an additional 5% for each subsequent 30-day period (up to 15% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Apparel vs Electronics in Minneapolis (9.025% Rate)',
      scenario: 'A consumer in Minneapolis, Minnesota purchases a $200.00 winter jacket and a $300.00 pair of wireless headphones.',
      inputs: { jacketPrice: '$200.00 (Everyday Clothing)', headphonesPrice: '$300.00 (Electronics)', minneapolisCombinedRate: '9.025%' },
      steps: [
        { label: 'Clothing Taxability Status', formula: '$200.00 everyday apparel', amount: '$0.00 tax', note: '100% exempt under Minn. Stat. § 297A.67' },
        { label: 'Taxable Electronics Base', formula: '$300.00 headphones', amount: '$300.00', note: 'Subject to combined Minneapolis sales tax' },
        { label: 'Minnesota Sales Tax (9.025%)', formula: '$300.00 × 9.025%', amount: '$27.08', note: 'Applies only to taxable headphones' },
        { label: 'Total Invoiced Checkout Amount', formula: '$200.00 + $300.00 + $27.08', amount: '$527.08', note: 'Total customer payment' }
      ],
      takeaway: 'In Minneapolis, the 9.025% tax applies only to the $300 headphones ($27.08 tax), keeping the $200 winter jacket completely tax-free.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500 St. Paul Receipt',
      scenario: 'A retail store in St. Paul (8.875% combined rate) collects an all-inclusive $500.00 cash payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', stPaulRate: '8.875%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.08875)', amount: '$459.24', note: 'True retail revenue retained' },
        { label: 'Minnesota Sales Tax Owed', formula: '$500.00 - $459.24', amount: '$40.76', note: 'Remitted to Minnesota DOR' },
        { label: 'Verification Calculation', formula: '$459.24 × 8.875%', amount: '$40.76', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in St. Paul, the business retains $459.24 net revenue and owes $40.76 in sales tax.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Minnesota for 2026?', answer: 'The statewide base rate in Minnesota is 6.875%. Local city, county, and transit taxes push combined rates between 7.375% and 9.025% across major metropolitan areas.', sourceUrl: 'https://www.revenue.state.mn.us/sales-and-use-tax' },
      { question: 'Is clothing really completely tax-free in Minnesota?', answer: 'Yes. Under Minn. Stat. § 297A.67, everyday clothing and footwear are 100% exempt from sales tax year-round with no dollar cap. Only specialty protective sports gear and costume apparel are taxable.', sourceUrl: 'https://www.revenue.state.mn.us/clothing' },
      { question: 'Is Software as a Service (SaaS) taxable in Minnesota?', answer: 'No. Under Minnesota Revenue Notice 10-04, cloud SaaS and hosted software access are classified as non-taxable services because customers do not take physical possession of executable software.', sourceUrl: 'https://www.revenue.state.mn.us/revenue-notices/10-04' },
      { question: 'What is the economic nexus threshold in Minnesota?', answer: 'Out-of-state remote sellers establish economic nexus in Minnesota when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the prior 12 months.', sourceUrl: 'https://www.revenue.state.mn.us/remote-sellers' },
      { question: 'Does Minnesota hold an annual sales tax holiday?', answer: 'No. Minnesota does not hold an annual sales tax holiday because everyday clothing, footwear, and groceries are already exempt year-round.', sourceUrl: 'https://www.revenue.state.mn.us/sales-and-use-tax' }
    ]
  },

  'south-carolina': {
    slug: 'south-carolina',
    name: 'South Carolina',
    title: 'South Carolina Sales Tax Calculator (6.00% to 9.00%) | FeeKit',
    metaDescription: 'Calculate South Carolina sales tax with SCDOR rates (6.0% state, max 9.0% Charleston). Taxable SaaS under Revenue Ruling 03-5, annual August tax holiday, and $100k nexus.',
    h1: 'South Carolina Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://dor.sc.gov/tax/sales',
    citation: 'S.C. Code Ann. Title 12, Chapter 36 (Sales and Use Tax Act) and SC Revenue Ruling 03-5.',
    overview: 'The State of South Carolina imposes a statutory base sales and use tax rate of 6.00% under S.C. Code Ann. § 12-36-910. Local county governments are authorized to levy discretionary local option sales taxes—including transportation, capital project, and education capital improvement taxes—ranging from 1.00% to 3.00%, creating combined rates as high as 9.00% in major urban and tourist centers (including Charleston, Columbia, and Myrtle Beach). South Carolina treats Software as a Service (SaaS) as fully taxable communication services under SC Revenue Ruling 03-5. Remote out-of-state merchants establish economic nexus upon reaching $100,000 in gross sales delivered into South Carolina.',
    sections: [
      {
        id: 'sc-rates-and-local-county-taxes',
        title: 'South Carolina Base Rate (6.00%) and County Option Surtaxes (Max 9.00%)',
        body: `South Carolina’s sales tax code combines a uniform state baseline with county-level capital project levies:

- **Statewide Baseline Rate**: **6.00%**. Applies to all retail sales of tangible personal property and taxable communication services statewide.
- **Local Option Surtaxes**: Counties enact local option sales taxes (LOST), capital project sales taxes (CPST), and transportation taxes:
  - **Charleston (Charleston County)**: **9.00% combined rate** (6.00% state + 1.00% transportation tax + 1.00% education tax + 1.00% local option tax).
  - **Columbia (Richland County)**: **8.00% combined rate** (6.00% state + 1.00% local option + 1.00% transportation tax).
  - **Myrtle Beach (Horry County)**: **8.00% combined rate** (6.00% state + 1.00% education tax + 1.00% tourist development tax).
  - **Greenville (Greenville County)**: **6.00% flat rate** (State baseline with zero county discretionary tax).`
      },
      {
        id: 'sc-saas-taxability-communication-services',
        title: 'Taxability Framework: Taxable SaaS as Communication Services & Groceries',
        body: `Statutory product taxability enforced by the South Carolina Department of Revenue (SCDOR):

1. **Software as a Service (SaaS)**: **Fully Taxable (6.00% + Local)**. Under SC Revenue Ruling 03-5 and SC Private Letter Ruling 12-1, South Carolina treats cloud software, remotely accessed applications, and database access as taxable communication services under S.C. Code Ann. § 12-36-910(B)(3).
2. **Clothing and Apparel**: **Fully Taxable**. Everyday clothing and footwear are subject to full combined rates year-round, except during the annual August sales tax holiday.
3. **Groceries & Food for Home Consumption**: **Exempt from State Tax (0.00%), Local Taxes May Apply**. Basic grocery staples are exempt from the 6.00% state sales tax under S.C. Code Ann. § 12-36-2120(75). However, certain local option county taxes still apply to food. Prepared hot meals are taxable at full rates.
4. **Freight and Delivery Charges**: Freight and shipping charges billed in connection with the sale of taxable property are taxable under S.C. Code Ann. § 12-36-90(1)(b), regardless of separate stating.`
      },
      {
        id: 'sc-economic-nexus-and-sourcing',
        title: 'South Carolina Remote Seller Nexus ($100,000 Threshold) & Sourcing Rules',
        body: `Following post-Wayfair statutory rules codified in SC Revenue Ruling 18-14:

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in South Carolina upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (South Carolina has no transaction count threshold).
- **Destination Sourcing**: South Carolina enforces destination sourcing for all delivered merchandise. Remote sellers collect the exact combined state and county rate applicable to the delivery address.
- **Marketplace Facilitator Law**: Under Senate Bill 214 (effective November 2019), marketplace facilitators (Amazon, eBay, Etsy, Walmart) collect and remit South Carolina sales tax on all marketplace orders, relieving third-party sellers of direct liability.`
      },
      {
        id: 'sc-filing-compliance-mydorway',
        title: 'MyDORWAY Portal Registration, 20th-of-the-Month Deadlines, and Tax Holiday',
        body: `Compliance requirements administered by the South Carolina Department of Revenue:

- **MyDORWAY Portal Registration**: Remote and physical merchants obtain a South Carolina Retail License online via **MyDORWAY**. A $50 license fee applies per physical retail location.
- **Filing Deadlines**: Sales tax returns (Form ST-3) are due on or before the **20th day of the month** following the reporting period for monthly remitters.
- **Timely Filing Discount**: Under S.C. Code Ann. § 12-36-2610, retailers who file and pay returns on time may deduct a taxpayer discount of **3.00% of the state sales tax collected** (capped at $3,000 per fiscal year).
- **Annual Sales Tax Holiday**: South Carolina holds an annual **3-day Sales Tax Holiday during the first weekend of August**, exempting qualifying clothing, school supplies, computers, and musical instruments with **no price ceiling**.
- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Furniture Order in Charleston (9.00% Rate)',
      scenario: 'A resident in Charleston, South Carolina purchases an $800.00 dining set from a retail furniture showroom.',
      inputs: { furnitureSubtotal: '$800.00', stateRate: '6.00%', charlestonLocalRate: '3.00%', combinedRate: '9.00%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$800.00 merchandise', amount: '$800.00', note: 'Furniture is taxable personal property' },
        { label: 'South Carolina State Tax (6.00%)', formula: '$800.00 × 6.00%', amount: '$48.00', note: 'State general fund' },
        { label: 'Charleston County Taxes (3.00%)', formula: '$800.00 × 3.00%', amount: '$24.00', note: 'Transportation + education + local option' },
        { label: 'Total South Carolina Sales Tax', formula: '$48.00 + $24.00', amount: '$72.00', note: 'Combined 9.00% sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$800.00 + $72.00', amount: '$872.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Charleston, the 9.00% combined tax on an $800 furniture purchase equals $72.00, bringing total checkout cost to $872.00.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Columbia Receipt',
      scenario: 'A retail store in Columbia, South Carolina (8.00% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', columbiaRate: '8.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.08)', amount: '$555.56', note: 'True retail revenue retained' },
        { label: 'South Carolina Sales Tax Owed', formula: '$600.00 - $555.56', amount: '$44.44', note: 'Remitted via MyDORWAY' },
        { label: 'Verification Calculation', formula: '$555.56 × 8.00%', amount: '$44.44', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Columbia, the business retains $555.56 net revenue and owes $44.44 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in South Carolina for 2026?', answer: 'The statewide base sales tax rate in South Carolina is 6.00%. Local county surtaxes add between 1.00% and 3.00%, making the total combined rate 6.00% to 9.00%.', sourceUrl: 'https://dor.sc.gov/tax/sales' },
      { question: 'Is Software as a Service (SaaS) taxable in South Carolina?', answer: 'Yes. South Carolina treats cloud software and SaaS subscriptions as taxable communication services under SC Revenue Ruling 03-5.', sourceUrl: 'https://dor.sc.gov/policy-index/RR03-5.pdf' },
      { question: 'Are groceries subject to sales tax in South Carolina?', answer: 'Unprepared food items for home consumption are exempt from the 6.00% state sales tax, although certain county local option taxes still apply to groceries in select jurisdictions.', sourceUrl: 'https://dor.sc.gov/tax/sales/food-tax' },
      { question: 'What is the economic nexus threshold in South Carolina?', answer: 'Out-of-state remote sellers establish economic nexus in South Carolina when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.', sourceUrl: 'https://dor.sc.gov/tax/sales/remote-sellers' },
      { question: 'When is South Carolina’s annual sales tax holiday?', answer: 'South Carolina hosts an annual 3-day Sales Tax Holiday during the first weekend of August, exempting qualifying clothing, school supplies, computers, and musical instruments with no dollar cap.', sourceUrl: 'https://dor.sc.gov/tax-free-weekend' }
    ]
  },

  'alabama': {
    slug: 'alabama',
    name: 'Alabama',
    title: 'Alabama Sales Tax Calculator (4.00% to 11.50%) | FeeKit',
    metaDescription: 'Calculate Alabama sales tax with ADOR rates (4.0% state, max 11.50%). Simplified Sellers Use Tax (SSUT 8.0%), destination sourcing, and $250k nexus.',
    h1: 'Alabama Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://revenue.alabama.gov/sales-use/',
    citation: 'Ala. Code Title 40, Chapter 23 (Sales and Use Taxes) and Simplified Sellers Use Tax Program (SSUT).',
    overview: 'The State of Alabama levies a statewide base sales and use tax rate of 4.00% under Ala. Code § 40-23-2. However, Alabama possesses some of the highest local option sales tax rates in the nation: overlapping county and municipal taxes routinely add between 5.00% and 7.50%, creating combined retail sales tax rates as high as 10.00% to 11.50% across major cities (including Birmingham, Mobile, and Montgomery). To simplify compliance for out-of-state e-commerce merchants, Alabama established the optional Simplified Sellers Use Tax (SSUT) program, which allows qualifying remote sellers to collect a flat 8.00% tax statewide. Remote sellers establish economic nexus upon reaching $250,000 in annual Alabama sales.',
    sections: [
      {
        id: 'al-rates-and-local-surplus-taxes',
        title: 'Alabama Base Rate (4.00%) and Steep Local Municipal Levies (Max 11.50%)',
        body: `Alabama’s tax structure features a low state baseline offset by aggressive municipal and county taxes:

- **Statewide Baseline Rate**: **4.00%**. Applies to all retail sales of tangible personal property.
- **Municipal and County Discretionary Surtaxes**: Local cities and counties independently administer or levy local sales taxes:
  - **Birmingham (Jefferson County)**: **10.00% combined rate** (4.00% state + 2.00% county + 4.00% City of Birmingham tax).
  - **Mobile (Mobile County)**: **10.00% combined rate** (4.00% state + 1.00% county + 5.00% City of Mobile tax).
  - **Montgomery (Montgomery County)**: **10.00% combined rate** (4.00% state + 3.50% county + 2.50% city tax).
  - **High-Rate Municipal Plazas**: Certain localized commercial zones layer additional improvement district taxes, reaching the statutory maximum ceiling of **11.50%**.`
      },
      {
        id: 'al-ssut-program-for-remote-sellers',
        title: 'The Simplified Sellers Use Tax (SSUT) Flat 8.00% Option for Remote Vendors',
        body: `To eliminate the burden of tracking hundreds of separate Alabama municipal jurisdictions, the legislature created the SSUT:

1. **Flat 8.00% Rate Option**: Eligible out-of-state remote sellers with no physical presence in Alabama can apply to collect a flat **8.00% Simplified Sellers Use Tax (SSUT)** on all sales delivered into Alabama, regardless of local city/county boundaries.
2. **Revenue Distribution**: The state retains 50% of the SSUT revenue, while the remaining 50% is redistributed to local counties and municipalities.
3. **Purchaser Benefit**: Collecting the flat 8.00% SSUT protects remote merchants and customers from local audits and local municipal sales tax assessments.`
      },
      {
        id: 'al-taxability-saas-food-clothing',
        title: 'Taxability Framework: Non-Taxable SaaS, Groceries (3.00%), and Clothing',
        body: `Statutory product taxability under Alabama Department of Revenue regulations:

- **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Alabama Department of Revenue administrative rulings and Revenue Ruling 08-011, cloud-based SaaS and remotely accessed software are non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.
- **Groceries & Food for Home Consumption**: **Taxed at 3.00% State Rate + Full Local Taxes**. Effective September 1, 2023 (under Act 2023-554), Alabama reduced its state sales tax on food staples from 4.00% to 3.00% (with provisions for future reductions). Local municipal and county taxes still apply in full.
- **Clothing and Apparel**: **Fully Taxable (4.00% - 10.00%)**. Clothing is taxable year-round at combined rates (except during the annual July sales tax holiday).
- **Freight and Delivery Charges**: Delivery charges billed by the seller are taxable unless transportation is arranged and paid independently by the purchaser under Ala. Admin. Code r. 810-6-1-.178.`
      },
      {
        id: 'al-economic-nexus-and-filing',
        title: 'Alabama Economic Nexus ($250,000 Threshold) & My Alabama Taxes (MAT)',
        body: `Compliance requirements administered by the Alabama Department of Revenue:

- **Economic Nexus Standard**: Under Ala. Admin. Code r. 810-6-2-.90.03, remote sellers establish economic nexus when retail sales delivered into Alabama exceed **$250,000** during the previous calendar year.
- **My Alabama Taxes (MAT) Portal**: Remote and in-state merchants register and remit sales tax electronically via **My Alabama Taxes (MAT)**.
- **Filing Deadlines**: Sales tax returns are due on or before the **20th day of the month** following the reporting period for monthly remitters.
- **Timely Filing Discount**: Under Ala. Code § 40-23-36, retailers filing returns on time receive a discount of 5% on the first $100 of tax and 2% on the remainder, capped at $400 per month.
- **Annual Sales Tax Holiday**: Alabama holds an annual **3-day Back-to-School Sales Tax Holiday in late July**, exempting qualifying clothing ($100 or less) and school supplies ($50 or less).`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Tool Purchase in Birmingham (10.00% Rate vs 8.00% SSUT)',
      scenario: 'A resident in Birmingham, Alabama purchases $500.00 of power equipment from an in-state dealer (10.00% local rate) versus an SSUT remote seller (8.00% flat rate).',
      inputs: { equipmentSubtotal: '$500.00', birminghamInStateRate: '10.00%', remoteSsutRate: '8.00%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 equipment', amount: '$500.00', note: 'Subject to Alabama sales tax' },
        { label: 'In-State Birmingham Tax (10.00%)', formula: '$500.00 × 10.00%', amount: '$50.00', note: '4% state + 2% county + 4% city' },
        { label: 'Remote SSUT Tax (8.00%)', formula: '$500.00 × 8.00%', amount: '$40.00', note: 'Flat Simplified Sellers Use Tax' },
        { label: 'SSUT Remote Consumer Savings', formula: '$50.00 - $40.00', amount: '$10.00 savings', note: 'Remote seller rate advantage' },
        { label: 'Total Invoiced Checkout Amount (SSUT)', formula: '$500.00 + $40.00', amount: '$540.00', note: 'Total customer payment via SSUT' }
      ],
      takeaway: 'In Birmingham, an in-state purchase incurs $50.00 in sales tax (10.00%), while a remote merchant enrolled in the SSUT program charges $40.00 (8.00%), saving the consumer $10.00.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $750 Mobile Receipt',
      scenario: 'A retail store in Mobile, Alabama (10.00% combined rate) collects an all-inclusive $750.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$750.00', mobileRate: '10.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$750.00 ÷ (1 + 0.10)', amount: '$681.82', note: 'True retail revenue retained' },
        { label: 'Alabama Sales Tax Owed', formula: '$750.00 - $681.82', amount: '$68.18', note: 'Remitted via My Alabama Taxes' },
        { label: 'Verification Calculation', formula: '$681.82 × 10.00%', amount: '$68.18', note: 'Reconciles exactly to $750.00 receipt' }
      ],
      takeaway: 'From a $750.00 gross receipt in Mobile, the business retains $681.82 net revenue and owes $68.18 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Alabama for 2026?', answer: 'The statewide base sales tax rate in Alabama is 4.00%. Local city and county taxes push combined rates between 8.00% and 11.50% across most metropolitan areas.', sourceUrl: 'https://revenue.alabama.gov/sales-use/' },
      { question: 'What is the Simplified Sellers Use Tax (SSUT) in Alabama?', answer: 'SSUT is an optional program for eligible remote out-of-state sellers allowing them to collect a flat 8.00% tax on all sales delivered into Alabama, rather than calculating individual local rates across hundreds of municipalities.', sourceUrl: 'https://revenue.alabama.gov/sales-use/simplified-sellers-use-tax-ssut/' },
      { question: 'Is Software as a Service (SaaS) taxable in Alabama?', answer: 'No. Under Alabama Department of Revenue administrative rulings and Revenue Ruling 08-011, cloud SaaS and hosted software access are 100% exempt from sales tax.', sourceUrl: 'https://revenue.alabama.gov/sales-use/' },
      { question: 'What is the economic nexus threshold in Alabama?', answer: 'Out-of-state remote sellers establish economic nexus in Alabama when retail sales delivered into the state exceed $250,000 in gross revenue during the previous calendar year.', sourceUrl: 'https://revenue.alabama.gov/sales-use/remote-sellers/' },
      { question: 'When is Alabama’s annual sales tax holiday?', answer: 'Alabama holds an annual 3-day Back-to-School Sales Tax Holiday in late July, exempting qualifying clothing ($100 or less per item) and school supplies ($50 or less).', sourceUrl: 'https://revenue.alabama.gov/sales-use/sales-tax-holidays/' }
    ]
  },

  'louisiana': {
    slug: 'louisiana',
    name: 'Louisiana',
    title: 'Louisiana Sales Tax Calculator (5.00% to 12.00%) | FeeKit',
    metaDescription: 'Calculate Louisiana sales tax with verified rates (5.0% state base post-Act 11, max 12.0%). Parish sales tax, Uniform Local Sales Tax Board, and $100k nexus.',
    h1: 'Louisiana Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://revenue.louisiana.gov/SalesTax',
    citation: 'La. Rev. Stat. Title 47, Subtitle II, Chapter 2 (Sales Tax) and 2024 Special Legislative Session Act 11.',
    overview: 'The State of Louisiana levies a statutory baseline sales and use tax rate of 5.00%, enacted under 2024 Special Legislative Session Act 11 (effective 2025 through 2029) to replace the historic 4.45% rate. Louisiana possesses the most decentralized, parish-administered local sales tax structure in the country: each of Louisiana’s 64 parishes functions as an independent taxing jurisdiction with its own parish sales tax collector, levying municipal and parish sales taxes ranging from 4.00% to 7.00%. Combined retail sales tax rates range from 9.00% to 12.00% across major commercial centers (including New Orleans, Baton Rouge, and Shreveport). Out-of-state remote sellers establish economic nexus upon reaching $100,000 in annual Louisiana sales or 200 separate transactions.',
    sections: [
      {
        id: 'la-rates-and-parish-structure',
        title: 'Louisiana 5.00% State Rate (Act 11) and Independent Parish Sales Taxes (Max 12.00%)',
        body: `Louisiana’s sales tax code combines an updated state baseline with independent parish collections:

- **Statewide Baseline Rate**: **5.00%**. Enacted under 2024 Act 11 (effective 2025–2029), standardizing state-level sales tax at 5.00%.
- **Parish Sales and Use Taxes**: Administered independently by Parish School Boards or Parish Commissions under the Louisiana Uniform Local Sales Tax Board:
  - **New Orleans (Orleans Parish)**: **10.45% combined rate** (5.00% state + 5.45% Orleans Parish municipal/school board tax).
  - **Baton Rouge (East Baton Rouge Parish)**: **10.50% combined rate** (5.00% state + 5.50% parish/city taxes).
  - **Shreveport (Caddo Parish)**: **10.35% combined rate** (5.00% state + 5.35% parish and municipal taxes).
  - **Monroe (Ouachita Parish)**: **11.99% combined rate** (High combined parish, city, and economic district levies approaching the 12.00% statutory ceiling).`
      },
      {
        id: 'la-saas-and-product-taxability',
        title: 'Taxability Framework: Non-Taxable SaaS, Groceries, and Clothing',
        body: `Statutory product taxability under Louisiana Department of Revenue regulations:

1. **Software as a Service (SaaS)**: **State-Exempt**. Under Louisiana Revenue Information Bulletin RIB 12-005, cloud-based SaaS and remote software hosting are classified as non-taxable services, as no tangible personal property is transferred. However, prewritten software downloaded onto a customer's computer is taxable tangible property.
2. **Food for Home Consumption (Groceries)**: **Exempt at State Level, Taxable in Certain Parishes**. Basic grocery staples are exempt from the 5.00% state sales tax under Article VII, Section 2.2 of the Louisiana Constitution. However, many individual parishes continue to levy local parish sales taxes on food.
3. **Clothing and Apparel**: **Fully Taxable (5.00% - 11.50%)**. Everyday clothing and footwear are fully taxable at combined state and parish rates year-round.
4. **Freight and Delivery Surcharges**: Under La. Rev. Stat. § 47:301(13)(a), freight and delivery charges billed by the seller are included in the taxable gross sales price, regardless of whether stated separately on the invoice.`
      },
      {
        id: 'la-economic-nexus-and-remote-seller-commission',
        title: 'Louisiana Remote Seller Nexus ($100,000 / 200 Transactions) & Uniform Commission',
        body: `Following post-Wayfair statutory reforms administered by the Louisiana Sales and Use Tax Commission for Remote Sellers (LARS):

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Louisiana upon exceeding either threshold in the prior or current calendar year:
  - More than **$100,000 in gross revenue** from sales delivered into Louisiana; **OR**
  - **200 or more separate transactions** delivered into the state.
- **Centralized Remote Seller Filing**: Remote sellers file a single consolidated return through the **Louisiana Remote Sellers Commission (LARS)** portal, which automatically calculates and distributes parish and municipal taxes.
- **Destination Sourcing**: Remote merchants collect sales tax based on the **delivery destination** of the Louisiana customer, applying the exact combined state and parish rate for that location.
- **Marketplace Facilitator Legislation**: Platforms (Amazon, eBay, Walmart, etc.) collect and remit Louisiana state and parish sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'la-filing-compliance-latap',
        title: 'LaTAP Portal Registration, 20th-of-the-Month Deadlines, and Penalties',
        body: `Tax compliance administration enforced by the Louisiana Department of Revenue (LDR):

- **LaTAP Portal Registration**: Physical merchants register for a sales tax account online via **LaTAP** (Louisiana Taxpayer Access Point). In-state physical merchants must also register separately with each individual Parish Tax Collector where they operate.
- **Filing Deadlines**: Sales tax returns (Form R-1029) are due on or before the **20th day of the month** following the close of the reporting period.
- **Vendor Compensation (Timely Filing Discount)**: Under La. Rev. Stat. § 47:306, retailers who file and pay returns on time may deduct a vendor compensation discount of **0.84% of the state sales tax collected** (capped at $1,500 per month).
- **Sales Tax Holiday**: Louisiana does not currently host an annual sales tax holiday.
- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus a 5% late payment penalty and statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Merchandise Order in New Orleans (10.45% Rate)',
      scenario: 'A consumer in New Orleans, Louisiana purchases $500.00 of commercial goods from a retail distributor.',
      inputs: { merchandiseSubtotal: '$500.00', louisianaStateRate: '5.00% (Act 11)', orleansParishRate: '5.45%', combinedRate: '10.45%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 merchandise', amount: '$500.00', note: 'Subject to combined state/parish sales tax' },
        { label: 'Louisiana State Tax (5.00%)', formula: '$500.00 × 5.00%', amount: '$25.00', note: 'State general fund under 2024 Act 11' },
        { label: 'Orleans Parish Local Taxes (5.45%)', formula: '$500.00 × 5.45%', amount: '$27.25', note: 'City of New Orleans & School Board share' },
        { label: 'Total Louisiana Sales Tax', formula: '$25.00 + $27.25', amount: '$52.25', note: 'Combined 10.45% sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $52.25', amount: '$552.25', note: 'Total customer payment' }
      ],
      takeaway: 'In New Orleans, the 10.45% combined sales tax on a $500 purchase equals $52.25, split between the State of Louisiana ($25.00) and Orleans Parish ($27.25).'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Baton Rouge Receipt',
      scenario: 'A retail store in Baton Rouge (10.50% combined rate) collects an all-inclusive $600.00 cash payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', batonRougeRate: '10.50%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.105)', amount: '$542.99', note: 'True retail revenue retained' },
        { label: 'Combined Louisiana Sales Tax Owed', formula: '$600.00 - $542.99', amount: '$57.01', note: 'Split between LDR and East Baton Rouge Parish' },
        { label: 'Verification Calculation', formula: '$542.99 × 10.50%', amount: '$57.01', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Baton Rouge, the business retains $542.99 net revenue and owes $57.01 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Louisiana for 2026?', answer: 'The statewide base sales tax rate in Louisiana is 5.00%, enacted under 2024 Special Legislative Session Act 11 (effective 2025–2029). Independent parish sales taxes add 4.00% to 7.00%, pushing combined rates between 9.00% and 12.00%.', sourceUrl: 'https://revenue.louisiana.gov/SalesTax' },
      { question: 'Why does Louisiana have parish sales tax collectors?', answer: 'Under the Louisiana Constitution, each parish independently administers, audits, and collects its own local sales taxes. Remote sellers use the centralized Louisiana Remote Sellers Commission (LARS) to file a single return.', sourceUrl: 'https://revenue.louisiana.gov/SalesTax/RemoteSellers' },
      { question: 'Is Software as a Service (SaaS) taxable in Louisiana?', answer: 'At the state level, SaaS is exempt under Revenue Information Bulletin RIB 12-005 because no tangible personal property is transferred. Prewritten downloadable software is taxable.', sourceUrl: 'https://revenue.louisiana.gov/LawServices/RIB%2012-005.pdf' },
      { question: 'What is the economic nexus threshold in Louisiana?', answer: 'Out-of-state remote sellers establish economic nexus in Louisiana when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or prior calendar year.', sourceUrl: 'https://revenue.louisiana.gov/SalesTax/RemoteSellers' },
      { question: 'Does Louisiana have an annual sales tax holiday?', answer: 'No. Louisiana does not currently hold an annual sales tax holiday.', sourceUrl: 'https://revenue.louisiana.gov/SalesTax' }
    ]
  }
});
