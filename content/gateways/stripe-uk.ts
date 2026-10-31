import type { PageContent } from '../types.ts';

export const stripeUkContent: PageContent = {
  slug: 'stripe-uk',
  family: 'gateways',
  title: 'Stripe Fee Calculator UK (1.5% + 20p) | FeeKit',
  metaDescription:
    'Calculate exact Stripe UK processing fees and net payouts for domestic UK cards (1.5% + 20p), EEA cards (2.5% + 20p), international cards (3.25% + 20p), and BACS Direct Debit (1.0% capped at £2.00).',
  h1: 'Stripe Fee Calculator UK & HMRC-Compliant Fee Schedule',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Stripe Official Pricing (United Kingdom)',
    url: 'https://stripe.com/gb/pricing',
    citation: 'Stripe Payments UK Ltd, FCA Authorised Electronic Money Institution (FRN 900461).',
  },
  overview:
    'In the United Kingdom, Stripe operates under European interchange caps, providing substantially lower baseline card processing fees than in North America. Standard domestic consumer credit and debit cards cost 1.5% + 20p per successful transaction. However, cross-border European Economic Area (EEA) cards incur 2.5% + 20p, while international non-EEA cards jump to 3.25% + 20p (plus an optional 2% currency conversion fee). UK merchants can achieve immense margin relief on B2B contracts by routing transactions through BACS Direct Debit, which is capped at £2.00.',
  sections: [
    {
      id: 'uk-fee-schedule-breakdown',
      title: 'Stripe UK Standard Published Fee Structure',
      body: `Stripe assesses distinct pricing tiers in the UK market governed by UK Interchange Fee Regulations:

- **Standard Domestic UK Cards**: **1.5% + 20p** per successful charge on UK consumer cards (Visa, Mastercard, Maestro).
- **UK Commercial & Corporate Cards**: **1.9% + 20p** for business purchasing cards.
- **EEA Cards (European Union)**: **2.5% + 20p** for cards issued within the European Economic Area post-Brexit.
- **International Non-EEA Cards**: **3.25% + 20p** for US, Canadian, Australian, and other non-European consumer cards.
- **Currency Conversion (FX Markup)**: **+2.00%** if the transaction currency differs from your UK settlement bank account currency (GBP).
- **BACS Direct Debit**: **1.00% + 20p**, strictly capped at **£2.00** maximum per transaction.
- **In-Person POS (Stripe Terminal UK)**: **1.4% + 10p** per card-present transaction using WisePad 3 or BBPOS WisePOS E card readers.`,
    },
    {
      id: 'uk-bacs-vs-card-breakeven',
      title: 'BACS Direct Debit vs Card Interchange: The £2.00 Cap Advantage',
      body: `For UK commercial services, agency retainers, and B2B SaaS subscriptions, accepting credit cards is an expensive convenience compared to statutory BACS automated clearing:

- On a **£100.00 transaction**: Domestic card fee is **£1.70** (£100 × 1.5% + 20p) vs BACS fee of **£1.20** (£100 × 1.0% + 20p). BACS saves 50p.
- On a **£500.00 transaction**: Domestic card fee is **£7.70** vs BACS fee of **£2.00** (where the £2.00 statutory cap halts further fees). BACS saves £5.70.
- On a **£2,000.00 corporate retainer**: Domestic card fee is **£30.20** (or **£65.20** if paid via a US corporate card) vs BACS fee of **£2.00**. BACS saves between £28.20 and £63.20 per invoice.

The mathematical break-even threshold where BACS hits its £2.00 ceiling is **£180.00** ((£2.00 − £0.20) ÷ 0.01). Any UK invoice exceeding £180.00 should prioritize BACS Direct Debit over card checkout.`,
    },
    {
      id: 'vat-and-operational-disputes',
      title: 'UK VAT on Stripe Fees, Dispute Costs, and Non-Refundable Surcharges',
      body: `UK accounting teams must manage several tax and compliance nuances:

1. **VAT Reverse Charge on Stripe Fees**: Stripe Payments UK Ltd invoices payment processing services under the financial intermediary exemption (Schedule 9, Group 5 of the Value Added Tax Act 1994). Processing fees are exempt from standard UK output VAT. However, software add-on services (such as Stripe Radar, Stripe Tax, and Stripe Invoicing software fees) are classified as electronically supplied services subject to the standard 20% VAT reverse charge mechanism on your quarterly HMRC MTD return.
2. **Dispute / Chargeback Fee (£15.00)**: Stripe assesses a non-refundable **£15.00 dispute administration fee** if a cardholder files a chargeback with their UK or international bank.
3. **Refund Fee Retention**: In line with Stripe global terms, original processing fees are not returned when issuing customer refunds. Refunding a £200 order results in a permanent net cash loss of £3.20.`,
    },
    {
      id: 'reverse-calculation-uk',
      title: 'Reverse Calculation: How to Invoice UK Clients to Net Exactly 100%',
      body: `To receive an exact net figure in British Pounds after Stripe UK card processing fees, use the statutory net-to-gross divisor formula:

$$\\text{Gross Charge (GBP)} = \\frac{\\text{Target Net Payout} + \\text{Fixed Fee (0.20)}}{1 - \\text{Percentage Rate (0.015)}}$$

To pocket exactly **£1,000.00 net** on a domestic UK card:
$$\\text{Gross Charge} = \\frac{1000 + 0.20}{1 - 0.015} = \\frac{1000.20}{0.985} = \\text{£}1,015.43$$
When the client pays £1,015.43, Stripe deducts £1,015.43 × 1.5% (£15.23) + 20p = £15.43. Your net cleared bank deposit is exactly £1,000.00.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Multi-Tier Ticket Size Analysis on UK Domestic Cards',
    scenario:
      'Comparison of three domestic UK card payments processed at 1.5% + 20p, illustrating effective fee compression as order values grow.',
    inputs: {
      standardRate: '1.5%',
      fixedFee: '20p (£0.20)',
      domesticRail: 'Standard UK Domestic Card',
    },
    steps: [
      {
        label: 'Ticket 1: £10.00 Coffee & Lunch Takeaway',
        formula: '(£10.00 × 0.015) + £0.20',
        amount: '35p Fee | £9.65 Net',
        note: 'Effective fee rate is 3.50% due to the 20p fixed surcharge.',
      },
      {
        label: 'Ticket 2: £100.00 E-commerce Fashion Order',
        formula: '(£100.00 × 0.015) + £0.20',
        amount: '£1.70 Fee | £98.30 Net',
        note: 'Effective fee rate drops to 1.70%.',
      },
      {
        label: 'Ticket 3: £1,000.00 Agency Consulting Deposit',
        formula: '(£1,000.00 × 0.015) + £0.20',
        amount: '£15.20 Fee | £984.80 Net',
        note: 'Effective fee rate is 1.52%, closely matching the 1.5% base percentage.',
      },
    ],
    takeaway:
      'UK domestic interchange caps make Stripe significantly cheaper than in the US (1.5% + 20p vs 2.9% + 30¢). However, on sub-£10 orders, the 20p fixed surcharge still produces a 3.5% effective rate.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating a £500.00 Target Net Payout',
    scenario:
      'A UK freelance graphic designer needs to receive exactly £500.00 deposited into their Barclays business account after Stripe card processing deductions.',
    inputs: {
      targetNetPayout: '£500.00',
      percentageRate: '1.5%',
      fixedFee: '£0.20',
    },
    steps: [
      {
        label: 'Add Fixed 20p Surcharge to Net Target',
        formula: '£500.00 + £0.20',
        amount: '£500.20',
        note: 'Numerator calculation step.',
      },
      {
        label: 'Compute Percentage Divisor',
        formula: '1.0 − 0.015',
        amount: '0.985',
        note: 'Rate complement representing net retainage.',
      },
      {
        label: 'Calculate Required Gross Invoice',
        formula: '£500.20 ÷ 0.985',
        amount: '£507.82',
        note: '£500.20 ÷ 0.985 = £507.817, rounded to £507.82.',
      },
      {
        label: 'Verification Check (Forward Deduction)',
        formula: '(£507.82 × 0.015) + £0.20',
        amount: '£7.82 Fee',
        note: '£7.617 percentage fee + £0.20 fixed fee = £7.82.',
      },
      {
        label: 'Final Net Bank Deposit',
        formula: '£507.82 − £7.82',
        amount: '£500.00',
        note: 'Matches target payout with zero penny discrepancy.',
      },
    ],
    takeaway:
      'Invoice the client for £507.82 to net exactly £500.00. Adding 1.5% flat (£500 × 1.015 = £507.50) would result in a 31p shortfall.',
  },
  faqs: [
    {
      question: 'What is Stripe’s standard fee for UK businesses?',
      answer:
        'Stripe charges 1.5% + 20p per successful transaction on standard domestic UK credit and debit cards. European Economic Area (EEA) cards cost 2.5% + 20p, while international non-EEA cards cost 3.25% + 20p.',
      sourceUrl: 'https://stripe.com/gb/pricing',
    },
    {
      question: 'How much does BACS Direct Debit cost on Stripe UK?',
      answer:
        'BACS Direct Debit costs 1.00% + 20p per successful transaction, strictly capped at a maximum fee of £2.00. Transactions over £180.00 always pay the £2.00 maximum cap, saving significant fees on large B2B payments.',
      sourceUrl: 'https://stripe.com/gb/pricing',
    },
    {
      question: 'Does Stripe UK charge VAT on transaction fees?',
      answer:
        'Stripe payment processing fees are exempt from UK VAT under financial services exemptions (VATA 1994 Schedule 9, Group 5). However, ancillary software fees such as Stripe Radar or Stripe Tax are subject to the standard 20% reverse charge rule for VAT-registered businesses.',
      sourceUrl: 'https://stripe.com/gb/pricing',
    },
    {
      question: 'How long do Stripe payouts take to arrive in a UK bank account?',
      answer:
        'Standard payouts for UK merchants operate on a rolling 3-business-day schedule (or 7 days for newly established accounts). Instant Payouts are available to eligible UK debit cards for a 1.0% fee.',
      sourceUrl: 'https://stripe.com/gb/pricing',
    },
    {
      question: 'Does Stripe UK refund transaction fees when I refund a customer?',
      answer:
        'No. Under Stripe terms of service, processing fees (1.5% + 20p) are permanently retained by Stripe and are not refunded when you process a full or partial customer refund.',
      sourceUrl: 'https://stripe.com/gb/pricing',
    },
    {
      question: 'What is the chargeback dispute fee for Stripe in the UK?',
      answer:
        'Stripe charges a flat £15.00 fee per dispute if a customer files a chargeback with their card issuer. The £15.00 fee is non-refundable regardless of the dispute outcome.',
      sourceUrl: 'https://stripe.com/gb/pricing',
    },
  ],
};

export default stripeUkContent;

