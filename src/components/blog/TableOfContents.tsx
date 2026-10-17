'use client';

import React, { useState, useMemo } from 'react';
import { List, ChevronDown } from 'lucide-react';
import type { TocItem } from '@/lib/blog-types';

interface TableOfContentsProps {
  headings: TocItem[];
}

interface TocSection {
  h2: TocItem;
  subsections: TocItem[];
}

function cleanTitleForToc(title: string): string {
  // Strip redundant leading numbering like "1. ", "01. ", "#1. ", "1) ", "1: ", "1 - "
  return title.replace(/^(?:#?\d+[\.\)\-:]\s*)+/, '').trim();
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  const sections = useMemo(() => {
    if (!headings || headings.length === 0) return [];

    const result: TocSection[] = [];
    let currentSection: TocSection | null = null;

    for (const h of headings) {
      if (h.level === 2) {
        currentSection = { h2: h, subsections: [] };
        result.push(currentSection);
      } else if (h.level === 3) {
        if (currentSection) {
          currentSection.subsections.push(h);
        } else {
          // If an H3 appears before any H2, promote it as its own section
          currentSection = { h2: h, subsections: [] };
          result.push(currentSection);
        }
      }
    }
    return result;
  }, [headings]);

  if (!headings || headings.length === 0 || sections.length === 0) {
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

  // Split into 2 columns if more than 3 sections for balanced reading
  const isMultiCol = sections.length > 3;
  const midPoint = Math.ceil(sections.length / 2);
  const leftSections = isMultiCol ? sections.slice(0, midPoint) : sections;
  const rightSections = isMultiCol ? sections.slice(midPoint) : [];

  const renderSection = (sec: TocSection, globalIndex: number) => {
    const cleanMainTitle = cleanTitleForToc(sec.h2.title);

    return (
      <div key={sec.h2.id} className="space-y-1.5">
        {/* Main H2 Heading */}
        <a
          href={`#${sec.h2.id}`}
          onClick={(e) => handleLinkClick(e, sec.h2.id)}
          className="group flex items-start gap-2.5 py-1 text-slate-800 hover:text-blue-600 transition-colors"
        >
          <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-md bg-blue-50 border border-blue-200/60 text-blue-700 font-mono text-[11px] font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors mt-0.5">
            {globalIndex + 1}
          </span>
          <span className="text-xs sm:text-sm font-semibold leading-snug break-words">
            {cleanMainTitle}
          </span>
        </a>

        {/* Nested H3 Subsections */}
        {sec.subsections.length > 0 && (
          <ul className="ml-2.5 pl-3.5 border-l-2 border-slate-200/80 space-y-1.5 my-1">
            {sec.subsections.map((sub) => {
              const cleanSubTitle = cleanTitleForToc(sub.title);
              return (
                <li key={sub.id}>
                  <a
                    href={`#${sub.id}`}
                    onClick={(e) => handleLinkClick(e, sub.id)}
                    className="group flex items-start gap-2 py-0.5 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-slate-300 group-hover:text-blue-500 text-xs select-none mt-0.5 leading-none">
                      •
                    </span>
                    <span className="text-xs font-normal leading-relaxed text-slate-600 group-hover:text-blue-600 transition-colors break-words">
                      {cleanSubTitle}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  return (
    <nav
      aria-label="Table of contents"
      className="my-6 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-6 shadow-2xs not-prose"
    >
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <List className="h-4 w-4 text-blue-600" />
          <span>
            Table of Contents ({sections.length} {sections.length === 1 ? 'Section' : 'Sections'})
          </span>
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
        <div className="mt-4">
          {isMultiCol ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4">
                {leftSections.map((sec, idx) => renderSection(sec, idx))}
              </div>
              <div className="space-y-4">
                {rightSections.map((sec, idx) => renderSection(sec, midPoint + idx))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {sections.map((sec, idx) => renderSection(sec, idx))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
