import type { PageContent } from '../types.ts';

export const stripeKeyedEntryContent: PageContent = {
  slug: 'stripe-keyed-entry',
  family: 'gateways',
  title: 'Stripe Keyed-In & Virtual Terminal Fee Calculator (3.4% + $0.30) | FeeKit',
  metaDescription:
    'Calculate exact processing fees for Stripe manually entered cards (3.4% + $0.30). Understand Virtual Terminal pricing, phone order surcharges, and how to avoid the 0.50% manual entry penalty.',
  h1: 'Stripe Manually Entered Cards & Virtual Terminal Fee Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Stripe Official Pricing & Virtual Terminal Guidelines',
    url: 'https://stripe.com/pricing',
    citation: 'Stripe Dashboard Virtual Terminal Terms & Risk Surcharge Policies.',
  },
  overview:
    'When a merchant manually types customer credit card numbers directly into the Stripe Dashboard Virtual Terminal or accepts telephone orders (MOTO: Mail Order / Telephone Order), Stripe assesses a published fee of 3.4% + $0.30 per successful charge in the United States. This represents an explicit 0.50% surcharge over standard online checkout (2.9% + $0.30). Card brands and payment gateways levy this premium because manually entered card-not-present transactions lack CVV dynamic authentication and 3D Secure verification, carrying significantly elevated fraud and chargeback exposure.',
  sections: [
    {
      id: 'why-keyed-in-costs-more',
      title: 'The Mechanics of the 0.50% Keyed-In Risk Premium',
      body: `Card brand interchange schedules classify transactions based on security verification layers:

1. **Card-Present POS (Stripe Terminal - 2.7% + 5¢)**: Uses EMV chip encryption and NFC tokenization. Lowest fraud risk, lowest interchange fee.
2. **Online Customer Checkout (Stripe Elements / Checkout - 2.9% + 30¢)**: Captures CVV, address verification (AVS), and 3D Secure biometric customer verification.
3. **Manually Entered Cards (Virtual Terminal - 3.4% + 30¢)**: The merchant or customer service representative manually types the 16-digit PAN, expiration date, and CVV into the browser. These transactions bypass 3D Secure and cannot trigger dynamic biometric verification.

To compensate for higher disputed fraud ratios, Stripe charges an additional **50 basis points (+0.50%)** on every manually entered dollar. On $100,000 in annual phone orders, this penalty costs your business an extra $500 in avoidable merchant fees.`,
    },
    {
      id: 'how-to-avoid-keyed-fees',
      title: 'Three Strategies to Eliminate the 0.50% Keyed-In Penalty',
      body: `High-volume merchants taking orders over the phone can eliminate the 3.4% rate entirely using modern payment links and invoice rails:

- **Send Instant Hosted Invoices (Stripe Invoicing)**: Instead of reading card numbers over the phone, generate a Stripe Payment Link or Invoice sent via SMS or email. When the customer clicks the link and pays on their mobile device with Apple Pay or saved autofill, the transaction processes at standard online rates (**2.9% + $0.30**), saving 0.50% and transferring fraud liability via 3D Secure.
- **Utilize In-Person POS Readers (Stripe Terminal)**: For counter sales or service visits, equip technicians with a mobile Stripe Reader. Swiping or tapping the physical card drops the fee to **2.7% + $0.05**, saving 0.70% on percentage and 25¢ on fixed fees.
- **Capture ACH Direct Debit**: For high-ticket invoices over $1,000, encourage direct bank transfers (0.80% capped at $5.00). On a $3,000 invoice, keyed-in card processing costs **$102.30**, whereas ACH costs just **$5.00**, saving $97.30 per transaction.`,
    },
    {
      id: 'chargebacks-and-fraud-liability',
      title: 'Chargeback Exposure on Virtual Terminal Orders',
      body: `Beyond higher transaction percentages, manually entered orders carry severe chargeback vulnerability. When a customer disputes a transaction with the reason code *Fraud - Card-Not-Present*, card issuers side almost universally with the cardholder if the merchant cannot produce physical chip signatures or 3D Secure cryptographic tokens. 

Every dispute triggers Stripe's non-refundable **$15.00 chargeback fee**. If your account dispute rate exceeds 1.0% of total transaction volume, Visa and Mastercard place the account on monitoring programs that levy tens of thousands in regulatory fines or account termination.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Comparing Standard Checkout vs Manually Keyed-In ($250.00 Order)',
    scenario:
      'A wholesale parts distributor processes a $250.00 order. They compare taking the card over the phone via Virtual Terminal (3.4% + $0.30) versus emailing a Stripe payment link (2.9% + $0.30).',
    inputs: {
      orderAmount: '$250.00',
      keyedInRate: '3.4% + $0.30',
      onlineCheckoutRate: '2.9% + $0.30',
    },
    steps: [
      {
        label: 'Compute Manually Entered Fee (Virtual Terminal)',
        formula: '($250.00 × 0.034) + $0.30',
        amount: '$8.80 Fee | $241.20 Net',
        note: 'Effective fee rate is 3.52%.',
      },
      {
        label: 'Compute Online Payment Link Fee',
        formula: '($250.00 × 0.029) + $0.30',
        amount: '$7.55 Fee | $242.45 Net',
        note: 'Effective fee rate is 3.02%.',
      },
      {
        label: 'Calculate Immediate Cash Savings',
        formula: '$8.80 − $7.55',
        amount: '$1.25 Saved',
        note: 'Saves exactly 0.50% of the transaction volume.',
      },
    ],
    takeaway:
      'Sending a digital payment link saves $1.25 on a single $250 order while adding 3D Secure liability protection. Across 1,000 annual phone orders, this workflow shift saves $1,250 in cash.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating a $1,000.00 Net Payout on Keyed Cards',
    scenario:
      'A service contractor wants to net exactly $1,000.00 after manually keying a client card into the Stripe Dashboard.',
    inputs: {
      targetNetPayout: '$1,000.00',
      keyedPercentageRate: '3.4%',
      fixedFee: '$0.30',
    },
    steps: [
      {
        label: 'Add Fixed Fee to Target Net',
        formula: '$1,000.00 + $0.30',
        amount: '$1,000.30',
        note: 'Numerator component.',
      },
      {
        label: 'Calculate Net Complement Divisor',
        formula: '1.0 − 0.034',
        amount: '0.966',
        note: '96.6% retained after 3.4% fee.',
      },
      {
        label: 'Calculate Required Gross Charge',
        formula: '$1,000.30 ÷ 0.966',
        amount: '$1,035.51',
        note: '$1,000.30 ÷ 0.966 = $1,035.507, rounded to $1,035.51.',
      },
      {
        label: 'Verification Check (Forward Deduction)',
        formula: '($1,035.51 × 0.034) + $0.30',
        amount: '$35.51 Fee',
        note: '$35.207 percentage fee + $0.30 fixed fee = $35.51.',
      },
      {
        label: 'Final Net Bank Deposit',
        formula: '$1,035.51 − $35.51',
        amount: '$1,000.00',
        note: 'Deposits exactly $1,000.00 into merchant checking account.',
      },
    ],
    takeaway:
      'To net $1,000.00 on a keyed-in card, invoice the customer for $1,035.51. On standard online card checkout (2.9%), the required invoice is only $1,030.18, saving the client $5.33 in processing costs.',
  },
  faqs: [
    {
      question: 'What is Stripe’s fee for manually entered (keyed-in) cards?',
      answer:
        'Stripe charges 3.4% + $0.30 per successful transaction for manually entered cards in the United States. This is a 0.50% surcharge over standard online checkout (2.9% + $0.30).',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'Why does Stripe charge more for Virtual Terminal transactions?',
      answer:
        'Manually entered card transactions lack CVV dynamic verification, chip tokenization, and 3D Secure biometric confirmation. Card brands assess higher wholesale interchange fees to compensate for significantly higher rates of fraudulent chargebacks on phone and mail orders.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'How can I avoid the 0.50% Stripe keyed-in fee?',
      answer:
        'You can avoid the fee by sending customers a Stripe Payment Link or Invoice via text or email so they complete payment on their own device at standard 2.9% + $0.30 rates, or by using a physical Stripe Terminal reader (2.7% + $0.05).',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'Are international cards more expensive when keyed in manually?',
      answer:
        'Yes. If a manually entered card was issued outside the United States, Stripe adds its standard 1.5% international surcharge on top of the 3.4% keyed-in rate, resulting in a 4.9% + $0.30 total transaction fee.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'What happens if a customer disputes a manually entered payment?',
      answer:
        'Stripe deducts the disputed amount plus a non-refundable $15.00 dispute administration fee. Because manually entered transactions lack 3D Secure, merchants face high evidentiary burdens and rarely win fraud disputes on keyed-in transactions.',
      sourceUrl: 'https://stripe.com/pricing',
    },
  ],
};

export default stripeKeyedEntryContent;

