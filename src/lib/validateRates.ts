import geoMatrix from '@/data/geo-matrix.json';

export interface StateRateRecord {
  slug: string;
  name: string;
  rate: number;
  maxLocal?: number;
  notes?: string;
  filingAgency?: string;
  nexusThreshold?: number | string;
}

export interface ValidationResult {
  isValid: boolean;
  totalChecked: number;
  errors: string[];
  warnings: string[];
}

/**
 * Validates US state sales tax rates from geo-matrix.json.
 * Ensures every state rate is between 0% and 12% to catch typos and regressions.
 * Logs a warning to console in development if any rate is questionable.
 */
export function validateStateRates(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Extract us_states array or fallback to items filtered by category
  const states: StateRateRecord[] =
    (geoMatrix as any).us_states ||
    (Array.isArray(geoMatrix)
      ? (geoMatrix as any).filter((item: any) => item.category === 'sales-tax-calculator')
      : (((geoMatrix as any).items || []).filter((item: any) => item.category === 'sales-tax-calculator')));

  if (!states || states.length === 0) {
    errors.push('Validation error: No US state records found in geo-matrix.json');
  }

  for (const state of states) {
    const label = state.name || state.slug || 'Unknown state';

    if (typeof state.rate !== 'number' || isNaN(state.rate)) {
      const err = `Invalid rate format in ${label}: received ${state.rate}`;
      errors.push(err);
      continue;
    }

    // Checks all state rates are between 0 and 12 (catches future typos)
    if (state.rate < 0 || state.rate > 12) {
      const err = `Rate out of bounds in ${label} (${state.slug}): ${state.rate}% is outside expected 0% - 12% range.`;
      errors.push(err);

      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[validateStateRates Warning] ${err}`);
      }
    }

    // Verify maxLocal is greater than or equal to base rate if provided
    if (typeof state.maxLocal === 'number' && state.maxLocal < state.rate) {
      const warn = `Warning for ${label}: maxLocal (${state.maxLocal}%) is lower than base rate (${state.rate}%).`;
      warnings.push(warn);

      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[validateStateRates Warning] ${warn}`);
      }
    }
  }

  const isValid = errors.length === 0;

  if (!isValid && process.env.NODE_ENV !== 'production') {
    console.warn(`[validateStateRates] Validation detected ${errors.length} issue(s):`, errors);
  }

  return {
    isValid,
    totalChecked: states.length,
    errors,
    warnings,
  };
}

// Build-time check execution when run directly via Node/tsx
if (typeof process !== 'undefined' && process.argv && process.argv[1]?.includes('validateRates')) {
  const res = validateStateRates();
  if (!res.isValid) {
    console.error(`❌ validateStateRates failed (${res.errors.length} errors):`);
    res.errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  } else {
    console.log(`✅ validateStateRates passed: All ${res.totalChecked} US states verified (rates within 0% - 12% bounds).`);
  }
}
