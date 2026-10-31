import type { PageContent } from '../types.ts';

export const marylandContent: PageContent = {
  "slug": "maryland",
  "family": "sales-tax",
  "title": "Maryland Sales Tax Calculator (6.00% Flat Rate) | FeeKit",
  "metaDescription": "Calculate Maryland sales and use tax with Comptroller rates (6.0% flat statewide). 2021 Digital Products Act (taxable SaaS), 9% alcohol tax, and $100k nexus.",
  "h1": "Maryland Sales Tax Calculator & Comptroller of Maryland Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Comptroller of Maryland",
    "url": "https://www.marylandtaxes.gov/business/sales-use/",
    "citation": "Md. Code Ann., Tax-Gen. Title 11 (Sales and Use Tax) and 2021 Digital Products Act (House Bill 932)."
  },
  "overview": "The State of Maryland levies a uniform statewide sales and use tax rate of 6.00% under Md. Code Ann., Tax-Gen. § 11-102. Under Maryland statutory law, county governments and municipalities are prohibited from assessing general local option retail sales taxes, ensuring a standardized 6.00% checkout rate across all 23 counties and Baltimore City. However, Maryland enforces specialized tax rates on specific goods: alcoholic beverages are taxed at a statutory 9.00% rate. Furthermore, under the landmark 2021 Digital Products Act, Maryland became one of the first states to enact broad taxation on digital goods, SaaS, and electronically accessed software.",
  "sections": [
    {
      "id": "md-rate-structure-alcohol-surtax",
      "title": "Uniform 6.00% Statewide Rate and the 9.00% Alcoholic Beverage Surtax",
      "body": "Maryland’s sales tax code provides geographic uniformity with product-specific rate tiers:\n\n- **Standard Statewide Baseline**: **6.00%**. Applies to all retail sales of tangible personal property, specified digital products, and taxable customer services.\n- **Zero Local Option Retail Taxes**: Local jurisdictions cannot levy municipal or county sales taxes on retail goods. The rate in Baltimore City, Bethesda (Montgomery County), Annapolis, and Frederick is identical at 6.00%.\n- **Alcoholic Beverage Tax (9.00%)**: Under Md. Code Ann., Tax-Gen. § 11-104(g), sales of alcoholic beverages (beer, wine, liquor) for on-premises or off-premises consumption are taxed at a statutory rate of **9.00%** (a 3.00% surtax above the general rate)."
    },
    {
      "id": "md-digital-products-act-saas",
      "title": "The 2021 Digital Products Act: Comprehensive Taxation of SaaS and Digital Goods",
      "body": "Maryland maintains one of the most comprehensive digital tax regimes in the United States:\n\n1. **Software as a Service (SaaS) & Cloud Applications**: **Fully Taxable (6.00%)**. Enacted under House Bill 932 (effective March 2021), Maryland expanded sales tax to include digital products and digital codes. Under Md. Code Ann., Tax-Gen. § 11-101(c-4), SaaS, cloud computing access, remote software subscriptions, and digital media are treated as taxable digital products.\n2. **Everyday Clothing and Footwear**: **Fully Taxable (6.00%)**. Clothing is taxable year-round in Maryland, except during the annual \"Shop Maryland Tax-Free Week\" in August.\n3. **Groceries & Food Staples**: **100% Exempt**. Unprepared food products sold by grocery stores for human consumption are exempt under Md. Code Ann., Tax-Gen. § 11-206. Prepared food and restaurant dining are taxable at 6.00%.\n4. **Delivery and Shipping Surcharges**: Under COMAR 03.06.01.26, separately stated transportation or delivery charges are non-taxable if delivery occurs directly by common carrier or postal service. Combined handling charges remain taxable."
    },
    {
      "id": "md-economic-nexus-and-sourcing",
      "title": "Maryland Remote Seller Economic Nexus ($100,000 / 200 Transactions) and Sourcing",
      "body": "Following post-Wayfair administrative rules codified in COMAR 03.06.01.33:\n\n- **Economic Nexus Standard**: A remote out-of-state vendor establishes economic nexus in Maryland upon exceeding:\n  - **$100,000 in gross revenue** from retail sales delivered into Maryland; **OR**\n  - **200 or more separate transactions** delivered into the state during the current or preceding calendar year.\n- **Destination Sourcing**: Maryland enforces destination sourcing rules for all delivered goods. Remote sellers collect Maryland’s uniform 6.00% sales tax on all taxable shipments into the state.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, etc.) are legally mandated to collect and remit Maryland sales tax on all sales made through their platforms, shielding third-party sellers from direct filing obligations."
    },
    {
      "id": "md-filing-compliance-and-penalties",
      "title": "Maryland Tax Connect Portal, 20th-of-the-Month Deadlines, and Tax-Free Week",
      "body": "Tax administration requirements enforced by the Comptroller of Maryland:\n\n- **Maryland Tax Connect Portal**: Remote and in-state merchants register for a Sales and Use Tax License electronically through **Maryland Tax Connect**.\n- **Filing Deadlines**: Sales tax returns (Form 202) are due on or before the **20th day of the month** following the close of the reporting period for monthly remitters.\n- **Timely Filing Vendor Credit**: Under Md. Code Ann., Tax-Gen. § 11-105, vendors who file and pay returns on time may deduct an expense credit of **1.2% of the first $6,000** of tax collected, and **0.9% of the excess**, capped at $500 per return.\n- **Shop Maryland Tax-Free Week**: Maryland hosts an annual **7-day sales tax holiday during the second week of August**, exempting qualifying clothing and footwear priced at **$100 or less per item** from sales tax.\n- **Delinquency Penalties**: Late returns incur a penalty of **10% of the unpaid tax**, plus statutory interest at 1% per month."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B SaaS Cloud Subscription in Baltimore (6.00% Rate)",
    "scenario": "A cybersecurity firm in Baltimore, Maryland purchases a $1,000.00 monthly cloud analytics software subscription.",
    "inputs": {
      "saasSubscriptionSubtotal": "$1,000.00",
      "marylandTaxRate": "6.00% (2021 Digital Products Act)"
    },
    "steps": [
      {
        "label": "Taxable SaaS Base",
        "formula": "$1,000.00 software subscription",
        "amount": "$1,000.00",
        "note": "Taxable under Md. Code Ann., Tax-Gen. § 11-101"
      },
      {
        "label": "Maryland Sales Tax (6.00%)",
        "formula": "$1,000.00 × 6.00%",
        "amount": "$60.00",
        "note": "State sales tax on digital products"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$1,000.00 + $60.00",
        "amount": "$1,060.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under Maryland’s Digital Products Act, cloud software subscriptions are fully taxable at 6.00%, adding $60.00 to a $1,000 monthly invoice."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500.00 Retail Receipt in Maryland",
    "scenario": "A retail store in Bethesda collects a flat $500.00 tax-inclusive payment for taxable merchandise. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "marylandRate": "6.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.06)",
        "amount": "$471.70",
        "note": "True retail revenue retained"
      },
      {
        "label": "Maryland Sales Tax Owed",
        "formula": "$500.00 - $471.70",
        "amount": "$28.30",
        "note": "Remitted via Maryland Tax Connect"
      },
      {
        "label": "Verification Calculation",
        "formula": "$471.70 × 6.00%",
        "amount": "$28.30",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in Maryland, the retailer retains $471.70 net revenue and owes $28.30 in sales tax to the Comptroller."
  },
  "faqs": [
    {
      "question": "What is the sales tax rate in Maryland for 2026?",
      "answer": "The sales tax rate in Maryland is a flat 6.00% statewide for general retail merchandise. Counties and cities do not levy local option retail sales taxes.",
      "sourceUrl": "https://www.marylandtaxes.gov/business/sales-use/"
    },
    {
      "question": "Does Maryland tax Software as a Service (SaaS)?",
      "answer": "Yes. Under the 2021 Digital Products Act (House Bill 932), Maryland taxes SaaS, cloud software, digital downloads, and electronic data services at the standard 6.00% rate.",
      "sourceUrl": "https://www.marylandtaxes.gov/business/sales-use/digital-products.php"
    },
    {
      "question": "What is Maryland’s sales tax on alcoholic beverages?",
      "answer": "Maryland imposes a specialized 9.00% sales and use tax rate on retail sales of alcoholic beverages (beer, wine, liquor) for both on-premises and off-premises consumption.",
      "sourceUrl": "https://www.marylandtaxes.gov/business/alcohol/"
    },
    {
      "question": "What is the economic nexus threshold in Maryland?",
      "answer": "Out-of-state remote sellers establish economic nexus in Maryland when retail sales delivered into the state exceed $100,000 in gross revenue or 200 separate transactions in the current or preceding year.",
      "sourceUrl": "https://www.marylandtaxes.gov/business/sales-use/remote-sellers.php"
    },
    {
      "question": "When does Maryland hold Shop Maryland Tax-Free Week?",
      "answer": "Shop Maryland Tax-Free Week takes place annually during the second week of August, exempting qualifying clothing and footwear priced at $100 or less per item from sales tax.",
      "sourceUrl": "https://www.marylandtaxes.gov/tax-free-week/"
    }
  ]
};

export default marylandContent;
