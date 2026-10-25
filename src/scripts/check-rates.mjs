import { GATEWAY_RATES, STATUTORY_TAX_RATES, US_STATE_SALES_TAX_RATES } from '../data/rates/index.ts';

console.log('--- FeeKit Central Rates Validator ---');

let errors = 0;
let warnings = 0;

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const HTTP_URL_REGEX = /^https?:\/\//;

function validateEntry(key, entry, type) {
  if (!entry) {
    console.error(`❌ [${type}] Missing entry for key "${key}"`);
    errors++;
    return;
  }

  // 1. Check sourceUrl
  if (!entry.sourceUrl || typeof entry.sourceUrl !== 'string' || !HTTP_URL_REGEX.test(entry.sourceUrl)) {
    console.error(`❌ [${type}:${key}] Invalid or missing sourceUrl: "${entry.sourceUrl}"`);
    errors++;
  }

  // 2. Check sourceName
  if (!entry.sourceName || typeof entry.sourceName !== 'string' || entry.sourceName.trim().length === 0) {
    console.error(`❌ [${type}:${key}] Missing sourceName`);
    errors++;
  }

  // 3. Check verifiedOn
  if (!entry.verifiedOn || typeof entry.verifiedOn !== 'string' || !ISO_DATE_REGEX.test(entry.verifiedOn)) {
    console.error(`❌ [${type}:${key}] Invalid or missing verifiedOn (expected YYYY-MM-DD): "${entry.verifiedOn}"`);
    errors++;
  } else {
    const d = new Date(entry.verifiedOn);
    if (isNaN(d.getTime())) {
      console.error(`❌ [${type}:${key}] verifiedOn is not a valid calendar date: "${entry.verifiedOn}"`);
      errors++;
    }
  }

  // 4. Value check for rate entry
  if (type !== 'STATE_SALES_TAX') {
    if (typeof entry.value !== 'number' || isNaN(entry.value)) {
      console.error(`❌ [${type}:${key}] Invalid numeric value: ${entry.value}`);
      errors++;
    }
  }
}

// Audit GATEWAY_RATES
console.log(`Auditing ${Object.keys(GATEWAY_RATES).length} gateway rates...`);
for (const [key, entry] of Object.entries(GATEWAY_RATES)) {
  validateEntry(key, entry, 'GATEWAY_RATE');
}

// Audit STATUTORY_TAX_RATES
console.log(`Auditing ${Object.keys(STATUTORY_TAX_RATES).length} statutory tax rates...`);
for (const [key, entry] of Object.entries(STATUTORY_TAX_RATES)) {
  validateEntry(key, entry, 'STATUTORY_TAX_RATE');
}

// Audit US_STATE_SALES_TAX_RATES
console.log(`Auditing ${Object.keys(US_STATE_SALES_TAX_RATES).length} US state sales tax entries...`);
for (const [slug, entry] of Object.entries(US_STATE_SALES_TAX_RATES)) {
  validateEntry(slug, entry, 'STATE_SALES_TAX');

  if (typeof entry.baseRate !== 'number' || entry.baseRate < 0 || entry.baseRate > 15) {
    console.error(`❌ [STATE:${slug}] baseRate out of bounds: ${entry.baseRate}`);
    errors++;
  }
  if (typeof entry.maxCombinedRate !== 'number' || entry.maxCombinedRate < entry.baseRate || entry.maxCombinedRate > 20) {
    console.error(`❌ [STATE:${slug}] maxCombinedRate out of bounds or less than base: ${entry.maxCombinedRate} (base ${entry.baseRate})`);
    errors++;
  }
  if (!entry.filingAgency || entry.filingAgency.trim().length === 0) {
    console.error(`❌ [STATE:${slug}] Missing filingAgency`);
    errors++;
  }
  if (!entry.penaltyCitation || entry.penaltyCitation.trim().length === 0) {
    console.error(`❌ [STATE:${slug}] Missing penaltyCitation`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n❌ Rates validation FAILED with ${errors} error(s)!`);
  process.exit(1);
} else {
  console.log(`\n✅ Rates validation PASSED: All ${Object.keys(GATEWAY_RATES).length + Object.keys(STATUTORY_TAX_RATES).length + Object.keys(US_STATE_SALES_TAX_RATES).length} rates have verified source URLs and verifiedOn dates.`);
}
