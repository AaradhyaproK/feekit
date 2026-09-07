import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Sparkles } from 'lucide-react';
import type { RelatedCalculator } from '@/lib/blog';

interface RelatedCalculatorsProps {
  calculators: RelatedCalculator[];
}

export function RelatedCalculators({ calculators }: RelatedCalculatorsProps) {
  if (!calculators || calculators.length === 0) {
    return null;
  }

  return (
    <div className="my-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 p-6 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Interactive Calculation Suites</span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2">
        Test These Numbers With Your Exact Transaction Data
      </h3>

      <p className="text-xs sm:text-sm text-slate-600 mb-5">
        Don&apos;t guess your margins. Use FeeKit&apos;s free, client-side financial precision tools
        to model your exact gross revenue, deductions, and tax compliance:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {calculators.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="tap-spring group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3.5 hover:border-blue-400 hover:shadow-xs transition-all"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Calculator className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                {calc.label}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
