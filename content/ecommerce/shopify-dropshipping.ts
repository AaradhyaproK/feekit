import type { PageContent } from '../types.ts';

export const shopifyDropshippingContent: PageContent = {
  slug: 'shopify-dropshipping',
  family: 'ecommerce',
  title: 'Shopify Dropshipping Profit Margin & Break-Even ROAS Calculator | FeeKit',
  metaDescription:
    'Calculate Shopify dropshipping net profit margins, payment processing fees (2.9% + $0.30), and break-even ROAS. Sourced from official Shopify Payments schedules.',
  h1: 'Shopify Dropshipping Profit & Break-Even ROAS Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Shopify Official Pricing & Shopify Payments Schedule',
    url: 'https://www.shopify.com/pricing',
    citation: 'Shopify Official Plan Terms & Shopify Payments Credit Card Processing Schedules.',
  },
  overview:
    'Calculating real profitability in a Shopify dropshipping business requires looking past vanity top-line dashboard revenue and modeling true unit economics: payment processing transaction fees (2.9% + $0.30 on Shopify Basic), wholesale supplier product and ePacket air freight costs, customer acquisition costs (CAC) across paid social advertising (Meta, TikTok, Google Ads), app stack overhead, and chargeback dispute reserves. Because dropshippers carry no bulk inventory risk, unit production costs are higher and ad-spend efficiency (ROAS) dictates whether a store is profitable or operating at a cash loss.',
  sections: [
    {
      id: 'shopify-fee-architecture-dropshipping',
      title: 'Shopify Platform & Payment Processing Fee Architecture',
      body: `Operating an e-commerce store on Shopify incurs non-negotiable platform and payment processing costs:

1. **Shopify Payments Processing Fees (2.9% + $0.30)**: On the entry-level Shopify Basic plan ($39/month), domestic online credit card transactions are billed at **2.9% + $0.30** per order. Upgrading to the standard Shopify plan ($105/month) lowers rates to **2.7% + $0.30**, while the Advanced plan ($399/month) drops rates to **2.5% + $0.30**.
2. **Third-Party Payment Gateway Penalties**: If a merchant uses an external payment gateway (such as third-party PayPal or Authorize.Net) instead of Shopify Payments, Shopify levies an additional **2.0% transaction fee** on Basic (1.0% on Shopify, 0.6% on Advanced) on top of the processor's own fees.
3. **Monthly Software App Stack Overhead ($150 – $400/mo)**: Dropshipping stores require essential third-party Shopify apps to function: fulfillment automation (DSers, Zendrop, AutoDS), customer review apps (Loox, Judge.me), post-purchase upsell funnels, page builders (PageFly), and email/SMS automation (Klaviyo), creating a recurring fixed monthly cost.`,
    },
    {
      id: 'break-even-roas-mathematics-dropshipping',
      title: 'The Break-Even ROAS Formula for Paid Ad Scaling',
      body: `In paid social dropshipping, media spend on Meta and TikTok is the largest expense category. Understanding your break-even metrics prevents scaling unprofitable ad campaigns:

- **Pre-Ad Operating Contribution**: Calculated by subtracting all non-advertising costs from the retail price:
  $$\\text{Pre-Ad Margin} = \\text{Retail Price} - (\\text{Wholesale COGS} + \\text{Supplier Shipping} + \\text{Shopify Payments Fee} + \\text{Return Reserve})$$
- **Break-Even ROAS Formula**: The exact Return on Ad Spend required to break even ($0 net profit) is:
  $$\\text{Break-Even ROAS} = \\frac{\\text{Retail Selling Price}}{\\text{Pre-Ad Margin}}$$
- **Numerical Example**: On a $60.00 retail product with $18.00 wholesale COGS, $2.04 Shopify Payments fee ($60 × 2.9% + $0.30), and a $3.00 return/chargeback buffer ($23.04 total non-ad costs), the pre-ad contribution margin is **$36.96**.
  $$\\text{Break-Even ROAS} = \\frac{\\$60.00}{\\$36.96} = 1.62$$
- **Target Commercial ROAS**: If your paid ad campaigns operate below a 1.62 ROAS, every sale burns cash. To achieve a 20% net margin ($12.00 profit), your maximum allowable ad spend per acquisition is $24.96 ($36.96 − $12.00), requiring a target commercial ROAS of **2.40** ($60 ÷ $24.96).`,
    },
    {
      id: 'regulatory-compliance-and-chargeback-risks',
      title: 'Regulatory Compliance: FTC 30-Day Rule and Payment Reserve Holds',
      body: `Dropshipping carries acute operational compliance hurdles that can freeze merchant merchant accounts:

- **FTC 30-Day Mail Order Rule Compliance**: Under Federal Trade Commission (FTC) regulations, merchants must have a reasonable basis for shipping claims and must ship orders within the promised timeframe (or within 30 days if no timeframe is stated). If transit delays occur, merchants must proactively offer the customer an option to consent to the delay or receive a prompt full refund.
- **Payment Processor Rolling Reserves**: When dropshipping stores scale paid ad campaigns rapidly, merchant acquiring banks (Shopify Payments / Stripe) detect elevated risk from extended international transit times. Processors frequently institute a **rolling reserve of 10% to 20% of gross sales held for 90 to 180 days** to protect against customer chargebacks.
- **Chargeback Dispute Fees**: Each customer chargeback filed through cardholder banks incurs a non-refundable **$15.00 dispute fee** on Shopify Payments, in addition to losing the order revenue and product cost.`,
    },
    {
      id: 'international-sourcing-and-returns-management',
      title: 'Supplier Sourcing Economics: Lead Times, Quality Control, and Refunds',
      body: `Managing overseas dropshipping suppliers requires accounting for customer friction:

- **Transit Time & Customer Churn**: Shipping directly from overseas fulfillment hubs via standard air lines typically takes 8 to 15 business days. Long transit times directly correlate with higher customer inquiry volume, cancellations, and credit card disputes.
- **Customer Return Economics**: Because returning a $30 item back to an overseas factory costs $15 to $20 in international postage, dropshipping merchants rarely demand physical returns. Instead, stores typically issue full refunds or send free replacements, treating returns as a 100% loss of product cost and shipping. Modeling a **5% to 7% refund reserve** is vital for accurate margin planning.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $55.00 Consumer Product Scaled via Meta & TikTok Ads',
    scenario:
      'A dropshipping store sells an ergonomic home office accessory for $55.00 on Shopify Basic using Shopify Payments (2.9% + $0.30). The supplier charges $16.00 for wholesale manufacturing and tracked air shipping.',
    inputs: {
      retailSellingPrice: '$55.00',
      supplierWholesaleCogsAndShipping: '$16.00',
      shopifyPaymentsRate: '2.9% + $0.30 ($1.90)',
      refundAndChargebackReserve: '$2.75 (5% allocation)',
      adSpendPerAcquisition: '$22.00 (CAC at 2.50 ROAS)',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'Customer checkout price',
        amount: '$55.00',
        note: 'Total payment received.',
      },
      {
        label: 'Deduct Shopify Payments Fee',
        formula: '($55.00 × 0.029) + $0.30',
        amount: '$1.90',
        note: 'Payment gateway processing fee.',
      },
      {
        label: 'Deduct Supplier COGS & Air Freight',
        formula: 'Wholesale supplier invoice per unit',
        amount: '$16.00',
        note: 'Delivered cost from supplier.',
      },
      {
        label: 'Deduct Refund & Dispute Reserve',
        formula: '$55.00 × 0.05',
        amount: '$2.75',
        note: 'Provision for damaged units and chargebacks.',
      },
      {
        label: 'Pre-Ad Contribution Profit',
        formula: '$55.00 − ($1.90 + $16.00 + $2.75)',
        amount: '$34.35',
        note: 'Pre-ad margin: 62.45% (Break-even ROAS: 1.60).',
      },
      {
        label: 'Deduct Customer Acquisition Cost (CAC)',
        formula: 'Paid social advertising cost per order',
        amount: '$22.00',
        note: 'Ad spend on Meta/TikTok at 2.50 ROAS.',
      },
      {
        label: 'Net Cash Profit Per Order',
        formula: '$34.35 − $22.00',
        amount: '$12.35',
        note: 'Net margin: 22.45% of retail price.',
      },
    ],
    takeaway:
      'On a $55.00 dropshipping order, the supplier takes $16.00 (29.09%), Shopify Payments takes $1.90 (3.45%), advertising CAC absorbs $22.00 (40.00%), and reserves take $2.75, leaving a net profit of $12.35 (22.45% net margin). The store breaks even at a 1.60 ROAS.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Break-Even ROAS from Supplier COGS and Fees',
    scenario:
      'A merchant evaluates a trendy outdoor gadget retailing for $45.00. The supplier charges $15.00 for the product and shipping, and credit card processing is 2.9% + $0.30 ($1.61).',
    inputs: {
      retailSellingPrice: '$45.00',
      supplierLandedCost: '$15.00',
      processingFee: '$1.61',
    },
    steps: [
      {
        label: 'Calculate Total Baseline Non-Ad Costs',
        formula: '$15.00 (Supplier) + $1.61 (Processing)',
        amount: '$16.61',
        note: 'Direct cost floor per unit.',
      },
      {
        label: 'Determine Pre-Ad Contribution Dollars',
        formula: '$45.00 − $16.61',
        amount: '$28.39',
        note: 'Maximum dollar budget available for advertising.',
      },
      {
        label: 'Calculate Break-Even ROAS',
        formula: '$45.00 ÷ $28.39',
        amount: '1.59',
        note: 'Minimum required Return on Ad Spend.',
      },
    ],
    takeaway:
      'To break even, the ad campaigns must generate at least $1.59 in revenue for every $1.00 spent on advertising. If the campaign achieves a 2.20 ROAS, each acquisition generates $7.94 in net profit.',
  },
  faqs: [
    {
      question: 'What are the official credit card processing fees on Shopify?',
      answer:
        'Using Shopify Payments in the US, standard online credit card rates are 2.9% + $0.30 per transaction on the Shopify Basic plan ($39/mo), 2.7% + $0.30 on the Shopify plan ($105/mo), and 2.5% + $0.30 on the Advanced plan ($399/mo). If you use a third-party gateway, an additional 2.0% fee applies on Basic.',
    },
    {
      question: 'How do you calculate the break-even ROAS for dropshipping ads?',
      answer:
        'To find your break-even ROAS, subtract your wholesale product cost, shipping fee, and payment processing fee from your retail selling price to get your pre-ad margin. Then divide the retail selling price by that margin. For example, a $50 product with $20 in total non-ad costs has a pre-ad margin of $30, giving a break-even ROAS of $50 ÷ $30 = 1.67.',
    },
    {
      question: 'What is a realistic net profit margin for a Shopify dropshipping store?',
      answer:
        'While gross margins (retail price minus supplier product cost) often look high at 60% to 70%, net profit margins after advertising ad spend (35%–50%), payment fees (3%), app subscriptions, and refunds typically settle between 10% and 25% for successful stores.',
    },
    {
      question: 'Why do payment processors place rolling reserve holds on dropshipping accounts?',
      answer:
        'Processors like Stripe and Shopify Payments view dropshipping as elevated risk due to long international shipping times (8–15 days) and higher customer dispute rates. To protect against unpaid chargebacks, processors frequently hold 10% to 20% of daily sales in a rolling reserve for 90 to 180 days.',
    },
    {
      question: 'What are the main hidden costs in dropshipping that hurt profitability?',
      answer:
        'Key hidden expenses include monthly Shopify app subscriptions ($150–$400/mo), customer chargeback dispute fees ($15 per chargeback), returns and refund write-offs (5%–8% of orders), and foreign transaction exchange fees (typically 1.5%–2% if suppliers bill in foreign currencies).',
    },
  ],
};

export default shopifyDropshippingContent;

