'use client';

import React, { useState } from 'react';
import { List, ChevronDown } from 'lucide-react';
import type { TocItem } from '@/lib/blog-types';

interface TableOfContentsProps {
  headings: TocItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!headings || headings.length === 0) {
    return null;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="my-6 rounded-xl sm:rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3.5 sm:p-5 shadow-2xs not-prose"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <List className="h-4 w-4 text-blue-600" />
          <span>Table of Contents ({headings.length} Sections)</span>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Collapse' : 'Expand'}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-blue-600' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
          {headings.map(({ id, title, level }, index) => (
            <li
              key={id}
              style={{ paddingLeft: level === 3 ? '0.75rem' : '0' }}
              className="truncate"
            >
              <a
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, id)}
                className="group inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors py-0.5"
              >
                <span className="font-mono text-[11px] text-slate-400 group-hover:text-blue-500">
                  {index + 1}.
                </span>
                <span className="truncate">{title}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
