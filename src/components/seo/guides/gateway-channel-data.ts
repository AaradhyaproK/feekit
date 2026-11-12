/**
 * Payment processor channel facts.
 *
 * The Stripe, Square and Authorize.Net guides each rendered the same
 * generic copy on every page in their category. That produced 7 identical
 * Stripe pages, 3 identical Square pages and 3 identical Authorize.Net pages
 * - 13 near-duplicate URLs competing with each other.
 *
 * Each channel below carries its own rate card, its own narrative, its own
 * arithmetic and its own practical note, so every page answers the query it
 * targets.
 */

export interface GatewayChannelFacts {
  /** Display name used in headings. */
  name: string;
  /** Currency symbol for the channel. */
  symbol: string;
  /** Headline rate as displayed. */
  headline: string;
  /** Percentage component of the rate. */
  percent: number;
  /** Fixed component of the rate. */
  fixed: number;
  /** The one-line answer in the highlighted block. */
  answer: string;
  /** A channel-specific paragraph explaining the rate structure. */
  detail: string;
  /** A channel-specific practical note. */
  note: string;
  /** The regulatory or contractual detail that matters for this channel. */
  regulatory: string;
}

// ---------------------------------------------------------------------------
// Stripe
// ---------------------------------------------------------------------------

export const STRIPE_CHANNELS: Record<string, GatewayChannelFacts> = {
  usa: {
    name: 'Stripe US',
    symbol: '$',
    headline: '2.9% + $0.30',
    percent: 2.9,
    fixed: 0.3,
    answer:
      'Stripe charges 2.9% + $0.30 per successful US domestic card charge. Stripe Terminal in-person payments cost 2.7% + $0.05, and manually keyed-in cards cost 3.4% + $0.30.',
    detail:
      'Stripe US pricing is built on a blended flat rate. The percentage covers network interchange and issuing bank costs, and the 30-cent fixed fee covers gateway routing and fraud scoring. The fixed component is what makes low-ticket sales expensive: on a $10 checkout the same schedule costs $0.59, an effective rate of 5.9% rather than 2.9%.',
    note:
      'On a $100 US payment, Stripe deducts $3.20 and leaves $96.80. To net a specific amount, gross it up: (Net + $0.30) divided by (1 - 0.029).',
    regulatory:
      'Stripe US supports ACH Direct Debit at 0.8% capped at $5.00, which is materially cheaper than card processing for B2B invoices above roughly $100.',
  },
  uk: {
    name: 'Stripe UK',
    symbol: '£',
    headline: '1.5% + 20p',
    percent: 1.5,
    fixed: 0.2,
    answer:
      'Stripe charges 1.5% + 20p for UK domestic consumer cards. European Economic Area consumer cards cost 2.5% + 20p, and international cards cost 3.25% + 20p.',
    detail:
      'Stripe UK prices by card origin rather than by cardholder residence, and the gap between the domestic and international rates is the largest of any major market. A UK customer paying with a US-issued card costs 3.25% + 20p - more than double the domestic rate - and the surcharge is not optional.',
    note:
      'On a £100 UK domestic payment, Stripe deducts £1.70 and leaves £98.30. Because the fixed fee is 20p rather than 30p, the UK rate card is meaningfully more efficient than the US one at low ticket sizes.',
    regulatory:
      'UK merchants taking payments are liable for their own VAT treatment on the fee, and Stripe UK also supports Open Banking pay-by-bank which is typically the cheapest rail for invoices above about £10.',
  },
  'keyed-entry': {
    name: 'Stripe Keyed-In',
    symbol: '$',
    headline: '3.4% + $0.30',
    percent: 3.4,
    fixed: 0.3,
    answer:
      'Manually keyed-in and Virtual Terminal card payments cost 3.4% + $0.30 - 50 basis points above the 2.9% + $0.30 online checkout rate, because the card is not physically present.',
    detail:
      'Keyed-in transactions carry a 0.5 percentage point premium over online checkout for one reason: the fraud liability is different. With an online checkout the customer enters the card on a Stripe-hosted page, which shifts much of the fraud risk to the issuer. When you type the number in yourself, the chargeback risk sits with the merchant, and Stripe prices that risk into the rate.',
    note:
      'On a $100 keyed-in charge, Stripe deducts $3.70 and leaves $96.30. If you offer a keyed-in option, use it as a fallback for phone and mail orders rather than as the default path.',
    regulatory:
      'Keyed-in transactions are also subject to higher chargeback rates, and a merchant with a high volume of keyed-in sales can trigger card network monitoring programmes. Keeping a paper authorisation trail is the practical mitigation.',
  },
  international: {
    name: 'Stripe International Cards',
    symbol: '$',
    headline: '+1.5% cross-border surcharge',
    percent: 2.9,
    fixed: 0.3,
    answer:
      'Every Stripe transaction where the customer card is issued outside your country of business carries an additional 1.5% international card fee, and a 1.0% currency conversion fee applies whenever the charge is settled in a different currency from your account.',
    detail:
      'Two separate surcharges stack on an international card payment, and they apply for different reasons. The 1.5% cross-border fee covers the extra network and scheme costs of clearing a card across a border. The 1.0% currency conversion fee covers converting the settlement into your account currency, and it is charged on the converted amount rather than the original charge.',
    note:
      'On a $100 cross-border non-USD charge settled into a USD account, the total deduction reaches $3.20 + $1.50 + $1.00 = $5.70 (5.7%). Settling foreign-currency sales directly into a matching multi-currency balance avoids the 1.0% FX conversion surcharge.',
    regulatory:
      'International card acceptance also brings scheme-specific obligations: the merchant must satisfy the local dispute and refund regime for the cardholder country, and a business in the EEA must handle SCA exemptions correctly for EU-issued cards.',
  },
  eurozone: {
    name: 'Stripe Europe',
    symbol: '€',
    headline: '1.5% + €0.25',
    percent: 1.5,
    fixed: 0.25,
    answer:
      'Stripe charges 1.5% + €0.25 for standard European Economic Area consumer cards, 2.5% + €0.25 for UK cards, and 3.5% + €0.25 for international cards.',
    detail:
      'The European rate card is built around the SEPA and the single market. A domestic EEA consumer card is the cheapest card rail in Europe, but the moment the card is issued outside the EEA the rate steps up - a UK card is 2.5% and a US card is 3.5%. The 25-cent fixed fee is higher than the UK equivalent, so very low-ticket European sales suffer more than they do in Britain.',
    note:
      'On a €100 EEA domestic payment, Stripe deducts €1.75 and leaves €98.25. On the same €100 charged to a US-issued card, the deduction becomes €4.25.',
    regulatory:
      'Strong Customer Authentication applies across the EEA, and under PSD2 a merchant can request an exemption for low-value or low-risk transactions. The SCA exemption framework is the single biggest driver of European conversion rates, and getting the exemption logic wrong is a common cause of failed checkouts.',
  },
  canada: {
    name: 'Stripe Canada',
    symbol: 'CA$',
    headline: '2.9% + CA$0.30',
    percent: 2.9,
    fixed: 0.3,
    answer:
      'Stripe charges 2.9% + CA$0.30 for Canadian domestic cards, 2.9% + CA$0.30 plus a 1.5% international surcharge for foreign cards, and 1.5% + CA$0.30 for Interac online.',
    detail:
      'The Canadian rate card is unusual because of the card mix. Credit cards dominate online checkout at 2.9% + CA$0.30, while Interac - which has a far lower fee at 1.5% + CA$0.30 - is the dominant rail for in-person debit and pre-authorised payments. A Canadian merchant that optimises for card-present Interac acceptance has a materially lower cost of funds than one that only sees credit card volume.',
    note:
      'On a CA$100 credit card charge, Stripe deducts CA$3.20 and leaves CA$96.80. On the same amount charged to Interac, the deduction is CA$1.80.',
    regulatory:
      'Canadian merchants must collect GST/HST on the fee itself where the supply is taxable, and PIPEDA governs the personal information handled during the transaction.',
  },
  australia: {
    name: 'Stripe Australia',
    symbol: 'A$',
    headline: '1.75% + A$0.30',
    percent: 1.75,
    fixed: 0.3,
    answer:
      'Stripe charges 1.75% + A$0.30 for domestic Australian cards, 2.9% + A$0.30 for international cards, and 1.75% + A$0.30 for local Afterpay and other BNPL options.',
    detail:
      'Australia has one of the lowest card processing rates in the developed world, which is a direct consequence of the local card mix and interchange caps. A merchant taking domestic card volume in Australia is working with a 1.75% headline rate - materially cheaper than the US at 2.9% and the UK at 1.5% + 20p once the fixed component is accounted for. The saving evaporates on international cards, which step up to 2.9% + A$0.30.',
    note:
      'On an A$100 domestic payment, Stripe deducts A$2.05 and leaves A$97.95. On the same A$100 charged to a card issued outside Australia, the deduction becomes A$3.20.',
    regulatory:
      'Australian businesses must be registered for GST once turnover passes the AUD 75,000 threshold, and Stripe applies the GST component to its fees for GST-registered accounts.',
  },
  japan: {
    name: 'Stripe Japan',
    symbol: '¥',
    headline: '3.6% + ¥0',
    percent: 3.6,
    fixed: 0,
    answer:
      'Stripe charges 3.6% with no fixed fee component for Japanese domestic cards, plus a separate JCB-specific surcharge where it applies.',
    detail:
      'The Japanese rate card has no fixed component at all, which is unusual and has a real consequence: the effective rate is the same at every ticket size. On a ¥1,000 payment the fee is ¥36, and on a ¥100,000 payment it is also ¥3,600. There is no small-order penalty, which makes Stripe Japan unusually well suited to low-ticket consumer businesses.',
    note:
      'On a ¥10,000 payment, Stripe deducts ¥360 and leaves ¥9,640. Because there is no fixed fee, you can price a low-cost digital item without the fixed-fee drag that dominates the US and European rate cards.',
    regulatory:
      'Japanese merchants must appoint a qualified invoice issuer (適格請求書発行事業者) to issue compliant consumption tax invoices, and Stripe supports this through its Japanese JCB and credit card billing arrangements.',
  },
  singapore: {
    name: 'Stripe Singapore',
    symbol: 'S$',
    headline: '3.4% + S$0.50',
    percent: 3.4,
    fixed: 0.5,
    answer:
      'Stripe charges 3.4% + S$0.50 for Singapore domestic cards, plus 1.5% on international cards and 1% for currency conversion.',
    detail:
      'Singapore combines a mid-range percentage with the largest fixed component on the site, which makes low-ticket Singapore payments expensive. The S$0.50 fixed fee accounts for nearly 60% of the total fee on a S$10 sale (S$0.50 out of S$0.84). For a digital goods business selling low-price downloads, choosing a lower fixed-fee rail like PayNow saves more than negotiating percentage points.',
    note:
      'On a S$100 payment, Stripe deducts S$3.90 and leaves S$96.10. On a S$10 payment the same schedule costs S$0.84 - an effective 8.4%.',
    regulatory:
      'Singapore levies GST at 9% and Stripe applies GST to its fees for Singapore-registered businesses. Merchants must also satisfy the Payments Services Act and MAS oversight requirements for the payment activity they operate.',
  },
  micropayments: {
    name: 'Stripe Micropayments',
    symbol: '$',
    headline: '5% + $0.10',
    percent: 5,
    fixed: 0.1,
    answer:
      'Stripe micropayments cost 5% + $0.10 per transaction, trading a higher percentage for a fixed fee that is 20 cents lower than the standard card rate.',
    detail:
      'The micropayments schedule exists for one structural reason: the $0.30 fixed component makes standard 2.9% + $0.30 pricing costly on very small baskets. With a 10-cent fixed fee instead of 30 cents, small digital sales preserve far more margin below roughly $9.50.',
    note:
      'Exact crossover math: 5.0% + $0.10 equals 2.9% + $0.30 at $9.52. Below $9.52, micropayments is cheaper; above $9.52, standard 2.9% + $0.30 is cheaper. On a $5 payment the fee is $0.35 (7.0% effective).',
    regulatory:
      'Micropayments pricing is available on a subset of Stripe products and is typically enabled per account rather than per transaction, so it needs to be turned on before it applies to a live checkout.',
  },
  'non-profit': {
    name: 'Stripe Non-Profit',
    symbol: '$',
    headline: '2.2% + $0.30',
    percent: 2.2,
    fixed: 0.3,
    answer:
      'Eligible registered non-profits and charities pay 2.2% + $0.30 per card charge, a 70 basis point discount on the standard 2.9% + $0.30 rate.',
    detail:
      'The discounted rate applies to accounts that have completed Stripe non-profit verification, which in practice means a 501(c)(3) in the US or an equivalent registered charity status elsewhere. The saving is entirely in the percentage, so it scales with donation size rather than transaction count - on a $1,000 donation the discount is $7.00, and on a $50 donation it is 35 cents.',
    note:
      'On a $100 donation, the non-profit rate costs $2.50 against $3.20 at the standard rate. Because the fixed component is unchanged, the discount matters far less on small donations than the headline percentage suggests.',
    regulatory:
      'Donations made through a discounted charity account are still taxable supplies for sales tax purposes in most US states, and the charity remains responsible for the tax treatment of its own receipts. The Stripe discount does not change the tax position.',
  },
};

