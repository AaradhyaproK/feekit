import type { PageContent } from '../types.ts';

export const newJerseyContent: PageContent = {
  slug: 'new-jersey',
  family: 'sales-tax',
  title: 'New Jersey Sales Tax Calculator (6.625% & 3.3125% UEZ) | FeeKit',
  metaDescription:
    'Calculate New Jersey sales and use tax with verified Division of Taxation rates (6.625% statewide, 3.3125% Urban Enterprise Zones). Covers everyday clothing exemptions, TAM-2011-05 SaaS exemption, and $100k nexus.',
  h1: 'New Jersey Sales Tax Calculator & Division of Taxation Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'New Jersey Division of Taxation',
    url: 'https://www.nj.gov/treasury/taxation/ratechanges.shtml',
    citation: 'N.J.S.A. 54:32B-1 et seq. (New Jersey Sales and Use Tax Act) and Technical Advisory Memorandum TAM-2011-05.',
  },
  overview:
    'New Jersey enforces a uniform statewide sales and use tax rate of 6.625%, which took effect on January 1, 2018 under statutory rate reduction legislation. Unlike neighboring states, New Jersey does not authorize general municipal or county-level sales taxes, creating administrative simplicity across all 21 counties. However, the state provides a statutory 50% sales tax reduction (resulting in a 3.3125% rate) for qualifying in-person retail purchases made in designated Urban Enterprise Zones (UEZs). Remote out-of-state merchants establish economic nexus upon reaching $100,000 in gross sales or 200 separate transactions delivered into New Jersey.',
  sections: [
    {
      id: 'uniform-rate-and-uez-districts-nj',
      title: 'The 6.625% Statewide Standard and Urban Enterprise Zone (UEZ) Rates',
      body: `Under the New Jersey Sales and Use Tax Act (N.J.S.A. 54:32B-1), retail commerce is governed by standardized rate rules:

- **Statewide Baseline Rate**: **6.625%**. Applies uniformly across all retail establishments, e-commerce deliveries, and commercial services from Cape May to Bergen County. Local municipalities cannot add local surcharges.
- **Urban Enterprise Zone (UEZ) Retail Rate**: **3.3125%** (exactly 50% of the statewide base rate). Established by the New Jersey Legislature to stimulate economic revitalization in economically distressed urban districts.
  - Participating UEZ municipalities include Newark, Camden, Trenton, Paterson, Elizabeth, Jersey City, Bridgeton, and Vineland.
  - *Statutory Restriction*: The 3.3125% rate applies **only to card-present in-person retail sales** of tangible goods made at a certified physical merchant storefront within the zone. Online orders, phone orders, and deliveries originating outside the zone do not qualify for the 50% discount.
- **Atlantic City Luxury Surtax**: Atlantic City imposes an 8.875% tax on alcoholic beverages served in restaurants and entertainment venues, combining a 3.00% local luxury tax with the 6.625% state rate (offset by a 0.75% state credit).`,
    },
    {
      id: 'statutory-exemptions-clothing-saas-nj',
      title: 'Taxability Framework: Complete Clothing Exemption, SaaS Treatment, and Groceries',
      body: `New Jersey provides broad statutory exemptions designed to protect consumer essentials and service businesses:

1. **Everyday Clothing and Footwear**: **100% Exempt Statewide**. Under N.J.S.A. 54:32B-8.4, all standard articles of clothing and footwear designed for everyday human wear are exempt from sales tax year-round, with **zero dollar ceiling**. Unlike New York (which caps exemptions at $110 per item), a $1,500 designer winter coat or business suit is completely tax-free at checkout in New Jersey.
   - *Taxable Exceptions*: Accessories, handbags, jewelry, belt buckles sold separately, and garments made predominantly of genuine fur remain subject to the full 6.625% rate.
2. **Software as a Service (SaaS)**: **Exempt**. Under Technical Advisory Memorandum TAM-2011-05, cloud software hosted on remote servers where the customer does not receive tangible storage media or executable code is classified as an exempt service. Prewritten software downloaded onto a customer's local hard drive is fully taxable.
3. **Unprepared Groceries**: **Exempt**. Food items, fresh produce, meat, dairy, bakery goods, and health products are non-taxable under N.J.S.A. 54:32B-8.2. Candy, carbonated soft drinks, and hot prepared meals are taxable at 6.625%.
4. **Delivery and Shipping Surcharges**: Billed delivery and freight charges are taxable if the items shipped are taxable. If an order contains only exempt clothing, the associated shipping fee is completely exempt from sales tax.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-rules-nj',
      title: 'New Jersey Economic Nexus ($100,000 / 200 Transactions) & Sourcing',
      body: `Following Assembly Bill 4496, out-of-state remote merchants must collect New Jersey sales tax once either statutory threshold is met:

- **Economic Nexus Criteria**:
  - Gross revenue exceeding **$100,000** from sales of tangible personal property, specified digital products, or services delivered into New Jersey during the current or preceding calendar year; **OR**
  - **200 or more separate transactions** delivered into the state.
- **Destination Sourcing**: New Jersey enforces destination sourcing for all delivered merchandise. Intrastate and interstate deliveries are taxed based on the delivery location where the purchaser receives possession.
- **Marketplace Facilitator Law**: Marketplaces such as Amazon, Walmart, and Etsy are legally required to collect and remit New Jersey sales tax on behalf of third-party marketplace sellers. Facilitated sales count toward your $100,000 / 200 transaction economic nexus calculations.`,
    },
    {
      id: 'registration-filing-and-penalties-nj',
      title: 'Permit Registration (Form NJ-REG), Quarterly Filing, and Penalty Rules',
      body: `Administrative requirements enforced by the New Jersey Division of Taxation:

- **Registration Requirement**: Remote and physical merchants must file **Form NJ-REG** (Business Registration Application) online via the Division of Revenue and Enterprise Services (DORES) at least 15 business days prior to initiating taxable commerce.
- **Filing Deadlines**: Sales tax returns (Form ST-50 for quarterly filers or ST-51 for monthly remitters) are due on or before the **20th day of the month** following the close of the reporting quarter (e.g. Q1 return due April 20).
- **Mandatory Electronic Filing**: All sales tax returns and payments must be transmitted electronically through Premier Business Services (PBS).
- **Statutory Late Filing Penalties**: Delinquent returns incur a late filing penalty of **5% per month** of the tax due (up to a maximum of 25%), plus a statutory late payment penalty of **5%** and monthly compounded interest at the prime rate plus 3%.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Retail Electronics Purchase in New Jersey ($400 Order)',
    scenario:
      'A consumer in Princeton, New Jersey purchases a $375.00 computer monitor with a $25.00 delivery fee ($400.00 total) from an online electronics retailer.',
    inputs: {
      hardwareSubtotal: '$375.00',
      shippingCharge: '$25.00',
      statewideSalesTaxRate: '6.625%',
    },
    steps: [
      {
        label: 'Taxable Goods Base',
        formula: '$375.00 (computer monitor)',
        amount: '$375.00',
        note: 'Electronics are taxable personal property',
      },
      {
        label: 'Taxable Shipping Charge',
        formula: '$25.00 delivery on taxable goods',
        amount: '$25.00',
        note: 'Shipping follows taxability of underlying item',
      },
      {
        label: 'Total Taxable Base Amount',
        formula: '$375.00 + $25.00',
        amount: '$400.00',
        note: 'Subject to 6.625% state tax',
      },
      {
        label: 'New Jersey Sales Tax (6.625%)',
        formula: '$400.00 × 6.625%',
        amount: '$26.50',
        note: 'State tax remitted to Division of Taxation',
      },
      {
        label: 'Total Invoiced Checkout Amount',
        formula: '$400.00 + $26.50',
        amount: '$426.50',
        note: 'Final customer payment',
      },
    ],
    takeaway:
      'On a $400.00 taxable electronics purchase delivered in New Jersey, the 6.625% tax equals exactly $26.50, bringing total checkout cost to $426.50.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Extracting Net Revenue from a $500.00 Gross Receipt in New Jersey',
    scenario:
      'A boutique hardware merchant in New Jersey accepts a flat $500.00 gross cash payment (tax included) for taxable power tools. How much represents actual sales revenue versus sales tax owed to the state?',
    inputs: {
      grossReceiptCollected: '$500.00',
      stateTaxRate: '6.625%',
    },
    steps: [
      {
        label: 'Net Revenue Extraction Formula',
        formula: '$500.00 ÷ (1 + 0.06625) = $500.00 ÷ 1.06625',
        amount: '$468.93',
        note: 'True retained retail revenue',
      },
      {
        label: 'New Jersey Sales Tax Owed',
        formula: '$500.00 - $468.93',
        amount: '$31.07',
        note: 'Must be remitted on Form ST-50',
      },
      {
        label: 'Verification Math',
        formula: '$468.93 × 6.625%',
        amount: '$31.07',
        note: 'Reconciles perfectly to $500.00 gross total',
      },
    ],
    takeaway:
      'From a $500.00 tax-inclusive receipt in New Jersey, the business retains $468.93 in net sales revenue and owes $31.07 in sales tax to the Division of Taxation.',
  },
  faqs: [
    {
      question: 'What is the exact New Jersey sales tax rate in 2026?',
      answer:
        'The statewide sales tax rate in New Jersey is exactly 6.625%. Unlike most US states, New Jersey does not have local city or county sales taxes, meaning the 6.625% rate applies uniformly across the entire state.',
      sourceUrl: 'https://www.nj.gov/treasury/taxation/ratechanges.shtml',
    },
    {
      question: 'Is clothing really completely tax-free in New Jersey?',
      answer:
        'Yes. Under N.J.S.A. 54:32B-8.4, all everyday clothing and footwear are 100% exempt from sales tax year-round with no price limit. Only luxury fur garments, costume items, and separate accessories (such as handbags or jewelry) are taxable.',
      sourceUrl: 'https://www.nj.gov/treasury/taxation/clothing.shtml',
    },
    {
      question: 'What are Urban Enterprise Zones (UEZs) in New Jersey?',
      answer:
        'Urban Enterprise Zones are designated economically distressed urban areas where certified retail stores can charge a reduced 3.3125% sales tax rate (50% of the state rate) on in-person retail sales to stimulate local commerce.',
      sourceUrl: 'https://www.nj.gov/treasury/taxation/uezoverview.shtml',
    },
    {
      question: 'Does New Jersey tax Software as a Service (SaaS)?',
      answer:
        'No. Under Technical Advisory Memorandum TAM-2011-05, SaaS is exempt from New Jersey sales tax because customers only access remotely hosted software over the internet without taking physical or downloaded possession of the software.',
      sourceUrl: 'https://www.nj.gov/treasury/taxation/pdf/pubs/tb/tb72.pdf',
    },
    {
      question: 'What triggers sales tax economic nexus in New Jersey for out-of-state sellers?',
      answer:
        'Out-of-state sellers establish economic nexus if they exceed $100,000 in gross revenue from deliveries into New Jersey or complete 200 or more separate transactions in the current or preceding calendar year.',
      sourceUrl: 'https://www.nj.gov/treasury/taxation/remotesellers.shtml',
    },
  ],
};

export default newJerseyContent;
