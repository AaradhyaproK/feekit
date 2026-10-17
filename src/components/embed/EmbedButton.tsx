'use client';

import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { EmbedCalculatorModal } from './EmbedCalculatorModal';

interface EmbedButtonProps {
  category: string;
  slug: string;
  title: string;
}

export function EmbedButton({ category, slug, title }: EmbedButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors shadow-2xs group"
        title="Embed this interactive calculator on your website or blog"
      >
        <Code2 className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
        <span>Embed Widget</span>
      </button>

      <EmbedCalculatorModal
        category={category}
        slug={slug}
        title={title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
