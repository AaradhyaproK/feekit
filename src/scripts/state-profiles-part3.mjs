/**
 * Bespoke content profiles for US State Sales Tax (Part 3: 13 States)
 * West Virginia, Hawaii, New Hampshire, Maine, Rhode Island, Montana,
 * Delaware, South Dakota, North Dakota, Alaska, Vermont, Wyoming, District of Columbia
 */

export const STATE_PROFILES_PART3 = {
  'west-virginia': {
    slug: 'west-virginia',
    name: 'West Virginia',
    title: 'West Virginia Sales Tax Calculator (6.00% to 7.00%) | FeeKit',
    metaDescription: 'Calculate West Virginia Consumers Sales and Service Tax with State Tax Department rates (6.0% state, 7.0% Home Rule cities). Taxable SaaS, groceries exemption, and $100k nexus.',
    h1: 'West Virginia Sales Tax Calculator & State Tax Department Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.wv.gov/Business/SalesAndUseTax/',
    citation: 'W. Va. Code Chapter 11, Article 15 (Consumers Sales and Service Tax) and West Virginia Tax Division Publication TSD-300.',
    overview: 'The State of West Virginia levies a statutory Consumers Sales and Service Tax rate of 6.00% under W. Va. Code § 11-15-3. While West Virginia counties are prohibited from imposing local sales taxes, municipalities participating in the Municipal Home Rule Program are legally authorized to levy a 1.00% municipal sales tax. As a result, major urban centers including Charleston, Huntington, Morgantown, Parkersburg, and Wheeling enforce a combined 7.00% sales tax rate, while unincorporated areas remain at 6.00%. Out-of-state remote sellers establish economic nexus when sales into the state exceed $100,000 in gross revenue or 200 individual transactions.',
    sections: [
      {
        id: 'wv-rate-structure-home-rule',
        title: 'West Virginia Base Rate & Municipal Home Rule Surcharges (6.00% vs 7.00%)',
        body: `West Virginia’s sales tax architecture operates across two distinct municipal tiers:

- **Statewide Base Rate**: **6.00%**. Governed by W. Va. Code § 11-15-3, this baseline applies across all unincorporated territories and municipalities without Home Rule sales taxes.
- **Municipal Home Rule Cities (1.00% Local Add-On)**: **7.00% combined rate**. Over 40 municipalities have enacted a 1.00% local sales tax under the West Virginia Municipal Home Rule Program:
  - **Charleston (Kanawha County)**: **7.00%** (6.00% state + 1.00% city).
  - **Huntington (Cabell / Wayne Counties)**: **7.00%** (6.00% state + 1.00% city).
  - **Morgantown (Monongalia County)**: **7.00%** (6.00% state + 1.00% city).
  - **Wheeling (Ohio County)**: **7.00%** (6.00% state + 1.00% city).
  - **Parkersburg (Wood County)**: **7.00%** (6.00% state + 1.00% city).
- **County-Level Taxes**: Counties do not possess independent authority to levy general retail sales taxes in West Virginia.`
      },
      {
        id: 'wv-taxability-groceries-saas-clothing',
        title: 'Taxability Framework: SaaS Taxation, Grocery Exemption, and Delivery Rules',
        body: `Statutory product taxability rules enforced by the West Virginia State Tax Department:

1. **Software as a Service (SaaS)**: **Fully Taxable (6.00% - 7.00%)**. Under W. Va. Code § 11-15-2(b)(8) and Administrative Notice 2014-04, SaaS and electronic software hosting are classified as taxable computer services. Any remote software access provided to users in West Virginia is subject to full state and municipal sales tax.
2. **Food for Home Consumption (Groceries)**: **100% Exempt**. Effective July 1, 2013, West Virginia eliminated the state sales tax on qualifying grocery food under W. Va. Code § 11-15-3a. Prepared meals, catering, vending machine items, and soft drinks remain subject to the full standard rate.
3. **Everyday Clothing and Footwear**: **Fully Taxable**. Clothing is subject to standard state and local rates year-round, except during the annual August sales tax holiday.
4. **Freight and Delivery Fees**: Shipping and delivery charges billed by the retailer in connection with the sale of taxable merchandise are considered part of the gross taxable sales price under W. Va. Code § 11-15-2.`
      },
      {
        id: 'wv-economic-nexus-and-sourcing',
        title: 'West Virginia Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Following House Bill 2496 and post-Wayfair statutory updates:

- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in West Virginia upon meeting either condition during the current or preceding calendar year:
  - More than **$100,000 in gross revenue** from sales delivered into West Virginia; **OR**
  - **200 or more separate transactions** delivered into the state.
- **Destination Sourcing**: West Virginia is a full member of the Streamlined Sales and Use Tax Agreement (SSUTA) and enforces strict destination sourcing. Remote merchants collect the combined rate (6.00% or 7.00%) based on the delivery destination where the buyer takes physical or electronic possession.
- **Marketplace Facilitator Rule**: Online marketplaces (Amazon, eBay, Walmart, etc.) are statutorily required to collect and remit West Virginia sales tax on all sales facilitated for third-party sellers.`
      },
      {
        id: 'wv-registration-and-filing-compliance',
        title: 'Business Registration, MyTaxes Filing, and Late Penalties',
        body: `Tax compliance requirements administered by the West Virginia State Tax Department:

- **Business Registration**: Remote and in-state retailers must obtain a Business Registration Certificate via the **MyTaxes** portal before making taxable sales.
- **Return Due Dates**: Standard monthly and quarterly returns (Form CST-200CU) are due on or before the **20th day of the month** following the end of the reporting period.
- **Delinquency Penalties**: Late filing incurs a penalty of **5% per month** of the unpaid tax, up to a statutory ceiling of **25%** under W. Va. Code § 11-10-18, plus statutory monthly interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Software Subscription in Charleston (7.00% Combined Rate)',
      scenario: 'An architectural firm headquartered in Charleston, West Virginia subscribes to an enterprise SaaS modeling suite billed at $1,500.00 annually by an out-of-state vendor.',
      inputs: { annualSaaSContract: '$1,500.00', charlestonCombinedRate: '7.00% (6% State + 1% Home Rule)' },
      steps: [
        { label: 'Taxable Service Base', formula: '$1,500.00 software subscription', amount: '$1,500.00', note: 'SaaS is taxable under W. Va. Code § 11-15-2' },
        { label: 'State Consumers Sales Tax (6.00%)', formula: '$1,500.00 × 6.00%', amount: '$90.00', note: 'West Virginia state base tax' },
        { label: 'Charleston Municipal Home Rule Tax (1.00%)', formula: '$1,500.00 × 1.00%', amount: '$15.00', note: 'City of Charleston local option' },
        { label: 'Total Invoiced SaaS Cost', formula: '$1,500.00 + $90.00 + $15.00', amount: '$1,605.00', note: 'Full customer remittance' }
      ],
      takeaway: 'Because West Virginia classifies remote software access as a taxable computer service, the Charleston firm incurs a 7.00% combined tax ($105.00 total) on the SaaS contract.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500.00 Morgantown Invoice',
      scenario: 'A retail contractor in Morgantown collects a flat $500.00 tax-inclusive payment for taxable equipment rental at a combined 7.00% rate. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$500.00', combinedRate: '7.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.07)', amount: '$467.29', note: 'Retained business gross revenue' },
        { label: 'Combined Sales Tax Due', formula: '$500.00 - $467.29', amount: '$32.71', note: 'State ($28.04) and Morgantown ($4.67)' },
        { label: 'Verification Calculation', formula: '$467.29 × 7.00%', amount: '$32.71', note: 'Reconciles exactly to $500.00 total' }
      ],
      takeaway: 'From a $500.00 tax-inclusive transaction in Morgantown, the merchant retains $467.29 and remits $32.71 to the West Virginia State Tax Department.'
    },
    faqs: [
      { question: 'What is the sales tax rate in West Virginia?', answer: 'The baseline sales tax rate is 6.00%. In municipalities that have enacted a Home Rule local tax (such as Charleston, Huntington, and Morgantown), the combined rate is 7.00%.', sourceUrl: 'https://tax.wv.gov/Business/SalesAndUseTax/' },
      { question: 'Is Software as a Service (SaaS) taxable in West Virginia?', answer: 'Yes. West Virginia treats SaaS and remote cloud software access as taxable computer services subject to the full combined sales tax rate of 6.00% to 7.00%.', sourceUrl: 'https://tax.wv.gov/Business/SalesAndUseTax/' },
      { question: 'Are groceries exempt from sales tax in West Virginia?', answer: 'Yes. Qualifying food items for home consumption are 100% exempt from West Virginia sales tax. Prepared hot foods, soft drinks, and restaurant dining remain fully taxable.', sourceUrl: 'https://tax.wv.gov/Business/SalesAndUseTax/' },
      { question: 'What is the West Virginia economic nexus threshold for remote sellers?', answer: 'Out-of-state remote sellers establish economic nexus upon exceeding $100,000 in gross sales delivered into West Virginia or completing 200 or more individual transactions in the state.', sourceUrl: 'https://tax.wv.gov/Business/SalesAndUseTax/' },
      { question: 'Does West Virginia offer an annual sales tax holiday?', answer: 'Yes. West Virginia holds an annual 3-day Sales Tax Holiday in early August, exempting qualifying clothing and footwear ($125 or less) and laptop/tablet computers ($500 or less).', sourceUrl: 'https://tax.wv.gov/Business/SalesAndUseTax/' }
    ]
  },

  'hawaii': {
    slug: 'hawaii',
    name: 'Hawaii',
    title: 'Hawaii General Excise Tax (GET) Calculator (4.00% to 4.712%) | FeeKit',
    metaDescription: 'Calculate Hawaii General Excise Tax (GET) with Department of Taxation rates (4.0% state, 4.5% county, visible 4.712% pass-through). Broad business taxation, SaaS, and $100k nexus.',
    h1: 'Hawaii General Excise Tax (GET) Calculator & DOTAX Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.hawaii.gov/genexc/',
    citation: 'Haw. Rev. Stat. Chapter 237 (General Excise Tax Law) and Hawaii Administrative Rules Title 18, Chapter 237.',
    overview: 'The State of Hawaii does not impose a conventional consumer retail sales tax. Instead, Hawaii levies a comprehensive General Excise Tax (GET) under Haw. Rev. Stat. Chapter 237. The GET is a gross income privilege tax assessed directly upon businesses for the privilege of conducting commercial activity in the State of Hawaii. While the statutory state base rate is 4.00% on retail commerce (and 0.50% on wholesale activity), counties levy a 0.50% surcharge, resulting in a 4.50% effective statutory tax in Honolulu, Maui, Kauai, and Hawaii Counties. Because businesses are taxed on their gross revenue—including any tax reimbursed by the consumer—merchants are legally permitted to visibly pass on an adjusted rate of up to 4.712% to avoid paying tax out of pocket.',
    sections: [
      {
        id: 'hi-get-structure-and-pass-through-math',
        title: 'Hawaii GET Mechanics: The Statutory 4.50% Rate vs the 4.712% Pass-Through',
        body: `Hawaii’s GET contains a unique statutory mechanism that differentiates the legal tax rate from the consumer checkout surcharge:

- **State Statutory Base Rate**: **4.00%**. Applies to all retail sales of goods, digital products, and services under Haw. Rev. Stat. § 237-13.
- **County Surcharges (0.50%)**: Enacted by Honolulu County (to fund the rail transit project), Maui County, Kauai County, and Hawaii County (Big Island), raising the statutory retail rate to **4.50%**.
- **The "Tax-on-Tax" Pass-Through Formula**: Under Hawaii law, when a business collects GET from a customer, that collected tax is itself considered gross income subject to GET. To prevent the merchant from incurring a loss, Hawaii DOTAX allows retailers to use the gross-up formula:
  $$\\text{Visible Pass-Through Rate} = \\frac{\\text{Statutory Rate}}{1 - \\text{Statutory Rate}} = \\frac{0.045}{1 - 0.045} = 4.71204\\%$$
  Therefore, consumers in Honolulu and across all counties routinely see an effective checkout surcharge of **4.712%** (or **4.166%** in jurisdictions without county surcharges).`
      },
      {
        id: 'hi-comprehensive-tax-base-services-groceries',
        title: 'Comprehensive Tax Base: Full Taxation of SaaS, Groceries, Clothing, and Services',
        body: `Unlike continental sales tax systems that exempt services and consumer staples, Hawaii GET has one of the broadest tax bases in the United States:

1. **Software as a Service (SaaS) & Cloud Technology**: **Fully Taxable (4.00% - 4.50%)**. Any electronic data processing, software access, digital download, or technical consulting rendered to a Hawaii resident or business is subject to retail GET.
2. **Groceries & Food for Home Consumption**: **Fully Taxable (4.00% - 4.50%)**. Hawaii does not provide a general grocery exemption. Fresh fruits, vegetables, bread, milk, and meat are taxed identically to durable electronics. To offset this burden for low-income residents, Hawaii offers an income tax credit rather than a point-of-sale exemption.
3. **Everyday Clothing and Footwear**: **Fully Taxable**. Apparel incurs standard retail GET year-round.
4. **Professional & Personal Services**: Legal representation, accounting, medical visits, architectural consulting, and freelance design are all fully subject to GET.`
      },
      {
        id: 'hi-economic-nexus-and-remote-seller-rules',
        title: 'Hawaii Remote Seller Economic Nexus ($100,000 / 200 Transactions)',
        body: `Codified under Haw. Rev. Stat. § 237-2.5 following the Supreme Court Wayfair ruling:

- **Economic Nexus Threshold**: An out-of-state remote merchant or marketplace seller must obtain a Hawaii GET license and remit excise tax if, during the current or preceding calendar year, they have:
  - Gross income of **$100,000 or more** from sales into Hawaii; **OR**
  - **200 or more separate transactions** delivered into Hawaii.
- **Marketplace Facilitator Law**: Facilitators (Amazon, Etsy, eBay, etc.) collect and remit GET on facilitated retail transactions, relieving independent third-party sellers of liability on marketplace orders.`
      },
      {
        id: 'hi-registration-and-filing-dotax',
        title: 'GET Licensing (Form BB-1), Periodic Returns (Form G-45), and Annual Reconciliation (Form G-49)',
        body: `Compliance obligations enforced by the Hawaii Department of Taxation (DOTAX):

- **GET Licensing**: Businesses must register online via **Hawaii Tax Online (HTO)** and pay a one-time $20 license registration fee to receive a Hawaii General Excise Tax license.
- **Periodic Filing (Form G-45)**: Periodic returns are filed monthly, quarterly, or semi-annually depending on annual tax liability. Returns are due on the **20th day of the calendar month** following the close of the period.
- **Annual Reconciliation (Form G-49)**: All taxpayers must file an annual summary return on or before the 20th day of the fourth month following the close of the tax year (April 20 for calendar-year businesses).
- **Statutory Penalties**: Delinquent returns incur a 5% per month late filing penalty (up to 25%) plus a 0.666% monthly statutory interest rate.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Electronics Checkout in Honolulu (4.712% Visible Pass-Through)',
      scenario: 'A consumer in Honolulu purchases a $600.00 digital camera from a retail store that visibly passes through the statutory GET using the state-approved 4.712% rate.',
      inputs: { cameraSubtotal: '$600.00', passThroughRate: '4.712% (Honolulu County 4.5% Base Grossed Up)' },
      steps: [
        { label: 'Camera Merchandise Price', formula: '$600.00 base price', amount: '$600.00', note: 'Subject to retail GET classification' },
        { label: 'Visible GET Checkout Charge', formula: '$600.00 × 4.712%', amount: '$28.27', note: 'Approved pass-through amount' },
        { label: 'Total Invoiced Customer Checkout', formula: '$600.00 + $28.27', amount: '$628.27', note: 'Total customer payment' },
        { label: 'Merchant Tax Liability to DOTAX', formula: '$628.27 gross receipts × 4.50%', amount: '$28.27', note: 'Exact statutory remittance' }
      ],
      takeaway: 'By charging the 4.712% visible rate on the $600 camera, the retailer collects $28.27, which exactly pays the 4.50% statutory GET owed on the $628.27 gross revenue without any loss.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $1,000.00 Total Receipt in Maui',
      scenario: 'A commercial dive shop in Maui receives a flat $1,000.00 tax-inclusive payment for guided charter services. What is the merchant’s net revenue and GET liability?',
      inputs: { totalGrossPayment: '$1,000.00', mauiStatutoryRate: '4.50% (4.0% State + 0.5% County)' },
      steps: [
        { label: 'Hawaii GET Statutory Remittance', formula: '$1,000.00 × 4.50%', amount: '$45.00', note: 'Owed on gross receipts on Form G-45' },
        { label: 'Net Retained Commercial Revenue', formula: '$1,000.00 - $45.00', amount: '$955.00', note: 'Business operating margin' },
        { label: 'Effective Pass-Through Reconciliation', formula: '$955.00 × (1 + 0.04712)', amount: '$1,000.00', note: 'Mathematical reconciliation' }
      ],
      takeaway: 'Under Hawaii GET rules, tax is assessed against the entire gross receipt ($1,000.00), leaving the Maui vendor with $955.00 net after remitting $45.00 to DOTAX.'
    },
    faqs: [
      { question: 'What is the difference between Hawaii GET and standard sales tax?', answer: 'Hawaii GET is an excise tax on the gross business receipts of the merchant, not a direct consumer sales tax. Because the merchant owes tax on gross revenue, they are permitted to pass on up to 4.712% to customers at checkout.', sourceUrl: 'https://tax.hawaii.gov/genexc/' },
      { question: 'Why do Hawaii receipts show a 4.712% tax instead of 4.50%?', answer: 'The statutory rate is 4.50%, but because the tax collected from the customer is also considered gross revenue subject to GET, merchants use the gross-up formula (0.045 / 0.955 = 4.712%) so they do not pay tax out of pocket.', sourceUrl: 'https://tax.hawaii.gov/genexc/' },
      { question: 'Are groceries and food taxable under Hawaii GET?', answer: 'Yes. Hawaii does not exempt grocery food or basic essentials. Groceries, clothing, electronics, and medical services are all fully subject to standard retail GET.', sourceUrl: 'https://tax.hawaii.gov/genexc/' },
      { question: 'Does Hawaii tax SaaS and cloud software subscriptions?', answer: 'Yes. Software as a Service, digital downloads, and remote data services are fully taxable in Hawaii as gross business receipts under the retail classification.', sourceUrl: 'https://tax.hawaii.gov/genexc/' },
      { question: 'What is the Hawaii economic nexus threshold for remote sellers?', answer: 'Remote sellers establish economic nexus in Hawaii if gross sales into the state reach $100,000 or 200 individual transactions during the current or preceding calendar year.', sourceUrl: 'https://tax.hawaii.gov/genexc/' }
    ]
  },

  'new-hampshire': {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    title: 'New Hampshire Sales Tax Calculator (0.00% General Tax) | FeeKit',
    metaDescription: 'Verify New Hampshire’s 0.00% general sales tax. Department of Revenue Administration guide on Meals and Rooms tax (8.5%), business taxes, and out-of-state nexus rules.',
    h1: 'New Hampshire Sales Tax Guide & 0.00% Retail Tax Reference',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.revenue.nh.gov/',
    citation: 'N.H. Rev. Stat. Ann. Title V, Chapter 78-A (Tax on Meals and Rooms) and RSA Chapter 77-A (Business Profits Tax).',
    overview: 'The State of New Hampshire is one of the foundational "NOMAD" states (New Hampshire, Oregon, Montana, Alaska, Delaware) that does not levy a general state or municipal retail sales tax. Consumers shopping in New Hampshire pay an effective 0.00% sales tax rate at checkout on clothing, electronics, groceries, personal property, digital downloads, and Software as a Service (SaaS). However, New Hampshire generates commercial tax revenue through targeted excise taxes, primarily the 8.5% Meals and Rooms (Rentals) Tax under RSA Chapter 78-A, as well as business enterprise and corporate profits taxes levied upon in-state commercial entities.',
    sections: [
      {
        id: 'nh-zero-sales-tax-policy',
        title: 'New Hampshire’s 0.00% Retail Tax Policy Across All 10 Counties',
        body: `New Hampshire’s statutory framework guarantees zero point-of-sale retail taxes:

- **Statewide General Sales Tax**: **0.00%**. There is no state retail sales tax on consumer goods, electronics, motor vehicles, or apparel.
- **Local Option Sales Taxes**: Prohibited under New Hampshire statutory law. Towns and cities such as Manchester, Nashua, Concord, and Portsmouth cannot levy municipal sales taxes.
- **Cross-Border Shopping Hub**: Because neighboring states enforce retail sales taxes (Massachusetts at 6.25%, Maine at 5.50%, Vermont at 6.00%), New Hampshire retail centers along the southern border serve as major commercial shopping destinations.`
      },
      {
        id: 'nh-meals-and-rooms-tax',
        title: 'The 8.5% Meals and Rooms Tax (RSA Chapter 78-A) and Targeted Excises',
        body: `While general retail is untaxed, New Hampshire enforces specific statutory excise taxes:

1. **Meals and Rooms (Rentals) Tax (M&R)**: Under RSA 78-A, an **8.5% excise tax** applies to:
   - Restaurant meals and prepared foods sold by caterers, dining establishments, and mobile food trucks.
   - Hotel, motel, bed-and-breakfast, and short-term vacation rental accommodations.
   - Motor vehicle rentals leased for periods of 180 consecutive days or fewer.
2. **Groceries & Staple Foods**: **0.00% Exempt**. Unprepared food items, produce, meat, dairy, and grocery items purchased for home consumption are completely exempt from the Meals and Rooms tax.
3. **Software, Digital Products, and SaaS**: **0.00% Exempt**. Remote software access, digital books, streaming subscriptions, and hardware sales incur zero consumer tax in New Hampshire.`
      },
      {
        id: 'nh-remote-seller-protections',
        title: 'New Hampshire Remote Seller Protections (Senate Bill 242)',
        body: `Following the U.S. Supreme Court’s *South Dakota v. Wayfair* ruling, New Hampshire enacted landmark protective legislation (Senate Bill 242) codified in RSA Chapter 78-E to shield in-state businesses:

- **Protection Against Out-of-State Extraterritorial Audits**: Out-of-state taxing jurisdictions must provide written notice to the New Hampshire Department of Justice prior to auditing or compelling a New Hampshire vendor to collect out-of-state sales tax.
- **No In-State Sales Tax Collection Duties**: Because New Hampshire has no general sales tax, remote merchants delivering goods into New Hampshire have no sales tax registration or filing duties with the New Hampshire Department of Revenue Administration (NHDRA).`
      },
      {
        id: 'nh-business-entity-taxes',
        title: 'Corporate Compliance: Business Profits Tax (BPT) & Business Enterprise Tax (BET)',
        body: `Entities operating within New Hampshire must maintain compliance with state business tax filings:

- **Business Profits Tax (BPT)**: Imposed under RSA Chapter 77-A on corporate gross business profits.
- **Business Enterprise Tax (BET)**: Imposed under RSA Chapter 77-E on the enterprise value tax base (compensation, interest, and dividends paid) of businesses with gross receipts exceeding statutory thresholds.
- **Filing Deadlines**: Corporate business tax returns are filed annually via **Granite Tax Connect (GTC)** on or before the 15th day of the fourth month following the close of the fiscal year.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Electronics vs Restaurant Dining in Manchester',
      scenario: 'A consumer in Manchester, New Hampshire purchases a $1,200.00 laptop computer at a retail store, followed by a $100.00 dinner at a local steakhouse.',
      inputs: { laptopPurchaseAmount: '$1,200.00', steakhouseDinnerAmount: '$100.00' },
      steps: [
        { label: 'Laptop Sales Tax (0.00%)', formula: '$1,200.00 × 0.00%', amount: '$0.00', note: 'Zero general retail sales tax in New Hampshire' },
        { label: 'Laptop Total Checkout Price', formula: '$1,200.00 + $0.00', amount: '$1,200.00', note: 'Customer pays pure retail price' },
        { label: 'Dinner Meals & Rooms Tax (8.5%)', formula: '$100.00 × 8.50%', amount: '$8.50', note: 'Statutory RSA 78-A excise tax' },
        { label: 'Steakhouse Total Invoiced Bill', formula: '$100.00 + $8.50', amount: '$108.50', note: 'Total customer restaurant payment' }
      ],
      takeaway: 'In New Hampshire, the consumer pays zero sales tax on the $1,200 laptop, but incurs the statutory 8.5% Meals and Rooms tax ($8.50) on prepared dining.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Food Charges from a $217.00 Hotel Room Invoice',
      scenario: 'A hotel guest in Portsmouth receives an all-inclusive checkout receipt of $217.00 for overnight lodging subject to the 8.5% Meals and Rooms tax. What was the base room charge?',
      inputs: { totalInclusiveReceipt: '$217.00', mealsAndRoomsRate: '8.50%' },
      steps: [
        { label: 'Base Room Extraction Formula', formula: '$217.00 ÷ (1 + 0.085)', amount: '$200.00', note: 'Net lodging revenue' },
        { label: 'New Hampshire M&R Tax Liability', formula: '$217.00 - $200.00', amount: '$17.00', note: 'Remitted to NHDRA on Form DP-10' },
        { label: 'Verification Calculation', formula: '$200.00 × 8.50%', amount: '$17.00', note: 'Reconciles exactly to $217.00 invoice' }
      ],
      takeaway: 'From a $217.00 all-inclusive hotel stay, the lodging operator retains $200.00 net lodging revenue and remits $17.00 to the New Hampshire Department of Revenue Administration.'
    },
    faqs: [
      { question: 'Does New Hampshire have a sales tax?', answer: 'No. New Hampshire has no state or local general retail sales tax. Tangible personal property, electronics, apparel, and SaaS subscriptions are subject to 0% sales tax.', sourceUrl: 'https://www.revenue.nh.gov/' },
      { question: 'What taxes apply to dining and hotels in New Hampshire?', answer: 'New Hampshire levies an 8.5% Meals and Rooms (Rentals) Tax on prepared restaurant food, hotel accommodations, short-term rentals, and passenger vehicle rentals.', sourceUrl: 'https://www.revenue.nh.gov/' },
      { question: 'Are groceries taxed in New Hampshire?', answer: 'No. Unprepared food items, fresh groceries, and produce for home consumption are completely exempt from tax in New Hampshire.', sourceUrl: 'https://www.revenue.nh.gov/' },
      { question: 'Do out-of-state online retailers charge sales tax to New Hampshire buyers?', answer: 'No. Because sales tax is sourced to the delivery destination, goods shipped to a delivery address in New Hampshire are subject to 0% sales tax.', sourceUrl: 'https://www.revenue.nh.gov/' },
      { question: 'Is Software as a Service (SaaS) taxable in New Hampshire?', answer: 'No. Software subscriptions, cloud hosting, and digital services incur 0% sales tax in New Hampshire.', sourceUrl: 'https://www.revenue.nh.gov/' }
    ]
  },

  'maine': {
    slug: 'maine',
    name: 'Maine',
    title: 'Maine Sales Tax Calculator (5.50% Flat Rate) | FeeKit',
    metaDescription: 'Calculate Maine sales and use tax with Maine Revenue Services rates (5.5% statewide flat). SaaS exemption under Bulletin 27, grocery rules, and $100k economic nexus.',
    h1: 'Maine Sales Tax Calculator & Maine Revenue Services Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax',
    citation: '36 M.R.S. Chapter 211 (Sales and Use Tax) and Maine Revenue Services Instructional Bulletin No. 27.',
    overview: 'The State of Maine imposes a uniform statewide sales and use tax rate of 5.50% under 36 M.R.S. § 1811. Municipalities and counties in Maine are prohibited by state statute from levying local option sales taxes on general retail goods, providing complete geographic consistency across all 16 counties. Under Maine Revenue Services Instructional Bulletin No. 27, Software as a Service (SaaS) and remote cloud hosting are classified as non-taxable professional services. Remote sellers establish economic nexus once gross retail sales delivered into Maine reach $100,000 annually.',
    sections: [
      {
        id: 'me-flat-rate-structure',
        title: 'Uniform 5.50% Statewide Rate Across All 16 Maine Counties',
        body: `Maine’s retail sales tax operates under statutory centralization:

- **Statewide General Rate**: **5.50%**. Enforced on all retail sales of tangible personal property under 36 M.R.S. § 1811.
- **Zero Local Option Retail Taxes**: Local jurisdictions cannot levy municipal or county sales taxes on retail goods. A purchase in Portland, Lewiston, Bangor, or Bar Harbor incurs the exact same 5.50% rate.
- **Specialized Industry Excises**: Maine enforces higher statutory rates for specific tourism sectors:
  - **Prepared Food & Restaurant Dining**: **8.00%**.
  - **Lodging and Short-Term Rentals**: **9.00%**.
  - **Short-Term Motor Vehicle Rentals**: **10.00%** (17.00% for short-term peer-to-peer rentals).`
      },
      {
        id: 'me-taxability-saas-groceries-clothing',
        title: 'Taxability Framework: SaaS Exemption, Grocery Protection, and Freight Rules',
        body: `Statutory product taxability rules enforced by Maine Revenue Services (MRS):

1. **Software as a Service (SaaS)**: **100% Exempt**. Under Maine Revenue Services Instructional Bulletin No. 27, remote software access where the customer does not receive physical media or download executable software code is classified as an exempt service.
2. **Food for Home Consumption (Groceries)**: **Exempt**. Staple grocery items are exempt from sales tax under 36 M.R.S. § 1760(3). Prepared hot meals, restaurant catering, and confections are taxable at the 8.00% meals rate.
3. **Everyday Clothing and Footwear**: **Fully Taxable (5.50%)**. Maine does not provide a point-of-sale clothing exemption; all apparel is taxable at the standard 5.50% rate.
4. **Freight and Delivery Fees**: Under 36 M.R.S. § 1752(14)(B)(1), transportation charges are exempt if stated separately and delivery occurs by common carrier, contract carrier, or the postal service.`
      },
      {
        id: 'me-economic-nexus-and-sourcing',
        title: 'Maine Remote Seller Nexus ($100,000 Threshold) & Sourcing',
        body: `Following post-Wayfair statutory updates codified in 36 M.R.S. § 1951-A:

- **Economic Nexus Standard**: A remote seller establishes economic nexus in Maine if, during the previous or current calendar year, the business generates:
  - More than **$100,000 in gross retail sales** delivered into Maine.
  - *Note on Transaction Count*: Under legislation enacted in LD 2205, Maine repealed the 200-transaction threshold, meaning nexus is evaluated solely on the $100,000 revenue benchmark.
- **Destination Sourcing**: Maine enforces destination sourcing. Out-of-state vendors collect Maine’s 5.50% sales tax on all taxable shipments delivered into the state.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Maine sales tax on third-party marketplace orders.`
      },
      {
        id: 'me-registration-and-filing-compliance',
        title: 'Permit Registration, Maine Tax Portal Filing, and Due Dates',
        body: `Compliance obligations enforced by Maine Revenue Services:

- **Retailer Registration**: Remote and physical merchants register for a Maine Sales Tax Certificate via the **Maine Tax Portal (MTP)**.
- **Filing Deadlines**: Sales tax returns (Form ST-7) are due on or before the **15th day of the month** following the end of the reporting period (e.g., April 15 for Q1 filers).
- **Penalties for Delinquency**: Failure to file incurs a penalty of **$25 or 10% of the tax due** (whichever is greater), up to a maximum penalty of **25%** under 36 M.R.S. § 187-B, plus statutory interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Portland ($500 Order)',
      scenario: 'A resident of Portland, Maine purchases $450.00 of woodworking tools with a separately stated $50.00 UPS ground freight charge from an online merchant.',
      inputs: { toolsSubtotal: '$450.00', freightShippingCharge: '$50.00 (Separately Stated)', maineSalesTaxRate: '5.50%' },
      steps: [
        { label: 'Taxable Tools Subtotal', formula: '$450.00 hardware merchandise', amount: '$450.00', note: 'Subject to Maine retail sales tax' },
        { label: 'UPS Freight Delivery Charge', formula: 'Separately stated common carrier', amount: '$0.00 tax', note: 'Exempt under 36 M.R.S. § 1752(14)(B)(1)' },
        { label: 'Maine Sales Tax (5.50%)', formula: '$450.00 × 5.50%', amount: '$24.75', note: 'Statutory 5.50% state rate' },
        { label: 'Total Invoiced Customer Checkout', formula: '$450.00 + $50.00 + $24.75', amount: '$524.75', note: 'Total customer payment' }
      ],
      takeaway: 'In Maine, the 5.50% sales tax applies only to the $450.00 tool subtotal ($24.75 tax), keeping the separately stated $50 freight charge completely tax-free.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $650.00 Bangor Invoice',
      scenario: 'A retail merchant in Bangor collects an all-inclusive $650.00 payment for taxable retail merchandise. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$650.00', stateTaxRate: '5.50%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$650.00 ÷ (1 + 0.055)', amount: '$616.11', note: 'Retained business net revenue' },
        { label: 'Maine Sales Tax Liability', formula: '$650.00 - $616.11', amount: '$33.89', note: 'Remitted to Maine Revenue Services' },
        { label: 'Verification Calculation', formula: '$616.11 × 5.50%', amount: '$33.89', note: 'Reconciles exactly to $650.00 total' }
      ],
      takeaway: 'From an all-inclusive $650.00 transaction in Maine, the retailer retains $616.11 net revenue and owes $33.89 in state sales tax on Form ST-7.'
    },
    faqs: [
      { question: 'What is the standard sales tax rate in Maine?', answer: 'Maine has a flat statewide sales tax rate of 5.50%. Local cities and counties are prohibited from enacting local option retail sales taxes.', sourceUrl: 'https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax' },
      { question: 'Does Maine tax Software as a Service (SaaS)?', answer: 'No. Under Maine Revenue Services Instructional Bulletin No. 27, cloud-hosted SaaS subscriptions and remote software access are classified as exempt services.', sourceUrl: 'https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax' },
      { question: 'Are groceries subject to sales tax in Maine?', answer: 'No. Grocery staples and food items purchased for home consumption are exempt from Maine sales tax under 36 M.R.S. § 1760(3). Prepared hot food is taxed at 8.00%.', sourceUrl: 'https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax' },
      { question: 'What is the Maine economic nexus threshold for remote sellers?', answer: 'Remote out-of-state retailers establish economic nexus in Maine when gross retail sales delivered into the state reach $100,000 annually. The 200-transaction test was repealed.', sourceUrl: 'https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax' },
      { question: 'When are Maine sales tax returns due?', answer: 'Maine sales tax returns are due on or before the 15th day of the month following the close of the reporting period via the Maine Tax Portal.', sourceUrl: 'https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax' }
    ]
  },

  'rhode-island': {
    slug: 'rhode-island',
    name: 'Rhode Island',
    title: 'Rhode Island Sales Tax Calculator (7.00% Flat Rate) | FeeKit',
    metaDescription: 'Calculate Rhode Island sales and use tax with Division of Taxation rates (7.0% flat statewide). Clothing exemption under $250, SaaS taxation, and $100k nexus.',
    h1: 'Rhode Island Sales Tax Calculator & Division of Taxation Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax',
    citation: 'R.I. Gen. Laws Title 44, Chapter 18 (Sales and Use Taxes: Liability and Computation) and Chapter 19.',
    overview: 'The State of Rhode Island levies a uniform statewide retail sales and use tax rate of 7.00% under R.I. Gen. Laws § 44-18-18. General municipal and county-level sales taxes do not exist in Rhode Island, providing complete geographic uniformity across all 39 cities and towns from Providence and Warwick to Newport. Under Rhode Island law, everyday clothing and footwear priced under $250 per item are 100% exempt from sales tax, with the 7.00% tax applying only to the incremental amount over $250. Following enacted tax legislation, Rhode Island codified remote prewritten software access (SaaS) as fully taxable. Remote sellers establish economic nexus upon exceeding $100,000 in gross revenue or 200 transactions.',
    sections: [
      {
        id: 'ri-flat-7-percent-rate',
        title: 'Uniform 7.00% Statewide Rate Across All 39 Rhode Island Municipalities',
        body: `Rhode Island enforces a centralized rate structure:

- **Statewide Baseline Rate**: **7.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable services under R.I. Gen. Laws § 44-18-18.
- **Zero Local Option Retail Taxes**: Municipalities cannot enact general local sales taxes. A retail purchase in Providence, Cranston, Pawtucket, or Warwick carries the exact same 7.00% rate.
- **Meals and Beverage Surcharge**: Rhode Island levies an additional **1.00% local meals and beverage tax** on restaurant dining and prepared meals, resulting in an 8.00% combined rate on restaurant checks.`
      },
      {
        id: 'ri-taxability-clothing-saas-groceries',
        title: 'Taxability Framework: $250 Clothing Exemption, SaaS Taxation, and Groceries',
        body: `Statutory product taxability rules enforced by the Rhode Island Division of Taxation:

1. **Everyday Clothing and Footwear**: **Exempt up to $250 per item**. Under R.I. Gen. Laws § 44-18-30(27), articles of clothing and footwear costing less than $250 are 100% exempt from sales tax. For items priced at $250 or more, the 7.00% sales tax applies **only to the incremental portion exceeding $250** (for example, on a $350 coat, only $100 is taxable, resulting in $7.00 tax).
2. **Software as a Service (SaaS)**: **Fully Taxable (7.00%)**. Following enacted budget legislation amending R.I. Gen. Laws § 44-18-7.3, Rhode Island explicitly taxes prewritten computer software accessed remotely (cloud SaaS) and digital goods at 7.00%.
3. **Groceries & Food Products**: **Exempt**. Unprepared food items for human consumption are exempt under R.I. Gen. Laws § 44-18-30(9). Prepared meals, candy, and soft drinks are taxable.
4. **Freight and Delivery Fees**: Delivery charges billed by the retailer in connection with the sale of taxable merchandise are subject to sales tax under R.I. Gen. Laws § 44-18-12(a)(2).`
      },
      {
        id: 'ri-economic-nexus-and-sourcing',
        title: 'Rhode Island Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Codified under R.I. Gen. Laws § 44-18.2-3 (Non-Collecting Retailers and Remote Sellers):

- **Economic Nexus Standard**: A remote seller establishes economic nexus in Rhode Island if, during the preceding calendar year, they have:
  - Gross revenue exceeding **$100,000** from sales delivered into Rhode Island; **OR**
  - **200 or more separate transactions** delivered into the state.
- **Destination Sourcing**: Rhode Island is a full member of the Streamlined Sales Tax (SST) initiative and enforces destination sourcing. Remote merchants collect the 7.00% rate on all taxable shipments delivered to a Rhode Island address.
- **Marketplace Facilitator Law**: Facilitators (Amazon, Etsy, eBay, etc.) collect and remit Rhode Island sales tax on all sales conducted through their platforms.`
      },
      {
        id: 'ri-registration-and-filing-compliance',
        title: 'Sales Tax Permit, Electronic Filing Portal, and Statutory Penalties',
        body: `Tax compliance requirements administered by the Rhode Island Division of Taxation:

- **Retail Permit**: Retailers must obtain a Sales and Use Tax Permit via the **Rhode Island Division of Taxation Tax Portal** and pay an annual $10 permit fee.
- **Filing Deadlines**: Sales tax returns (Form T-204) are due on or before the **20th day of the month** following the end of the reporting period.
- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **10% of the tax due** under R.I. Gen. Laws § 44-19-12, plus interest accruing at the statutory statutory underpayment rate.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Designer Apparel Purchase in Providence ($400 Order)',
      scenario: 'A shopper in Providence, Rhode Island purchases a designer winter coat priced at $400.00 at a local clothing boutique.',
      inputs: { coatPurchasePrice: '$400.00', clothingThreshold: '$250.00 Exemption Ceiling', rhodeIslandSalesTaxRate: '7.00%' },
      steps: [
        { label: 'Statutory Exempt Portion', formula: 'First $250.00 of clothing price', amount: '$250.00', note: '100% exempt under R.I. Gen. Laws § 44-18-30(27)' },
        { label: 'Taxable Incremental Base', formula: '$400.00 - $250.00', amount: '$150.00', note: 'Only excess over $250 is taxable' },
        { label: 'Rhode Island Sales Tax (7.00%)', formula: '$150.00 × 7.00%', amount: '$10.50', note: '7% applied to incremental excess' },
        { label: 'Total Invoiced Checkout Amount', formula: '$400.00 + $10.50', amount: '$410.50', note: 'Total customer checkout payment' }
      ],
      takeaway: 'Under Rhode Island’s clothing threshold rule, the shopper pays only $10.50 in sales tax on the $400 coat because the first $250 is completely tax-free.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from an $850.00 Newport Invoice',
      scenario: 'A marine equipment retailer in Newport collects a flat $850.00 tax-inclusive payment for taxable boat accessories. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$850.00', stateTaxRate: '7.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$850.00 ÷ (1 + 0.07)', amount: '$794.39', note: 'Retained business net revenue' },
        { label: 'Rhode Island Sales Tax Liability', formula: '$850.00 - $794.39', amount: '$55.61', note: 'Remitted on Form T-204' },
        { label: 'Verification Calculation', formula: '$794.39 × 7.00%', amount: '$55.61', note: 'Reconciles exactly to $850.00 receipt' }
      ],
      takeaway: 'From an $850.00 tax-inclusive transaction in Newport, the vendor retains $794.39 net revenue and owes $55.61 in sales tax to the Division of Taxation.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Rhode Island?', answer: 'Rhode Island has a uniform statewide sales tax rate of 7.00%. Local option sales taxes do not exist on retail goods.', sourceUrl: 'https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax' },
      { question: 'How is clothing taxed in Rhode Island?', answer: 'Everyday clothing and footwear under $250 per item are 100% exempt from sales tax. For items costing $250 or more, the 7.00% tax applies only to the incremental portion over $250.', sourceUrl: 'https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax' },
      { question: 'Is Software as a Service (SaaS) taxable in Rhode Island?', answer: 'Yes. Rhode Island taxes prewritten computer software accessed remotely, including cloud SaaS and electronic data products, at the standard 7.00% rate.', sourceUrl: 'https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax' },
      { question: 'What is the Rhode Island economic nexus threshold for remote sellers?', answer: 'Remote sellers establish economic nexus upon reaching $100,000 in gross revenue or completing 200 individual transactions delivered into Rhode Island in the preceding calendar year.', sourceUrl: 'https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax' },
      { question: 'When are Rhode Island sales tax returns due?', answer: 'Rhode Island sales tax returns are due on or before the 20th day of the month following the end of the reporting period via the Division of Taxation Tax Portal.', sourceUrl: 'https://tax.ri.gov/tax-sections/sales-excise-taxes/sales-use-tax' }
    ]
  },

  'montana': {
    slug: 'montana',
    name: 'Montana',
    title: 'Montana Sales Tax Calculator (0.00% General Tax) | FeeKit',
    metaDescription: 'Verify Montana’s 0.00% general sales tax. Department of Revenue guide on local resort taxes (up to 3.0%), medical cannabis, and out-of-state remote seller rules.',
    h1: 'Montana Sales Tax Guide & 0.00% Retail Tax Reference',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://mtrevenue.gov/',
    citation: 'Mont. Code Ann. Title 7, Chapter 6, Part 15 (Resort Tax) and Title 15, Chapter 64 (Cannabis Tax).',
    overview: 'The State of Montana is one of the five "NOMAD" states with no statewide retail sales tax. Consumers shopping in Montana pay an effective 0.00% sales tax rate at checkout on clothing, electronics, groceries, digital goods, and software. However, under Mont. Code Ann. Title 7, Chapter 6, Part 15, qualifying designated Resort Communities and Resort Areas are legally permitted to levy a local resort tax of up to 3.00% (or 4.00% with voter-approved infrastructure surcharges) on goods and services sold by destination hospitality and retail businesses.',
    sections: [
      {
        id: 'mt-zero-sales-tax-policy',
        title: 'Montana’s 0.00% Statewide Retail Tax Policy Across All 56 Counties',
        body: `Montana’s constitution and statutory code provide comprehensive tax relief at checkout:

- **Statewide General Sales Tax**: **0.00%**. There is no state retail sales tax on personal property, vehicles, appliances, or services.
- **General Municipal Sales Taxes**: Prohibited under Montana law. Non-resort municipalities such as Billings, Missoula, Great Falls, Bozeman, and Helena cannot enact general sales taxes.
- **Cross-Border Commerce**: Montana attracts significant retail tourism from neighboring states (Idaho at 6.00%, North Dakota at 5.00%, South Dakota at 4.20%, and Wyoming at 4.00%) as well as Canadian cross-border shoppers from Alberta and Saskatchewan seeking tax-free retail.`
      },
      {
        id: 'mt-resort-community-taxes',
        title: 'Designated Resort Community Taxes (Up to 3.00% in Big Sky, Whitefish, Red Lodge)',
        body: `While general retail is untaxed statewide, destination tourist communities levy specialized resort taxes:

1. **Resort Community Tax**: Under Mont. Code Ann. § 7-6-1501, designated resort communities with populations under 5,500 that derive a major portion of their economy from tourism can levy up to a **3.00% local tax** (or up to 4.00% for infrastructure) on:
   - Restaurant meals and prepared foods.
   - Alcoholic beverages sold by bars and taverns.
   - Hotel, lodge, and vacation rental accommodations.
   - Retail goods sold by ski shops, sporting goods retailers, souvenir shops, and luxury boutiques.
2. **Key Participating Resort Jurisdictions**:
   - **Whitefish**: **3.00%** resort tax.
   - **Big Sky**: **4.00%** combined resort and infrastructure tax.
   - **Red Lodge**: **3.00%** resort tax.
   - **West Yellowstone**: **3.00%** resort tax.
3. **Groceries & Essential Goods**: Essential food items, medicine, and basic hardware are statutorily exempt from resort taxes.`
      },
      {
        id: 'mt-saas-and-remote-commerce',
        title: 'Software, Digital Products, and Remote Out-of-State Commerce',
        body: `Digital technology and remote merchant compliance in Montana:

- **Software as a Service (SaaS)**: **0.00% Exempt**. Software subscriptions, cloud hosting, and digital products incur zero sales tax in Montana.
- **No Remote Seller Sales Tax Nexus**: Because Montana has no statewide sales tax, out-of-state e-commerce merchants have no sales tax collection duties for deliveries made into Montana.
- **Corporate Income Tax (CIT)**: Corporations conducting business in Montana are subject to Montana Corporate Income Tax at 6.75% under MCA Title 15, Chapter 31.`
      },
      {
        id: 'mt-compliance-and-cannabis-tax',
        title: 'Specialized Excise Taxes: Cannabis and Lodging Facility Use Tax',
        body: `Compliance administered by the Montana Department of Revenue (TransAction Portal - TAP):

- **Lodging Facility Use Tax**: A statewide 4.00% lodging facility use tax plus a 4.00% lodging sales tax (total 8.00%) applies to hotel rooms and short-term accommodations statewide.
- **Cannabis Tax**: Adult-use recreational cannabis is subject to a 20.00% state excise tax under MCA 15-64-102 (medical cannabis is taxed at 4.00%).
- **Resort Tax Remittance**: Businesses operating in resort communities file and remit resort taxes directly to the municipal resort tax district on a monthly or quarterly schedule.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Electronics in Bozeman vs Ski Rental in Big Sky',
      scenario: 'A consumer in Bozeman purchases an $800.00 tablet computer, followed by a $100.00 ski equipment rental in the Big Sky resort community.',
      inputs: { bozemanTabletAmount: '$800.00', bigSkyRentalAmount: '$100.00', bigSkyResortRate: '4.00%' },
      steps: [
        { label: 'Bozeman Tablet Sales Tax (0.00%)', formula: '$800.00 × 0.00%', amount: '$0.00', note: 'Zero state or local sales tax in Bozeman' },
        { label: 'Tablet Total Checkout Amount', formula: '$800.00 + $0.00', amount: '$800.00', note: 'Customer pays pure retail price' },
        { label: 'Big Sky Resort Tax (4.00%)', formula: '$100.00 × 4.00%', amount: '$4.00', note: 'Local resort community tax' },
        { label: 'Big Sky Total Invoiced Rental', formula: '$100.00 + $4.00', amount: '$104.00', note: 'Total customer rental payment' }
      ],
      takeaway: 'In Montana, general consumer retail purchases in cities like Bozeman incur zero sales tax, while purchases in designated resort areas like Big Sky carry a local resort tax.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $309.00 Whitefish Lodging Receipt',
      scenario: 'A boutique inn in Whitefish receives an all-inclusive $309.00 payment for tourist lodging subject to the 3.00% local resort tax. What is the net lodging revenue?',
      inputs: { totalInclusiveReceipt: '$309.00', whitefishResortRate: '3.00%' },
      steps: [
        { label: 'Net Lodging Extraction Formula', formula: '$309.00 ÷ (1 + 0.03)', amount: '$300.00', note: 'Net lodging business revenue' },
        { label: 'Whitefish Resort Tax Liability', formula: '$309.00 - $300.00', amount: '$9.00', note: 'Remitted to Whitefish Resort Tax District' },
        { label: 'Verification Calculation', formula: '$300.00 × 3.00%', amount: '$9.00', note: 'Reconciles exactly to $309.00 total' }
      ],
      takeaway: 'From a $309.00 resort-tax-inclusive stay in Whitefish, the lodging operator retains $300.00 net and remits $9.00 to the local resort tax authority.'
    },
    faqs: [
      { question: 'Does Montana have a sales tax?', answer: 'No. Montana has no general statewide retail sales tax. Tangible goods, clothing, electronics, groceries, and software are subject to 0% sales tax.', sourceUrl: 'https://mtrevenue.gov/' },
      { question: 'What is a Montana Resort Tax?', answer: 'Certain designated resort communities (such as Big Sky, Whitefish, and Red Lodge) levy a local resort tax of up to 3.00% (or 4.00% with infrastructure) on hospitality, dining, lodging, and tourist retail.', sourceUrl: 'https://mtrevenue.gov/' },
      { question: 'Is Software as a Service (SaaS) taxable in Montana?', answer: 'No. Software subscriptions, cloud hosting, and digital products incur zero sales tax in Montana.', sourceUrl: 'https://mtrevenue.gov/' },
      { question: 'Do remote online merchants collect sales tax on shipments to Montana?', answer: 'No. Because sales tax is sourced to the delivery address and Montana has no sales tax, goods shipped to Montana are 0% sales-tax free.', sourceUrl: 'https://mtrevenue.gov/' },
      { question: 'What taxes apply to hotels in Montana?', answer: 'Montana levies an 8.00% statewide lodging tax (4.00% lodging facility use tax plus 4.00% lodging sales tax) on commercial accommodations statewide.', sourceUrl: 'https://mtrevenue.gov/' }
    ]
  },

  'delaware': {
    slug: 'delaware',
    name: 'Delaware',
    title: 'Delaware Sales Tax Calculator (0.00% Retail Tax) | FeeKit',
    metaDescription: 'Verify Delaware’s 0.00% consumer sales tax. Division of Revenue guide on Gross Receipts Tax (GRT), merchant licensing, and out-of-state business nexus.',
    h1: 'Delaware Sales Tax Guide & 0.00% Retail Tax Reference',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://revenue.delaware.gov/',
    citation: '30 Del. C. Part III, Chapter 21 (General Provisions Concerning Licenses) and Chapter 29 (Retail and Wholesale Merchants).',
    overview: 'The State of Delaware does not impose a state or municipal retail sales tax on consumers. Shoppers purchasing tangible goods, clothing, electronics, groceries, and digital services in Delaware pay an effective 0.00% sales tax rate at checkout. Instead of assessing sales tax against purchasers, Delaware assesses a Gross Receipts Tax (GRT) under 30 Del. C. Chapter 21 directly against businesses for the legal privilege of conducting commercial activity in the First State. Retailers and wholesalers pay modest gross receipts tax rates (typically 0.0945% to 0.7468%) on gross sales exceeding monthly exclusions, with zero tax collected from consumers at the point of sale.',
    sections: [
      {
        id: 'de-zero-consumer-sales-tax',
        title: 'Delaware’s 0.00% Consumer Sales Tax Across All Three Counties',
        body: `Delaware provides total retail checkout exemption:

- **Statewide Consumer Sales Tax**: **0.00%**. Consumers pay zero state sales tax on personal property, vehicles, appliances, furniture, or digital goods.
- **Zero Local Option Retail Taxes**: Municipalities and counties (New Castle, Kent, and Sussex) do not possess legal authority to levy municipal sales taxes.
- **National Shopping Magnet**: Known as the "Home of Tax-Free Shopping," Delaware retail hubs (such as the Christiana Mall in Newark and coastal outlets in Rehoboth Beach) draw millions of interstate consumers annually from Pennsylvania (6%), Maryland (6%), and New Jersey (6.625%).`
      },
      {
        id: 'de-gross-receipts-tax-mechanics',
        title: 'Delaware Gross Receipts Tax (GRT): Business Privilege Excise Rates',
        body: `While consumers pay zero sales tax, merchants operating in Delaware are subject to the Gross Receipts Tax (GRT):

1. **Retail Merchants**: Taxed under 30 Del. C. § 2905 at **0.7468%** of aggregate gross receipts attributable to retail sales, with a monthly exclusion of **$100,000** (or $300,000 quarterly). A retailer with under $100,000 in monthly sales owes zero GRT.
2. **Wholesale Merchants**: Taxed under 30 Del. C. § 2902 at **0.3983%** of gross receipts, with a monthly exclusion of $100,000.
3. **Commercial Services & Contractors**: Professional services and contractors are subject to GRT rates ranging from 0.0945% to 0.3983%.
4. **No Point-of-Sale Collection**: Delaware statutory law prohibits merchants from billing the Gross Receipts Tax as a separate point-of-sale sales tax charge to the consumer.`
      },
      {
        id: 'de-saas-and-remote-sellers',
        title: 'Software, Digital Products, and Remote E-Commerce Sellers',
        body: `Digital commerce rules under Delaware statutory tax policy:

- **Software as a Service (SaaS)**: **0.00% Exempt at Checkout**. Remote software access, digital downloads, and cloud services incur zero sales tax in Delaware.
- **Remote Sellers Delivering into Delaware**: Out-of-state remote sellers shipping goods or providing digital services to Delaware purchasers have zero sales tax collection duties.
- **Business Licensing**: Any business maintaining physical nexus or conducting commercial transactions in Delaware must obtain a Delaware Business License via the Division of Revenue.`
      },
      {
        id: 'de-compliance-and-filing-dor',
        title: 'Merchant Licensing, Filing Deadlines, and Division of Revenue Compliance',
        body: `Administrative requirements administered by the Delaware Division of Revenue:

- **Business License Application**: In-state businesses register online via the **Delaware Taxpayer Portal** and renew licenses annually.
- **GRT Return Deadlines**: Gross receipts tax returns (Form 2001 for monthly filers or Form 2002 for quarterly filers) are due on or before the **20th day of the month** following the end of the reporting period.
- **Statutory Penalties**: Late GRT filings incur a penalty of **5% per month** of the tax due (up to 50%), plus statutory interest accruing at 0.5% per month.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Electronics Purchase in Newark ($1,500 Order)',
      scenario: 'A consumer in Newark, Delaware purchases a $1,500.00 laptop computer and accessories at an electronics retail store.',
      inputs: { laptopPurchaseAmount: '$1,500.00', consumerSalesTaxRate: '0.00%', merchantMonthlyGrossReceipts: '$80,000.00' },
      steps: [
        { label: 'Consumer Sales Tax (0.00%)', formula: '$1,500.00 × 0.00%', amount: '$0.00', note: 'Zero sales tax in Delaware' },
        { label: 'Total Invoiced Customer Checkout', formula: '$1,500.00 + $0.00', amount: '$1,500.00', note: 'Customer pays pure retail price' },
        { label: 'Merchant Monthly GRT Threshold', formula: '$80,000.00 < $100,000 exclusion', amount: '$0.00 GRT', note: 'Protected under $100k monthly exclusion' },
        { label: 'Merchant Retained Net Revenue', formula: '$1,500.00 - $0.00', amount: '$1,500.00', note: '100% retained by merchant' }
      ],
      takeaway: 'In Delaware, the consumer pays zero sales tax at checkout, and a small retailer with under $100,000 in monthly sales owes zero Gross Receipts Tax to the state.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Business GRT Liability on $250,000 Monthly Retail Sales',
      scenario: 'A high-volume department store in Wilmington generates $250,000.00 in monthly retail sales. What is the merchant’s Gross Receipts Tax liability?',
      inputs: { monthlyGrossSales: '$250,000.00', statutoryExclusion: '$100,000.00', retailGRTRate: '0.7468%' },
      steps: [
        { label: 'Statutory Monthly Exclusion', formula: 'Statutory deduction', amount: '$100,000.00', note: 'Exempt from Delaware GRT' },
        { label: 'Taxable Gross Receipts Base', formula: '$250,000.00 - $100,000.00', amount: '$150,000.00', note: 'Subject to retail GRT' },
        { label: 'Merchant GRT Liability', formula: '$150,000.00 × 0.7468%', amount: '$1,120.20', note: 'Remitted by business on Form 2001' },
        { label: 'Consumer Sales Tax Collected', formula: '$250,000.00 × 0.00%', amount: '$0.00', note: 'Consumers charged $0 tax at checkout' }
      ],
      takeaway: 'While consumers paid $0 sales tax, the Wilmington retailer remits $1,120.20 in business Gross Receipts Tax on the $150,000 taxable portion of gross revenue.'
    },
    faqs: [
      { question: 'Does Delaware have a sales tax?', answer: 'No. Delaware has no state or local retail sales tax. Consumers pay 0% sales tax on tangible goods, apparel, electronics, groceries, and digital services.', sourceUrl: 'https://revenue.delaware.gov/' },
      { question: 'What is the Delaware Gross Receipts Tax (GRT)?', answer: 'The Gross Receipts Tax is an excise tax levied directly upon businesses for the privilege of conducting business in Delaware. Retailers pay 0.7468% on gross receipts exceeding $100,000 per month.', sourceUrl: 'https://revenue.delaware.gov/' },
      { question: 'Can retailers charge Delaware sales tax to customers?', answer: 'No. Delaware law does not permit retailers to add sales tax to consumer receipts. The Gross Receipts Tax is a cost of business paid directly by the enterprise.', sourceUrl: 'https://revenue.delaware.gov/' },
      { question: 'Is Software as a Service (SaaS) taxable in Delaware?', answer: 'No. Software subscriptions and digital downloads incur 0% consumer sales tax in Delaware.', sourceUrl: 'https://revenue.delaware.gov/' },
      { question: 'Do remote sellers shipping to Delaware collect sales tax?', answer: 'No. Because sales tax is sourced to the delivery destination, all orders shipped to Delaware are subject to 0% sales tax.', sourceUrl: 'https://revenue.delaware.gov/' }
    ]
  },

  'south-dakota': {
    slug: 'south-dakota',
    name: 'South Dakota',
    title: 'South Dakota Sales Tax Calculator (4.20% to 6.20%) | FeeKit',
    metaDescription: 'Calculate South Dakota sales and use tax with Department of Revenue rates (4.2% state statutory, 6.2% max municipal). Sourced SaaS taxation, grocery rules, and $100k nexus.',
    h1: 'South Dakota Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://dor.sd.gov/businesses/taxes/sales-use-tax/',
    citation: 'S.D. Codified Laws Chapter 10-45 (Retail Sales and Service Tax) and Chapter 10-46.',
    overview: 'The State of South Dakota levies a statutory retail sales and service tax rate of 4.20% under S.D. Codified Laws § 10-45-2 (a rate reduction from 4.50% enacted under 2023 House Bill 1137 through June 30, 2027). South Dakota is nationally renowned as the petitioner in the landmark 2018 U.S. Supreme Court decision, *South Dakota v. Wayfair, Inc.*, which legalized economic nexus across the United States. Municipalities in South Dakota are authorized to levy a general municipal sales tax of up to 2.00%, resulting in a combined retail sales tax rate of 6.20% in major metropolitan areas such as Sioux Falls, Rapid City, and Aberdeen. South Dakota maintains one of the broadest sales tax bases in the country, taxing Software as a Service (SaaS) and groceries.',
    sections: [
      {
        id: 'sd-rates-and-municipal-surcharges',
        title: 'South Dakota 4.20% Statutory State Rate & Municipal Add-Ons (Max 6.20%)',
        body: `South Dakota’s rate structure features two integrated administrative tiers:

- **State Statutory Base Rate**: **4.20%**. Enacted under HB 1137, applying to all retail sales of personal property, digital property, and commercial services.
- **Municipal General Sales Taxes (Up to 2.00%)**: Incorporated cities levy local option taxes administered centrally by the state:
  - **Sioux Falls (Minnehaha / Lincoln Counties)**: **6.20% combined rate** (4.20% state + 2.00% city).
  - **Rapid City (Pennington County)**: **6.20% combined rate** (4.20% state + 2.00% city).
  - **Aberdeen (Brown County)**: **6.20% combined rate** (4.20% state + 2.00% city).
  - **Brookings (Brookings County)**: **6.20% combined rate** (4.20% state + 2.00% city).
- **Municipal Gross Receipts Tax (1.00% MGRT)**: Cities may also levy a 1.00% special gross receipts tax on restaurant dining, alcoholic beverages, and lodging.`
      },
      {
        id: 'sd-comprehensive-tax-base-saas-groceries',
        title: 'Comprehensive Tax Base: Full Taxation of SaaS, Groceries, Clothing, and Services',
        body: `South Dakota applies a presumption that all sales of services and tangible property are taxable unless specifically exempted:

1. **Software as a Service (SaaS)**: **Fully Taxable (4.20% - 6.20%)**. Under S.D. Codified Laws § 10-45-5.2 and Streamlined Sales Tax definitions, remote prewritten software access, cloud hosting, and software maintenance services are fully subject to standard state and municipal sales tax.
2. **Groceries & Food for Home Consumption**: **Fully Taxable (4.20% - 6.20%)**. Unlike most states, South Dakota taxes grocery food at the standard state and local rates.
3. **Everyday Clothing and Footwear**: **Fully Taxable**. Apparel and footwear are subject to standard combined rates year-round.
4. **Freight and Delivery Fees**: Under SDCL § 10-45-1(14), delivery and transportation charges billed by the retailer are included in the taxable gross sales price.`
      },
      {
        id: 'sd-the-wayfair-standard-economic-nexus',
        title: 'The Wayfair Standard: South Dakota Remote Seller Nexus ($100,000 Threshold)',
        body: `As the origin state of modern remote seller taxation under S.D. Codified Laws § 10-64-1:

- **Economic Nexus Standard**: A remote seller establishes economic nexus in South Dakota if, during the previous or current calendar year, the business achieves:
  - Gross sales exceeding **$100,000** delivered into South Dakota.
  - *Repeal of 200-Transaction Threshold*: Under 2023 Senate Bill 30, South Dakota formally eliminated the 200-transaction test, making $100,000 in gross revenue the sole nexus benchmark.
- **Destination Sourcing**: South Dakota is a full member of the Streamlined Sales and Use Tax Agreement (SSUTA) and enforces strict destination sourcing based on delivery location.
- **Marketplace Facilitator Law**: Facilitators (Amazon, Walmart, eBay) collect and remit South Dakota sales tax on behalf of marketplace sellers.`
      },
      {
        id: 'sd-registration-and-filing-compliance',
        title: 'E-Path Registration, Filing Due Dates, and Penalty Provisions',
        body: `Tax administration requirements enforced by the South Dakota Department of Revenue:

- **Business Registration**: Retailers register for a South Dakota Sales Tax License online via the **South Dakota E-Path** system.
- **Filing Deadlines**: Sales tax returns are filed monthly or bi-monthly and are due on or before the **20th day of the month** following the reporting period (extended to the last day of the month for electronic filers with payment via EFT).
- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **10% of the tax due** (minimum $10) under SDCL § 10-59-6, plus statutory monthly interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware & Software Purchase in Sioux Falls (6.20% Rate)',
      scenario: 'A small business in Sioux Falls, South Dakota purchases a $1,000.00 office computer and a $200.00 cloud accounting software subscription.',
      inputs: { hardwareAmount: '$1,000.00', cloudSaaSAmount: '$200.00', siouxFallsCombinedRate: '6.20% (4.2% State + 2.0% City)' },
      steps: [
        { label: 'Taxable Hardware Base', formula: '$1,000.00 hardware', amount: '$1,000.00', note: 'Taxable tangible personal property' },
        { label: 'Taxable SaaS Base', formula: '$200.00 cloud subscription', amount: '$200.00', note: 'Taxable under SDCL § 10-45-5.2' },
        { label: 'Combined Taxable Base', formula: '$1,000.00 + $200.00', amount: '$1,200.00', note: 'Total taxable purchase' },
        { label: 'Combined Sales Tax (6.20%)', formula: '$1,200.00 × 6.20%', amount: '$74.40', note: 'State ($50.40) + Sioux Falls ($24.00)' },
        { label: 'Total Invoiced Checkout Amount', formula: '$1,200.00 + $74.40', amount: '$1,274.40', note: 'Total customer payment' }
      ],
      takeaway: 'In Sioux Falls, both hardware and SaaS subscriptions are fully taxable at the combined 6.20% rate, generating $74.40 in total sales tax on the $1,200 purchase.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $500.00 Rapid City Receipt',
      scenario: 'A retail merchant in Rapid City collects an all-inclusive $500.00 payment for taxable goods at the combined 6.20% rate. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$500.00', combinedRate: '6.20%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$500.00 ÷ (1 + 0.062)', amount: '$470.81', note: 'Retained business net revenue' },
        { label: 'Combined Sales Tax Due', formula: '$500.00 - $470.81', amount: '$29.19', note: 'State ($19.77) and Rapid City ($9.42)' },
        { label: 'Verification Calculation', formula: '$470.81 × 6.20%', amount: '$29.19', note: 'Reconciles exactly to $500.00 total' }
      ],
      takeaway: 'From an all-inclusive $500.00 transaction in Rapid City, the retailer retains $470.81 and owes $29.19 in sales tax on their South Dakota E-Path return.'
    },
    faqs: [
      { question: 'What is the sales tax rate in South Dakota?', answer: 'The statutory state sales tax rate is 4.20% (reduced from 4.5% through June 30, 2027). In cities with a 2.00% municipal tax (such as Sioux Falls and Rapid City), the combined rate is 6.20%.', sourceUrl: 'https://dor.sd.gov/businesses/taxes/sales-use-tax/' },
      { question: 'Is Software as a Service (SaaS) taxable in South Dakota?', answer: 'Yes. South Dakota has one of the broadest sales tax codes in the nation; SaaS, cloud software access, and digital products are fully taxable at standard combined rates.', sourceUrl: 'https://dor.sd.gov/businesses/taxes/sales-use-tax/' },
      { question: 'Are groceries taxable in South Dakota?', answer: 'Yes. Food products and groceries for home consumption are fully taxable in South Dakota at the combined state and municipal sales tax rate.', sourceUrl: 'https://dor.sd.gov/businesses/taxes/sales-use-tax/' },
      { question: 'What is the South Dakota economic nexus threshold for remote sellers?', answer: 'Out-of-state remote sellers establish economic nexus when gross sales delivered into South Dakota exceed $100,000 annually. The 200-transaction test was repealed in 2023.', sourceUrl: 'https://dor.sd.gov/businesses/taxes/sales-use-tax/' },
      { question: 'Does South Dakota hold an annual sales tax holiday?', answer: 'No. South Dakota does not hold an annual statewide sales tax holiday.', sourceUrl: 'https://dor.sd.gov/businesses/taxes/sales-use-tax/' }
    ]
  },

  'north-dakota': {
    slug: 'north-dakota',
    name: 'North Dakota',
    title: 'North Dakota Sales Tax Calculator (5.00% to 8.50%) | FeeKit',
    metaDescription: 'Calculate North Dakota sales and use tax with Office of State Tax Commissioner rates (5.0% state, max 8.5% municipal). SaaS exemption, grocery rules, and $100k nexus.',
    h1: 'North Dakota Sales Tax Calculator & Tax Commissioner Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.tax.nd.gov/business/sales-and-use-tax',
    citation: 'N.D. Cent. Code Chapter 57-39.2 (Sales Tax) and Guideline: Computer Software.',
    overview: 'The State of North Dakota imposes a statutory baseline retail sales and use tax rate of 5.00% under N.D. Cent. Code § 57-39.2-02.1. Home-rule cities and counties across North Dakota are authorized to levy municipal and county local option sales taxes (ranging from 0.50% to 3.50%), pushing combined retail sales tax rates between 5.50% and 8.50% in major commercial centers including Fargo (7.50%), Grand Forks (7.25%), Bismarck (6.50%), and Minot (7.00%). Under official administrative guidelines, Software as a Service (SaaS) and remotely hosted applications are exempt from North Dakota sales tax. Remote out-of-state sellers establish economic nexus upon reaching $100,000 in gross taxable sales.',
    sections: [
      {
        id: 'nd-rate-structure-and-municipalities',
        title: 'North Dakota 5.00% Base Rate & Municipal Local Option Add-Ons (Max 8.50%)',
        body: `North Dakota’s sales tax code combines a statutory state baseline with municipal home-rule taxes:

- **Statewide Baseline Rate**: **5.00%**. Governed by N.D. Cent. Code § 57-39.2-02.1, applying to retail sales of tangible personal property.
- **Municipal and County Option Taxes**: Local jurisdictions enact municipal sales taxes administered centrally by the Office of State Tax Commissioner:
  - **Fargo (Cass County)**: **7.50% combined rate** (5.00% state + 2.50% city).
  - **Grand Forks (Grand Forks County)**: **7.25% combined rate** (5.00% state + 2.25% city).
  - **Minot (Ward County)**: **7.00% combined rate** (5.00% state + 2.00% city).
  - **Bismarck (Burleigh County)**: **6.50% combined rate** (5.00% state + 1.50% city).
  - **Williston (Williams County)**: **6.50% combined rate** (5.00% state + 1.50% city).
- **Maximum Combined Ceilings**: Several smaller home-rule jurisdictions levy up to 3.50% in combined municipal and county taxes, resulting in a state maximum of 8.50%.`
      },
      {
        id: 'nd-taxability-saas-groceries-clothing',
        title: 'Taxability Framework: SaaS Exemption, Grocery Protection, and Freight Rules',
        body: `Statutory product taxability rules enforced by the North Dakota Office of State Tax Commissioner:

1. **Software as a Service (SaaS)**: **100% Exempt**. Under North Dakota Guideline: Computer Software, prewritten software hosted on remote cloud infrastructure where the customer only accesses functionality without receiving downloaded code is classified as a non-taxable service.
2. **Food for Home Consumption (Groceries)**: **Exempt**. Staple grocery items are exempt from sales tax under N.D. Cent. Code § 57-39.2-04.1. Prepared hot meals, restaurant dining, soft drinks, and candy remain taxable at standard rates.
3. **Everyday Clothing and Footwear**: **Fully Taxable (5.00% - 8.50%)**. Clothing and footwear are taxable year-round in North Dakota.
4. **Freight and Delivery Fees**: Under N.D. Admin. Code 81-04.1-01-10, separately stated delivery and shipping charges are exempt from sales tax, provided the delivery occurs after the purchase is negotiated.`
      },
      {
        id: 'nd-economic-nexus-and-sourcing',
        title: 'North Dakota Remote Seller Nexus ($100,000 Threshold) & Sourcing',
        body: `Codified under N.D. Cent. Code § 57-39.2-02.2 following post-Wayfair legislation:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in North Dakota if, during the current or preceding calendar year, the business achieves:
  - Taxable gross sales delivered into North Dakota exceeding **$100,000**.
  - *Elimination of Transaction Test*: Under Senate Bill 2191, North Dakota repealed the 200-transaction threshold, meaning nexus is evaluated solely on the $100,000 gross taxable revenue test.
- **Destination Sourcing**: North Dakota is a full member of the Streamlined Sales Tax Agreement (SSTA) and enforces destination sourcing. Remote sellers collect the combined rate based on the delivery destination.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit North Dakota sales tax on marketplace sales.`
      },
      {
        id: 'nd-registration-and-filing-compliance',
        title: 'ND TAP Registration, Filing Due Dates, and Delinquency Penalties',
        body: `Tax compliance requirements administered by the North Dakota Tax Commissioner:

- **Permit Registration**: Remote and in-state retailers register online for a North Dakota Sales Tax Permit via **ND TAP (Taxpayer Access Point)**.
- **Filing Deadlines**: Sales tax returns (Form ST) are filed monthly or quarterly and are due on or before the **last day of the month** following the end of the reporting period.
- **Statutory Penalties**: Failure to file or pay on time incurs a penalty of **$5 or 5% of the tax due** (whichever is greater) for the first month, plus **1% per month** thereafter under N.D. Cent. Code § 57-39.2-18, plus statutory monthly interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Electronics Purchase in Fargo (7.50% Combined Rate)',
      scenario: 'A resident of Fargo, North Dakota orders a $600.00 4K television with a separately stated $50.00 freight delivery charge from an online retailer.',
      inputs: { televisionSubtotal: '$600.00', deliveryFreightCharge: '$50.00 (Separately Stated)', fargoCombinedRate: '7.50% (5% State + 2.5% City)' },
      steps: [
        { label: 'Taxable Television Base', formula: '$600.00 merchandise', amount: '$600.00', note: 'Taxable tangible personal property' },
        { label: 'Separately Stated Freight Status', formula: 'Separately stated common carrier', amount: '$0.00 tax', note: 'Exempt under N.D. Admin. Code 81-04.1-01-10' },
        { label: 'Combined Fargo Sales Tax (7.50%)', formula: '$600.00 × 7.50%', amount: '$45.00', note: 'State ($30.00) + Fargo ($15.00)' },
        { label: 'Total Invoiced Checkout Amount', formula: '$600.00 + $50.00 + $45.00', amount: '$695.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Fargo, the 7.50% combined sales tax applies only to the $600 television ($45.00 tax), keeping the separately stated $50 freight charge completely tax-free.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from an $800.00 Bismarck Invoice',
      scenario: 'A retail contractor in Bismarck collects an all-inclusive $800.00 payment for taxable retail supplies at a 6.50% combined rate. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$800.00', combinedRate: '6.50%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$800.00 ÷ (1 + 0.065)', amount: '$751.17', note: 'Retained business net revenue' },
        { label: 'Combined Sales Tax Liability', formula: '$800.00 - $751.17', amount: '$48.83', note: 'State ($37.56) and Bismarck ($11.27)' },
        { label: 'Verification Calculation', formula: '$751.17 × 6.50%', amount: '$48.83', note: 'Reconciles exactly to $800.00 receipt' }
      ],
      takeaway: 'From an $800.00 tax-inclusive transaction in Bismarck, the merchant retains $751.17 net revenue and remits $48.83 in combined sales tax to the state.'
    },
    faqs: [
      { question: 'What is the sales tax rate in North Dakota?', answer: 'The baseline statutory state sales tax rate is 5.00%. With municipal and county option taxes, combined rates range from 5.50% to 8.50% (7.50% in Fargo, 6.50% in Bismarck).', sourceUrl: 'https://www.tax.nd.gov/business/sales-and-use-tax' },
      { question: 'Does North Dakota tax Software as a Service (SaaS)?', answer: 'No. Under North Dakota Guideline: Computer Software, cloud-hosted SaaS subscriptions and remote software access are classified as exempt services.', sourceUrl: 'https://www.tax.nd.gov/business/sales-and-use-tax' },
      { question: 'Are groceries exempt from sales tax in North Dakota?', answer: 'Yes. Staple groceries and food for home consumption are exempt from sales tax under N.D. Cent. Code § 57-39.2-04.1. Prepared hot food and dining remain taxable.', sourceUrl: 'https://www.tax.nd.gov/business/sales-and-use-tax' },
      { question: 'What is the North Dakota economic nexus threshold for remote sellers?', answer: 'Out-of-state remote sellers establish economic nexus upon reaching $100,000 in gross taxable sales delivered into North Dakota. The 200-transaction test was repealed.', sourceUrl: 'https://www.tax.nd.gov/business/sales-and-use-tax' },
      { question: 'Does North Dakota offer a sales tax holiday?', answer: 'No. North Dakota does not host an annual statewide sales tax holiday.', sourceUrl: 'https://www.tax.nd.gov/business/sales-and-use-tax' }
    ]
  },

  'alaska': {
    slug: 'alaska',
    name: 'Alaska',
    title: 'Alaska Sales Tax Calculator (0.00% State, Local to 7.50%) | FeeKit',
    metaDescription: 'Calculate Alaska sales tax with Alaska Remote Sellers Sales Tax Commission (ARSSTC) rates (0.0% state, 0% to 7.5% municipal). Remote seller uniform code and $100k nexus.',
    h1: 'Alaska Sales Tax Calculator & ARSSTC Remote Sellers Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://arsstc.org/',
    citation: 'Alaska Remote Sellers Sales Tax Code (ARSSTC) and Alaska Municipal League Joint Powers Agreement.',
    overview: 'The State of Alaska does not impose a state-level retail sales tax, maintaining a statutory 0.00% statewide sales tax rate. However, under Alaska’s broad home-rule constitution, local municipalities and organized boroughs (counties) possess independent taxing authority. Over 100 Alaska cities and boroughs levy local retail sales taxes ranging from 1.00% to 7.50% (such as Juneau at 5.00%, Ketchikan at 6.50%, and Wasilla at 2.50%), while major metropolitan centers like Anchorage and Fairbanks levy a 0.00% general sales tax. To resolve interstate remote seller complexity, Alaska established the Alaska Remote Sellers Sales Tax Commission (ARSSTC), providing a centralized intergovernmental portal for remote seller economic nexus compliance.',
    sections: [
      {
        id: 'ak-zero-state-rate-and-local-boroughs',
        title: '0.00% State Rate vs Highly Independent Borough & City Taxes (0% to 7.50%)',
        body: `Alaska’s sales tax architecture is entirely decentralized at the local level:

- **Statewide Retail Sales Tax**: **0.00%**. The State of Alaska does not collect a general sales tax.
- **Municipal & Borough Option Rates**: Local jurisdictions enforce independent sales tax rates:
  - **Anchorage (Municipality of Anchorage)**: **0.00% general sales tax** (levies selective taxes on hotel rooms and car rentals).
  - **Fairbanks (Fairbanks North Star Borough)**: **0.00% general retail sales tax**.
  - **Juneau (City and Borough of Juneau)**: **5.00% municipal sales tax**.
  - **Wasilla (Matanuska-Susitna Borough)**: **2.50% city sales tax**.
  - **Ketchikan (City of Ketchikan)**: **6.50% combined city and borough tax**.
  - **Sitka (City and Borough of Sitka)**: **5.00% seasonal sales tax** (increases to 6.00% during summer months).`
      },
      {
        id: 'ak-the-arsstc-uniform-remote-code',
        title: 'The Alaska Remote Sellers Sales Tax Commission (ARSSTC) Uniform Code',
        body: `Because Alaska has no state Department of Revenue sales tax administration, the Alaska Municipal League formed the ARSSTC under a multi-jurisdictional Joint Powers Agreement:

- **Uniform Remote Sales Tax Code**: Participating member municipalities adopt the model ARSSTC Uniform Code, establishing standardized taxability definitions and administrative rules for remote commerce.
- **Centralized Administration**: Remote merchants register, calculate taxes, file unified monthly returns, and remit payments through a single centralized online clearinghouse (**ARSSTC Portal**) rather than dealing with dozens of individual Alaska cities.
- **Non-Member Municipalities**: A handful of local jurisdictions have not joined the ARSSTC and administer local sales taxes independently for in-person retail.`
      },
      {
        id: 'ak-economic-nexus-thresholds',
        title: 'Alaska Remote Seller Economic Nexus ($100,000 / 200 Transactions)',
        body: `Codified under Section .030 of the ARSSTC Uniform Remote Sellers Sales Tax Code:

- **Statewide Economic Nexus Threshold**: An out-of-state remote seller or marketplace facilitator establishes economic nexus across all ARSSTC member jurisdictions if, during the previous or current calendar year, the merchant achieves:
  - **$100,000 or more in gross sales** delivered statewide across all of Alaska; **OR**
  - **200 or more separate transactions** delivered statewide into Alaska.
- **Destination Sourcing**: Once economic nexus is triggered, the remote merchant must collect local sales tax based on the precise delivery address in participating ARSSTC member jurisdictions. If an order is delivered to Anchorage (0%), zero tax is collected. If delivered to Juneau (5%), 5.00% tax is collected.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, etc.) collect and remit local sales tax across all participating ARSSTC member cities.`
      },
      {
        id: 'ak-taxability-variations-saas-groceries',
        title: 'Local Taxability Variations: SaaS, Groceries, and Delivery Rules',
        body: `Because local codes govern taxability, product treatment varies across Alaska jurisdictions:

1. **Software as a Service (SaaS)**: Taxability depends on the delivery municipality. Under ARSSTC model interpretations, digital goods and SaaS subscriptions are taxable in Juneau and select boroughs, but exempt in others.
2. **Groceries & Food for Home Consumption**: Exempt in certain municipalities (such as Kenai Peninsula Borough), but fully taxable in Juneau, Ketchikan, and Sitka.
3. **Clothing and Footwear**: Fully taxable in jurisdictions that levy a local sales tax.
4. **Filing Deadlines**: ARSSTC monthly returns are due on or before the **last day of the month** following the reporting period.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Online Retail Delivery to Juneau vs Anchorage',
      scenario: 'An out-of-state online electronics merchant with Alaska economic nexus ships a $500.00 tablet to a customer in Juneau, and an identical tablet to Anchorage.',
      inputs: { tabletPrice: '$500.00', juneauLocalRate: '5.00% (ARSSTC Member)', anchorageLocalRate: '0.00%' },
      steps: [
        { label: 'Juneau Delivery Sales Tax (5.00%)', formula: '$500.00 × 5.00%', amount: '$25.00', note: 'Juneau ARSSTC municipal tax' },
        { label: 'Juneau Total Customer Checkout', formula: '$500.00 + $25.00', amount: '$525.00', note: 'Total invoiced to Juneau buyer' },
        { label: 'Anchorage Delivery Sales Tax (0.00%)', formula: '$500.00 × 0.00%', amount: '$0.00', note: 'Anchorage levies zero general sales tax' },
        { label: 'Anchorage Total Customer Checkout', formula: '$500.00 + $0.00', amount: '$500.00', note: 'Total invoiced to Anchorage buyer' }
      ],
      takeaway: 'Under Alaska’s destination sourcing rules, an identical $500 tablet incurs $25.00 sales tax when delivered to Juneau, but zero tax when delivered to Anchorage.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $400.00 Ketchikan Receipt',
      scenario: 'A retail merchant in Ketchikan collects an all-inclusive $400.00 payment for taxable souvenirs at a combined 6.50% local rate. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$400.00', combinedLocalRate: '6.50%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$400.00 ÷ (1 + 0.065)', amount: '$375.59', note: 'Retained business net revenue' },
        { label: 'Local Ketchikan Sales Tax Liability', formula: '$400.00 - $375.59', amount: '$24.41', note: 'Remitted to local tax authority' },
        { label: 'Verification Calculation', formula: '$375.59 × 6.50%', amount: '$24.41', note: 'Reconciles exactly to $400.00 receipt' }
      ],
      takeaway: 'From a $400.00 tax-inclusive transaction in Ketchikan, the merchant retains $375.59 net revenue and owes $24.41 in local sales tax.'
    },
    faqs: [
      { question: 'Does Alaska have a state sales tax?', answer: 'No. The State of Alaska does not impose a state sales tax (0.00%). However, individual cities and boroughs levy local sales taxes ranging from 1.00% to 7.50%.', sourceUrl: 'https://arsstc.org/' },
      { question: 'What is the Alaska Remote Sellers Sales Tax Commission (ARSSTC)?', answer: 'ARSSTC is an intergovernmental commission that provides centralized sales tax administration, registration, and filing for remote out-of-state sellers delivering goods into participating Alaska municipalities.', sourceUrl: 'https://arsstc.org/' },
      { question: 'What is the Alaska economic nexus threshold for remote sellers?', answer: 'Remote sellers establish economic nexus across participating Alaska municipalities when statewide sales into Alaska reach $100,000 or 200 separate transactions annually.', sourceUrl: 'https://arsstc.org/' },
      { question: 'Is sales tax charged in Anchorage or Fairbanks?', answer: 'No. Anchorage and Fairbanks do not levy a general retail sales tax. Deliveries to addresses in these cities incur 0% sales tax.', sourceUrl: 'https://arsstc.org/' },
      { question: 'How is SaaS taxed in Alaska?', answer: 'SaaS taxability depends on the local municipality. SaaS and digital goods are taxable in Juneau and select member boroughs, but exempt in others.', sourceUrl: 'https://arsstc.org/' }
    ]
  },

  'vermont': {
    slug: 'vermont',
    name: 'Vermont',
    title: 'Vermont Sales Tax Calculator (6.00% to 7.00%) | FeeKit',
    metaDescription: 'Calculate Vermont sales and use tax with Department of Taxes rates (6.0% state, 7.0% local option). SaaS exemption under Act 51, clothing exemption, and $100k nexus.',
    h1: 'Vermont Sales Tax Calculator & Department of Taxes Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://tax.vermont.gov/business/sales-and-use-tax',
    citation: '32 V.S.A. Chapter 233 (Sales and Use Tax) and Vermont Act 51 (2015 Prewritten Software Access Exemption).',
    overview: 'The State of Vermont imposes a statutory baseline retail sales and use tax rate of 6.00% under 32 V.S.A. § 9771. Municipalities that have adopted a 1.00% local option sales tax—including Burlington, Montpelier, Rutland, South Burlington, and St. Albans—enforce a combined retail sales tax rate of 7.00%. Vermont provides broad statutory exemptions for consumer essentials, completely exempting everyday clothing, footwear, and unprepared grocery foods. Under landmark legislation (Act 51), Vermont permanently exempted Software as a Service (SaaS) and remotely accessed prewritten software from sales tax. Remote out-of-state merchants establish economic nexus upon reaching $100,000 in sales or 200 transactions.',
    sections: [
      {
        id: 'vt-rate-structure-and-local-options',
        title: 'Vermont 6.00% State Rate & 1.00% Municipal Local Options (Max 7.00%)',
        body: `Vermont’s sales tax code combines a state baseline with municipal option surcharges:

- **Statewide Baseline Rate**: **6.00%**. Governed by 32 V.S.A. § 9771, applying across all non-option municipalities.
- **Municipal Local Option Tax (1.00%)**: **7.00% combined rate**. Participating municipalities levy a 1.00% local option tax administered centrally by the Vermont Department of Taxes:
  - **Burlington (Chittenden County)**: **7.00%** (6.00% state + 1.00% city).
  - **South Burlington (Chittenden County)**: **7.00%** (6.00% state + 1.00% city).
  - **Montpelier (Washington County)**: **7.00%** (6.00% state + 1.00% city).
  - **Rutland (Rutland County)**: **7.00%** (6.00% state + 1.00% city).
  - **St. Albans (Franklin County)**: **7.00%** (6.00% state + 1.00% city).
  - **Winooski (Chittenden County)**: **7.00%** (6.00% state + 1.00% city).
- **Meals and Rooms Tax**: Vermont levies a separate **9.00% Meals and Rooms Tax** (10.00% in local option towns) on prepared restaurant food and lodging accommodations under 32 V.S.A. Chapter 225.`
      },
      {
        id: 'vt-taxability-clothing-saas-groceries',
        title: 'Taxability Framework: Act 51 SaaS Exemption, Clothing Exemption, and Groceries',
        body: `Statutory product taxability rules enforced by the Vermont Department of Taxes:

1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Following the enactment of Act 51 in 2015, Vermont permanently codified that prewritten software accessed remotely via the cloud where the customer does not receive physical media or download software code is completely exempt from sales and use tax.
2. **Everyday Clothing and Footwear**: **100% Exempt Statewide**. Under 32 V.S.A. § 9741(45), all standard articles of clothing and footwear designed for everyday human wear are exempt year-round with **zero dollar ceiling**. Specialty athletic clothing and protective gear remain taxable.
3. **Food for Home Consumption (Groceries)**: **Exempt**. Food, fresh produce, and beverages for home consumption are non-taxable under 32 V.S.A. § 9741(13).
4. **Freight and Delivery Fees**: Under 32 V.S.A. § 9701(4), delivery and shipping charges billed by the vendor for taxable goods are taxable. If the merchandise shipped is exempt (such as everyday clothing), the shipping fee is also exempt.`
      },
      {
        id: 'vt-economic-nexus-and-sourcing',
        title: 'Vermont Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Codified under 32 V.S.A. § 9701(9)(F) following post-Wayfair statutory updates:

- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in Vermont upon exceeding either threshold during any preceding 12-month period:
  - More than **$100,000 in gross sales** delivered into Vermont; **OR**
  - **200 or more separate retail transactions** delivered into the state.
- **Destination Sourcing**: Vermont is a full member of the Streamlined Sales Tax Agreement (SSTA) and enforces destination sourcing. Remote sellers collect either 6.00% or 7.00% depending on the customer's delivery destination.
- **Marketplace Facilitator Law**: Facilitators (Amazon, Etsy, eBay, etc.) collect and remit Vermont sales tax on behalf of third-party marketplace sellers.`
      },
      {
        id: 'vt-registration-and-filing-compliance',
        title: 'myVTax Registration, Return Due Dates, and Penalty Rules',
        body: `Compliance requirements administered by the Vermont Department of Taxes:

- **Sales Tax Licensing**: Retailers register for a Vermont Sales and Use Tax License online via **myVTax**.
- **Filing Deadlines**: Standard sales tax returns (Form SUT-451) are due on or before the **25th day of the month** following the end of the reporting period.
- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **5% per month** of the unpaid tax, up to a maximum of **25%** under 32 V.S.A. § 3202, plus statutory monthly interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Electronics vs Apparel Order in Burlington (7.00% Rate)',
      scenario: 'A resident of Burlington, Vermont orders a $500.00 audio speaker and a $150.00 winter coat with a separately stated $30.00 shipping fee.',
      inputs: { speakerSubtotal: '$500.00', winterCoatSubtotal: '$150.00', shippingFee: '$30.00', burlingtonCombinedRate: '7.00%' },
      steps: [
        { label: 'Taxable Audio Speaker Base', formula: '$500.00 electronics', amount: '$500.00', note: 'Taxable personal property' },
        { label: 'Winter Coat Status', formula: 'Everyday apparel', amount: '$0.00 tax', note: '100% exempt under 32 V.S.A. § 9741(45)' },
        { label: 'Taxable Shipping Proportion', formula: '$30.00 shipping on taxable goods', amount: '$30.00', note: 'Delivery for taxable speaker is taxable' },
        { label: 'Combined Vermont Tax (7.00%)', formula: '($500.00 + $30.00) × 7.00%', amount: '$37.10', note: 'State ($31.80) + Burlington ($5.30)' },
        { label: 'Total Invoiced Customer Checkout', formula: '$500.00 + $150.00 + $30.00 + $37.10', amount: '$717.10', note: 'Total customer payment' }
      ],
      takeaway: 'In Burlington, the 7.00% sales tax applies to the speaker and delivery fee ($37.10 tax), while the $150 winter coat is completely tax-free.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $700.00 Montpelier Receipt',
      scenario: 'A commercial vendor in Montpelier collects an all-inclusive $700.00 payment for taxable retail goods at a 7.00% combined rate. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$700.00', combinedRate: '7.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$700.00 ÷ (1 + 0.07)', amount: '$654.21', note: 'Retained business net revenue' },
        { label: 'Combined Sales Tax Liability', formula: '$700.00 - $654.21', amount: '$45.79', note: 'State ($39.25) and Montpelier ($6.54)' },
        { label: 'Verification Calculation', formula: '$654.21 × 7.00%', amount: '$45.79', note: 'Reconciles exactly to $700.00 receipt' }
      ],
      takeaway: 'From an all-inclusive $700.00 transaction in Montpelier, the merchant retains $654.21 net revenue and remits $45.79 in sales tax on Form SUT-451.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Vermont?', answer: 'The baseline state sales tax rate is 6.00%. In municipalities that have adopted a 1.00% local option tax (including Burlington, Montpelier, and Rutland), the combined rate is 7.00%.', sourceUrl: 'https://tax.vermont.gov/business/sales-and-use-tax' },
      { question: 'Is Software as a Service (SaaS) taxable in Vermont?', answer: 'No. Following Act 51, Vermont permanently exempted remotely accessed prewritten software (SaaS) and cloud services from state and local sales tax.', sourceUrl: 'https://tax.vermont.gov/business/sales-and-use-tax' },
      { question: 'Are clothes taxed in Vermont?', answer: 'No. Everyday clothing and footwear are 100% exempt from sales tax in Vermont with no price ceiling. Specialty sports apparel and accessories remain taxable.', sourceUrl: 'https://tax.vermont.gov/business/sales-and-use-tax' },
      { question: 'What is the Vermont economic nexus threshold for remote sellers?', answer: 'Out-of-state remote sellers establish economic nexus in Vermont upon exceeding $100,000 in gross sales or completing 200 individual transactions delivered into Vermont in any preceding 12-month period.', sourceUrl: 'https://tax.vermont.gov/business/sales-and-use-tax' },
      { question: 'When are Vermont sales tax returns due?', answer: 'Vermont sales tax returns are due on or before the 25th day of the month following the close of the reporting period via myVTax.', sourceUrl: 'https://tax.vermont.gov/business/sales-and-use-tax' }
    ]
  },

  'wyoming': {
    slug: 'wyoming',
    name: 'Wyoming',
    title: 'Wyoming Sales Tax Calculator (4.00% to 6.00%) | FeeKit',
    metaDescription: 'Calculate Wyoming sales and use tax with Department of Revenue rates (4.0% state, max 6.0% county). SaaS exemption policy, grocery exemption, and $100k nexus.',
    h1: 'Wyoming Sales Tax Calculator & Department of Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://revenue.wyo.gov/',
    citation: 'Wyo. Stat. Ann. Title 39, Chapter 15 (Sales Tax) and Chapter 16 (Use Tax).',
    overview: 'The State of Wyoming imposes a statutory baseline retail sales tax rate of 4.00% under Wyo. Stat. Ann. § 39-15-104. Counties across Wyoming are legally authorized to levy optional local sales taxes—including a 1.00% general purpose tax and a 1.00% specific purpose tax—pushing combined retail sales tax rates between 5.00% and 6.00% in commercial hubs such as Cheyenne (6.00%), Casper (5.00%), Jackson (6.00%), and Laramie (6.00%). Under Wyoming Department of Revenue administrative policy, Software as a Service (SaaS) is exempt from sales tax. Out-of-state remote sellers establish economic nexus upon reaching $100,000 in gross sales or 200 transactions.',
    sections: [
      {
        id: 'wy-rate-structure-and-county-options',
        title: 'Wyoming 4.00% State Rate & County Local Option Taxes (Max 6.00%)',
        body: `Wyoming’s sales tax code combines a statutory baseline with county-level option surcharges:

- **Statewide Baseline Rate**: **4.00%**. Enacted under Wyo. Stat. Ann. § 39-15-104, applying to all retail sales of tangible personal property.
- **County Local Option Taxes (1.00% - 2.00%)**: Enacted by voter referendum across Wyoming counties:
  - **Cheyenne (Laramie County)**: **6.00% combined rate** (4.00% state + 1.00% general purpose + 1.00% specific purpose).
  - **Jackson (Teton County)**: **6.00% combined rate** (4.00% state + 1.00% general purpose + 1.00% specific purpose).
  - **Laramie (Albany County)**: **6.00% combined rate** (4.00% state + 2.00% local option taxes).
  - **Casper (Natrona County)**: **5.00% combined rate** (4.00% state + 1.00% county option).
  - **Gillette (Campbell County)**: **5.00% combined rate** (4.00% state + 1.00% county option).
- **Sublette County**: One of the few Wyoming jurisdictions maintaining the pure statutory base rate of 4.00%.`
      },
      {
        id: 'wy-taxability-saas-groceries-clothing',
        title: 'Taxability Framework: SaaS Exemption, Grocery Protection, and Freight Rules',
        body: `Statutory product taxability rules enforced by the Wyoming Department of Revenue:

1. **Software as a Service (SaaS)**: **100% Exempt**. Under Wyoming Department of Revenue administrative policy, cloud SaaS subscriptions where software is accessed remotely without delivering executable code or storage media are classified as non-taxable services.
2. **Food for Home Consumption (Groceries)**: **Exempt**. Staple grocery items are exempt from sales tax under Wyo. Stat. Ann. § 39-15-105(a)(vi)(E). Prepared hot meals, restaurant dining, candy, and soft drinks remain taxable at standard combined rates.
3. **Everyday Clothing and Footwear**: **Fully Taxable (4.00% - 6.00%)**. Clothing is taxable year-round in Wyoming at combined state and county rates.
4. **Freight and Delivery Fees**: Under Wyo. Stat. Ann. § 39-15-101(a)(viii), separately stated transportation and freight charges are exempt from sales tax if billed directly to the customer.`
      },
      {
        id: 'wy-economic-nexus-and-sourcing',
        title: 'Wyoming Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Codified under Wyo. Stat. Ann. § 39-15-501 following post-Wayfair statutory updates:

- **Economic Nexus Standard**: A remote vendor establishes economic nexus in Wyoming if, during the current or preceding calendar year, the business achieves:
  - Gross sales exceeding **$100,000** delivered into Wyoming; **OR**
  - **200 or more separate transactions** delivered into the state.
- **Destination Sourcing**: Wyoming is a full member of the Streamlined Sales Tax Agreement (SSTA) and enforces destination sourcing. Remote sellers collect the combined rate based on the delivery destination.
- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Walmart, etc.) collect and remit Wyoming sales tax on marketplace sales.`
      },
      {
        id: 'wy-registration-and-filing-compliance',
        title: 'WYIFS Registration, Filing Due Dates, and Delinquency Penalties',
        body: `Compliance requirements administered by the Wyoming Department of Revenue:

- **License Registration**: Remote and in-state retailers register online for a Wyoming Sales Tax License via the **Wyoming Internet Filing System for Business (WYIFS)**.
- **Filing Deadlines**: Sales tax returns (Form 41) are filed monthly or quarterly and are due on or before the **last day of the month** following the end of the reporting period.
- **Statutory Penalties**: Failure to file or pay on time incurs a late filing penalty of **$10 or 10% of the tax due** (whichever is greater) under Wyo. Stat. Ann. § 39-15-108, plus statutory monthly interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: Retail Hardware Purchase in Cheyenne (6.00% Combined Rate)',
      scenario: 'A homeowner in Cheyenne, Wyoming orders $800.00 of power tools with a separately stated $50.00 delivery freight fee from an online merchant.',
      inputs: { toolsSubtotal: '$800.00', deliveryFreightCharge: '$50.00 (Separately Stated)', cheyenneCombinedRate: '6.00% (4% State + 2% County)' },
      steps: [
        { label: 'Taxable Tools Base', formula: '$800.00 hardware', amount: '$800.00', note: 'Taxable tangible personal property' },
        { label: 'Separately Stated Freight Status', formula: 'Separately stated common carrier', amount: '$0.00 tax', note: 'Exempt under Wyo. Stat. Ann. § 39-15-101(a)(viii)' },
        { label: 'Combined Cheyenne Sales Tax (6.00%)', formula: '$800.00 × 6.00%', amount: '$48.00', note: 'State ($32.00) + Laramie County ($16.00)' },
        { label: 'Total Invoiced Checkout Amount', formula: '$800.00 + $50.00 + $48.00', amount: '$898.00', note: 'Total customer payment' }
      ],
      takeaway: 'In Cheyenne, the 6.00% combined sales tax applies only to the $800 tools ($48.00 tax), keeping the separately stated $50 freight charge completely tax-free.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $600.00 Casper Invoice',
      scenario: 'A retail contractor in Casper collects an all-inclusive $600.00 payment for taxable retail goods at a 5.00% combined rate. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: '$600.00', combinedRate: '5.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '$600.00 ÷ (1 + 0.05)', amount: '$571.43', note: 'Retained business net revenue' },
        { label: 'Combined Sales Tax Liability', formula: '$600.00 - $571.43', amount: '$28.57', note: 'State ($22.86) and Natrona County ($5.71)' },
        { label: 'Verification Calculation', formula: '$571.43 × 5.00%', amount: '$28.57', note: 'Reconciles exactly to $600.00 receipt' }
      ],
      takeaway: 'From a $600.00 tax-inclusive transaction in Casper, the merchant retains $571.43 net revenue and remits $28.57 in combined sales tax on Form 41.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Wyoming?', answer: 'The baseline statutory state sales tax rate is 4.00%. With county local option taxes, combined rates range from 4.00% to 6.00% (6.00% in Cheyenne and Jackson, 5.00% in Casper).', sourceUrl: 'https://revenue.wyo.gov/' },
      { question: 'Does Wyoming tax Software as a Service (SaaS)?', answer: 'No. Under Wyoming Department of Revenue administrative policy, cloud-hosted SaaS subscriptions and remote software access are classified as exempt services.', sourceUrl: 'https://revenue.wyo.gov/' },
      { question: 'Are groceries exempt from sales tax in Wyoming?', answer: 'Yes. Staple groceries and food for home consumption are exempt from sales tax under Wyo. Stat. Ann. § 39-15-105(a)(vi)(E). Prepared meals and restaurant dining remain taxable.', sourceUrl: 'https://revenue.wyo.gov/' },
      { question: 'What is the Wyoming economic nexus threshold for remote sellers?', answer: 'Out-of-state remote sellers establish economic nexus upon reaching $100,000 in gross sales or completing 200 individual transactions delivered into Wyoming during the current or preceding year.', sourceUrl: 'https://revenue.wyo.gov/' },
      { question: 'When are Wyoming sales tax returns due?', answer: 'Wyoming sales tax returns are due on or before the last day of the month following the close of the reporting period via WYIFS.', sourceUrl: 'https://revenue.wyo.gov/' }
    ]
  },

  'district-of-columbia': {
    slug: 'district-of-columbia',
    name: 'District of Columbia',
    title: 'Washington D.C. Sales Tax Calculator (6.00% to 10.25%) | FeeKit',
    metaDescription: 'Calculate Washington D.C. sales tax with Office of Tax and Revenue rates (6.0% general retail, 10.0% restaurant meals). Taxable SaaS, grocery rules, and $100k nexus.',
    h1: 'Washington D.C. Sales Tax Calculator & Office of Tax and Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://otr.cfo.dc.gov/page/sales-and-use-tax',
    citation: 'D.C. Code Title 47, Chapter 20 (Gross Sales Tax) and Chapter 22 (Compensating Use Tax).',
    overview: 'The District of Columbia levies a statutory general retail sales and use tax rate of 6.00% under D.C. Code § 47-2002. Because the District operates as a consolidated municipal-state jurisdiction, there are no independent county or municipal sub-tier sales taxes. However, the District enforces specialized statutory sales tax tiers for distinct economic sectors: general retail goods (6.00%), restaurant dining and prepared foods (10.00%), commercial parking facilities (10.25%), and transient hotel accommodations (14.95% plus $0.20/night). Under D.C. Code § 47-2001(n)(1)(N), Software as a Service (SaaS) and digital goods are fully taxable at 6.00%. Remote sellers establish economic nexus upon reaching $100,000 in gross revenue or 200 transactions.',
    sections: [
      {
        id: 'dc-specialized-rate-tiers',
        title: 'Washington D.C. Specialized Sales Tax Tiers (6.00% to 14.95%)',
        body: `The District of Columbia enforces a multi-tiered sales tax rate structure:

- **General Retail Rate**: **6.00%**. Governed by D.C. Code § 47-2002, applying to retail sales of tangible personal property, specified digital products, and taxable commercial services.
- **Restaurant Meals & Prepared Food**: **10.00%**. Applies to all meals, food, and beverages served in restaurants, carryout establishments, catering venues, and bars.
- **Commercial Parking Facilities**: **10.25%**. Applies to parking and storage of motor vehicles in commercial parking lots and garages.
- **Transient Hotel Accommodations**: **14.95%** (combining a 10.05% basic hotel tax and 4.90% convention center surcharge, plus a $0.20 per room per night fee).
- **Off-Premises Alcoholic Beverages**: **10.25%**. Applies to sales of packaged alcoholic beverages sold in liquor stores for off-premises consumption.`
      },
      {
        id: 'dc-taxability-saas-groceries-clothing',
        title: 'Taxability Framework: Full SaaS Taxation, Grocery Exemption, and Freight Rules',
        body: `Statutory product taxability rules enforced by the D.C. Office of Tax and Revenue (OTR):

1. **Software as a Service (SaaS)**: **Fully Taxable (6.00%)**. Enacted under D.C. Code § 47-2001(n)(1)(N), the District explicitly taxes the sale or charge for any prewritten computer software transferred electronically or accessed remotely, including cloud SaaS, hosted applications, and digital code.
2. **Food for Home Consumption (Groceries)**: **100% Exempt**. Staple grocery items, fresh produce, meat, dairy, and bakery products are exempt from sales tax under D.C. Code § 47-2005(2). Restaurant dining and prepared meals are taxable at 10.00%.
3. **Everyday Clothing and Footwear**: **Fully Taxable (6.00%)**. Clothing is subject to the standard 6.00% retail sales tax year-round.
4. **Freight and Delivery Fees**: Under D.C. Code § 47-2001(p), transportation charges billed by the vendor in connection with the sale of taxable merchandise are included in the taxable sales price.`
      },
      {
        id: 'dc-economic-nexus-and-sourcing',
        title: 'Washington D.C. Remote Seller Nexus ($100,000 / 200 Transactions) & Sourcing',
        body: `Codified under D.C. Code § 47-2001(n)(1) following post-Wayfair statutory updates:

- **Economic Nexus Standard**: An out-of-state remote vendor establishes economic nexus in the District of Columbia if, during the previous or current calendar year, the business achieves:
  - Gross receipts exceeding **$100,000** from retail sales delivered into the District; **OR**
  - **200 or more separate retail transactions** delivered into the District.
- **Destination Sourcing**: The District enforces destination sourcing. Remote merchants collect the applicable rate (6.00% retail or 10.00% restaurant/catering) based on delivery into D.C.
- **Marketplace Facilitator Law**: Facilitators (Amazon, DoorDash, Uber Eats, Etsy, etc.) collect and remit D.C. sales tax on behalf of marketplace vendors.`
      },
      {
        id: 'dc-registration-and-filing-compliance',
        title: 'MyTax DC Registration, Filing Due Dates, and Delinquency Penalties',
        body: `Compliance requirements administered by the D.C. Office of Tax and Revenue:

- **Sales Tax Licensing**: Retailers register for a D.C. Sales and Use Tax account online via the **MyTax DC** portal.
- **Filing Deadlines**: Standard sales tax returns (Form FR-800M for monthly remitters or FR-800Q for quarterly filers) are due on or before the **20th day of the month** following the end of the reporting period.
- **Statutory Penalties**: Delinquent returns incur a late filing penalty of **5% per month** of the unpaid tax, up to a statutory ceiling of **25%** under D.C. Code § 47-4213, plus statutory monthly interest.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Cloud Software Subscription in Washington D.C. (6.00% Rate)',
      scenario: 'A public policy consultancy headquartered in downtown Washington D.C. subscribes to an enterprise SaaS analytics platform billed at $2,000.00 annually.',
      inputs: { annualSaaSContract: '$2,000.00', dcGeneralSalesTaxRate: '6.00%' },
      steps: [
        { label: 'Taxable Service Base', formula: '$2,000.00 cloud subscription', amount: '$2,000.00', note: 'Taxable under D.C. Code § 47-2001(n)(1)(N)' },
        { label: 'D.C. General Sales Tax (6.00%)', formula: '$2,000.00 × 6.00%', amount: '$120.00', note: 'Standard District rate' },
        { label: 'Total Invoiced SaaS Cost', formula: '$2,000.00 + $120.00', amount: '$2,120.00', note: 'Full customer payment' }
      ],
      takeaway: 'Because Washington D.C. statutorily taxes remotely accessed prewritten software, the consultancy incurs a 6.00% sales tax ($120.00) on the SaaS contract.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a $550.00 Restaurant Catering Receipt',
      scenario: 'A catering service in Washington D.C. issues an all-inclusive $550.00 invoice for prepared corporate luncheon dining subject to the 10.00% restaurant rate.',
      inputs: { totalInclusiveAmount: '$550.00', dcRestaurantRate: '10.00%' },
      steps: [
        { label: 'Net Catering Extraction Formula', formula: '$550.00 ÷ (1 + 0.10)', amount: '$500.00', note: 'Retained catering business revenue' },
        { label: 'D.C. Restaurant Sales Tax Liability', formula: '$550.00 - $500.00', amount: '$50.00', note: 'Remitted on Form FR-800' },
        { label: 'Verification Calculation', formula: '$500.00 × 10.00%', amount: '$50.00', note: 'Reconciles exactly to $550.00 receipt' }
      ],
      takeaway: 'From an all-inclusive $550.00 catering bill in Washington D.C., the caterer retains $500.00 net revenue and owes $50.00 in sales tax at the 10.00% restaurant rate.'
    },
    faqs: [
      { question: 'What is the sales tax rate in Washington D.C.?', answer: 'The general retail sales tax rate in Washington D.C. is 6.00%. Specialized rates apply to restaurant dining (10.00%), commercial parking (10.25%), and hotels (14.95%).', sourceUrl: 'https://otr.cfo.dc.gov/page/sales-and-use-tax' },
      { question: 'Is Software as a Service (SaaS) taxable in Washington D.C.?', answer: 'Yes. Washington D.C. explicitly taxes SaaS, cloud software access, and digital products at the standard 6.00% retail sales tax rate under D.C. Code § 47-2001(n)(1)(N).', sourceUrl: 'https://otr.cfo.dc.gov/page/sales-and-use-tax' },
      { question: 'Are groceries taxable in Washington D.C.?', answer: 'No. Grocery staples and food items purchased for home consumption are 100% exempt from sales tax in D.C. Prepared meals and restaurant dining are taxed at 10.00%.', sourceUrl: 'https://otr.cfo.dc.gov/page/sales-and-use-tax' },
      { question: 'What is the Washington D.C. economic nexus threshold for remote sellers?', answer: 'Out-of-state remote vendors establish economic nexus upon reaching $100,000 in gross receipts or completing 200 individual transactions delivered into the District.', sourceUrl: 'https://otr.cfo.dc.gov/page/sales-and-use-tax' },
      { question: 'When are Washington D.C. sales tax returns due?', answer: 'D.C. sales tax returns are due on or before the 20th day of the month following the close of the reporting period via MyTax DC.', sourceUrl: 'https://otr.cfo.dc.gov/page/sales-and-use-tax' }
    ]
  }
};

