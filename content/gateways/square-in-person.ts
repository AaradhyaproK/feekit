import type { PageContent } from '../types.ts';

export const squareInPersonContent: PageContent = {
  slug: 'square-in-person',
  family: 'gateways',
  title: 'Square POS Fee Calculator (2.6% + 15¢) | FeeKit',
  metaDescription:
    'Calculate exact Square point-of-sale processing fees: 2.6% + 15¢ for in-person tap, dip, or swipe on Square Free. Compare vs Square for Restaurants, Clover, and Stripe Terminal.',
  h1: 'Square In-Person POS Fee Calculator & Hardware Pricing Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Square Official Processing Fees & POS Pricing',
    url: 'https://squareup.com/us/en/pricing',
    citation: 'Square US Payment Terms, Square Register Pricing & Hardware Specifications.',
  },
  overview:
    'Square transformed in-person retail and hospitality payments by eliminating monthly merchant account fees and interchange qualification tiers. On the standard Square Free plan, in-person card transactions (tapped via Apple Pay / Google Pay, dipped via EMV chip, or swiped via magstripe) process at a flat published rate of 2.6% + 15¢. There are zero chargeback dispute fees, zero monthly statement fees, and zero PCI compliance assessment charges, making Square one of the most transparent POS processors in the United States.',
  sections: [
    {
      id: 'square-pos-rates-across-plans',
      title: 'Square In-Person Pricing Across Free, Plus, and Specialized Plans',
      body: `Square offers tiered software plans that adjust processing rates for retail and food service:

- **Square POS (Free Plan)**: **2.6% + 15¢** per in-person tap, dip, or swipe. ($0 monthly subscription).
- **Square for Retail (Free Plan)**: **2.6% + 15¢** ($0/month).
- **Square for Retail Plus**: **2.5% + 10¢** per in-person transaction ($89/month per location). Includes advanced barcode creation, purchase orders, and multi-location inventory.
- **Square for Restaurants (Free Plan)**: **2.6% + 10¢** per in-person transaction ($0/month).
- **Square for Restaurants Plus**: **2.5% + 10¢** ($69/month per location). Includes table management, course management, and live kitchen display integration.
- **Manually Keyed-In Transactions**: **3.5% + 15¢** when typing card numbers manually into the POS app or Virtual Terminal.
- **Hardware Costs (One-Time Purchase)**:
  - Square Reader for contactless and chip: **$59**.
  - Square Stand for iPad: **$149**.
  - Square Terminal (All-in-one wireless reader + printer): **$299**.
  - Square Register (Dual-screen integrated POS): **$799**.`,
    },
    {
      id: 'square-vs-stripe-terminal',
      title: 'Competitive Analysis: Square Free POS vs Stripe Terminal (2.7% + 5¢)',
      body: `Comparing Square's in-person rate (2.6% + 15¢) to Stripe Terminal (2.7% + 5¢) reveals an important ticket-size crossover:

- **On a $10.00 quick-service purchase**:
  - Square POS: $10 × 2.6% + $0.15 = **$0.41 fee** (effective rate: 4.10%).
  - Stripe Terminal: $10 × 2.7% + $0.05 = **$0.32 fee** (effective rate: 3.20%).
  - Stripe Terminal saves **9¢** on small $10 tickets due to the 5¢ fixed fee.
- **On a $100.00 boutique sale**:
  - Square POS: $100 × 2.6% + $0.15 = **$2.75 fee** (effective rate: 2.75%).
  - Stripe Terminal: $100 × 2.7% + $0.05 = **$2.75 fee** (effective rate: 2.75%).
  - **The exact break-even crossover is $100.00**.
- **On a $500.00 high-ticket sale**:
  - Square POS: $500 × 2.6% + $0.15 = **$13.15 fee** (effective rate: 2.63%).
  - Stripe Terminal: $500 × 2.7% + $0.05 = **$13.55 fee** (effective rate: 2.71%).
  - Square POS saves **40¢ per $500 transaction**.

For orders under $100, Stripe Terminal has a minor cost advantage; for orders above $100, Square's lower 2.6% percentage rate wins. Furthermore, Square provides a turnkey point-of-sale software app with zero custom development required.`,
    },
    {
      id: 'dispute-policy-and-deposit-schedules',
      title: 'Square Chargeback Protection ($0 Dispute Fees) and Payout Timing',
      body: `Square provides an outstanding risk benefit unmatched by Stripe or PayPal:

1. **Zero Chargeback / Dispute Fees ($0.00)**: Unlike Stripe and PayPal (which assess $15.00 every time a customer files a dispute), Square **never charges dispute administration fees**. Furthermore, Square covers up to $250 per month in eligible chargebacks under its built-in chargeback protection program.
2. **Standard Next-Day Payouts**: Funds are deposited automatically into your linked business bank account the **next business day** at $0 charge (e.g., Monday sales deposit Tuesday by 4:00 PM).
3. **Instant Transfers**: Available 24/7 for a **1.75% fee**, transferring cleared funds to an eligible debit card or bank account in seconds.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Daily Coffee Shop Sales Volume Analysis ($1,500.00 Gross)',
    scenario:
      'A specialty coffee shop processes 250 in-person transactions per day averaging $6.00 each ($1,500.00 daily gross volume) on Square Free POS (2.6% + 15¢).',
    inputs: {
      dailyRevenue: '$1,500.00',
      totalTransactions: 250,
      averageTicket: '$6.00',
      posRate: '2.6% + $0.15',
    },
    steps: [
      {
        label: 'Variable Percentage Fee Component',
        formula: '$1,500.00 × 0.026',
        amount: '$39.00',
        note: '2.6% assessed on gross volume.',
      },
      {
        label: 'Fixed Transaction Surcharge Component',
        formula: '250 transactions × $0.15',
        amount: '$37.50',
        note: '15¢ per tap/dip assessed 250 times.',
      },
      {
        label: 'Total Daily Processing Fee Paid',
        formula: '$39.00 + $37.50',
        amount: '$76.50 Total Fee',
        note: 'Represents an effective fee rate of 5.10%.',
      },
      {
        label: 'Net Daily Deposit to Bank',
        formula: '$1,500.00 − $76.50',
        amount: '$1,423.50 Cleared Net',
        note: 'Deposited into business checking the next business day.',
      },
    ],
    takeaway:
      'On small $6.00 coffee orders, the 15¢ fixed fee equals nearly half the total processing cost ($37.50 out of $76.50). Upgrading to Square for Restaurants (2.6% + 10¢) would immediately save $12.50 per day ($375/month) on fixed fees.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Pricing an In-Person Repair to Clear Exactly $150.00 Net',
    scenario:
      'An auto-detailing shop wants to net exactly $150.00 after Square POS processing fees (2.6% + 15¢).',
    inputs: {
      targetNetPayout: '$150.00',
      percentageRate: '2.6%',
      fixedFee: '$0.15',
    },
    steps: [
      {
        label: 'Add 15¢ Fixed Fee to Net Target',
        formula: '$150.00 + $0.15',
        amount: '$150.15',
        note: 'Numerator calculation.',
      },
      {
        label: 'Compute Net Divisor',
        formula: '1.0 − 0.026',
        amount: '0.974',
        note: '97.4% retained after 2.6% fee.',
      },
      {
        label: 'Calculate Required Retail Price',
        formula: '$150.15 ÷ 0.974',
        amount: '$154.16',
        note: '$150.15 ÷ 0.974 = $154.158, rounded to $154.16.',
      },
      {
        label: 'Verification Check (Forward Deduction)',
        formula: '($154.16 × 0.026) + $0.15',
        amount: '$4.16 Fee',
        note: '$4.008 percentage fee + $0.15 fixed fee = $4.16.',
      },
      {
        label: 'Final Cleared Deposit',
        formula: '$154.16 − $4.16',
        amount: '$150.00',
        note: 'Deposits exactly $150.00 net.',
      },
    ],
    takeaway:
      'Charge the customer $154.16 to net exactly $150.00. Simple percentage markups ($150 × 1.026 = $153.90) would result in a 26¢ loss.',
  },
  faqs: [
    {
      question: 'What is Square’s processing fee for in-person payments?',
      answer:
        'Square charges 2.6% + 15¢ per transaction for tapped, dipped, or swiped cards on the standard free plan. Square for Restaurants offers 2.6% + 10¢, and Square Plus plans drop rates to 2.5% + 10¢.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'Does Square charge monthly fees or equipment rental fees?',
      answer:
        'No. The standard Square Point of Sale software has $0 monthly fees. Hardware is purchased outright (starting at $59 for the contactless reader) with no recurring lease commitments.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'How much does Square charge if a customer files a chargeback dispute?',
      answer:
        'Square charges $0.00 in dispute fees. Unlike Stripe or PayPal (which charge $15 per dispute), Square never assesses administrative chargeback fees and covers up to $250/month in eligible disputes.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'How fast does Square deposit funds into my bank account?',
      answer:
        'Square deposits funds automatically the next business day at no charge. Instant transfers are available 24/7 for a 1.75% fee to transfer funds to a debit card in seconds.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
    {
      question: 'What is Square’s fee for manually typing in a credit card?',
      answer:
        'When you manually key in a credit card number without swiping or dipping, Square charges 3.5% + 15¢ per transaction due to higher card-not-present fraud risk.',
      sourceUrl: 'https://squareup.com/us/en/pricing',
    },
  ],
};

export default squareInPersonContent;

