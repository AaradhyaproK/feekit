import type { PageContent } from '../types.ts';

export const newHampshireContent: PageContent = {
  "slug": "new-hampshire",
  "family": "sales-tax",
  "title": "New Hampshire Sales Tax Calculator (0.00% General Tax) | FeeKit",
  "metaDescription": "Verify New Hampshire’s 0.00% general sales tax. Department of Revenue Administration guide on Meals and Rooms tax (8.5%), business taxes, and out-of-state nexus rules.",
  "h1": "New Hampshire Sales Tax Guide & 0.00% Retail Tax Reference",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "New Hampshire Department of Revenue Administration",
    "url": "https://www.revenue.nh.gov/",
    "citation": "N.H. Rev. Stat. Ann. Title V, Chapter 78-A (Tax on Meals and Rooms) and RSA Chapter 77-A (Business Profits Tax)."
  },
  "overview": "The State of New Hampshire is one of the foundational \"NOMAD\" states (New Hampshire, Oregon, Montana, Alaska, Delaware) that does not levy a general state or municipal retail sales tax. Consumers shopping in New Hampshire pay an effective 0.00% sales tax rate at checkout on clothing, electronics, groceries, personal property, digital downloads, and Software as a Service (SaaS). However, New Hampshire generates commercial tax revenue through targeted excise taxes, primarily the 8.5% Meals and Rooms (Rentals) Tax under RSA Chapter 78-A, as well as business enterprise and corporate profits taxes levied upon in-state commercial entities.",
  "sections": [
    {
      "id": "nh-zero-sales-tax-policy",
      "title": "New Hampshire’s 0.00% Retail Tax Policy Across All 10 Counties",
      "body": "New Hampshire’s statutory framework guarantees zero point-of-sale retail taxes:\n\n- **Statewide General Sales Tax**: **0.00%**. There is no state retail sales tax on consumer goods, electronics, motor vehicles, or apparel.\n- **Local Option Sales Taxes**: Prohibited under New Hampshire statutory law. Towns and cities such as Manchester, Nashua, Concord, and Portsmouth cannot levy municipal sales taxes.\n- **Cross-Border Shopping Hub**: Because neighboring states enforce retail sales taxes (Massachusetts at 6.25%, Maine at 5.50%, Vermont at 6.00%), New Hampshire retail centers along the southern border serve as major commercial shopping destinations."
    },
    {
      "id": "nh-meals-and-rooms-tax",
      "title": "The 8.5% Meals and Rooms Tax (RSA Chapter 78-A) and Targeted Excises",
      "body": "While general retail is untaxed, New Hampshire enforces specific statutory excise taxes:\n\n1. **Meals and Rooms (Rentals) Tax (M&R)**: Under RSA 78-A, an **8.5% excise tax** applies to:\n   - Restaurant meals and prepared foods sold by caterers, dining establishments, and mobile food trucks.\n   - Hotel, motel, bed-and-breakfast, and short-term vacation rental accommodations.\n   - Motor vehicle rentals leased for periods of 180 consecutive days or fewer.\n2. **Groceries & Staple Foods**: **0.00% Exempt**. Unprepared food items, produce, meat, dairy, and grocery items purchased for home consumption are completely exempt from the Meals and Rooms tax.\n3. **Software, Digital Products, and SaaS**: **0.00% Exempt**. Remote software access, digital books, streaming subscriptions, and hardware sales incur zero consumer tax in New Hampshire."
    },
    {
      "id": "nh-remote-seller-protections",
      "title": "New Hampshire Remote Seller Protections (Senate Bill 242)",
      "body": "Following the U.S. Supreme Court’s *South Dakota v. Wayfair* ruling, New Hampshire enacted landmark protective legislation (Senate Bill 242) codified in RSA Chapter 78-E to shield in-state businesses:\n\n- **Protection Against Out-of-State Extraterritorial Audits**: Out-of-state taxing jurisdictions must provide written notice to the New Hampshire Department of Justice prior to auditing or compelling a New Hampshire vendor to collect out-of-state sales tax.\n- **No In-State Sales Tax Collection Duties**: Because New Hampshire has no general sales tax, remote merchants delivering goods into New Hampshire have no sales tax registration or filing duties with the New Hampshire Department of Revenue Administration (NHDRA)."
    },
    {
      "id": "nh-business-entity-taxes",
      "title": "Corporate Compliance: Business Profits Tax (BPT) & Business Enterprise Tax (BET)",
      "body": "Entities operating within New Hampshire must maintain compliance with state business tax filings:\n\n- **Business Profits Tax (BPT)**: Imposed under RSA Chapter 77-A on corporate gross business profits.\n- **Business Enterprise Tax (BET)**: Imposed under RSA Chapter 77-E on the enterprise value tax base (compensation, interest, and dividends paid) of businesses with gross receipts exceeding statutory thresholds.\n- **Filing Deadlines**: Corporate business tax returns are filed annually via **Granite Tax Connect (GTC)** on or before the 15th day of the fourth month following the close of the fiscal year."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Electronics vs Restaurant Dining in Manchester",
    "scenario": "A consumer in Manchester, New Hampshire purchases a $1,200.00 laptop computer at a retail store, followed by a $100.00 dinner at a local steakhouse.",
    "inputs": {
      "laptopPurchaseAmount": "$1,200.00",
      "steakhouseDinnerAmount": "$100.00"
    },
    "steps": [
      {
        "label": "Laptop Sales Tax (0.00%)",
        "formula": "$1,200.00 × 0.00%",
        "amount": "$0.00",
        "note": "Zero general retail sales tax in New Hampshire"
      },
      {
        "label": "Laptop Total Checkout Price",
        "formula": "$1,200.00 + $0.00",
        "amount": "$1,200.00",
        "note": "Customer pays pure retail price"
      },
      {
        "label": "Dinner Meals & Rooms Tax (8.5%)",
        "formula": "$100.00 × 8.50%",
        "amount": "$8.50",
        "note": "Statutory RSA 78-A excise tax"
      },
      {
        "label": "Steakhouse Total Invoiced Bill",
        "formula": "$100.00 + $8.50",
        "amount": "$108.50",
        "note": "Total customer restaurant payment"
      }
    ],
    "takeaway": "In New Hampshire, the consumer pays zero sales tax on the $1,200 laptop, but incurs the statutory 8.5% Meals and Rooms tax ($8.50) on prepared dining."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Food Charges from a $217.00 Hotel Room Invoice",
    "scenario": "A hotel guest in Portsmouth receives an all-inclusive checkout receipt of $217.00 for overnight lodging subject to the 8.5% Meals and Rooms tax. What was the base room charge?",
    "inputs": {
      "totalInclusiveReceipt": "$217.00",
      "mealsAndRoomsRate": "8.50%"
    },
    "steps": [
      {
        "label": "Base Room Extraction Formula",
        "formula": "$217.00 ÷ (1 + 0.085)",
        "amount": "$200.00",
        "note": "Net lodging revenue"
      },
      {
        "label": "New Hampshire M&R Tax Liability",
        "formula": "$217.00 - $200.00",
        "amount": "$17.00",
        "note": "Remitted to NHDRA on Form DP-10"
      },
      {
        "label": "Verification Calculation",
        "formula": "$200.00 × 8.50%",
        "amount": "$17.00",
        "note": "Reconciles exactly to $217.00 invoice"
      }
    ],
    "takeaway": "From a $217.00 all-inclusive hotel stay, the lodging operator retains $200.00 net lodging revenue and remits $17.00 to the New Hampshire Department of Revenue Administration."
  },
  "faqs": [
    {
      "question": "Does New Hampshire have a sales tax?",
      "answer": "No. New Hampshire has no state or local general retail sales tax. Tangible personal property, electronics, apparel, and SaaS subscriptions are subject to 0% sales tax.",
      "sourceUrl": "https://www.revenue.nh.gov/"
    },
    {
      "question": "What taxes apply to dining and hotels in New Hampshire?",
      "answer": "New Hampshire levies an 8.5% Meals and Rooms (Rentals) Tax on prepared restaurant food, hotel accommodations, short-term rentals, and passenger vehicle rentals.",
      "sourceUrl": "https://www.revenue.nh.gov/"
    },
    {
      "question": "Are groceries taxed in New Hampshire?",
      "answer": "No. Unprepared food items, fresh groceries, and produce for home consumption are completely exempt from tax in New Hampshire.",
      "sourceUrl": "https://www.revenue.nh.gov/"
    },
    {
      "question": "Do out-of-state online retailers charge sales tax to New Hampshire buyers?",
      "answer": "No. Because sales tax is sourced to the delivery destination, goods shipped to a delivery address in New Hampshire are subject to 0% sales tax.",
      "sourceUrl": "https://www.revenue.nh.gov/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in New Hampshire?",
      "answer": "No. Software subscriptions, cloud hosting, and digital services incur 0% sales tax in New Hampshire.",
      "sourceUrl": "https://www.revenue.nh.gov/"
    }
  ]
};

export default newHampshireContent;
