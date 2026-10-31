import type { PageContent } from '../types.ts';

export const ebayVintageCollectiblesContent: PageContent = {
  slug: 'ebay-vintage-collectibles',
  family: 'ecommerce',
  title: 'eBay Vintage & Collectibles Profit Margin & Selling Fee Calculator | FeeKit',
  metaDescription:
    'Calculate eBay vintage and collectibles profit margins, 13.25% + $0.30 Final Value Fees, insurance, and $750+ signature rules. Sourced from official eBay schedules.',
  h1: 'eBay Vintage & Collectibles Profit Margin Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'eBay Official Selling Fees',
    url: 'https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822',
    citation: 'eBay Official Selling Fees & Final Value Fee Schedules for Collectibles & Antiques.',
  },
  overview:
    'Selling vintage goods, rare antiques, retro memorabilia, and estate collectibles on eBay is characterized by extraordinary gross margins (often 300% to 1,000% ROI on sourcing cost) combined with intense operational friction. Because vintage items are unique one-of-a-kind (OOAK) goods, merchants cannot automate listing templates; each item demands individual inspection, multi-angle flaw photography, comprehensive condition grading, and meticulous archival packaging. Sellers must navigate eBay’s 13.25% Final Value Fee (plus $0.30 per order), eBay Store subscription tiers, mandatory signature confirmation on orders of $750 or more, postal transit insurance, and the 30-day eBay Money Back Guarantee.',
  sections: [
    {
      id: 'ebay-final-value-fee-collectibles',
      title: 'eBay Final Value Fee Architecture for Collectibles and Antiques',
      body: `eBay charges sellers an all-inclusive Final Value Fee on completed transactions:

1. **Standard Final Value Fee (13.25% + $0.30)**: In most collectibles categories (including Antiques, Art, Pottery & Glass, Sports Memorabilia, and Vintage Clothing), eBay charges **13.25%** on the total amount of the sale (item price + shipping + sales tax collected) up to $7,500 per item, plus a fixed fee of **$0.30 per order** (or $0.40 if total order value is $10.00 or less). Portions of an order over $7,500 are billed at a discounted **2.35%**.
2. **eBay Store Subscription Discount**: Sellers subscribing to a Basic eBay Store ($21.95/month billed annually) receive lower Final Value Fees in select categories (typically 12.00% to 12.35%) and receive 1,000 free zero-insertion-fee listings monthly.
3. **Optional Promoted Listings Standard**: Many vintage sellers utilize Promoted Listings Standard to secure top search visibility, paying an additional dynamic ad fee (typically 3.0% to 7.0%) only when an item sells via an ad click within 30 days.`,
    },
    {
      id: 'sourcing-costs-and-individual-labor',
      title: 'Sourcing Economics: Estate Sales, Thrift Stores, and Listing Labor',
      body: `Unlike bulk retail arbitrage, vintage sourcing economics are heavily labor-centric:

- **Low Inventory Acquisition Costs**: Sourcing inventory at local estate sales, flea markets, thrift stores, and auction house box lots allows buyers to acquire items for **10% to 20% of fair market value**. An antique vase bought for $15.00 can easily sell on eBay for $120.00.
- **Individual Listing Labor Overhead**: Because each item is unique, photography, flaw identification, dimension measurement, research of maker marks, and listing description authoring require **15 to 30 minutes of labor per SKU**. Successful antique sellers must account for their effective hourly wage when evaluating lower-value items under $25.00.`,
    },
    {
      id: 'fragile-packaging-and-transit-insurance',
      title: 'Fragile Packaging, Postal Insurance, and Signature Confirmation Rules',
      body: `Protecting irreplaceable fragile items in transit is non-negotiable:

- **Double-Boxing and Archival Packaging**: Antiques require specialized packing materials: acid-free tissue paper, dense heavy-gauge bubble wrap, sturdy corrugated cardboard boxes, and packing peanuts ($2.00 to $6.00 per package). Fragile ceramics and glassware must be double-boxed with at least two inches of cushioning between boxes.
- **Signature Confirmation Mandate ($750+ Threshold)**: Under eBay Seller Protection rules, shipments valued at **$750.00 or greater** (including item price, shipping, and sales tax) strictly require **signature confirmation upon delivery**. Delivering a $1,000 item without adult signature confirmation forfeits 100% of seller protection against "Item Not Received" claims.
- **Third-Party Postal Insurance**: Carriers only cover up to $100 on standard Priority Mail. Sourcing third-party shipping insurance (Shipsurance or USPS insurance at roughly $1.00 per $100 of declared value) is vital for high-value collectibles.`,
    },
    {
      id: 'condition-grading-and-buyer-claims',
      title: 'Accurate Condition Grading and the eBay Money Back Guarantee',
      body: `Condition discrepancies represent the primary vector for vintage customer disputes:

- **eBay Item Not As Described (INAD) Claims**: Even if a seller lists an item with "No Returns Accepted," the eBay Money Back Guarantee overrides store policy if the buyer files an INAD claim. If a hairline crack, chip, or fabric fray was omitted from the listing description or photos, eBay forces the seller to pay return shipping and issue a 100% refund.
- **High-Resolution Defect Macro Photography**: Successful vintage dealers photograph every minor cosmetic flaw, patina variation, chip, and hallmark under bright, neutral studio lighting. Over-disclosing defects protects the shop from return claims and builds long-term collector trust.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $165.00 Mid-Century Modern Art Pottery Vase on eBay',
    scenario:
      'An antique dealer sources an authentic mid-century art pottery vase at an estate liquidation sale for $20.00 and sells it on eBay for $165.00 with $18.00 buyer-paid shipping ($183.00 total transaction).',
    inputs: {
      itemSalePrice: '$165.00',
      shippingChargedToBuyer: '$18.00',
      totalTransactionValue: '$183.00',
      estateSaleSourcingCost: '$20.00',
      ebayFinalValueFee: '13.25% on $183.00 ($24.25)',
      ebayFixedOrderFee: '$0.30',
      promotedListingsAdRate: '4.00% ($6.60)',
      heavyDutyDoubleBoxPackaging: '$4.50',
      actualUspsPriorityMailAndInsurance: '$15.80',
    },
    steps: [
      {
        label: 'Gross Customer Revenue',
        formula: '$165.00 item + $18.00 shipping',
        amount: '$183.00',
        note: 'Total customer payment.',
      },
      {
        label: 'Deduct eBay Final Value Fee (13.25%)',
        formula: '$183.00 total × 0.1325',
        amount: '$24.25',
        note: 'eBay percentage commission.',
      },
      {
        label: 'Deduct eBay Fixed Order Fee',
        formula: 'Standard per-order transaction fee',
        amount: '$0.30',
        note: 'Fixed platform fee.',
      },
      {
        label: 'Deduct Promoted Listings Fee (4%)',
        formula: '$165.00 item price × 0.04',
        amount: '$6.60',
        note: 'Standard promoted ad cost.',
      },
      {
        label: 'Deduct Estate Sale Sourcing Cost',
        formula: 'Initial inventory acquisition cash',
        amount: '$20.00',
        note: 'Direct inventory COGS.',
      },
      {
        label: 'Deduct Double-Box Packaging Materials',
        formula: 'Boxes, bubble wrap, packing peanuts',
        amount: '$4.50',
        note: 'Fragile archival packing.',
      },
      {
        label: 'Deduct Actual USPS Postage & Insurance',
        formula: 'Priority Mail with $200 insurance coverage',
        amount: '$15.80',
        note: 'Outbound carrier delivery charge.',
      },
      {
        label: 'Total Platform & Operating Expenses',
        formula: '$24.25 + $0.30 + $6.60 + $20.00 + $4.50 + $15.80',
        amount: '$71.45',
        note: 'Total deductions.',
      },
      {
        label: 'Net Profit Realized',
        formula: '$183.00 − $71.45',
        amount: '$111.55',
        note: 'Net profit: 60.96% of revenue.',
      },
    ],
    takeaway:
      'On an initial $20.00 inventory purchase, the seller nets $111.55 in clean profit after eBay fees ($31.15 total platform fees), shipping, and materials, generating an exceptional 557.75% Return on Investment (ROI).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Minimum Buy-It-Now Price for Antique Furniture',
    scenario:
      'An antique picker purchases a vintage solid walnut end table for $50.00. The seller budgets $35.00 for freight packaging and pallet supplies, and requires at least $150.00 in net profit. eBay fees total 13.25% + $0.30.',
    inputs: {
      sourcingCost: '$50.00',
      packagingCost: '$35.00',
      requiredNetProfit: '$150.00',
      ebayFeeRate: '13.25% + $0.30',
    },
    steps: [
      {
        label: 'Sum Total Required Cash Outlay & Profit',
        formula: '$50.00 + $35.00 + $150.00 + $0.30 (fixed fee)',
        amount: '$235.30',
        note: 'Target net dollar pool.',
      },
      {
        label: 'Divide by Net Retained Percentage',
        formula: '1.0 − 0.1325 (eBay fee)',
        amount: '0.8675',
        note: 'Net retained multiplier.',
      },
      {
        label: 'Calculate Minimum Listing Price',
        formula: '$235.30 ÷ 0.8675',
        amount: '$271.24',
        note: 'Minimum required sale price.',
      },
    ],
    takeaway:
      'To cover $85.00 in sourcing and packaging expenses and secure $150.00 in clear net profit, the dealer must list the vintage table at a minimum price of $271.24 on eBay.',
  },
  faqs: [
    {
      question: 'What is the official eBay Final Value Fee percentage for vintage items, antiques, and collectibles?',
      answer:
        'For standard sellers without an eBay Store, the Final Value Fee in Antiques, Collectibles, and Art is 13.25% of the total transaction amount (including item price, shipping, and sales tax) up to $7,500 per item, plus $0.30 per order. Portions over $7,500 are charged at 2.35%.',
    },
    {
      question: 'At what transaction dollar threshold is signature confirmation strictly required by eBay for seller protection?',
      answer:
        'eBay Seller Protection strictly mandates signature confirmation for all orders totaling $750.00 or more, including shipping and sales tax. If an item sells for $720.00 and shipping is $35.00 ($755.00 total), delivering without adult signature confirmation forfeits protection against non-delivery claims.',
    },
    {
      question: 'How does the eBay Money Back Guarantee apply when buyers request returns on vintage goods sold as-is?',
      answer:
        'Even if a listing specifies "No Returns," the eBay Money Back Guarantee overrides it if the buyer files an "Item Not as Described" claim. If the seller failed to mention or clearly photograph any chip, crack, restoration, or wear, eBay requires the seller to accept the return and pay return freight.',
    },
    {
      question: 'What specialized packaging and double-boxing protocols prevent transit damage for fragile antique porcelain and glass?',
      answer:
        'Fragile ceramics and antique glass should always be double-boxed. The item is first wrapped in acid-free tissue and heavy bubble wrap, placed inside an inner box, and that box is cushioned inside a larger outer carton with at least two inches of rigid packing peanuts on all six sides.',
    },
    {
      question: 'Do vintage sellers with variable one-off inventory pay listing insertion fees on eBay?',
      answer:
        'Standard eBay accounts receive 250 free zero-insertion-fee listings per calendar month. Basic Store subscribers receive 1,000 free monthly listings. Once the free listing allowance is exhausted, eBay charges an insertion fee of $0.35 per listing.',
    },
  ],
};

export default ebayVintageCollectiblesContent;
