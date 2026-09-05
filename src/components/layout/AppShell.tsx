'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CommandRail } from '@/components/layout/CommandRail';
import { Header } from '@/components/layout/Header';
import { CommandPalette } from '@/components/search/CommandPalette';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { clearUrlHash } from '@/lib/utils/hash-sync';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Keep URL 100% clean and canonical for SEO
    clearUrlHash();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      {/* Sticky Left Rail for Large Screens */}
      <CommandRail onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Area: Offset by Left Rail (lg:pl-56), Expansive Canvas */}
      <div className="lg:pl-56 flex min-h-screen flex-col flex-1">
        <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Spacious, Uncluttered Central Canvas */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
          {children}
        </main>

        {/* Global Daylight Footer */}
        <footer className="border-t border-slate-200 bg-white py-8 px-6 text-xs text-slate-500">
          <div className="max-w-6xl mx-auto flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link href="/" className="hover:opacity-85 transition-opacity">
                  <Image
                    src="/feekit-logo.png"
                    alt="FeeKit"
                    width={120}
                    height={44}
                    className="h-7 w-auto object-contain"
                    unoptimized
                  />
                </Link>
                <span className="text-slate-300">|</span>
                <span className="font-medium text-slate-600">Financial Calculation Utilities for US & UK Operators</span>
              </div>
              <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
                <Link href="/about" className="hover:text-sky-600 transition-colors">About</Link>
                <Link href="/privacy" className="hover:text-sky-600 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-sky-600 transition-colors">Terms of Service</Link>
                <Link href="/contact" className="hover:text-sky-600 transition-colors">Contact</Link>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">Sitemap</a>
              </nav>
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
              <div className="flex flex-wrap items-center gap-3">
                <span>© {new Date().getFullYear()} FeeKit (usefeekit.com)</span>
                <span>•</span>
                <span>Instant Client-Side Computation</span>
                <span>•</span>
                <span>IRS & HMRC 2026 Compliant</span>
                <span>•</span>
                <span>Zero Server Tracking</span>
              </div>
              <div className="text-slate-400">
                Independent utility. Rates updated weekly.
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Cmd+K Search Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* GDPR / Google AdSense Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
