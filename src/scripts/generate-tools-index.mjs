/**
 * ==============================================================================
 * Generate the lean client-side tools index
 * ==============================================================================
 * `src/data/tools-index.json` used to be 77KB and was imported statically by
 * the global CommandPalette in the AppShell, so every one of the 466 pages
 * shipped the WHOLE index in its initial JavaScript bundle - including
 * fields that the search UI never renders.
 *
 * This script generates a purpose-built client payload from the canonical
 * matrix (`src/data/geo-matrix.json`). The full matrix stays in
 * `src/data/geo-matrix.json` for server use; the client only receives what
 * the search palette and the search bar actually need:
 *
 *   title       - the heading of a result row, and the primary search term
 *   shortTitle  - the compact label used by the inline search dropdown
 *   category    - the suite the tool belongs to (also a search term)
 *   slug        - the tool slug (also a search term)
 *   href        - the pre-built link, so the client never rebuilds the path
 *   subtitle    - a single scannable line shown under the title
 *   rate        - the headline rate, shown next to the category label
 *   keywords    - extra lowercased search tokens (state name, jurisdiction
 *                 code) that are not part of any displayed field
 *
 * The file is additionally loaded lazily (`await import(...)`) by the search
 * components, so it is no longer part of the initial bundle of any page that
 * does not open the search UI.
 *
 * Run: node src/scripts/generate-tools-index.mjs
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MATRIX_PATH = path.join(ROOT, 'src/data/geo-matrix.json');
const OUT_PATH = path.join(ROOT, 'src/data/tools-index.json');

const matrix = JSON.parse(fs.readFileSync(MATRIX_PATH, 'utf8'));
const items = Array.isArray(matrix) ? matrix : matrix.items || matrix.tools || [];

/**
 * Trim a subtitle to a single scannable line. The full subtitles run to
 * 140+ characters, which is meaningless in a dropdown row.
 */
function blurb(subtitle) {
  if (!subtitle) return '';
  const cut = subtitle.split(/(?<=[.!?])\s/)[0] || subtitle;
  return cut.length > 72 ? `${cut.slice(0, 69).trimEnd()}...` : cut;
}

const lean = items.map((item) => {
  const entry = {
    title: item.title,
    shortTitle: item.shortTitle || item.title,
    category: item.category,
    slug: item.slug,
    href: `/tools/${item.category}/${item.slug}`,
    subtitle: blurb(item.subtitle),
    // Extra search tokens that are not part of any displayed field. Lowercased
    // so the search components can do a single `.includes()` comparison.
    keywords: [item.stateName, item.jurisdictionCode]
      .filter(Boolean)
      .join(' ')
      .toLowerCase(),
  };
  if (item.rate !== undefined && item.rate !== null) {
    entry.rate = item.rate;
  }
  return entry;
});

fs.writeFileSync(OUT_PATH, `${JSON.stringify(lean, null, 2)}\n`);

const bytes = fs.statSync(OUT_PATH).size;
console.log(
  `tools-index: ${lean.length} entries, ${(bytes / 1024).toFixed(1)}KB written to src/data/tools-index.json`
);
