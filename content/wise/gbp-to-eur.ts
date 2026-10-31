import type { PageContent } from '../types.ts';

export const gbpToEurContent: PageContent = {
  slug: 'gbp-to-eur',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (GBP to EUR Cross-Border) | FeeKit',
  metaDescription:
    'Compare real Wise vs Stripe fees for British Pound (GBP) to Euro (EUR) transfers. Breakdown of Wise 0.35% + £0.30 SEPA settlement vs Stripe 1.5% cross-border + 2.0% FX markup for UK businesses.',
  h1: 'Wise vs Stripe Fee Comparison: GBP to EUR Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe UK/EU Fee Schedules',
    url: 'https://wise.com/pricing',
    citation: 'Wise Route Pricing (GBP to EUR) and Stripe UK Official Pricing Documentation.',
  },
  overview:
    'Following the United Kingdom’s departure from the European Union single market, cross-channel payments between British Pounds (GBP) and Euros (EUR) require careful financial navigation. Under Stripe UK merchant pricing, transactions involving non-UK European cards or requiring currency conversion incur significant surcharges: a 1.5% standard UK domestic fee (or 2.5% for non-UK EEA cards) plus an additional 2.0% currency conversion fee. Conversely, Wise maintains direct access to both the UK domestic banking rail and the European SEPA network, charging an ultra-competitive 0.35% variable fee and a £0.30 fixed transfer cost at pure mid-market exchange rates.',
  sections: [
    {
      id: 'gbp-to-eur-post-brexit-landscape',
      title: 'Post-Brexit UK-to-EU Payment Rails and Fee Structures',
      body: `Although the UK left the European Union, it remains a member of the Single Euro Payments Area (SEPA). However, commercial payment gateways adjust fee structures across the English Channel:

- **Stripe UK Fee Structure for European Sales**:
  - European Economic Area (EEA) Card Processing: **2.50% + £0.20**
  - Currency Conversion Fee (settling EUR into a GBP bank account): **+2.00%**
  - **Combined Merchant Processing Cost**: **4.50% + £0.20**. On a €5,000 transaction, processing charges consume over €225.00 of merchant proceeds.
- **Wise Cross-Channel Direct Banking Model**:
  - Inbound Funding: Direct UK bank transfer via Faster Payments Service (FPS) with zero deposit fee.
  - Exchange Rate: Real mid-market rate with zero exchange markups or hidden currency corridors.
  - Conversion Fee: **0.35%** variable charge.
  - Outbound Delivery: Domestic SEPA Credit Transfer into any European IBAN (€0.00 inbound fee for European recipient).
  - **Total Cost on £5,000.00**: Only **£17.80** (£17.50 variable + £0.30 fixed), preserving £5,400+ in corporate liquidity.`,
    },
    {
      id: 'sepa-compliance-and-iban-rules',
      title: 'SEPA Compliance, IBAN Formatting, and Cross-Border Banking',
      body: `Key technical and compliance requirements for GBP-to-EUR payments:

1. **SEPA Membership**: Because the UK remains in the SEPA zone, UK businesses can initiate Euro-denominated payments that settle under standard SEPA timelines (1 business day) without foreign bank wire charges.
2. **Payer Address Requirement**: Post-Brexit SEPA compliance rules require the originating financial institution to include the full legal name and physical address of the UK sender in the ISO 20022 payment message. Wise automates this compliance step within the transfer flow.
3. **VAT and Invoicing (Reverse Charge)**: Cross-border B2B supply of services between a UK company and an EU business operates under the place of supply rules (outside the scope of UK VAT, subject to customer reverse charge under Article 196 of the EU VAT Directive). Wise invoices clearly detail transfer fees as exempt financial services.`,
    },
    {
      id: 'practical-business-use-cases',
      title: 'Strategic Routing for UK Exporters and European Suppliers',
      body: `How UK businesses maximize efficiency across the GBP to EUR corridor:

- **Paying European Manufacturers & Suppliers**: UK e-commerce brands sourcing inventory from Germany, France, or Italy avoid typical £20 bank wire charges and 3.0% high street bank FX spreads by routing supplier settlements through Wise.
- **Receiving Euro Client Payments**: A UK digital agency can open a multi-currency Wise Business account to provide European clients with a local European IBAN (domiciled in Belgium or Germany). Clients pay locally via SEPA without friction, and the agency converts to Sterling at 0.35% only when needed.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: £5,000 GBP to EUR Transfer (Illustrative FX 1.1650)',
    scenario:
      'A London consultancy transfers £5,000.00 GBP to an IT contractor based in Paris, France, comparing Wise direct bank transfer with receiving international payment via Stripe.',
    inputs: {
      transferAmountGBP: '£5,000.00',
      illustrativeExchangeRate: '1 GBP = 1.1650 EUR (Illustrative Benchmark)',
      wiseVariableRate: '0.35%',
      wiseFixedFee: '£0.30',
      stripeCombinedRate: '4.50% + £0.20',
    },
    steps: [
      {
        label: 'Wise Variable Percentage Fee',
        formula: '£5,000.00 × 0.35%',
        amount: '£17.50',
        note: '0.35% conversion fee',
      },
      {
        label: 'Wise Fixed Transfer Fee',
        formula: 'Standard fixed network cost',
        amount: '£0.30',
        note: 'Covers SEPA execution',
      },
      {
        label: 'Total Wise Deduction',
        formula: '£17.50 + £0.30',
        amount: '£17.80',
        note: 'Effective total fee is 0.356%',
      },
      {
        label: 'Net GBP Converted',
        formula: '£5,000.00 - £17.80',
        amount: '£4,982.20',
        note: 'Converted at mid-market rate',
      },
      {
        label: 'Euros Delivered via SEPA',
        formula: '£4,982.20 × 1.1650',
        amount: '€5,804.26',
        note: 'Arrives directly in French bank account',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '(£5,000.00 × 4.50%) + £0.20',
        amount: '£225.20',
        note: '2.5% EEA card fee + 2.0% currency conversion',
      },
      {
        label: 'Stripe Euro Equivalent Delivered',
        formula: '(£5,000.00 - £225.20) × 1.1650',
        amount: '€5,562.53',
        note: 'Stripe delivers €241.73 less than Wise',
      },
    ],
    takeaway:
      'On a £5,000 GBP to EUR transfer, Wise delivers €5,804.26 compared to Stripe’s €5,562.53, saving the UK business £207.40 (approx. €241.73) in processing friction.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Delivering Exactly €10,000 Euros to a European Vendor',
    scenario:
      'A British retailer must remit an exact €10,000.00 EUR invoice to an Italian leather craftsman. How much Sterling must be initiated via Wise at 1.1650 EUR/GBP?',
    inputs: {
      targetEuroPayout: '€10,000.00',
      illustrativeExchangeRate: '1.1650 EUR per GBP',
      wiseVariableRate: '0.35%',
      wiseFixedFee: '£0.30',
    },
    steps: [
      {
        label: 'Required GBP Principal After Fees',
        formula: '€10,000.00 ÷ 1.1650',
        amount: '£8,583.69',
        note: 'Net Sterling value needed',
      },
      {
        label: 'Gross GBP Deposit Required',
        formula: '($8,583.69 + £0.30) ÷ (1 - 0.0035)',
        amount: '£8,614.14',
        note: 'Wise reverse calculation formula',
      },
      {
        label: 'Wise Fee Assessed',
        formula: '(£8,614.14 × 0.35%) + £0.30',
        amount: '£30.45',
        note: 'Total transparent deduction',
      },
      {
        label: 'Net Sterling Converted',
        formula: '£8,614.14 - £30.45',
        amount: '£8,583.69',
        note: 'Converts precisely to €10,000.00',
      },
    ],
    takeaway:
      'To deliver an exact €10,000.00 EUR invoice payment, send £8,614.14 via Wise. Completing this transfer through typical commercial banks charging 2.5% FX markups would cost over £8,830.00.',
  },
  faqs: [
    {
      question: 'Can UK businesses still use SEPA to send Euros after Brexit?',
      answer:
        'Yes. The UK remains a participating member of the European Payments Council SEPA scheme. Payments from the UK in Euros settle as standard SEPA credit transfers, avoiding international wire lifting charges.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'What is the Wise transfer fee for converting GBP to EUR?',
      answer:
        'Wise charges a 0.35% variable conversion fee plus a flat £0.30 fixed fee for converting GBP to EUR via UK Faster Payments bank transfer. Rates are among the lowest available in the global payments market.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Why does Stripe charge an extra 2.0% on cross-currency transfers in the UK?',
      answer:
        'Stripe UK charges an additional 2.0% currency conversion fee when merchants settle charges in a currency other than their primary bank account settlement currency (e.g. charging in EUR but receiving GBP).',
      sourceUrl: 'https://stripe.com/gb/pricing',
    },
    {
      question: 'How long does a Wise GBP to EUR transfer take to arrive in an EU account?',
      answer:
        'Transfers funded by UK Faster Payments typically convert and arrive in the recipient’s European bank account within several hours or by the next business morning via SEPA.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Do European recipients have to pay a fee to receive money from Wise UK?',
      answer:
        'No. Because payouts route through Wise’s local Euro banking entities directly via SEPA, EU banking regulations prohibit beneficiary banks from levying incoming transfer fees.',
      sourceUrl: 'https://wise.com/pricing',
    },
  ],
};

export default gbpToEurContent;

