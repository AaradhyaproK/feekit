import type { PageContent } from '../types.ts';

export const delawareContent: PageContent = {
  "slug": "delaware",
  "family": "sales-tax",
  "title": "Delaware Sales Tax Calculator (0.00% Retail Tax) | FeeKit",
  "metaDescription": "Verify Delaware’s 0.00% consumer sales tax. Division of Revenue guide on Gross Receipts Tax (GRT), merchant licensing, and out-of-state business nexus.",
  "h1": "Delaware Sales Tax Guide & 0.00% Retail Tax Reference",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Delaware Division of Revenue",
    "url": "https://revenue.delaware.gov/",
    "citation": "30 Del. C. Part III, Chapter 21 (General Provisions Concerning Licenses) and Chapter 29 (Retail and Wholesale Merchants)."
  },
  "overview": "The State of Delaware does not impose a state or municipal retail sales tax on consumers. Shoppers purchasing tangible goods, clothing, electronics, groceries, and digital services in Delaware pay an effective 0.00% sales tax rate at checkout. Instead of assessing sales tax against purchasers, Delaware assesses a Gross Receipts Tax (GRT) under 30 Del. C. Chapter 21 directly against businesses for the legal privilege of conducting commercial activity in the First State. Retailers and wholesalers pay modest gross receipts tax rates (typically 0.0945% to 0.7468%) on gross sales exceeding monthly exclusions, with zero tax collected from consumers at the point of sale.",
  "sections": [
    {
      "id": "de-zero-consumer-sales-tax",
      "title": "Delaware’s 0.00% Consumer Sales Tax Across All Three Counties",
      "body": "Delaware provides total retail checkout exemption:\n\n- **Statewide Consumer Sales Tax**: **0.00%**. Consumers pay zero state sales tax on personal property, vehicles, appliances, furniture, or digital goods.\n- **Zero Local Option Retail Taxes**: Municipalities and counties (New Castle, Kent, and Sussex) do not possess legal authority to levy municipal sales taxes.\n- **National Shopping Magnet**: Known as the \"Home of Tax-Free Shopping,\" Delaware retail hubs (such as the Christiana Mall in Newark and coastal outlets in Rehoboth Beach) draw millions of interstate consumers annually from Pennsylvania (6%), Maryland (6%), and New Jersey (6.625%)."
    },
    {
      "id": "de-gross-receipts-tax-mechanics",
      "title": "Delaware Gross Receipts Tax (GRT): Business Privilege Excise Rates",
      "body": "While consumers pay zero sales tax, merchants operating in Delaware are subject to the Gross Receipts Tax (GRT):\n\n1. **Retail Merchants**: Taxed under 30 Del. C. § 2905 at **0.7468%** of aggregate gross receipts attributable to retail sales, with a monthly exclusion of **$100,000** (or $300,000 quarterly). A retailer with under $100,000 in monthly sales owes zero GRT.\n2. **Wholesale Merchants**: Taxed under 30 Del. C. § 2902 at **0.3983%** of gross receipts, with a monthly exclusion of $100,000.\n3. **Commercial Services & Contractors**: Professional services and contractors are subject to GRT rates ranging from 0.0945% to 0.3983%.\n4. **No Point-of-Sale Collection**: Delaware statutory law prohibits merchants from billing the Gross Receipts Tax as a separate point-of-sale sales tax charge to the consumer."
    },
    {
      "id": "de-saas-and-remote-sellers",
      "title": "Software, Digital Products, and Remote E-Commerce Sellers",
      "body": "Digital commerce rules under Delaware statutory tax policy:\n\n- **Software as a Service (SaaS)**: **0.00% Exempt at Checkout**. Remote software access, digital downloads, and cloud services incur zero sales tax in Delaware.\n- **Remote Sellers Delivering into Delaware**: Out-of-state remote sellers shipping goods or providing digital services to Delaware purchasers have zero sales tax collection duties.\n- **Business Licensing**: Any business maintaining physical nexus or conducting commercial transactions in Delaware must obtain a Delaware Business License via the Division of Revenue."
    },
    {
      "id": "de-compliance-and-filing-dor",
      "title": "Merchant Licensing, Filing Deadlines, and Division of Revenue Compliance",
      "body": "Administrative requirements administered by the Delaware Division of Revenue:\n\n- **Business License Application**: In-state businesses register online via the **Delaware Taxpayer Portal** and renew licenses annually.\n- **GRT Return Deadlines**: Gross receipts tax returns (Form 2001 for monthly filers or Form 2002 for quarterly filers) are due on or before the **20th day of the month** following the end of the reporting period.\n- **Statutory Penalties**: Late GRT filings incur a penalty of **5% per month** of the tax due (up to 50%), plus statutory interest accruing at 0.5% per month."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Electronics Purchase in Newark ($1,500 Order)",
    "scenario": "A consumer in Newark, Delaware purchases a $1,500.00 laptop computer and accessories at an electronics retail store.",
    "inputs": {
      "laptopPurchaseAmount": "$1,500.00",
      "consumerSalesTaxRate": "0.00%",
      "merchantMonthlyGrossReceipts": "$80,000.00"
    },
    "steps": [
      {
        "label": "Consumer Sales Tax (0.00%)",
        "formula": "$1,500.00 × 0.00%",
        "amount": "$0.00",
        "note": "Zero sales tax in Delaware"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "$1,500.00 + $0.00",
        "amount": "$1,500.00",
        "note": "Customer pays pure retail price"
      },
      {
        "label": "Merchant Monthly GRT Threshold",
        "formula": "$80,000.00 < $100,000 exclusion",
        "amount": "$0.00 GRT",
        "note": "Protected under $100k monthly exclusion"
      },
      {
        "label": "Merchant Retained Net Revenue",
        "formula": "$1,500.00 - $0.00",
        "amount": "$1,500.00",
        "note": "100% retained by merchant"
      }
    ],
    "takeaway": "In Delaware, the consumer pays zero sales tax at checkout, and a small retailer with under $100,000 in monthly sales owes zero Gross Receipts Tax to the state."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Business GRT Liability on $250,000 Monthly Retail Sales",
    "scenario": "A high-volume department store in Wilmington generates $250,000.00 in monthly retail sales. What is the merchant’s Gross Receipts Tax liability?",
    "inputs": {
      "monthlyGrossSales": "$250,000.00",
      "statutoryExclusion": "$100,000.00",
      "retailGRTRate": "0.7468%"
    },
    "steps": [
      {
        "label": "Statutory Monthly Exclusion",
        "formula": "Statutory deduction",
        "amount": "$100,000.00",
        "note": "Exempt from Delaware GRT"
      },
      {
        "label": "Taxable Gross Receipts Base",
        "formula": "$250,000.00 - $100,000.00",
        "amount": "$150,000.00",
        "note": "Subject to retail GRT"
      },
      {
        "label": "Merchant GRT Liability",
        "formula": "$150,000.00 × 0.7468%",
        "amount": "$1,120.20",
        "note": "Remitted by business on Form 2001"
      },
      {
        "label": "Consumer Sales Tax Collected",
        "formula": "$250,000.00 × 0.00%",
        "amount": "$0.00",
        "note": "Consumers charged $0 tax at checkout"
      }
    ],
    "takeaway": "While consumers paid $0 sales tax, the Wilmington retailer remits $1,120.20 in business Gross Receipts Tax on the $150,000 taxable portion of gross revenue."
  },
  "faqs": [
    {
      "question": "Does Delaware have a sales tax?",
      "answer": "No. Delaware has no state or local retail sales tax. Consumers pay 0% sales tax on tangible goods, apparel, electronics, groceries, and digital services.",
      "sourceUrl": "https://revenue.delaware.gov/"
    },
    {
      "question": "What is the Delaware Gross Receipts Tax (GRT)?",
      "answer": "The Gross Receipts Tax is an excise tax levied directly upon businesses for the privilege of conducting business in Delaware. Retailers pay 0.7468% on gross receipts exceeding $100,000 per month.",
      "sourceUrl": "https://revenue.delaware.gov/"
    },
    {
      "question": "Can retailers charge Delaware sales tax to customers?",
      "answer": "No. Delaware law does not permit retailers to add sales tax to consumer receipts. The Gross Receipts Tax is a cost of business paid directly by the enterprise.",
      "sourceUrl": "https://revenue.delaware.gov/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Delaware?",
      "answer": "No. Software subscriptions and digital downloads incur 0% consumer sales tax in Delaware.",
      "sourceUrl": "https://revenue.delaware.gov/"
    },
    {
      "question": "Do remote sellers shipping to Delaware collect sales tax?",
      "answer": "No. Because sales tax is sourced to the delivery destination, all orders shipped to Delaware are subject to 0% sales tax.",
      "sourceUrl": "https://revenue.delaware.gov/"
    }
  ]
};

export default delawareContent;
