import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

// 1. Read us-states.json
const usStatesPath = path.join(rootDir, 'src/data/us-states.json');
const usStates = JSON.parse(fs.readFileSync(usStatesPath, 'utf8'));

// 2. Read rates from central rates file
const { US_STATE_SALES_TAX_RATES } = await import('../data/rates/index.ts');

// 3. Read geo-matrix.json
const geoMatrixPath = path.join(rootDir, 'src/data/geo-matrix.json');
const geoMatrix = JSON.parse(fs.readFileSync(geoMatrixPath, 'utf8'));
const geoMatrixStates = geoMatrix.us_states || [];

console.log('--- FeeKit State Sales Tax Consistency Test ---');
let errors = 0;
let checked = 0;

for (const state of usStates) {
  const central = US_STATE_SALES_TAX_RATES[state.slug];
  if (!central) {
    console.error(`❌ Missing state in US_STATE_SALES_TAX_RATES: ${state.slug}`);
    errors++;
    continue;
  }

  // Check base rate
  if (Number(state.rate) !== Number(central.baseRate)) {
    console.error(`❌ Base rate mismatch for ${state.slug}: us-states.json (${state.rate}) vs central (${central.baseRate})`);
    errors++;
  }

  // Check maxLocal / maxCombinedRate
  if (Number(state.maxLocal) !== Number(central.maxCombinedRate)) {
    console.error(`❌ Max combined rate mismatch for ${state.slug}: us-states.json (${state.maxLocal}) vs central (${central.maxCombinedRate})`);
    errors++;
  }

  // Check geo-matrix.json us_states if present
  const gmState = geoMatrixStates.find((s) => s.slug === state.slug);
  if (gmState) {
    if (Number(gmState.rate) !== Number(central.baseRate)) {
      console.error(`❌ Geo-matrix base rate mismatch for ${state.slug}: (${gmState.rate}) vs central (${central.baseRate})`);
      errors++;
    }
    if (Number(gmState.maxLocal) !== Number(central.maxCombinedRate)) {
      console.error(`❌ Geo-matrix maxLocal mismatch for ${state.slug}: (${gmState.maxLocal}) vs central (${central.maxCombinedRate})`);
      errors++;
    }
  }

  checked++;
}

console.log(`Audited ${checked} states against central single source of truth.`);

if (errors > 0) {
  console.error(`❌ FAILED with ${errors} consistency errors.`);
  process.exit(1);
} else {
  console.log('✅ Consistency PASSED: 100% agreement across us-states.json, central data, and geo-matrix.json.');
}
