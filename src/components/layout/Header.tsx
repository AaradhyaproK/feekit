'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Share2, Check, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

export function Header({ onOpenCommandPalette }: HeaderProps) {
  const pathname = usePathname();
  const [copiedShare, setCopiedShare] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const cleanUrl = `${window.location.origin}${window.location.pathname}`;
      navigator.clipboard.writeText(cleanUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const pathParts = pathname.split('/').filter(Boolean);

  return (
    <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 sm:px-6 shadow-xs">
      {/* Mobile brand & breadcrumb */}
      <div className="flex items-center gap-3">
        <Link href="/" className="lg:hidden flex items-center py-1">
          <Image
            src="/feekit-logo.png"
            alt="FeeKit"
            width={140}
            height={52}
            className="h-8 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Hub
          </Link>
          {pathParts.length > 0 && (
            <>
              <span>/</span>
              {pathParts.map((part, index) => {
                const href = part === 'tools' ? '/' : `/${pathParts.slice(0, index + 1).join('/')}`;
                const isLast = index === pathParts.length - 1;
                const formatted = part === 'tools' ? 'All Tools' : part.replace(/-/g, ' ');
                return (
                  <React.Fragment key={`${href}-${index}`}>
                    {isLast ? (
                      <span className="font-semibold text-slate-900 capitalize truncate max-w-[220px]">
                        {formatted}
                      </span>
                    ) : (
                      <>
                        <Link href={href} className="hover:text-blue-600 capitalize transition-colors">
                          {formatted}
                        </Link>
                        <span>/</span>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </>
          )}
        </nav>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2.5">
        {/* Quick Search */}
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="tap-spring flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-blue-400 hover:bg-white hover:text-slate-900 transition-all shadow-xs"
        >
          <Search className="h-3.5 w-3.5 text-blue-600" />
          <span className="hidden md:inline">Quick Search</span>
          <kbd className="hidden sm:inline rounded bg-white px-1.5 py-0.2 font-mono text-[10px] text-slate-500 border border-slate-200">
            ⌘K
          </kbd>
        </button>

        {/* Share Snapshot */}
        <button
          type="button"
          onClick={handleShare}
          className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs"
          title="Share exact calculation parameters via URL"
        >
          {copiedShare ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-bold">Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="h-3.5 w-3.5 text-blue-600" />
              <span>Share</span>
            </>
          )}
        </button>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="tap-spring lg:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer with Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-14 bg-slate-900/30 backdrop-blur-xs z-25 lg:hidden animate-fade-slide"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-14 left-0 right-0 z-30 border-b border-slate-200 bg-white p-4 lg:hidden shadow-xl animate-fade-slide">
            <div className="space-y-1.5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="tap-spring block rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                All Utilities Hub
              </Link>
              <Link
                href="/tools/sales-tax-calculator/california"
                onClick={() => setMobileMenuOpen(false)}
                className="tap-spring block rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                US Sales Tax (50 States)
              </Link>
              <Link
                href="/tools/vat-calculator/united-kingdom"
                onClick={() => setMobileMenuOpen(false)}
                className="tap-spring block rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                UK VAT & HMRC Returns
              </Link>
              <Link
                href="/tools/stripe-fee-calculator/usa"
                onClick={() => setMobileMenuOpen(false)}
                className="tap-spring block rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                US Stripe Merchant Fees
              </Link>
              <Link
                href="/tools/stripe-fee-calculator/uk"
                onClick={() => setMobileMenuOpen(false)}
                className="tap-spring block rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                UK Stripe Card Fees (1.5% + 20p)
              </Link>
              <Link
                href="/tools/freelance-rate-calculator/software-engineer"
                onClick={() => setMobileMenuOpen(false)}
                className="tap-spring block rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Freelance & 1099 Rates
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
