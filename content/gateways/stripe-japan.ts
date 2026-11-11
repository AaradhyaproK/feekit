import type { PageContent } from '../types.ts';

export const stripeJapanContent: PageContent = {
  slug: 'stripe-japan',
  family: 'gateways',
  title: 'Stripe Japan Pricing & Fee Calculator (3.6% Flat Rate) | FeeKit',
  metaDescription:
    'Calculate exact Stripe Japan processing fees (3.6% flat rate with zero ¥ fixed fee) for Visa, Mastercard, JCB, Amex, international cards (+1.5%), and JPY net payouts.',
  h1: 'Stripe Japan Pricing & JPY Fee Calculator (3.6% No Fixed Fee)',
  lastVerified: '2026-11-11',
  primarySource: {
    name: 'Stripe Official Pricing (Japan)',
    url: 'https://stripe.com/jp/pricing',
    citation: 'Stripe, Inc. / Stripe Japan K.K. Standard Domestic JPY Card Processing Pricing Schedule.',
  },
  overview:
    'Stripe Japan operates one of the cleanest fee models among global merchant gateways: a flat 3.60% transaction percentage with zero fixed per-transaction yen surcharge on standard domestic card payments. Whether accepting Visa, Mastercard, American Express, Diners Club, or Japan-native JCB cards from domestic Japanese consumers, every ¥10,000 purchase yields exactly ¥9,640 net in JPY payout—eliminating the fixed-fee penalty seen on micro-tickets in the US and Europe.',
  sections: [
    {
      id: 'stripe-japan-card-rates',
      title: 'Stripe Japan Pricing Matrix: Cards, JCB & Alternative Rails',
      body: `Japanese merchants onboarding with Stripe Japan K.K. access transparent pay-as-you-go rates with zero monthly platform subscriptions or setup fees:

- **Domestic Card Payments (Visa, Mastercard, Amex, JCB)**: **3.60% + ¥0** flat per successful transaction. Because there is no per-ticket yen surcharge, low-ticket digital sales (¥500–¥1,500) retain the exact same 3.60% effective rate as ¥100,000 B2B invoices.
- **PayPay Wallet Acceptance**: Standard businesses accepting Japanese **PayPay** wallet checkouts via Stripe typically incur **3.98%**, while designated digital-content merchants carry higher category pricing (verify active category eligibility in your Japan dashboard).
- **International Cards Surcharge (+1.5%)**: Cards issued outside Japan (for example, foreign tourists booking hotels or overseas software users paying JPY) incur an additional **1.50%** cross-border card fee, bringing standard card deductions to **5.10%**.
- **Currency Conversion Spread (+2.0%)**: Charging non-JPY currencies (such as USD or EUR) for conversion back into a Japanese domestic bank account settled in Yen adds a **2.00%** foreign exchange conversion surcharge.
- **JCB Transaction Ceiling**: Native Japanese **JCB** processing enabled on Stripe Japan supports transactions up to 8 digits (**¥99,999,999** maximum ticket size).`,
    },
    {
      id: 'zero-fixed-fee-advantage-japan',
      title: 'Why Zero Fixed Fee (¥0) Transforms Small-Ticket Pricing in Japan',
      body: `In North America and the United Kingdom, flat fixed surcharges ($0.30 or 20p) drastically inflate processing percentages on inexpensive purchases. Under Stripe Japan's ¥0 fixed-fee model, small-order unit economics remain completely linear:

- On a **¥500 digital download**: Fee is **¥18** (3.60% effective) instead of suffering a ¥45+ fixed-fee spike.
- On a **¥1,000 cafe or mobile order**: Fee is **¥36** (3.60% effective; ¥964 net payout).
- On a **¥10,000 e-commerce order**: Fee is **¥360** (3.60% effective; ¥9,640 net payout).
- On a **¥100,000 SaaS or consulting invoice**: Fee is **¥3,600** (3.60% effective; ¥96,400 net payout).

For high-frequency consumer businesses, newsletters, paid communities, and mobile apps selling sub-¥2,000 items in Japan, removing the fixed surcharge saves substantial gross margin compared to fixed-plus-percentage payment rails.`,
    },
    {
      id: 'consumption-tax-and-japanese-bookkeeping',
      title: 'Japanese Consumption Tax (JCT) & Settlement Rules for Stripe Japan',
      body: `Operating an online store or SaaS platform incorporated in Japan involves distinct local settlement and accounting considerations:

1. **Zero-Decimal Currency Accounting (JPY)**: Japanese Yen is processed as a zero-decimal integer currency inside Stripe APIs (**amount: 10000** represents ¥10,000, never ¥100.00). Integrations submitting decimals to JPY endpoints fail validation unless formatted as whole Yen integers.
2. **Japanese Consumption Tax Treatment on Merchant Fees**: Under Japan's Consumption Tax Act, statutory credit card settlement and acquiring fees are treated as non-taxable financial transfer transactions (非課税取引). Confirm treatment of ancillary Stripe software features (such as Stripe Billing or Radar add-ons) with your licensed Zeirishi (税理士) tax accountant under Japan's Qualified Invoice System (インボイス制度).
3. **Refunds & Chargebacks**: Standard card processing fees (3.60%) are **not refunded** if you issue a partial or full JPY refund back to a customer's card.`,
    },
    {
      id: 'reverse-calculation-jpy',
      title: 'Reverse Calculation: Exact Formula to Net 100% of Your JPY Target',
      body: `When calculating what gross JPY price covers Stripe Japan's 3.6% deduction with zero rounding error, divide your desired net payout by 0.964 (1 − 0.036):

$$\\text{Gross Charge (JPY)} = \\frac{\\text{Target Net Payout (JPY)}}{1 - 0.036} = \\frac{\\text{Target Net Payout}}{0.964}$$

To net exactly **¥50,000** in your Japanese bank payout on a domestic card transaction:
$$\\text{Gross Charge} = \\frac{50,000}{0.964} \\approx \\text{¥}51,867$$
Stripe deducts ¥51,867 × 3.6% = ¥1,867, leaving **¥50,000 net**.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Stripe Japan Deductions on ¥1,000, ¥10,000 & ¥100,000 Sales',
    scenario:
      'Linear fee breakdown demonstrating how Stripe Japan applies a constant 3.60% percentage across all Japanese Yen order sizes with zero fixed fee.',
    inputs: {
      japanDomesticRate: '3.60%',
      fixedYenFee: '¥0',
      supportedRails: 'Visa, Mastercard, JCB, Amex (Domestic)',
    },
    steps: [
      {
        label: 'Order 1: ¥1,000 Micro-Transaction or Digital Asset',
        formula: '¥1,000 × 0.036',
        amount: '¥36 Fee | ¥964 Net',
        note: 'Zero fixed fee preserves 96.4% take-home even on low-price items.',
      },
      {
        label: 'Order 2: ¥10,000 E-Commerce Apparel Cart',
        formula: '¥10,000 × 0.036',
        amount: '¥360 Fee | ¥9,640 Net',
        note: 'Clean integer math with predictable 3.60% cost.',
      },
      {
        label: 'Order 3: ¥100,000 Annual B2B Software Plan',
        formula: '¥100,000 × 0.036',
        amount: '¥3,600 Fee | ¥96,400 Net',
        note: 'Effective fee stays locked at 3.60%.',
      },
    ],
    takeaway:
      'Because Stripe Japan charges zero fixed Yen fee, merchants never suffer effective rate spikes on small tickets—every domestic JPY transaction maintains a strict 3.60% cost.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Grossing Up a ¥50,000 Target JPY Payout',
    scenario:
      'A Tokyo agency needs exactly ¥50,000 deposited after Stripe Japan 3.60% domestic processing fees.',
    inputs: {
      targetNetJpy: '¥50,000',
      japanRate: '3.60%',
      fixedYenFee: '¥0',
    },
    steps: [
      {
        label: 'Compute Retention Divisor (1 − 0.036)',
        formula: '1.0 − 0.036',
        amount: '0.964',
        note: 'Represents the 96.4% share deposited into your Stripe Japan balance.',
      },
      {
        label: 'Divide Target Net JPY by Divisor',
        formula: '¥50,000 ÷ 0.964',
        amount: '¥51,867',
        note: 'Rounded to nearest whole integer Yen (zero-decimal currency).',
      },
      {
        label: 'Verify Forward 3.6% Deduction',
        formula: '¥51,867 × 0.036',
        amount: '¥1,867 Fee | ¥50,000 Net',
        note: 'Exact ¥50,000 payout with zero shortfall.',
      },
    ],
    takeaway:
      'Always divide by 0.964 rather than multiplying by 1.036—charging ¥51,800 (3.6% naive markup) deducts ¥1,865 and leaves you short by ¥65.',
  },
  faqs: [
    {
      question: 'What is Stripe Japan’s standard transaction fee?',
      answer:
        'Stripe Japan charges a flat 3.6% per successful domestic card transaction (Visa, Mastercard, American Express, and JCB) with ¥0 fixed per-transaction fee and no monthly subscription cost.',
      sourceUrl: 'https://stripe.com/jp/pricing',
    },
    {
      question: 'Does Stripe Japan charge extra for JCB cards?',
      answer:
        'Standard domestic JCB card processing on Stripe Japan shares the same 3.6% baseline pricing as Visa and Mastercard once JCB acceptance is enabled on your Japanese merchant account (separate underwriting approval applies for JCB).',
      sourceUrl: 'https://stripe.com/jp/pricing',
    },
    {
      question: 'How much does Stripe Japan charge for international cards and currency conversion?',
      answer:
        'Payments made using cards issued outside Japan incur an additional 1.5% international card fee (total 5.1% if settled in JPY). If you also charge in a non-JPY currency and convert into Yen for payout, an additional 2.0% currency conversion fee applies.',
      sourceUrl: 'https://stripe.com/jp/pricing',
    },
    {
      question: 'Why does Stripe Japan have no fixed fee compared to US Stripe pricing?',
      answer:
        'Stripe US charges 2.9% + $0.30 fixed, whereas Stripe Japan prices domestic processing at 3.6% flat with ¥0 fixed fee. This simplifies Yen pricing across low-ticket sales without hitting small orders with a ~¥45 fixed surcharge.',
      sourceUrl: 'https://stripe.com/jp/pricing',
    },
    {
      question: 'How frequently does Stripe pay out to Japanese bank accounts?',
      answer:
        'Stripe Japan typically deposits cleared JPY balances weekly to your linked Japanese bank account (with configurable payout schedules in the Dashboard once account verification settles), with zero standard bank transfer withdrawal fee.',
      sourceUrl: 'https://stripe.com/jp/pricing',
    },
  ],
};

export default stripeJapanContent;
