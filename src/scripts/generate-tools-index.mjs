/**
 * ==============================================================================
 * Generate the lean client-side tools index
 * ==============================================================================
 * `src/data/tools-index.json` was 77KB and was imported by the global
 * CommandPalette in the AppShell, so every one of the 268 pages shipped the
 * full index - including fields the search UI never renders.
 *
 * This script generates a purpose-built client payload from the canonical
 * matrix. The full matrix stays in `src/data/geo-matrix.json` for server
 * use; the client only receives what the search palette needs to render a
 * result row: a title, a category, a slug, a short blurb and the href.
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

const lean = items.map((item) => ({
  title: item.title,
  shortTitle: item.shortTitle || item.title,
  category: item.category,
  slug: item.slug,
  subtitle: blurb(item.subtitle),
  href: `/tools/${item.category}/${item.slug}`,
  jurisdictionCode: item.jurisdictionCode,
  stateName: item.stateName,
  rate: item.rate,
  badge: item.badge,
}));

fs.writeFileSync(OUT_PATH, `${JSON.stringify(lean, null, 2)}\n`);

const bytes = fs.statSync(OUT_PATH).size;
console.log(
  `tools-index: ${lean.length} entries, ${(bytes / 1024).toFixed(1)}KB written to src/data/tools-index.json`
);
