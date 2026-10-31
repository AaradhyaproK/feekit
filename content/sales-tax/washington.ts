import type { PageContent } from '../types.ts';

export const washingtonContent: PageContent = {
  slug: 'washington',
  family: 'sales-tax',
  title: 'Washington Sales Tax Calculator (6.50% to 10.60%) | FeeKit',
  metaDescription:
    'Calculate Washington retail sales tax with verified WADOR rates (6.50% base, max 10.60%). Covers Seattle 10.35%, RTA transit taxes, taxable SaaS, and $100k economic nexus.',
  h1: 'Washington Sales Tax Calculator & Department of Revenue Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Washington State Department of Revenue',
    url: 'https://dor.wa.gov/taxes-rates/retail-sales-tax',
    citation: 'Wash. Rev. Code (RCW) §§ 82.08.020, 82.04.192 (Digital Products Act), 82.14 (Local Sales Taxes), and 82.08.052.',
  },
  overview:
    'Washington State levies a statutory baseline retail sales tax of 6.50% under RCW 82.08.020. Local municipal, county, and Regional Transit Authority (RTA) levies bring combined sales tax rates between 8.50% and 10.60% across the Puget Sound corridor, with Seattle reaching 10.35%. Uniquely, businesses operating in Washington must account for both retail sales tax (collected from consumers) and the Washington Business and Occupation (B&O) gross receipts tax (paid directly by the entity). Remote merchants face destination-based sourcing and a $100,000 economic nexus threshold.',
  sections: [
    {
      id: 'statutory-rates-local-examples-washington',
      title: 'Washington Base Rate, RTA District Surtaxes, and Benchmarks',
      body: `The state rate of 6.50% serves as the baseline, with local jurisdictions and transit authorities levying significant add-on rates:

1. **Seattle (King County)**: **10.35% combined rate**. Consists of 6.50% State tax, 1.00% City/County basic local tax, 1.40% Sound Transit Regional Transit Authority (RTA) tax, and 1.45% in dedicated county transit, criminal justice, and housing levies.
2. **Tacoma (Pierce County)**: **10.40% combined rate**. Combines 6.50% state base, local municipal levies, and Sound Transit RTA district taxes.
3. **Spokane (Spokane County)**: **9.10% combined rate**. Combines 6.50% State tax with 2.60% Spokane City and Spokane Transit Authority (STA) local levies (outside the Puget Sound RTA boundary).
4. **Vancouver (Clark County)**: **8.70% combined rate**. Composed of 6.50% State tax and 2.20% Clark County and C-TRAN public transportation sales taxes.`,
    },
    {
      id: 'digital-products-saas-bo-tax-washington',
      title: 'Digital Products Act, SaaS Taxability, Groceries, and B&O Tax',
      body: `Washington enforces distinct tax treatment on digital property, software, and gross receipts:

- **Software as a Service (SaaS) & Digital Products**: **Fully Taxable**. Under the Washington Digital Products Act (RCW 82.04.192 and RCW 82.08.02087), digital automated services, remotely accessed SaaS, downloaded software, and streaming digital media are classified as retail sales. Vendors must collect the full destination retail sales tax on SaaS subscriptions.
- **Dual Tax Structure: Retail Sales Tax vs. B&O Tax**: Unlike states with corporate income taxes, Washington levies a gross receipts Business and Occupation (B&O) tax under RCW Chapter 82.04. When a business makes a retail sale in Washington, it collects retail sales tax from the customer (e.g., 10.35% in Seattle) and simultaneously owes the state Retailing B&O tax (statutory rate of 0.471%) on its gross receipts.
- **Unprepared Groceries & Food**: **Exempt**. Basic grocery foods and ingredients are exempt from sales tax under RCW 82.08.0293. Prepared hot food, restaurant meals, dietary supplements, and soft drinks are fully taxable.
- **Clothing and Apparel**: **Fully Taxable**. Apparel and footwear are subject to full retail sales tax year-round. Washington does not hold sales tax holidays for clothing.
- **Freight and Delivery Charges**: **Taxable with Taxable Goods**. Under RCW 82.08.010, shipping and handling charges billed by the seller are included in the taxable measure if the underlying merchandise is taxable.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-washington',
      title: 'Washington Economic Nexus: The $100,000 Cumulative Sales Standard',
      body: `Remote sellers and out-of-state e-commerce merchants are subject to Washington economic nexus rules under RCW 82.08.052:

- **$100,000 Gross Retail Sales Standard**: A remote vendor establishes economic nexus if cumulative gross retail sales delivered into Washington exceed **$100,000** in the current or immediately preceding calendar year.
- **No Transaction Count Test**: Washington eliminated its previous 200-transaction count threshold in 2020. Nexus is determined solely by the $100,000 revenue volume.
- **Marketplace Facilitator Provisions**: Under RCW 82.08.0531, marketplace facilitators (Amazon, eBay, Etsy, Walmart) must collect and remit retail sales tax on behalf of marketplace sellers. Sales made through registered marketplaces count toward the seller's $100,000 economic nexus threshold.`,
    },
    {
      id: 'destination-sourcing-and-filing-due-dates-washington',
      title: 'Destination Sourcing, DOR Registration, and Return Deadlines',
      body: `Administrative requirements enforced by the Washington Department of Revenue (WADOR):

- **Destination-Based Sourcing**: Washington operates under destination sourcing rules codified in RCW 82.32.730. Tax is calculated based on the delivery location where the buyer receives the tangible personal property or digital service.
- **Registration (Unified Business Identifier / UBI)**: Businesses registering to collect retail sales tax apply online via My DOR and receive a 9-digit Unified Business Identifier (UBI) number and tax registration endorsement.
- **Return Due Dates**: Monthly filers must submit their combined excise tax returns by the **25th day of the month** following the reporting period (e.g., January tax is due February 25). Quarterly filers submit returns by the end of the month following the close of the calendar quarter (April 30, July 31, October 31, January 31). Annual filers submit returns by April 15.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Cloud Software Subscription Delivered to Seattle Office',
    scenario:
      'A software company delivers a $1,500.00/month cloud analytics platform to a client headquartered in downtown Seattle, Washington. In Washington, SaaS is treated as a taxable retail digital automated service.',
    inputs: {
      monthlySaaSLicense: '$1,500.00',
      deliveryLocation: 'Downtown Seattle, WA (King County)',
      stateBaseRate: '6.50%',
      seattleLocalRate: '3.85% (Includes 1.40% Sound Transit RTA)',
      combinedSalesTaxRate: '10.35%',
    },
    steps: [
      {
        label: 'Compute Washington State Sales Tax (6.50%)',
        formula: '$1,500.00 × 0.0650',
        amount: '$97.50',
        note: 'RCW 82.08.020 state baseline levy.',
      },
      {
        label: 'Compute Seattle & King County Local Tax (2.45%)',
        formula: '$1,500.00 × 0.0245',
        amount: '$36.75',
        note: 'Local municipal, transit, and criminal justice measures.',
      },
      {
        label: 'Compute Sound Transit RTA Surtax (1.40%)',
        formula: '$1,500.00 × 0.0140',
        amount: '$21.00',
        note: 'Regional Transit Authority dedicated rail/bus levy.',
      },
      {
        label: 'Total Retail Sales Tax Collected',
        formula: '$97.50 + $36.75 + $21.00 (or $1,500.00 × 0.1035)',
        amount: '$155.25',
        note: 'Total sales tax collected from client.',
      },
      {
        label: 'Gross Invoiced Amount Charged to Client',
        formula: '$1,500.00 + $155.25',
        amount: '$1,655.25',
        note: 'Customer pays $1,655.25; vendor remits $155.25 to WADOR.',
      },
    ],
    takeaway:
      'Under the Washington Digital Products Act, cloud software is fully taxable. In Seattle, the combined 10.35% rate applies. Additionally, the software vendor reports the $1,500.00 gross revenue under Washington Retailing B&O tax (0.471%, or $7.07), remitted out of company overhead.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A specialty coffee or retail merchant in Seattle collects a round $100.00 payment inclusive of all applicable Washington sales taxes. The Seattle combined sales tax rate is 10.35%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Seattle, WA (King County)',
      combinedTaxRate: '10.35%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.1035)',
        amount: '$90.62',
        note: '$100.00 ÷ 1.1035 = $90.6207, rounded to $90.62.',
      },
      {
        label: 'Extract Embedded Retail Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $90.62)',
        amount: '$9.38',
        note: 'Statutory sales tax due to Washington Department of Revenue.',
      },
    ],
    takeaway:
      'Applying the statutory extraction formula Net = Gross ÷ (1 + r), a $100.00 tax-inclusive receipt in Seattle yields $90.62 in merchant gross income and $9.38 in retail sales tax.',
  },
  faqs: [
    {
      question: 'Is Software as a Service (SaaS) taxable in Washington State?',
      answer:
        'Yes. Under the Washington Digital Products Act (RCW 82.04.192), SaaS, cloud-based applications, and digital automated services are classified as retail sales. Vendors must collect retail sales tax based on the customer’s delivery address and pay the state Retailing B&O tax on gross receipts.',
    },
    {
      question: 'What is the difference between Washington Retail Sales Tax and the B&O Tax?',
      answer:
        'Retail sales tax is a trust-fund consumption tax collected from the end customer and remitted to the state. The Business and Occupation (B&O) tax is a gross receipts tax levied directly on the business itself. When making retail sales, a business must collect the appropriate retail sales tax (e.g., 10.35% in Seattle) and separately pay Retailing B&O tax (typically 0.471%) on the gross sale amount.',
    },
    {
      question: 'What is the Sound Transit RTA sales tax in Washington?',
      answer:
        'The Regional Transit Authority (RTA) tax is an additional 1.40% sales tax levied in designated urban areas of King, Pierce, and Snohomish counties to fund Sound Transit light rail, commuter rail, and express bus systems. It applies to all retail sales delivered within the transit boundary.',
    },
    {
      question: 'What is the economic nexus threshold for remote sellers shipping into Washington?',
      answer:
        'An out-of-state remote seller establishes economic nexus in Washington when cumulative gross retail sales delivered into the state exceed $100,000 in the current or preceding calendar year. Washington eliminated its 200-transaction count threshold.',
    },
    {
      question: 'When are monthly excise tax returns due to the Washington Department of Revenue?',
      answer:
        'Monthly combined excise tax returns in Washington are due on the 25th day of the month following the close of the reporting period. If the 25th falls on a weekend or legal holiday, the return is due on the next business day.',
    },
  ],
};

export default washingtonContent;

