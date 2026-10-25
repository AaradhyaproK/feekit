import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

const { isIndexableTool } = await import('../lib/seo/indexing-policy.ts');

const geoMatrixPath = path.join(rootDir, 'src/data/geo-matrix.json');
const rawGeo = JSON.parse(fs.readFileSync(geoMatrixPath, 'utf8'));
const items = Array.isArray(rawGeo)
  ? rawGeo
  : (rawGeo.items || rawGeo.tools || []);

console.log('--- FeeKit Programmatic Pages & Description Quality Audit ---');

const csvRows = ['url,unique_words,template_family,decision'];
let indexCount = 0;
let noindexCount = 0;
let defectCount = 0;

for (const item of items) {
  const url = `https://www.usefeekit.com/tools/${item.category}/${item.slug}`;
  const decision = isIndexableTool(item.category, item.slug) ? 'INDEX' : 'NOINDEX';

  if (decision === 'INDEX') indexCount++;
  else noindexCount++;

  // Collect text across fields to evaluate content density & uniqueness
  const fullText = [
    item.title || '',
    item.subtitle || '',
    item.formulaExplanation || '',
    ...(item.faqs || []).map((f) => `${f.question} ${f.answer}`),
  ].join(' ');

  const words = fullText.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const uniqueWords = new Set(words).size;

  csvRows.push(`"${url}",${uniqueWords},"${item.category}","${decision}"`);

  // Defect checks on descriptions and titles
  const sub = item.subtitle || '';
  if (sub.includes('undefined') || sub.includes('null')) {
    console.error(`❌ Defect: 'undefined' or 'null' in subtitle for ${url}`);
    defectCount++;
  }
  if (sub.includes('  ')) {
    console.error(`❌ Defect: double space in subtitle for ${url}`);
    defectCount++;
  }
  if (/[,;:]\.$/.test(sub.trim()) || /,\.$/.test(sub.trim())) {
    console.error(`❌ Defect: malformed punctuation ending in subtitle for ${url}: "${sub}"`);
    defectCount++;
  }
}

// Write programmatic_pages_audit.csv to root directory
const csvPath = path.join(rootDir, 'programmatic_pages_audit.csv');
fs.writeFileSync(csvPath, csvRows.join('\n'), 'utf8');

console.log(`Audited ${items.length} programmatic pages.`);
console.log(`- Indexable high-value pages: ${indexCount}`);
console.log(`- Pruned (noindex, follow) pages: ${noindexCount}`);
console.log(`- CSV audit report saved to: programmatic_pages_audit.csv`);

if (defectCount > 0) {
  console.error(`❌ FAILED with ${defectCount} description formatting defects.`);
  process.exit(1);
} else {
  console.log('✅ Quality PASSED: Zero formatting defects, malformed endings, or undefined strings found.');
}
