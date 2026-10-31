import type { PageContent } from '../types.ts';

export const amazonFbaApparelContent: PageContent = {
  slug: 'amazon-fba-apparel',
  family: 'ecommerce',
  title: 'Amazon FBA Apparel Fee & Profit Calculator (17% Referral) | FeeKit',
  metaDescription:
    'Calculate Amazon FBA clothing and apparel net profit margins, 17% referral fees, sizing return processing fees, and seasonal storage overhead.',
  h1: 'Amazon FBA Apparel Profit & Fee Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Amazon Seller Central Official Fee Schedule (Clothing & Accessories)',
    url: 'https://sell.amazon.com/pricing',
    citation: 'Amazon Seller Central Fee Schedule (Apparel 17% Referral Tier, FBA Size Tiers, and Customer Return Processing Fees).',
  },
  overview:
    'Selling clothing, shoes, and fashion accessories on Amazon Fulfillment by Amazon (FBA) operates under demanding unit economics: a 17.00% category referral fee, dimensional weight FBA fulfillment charges, specialized apparel customer return processing fees, and industry-leading return rates of 15% to 25% driven by customer sizing exchanges. While apparel offers high brand affinity and recurring purchase behavior, sellers must model return reverse logistics and seasonal aged inventory surcharges to protect net margins.',
  sections: [
    {
      id: 'apparel-referral-and-fulfillment-fees',
      title: 'Amazon 17% Apparel Referral Tier and Sizing Return Processing Fees',
      body: `Amazon enforces specific fee policies on clothing and accessories governed by Seller Central schedules:

1. **Category Referral Fee (17.00%)**: Under Amazon fee schedules, standard Clothing & Accessories items priced over $15.00 incur a **17.00% referral fee** on the total sales price (with a $0.30 minimum). This is the highest standard referral fee tier on Amazon, requiring substantial gross retail markups.
2. **Apparel FBA Size-Tier Pick & Pack Fees**: Packaged garments (folded shirts, jeans, activewear in polybags) typically fall under Large Standard Tier (under 16 oz to 2 lbs), with FBA fulfillment fees running between $4.15 and $5.95 per unit.
3. **Apparel Customer Return Processing Fee**: Under Amazon's fulfillment policy, because Amazon offers customers free returns on apparel and footwear, Amazon charges sellers an **Apparel Return Processing Fee** on customer-returned units (typically equal to the original FBA fulfillment fee). When a customer returns a dress, the seller pays for fulfillment twice.`,
    },
    {
      id: 'apparel-returns-and-wardrobing-economics',
      title: 'Return Dynamics: Managing the 15% to 25% Apparel Return Rate',
      body: `Clothing brands face unique customer purchasing habits that erode margins:

- **The "Wardrobing" Phenomenon**: E-commerce fashion shoppers routinely purchase two or three different sizes of the same garment with the explicit intention of keeping only one and returning the rest. This creates baseline return rates of **15% to 25%** in women's and men's apparel.
- **Unsellable Returned Inventory**: Returned garments frequently suffer from missing tags, makeup smudges, pet hair, or opened polybags, causing Amazon warehouse staff to grade them as "Customer Damaged" or "Unfulfillable".
- **Reverse Logistics Removal Costs**: Sellers must submit automated FBA removal orders ($1.45 to $2.80/unit) to inspect, steam, re-fold, and re-bag returned inventory at third-party prep centers before re-depositing into FBA stock.`,
    },
    {
      id: 'regulatory-compliance-apparel',
      title: 'Regulatory Compliance: FTC Care Labeling and Textile Identification',
      body: `Commercial apparel sold in the US must strictly comply with federal consumer protection standards:

- **FTC Textile Fiber Products Identification Act (16 CFR Part 303)**: Every garment must carry a permanently affixed label disclosing exact fiber percentages in descending order (e.g., "85% Polyester, 15% Spandex"), country of origin, and the manufacturer’s registered identification number (RN number) or legal business name.
- **Care Labeling Rule (16 CFR Part 423)**: Garments must include permanent instructions on washing, drying, bleaching, and ironing care.
- **Polybag Suffocation Warning Mandate**: Under Amazon packaging guidelines, any polybag with an opening of 5 inches or larger must display a printed suffocation warning in prominent typography.`,
    },
    {
      id: 'break-even-roas-apparel',
      title: 'Break-Even ROAS and Seasonal Inventory Holding Costs',
      body: `Apparel profitability depends on fast inventory turnover to avoid steep holding penalties:

- **Aged Inventory Surcharges**: Fashion is seasonal. Inventory held in Amazon fulfillment centers over 180 days incurs punitive aged inventory surcharges ($0.50 to $7.80 per cubic foot per month), rapidly destroying product margins.
- **Break-Even ROAS Formula**: Because the 17% referral fee and 20% return provision absorb substantial margin, pre-ad margins are narrower:
  $$\\text{Pre-Ad Margin} = \\text{Retail Price} - (\\text{Landed COGS} + 17\\%\\text{ Referral} + \\text{FBA Fee} + \\text{Return Processing Provision})$$
  $$\\text{Break-Even ROAS} = \\frac{\\text{Retail Price}}{\\text{Pre-Ad Margin}}$$
- On a $48.00 athletic jacket with $14.00 landed COGS, $8.16 referral (17%), $5.25 FBA fee, and $4.50 return provision, the pre-ad margin is $16.09 (33.52%), yielding a **break-even ROAS of 2.98**.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $48.00 Performance Athletic Leggings on Amazon FBA',
    scenario:
      'A private label activewear brand sells women’s compression leggings for $48.00 under Amazon FBA. The garment weighs 10 oz in its labeled polybag (Large Standard Tier).',
    inputs: {
      retailSellingPrice: '$48.00',
      landedCogs: '$11.50 (Fabric, manufacturing, ocean freight)',
      amazonReferralFeeRate: '17.00% ($8.16)',
      fbaFulfillmentFee: '$4.75',
      returnReserveAndProcessing: '$4.80 (20% return rate provision)',
      blendedPpcAdSpendPerUnit: '$11.50 (TACoS 23.9%)',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'Customer purchase price',
        amount: '$48.00',
        note: 'Topline revenue deposited.',
      },
      {
        label: 'Deduct Amazon Referral Fee (17%)',
        formula: '$48.00 × 0.17',
        amount: '$8.16',
        note: 'Official Seller Central clothing tier.',
      },
      {
        label: 'Deduct FBA Pick & Pack Fee',
        formula: 'Large Standard 10 oz tier fulfillment',
        amount: '$4.75',
        note: 'Amazon logistics handling and delivery.',
      },
      {
        label: 'Deduct Landed COGS & Freight',
        formula: 'Cut-and-sew invoice + air/ocean freight',
        amount: '$11.50',
        note: 'Unit production cost delivered to FBA.',
      },
      {
        label: 'Deduct Return Processing & Inspection Reserve',
        formula: '20% return rate sizing exchange provision',
        amount: '$4.80',
        note: 'Covers return fee and unsellable write-downs.',
      },
      {
        label: 'Pre-Ad Contribution Profit',
        formula: '$48.00 − ($8.16 + $4.75 + $11.50 + $4.80)',
        amount: '$18.79',
        note: 'Pre-ad margin: 39.15% (Break-even ROAS: 2.55).',
      },
      {
        label: 'Deduct Blended Advertising Spend (TACoS)',
        formula: 'Sponsored Products PPC allocation',
        amount: '$11.50',
        note: '23.96% of retail price allocated to advertising.',
      },
      {
        label: 'Net Cash Profit Per Unit',
        formula: '$18.79 − $11.50',
        amount: '$7.29',
        note: 'Net margin: 15.19% of retail price.',
      },
    ],
    takeaway:
      'On a $48.00 apparel sale, Amazon platform fees and fulfillment absorb $12.91 (26.90%), COGS absorbs $11.50 (23.96%), return reserves absorb $4.80 (10.00%), and ads absorb $11.50, leaving $7.29 in net profit (15.19% net margin). The break-even ROAS is 2.55.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Break-Even ROAS on a $60.00 Fashion Garment',
    scenario:
      'An apparel brand evaluates a designer dress retailing for $60.00 with $16.00 landed COGS, a 17% referral fee ($10.20), a $5.20 FBA fee, and a $6.00 return reserve.',
    inputs: {
      retailSellingPrice: '$60.00',
      landedCogs: '$16.00',
      referralFee: '$10.20',
      fbaFee: '$5.20',
      returnReserve: '$6.00',
    },
    steps: [
      {
        label: 'Calculate Total Baseline Non-Ad Costs',
        formula: '$16.00 + $10.20 + $5.20 + $6.00',
        amount: '$37.40',
        note: 'Total non-advertising baseline cost floor.',
      },
      {
        label: 'Determine Pre-Ad Contribution Margin',
        formula: '$60.00 − $37.40',
        amount: '$22.60',
        note: 'Maximum dollar budget available for advertising.',
      },
      {
        label: 'Calculate Break-Even ROAS',
        formula: '$60.00 ÷ $22.60',
        amount: '2.65',
        note: 'Minimum required Return on Ad Spend.',
      },
    ],
    takeaway:
      'Sponsored ad campaigns must achieve an average ROAS greater than 2.65 (an ACoS under 37.7%) for the product to be profitable. At a 3.50 ROAS, each unit yields $5.46 in net profit.',
  },
  faqs: [
    {
      question: 'What is Amazon’s referral fee for clothing and apparel?',
      answer:
        'Amazon charges a 17.00% referral fee for Clothing & Accessories items priced over $15.00 (with a $0.30 minimum). This is one of the highest referral rates on the platform, reflecting the premium nature of retail fashion.',
    },
    {
      question: 'What is Amazon’s apparel return processing fee?',
      answer:
        'Because Amazon provides customers with free returns on apparel, shoes, and bags, Amazon charges the seller an Apparel Return Processing Fee on customer-returned units, typically equal to the original FBA fulfillment fee for that item size tier.',
    },
    {
      question: 'Why are return rates so high for apparel on Amazon?',
      answer:
        'Apparel return rates average 15% to 25% due to sizing discrepancies, color mismatches, and customers purchasing multiple sizes to try on at home. Sellers must model these reverse logistics costs into their baseline unit pricing.',
    },
    {
      question: 'What FTC labeling rules apply to clothing sold on Amazon?',
      answer:
        'Under the FTC Textile Fiber Products Identification Act and Care Labeling Rule, garments must have permanent labels detailing exact fiber composition percentages, country of origin, care instructions, and manufacturer identification (such as an FTC RN number).',
    },
    {
      question: 'How do you calculate break-even ROAS for apparel on Amazon?',
      answer:
        'Subtract your landed COGS, the 17% referral fee, FBA fulfillment fee, and an apparel return reserve from your retail price to find your pre-ad margin. Then divide the retail selling price by that margin. For example, a $48 garment with $18.80 in pre-ad margin has a break-even ROAS of $48 ÷ $18.80 = 2.55.',
    },
  ],
};

export default amazonFbaApparelContent;

