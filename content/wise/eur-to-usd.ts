import type { PageContent } from '../types.ts';

export const eurToUsdContent: PageContent = {
  slug: 'eur-to-usd',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (EUR to USD Cross-Border) | FeeKit',
  metaDescription:
    'Calculate real payment fees for converting Euro (EUR) to US Dollars (USD). Compare Wise 0.45% + €0.55 pricing vs Stripe 1.5% international + 2.0% FX markup and US ACH network clearance.',
  h1: 'Wise vs Stripe Fee Comparison: EUR to USD Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe European Pricing Schedules',
    url: 'https://wise.com/pricing',
    citation: 'Wise European Route Pricing (EUR to USD) and Stripe Europe Official Pricing Schedule.',
  },
  overview:
    'For European businesses and software companies remitting payments or receiving revenue from the United States, currency exchange between Euros (EUR) and US Dollars (USD) represents a primary operating cost. When processing non-European US cards on European Stripe accounts, merchants face standard processing (1.5% for domestic cards, or 2.5% for non-EEA cards) plus a 2.0% currency conversion fee, totaling up to 4.5% + €0.25 per transaction. In contrast, Wise operates local banking relationships within both the European SEPA framework and the United States Federal Reserve ACH network, enabling businesses to exchange EUR to USD at mid-market rates for a low 0.45% variable fee and a flat €0.55 fixed network surcharge.',
  sections: [
    {
      id: 'eur-to-usd-rail-mechanics',
      title: 'Banking Architecture: SEPA Inbound to US ACH Direct Deposit',
      body: `Transfers from the European Union to the United States move across two distinct banking regimes:

- **European Stripe Merchant Processing**: When a US customer uses an American credit card on a European merchant’s website:
  - Non-EEA International Card Fee: **2.50% + €0.25**
  - Currency Conversion Markup: **+2.00%** (when converting USD proceeds to EUR)
  - **Total Transaction Cost**: **4.50% + €0.25**. On a $10,000 order, gateway fees consume over $450.00.
- **Wise Cross-Border Direct Banking Model**:
  - Inbound Funding: European SEPA transfer or iDEAL/SOFORT direct debit (€0.55 fixed cost).
  - Exchange Rate: Real interbank mid-market rate with zero added margin or pips.
  - Conversion Fee: **0.45%** variable fee on the converted balance.
  - Outbound Delivery: Directly through the US **Automated Clearing House (ACH)** network into any US bank account.
  - **Total Cost on €10,000.00**: Only **€45.55** (€45.00 variable + €0.55 fixed), delivering $10,300+ into the destination account with zero intermediary deductions.`,
    },
    {
      id: 'us-banking-regulations-ach-timing',
      title: 'US Federal Reserve Regulation E & Settlement Timelines',
      body: `Key compliance and settlement factors governing EUR to USD fund flows:

1. **US ACH Network Settlement**: Wise deposits funds in the US via standard domestic ACH direct deposit. ACH transfers are cleared by NACHA and the Federal Reserve, arriving in the beneficiary's US bank account within 1 to 2 business days without the $15.00 to $30.00 incoming wire fees typically charged by US banks for international SWIFT wires.
2. **ECB and US Regulatory Alignment**: Wise Europe SA is an authorized payment institution regulated by the National Bank of Belgium, complying with the European Payment Services Directive (PSD2). In the US, Wise operations comply with Federal Reserve Regulation E and anti-money laundering (AML) Bank Secrecy Act requirements.
3. **IRS Form W-8BEN Requirements**: European businesses or contractors receiving US Dollar payments should provide their US clients with an executed IRS Form W-8BEN (for individuals) or W-8BEN-E (for corporations) to establish foreign tax status and claim applicable tax treaty exemptions.`,
    },
    {
      id: 'practical-business-use-cases',
      title: 'Strategic Routing for European Exporters and SaaS Founders',
      body: `How European companies optimize their trans-Atlantic financial architecture:

- **European SaaS Selling to US Enterprises**: European software firms can provide US corporate clients with a virtual US domestic bank account (Routing Number and Account Number) powered by Wise Business. US clients pay via domestic ACH without international wire confusion, and the software company converts proceeds at 0.45% rather than suffering high gateway FX markups.
- **European Companies Paying US Contractors or Vendors**: When paying US tech vendors (AWS, Google Cloud) or remote employees, paying directly in USD from a Wise multi-currency account saves hundreds of Euros monthly in hidden foreign transaction fees.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: €10,000 EUR to USD Transfer (Illustrative FX 1.0850)',
    scenario:
      'A German manufacturing firm pays an American engineering specialist €10,000.00 EUR for technical blueprints, comparing Wise direct bank transfer with Stripe card processing.',
    inputs: {
      transferAmountEUR: '€10,000.00',
      illustrativeExchangeRate: '1 EUR = 1.0850 USD (Illustrative Benchmark)',
      wiseVariableRate: '0.45%',
      wiseFixedFee: '€0.55',
      stripeCombinedRate: '4.50% + €0.25',
    },
    steps: [
      {
        label: 'Wise Variable Percentage Fee',
        formula: '€10,000.00 × 0.45%',
        amount: '€45.00',
        note: '0.45% conversion fee',
      },
      {
        label: 'Wise Fixed Transfer Fee',
        formula: 'Standard fixed network fee',
        amount: '€0.55',
        note: 'Covers SEPA/ACH network execution',
      },
      {
        label: 'Total Wise Deduction',
        formula: '€45.00 + €0.55',
        amount: '€45.55',
        note: 'Effective fee is 0.4555%',
      },
      {
        label: 'Net EUR Converted',
        formula: '€10,000.00 - €45.55',
        amount: '€9,954.45',
        note: 'Converted at interbank mid-market rate',
      },
      {
        label: 'US Dollars Delivered via ACH',
        formula: '€9,954.45 × 1.0850',
        amount: '$10,800.58',
        note: 'Arrives in US checking account with no wire fee',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '(€10,000.00 × 4.50%) + €0.25',
        amount: '€450.25',
        note: '2.5% non-EEA card + 2.0% currency conversion',
      },
      {
        label: 'Stripe USD Equivalent Delivered',
        formula: '(€10,000.00 - €450.25) × 1.0850',
        amount: '$10,361.47',
        note: 'Stripe delivers $439.11 less to recipient',
      },
    ],
    takeaway:
      'On a €10,000 EUR to USD transfer, Wise delivers $10,800.58 compared to Stripe’s $10,361.47, saving the European business €404.70 (approx. $439.11) in transaction and FX costs.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Delivering Exactly $5,000 USD to a US Contractor',
    scenario:
      'A French company needs to ensure an American freelancer receives an exact $5,000.00 USD net payout into their Chase account at an illustrative rate of 1.0850 USD/EUR.',
    inputs: {
      targetUsdPayout: '$5,000.00',
      illustrativeExchangeRate: '1.0850 USD per EUR',
      wiseVariableRate: '0.45%',
      wiseFixedFee: '€0.55',
    },
    steps: [
      {
        label: 'Required EUR Principal After Fees',
        formula: '$5,000.00 ÷ 1.0850',
        amount: '€4,608.29',
        note: 'Net Euro value needed for conversion',
      },
      {
        label: 'Gross EUR Deposit Required',
        formula: '($4,608.29 + €0.55) ÷ (1 - 0.0045)',
        amount: '€4,629.67',
        note: 'Wise reverse calculation formula',
      },
      {
        label: 'Wise Total Fee Assessed',
        formula: '(€4,629.67 × 0.45%) + €0.55',
        amount: '€21.38',
        note: 'Transparent total cost',
      },
      {
        label: 'Net Euro Converted',
        formula: '€4,629.67 - €21.38',
        amount: '€4,608.29',
        note: 'Yields precisely $5,000.00 USD',
      },
    ],
    takeaway:
      'To deliver an exact $5,000.00 USD payout, initiate €4,629.67 via Wise. Fulfilling this invoice via high-street European banks with standard 3% FX markups would require sending over €4,750.00.',
  },
  faqs: [
    {
      question: 'What is the fee for transferring EUR to USD using Wise?',
      answer:
        'Wise charges a 0.45% variable conversion fee plus a €0.55 fixed network fee when funded via SEPA bank transfer. If funded by European debit card, a minor card processing fee applies, but transfer speeds are instantaneous.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Will US banks charge the recipient an incoming wire fee for Wise transfers?',
      answer:
        'No. Wise routes funds domestically through the US Automated Clearing House (ACH) network or local domestic Fedwire partner banks, meaning US recipients receive payments without the standard $15 to $30 incoming wire fee.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'How fast do EUR to USD transfers arrive in the United States?',
      answer:
        'Transfers funded by SEPA bank transfer generally convert and deposit via ACH within 1 to 2 business days. If funded by card or instant payment, funds can arrive on the same business day.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Can European companies pay US contractors directly in USD without a US bank account?',
      answer:
        'Yes. With a Wise Business account, European companies can hold, send, and receive USD using local US routing and account details, eliminating the need to incorporate in the US or open a physical US bank branch account.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Do I need to submit a tax form when paying US contractors from Europe?',
      answer:
        'While European law does not require US tax reporting, US tax law requires US contractors to report worldwide income. Collecting an IRS Form W-9 from US contractors or providing Form W-8BEN to US clients is standard cross-border compliance practice.',
      sourceUrl: 'https://www.irs.gov/forms-pubs/about-form-w-8-ben',
    },
  ],
};

export default eurToUsdContent;

