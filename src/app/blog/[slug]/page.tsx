import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  extractHeadings,
  type BlogPost,
} from '@/lib/blog';
import { ReadingProgressBar } from '@/components/blog/ReadingProgressBar';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { RelatedCalculators } from '@/components/blog/RelatedCalculators';
import { BlogJsonLd } from '@/components/blog/BlogJsonLd';
import { BlogCard } from '@/components/blog/BlogCard';
import { InArticleAd } from '@/components/ads/AdSlots';
import { ArrowLeft, Tag, HelpCircle, ShieldCheck } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    const url = `https://www.usefeekit.com/blog/${slug}`;
    const imageUrl = post.featuredImage.startsWith('http')
      ? post.featuredImage
      : `https://www.usefeekit.com${post.featuredImage}`;

    return {
      title: `${post.title} — FeeKit Blog`,
      description: post.description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url,
        type: 'article',
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt || post.publishedAt,
        authors: ['FeeKit Research Team'],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [imageUrl],
      },
    };
  } catch {
    return {
      title: 'Article Not Found — FeeKit Blog',
    };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let postWithContent;
  try {
    postWithContent = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { content, ...post } = postWithContent;
  const headings = extractHeadings(content);

  // Fetch up to 3 related posts from same category, fallback to latest posts
  const categoryPosts = getPostsByCategory(post.category).filter((p) => p.slug !== post.slug);
  let relatedPosts: BlogPost[] = categoryPosts.slice(0, 3);
  if (relatedPosts.length < 3) {
    const fallbackPosts = getAllPosts()
      .filter((p) => p.slug !== post.slug && !relatedPosts.some((r) => r.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...fallbackPosts];
  }

  // Dynamic import of the MDX file compiled via @next/mdx
  let MDXContent: React.ComponentType<{
    components?: Record<string, React.ComponentType<Record<string, unknown>>>;
  }>;

  try {
    const mdxModule = await import(`@content/blog/${slug}.mdx`);
    MDXContent = mdxModule.default;
  } catch {
    notFound();
  }

  return (
    <>
      {/* 1. Full JSON-LD Structured Data: Article, Breadcrumb, and optional FAQ */}
      <BlogJsonLd post={post} />

      {/* 2. Top Viewport Reading Progress Bar */}
      <ReadingProgressBar />

      <article className="w-full space-y-6 pb-16">
        {/* Back to Blog Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Guides</span>
          </Link>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>E-E-A-T Verified Analysis</span>
          </div>
        </div>

        {/* Main Article Header */}
        <header className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
              {post.category}
            </span>
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
              >
                <Tag className="h-3 w-3 text-slate-400" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">{post.description}</p>

          {/* Author Bio Box (FeeKit Verified Desk) */}
          <AuthorBio post={post} />
        </header>

        {/* Clean In-Content Table of Contents (Single layout, No side duplication) */}
        <TableOfContents headings={headings} />

        {/* Article MDX Body */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs prose prose-slate max-w-none">
          <MDXContent />

          {/* Frontmatter FAQ Section if available */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-blue-700">
                <HelpCircle className="h-4 w-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Common Inquiries & Regulations
              </h2>
              <div className="space-y-4 not-prose">
                {post.faq.map((faqItem, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-2xs"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      {faqItem.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faqItem.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Slot 3: AdSense slot above footer / related calculators */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1 text-center">
            Advertisement
          </div>
          <InArticleAd className="w-full" />
        </div>

        {/* Related Calculators CTA Box */}
        <RelatedCalculators calculators={post.relatedCalculators} />

        {/* Bottom Section: Related Articles (3 from same category or latest) */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                  Keep Reading
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Related Guides & Benchmarks
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <BlogCard key={relPost.slug} post={relPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
