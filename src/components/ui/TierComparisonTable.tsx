import React from 'react';
import { formatCurrency } from '@/lib/utils/formatters';

export interface TierRow {
  tierAmount: number;
  tierLabel?: string;
  deductionOrTax: number;
  netOrTotal: number;
  effectiveRateStr?: string;
}

interface TierComparisonTableProps {
  title?: string;
  currencySymbol?: string;
  amountHeader?: string;
  feeHeader?: string;
  payoutHeader?: string;
  rows: TierRow[];
}

export function TierComparisonTable({
  title = 'Standard Transaction Volume Tiers',
  currencySymbol = '$',
  amountHeader = 'Gross Volume',
  feeHeader = 'Estimated Fee / Tax',
  payoutHeader = 'Net Payout / Total',
  rows,
}: TierComparisonTableProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
      <div className="border-b border-slate-200 px-5 py-4 flex items-center justify-between bg-slate-50/50">
        <div>
          <h4 className="text-sm font-bold text-slate-900 tracking-tight">{title}</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare expected deductions across typical commercial ticket sizes
          </p>
        </div>
        <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md font-bold">
          Live Matrix
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600 border-b border-slate-200">
            <tr>
              <th scope="col" className="py-3 px-5">{amountHeader}</th>
              <th scope="col" className="py-3 px-5">{feeHeader}</th>
              <th scope="col" className="py-3 px-5">{payoutHeader}</th>
              <th scope="col" className="py-3 px-5 text-right">Effective Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono text-xs sm:text-sm">
            {rows.map((row, idx) => {
              const rate = row.effectiveRateStr || `${((row.deductionOrTax / (row.tierAmount || 1)) * 100).toFixed(2)}%`;
              return (
                <tr
                  key={idx}
                  className="transition-colors hover:bg-slate-50/80"
                >
                  <td className="py-3.5 px-5 font-semibold text-slate-800">
                    {row.tierLabel || formatCurrency(row.tierAmount, currencySymbol)}
                  </td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">
                    -{formatCurrency(row.deductionOrTax, currencySymbol)}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600">
                    {formatCurrency(row.netOrTotal, currencySymbol)}
                  </td>
                  <td className="py-3.5 px-5 text-right font-medium text-slate-600">
                    {rate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
