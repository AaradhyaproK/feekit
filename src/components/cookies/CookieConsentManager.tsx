'use client';

import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, RefreshCw } from 'lucide-react';

export function CookieConsentManager() {
  const [currentConsent, setCurrentConsent] = useState<string>('loading');
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('feekit_cookie_consent') || 'not_set';
    setCurrentConsent(consent);
  }, []);

  const updateConsent = (type: 'accepted' | 'essential') => {
    localStorage.setItem('feekit_cookie_consent', type);
    setCurrentConsent(type);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2500);
  };

  const resetConsent = () => {
    localStorage.removeItem('feekit_cookie_consent');
    setCurrentConsent('not_set');
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2500);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-4 sm:p-5 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-slate-900">Current Consent Status:</div>
          <div className="text-xs font-mono">
            {currentConsent === 'loading' ? (
              <span className="text-slate-400">Loading...</span>
            ) : currentConsent === 'accepted' ? (
              <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded-md">
                All Cookies Accepted (Essential + Advertising)
              </span>
            ) : currentConsent === 'essential' ? (
              <span className="text-amber-700 font-bold bg-amber-100/80 px-2 py-0.5 rounded-md">
                Essential Only (Advertising Cookies Disabled)
              </span>
            ) : (
              <span className="text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded-md">
                Default (Awaiting explicit choice)
              </span>
            )}
          </div>
        </div>

        {justSaved && (
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
            <Check className="h-3.5 w-3.5" />
            <span>Preferences saved!</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200/80">
        <button
          type="button"
          onClick={() => updateConsent('accepted')}
          className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors shadow-2xs"
        >
          Accept All Cookies
        </button>
        <button
          type="button"
          onClick={() => updateConsent('essential')}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={resetConsent}
          className="rounded-lg border border-slate-200 bg-transparent px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors inline-flex items-center gap-1.5"
        >
          <RefreshCw className="h-3 w-3" />
          <span>Reset Prompt</span>
        </button>
      </div>
    </div>
  );
}
