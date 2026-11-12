import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  Scale,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { getStripeChannel, type GatewayChannelFacts } from './gateway-channel-data';

interface StripeGuideProps {
  sectionClass: string;
  /** The matrix slug for the corridor (usa, uk, eurozone, singapore, ...). */
  countrySlug?: string;
  inArticleSlot?: React.ReactNode;
}

/**
 * Regional payment-rail alternatives and surcharge details for each Stripe
 * corridor. These are the facts that make one Stripe page genuinely
 * different from another.
 */
interface StripeExtras {
  /** Currency symbol for the alternative rails table. */
  currency: string;
  /** Chargeback / dispute fee in the local currency. */
  disputeFee: string;
  /** The surcharge applied to a foreign-issued card. */
  internationalSurcharge: string;
  /** The surcharge applied when currency conversion is required. */
  fxSurcharge: string;
  /** The cheapest non-card rail available to a merchant in this market. */
  debitRail: string;
  debitRate: string;
  debitSettlement: string;
  debitCap: string;
  /** Buy-now-pay-later pricing in this market. */
  bnpl: string;
  /** A closing, market-specific conclusion. */
  bottomLine: string;
  /** Three practical, market-specific actions. */
  actions: Array<{ title: string; body: string }>;
}

const STRIPE_EXTRAS: Record<string, StripeExtras> = {
  usa: {
    currency: '$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.5% on top of the domestic rate',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'ACH Direct Debit',
    debitRate: '0.8%',
    debitSettlement: '3-5 business days',
    debitCap: '$5.00 cap',
    bnpl: '5.99% + $0.30',
    bottomLine:
      'Domestic US credit card sales cost 2.9% + $0.30. The 30-cent fixed component is what punishes small tickets, and the 1.5% international surcharge plus the 1.0% conversion fee is what punishes cross-border sales. Both problems have the same answer: move high-value invoices off the card rail.',
    actions: [
      {
        title: 'Route invoices over $500 through ACH',
        body: 'ACH costs 0.8% capped at $5.00, so a $2,000 client invoice costs $5.00 instead of $58.30 in card fees.',
      },
      {
        title: 'Set a minimum order value',
        body: 'On a $10 checkout, the 30-cent fixed fee pushes the effective rate from 2.9% to 5.9% ($0.59 total). Bundling or a minimum basket protects sub-$10 margins.',
      },
      {
        title: 'Reverse-bill with the formula, not a guess',
        body: 'Gross = (Net + $0.30) / (1 - 0.029). Adding 2.9% to an invoice still leaves you short.',
      },
    ],
  },
  uk: {
    currency: '£',
    disputeFee: '£15.00',
    internationalSurcharge: '1.75% on EEA and international cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'BACS Direct Debit',
    debitRate: '1% + 20p',
    debitSettlement: '3 business days',
    debitCap: '£2.00 cap',
    bnpl: '4.99% + 20p',
    bottomLine:
      'UK domestic card sales cost 1.5% + 20p, among the cheapest card rails in the developed world. The expensive part is the card origin: an EEA card costs 2.5% + 20p and a non-EEA card 3.25% + 20p, so the real question is where your customers cards come from.',
    actions: [
      {
        title: 'Use Open Banking for invoices above £10',
        body: 'Open Banking pay-by-bank is typically cheaper than any card rail and settles in hours rather than days.',
      },
      {
        title: 'Treat card origin as a pricing variable',
        body: 'The gap between a UK domestic card and a non-EEA card is 1.75 percentage points - wider than most UK merchants realise.',
      },
      {
        title: 'Account for VAT on your own fees',
        body: 'UK VAT applies to the processing fee, so the effective cost of processing is slightly above the headline rate.',
      },
    ],
  },
  'keyed-entry': {
    currency: '$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.5% on foreign-issued cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'ACH Direct Debit',
    debitRate: '0.8%',
    debitSettlement: '3-5 business days',
    debitCap: '$5.00 cap',
    bnpl: '5.99% + $0.30',
    bottomLine:
      'Keyed-in payments cost 3.4% + $0.30 - 50 basis points above online checkout and 70 basis points above a physical card read. The premium buys you the ability to take a phone order, and it is worth paying only when the alternative is losing the sale entirely.',
    actions: [
      {
        title: 'Offer keyed-in as a fallback, not a default',
        body: 'Route customers to a hosted checkout first. The rate difference on a $100 order is 50 cents, but the chargeback exposure difference is much larger.',
      },
      {
        title: 'Keep a paper authorisation trail',
        body: 'Keyed-in chargeback rates are materially higher. Evidence of authorisation is what wins the dispute.',
      },
      {
        title: 'Monitor your dispute ratio',
        body: 'A sustained rise in keyed-in chargebacks can trigger card network monitoring programmes.',
      },
    ],
  },
  international: {
    currency: '$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.5% on foreign-issued cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'Local bank debit in the destination market',
    debitRate: 'Varies by market',
    debitSettlement: '1-3 business days',
    debitCap: 'Varies by market',
    bnpl: '5.99% + $0.30',
    bottomLine:
      'An international card payment costs the domestic rate plus 1.5% plus 1.0%, which on a $100 charge takes the total to $5.70 - an effective 5.7% against a domestic 3.2%. Those two surcharges, not the headline rate, are the real cost of selling abroad.',
    actions: [
      {
        title: 'Settle like-for-like currencies when possible',
        body: 'Collecting foreign currencies that get converted into USD triggers the 1.0% currency conversion fee unless you hold and pay out in that local currency.',
      },
      {
        title: 'Split domestic and international pricing',
        body: 'A 2.4 percentage point spread between domestic and international is often worth a separate price list.',
      },
      {
        title: 'Plan for two liability regimes',
        body: 'Disputes for EU-issued cards follow EU rules, and you must satisfy both the cardholder regime and your own.',
      },
    ],
  },
  eurozone: {
    currency: '€',
    disputeFee: '€15.00',
    internationalSurcharge: '1.5% on non-EEA cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'SEPA Direct Debit',
    debitRate: '0.8% + 20p',
    debitSettlement: '2 business days',
    debitCap: '€5.00 cap',
    bnpl: '5.49% + 25p',
    bottomLine:
      'A domestic EEA card costs 1.5% + €0.25, but a UK card costs 2.5% and a non-EEA card 3.5%. The 25-cent fixed component also makes low-ticket European sales materially more expensive than the UK equivalent.',
    actions: [
      {
        title: 'Fix your SCA exemption logic first',
        body: 'Strong Customer Authentication is the single biggest cause of failed European checkouts, and exemption logic is the fix.',
      },
      {
        title: 'Use SEPA Direct Debit for B2B',
        body: '0.8% + 20p capped at €5.00 beats card processing on every B2B invoice above roughly €50.',
      },
      {
        title: 'Watch the 25-cent fixed fee',
        body: 'It is 2.5% of a €10 sale. Bundle low-value items or set a minimum basket.',
      },
    ],
  },
  canada: {
    currency: 'C$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.5% on foreign-issued cards',
    fxSurcharge: '2.0% currency conversion fee',
    debitRail: 'Interac e-Transfer / EFT',
    debitRate: '1.5% + C$0.30',
    debitSettlement: 'Instant to 1 business day',
    debitCap: 'No cap',
    bnpl: '5.99% + C$0.30',
    bottomLine:
      'Canadian card volume costs 2.9% + C$0.30, but Interac volume costs 1.5% + C$0.30. Because Interac dominates Canadian card-present debit, a merchant with real in-person volume has a materially lower cost of funds than the credit card rate suggests.',
    actions: [
      {
        title: 'Push Interac for in-person debit',
        body: '1.5% + C$0.30 against 2.9% + C$0.30 is 140 basis points on every transaction that can use it.',
      },
      {
        title: 'Factor the 2.0% conversion fee',
        body: 'Canada-to-USA settlement is a currency conversion, and the conversion fee is 2.0% - higher than other corridors.',
      },
      {
        title: 'Register for GST/HST once you pass the threshold',
        body: 'Once registered, you can recover the GST on Stripe fees and on operating expenses.',
      },
    ],
  },
  australia: {
    currency: 'A$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.15% on foreign-issued cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'Bank debit / BPAY',
    debitRate: '1.10% + A$0.30',
    debitSettlement: 'Next business day',
    debitCap: 'No cap',
    bnpl: '5.49% + A$0.30',
    bottomLine:
      'Australian domestic cards cost 1.75% + A$0.30, one of the lowest card rates anywhere - but international cards step up to 2.9% + A$0.30, a 115 basis point gap that makes the card origin of your customer the single most important pricing variable.',
    actions: [
      {
        title: 'Register for GST once you pass AUD 75,000',
        body: 'Stripe applies the GST component to its fees for GST-registered accounts, so registration recovers real money.',
      },
      {
        title: 'Local card volume is the cheapest you will get',
        body: 'At 1.75%, a merchant with mostly domestic volume should route aggressively to local rails and avoid BNPL entirely.',
      },
      {
        title: 'Price international customers separately',
        body: 'The jump from 1.75% to 2.9% plus conversion is a 2.3 point spread worth reflecting in a separate price list.',
      },
    ],
  },
  japan: {
    currency: '¥',
    disputeFee: '¥2,200',
    internationalSurcharge: '1.5% on foreign-issued cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'JCB / local debit',
    debitRate: 'Varies by scheme',
    debitSettlement: 'Next business day',
    debitCap: 'No cap',
    bnpl: '5.49% + ¥0',
    bottomLine:
      'Japanese domestic cards cost 3.6% with NO fixed fee, which means the effective rate is identical at every ticket size. On a ¥1,000 sale the fee is ¥36; on a ¥100,000 sale it is ¥3,600. No other major market offers that property.',
    actions: [
      {
        title: 'Price low-ticket items aggressively',
        body: 'Without a fixed fee there is no small-order penalty, so a ¥980 digital product is viable here and not in the US.',
      },
      {
        title: 'Get a qualified invoice issuer',
        body: 'Japanese consumption tax invoices require a qualified invoice issuer, and Stripe supports the arrangement.',
      },
      {
        title: 'Budget for the JCB surcharge',
        body: 'JCB-specific fees sit on top of the base rate and are worth confirming against your volume mix.',
      },
    ],
  },
  singapore: {
    currency: 'S$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.5% on foreign-issued cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'PayNow / local bank transfer',
    debitRate: '1.0% + S$0.22',
    debitSettlement: 'Instant',
    debitCap: 'No cap',
    bnpl: '5.99% + S$0.50',
    bottomLine:
      'Singapore combines a 3.4% percentage with the largest fixed component on the site at S$0.50. On a S$10 sale the total fee is S$0.84 - an effective 8.4%. For a digital goods business selling cheap downloads, the fixed fee is usually a bigger cost than the percentage.',
    actions: [
      {
        title: 'Use PayNow for anything under S$30',
        body: '1.0% + S$0.22 is cheaper than the card rate at every ticket size above S$1.',
      },
      {
        title: 'Move digital goods to a lower-fixed-fee processor',
        body: 'At S$0.50 fixed, the processor choice dominates the economics of any product priced under S$15.',
      },
      {
        title: 'Account for the 9% GST on Stripe fees',
        body: 'Singapore-registered businesses pay GST on the processing fee, so the true cost is above the headline rate.',
      },
    ],
  },
  micropayments: {
    currency: '$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.5% on foreign-issued cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'ACH Direct Debit',
    debitRate: '0.8%',
    debitSettlement: '3-5 business days',
    debitCap: '$5.00 cap',
    bnpl: '5.99% + $0.30',
    bottomLine:
      'The micropayments schedule is 5% + $0.10. The headline percentage is worse than the standard 2.9% + $0.30 rate, but the fixed fee is 20 cents lower, so the schedule wins below $9.52 and loses above it. That crossover is the entire decision.',
    actions: [
      {
        title: 'Find your actual average price',
        body: 'Below $9.52 the micropayments rate wins. Above it the standard rate wins. Check your order value distribution before switching.',
      },
      {
        title: 'Enable it per account, not per transaction',
        body: 'The micropayments rate has to be turned on before it applies to a live checkout.',
      },
      {
        title: 'Bundle small items',
        body: 'Moving a $3 download to a $25 bundle at the standard rate is cheaper than any rate switch.',
      },
    ],
  },
  'non-profit': {
    currency: '$',
    disputeFee: '$15.00',
    internationalSurcharge: '1.5% on foreign-issued cards',
    fxSurcharge: '1.0% currency conversion fee',
    debitRail: 'ACH Direct Debit',
    debitRate: '0.8%',
    debitSettlement: '3-5 business days',
    debitCap: '$5.00 cap',
    bnpl: '5.99% + $0.30',
    bottomLine:
      'The non-profit rate of 2.2% + $0.30 saves 70 basis points against the standard rate. Because the saving is entirely in the percentage, it scales with donation size: $7.00 on a $1,000 gift, 35 cents on a $50 gift.',
    actions: [
      {
        title: 'Complete the non-profit verification',
        body: 'The discounted rate is only available on accounts that have been verified as a registered charity.',
      },
      {
        title: 'Optimise for average donation size',
        body: 'On small donations the fixed fee still dominates, and a donor-directed platform may be cheaper overall.',
      },
      {
        title: 'Remember donations are still taxable supplies',
        body: 'The processing discount does not change the sales tax position of the donation itself in most US states.',
      },
    ],
  },
};

