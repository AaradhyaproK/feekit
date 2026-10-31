import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

// Helper to extract 5-word shingles
function get5WordShingles(text) {
  // Normalize: lower case, strip numbers and punctuation
  const clean = text
    .toLowerCase()
    .replace(/[0-9]+(\.[0-9]+)?/g, 'NUM')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = clean.split(/\s+/).filter(Boolean);
  const shingles = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    shingles.add(words.slice(i, i + 5).join(' '));
  }
  return shingles;
}

function calculateJaccard(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersectionSize = 0;
  for (const shingle of setA) {
    if (setB.has(shingle)) {
      intersectionSize++;
    }
  }
  const unionSize = setA.size + setB.size - intersectionSize;
  return unionSize > 0 ? intersectionSize / unionSize : 0;
}

function countWords(text) {
  if (!text) return 0;
  return text
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

// Function to collect all page content
async function collectPages(pilotOnly = false, pilotSlugs = []) {
  const contentDir = path.join(ROOT_DIR, 'content');
  const families = ['sales-tax', 'freelance', 'gateways', 'vat', 'ecommerce', 'wise', 'tools'];
  const pages = [];

  for (const fam of families) {
    const famDir = path.join(contentDir, fam);
    if (!fs.existsSync(famDir)) continue;

    const files = fs.readdirSync(famDir).filter((f) => f.endsWith('.ts') || f.endsWith('.js') || f.endsWith('.mjs'));
    for (const file of files) {
      const slug = file.replace(/\.(ts|js|mjs)$/, '');
      if (pilotOnly && pilotSlugs.length > 0 && !pilotSlugs.includes(slug)) {
        continue;
      }

      const filePath = path.join(famDir, file);
      try {
        const mod = await import(filePath);
        const page = mod.default || mod.content || mod[Object.keys(mod)[0]];
        if (page && typeof page === 'object') {
          pages.push({
            filePath,
            family: fam,
            slug: page.slug || slug,
            data: page,
          });
        }
      } catch (err) {
        console.error(`Error loading ${filePath}:`, err.message);
      }
    }
  }

  // Also include blog posts if checking full site
  if (!pilotOnly) {
    const blogDir = path.join(contentDir, 'blog');
    if (fs.existsSync(blogDir)) {
      const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
      for (const file of blogFiles) {
        const slug = file.replace(/\.(mdx|md)$/, '');
        const filePath = path.join(blogDir, file);
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        pages.push({
          filePath,
          family: 'blog',
          slug,
          isBlog: true,
          rawContent,
        });
      }
    }
  }

  return pages;
}

function extractPageText(page) {
  if (page.isBlog) {
    // Strip frontmatter
    return page.rawContent.replace(/^---[\s\S]*?---/, '');
  }

  const d = page.data;
  let full = `${d.title || ''} ${d.h1 || ''} ${d.overview || ''} `;
  if (Array.isArray(d.sections)) {
    for (const s of d.sections) {
      full += `${s.title || ''} ${s.body || ''} `;
    }
  }
  if (d.workedExample) {
    full += `${d.workedExample.title || ''} ${d.workedExample.scenario || ''} ${d.workedExample.takeaway || ''} `;
    if (Array.isArray(d.workedExample.steps)) {
      for (const st of d.workedExample.steps) {
        full += `${st.label || ''} ${st.amount || ''} ${st.note || ''} `;
      }
    }
  }
  if (d.workedExampleReverse) {
    full += `${d.workedExampleReverse.title || ''} ${d.workedExampleReverse.scenario || ''} ${d.workedExampleReverse.takeaway || ''} `;
    if (Array.isArray(d.workedExampleReverse.steps)) {
      for (const st of d.workedExampleReverse.steps) {
        full += `${st.label || ''} ${st.amount || ''} ${st.note || ''} `;
      }
    }
  }
  if (Array.isArray(d.faqs)) {
    for (const f of d.faqs) {
      full += `${f.question || ''} ${f.answer || ''} `;
    }
  }
  return full;
}

async function runQualityGate() {
  const args = process.argv.slice(2);
  const isPilot = args.includes('--pilot') || args.includes('-p');
  const pilotSlugs = ['california', 'software-engineer', 'stripe-usa'];

  console.log(`\n======================================================`);
  console.log(`   FeeKit Content Uniqueness & Quality Gate Audit     `);
  console.log(`   Mode: ${isPilot ? 'PILOT (3 Pages)' : 'FULL REPOSITORY'} `);
  console.log(`======================================================\n`);

  const pages = await collectPages(isPilot, pilotSlugs);
  if (pages.length === 0) {
    console.error(`❌ No content pages found in content/ directory to audit.`);
    process.exit(1);
  }

  console.log(`Auditing ${pages.length} loaded page content module(s)...\n`);

  const titles = new Map();
  const descriptions = new Map();
  const h1s = new Map();
  const allFaqsByFamily = new Map(); // family -> Map<question, slug>
  const errors = [];
  const familyStats = {};

  // Step 1: Per-page word count, metadata uniqueness, and FAQ duplicates
  for (const page of pages) {
    const fam = page.family;
    if (!familyStats[fam]) {
      familyStats[fam] = {
        pages: 0,
        totalWords: 0,
        minWords: Infinity,
        maxWords: -Infinity,
        maxSimilarity: 0,
        worstPair: null,
      };
    }

    const text = extractPageText(page);
    const wordCount = countWords(text);
    page.wordCount = wordCount;
    page.text = text;
    page.shingles = get5WordShingles(text);

    familyStats[fam].pages++;
    familyStats[fam].totalWords += wordCount;
    if (wordCount < familyStats[fam].minWords) familyStats[fam].minWords = wordCount;
    if (wordCount > familyStats[fam].maxWords) familyStats[fam].maxWords = wordCount;

    // Word count threshold: 600 for calculators, 1000 for blog
    const minRequiredWords = page.isBlog ? 1000 : 600;
    if (wordCount < minRequiredWords) {
      errors.push(
        `[WORD COUNT] Page "${page.slug}" (${page.family}) has only ${wordCount} words (minimum required: ${minRequiredWords}).`
      );
    }

    if (!page.isBlog) {
      const d = page.data;

      // Title check
      if (!d.title) {
        errors.push(`[TITLE] Page "${page.slug}" is missing a title.`);
      } else if (titles.has(d.title)) {
        errors.push(`[DUPLICATE TITLE] "${d.title}" duplicates page "${titles.get(d.title)}".`);
      } else {
        titles.set(d.title, page.slug);
      }

      // Meta Description check
      if (!d.metaDescription) {
        errors.push(`[META DESC] Page "${page.slug}" is missing a metaDescription.`);
      } else if (descriptions.has(d.metaDescription)) {
        errors.push(`[DUPLICATE META DESC] on "${page.slug}" duplicates "${descriptions.get(d.metaDescription)}".`);
      } else {
        descriptions.set(d.metaDescription, page.slug);
      }

      // H1 check
      if (!d.h1) {
        errors.push(`[H1] Page "${page.slug}" is missing an H1.`);
      } else if (h1s.has(d.h1)) {
        errors.push(`[DUPLICATE H1] "${d.h1}" on "${page.slug}" duplicates "${h1s.get(d.h1)}".`);
      } else {
        h1s.set(d.h1, page.slug);
      }

      // Primary source verification
      if (!d.primarySource || !d.primarySource.url || !d.primarySource.name) {
        errors.push(`[SOURCE URL] Page "${page.slug}" lacks a verified primarySource URL or authority name.`);
      }

      // FAQ checks: intra-page duplicates and sibling duplicates
      if (Array.isArray(d.faqs)) {
        if (d.faqs.length < 5) {
          errors.push(`[FAQ COUNT] Page "${page.slug}" has only ${d.faqs.length} FAQs (minimum required: 5).`);
        }
        const intraFaqs = new Set();
        if (!allFaqsByFamily.has(fam)) {
          allFaqsByFamily.set(fam, new Map());
        }
        const familyFaqs = allFaqsByFamily.get(fam);

        for (const faq of d.faqs) {
          const qNorm = faq.question.trim().toLowerCase();
          if (intraFaqs.has(qNorm)) {
            errors.push(`[DUPLICATE FAQ] Question "${faq.question}" is duplicated on page "${page.slug}".`);
          } else {
            intraFaqs.add(qNorm);
          }

          if (familyFaqs.has(qNorm) && familyFaqs.get(qNorm) !== page.slug) {
            errors.push(
              `[SIBLING DUPLICATE FAQ] Question "${faq.question}" on "${page.slug}" duplicates sibling "${familyFaqs.get(qNorm)}".`
            );
          } else {
            familyFaqs.set(qNorm, page.slug);
          }
        }
      } else {
        errors.push(`[FAQS] Page "${page.slug}" has no faqs array.`);
      }
    }
  }

  // Step 2: Pairwise sibling similarity using 5-word shingles Jaccard
  const pagesByFamily = {};
  for (const page of pages) {
    if (!pagesByFamily[page.family]) pagesByFamily[page.family] = [];
    pagesByFamily[page.family].push(page);
  }

  for (const [fam, famPages] of Object.entries(pagesByFamily)) {
    for (let i = 0; i < famPages.length; i++) {
      for (let j = i + 1; j < famPages.length; j++) {
        const p1 = famPages[i];
        const p2 = famPages[j];
        const jaccard = calculateJaccard(p1.shingles, p2.shingles);
        const percent = Math.round(jaccard * 1000) / 10;

        if (percent > familyStats[fam].maxSimilarity) {
          familyStats[fam].maxSimilarity = percent;
          familyStats[fam].worstPair = `${p1.slug} vs ${p2.slug}`;
        }

        if (percent > 35.0) {
          errors.push(
            `[SIMILARITY VIOLATION] Sibling pages "${p1.slug}" and "${p2.slug}" (${fam}) share ${percent}% 5-word shingle similarity (limit: 35.0%).`
          );
        }
      }
    }
  }

  // Step 3: Print Quality Gate Report
  console.log('-----------------------------------------------------------------------------');
  console.log('| Family        | Pages | Min Words | Avg Words | Max Sibling Sim | Status   |');
  console.log('-----------------------------------------------------------------------------');
  for (const [fam, stats] of Object.entries(familyStats)) {
    const avg = Math.round(stats.totalWords / stats.pages);
    const simStr = stats.pages > 1 ? `${stats.maxSimilarity.toFixed(1)}%` : 'N/A (1 pg)';
    const status = stats.minWords >= (fam === 'blog' ? 1000 : 600) && (stats.pages === 1 || stats.maxSimilarity <= 35) ? 'PASS' : 'FAIL';
    console.log(
      `| ${fam.padEnd(13)} | ${String(stats.pages).padEnd(5)} | ${String(stats.minWords).padEnd(9)} | ${String(avg).padEnd(9)} | ${simStr.padEnd(15)} | ${status.padEnd(8)} |`
    );
  }
  console.log('-----------------------------------------------------------------------------\n');

  if (errors.length > 0) {
    console.error(`❌ QUALITY GATE FAILED with ${errors.length} error(s):\n`);
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    console.log();
    process.exit(1);
  }

  console.log(`🎉 ALL QUALITY GATE CHECKS PASSED PERFECTLY!\n`);
}

runQualityGate().catch((err) => {
  console.error('Fatal error during content-check:', err);
  process.exit(1);
});

