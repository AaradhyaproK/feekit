'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils/formatters';

interface FAQ {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FAQ[];
  title?: string;
}

export function FaqAccordion({ faqs, title = 'Frequently Asked Questions' }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 text-blue-600 mb-5">
        <HelpCircle className="h-5 w-5" />
        <h3 className="text-base font-bold text-slate-900 tracking-tight">{title}</h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className="rounded-lg border border-slate-200/80 bg-slate-50/50 transition-colors hover:border-slate-300"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-slate-800 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200',
                    isOpen && 'rotate-180 text-blue-600'
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