// ---------------------------------------------------------------------------
// Square
// ---------------------------------------------------------------------------

export const SQUARE_CHANNELS: Record<string, GatewayChannelFacts> = {
  usa: {
    name: 'Square US',
    symbol: '$',
    headline: '2.6% + $0.15 POS / 3.3% + $0.30 Online',
    percent: 2.6,
    fixed: 0.15,
    answer:
      'Square Free charges 2.6% + $0.15 for in-person card-present payments, 3.3% + $0.30 for online store checkout and invoices, and 3.5% + $0.15 for manually keyed-in cards.',
    detail:
      'Square sells an integrated suite - payment processing, POS hardware, invoicing and customer loyalty - with no monthly fee on the Free plan. Paid plans such as Square Plus ($29/month) drop online checkout from 3.3% + $0.30 to 2.9% + $0.30. For omnichannel retailers, bundled inventory and POS reconciliation often matters alongside the processing rate.',
    note:
      'Square transfers standard deposits to your bank the next business day for free, or offers Instant Transfers when immediate liquidity is needed.',
    regulatory:
      'Square acts as the payment facilitator on merchant accounts, handling 3-D Secure, card network rules and dispute evidence workflows under standard PCI DSS obligations.',
  },
  'in-person': {
    name: 'Square In-Person POS',
    symbol: '$',
    headline: '2.6% + $0.15',
    percent: 2.6,
    fixed: 0.15,
    answer:
      'Square charges 2.6% + $0.15 for in-person contactless, chip and swipe payments on the Free plan with no monthly subscription.',
    detail:
      'Card-present tap, dip and swipe payments are Square’s cheapest acceptance tier because physical chip/contactless verification carries much lower fraud risk than typed card numbers. On a $5.00 counter sale, 2.6% + $0.15 deducts $0.28 (5.6% effective) versus $0.45 for a 30-cent fixed online rate.',
    note:
      'On a $100 in-person sale, Square Free deducts $2.75 and leaves $97.25. By comparison, Stripe Terminal charges 2.7% + $0.05 ($2.75 on $100), so Stripe Terminal wins below $100 while Square Free wins above $100.',
    regulatory:
      'In-person card acceptance on Square uses EMV/contactless certified readers and operates under the same card network dispute rules as other aggregators.',
  },
  'online-store': {
    name: 'Square Online Store',
    symbol: '$',
    headline: '3.3% + $0.30',
    percent: 3.3,
    fixed: 0.3,
    answer:
      'Square charges 3.3% + $0.30 for Square Online Store checkout and Invoices on the Free plan, falling to 2.9% + $0.30 on Square Plus ($29/month) and Premium.',
    detail:
      'On the Free tier ($0/month), Square Online sits 40 basis points above Stripe’s 2.9% + $0.30 checkout rate, though Square bundles storefront hosting and POS catalog sync in one login. Upgrading to Square Plus at $29/month reduces the online processing rate to 2.9% + $0.30 (the same rate Square also charges on custom Developer API checkouts).',
    note:
      'On a $100 online order on the Free plan, Square deducts $3.60 and leaves $96.40. Because Square Plus ($29/mo) saves 0.40 percentage points on online checkout, it pays for itself above $7,250/month in online sales ($29 / 0.004).',
    regulatory:
      'Square online checkout supports 3-D Secure and the same dispute framework as card-present sales, with Square Payments acting as payment facilitator.',
  },
  invoice: {
    name: 'Square Invoices',
    symbol: '$',
    headline: '3.3% + $0.30',
    percent: 3.3,
    fixed: 0.3,
    answer:
      'Square Invoices cost 3.3% + $0.30 on the Free plan, dropping to 2.9% + $0.30 on paid Square Plus or Invoices Plus plans.',
    detail:
      'The Free invoice rate carries a 40 basis point premium over the paid 2.9% + $0.30 tier. Service businesses using Square primarily for milestone billing, recurring retainers and payment links benefit from predictable delivery without needing a full storefront.',
    note:
      'On a $1,000 invoice paid by card, Square deducts $33.30 on the Free plan and $29.30 on the paid 2.9% tier. Offering ACH bank transfer avoids percentage-heavy card costs on multi-thousand-dollar B2B invoices.',
    regulatory:
      'Invoices can be configured with deposits, milestone schedules or recurring billing, and each settled instalment follows standard state/local tax and recordkeeping rules.',
  },
  'keyed-entry': {
    name: 'Square Keyed-In',
    symbol: '$',
    headline: '3.5% + $0.15',
    percent: 3.5,
    fixed: 0.15,
    answer:
      'Square charges 3.5% + $0.15 for manually keyed-in card numbers taken over the phone or typed into Virtual Terminal (or Card on File).',
    detail:
      'Keyed-in carries a 0.90 percentage point premium over Square’s 2.6% + $0.15 in-person rate because no physical EMV chip or contactless token is read, increasing chargeback and fraud exposure.',
    note:
      'On a $100 keyed-in charge, Square deducts $3.65 and leaves $96.35. Sending the customer a digital payment link or invoice avoids paying the manual-entry premium.',
    regulatory:
      'Keyed-in transactions have higher dispute rates than card-present sales; keep signed or written customer authorization for phone/mail orders to defend chargebacks.',
  },
  restaurant: {
    name: 'Square for Restaurants',
    symbol: '$',
    headline: '2.6% + $0.10',
    percent: 2.6,
    fixed: 0.1,
    answer:
      'Square for Restaurants Free charges 2.6% + $0.10 per in-person transaction. The Plus tier at $69 per location lowers the in-person rate to 2.5% + $0.10.',
    detail:
      'Square for Restaurants adds kitchen display workflows, course firing, floor plans and server permissions alongside POS processing. The 10-cent fixed fee aligns closely with high-frequency dining tickets, while the Plus tier shaves 0.10% off card-present processing.',
    note:
      'On a $50 table bill, the Free tier deducts $1.40 (2.6% + $0.10) and leaves $48.60. Based purely on the 0.10% card-rate reduction alone, a $69/month Plus subscription needs $69,000/month in card volume ($69 / 0.001) to break even — so weigh the software features rather than just the 10 bps rate cut.',
    regulatory:
      'Hospitality transactions must account correctly for local sales tax rules and pre-tax vs post-tax tip calculation standards.',
  },
  standard: {
    name: 'Square Standard',
    symbol: '$',
    headline: '2.6% + $0.15',
    percent: 2.6,
    fixed: 0.15,
    answer:
      'Square Free charges 2.6% + $0.15 for in-person card-present payments, 3.3% + $0.30 for online checkout, and 3.5% + $0.15 for manually keyed-in cards.',
    detail:
      'Square Standard spans the three core acceptance channels a merchant uses: tapping a card at the counter, collecting through an online checkout, and keying card numbers over the phone. Every tier prices for fraud risk — moving a sale from keyed entry (3.5% + $0.15) to card-present POS (2.6% + $0.15) saves 90 basis points immediately.',
    note:
      'On a $100 transaction those three methods deduct $2.75 (in-person), $3.60 (online Free), and $3.65 (keyed-in) respectively.',
    regulatory:
      'Standard account terms cover card network dispute evidence rules, 3-D Secure on web checkouts, and PCI DSS compliance.',
  },
};

