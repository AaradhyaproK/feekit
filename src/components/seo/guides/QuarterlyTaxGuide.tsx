import React from 'react';
import {
  BookOpen,
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface QuarterlyTaxGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function QuarterlyTaxGuide({ sectionClass, inArticleSlot }: QuarterlyTaxGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>IRS Form 1040-ES & Self-Employment Compliance</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          IRS Form 1040-ES Quarterly Estimated Tax Guide ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Statutory payment deadlines, 15.3% SECA self-employment tax calculations, safe harbor underpayment rules (IRC § 6654), and online payment methods.
        </p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
          <span>The Immediate Answer: 2026 Deadlines & Payment Rules</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          The IRS requires self-employed 1099 contractors, freelancers, and LLC owners to make four quarterly estimated tax payments if expected annual federal tax liability exceeds $1,000. Statutory payment deadlines are: <strong>Q1 due April 15, Q2 due June 15, Q3 due September 15, and Q4 due January 15</strong>. Net self-employment earnings are subject to <strong>15.3% SECA tax</strong> (12.4% Social Security on income up to the statutory wage cap + 2.9% uncapped Medicare).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The IRC § 6654 Safe Harbor: Avoiding IRS Underpayment Penalties
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Under Internal Revenue Code Section 6654, you will completely avoid IRS underpayment interest penalties if your total timely quarterly prepayments meet either of the following statutory safe harbors:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>90% of Current Year Tax:</strong> Pay at least 90% of your actual total tax liability owed for the current calendar tax year.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
            <span><strong>100% of Prior Year Tax:</strong> Prepay 100% of the total tax shown on your prior year Form 1040 (increased to <strong>110%</strong> if your prior year Adjusted Gross Income exceeded $150,000 for married filing jointly or $75,000 for single filers).</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-blue-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Estimated Tax Vouchers by Net Freelance Profit
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Annual Net Profit</th>
                <th className="py-3 px-4 text-slate-700">15.3% SECA Tax</th>
                <th className="py-3 px-4 text-slate-700">Est. Federal Income Tax</th>
                <th className="py-3 px-4 text-rose-700">Total Annual Tax</th>
                <th className="py-3 px-4 text-emerald-700">Each Quarterly Voucher (÷ 4)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$50,000</td>
                <td className="py-2.5 px-4">$7,065</td>
                <td className="py-2.5 px-4">$3,520</td>
                <td className="py-2.5 px-4 text-rose-600 font-bold">$10,585</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$2,646 / quarter</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$100,000</td>
                <td className="py-2.5 px-4">$14,130</td>
                <td className="py-2.5 px-4">$11,850</td>
                <td className="py-2.5 px-4 text-rose-600 font-bold">$25,980</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$6,495 / quarter</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$150,000</td>
                <td className="py-2.5 px-4">$21,194</td>
                <td className="py-2.5 px-4">$21,480</td>
                <td className="py-2.5 px-4 text-rose-600 font-bold">$42,674</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$10,668 / quarter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            How to Pay Online with Zero Fees
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Do not mail paper checks. Pay electronically for free via <strong>IRS Direct Pay</strong> (direct bank checking account debit) at <code>irs.gov/directpay</code> or enroll in <strong>EFTPS (Electronic Federal Tax Payment System)</strong>. Select &quot;Estimated Tax (1040-ES)&quot; and choose the current tax year.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
