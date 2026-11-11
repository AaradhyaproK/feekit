import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';
import { VAT_COUNTRIES } from '@/lib/data/vat-countries';

/**
 * VAT rate table for the UK / EU / Canada / Australia hub.
 *
 * The "vat calculator" and "vat rates by country" head terms are won by pages
 * that publish a complete, scannable rate table. This block does exactly that
 * and links every row to its country calculator with a keyword-rich anchor.
 */

/**
 * Australia and Canada use GST / HST rather than VAT, so they are not part of
 * the VAT_COUNTRIES registry but still need to appear in the comparison table.
 */
const EXTRA_ROWS = [
  {
    slug: 'australia',
    name: 'Australia',
    localVatName: 'Goods and Services Tax (GST)',
    standardRate: 10,
    reducedRate: undefined as number | undefined,
    registrationThreshold: 'AUD 75,000 (turnover)',
    authorityName: 'Australian Taxation Office (ATO)',
  },
  {
    slug: 'canada',
    name: 'Canada',
    localVatName: 'GST / HST / PST',
    standardRate: 5,
    reducedRate: 15,
    registrationThreshold: 'CAD 30,000 (CRA, four quarters)',
    authorityName: 'Canada Revenue Agency (CRA)',
  },
];

export function VatRateTable() {
  const rows = [
    ...Object.values(VAT_COUNTRIES).map((c) => ({
      slug: c.slug,
      name: c.name,
      localVatName: c.localVatName,
      standardRate: c.standardRate,
      reducedRate: c.reducedRate,
      registrationThreshold: c.registrationThreshold,
      authorityName: c.authorityName,
    })),
    ...EXTRA_ROWS,
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section
      id="vat-rates-by-country"
      className="pt-10 sm:pt-12 border-t border-slate-200/80 space-y-6 scroll-mt-24"
    >
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          VAT Rates by Country (2026)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          VAT rates differ in every country and are set by each national tax
          authority. The table below lists the current 2026 standard and reduced
          VAT rate for the UK, every EU member state, Canada and Australia,
          together with the registration threshold that applies in each country.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Highest standard rate
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">27%</div>
          <div className="text-xs text-slate-600 mt-1">Hungary, and 25% in Sweden and Denmark</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            UK standard rate
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">20%</div>
          <div className="text-xs text-slate-600 mt-1">Reduced rate 5%, zero rate on many goods</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Countries covered
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            {rows.length}
          </div>
          <div className="text-xs text-slate-600 mt-1">UK, EU member states, Canada and Australia</div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <caption className="sr-only">
            2026 VAT rates by country: standard rate, reduced rate and
            registration threshold
          </caption>
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left">
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                Country
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                VAT Name
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                Standard
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                Reduced
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                Registration Threshold
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                Calculator
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr
                key={c.slug}
                className="border-b border-slate-100 last:border-0 hover:bg-blue-50/40 transition-colors"
              >
                <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">
                  {c.name}
                </th>
                <td className="px-4 py-3 text-slate-600">{c.localVatName}</td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                  {c.standardRate}%
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {c.reducedRate ? `${c.reducedRate}%` : '—'}
                </td>
                <td className="px-4 py-3 text-slate-600">{c.registrationThreshold}</td>
                <td className="px-4 py-3">
                  <Link
                    href={`/tools/vat-calculator/${c.slug}`}
                    prefetch={false}
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    <span>{c.name} VAT calculator</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        Registration thresholds, reduced rates and reverse-charge rules are set
        nationally and change periodically. Each link opens a country calculator
        with the current statutory rates plus the official tax authority source.
      </p>

      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        <Globe className="h-4 w-4 text-blue-600" />
        <span>Source: national tax authorities (HMRC, EU member state tax departments, CRA, ATO)</span>
      </div>
    </section>
  );
}

export default VatRateTable;
