import type { PageContent } from '../types.ts';

export const missouriContent: PageContent = {
  "slug": "missouri",
  "family": "sales-tax",
  "title": "Missouri Sales Tax Calculator (4.225% to 10.35%) | FeeKit",
  "metaDescription": "Calculate Missouri sales tax with Department of Revenue rates (4.225% state, max 10.35%). Complex local taxing districts, Letter Ruling LR 7943 SaaS exemption, and $100k nexus.",
  "h1": "Missouri Sales Tax Calculator & Department of Revenue Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Missouri Department of Revenue",
    "url": "https://dor.mo.gov/taxation/business/tax-types/sales-use/",
    "citation": "Mo. Rev. Stat. Chapter 144 (Sales and Use Tax) and Missouri Department of Revenue Letter Ruling LR 7943."
  },
  "overview": "The State of Missouri imposes a statutory base sales tax rate of 4.225% under Mo. Rev. Stat. § 144.020. However, Missouri possesses one of the most complex local taxing district environments in the country: overlapping county taxes, municipal levies, transportation development districts (TDDs), community improvement districts (CIDs), and ambulance districts push combined rates between 8.00% and 10.35% across major metropolitan areas (including Kansas City, St. Louis, and Springfield). Out-of-state remote sellers establish economic nexus under Missouri’s Wayfair legislation (effective 2023) upon reaching $100,000 in annual Missouri sales.",
  "sections": [
    {
      "id": "mo-rates-and-overlapping-districts",
      "title": "Missouri Base Rate (4.225%) and Complex Overlapping Special Districts (TDD/CID)",
      "body": "Missouri’s 4.225% state rate is split into dedicated statutory funds (3.00% General Revenue, 1.00% School District Trust Fund, 0.125% Conservation Commission Fund, and 0.10% Parks and Soils Fund). On top of the state base, localized surtaxes create significant rate variation:\n\n- **Kansas City (Jackson County)**: **9.085% to 9.85%**. Combines 4.225% state + Jackson County + Kansas City municipal tax + transit/public safety levies.\n- **St. Louis City**: **9.679% to 10.35%**. St. Louis operates as an independent city, layering municipal, police, transit, and zoo-museum district taxes.\n- **Springfield (Greene County)**: **8.10% combined rate**. Combines 4.225% state + 1.25% Greene County + 2.625% City of Springfield sales taxes.\n- **Special Taxing Districts (CIDs and TDDs)**: Across commercial shopping centers, property owners establish Community Improvement Districts (CIDs) and Transportation Development Districts (TDDs) that add an additional 0.50% to 1.00% sales tax, resulting in total rates exceeding 10.00% within specific commercial plazas."
    },
    {
      "id": "mo-saas-exemption-and-shipping-rules",
      "title": "Taxability Framework: Non-Taxable SaaS, Groceries (1.225%), and Title-Passing Shipping",
      "body": "Statutory product taxability under the Missouri Sales Tax Law:\n\n1. **Software as a Service (SaaS)**: **100% Exempt Statewide**. Under Missouri Department of Revenue Letter Ruling LR 7943 and Letter Ruling LR 8177, remotely hosted cloud software is classified as a non-taxable service. Because customers access software over the internet without receiving tangible storage media or downloading executable software, SaaS is exempt.\n2. **Food for Home Consumption (Groceries)**: **Taxed at Reduced 1.225% State Rate + Full Local Taxes**. Basic grocery staples are exempt from the 3.00% state general revenue tax, paying only the remaining 1.225% state rate plus local county/city sales taxes. Prepared food and dining remain subject to full rates.\n3. **Clothing and Apparel**: **Fully Taxable**. Everyday clothing is subject to combined state and local rates year-round (except during the annual August 3-day sales tax holiday).\n4. **Freight and Delivery Charges**: Under Mo. Code Regs. tit. 12, § 10-103.600, shipping charges are exempt from Missouri sales tax if the charge is separately stated on the invoice and the parties intended title to the merchandise to pass to the buyer before delivery."
    },
    {
      "id": "mo-economic-nexus-and-sourcing",
      "title": "Missouri Remote Seller Nexus ($100,000) & Sourcing Regulations",
      "body": "Following Senate Bills 153 & 97 (effective January 1, 2023), Missouri enacted comprehensive remote seller rules:\n\n- **Economic Nexus Standard**: A remote out-of-state seller establishes economic nexus if gross retail sales delivered into Missouri exceed **$100,000** in the current or prior calendar year. (Missouri does not enforce a transaction count threshold).\n- **Destination Sourcing for Remote Sellers**: Remote merchants with economic nexus collect Vendor's Use Tax based on the **delivery destination** of the Missouri purchaser.\n- **In-State Sellers (Origin Sourcing)**: In-state Missouri merchants selling to in-state customers generally source sales to the **origin location** of their retail establishment.\n- **Marketplace Facilitator Law**: Facilitators (such as Amazon and Walmart) collect and remit Missouri sales and use tax on all facilitated third-party sales, relieving independent sellers of tax collection duties on marketplace orders."
    },
    {
      "id": "mo-filing-compliance-and-penalties",
      "title": "MyTax Missouri Portal, 20th-of-the-Month Deadlines, and Timely Filing Discounts",
      "body": "Compliance administration enforced by the Missouri Department of Revenue:\n\n- **MyTax Missouri Registration**: Businesses register for a Missouri Retail Sales Tax License online via **MyTax Missouri**.\n- **Filing Deadlines**: Standard sales tax returns (Form 53-1) are due on or before the **20th day of the month** following the end of the reporting period.\n- **Timely Payment Allowance**: Under Mo. Rev. Stat. § 144.140, retailers who file and pay returns on time are permitted to retain **2.00% of the sales tax collected** as a timely filing discount.\n- **Annual Sales Tax Holiday**: Missouri holds an annual **3-day Sales Tax Holiday in early August**, exempting qualifying clothing ($100 or less per item), school supplies ($50 or less), and personal computers ($1,500 or less) from state and participating local taxes.\n- **Delinquency Penalties**: Late returns incur a penalty of **5% per month** of the unpaid tax (up to 25% maximum), plus statutory interest."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Furniture Order in Kansas City (9.085% Rate)",
    "scenario": "A consumer in Kansas City, Missouri purchases an $800.00 sofa from a home furnishings retailer.",
    "inputs": {
      "sofaSubtotal": "$800.00",
      "stateRate": "4.225%",
      "kcLocalRate": "4.86%",
      "combinedRate": "9.085%"
    },
    "steps": [
      {
        "label": "Taxable Goods Base",
        "formula": "$800.00 merchandise",
        "amount": "$800.00",
        "note": "Furniture is taxable personal property"
      },
      {
        "label": "Missouri State Tax (4.225%)",
        "formula": "$800.00 × 4.225%",
        "amount": "$33.80",
        "note": "State of Missouri share"
      },
      {
        "label": "Kansas City Local Taxes (4.86%)",
        "formula": "$800.00 × 4.86%",
        "amount": "$38.88",
        "note": "Municipal + county + transit levies"
      },
      {
        "label": "Total Missouri Sales Tax",
        "formula": "$33.80 + $38.88",
        "amount": "$72.68",
        "note": "Combined 9.085% rate"
      },
      {
        "label": "Total Invoiced Checkout Amount",
        "formula": "$800.00 + $72.68",
        "amount": "$872.68",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "In Kansas City, the 9.085% combined tax on an $800 furniture purchase equals $72.68, bringing the total invoice to $872.68."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $500 St. Louis Receipt",
    "scenario": "A retail merchant in St. Louis collects a flat $500.00 tax-inclusive cash payment at a 9.679% combined rate. What is the net sales revenue?",
    "inputs": {
      "totalReceiptCollected": "$500.00",
      "stLouisRate": "9.679%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$500.00 ÷ (1 + 0.09679)",
        "amount": "$455.88",
        "note": "True retail revenue retained"
      },
      {
        "label": "Missouri Sales Tax Owed",
        "formula": "$500.00 - $455.88",
        "amount": "$44.12",
        "note": "Remitted via MyTax Missouri"
      },
      {
        "label": "Verification Calculation",
        "formula": "$455.88 × 9.679%",
        "amount": "$44.12",
        "note": "Reconciles exactly to $500.00 receipt"
      }
    ],
    "takeaway": "From a $500.00 gross receipt in St. Louis, the merchant retains $455.88 net revenue and owes $44.12 in sales tax."
  },
  "faqs": [
    {
      "question": "What is the base sales tax rate in Missouri for 2026?",
      "answer": "The statewide base sales tax rate in Missouri is 4.225%. Local city, county, and special taxing district taxes push combined rates between 8.00% and 10.35% across most urban areas.",
      "sourceUrl": "https://dor.mo.gov/taxation/business/tax-types/sales-use/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Missouri?",
      "answer": "No. Under Missouri Department of Revenue Letter Ruling LR 7943, cloud SaaS and hosted software services are 100% exempt from sales tax.",
      "sourceUrl": "https://dor.mo.gov/taxation/business/tax-types/sales-use/"
    },
    {
      "question": "Are groceries taxed at a lower rate in Missouri?",
      "answer": "Yes. Food products for home consumption enjoy a reduced state tax rate of 1.225% (plus applicable local taxes), compared to the standard 4.225% state rate.",
      "sourceUrl": "https://dor.mo.gov/taxation/business/tax-types/sales-use/"
    },
    {
      "question": "What is the economic nexus threshold in Missouri?",
      "answer": "Out-of-state remote sellers establish economic nexus in Missouri when retail sales delivered into the state exceed $100,000 in gross revenue during the current or preceding calendar year.",
      "sourceUrl": "https://dor.mo.gov/taxation/business/tax-types/sales-use/remote-sellers/"
    },
    {
      "question": "When is Missouri’s annual sales tax holiday?",
      "answer": "Missouri holds an annual 3-day Sales Tax Holiday during the first weekend of August, exempting qualifying clothing ($100 or less per item), school supplies ($50 or less), and computers ($1,500 or less).",
      "sourceUrl": "https://dor.mo.gov/taxation/business/tax-types/sales-use/holidays/back-to-school/"
    }
  ]
};

export default missouriContent;
