import React from 'react';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { InArticleAd } from '@/components/ads/AdSlots';
import { AdBanner } from '@/components/blog/AdBanner';

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h1: ({ children, id, ...props }) => (
      <h1
        id={id}
        className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-8 mb-4 scroll-mt-24 group flex items-center gap-2"
        {...props}
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            className="text-slate-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity text-base font-normal"
            aria-label="Direct link to heading"
          >
            #
          </a>
        )}
      </h1>
    ),
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-8 mb-3 pb-2 border-b border-slate-100 scroll-mt-24 group flex items-center gap-2"
        {...props}
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            className="text-slate-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-normal"
            aria-label="Direct link to heading"
          >
            #
          </a>
        )}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="text-lg font-bold text-slate-800 tracking-tight mt-6 mb-2 scroll-mt-24 group flex items-center gap-2"
        {...props}
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            className="text-slate-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-normal"
            aria-label="Direct link to heading"
          >
            #
          </a>
        )}
      </h3>
    ),
    h4: ({ children, id, ...props }) => (
      <h4
        id={id}
        className="text-base font-semibold text-slate-800 tracking-tight mt-5 mb-2 scroll-mt-24"
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p className="text-slate-700 leading-relaxed my-4 text-[15px]" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-outside ml-5 space-y-1.5 text-slate-700 my-4 text-[15px]" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-outside ml-5 space-y-1.5 text-slate-700 my-4 text-[15px]" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-blue-500 bg-blue-50/50 rounded-r-xl px-4 py-3 text-slate-700 italic my-6 text-[15px]"
        {...props}
      >
        {children}
      </blockquote>
    ),
    table: ({ children, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
        <table className="w-full text-left text-sm text-slate-700 border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold uppercase text-xs tracking-wider" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody className="divide-y divide-slate-100 bg-white" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr className="hover:bg-slate-50/60 transition-colors" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }) => (
      <th className="px-4 py-3 font-semibold text-slate-900" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="px-4 py-3 text-slate-700" {...props}>
        {children}
      </td>
    ),
    a: ({ href = '', children, ...props }) => {
      const isInternal = href.startsWith('/') || href.startsWith('#');
      if (isInternal) {
        return (
          <Link
            href={href}
            className="text-blue-600 font-medium hover:underline hover:text-blue-700 underline-offset-2"
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline hover:text-blue-700 underline-offset-2"
          {...props}
        >
          {children}
        </a>
      );
    },
    code: ({ children, ...props }) => (
      <code
        className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-semibold text-slate-800 border border-slate-200"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="my-5 overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4 font-mono text-xs text-slate-100 leading-relaxed shadow-xs"
        {...props}
      >
        {children}
      </pre>
    ),
    hr: (props) => <hr className="my-8 border-t border-slate-200" {...props} />,
    img: ({ alt, ...props }) => (
      <span className="block my-6 overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
          width={1200}
          height={630}
          className="w-full h-auto object-cover"
          alt={alt || 'FeeKit visual guide illustration'}
          {...(props as Omit<ImageProps, 'alt'>)}
        />
      </span>
    ),
    AdBanner,
    InArticleAd,
    ...components,
  };
}
