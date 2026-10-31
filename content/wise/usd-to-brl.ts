import type { PageContent } from '../types.ts';

export const usdToBrlContent: PageContent = {
  slug: 'usd-to-brl',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (USD to BRL Cross-Border) | FeeKit',
  metaDescription:
    'Calculate real USD to Brazilian Real (BRL) payment fees. Compare Wise 1.2% + $1.50 pricing, PIX clearance, IOF tax (0.38%), CPF/CNPJ verification, and Stripe 6.9% card processing in Brazil.',
  h1: 'Wise vs Stripe Fee Comparison: USD to BRL Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe Brazil Regulatory Guidelines',
    url: 'https://wise.com/pricing',
    citation: 'Wise Route Pricing (USD to BRL) and Banco Central do Brasil (BACEN) Foreign Exchange & IOF Tax Regulations.',
  },
  overview:
    'Transferring funds from US Dollars (USD) to Brazilian Reais (BRL) involves navigating one of the most strictly regulated currency corridors in Latin America. Under Stripe US and Brazil merchant rules, processing international credit cards incurs standard processing (2.9% + $0.30) plus a 1.5% international card fee and a 2.5% currency conversion fee (totaling 6.9% + $0.30), alongside severe card decline rates common to cross-border Latin American transactions. In contrast, Wise operates as an authorized foreign exchange institution in Brazil under Banco Central do Brasil (BACEN) regulations, converting USD to BRL at the mid-market rate for a 1.2% variable fee and $1.50 fixed charge, settling funds directly through Brazil’s instant payment network (PIX) with full tax compliance.',
  sections: [
    {
      id: 'usd-to-brl-rail-mechanics',
      title: 'Fee Mechanics: Wise Mid-Market vs Stripe Cross-Border Processing in Brazil',
      body: `Remitting funds to Brazilian software developers, agencies, or remote workers incurs different fee models:

- **Stripe US-to-Brazil Cross-Border Processing**:
  - Base Card Processing: **2.90% + $0.30**
  - International Card Fee: **+1.50%**
  - Currency Conversion Surcharge: **+2.50%**
  - **Combined Gateway Deductions**: **6.90% + $0.30**. On a $5,000 engineering invoice, credit card rails deduct nearly $350.00. Furthermore, US credit cards processed in Brazil frequently experience fraud declines above 25% from domestic issuing banks.
- **Wise Brazilian Corridor Model**:
  - Inbound Funding: Direct US ACH electronic transfer from the client’s checking account ($1.50 fixed fee).
  - Exchange Rate: Real mid-market interbank rate with zero hidden spread or pips.
  - Conversion Surcharge: **1.20%** variable fee.
  - Outbound Delivery: Settles instantly into any Brazilian bank account via **PIX** or TED.
  - **Total Cost on $5,000.00**: Only **$61.50** ($60.00 variable + $1.50 fixed), delivering $4,938.50 converted directly into Reais.`,
    },
    {
      id: 'bacen-compliance-iof-tax-cpf-cnpj',
      title: 'BACEN Foreign Exchange Rules, IOF Tax, and Tax IDs (CPF / CNPJ)',
      body: `Key statutory requirements mandated by the Central Bank of Brazil (BACEN):

1. **Mandatory Tax ID Verification**: All BRL inward remittances require the recipient’s valid Brazilian tax identification number:
   - **CPF (Cadastro de Pessoas Físicas)**: For individual contractors, software engineers, and freelancers (11 digits).
   - **CNPJ (Cadastro Nacional da Pessoa Jurídica)**: For registered Brazilian legal entities and corporations (14 digits).
   Transfers lacking a valid CPF or CNPJ are rejected by the Central Bank clearing system.
2. **IOF (Imposto sobre Operações Financeiras) Tax**: The Brazilian Federal Revenue Service (Receita Federal) levies IOF tax on foreign exchange transactions. When receiving foreign remittances into Brazil for services or business investment, the statutory IOF rate is typically **0.38%** (compared to 1.10% for transfers between accounts of the same person, or 4.38% on credit card purchases). Wise displays IOF transparently in the transfer breakdown.
3. **Electronic FX Contracts (Câmbio)**: BACEN regulations require foreign exchange contracts for inbound remittances. Wise automates the registration of foreign exchange operations with BACEN, allowing Brazilian recipients to access official documentation for corporate tax reporting.`,
    },
    {
      id: 'brazilian-banking-settlement-timing-pix',
      title: 'Settlement Speed: The Power of the PIX Network in Brazil',
      body: `Brazil possesses one of the world's most advanced instant payment systems:

- **PIX Real-Time Clearing**: Wise integrates directly with Brazil’s PIX instant payment system. Once Wise receives your USD funds and clears compliance, converted Reais are deposited into the recipient’s bank account (Nubank, Itaú, Bradesco, Santander, Banco do Brasil) within minutes, 24/7/365.
- **Eliminating SWIFT Correspondent Deductions**: Traditional international bank wires route through correspondent banks in New York and São Paulo, deducting $20 to $40 intermediary fees and taking 3 to 7 business days to clear BACEN exchange desks. Wise’s local rail eliminates correspondent bank deductions completely.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $5,000 USD to BRL Transfer (Illustrative FX 5.2500)',
    scenario:
      'A US technology startup pays a Brazilian mobile app engineer $5,000.00 USD for flutter app development, comparing Wise direct transfer versus processing international card payment via Stripe.',
    inputs: {
      transferAmountUSD: '$5,000.00',
      illustrativeExchangeRate: '1 USD = 5.2500 BRL (Illustrative Benchmark)',
      wiseVariableRate: '1.20%',
      wiseFixedFee: '$1.50',
      stripeCombinedRate: '6.90% + $0.30',
      statutoryIofRate: '0.38%',
    },
    steps: [
      {
        label: 'Wise Variable Percentage Fee',
        formula: '$5,000.00 × 1.20%',
        amount: '$60.00',
        note: '1.20% conversion fee',
      },
      {
        label: 'Wise Fixed Transfer Fee',
        formula: 'Flat ACH/regulatory clearing cost',
        amount: '$1.50',
        note: 'Covers ACH inbound and BACEN reporting',
      },
      {
        label: 'Total Wise Deduction',
        formula: '$60.00 + $1.50',
        amount: '$61.50',
        note: 'Effective fee is 1.23%',
      },
      {
        label: 'Wise Net USD Converted',
        formula: '$5,000.00 - $61.50',
        amount: '$4,938.50',
        note: 'Converted at interbank mid-market rate',
      },
      {
        label: 'Brazilian Reais Before IOF',
        formula: '$4,938.50 × 5.2500',
        amount: 'R$25,927.13',
        note: 'Converted principal',
      },
      {
        label: 'Statutory Brazilian IOF Tax (0.38%)',
        formula: 'R$25,927.13 × 0.38%',
        amount: 'R$98.52',
        note: 'Mandatory BACEN tax remitted to Receita Federal',
      },
      {
        label: 'Net BRL Delivered via PIX',
        formula: 'R$25,927.13 - R$98.52',
        amount: 'R$25,828.61',
        note: 'Arrives in Brazilian bank account in minutes',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '($5,000.00 × 6.90%) + $0.30',
        amount: '$345.30',
        note: '2.9% base + 1.5% intl + 2.5% currency conversion',
      },
      {
        label: 'Stripe BRL Equivalent Delivered (Net of IOF)',
        formula: '($5,000.00 - $345.30) × 5.2500 × (1 - 0.0038)',
        amount: 'R$24,346.54',
        note: 'Stripe delivers R$1,482.07 less to recipient',
      },
    ],
    takeaway:
      'On a $5,000 USD to BRL payment, routing via Wise saves $283.80 (approx. R$1,482.07) compared to international card processing on Stripe, while ensuring compliant PIX instant settlement.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Delivering Exactly R$25,000 BRL to a Brazilian Contractor',
    scenario:
      'A US client needs to ensure their senior Brazilian engineer receives an exact R$25,000.00 BRL net payout into their Nubank account via PIX at an illustrative rate of 5.2500 BRL/USD.',
    inputs: {
      targetRealPayout: 'R$25,000.00',
      illustrativeExchangeRate: '5.2500 BRL per USD',
      wiseVariableRate: '1.20%',
      wiseFixedFee: '$1.50',
      iofRate: '0.38%',
    },
    steps: [
      {
        label: 'BRL Required Before IOF Deduction',
        formula: 'R$25,000.00 ÷ (1 - 0.0038)',
        amount: 'R$25,095.36',
        note: 'Gross BRL needed to cover statutory IOF tax',
      },
      {
        label: 'Required USD Principal After Fees',
        formula: 'R$25,095.36 ÷ 5.2500',
        amount: '$4,780.07',
        note: 'Net dollar value needed for conversion',
      },
      {
        label: 'Gross USD Deposit Required',
        formula: '($4,780.07 + $1.50) ÷ (1 - 0.0120)',
        amount: '$4,839.65',
        note: 'Wise reverse calculation formula',
      },
      {
        label: 'Wise Fee Assessed',
        formula: '($4,839.65 × 1.20%) + $1.50',
        amount: '$59.58',
        note: 'Transparent total fee',
      },
      {
        label: 'Net USD Converted',
        formula: '$4,839.65 - $59.58',
        amount: '$4,780.07',
        note: 'Yields precisely R$25,000.00 BRL net of IOF',
      },
    ],
    takeaway:
      'To deliver an exact R$25,000.00 BRL payout via Wise, the client initiates $4,839.65 USD. In contrast, fulfilling this invoice via Stripe card processing would require initiating $5,185.90 due to compounding cross-border fees.',
  },
  faqs: [
    {
      question: 'What is the Wise transfer fee for sending USD to BRL in 2026?',
      answer:
        'Wise charges a 1.20% variable fee plus a flat $1.50 fixed transfer surcharge for converting USD to BRL via ACH bank debit. In addition, the Brazilian government levies a statutory 0.38% IOF tax on international remittances.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Do I need the recipient’s CPF or CNPJ to send money to Brazil?',
      answer:
        'Yes. Banco Central do Brasil regulations require every inbound foreign exchange transfer to be registered to a valid Brazilian tax ID. Individuals provide an 11-digit CPF, while companies provide a 14-digit CNPJ.',
      sourceUrl: 'https://www.bcb.gov.br/',
    },
    {
      question: 'How fast do USD to BRL transfers arrive via PIX?',
      answer:
        'Once Wise receives the USD funds and processes currency exchange, transfers route through Brazil’s real-time PIX network, arriving in the beneficiary’s bank account within minutes, 24/7.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'What is the IOF tax and why is it deducted on transfers to Brazil?',
      answer:
        'IOF (Imposto sobre Operações Financeiras) is a federal tax levied by the Brazilian government on credit, foreign exchange, and insurance operations. For inward service remittances to Brazil, the statutory rate is 0.38%.',
      sourceUrl: 'https://www.gov.br/receitafederal/pt-br',
    },
    {
      question: 'Why do credit card payments from the US to Brazil frequently fail?',
      answer:
        'Brazilian card issuing banks apply aggressive anti-fraud algorithms to international transactions, leading to decline rates exceeding 25% on standard card gateways. Bank-to-bank transfers via Wise route through domestic clearing and do not experience card issuer fraud blocks.',
      sourceUrl: 'https://wise.com/pricing',
    },
  ],
};

export default usdToBrlContent;

