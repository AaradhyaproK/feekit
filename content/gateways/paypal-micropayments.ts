import type { PageContent } from '../types.ts';

export const paypalMicropaymentsContent: PageContent = {
  slug: 'paypal-micropayments',
  family: 'gateways',
  title: 'PayPal Micropayments Fee Calculator (4.99% + $0.09) | FeeKit',
  metaDescription:
    'Calculate PayPal Micropayments fees (4.99% + $0.09) for digital goods and micro-transactions under $12.00. Compare against standard PayPal Checkout (3.49% + $0.49) to find your exact break-even point.',
  h1: 'PayPal Micropayments Fee Calculator & Break-Even Analysis',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'PayPal Official Merchant Fees (Micropayments Schedule)',
    url: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    citation: 'PayPal US Merchant User Agreement (Micropayments Pricing Schedule).',
  },
  overview:
    'PayPal Micropayments is a specialized pricing program engineered for creators, game developers, publishers, and digital goods merchants selling low-ticket items (typically under $12.00). In exchange for a higher variable percentage rate of 4.99%, PayPal slashes the fixed transaction fee from $0.49 down to just $0.09. On a $2.00 digital sticker or music download, switching from standard PayPal Checkout (3.49% + $0.49 = $0.56 fee) to Micropayments (4.99% + $0.09 = $0.19 fee) cuts your processing costs by 66%, saving 37 cents on every sale.',
  sections: [
    {
      id: 'micropayments-rate-mechanics',
      title: 'PayPal Micropayments Fee Structure & Qualifications',
      body: `PayPal assesses micropayments pricing across qualifying digital transactions:

- **Domestic US Micropayments**: **4.99% + $0.09** per successful transaction.
- **International Micropayments**: **+1.50%** cross-border surcharge (totaling **6.49% + $0.09**).
- **Standard PayPal Checkout (For Comparison)**: **3.49% + $0.49**.
- **Program Qualification**: Merchants must submit an application through PayPal Business support to enable micropayments on an account level. Once enabled, all transactions processed through that account or specific API credentials settle under the 4.99% + $0.09 schedule.`,
    },
    {
      id: 'mathematical-breakeven-point',
      title: 'The Exact Mathematical Break-Even Point ($26.67 vs Checkout; $19.61 vs Standard Card)',
      body: `To determine whether your product catalog will save money on Micropayments, equate the two fee equations:

$$\\text{Micropayments Fee} = 0.0499 \\times A + 0.09$$
$$\\text{PayPal Checkout Fee} = 0.0349 \\times A + 0.49$$

Setting them equal to find the break-even amount ($A$):
$$0.0499A + 0.09 = 0.0349A + 0.49$$
$$(0.0499 - 0.0349)A = 0.49 - 0.09$$
$$0.0150A = 0.4000$$
$$A = \\frac{0.4000}{0.0150} = \\$26.67$$

- **Any transaction below $26.67 is CHEAPER on Micropayments**:
  - At **$2.00**: Standard fee is **56¢** vs Micropayments fee of **19¢** (Micropayments saves **37¢, or 66%**).
  - At **$5.00**: Standard fee is **66¢** vs Micropayments fee of **34¢** (Micropayments saves **32¢, or 48%**).
  - At **$10.00**: Standard fee is **84¢** vs Micropayments fee of **59¢** (Micropayments saves **25¢, or 30%**).
  - At **$20.00**: Standard fee is **$1.19** vs Micropayments fee of **$1.09** (Micropayments saves **10¢**).
  - At **$26.67**: Both pricing models cost exactly **$1.42**.
- **Transactions above $26.67 become MORE EXPENSIVE on Micropayments**:
  - At **$50.00**: Standard fee is **$2.24** vs Micropayments fee of **$2.59** (Micropayments costs 35¢ more).`,
    },
    {
      id: 'dual-account-architecture',
      title: 'Dual-Account Architecture for Mixed Ticket Catalogs',
      body: `Because PayPal applies micropayments on an account-wide basis, merchants selling both $3.00 digital presets and $150.00 consulting packages should operate **two separate PayPal business accounts**:

1. **Account A (Micropayments - 4.99% + $0.09)**: Route low-ticket cart checkouts (under $15.00) through this account's client ID.
2. **Account B (Standard Checkout - 3.49% + $0.49)**: Route high-ticket checkouts ($15.00 and above) through your primary commercial account.

This automated routing ensures you harvest 30¢+ savings on every micro-transaction without suffering higher percentage penalties on large sales.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Digital Creator Selling 1,000 Presets at $3.00 Each',
    scenario:
      'A digital creator sells 1,000 Lightroom presets per month at $3.00 each ($3,000 gross monthly volume), comparing standard PayPal Checkout against PayPal Micropayments.',
    inputs: {
      unitPrice: '$3.00',
      monthlyVolume: '1,000 units ($3,000 gross)',
      standardRate: '3.49% + $0.49',
      micropaymentsRate: '4.99% + $0.09',
    },
    steps: [
      {
        label: 'Fee per Unit on Standard PayPal Checkout',
        formula: '($3.00 × 0.0349) + $0.49',
        amount: '$0.59 Fee | $2.41 Net',
        note: 'Effective fee rate is an enormous 19.82%.',
      },
      {
        label: 'Fee per Unit on PayPal Micropayments',
        formula: '($3.00 × 0.0499) + $0.09',
        amount: '$0.24 Fee | $2.76 Net',
        note: 'Effective fee rate drops to 7.99%.',
      },
      {
        label: 'Monthly Fee Comparison (1,000 Units)',
        formula: '1,000 × $0.59 vs 1,000 × $0.24',
        amount: '$594.70 vs $239.70',
        note: 'Total monthly fee drops from $595 to $240.',
      },
      {
        label: 'Annual Cash Savings Kept by Creator',
        formula: '($594.70 − $239.70) × 12 months',
        amount: '$4,260.00 / year',
        note: 'Pockets an extra $4,260 in pure profit on the identical sales volume.',
      },
    ],
    takeaway:
      'For sub-$5 items, standard fixed fees are devastating. Switching to Micropayments saves $4,260 annually on just $3,000 in monthly sales.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Pricing a Micro-Download to Net Exactly $5.00',
    scenario:
      'A software developer wants to clear exactly $5.00 in net profit on an icon pack sale via PayPal Micropayments (4.99% + $0.09).',
    inputs: {
      targetNetPayout: '$5.00',
      percentageRate: '4.99%',
      fixedFee: '$0.09',
    },
    steps: [
      {
        label: 'Add 9¢ Fixed Fee to Net Target',
        formula: '$5.00 + $0.09',
        amount: '$5.09',
        note: 'Numerator calculation.',
      },
      {
        label: 'Compute Net Divisor',
        formula: '1.0 − 0.0499',
        amount: '0.9501',
        note: '95.01% retained after 4.99% fee.',
      },
      {
        label: 'Calculate Required Retail Price',
        formula: '$5.09 ÷ 0.9501',
        amount: '$5.36',
        note: '$5.09 ÷ 0.9501 = $5.357, rounded to $5.36.',
      },
      {
        label: 'Verification Check (Forward Deduction)',
        formula: '($5.36 × 0.0499) + $0.09',
        amount: '$0.36 Fee',
        note: '$0.267 percentage fee + $0.09 fixed fee = $0.36.',
      },
      {
        label: 'Final Net Deposit',
        formula: '$5.36 − $0.36',
        amount: '$5.00',
        note: 'Deposits exactly $5.00 net.',
      },
    ],
    takeaway:
      'Price the download at $5.36 to net $5.00 on Micropayments. On standard PayPal Checkout (3.49% + $0.49), you would need to price it at $5.69 to net $5.00, forcing a 33¢ higher price on your customer.',
  },
  faqs: [
    {
      question: 'What is PayPal’s fee for Micropayments?',
      answer:
        'PayPal Micropayments charges 4.99% + $0.09 per transaction for domestic US transactions. International micropayments cost 6.49% + $0.09.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'What is the break-even point for PayPal Micropayments?',
      answer:
        'The break-even point between PayPal Micropayments (4.99% + $0.09) and standard PayPal Checkout (3.49% + $0.49) is exactly $26.67. Any transaction under $26.67 is cheaper on Micropayments, with maximum savings realized on sales under $10.00.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'How do I apply for PayPal Micropayments pricing?',
      answer:
        'You must contact PayPal Merchant Customer Support or submit a pricing modification request through your PayPal Business account dashboard. Once approved, the fee schedule is assigned to your account.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Can I use one PayPal account for both micropayments and standard pricing?',
      answer:
        'Generally, PayPal assigns micropayments pricing to an entire account. Merchants with mixed product catalogs typically maintain two separate business accounts: one for micropayments (under $15) and one for standard sales ($15+).',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Does PayPal Micropayments apply to in-person payments?',
      answer:
        'Micropayments pricing is primarily designed for online digital sales and API checkouts. For in-person micro-sales under $10.00, PayPal In-Person QR code pricing offers an even lower rate of 2.40% + $0.05.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
  ],
};

export default paypalMicropaymentsContent;

