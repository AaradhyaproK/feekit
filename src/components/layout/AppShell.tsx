'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CommandRail } from '@/components/layout/CommandRail';
import { Header } from '@/components/layout/Header';
import { CommandPalette } from '@/components/search/CommandPalette';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { clearUrlHash } from '@/lib/utils/hash-sync';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
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
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* GDPR / Google AdSense Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
