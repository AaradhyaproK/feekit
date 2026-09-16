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

interface ProfitMarginGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function ProfitMarginGuide({ sectionClass, inArticleSlot }: ProfitMarginGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Financial Ratios & GAAP Accounting Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Profit Margin vs. Markup: GAAP Formulas & Benchmarks ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          How to calculate gross profit margin %, net profit margin, and cost-of-goods-sold markup with practical mathematical conversions and industry benchmarks.
        </p>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>The Immediate Answer: Profit Margin vs. Markup Explained</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>Profit Margin</strong> is the percentage of total sales revenue retained as profit after deducting costs: <code>(Profit ÷ Revenue) × 100</code>. Margin can never exceed 100%. <strong>Markup</strong> is the percentage added on top of the cost of goods sold (COGS) to set the selling price: <code>(Profit ÷ Cost) × 100</code>. A product that costs $50 and sells for $100 has a <strong>50% Gross Margin</strong> and a <strong>100% Markup</strong>.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The Destructive Impact of Unplanned Discounting
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Because fixed operating costs and product COGS stay static, offering a retail discount comes 100% out of your net profit margin. If a business operates at a 20% net margin, running a 10% flash sale slashes net profits by <strong>50%</strong>, requiring twice the volume of sales simply to make the exact same dollar profit.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Profit Margin to Markup Conversion Matrix
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Desired Gross Margin %</th>
                <th className="py-3 px-4 text-blue-700">Required Markup %</th>
                <th className="py-3 px-4 text-slate-700">Cost of Goods (COGS)</th>
                <th className="py-3 px-4 text-emerald-700">Target Retail Price</th>
                <th className="py-3 px-4 text-slate-900">Gross Profit Kept</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">20.0%</td>
                <td className="py-2.5 px-4 text-blue-600 font-semibold">25.0%</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$125.00</td>
                <td className="py-2.5 px-4">$25.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">33.3%</td>
                <td className="py-2.5 px-4 text-blue-600 font-semibold">50.0%</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$150.00</td>
                <td className="py-2.5 px-4">$50.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">50.0%</td>
                <td className="py-2.5 px-4 text-blue-600 font-semibold">100.0%</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$200.00</td>
                <td className="py-2.5 px-4">$100.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">75.0%</td>
                <td className="py-2.5 px-4 text-blue-600 font-semibold">300.0%</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$400.00</td>
                <td className="py-2.5 px-4">$300.00</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">80.0% (SaaS)</td>
                <td className="py-2.5 px-4 text-blue-600 font-semibold">400.0%</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$500.00</td>
                <td className="py-2.5 px-4">$400.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Gross Margin Formula</span>
          </div>
          <p className="text-xs font-mono text-slate-700 bg-white p-2 rounded border">
            Gross Margin % = ((Revenue − COGS) ÷ Revenue) × 100
          </p>
          <p className="text-xs text-slate-600">
            Measures production and product sourcing efficiency before indirect administrative, payroll, and rent overhead.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-indigo-600" />
            <span>Net Margin Formula</span>
          </div>
          <p className="text-xs font-mono text-slate-700 bg-white p-2 rounded border">
            Net Margin % = ((Revenue − COGS − Operating Expenses) ÷ Revenue) × 100
          </p>
          <p className="text-xs text-slate-600">
            Measures true bottom-line enterprise profitability available for dividend distributions or capital reinvestment.
          </p>
        </div>
      </div>

      {inArticleSlot}
    </section>
  );
}
