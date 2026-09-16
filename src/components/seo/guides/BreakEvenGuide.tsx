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

interface BreakEvenGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function BreakEvenGuide({ sectionClass, inArticleSlot }: BreakEvenGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Managerial Economics & Cost-Volume-Profit (CVP)</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Break-Even Point & Contribution Margin Guide ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          How to calculate unit break-even volume, gross dollar sales targets, fixed overhead allocation, and margin of safety.
        </p>
      </div>

      <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-purple-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-purple-600 shrink-0" />
          <span>The Immediate Answer: Break-Even Formula & Mechanics</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          The <strong>Break-Even Point</strong> is the exact sales milestone where total company revenue equals total expenses, yielding exactly $0 in profit and $0 in loss. Unit break-even is calculated as: <code>Fixed Overhead Costs ÷ Contribution Margin Per Unit</code>, where Contribution Margin equals <code>Unit Sale Price − Variable Cost Per Unit</code>. Every unit sold past the break-even volume produces pure pre-tax operating profit.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Fixed Costs vs. Variable Costs: The Essential Distinction
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          A successful Cost-Volume-Profit (CVP) calculation requires properly segregating expenses:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
            <span><strong>Fixed Overhead Costs:</strong> Expenses incurred regardless of output volume, including commercial office lease, full-time administrative payroll, property insurance, and recurring SaaS software subscriptions.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Variable Unit Costs:</strong> Expenses directly tied to production and fulfillment, including raw materials, packaging, direct assembly labor, shipping freight, and payment processor transaction fees.</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-purple-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Break-Even Units Across Overhead and Unit Margins
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Monthly Fixed Overhead</th>
                <th className="py-3 px-4 text-blue-700">Unit Price</th>
                <th className="py-3 px-4 text-rose-700">Variable Cost</th>
                <th className="py-3 px-4 text-purple-700">Contribution Margin</th>
                <th className="py-3 px-4 text-emerald-700">Break-Even Units</th>
                <th className="py-3 px-4 text-slate-900">Break-Even Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$5,000 / mo</td>
                <td className="py-2.5 px-4">$50.00</td>
                <td className="py-2.5 px-4 text-rose-600">$20.00</td>
                <td className="py-2.5 px-4 text-purple-700 font-bold">$30.00 (60%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">167 units</td>
                <td className="py-2.5 px-4">$8,350.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$15,000 / mo</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600">$40.00</td>
                <td className="py-2.5 px-4 text-purple-700 font-bold">$60.00 (60%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">250 units</td>
                <td className="py-2.5 px-4">$25,000.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$30,000 / mo</td>
                <td className="py-2.5 px-4">$250.00</td>
                <td className="py-2.5 px-4 text-rose-600">$100.00</td>
                <td className="py-2.5 px-4 text-purple-700 font-bold">$150.00 (60%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">200 units</td>
                <td className="py-2.5 px-4">$50,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <TrendingUp className="h-4 w-4 text-purple-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Margin of Safety (MOS): Risk Protection Metric
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The <strong>Margin of Safety</strong> quantifies how much current sales can decline before the business begins operating at a cash loss: <code>((Actual Sales − Break-Even Sales) ÷ Actual Sales) × 100</code>. A healthy business targets a Margin of Safety above 25% to withstand economic recessions, seasonal dips, or supplier price increases.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