// ---------------------------------------------------------------------------
// Authorize.Net
// ---------------------------------------------------------------------------

export const AUTHORIZENET_CHANNELS: Record<string, GatewayChannelFacts> = {
  'standard-merchant': {
    name: 'Authorize.Net All-in-One',
    symbol: '$',
    headline: '2.9% + $0.30',
    percent: 2.9,
    fixed: 0.3,
    answer:
      'Authorize.Net All-in-One charges 2.9% + $0.30 per transaction with no monthly gateway fee and no setup cost.',
    detail:
      'All-in-One bundles the Authorize.Net gateway with payment processing into a single rate. It exists for merchants who want a stable, long-established gateway with predictable pricing rather than the developer tooling and the volume-negotiated rate that Stripe offers. The 2.9% + $0.30 headline is identical to Stripe US online checkout, so the choice comes down to contract structure, not the rate.',
    note:
      'On a $100 charge, Authorize.Net deducts $3.20 and leaves $96.80. There is no monthly fee, so unlike Payment Gateway Only the break-even volume does not exist.',
    regulatory:
      'Authorize.Net is a payment facilitator, which means it appears on the customer statement and bears the fraud liability - the same structure as Stripe and Square.',
  },
  'gateway-only': {
    name: 'Authorize.Net Payment Gateway Only',
    symbol: '$',
    headline: '$25/mo + $0.10/tx',
    percent: 0,
    fixed: 0.1,
    answer:
      'Payment Gateway Only costs a $25 monthly gateway fee plus $0.10 per transaction, with card processing charged separately by your own merchant account.',
    detail:
      'Payment Gateway Only exists for merchants who already have a merchant account and want Authorize.Net for the gateway technology - transaction routing, tokenisation, fraud screening, and the customer-facing hosted payment pages - without switching the acquiring relationship. The gateway fee is the price of that separation.',
    note:
      'Because Payment Gateway Only sits on top of your external acquirer’s Interchange-Plus fees rather than replacing them, it saves money over a bundled 2.9% + $0.30 plan only when your monthly volume is high enough that lower debit/credit interchange savings exceed the $25 monthly fee and $0.10 per transaction.',
    regulatory:
      'Because the merchant account stays with the acquirer, the merchant remains directly responsible for PCI DSS compliance, chargeback liability and the dispute timeline.',
  },
  echeck: {
    name: 'Authorize.Net eCheck',
    symbol: '$',
    headline: '0.75% (capped)',
    percent: 0.75,
    fixed: 0,
    answer:
      'Authorize.Net eCheck and ACH transactions cost 0.75% per transaction, capped at $5.00 per item, plus a monthly transaction fee.',
    detail:
      'ACH is where the real economics of a gateway separate from a card processor. At 0.75% capped at $5.00 against a card rate of 2.9% + $0.30, eCheck is roughly four times cheaper on a $500 invoice and it is the only rail that supports B2B payment terms of 30 to 60 days without the merchant carrying the float.',
    note:
      'On a $500 invoice, eCheck costs $3.75 against $14.80 for card processing - a saving of more than $11 per payment. The trade-off is settlement speed: ACH typically clears in three to five business days.',
    regulatory:
      'ACH returns are a material risk at 0.75% because the margin does not cover a reversal. Authorize.Net offers network tokenisation and account verification tools to reduce returned-item rates.',
  },
  international: {
    name: 'Authorize.Net International',
    symbol: '$',
    headline: '+1.5% cross-border surcharge',
    percent: 2.9,
    fixed: 0.3,
    answer:
      'Authorize.Net adds a 1.5% surcharge on international card transactions, plus a separate currency conversion fee when the settlement currency differs from your merchant account currency.',
    detail:
      'The international surcharge covers the cross-border network and scheme costs, and it applies whenever the card is issued outside the merchant country of record. Currency conversion is charged separately and is applied to the converted amount, so the two costs compound rather than overlap.',
    note:
      'On a $100 international charge settled in USD, the total deduction is $3.20 + $1.50 = $4.70, before any currency conversion fee. At $1,000 the surcharge alone is $15.00.',
    regulatory:
      'Accepting international cards requires satisfying the dispute and refund regime of the cardholder country, and a gateway-only arrangement makes the merchant directly responsible for those obligations.',
  },
};

