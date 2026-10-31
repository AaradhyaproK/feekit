import type { PageContent } from '../types.ts';

export const amazonFbaPrivateLabelContent: PageContent = {
  slug: 'amazon-fba-private-label',
  family: 'ecommerce',
  title: 'Amazon FBA Private Label Profit Margin & ROAS Calculator | FeeKit',
  metaDescription:
    'Calculate Amazon FBA private label net margins, break-even ROAS, and fulfillment fees. Sourced from official Amazon Seller Central 15% referral fee schedules and size-tier metrics.',
  h1: 'Amazon FBA Private Label Profit & Break-Even ROAS Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Amazon Seller Central Official Fee Schedule',
    url: 'https://sell.amazon.com/pricing',
    citation: 'Amazon Seller Central Selling on Amazon Fee Schedule (Category Referral Fees & FBA Fulfillment Fee Tables).',
  },
  overview:
    'Calculating private label profitability on Amazon Fulfillment by Amazon (FBA) requires accounting for layered marketplace expenses: category referral fees (typically 15%), dimensional weight FBA fulfillment fees, inbound ocean and domestic freight, monthly inventory storage, sponsored ads (PPC), and customer return depreciation. While gross product margins from overseas contract manufacturers frequently appear attractive at 70% to 80%, net take-home margins after Amazon platform deductions typically land between 15% and 25%.',
  sections: [
    {
      id: 'amazon-fee-structure-private-label',
      title: 'Amazon Private Label Fee Architecture: Referral vs. FBA Fulfillment',
      body: `Selling private label products on Amazon FBA involves two non-negotiable platform fee streams governed by official Seller Central schedules:

1. **Category Referral Fees (15.00% Standard)**: Amazon charges a percentage of the total sales price (including item price, shipping charged to the customer, and gift-wrapping). For the vast majority of private label categories—including Home & Kitchen, Sports & Outdoors, Pet Supplies, and Office Products—the referral fee is a flat **15.00%** (with an individual minimum referral fee of $0.30 per item).
2. **FBA Size-Tier Pick & Pack Fees**: Amazon FBA fulfillment fees are determined strictly by the packaged item’s **unit weight versus dimensional weight** ($L × W × H ÷ 139$). A standard small item (under 16 oz) incurs approximately $3.22 to $3.77 in pick-and-pack fulfillment, while large standard items (1 to 2 lbs) incur $5.40 to $6.10+.
3. **Monthly & Aged Inventory Storage Fees**: Standard storage runs $0.78 to $0.87 per cubic foot from January to September, surging to **$2.40 per cubic foot** during Q4 peak holiday season (October–December). Incurring aged inventory surcharges for stock held over 180 days rapidly destroys product margins.
4. **Inbound Placement Service Fees**: Under Amazon's updated logistics schedule, sellers incur inbound placement fees ($0.21 to $0.68+ per unit) unless splitting shipments across multiple regional fulfillment centers.`,
    },
    {
      id: 'cost-of-goods-and-freight-drivers',
      title: 'Private Label Unit Economics: Landed COGS, Ocean Freight, and Customs',
      body: `Accurate private label margin modeling starts with true landed Cost of Goods Sold (COGS):

- **Factory Ex-Works (EXW) or FOB Unit Cost**: The direct unit manufacturing cost from your contract manufacturing partner (typically 20% to 28% of target retail price).
- **Ocean Container & Air Freight**: Freight forwarding expenses covering container drayage, ocean vessel transit, port terminal handling charges (THC), and customs clearance brokerage. For ocean shipping, freight adds roughly $0.80 to $2.50 per unit depending on cubic volume (CBM).
- **Customs Tariffs & Duties**: Section 301 tariffs or standard US Harmonized Tariff Schedule (HTS) customs duties applied against the commercial invoice value at port of entry.
- **Pre-Shipment Quality Inspections**: Professional third-party quality control (QC) inspections at the overseas factory ($300 per inspection) to prevent defective production runs from entering Amazon fulfillment centers.`,
    },
    {
      id: 'break-even-roas-and-ppc-modeling',
      title: 'Amazon PPC Advertising Economics: Break-Even ACoS and ROAS Formula',
      body: `Amazon is an auction-driven marketplace where sponsored ads are mandatory for organic ranking velocity:

- **Pre-Ad Operating Margin**: Calculated as $\\text{Selling Price} - (\\text{Landed COGS} + \\text{Amazon Referral Fee} + \\text{FBA Fulfillment Fee} + \\text{Estimated Returns})$. If a $40.00 product has total non-advertising costs of $26.00, the pre-ad margin is $14.00, or **35.00%**.
- **Break-Even ACoS (Advertising Cost of Sales)**: Your break-even ACoS is mathematically identical to your pre-ad margin percentage:
  $$\\text{Break-Even ACoS} = \\frac{\\text{Pre-Ad Margin}}{\\text{Retail Price}} = \\frac{\\$14.00}{\\$40.00} = 35.00\\%$$
- **Break-Even ROAS (Return on Ad Spend)**: The inverse of break-even ACoS:
  $$\\text{Break-Even ROAS} = \\frac{1}{\\text{Break-Even ACoS}} = \\frac{1}{0.35} = 2.86$$
- **Target Commercial ROAS**: To achieve a 15% net profit margin on ad-driven sales, the target Target ACoS must not exceed $20.00\\%$, requiring a commercial ROAS of **5.00**.`,
    },
    {
      id: 'compliance-and-returns-depreciation',
      title: 'Customer Return Loss and Amazon Brand Registry Protection',
      body: `Private label sellers face category-specific risk factors that must be factored into unit financial modeling:

- **Customer Return Depreciation**: Amazon's liberal 30-day customer return policy means 3% to 6% of units are returned. In non-apparel categories, roughly 50% of returned items can be repackaged; the remaining 50% must be liquidated or disposed of, incurring removal order fees ($0.97 to $2.80/unit) and total loss of unit COGS.
- **Amazon Brand Registry Compliance**: Securing a registered trademark with the USPTO and enrolling in Amazon Brand Registry is mandatory to access A+ Content, Brand Story modules, Vine reviewer enrollments, and Project Zero anti-counterfeiting protection.
- **Product Safety Certification**: Children's products, toys, and electronics require Children’s Product Certificates (CPC) or FCC/UL lab testing reports from ISO 17025 accredited testing laboratories before listings can be activated.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $35.00 Home & Kitchen Private Label Product on Amazon FBA',
    scenario:
      'A private label merchant sells an insulated stainless steel culinary container for $35.00 on Amazon.com under Amazon FBA. The product weighs 14 oz in packaging (Large Standard Tier).',
    inputs: {
      retailSellingPrice: '$35.00',
      landedCogsPerUnit: '$8.50 (Factory + Ocean Freight)',
      amazonReferralFeeRate: '15.00% ($5.25)',
      fbaPickAndPackFee: '$4.75 (Large Standard Tier)',
      storageAndInboundAllocated: '$0.75 per unit',
      targetAdSpendPerUnit: '$7.00 (TACoS 20%)',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'Customer purchase price',
        amount: '$35.00',
        note: 'Topline revenue deposited.',
      },
      {
        label: 'Deduct Amazon Referral Fee (15%)',
        formula: '$35.00 × 0.15',
        amount: '$5.25',
        note: 'Official Seller Central category referral fee.',
      },
      {
        label: 'Deduct FBA Pick & Pack Fee',
        formula: 'Large Standard 14 oz tier fulfillment',
        amount: '$4.75',
        note: 'Amazon logistics handling and delivery.',
      },
      {
        label: 'Deduct Landed COGS & Freight',
        formula: 'Manufacturing invoice + ocean container freight',
        amount: '$8.50',
        note: 'Unit product cost delivered to Amazon warehouse.',
      },
      {
        label: 'Deduct Storage, Inbound & Return Provision',
        formula: 'Storage allocation + 4% return depreciation',
        amount: '$1.50',
        note: 'Operational logistics overhead.',
      },
      {
        label: 'Pre-Ad Contribution Profit',
        formula: '$35.00 − ($5.25 + $4.75 + $8.50 + $1.50)',
        amount: '$15.00',
        note: 'Pre-ad margin: 42.86% (Break-even ROAS: 2.33).',
      },
      {
        label: 'Deduct Blended Advertising Spend (TACoS)',
        formula: 'Sponsored Products PPC allocation',
        amount: '$7.00',
        note: '20% of retail price allocated to advertising.',
      },
      {
        label: 'Net Cash Profit Per Unit',
        formula: '$15.00 − $7.00',
        amount: '$8.00',
        note: 'Net margin: 22.86% of retail price.',
      },
    ],
    takeaway:
      'On a $35.00 private label sale, Amazon fees absorb $10.00 (28.57%), COGS absorbs $8.50 (24.29%), and advertising absorbs $7.00 (20.00%), leaving a clean net profit of $8.00 (22.86% net margin). The break-even ROAS is 2.33.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Break-Even ROAS from Pre-Ad Unit Margin',
    scenario:
      'An Amazon FBA seller evaluates an electronics accessory retailing for $50.00 with total landed COGS of $15.00, a 15% referral fee ($7.50), and an FBA fulfillment fee of $5.50.',
    inputs: {
      retailSellingPrice: '$50.00',
      landedCogs: '$15.00',
      referralFee: '$7.50',
      fbaFee: '$5.50',
    },
    steps: [
      {
        label: 'Calculate Total Non-Ad Costs',
        formula: '$15.00 (COGS) + $7.50 (Referral) + $5.50 (FBA)',
        amount: '$28.00',
        note: 'Total baseline platform and production cost.',
      },
      {
        label: 'Determine Pre-Ad Net Margin Dollars',
        formula: '$50.00 − $28.00',
        amount: '$22.00',
        note: 'Pre-advertising contribution dollar pool.',
      },
      {
        label: 'Calculate Break-Even ACoS Percentage',
        formula: '$22.00 ÷ $50.00',
        amount: '44.00%',
        note: 'Maximum ad spend percentage before losing money.',
      },
      {
        label: 'Calculate Break-Even ROAS',
        formula: '$50.00 ÷ $22.00 (or 1 ÷ 0.44)',
        amount: '2.27',
        note: 'Minimum required Return on Ad Spend.',
      },
    ],
    takeaway:
      'If the seller’s Sponsored Products campaigns achieve an average ROAS greater than 2.27 (an ACoS under 44%), the product is profitable on ad-driven sales. An ad campaign operating at a 3.50 ROAS generates $7.71 net profit per unit.',
  },
  faqs: [
    {
      question: 'What is the standard Amazon FBA referral fee for private label products?',
      answer:
        'For most product categories (including Home & Kitchen, Sports, Toys, and Office Supplies), Amazon charges a standard referral fee of 15% of the total sales price. Certain categories have different rates, such as Consumer Electronics (8%) or Clothing (17%).',
    },
    {
      question: 'How do you calculate break-even ROAS for an Amazon FBA product?',
      answer:
        'To calculate break-even ROAS, subtract your landed COGS, Amazon referral fee, and FBA fulfillment fees from your retail selling price to find your pre-ad margin. Then divide the retail selling price by that margin. For example, a $40 product with $14 in pre-ad margin has a break-even ROAS of $40 ÷ $14 = 2.86.',
    },
    {
      question: 'What is the difference between ACoS and TACoS on Amazon?',
      answer:
        'ACoS (Advertising Cost of Sales) measures ad spend divided by direct ad-attributed sales. TACoS (Total Advertising Cost of Sales) measures ad spend divided by total gross sales (including organic sales). A healthy mature private label brand typically targets an ACoS under 30% and a TACoS between 10% and 15%.',
    },
    {
      question: 'What are the main private label cost drivers that beginners overlook?',
      answer:
        'Commonly overlooked expenses include Q4 holiday storage fee surges (jumping from $0.87 to $2.40/cu ft), customer return disposal and unsellable inventory write-offs (3%–6% return rate), inbound placement fees, customs clearance and port demurrage, and trademark legal fees for Brand Registry.',
    },
    {
      question: 'What is a realistic net profit margin for an Amazon private label business?',
      answer:
        'While gross product margins often exceed 70%, net take-home profit margins after Amazon referral fees (15%), FBA fulfillment (12%–18%), landed freight (20%–25%), and PPC ad spend (15%–20%) typically range between 15% and 25% for successful private label brands.',
    },
  ],
};

export default amazonFbaPrivateLabelContent;

