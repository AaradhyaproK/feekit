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

interface UkIr35GuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function UkIr35Guide({ sectionClass, inArticleSlot }: UkIr35GuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>HMRC Off-Payroll Working & IR35 Contractor Guide</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          UK IR35 Guide: Inside vs. Outside Take-Home Pay Comparison ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A financial comparison between working Inside IR35 through an umbrella company versus Outside IR35 via a Limited Company Personal Service Company (PSC).
        </p>
      </div>

      <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-purple-950 font-bold text-sm">
          <Scale className="h-4 w-4 text-purple-600 shrink-0" />
          <span>The Immediate Answer: Net Pay Gap Between Inside and Outside</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Operating <strong>Outside IR35</strong> through your own Limited Company (PSC) typically yields <strong>15% to 25% higher net take-home pay</strong> than working Inside IR35 at the exact same daily contract rate. This difference is driven by two factors: Inside IR35 contracts force the contractor to absorb Employer National Insurance (13.8%) and the 0.5% Apprenticeship Levy, whereas Outside IR35 allows tax-efficient remuneration through low PAYE salaries and shareholder dividend distributions.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The Status Determination Statement (SDS) & Off-Payroll Rules
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Under the Off-Payroll Working rules, medium and large private sector businesses and public authorities are legally obligated to evaluate contractor employment status and issue a written <strong>Status Determination Statement (SDS)</strong>. Key tests of employment include:
        </p>
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Right of Substitution:</strong> Does your Limited Company hold the genuine contractual right to supply a qualified substitute contractor?</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Control & Supervision:</strong> Does the client control how, when, and where you perform the deliverables, or are you acting as an independent expert?</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Mutuality of Obligation (MOO):</strong> Is the client obligated to offer ongoing work, and are you obligated to accept it outside the specific scope of the statement of work?</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-purple-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Inside vs. Outside IR35 Net Pay Benchmark (£ Day Rates)
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Contract Day Rate</th>
                <th className="py-3 px-4 text-slate-700">Annual Billed (230 days)</th>
                <th className="py-3 px-4 text-rose-700">Inside IR35 Net Pay</th>
                <th className="py-3 px-4 text-emerald-700">Outside IR35 Net Pay</th>
                <th className="py-3 px-4 text-purple-700">Outside Advantage (£)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">£400 / day</td>
                <td className="py-2.5 px-4">£92,000</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">£52,400 (57.0%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">£65,800 (71.5%)</td>
                <td className="py-2.5 px-4 text-purple-700 font-bold">+£13,400 / yr</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">£550 / day</td>
                <td className="py-2.5 px-4">£126,500</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">£68,900 (54.5%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">£86,400 (68.3%)</td>
                <td className="py-2.5 px-4 text-purple-700 font-bold">+£17,500 / yr</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">£750 / day</td>
                <td className="py-2.5 px-4">£172,500</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">£90,200 (52.3%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">£114,800 (66.6%)</td>
                <td className="py-2.5 px-4 text-purple-700 font-bold">+£24,600 / yr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Allowable Business Expenses Outside IR35
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Operating outside IR35 enables Limited Companies to deduct legitimate business expenses—such as accountancy fees, professional indemnity insurance, computer equipment, home office allowances, and CPD training courses—from company revenue prior to Corporation Tax calculation.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
