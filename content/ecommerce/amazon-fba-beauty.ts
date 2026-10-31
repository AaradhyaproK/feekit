import type { PageContent } from '../types.ts';

export const amazonFbaBeautyContent: PageContent = {
  slug: 'amazon-fba-beauty',
  family: 'ecommerce',
  title: 'Amazon FBA Beauty & Personal Care Profit Calculator | FeeKit',
  metaDescription:
    'Calculate Amazon FBA beauty and skincare profit margins, 15% referral fees, FDA MoCRA compliance costs, and expiration date inventory management.',
  h1: 'Amazon FBA Beauty & Personal Care Profit & Fee Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Amazon Seller Central Official Fee Schedule (Beauty & Personal Care)',
    url: 'https://sell.amazon.com/pricing',
    citation: 'Amazon Seller Central Fee Schedule (Beauty 15% / 8% Tier, FBA Prep Requirements, and Expiration-Dated Inventory Policies).',
  },
  overview:
    'Selling beauty, skincare, and personal care products on Amazon Fulfillment by Amazon (FBA) is characterized by high gross margin potential (70% to 85%), lower physical customer return rates (3% to 5%), and strong recurring replenishment behavior. However, beauty brands face strict operational hurdles: Amazon category referral fees (15% for items over $10, 8% for items $10 or under), strict expiration date shelf-life policies, mandatory FDA Modernization of Cosmetics Regulation Act (MoCRA) compliance, fragile glass packaging prep, and competitive PPC advertising auctions.',
  sections: [
    {
      id: 'beauty-referral-and-fba-prep-fees',
      title: 'Amazon Beauty Referral Fee Structure and FBA Prep Requirements',
      body: `Amazon governs beauty and cosmetics under specific Seller Central fee rules:

1. **Category Referral Fee Tier (15.00% / 8.00%)**: For Beauty, Health & Personal Care products:
   - Items with a total sales price **greater than $10.00** incur a **15.00% referral fee** (with a $0.30 minimum).
   - Items priced at **$10.00 or lower** incur a reduced **8.00% referral fee**, designed to accommodate travel-size toiletries and lip balms.
2. **FBA Size Tiers and Fragile Prep Surcharges**: Skincare creams, serums, and cosmetics in bottles typically fit into the Small or Large Standard tier ($3.22 to $4.75). However, products packaged in glass dropper bottles or jars must undergo Amazon-compliant bubble wrap prep or pass a 3-foot drop test onto concrete. If Amazon performs bubble-wrapping at the warehouse, an additional **$0.40 to $0.80 prep fee per unit** applies.
3. **Liquid Double-Sealing Requirements**: Under Amazon packaging guidelines for liquids, bottles without a double seal (such as a screw cap plus an induction seal or heat-shrink band) must be sealed inside transparent polybags to prevent leakage onto other sellers' inventory.`,
    },
    {
      id: 'fda-mocra-compliance-and-cosmetic-safety',
      title: 'Regulatory Compliance: FDA MoCRA Mandates and Cosmetic Gating',
      body: `The US cosmetic regulatory landscape underwent historic reform with the enactment of the Modernization of Cosmetics Regulation Act (MoCRA):

- **FDA Facility Registration & Product Listing**: Under MoCRA, contract manufacturing facilities and brand owners must register their manufacturing facilities with the FDA and submit detailed cosmetic product listings (including ingredient formulations and manufacturing locations).
- **Safety Substantiation Mandate**: Brands must maintain documented scientific substantiation proving each cosmetic product and ingredient is safe for consumer use before commercial distribution.
- **Adverse Event Reporting**: MoCRA mandates that beauty brands report serious adverse health events (severe allergic reactions, chemical burns) to the FDA within 15 business days and maintain records for six years.
- **Amazon Beauty Category Gating**: To ungating beauty listings, Amazon requires verified commercial invoices from authorized distributors or Good Manufacturing Practice (GMP / ISO 22716) certificates from cosmetic contract labs.`,
    },
    {
      id: 'expiration-date-inventory-management',
      title: 'Expiration Date Tracking and FBA Disposal Economics',
      body: `Managing shelf life in Amazon fulfillment centers requires precise inventory cadence:

- **The 105-Day Inbound Expiration Rule**: Amazon requires that any topical or ingestible beauty product delivered to FBA warehouses must have a remaining shelf life of at least **105 days beyond the date of receipt**.
- **Automated FBA Disposal at 50 Days**: When an inventory batch reaches within **50 days of its expiration date**, Amazon automatically removes the units from sellable status and marks them for disposal or liquidation. Sellers who over-order inventory face complete loss of unit COGS.
- **Batch / Lot Number Traceability**: Every production run must carry human-readable lot numbers and expiration dates printed in standard format (YYYY-MM-DD) on both primary packaging and outer retail cartons.`,
    },
    {
      id: 'break-even-roas-beauty',
      title: 'Break-Even ROAS and High-Ticket Customer Lifetime Value (LTV)',
      body: `Beauty margins allow for aggressive advertising due to high pre-ad margins and repeat subscriptions:

- **Pre-Ad Contribution Margin**: On a $32.00 facial serum with $5.20 landed COGS, $4.80 referral fee (15%), $4.15 FBA fulfillment, and $1.20 storage/prep allocation, total non-ad costs are $15.35. The pre-ad margin is **$16.65**, or **52.03%**.
- **Break-Even ROAS Formula**:
  $$\\text{Break-Even ROAS} = \\frac{\\text{Retail Price}}{\\text{Pre-Ad Margin}} = \\frac{\\$32.00}{\\$16.65} = 1.92$$
- **Subscribe & Save (SnS) Economics**: Enrolling beauty products in Amazon Subscribe & Save offers customers a 5% to 15% discount in exchange for predictable, recurring monthly orders. The lifetime value of an SnS customer significantly reduces effective customer acquisition cost over 12 months.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $32.00 Organic Hyaluronic Acid Serum on Amazon FBA',
    scenario:
      'A private label skincare brand sells a 1 oz (30ml) facial serum in an amber glass dropper bottle for $32.00 under Amazon FBA. The product weighs 4 oz in its printed carton (Small Standard Tier).',
    inputs: {
      retailSellingPrice: '$32.00',
      landedCogs: '$5.20 (Serum formulation, glass bottle, carton, freight)',
      amazonReferralFeeRate: '15.00% ($4.80)',
      fbaFulfillmentFee: '$3.77 (Small Standard Tier)',
      fbaPrepAndStorage: '$0.85 per unit',
      blendedPpcAdSpendPerUnit: '$9.50 (TACoS 29.7%)',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'Customer purchase price',
        amount: '$32.00',
        note: 'Topline revenue deposited.',
      },
      {
        label: 'Deduct Amazon Referral Fee (15%)',
        formula: '$32.00 × 0.15',
        amount: '$4.80',
        note: 'Official Seller Central beauty category tier.',
      },
      {
        label: 'Deduct FBA Fulfillment Fee',
        formula: 'Small Standard 4 oz tier fulfillment',
        amount: '$3.77',
        note: 'Amazon logistics pick, pack, and shipping.',
      },
      {
        label: 'Deduct Landed COGS & Packaging',
        formula: 'Formula batching + amber glass bottle + dropper',
        amount: '$5.20',
        note: 'Unit production cost delivered to FBA.',
      },
      {
        label: 'Deduct Storage, Bubble Prep & Return Reserve',
        formula: 'Monthly storage + bubble wrap prep + 3% refund provision',
        amount: '$0.85',
        note: 'Operational logistics overhead.',
      },
      {
        label: 'Pre-Ad Contribution Profit',
        formula: '$32.00 − ($4.80 + $3.77 + $5.20 + $0.85)',
        amount: '$17.38',
        note: 'Pre-ad margin: 54.31% (Break-even ROAS: 1.84).',
      },
      {
        label: 'Deduct Blended Advertising Spend (TACoS)',
        formula: 'Sponsored Products & Brand Video PPC allocation',
        amount: '$9.50',
        note: '29.69% of retail price allocated to advertising.',
      },
      {
        label: 'Net Cash Profit Per Unit',
        formula: '$17.38 − $9.50',
        amount: '$7.88',
        note: 'Net margin: 24.63% of retail price.',
      },
    ],
    takeaway:
      'Because beauty formulation and packaging costs are low ($5.20, or 16.25% of retail), the brand achieves a high pre-ad margin of 54.31% (break-even ROAS of 1.84). After spending $9.50 on aggressive PPC advertising, the brand clears $7.88 in net profit per bottle (24.63% net margin).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Break-Even ROAS on a $28.00 Cosmetic Jar',
    scenario:
      'A beauty brand evaluates a facial moisturizer retailing for $28.00 with $4.50 landed COGS, a 15% referral fee ($4.20), $4.15 FBA fulfillment, and $1.00 prep/storage.',
    inputs: {
      retailSellingPrice: '$28.00',
      landedCogs: '$4.50',
      referralFee: '$4.20',
      fbaFee: '$4.15',
      prepStorage: '$1.00',
    },
    steps: [
      {
        label: 'Calculate Total Baseline Non-Ad Costs',
        formula: '$4.50 + $4.20 + $4.15 + $1.00',
        amount: '$13.85',
        note: 'Total non-advertising baseline cost floor.',
      },
      {
        label: 'Determine Pre-Ad Contribution Margin',
        formula: '$28.00 − $13.85',
        amount: '$14.15',
        note: 'Maximum dollar budget available for advertising.',
      },
      {
        label: 'Calculate Break-Even ROAS',
        formula: '$28.00 ÷ $14.15',
        amount: '1.98',
        note: 'Minimum required Return on Ad Spend.',
      },
    ],
    takeaway:
      'The brand breaks even at a 1.98 ROAS (an ACoS of 50.5%). If Sponsored Products campaigns achieve a 3.00 ROAS, the product generates $4.82 in net profit per unit on paid sales.',
  },
  faqs: [
    {
      question: 'What is Amazon’s referral fee for beauty and personal care products?',
      answer:
        'Amazon charges a 15.00% referral fee on Beauty and Personal Care products with a total sales price greater than $10.00 (with a $0.30 minimum). For items priced at $10.00 or lower, Amazon charges a reduced 8.00% referral fee.',
    },
    {
      question: 'What is the FDA MoCRA requirement for selling cosmetics on Amazon?',
      answer:
        'Under the Modernization of Cosmetics Regulation Act (MoCRA), cosmetic brand owners and manufacturing facilities must register with the FDA, submit cosmetic product listings with ingredient formulas, maintain documented safety substantiation, and report serious adverse health events within 15 business days.',
    },
    {
      question: 'What are Amazon’s expiration date rules for beauty products in FBA?',
      answer:
        'Amazon requires beauty products to arrive at FBA fulfillment centers with at least 105 days of remaining shelf life. Any inventory remaining within 50 days of expiration is automatically marked unsellable and scheduled for disposal by Amazon.',
    },
    {
      question: 'What packaging prep is required for glass beauty bottles on Amazon?',
      answer:
        'Glass containers must be protected by bubble wrap or packed inside a drop-tested protective box capable of surviving a 3-foot drop onto concrete without breaking. Liquid containers must also feature double-seals or polybags to prevent leakage.',
    },
    {
      question: 'How do you calculate break-even ROAS for beauty products on Amazon?',
      answer:
        'Subtract your landed COGS, the 15% Amazon referral fee, FBA fulfillment fee, and storage/prep overhead from your retail price to determine your pre-ad margin. Then divide your retail price by that margin. For example, a $32 product with $17.38 in pre-ad margin has a break-even ROAS of $32 ÷ $17.38 = 1.84.',
    },
  ],
};

export default amazonFbaBeautyContent;

