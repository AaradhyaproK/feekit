'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, Calculator } from 'lucide-react';
import type { ToolIndexEntry } from '@/lib/tools-index';

export interface FastSearchBarProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  /** Number of tools in the catalogue, used for the "N+" label. */
  toolCount?: number;
}

/**
 * The full tool index (197 entries) is loaded lazily, on first interaction.
 *
 * It used to be a static import in the global AppShell, which meant every
 * one of the 268 pages shipped it in the initial JavaScript bundle even
 * though the vast majority of visitors never opened the search box.
 */
export function FastSearchBar({
  placeholder = 'Search tools...',
  className = '',
  autoFocus = false,
  toolCount,
}: FastSearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [matrixList, setMatrixList] = useState<ToolIndexEntry[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const loadedRef = useRef(false);

  // Load the index on first focus (or on first open).
  const ensureLoaded = React.useCallback(async () => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    try {
      const mod = await import('@/data/tools-index.json');
      setMatrixList(mod.default as unknown as ToolIndexEntry[]);
    } catch {
      loadedRef.current = false;
    }
  }, []);

  // Support the Google sitelinks searchbox: /?q=<term> pre-fills the search
  // box with the term. The query string is read from `window` rather than
  // `useSearchParams()` because the latter forces a client-side rendering
  // bailout that requires a Suspense boundary on every page that renders a
  // search bar.
  //
  // The dropdown itself is not force-opened here: the global CommandPalette
  // is opened by the AppShell for the same query, and two search UIs open at
  // once would fight each other for the visitor's attention.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) {
      setQuery(q);
      ensureLoaded();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) {
      return matrixList.slice(0, 8);
    }
    const q = query.toLowerCase().trim();
    return matrixList
      .filter((item) => {
        const title = (item.title || '').toLowerCase();
        const shortTitle = (item.shortTitle || '').toLowerCase();
        const category = (item.category || '').toLowerCase();
        const slug = (item.slug || '').toLowerCase();
        const subtitle = (item.subtitle || '').toLowerCase();
        // `keywords` carries the extra search tokens (state name,
        // jurisdiction code) that are not part of any displayed field.
        const keywords = item.keywords || '';
        return (
          title.includes(q) ||
          shortTitle.includes(q) ||
          category.includes(q) ||
          slug.includes(q) ||
          subtitle.includes(q) ||
          keywords.includes(q)
        );
      })
      .slice(0, 10);
  }, [query, matrixList]);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset selectedIndex when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleSelect = (item: ToolIndexEntry) => {
    setIsOpen(false);
    setQuery('');
    inputRef.current?.blur();
    router.push(item.href || `/tools/${item.category}/${item.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setIsOpen(true);
      ensureLoaded();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (results.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % (results.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`.trim()}>
      <div className="relative flex items-center rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
        <Search className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-blue-600 shrink-0 select-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          autoFocus={autoFocus}
          autoComplete="off"
          spellCheck="false"
          placeholder={placeholder}
          onFocus={() => {
            setIsOpen(true);
            ensureLoaded();
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            ensureLoaded();
          }}
          onKeyDown={handleKeyDown}
          className="w-full rounded-xl bg-transparent py-2.5 sm:py-2 pl-9 pr-14 text-base sm:text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />

        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            aria-label="Clear search query"
            className="absolute right-2.5 rounded p-1 sm:p-0.5 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
          </button>
        ) : (
          <kbd className="pointer-events-none absolute right-2.5 hidden sm:inline-flex items-center rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-400 border border-slate-200 select-none">
            ⌘K
          </kbd>
        )}
      </div>

      {/* Instant Fast Search Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 max-h-72 sm:max-h-80 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl py-1 divide-y divide-slate-100 animate-fade-in overscroll-contain">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-center text-xs text-slate-500">
              {matrixList.length === 0
                ? 'Loading calculators...'
                : `No calculators found for "${query}"`}
            </div>
          ) : (
            <div className="p-1">
              <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {query.trim() ? `Calculators matching "${query}"` : 'Popular Calculators'}
              </div>
              {results.map((item, index) => {
                const isSelected = index === selectedIndex;
                const categoryLabel = (item.category || '').replace(/-/g, ' ');
                const href = item.href || `/tools/${item.category}/${item.slug}`;
                return (
                  /* A real <a> element, not a <button>. Buttons carry no href,
                     so every search result was invisible to a crawler. */
                  <Link
                    key={`${item.category}-${item.slug}`}
                    href={href}
                    prefetch={false}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery('');
                    }}
                    className={`tap-spring w-full flex items-center justify-between rounded-lg px-3 py-2.5 sm:py-2 text-left transition-all ${
                      isSelected
                        ? 'bg-blue-50 text-blue-900 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-md border text-xs shrink-0 ${
                          isSelected
                            ? 'border-blue-300 bg-blue-100 text-blue-700'
                            : 'border-slate-200 bg-slate-100 text-slate-500'
                        }`}
                      >
                        <Calculator className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-xs font-bold text-slate-900">
                          {item.shortTitle || item.title}
                        </div>
                        <div className="truncate text-[10px] text-slate-400 capitalize">
                          {categoryLabel} {item.rate ? `• ${item.rate}%` : ''}
                        </div>
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                        isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-300'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FastSearchBar;
