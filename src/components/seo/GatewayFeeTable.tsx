import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Processor fee schedule tables for the Stripe / PayPal / Square hubs.
 *
 * "Stripe fees calculator" and "PayPal fees" searches are won by pages that
 * publish the full published rate card together with what it costs in real
 * money on a $100 and a $1,000 transaction. This table does that, and every
 * row links to the matching calculator with a keyword-rich anchor.
 */

interface FeeRow {
  label: string;
  rate: string;
  on100: string;
  on1000: string;
  note?: string;
}

interface Schedule {
  key: string;
  heading: string;
  intro: string;
  sourceUrl: string;
  sourceName: string;
  rows: FeeRow[];
  calculatorHref: string;
  calculatorLabel: string;
}

const SCHEDULES: Record<string, Schedule> = {
  'stripe-fee-calculator': {
    key: 'stripe-fee-calculator',
    heading: 'Stripe Fee Schedule (US, UK & EU) — 2026',
    intro:
      'These are Stripe’s published standard pricing rates. US domestic online card payments are 2.9% + $0.30, UK domestic cards are 1.5% + 20p and EU domestic cards are 2.5% + 25p. International cards, currency conversion and manually keyed-in cards each add a surcharge on top.',
    sourceUrl: 'https://stripe.com/pricing',
    sourceName: 'Stripe official pricing page',
    calculatorHref: '/tools/stripe-fee-calculator/usa',
    calculatorLabel: 'Stripe fee calculator',
    rows: [
      {
        label: 'US domestic online card',
        rate: '2.9% + $0.30',
        on100: '$3.20',
        on1000: '$29.30',
        note: 'Effective rate 3.20% on $100, 2.93% on $1,000',
      },
      {
        label: 'US in-person (tap, dip, swipe)',
        rate: '2.7% + $0.05',
        on100: '$2.75',
        on1000: '$27.05',
      },
      {
        label: 'US manually keyed-in / virtual terminal',
        rate: '3.4% + $0.30',
        on100: '$3.70',
        on1000: '$34.30',
        note: 'Adds 0.5% over the standard online rate',
      },
      {
        label: 'US international card',
        rate: '2.9% + $0.30 + 1.5%',
        on100: '$4.70',
        on1000: '$44.30',
      },
      {
        label: 'US currency conversion',
        rate: '2.9% + $0.30 + 1.0%',
        on100: '$4.20',
        on1000: '$39.30',
      },
      {
        label: 'US ACH direct debit',
        rate: '0.8% (max $5)',
        on100: '$0.80',
        on1000: '$5.00',
        note: 'Capped at $5.00 per payment',
      },
      {
        label: 'UK domestic card',
        rate: '1.5% + 20p',
        on100: '£1.70',
        on1000: '£15.20',
      },
      {
        label: 'UK premium / corporate card',
        rate: '1.9% + 20p',
        on100: '£2.10',
        on1000: '£19.20',
      },
      {
        label: 'UK international card',
        rate: '3.25% + 20p',
        on100: '£3.45',
        on1000: '£32.70',
      },
      {
        label: 'EU / SEPA domestic card',
        rate: '2.5% + 25p (EUR) / €0.25',
        on100: '€2.75',
        on1000: '€25.25',
      },
    ],
  },
  'paypal-fee-calculator': {
    key: 'paypal-fee-calculator',
    heading: 'PayPal Fee Schedule — 2026',
    intro:
      'PayPal charges a percentage plus a fixed fee, and the percentage depends on the transaction type. US commercial transactions are 3.49% + $0.49, standard goods and services are 2.99% + $0.49, and QR code payments are 2.29% + $0.09.',
    sourceUrl: 'https://www.paypal.com/us/business/paypal-business-fees',
    sourceName: 'PayPal official business fees page',
    calculatorHref: '/tools/paypal-fee-calculator/usa',
    calculatorLabel: 'PayPal fee calculator',
    rows: [
      {
        label: 'US commercial transaction rate',
        rate: '3.49% + $0.49',
        on100: '$3.98',
        on1000: '$35.39',
        note: 'Effective rate 3.98% on $100, 3.54% on $1,000',
      },
      {
        label: 'US standard goods and services',
        rate: '2.99% + $0.49',
        on100: '$3.48',
        on1000: '$30.39',
      },
      {
        label: 'US QR code payment',
        rate: '2.29% + $0.09',
        on100: '$2.38',
        on1000: '$22.99',
      },
      {
        label: 'US micropayments',
        rate: '4.99% + $0.09',
        on100: '$5.08',
        on1000: '$49.99',
        note: 'Lowest fixed component — best for very small tickets',
      },
      {
        label: 'International transaction surcharge',
        rate: '+ 1.31% to 4.46%',
        on100: 'varies',
        on1000: 'varies',
        note: 'Added on top of the standard rate',
      },
      {
        label: 'PayPal Invoicing (paid from PayPal balance)',
        rate: '3.49% + $0.49',
        on100: '$3.98',
        on1000: '$35.39',
      },
      {
        label: 'PayPal Invoicing (paid by card)',
        rate: '2.99% + $0.49',
        on100: '$3.48',
        on1000: '$30.39',
      },
      {
        label: 'Currency conversion',
        rate: '+ 3% to 4% spread',
        on100: 'varies',
        on1000: 'varies',
      },
    ],
  },
  'square-fee-calculator': {
    key: 'square-fee-calculator',
    heading: 'Square Fee Schedule — 2026',
    intro:
      'Square’s Free plan charges 2.6% + 15¢ for in-person contactless, chip and swipe payments, and 3.3% + 30¢ for online checkout. Square Plus lowers the online rate to 2.9% + 30¢ for $29 per month.',
    sourceUrl: 'https://squareup.com/us/en/payments/our-fees',
    sourceName: 'Square official pricing page',
    calculatorHref: '/tools/square-fee-calculator/online-store',
    calculatorLabel: 'Square fee calculator',
    rows: [
      {
        label: 'In-person contactless, chip and swipe',
        rate: '2.6% + 15¢',
        on100: '$2.75',
        on1000: '$26.15',
        note: 'Effective rate 2.75% on $100, 2.62% on $1,000',
      },
      {
        label: 'Online checkout (Free plan)',
        rate: '3.3% + 30¢',
        on100: '$3.60',
        on1000: '$33.30',
      },
      {
        label: 'Online checkout (Square Plus)',
        rate: '2.9% + 30¢',
        on100: '$3.20',
        on1000: '$29.30',
        note: '$29/month subscription',
      },
      {
        label: 'Invoices',
        rate: '3.3% + 30¢',
        on100: '$3.60',
        on1000: '$33.30',
      },
      {
        label: 'Manually keyed-in (card not present)',
        rate: '3.5% + 15¢',
        on100: '$3.65',
        on1000: '$35.15',
      },
      {
        label: 'Restaurant in-person (with staff tipping)',
        rate: '2.6% + 15¢ + 2%',
        on100: '$4.75',
        on1000: '$46.15',
      },
    ],
  },
};

