import type { PageContent } from '../types.ts';

export const northCarolinaContent: PageContent = {
  slug: 'north-carolina',
  family: 'sales-tax',
  title: 'North Carolina Sales Tax Calculator (4.75% to 7.50%) | FeeKit',
  metaDescription:
    'Calculate North Carolina sales and use tax with verified NCDOR rates (4.75% base, max 7.50%). Details Charlotte/Raleigh 7.25%, 2% flat grocery tax, taxable SaaS, and $100k/200 tx nexus.',
  h1: 'North Carolina Sales Tax Calculator & Department of Revenue Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'North Carolina Department of Revenue',
    url: 'https://www.ncdor.gov/taxes-forms/sales-and-use-tax',
    citation: 'N.C. Gen. Stat. §§ 105-164.4, 105-164.13B (Food Exemption & 2% Local Rate), 105-164.4(a)(8) (Digital Property), and 105-164.8(b).',
  },
  overview:
    'The State of North Carolina imposes a statutory base sales and use tax rate of 4.75% under N.C. Gen. Stat. § 105-164.4. Local county governments levy statutory local option taxes ranging from 2.00% to 2.75%, resulting in composite sales tax rates between 6.75% and 7.50% statewide, with Charlotte and Raleigh levying 7.25% and Durham and Orange counties reaching 7.50%. North Carolina features a standardized 2.00% uniform statewide rate on unprepared groceries, classifies digital property and cloud SaaS as fully taxable retail transactions, and enforces destination sourcing under a $100,000 or 200 transaction economic nexus standard.',
  sections: [
    {
      id: 'statutory-rates-local-examples-north-carolina',
      title: 'North Carolina Base Rate, County Transit Levies, and Local Benchmarks',
      body: `The state rate of 4.75% is augmented by county general taxes and dedicated transit levies:

1. **Charlotte (Mecklenburg County)**: **7.25% combined rate**. Consists of 4.75% State tax, 2.00% Mecklenburg County local tax, and 0.50% dedicated public transit sales tax.
2. **Raleigh (Wake County)**: **7.25% combined rate**. Combines 4.75% State tax, 2.00% Wake County local tax, and 0.50% dedicated regional transit tax.
3. **Durham / Chapel Hill (Durham & Orange Counties)**: **7.50% combined rate**. Combines 4.75% State tax, 2.25% county general tax, and 0.50% dedicated transit tax, representing the highest combined sales tax rate in North Carolina.
4. **Wilmington (New Hanover County)**: **7.00% combined rate**. Composed of 4.75% State tax and 2.25% New Hanover County local option tax.`,
    },
    {
      id: 'food-flat-local-rate-saas-north-carolina',
      title: 'The 2.00% Uniform Grocery Tax, Taxable SaaS, and Digital Goods',
      body: `North Carolina tax statutes establish clear standards for consumer food, cloud software, and digital products:

- **Unprepared Groceries & Food**: **Exempt from State Tax, Uniform 2.00% Local Tax**. Under N.C. Gen. Stat. § 105-164.13B, qualifying food and food ingredients for home consumption are completely exempt from the 4.75% state sales tax. However, North Carolina subjects qualifying food to a uniform **2.00% local county sales tax** statewide, regardless of whether the county’s general rate is 6.75%, 7.00%, or 7.50%. Prepared hot meals, restaurant food, and soft drinks are fully taxable at standard rates.
- **Software as a Service (SaaS) & Digital Property**: **Fully Taxable**. Under N.C. Gen. Stat. § 105-164.4(a)(8) and § 105-164.3, sales tax applies to "digital property" delivered electronically and prewritten software accessed remotely via cloud SaaS or ASP arrangements. Subscription fees for cloud software delivered to North Carolina users are taxable at the full destination combined rate.
- **Clothing and Apparel**: **Fully Taxable**. Wearing apparel and footwear are subject to full statewide and county sales tax year-round. North Carolina does not hold annual sales tax holidays.
- **Freight and Delivery Fees**: **Taxable with Taxable Goods**. Under N.C. Gen. Stat. § 105-164.3, delivery charges billed by the seller are included in the taxable sales price if the goods delivered are subject to sales tax.`,
    },
    {
      id: 'economic-nexus-and-remote-seller-thresholds-north-carolina',
      title: 'North Carolina Economic Nexus: The $100,000 or 200 Transactions Standard',
      body: `Under N.C. Gen. Stat. § 105-164.8(b), remote sellers shipping into North Carolina must comply with statutory nexus rules:

- **Dual Nexus Threshold**: An out-of-state remote vendor establishes economic nexus if, during the previous or current calendar year:
  1. Gross sales of tangible personal property, digital property, or taxable services delivered into North Carolina exceed **$100,000**, **OR**
  2. The vendor conducts **200 or more separate transactions** delivered into North Carolina.
- **Marketplace Facilitator Law**: Under N.C. Gen. Stat. § 105-164.4J, registered marketplace facilitators (Amazon, Walmart, eBay, Etsy) must collect and remit North Carolina sales tax on behalf of third-party marketplace sellers. Third-party marketplace sales count toward the remote vendor’s $100,000 / 200 transaction threshold.`,
    },
    {
      id: 'destination-sourcing-and-filing-due-dates-north-carolina',
      title: 'Destination Sourcing, NCDOR Registration, and Return Due Dates',
      body: `Administrative requirements enforced by the North Carolina Department of Revenue (NCDOR):

- **Destination-Based Sourcing**: Under N.C. Gen. Stat. § 105-164.4B, sales tax is sourced to the physical delivery address where the purchaser receives the property or digital service.
- **Business Registration**: Retailers register online through the NCDOR eServices portal to receive a Sales and Use Tax Certificate of Registration (Form NC-BR).
- **Return Due Dates (Form E-500)**: Monthly sales and use tax returns are due on or before the **20th day of the month** following the reporting period (e.g., January tax is due February 20). Quarterly filers submit returns by the last day of the month following the calendar quarter (April 30, July 31, October 31, January 31).`,
    },
  ],
  workedExample: {
    title: 'Worked Example: B2B Cloud Software Subscription Delivered to Charlotte Office',
    scenario:
      'A software vendor licenses cloud enterprise software for $1,200.00/month to a corporate client in Charlotte (Mecklenburg County). In North Carolina, SaaS is classified as taxable digital property under N.C. Gen. Stat. § 105-164.4(a)(8).',
    inputs: {
      monthlyLicenseFee: '$1,200.00',
      destinationLocation: 'Charlotte, NC (Mecklenburg County)',
      stateBaseRate: '4.75%',
      mecklenburgLocalRate: '2.50% (2.00% County + 0.50% Transit)',
      combinedSalesTaxRate: '7.25%',
    },
    steps: [
      {
        label: 'Compute North Carolina State Sales Tax (4.75%)',
        formula: '$1,200.00 × 0.0475',
        amount: '$57.00',
        note: 'N.C. Gen. Stat. § 105-164.4 statutory state portion.',
      },
      {
        label: 'Compute Mecklenburg County & Transit Tax (2.50%)',
        formula: '$1,200.00 × 0.0250',
        amount: '$30.00',
        note: 'County general and dedicated transit tax.',
      },
      {
        label: 'Total Sales Tax Due to NCDOR',
        formula: '$57.00 + $30.00 (or $1,200.00 × 0.0725)',
        amount: '$87.00',
        note: 'Exact statutory tax due.',
      },
      {
        label: 'Gross Invoiced Amount Charged to Client',
        formula: '$1,200.00 + $87.00',
        amount: '$1,287.00',
        note: 'Client pays $1,287.00; vendor remits $87.00 on Form E-500.',
      },
    ],
    takeaway:
      'Because North Carolina classifies SaaS as taxable digital property, the full combined Charlotte rate of 7.25% applies, generating $87.00 in sales tax on the $1,200.00 monthly subscription.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Extracting Sales Tax from Gross Receipts ($100.00 Total)',
    scenario:
      'A retail merchant in Raleigh (Wake County) collects a flat $100.00 payment inclusive of all applicable North Carolina sales taxes. The combined Wake County tax rate is 7.25%.',
    inputs: {
      grossTotalReceived: '$100.00',
      jurisdiction: 'Raleigh, NC (Wake County)',
      combinedTaxRate: '7.25%',
    },
    steps: [
      {
        label: 'Determine Pre-Tax Net Revenue',
        formula: 'Gross Total ÷ (1 + 0.0725)',
        amount: '$93.24',
        note: '$100.00 ÷ 1.0725 = $93.2399, rounded to $93.24.',
      },
      {
        label: 'Extract Embedded Sales Tax Liability',
        formula: 'Gross Total − Pre-Tax Net Revenue ($100.00 − $93.24)',
        amount: '$6.76',
        note: 'Tax liability owed to North Carolina Department of Revenue.',
      },
    ],
    takeaway:
      'Using the statutory extraction formula Net = Gross ÷ (1 + r), a $100.00 tax-inclusive transaction in Raleigh yields $93.24 in net revenue and $6.76 in sales tax.',
  },
  faqs: [
    {
      question: 'How are groceries taxed under North Carolina law?',
      answer:
        'Under N.C. Gen. Stat. § 105-164.13B, qualifying unprepared food and food ingredients for home consumption are exempt from the 4.75% state sales tax. However, North Carolina subjects groceries to a uniform 2.00% local county sales tax statewide. Prepared hot food, heated deli items, and soft drinks are fully taxable at standard rates (e.g., 7.25% in Charlotte).',
    },
    {
      question: 'Is Software as a Service (SaaS) taxable in North Carolina?',
      answer:
        'Yes. North Carolina classifies cloud-hosted software and SaaS accessed remotely as taxable digital property under N.C. Gen. Stat. § 105-164.4(a)(8). Vendors must collect sales tax based on the delivery or user address in North Carolina.',
    },
    {
      question: 'What is the maximum sales tax rate in North Carolina?',
      answer:
        'The highest combined sales tax rate in North Carolina is 7.50%, which applies in Durham and Orange counties. It consists of the 4.75% state tax, 2.25% county general tax, and a 0.50% dedicated regional transit tax.',
    },
    {
      question: 'What are the economic nexus thresholds for remote sellers shipping into North Carolina?',
      answer:
        'A remote seller establishes economic nexus in North Carolina under N.C. Gen. Stat. § 105-164.8(b) if gross sales delivered into the state exceed $100,000 OR if the vendor conducts 200 or more separate transactions delivered into North Carolina during the previous or current calendar year.',
    },
    {
      question: 'When are monthly sales tax returns due to the North Carolina Department of Revenue?',
      answer:
        'Monthly sales and use tax returns (Form E-500) are due on or before the 20th day of the month following the close of the reporting period via the NCDOR eServices portal.',
    },
  ],
};

export default northCarolinaContent;

