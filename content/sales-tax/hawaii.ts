import type { PageContent } from '../types.ts';

export const hawaiiContent: PageContent = {
  "slug": "hawaii",
  "family": "sales-tax",
  "title": "Hawaii General Excise Tax (GET) Calculator (4.00% to 4.712%) | FeeKit",
  "metaDescription": "Calculate Hawaii General Excise Tax (GET) with Department of Taxation rates (4.0% state, 4.5% county, visible 4.712% pass-through). Broad business taxation, SaaS, and $100k nexus.",
  "h1": "Hawaii General Excise Tax (GET) Calculator & DOTAX Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Hawaii Department of Taxation (DOTAX)",
    "url": "https://tax.hawaii.gov/genexc/",
    "citation": "Haw. Rev. Stat. Chapter 237 (General Excise Tax Law) and Hawaii Administrative Rules Title 18, Chapter 237."
  },
  "overview": "The State of Hawaii does not impose a conventional consumer retail sales tax. Instead, Hawaii levies a comprehensive General Excise Tax (GET) under Haw. Rev. Stat. Chapter 237. The GET is a gross income privilege tax assessed directly upon businesses for the privilege of conducting commercial activity in the State of Hawaii. While the statutory state base rate is 4.00% on retail commerce (and 0.50% on wholesale activity), counties levy a 0.50% surcharge, resulting in a 4.50% effective statutory tax in Honolulu, Maui, Kauai, and Hawaii Counties. Because businesses are taxed on their gross revenue—including any tax reimbursed by the consumer—merchants are legally permitted to visibly pass on an adjusted rate of up to 4.712% to avoid paying tax out of pocket.",
  "sections": [
    {
      "id": "hi-get-structure-and-pass-through-math",
      "title": "Hawaii GET Mechanics: The Statutory 4.50% Rate vs the 4.712% Pass-Through",
      "body": "Hawaii’s GET contains a unique statutory mechanism that differentiates the legal tax rate from the consumer checkout surcharge:\n\n- **State Statutory Base Rate**: **4.00%**. Applies to all retail sales of goods, digital products, and services under Haw. Rev. Stat. § 237-13.\n- **County Surcharges (0.50%)**: Enacted by Honolulu County (to fund the rail transit project), Maui County, Kauai County, and Hawaii County (Big Island), raising the statutory retail rate to **4.50%**.\n- **The \"Tax-on-Tax\" Pass-Through Formula**: Under Hawaii law, when a business collects GET from a customer, that collected tax is itself considered gross income subject to GET. To prevent the merchant from incurring a loss, Hawaii DOTAX allows retailers to use the gross-up formula:\n  $$\\text{Visible Pass-Through Rate} = \\frac{\\text{Statutory Rate}}{1 - \\text{Statutory Rate}} = \\frac{0.045}{1 - 0.045} = 4.71204\\%$$\n  Therefore, consumers in Honolulu and across all counties routinely see an effective checkout surcharge of **4.712%** (or **4.166%** in jurisdictions without county surcharges)."
    },
    {
      "id": "hi-comprehensive-tax-base-services-groceries",
      "title": "Comprehensive Tax Base: Full Taxation of SaaS, Groceries, Clothing, and Services",
      "body": "Unlike continental sales tax systems that exempt services and consumer staples, Hawaii GET has one of the broadest tax bases in the United States:\n\n1. **Software as a Service (SaaS) & Cloud Technology**: **Fully Taxable (4.00% - 4.50%)**. Any electronic data processing, software access, digital download, or technical consulting rendered to a Hawaii resident or business is subject to retail GET.\n2. **Groceries & Food for Home Consumption**: **Fully Taxable (4.00% - 4.50%)**. Hawaii does not provide a general grocery exemption. Fresh fruits, vegetables, bread, milk, and meat are taxed identically to durable electronics. To offset this burden for low-income residents, Hawaii offers an income tax credit rather than a point-of-sale exemption.\n3. **Everyday Clothing and Footwear**: **Fully Taxable**. Apparel incurs standard retail GET year-round.\n4. **Professional & Personal Services**: Legal representation, accounting, medical visits, architectural consulting, and freelance design are all fully subject to GET."
    },
    {
      "id": "hi-economic-nexus-and-remote-seller-rules",
      "title": "Hawaii Remote Seller Economic Nexus ($100,000 / 200 Transactions)",
      "body": "Codified under Haw. Rev. Stat. § 237-2.5 following the Supreme Court Wayfair ruling:\n\n- **Economic Nexus Threshold**: An out-of-state remote merchant or marketplace seller must obtain a Hawaii GET license and remit excise tax if, during the current or preceding calendar year, they have:\n  - Gross income of **$100,000 or more** from sales into Hawaii; **OR**\n  - **200 or more separate transactions** delivered into Hawaii.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, Etsy, eBay, etc.) collect and remit GET on facilitated retail transactions, relieving independent third-party sellers of liability on marketplace orders."
    },
    {
      "id": "hi-registration-and-filing-dotax",
      "title": "GET Licensing (Form BB-1), Periodic Returns (Form G-45), and Annual Reconciliation (Form G-49)",
      "body": "Compliance obligations enforced by the Hawaii Department of Taxation (DOTAX):\n\n- **GET Licensing**: Businesses must register online via **Hawaii Tax Online (HTO)** and pay a one-time $20 license registration fee to receive a Hawaii General Excise Tax license.\n- **Periodic Filing (Form G-45)**: Periodic returns are filed monthly, quarterly, or semi-annually depending on annual tax liability. Returns are due on the **20th day of the calendar month** following the close of the period.\n- **Annual Reconciliation (Form G-49)**: All taxpayers must file an annual summary return on or before the 20th day of the fourth month following the close of the tax year (April 20 for calendar-year businesses).\n- **Statutory Penalties**: Delinquent returns incur a 5% per month late filing penalty (up to 25%) plus a 0.666% monthly statutory interest rate."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Electronics Checkout in Honolulu (4.712% Visible Pass-Through)",
    "scenario": "A consumer in Honolulu purchases a $600.00 digital camera from a retail store that visibly passes through the statutory GET using the state-approved 4.712% rate.",
    "inputs": {
      "cameraSubtotal": "$600.00",
      "passThroughRate": "4.712% (Honolulu County 4.5% Base Grossed Up)"
    },
    "steps": [
      {
        "label": "Camera Merchandise Price",
        "formula": "$600.00 base price",
        "amount": "$600.00",
        "note": "Subject to retail GET classification"
      },
      {
        "label": "Visible GET Checkout Charge",
        "formula": "$600.00 × 4.712%",
        "amount": "$28.27",
        "note": "Approved pass-through amount"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "$600.00 + $28.27",
        "amount": "$628.27",
        "note": "Total customer payment"
      },
      {
        "label": "Merchant Tax Liability to DOTAX",
        "formula": "$628.27 gross receipts × 4.50%",
        "amount": "$28.27",
        "note": "Exact statutory remittance"
      }
    ],
    "takeaway": "By charging the 4.712% visible rate on the $600 camera, the retailer collects $28.27, which exactly pays the 4.50% statutory GET owed on the $628.27 gross revenue without any loss."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $1,000.00 Total Receipt in Maui",
    "scenario": "A commercial dive shop in Maui receives a flat $1,000.00 tax-inclusive payment for guided charter services. What is the merchant’s net revenue and GET liability?",
    "inputs": {
      "totalGrossPayment": "$1,000.00",
      "mauiStatutoryRate": "4.50% (4.0% State + 0.5% County)"
    },
    "steps": [
      {
        "label": "Hawaii GET Statutory Remittance",
        "formula": "$1,000.00 × 4.50%",
        "amount": "$45.00",
        "note": "Owed on gross receipts on Form G-45"
      },
      {
        "label": "Net Retained Commercial Revenue",
        "formula": "$1,000.00 - $45.00",
        "amount": "$955.00",
        "note": "Business operating margin"
      },
      {
        "label": "Effective Pass-Through Reconciliation",
        "formula": "$955.00 × (1 + 0.04712)",
        "amount": "$1,000.00",
        "note": "Mathematical reconciliation"
      }
    ],
    "takeaway": "Under Hawaii GET rules, tax is assessed against the entire gross receipt ($1,000.00), leaving the Maui vendor with $955.00 net after remitting $45.00 to DOTAX."
  },
  "faqs": [
    {
      "question": "What is the difference between Hawaii GET and standard sales tax?",
      "answer": "Hawaii GET is an excise tax on the gross business receipts of the merchant, not a direct consumer sales tax. Because the merchant owes tax on gross revenue, they are permitted to pass on up to 4.712% to customers at checkout.",
      "sourceUrl": "https://tax.hawaii.gov/genexc/"
    },
    {
      "question": "Why do Hawaii receipts show a 4.712% tax instead of 4.50%?",
      "answer": "The statutory rate is 4.50%, but because the tax collected from the customer is also considered gross revenue subject to GET, merchants use the gross-up formula (0.045 / 0.955 = 4.712%) so they do not pay tax out of pocket.",
      "sourceUrl": "https://tax.hawaii.gov/genexc/"
    },
    {
      "question": "Are groceries and food taxable under Hawaii GET?",
      "answer": "Yes. Hawaii does not exempt grocery food or basic essentials. Groceries, clothing, electronics, and medical services are all fully subject to standard retail GET.",
      "sourceUrl": "https://tax.hawaii.gov/genexc/"
    },
    {
      "question": "Does Hawaii tax SaaS and cloud software subscriptions?",
      "answer": "Yes. Software as a Service, digital downloads, and remote data services are fully taxable in Hawaii as gross business receipts under the retail classification.",
      "sourceUrl": "https://tax.hawaii.gov/genexc/"
    },
    {
      "question": "What is the Hawaii economic nexus threshold for remote sellers?",
      "answer": "Remote sellers establish economic nexus in Hawaii if gross sales into the state reach $100,000 or 200 individual transactions during the current or preceding calendar year.",
      "sourceUrl": "https://tax.hawaii.gov/genexc/"
    }
  ]
};

export default hawaiiContent;
