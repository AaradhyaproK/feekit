import type { PageContent } from '../types.ts';

export const paypalUkContent: PageContent = {
  slug: 'paypal-uk',
  family: 'gateways',
  title: 'PayPal UK Charges & Fee Calculator (2.9% + 30p) | FeeKit',
  metaDescription:
    'Calculate exact PayPal UK business charges (2.9% + 30p domestic checkout), EEA cross-border fees (+1.29%), Rest of World charges (+1.99%), QR rates, and net GBP payouts.',
  h1: 'PayPal UK Charges & Business Fee Calculator (2026 Schedule)',
  lastVerified: '2026-11-11',
  primarySource: {
    name: 'PayPal UK Official Merchant Fees',
    url: 'https://www.paypal.com/uk/webapps/mpp/merchant-fees',
    citation: 'PayPal (Europe) S.à r.l. et Cie, S.C.A. & PayPal UK Limited Merchant Fee Schedule.',
  },
  overview:
    'British businesses selling online face a distinctly structured fee matrix from PayPal UK Limited. Standard domestic commercial transactions settled in British Pounds (including UK, Jersey, Guernsey, and Isle of Man buyers) incur a headline charge of 2.90% + £0.30 per payment, whereas unbranded card-funded transactions processed via PayPal Advanced Credit and Debit Card fields start at 1.20% + £0.30. Cross-border receipts from EEA buyers add 1.29%, while non-European international cards add 1.99% plus PayPal currency conversion spreads.',
  sections: [
    {
      id: 'paypal-uk-charges-schedule',
      title: 'PayPal UK Business Charges by Payment Channel (GBP)',
      body: `PayPal UK segments seller deductions strictly according to buyer funding method and geographic origin:

- **Standard PayPal Checkout (UK Domestic GBP)**: **2.90% + £0.30** per completed sale when the customer pays using a PayPal wallet balance, UK Pay in 3, linked bank mandate, or Express Checkout button.
- **Standard Card Processing (Direct Card Fields)**: **1.20% + £0.30** per UK domestic Visa or Mastercard purchase processed directly through unbranded merchant card fields.
- **PayPal In-Person QR Code (£10.01 and Above)**: **1.50% + £0.10** for face-to-face retail or market stall transactions scanned inside the PayPal mobile app.
- **PayPal In-Person QR Code (£10.00 and Below)**: **2.00% + £0.05** for low-value contactless QR code checkouts.
- **UK Buy Now, Pay Later (Pay in 3)**: **3.90% + £0.30** when offered as a promotional instalment option where applicable.
- **EEA Cross-Border Surcharge (+1.29%)**: Receiving EUR or GBP commercial payments from European Economic Area buyers raises standard PayPal Checkout charges to **4.19% + £0.30**.
- **Rest of World Cross-Border Surcharge (+1.99%)**: Orders paid from North American, Australian, or Asian PayPal accounts raise standard PayPal Checkout charges to **4.89% + £0.30**.
- **GBP Bank Account Withdrawals**: **£0.00** (standard BACS/Faster Payments settlements from your UK PayPal balance to a linked UK business bank account carry zero withdrawal fee).`,
    },
    {
      id: 'paypal-uk-crossborder-and-fx',
      title: 'Hidden PayPal UK Charges: Cross-Border Tiers and Currency Spreads',
      body: `For UK online retailers exporting to Europe and North America, headline domestic rates rarely reflect total effective payment costs. Post-Brexit UK PayPal merchant rules assess two layered international charges:

1. **Geographic Origin Surcharge**: Payments originating in Germany, France, Spain, or other EEA states add **1.29%** to your GBP rate card, while US, Canadian, and Australian orders add **1.99%**. That turns a £100 PayPal Checkout order from New York into a **£5.19 fee** (£100 × 4.89% + £0.30) rather than £3.20.
2. **Currency Conversion Markup (3.0% Base Spread)**: When a buyer pays in US Dollars or Euros and you settle balances into your GBP business bank account without a multi-currency receiving account, PayPal applies an exchange rate spread of approximately **3.00%** above the mid-market wholesale rate. Accepting EUR or USD into dedicated foreign-currency balances via Wise Business or Stripe UK often reduces cross-border settlement leakage significantly.`,
    },
    {
      id: 'paypal-uk-vs-stripe-uk-comparison',
      title: 'PayPal UK (2.9% + 30p) vs Stripe UK (1.5% + 20p): True Margin Impact',
      body: `Comparing PayPal UK Checkout to Stripe UK domestic card processing illustrates why UK e-commerce operators carefully optimize checkout button placement:

- **£50.00 Domestic UK Order**: PayPal UK deducts **£1.75** (£48.25 net), whereas Stripe UK deducts **£0.95** (£49.05 net). Offering Stripe saves £0.80 per order.
- **£250.00 Agency Deposit**: PayPal UK deducts **£7.55** (£242.45 net), whereas Stripe UK deducts **£3.95** (£246.05 net)—or just **£2.00 flat** via Stripe BACS Direct Debit.
- **£1,000.00 Consulting Retainer**: PayPal UK deducts **£29.30** (£970.70 net), compared to £15.20 on a domestic Stripe card or £2.00 on BACS.

Removing PayPal Express buttons from above-the-fold product pages while keeping PayPal available as a secondary checkout option preserves mobile buyer conversion without sacrificing margin on desktop card payers.`,
    },
    {
      id: 'uk-refunds-vat-and-reverse-math',
      title: 'Refund Fee Retention, HMRC Bookkeeping & Reverse Invoice Math',
      body: `UK limited companies and sole traders should structure bookkeeping workflows around PayPal UK financial rules:

- **Non-Refundable Fixed & Percentage Fees**: Under PayPal UK Merchant Terms, reversing or refunding an order returns the customer's payment while PayPal retains the original **2.90% + £0.30** processing charge.
- **HMRC VAT Treatment**: Financial intermediary payment processing fees charged by PayPal are **exempt from UK VAT**; do not claim input VAT on standard PayPal merchant transaction deductions. Always record gross order value (plus UK output VAT charged to customers) as revenue and log PayPal UK fees separately as an exempt bank charge expense.
- **Reverse Gross Formula**: When sending a UK commercial quote where the client covers PayPal UK charges, compute gross invoice value using:

$$\\text{Gross Charge (GBP)} = \\frac{\\text{Target Net Payout} + 0.30}{1 - 0.029}$$`,
    },
  ],
  workedExample: {
    title: 'Worked Example: PayPal UK Charges Across £50, £250 & £1,000 Invoices',
    scenario:
      'Breakdown of PayPal UK domestic commercial deductions (2.9% + £0.30) showing effective fee compression as invoice value rises.',
    inputs: {
      ukCommercialRate: '2.90%',
      fixedFeeGbp: '£0.30',
      settlementRail: 'UK Domestic GBP Checkout',
    },
    steps: [
      {
        label: 'Order 1: £50.00 Boutique Retail Sale',
        formula: '(£50.00 × 0.029) + £0.30',
        amount: '£1.75 Fee | £48.25 Net',
        note: 'Effective deduction is 3.50% because the 30p fixed fee weighs heavily on smaller orders.',
      },
      {
        label: 'Order 2: £250.00 Freelance Milestone Invoice',
        formula: '(£250.00 × 0.029) + £0.30',
        amount: '£7.55 Fee | £242.45 Net',
        note: 'Effective deduction compresses to 3.02%.',
      },
      {
        label: 'Order 3: £1,000.00 Commercial Deposit',
        formula: '(£1,000.00 × 0.029) + £0.30',
        amount: '£29.30 Fee | £970.70 Net',
        note: 'Effective deduction approaches the 2.93% asymptote.',
      },
    ],
    takeaway:
      'PayPal UK domestic checkout costs 2.9% + 30p across standard GBP orders. For invoices above £180 with UK B2B clients, Faster Payments bank transfers or BACS save roughly £15 to £27 per £1,000 billed.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse Invoice Math for a £250.00 Net UK Deposit',
    scenario:
      'A Manchester design studio agrees a £250.00 net fee where the client chooses PayPal Checkout and covers UK domestic PayPal charges.',
    inputs: {
      targetNetGbp: '£250.00',
      paypalUkRate: '2.9%',
      fixedFeeGbp: '£0.30',
    },
    steps: [
      {
        label: 'Add Fixed 30p Fee to Target Net Payout',
        formula: '£250.00 + £0.30',
        amount: '£250.30',
        note: 'Establishes numerator before percentage gross-up.',
      },
      {
        label: 'Divide by Net Retention Ratio (1 − 0.029)',
        formula: '£250.30 ÷ 0.971',
        amount: '£257.78',
        note: '£250.30 ÷ 0.971 = £257.7755, rounded up to £257.78.',
      },
      {
        label: 'Verify Forward PayPal UK Charge',
        formula: '(£257.78 × 0.029) + £0.30',
        amount: '£7.78 Fee | £250.00 Net',
        note: '£257.78 − £7.78 leaves exactly £250.00 in your UK PayPal balance.',
      },
    ],
    takeaway:
      'To collect £250.00 net via PayPal UK domestic checkout, bill £257.78. Simply multiplying £250 by 1.029 (£257.25) would fall short by 51p.',
  },
  faqs: [
    {
      question: 'How much does PayPal charge in the UK per transaction?',
      answer:
        'PayPal UK charges 2.9% + 30p for standard domestic commercial checkout transactions settled in GBP. Unbranded card fields start at 1.2% + 30p, while in-person UK QR code payments over £10 cost 1.5% + 10p.',
      sourceUrl: 'https://www.paypal.com/uk/webapps/mpp/merchant-fees',
    },
    {
      question: 'How much does PayPal charge UK sellers on international payments?',
      answer:
        'For cross-border payments sent from European Economic Area (EEA) buyers, PayPal UK adds +1.29% (total 4.19% + 30p on standard checkout). For payments from the US, Canada, or Rest of World, PayPal adds +1.99% (total 4.89% + 30p) plus currency conversion spreads if converting currencies.',
      sourceUrl: 'https://www.paypal.com/uk/webapps/mpp/merchant-fees',
    },
    {
      question: 'Are PayPal UK fees free for friends and family transfers?',
      answer:
        'Domestic GBP transfers sent to friends or family funded via a PayPal balance or linked UK bank account incur zero fee. However, using PayPal personal transfers for business goods violates PayPal UK terms of service and forfeits Seller Protection.',
      sourceUrl: 'https://www.paypal.com/uk/webapps/mpp/merchant-fees',
    },
    {
      question: 'Does PayPal charge a fee to withdraw money to a UK bank account?',
      answer:
        'No. Standard bank transfers in GBP from a PayPal UK balance to a linked UK bank account are completely free (£0.00) and typically arrive via Faster Payments within hours.',
      sourceUrl: 'https://www.paypal.com/uk/webapps/mpp/merchant-fees',
    },
    {
      question: 'Can I pass PayPal UK charges onto British retail consumers?',
      answer:
        'No. Under the UK Payment Services Regulations 2017 (implemented January 2018), UK businesses are strictly prohibited from imposing retail payment surcharges on UK consumers for debit cards, credit cards, or PayPal checkouts. Factor average processing costs into base product pricing instead.',
      sourceUrl: 'https://www.gov.uk/government/news/card-surcharge-ban-means-no-more-nasty-surprises-for-shoppers',
    },
  ],
};

export default paypalUkContent;