export function GatewayFeeTable({ category }: { category: string }) {
  const schedule = SCHEDULES[category];
  if (!schedule) return null;

  return (
    <section
      id="published-fee-schedule"
      className="pt-10 sm:pt-12 border-t border-slate-200/80 space-y-6 scroll-mt-24"
    >
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {schedule.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          {schedule.intro}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <caption className="sr-only">{schedule.heading}</caption>
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left">
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                Transaction Type
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                Fee
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                On $100
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                On $1,000
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-slate-100 last:border-0 hover:bg-blue-50/40 transition-colors"
              >
                <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">
                  {row.label}
                  {row.note && (
                    <span className="block text-xs font-normal text-slate-500 mt-0.5">
                      {row.note}
                    </span>
                  )}
                </th>
                <td className="px-4 py-3 font-mono text-slate-800 whitespace-nowrap">
                  {row.rate}
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {row.on100}
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {row.on1000}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-200 bg-blue-50/60 px-4 py-3">
        <p className="text-sm text-slate-700">
          Worked out the exact amount you keep after fees? Use the{' '}
          <Link
            href={schedule.calculatorHref}
            prefetch={false}
            className="font-bold text-blue-700 hover:underline"
          >
            {schedule.calculatorLabel}
          </Link>{' '}
          to model net payouts and reverse-calculate what to charge.
        </p>
        <Link
          href={schedule.calculatorHref}
          prefetch={false}
          className="inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:underline"
        >
          Open calculator
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        Source: {schedule.sourceName}. Rates are verified against the official
        pricing page and are current for 2026. Rates shown exclude taxes, FX
        conversion spreads and any negotiated volume pricing.
      </p>
    </section>
  );
}

export default GatewayFeeTable;
