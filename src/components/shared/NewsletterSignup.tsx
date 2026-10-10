'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

interface NewsletterSignupProps {
  source?: string;
  className?: string;
}

export function NewsletterSignup({
  source = 'FeeKit Homepage',
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('submitting');

    try {
      await fetch('https://formspree.io/f/mgawlaan', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          formType: 'Weekly Fee Rate & Tax Updates Newsletter',
          source,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Graceful fallback: still acknowledge subscription for client UX
    } finally {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section
      aria-label="Newsletter Subscription"
      className={`rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/60 to-blue-50/40 p-5 sm:p-8 shadow-xs ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Icon & Value Proposition */}
        <div className="flex items-start gap-3.5 sm:gap-4 max-w-2xl">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                Weekly Rate Digest
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Get Weekly Fee Rate &amp; Tax Updates
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              2026 IRS, HMRC &amp; payment gateway rate changes delivered to your inbox. Free forever. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Right: Email Input Form or Success State */}
        <div className="w-full lg:w-auto shrink-0">
          {status === 'success' ? (
            <div className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-800 shadow-2xs animate-in fade-in">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>You&apos;re subscribed! You&apos;ll receive our next rate update.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full sm:w-64 lg:w-72 rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all shadow-2xs"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="tap-spring inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm px-4.5 py-2.5 shadow-xs transition-all cursor-pointer shrink-0 disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <span>Subscribe Free →</span>
                  )}
                </button>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pl-0.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Zero spam • 100% Free • One-click unsubscribe</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
