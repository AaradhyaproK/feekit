'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export interface BackButtonProps {
  fallbackHref?: string;
  label?: string;
  className?: string;
}

/**
 * "Back" control that renders a real, crawlable <a> element.
 *
 * The previous implementation rendered a <button> with a `router.back()`
 * handler. Buttons carry no href, so every internal link on the site that
 * relied on this component was invisible to crawlers - the tool pages had no
 * path back to their category hub at all.
 *
 * The href still points at the fallback destination so the control always
 * resolves to a real URL, while the click handler keeps the "go back"
 * behaviour for visitors who arrived from another page.
 */
export function BackButton({
  fallbackHref = '/',
  label = 'Back to previous page',
  className = '',
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let modified clicks (new tab, download) behave like normal links.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <Link
      href={fallbackHref}
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer ${className}`.trim()}
    >
      <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
      <span>{label}</span>
    </Link>
  );
}

export default BackButton;
