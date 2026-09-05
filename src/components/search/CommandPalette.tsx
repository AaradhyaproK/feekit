'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Calculator, ArrowRight, X } from 'lucide-react';
import geoMatrix from '@/data/geo-matrix.json';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const btn = document.getElementById('command-palette-trigger');
          btn?.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = React.useMemo(() => {
    if (!query.trim()) {
      return (geoMatrix as Array<any>).slice(0, 10);
    }
    const q = query.toLowerCase();
    return (geoMatrix as Array<any>)
      .filter((item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [query]);

  const handleSelect = (item: any) => {
    onClose();
    router.push(`/tools/${item.category}/${item.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="relative flex items-center border-b border-slate-200 px-4 py-3.5 bg-white">
          <Search className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search 162 tools (e.g. California, UK VAT, Stripe USA, 1099 Contractor)..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500">
              No matching financial utilities found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={`${item.category}-${item.slug}`}
                  type="button"
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left transition-all ${
                    isSelected
                      ? 'bg-blue-50 border border-blue-200 text-slate-900'
                      : 'border border-transparent text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-4">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                        isSelected
                          ? 'border-blue-300 bg-blue-100 text-blue-700'
                          : 'border-slate-200 bg-slate-50 text-slate-500'
                      }`}
                    >
                      <Calculator className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 truncate">
                          {item.title}
                        </span>
                        <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">
                          {item.category.replace('-calculator', '')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isSelected ? 'translate-x-1 text-blue-600' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>Use <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-slate-600 border border-slate-200">↑</kbd> <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-slate-600 border border-slate-200">↓</kbd> to navigate</span>
            <span><kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-slate-600 border border-slate-200">Enter</kbd> to open</span>
          </div>
          <span className="text-blue-600 font-bold">{geoMatrix.length} Calculators Available</span>
        </div>
      </div>
    </div>
  );
}
