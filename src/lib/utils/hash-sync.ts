'use client';

/**
 * URL Hash & Sharing Utility
 * Ensures URLs remain 100% clean and canonical for SEO (no ugly #data= auto-pollution).
 */

export function encodeShareUrl(data?: Record<string, unknown>): string {
  if (typeof window === 'undefined') return '';
  // Clean canonical URL without any hash fragments for 100% SEO friendliness
  return `${window.location.origin}${window.location.pathname}`;
}

export function decodeHashData<T = Record<string, unknown>>(): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const hash = window.location.hash;
    if (!hash.startsWith('#data=')) return null;
    const b64 = hash.replace('#data=', '');
    const json = decodeURIComponent(window.atob(b64));
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}

export function clearUrlHash(): void {
  if (typeof window === 'undefined') return;
  if (window.location.hash && window.history && window.history.replaceState) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }
}

/**
 * No-op: Prevents auto-polluting address bar with #data= hashes.
 * Ensures URLs remain 100% clean and canonical.
 */
export function updateUrlHash(_data: Record<string, unknown>): void {
  // Intentionally no-op to protect clean SEO URLs
}
