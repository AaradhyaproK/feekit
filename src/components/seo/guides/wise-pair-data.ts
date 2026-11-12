import React from 'react';
import {
  BookOpen,
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  Scale,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export interface WisePairFacts {
  /** Display name for the corridor, e.g. "USD to EUR". */
  name: string;
  /** Currency symbol of the source currency. */
  fromSymbol: string;
  /** Currency symbol of the destination currency. */
  toSymbol: string;
  /** Illustrative mid-market FX rate used in the worked example. */
  midMarket: number;
  /** The retail rate a payment gateway would use after its markup. */
  retailRate: number;
  /** Wise variable transfer fee as a percentage. */
  wisePercent: number;
  /** Wise fixed transfer fee in the source currency. */
  wiseFixed: number;
  /** Gateway fixed fee in the source currency. */
  gatewayFixed: number;
  /** The gateway FX markup as a percentage. */
  gatewayMarkup: number;
  /** The local payment rail the corridor uses. */
  rail: string;
  /** The regulatory or scheme context for the corridor. */
  regulatory: string;
}

export const WISE_PAIRS: Record<string, WisePairFacts> = {
  'usd-to-eur': {
    name: 'USD to EUR',
    fromSymbol: '$',
    toSymbol: '€',
    midMarket: 0.92,
    retailRate: 0.9016,
    wisePercent: 0.43,
    wiseFixed: 1.5,
    gatewayFixed: 15,
    gatewayMarkup: 2.0,
    rail: 'SEPA credit transfer and local EUR account details',
    regulatory:
      'US businesses paying EU contractors settle through the Federal Reserve ACH network on the outbound leg and SEPA on the inbound leg. Wise pays out from its own European depository accounts, which is what avoids the EUR 15 to EUR 35 lifting fees that correspondent banks deduct from SWIFT wires.',
  },
  'usd-to-gbp': {
    name: 'USD to GBP',
    fromSymbol: '$',
    toSymbol: '£',
    midMarket: 0.79,
    retailRate: 0.7742,
    wisePercent: 0.43,
    wiseFixed: 1.5,
    gatewayFixed: 15,
    gatewayMarkup: 2.0,
    rail: 'Faster Payments and local GBP account details',
    regulatory:
      'Moving US dollars into the UK combines US ACH clearing with UK Faster Payments. After Brexit, a US-issued card used for a UK transaction now attracts a cross-border surcharge that did not previously apply, which makes a dedicated transfer service materially cheaper than card settlement.',
  },
  'gbp-to-eur': {
    name: 'GBP to EUR',
    fromSymbol: '£',
    toSymbol: '€',
    midMarket: 1.16,
    retailRate: 1.1368,
    wisePercent: 0.35,
    wiseFixed: 0.3,
    gatewayFixed: 12,
    gatewayMarkup: 2.0,
    rail: 'SEPA credit transfer',
    regulatory:
      'Post-Brexit, GBP to EUR transfers route between two separate domestic payment systems rather than a shared single market rail. UK businesses face a 1.5% standard domestic card rate, 2.5% for non-UK EEA cards, plus a 2.0% currency conversion fee on the same transaction.',
  },
  'eur-to-usd': {
    name: 'EUR to USD',
    fromSymbol: '€',
    toSymbol: '$',
    midMarket: 1.085,
    retailRate: 1.0633,
    wisePercent: 0.45,
    wiseFixed: 0.55,
    gatewayFixed: 12,
    gatewayMarkup: 2.0,
    rail: 'SEPA outbound and US ACH inbound',
    regulatory:
      'European businesses remitting to the United States clear in two systems. On the outbound leg, a non-EEA international card costs 2.5% + EUR 0.25 plus a 2.0% currency conversion fee - a total of up to 4.5% + EUR 0.25 per transaction.',
  },
  'usd-to-inr': {
    name: 'USD to INR',
    fromSymbol: '$',
    toSymbol: '₹',
    midMarket: 83.2,
    retailRate: 81.536,
    wisePercent: 0.43,
    wiseFixed: 1.5,
    gatewayFixed: 15,
    gatewayMarkup: 2.0,
    rail: 'IMPS for transfers under INR 5,00,000, NEFT and RTGS above it',
    regulatory:
      'Transfers below INR 5,00,000 route through the Immediate Payment Service and clear into accounts at HDFC, ICICI, SBI, Axis and Kotak Mahindra Bank within minutes, including on weekends. Higher-value institutional transfers route via NEFT or RTGS and settle in two to four business hours.',
  },
  'cad-to-usd': {
    name: 'CAD to USD',
    fromSymbol: 'C$',
    toSymbol: '$',
    midMarket: 0.735,
    retailRate: 0.7203,
    wisePercent: 0.45,
    wiseFixed: 0.6,
    gatewayFixed: 12,
    gatewayMarkup: 2.0,
    rail: 'Canadian EFT / Interac inbound and US ACH outbound',
    regulatory:
      'Cross-border commerce between Canada and the United States runs through two of the most integrated payment systems in the world. Stripe Canada adds a 1.5% international card fee and a 2.0% currency conversion markup on top of the 2.9% + CAD 0.30 domestic rate, a 6.4% total.',
  },
  'aud-to-usd': {
    name: 'AUD to USD',
    fromSymbol: 'A$',
    toSymbol: '$',
    midMarket: 0.662,
    retailRate: 0.6488,
    wisePercent: 0.45,
    wiseFixed: 0.7,
    gatewayFixed: 12,
    gatewayMarkup: 2.0,
    rail: 'Australian NPP / PayID outbound and US ACH inbound',
    regulatory:
      'Stripe Australia charges 1.75% + A$0.30 for domestic cards and 2.9% + A$0.30 for international ones, plus a 2.0% currency conversion fee when settling across currencies. Wise clears locally through NPP and PayID and deposits directly into the US ACH network.',
  },
  'usd-to-brl': {
    name: 'USD to BRL',
    fromSymbol: '$',
    toSymbol: 'R$',
    midMarket: 5.25,
    retailRate: 5.145,
    wisePercent: 0.43,
    wiseFixed: 1.5,
    gatewayFixed: 15,
    gatewayMarkup: 2.0,
    rail: 'PIX and TED domestic settlement in Brazil',
    regulatory:
      'Brazil now clears the majority of domestic payments over PIX, and the Central Bank of Brazil operates a foreign exchange market with a daily reference rate that functions as the mid-market benchmark. A BRL 1,500 transaction costs roughly 0.38% on the Wise corridor.',
  },
};

export function getWisePair(slug: string): WisePairFacts {
  return (
    WISE_PAIRS[slug] || {
      name: 'Cross-Border Transfer',
      fromSymbol: '$',
      toSymbol: '€',
      midMarket: 0.92,
      retailRate: 0.9016,
      wisePercent: 0.43,
      wiseFixed: 1.5,
      gatewayFixed: 15,
      gatewayMarkup: 2.0,
      rail: 'local account details on both ends',
      regulatory:
        'Wise operates on the mid-market exchange rate with a transparent variable fee, while payment gateways add a currency conversion markup of 1% to 2% on top of the mid-market rate.',
    }
  );
}
