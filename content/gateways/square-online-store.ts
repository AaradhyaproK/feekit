import type { PageContent } from '../types.ts';

export const squareOnlineStoreContent: PageContent = {
  slug: 'square-online-store',
  family: 'gateways',
  title: 'Square Online Fee Calculator (3.3% + 30¢ vs 2.9%) | FeeKit',
  metaDescription:
    'Calculate Square Online checkout fees: 3.3% + 30¢ on the Free plan vs 2.9% + 30¢ on Square Plus ($29/mo). Compare e-commerce processing costs vs Shopify and Stripe.',
  h1: 'Square Online Store & Invoicing Fee Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Square Official Processing Fees (Online & E-Commerce)',
    url: 'https://squareup.com/us/en/pricing',
    citation: 'Square Online Store Terms of Service & E-Commerce Pricing Matrix.',
  },
  overview:
    'Square provides native e-commerce store hosting, checkout APIs, and digital invoicing to omnichannel merchants. On the Square Online Free plan ($0/month subscription), online card transactions incur a published rate of 3.3% + 30¢. Merchants can lower their processing rate to 2.9% + 30¢ by upgrading to Square Online Plus ($29/month billed annually). Because Square’s in-person rate is 2.6% + 15¢, online orders carry a significant premium, making plan selection vital for scaling online stores.',
  sections: [
    {
      id: 'square-online-plan-comparison',
      title: 'Square Online Free (3.3% + 30¢) vs Square Online Plus (2.9% + 30¢)',
      body: `Square structures e-commerce processing across two core software plans:

- **Square Online Free ($0/month)**: **3.3% + 30¢** per transaction. Includes unlimited products, inventory sync with in-person Square POS, and automated order notifications.
- **Square Online Plus ($29/month)**: **2.9% + 30¢** per transaction. Includes custom domain connection, automated abandoned cart recovery emails, customer product reviews, and QR code ordering.
- **Square Invoicing (Free Plan)**: **3.3% + 30¢** per paid card invoice.
- **Square Invoicing Plus ($20/month)**: **2.9% + 30¢** per paid card invoice. Includes milestone billing and multi-invoice batching.
- **Square ACH Bank Transfer**: **1.00%** (minimum $1.00 fee) with no maximum cap. Available exclusively on Square Invoices.`,
    },
    {
      id: 'online-plus-subscription-breakeven',
      title: 'The Exact $7,250 Monthly Break-Even for Square Online Plus ($29/mo)',
      body: `Upgrading from the Free plan (3.3% + 30¢) to the Plus plan (2.9% + 30¢) saves exactly **0.40% (40 basis points)** on every dollar processed. To calculate the exact monthly volume ($V$) where the 0.40% savings offsets the $29/month subscription fee:

$$0.0040 \\times V = \\$29.00$$
$$V = \\frac{\\$29.00}{0.0040} = \\$7,250.00$$

- **Under $7,250/month in online sales**: Stay on the **Free plan** (3.3% + 30¢). Paying $29/mo would cost more than the rate savings.
- **Over $7,250/month in online sales**: Upgrade to **Square Online Plus** ($29/mo). Every dollar above $7,250 represents pure net profit.
- **At $25,000/month in online sales**: The 0.40% savings equals $100.00. Minus the $29 fee, you net **$71/month ($852/year)** in pure cash savings while unlocking abandoned cart recovery emails.`,
    },
    {
      id: 'square-online-vs-stripe',
      title: 'Cost Comparison: Square Online Free (3.3% + 30¢) vs Stripe (2.9% + 30¢)',
      body: `For merchants considering building on WooCommerce, custom Next.js, or Shopify vs Square Online:

- On a **$100.00 online order**:
  - Square Online Free: $100 × 3.3% + $0.30 = **$3.60 fee** (net payout: $96.40).
  - Stripe Standard Card: $100 × 2.9% + $0.30 = **$3.20 fee** (net payout: $96.80).
  - Stripe saves **$0.40 per $100 order**.
- On a **$500.00 online order**:
  - Square Online Free: $500 × 3.3% + $0.30 = **$16.80 fee** (net payout: $483.20).
  - Stripe Standard Card: $500 × 2.9% + $0.30 = **$14.80 fee** (net payout: $485.20).
  - Stripe saves **$2.00 per order**.

Square Online Free charges a 40 bps premium because it provides full turn-key e-commerce storefront hosting at zero monthly cost, whereas Stripe is purely a payment gateway requiring your own website infrastructure.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Monthly E-Commerce Scale Analysis ($10,000.00 Volume)',
    scenario:
      'An apparel boutique processes $10,000.00 in monthly online orders across 100 orders ($100 average cart), evaluating the Free plan vs Plus plan.',
    inputs: {
      monthlyVolume: '$10,000.00',
      totalOrders: 100,
      freePlanRate: '3.3% + $0.30 ($0/mo)',
      plusPlanRate: '2.9% + $0.30 ($29/mo)',
    },
    steps: [
      {
        label: 'Cost on Square Online Free Plan',
        formula: '($10,000.00 × 0.033) + (100 × $0.30)',
        amount: '$360.00 / month',
        note: '$330 variable percentage + $30 fixed fees.',
      },
      {
        label: 'Cost on Square Online Plus Plan (Fees + Subscription)',
        formula: '[($10,000.00 × 0.029) + (100 × $0.30)] + $29.00',
        amount: '$349.00 / month',
        note: '$290 variable fee + $30 fixed fee + $29 subscription.',
      },
      {
        label: 'Net Monthly Cash Savings on Plus Plan',
        formula: '$360.00 − $349.00',
        amount: '$11.00 / month',
        note: 'Saves $132/year while gaining custom domain and cart recovery.',
      },
    ],
    takeaway:
      'At $10,000/month, the Plus plan pays for itself and yields $11/mo in profit. At $20,000/mo, savings expand to $51/month ($612/year).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Pricing an Online Item to Net Exactly $100.00 on Square Free',
    scenario:
      'An artisan sells a handmade ceramic vase online and wants to clear exactly $100.00 after Square Online Free processing fees (3.3% + $0.30).',
    inputs: {
      targetNetPayout: '$100.00',
      percentageRate: '3.3%',
      fixedFee: '$0.30',
    },
    steps: [
      {
        label: 'Add 30¢ Fixed Fee to Net Target',
        formula: '$100.00 + $0.30',
        amount: '$100.30',
        note: 'Numerator calculation.',
      },
      {
        label: 'Compute Net Divisor',
        formula: '1.0 − 0.033',
        amount: '0.967',
        note: '96.7% retained after 3.3% fee.',
      },
      {
        label: 'Calculate Required Retail Price',
        formula: '$100.30 ÷ 0.967',
        amount: '$103.72',
        note: '$100.30 ÷ 0.967 = $103.722, rounded to $103.72.',
      },
      {
        label: 'Verification Check (Forward Deduction)',
        formula: '($103.72 × 0.033) + $0.30',
        amount: '$3.72 Fee',
        note: '$3.422 percentage fee + $0.30 fixed fee = $3.72.',
      },
      {
        label: 'Final Cleared Deposit',
        formula: '$103.72 − $3.72',
        amount: '$100.00',
        note: 'Deposits exactly $100.00 net.',
      },
    ],
    takeaway:
      'Price the vase at $103.72 to net $100.00. On Square Online Plus (2.9%), the required price would be $103.30, saving your customer 42 cents.',
  },
  faqs: [
    {
      question: 'What is Square’s fee for online store sales and digital invoicing?',
      answer:
        'Square charges 3.3% + 30¢ per transaction on the Square Online Free plan and free invoicing. On the Square Online Plus plan ($29/month), processing drops to 2.9% + 30¢.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'When should I upgrade to Square Online Plus ($29/mo)?',
      answer:
        'The mathematical break-even threshold to upgrade to Square Online Plus is $7,250 in monthly online volume. If you sell more than $7,250 per month, the 0.40% fee reduction saves more money than the $29 subscription cost.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'Does Square charge fees on rejected or abandoned online checkouts?',
      answer:
        'No. Processing fees are only assessed on successful, authorized credit card transactions. Failed cards, declined checkouts, and abandoned carts incur $0.00.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'Can customers pay via Apple Pay and Google Pay on Square Online?',
      answer:
        'Yes. Square Online natively supports Apple Pay, Google Pay, Cash App Pay, and Afterpay / Clearpay installment financing directly in the checkout flow.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'Does Square charge an extra fee for international online orders?',
      answer:
        'Square charges its standard online fee (3.3% + 30¢) for international cards without adding a mandatory percentage penalty, though foreign exchange conversion rates apply if settling in a non-account currency.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
  ],
};

export default squareOnlineStoreContent;

