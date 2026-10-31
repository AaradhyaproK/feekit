import type { PageContent } from '../types.ts';

export const gatewayComparatorContent: PageContent = {
  slug: 'gateway-comparator',
  family: 'tools',
  title: 'Stripe vs PayPal vs Square 3-Way Fee Comparator (2026) | FeeKit',
  metaDescription:
    'Compare real transaction fees across Stripe (2.9% + $0.30), PayPal (3.49% + $0.49), and Square (3.3% + $0.30 online vs 2.6% + 15¢ in-person). Discover the cheapest payment processor by volume and ticket size.',
  h1: 'Payment Gateway Fee Comparator: Stripe vs PayPal vs Square',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Official Processor Fee Schedules (Stripe, PayPal, Square)',
    url: 'https://stripe.com/pricing',
    citation: 'Stripe US Pricing, PayPal Merchant Fee Schedule, and Square Payment Processing Agreement.',
  },
  overview:
    'Selecting between Stripe, PayPal, and Square is one of the most consequential decisions for merchant unit economics. While all three platforms advertise flat-rate domestic pricing, their rate architectures diverge sharply across sales channels: Stripe charges 2.9% + $0.30 for standard online checkout; PayPal charges 3.49% + $0.49 for standard commercial checkout and invoicing (or 2.99% + $0.49 for standard card processing); and Square assesses 2.6% + 15¢ for in-person POS transactions versus 3.3% + $0.30 for its free online store. Over thousands of customer transactions, these percentage and fixed fee differentials create dramatic variations in annual take-home profit.',
  sections: [
    {
      id: 'three-way-rate-matrix',
      title: 'Head-to-Head Fee Comparison Matrix Across Major Payment Channels',
      body: `A direct comparison of published, verified merchant fees in the United States:

- **Online Credit & Debit Card Checkout**:
  - **Stripe**: **2.90% + $0.30** flat.
  - **PayPal**: **3.49% + $0.49** for PayPal Checkout & Invoicing, or **2.99% + $0.49** for Standard Card Processing.
  - **Square Free Online**: **3.30% + $0.30** on the free tier, dropping to **2.90% + $0.30** only if the merchant pays $29/month for Square Plus.
  - *Winner*: **Stripe** offers the lowest standard online card fee without requiring monthly software subscriptions.
- **In-Person Point-of-Sale (POS)**:
  - **Square**: **2.60% + $0.15** per card tap, dip, or swipe.
  - **Stripe Terminal**: **2.70% + $0.05** per card-present transaction.
  - **PayPal Zettle**: **2.29% + $0.09** per card-present transaction.
  - *Winner*: **Square** dominates retail and hospitality due to turnkey register hardware, though Stripe Terminal is cheaper on transactions under $10.00.
- **Cross-Border / International Card Surcharges**:
  - **Stripe**: **+1.50%** international card fee + **1.00%** currency conversion.
  - **PayPal**: **+1.50%** cross-border fee + **3.00% to 4.00%** currency conversion spread.
  - **Square**: Does not support international cross-border processing on standard domestic accounts.
  - *Winner*: **Stripe** provides superior international acceptance with lower FX conversion markups.`,
    },
    {
      id: 'volume-and-ticket-size-dynamics',
      title: 'Ticket Size Dynamics: Micro-Transactions vs High-Ticket Invoicing',
      body: `Because payment gateways levy both a percentage rate and a fixed cent surcharge, optimal processor selection changes dramatically based on average order value (AOV):

1. **Micro-Transactions ($5.00 to $15.00)**:
   - Fixed cents dominate fee erosion. On a $10.00 transaction:
     - Stripe charges $0.59 ($0.29 + $0.30) $\\to$ **5.90% effective fee**.
     - PayPal charges $0.84 ($0.35 + $0.49) $\\to$ **8.40% effective fee**.
     - Square Online charges $0.63 ($0.33 + $0.30) $\\to$ **6.30% effective fee**.
     - Square In-Person charges $0.41 ($0.26 + $0.15) $\\to$ **4.10% effective fee**.
   - *Conclusion*: PayPal’s 49¢ fixed fee is punitive for small-ticket sales. Stripe and Square POS protect small-order margins.
2. **Mid-Tier E-Commerce ($50.00 to $100.00)**:
   - On a $100.00 online order:
     - Stripe: **$3.20** total fee.
     - PayPal Checkout: **$3.98** total fee.
     - Square Free Online: **$3.60** total fee.
   - *Savings*: Stripe saves **$0.78 per $100 sale** versus PayPal, compounding to $7,800 in annual fee savings on $1,000,000 in gross merchandise volume.
3. **High-Ticket Invoicing ($2,000.00+)**:
   - Card percentage fees become oppressive on large invoices. Stripe provides an integrated **ACH Direct Debit** option (0.80% capped strictly at **$5.00**), saving hundreds of dollars per invoice over credit cards.`,
    },
    {
      id: 'operational-policies-refunds-chargebacks',
      title: 'Operational Rules: Refund Policies, Chargeback Handling, and Rolling Reserves',
      body: `Hidden operational differences that directly affect merchant cash flow:

- **Refund Processing Policy**: Both Stripe and Square **permanently retain processing fees** when a merchant issues a customer refund. If you sell a $200 item and refund it, you lose $6.10 to $6.90 out of pocket. PayPal also retains processing fees on refunds under its merchant agreement.
- **Dispute and Chargeback Fees**:
  - Stripe charges **$15.00 flat** per dispute (refundable only with Chargeback Protection).
  - PayPal charges **$20.00 flat** per chargeback for transactions not covered by PayPal Seller Protection.
  - Square does **not charge a chargeback fee** on standard dispute inquiries, offering superior protection for boutique retailers.
- **Account Stability & Risk Reviews**: PayPal is historically notorious for automated 21-day fund holds and 180-day rolling reserves on rapid sales surges. Stripe and Square maintain more modern risk underwriting, though high-dispute merchants face account termination across all three aggregators.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $100 Online Order Compared Across Stripe, PayPal, and Square',
    scenario:
      'A consumer buys a $100.00 product online. Compare the exact merchant deductions and net payouts across Stripe, PayPal Checkout, and Square Free Online.',
    inputs: {
      orderAmount: '$100.00',
      stripeRate: '2.90% + $0.30',
      paypalRate: '3.49% + $0.49',
      squareRate: '3.30% + $0.30',
    },
    steps: [
      {
        label: 'Stripe Total Fee',
        formula: '($100.00 × 2.90%) + $0.30',
        amount: '$3.20',
        note: 'Stripe Net: $96.80',
      },
      {
        label: 'PayPal Checkout Total Fee',
        formula: '($100.00 × 3.49%) + $0.49',
        amount: '$3.98',
        note: 'PayPal Net: $96.02',
      },
      {
        label: 'Square Free Online Total Fee',
        formula: '($100.00 × 3.30%) + $0.30',
        amount: '$3.60',
        note: 'Square Net: $96.40',
      },
      {
        label: 'Stripe Savings vs PayPal',
        formula: '$3.98 - $3.20',
        amount: '$0.78',
        note: '24.4% lower fee than PayPal',
      },
      {
        label: 'Stripe Savings vs Square Online',
        formula: '$3.60 - $3.20',
        amount: '$0.40',
        note: '11.1% lower fee than Square Online',
      },
    ],
    takeaway:
      'On a $100.00 transaction, Stripe yields $96.80 net, outperforming Square Online ($96.40) and PayPal ($96.02). Across $500,000 in sales, choosing Stripe over PayPal preserves $3,900.00 in pure cash profit.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Billing a Client to Clear an Exact $1,000 Net Across Gateways',
    scenario:
      'A business consultant needs to clear exactly $1,000.00 net on an online client invoice. What gross amount must be invoiced on Stripe vs PayPal vs Square Online?',
    inputs: {
      targetNetPayout: '$1,000.00',
      stripeFormula: '($1,000 + $0.30) ÷ (1 - 0.029)',
      paypalFormula: '($1,000 + $0.49) ÷ (1 - 0.0349)',
      squareFormula: '($1,000 + $0.30) ÷ (1 - 0.033)',
    },
    steps: [
      {
        label: 'Required Invoice on Stripe',
        formula: '$1,000.30 ÷ 0.971',
        amount: '$1,030.18',
        note: 'Stripe fee: $30.18',
      },
      {
        label: 'Required Invoice on PayPal',
        formula: '$1,000.49 ÷ 0.9651',
        amount: '$1,036.67',
        note: 'PayPal fee: $36.67',
      },
      {
        label: 'Required Invoice on Square Online',
        formula: '$1,000.30 ÷ 0.967',
        amount: '$1,034.44',
        note: 'Square Online fee: $34.44',
      },
      {
        label: 'ACH Alternative on Stripe',
        formula: '$1,000.00 + $5.00',
        amount: '$1,005.00',
        note: 'Stripe ACH fee capped at $5.00',
      },
    ],
    takeaway:
      'To clear an exact $1,000.00 net, bill $1,030.18 on Stripe, $1,034.44 on Square, or $1,036.67 on PayPal. If using Stripe ACH direct debit, bill just $1,005.00.',
  },
  faqs: [
    {
      question: 'Which is cheaper overall: Stripe, PayPal, or Square?',
      answer:
        'For online card checkout, Stripe (2.9% + $0.30) is cheaper than Square Free Online (3.3% + $0.30) and PayPal Checkout (3.49% + $0.49). For in-person retail sales, Square POS (2.6% + $0.15) or PayPal Zettle (2.29% + $0.09) are significantly cheaper than online rates.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'Why does PayPal charge 49¢ per transaction instead of 30¢?',
      answer:
        'In 2021, PayPal updated its US fee structure, increasing the fixed fee on standard commercial transactions from $0.30 to $0.49. This makes PayPal disproportionately expensive for orders under $20.00.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Does Square charge a monthly fee for online payments?',
      answer:
        'Square has a free plan with no monthly subscription, but charges a higher transaction fee of 3.3% + $0.30. To unlock a 2.9% + $0.30 rate, merchants must subscribe to Square Plus for $29 per month.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'Which platform is best for international cross-border sales?',
      answer:
        'Stripe is the undisputed leader for international commerce, offering unified global APIs, local payment methods (iDEAL, SEPA, Bancontact, Giropay), and lower cross-border surcharges (1.5% vs PayPal’s 1.5% plus 3-4% currency spread).',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'Do any of these processors refund transaction fees when I refund a customer?',
      answer:
        'No. None of the three major aggregators refund transaction processing fees on customer returns. When issuing a refund, the merchant absorbs the original processing fee as an operational loss across Stripe, PayPal, and Square.',
      sourceUrl: 'https://support.stripe.com/questions/understanding-fees-for-refunded-payments',
    },
  ],
};

export default gatewayComparatorContent;

