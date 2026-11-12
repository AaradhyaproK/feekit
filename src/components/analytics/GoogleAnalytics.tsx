'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-KJRPH1YSQE';

/** localStorage key written by the cookie consent banner. */
export const CONSENT_KEY = 'feekit_cookie_consent';

/**
 * Read the stored consent state.
 *  - 'accepted'  -> full analytics & personalized advertising enabled
 *  - 'essential' -> analytics & ad storage denied via Google Consent Mode v2
 *  - null        -> regional Consent Mode v2 defaults apply
 */
export function getConsent(): 'accepted' | 'essential' | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    if (value === 'accepted') return 'accepted';
    if (value === 'essential') return 'essential';
    return null;
  } catch {
    return null;
  }
}

/**
 * Push a Google Consent Mode v2 update signal so AdSense & GA4 adapt live
 * without blocking SSR verification or starving non-EEA traffic of ads.
 */
export function applyConsentUpdate(value: 'accepted' | 'essential') {
  if (typeof window === 'undefined') return;
  const w = window as unknown as {
    dataLayer?: Array<unknown>;
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  const gtag =
    w.gtag ||
    function (...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  const state = value === 'accepted' ? 'granted' : 'denied';
  gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
}

/**
 * Google Analytics + Google Consent Mode v2 listener.
 *
 * Uses regional Consent Mode v2 defaults (strict opt-in in EEA/UK/CH,
 * standard opt-out elsewhere) and updates consent live when the visitor picks
 * "Accept All" or "Essential Only".
 */
export function GoogleAnalytics() {
  useEffect(() => {
    const syncConsent = () => {
      const current = getConsent();
      if (current === 'accepted' || current === 'essential') {
        applyConsentUpdate(current);
      }
    };

    window.addEventListener('feekit:consent-change', syncConsent);
    return () => window.removeEventListener('feekit:consent-change', syncConsent);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

/**
 * Utility function to send custom Google Analytics events
 */
export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
}
