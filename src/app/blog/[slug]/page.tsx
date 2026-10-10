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
import { AdBanner } from '@/components/blog/AdBanner';
import { NewsletterSignup } from '@/components/shared/NewsletterSignup';
import { ArrowLeft, Tag, HelpCircle, ShieldCheck } from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

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
      title: `${post.title} — FeeKit`,
      description: post.description,
      keywords: post.tags,
      category: post.category,
      authors: [{ name: post.author, url: 'https://www.usefeekit.com/about' }],
      creator: post.author,
      publisher: 'FeeKit',
      alternates: {
        canonical: url,
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url,
        siteName: 'FeeKit',
        locale: 'en_US',
        type: 'article',
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt || post.publishedAt,
        authors: [post.author],
        section: post.category,
        tags: post.tags,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            type: 'image/webp',
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [imageUrl],
        creator: '@usefeekit',
        site: '@usefeekit',
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

      <div className="w-full space-y-6 pb-16">
        {/* Top Navigation & Fast Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
          <BackButton fallbackHref="/blog" label="Back to previous page" />
          <div className="w-full sm:w-72 md:w-80">
            <FastSearchBar placeholder="Search tools..." />
          </div>
        </div>

        {/* Unified Single Continuous Article Canvas: Edge-to-Edge on Mobile, Contained on Desktop */}
        <article className="w-full rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-3.5 py-6 sm:p-10 lg:p-12 shadow-xs space-y-6">
          {/* Article Header & Metadata */}
          <header className="space-y-4">
            {/* Breadcrumb Navigation for Google SEO & UX */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto pb-1">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700 font-medium">{post.category}</span>
            </nav>

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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
              {post.description}
            </p>

            {/* Author Meta Line (Clean inline, zero nested box) */}
            <AuthorBio post={post} />
          </header>

          {/* Integrated Table of Contents */}
          <TableOfContents headings={headings} />

          {/* Continuous MDX Body */}
          <div className="prose prose-slate max-w-none pt-2">
            <MDXContent />

            {/* Frontmatter FAQ Section if available */}
            {post.faq && post.faq.length > 0 && (
              <section className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <HelpCircle className="h-4 w-4" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  Common Inquiries & Regulations
                </h2>
                <div className="space-y-4 not-prose">
                  {post.faq.map((faqItem, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-2xs"
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

          {/* Slot 3: AdSense slot above related calculators */}
          <AdBanner />

          {/* Related Calculators CTA Box */}
          <RelatedCalculators calculators={post.relatedCalculators} />
        </article>

        {/* Weekly Fee Rate & Tax Updates Newsletter Section */}
        <div className="px-3.5 sm:px-0">
          <NewsletterSignup source={`Blog: ${post.title}`} />
        </div>

        {/* Bottom Section: Related Articles (3 from same category or latest) */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-slate-200 space-y-6 px-3.5 sm:px-0">
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
      </div>
    </>
  );
}
