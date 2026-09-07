'use client';

import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items?: FaqItem[];
  faqs?: FaqItem[];
  title?: string;
  className?: string;
  embedded?: boolean;
}

export function FaqAccordion({
  items,
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
  embedded = false,
}: FaqAccordionProps) {
  const list = items || faqs || [];
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({ 0: true });

  const handleToggle = (index: number, e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const isOpen = e.currentTarget.open;
    setOpenStates((prev) => ({
      ...prev,
      [index]: isOpen,
    }));
  };

  if (!list || list.length === 0) return null;

  return (
    <section
      aria-label="Frequently asked questions"
      className={embedded 
        ? `pt-8 sm:pt-10 border-t border-slate-200/80 space-y-5 ${className}`.trim()
        : `rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs ${className}`.trim()}
    >
      {title && (
        <div className="border-b border-slate-200 pb-4 mb-5">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Authoritative answers to common questions, regulatory rules, and compliance guidance.
          </p>
        </div>
      )}

      <div className="space-y-3">
        {list.map((item, index) => {
          const isOpen = openStates[index] ?? (index === 0);
          return (
            <details
              key={index}
              open={isOpen}
              onToggle={(e) => handleToggle(index, e)}
              className="group rounded-xl border border-slate-200/90 bg-slate-50/40 transition-colors duration-200 hover:border-slate-300 open:border-blue-200 open:bg-blue-50/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 sm:p-5 font-semibold text-slate-900 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl select-none [&::-webkit-details-marker]:hidden">
                <span className="text-sm sm:text-base font-semibold text-slate-900 pr-4 leading-snug">
                  {item.question}
                </span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-base font-bold group-open:bg-blue-100 group-open:text-blue-700 select-none transition-colors duration-200"
                  aria-hidden="true"
                >
                  <span className="group-open:hidden leading-none">+</span>
                  <span className="hidden group-open:inline leading-none">−</span>
                </span>
              </summary>
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                {item.answer}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

export default FaqAccordion;
