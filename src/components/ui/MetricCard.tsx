'use client';

import React from 'react';
import { cn } from '@/lib/utils/formatters';

interface MetricCardProps {
  label: string;
  value: string;
  subtext?: string;
  badge?: string;
  accent?: 'cyan' | 'blue' | 'emerald' | 'amber' | 'purple' | 'rose';
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({
  label,
  value,
  subtext,
  badge,
  accent = 'blue',
  icon,
  className,
}: MetricCardProps) {
  const accentClasses = {
    blue: 'border-blue-200 text-blue-700 bg-blue-50',
    cyan: 'border-sky-200 text-sky-700 bg-sky-50',
    emerald: 'border-emerald-200 text-emerald-700 bg-emerald-50',
    amber: 'border-amber-200 text-amber-800 bg-amber-50',
    purple: 'border-purple-200 text-purple-700 bg-purple-50',
    rose: 'border-rose-200 text-rose-700 bg-rose-50',
  };

  return (
    <div
      className={cn(
        'relative rounded-xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-sm flex flex-col justify-between overflow-hidden',
        className
      )}
    >
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-1.5 sm:gap-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 leading-tight line-clamp-2 sm:line-clamp-none">
            {label}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {badge && (
              <span
                className={cn(
                  'rounded-md border px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide',
                  accentClasses[accent]
                )}
              >
                {badge}
              </span>
            )}
            {icon && <span className="text-slate-400">{icon}</span>}
          </div>
        </div>

        <div className="mt-2 sm:mt-3 flex items-baseline gap-1 min-w-0">
          <span className="text-lg sm:text-2xl lg:text-[1.7rem] font-extrabold tracking-tight text-slate-900 font-mono leading-none truncate block w-full" title={value}>
            {value}
          </span>
        </div>
      </div>

      {subtext && (
        <p className="mt-2 sm:mt-2.5 text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-1.5 sm:pt-2 line-clamp-2 sm:line-clamp-none">
          {subtext}
        </p>
      )}
    </div>
  );
}
