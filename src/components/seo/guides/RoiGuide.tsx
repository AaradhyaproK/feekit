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

interface RoiGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function RoiGuide({ sectionClass, inArticleSlot }: RoiGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Capital Allocation & Investment Performance</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Return on Investment (ROI) & CAGR: Formulas & Benchmarks ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A quantitative guide to calculating total capital return %, Compound Annual Growth Rate (CAGR), marketing campaign ROAS, and inflation-adjusted real returns.
        </p>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>The Immediate Answer: Simple ROI vs. Annualized CAGR</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>Simple Return on Investment (ROI)</strong> measures cumulative percentage gain: <code>((Final Value − Initial Cost) ÷ Initial Cost) × 100</code>. While useful for short projects, simple ROI ignores time. To accurately compare investments held over multiple years, use <strong>Compound Annual Growth Rate (CAGR)</strong>: <code>(Ending Value ÷ Starting Value)^(1 ÷ Years) − 1</code>. A 100% total return achieved over 7 years equals an annualized CAGR of approximately 10.4%.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Wall Street & Venture Capital Hurdle Rate Benchmarks
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          When deploying business capital into marketing campaigns, new software development, or public equities, benchmark against standard institutional hurdle rates:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>S&P 500 Historical Benchmark (8%–10% CAGR):</strong> The historical nominal annualized return of the broad US stock market over the past 50 years.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
            <span><strong>Internal Corporate Hurdle Rate (15%–20% ROI):</strong> The minimum expected return required to justify internal capital expenditure over holding risk-free Treasury bonds.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
            <span><strong>Performance Marketing (3x–5x ROAS):</strong> Direct-to-consumer ad campaigns target 300% to 500% Return on Ad Spend to cover landed product costs and fulfillment.</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Total Return vs. Annualized CAGR Across Time Horizons
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Investment Cost</th>
                <th className="py-3 px-4 text-slate-700">Final Ending Value</th>
                <th className="py-3 px-4 text-blue-700">Holding Period</th>
                <th className="py-3 px-4 text-emerald-700">Total ROI %</th>
                <th className="py-3 px-4 text-purple-700">Annualized CAGR %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$10,000</td>
                <td className="py-2.5 px-4 font-bold text-slate-900">$15,000</td>
                <td className="py-2.5 px-4 font-sans">1 Year</td>
                <td className="py-2.5 px-4 text-emerald-600 font-bold">+50.0%</td>
                <td className="py-2.5 px-4 text-purple-600 font-bold">+50.0%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$10,000</td>
                <td className="py-2.5 px-4 font-bold text-slate-900">$20,000 (2x)</td>
                <td className="py-2.5 px-4 font-sans">3 Years</td>
                <td className="py-2.5 px-4 text-emerald-600 font-bold">+100.0%</td>
                <td className="py-2.5 px-4 text-purple-600 font-bold">+26.0% / yr</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$10,000</td>
                <td className="py-2.5 px-4 font-bold text-slate-900">$20,000 (2x)</td>
                <td className="py-2.5 px-4 font-sans">7 Years</td>
                <td className="py-2.5 px-4 text-emerald-600 font-bold">+100.0%</td>
                <td className="py-2.5 px-4 text-purple-600 font-bold">+10.4% / yr</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$10,000</td>
                <td className="py-2.5 px-4 font-bold text-slate-900">$50,000 (5x)</td>
                <td className="py-2.5 px-4 font-sans">10 Years</td>
                <td className="py-2.5 px-4 text-emerald-600 font-bold">+400.0%</td>
                <td className="py-2.5 px-4 text-purple-600 font-bold">+17.5% / yr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Real ROI: Adjusting Returns for Inflation
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Nominal return does not account for purchasing power debasement. Under the Fisher equation, real return equals nominal return minus the annual inflation rate: <code>Real ROI ≈ Nominal ROI − Inflation Rate</code>. An investment earning 8% nominal in a 3% inflation climate yields an effective real annual gain of 5.0%.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
