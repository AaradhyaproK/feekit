'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Building2,
  Globe2,
  Briefcase,
  ShoppingBag,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Info,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react';

type ComparisonTab = 'gateways' | 'tax' | 'vat' | 'freelance' | 'ecommerce';

export function ComparisonMatricesSection() {
  const [activeTab, setActiveTab] = useState<ComparisonTab>('gateways');

  const tabs: { id: ComparisonTab; label: string; icon: React.ElementType; badge: string }[] = [
    { id: 'gateways', label: 'Gateway Fee Face-Off', icon: CreditCard, badge: 'Stripe vs PayPal vs Wise' },
    { id: 'tax', label: 'US Sales Tax Cheat-Sheet', icon: Building2, badge: 'Top 10 States' },
    { id: 'vat', label: 'UK & Global VAT Rates', icon: Globe2, badge: 'HMRC & EU' },
    { id: 'freelance', label: '1099 vs W-2 Rate Matrix', icon: Briefcase, badge: '15.3% SECA Tax' },
    { id: 'ecommerce', label: 'ROAS & Margin Benchmarks', icon: ShoppingBag, badge: 'FBA vs DTC' },
  ];

  const gatewayTable = [
    {
      amount: '$10.00',
      stripeFee: '$0.59',
      stripeNet: '$9.41',
      stripeRate: '5.90%',
      paypalFee: '$0.84',
      paypalNet: '$9.16',
      paypalRate: '8.39%',
      squareFee: '$0.59',
      squareNet: '$9.41',
      squareRate: '5.90%',
      wiseFee: '$0.05',
      wiseNet: '$9.95',
      wiseRate: '0.45%',
      lowest: 'Wise',
    },
    {
      amount: '$50.00',
      stripeFee: '$1.75',
      stripeNet: '$48.25',
      stripeRate: '3.50%',
      paypalFee: '$2.24',
      paypalNet: '$47.76',
      paypalRate: '4.47%',
      squareFee: '$1.75',
      squareNet: '$48.25',
      squareRate: '3.50%',
      wiseFee: '$0.23',
      wiseNet: '$49.77',
      wiseRate: '0.45%',
      lowest: 'Wise',
    },
    {
      amount: '$100.00',
      stripeFee: '$3.20',
      stripeNet: '$96.80',
      stripeRate: '3.20%',
      paypalFee: '$3.98',
      paypalNet: '$96.02',
      paypalRate: '3.98%',
      squareFee: '$3.20',
      squareNet: '$96.80',
      squareRate: '3.20%',
      wiseFee: '$0.45',
      wiseNet: '$99.55',
      wiseRate: '0.45%',
      lowest: 'Wise',
    },
    {
      amount: '$500.00',
      stripeFee: '$14.80',
      stripeNet: '$485.20',
      stripeRate: '2.96%',
      paypalFee: '$17.94',
      paypalNet: '$482.06',
      paypalRate: '3.59%',
      squareFee: '$14.80',
      squareNet: '$485.20',
      squareRate: '2.96%',
      wiseFee: '$2.25',
      wiseNet: '$497.75',
      wiseRate: '0.45%',
      lowest: 'Wise',
    },
    {
      amount: '$1,000.00',
      stripeFee: '$29.30',
      stripeNet: '$970.70',
      stripeRate: '2.93%',
      paypalFee: '$35.39',
      paypalNet: '$964.61',
      paypalRate: '3.54%',
      squareFee: '$29.30',
      squareNet: '$970.70',
      squareRate: '2.93%',
      wiseFee: '$4.50',
      wiseNet: '$995.50',
      wiseRate: '0.45%',
      lowest: 'Wise',
    },
    {
      amount: '$5,000.00',
      stripeFee: '$145.30',
      stripeNet: '$4,854.70',
      stripeRate: '2.91%',
      paypalFee: '$174.99',
      paypalNet: '$4,825.01',
      paypalRate: '3.50%',
      squareFee: '$145.30',
      squareNet: '$4,854.70',
      squareRate: '2.91%',
      wiseFee: '$22.50',
      wiseNet: '$4,977.50',
      wiseRate: '0.45%',
      lowest: 'Wise',
    },
  ];

  const taxTable = [
    { state: 'California (CA)', baseRate: '7.25%', maxLocal: '3.00%', maxCombined: '10.25%', nexus: '$500,000', sourcing: 'Destination', link: '/tools/sales-tax-calculator/california' },
    { state: 'Texas (TX)', baseRate: '6.25%', maxLocal: '2.00%', maxCombined: '8.25%', nexus: '$500,000', sourcing: 'Origin (In-state) / Dest (Remote)', link: '/tools/sales-tax-calculator/texas' },
    { state: 'New York (NY)', baseRate: '4.00%', maxLocal: '4.875%', maxCombined: '8.875%', nexus: '$500,000 & 100 tx', sourcing: 'Destination', link: '/tools/sales-tax-calculator/new-york' },
    { state: 'Florida (FL)', baseRate: '6.00%', maxLocal: '1.50%', maxCombined: '7.50%', nexus: '$100,000', sourcing: 'Destination', link: '/tools/sales-tax-calculator/florida' },
    { state: 'Washington (WA)', baseRate: '6.50%', maxLocal: '3.90%', maxCombined: '10.40%', nexus: '$100,000', sourcing: 'Destination', link: '/tools/sales-tax-calculator/washington' },
    { state: 'Illinois (IL)', baseRate: '6.25%', maxLocal: '4.75%', maxCombined: '11.00%', nexus: '$100,000 & 200 tx', sourcing: 'Destination / Origin', link: '/tools/sales-tax-calculator/illinois' },
    { state: 'Pennsylvania (PA)', baseRate: '6.00%', maxLocal: '2.00%', maxCombined: '8.00%', nexus: '$100,000', sourcing: 'Destination', link: '/tools/sales-tax-calculator/pennsylvania' },
    { state: 'Ohio (OH)', baseRate: '5.75%', maxLocal: '2.25%', maxCombined: '8.00%', nexus: '$100,000', sourcing: 'Destination', link: '/tools/sales-tax-calculator/ohio' },
  ];

  const vatTable = [
    { jurisdiction: 'United Kingdom (UK)', standard: '20.0%', reduced: '5.0%', threshold: '£90,000', authority: 'HMRC (MTD)', link: '/tools/vat-calculator/united-kingdom' },
    { jurisdiction: 'Germany (DE)', standard: '19.0%', reduced: '7.0%', threshold: '€22,000 (Kleinunternehmer)', authority: 'Bundeszentralamt für Steuern', link: '/tools/vat-calculator/germany' },
    { jurisdiction: 'France (FR)', standard: '20.0%', reduced: '5.5% / 10%', threshold: '€36,800 (Franchise)', authority: 'DGFiP', link: '/tools/vat-calculator/france' },
    { jurisdiction: 'Spain (ES)', standard: '21.0%', reduced: '10.0%', threshold: 'None (Standard filing)', authority: 'Agencia Tributaria (AEAT)', link: '/tools/vat-calculator/spain' },
    { jurisdiction: 'Italy (IT)', standard: '22.0%', reduced: '5.0% / 10%', threshold: '€85,000 (Regime Forfettario)', authority: 'Agenzia delle Entrate', link: '/tools/vat-calculator/italy' },
    { jurisdiction: 'Ireland (IE)', standard: '23.0%', reduced: '13.5% / 9%', threshold: '€40,000 (Services) / €80,000', authority: 'Revenue Commissioners', link: '/tools/vat-calculator/ireland' },
    { jurisdiction: 'Australia (AU)', standard: '10.0% GST', reduced: '0% (Exempt)', threshold: 'A$75,000', authority: 'ATO (BAS)', link: '/tools/vat-calculator/australia' },
    { jurisdiction: 'Canada (CA)', standard: '5% GST (13-15% HST)', reduced: '0% (Zero-rated)', threshold: 'C$30,000', authority: 'CRA', link: '/tools/vat-calculator/canada' },
  ];

  const freelanceTable = [
    { targetNet: '$75,000', secaTax: '$11,475', incomeTaxEst: '$12,500', overheadEst: '$8,000', grossReq: '$106,975', hourlyRate: '$89 / hr', dayRate: '$713 / day' },
    { targetNet: '$100,000', secaTax: '$15,300', incomeTaxEst: '$18,500', overheadEst: '$10,000', grossReq: '$143,800', hourlyRate: '$120 / hr', dayRate: '$959 / day' },
    { targetNet: '$125,000', secaTax: '$19,125', incomeTaxEst: '$25,500', overheadEst: '$12,000', grossReq: '$181,625', hourlyRate: '$151 / hr', dayRate: '$1,211 / day' },
    { targetNet: '$150,000', secaTax: '$22,950', incomeTaxEst: '$33,000', overheadEst: '$15,000', grossReq: '$220,950', hourlyRate: '$184 / hr', dayRate: '$1,473 / day' },
    { targetNet: '$200,000', secaTax: '$27,500', incomeTaxEst: '$49,000', overheadEst: '$20,000', grossReq: '$296,500', hourlyRate: '$247 / hr', dayRate: '$1,977 / day' },
  ];

  return (
    <section aria-label="Financial Comparison Matrices & Cheat Sheets" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 space-y-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="h-4 w-4 text-blue-600" />
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
              Multi-Platform Rate Comparison & Cheat Sheets
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real benchmark numbers comparing merchant processors, 50-state tax rules, VAT rates, and contractor billing
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`tap-spring shrink-0 inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/80 text-blue-700 shadow-2xs'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Gateways Face-Off Table */}
      {activeTab === 'gateways' && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <p className="text-slate-600">
              Comparing standard domestic card deductions: <strong>Stripe (2.9% + $0.30)</strong> vs <strong>PayPal Commerce (3.49% + $0.49)</strong> vs <strong>Square Online (2.9% + $0.30)</strong> vs <strong>Wise Business (0.45%)</strong>.
            </p>
            <span className="shrink-0 font-mono font-bold text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              2026 Statutory Rates
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-3 px-3.5 font-bold text-slate-900">Gross Sale</th>
                  <th className="py-3 px-3.5 font-bold text-blue-700">Stripe Deducts</th>
                  <th className="py-3 px-3.5 font-bold text-slate-800">Stripe Payout</th>
                  <th className="py-3 px-3.5 font-bold text-indigo-700">PayPal Deducts</th>
                  <th className="py-3 px-3.5 font-bold text-slate-800">PayPal Payout</th>
                  <th className="py-3 px-3.5 font-bold text-emerald-700">Wise Deducts</th>
                  <th className="py-3 px-3.5 font-bold text-slate-800">Wise Payout</th>
                  <th className="py-3 px-3.5 font-bold text-slate-900">Lowest Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                {gatewayTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3.5 font-bold font-sans text-slate-900">{row.amount}</td>
                    <td className="py-2.5 px-3.5 text-rose-600 font-semibold">{row.stripeFee} <span className="text-[10px] text-slate-400 font-sans">({row.stripeRate})</span></td>
                    <td className="py-2.5 px-3.5 text-slate-900 font-semibold">{row.stripeNet}</td>
                    <td className="py-2.5 px-3.5 text-rose-600 font-semibold">{row.paypalFee} <span className="text-[10px] text-slate-400 font-sans">({row.paypalRate})</span></td>
                    <td className="py-2.5 px-3.5 text-slate-900 font-semibold">{row.paypalNet}</td>
                    <td className="py-2.5 px-3.5 text-emerald-700 font-bold">{row.wiseFee} <span className="text-[10px] text-slate-400 font-sans">({row.wiseRate})</span></td>
                    <td className="py-2.5 px-3.5 text-emerald-800 font-bold">{row.wiseNet}</td>
                    <td className="py-2.5 px-3.5 font-sans font-bold text-emerald-600">
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] border border-emerald-200">
                        {row.lowest}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
              <div className="font-bold text-slate-900">The 30¢ / 49¢ Fixed Surcharge Impact</div>
              <p className="text-slate-600 leading-relaxed">
                On small purchases ($10.00), the fixed fee pushes Stripe effective deduction to <strong>5.90%</strong> and PayPal to <strong>8.39%</strong>.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
              <div className="font-bold text-slate-900">International Surcharges (+1.5%)</div>
              <p className="text-slate-600 leading-relaxed">
                Foreign-issued credit cards incur an extra 1.50% cross-border fee on Stripe and PayPal, plus a 1% to 3.5% currency conversion spread.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
              <div className="font-bold text-slate-900">Reverse Invoicing Equation</div>
              <p className="text-slate-600 leading-relaxed font-mono text-[11px]">
                Gross = (Net + Fixed Fee) ÷ (1 − Rate)
              </p>
              <p className="text-slate-500 text-[10px]">
                To pocket $1,000.00 via Stripe USA, invoice exactly <strong>$1,030.18</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: US Sales Tax Table */}
      {activeTab === 'tax' && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <p className="text-xs text-slate-600">
            State statutory base rates and maximum combined district surtaxes across high-volume commercial jurisdictions under <em>South Dakota v. Wayfair</em>.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-3 px-3.5 font-bold text-slate-900">State Jurisdiction</th>
                  <th className="py-3 px-3.5 font-bold text-blue-700">Base State Tax</th>
                  <th className="py-3 px-3.5 font-bold text-slate-700">Max Local District</th>
                  <th className="py-3 px-3.5 font-bold text-rose-700">Max Combined</th>
                  <th className="py-3 px-3.5 font-bold text-indigo-700">Economic Nexus</th>
                  <th className="py-3 px-3.5 font-bold text-slate-700">Sourcing Rule</th>
                  <th className="py-3 px-3.5 font-bold text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                {taxTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3.5 font-bold font-sans text-slate-900">{row.state}</td>
                    <td className="py-2.5 px-3.5 text-blue-700 font-semibold">{row.baseRate}</td>
                    <td className="py-2.5 px-3.5 text-slate-600">{row.maxLocal}</td>
                    <td className="py-2.5 px-3.5 text-rose-700 font-bold">{row.maxCombined}</td>
                    <td className="py-2.5 px-3.5 text-indigo-700 font-medium font-sans">{row.nexus}</td>
                    <td className="py-2.5 px-3.5 font-sans text-slate-600">{row.sourcing}</td>
                    <td className="py-2.5 px-3.5 font-sans">
                      <Link
                        href={row.link}
                        className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 text-[11px]"
                      >
                        <span>Calculate</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <span className="text-slate-500">
              FeeKit covers all 50 states plus Washington DC with instant district tax lookup.
            </span>
            <Link
              href="/tools/sales-tax-calculator"
              className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Explore all 51 US state tax tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 3: UK & Global VAT Table */}
      {activeTab === 'vat' && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <p className="text-xs text-slate-600">
            Statutory Value Added Tax (VAT) and Goods & Services Tax (GST) compliance benchmarks for UK, European Union, and international cross-border trade.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-3 px-3.5 font-bold text-slate-900">Country</th>
                  <th className="py-3 px-3.5 font-bold text-blue-700">Standard Rate</th>
                  <th className="py-3 px-3.5 font-bold text-slate-700">Reduced Rates</th>
                  <th className="py-3 px-3.5 font-bold text-indigo-700">Small Business Threshold</th>
                  <th className="py-3 px-3.5 font-bold text-slate-700">Tax Authority</th>
                  <th className="py-3 px-3.5 font-bold text-slate-900">Tool</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                {vatTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3.5 font-bold font-sans text-slate-900">{row.jurisdiction}</td>
                    <td className="py-2.5 px-3.5 text-blue-700 font-bold">{row.standard}</td>
                    <td className="py-2.5 px-3.5 text-slate-600">{row.reduced}</td>
                    <td className="py-2.5 px-3.5 text-indigo-700 font-sans font-medium">{row.threshold}</td>
                    <td className="py-2.5 px-3.5 font-sans text-slate-600">{row.authority}</td>
                    <td className="py-2.5 px-3.5 font-sans">
                      <Link
                        href={row.link}
                        className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 text-[11px]"
                      >
                        <span>Calculate</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <span className="text-slate-500">
              Features UK Making Tax Digital (MTD), £90k threshold, and EU Reverse Charge Article 196.
            </span>
            <Link
              href="/tools/vat-calculator"
              className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Explore all 28 country VAT tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 4: 1099 vs W-2 Freelance Rate Table */}
      {activeTab === 'freelance' && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <p className="text-slate-600">
              Model target net take-home pay factored against <strong>15.3% SECA Self-Employment Tax</strong>, income tax, overhead expenses, and 1,200 annual billable hours (25h/week, 48 weeks).
            </p>
            <span className="shrink-0 font-mono font-bold text-[11px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              15.3% SECA Factored
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-3 px-3.5 font-bold text-slate-900">Target Net Income</th>
                  <th className="py-3 px-3.5 font-bold text-rose-700">15.3% SECA Tax</th>
                  <th className="py-3 px-3.5 font-bold text-slate-700">Estimated Income Tax</th>
                  <th className="py-3 px-3.5 font-bold text-slate-700">Annual Overhead</th>
                  <th className="py-3 px-3.5 font-bold text-indigo-700">Gross Invoicing Required</th>
                  <th className="py-3 px-3.5 font-bold text-blue-700">Min Hourly Rate</th>
                  <th className="py-3 px-3.5 font-bold text-emerald-700">8h Day Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                {freelanceTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3.5 font-bold font-sans text-slate-900">{row.targetNet}</td>
                    <td className="py-2.5 px-3.5 text-rose-600 font-semibold">{row.secaTax}</td>
                    <td className="py-2.5 px-3.5 text-slate-600">{row.incomeTaxEst}</td>
                    <td className="py-2.5 px-3.5 text-slate-600">{row.overheadEst}</td>
                    <td className="py-2.5 px-3.5 text-indigo-700 font-bold">{row.grossReq}</td>
                    <td className="py-2.5 px-3.5 text-blue-700 font-bold font-sans">{row.hourlyRate}</td>
                    <td className="py-2.5 px-3.5 text-emerald-700 font-bold font-sans">{row.dayRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <span className="text-slate-500">
              Freelancers must account for both employer and employee halves of FICA (12.4% Social Security + 2.9% Medicare).
            </span>
            <Link
              href="/tools/freelance-rate-calculator"
              className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Explore all 27 role rate calculators</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 5: E-Commerce ROAS & Margins */}
      {activeTab === 'ecommerce' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Unit Economics Breakdown */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3">
              <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                <span>Unit Economics Model (Example $50 DTC Item)</span>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  37.5% Net Margin
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600 font-sans">Retail Selling Price:</span>
                  <span className="font-bold text-slate-900">$49.99</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600 font-sans">Landed Manufacturing COGS:</span>
                  <span className="text-rose-600">-$14.00 (28.0%)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600 font-sans">Inbound Freight & Prep:</span>
                  <span className="text-rose-600">-$3.50 (7.0%)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600 font-sans">Merchant Payment Fee (Stripe):</span>
                  <span className="text-rose-600">-$1.75 (3.5%)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600 font-sans">Target Customer Acquisition (Ad Spend):</span>
                  <span className="text-rose-600">-$12.00 (24.0%)</span>
                </div>
                <div className="flex justify-between py-1 pt-2 font-bold text-xs">
                  <span className="text-emerald-700 font-sans">Net Take-Home Profit:</span>
                  <span className="text-emerald-700">$18.74 / unit</span>
                </div>
              </div>
            </div>

            {/* Break-Even ROAS Equation */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3">
              <div className="font-bold text-slate-900 text-sm">
                Break-Even Return on Ad Spend (ROAS)
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 text-center font-mono text-xs text-slate-800">
                Break-Even ROAS = 1 ÷ (Gross Margin Percentage)
              </div>
              <p className="text-slate-600 leading-relaxed">
                If your product gross margin before ad spend is <strong>61.5%</strong>, your break-even ROAS is <strong>1.63x</strong> ($1.00 revenue for every $0.61 ad spent). Any advertising return above 1.63x generates net positive cashflow.
              </p>
              <div className="pt-2">
                <Link
                  href="/tools/ecommerce-profit-calculator/shopify-dropshipping"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  <span>Launch Interactive ROAS Simulator</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
