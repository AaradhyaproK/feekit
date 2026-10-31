import type { PageContent } from '../types.ts';

export const amazonFbaFeeCalculatorContent: PageContent = {
  slug: 'amazon-fba-fee-calculator',
  family: 'ecommerce',
  title: 'Amazon FBA Fee & Net Profit Calculator | 2026 Size Tiers & Referral Rates | FeeKit',
  metaDescription:
    'Calculate Amazon FBA fees, category referral rates, size-tier pick and pack costs, Q4 storage surges, and inbound placement fees. Sourced from official Amazon Seller Central schedules.',
  h1: 'Amazon FBA Fee & Net Profit Margin Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Amazon Seller Central Official Fee Schedule',
    url: 'https://sell.amazon.com/pricing',
    citation: 'Amazon Seller Central Selling on Amazon Fee Schedule (Category Referral Fees & FBA Fulfillment Fee Tables).',
  },
  overview:
    'Accurately estimating Amazon Fulfillment by Amazon (FBA) platform deductions is the cornerstone of e-commerce profitability on Amazon.com. While Amazon provides Prime shipping eligibility, customer service, and access to over 300 million active customer accounts, Seller Central fee architecture contains multiple layered charges: category referral fees (typically 15.00%), unit size-tier pick-and-pack fulfillment fees based on dimensional weight, monthly inventory storage ($0.78 to $2.40 per cubic foot), inbound placement service fees ($0.21 to $0.68+ per unit), and aged inventory surcharges. Calculating exact fee allocations before manufacturing or purchasing inventory prevents costly margin erosion.',
  sections: [
    {
      id: 'amazon-fba-fulfillment-size-tiers',
      title: 'FBA Size Tiers and Dimensional Weight Pick-and-Pack Fees',
      body: `Amazon FBA fulfillment fees are strictly determined by package dimensions and weight:

1. **Small Standard Size (Under 16 oz)**: Items measuring under $15 \times 12 \times 0.75$ inches incur fulfillment fees of **$3.22 to $3.77** per unit depending on exact shipping weight in ounces.
2. **Large Standard Size (Up to 20 lbs)**: Items under $18 \times 14 \times 8$ inches are billed based on the greater of actual unit weight or **dimensional weight** ($L \times W \times H \div 139$):
   - Under 4 oz: $3.86
   - 4 to 8 oz: $4.08
   - 8 to 12 oz: $4.15
   - 12 to 16 oz: $4.75
   - 1 to 2 lbs: $5.40 to $6.10 (+ $0.38 per half-pound above 2 lbs)
3. **Oversize Fulfillment Tiers**: Items exceeding 20 lbs or 18 inches on their longest side trigger Small Oversize ($9.73+), Medium Oversize ($19.05+), or Large Oversize ($89.98+) fulfillment schedules.`,
    },
    {
      id: 'inbound-placement-and-storage-fees',
      title: 'Inbound Placement Service Fees and Q4 Storage Surcharges',
      body: `Recent Amazon logistics policy updates have introduced granular warehouse charges:

- **Inbound Placement Service Fees**: Implemented to reflect regional distribution costs, Amazon charges an inbound placement fee of **$0.21 to $0.68 per standard unit** if sellers ship inventory to a single national receiving hub. Sellers can avoid or minimize this fee by selecting distributed inventory placement and shipping split shipments to multiple regional fulfillment centers.
- **Monthly Inventory Storage Rates**:
  - **Standard Months (January – September)**: **$0.78 per cubic foot** for standard-size items; $0.56 for oversize.
  - **Q4 Peak Holiday Season (October – December)**: Rates surge by more than 200% to **$2.40 per cubic foot** for standard-size items ($1.40 for oversize).
- **Aged Inventory Surcharges (181+ Days)**: Inventory stored in Amazon warehouses past 180 days incurs steep tiered aged inventory surcharges, escalating from $0.50 per cubic foot up to $6.90 per cubic foot past 365 days.`,
    },
    {
      id: 'category-referral-fee-breakdown',
      title: 'Category Referral Fee Variations and Minimums',
      body: `In addition to logistics fulfillment, Amazon charges a percentage referral fee on every sale:

- **15.00% Standard Categories**: Most Amazon categories—Home & Kitchen, Toys & Games, Pet Supplies, Office Products, Sports & Outdoors, and Tools—incur a flat **15.00% referral fee** with an individual minimum of $0.30 per item.
- **Variable Category Exceptions**:
  - **Consumer Electronics**: **8.00%** on the entire sale price.
  - **Clothing & Accessories**: **17.00%** referral fee.
  - **Beauty & Grocery**: 8.00% for items priced at or below $15.00; 15.00% for portions above $15.00.
  - **Jewelry**: 20.00% on the first $250; 5.00% on portions above $250.`,
    },
    {
      id: 'fba-vs-fbm-cost-comparison',
      title: 'FBA vs. Merchant Fulfilled (FBM) Unit Economic Decision Matrix',
      body: `Sellers must strategically evaluate whether to use FBA or handle fulfillment in-house (FBM):

- **When FBA Wins**: For lightweight, compact items (under 2 lbs) selling at high velocity, Amazon FBA is vastly cheaper than commercial retail postal shipping. FBA includes Prime badge eligibility, higher Buy Box win rates, and Amazon handles customer return processing and customer service.
- **When FBM (Merchant Fulfilled) Wins**: For large, bulky, heavy products (over 20 lbs) or low-turnover specialty catalog items, FBM combined with a 3PL partner or private warehouse avoids steep FBA oversize fulfillment charges and Q4 holiday storage surges.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $29.99 Silicone Kitchen Utensil Set (Large Standard, 14 oz)',
    scenario:
      'A seller lists a 6-piece silicone kitchen utensil set on Amazon.com for $29.99. The packaged product measures 14 × 6 × 3 inches and weighs 14 oz (Large Standard Tier).',
    inputs: {
      retailPrice: '$29.99',
      landedManufacturingCogs: '$6.50 (Factory invoice + ocean container freight)',
      amazonReferralFee: '15.00% ($4.50)',
      fbaPickAndPackFee: '$4.75 (Large Standard 14 oz tier)',
      inboundPlacementServiceFee: '$0.27 per unit',
      allocatedStorageJanSep: '$0.35 per unit (based on 0.146 cu ft)',
      ppcAdvertisingTacosAllocation: '$5.00 per unit (16.67% of retail price)',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'Customer purchase price',
        amount: '$29.99',
        note: 'Total customer payment deposited.',
      },
      {
        label: 'Deduct Amazon Referral Fee (15%)',
        formula: '$29.99 × 0.15',
        amount: '$4.50',
        note: 'Category marketplace commission.',
      },
      {
        label: 'Deduct FBA Pick & Pack Fee',
        formula: 'Large Standard 14 oz fulfillment schedule',
        amount: '$4.75',
        note: 'Amazon logistics delivery.',
      },
      {
        label: 'Deduct Inbound Placement Fee',
        formula: 'Standard inbound service fee',
        amount: '$0.27',
        note: 'Warehouse intake allocation.',
      },
      {
        label: 'Deduct Landed Manufacturing COGS',
        formula: 'Factory production & ocean freight',
        amount: '$6.50',
        note: 'Delivered inventory base.',
      },
      {
        label: 'Deduct Monthly Warehouse Storage',
        formula: 'Allocated cubic foot storage',
        amount: '$0.35',
        note: 'Non-peak warehouse storage.',
      },
      {
        label: 'Pre-Ad Contribution Profit',
        formula: '$29.99 − ($4.50 + $4.75 + $0.27 + $6.50 + $0.35)',
        amount: '$13.62',
        note: 'Pre-ad margin: 45.42% (Break-even ROAS: 2.20).',
      },
      {
        label: 'Deduct PPC Advertising Allocation',
        formula: 'Sponsored Products ad spend per unit',
        amount: '$5.00',
        note: 'Digital advertising cost.',
      },
      {
        label: 'Net Unit Operating Cash Profit',
        formula: '$13.62 − $5.00',
        amount: '$8.62',
        note: 'Net profit: 28.74% margin.',
      },
    ],
    takeaway:
      'On a $29.99 sale, Amazon platform and logistics fees total $9.87 (32.91%). After landed manufacturing COGS ($6.50) and advertising ($5.00), the seller earns a clean net operating profit of $8.62 per unit (28.74% net margin).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Break-Even Retail Price to Clear 20% Net Margin',
    scenario:
      'An Amazon seller imports a stainless steel travel tumbler with $7.20 landed COGS. FBA fulfillment is $5.10, inbound placement is $0.25, storage is $0.40, and estimated PPC ad spend is $4.50 ($17.45 total non-percentage costs). The category referral fee is 15.00%. The seller targets a 20.00% net margin.',
    inputs: {
      totalNonPercentageCosts: '$17.45',
      amazonReferralRate: '15.00%',
      targetNetMargin: '20.00%',
    },
    steps: [
      {
        label: 'Sum Total Fixed & Logistics Costs',
        formula: '$7.20 (COGS) + $5.10 (FBA) + $0.25 (Inbound) + $0.40 (Storage) + $4.50 (Ad)',
        amount: '$17.45',
        note: 'Total non-percentage dollar deductions.',
      },
      {
        label: 'Determine Percentage Multiplier',
        formula: '1.0 − (0.15 referral fee + 0.20 target margin)',
        amount: '0.65',
        note: 'Residual net multiplier.',
      },
      {
        label: 'Calculate Required Retail Price',
        formula: '$17.45 ÷ 0.65',
        amount: '$26.85',
        note: 'Minimum required Amazon retail price.',
      },
    ],
    takeaway:
      'To cover $17.45 in fixed logistics, manufacturing, and advertising costs while paying Amazon\'s 15% referral fee and earning a 20% net profit margin, the seller must price the product at a minimum of $26.85 on Amazon.com.',
  },
  faqs: [
    {
      question: 'How does Amazon determine whether an FBA package falls into the Small Standard, Large Standard, or Oversize fulfillment tier?',
      answer:
        'Amazon categorizes items based on dimensions and weight. Small Standard items measure under 15 × 12 × 0.75 inches and weigh under 16 oz. Large Standard items measure up to 18 × 14 × 8 inches and weigh under 20 lbs. Anything exceeding these measurements is classified into Oversize tiers.',
    },
    {
      question: 'What is Amazon\'s inbound placement service fee and how can sellers minimize or eliminate it?',
      answer:
        'The inbound placement fee charges $0.21 to $0.68+ per unit when sellers send inventory to a single receiving center. Sellers can minimize or eliminate this fee by choosing distributed inventory placement, which splits inbound shipments across multiple regional fulfillment centers.',
    },
    {
      question: 'How much do Amazon FBA monthly inventory storage fees increase during the fourth quarter holiday surge?',
      answer:
        'From January to September, standard-size storage costs $0.78 per cubic foot per month. During Q4 (October through December), fees surge more than 200% to $2.40 per cubic foot per month, making rapid inventory turnover vital during the holiday quarter.',
    },
    {
      question: 'What aged inventory surcharges apply to products stored in Amazon fulfillment centers beyond 180 days?',
      answer:
        'Inventory held between 181 and 210 days incurs an aged inventory surcharge of $0.50 per cubic foot, escalating monthly up to $6.90 per cubic foot for units stored over 365 days. Sellers avoid this by creating removal or liquidation orders before reaching 180 days.',
    },
    {
      question: 'What cost variables determine whether a heavy or bulky item is more profitable via Amazon FBA or Merchant Fulfilled (FBM)?',
      answer:
        'For lightweight items under 2 lbs, FBA is almost always cheaper due to Amazon\'s massive logistics volume discounts. However, for bulky items over 20 lbs or items with low sales velocity, FBM avoids expensive oversize fulfillment tiers and steep Q4 storage fees.',
    },
  ],
};

export default amazonFbaFeeCalculatorContent;
