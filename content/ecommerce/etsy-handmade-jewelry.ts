import type { PageContent } from '../types.ts';

export const etsyHandmadeJewelryContent: PageContent = {
  slug: 'etsy-handmade-jewelry',
  family: 'ecommerce',
  title: 'Etsy Handmade Jewelry Fee & Profit Margin Calculator | FeeKit',
  metaDescription:
    'Calculate Etsy handmade jewelry fees and net profit margins with verified Etsy rates ($0.20 listing, 6.5% transaction, 3% + $0.25 payment, and 12-15% Offsite Ads).',
  h1: 'Etsy Handmade Jewelry Profit & Marketplace Fee Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Etsy Official Fees & Payments Policy',
    url: 'https://www.etsy.com/legal/fees/',
    citation: 'Etsy Legal Terms of Use, Fees & Payments Policy (Listing, Transaction, Payment Processing, and Offsite Ads Fees).',
  },
  overview:
    'Calculating net profit for handmade jewelry on Etsy requires accounting for layered marketplace deductions: the $0.20 listing fee, the 6.5% transaction fee (applied to both item price and shipping charged), the 3.0% + $0.25 Etsy Payments processing fee, potential 12% to 15% Offsite Ads fees, raw materials (gemstones, sterling silver, gold-fill findings), branded protective packaging, and shipping labels. While jewelry offers strong perceived value and markup potential, platform fee stacking can consume 12% to 27% of gross order value if unmonitored.',
  sections: [
    {
      id: 'etsy-fee-architecture-jewelry',
      title: 'Etsy Platform Fee Architecture: Listing, Transaction, and Payment Processing',
      body: `Etsy charges four primary fee categories codified in its official Fees & Payments Policy:

1. **Listing Fees ($0.20 per item)**: Charged when a listing is created or auto-renewed. Each listing lasts for four months or until the item sells. When selling multi-quantity items, Etsy automatically charges $0.20 each time a unit sells and auto-renews.
2. **Transaction Fees (6.50% of Total Order Value)**: Etsy charges a flat **6.50% fee** on the total sale price, explicitly including the retail item price, any shipping amount charged to the buyer, and gift-wrapping fees.
3. **Etsy Payments Processing Fees (3.00% + $0.25 in the US)**: For US domestic orders processed through Etsy Payments, Etsy charges **3.00% plus $0.25** per transaction. (International rates vary by country, e.g., 4.0% + £0.20 in the UK).
4. **Mandatory vs. Optional Offsite Ads (12% to 15%)**: Etsy advertises listings across Google, Facebook, Instagram, and Pinterest:
   - If your shop generated **under $10,000** in trailing 12-month gross sales, the program is optional; if left enabled, Etsy charges a **15.00% fee** on orders attributed to an ad click within 30 days.
   - If your shop exceeds **$10,000 in trailing 12-month sales**, participation is **mandatory for the lifetime of your shop**, and the fee is discounted to **12.00%** on attributed sales.`,
    },
    {
      id: 'handmade-jewelry-cost-drivers',
      title: 'Jewelry Cost Drivers: Precious Metals, Findings, Packaging, and Sizing',
      body: `Modeling handmade jewelry unit margins requires accounting for physical craft materials and customer touchpoints:

- **Raw Materials & Findings**: Precious metals (925 sterling silver wire, 14k gold-filled jump rings, earring posts, lobster clasps), semi-precious gemstones, and beading components. Sourcing wholesale from accredited jewelry suppliers typically brings raw material costs to 15% to 25% of retail price.
- **Branded Unboxing & Protective Packaging**: Delicate jewelry requires secure presentation packaging to prevent transit damage: anti-tarnish cotton-filled gift boxes, micro-fiber pouches, branded ribbon, polishing cloths, and thank-you cards ($1.50 to $3.50 per order).
- **Tracked Domestic Shipping & Bubble Mailers**: Shipping via USPS Ground Advantage with tracking typically costs $3.80 to $4.80 for parcels under 4 oz, plus padded bubble mailers and thermal shipping labels.
- **Ring Sizing & Chain Length Exchanges**: While jewelry return rates are generally low (2% to 4%), ring sizing exchanges are common. Merchants must establish clear return shipping policies to avoid absorbing double postage costs.`,
    },
    {
      id: 'offsite-ads-margin-impact',
      title: 'The Offsite Ads Dilemma: Modeling Worst-Case Platform Fees (24.5%+)',
      body: `Etsy’s Offsite Ads program introduces substantial margin variance:

- **Standard Platform Fee Baseline (9.50% + $0.45)**: On an organic Etsy sale without ads, combined platform fees equal 6.5% transaction + 3.0% payment processing + $0.20 listing + $0.25 payment fixed fee, totaling **9.50% + $0.45**. On a $50.00 necklace, organic Etsy fees are **$5.20** (10.40%).
- **Offsite Ads Impact (21.50% to 24.50% + $0.45)**: If that same $50.00 necklace is purchased by a buyer who clicked a Google Shopping ad within the last 30 days, Etsy adds a 15.00% Offsite Ads fee ($7.50). Total Etsy fees jump to **$12.70** (25.40% of the sale).
- **Pricing Strategy Recommendation**: Independent artisans must set retail prices high enough to absorb the 12% to 15% Offsite Ads fee and still yield a healthy profit, rather than pricing strictly for organic sales.`,
    },
    {
      id: 'regulatory-compliance-jewelry',
      title: 'Regulatory Compliance: FTC Jewelry Guides and Stamping Regulations',
      body: `Selling commercial jewelry in the United States requires compliance with consumer protection statutes:

- **FTC Jewelry Guides (16 CFR Part 23)**: Federal Trade Commission regulations strictly govern how metals and gemstones are described. Items labeled "sterling silver" must be at least 92.5% pure silver. Plated metals must specify plating thickness, and synthetic or lab-created gemstones must be clearly disclosed.
- **National Stamping Act Compliance**: Under 15 U.S.C. § 291, items stamped with a quality mark (e.g., "925" or "14K") must also bear a registered trademark of the manufacturer or seller to identify the source of the guarantee.
- **CPSIA Lead and Cadmium Safety Limits**: Children's jewelry is subject to strict Consumer Product Safety Improvement Act (CPSIA) limits regarding lead content (under 100 ppm) and heavy metals testing.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $65.00 Sterling Silver Gemstone Pendant Sold Organically on Etsy',
    scenario:
      'An artisan sells a handmade sterling silver pendant for $65.00 with free domestic shipping on Etsy. The customer finds the item organically through Etsy search (no Offsite Ads fee).',
    inputs: {
      retailSellingPrice: '$65.00',
      shippingChargedToBuyer: '$0.00 (Free Shipping)',
      rawMaterialsCost: '$12.50 (Silver wire, chain, natural stone)',
      brandedPackaging: '$2.25 (Box, pouch, polishing cloth)',
      uspsGroundAdvantageShipping: '$4.15',
      etsyListingFee: '$0.20',
      etsyTransactionFee: '6.50% ($4.23)',
      etsyPaymentsProcessingFee: '3.00% + $0.25 ($2.20)',
    },
    steps: [
      {
        label: 'Gross Order Revenue',
        formula: 'Customer checkout total',
        amount: '$65.00',
        note: 'Topline revenue deposited.',
      },
      {
        label: 'Deduct Etsy Listing Fee',
        formula: 'Official per-item listing charge',
        amount: '$0.20',
        note: 'Auto-renewal upon sale.',
      },
      {
        label: 'Deduct Etsy Transaction Fee (6.5%)',
        formula: '$65.00 × 0.065',
        amount: '$4.23',
        note: 'Applied to retail item total.',
      },
      {
        label: 'Deduct Etsy Payments Fee (3% + $0.25)',
        formula: '($65.00 × 0.03) + $0.25',
        amount: '$2.20',
        note: 'Payment processing deduction.',
      },
      {
        label: 'Deduct Raw Materials & Findings',
        formula: 'Sterling silver chain, wire, and gemstone',
        amount: '$12.50',
        note: 'Direct material COGS.',
      },
      {
        label: 'Deduct Packaging & Outbound Shipping',
        formula: '$2.25 (Box/pouch) + $4.15 (USPS postage)',
        amount: '$6.40',
        note: 'Fulfillment and branded presentation.',
      },
      {
        label: 'Total All Production & Marketplace Costs',
        formula: '$0.20 + $4.23 + $2.20 + $12.50 + $6.40',
        amount: '$25.53',
        note: 'Total non-labor cost per unit (39.28%).',
      },
      {
        label: 'Net Artisan Cash Profit',
        formula: '$65.00 − $25.53',
        amount: '$39.47',
        note: 'Net margin: 60.72% of retail price.',
      },
    ],
    takeaway:
      'On a $65.00 organic sale, Etsy platform fees total $6.63 (10.20%), physical production and shipping absorb $18.90 (29.08%), leaving $39.47 in artisan net profit (60.72% net margin). If sold via a 15% Offsite Ad, profit remains strong at $29.72 (45.72% net margin).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Minimum Retail Price to Clear $30 Net Profit',
    scenario:
      'An artisan creates a handmade bracelet with $10.00 in raw materials and $5.00 in packaging/shipping, aiming for exactly $30.00 net profit after Etsy fees ($0.45 fixed + 9.5% variable).',
    inputs: {
      targetNetProfit: '$30.00',
      totalMaterialAndShippingCosts: '$15.00',
      etsyFixedFees: '$0.45 ($0.20 listing + $0.25 processing)',
      etsyVariableFeeRate: '9.50% (6.5% transaction + 3.0% processing)',
    },
    steps: [
      {
        label: 'Calculate Required Pre-Variable Revenue',
        formula: '$30.00 (Profit) + $15.00 (Costs) + $0.45 (Fixed Fees)',
        amount: '$45.45',
        note: 'Cash required before percentage fees.',
      },
      {
        label: 'Account for 9.5% Variable Etsy Fees',
        formula: '$45.45 ÷ (1 − 0.095)',
        amount: '$50.22',
        note: 'Mathematically exact break-even pricing floor.',
      },
      {
        label: 'Recommended Commercial Retail Price',
        formula: 'Rounded to standard commercial tier',
        amount: '$52.00',
        note: 'Guarantees $31.61 net profit after all fees.',
      },
    ],
    takeaway:
      'To pocket $30.00 net on a piece costing $15.00 to make and ship, the artisan cannot simply charge $45.00. Factoring in Etsy’s fixed and variable fees requires pricing the item at $52.00.',
  },
  faqs: [
    {
      question: 'What are the total fees for selling handmade items on Etsy?',
      answer:
        'Standard organic Etsy fees consist of a $0.20 listing fee, a 6.5% transaction fee on total order value (including shipping charged), and a 3.0% + $0.25 payment processing fee (in the US), totaling approximately 9.5% + $0.45 per transaction. If an order comes from an Offsite Ad, an additional 12% to 15% fee applies.',
    },
    {
      question: 'Can you opt out of Etsy Offsite Ads?',
      answer:
        'If your Etsy shop has made less than $10,000 in gross sales over the preceding 365 days, you can opt out of Offsite Ads in your shop settings. However, once your shop crosses the $10,000 threshold, participation becomes mandatory for the lifetime of your shop, and you pay a 12% fee on ad-attributed sales.',
    },
    {
      question: 'Does Etsy charge its 6.5% transaction fee on shipping charges?',
      answer:
        'Yes. Etsy charges the 6.5% transaction fee on the full order amount, which includes the item price, shipping fees charged to the buyer, and gift-wrapping charges. This policy prevents sellers from listing items for $1.00 with $50.00 in shipping to avoid fees.',
    },
    {
      question: 'How often does Etsy charge the $0.20 listing fee?',
      answer:
        'Etsy charges $0.20 when you create a listing, every 4 months when an unsold listing renews, and every time an item sells from a multi-quantity listing to auto-renew the remaining inventory.',
    },
    {
      question: 'What are the main FTC legal requirements for selling jewelry online?',
      answer:
        'Under FTC Jewelry Guides (16 CFR Part 23), you must accurately disclose precious metal content (e.g., stamping "925" only if it is at least 92.5% silver), specify whether stones are natural or synthetic/lab-created, and adhere to CPSIA safety testing if marketing jewelry for children under 12.',
    },
  ],
};

export default etsyHandmadeJewelryContent;

