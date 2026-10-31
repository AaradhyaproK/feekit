/**
 * Bespoke content profiles for US State Sales Tax (Part 2: 13 States)
 * Kentucky, Oregon, Oklahoma, Connecticut, Utah, Iowa, Nevada,
 * Arkansas, Mississippi, Kansas, New Mexico, Nebraska, Idaho
 */

export const STATE_PROFILES_PART2 = {
  'kentucky': {
    slug: 'kentucky',
    name: 'Kentucky',
    title: 'Kentucky Sales Tax Calculator (6.00% Flat Rate) | FeeKit',
    metaDescription: 'Calculate Kentucky sales tax with Department of Revenue rates (6.0% flat statewide). Zero local taxes, taxable SaaS under House Bill 8, and $100k nexus.',
    h1: 'Kentucky Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://revenue.ky.gov/Business/Sales-Use-Tax/',
    citation: 'Ky. Rev. Stat. Chapter 139 (Sales and Use Taxes) and 2022 House Bill 8 (Service Tax Expansion).',
    overview: 'The Commonwealth of Kentucky imposes a uniform statewide sales and use tax rate of 6.00% under KRS 139.200. Kentucky statutory law strictly prohibits cities, counties, and municipal governments from enacting local option sales taxes on general retail goods, guaranteeing an identical 6.00% sales tax rate from Louisville and Lexington to Bowling Green and Paducah. In 2023, under landmark tax reform legislation (House Bill 8), Kentucky significantly expanded its sales tax base to include over 30 service categories, formally codifying Software as a Service (SaaS), prewritten computer software access, and cloud computing as fully taxable services at 6.00%. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in gross sales or 200 separate transactions.',
    sections: [
      {
        id: 'ky-flat-rate-structure',
        title: 'Uniform 6.00% Statewide Rate Across All 120 Kentucky Counties',
        body: `Kentucky’s sales tax code provides complete geographic uniformity:

- **Flat Statewide Baseline**: **6.00%**. Applies to all retail sales of tangible personal property, digital property, and taxable services.
- **Zero Local Option Retail Taxes**: Local jurisdictions cannot levy municipal or county sales taxes on retail goods. A purchase in Louisville (Jefferson County), Lexington (Fayette County), or rural Appalachia incurs the exact same 6.00% rate.
- **Local Transient Room Taxes**: Cities and counties are authorized to levy local transient room taxes (ranging from 1.00% to 7.00%) on hotel and short-term accommodations, but this excise does not apply to consumer goods or software.`
      },
      {
        id: 'ky-hb8-saas-and-services-expansion',
        title: 'House Bill 8 Reform: Full Taxation of SaaS, Cloud Computing, and Services',
        body: `Statutory product taxability under Kentucky Department of Revenue regulations:

1. **Software as a Service (SaaS) & Cloud Software**: **Fully Taxable (6.00%)**. Enacted under House Bill 8, Kentucky amended KRS 139.200 to explicitly tax prewritten computer software access services. Cloud SaaS, hosted software, software maintenance, and digital data storage are fully subject to 6.00% sales tax.
2. **Everyday Clothing and Footwear**: **Fully Taxable (6.00%)**. Clothing is taxable year-round in Kentucky at the statewide 6.00% rate.
3. **Groceries & Food for Home Consumption**: **Exempt**. Food products for human consumption are exempt from sales tax under KRS 139.485. Candy, soft drinks, and prepared hot meals are taxable at 6.00%.
4. **Freight and Delivery Charges**: Under KRS 139.010(7), delivery and shipping charges billed by the seller for taxable products are included in the taxable sales price, even if stated separately.`
      },
      {
        id: 'ky-economic-nexus-and-sourcing',
        title: 'Kentucky Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Following post-Wayfair statutory rules codified in KRS 139.340:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Kentucky upon exceeding either threshold in the current or preceding calendar year:
  - More than **$100,000 in gross receipts** from retail sales delivered into Kentucky; **OR**
  - **200 or more separate retail transactions** delivered into the commonwealth.
- **Destination Sourcing**: Kentucky operates under destination sourcing rules for all delivered goods. Remote sellers collect Kentucky’s uniform 6.00% sales tax on all taxable shipments into the state.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Kentucky sales tax on all marketplace orders, relieving third-party sellers of direct remittance duties.`
      },
      {
        id: 'ky-filing-compliance-and-penalties',
        title: 'Kentucky Online Gateway, 20th-of-the-Month Deadlines, and Penalties',
        body: `Compliance administration enforced by the Kentucky Department of Revenue:

- **Online Portal Registration**: Businesses register for a Kentucky Sales and Use Tax account electronically through the **Kentucky Online Gateway (KOG)**.
- **Filing Deadlines**: Sales tax returns (Form 51A102) are due on or before the **20th day of the month** following the close of the reporting period.
- **Vendor Compensation (Timely Filing Discount)**: Under KRS 139.570, retailers who file and pay returns on time may deduct a compensation allowance of **1.75% of the first $1,000** of tax due, and **1.00% of the excess**, capped at $1,500 per year.
- **Sales Tax Holiday**: Kentucky does not host an annual sales tax holiday.
- **Delinquency Penalties**: Late returns incur a penalty of **2% of the unpaid tax per 30 days** (up to 20% maximum), plus a minimum $10 penalty and statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Cloud Software Subscription in Louisville (6.00% Rate)',
      scenario: 'A logistics business in Louisville, Kentucky purchases an $800.00 monthly fleet management SaaS subscription.',
      inputs: { saasSubtotal: '$800.00', kentuckyRate: '6.00% (House Bill 8 Taxable SaaS)' },
      steps: [
        { label: 'Taxable SaaS Base', formula: '$800.00 software subscription', amount: '$800.00', note: 'Taxable under KRS 139.200' },
        { label: 'Kentucky Sales Tax (6.00%)', formula: '$800.00 × 6.00%', amount: '$48.00', note: 'State sales tax on cloud software' },
        { label: 'Total Invoiced Checkout Amount', formula: '$800.00 + $48.00', amount: '$848.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Kentucky’s expanded service tax laws, cloud SaaS subscriptions are fully taxable at 6.00%, adding $48.00 to an $800 invoice.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500.00 Lexington Receipt',
      scenario: 'A retail merchant in Lexington collects an all-inclusive $500.00 cash payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', kentuckyRate: '6.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.06)', amount: '$471.70', note: 'True retail revenue retained' },
        { label: 'Kentucky Sales Tax Owed', formula: '$500.00 - $471.70', amount: '$28.30', note: 'Remitted to Kentucky DOR' },
        { label: 'Verification Calculation', formula: '$471.70 × 6.00%', amount: '$28.30', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in Lexington, the merchant retains $471.70 net revenue and owes $28.30 in sales tax.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Kentucky for 2026?', answer: 'The sales tax rate in Kentucky is a flat 6.00% statewide for general retail merchandise. Cities and counties do not levy local option sales taxes.', sourceUrl: 'https://revenue.ky.gov/Business/Sales-Use-Tax/' },
      { question: 'Does Kentucky tax Software as a Service (SaaS)?', answer: 'Yes. Under House Bill 8 (effective 2023), Kentucky explicitly taxes SaaS, cloud software, digital computing services, and prewritten computer software access at the standard 6.00% rate.', sourceUrl: 'https://revenue.ky.gov/News/Pages/Tax-Reform.aspx' },
      { question: 'Are groceries subject to sales tax in Kentucky?', answer: 'Unprepared food items for home consumption are 100% exempt from Kentucky sales tax under KRS 139.485. Prepared meals and candy remain taxable.', sourceUrl: 'https://revenue.ky.gov/Business/Sales-Use-Tax/' },
      { question: 'What is the economic nexus threshold in Kentucky?', answer: 'Out-of-state remote sellers establish economic nexus in Kentucky when retail sales delivered into the commonwealth exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.', sourceUrl: 'https://revenue.ky.gov/Business/Sales-Use-Tax/Pages/Remote-Sellers.aspx' },
      { question: 'Does Kentucky have a sales tax holiday?', answer: 'No. Kentucky does not host an annual sales tax holiday.', sourceUrl: 'https://revenue.ky.gov/Business/Sales-Use-Tax/' }
    ]
  },

  'oregon': {
    slug: 'oregon',
    name: 'Oregon',
    title: 'Oregon Sales Tax Calculator (0.00% — Zero Sales Tax State) | FeeKit',
    metaDescription: 'Calculate Oregon sales tax (0.00% retail sales tax). Comprehensive guide to Oregon zero sales tax, the Corporate Activity Tax (CAT 0.57%), and local taxes.',
    h1: 'Oregon Sales Tax Calculator: 0.00% Retail Tax & Corporate Activity Tax Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx',
    citation: 'Or. Rev. Stat. Chapter 317A (Corporate Activity Tax) and Oregon Constitution Article IX.',
    overview: 'The State of Oregon is one of only five US states with no general statewide retail sales tax, and the only state on the US West Coast with zero state and zero general local municipal sales taxes. Consumers shopping at retail storefronts or ordering online in Portland, Eugene, Salem, or Bend pay an exact 0.00% sales tax at checkout. However, businesses operating in Oregon must account for the Corporate Activity Tax (CAT), enacted under House Bill 3427 (codified in ORS Chapter 317A). The CAT is a gross receipts excise tax levied on business commercial activity exceeding $1,000,000 in Oregon, structured as a $250 base fee plus a 0.57% tax on taxable commercial activity.',
    sections: [
      {
        id: 'or-zero-sales-tax-regime',
        title: 'Oregon Zero Retail Sales Tax Framework Across All Cities and Counties',
        body: `Oregon voters have repeatedly rejected statewide retail sales tax referendums:

- **Statewide Retail Sales Tax Rate**: **0.00%**. Consumers pay zero sales tax on retail purchases of clothing, electronics, groceries, furniture, motor vehicles, and restaurant dining.
- **Zero Local Option Retail Surcharges**: Cities and counties in Oregon do not possess statutory authority to levy general municipal sales taxes.
- **Specialized Local Excises**: A small number of localized industry-specific excises exist:
  - **City of Portland Clean Energy Surcharge (CES)**: A 1.00% surcharge levied on large commercial retailers with over $1 billion in national sales and $500,000 in Portland sales.
  - **State Lodging Tax (1.50%)**: Imposed on transient lodging (hotels, motels, short-term rentals) plus local municipal lodging taxes.
  - **State Vehicle Privilege Tax (0.50%)**: Levied on retail vehicle dealers on the sale of new motor vehicles.`
      },
      {
        id: 'or-cat-tax-for-businesses',
        title: 'The Oregon Corporate Activity Tax (CAT): The 0.57% Gross Receipts Surcharge',
        body: `While consumers pay zero sales tax, businesses operating in Oregon face the Corporate Activity Tax:

1. **Who is Subject to the CAT?**: Any business entity (corporation, partnership, LLC, sole proprietorship) with taxable commercial activity delivered or sourced to Oregon exceeding **$1,000,000** annually.
2. **CAT Tax Rate & Computation**:
   - Flat base tax of **$250.00** on the first $1,000,000 in commercial activity; **PLUS**
   - **0.57%** on all commercial activity exceeding $1,000,000.
3. **The 35% Cost Subtraction**: Taxpayers are entitled to deduct **35% of either cost inputs (COGS) OR 35% of labor costs** (apportioned to Oregon), reducing effective tax liabilities.
4. **Economic Nexus for the CAT ($750,000 Threshold)**: Out-of-state remote businesses establish nexus for the CAT if they exceed **$750,000 in commercial activity** in Oregon, $50,000 in Oregon property, $50,000 in payroll, or 25% of total activity.`
      },
      {
        id: 'or-border-commerce-cross-state-rules',
        title: 'Cross-Border Commerce: Washington and California Residents Shopping in Oregon',
        body: `Because Oregon borders Washington (6.5% - 10.6% sales tax) and California (7.25% - 10.75% sales tax), border retail dynamics are intense:

- **In-Person Shopping in Oregon**: Out-of-state shoppers who travel into Oregon to make retail purchases pay **0.00% sales tax** at the Oregon cash register.
- **Use Tax Liability Upon Returning Home**: Under Washington and California tax law, residents who purchase tangible personal property in tax-free Oregon and transport it back to their home state for use are legally obligated to declare and pay **Consumer Use Tax** at their local home tax rate.
- **Shipments Sent Out of Oregon**: If an Oregon retailer ships merchandise to a customer in Washington or California, the transaction is subject to the destination state’s sales tax, not Oregon’s 0% rate.`
      },
      {
        id: 'or-cat-filing-compliance',
        title: 'Revenue Online Registration, CAT Quarterly Deadlines, and Compliance',
        body: `Tax compliance administration enforced by the Oregon Department of Revenue:

- **CAT Registration**: Businesses exceeding $750,000 in Oregon commercial activity must register for the CAT within 30 days of crossing the threshold via **Revenue Online**.
- **Quarterly Estimated Payments**: Businesses projecting a CAT liability exceeding $5,000 must remit quarterly estimated tax payments due on **April 30, July 31, October 31, and January 31**.
- **Annual Reconciliation Return**: The annual CAT return is due on or before **April 15** of the following calendar year.
- **Sales Tax Holiday**: Not applicable (Oregon has no general sales tax).`
      }
    ],
    workedExample: {
      title: 'Worked Example: $2,000 Consumer Electronics Purchase in Portland (0.00% Tax)',
      scenario: 'A consumer in Portland, Oregon purchases a $2,000.00 high-end laptop from a local computer electronics store.',
      inputs: { laptopPrice: '$2,000.00', oregonSalesTaxRate: '0.00%', localMunicipalRate: '0.00%' },
      steps: [
        { label: 'Laptop Merchandise Subtotal', formula: '$2,000.00 purchase price', amount: '$2,000.00', note: 'Retail price agreed' },
        { label: 'State Sales Tax (0.00%)', formula: '$2,000.00 × 0.00%', amount: '$0.00', note: 'Oregon levies zero state retail sales tax' },
        { label: 'City of Portland Local Tax (0.00%)', formula: '$2,000.00 × 0.00%', amount: '$0.00', note: 'Zero municipal sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$2,000.00 + $0.00', amount: '$2,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Oregon, consumer retail sales tax is 0.00%. The customer pays exactly $2,000.00, saving $170 to $210 compared to buying in neighboring Washington or California.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Retail Cash Receipt in Eugene ($500.00 Total)',
      scenario: 'A clothing retailer in Eugene, Oregon collects $500.00 cash for apparel. How much represents sales tax?',
      inputs: { totalReceiptCollected: '$500.00', oregonSalesTaxRate: '0.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.00)', amount: '$500.00', note: '100% of receipt is retained sales revenue' },
        { label: 'Sales Tax Owed', formula: '$500.00 - $500.00', amount: '$0.00', note: 'Zero sales tax liability' },
        { label: 'Verification Calculation', formula: '$500.00 × 0.00%', amount: '$0.00', note: 'Zero sales tax remitted' }
      ],
      takeaway: 'In Oregon, 100% of customer checkout revenue is retained by the business as gross sales, with zero sales tax remittance owed to the state.'
    },
    faqs: [
      { question: 'Does Oregon have a sales tax?', answer: 'No. Oregon has no general state or local retail sales tax. Consumers pay 0.00% sales tax on goods, electronics, clothing, and services at retail checkout.', sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx' },
      { question: 'What is the Oregon Corporate Activity Tax (CAT)?', answer: 'The CAT is a business gross receipts tax (not a sales tax) of $250 plus 0.57% on taxable commercial activity in Oregon exceeding $1,000,000 annually, with a 35% deduction for labor or COGS.', sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx' },
      { question: 'Can Washington residents shop tax-free in Oregon?', answer: 'Yes, when shopping in person at Oregon storefronts, Washington residents pay 0.00% sales tax. However, under Washington state law, residents must declare and remit Consumer Use Tax upon bringing items home.', sourceUrl: 'https://dor.wa.gov/taxes-rates/use-tax' },
      { question: 'Is Software as a Service (SaaS) subject to sales tax in Oregon?', answer: 'No. Because Oregon levies zero retail sales tax, SaaS and cloud software services are completely free of sales tax at checkout.', sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/cat.aspx' },
      { question: 'What taxes apply to motor vehicles in Oregon?', answer: 'Oregon imposes a 0.50% Vehicle Privilege Tax on car dealers for new vehicle sales and a 0.50% Vehicle Use Tax on vehicles purchased out-of-state and registered in Oregon.', sourceUrl: 'https://www.oregon.gov/dor/programs/businesses/Pages/vehicle-privilege-and-use.aspx' }
    ]
  }
};

Object.assign(STATE_PROFILES_PART2, {
  'oklahoma': {
    slug: 'oklahoma',
    name: 'Oklahoma',
    title: 'Oklahoma Sales Tax Calculator (4.50% to 11.50%) | FeeKit',
    metaDescription: 'Calculate Oklahoma sales tax with OTC rates (4.5% state, max 11.50%). Municipal sales taxes, OAC 710:65-19-156 SaaS exemption, and $100k remote seller nexus.',
    h1: 'Oklahoma Sales Tax Calculator & Tax Commission Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://oklahoma.gov/tax/businesses/sales-use-tax.html',
    citation: '68 Okla. Stat. § 1350 et seq. (Oklahoma Sales Tax Code) and Okla. Admin. Code r. 710:65-19-156.',
    overview: 'The State of Oklahoma levies a statutory base sales and use tax rate of 4.50% under 68 Okla. Stat. § 1354. However, Oklahoma municipalities and counties rely extensively on local option sales taxes to fund municipal operations: combined city and county rates routinely add between 3.50% and 7.00%, resulting in combined sales tax rates between 8.50% and 11.50% across major commercial markets (including Oklahoma City, Tulsa, and Norman). Oklahoma treats Software as a Service (SaaS) as a non-taxable service under administrative rule OAC 710:65-19-156. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Oklahoma sales.',
    sections: [
      {
        id: 'ok-rates-and-municipal-districts',
        title: 'Oklahoma Base Rate (4.50%) and Municipal Surtaxes (Max 11.50%)',
        body: `Oklahoma’s sales tax code combines a moderate state baseline with significant municipal levies:

- **Statewide Baseline Rate**: **4.50%**. Applies to all retail sales of tangible personal property statewide.
- **Municipal and County Discretionary Surtaxes**:
  - **Oklahoma City (Oklahoma County)**: **8.625% combined rate** (4.50% state + 4.125% Oklahoma City municipal tax).
  - **Tulsa (Tulsa County)**: **8.517% combined rate** (4.50% state + 0.367% county + 3.65% Tulsa municipal tax).
  - **Norman (Cleveland County)**: **8.875% combined rate** (4.50% state + 0.25% county + 4.125% City of Norman tax).
  - **High-Rate Municipalities**: Smaller rural commercial hubs add overlapping hospital and public safety levies, pushing combined rates up to the state ceiling of **11.50%**.`
      },
      {
        id: 'ok-saas-exemption-and-taxability',
        title: 'Taxability Framework: Non-Taxable SaaS, Groceries, and Clothing',
        body: `Statutory product taxability under Oklahoma Tax Commission (OTC) regulations:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Oklahoma Administrative Code r. 710:65-19-156, remotely hosted cloud software is classified as a non-taxable service, provided the customer accesses software hosted on remote vendor servers without downloading software locally.
2. **Groceries & Food for Home Consumption**: **Exempt from State Tax (0.00%), Local Taxes Apply**. Effective February 2024 (under House Bill 1955), Oklahoma eliminated its 4.50% state sales tax on grocery food staples. However, municipal and county sales taxes still apply in full to grocery purchases (typically 3.5% to 4.5%).
3. **Clothing and Apparel**: **Fully Taxable (4.50% - 11.50%)**. Clothing is taxable year-round at combined rates (except during the annual August 3-day sales tax holiday).
4. **Freight and Delivery Charges**: Separately stated transportation charges are exempt from Oklahoma sales tax if billed at actual freight costs and delivery occurs after purchase.`
      },
      {
        id: 'ok-economic-nexus-and-sourcing',
        title: 'Oklahoma Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework',
        body: `Following post-Wayfair statutory rules codified in 68 Okla. Stat. § 1392:

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Oklahoma upon exceeding **$100,000 in aggregate gross sales** delivered into the state during the current or preceding calendar year. (Oklahoma has no transaction count threshold).
- **Destination Sourcing**: Oklahoma operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state, county, and city rate applicable to the delivery address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Oklahoma sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'ok-filing-compliance-oktap',
        title: 'OkTAP Portal Registration, 20th-of-the-Month Deadlines, and Tax Holiday',
        body: `Tax compliance administration enforced by the Oklahoma Tax Commission (OTC):

- **OkTAP Portal Registration**: Businesses register for an Oklahoma Sales Tax Permit online via **OkTAP** (Oklahoma Taxpayer Access Point). A $20 state fee applies per business location.
- **Filing Deadlines**: Sales tax returns (Form STS-20002) are due on or before the **20th day of the month** following the reporting period for monthly remitters.
- **Timely Filing Discount**: Under 68 Okla. Stat. § 1367.1, retailers who file and pay returns on time may deduct a discount of **1.00% of the sales tax collected** (capped at $2,500 per reporting period).
- **Annual Sales Tax Holiday**: Oklahoma holds an annual **3-day Sales Tax Holiday on the first weekend of August**, exempting qualifying clothing and footwear ($100 or less per item) from state and local sales taxes.
- **Delinquency Penalties**: Late filings incur a penalty of **10% of the tax due**, plus statutory interest at 1.25% per month.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Oklahoma City (8.625% Rate)',
      scenario: 'A resident in Oklahoma City purchases $500.00 of commercial tools from a home improvement retailer.',
      inputs: { toolsSubtotal: '$500.00', oklahomaStateRate: '4.50%', okcCityRate: '4.125%', combinedRate: '8.625%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 tools', amount: '$500.00', note: 'Subject to retail sales tax' },
        { label: 'Oklahoma State Tax (4.50%)', formula: '$500.00 × 4.50%', amount: '$22.50', note: 'State general fund' },
        { label: 'Oklahoma City Municipal Tax (4.125%)', formula: '$500.00 × 4.125%', amount: '$20.63', note: 'City of Oklahoma City share' },
        { label: 'Total Oklahoma Sales Tax', formula: '$22.50 + $20.63', amount: '$43.13', note: 'Combined 8.625% sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $43.13', amount: '$543.13', note: 'Total customer payment' }
      ],
      takeaway: 'In Oklahoma City, the 8.625% combined sales tax on a $500 tool purchase equals $43.13, bringing total checkout cost to $543.13.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Tulsa Receipt',
      scenario: 'A retail store in Tulsa, Oklahoma (8.517% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', tulsaRate: '8.517%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.08517)', amount: '$552.91', note: 'True retail revenue retained' },
        { label: 'Oklahoma Sales Tax Owed', formula: '$600.00 - $552.91', amount: '$47.09', note: 'Remitted via OkTAP' },
        { label: 'Verification Calculation', formula: '$552.91 × 8.517%', amount: '$47.09', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Tulsa, the business retains $552.91 net revenue and owes $47.09 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Oklahoma for 2026?', answer: 'The statewide base sales tax rate in Oklahoma is 4.50%. Local city and county taxes push combined rates between 8.50% and 11.50% across most commercial markets.', sourceUrl: 'https://oklahoma.gov/tax/businesses/sales-use-tax.html' },
      { question: 'Is Software as a Service (SaaS) taxable in Oklahoma?', answer: 'No. Under Oklahoma Administrative Code r. 710:65-19-156, cloud-based SaaS and remotely hosted software are classified as non-taxable services.', sourceUrl: 'https://oklahoma.gov/tax/businesses/sales-use-tax.html' },
      { question: 'Did Oklahoma eliminate sales tax on groceries?', answer: 'Yes, at the state level. Effective February 2024 (House Bill 1955), the 4.50% state sales tax on grocery food staples was eliminated. However, city and county local sales taxes (typically 3.5% to 4.5%) still apply to groceries.', sourceUrl: 'https://oklahoma.gov/tax/news/2024/grocery-sales-tax-elimination.html' },
      { question: 'What is the economic nexus threshold in Oklahoma?', answer: 'Out-of-state remote sellers establish economic nexus in Oklahoma when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.', sourceUrl: 'https://oklahoma.gov/tax/businesses/remote-sellers.html' },
      { question: 'When is Oklahoma’s annual sales tax holiday?', answer: 'Oklahoma holds an annual 3-day Sales Tax Holiday on the first weekend of August, exempting qualifying clothing and footwear ($100 or less per item) from state and local sales taxes.', sourceUrl: 'https://oklahoma.gov/tax/individuals/sales-tax-holiday.html' }
    ]
  },

  'connecticut': {
    slug: 'connecticut',
    name: 'Connecticut',
    title: 'Connecticut Sales Tax Calculator (6.35% Flat & 7.75% Luxury) | FeeKit',
    metaDescription: 'Calculate Connecticut sales and use tax with DRS rates (6.35% flat, 7.75% luxury). Reduced 1% B2B computer services rate, clothing exemptions, and $100k nexus.',
    h1: 'Connecticut Sales Tax Calculator & Department of Revenue Services Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://portal.ct.gov/drs/sales-tax/sales-and-use-taxes-information',
    citation: 'Conn. Gen. Stat. Title 12, Chapter 219 (Sales and Use Taxes) and Conn. Agencies Regs. § 12-407(a)(37)(J)-1.',
    overview: 'The State of Connecticut imposes a flat statewide sales and use tax rate of 6.35% under Conn. Gen. Stat. § 12-408. Under Connecticut statutory law, municipalities and counties are strictly prohibited from assessing local option retail sales taxes, ensuring an identical 6.35% rate across all 169 towns (including Hartford, Stamford, New Haven, and Bridgeport). However, Connecticut features unique multi-tiered tax rates: luxury goods are taxed at 7.75% (motor vehicles over $50,000 and clothing/jewelry over $1,000), restaurant meals are taxed at 7.35%, and B2B computer software/data processing services are taxed at a reduced 1.00% rate. Remote sellers establish economic nexus upon reaching $100,000 in gross sales and 200 transactions.',
    sections: [
      {
        id: 'ct-rate-tiers-and-luxury-tax',
        title: 'Connecticut Standard 6.35% Rate, 7.75% Luxury Surtax, and 7.35% Meals Tax',
        body: `Connecticut’s sales tax code provides geographic uniformity combined with progressive product tiers:

- **Standard Statewide Baseline**: **6.35%**. Applies to all standard retail sales of tangible personal property statewide with zero municipal additions.
- **Luxury Goods Surtax (7.75%)**: Imposed under Conn. Gen. Stat. § 12-408(1)(D) on high-value retail purchases:
  - Motor vehicles with a sales price exceeding **$50,000** (taxed at 7.75% on the entire purchase price).
  - Jewelry (real or imitation) exceeding **$5,000** per item.
  - Articles of clothing and footwear exceeding **$1,000** per item.
- **Meals and Prepared Food Surtax (7.35%)**: Restaurant meals, catering, and prepared takeout food are taxed at **7.35%** (combining the 6.35% base with a mandatory 1.00% meals surtax).`
      },
      {
        id: 'ct-saas-reduced-rate-b2b',
        title: 'Taxability Framework: The 1.00% B2B Computer Services Rate vs 6.35% B2C SaaS',
        body: `Connecticut maintains a specialized statutory tax structure for software and digital services:

1. **B2B Computer Software and Data Processing (1.00% Reduced Rate)**: Under Conn. Gen. Stat. § 12-407(a)(37)(J), computer and data processing services (which include B2B SaaS, cloud hosting, software maintenance, and custom programming) are taxed at a statutory reduced rate of **1.00%**. Businesses purchasing software for internal commercial use pay only 1.00% sales tax.
2. **B2C Consumer SaaS**: Cloud software and streaming media sold directly to individual consumers are taxed at the full standard rate of **6.35%**.
3. **Clothing and Footwear**: Fully taxable at 6.35% year-round (or 7.75% if exceeding $1,000), except during the annual Sales Tax Free Week in August.
4. **Groceries**: Food products for human consumption are exempt under Conn. Gen. Stat. § 12-412(13).
5. **Freight and Delivery Charges**: Delivery charges billed by the seller for taxable property are fully taxable under Conn. Gen. Stat. § 12-407(a)(8).`
      },
      {
        id: 'ct-economic-nexus-and-sourcing',
        title: 'Connecticut Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Following post-Wayfair statutory rules codified in Conn. Gen. Stat. § 12-407(a)(12):

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Connecticut if, during the 12-month period ending on the preceding September 30:
  - Gross receipts from retail sales delivered into Connecticut exceed **$100,000**; **AND**
  - The seller conducts **200 or more retail transactions** into the state.
- **Destination Sourcing**: Connecticut enforces destination sourcing for all delivered merchandise. Remote sellers collect Connecticut’s uniform 6.35% sales tax on all taxable shipments into the state.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, etc.) must collect and remit Connecticut sales tax on all sales made through their platforms, shielding third-party sellers from direct filing obligations.`
      },
      {
        id: 'ct-filing-compliance-myconnect',
        title: 'myconneCT Portal Registration, Last-Day-of-the-Month Deadlines, and Tax-Free Week',
        body: `Tax compliance administration enforced by the Connecticut Department of Revenue Services (DRS):

- **myconneCT Portal Registration**: Businesses register for a Connecticut Sales and Use Tax Permit electronically through **myconneCT**. A $100 permit fee applies per physical business location.
- **Filing Deadlines**: Sales tax returns (Form OS-114) are due on or before the **last day of the month** following the close of the reporting period (e.g. Q1 return due April 30).
- **Annual Sales Tax Free Week**: Connecticut hosts an annual **7-day Sales Tax Free Week in late August**, exempting qualifying clothing and footwear priced at **$100 or less per item** from the 6.35% tax.
- **Delinquency Penalties**: Late returns incur a penalty of **15% of the unpaid tax** or $50 (whichever is greater), plus statutory interest at 1% per month.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Cloud Software Invoice in Stamford (1.00% Reduced Rate)',
      scenario: 'A corporate financial firm in Stamford, Connecticut purchases a $5,000.00 monthly B2B enterprise SaaS license.',
      inputs: { saasSubtotal: '$5,000.00', statutoryReducedRate: '1.00% (Conn. Gen. Stat. § 12-407(a)(37)(J))' },
      steps: [
        { label: 'Taxable B2B Software Base', formula: '$5,000.00 enterprise license', amount: '$5,000.00', note: 'Subject to statutory 1% rate' },
        { label: 'Connecticut B2B Sales Tax (1.00%)', formula: '$5,000.00 × 1.00%', amount: '$50.00', note: 'Special reduced rate for data processing' },
        { label: 'Total Invoiced Checkout Amount', formula: '$5,000.00 + $50.00', amount: '$5,050.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Connecticut’s reduced B2B computer services tax, a $5,000 enterprise software contract incurs only $50.00 in sales tax (1.00%), saving the business $267.50 compared to the standard 6.35% rate.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500 Hartford Receipt',
      scenario: 'A retail store in Hartford collects a flat $500.00 cash payment for taxable goods at the standard 6.35% rate. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', connecticutRate: '6.35%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.0635)', amount: '$470.15', note: 'True retail revenue retained' },
        { label: 'Connecticut Sales Tax Owed', formula: '$500.00 - $470.15', amount: '$29.85', note: 'Remitted via myconneCT' },
        { label: 'Verification Calculation', formula: '$470.15 × 6.35%', amount: '$29.85', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in Hartford, the retailer retains $470.15 net revenue and owes $29.85 in sales tax.'
    },
    faqs: [
      { question: 'What is the standard sales tax rate in Connecticut for 2026?', answer: 'The standard sales tax rate in Connecticut is a flat 6.35% statewide. Municipalities and counties do not levy local retail sales taxes.', sourceUrl: 'https://portal.ct.gov/drs/sales-tax/sales-and-use-taxes-information' },
      { question: 'What is Connecticut’s reduced 1% tax on B2B software?', answer: 'Under Conn. Gen. Stat. § 12-407(a)(37)(J), computer and data processing services (including B2B SaaS, cloud hosting, and software maintenance) are taxed at a reduced statutory rate of 1.00% rather than 6.35%.', sourceUrl: 'https://portal.ct.gov/drs/sales-tax/computer-and-data-processing-services' },
      { question: 'What is the luxury sales tax rate in Connecticut?', answer: 'Connecticut imposes a 7.75% luxury sales tax rate on motor vehicles exceeding $50,000, jewelry exceeding $5,000, and individual clothing or footwear items exceeding $1,000.', sourceUrl: 'https://portal.ct.gov/drs/sales-tax/sales-and-use-taxes-information' },
      { question: 'What is the economic nexus threshold in Connecticut?', answer: 'Out-of-state remote sellers establish economic nexus in Connecticut if they have at least $100,000 in gross receipts AND 200 or more retail transactions into the state during the preceding 12-month period.', sourceUrl: 'https://portal.ct.gov/drs/sales-tax/remote-sellers' },
      { question: 'When is Connecticut’s annual Sales Tax Free Week?', answer: 'Connecticut hosts an annual Sales Tax Free Week in late August, exempting qualifying clothing and footwear priced at $100 or less per item from sales tax.', sourceUrl: 'https://portal.ct.gov/drs/sales-tax/sales-tax-free-week' }
    ]
  }
});

Object.assign(STATE_PROFILES_PART2, {
  'utah': {
    slug: 'utah',
    name: 'Utah',
    title: 'Utah Sales Tax Calculator (6.10% to 9.05%) | FeeKit',
    metaDescription: 'Calculate Utah sales tax with Tax Commission rates (4.85% base + 1.25% mandatory local = 6.10% baseline, max 9.05%). Taxable SaaS, grocery reduced rate (3.0%), and $100k nexus.',
    h1: 'Utah Sales Tax Calculator & State Tax Commission Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.utah.gov/sales',
    citation: 'Utah Code Title 59, Chapter 12 (Sales and Use Tax Act) and Utah Admin. Code R865-19S-92.',
    overview: 'The State of Utah imposes a statewide baseline sales and use tax rate of 4.85% under Utah Code § 59-12-103. However, all Utah jurisdictions enforce a mandatory 1.00% local option sales tax plus a mandatory 0.25% county option tax, establishing a true practical minimum baseline rate of 6.10% statewide. Additional municipal, county transit, and resort community taxes push combined retail sales tax rates between 7.25% and 9.05% across major urban and tourist centers (including Salt Lake City, Provo, and Park City). Utah treats Software as a Service (SaaS) as fully taxable prewritten computer software under administrative rule R865-19S-92. Remote sellers establish economic nexus upon reaching $100,000 in annual Utah sales.',
    sections: [
      {
        id: 'ut-rates-and-resort-taxes',
        title: 'Utah Mandatory Baseline (6.10%) and Resort Community Surtaxes (Max 9.05%)',
        body: `Utah’s sales tax code combines state, mandatory county, and localized transit levies:

- **True Statewide Minimum Baseline**: **6.10%**. Combines the 4.85% state rate with the mandatory 1.00% local option tax and 0.25% county option tax.
- **Municipal and County Transit Surtaxes**:
  - **Salt Lake City (Salt Lake County)**: **7.75% combined rate** (6.10% baseline + 0.90% county transit + 0.75% municipal transit taxes).
  - **Provo (Utah County)**: **7.25% combined rate** (6.10% baseline + 0.65% Utah County transit + 0.50% city transit).
  - **Park City (Summit County)**: **9.05% combined rate** (6.10% baseline + transit + 1.60% resort community sales tax).
  - **Moab (Grand County)**: **8.85% combined rate** (6.10% baseline + 1.60% municipal resort tax + emergency medical taxes).`
      },
      {
        id: 'ut-taxability-saas-food-services',
        title: 'Taxability Framework: Taxable SaaS, Groceries (3.00%), and Digital Goods',
        body: `Statutory product taxability under Utah State Tax Commission regulations:

1. **Software as a Service (SaaS) & Cloud Software**: **Fully Taxable (6.10% - 9.05%)**. Under Utah Admin. Code R865-19S-92, accessing prewritten computer software remotely via the cloud is statutorily treated as a taxable purchase of prewritten software, regardless of whether installed locally or hosted remotely.
2. **Food and Food Ingredients (Groceries)**: **Taxed at 3.00% Statewide**. Unprepared food items for home consumption enjoy a statutory reduced rate of 3.00% (1.75% state + 1.25% local option). Prepared hot restaurant meals and candy are taxed at full combined rates.
3. **Clothing and Footwear**: **Fully Taxable**. Apparel and footwear are subject to full combined rates year-round.
4. **Freight and Delivery Charges**: Separately stated freight and transportation charges are exempt from Utah sales tax under Utah Code § 59-12-102(38).`
      },
      {
        id: 'ut-economic-nexus-and-sourcing',
        title: 'Utah Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework',
        body: `Following post-Wayfair statutory rules codified in Utah Code § 59-12-107:

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Utah upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (Utah’s 200-transaction count threshold was formally repealed).
- **In-State vs Remote Sourcing**: In-state storefront sales are sourced to the **retail store location** (origin). Delivered goods shipped to customers are sourced to the **delivery destination**.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, Walmart) collect and remit Utah sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'ut-filing-compliance-tap',
        title: 'Tax Commission TAP Portal, Last-Day-of-the-Month Deadlines, and Penalties',
        body: `Tax compliance administration enforced by the Utah State Tax Commission:

- **TAP Portal Registration**: Businesses register for a Utah Sales Tax License online via **Taxpayer Access Point (TAP)**.
- **Filing Deadlines**: Sales tax returns (Form TC-62S) are due on or before the **last day of the month** following the close of the reporting period (e.g. Q1 return due April 30).
- **Sales Tax Holiday**: Utah does not host an annual sales tax holiday.
- **Delinquency Penalties**: Late filings incur a penalty of **10% of the unpaid tax** (or $20, whichever is greater), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Sporting Goods Purchase in Salt Lake City (7.75% Rate)',
      scenario: 'A consumer in Salt Lake City, Utah purchases $500.00 of outdoor camping equipment from a local sporting goods retailer.',
      inputs: { equipmentSubtotal: '$500.00', combinedSaltLakeRate: '7.75%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 merchandise', amount: '$500.00', note: 'Subject to retail sales tax' },
        { label: 'Utah Combined Sales Tax (7.75%)', formula: '$500.00 × 7.75%', amount: '$38.75', note: 'Includes 4.85% state + 1.25% mandatory local + 1.65% transit' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $38.75', amount: '$538.75', note: 'Total customer payment' }
      ],
      takeaway: 'In Salt Lake City, the 7.75% combined sales tax on a $500 purchase equals $38.75, bringing total checkout cost to $538.75.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Park City Receipt',
      scenario: 'A retail store in Park City, Utah (9.05% combined resort rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', parkCityRate: '9.05%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.0905)', amount: '$550.21', note: 'True retail revenue retained' },
        { label: 'Utah Sales Tax Owed', formula: '$600.00 - $550.21', amount: '$49.79', note: 'Remitted via TAP' },
        { label: 'Verification Calculation', formula: '$550.21 × 9.05%', amount: '$49.79', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Park City, the business retains $550.21 net revenue and owes $49.79 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Utah for 2026?', answer: 'The statewide base rate is 4.85%, but all Utah jurisdictions enforce a mandatory 1.25% local/county tax, making the practical baseline rate 6.10%. Combined rates range from 6.10% to 9.05% across the state.', sourceUrl: 'https://tax.utah.gov/sales' },
      { question: 'Is Software as a Service (SaaS) taxable in Utah?', answer: 'Yes. Under Utah Admin. Code R865-19S-92, remotely accessed cloud software and SaaS subscriptions are fully taxable as prewritten computer software.', sourceUrl: 'https://tax.utah.gov/sales' },
      { question: 'Are groceries taxed at a lower rate in Utah?', answer: 'Yes. Food and food ingredients for home consumption are taxed at a reduced rate of 3.00% statewide, compared to standard combined rates of 6.10% to 9.05%.', sourceUrl: 'https://tax.utah.gov/sales/food' },
      { question: 'What is the economic nexus threshold in Utah?', answer: 'Out-of-state remote sellers establish economic nexus in Utah when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.', sourceUrl: 'https://tax.utah.gov/sales/remote-sellers' },
      { question: 'Does Utah have an annual sales tax holiday?', answer: 'No. Utah does not host an annual sales tax holiday.', sourceUrl: 'https://tax.utah.gov/sales' }
    ]
  },

  'iowa': {
    slug: 'iowa',
    name: 'Iowa',
    title: 'Iowa Sales Tax Calculator (6.00% to 7.00%) | FeeKit',
    metaDescription: 'Calculate Iowa sales tax with Department of Revenue rates (6.0% state, 7.0% with 1% LOST). Taxable digital products and SaaS under Iowa Code § 423.2, and $100k nexus.',
    h1: 'Iowa Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.iowa.gov/iowa-sales-and-use-tax-guide',
    citation: 'Iowa Code Chapter 423 (Streamlined Sales and Use Tax Act) and Iowa Admin. Code r. 701-200 et seq.',
    overview: 'The State of Iowa imposes a statewide base sales and use tax rate of 6.00% under Iowa Code § 423.2. Most Iowa cities and counties adopt an optional 1.00% Local Option Sales Tax (LOST), establishing a combined retail sales tax rate of 7.00% across major commercial markets (including Des Moines, Cedar Rapids, Davenport, and Iowa City). In rural areas without LOST, the flat 6.00% state rate applies. Iowa treats Software as a Service (SaaS) and electronically transferred digital products as fully taxable under Iowa Code § 423.2(6)(bs). Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Iowa sales.',
    sections: [
      {
        id: 'ia-rates-and-lost-surtaxes',
        title: 'Iowa Base Rate (6.00%) and 1.00% Local Option Sales Tax (LOST)',
        body: `Iowa’s sales tax code features a simple two-tier geographic structure:

- **Statewide Baseline Rate**: **6.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable enumerated services.
- **Local Option Sales Tax (LOST)**: **1.00%**. Enacted by county-wide voter referendums under Iowa Code Chapter 423B:
  - **Des Moines (Polk County)**: **7.00% combined rate** (6.00% state + 1.00% LOST).
  - **Cedar Rapids (Linn County)**: **7.00% combined rate** (6.00% state + 1.00% LOST).
  - **Davenport (Scott County)**: **7.00% combined rate** (6.00% state + 1.00% LOST).
  - **Unincorporated Non-LOST Areas**: **6.00% flat rate** (State base rate with zero local tax).`
      },
      {
        id: 'ia-digital-products-and-saas-taxability',
        title: 'Taxability Framework: Taxable Digital Products, SaaS, and Groceries',
        body: `Statutory product taxability under Iowa Department of Revenue regulations:

1. **Software as a Service (SaaS) & Digital Products**: **Fully Taxable (6.00% - 7.00%)**. Under Iowa Code § 423.2(6)(bs) and Iowa Admin. Code r. 701-211.1, cloud-based software, remote SaaS access, digital downloads, and electronic data storage are fully subject to sales tax as specified digital products.
2. **Clothing and Footwear**: **Fully Taxable**. Everyday apparel and footwear are subject to combined rates year-round (except during the annual August 2-day sales tax holiday).
3. **Groceries & Food for Home Consumption**: **Exempt**. Food items for home consumption are exempt under Iowa Code § 423.3(57). Prepared food, candy, and soft drinks are taxable at 7.00%.
4. **Freight and Delivery Charges**: Separately stated transportation and delivery charges are generally exempt from Iowa sales tax under Iowa Admin. Code r. 701-288.13.`
      },
      {
        id: 'ia-economic-nexus-and-sourcing',
        title: 'Iowa Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework',
        body: `Following post-Wayfair statutory rules codified in Iowa Code § 423.14A:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Iowa upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (The previous 200-transaction count threshold was repealed in 2019).
- **Destination Sourcing**: Iowa operates under destination sourcing rules for all delivered goods. Remote sellers collect the exact combined rate (6.00% or 7.00%) applicable to the customer's delivery address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, Walmart) collect and remit Iowa sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'ia-filing-compliance-govconnect',
        title: 'GovConnectIowa Registration, Last-Day-of-the-Month Deadlines, and Tax Holiday',
        body: `Tax compliance administration enforced by the Iowa Department of Revenue:

- **GovConnectIowa Portal Registration**: Businesses register for an Iowa Sales and Use Tax Permit online via **GovConnectIowa**.
- **Filing Deadlines**: Sales tax returns are due on or before the **last day of the month** following the reporting period for monthly remitters (e.g. Q1 return due April 30).
- **Annual Sales Tax Holiday**: Iowa holds an annual **2-day Sales Tax Holiday on the first Friday and Saturday of August**, exempting qualifying clothing and footwear priced at **under $100 per item** from state and local sales taxes.
- **Delinquency Penalties**: Late returns incur a penalty of **5% of the unpaid tax** per month (up to 25% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Des Moines (7.00% Combined Rate)',
      scenario: 'A resident in Des Moines, Iowa purchases $500.00 of commercial tools from a home improvement retailer.',
      inputs: { toolsSubtotal: '$500.00', iowaStateRate: '6.00%', polkCountyLost: '1.00%', combinedRate: '7.00%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 tools', amount: '$500.00', note: 'Subject to retail sales tax' },
        { label: 'Iowa State Tax (6.00%)', formula: '$500.00 × 6.00%', amount: '$30.00', note: 'State general fund' },
        { label: 'Polk County LOST (1.00%)', formula: '$500.00 × 1.00%', amount: '$5.00', note: 'Local option sales tax share' },
        { label: 'Total Iowa Sales Tax', formula: '$30.00 + $5.00', amount: '$35.00', note: 'Combined 7.00% sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $35.00', amount: '$535.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Des Moines, the 7.00% combined sales tax on a $500 tool purchase equals $35.00, bringing total checkout cost to $535.00.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Cedar Rapids Receipt',
      scenario: 'A retail store in Cedar Rapids, Iowa (7.00% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', cedarRapidsRate: '7.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.07)', amount: '$560.75', note: 'True retail revenue retained' },
        { label: 'Iowa Sales Tax Owed', formula: '$600.00 - $560.75', amount: '$39.25', note: 'Remitted via GovConnectIowa' },
        { label: 'Verification Calculation', formula: '$560.75 × 7.00%', amount: '$39.25', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Cedar Rapids, the business retains $560.75 net revenue and owes $39.25 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Iowa for 2026?', answer: 'The statewide base sales tax rate in Iowa is 6.00%. Most cities and counties levy a 1.00% Local Option Sales Tax (LOST), making the total combined rate 7.00%.', sourceUrl: 'https://tax.iowa.gov/iowa-sales-and-use-tax-guide' },
      { question: 'Is Software as a Service (SaaS) taxable in Iowa?', answer: 'Yes. Under Iowa Code § 423.2(6)(bs), SaaS, cloud software, and digital products are fully taxable at standard state and local rates.', sourceUrl: 'https://tax.iowa.gov/digital-products-faqs' },
      { question: 'Are groceries subject to sales tax in Iowa?', answer: 'No. Essential food products for home consumption are 100% exempt from sales tax under Iowa Code § 423.3(57). Prepared food and candy are taxable.', sourceUrl: 'https://tax.iowa.gov/iowa-sales-and-use-tax-guide' },
      { question: 'What is the economic nexus threshold in Iowa?', answer: 'Out-of-state remote sellers establish economic nexus in Iowa when gross sales into the state exceed $100,000 in the current or prior calendar year. There is no transaction count threshold.', sourceUrl: 'https://tax.iowa.gov/remote-sellers' },
      { question: 'When is Iowa’s annual sales tax holiday?', answer: 'Iowa holds an annual 2-day Sales Tax Holiday on the first Friday and Saturday of August, exempting qualifying clothing and footwear priced under $100 per item.', sourceUrl: 'https://tax.iowa.gov/iowas-annual-sales-tax-holiday' }
    ]
  },

  'nevada': {
    slug: 'nevada',
    name: 'Nevada',
    title: 'Nevada Sales Tax Calculator (6.85% to 8.375%) | FeeKit',
    metaDescription: 'Calculate Nevada sales tax with Department of Taxation rates (6.85% state, max 8.375% Las Vegas). NAC 372.660 SaaS exemption, destination sourcing, and $100k nexus.',
    h1: 'Nevada Sales Tax Calculator & Department of Taxation Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/',
    citation: 'Nev. Rev. Stat. Chapter 372 (Sales and Use Taxes) and Nev. Admin. Code ch. 372.',
    overview: 'The State of Nevada imposes a statutory base sales and use tax rate of 6.85% under Nev. Rev. Stat. § 372.105. Nevada counties enforce additional local option sales taxes to fund public safety, flood control, and regional transportation, pushing combined rates between 6.85% and 8.375% across major urban areas (including Las Vegas, Reno, and Carson City). Clark County (Las Vegas) imposes the highest rate in the state at 8.375%, while Washoe County (Reno) levies an 8.265% combined rate. Nevada provides a complete sales tax exemption for cloud software (SaaS) under NAC 372.660. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Nevada sales or 200 separate transactions.',
    sections: [
      {
        id: 'nv-rates-and-county-options',
        title: 'Nevada Base Rate (6.85%) and County Option Rates (Las Vegas 8.375%)',
        body: `Nevada’s sales tax code combines a uniform state baseline with county-level public safety levies:

- **Statewide Baseline Rate**: **6.85%**. Comprised of 2.00% state general tax, 2.60% Local School Support Tax (LSST), and 2.25% Basic City-County Relief Tax (BCCRT).
- **County Local Option Taxes**:
  - **Clark County (Las Vegas / Henderson)**: **8.375% combined rate** (6.85% baseline + 1.525% county flood control, police, and transit taxes).
  - **Washoe County (Reno / Sparks)**: **8.265% combined rate** (6.85% baseline + 1.415% Washoe County local taxes).
  - **Carson City**: **7.60% combined rate** (6.85% baseline + 0.75% Carson City municipal tax).
  - **Rural Counties (Eureka, Esmeralda, Mineral)**: **6.85% flat rate** (State base rate with zero county optional tax).`
      },
      {
        id: 'nv-saas-exemption-and-taxability',
        title: 'Taxability Framework: Complete SaaS Exemption, Clothing, and Groceries',
        body: `Statutory product taxability under Nevada Department of Taxation regulations:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Nevada Administrative Code (NAC) 372.660, cloud SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.
2. **Clothing and Footwear**: **Fully Taxable (6.85% - 8.375%)**. Everyday apparel and footwear are fully taxable at combined rates year-round.
3. **Food for Home Consumption (Groceries)**: **Exempt**. Essential food products for home preparation and consumption are exempt under NRS 372.284. Prepared hot restaurant meals, candy, and soft drinks are taxable at full rates.
4. **Freight and Delivery Charges**: Under NAC 372.101, delivery charges are exempt from Nevada sales tax if stated separately on the invoice and delivery occurs directly to the purchaser.`
      },
      {
        id: 'nv-economic-nexus-and-sourcing',
        title: 'Nevada Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Following post-Wayfair statutory rules codified in NRS 372.7243:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Nevada upon exceeding either threshold in the current or preceding calendar year:
  - More than **$100,000 in gross revenue** from retail sales delivered into Nevada; **OR**
  - **200 or more separate retail transactions** delivered into the state.
- **Destination Sourcing**: Nevada operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state and county rate applicable to the delivery address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, Walmart) collect and remit Nevada sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'nv-filing-compliance-nevadatax',
        title: 'NevadaTax Portal Registration, Last-Day-of-the-Month Deadlines, and Penalties',
        body: `Tax compliance administration enforced by the Nevada Department of Taxation:

- **NevadaTax Portal Registration**: Businesses register for a Nevada Sales Tax Permit online via **NevadaTax**. A $15 permit fee applies per physical business location.
- **Filing Deadlines**: Sales tax returns (Form TXR-01) are due on or before the **last day of the month** following the reporting period for monthly remitters.
- **Collection Allowance (Timely Filing Discount)**: Under NRS 372.370, retailers who file and pay returns on time may deduct a collection allowance of **0.25% of the sales tax collected** as compensation.
- **Sales Tax Holiday**: Nevada holds an annual "Nevada Day" sales tax holiday in late October exclusively for qualifying members of the Nevada National Guard.
- **Delinquency Penalties**: Late filings incur a penalty of **10% of the unpaid tax**, plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Furniture Order in Las Vegas (8.375% Rate)',
      scenario: 'A resident in Las Vegas, Nevada (Clark County, 8.375% rate) purchases an $800.00 sofa from a home furnishings showroom.',
      inputs: { sofaSubtotal: '$800.00', clarkCountyRate: '8.375%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$800.00 furniture', amount: '$800.00', note: 'Subject to retail sales tax' },
        { label: 'Nevada Sales Tax (8.375%)', formula: '$800.00 × 8.375%', amount: '$67.00', note: 'Includes 6.85% state + 1.525% Clark County' },
        { label: 'Total Invoiced Checkout Amount', formula: '$800.00 + $67.00', amount: '$867.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Las Vegas, the 8.375% combined sales tax on an $800 furniture purchase equals $67.00, bringing total checkout cost to $867.00.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500 Reno Receipt',
      scenario: 'A retail store in Reno, Nevada (Washoe County, 8.265% rate) collects an all-inclusive $500.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', renoRate: '8.265%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.08265)', amount: '$461.82', note: 'True retail revenue retained' },
        { label: 'Nevada Sales Tax Owed', formula: '$500.00 - $461.82', amount: '$38.18', note: 'Remitted via NevadaTax' },
        { label: 'Verification Calculation', formula: '$461.82 × 8.265%', amount: '$38.18', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in Reno, the business retains $461.82 net revenue and owes $38.18 in sales tax.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Nevada for 2026?', answer: 'The statewide base rate in Nevada is 6.85%. County local option taxes push combined rates between 6.85% and 8.375% (8.375% in Las Vegas/Clark County, 8.265% in Reno/Washoe County).', sourceUrl: 'https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/' },
      { question: 'Is Software as a Service (SaaS) taxable in Nevada?', answer: 'No. Under NAC 372.660, cloud SaaS, remotely hosted software, and online data access are 100% exempt from sales tax.', sourceUrl: 'https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/' },
      { question: 'Are groceries subject to sales tax in Nevada?', answer: 'Unprepared food items for home consumption are 100% exempt from Nevada sales tax under NRS 372.284. Prepared meals, alcohol, and candy remain taxable.', sourceUrl: 'https://tax.nv.gov/Tax_Types/Sales_and_Use_Tax_Information/' },
      { question: 'What is the economic nexus threshold in Nevada?', answer: 'Out-of-state remote sellers establish economic nexus in Nevada when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding calendar year.', sourceUrl: 'https://tax.nv.gov/Tax_Types/Remote_Sellers/' },
      { question: 'Does Nevada have an annual sales tax holiday?', answer: 'Nevada holds a specialized sales tax holiday in late October exclusively for qualifying members of the Nevada National Guard. There is no general public tax holiday.', sourceUrl: 'https://tax.nv.gov/Tax_Types/Nevada_Day_Sales_Tax_Holiday/' }
    ]
  }
});

Object.assign(STATE_PROFILES_PART2, {
  'arkansas': {
    slug: 'arkansas',
    name: 'Arkansas',
    title: 'Arkansas Sales Tax Calculator (6.50% to 11.50%) | FeeKit',
    metaDescription: 'Calculate Arkansas sales tax with DFA rates (6.5% state, max 11.50%). Municipal sales taxes, Legal Opinion 20200818 SaaS exemption, and $100k nexus.',
    h1: 'Arkansas Sales Tax Calculator & Department of Finance Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/',
    citation: 'Ark. Code Ann. Title 26, Chapter 52 (Gross Receipts Tax) and DFA Legal Opinion 20200818.',
    overview: 'The State of Arkansas levies a statutory base sales and use tax rate of 6.50% under Ark. Code Ann. § 26-52-301. Local county governments and incorporated cities impose substantial local option sales taxes, pushing combined rates between 8.50% and 11.50% across major commercial markets (including Little Rock, Fayetteville, and Fort Smith). Arkansas provides a sales tax exemption for cloud software (SaaS) under Department of Finance and Administration Legal Opinion 20200818, while grocery food items enjoy a statutory reduced state rate of 0.125%. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Arkansas sales or 200 separate transactions.',
    sections: [
      {
        id: 'ar-rates-and-local-surtaxes',
        title: 'Arkansas Base Rate (6.50%) and Municipal Surtaxes (Max 11.50%)',
        body: `Arkansas’s sales tax code combines a moderate state baseline with significant local levies:

- **Statewide Baseline Rate**: **6.50%**. Applies to all retail sales of tangible personal property and taxable enumerated services statewide.
- **Municipal and County Discretionary Surtaxes**:
  - **Little Rock (Pulaski County)**: **9.00% combined rate** (6.50% state + 1.00% county + 1.50% City of Little Rock tax).
  - **Fort Smith (Sebastian County)**: **9.75% combined rate** (6.50% state + 1.25% county + 2.00% city tax).
  - **Fayetteville (Washington County)**: **9.75% combined rate** (6.50% state + 1.25% county + 2.00% municipal tax).
  - **High-Rate Municipalities**: Certain smaller cities add overlapping hospital, school, and park taxes, reaching the statutory maximum ceiling of **11.50%**.`
      },
      {
        id: 'ar-saas-exemption-and-taxability',
        title: 'Taxability Framework: Non-Taxable SaaS, Groceries (0.125%), and Clothing',
        body: `Statutory product taxability under Arkansas Department of Finance and Administration (DFA) regulations:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under DFA Legal Opinion 20200818 and Revenue Legal Counsel rulings, cloud SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.
2. **Food and Food Ingredients (Groceries)**: **Taxed at 0.125% State Rate + Full Local Taxes**. Under Ark. Code Ann. § 26-52-317, qualifying food staples for home consumption enjoy a heavily reduced state rate of 0.125% (essentially exempt at the state level). However, county and municipal sales taxes still apply in full.
3. **Clothing and Apparel**: **Fully Taxable (6.50% - 11.50%)**. Clothing is taxable year-round at combined rates (except during the annual August sales tax holiday).
4. **Freight and Delivery Charges**: Under Ark. Code Ann. § 26-52-103(13), delivery charges billed by the seller in connection with taxable property are included in the taxable gross receipts.`
      },
      {
        id: 'ar-economic-nexus-and-sourcing',
        title: 'Arkansas Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Following post-Wayfair statutory rules codified in Ark. Code Ann. § 26-52-110:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Arkansas upon exceeding either threshold in the current or preceding calendar year:
  - More than **$100,000 in gross revenue** from sales delivered into Arkansas; **OR**
  - **200 or more separate transactions** delivered into the state.
- **Destination Sourcing**: Arkansas operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state, county, and city rate applicable to the delivery address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Arkansas sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'ar-filing-compliance-atap',
        title: 'ATAP Portal Registration, 20th-of-the-Month Deadlines, and Tax Holiday',
        body: `Tax compliance administration enforced by the Arkansas Department of Finance and Administration:

- **ATAP Portal Registration**: Businesses register for an Arkansas Sales and Use Tax Permit online via **ATAP** (Arkansas Taxpayer Access Point). A $50 permit fee applies.
- **Filing Deadlines**: Sales tax returns (Form ET-1) are due on or before the **20th day of the month** following the reporting period for monthly remitters.
- **Timely Filing Discount**: Under Ark. Code Ann. § 26-52-503, retailers who file and pay returns on time may deduct a discount of **2.00% of the first $2,500** of tax due, and **1.00% of the excess**, capped at $1,000 per month.
- **Annual Sales Tax Holiday**: Arkansas holds an annual **2-day Sales Tax Holiday on the first weekend of August**, exempting qualifying clothing ($100 or less per item), school supplies, and electronic devices from state and local sales taxes.
- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 35% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Little Rock (9.00% Rate)',
      scenario: 'A resident in Little Rock, Arkansas purchases $500.00 of commercial tools from a home improvement retailer.',
      inputs: { toolsSubtotal: '$500.00', arkansasStateRate: '6.50%', littleRockCityRate: '1.50%', pulaskiCountyRate: '1.00%', combinedRate: '9.00%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 tools', amount: '$500.00', note: 'Subject to retail sales tax' },
        { label: 'Arkansas State Tax (6.50%)', formula: '$500.00 × 6.50%', amount: '$32.50', note: 'State general fund' },
        { label: 'Pulaski County Tax (1.00%)', formula: '$500.00 × 1.00%', amount: '$5.00', note: 'County sales tax' },
        { label: 'City of Little Rock Tax (1.50%)', formula: '$500.00 × 1.50%', amount: '$7.50', note: 'Municipal sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $32.50 + $5.00 + $7.50', amount: '$545.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Little Rock, the 9.00% combined sales tax on a $500 tool purchase equals $45.00, bringing total checkout cost to $545.00.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Fayetteville Receipt',
      scenario: 'A retail store in Fayetteville, Arkansas (9.75% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', fayettevilleRate: '9.75%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.0975)', amount: '$546.70', note: 'True retail revenue retained' },
        { label: 'Arkansas Sales Tax Owed', formula: '$600.00 - $546.70', amount: '$53.30', note: 'Remitted via ATAP' },
        { label: 'Verification Calculation', formula: '$546.70 × 9.75%', amount: '$53.30', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Fayetteville, the business retains $546.70 net revenue and owes $53.30 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Arkansas for 2026?', answer: 'The statewide base sales tax rate in Arkansas is 6.50%. Local city and county taxes push combined rates between 8.50% and 11.50% across most commercial markets.', sourceUrl: 'https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/' },
      { question: 'Is Software as a Service (SaaS) taxable in Arkansas?', answer: 'No. Under DFA Legal Opinion 20200818, cloud-based SaaS and remotely hosted software are 100% exempt from sales tax.', sourceUrl: 'https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/' },
      { question: 'Are groceries taxed at a lower rate in Arkansas?', answer: 'Yes. Food and food ingredients for home consumption enjoy a heavily reduced state rate of 0.125% (essentially exempt from state tax), though local city and county taxes still apply in full.', sourceUrl: 'https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/' },
      { question: 'What is the economic nexus threshold in Arkansas?', answer: 'Out-of-state remote sellers establish economic nexus in Arkansas when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.', sourceUrl: 'https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/remote-sellers/' },
      { question: 'When is Arkansas’s annual sales tax holiday?', answer: 'Arkansas holds an annual 2-day Sales Tax Holiday on the first weekend of August, exempting qualifying clothing ($100 or less per item), school supplies, and electronic devices from state and local sales taxes.', sourceUrl: 'https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/sales-tax-holiday/' }
    ]
  },

  'mississippi': {
    slug: 'mississippi',
    name: 'Mississippi',
    title: 'Mississippi Sales Tax Calculator (7.00% to 8.00%) | FeeKit',
    metaDescription: 'Calculate Mississippi sales tax with MDOR rates (7.0% state, 8.0% Jackson). Taxable computer software and SaaS under Admin Code 35.IV.5.06, and $250k nexus.',
    h1: 'Mississippi Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.dor.ms.gov/business/sales-and-use-tax',
    citation: 'Miss. Code Ann. Title 27, Chapter 65 (Sales Tax) and Miss. Admin. Code 35.IV.5.06.',
    overview: 'The State of Mississippi levies a statewide base sales and use tax rate of 7.00% under Miss. Code Ann. § 27-65-17. Unlike most southern states, Mississippi has very few general local municipal sales taxes: the vast majority of cities (including Gulfport, Biloxi, Southaven, and Hattiesburg) levy an exact 7.00% combined rate with zero municipal additions. The City of Jackson imposes a 1.00% infrastructure tax, bringing the combined rate to 8.00%. Mississippi treats Software as a Service (SaaS) and computer software as fully taxable under Miss. Admin. Code 35.IV.5.06. Remote out-of-state sellers establish economic nexus upon reaching $250,000 in annual Mississippi sales.',
    sections: [
      {
        id: 'ms-rates-and-local-options',
        title: 'Mississippi Uniform 7.00% Rate and Jackson 8.00% Infrastructure Tax',
        body: `Mississippi’s sales tax code provides broad geographic stability:

- **Statewide Baseline Rate**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable enumerated services.
- **Minimal Local Surtaxes**: Unlike neighboring states, Mississippi general retail sales are exempt from municipal add-ons across almost all jurisdictions:
  - **Gulfport / Biloxi (Harrison County)**: **7.00% flat rate** (State base with zero local municipal retail tax).
  - **Southaven (DeSoto County)**: **7.00% flat rate** (Standard state baseline).
  - **Jackson (Hinds County)**: **8.00% combined rate** (7.00% state + 1.00% City of Jackson infrastructure tax).
  - **Special Tourism and Restaurant Taxes**: Cities levy specialized 1.00% to 3.00% restaurant and hotel taxes, but these excises do not apply to general retail merchandise.`
      },
      {
        id: 'ms-saas-taxability-and-clothing',
        title: 'Taxability Framework: Fully Taxable SaaS, Groceries (7.00%), and Clothing',
        body: `Statutory product taxability under Mississippi Department of Revenue regulations:

1. **Software as a Service (SaaS) & Cloud Software**: **Fully Taxable (7.00%)**. Under Miss. Admin. Code 35.IV.5.06, Mississippi treats computer software, cloud software, remotely hosted applications, and SaaS access as taxable computer software services subject to the full 7.00% rate.
2. **Groceries & Food for Home Consumption**: **Fully Taxable (7.00%)**. Mississippi is one of only two states that taxes unprepared grocery food staples at the full standard state sales tax rate of 7.00%.
3. **Clothing and Footwear**: **Fully Taxable (7.00%)**. Apparel is subject to the standard 7.00% rate year-round (except during the annual July sales tax holiday).
4. **Freight and Delivery Charges**: Under Miss. Code Ann. § 27-65-3, freight and shipping charges billed by the seller are included in the taxable gross proceeds of sale.`
      },
      {
        id: 'ms-economic-nexus-and-sourcing',
        title: 'Mississippi Remote Seller Nexus ($250,000 Threshold) & Sourcing Framework',
        body: `Following post-Wayfair statutory rules codified in Miss. Admin. Code 35.IV.3.09:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Mississippi upon exceeding **$250,000 in gross retail sales** delivered into the state during the preceding 12-month period. (Mississippi has no transaction count threshold).
- **Destination Sourcing**: Mississippi operates under destination sourcing rules for all delivered merchandise. Remote sellers collect Mississippi’s 7.00% (or 8.00% in Jackson) sales tax on all taxable shipments into the state.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Mississippi sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'ms-filing-compliance-tap',
        title: 'Taxpayer Access Point (TAP), 20th-of-the-Month Deadlines, and Tax Holiday',
        body: `Tax compliance administration enforced by the Mississippi Department of Revenue (MDOR):

- **TAP Portal Registration**: Businesses register for a Mississippi Sales Tax Permit online via **Taxpayer Access Point (TAP)**.
- **Filing Deadlines**: Sales tax returns (Form 72-010) are due on or before the **20th day of the month** following the reporting period for monthly remitters.
- **Vendor Compensation (Timely Filing Discount)**: Under Miss. Code Ann. § 27-65-33, retailers who file and pay returns on time may deduct a discount of **2.00% of the sales tax collected** (capped at $50 per month).
- **Annual Sales Tax Holiday**: Mississippi holds an annual **2-day Sales Tax Holiday in late July**, exempting qualifying clothing and footwear priced at **$100 or less per item** from sales tax.
- **Delinquency Penalties**: Late filings incur a penalty of **10% of the unpaid tax**, plus statutory interest at 1% per month.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B SaaS Cloud Subscription in Jackson (8.00% Rate)',
      scenario: 'A business in Jackson, Mississippi purchases a $1,000.00 monthly cloud analytics software subscription.',
      inputs: { saasSubtotal: '$1,000.00', mississippiStateRate: '7.00%', jacksonCityRate: '1.00%', combinedRate: '8.00%' },
      steps: [
        { label: 'Taxable SaaS Base', formula: '$1,000.00 software subscription', amount: '$1,000.00', note: 'Taxable under Miss. Admin. Code 35.IV.5.06' },
        { label: 'Mississippi State Tax (7.00%)', formula: '$1,000.00 × 7.00%', amount: '$70.00', note: 'State general fund' },
        { label: 'Jackson Infrastructure Tax (1.00%)', formula: '$1,000.00 × 1.00%', amount: '$10.00', note: 'City of Jackson share' },
        { label: 'Total Invoiced Checkout Amount', formula: '$1,000.00 + $70.00 + $10.00', amount: '$1,080.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Mississippi law, cloud software subscriptions are fully taxable, adding $80.00 in total sales tax to a $1,000 invoice in Jackson.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500 Gulfport Receipt',
      scenario: 'A retail store in Gulfport, Mississippi (7.00% rate) collects an all-inclusive $500.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', gulfportRate: '7.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.07)', amount: '$467.29', note: 'True retail revenue retained' },
        { label: 'Mississippi Sales Tax Owed', formula: '$500.00 - $467.29', amount: '$32.71', note: 'Remitted via TAP' },
        { label: 'Verification Calculation', formula: '$467.29 × 7.00%', amount: '$32.71', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in Gulfport, the business retains $467.29 net revenue and owes $32.71 in sales tax.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Mississippi for 2026?', answer: 'The statewide sales tax rate in Mississippi is a flat 7.00%. Almost all cities levy 7.00%, with the exception of the City of Jackson, which levies an 8.00% combined rate.', sourceUrl: 'https://www.dor.ms.gov/business/sales-and-use-tax' },
      { question: 'Does Mississippi tax Software as a Service (SaaS)?', answer: 'Yes. Under Miss. Admin. Code 35.IV.5.06, SaaS, cloud software, and computer software services are fully taxable at the standard 7.00% rate.', sourceUrl: 'https://www.dor.ms.gov/business/sales-and-use-tax' },
      { question: 'Are groceries subject to sales tax in Mississippi?', answer: 'Yes. Mississippi is one of only two states that taxes unprepared grocery food items at the full standard sales tax rate of 7.00%.', sourceUrl: 'https://www.dor.ms.gov/business/sales-and-use-tax' },
      { question: 'What is the economic nexus threshold in Mississippi?', answer: 'Out-of-state remote sellers establish economic nexus in Mississippi when gross sales into the state exceed $250,000 in the prior 12-month period. There is no transaction count threshold.', sourceUrl: 'https://www.dor.ms.gov/business/remote-sellers' },
      { question: 'When is Mississippi’s annual sales tax holiday?', answer: 'Mississippi holds an annual 2-day Sales Tax Holiday in late July, exempting qualifying clothing and footwear priced at $100 or less per item from sales tax.', sourceUrl: 'https://www.dor.ms.gov/sales-tax-holiday' }
    ]
  },

  'kansas': {
    slug: 'kansas',
    name: 'Kansas',
    title: 'Kansas Sales Tax Calculator (6.50% to 10.60%) | FeeKit',
    metaDescription: 'Calculate Kansas sales tax with KDOR rates (6.5% state, max 10.60%). Grocery state tax phase-out (0.0%), PLR P-2014-004 SaaS exemption, and $100k nexus.',
    h1: 'Kansas Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.ksrevenue.gov/bussales.html',
    citation: 'Kan. Stat. Ann. Chapter 79, Article 36 (Kansas Retailers Sales Tax Act) and Private Letter Ruling P-2014-004.',
    overview: 'The State of Kansas imposes a statutory baseline sales and use tax rate of 6.50% under K.S.A. 79-3603. Local county governments and incorporated cities levy additional local option sales taxes, pushing combined rates between 7.50% and 10.60% across major commercial markets (including Wichita, Overland Park, and Topeka). Following major tax relief legislation (House Bill 2106), Kansas completed its multi-year phase-out of the state sales tax on groceries, reducing the state grocery tax to 0.00% on January 1, 2025. Kansas treats Software as a Service (SaaS) as a non-taxable service under Private Letter Ruling P-2014-004. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Kansas sales.',
    sections: [
      {
        id: 'ks-rates-and-local-surtaxes',
        title: 'Kansas Base Rate (6.50%) and Municipal Surtaxes (Max 10.60%)',
        body: `Kansas’s sales tax code combines a moderate state baseline with significant local levies:

- **Statewide Baseline Rate**: **6.50%**. Applies to all retail sales of tangible personal property and taxable enumerated services statewide.
- **Municipal and County Discretionary Surtaxes**:
  - **Wichita (Sedgwick County)**: **7.50% combined rate** (6.50% state + 1.00% Sedgwick County local tax).
  - **Overland Park (Johnson County)**: **9.10% combined rate** (6.50% state + 1.475% county + 1.125% municipal taxes).
  - **Topeka (Shawnee County)**: **9.15% combined rate** (6.50% state + 1.15% county + 1.50% city tax).
  - **High-Rate Commercial Plazas**: Certain shopping districts with transportation development districts (TDDs) reach combined rates as high as **10.60%**.`
      },
      {
        id: 'ks-saas-exemption-and-grocery-phaseout',
        title: 'Taxability Framework: Non-Taxable SaaS, 0% State Grocery Tax, and Clothing',
        body: `Statutory product taxability under Kansas Department of Revenue (KDOR) regulations:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Kansas Private Letter Ruling P-2014-004 and Opinion 2007-02, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.
2. **Food and Food Ingredients (Groceries)**: **0.00% State Tax, Local Taxes Apply**. Under House Bill 2106, Kansas phased out its state sales tax on groceries completely by January 1, 2025. Unprepared food items are exempt from the 6.50% state tax, but local city and county sales taxes still apply (typically 1.0% to 3.0%).
3. **Clothing and Apparel**: **Fully Taxable (6.50% - 10.60%)**. Clothing is taxable year-round in Kansas at combined rates.
4. **Freight and Delivery Charges**: Under K.S.A. 79-3602(ll), delivery charges billed by the seller in connection with taxable property are included in the taxable sales price.`
      },
      {
        id: 'ks-economic-nexus-and-sourcing',
        title: 'Kansas Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework',
        body: `Following post-Wayfair statutory rules codified in K.S.A. 79-3670:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Kansas upon exceeding **$100,000 in gross revenue** from retail sales delivered into the state during the current or preceding calendar year. (Kansas’s historic controversial "zero-dollar" notice was overturned by legislative enactment of the $100k threshold).
- **Destination Sourcing**: Kansas operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state, county, and city rate applicable to the delivery address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Kansas sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'ks-filing-compliance-kdor',
        title: 'KDOR Customer Service Center, 25th-of-the-Month Deadlines, and Penalties',
        body: `Tax compliance administration enforced by the Kansas Department of Revenue:

- **Customer Service Center Registration**: Businesses register for a Kansas Retailers’ Sales Tax Registration Certificate online via the **Kansas Customer Service Center**.
- **Filing Deadlines**: Sales tax returns (Form ST-36) are due on or before the **25th day of the month** following the reporting period for monthly remitters.
- **Sales Tax Holiday**: Kansas does not hold an annual sales tax holiday.
- **Delinquency Penalties**: Late filings incur a penalty of **1% per month** of the unpaid tax (up to 24% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Wichita (7.50% Rate)',
      scenario: 'A resident in Wichita, Kansas purchases $500.00 of commercial tools from a home improvement retailer.',
      inputs: { toolsSubtotal: '$500.00', kansasStateRate: '6.50%', sedgwickCountyRate: '1.00%', combinedRate: '7.50%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 tools', amount: '$500.00', note: 'Subject to retail sales tax' },
        { label: 'Kansas State Tax (6.50%)', formula: '$500.00 × 6.50%', amount: '$32.50', note: 'State general fund' },
        { label: 'Sedgwick County Tax (1.00%)', formula: '$500.00 × 1.00%', amount: '$5.00', note: 'County sales tax share' },
        { label: 'Total Kansas Sales Tax', formula: '$32.50 + $5.00', amount: '$37.50', note: 'Combined 7.50% sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $37.50', amount: '$537.50', note: 'Total customer payment' }
      ],
      takeaway: 'In Wichita, the 7.50% combined sales tax on a $500 tool purchase equals $37.50, bringing total checkout cost to $537.50.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Overland Park Receipt',
      scenario: 'A retail store in Overland Park, Kansas (9.10% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', overlandParkRate: '9.10%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.091)', amount: '$549.95', note: 'True retail revenue retained' },
        { label: 'Kansas Sales Tax Owed', formula: '$600.00 - $549.95', amount: '$50.05', note: 'Remitted via KDOR' },
        { label: 'Verification Calculation', formula: '$549.95 × 9.10%', amount: '$50.05', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Overland Park, the business retains $549.95 net revenue and owes $50.05 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Kansas for 2026?', answer: 'The statewide base sales tax rate in Kansas is 6.50%. Local city, county, and special taxing district taxes push combined rates between 7.50% and 10.60% across most commercial markets.', sourceUrl: 'https://www.ksrevenue.gov/bussales.html' },
      { question: 'Is Software as a Service (SaaS) taxable in Kansas?', answer: 'No. Under Kansas Private Letter Ruling P-2014-004, cloud-based SaaS and remotely hosted software are classified as non-taxable services.', sourceUrl: 'https://www.ksrevenue.gov/bussales.html' },
      { question: 'What is the sales tax rate on groceries in Kansas?', answer: 'Under House Bill 2106, the Kansas state sales tax on groceries was completely eliminated (reduced to 0.00%) as of January 1, 2025. However, local city and county sales taxes (typically 1.0% to 3.0%) still apply.', sourceUrl: 'https://www.ksrevenue.gov/foodsales.html' },
      { question: 'What is the economic nexus threshold in Kansas?', answer: 'Out-of-state remote sellers establish economic nexus in Kansas when retail sales delivered into the state exceed $100,000 in gross revenue during the current or preceding calendar year.', sourceUrl: 'https://www.ksrevenue.gov/remotesellers.html' },
      { question: 'Does Kansas hold an annual sales tax holiday?', answer: 'No. Kansas does not host an annual sales tax holiday.', sourceUrl: 'https://www.ksrevenue.gov/bussales.html' }
    ]
  },

  'new-mexico': {
    slug: 'new-mexico',
    name: 'New Mexico',
    title: 'New Mexico Gross Receipts Tax Calculator (5.00% to 9.0625%) | FeeKit',
    metaDescription: 'Calculate New Mexico Gross Receipts Tax (GRT) with TRD rates (5.0% state, max 9.0625%). Comprehensive taxation of SaaS, services, and $100k remote seller nexus.',
    h1: 'New Mexico Gross Receipts Tax (GRT) Calculator & TRD Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.tax.newmexico.gov/businesses/gross-receipts-tax/',
    citation: 'N.M. Stat. Ann. Chapter 7, Article 9 (Gross Receipts and Compensating Tax Act).',
    overview: 'Unlike traditional retail sales tax states where the tax is levied directly upon the consumer, the State of New Mexico levies a Gross Receipts Tax (GRT) under NMSA 1978, § 7-9-4. GRT is an excise tax imposed upon the seller for the privilege of engaging in business in New Mexico. While merchants routinely pass this economic cost forward to purchasers on the invoice, the business remains legally liable for the tax. New Mexico imposes a statewide base GRT rate of 5.00% (reduced from 5.125% in 2023), but county and municipal local option taxes push combined rates between 6.50% and 9.0625% across major urban areas (including Albuquerque, Santa Fe, and Las Cruces). Virtually all services, cloud computing, and SaaS are fully taxable under New Mexico GRT.',
    sections: [
      {
        id: 'nm-grt-architecture-and-rates',
        title: 'New Mexico GRT Architecture: State Base (5.00%) and Municipal Additions',
        body: `New Mexico’s Gross Receipts Tax code combines a state baseline with localized city and county options:

- **Statewide Baseline GRT Rate**: **5.00%**. Governed by NMSA 1978, § 7-9-4, applying to gross receipts from sales of property and performance of services.
- **Municipal and County Local Option Taxes**:
  - **Albuquerque (Bernalillo County)**: **7.875% combined rate** (5.00% state + 2.875% Bernalillo County and City of Albuquerque GRT).
  - **Santa Fe (Santa Fe County)**: **8.4375% combined rate** (5.00% state + 3.4375% Santa Fe municipal/county GRT).
  - **Las Cruces (Doña Ana County)**: **8.3125% combined rate** (5.00% state + 3.3125% Doña Ana County and Las Cruces GRT).
  - **Taos (Taos County)**: **8.6875% combined rate** (Combines state, county, and municipal tourism levies).`
      },
      {
        id: 'nm-services-saas-broad-taxability',
        title: 'Taxability Framework: Broad Taxation of SaaS, Professional Services, and Goods',
        body: `Because New Mexico operates a Gross Receipts Tax rather than a narrow sales tax, the tax base is extraordinarily broad:

1. **Software as a Service (SaaS) & Cloud Services**: **Fully Taxable (5.00% - 9.0625%)**. Under NMSA 1978, § 7-9-3.5, gross receipts from selling or licensing property, including cloud software access, digital services, and SaaS, are fully subject to GRT.
2. **Professional and Consulting Services**: **Fully Taxable**. Legal services, accounting, marketing, engineering, and architectural services performed in or sourced to New Mexico are subject to full GRT rates.
3. **Food and Groceries**: **Exempt from State GRT**. Under NMSA 1978, § 7-9-92, receipts from the retail sale of food at grocery stores are eligible for a state GRT deduction. However, certain local option taxes may still apply.
4. **Freight and Delivery Charges**: Freight and transportation charges are taxable gross receipts under New Mexico law unless a specific statutory deduction applies.`
      },
      {
        id: 'nm-economic-nexus-and-sourcing',
        title: 'New Mexico Remote Seller Economic Nexus ($100,000 Threshold) & Sourcing',
        body: `Following post-Wayfair statutory rules codified in NMSA 1978, § 7-9-3.3:

- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in New Mexico upon exceeding **$100,000 in total gross receipts** from sales or services delivered into the state during the previous calendar year.
- **Destination Sourcing (July 2021 Reform)**: Under House Bill 6, New Mexico transitioned completely from origin-based sourcing to **destination-based sourcing** for all delivered goods and services. Remote and in-state sellers report GRT based on the customer’s delivery address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit New Mexico GRT on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'nm-filing-compliance-tap',
        title: 'Taxpayer Access Point (TAP), 25th-of-the-Month Deadlines, and Tax Holiday',
        body: `Tax compliance administration enforced by the New Mexico Taxation and Revenue Department (TRD):

- **TAP Portal Registration**: Businesses register for a New Mexico Business Tax ID online via **TAP** (Taxpayer Access Point).
- **Filing Deadlines**: GRT returns (Form TRD-41413) are due on or before the **25th day of the month** following the reporting period for monthly remitters.
- **Annual Gross Receipts Tax Holiday**: New Mexico holds an annual **3-day Gross Receipts Tax Holiday on the first weekend of August**, exempting qualifying clothing and footwear ($100 or less per item), school supplies ($30 or less), and computers ($1,000 or less).
- **Delinquency Penalties**: Late filings incur a penalty of **2% per month** of the unpaid tax (up to 20% maximum), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Professional Consulting & Software Invoice in Albuquerque (7.875% Rate)',
      scenario: 'A technology consulting firm in Albuquerque, New Mexico bills an engineering client $2,000.00 for technical consulting and cloud software services.',
      inputs: { consultingSubtotal: '$2,000.00', albuquerqueGrtRate: '7.875%' },
      steps: [
        { label: 'Taxable Service Base', formula: '$2,000.00 consulting services', amount: '$2,000.00', note: 'Subject to New Mexico GRT' },
        { label: 'New Mexico Gross Receipts Tax (7.875%)', formula: '$2,000.00 × 7.875%', amount: '$157.50', note: 'Includes 5.0% state + 2.875% local GRT' },
        { label: 'Total Invoiced Checkout Amount', formula: '$2,000.00 + $157.50', amount: '$2,157.50', note: 'Total customer payment' }
      ],
      takeaway: 'Under New Mexico’s broad GRT laws, professional services and cloud software are fully taxable, adding $157.50 in tax to a $2,000 invoice in Albuquerque.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500 Santa Fe Receipt',
      scenario: 'A retail store in Santa Fe, New Mexico (8.4375% combined GRT rate) collects an all-inclusive $500.00 payment. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$500.00', santaFeRate: '8.4375%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.084375)', amount: '$461.09', note: 'True retail revenue retained' },
        { label: 'New Mexico GRT Owed', formula: '$500.00 - $461.09', amount: '$38.91', note: 'Remitted via TAP' },
        { label: 'Verification Calculation', formula: '$461.09 × 8.4375%', amount: '$38.91', note: 'Reconciles exactly to $500.00 receipt' }
      ],
      takeaway: 'From a $500.00 gross receipt in Santa Fe, the business retains $461.09 net revenue and owes $38.91 in Gross Receipts Tax.'
    },
    faqs: [
      { question: 'What is Gross Receipts Tax (GRT) in New Mexico?', answer: 'GRT is an excise tax levied on the business for the privilege of conducting business in New Mexico. Unlike standard sales taxes, GRT applies broadly to virtually all goods, services, and digital products.', sourceUrl: 'https://www.tax.newmexico.gov/businesses/gross-receipts-tax/' },
      { question: 'What is the base GRT rate in New Mexico for 2026?', answer: 'The statewide base GRT rate in New Mexico is 5.00%. Local city and county taxes push combined rates between 6.50% and 9.0625% across major urban areas.', sourceUrl: 'https://www.tax.newmexico.gov/businesses/gross-receipts-tax/' },
      { question: 'Is Software as a Service (SaaS) taxable in New Mexico?', answer: 'Yes. Under NMSA 1978, § 7-9-3.5, cloud software, SaaS, digital services, and software licensing are fully subject to New Mexico Gross Receipts Tax.', sourceUrl: 'https://www.tax.newmexico.gov/businesses/gross-receipts-tax/' },
      { question: 'What is the economic nexus threshold in New Mexico?', answer: 'Out-of-state remote sellers establish economic nexus in New Mexico when gross receipts delivered into the state exceed $100,000 during the previous calendar year.', sourceUrl: 'https://www.tax.newmexico.gov/businesses/remote-sellers/' },
      { question: 'When is New Mexico’s annual tax holiday?', answer: 'New Mexico holds an annual 3-day Gross Receipts Tax Holiday on the first weekend of August, exempting qualifying clothing and footwear ($100 or less per item), school supplies ($30 or less), and computers ($1,000 or less).', sourceUrl: 'https://www.tax.newmexico.gov/businesses/gross-receipts-tax-holiday/' }
    ]
  },

  'nebraska': {
    slug: 'nebraska',
    name: 'Nebraska',
    title: 'Nebraska Sales Tax Calculator (5.50% to 7.50%) | FeeKit',
    metaDescription: 'Calculate Nebraska sales tax with Department of Revenue rates (5.5% state, max 7.50% Omaha). Regulation 1-071 SaaS exemption, destination sourcing, and $100k nexus.',
    h1: 'Nebraska Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://revenue.nebraska.gov/businesses/sales-and-use-tax',
    citation: 'Neb. Rev. Stat. Chapter 77, Article 27 (Nebraska Revenue Act of 1967) and Sales and Use Tax Reg 1-071.',
    overview: 'The State of Nebraska levies a statutory base sales and use tax rate of 5.50% under Neb. Rev. Stat. § 77-2701.02. Local municipalities are authorized to levy local option sales taxes ranging from 0.50% to 2.00%, pushing combined retail sales tax rates between 6.00% and 7.50% across major commercial markets (including Omaha, Lincoln, and Bellevue). Omaha levies a combined 7.00% rate, while Lincoln imposes a 7.25% rate. Nebraska provides a sales tax exemption for cloud software (SaaS) under Sales and Use Tax Regulation 1-071. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Nebraska sales or 200 separate transactions.',
    sections: [
      {
        id: 'ne-rates-and-municipal-options',
        title: 'Nebraska Base Rate (5.50%) and Municipal Option Surtaxes (Max 7.50%)',
        body: `Nebraska’s sales tax code combines a uniform state baseline with city-level options:

- **Statewide Baseline Rate**: **5.50%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable enumerated services.
- **Municipal Local Option Taxes**:
  - **Omaha (Douglas County)**: **7.00% combined rate** (5.50% state + 1.50% City of Omaha municipal tax).
  - **Lincoln (Lancaster County)**: **7.25% combined rate** (5.50% state + 1.75% City of Lincoln municipal tax).
  - **Bellevue (Sarpy County)**: **7.00% combined rate** (5.50% state + 1.50% City of Bellevue tax).
  - **High-Rate Municipalities**: Certain smaller cities levy a 2.00% municipal tax, reaching the statutory maximum ceiling of **7.50%**.`
      },
      {
        id: 'ne-saas-exemption-and-taxability',
        title: 'Taxability Framework: Non-Taxable SaaS, Groceries, and Clothing',
        body: `Statutory product taxability under Nebraska Department of Revenue regulations:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Nebraska Sales and Use Tax Regulation 1-071, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.
2. **Clothing and Footwear**: **Fully Taxable (5.50% - 7.50%)**. Everyday apparel and footwear are fully taxable at combined rates year-round.
3. **Food and Food Ingredients (Groceries)**: **Exempt**. Food items for home consumption are exempt under Neb. Rev. Stat. § 77-2704.10. Prepared hot food, candy, and soft drinks are taxable at full rates.
4. **Freight and Delivery Charges**: Under Neb. Rev. Stat. § 77-2701.35, delivery charges billed by the retailer for taxable products are included in the taxable sales price.`
      },
      {
        id: 'ne-economic-nexus-and-sourcing',
        title: 'Nebraska Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Following post-Wayfair statutory rules codified in Neb. Rev. Stat. § 77-2701.13:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Nebraska upon exceeding either threshold in the current or preceding calendar year:
  - More than **$100,000 in gross revenue** from retail sales delivered into Nebraska; **OR**
  - **200 or more separate retail transactions** delivered into the state.
- **Destination Sourcing**: Nebraska operates under destination sourcing rules for all delivered merchandise. Remote sellers collect the exact combined state and municipal rate applicable to the delivery address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Nebraska sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'ne-filing-compliance-nebtax',
        title: 'NebTax Portal Registration, 20th-of-the-Month Deadlines, and Penalties',
        body: `Tax compliance administration enforced by the Nebraska Department of Revenue:

- **NebTax Portal Registration**: Businesses register for a Nebraska Sales Tax Permit online via **NebTax**.
- **Filing Deadlines**: Sales tax returns (Form 10) are due on or before the **20th day of the month** following the reporting period for monthly remitters.
- **Collection Fee (Timely Filing Discount)**: Under Neb. Rev. Stat. § 77-2708, retailers who file and pay returns on time may deduct a collection fee of **3.00% of the first $3,000** of tax collected, and **0.33% of the excess**, capped at $150 per month.
- **Sales Tax Holiday**: Nebraska does not host an annual sales tax holiday.
- **Delinquency Penalties**: Late filings incur a penalty of **$25 or 10% of the unpaid tax** (whichever is greater), plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Omaha (7.00% Rate)',
      scenario: 'A resident in Omaha, Nebraska purchases $500.00 of commercial tools from a home improvement retailer.',
      inputs: { toolsSubtotal: '$500.00', nebraskaStateRate: '5.50%', omahaCityRate: '1.50%', combinedRate: '7.00%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 tools', amount: '$500.00', note: 'Subject to retail sales tax' },
        { label: 'Nebraska State Tax (5.50%)', formula: '$500.00 × 5.50%', amount: '$27.50', note: 'State general fund' },
        { label: 'City of Omaha Tax (1.50%)', formula: '$500.00 × 1.50%', amount: '$7.50', note: 'Municipal sales tax share' },
        { label: 'Total Nebraska Sales Tax', formula: '$27.50 + $7.50', amount: '$35.00', note: 'Combined 7.00% sales tax' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $35.00', amount: '$535.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Omaha, the 7.00% combined sales tax on a $500 tool purchase equals $35.00, bringing total checkout cost to $535.00.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Lincoln Receipt',
      scenario: 'A retail store in Lincoln, Nebraska (7.25% combined rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', lincolnRate: '7.25%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.0725)', amount: '$559.44', note: 'True retail revenue retained' },
        { label: 'Nebraska Sales Tax Owed', formula: '$600.00 - $559.44', amount: '$40.56', note: 'Remitted via NebTax' },
        { label: 'Verification Calculation', formula: '$559.44 × 7.25%', amount: '$40.56', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Lincoln, the business retains $559.44 net revenue and owes $40.56 in sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Nebraska for 2026?', answer: 'The statewide base sales tax rate in Nebraska is 5.50%. Municipal local option taxes push combined rates between 6.00% and 7.50% across most commercial markets.', sourceUrl: 'https://revenue.nebraska.gov/businesses/sales-and-use-tax' },
      { question: 'Is Software as a Service (SaaS) taxable in Nebraska?', answer: 'No. Under Nebraska Sales and Use Tax Regulation 1-071, cloud-based SaaS and remotely hosted software are classified as non-taxable services.', sourceUrl: 'https://revenue.nebraska.gov/businesses/sales-and-use-tax' },
      { question: 'Are groceries subject to sales tax in Nebraska?', answer: 'Unprepared food items for home consumption are 100% exempt from sales tax under Neb. Rev. Stat. § 77-2704.10. Prepared food and candy are taxable.', sourceUrl: 'https://revenue.nebraska.gov/businesses/sales-and-use-tax' },
      { question: 'What is the economic nexus threshold in Nebraska?', answer: 'Out-of-state remote sellers establish economic nexus in Nebraska when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.', sourceUrl: 'https://revenue.nebraska.gov/businesses/remote-sellers' },
      { question: 'Does Nebraska have an annual sales tax holiday?', answer: 'No. Nebraska does not host an annual sales tax holiday.', sourceUrl: 'https://revenue.nebraska.gov/businesses/sales-and-use-tax' }
    ]
  },

  'idaho': {
    slug: 'idaho',
    name: 'Idaho',
    title: 'Idaho Sales Tax Calculator (6.00% to 9.00%) | FeeKit',
    metaDescription: 'Calculate Idaho sales tax with Tax Commission rates (6.0% state, max 9.0% resort cities). Rule 027 SaaS exemption, grocery tax credit, and $100k nexus.',
    h1: 'Idaho Sales Tax Calculator & State Tax Commission Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.idaho.gov/taxes/sales-use/',
    citation: 'Idaho Code Title 63, Chapter 36 (Idaho Sales Tax Act) and Idaho Admin. Code r. 35.01.02.027.',
    overview: 'The State of Idaho imposes a statewide base sales and use tax rate of 6.00% under Idaho Code § 63-3619. Under Idaho statutory law, general municipalities and counties are prohibited from enacting local option retail sales taxes, ensuring a standardized 6.00% rate across major urban centers (including Boise, Meridian, Nampa, and Idaho Falls). However, a small number of qualifying resort communities (including Sun Valley, Ketchum, and McCall) levy localized resort sales taxes ranging from 1.00% to 3.00%, creating combined rates up to 9.00% in tourist zones. Idaho treats Software as a Service (SaaS) as a non-taxable service under Administrative Rule 027. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in annual Idaho sales.',
    sections: [
      {
        id: 'id-rates-and-resort-cities',
        title: 'Idaho Base Rate (6.00%) and Resort Community Surtaxes (Max 9.00%)',
        body: `Idaho’s sales tax code combines a uniform state baseline with destination resort options:

- **Standard Statewide Baseline**: **6.00%**. Applies to all retail sales of tangible personal property, digital property, and taxable services across general commercial areas.
- **Zero General Municipal Taxes**: General cities and counties cannot levy retail sales taxes. The rate in Boise (Ada County), Meridian, and Idaho Falls is identical at 6.00%.
- **Resort Community Sales Taxes (1.00% - 3.00%)**: Under Idaho Code § 50-1043, designated resort cities with populations under 10,000 whose economies rely on tourism are authorized to levy local resort taxes:
  - **Sun Valley / Ketchum (Blaine County Resort)**: **9.00% combined rate** (6.00% state + 3.00% municipal resort tax).
  - **McCall (Valley County Resort)**: **7.00% combined rate** (6.00% state + 1.00% municipal resort tax).
  - **Sandpoint (Bonner County Resort)**: **7.00% combined rate** (6.00% state + 1.00% resort tax).`
      },
      {
        id: 'id-saas-exemption-and-grocery-credit',
        title: 'Taxability Framework: Non-Taxable SaaS, Groceries (Grocery Credit), and Clothing',
        body: `Statutory product taxability under Idaho State Tax Commission regulations:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Idaho Administrative Code r. 35.01.02.027, cloud-based SaaS, remotely hosted software, and online data access are classified as non-taxable services, provided the customer accesses software hosted on remote vendor servers without taking physical delivery of executable software.
2. **Groceries & Food for Home Consumption**: **Taxed at Full 6.00% Rate (Grocery Credit System)**. Idaho is one of the few states that taxes groceries at the full 6.00% state rate at checkout. To offset this, Idaho provides a statutory Grocery Credit (typically $100 to $120 per resident) claimed on annual state income tax returns.
3. **Clothing and Apparel**: **Fully Taxable (6.00% - 9.00%)**. Clothing is taxable year-round in Idaho at standard rates.
4. **Freight and Delivery Charges**: Separately stated transportation and delivery charges are exempt from Idaho sales tax under Idaho Code § 63-3613.`
      },
      {
        id: 'id-economic-nexus-and-sourcing',
        title: 'Idaho Remote Seller Nexus ($100,000 Threshold) & Sourcing Framework',
        body: `Following post-Wayfair statutory rules codified in Idaho Code § 63-3615A:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Idaho upon exceeding **$100,000 in cumulative gross sales** delivered into the state during the current or preceding calendar year. (Idaho has no transaction count threshold).
- **Destination Sourcing**: Idaho operates under destination sourcing rules for all delivered merchandise. Remote sellers collect Idaho’s 6.00% state sales tax (plus local resort taxes where applicable) on all taxable shipments into the state.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Idaho sales tax on all marketplace orders, shielding third-party sellers from direct filing duties.`
      },
      {
        id: 'id-filing-compliance-tap',
        title: 'TAP Portal Registration, 20th-of-the-Month Deadlines, and Penalties',
        body: `Tax compliance administration enforced by the Idaho State Tax Commission:

- **TAP Portal Registration**: Businesses register for an Idaho Sales Tax Permit online via **Taxpayer Access Point (TAP)**. There is no state permit fee.
- **Filing Deadlines**: Sales tax returns (Form 850) are due on or before the **20th day of the month** following the reporting period for monthly remitters.
- **Sales Tax Holiday**: Idaho does not host an annual sales tax holiday.
- **Delinquency Penalties**: Late filings incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus a minimum $10 penalty and statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Boise (6.00% Flat Rate)',
      scenario: 'A resident in Boise, Idaho purchases $500.00 of commercial tools from a home improvement retailer.',
      inputs: { toolsSubtotal: '$500.00', idahoStateRate: '6.00%', localMunicipalRate: '0.00%' },
      steps: [
        { label: 'Taxable Goods Base', formula: '$500.00 tools', amount: '$500.00', note: 'Subject to retail sales tax' },
        { label: 'Idaho State Tax (6.00%)', formula: '$500.00 × 6.00%', amount: '$30.00', note: 'State general fund' },
        { label: 'Total Invoiced Checkout Amount', formula: '$500.00 + $30.00', amount: '$530.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Boise, the flat 6.00% sales tax on a $500 tool purchase equals $30.00, bringing total checkout cost to $530.00.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600 Sun Valley Receipt',
      scenario: 'A retail store in Sun Valley, Idaho (9.00% combined resort rate) collects an all-inclusive $600.00 payment for taxable goods. What is the net sales revenue?',
      inputs: { totalReceiptCollected: '$600.00', sunValleyRate: '9.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.09)', amount: '$550.46', note: 'True retail revenue retained' },
        { label: 'Idaho Sales Tax Owed', formula: '$600.00 - $550.46', amount: '$49.54', note: 'Split between State (6%) and City Resort Tax (3%)' },
        { label: 'Verification Calculation', formula: '$550.46 × 9.00%', amount: '$49.54', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 gross receipt in Sun Valley, the business retains $550.46 net revenue and owes $49.54 in combined state and resort sales tax.'
    },
    faqs: [
      { question: 'What is the base sales tax rate in Idaho for 2026?', answer: 'The statewide base sales tax rate in Idaho is a flat 6.00%. General cities do not levy municipal sales taxes, though qualifying resort communities (such as Sun Valley) levy local taxes up to 3.00% (totaling 9.00%).', sourceUrl: 'https://tax.idaho.gov/taxes/sales-use/' },
      { question: 'Is Software as a Service (SaaS) taxable in Idaho?', answer: 'No. Under Idaho Administrative Code r. 35.01.02.027, cloud-based SaaS and remotely hosted software are classified as non-taxable services.', sourceUrl: 'https://tax.idaho.gov/taxes/sales-use/' },
      { question: 'Are groceries subject to sales tax in Idaho?', answer: 'Yes. Idaho taxes groceries at the full 6.00% sales tax rate at checkout. Residents receive an annual Grocery Tax Credit claimed on their state income tax return to offset this cost.', sourceUrl: 'https://tax.idaho.gov/taxes/income-tax/grocery-credit/' },
      { question: 'What is the economic nexus threshold in Idaho?', answer: 'Out-of-state remote sellers establish economic nexus in Idaho when cumulative sales into the state exceed $100,000 in gross revenue during the current or preceding calendar year.', sourceUrl: 'https://tax.idaho.gov/taxes/sales-use/remote-sellers/' },
      { question: 'Does Idaho have an annual sales tax holiday?', answer: 'No. Idaho does not host an annual sales tax holiday.', sourceUrl: 'https://tax.idaho.gov/taxes/sales-use/' }
    ]
  }
});
