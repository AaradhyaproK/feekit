/**
 * PayPal acceptance-channel facts.
 *
 * The PayPal guide previously rendered the same ~500 words on all 8 PayPal
 * pages (usa, uk, eu, international, qr-code, invoice, micropayments,
 * charitable). Only the calculator input changed - the body copy was
 * identical, which is a near-duplicate-content signal across the whole
 * cluster.
 *
 * Each channel now carries its own rate card, its own narrative and its own
 * break-even arithmetic, so every page answers the query it targets.
 */

export interface PayPalChannelFacts {
  /** Display name used in headings. */
  name: string;
  /** Currency symbol for the channel. */
  symbol: string;
  /** Headline rate as displayed, e.g. "3.49% + $0.49". */
  headline: string;
  /** Percentage component of the rate. */
  percent: number;
  /** Fixed component of the rate, in the channel currency. */
  fixed: number;
  /** The one-line answer shown in the highlighted block. */
  answer: string;
  /** A channel-specific paragraph explaining when to use it. */
  detail: string;
  /** A channel-specific practical note. */
  note: string;
}

export const PAYPAL_CHANNELS: Record<string, PayPalChannelFacts> = {
  usa: {
    name: 'PayPal USA',
    symbol: '$',
    headline: '3.49% + $0.49',
    percent: 3.49,
    fixed: 0.49,
    answer:
      'PayPal Checkout, Guest Checkout and PayPal Invoicing (wallet payments) in the United States charge 3.49% + $0.49 per transaction. Standard Goods & Services card processing and card-funded invoice payments carry a 2.99% + $0.49 rate.',
    detail:
      'The US rate card splits commercial acceptance into distinct schedules, so it matters which checkout flow your customer triggers. PayPal Checkout buttons, PayPal Guest Checkout and wallet-settled PayPal Invoices sit under the 3.49% + $0.49 commercial rate, while Standard Credit & Debit Card processing and card-funded PayPal Invoices fall under the 2.99% + $0.49 schedule. Routing card buyers through direct card fields rather than the wallet flow can save 50 basis points per order.',
    note:
      'On a $100 customer payment, PayPal deducts $3.98 at the 3.49% + $0.49 Commerce rate or $3.48 at the 2.99% + $0.49 standard card rate. Compare processors using the exact schedule your integration triggers.',
  },
  uk: {
    name: 'PayPal UK',
    symbol: '£',
    headline: '2.9% + 30p',
    percent: 2.9,
    fixed: 0.3,
    answer:
      'PayPal UK charges 2.9% + 30p per transaction on domestic UK commercial transactions made through PayPal Checkout or standard business billing. International payments add +1.29% for EEA buyers or +1.99% for non-EEA buyers.',
    detail:
      'PayPal UK sits in a competitive position on small domestic orders because its fixed component is 30p rather than the 49c used in the US. On a £10 transaction the UK rate costs £0.59 (an effective 5.9%), whereas a US commercial checkout on $10 costs $0.84 (8.4%, or 7.9% at the 2.99% US card rate).',
    note:
      'On a £100 domestic payment, PayPal UK deducts £3.20 and leaves £96.80. On cross-border payments, PayPal UK adds +1.29% for EEA senders or +1.99% for non-EEA senders, plus a PayPal currency conversion spread (typically around 3% to 4% above the mid-market rate) whenever currencies are converted.',
  },
  eu: {
    name: 'PayPal Europe',
    symbol: '€',
    headline: '2.9% + €0.35',
    percent: 2.9,
    fixed: 0.35,
    answer:
      'PayPal Europe charges 2.9% + €0.35 per transaction for domestic European card payments made through PayPal Checkout or Guest Checkout, in addition to the 1.5% international fee on cross-border transactions.',
    detail:
      'The European rate card is structurally different from the US one in two ways. The fixed component is €0.35 rather than $0.49, and there is a mandatory 1.5% surcharge on any transaction where the buyer and seller are in different countries. For an EU seller selling across several member states, that international surcharge is usually the larger cost, not the base rate.',
    note:
      'On a €100 domestic European payment, PayPal deducts €3.25 and leaves €96.75. On the same €100 sale to a buyer outside the seller country, add 1.5% and the total deduction becomes €4.75 before any currency conversion spread.',
  },
  international: {
    name: 'PayPal International',
    symbol: '$',
    headline: '+1.5% cross-border surcharge',
    percent: 3.49,
    fixed: 0.49,
    answer:
      'Every PayPal transaction where the buyer and the seller are in different countries carries an additional 1.50% cross-border fee on top of the domestic rate, plus a currency conversion spread of 3% to 4% above the mid-market rate.',
    detail:
      'International fees have two components and they behave very differently. The 1.5% cross-border surcharge is explicit and predictable. The currency conversion spread is implicit, is applied to the exchange rate rather than to the transaction amount, and is the part most merchants underestimate. Combined, a typical cross-border PayPal transaction costs 5% to 8% all in - which is frequently more than the entire domestic rate of a dedicated cross-border processor.',
    note:
      'The practical workaround is to hold a multi-currency PayPal balance and convert it yourself, rather than letting PayPal convert at the point of sale. Converting a balance on a separate day lets you choose when the spread is applied, and for larger volumes a dedicated transfer service can move the money more cheaply.',
  },
  'qr-code': {
    name: 'PayPal QR Code',
    symbol: '$',
    headline: '2.29% + $0.09',
    percent: 2.29,
    fixed: 0.09,
    answer:
      'PayPal in-person QR code payments cost 2.29% + $0.09 per transaction. The customer scans a code from your phone or display, so no physical card is read and no key entry is required.',
    detail:
      'The QR rate is PayPal cheapest card acceptance and the reason is structural: the fixed component is 9 cents rather than 49 cents. That is what makes the rate work at low ticket sizes where a fixed fee of nearly half a dollar would dominate. At a $5 sale, 2.29% + $0.09 costs $0.20 - an effective 4.1% - against $0.66 for the standard US checkout rate on the same sale.',
    note:
      'The trade-off is settlement. In-person QR transactions typically settle to your bank account on a slower cycle than an online card payment, so a merchant running a thin cash buffer should account for that lag when modelling working capital.',
  },
  invoice: {
    name: 'PayPal Invoicing',
    symbol: '$',
    headline: '3.49% + $0.49',
    percent: 3.49,
    fixed: 0.49,
    answer:
      'PayPal Invoicing costs 3.49% + $0.49 when the customer pays by PayPal balance, Venmo or PayPal Credit. When the customer settles directly with a credit or debit card, the rate falls to 2.99% + $0.49.',
    detail:
      'The Invoicing rate is the most expensive PayPal rate card, and it is worth understanding exactly why. The 3.49% rate covers the payment methods that PayPal treats as higher-risk or higher-cost, including PayPal balance settlement, PayPal Credit instalments and the instalment products. Routing the same customer to a card payment instead of their PayPal balance changes the rate - the merchant is choosing the rail, not just the amount.',
    note:
      'If you invoice B2B clients regularly, the more useful comparison is against the cost of a credit card or ACH debit. On a $1,000 invoice, $0.49 of fixed fee is negligible, so the percentage is what matters, and a B2B invoice paid by ACH is usually far cheaper than any card or PayPal rail.',
  },
  micropayments: {
    name: 'PayPal Micropayments',
    symbol: '$',
    headline: '4.99% + $0.09',
    percent: 4.99,
    fixed: 0.09,
    answer:
      'The PayPal Micropayments rate is 4.99% + $0.09 per transaction. It trades a higher percentage for a fixed fee 40 cents lower than the standard $0.49 card rate.',
    detail:
      'Micropayments exists to solve a single problem: the $0.49 fixed component makes standard PayPal expensive on very low-ticket digital sales. With a 9-cent fixed fee instead of 49 cents, small items keep much more margin — for instance, on a $5 digital sale the micropayments fee is $0.34 (6.8%) compared with $0.64 (12.8%) at 2.99% + $0.49 or $0.66 at 3.49% + $0.49.',
    note:
      'Exact break-even math: 4.99% + $0.09 equals 2.99% + $0.49 at exactly $20.00 (and equals the 3.49% + $0.49 commercial rate at $26.67). Below those amounts micropayments is cheaper; above them, the standard percentage rate wins.',
  },
  charitable: {
    name: 'PayPal Charitable',
    symbol: '$',
    headline: '1.99% + $0.49',
    percent: 1.99,
    fixed: 0.49,
    answer:
      'Registered 501(c)(3) charities and qualified non-profits pay 1.99% + $0.49 per transaction on eligible US PayPal donations, which is 150 basis points below the 3.49% commercial Checkout rate.',
    detail:
      'The discounted charitable rate applies to verified non-profit accounts that have completed PayPal charity onboarding. The saving is entirely in the percentage, so it scales directly with donation size: on a $1,000 donation the charity rate costs $20.39 against $35.39 at the 3.49% + $0.49 commercial rate, saving $15.00 per donation.',
    note:
      'The fixed $0.49 component is unchanged, so on a $10 gift the charitable rate still costs $0.69 (6.9% effective). Model your actual average donation size before comparing donor platforms.',
  },
};

export function getPayPalChannel(slug: string): PayPalChannelFacts {
  return (
    PAYPAL_CHANNELS[slug] || {
      name: 'PayPal',
      symbol: '$',
      headline: '3.49% + $0.49',
      percent: 3.49,
      fixed: 0.49,
      answer:
        'PayPal charges a percentage plus a fixed fee on every transaction. The exact rate depends on the acceptance channel - Checkout, Invoicing, QR code, micropayments and international payments all price differently.',
      detail:
        'Standard PayPal commercial rates in the United States are 3.49% + $0.49 for Checkout, Guest Checkout and Invoicing, and 2.99% + $0.49 for standard Goods & Services card payments.',
      note:
        'On a $100 customer payment, PayPal deducts $3.98 at the Commerce rate or $3.48 at the standard card rate.',
    }
  );
}