function getStripeExtras(slug: string): StripeExtras {
  return (
    STRIPE_EXTRAS[slug] || {
      currency: '$',
      disputeFee: '$15.00',
      internationalSurcharge: '1.5% on foreign-issued cards',
      fxSurcharge: '1.0% currency conversion fee',
      debitRail: 'ACH Direct Debit',
      debitRate: '0.8%',
      debitSettlement: '3-5 business days',
      debitCap: '$5.00 cap',
      bnpl: '5.99% + $0.30',
      bottomLine:
        'Domestic card sales cost the headline rate, and international payments, currency conversions and add-on services can push the total toward 4% to 6%. The largest single lever is usually the payment rail rather than the negotiated rate.',
      actions: [
        {
          title: 'Route high-value invoices to bank debit',
          body: 'A capped debit fee beats uncapped card interchange on every invoice above the cap.',
        },
        {
          title: 'Set a minimum order value',
          body: 'The fixed fee is the entire problem on low-ticket checkouts.',
        },
        {
          title: 'Reverse-bill accurately',
          body: 'Gross = (Net + Fixed) / (1 - Rate). Adding the percentage to an invoice still leaves you short.',
        },
      ],
    }
  );
}

export function StripeGuide({ sectionClass, countrySlug, inArticleSlot }: StripeGuideProps) {
  const currentYear = new Date().getFullYear();
  const channel: GatewayChannelFacts = getStripeChannel(countrySlug || '');
  const extras = getStripeExtras(countrySlug || '');

  const amounts = [5, 20, 100, 500];
  const rows = amounts.map((amount) => {
    const fee = (amount * channel.percent) / 100 + channel.fixed;
    return {
      amount,
      fee,
      effective: (fee / amount) * 100,
      net: amount - fee,
    };
  });

  // Reverse calculation: gross required to net a fixed amount.
  const targetNet = 1000;
  const grossFor1000 =
    channel.fixed > 0
      ? (targetNet + channel.fixed) / (1 - channel.percent / 100)
      : targetNet / (1 - channel.percent / 100);

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>{channel.name} Fee Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          {channel.name} Fees Explained: {channel.headline} ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A line-by-line breakdown of the {channel.name} rate card, the net payout at four ticket
          sizes, the surcharges that apply on top, and the cheapest alternative rail in this market.
        </p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
          <span>The Immediate Answer: {channel.name} Fee Rates</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>{channel.answer}</strong>
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{channel.detail}</p>
        <p className="text-sm text-slate-700 leading-relaxed">{channel.note}</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
          <span>{channel.name} Rules, Surcharges and Compliance Notes</span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{channel.regulatory}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          What Surcharges Apply on Top of the {channel.name} Base Rate
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-1.5">
            <div className="font-bold text-slate-900">1. Cross-Border Surcharge</div>
            <p className="text-slate-600 leading-relaxed">
              {extras.internationalSurcharge}. This is the cost of clearing a card issued in a
              different country from your merchant account.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-1.5">
            <div className="font-bold text-slate-900">2. Foreign Exchange Spread</div>
            <p className="text-slate-600 leading-relaxed">
              {extras.fxSurcharge}. Charged when the settlement currency differs from your
              account currency, and applied to the converted amount.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-1.5">
            <div className="font-bold text-slate-900">3. Chargeback Dispute Fee</div>
            <p className="text-slate-600 leading-relaxed">
              {extras.disputeFee} per dispute, refunded if you win the card network dispute. Add it
              to the true cost of a high-risk product.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-blue-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: {channel.name} Deductions at Four Ticket Sizes
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="py-3 px-4 font-bold text-slate-900">Transaction Amount</th>
                <th className="py-3 px-4 font-bold text-blue-700">{channel.headline}</th>
                <th className="py-3 px-4 font-bold text-slate-900">Fee</th>
                <th className="py-3 px-4 font-bold text-slate-600">Effective Rate</th>
                <th className="py-3 px-4 font-bold text-emerald-700">Net Payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              {rows.map((row) => (
                <tr key={row.amount}>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">
                    {extras.currency}
                    {row.amount.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-4">{channel.headline}</td>
                  <td className="py-2.5 px-4 text-rose-600">
                    {extras.currency}
                    {row.fee.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-4">{row.effective.toFixed(2)}%</td>
                  <td className="py-2.5 px-4 text-emerald-700 font-bold">
                    {extras.currency}
                    {row.net.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Alternative Payment Rails in This Market
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Credit cards are convenient for consumers, but they are the most expensive rail for
          high-value transactions. The cheapest alternative in the {channel.name} market is{' '}
          <strong>{extras.debitRail}</strong> at <strong>{extras.debitRate}</strong>, settling in{' '}
          {extras.debitSettlement} with a {extras.debitCap}.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="py-3 px-4 font-bold text-slate-900">Payment Method</th>
                <th className="py-3 px-4 font-bold text-blue-700">{channel.name} Pricing</th>
                <th className="py-3 px-4 font-bold text-slate-700">Settlement Time</th>
                <th className="py-3 px-4 font-bold text-slate-700">Maximum Fee Cap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Online Credit &amp; Debit Cards</td>
                <td className="py-3 px-4 font-mono font-medium">{channel.headline}</td>
                <td className="py-3 px-4">2 Business Days</td>
                <td className="py-3 px-4 text-slate-500">No Cap</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">{extras.debitRail}</td>
                <td className="py-3 px-4 font-mono font-medium text-emerald-700 font-bold">
                  {extras.debitRate}
                </td>
                <td className="py-3 px-4">{extras.debitSettlement}</td>
                <td className="py-3 px-4 text-emerald-700 font-bold font-mono">{extras.debitCap}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Apple Pay / Google Pay</td>
                <td className="py-3 px-4 font-mono font-medium">{channel.headline}</td>
                <td className="py-3 px-4">2 Business Days</td>
                <td className="py-3 px-4 text-slate-500">No Cap</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">
                  Buy Now Pay Later (Klarna/Affirm)
                </td>
                <td className="py-3 px-4 font-mono font-medium text-rose-600">{extras.bnpl}</td>
                <td className="py-3 px-4">Instant / 2 Days</td>
                <td className="py-3 px-4 text-slate-500">No Cap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          How to Reverse-Calculate Fees to Keep 100% of Your Invoice Amount
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          When billing clients for professional services or project deliverables, you may want to
          pass gateway costs onto the client or price invoices so you pocket an exact figure.
          Simply adding {channel.percent}% to your invoice leaves you short, because the percentage
          is calculated against the gross final charge - which includes the surcharge itself.
        </p>
        <div className="rounded-lg bg-white border border-slate-200 p-3 font-mono text-xs text-slate-800 text-center">
          Gross Invoice = (Desired Net Payout + Fixed Fee) ÷ (1 − Percentage Rate)
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          To receive exactly {extras.currency}
          {targetNet.toLocaleString()}.00 on a {channel.name} card payment, the gross amount is{' '}
          {extras.currency}
          {grossFor1000.toFixed(2)}. You can calculate these forward and reverse deductions
          instantly with the{' '}
          <Link
            href="/tools/stripe-fee-calculator/usa"
            prefetch={false}
            className="font-semibold text-blue-600 hover:text-blue-800 underline"
          >
            Stripe fee calculators
          </Link>
          . Using a dedicated payout calculator eliminates rounding discrepancies and ensures your
          business never absorbs unintended gateway shortfalls.
        </p>
      </div>

      <div className="rounded-xl border border-slate-300 bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
          <TrendingUp className="h-5 w-5 text-blue-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Bottom Line: Maximizing Your Net Revenue on {channel.name}
          </h3>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">{extras.bottomLine}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
          {extras.actions.map((action, idx) => (
            <div
              key={action.title}
              className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1"
            >
              <div className="font-bold text-blue-700">
                {idx + 1}. {action.title}
              </div>
              <p className="text-slate-600 leading-relaxed">{action.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900">
            Calculate Your Exact Gateway Fee Deductions in Seconds
          </h4>
          <p className="text-xs text-slate-600">
            Run real transaction amounts through FeeKit&apos;s verified calculators to compare exact
            net payouts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Link
            href="/tools/stripe-fee-calculator/usa"
            prefetch={false}
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
          >
            <span>Stripe Fee Calculator</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/tools/paypal-fee-calculator/usa"
            prefetch={false}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition-colors"
          >
            <span>PayPal Fee Calculator</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {inArticleSlot}
    </section>
  );
}
