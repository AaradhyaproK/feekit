'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CommandRail } from '@/components/layout/CommandRail';
import { Header } from '@/components/layout/Header';
import { CommandPalette } from '@/components/search/CommandPalette';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { clearUrlHash } from '@/lib/utils/hash-sync';
import { NavigationProgressBar } from '@/components/layout/NavigationProgressBar';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Keep URL 100% clean and canonical for SEO
    clearUrlHash();
  }, []);

  /**
   * Google sitelinks searchbox support.
   *
   * The SearchAction in the JSON-LD points at `/?q={search_term_string}`,
   * so a visitor arriving from a Google search result lands on the homepage
   * with the search term in the query string. The palette is opened with that
   * term pre-filled so the result is one keystroke away.
   *
   * The query string is read from `window` rather than `useSearchParams()`
   * because the latter forces a client-side rendering bailout that requires a
   * Suspense boundary around every page.
   */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) {
      setSearchQuery(q);
      setCommandPaletteOpen(true);
    }
  }, []);

  // For iframe embeds, render distraction-free widget canvas without sidebar/header/footer
  if (pathname?.startsWith('/embed')) {
    return <main className="min-h-screen bg-transparent">{children}</main>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <React.Suspense fallback={null}>
        <NavigationProgressBar />
      </React.Suspense>
      {/* Sticky Left Rail for Large Screens */}
      <CommandRail onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Area: Offset by Left Rail (lg:pl-56), Expansive Canvas */}
      <div className="lg:pl-56 flex min-h-screen flex-col flex-1">
        <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Spacious Central Canvas (Full Bleed on Mobile and Homepage) */}
        <main
          className={
            isHomePage
              ? 'flex-1 w-full flex flex-col'
              : 'flex-1 w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-3 sm:py-7'
          }
        >
          {children}
        </main>

        {/* Global Accessible & High-Conversion Footer */}
        <Footer onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      </div>

      {/* Global Cmd+K Search Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        initialQuery={searchQuery}
        onClose={() => {
          setCommandPaletteOpen(false);
          setSearchQuery('');
        }}
      />

      {/* GDPR / Google AdSense Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
