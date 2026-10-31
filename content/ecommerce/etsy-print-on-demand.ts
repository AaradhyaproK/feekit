import type { PageContent } from '../types.ts';

export const etsyPrintOnDemandContent: PageContent = {
  slug: 'etsy-print-on-demand',
  family: 'ecommerce',
  title: 'Etsy Print on Demand (POD) Profit & Break-Even Calculator | FeeKit',
  metaDescription:
    'Calculate Etsy Print on Demand (POD) profit margins, Printify/Printful base production costs, 6.5% transaction fees, and shipping markups. Sourced from official Etsy schedules.',
  h1: 'Etsy Print on Demand (POD) Break-Even & Profit Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Etsy Official Fees & Payments Policy',
    url: 'https://www.etsy.com/legal/fees/',
    citation: 'Etsy Official Fees & Payments Policy (Transaction, Listing, and Etsy Payments Schedules).',
  },
  overview:
    'Selling Print on Demand (POD) merchandise—such as graphic t-shirts, ceramic mugs, tote bags, and phone cases—on Etsy combines Etsy’s massive organic shopper search engine with third-party automated manufacturing. Because production partners like Printify, Printful, or Gelato handle manufacturing, printing, and parcel fulfillment, sellers carry zero physical inventory risk. However, because print providers charge full retail wholesale prices absorbing 45% to 60% of customer revenue, net profit margins are slender (typically 15% to 22%). Accurately modeling Etsy transaction fees (6.5%), Etsy Payments processing (3.0% + $0.25), $0.20 listing renewals, and shipping markups is vital to avoid selling at a net cash loss.',
  sections: [
    {
      id: 'etsy-fee-deductions-pod',
      title: 'Etsy Platform Deductions on Print on Demand Sales',
      body: `Every print-on-demand order fulfilled through an integrated partner incurs four platform costs:

1. **Transaction Fee (6.50%)**: Etsy charges **6.50%** on the full customer transaction value, which includes both the item sale price and any customer-paid shipping charges.
2. **Etsy Payments Processing (3.00% + $0.25)**: Billed at **3.00% + $0.25** for domestic US payment processing.
3. **Listing Auto-Renewal Fee ($0.20)**: Each time an item sells from an ongoing listing, Etsy automatically renews the catalog listing for an additional 4-month cycle, charging **$0.20 USD**.
4. **Etsy Offsite Ads Fee (12% or 15%)**: If an order originates from an Etsy Offsite Ad (Google, Facebook, Pinterest), Etsy charges a mandatory **12.00% fee** for shops over $10,000 in trailing annual sales (or 15.00% for shops under $10,000). On low-margin POD goods, Offsite Ads can eliminate 100% of profit if not budgeted carefully.`,
    },
    {
      id: 'print-provider-cogs-and-shipping-markup',
      title: 'Print Provider Base Production Costs and Shipping Markups',
      body: `The primary cost center in an Etsy POD business is the print provider's invoice:

- **Base Item & Printing Cost**: A standard unisex printed graphic t-shirt (such as a Gildan 5000 or Bella+Canvas 3001) costs **$9.50 to $13.50** through Printify or Printful, depending on subscription tier (e.g., Printify Premium). Ceramic 11 oz mugs typically cost **$5.00 to $6.50**.
- **Print Provider Domestic Shipping**: Providers charge **$4.00 to $5.50** for domestic standard shipping on a single t-shirt.
- **The Free Shipping vs. Separate Shipping Strategy**: Offering "Free Shipping" by rolling shipping into the retail price (e.g., pricing a t-shirt at $26.00 with free shipping) often boosts Etsy search algorithm placement and buyer conversion. However, Etsy charges its 6.5% transaction fee on the full $26.00 regardless of how shipping is displayed.`,
    },
    {
      id: 'production-partner-disclosure-rules',
      title: 'Etsy Production Partner Disclosure and Copyright Policies',
      body: `Operating a compliant POD shop on Etsy requires adherence to marketplace rules:

- **Mandatory Production Partner Disclosure**: Etsy’s Handmade Policy explicitly mandates that sellers who do not physically manufacture goods themselves must disclose their production partners (e.g., Printify, Monster Digital, SwiftPOD) in listing settings. Sellers must declare that the design is their original intellectual creation.
- **Originality and Intellectual Property**: Using AI-generated images, clip art, or graphic elements requires verifying commercial licensing terms. Uploading trademarked song lyrics, movie quotes, sports logos, or copyrighted characters leads to immediate DMCA takedown notices and permanent store bans.
- **Etsy Star Seller Dispatch SLA**: Production partners must fulfill orders within the stated processing window. If a print provider experiences holiday backlogs and ships late, the seller's on-time dispatch rating drops, forfeiting Star Seller badges.`,
    },
    {
      id: 'reprints-and-damaged-goods',
      title: 'Customer Reprints, Misprints, and Customer Service Reserves',
      body: `Managing third-party fulfillment quality requires budgeting for fulfillment errors:

- **Misprint & Defect Rates**: Industry-standard DTG misprint and misalignment defect rates range from **1.5% to 3.0%**. When customers receive crooked prints, faded ink, or defective garments, the seller must resolve the issue promptly.
- **Securing Provider Reprints**: High-quality print providers will issue a free reprint or credit if clear photographic evidence of a production flaw is submitted within 30 days. However, minor customer subjective complaints (e.g., slight color shade differences from monitor screens) are rarely reimbursed by print providers, requiring the shop owner to absorb replacement costs. Modeling a **3.0% reprint reserve** protects shop cash flow.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $26.00 Graphic T-Shirt Fulfilled via Printify on Etsy',
    scenario:
      'An Etsy creator sells a retro graphic t-shirt on a Bella+Canvas 3001 blank for $26.00 with free customer shipping. The product is fulfilled by a US-based Printify print provider.',
    inputs: {
      retailPrice: '$26.00',
      shippingCharged: '$0.00 (Free Shipping)',
      printifyBasePrintCost: '$10.80 (Bella+Canvas 3001 on Printify Premium)',
      printifyDomesticShipping: '$4.75 (Standard trackable shipping)',
      etsyListingRenewalFee: '$0.20',
      etsyTransactionFee: '6.50% on $26.00 ($1.69)',
      etsyPaymentsFee: '3.00% + $0.25 on $26.00 ($1.03)',
      customerServiceReserve: '$0.75 per unit',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'Customer checkout price',
        amount: '$26.00',
        note: 'Total customer payment.',
      },
      {
        label: 'Deduct Etsy Listing Fee',
        formula: 'Listing auto-renewal deduction',
        amount: '$0.20',
        note: 'Catalog maintenance fee.',
      },
      {
        label: 'Deduct Etsy Transaction Fee (6.5%)',
        formula: '$26.00 × 0.065',
        amount: '$1.69',
        note: 'Marketplace platform fee.',
      },
      {
        label: 'Deduct Etsy Payments Fee (3% + $0.25)',
        formula: '$26.00 × 0.03 + $0.25',
        amount: '$1.03',
        note: 'Domestic payment processing.',
      },
      {
        label: 'Deduct Printify Base Manufacturing',
        formula: 'Printed garment invoice',
        amount: '$10.80',
        note: 'Print provider production base.',
      },
      {
        label: 'Deduct Printify Outbound Shipping',
        formula: 'Trackable USPS domestic postage',
        amount: '$4.75',
        note: 'Delivered parcel carrier charge.',
      },
      {
        label: 'Deduct Defect & Reprint Allowance',
        formula: '3% misprint and sizing reserve',
        amount: '$0.75',
        note: 'Customer service buffer.',
      },
      {
        label: 'Total Platform & Manufacturing Costs',
        formula: '$0.20 + $1.69 + $1.03 + $10.80 + $4.75 + $0.75',
        amount: '$19.22',
        note: 'All unit expenses.',
      },
      {
        label: 'Net Profit Per T-Shirt',
        formula: '$26.00 − $19.22',
        amount: '$6.78',
        note: 'Net profit: 26.08% margin.',
      },
    ],
    takeaway:
      'On a $26.00 free-shipping t-shirt, Printify production and shipping absorb $15.55 (59.81%), Etsy fees absorb $2.92 (11.23%), and customer service absorbs $0.75 (2.88%), leaving a solid net profit of $6.78 (26.08% net margin).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Break-Even Retail Price on POD Coffee Mugs',
    scenario:
      'An Etsy seller designs an 11 oz ceramic coffee mug. The print provider charges $5.50 for printing and $6.20 for foam-box packaging and shipping ($11.70 total POD cost). The seller wants to find the exact retail selling price needed to achieve a 20% net margin.',
    inputs: {
      totalPodCost: '$11.70',
      targetNetMargin: '20.00%',
      etsyTransactionFeeRate: '6.50%',
      etsyPaymentsFeeRate: '3.00% + $0.25',
      listingFee: '$0.20',
    },
    steps: [
      {
        label: 'Sum Fixed Non-Percentage Costs',
        formula: '$11.70 + $0.20 (listing) + $0.25 (payment fixed)',
        amount: '$12.15',
        note: 'Total baseline fixed cash outlay.',
      },
      {
        label: 'Combine Margin and Fee Percentages',
        formula: '1.0 − (0.20 target margin + 0.065 transaction + 0.03 payments)',
        amount: '0.705',
        note: 'Net divisor.',
      },
      {
        label: 'Calculate Required Retail Price',
        formula: '$12.15 ÷ 0.705',
        amount: '$17.23',
        note: 'Minimum required retail price.',
      },
    ],
    takeaway:
      'To earn a 20% net profit margin on a mug with $11.70 in base print and shipping costs, the seller must price the mug at a minimum of $17.23 (e.g., $12.99 + $4.50 shipping or $17.50 with free shipping).',
  },
  faqs: [
    {
      question: 'What are Etsy\'s mandatory seller disclosure rules regarding Print on Demand production partners?',
      answer:
        'Etsy requires all sellers who design products but rely on outside manufacturers or print providers to explicitly list those partners in their listing settings and shop profile. Sellers must verify that the artwork is their own intellectual design and disclose the partner\'s location.',
    },
    {
      question: 'What net profit margin can a new shop expect when selling print-on-demand items through Printify or Printful?',
      answer:
        'Net profit margins for print-on-demand shops on Etsy typically range from 15% to 25%. Because the print provider absorbs the production and shipping workload, their wholesale fee consumes 50% to 65% of the gross sale price, leaving modest but passive unit margins.',
    },
    {
      question: 'Who absorbs the replacement cost when an Etsy print provider delivers a defective or misprinted item?',
      answer:
        'If an item arrives damaged, poorly printed, or defective, major print providers like Printful and Printify will issue a free replacement or account credit once photo evidence is submitted. However, if the customer complains about sizing or subjective preferences, the shop owner must absorb the cost.',
    },
    {
      question: 'How does Etsy calculate its 6.5% transaction fee on separate customer shipping charges for POD items?',
      answer:
        'Etsy applies its 6.5% transaction fee to the entire order total, including both the item price and any shipping fee charged to the customer. Charging $20.00 with $5.00 shipping results in the same $1.63 transaction fee as charging $25.00 with free shipping.',
    },
    {
      question: 'Is paid Etsy Ads advertising cost-effective for print-on-demand listings with 20% net margins?',
      answer:
        'Etsy Ads can quickly become unprofitable for POD items due to narrow dollar margins. For example, if a t-shirt generates $6.00 in net profit, spending more than $6.00 in advertising clicks to secure a single sale results in a net cash loss. Etsy Ads should only be used on proven organic bestsellers.',
    },
  ],
};

export default etsyPrintOnDemandContent;
