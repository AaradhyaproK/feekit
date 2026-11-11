import React from 'react';
import Link from 'next/link';
import { US_STATE_SALES_TAX_RATES } from '@/data/rates';
import { ArrowRight, Table2 } from 'lucide-react';

/**
 * Full 50-state + DC sales tax rate table.
 *
 * This is the single highest-value on-page asset for the "sales tax
 * calculator" / "sales tax rate by state" head terms. The pages that rank for
 * those queries all lead with a complete rate table, so we do the same -
 * with unique per-state commentary, a nexus column and keyword-rich links to
 * every state calculator.
 */
export function StateSalesTaxRateTable() {
  const states = Object.values(US_STATE_SALES_TAX_RATES)
    .filter((s) => s.slug !== 'district-of-columbia')
    .sort((a, b) => a.name.localeCompare(b.name));

  const dc = US_STATE_SALES_TAX_RATES['district-of-columbia'];
  const allStates = dc ? [...states, dc] : states;

  const noTaxStates = allStates.filter((s) => s.baseRate === 0);

  return (
    <section
      id="sales-tax-rates-by-state"
      className="pt-10 sm:pt-12 border-t border-slate-200/80 space-y-6 scroll-mt-24"
    >
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          US Sales Tax Rates by State (2026)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Every US state sets a statewide sales tax base rate, and counties, cities
          and special districts add their own surtaxes on top. The table below lists
          the 2026 base rate, the maximum combined rate and the economic nexus
          threshold for all 50 states and Washington DC, so you can work out the
          exact sales tax on an invoice without guessing.
        </p>
      </div>

      {/* Quick answer block - directly answers the head query */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Highest state base rate
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">7.25%</div>
          <div className="text-xs text-slate-600 mt-1">
            California, and also the combined base in five other states
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            No statewide sales tax
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            {noTaxStates.length} states
          </div>
          <div className="text-xs text-slate-600 mt-1">
            {noTaxStates.map((s) => s.name).join(', ')}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Typical nexus threshold
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">$100,000</div>
          <div className="text-xs text-slate-600 mt-1">
            Or 200 transactions in a calendar year (most states)
          </div>
        </div>
      </div>

      {/* The rate table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm border-collapse min-w-[640px]">
          <caption className="sr-only">
            2026 US state sales tax rates: base rate, maximum combined rate and
            economic nexus threshold by state
          </caption>
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left">
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                State
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                Base Rate
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                Max Combined
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                Avg Combined
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800 text-right">
                Nexus Threshold
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-slate-800">
                Calculator
              </th>
            </tr>
          </thead>
          <tbody>
            {allStates.map((s) => (
              <tr
                key={s.slug}
                className="border-b border-slate-100 last:border-0 hover:bg-blue-50/40 transition-colors"
              >
                <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">
                  {s.name}
                </th>
                <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                  {s.baseRate.toFixed(s.baseRate % 1 === 0 ? 0 : 3)}%
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {s.maxCombinedRate.toFixed(s.maxCombinedRate % 1 === 0 ? 0 : 3)}%
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {s.combinedAverageRate.toFixed(2)}%
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {s.economicNexusThreshold
                    ? `$${s.economicNexusThreshold.toLocaleString('en-US')}`
                    : '—'}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/tools/sales-tax-calculator/${s.slug}`}
                    prefetch={false}
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    <span>{s.name} sales tax calculator</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        Base rate is the statewide statutory rate. Max combined is the highest rate
        payable once all local and district surtaxes stack. Average combined rate is
        the statewide mean of combined rates across all jurisdictions. Rates are
        verified against each state revenue department and are current for the 2026
        fiscal year.
      </p>

      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        <Table2 className="h-4 w-4 text-blue-600" />
        <span>Source: State revenue departments &amp; the Federation of Tax Administrators</span>
      </div>
    </section>
  );
}

export default StateSalesTaxRateTable;
