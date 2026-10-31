import type { PageContent } from '../types.ts';

export const shopifyApparelBrandContent: PageContent = {
  slug: 'shopify-apparel-brand',
  family: 'ecommerce',
  title: 'Shopify DTC Apparel Brand Profit Margin & Returns Calculator | FeeKit',
  metaDescription:
    'Calculate Shopify DTC apparel profit margins, domestic 3PL fulfillment, 18-25% sizing return reserves, and 2.9% + $0.30 payment fees. Sourced from official Shopify schedules.',
  h1: 'Shopify DTC Apparel Brand Profit Margin & Unit Economics Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Shopify Payments Official Schedule',
    url: 'https://www.shopify.com/pricing',
    citation: 'Shopify Official Pricing Plans & Shopify Payments Credit Card Processing Schedule.',
  },
  overview:
    'Operating an independent direct-to-consumer (DTC) apparel brand on Shopify requires managing unique unit economics defined by high gross margins (65% to 80%) but severe operational cost drains. Clothing merchants face industry-leading return rates of 18% to 25% driven by customer sizing variance and home try-on behavior, specialized 3PL garment pick-and-pack fulfillment fees ($4.50 to $7.00 per order), paid customer acquisition costs (CAC) across Meta and TikTok, and Shopify Payments processing fees (2.9% + $0.30 on Shopify Basic). Long-term profitability depends on repeat customer lifetime value (LTV) and optimizing size charts to compress sizing return rates.',
  sections: [
    {
      id: 'shopify-payments-and-app-stack',
      title: 'Shopify Payments and Apparel Software Stack Expenses',
      body: `Apparel merchants on Shopify incur foundational technology and payment gateway fees:

1. **Shopify Payments Fee (2.9% + $0.30)**: Domestic credit card transactions on the Basic plan are billed at **2.9% + $0.30** per completed order. Upgrading to the standard Shopify plan ($105/mo) reduces this to 2.7% + $0.30, and the Advanced plan ($399/mo) drops it to 2.5% + $0.30.
2. **Third-Party Returns Automation (Loop Returns, ReturnLogic)**: Managing reverse logistics at scale requires specialized returns portals ($99 to $400/month) that automate customer sizing exchanges and offer bonus credit to preserve cash revenue instead of processing cash refunds.
3. **Apparel Tech Stack**: Sizing chart recommenders (Kiwi Sizing), inventory management (Cin7, Katana), post-purchase reviews with user photos (Okendo, Loox), and Klaviyo email/SMS flows add $300 to $800 in recurring monthly operating costs.`,
    },
    {
      id: 'return-logistics-and-restocking',
      title: 'The Real Cost of Reverse Logistics: 18% to 25% Apparel Return Rates',
      body: `Apparel suffers the highest return rate of any retail e-commerce category:

- **Customer 'Bracketing' Behavior**: Shoppers frequently purchase two adjacent sizes (e.g., Medium and Large) with the deliberate intention of returning the size that does not fit.
- **Reverse Shipping Postage**: Providing pre-paid USPS or UPS return shipping labels costs **$4.50 to $7.50 per return**, which erodes margins unless merchants deduct return shipping from customer refunds.
- **3PL Restocking & Inspection Fees**: Third-party logistics warehouses charge **$1.50 to $2.75 per returned item** to inspect garments, remove pet hair/deodorant marks, steam, refold, replace polybags, and return inventory to warehouse shelves.
- **Unsellable Inventory Loss**: Approximately 10% to 15% of returned garments arrive damaged, washed, or soiled, requiring markdown liquidation or complete write-offs.`,
    },
    {
      id: 'ftc-textile-labeling-compliance',
      title: 'FTC Textile Fiber Rule Compliance and Care Labeling Mandates',
      body: `Apparel brands selling online in the United States must comply with federal textile mandates:

- **FTC Textile Fiber Products Identification Act**: Garments must feature permanent labels disclosing generic fiber content by percentage (e.g., 80% Organic Cotton, 20% Polyester), country of origin, and the manufacturer's registered identification number (RN) or business name.
- **Care Labeling Rule**: Federal law requires apparel manufacturers to attach permanent labels providing clear, comprehensive instructions for regular fabric care (machine wash cold, tumble dry low, do not bleach). Failure to provide compliant care instructions exposes merchants to regulatory enforcement and commercial liability.
- **Proposition 65 Disclosures**: Shipments to California customers must comply with California Proposition 65 chemical limits (such as lead in zippers or phthalates in synthetic fabrics) or include statutory warning disclosures.`,
    },
    {
      id: 'cac-and-repeat-customer-ltv',
      title: 'Balancing First-Order CAC with Repeat Customer Lifetime Value (LTV)',
      body: `Apparel brands rarely generate significant net profit on initial customer acquisition:

- **First-Order Acquisition Economics**: With Meta CPMs averaging $20 to $40, acquiring a new apparel customer often costs **$35 to $60 in ad spend (CAC)**. On an initial $80 order with $20 COGS and $6 fulfillment, first-order contribution margin is often near breakeven.
- **The Repeat Purchase Engine**: Apparel brands succeed when second-purchase rates reach **25% to 40%** within 180 days. Repeat orders acquired via zero-marginal-cost email and SMS flows generate pure contribution profit:
  $$\text{Blended Contribution Margin} = \frac{\text{Gross Profit} - (\text{Fulfillment} + \text{Blended Ad Spend})}{\text{Total Net Sales}}$$
- **Retention Levers**: Seasonal collection drops, VIP loyalty tiers, and automated post-purchase replenishment reminders drive sustained customer lifetime value.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $75.00 Heavyweight French Terry Hoodie Sold on Shopify',
    scenario:
      'An independent streetwear brand sells a custom cut-and-sew heavyweight French Terry hoodie on Shopify for $75.00 with domestic 3PL fulfillment, factoring in an 18% return rate and Meta ad spend.',
    inputs: {
      retailPrice: '$75.00',
      wholesaleCutAndSewCogs: '$18.50 per unit',
      shopifyPaymentsFee: '2.9% + $0.30 ($2.48)',
      domestic3PlFulfillment: '$5.50 (Pick, pack, custom polymailer)',
      allocatedAdSpendCac: '$24.00 per sale',
      returnReserveAllowance: '$6.50 (18% return rate with restocking/reverse shipping)',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'Customer checkout price',
        amount: '$75.00',
        note: 'Total customer payment.',
      },
      {
        label: 'Deduct Shopify Payments Fee',
        formula: '$75.00 × 0.029 + $0.30',
        amount: '$2.48',
        note: 'Credit card processing deduction.',
      },
      {
        label: 'Deduct Cut-and-Sew COGS',
        formula: 'Garment manufacturing & import duty',
        amount: '$18.50',
        note: 'Product landed manufacturing cost.',
      },
      {
        label: 'Deduct 3PL Warehouse Fulfillment',
        formula: 'Order pick, pack, and packaging',
        amount: '$5.50',
        note: 'Outbound logistics handling.',
      },
      {
        label: 'Deduct Return Reserve Allocation',
        formula: '18% return rate factor × reverse logistics cost',
        amount: '$6.50',
        note: 'Reverse freight, inspection, and repackaging.',
      },
      {
        label: 'Pre-Ad Contribution Profit',
        formula: '$75.00 − ($2.48 + $18.50 + $5.50 + $6.50)',
        amount: '$42.02',
        note: 'Pre-ad margin: 56.03% (Break-even ROAS: 1.78).',
      },
      {
        label: 'Deduct Paid Advertising (Meta CAC)',
        formula: 'Allocated digital ad spend',
        amount: '$24.00',
        note: 'Customer acquisition cost.',
      },
      {
        label: 'Net Unit Operating Profit',
        formula: '$42.02 − $24.00',
        amount: '$18.02',
        note: 'Net profit per unit sold.',
      },
    ],
    takeaway:
      'On a $75.00 hoodie, the brand generates $18.02 in net operating profit (24.03% net margin) after absorbing $6.50 in return reserve allocations and $24.00 in paid customer acquisition costs. The break-even ROAS is 1.78.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Break-Even ROAS Under High Return Rates',
    scenario:
      'A Shopify apparel brand models unit economics on a $90.00 denim jacket with $24.00 manufacturing COGS, $6.00 3PL fulfillment, $2.91 Shopify fee, and an elevated 22% sizing return reserve ($11.00 per unit).',
    inputs: {
      retailSellingPrice: '$90.00',
      cogs: '$24.00',
      fulfillment: '$6.00',
      shopifyFee: '$2.91',
      returnReserve: '$11.00',
    },
    steps: [
      {
        label: 'Sum Total Non-Advertising Costs',
        formula: '$24.00 + $6.00 + $2.91 + $11.00',
        amount: '$43.91',
        note: 'All baseline operating expenses.',
      },
      {
        label: 'Determine Pre-Ad Contribution Margin',
        formula: '$90.00 − $43.91',
        amount: '$46.09',
        note: 'Allowable ad spend ceiling.',
      },
      {
        label: 'Calculate Break-Even ROAS',
        formula: '$90.00 ÷ $46.09',
        amount: '1.95',
        note: 'Minimum required Return on Ad Spend.',
      },
      {
        label: 'Calculate Target ROAS for 15% Net Margin',
        formula: '$90.00 ÷ ($46.09 − $13.50)',
        amount: '2.76',
        note: 'ROAS needed for $13.50 net profit per unit.',
      },
    ],
    takeaway:
      'High return rates elevate non-ad costs significantly: the brand requires a minimum 1.95 ROAS simply to break even, and a 2.76 ROAS on paid social campaigns to achieve a standard 15% net operating margin.',
  },
  faqs: [
    {
      question: 'Why do direct-to-consumer apparel stores experience 18% to 25% customer return rates?',
      answer:
        'Clothing cannot be tried on prior to online purchase, leading to high sizing uncertainty. Furthermore, many consumers practice "bracketing"—purchasing two or three sizes of the same garment with the deliberate intent of returning the ill-fitting items once tried on at home.',
    },
    {
      question: 'How much do domestic 3PL fulfillment centers charge per garment order for picking and polybagging?',
      answer:
        'Domestic third-party logistics (3PL) warehouses typically charge a base order fee of $3.50 to $5.00 covering order receipt and the first item pick, plus $0.75 to $1.25 for each additional item pick, and $0.40 to $0.80 for custom printed polymailers or branded tissue paper packaging.',
    },
    {
      question: 'What specific fiber content and care disclosure rules does the FTC mandate for clothing sold online?',
      answer:
        'The FTC Textile Fiber Products Identification Act requires disclosing generic fiber names by percentage weight in descending order, country of origin, and manufacturer identification. The Care Labeling Rule further requires a permanent tag with clear instructions on washing temperature, bleaching, drying, and ironing.',
    },
    {
      question: 'How do customer sizing exchanges impact blended gross margins compared to straight refunds?',
      answer:
        'Sizing exchanges preserve top-line revenue and avoid cash refunds, but still incur outbound re-shipping ($5-$7) and 3PL inspection/restocking costs ($2-$3). Many brands utilize portals like Loop Returns to offer a $5 bonus credit for exchanges, which is far more profitable than issuing full cash refunds.',
    },
    {
      question: 'What is a realistic contribution margin after paid Meta advertising for an independent Shopify apparel label?',
      answer:
        'First-order net contribution margins typically land between 10% and 20% due to paid customer acquisition costs ($30-$50 CAC). However, because repeat purchases carry zero acquisition cost, mature apparel brands achieve blended annual net margins of 18% to 26% across their total customer base.',
    },
  ],
};

export default shopifyApparelBrandContent;
