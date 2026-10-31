import type { PageContent } from '../types.ts';

export const usdToEurContent: PageContent = {
  slug: 'usd-to-eur',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (USD to EUR Cross-Border) | FeeKit',
  metaDescription:
    'Compare real Wise vs Stripe merchant payout fees for USD to EUR transfers. Breakdown of Wise 0.43% + $0.50 variable pricing vs Stripe 1.5% international + 1.0% FX markup and SEPA clearing.',
  h1: 'Wise vs Stripe Fee Comparison: USD to EUR Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe Cross-Border Pricing Schedules',
    url: 'https://wise.com/pricing',
    citation: 'Wise Official Route Pricing API (USD->EUR) and Stripe Official US Cross-Border Fee Schedule.',
  },
  overview:
    'Transferring funds from US Dollars (USD) to Euros (EUR) involves navigating two fundamentally distinct processing architectures. Stripe processes cross-border card transactions through international card networks (Visa/Mastercard) and applies standard domestic fees (2.9% + $0.30) plus a 1.5% international card surcharge and a 1.0% currency conversion markup, resulting in a 5.4% + $0.30 cumulative charge. Conversely, Wise operates an interconnected local account infrastructure: funds enter via US domestic ACH or Fedwire and pay out through the European Single Euro Payments Area (SEPA) network at the mid-market exchange rate, assessing only a 0.43% variable fee and a $0.50 fixed charge. Understanding the volume thresholds and banking rails between USD and EUR protects international business margins.',
  sections: [
    {
      id: 'usd-to-eur-fee-mechanics',
      title: 'Fee Mechanics: Wise Mid-Market vs Stripe Cross-Border Card Processing',
      body: `Cross-border financial transactions between the United States and the Eurozone are subject to different fee models depending on whether you use payment gateway processing or international treasury transfer:

- **Stripe US Domestic + Cross-Border Card Processing**: When a European buyer pays a US Stripe merchant in EUR with a European credit card, Stripe charges:
  - Standard domestic card rate: **2.90% + $0.30**
  - International card fee: **+1.50%**
  - Currency conversion fee: **+1.00%** (if settled into a USD bank account)
  - **Combined Merchant Fee**: **5.40% + $0.30**. On a €1,000 charge, total processing costs equal €54.30.
- **Wise Treasury & Commercial Transfer Rail**: Wise does not intermediate card merchant disputes; instead, it executes direct bank-to-bank settlements:
  - Exchange Rate: Real mid-market rate pulled directly from Reuters/interbank data with zero hidden spread.
  - Variable Fee: **0.43%** of the transferred volume.
  - Fixed Network Surcharge: **$0.50** flat per transfer.
  - **Total Cost on $1,000.00**: Only **$4.80** ($4.30 variable + $0.50 fixed). Wise delivers **$995.20** into the target currency at interbank exchange rates.`,
    },
    {
      id: 'sepa-settlement-banking-rails',
      title: 'European Banking Rails: SEPA Direct Credit vs Card Payout Timing',
      body: `Settlement speed and recipient bank deductions depend on the underlying payment rail:

1. **SEPA Credit Transfer (SCT)**: Payouts executed via Wise enter the Single Euro Payments Area (SEPA) network as domestic Euro transfers. Under European Union Regulation (EC) No 924/2009, recipient banks inside the EEA cannot levy incoming wire charges on SEPA payments. Funds typically arrive within 1 business day (or instantly under SEPA Instant Credit Transfer).
2. **Traditional SWIFT Intermediary Fees**: When Stripe payouts or international bank wires route via correspondent banking networks, intermediary banks (correspondents) frequently deduct €15.00 to €35.00 in lifting fees before the funds land in the destination account. Wise avoids SWIFT fees entirely by paying out from its local European depository accounts.
3. **Payout Timing**: Stripe standard payouts to US bank accounts take 2 business days on a rolling schedule. Converting and withdrawing Euro balances through multi-currency bank accounts requires an additional 2-4 business days. Wise transfers funded by ACH take 1-2 business days, while debit card funded transfers arrive in the European recipient account within minutes.`,
    },
    {
      id: 'fx-spread-transparency',
      title: 'Currency Conversion: Mid-Market Rate vs Hidden Bank Markups',
      body: `A critical cost driver often hidden in small print is foreign exchange markup:

- **Mid-Market Exchange Rate**: The mid-point between wholesale global buy and sell rates. Wise utilizes this independent baseline without markup.
- **Credit Card Scheme FX Markups**: Card schemes (Visa/Mastercard) and payment gateways typically add between **1.0% and 3.0%** spread above the interbank rate. On an invoice of $10,000, an exchange rate markup of 2.0% represents an unitemized deduction of $200.00 before visible gateway processing fees are even computed.
- **Break-Even Recommendation**: For SaaS companies and online stores processing point-of-sale customer checkout carts, Stripe is unavoidable due to card checkout conversion rates. However, for B2B contracts, client retainers, and cross-border vendor payments, billing clients directly via Wise bank transfer yields net savings of 4.0% to 5.0% of gross invoice value.`,
    },
    {
      id: 'strategic-recommendation',
      title: 'Optimal Hybrid Architecture: Combining Stripe and Wise for Maximum Yield',
      body: `Leading international online businesses implement a multi-rail architecture to optimize revenue retention:

1. **Stripe for Low-Ticket E-Commerce & Subscriptions**: Keep customer checkouts frictionless by accepting credit cards, Apple Pay, and SEPA Direct Debit on Stripe.
2. **Stripe Multi-Currency Balance Payout to Wise EUR Account**: Open a virtual European IBAN inside a Wise Business account. Connect this IBAN directly to Stripe as your EUR payout account. Stripe will deposit Euro sales without forcing a 1.0% or 2.0% currency conversion into USD.
3. **Wise for Manual Conversion & Vendor Operations**: Once EUR funds sit in your Wise Business account, convert EUR to USD only when market conditions are favorable at the flat 0.43% rate, or use the EUR directly to pay European contractors and software vendors at zero conversion cost.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $5,000 USD to EUR International Transfer (Illustrative FX 0.9200)',
    scenario:
      'A US engineering consultancy transfers $5,000.00 USD to a European subcontractor in Germany, comparing Wise direct transfer versus receiving cross-border payment on Stripe.',
    inputs: {
      transferAmountUSD: '$5,000.00',
      illustrativeExchangeRate: '1 USD = 0.9200 EUR (Illustrative Baseline)',
      wiseVariableRate: '0.43%',
      wiseFixedFee: '$0.50',
      stripeCrossBorderRate: '5.40% + $0.30',
    },
    steps: [
      {
        label: 'Wise Variable Fee Calculation',
        formula: '$5,000.00 × 0.43%',
        amount: '$21.50',
        note: 'Pure percentage fee on volume',
      },
      {
        label: 'Wise Fixed Surcharge',
        formula: 'Flat fixed transfer cost',
        amount: '$0.50',
        note: 'Covers ACH inbound clearing',
      },
      {
        label: 'Total Wise Cost',
        formula: '$21.50 + $0.50',
        amount: '$22.00',
        note: 'Effective total fee is 0.44%',
      },
      {
        label: 'Wise Net USD Converted',
        formula: '$5,000.00 - $22.00',
        amount: '$4,978.00',
        note: 'Transferred at mid-market rate',
      },
      {
        label: 'Wise EUR Delivered to German Bank',
        formula: '$4,978.00 × 0.9200',
        amount: '€4,579.76',
        note: 'Arrives via SEPA with zero lifting fee',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '($5,000.00 × 5.40%) + $0.30',
        amount: '$270.30',
        note: 'Includes 2.9% base + 1.5% intl + 1.0% FX',
      },
      {
        label: 'Stripe EUR Equivalent Delivered',
        formula: '($5,000.00 - $270.30) × 0.9200',
        amount: '€4,351.32',
        note: 'Stripe delivers €228.44 less than Wise',
      },
    ],
    takeaway:
      'On a $5,000 USD to EUR transaction, Wise delivers €4,579.76 versus Stripe’s €4,351.32, saving the business $248.30 (approx. €228.44) in fees.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Funding a Net €5,000 Euro Invoice from USD',
    scenario:
      'You must pay an exact contractor invoice of €5,000.00 EUR in full using US Dollars. How much USD must you initiate through Wise at an illustrative exchange rate of 0.9200?',
    inputs: {
      targetEuroPayout: '€5,000.00',
      illustrativeExchangeRate: '0.9200 EUR per USD',
      wiseVariableRate: '0.43%',
      wiseFixedFee: '$0.50',
    },
    steps: [
      {
        label: 'Target USD Amount Needed After Fees',
        formula: '€5,000.00 ÷ 0.9200',
        amount: '$5,434.78',
        note: 'Required converted dollar principal',
      },
      {
        label: 'Gross USD Deposit Required (Reverse Math)',
        formula: '($5,434.78 + $0.50) ÷ (1 - 0.0043)',
        amount: '$5,458.75',
        note: 'Accounting for Wise 0.43% + $0.50 fee',
      },
      {
        label: 'Total Fee Deducted by Wise',
        formula: '($5,458.75 × 0.43%) + $0.50',
        amount: '$23.97',
        note: 'Transparent total cost',
      },
      {
        label: 'Net USD Converted',
        formula: '$5,458.75 - $23.97',
        amount: '$5,434.78',
        note: 'Exactly matches €5,000.00 requirement',
      },
    ],
    takeaway:
      'To deliver exactly €5,000.00 net via Wise at 0.9200 EUR/USD, send $5,458.75. On Stripe, delivering the same net amount would require initiating over $5,730.00 due to compounding cross-border card fees.',
  },
  faqs: [
    {
      question: 'What is the exact Wise fee for sending USD to EUR in 2026?',
      answer:
        'Wise charges a 0.43% variable fee plus a flat $0.50 fixed transfer surcharge for converting USD to EUR via ACH bank debit. If funding via domestic wire transfer, Wise charges a flat $4.14 wire receipt fee plus the 0.43% conversion fee.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Why does Stripe charge 5.4% + $0.30 for international European cards?',
      answer:
        'Stripe’s published pricing is 2.9% + $0.30 for domestic cards. When a customer uses a card issued outside the US (such as in France or Germany), Stripe adds a mandatory 1.5% international payment fee. If the transaction is charged in EUR and converted to USD, an additional 1.0% currency conversion markup applies, totaling 5.4% + $0.30.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'Will European recipient banks charge fees on incoming Wise transfers?',
      answer:
        'No. Wise pays out from local partner banking entities within the Eurozone directly via SEPA (Single Euro Payments Area). Under EU banking regulations, banks cannot charge incoming fees for standard SEPA credit transfers.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Can I connect a Wise Business EUR account to Stripe to avoid FX fees?',
      answer:
        'Yes. You can obtain a virtual European IBAN through Wise Business and add it as a EUR payout account in your Stripe Dashboard. When European customers pay in Euros, Stripe will deposit EUR directly into your Wise account without charging the 1.0% currency conversion fee.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'Is the exchange rate shown in the FeeKit calculator guaranteed?',
      answer:
        'The exchange rates displayed in worked examples are dated illustrative baselines. Wise guarantees the live interbank exchange rate for 24 to 48 hours once you initiate a transfer, protecting you against adverse foreign exchange market fluctuations.',
      sourceUrl: 'https://wise.com/pricing',
    },
  ],
};

export default usdToEurContent;

