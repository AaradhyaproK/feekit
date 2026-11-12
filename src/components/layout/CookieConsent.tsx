'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import { CONSENT_KEY, applyConsentUpdate } from '@/components/analytics/GoogleAnalytics';

/**
 * Persist the visitor's choice, push a Google Consent Mode v2 update, and
 * notify listeners.
 */
function persistConsent(value: 'accepted' | 'essential') {
  window.localStorage.setItem(CONSENT_KEY, value);
  applyConsentUpdate(value);
  window.dispatchEvent(new Event('feekit:consent-change'));
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Delay slightly for smooth non-intrusive appearance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    persistConsent('accepted');
    setIsVisible(false);
  };

  const handleEssential = () => {
    persistConsent('essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-slide"
    >
      <div className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-5 shadow-xl text-slate-800 space-y-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <div className="rounded-lg bg-sky-50 p-1.5 text-sky-600 border border-sky-100">
              <Cookie className="h-4 w-4" />
            </div>
            <span>Cookie & Privacy Choice</span>
          </div>
          <button
            onClick={handleEssential}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          FeeKit uses essential storage to save your privacy choice, plus Google Consent Mode v2 for
          Google Analytics and AdSense. Choose <strong>Accept All</strong> for full analytics and
          relevant ads, or <strong>Essential Only</strong> for non-personalized ads without
          advertising cookies. Your calculation figures remain <strong>100% private</strong> in
          your browser.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
            <Link
              href="/privacy"
              className="hover:text-sky-600 underline transition-colors"
            >
              Privacy
            </Link>
            <span>•</span>
            <Link
              href="/cookies"
              className="hover:text-sky-600 underline transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEssential}
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-sky-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-sky-700 shadow-xs transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
