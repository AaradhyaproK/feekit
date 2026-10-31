import type { PageContent } from '../types.ts';

export const montanaContent: PageContent = {
  "slug": "montana",
  "family": "sales-tax",
  "title": "Montana Sales Tax Calculator (0.00% General Tax) | FeeKit",
  "metaDescription": "Verify Montana’s 0.00% general sales tax. Department of Revenue guide on local resort taxes (up to 3.0%), medical cannabis, and out-of-state remote seller rules.",
  "h1": "Montana Sales Tax Guide & 0.00% Retail Tax Reference",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Montana Department of Revenue",
    "url": "https://mtrevenue.gov/",
    "citation": "Mont. Code Ann. Title 7, Chapter 6, Part 15 (Resort Tax) and Title 15, Chapter 64 (Cannabis Tax)."
  },
  "overview": "The State of Montana is one of the five \"NOMAD\" states with no statewide retail sales tax. Consumers shopping in Montana pay an effective 0.00% sales tax rate at checkout on clothing, electronics, groceries, digital goods, and software. However, under Mont. Code Ann. Title 7, Chapter 6, Part 15, qualifying designated Resort Communities and Resort Areas are legally permitted to levy a local resort tax of up to 3.00% (or 4.00% with voter-approved infrastructure surcharges) on goods and services sold by destination hospitality and retail businesses.",
  "sections": [
    {
      "id": "mt-zero-sales-tax-policy",
      "title": "Montana’s 0.00% Statewide Retail Tax Policy Across All 56 Counties",
      "body": "Montana’s constitution and statutory code provide comprehensive tax relief at checkout:\n\n- **Statewide General Sales Tax**: **0.00%**. There is no state retail sales tax on personal property, vehicles, appliances, or services.\n- **General Municipal Sales Taxes**: Prohibited under Montana law. Non-resort municipalities such as Billings, Missoula, Great Falls, Bozeman, and Helena cannot enact general sales taxes.\n- **Cross-Border Commerce**: Montana attracts significant retail tourism from neighboring states (Idaho at 6.00%, North Dakota at 5.00%, South Dakota at 4.20%, and Wyoming at 4.00%) as well as Canadian cross-border shoppers from Alberta and Saskatchewan seeking tax-free retail."
    },
    {
      "id": "mt-resort-community-taxes",
      "title": "Designated Resort Community Taxes (Up to 3.00% in Big Sky, Whitefish, Red Lodge)",
      "body": "While general retail is untaxed statewide, destination tourist communities levy specialized resort taxes:\n\n1. **Resort Community Tax**: Under Mont. Code Ann. § 7-6-1501, designated resort communities with populations under 5,500 that derive a major portion of their economy from tourism can levy up to a **3.00% local tax** (or up to 4.00% for infrastructure) on:\n   - Restaurant meals and prepared foods.\n   - Alcoholic beverages sold by bars and taverns.\n   - Hotel, lodge, and vacation rental accommodations.\n   - Retail goods sold by ski shops, sporting goods retailers, souvenir shops, and luxury boutiques.\n2. **Key Participating Resort Jurisdictions**:\n   - **Whitefish**: **3.00%** resort tax.\n   - **Big Sky**: **4.00%** combined resort and infrastructure tax.\n   - **Red Lodge**: **3.00%** resort tax.\n   - **West Yellowstone**: **3.00%** resort tax.\n3. **Groceries & Essential Goods**: Essential food items, medicine, and basic hardware are statutorily exempt from resort taxes."
    },
    {
      "id": "mt-saas-and-remote-commerce",
      "title": "Software, Digital Products, and Remote Out-of-State Commerce",
      "body": "Digital technology and remote merchant compliance in Montana:\n\n- **Software as a Service (SaaS)**: **0.00% Exempt**. Software subscriptions, cloud hosting, and digital products incur zero sales tax in Montana.\n- **No Remote Seller Sales Tax Nexus**: Because Montana has no statewide sales tax, out-of-state e-commerce merchants have no sales tax collection duties for deliveries made into Montana.\n- **Corporate Income Tax (CIT)**: Corporations conducting business in Montana are subject to Montana Corporate Income Tax at 6.75% under MCA Title 15, Chapter 31."
    },
    {
      "id": "mt-compliance-and-cannabis-tax",
      "title": "Specialized Excise Taxes: Cannabis and Lodging Facility Use Tax",
      "body": "Compliance administered by the Montana Department of Revenue (TransAction Portal - TAP):\n\n- **Lodging Facility Use Tax**: A statewide 4.00% lodging facility use tax plus a 4.00% lodging sales tax (total 8.00%) applies to hotel rooms and short-term accommodations statewide.\n- **Cannabis Tax**: Adult-use recreational cannabis is subject to a 20.00% state excise tax under MCA 15-64-102 (medical cannabis is taxed at 4.00%).\n- **Resort Tax Remittance**: Businesses operating in resort communities file and remit resort taxes directly to the municipal resort tax district on a monthly or quarterly schedule."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Retail Electronics in Bozeman vs Ski Rental in Big Sky",
    "scenario": "A consumer in Bozeman purchases an $800.00 tablet computer, followed by a $100.00 ski equipment rental in the Big Sky resort community.",
    "inputs": {
      "bozemanTabletAmount": "$800.00",
      "bigSkyRentalAmount": "$100.00",
      "bigSkyResortRate": "4.00%"
    },
    "steps": [
      {
        "label": "Bozeman Tablet Sales Tax (0.00%)",
        "formula": "$800.00 × 0.00%",
        "amount": "$0.00",
        "note": "Zero state or local sales tax in Bozeman"
      },
      {
        "label": "Tablet Total Checkout Amount",
        "formula": "$800.00 + $0.00",
        "amount": "$800.00",
        "note": "Customer pays pure retail price"
      },
      {
        "label": "Big Sky Resort Tax (4.00%)",
        "formula": "$100.00 × 4.00%",
        "amount": "$4.00",
        "note": "Local resort community tax"
      },
      {
        "label": "Big Sky Total Invoiced Rental",
        "formula": "$100.00 + $4.00",
        "amount": "$104.00",
        "note": "Total customer rental payment"
      }
    ],
    "takeaway": "In Montana, general consumer retail purchases in cities like Bozeman incur zero sales tax, while purchases in designated resort areas like Big Sky carry a local resort tax."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $309.00 Whitefish Lodging Receipt",
    "scenario": "A boutique inn in Whitefish receives an all-inclusive $309.00 payment for tourist lodging subject to the 3.00% local resort tax. What is the net lodging revenue?",
    "inputs": {
      "totalInclusiveReceipt": "$309.00",
      "whitefishResortRate": "3.00%"
    },
    "steps": [
      {
        "label": "Net Lodging Extraction Formula",
        "formula": "$309.00 ÷ (1 + 0.03)",
        "amount": "$300.00",
        "note": "Net lodging business revenue"
      },
      {
        "label": "Whitefish Resort Tax Liability",
        "formula": "$309.00 - $300.00",
        "amount": "$9.00",
        "note": "Remitted to Whitefish Resort Tax District"
      },
      {
        "label": "Verification Calculation",
        "formula": "$300.00 × 3.00%",
        "amount": "$9.00",
        "note": "Reconciles exactly to $309.00 total"
      }
    ],
    "takeaway": "From a $309.00 resort-tax-inclusive stay in Whitefish, the lodging operator retains $300.00 net and remits $9.00 to the local resort tax authority."
  },
  "faqs": [
    {
      "question": "Does Montana have a sales tax?",
      "answer": "No. Montana has no general statewide retail sales tax. Tangible goods, clothing, electronics, groceries, and software are subject to 0% sales tax.",
      "sourceUrl": "https://mtrevenue.gov/"
    },
    {
      "question": "What is a Montana Resort Tax?",
      "answer": "Certain designated resort communities (such as Big Sky, Whitefish, and Red Lodge) levy a local resort tax of up to 3.00% (or 4.00% with infrastructure) on hospitality, dining, lodging, and tourist retail.",
      "sourceUrl": "https://mtrevenue.gov/"
    },
    {
      "question": "Is Software as a Service (SaaS) taxable in Montana?",
      "answer": "No. Software subscriptions, cloud hosting, and digital products incur zero sales tax in Montana.",
      "sourceUrl": "https://mtrevenue.gov/"
    },
    {
      "question": "Do remote online merchants collect sales tax on shipments to Montana?",
      "answer": "No. Because sales tax is sourced to the delivery address and Montana has no sales tax, goods shipped to Montana are 0% sales-tax free.",
      "sourceUrl": "https://mtrevenue.gov/"
    },
    {
      "question": "What taxes apply to hotels in Montana?",
      "answer": "Montana levies an 8.00% statewide lodging tax (4.00% lodging facility use tax plus 4.00% lodging sales tax) on commercial accommodations statewide.",
      "sourceUrl": "https://mtrevenue.gov/"
    }
  ]
};

export default montanaContent;