export function getStripeChannel(slug: string): GatewayChannelFacts {
  return (
    STRIPE_CHANNELS[slug] || {
      name: 'Stripe',
      symbol: '$',
      headline: '2.9% + $0.30',
      percent: 2.9,
      fixed: 0.3,
      answer:
        'Stripe charges 2.9% + $0.30 per successful US domestic card charge, with reduced rates for UK and European consumer cards and additional surcharges for international and currency-converted payments.',
      detail:
        'Stripe uses a blended flat-rate pricing model. The variable percentage covers network interchange and issuing bank costs, and the fixed per-transaction fee covers gateway routing and fraud detection.',
      note:
        'On a $100 payment, Stripe deducts $3.20 and leaves $96.80.',
      regulatory:
        'Stripe supports ACH Direct Debit at 0.8% capped at $5.00 for US merchants.',
    }
  );
}

export function getSquareChannel(slug: string): GatewayChannelFacts {
  return (
    SQUARE_CHANNELS[slug] || {
      name: 'Square',
      symbol: '$',
      headline: '2.6% + $0.15 POS / 3.3% + $0.30 Online',
      percent: 2.6,
      fixed: 0.15,
      answer:
        'Square charges 2.6% + $0.15 for in-person card-present payments, 3.3% + $0.30 for Free online checkout, and 3.5% + $0.15 for manually keyed-in cards.',
      detail:
        'Square bundles payment processing, a point of sale, invoicing and customer loyalty into a single product on one monthly subscription.',
      note:
        'Square pays out to your bank the next business day at no cost, with an Instant Transfer available for 1.75%.',
      regulatory:
        'Square is a card-present-first product subject to the same network dispute and chargeback rules as any other processor.',
    }
  );
}

export function getAuthorizeNetChannel(slug: string): GatewayChannelFacts {
  return (
    AUTHORIZENET_CHANNELS[slug] || {
      name: 'Authorize.Net',
      symbol: '$',
      headline: '2.9% + $0.30',
      percent: 2.9,
      fixed: 0.3,
      answer:
        'Authorize.Net charges 2.9% + $0.30 per transaction on the All-in-One plan with no monthly gateway fee.',
      detail:
        'Authorize.Net separates the gateway from the merchant account, which allows a merchant to keep their existing acquiring relationship while using Authorize.Net for transaction routing and fraud screening.',
      note:
        'On a $100 charge, Authorize.Net deducts $3.20 and leaves $96.80.',
      regulatory:
        'Authorize.Net operates as a payment facilitator on the All-in-One plan.',
    }
  );
}
