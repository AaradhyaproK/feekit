import fs from 'fs';
import path from 'path';

const US_STATES_ACCURATE = [
  {
    slug: "alabama",
    code: "AL",
    name: "Alabama",
    rate: 4,
    local: 5.24,
    maxLocal: 11.5,
    notes: "City and county local sales taxes in Alabama can add up to 7.50% to the base state rate.",
    filingAgency: "Alabama Department of Revenue",
    nexusThreshold: 250000
  },
  {
    slug: "alaska",
    code: "AK",
    name: "Alaska",
    rate: 0,
    local: 1.76,
    maxLocal: 7.5,
    notes: "Alaska has no state-level sales tax, but local municipalities levy borough and city sales taxes up to 7.50%.",
    filingAgency: "Alaska Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "arizona",
    code: "AZ",
    name: "Arizona",
    rate: 5.6,
    local: 2.77,
    maxLocal: 11.2,
    notes: "Counties and cities levy transaction privilege taxes (TPT) that can add up to 5.60% to the state base rate.",
    filingAgency: "Arizona Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "arkansas",
    code: "AR",
    name: "Arkansas",
    rate: 6.5,
    local: 2.94,
    maxLocal: 11.625,
    notes: "Municipalities and counties in Arkansas can add local sales taxes up to 5.125%.",
    filingAgency: "Arkansas Department of Finance and Administration",
    nexusThreshold: 100000
  },
  {
    slug: "california",
    code: "CA",
    name: "California",
    rate: 7.25,
    local: 1.57,
    maxLocal: 10.25,
    notes: "Local district tax jurisdictions can add up to 3.00% on top of the statutory 7.25% base rate.",
    filingAgency: "CDTFA",
    nexusThreshold: 500000
  },
  {
    slug: "colorado",
    code: "CO",
    name: "Colorado",
    rate: 2.9,
    local: 4.87,
    maxLocal: 11.2,
    notes: "Colorado is a home-rule state where self-collecting cities and special districts can add substantial local surtaxes.",
    filingAgency: "Colorado Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "connecticut",
    code: "CT",
    name: "Connecticut",
    rate: 6.35,
    local: 0.0,
    maxLocal: 6.35,
    notes: "Connecticut levies a uniform statewide sales tax with no additional county or municipal sales taxes.",
    filingAgency: "Connecticut Department of Revenue Services",
    nexusThreshold: 100000
  },
  {
    slug: "delaware",
    code: "DE",
    name: "Delaware",
    rate: 0,
    local: 0.0,
    maxLocal: 0,
    notes: "Delaware does not impose any state or local sales tax on retail transactions.",
    filingAgency: "Delaware Division of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "district-of-columbia",
    code: "DC",
    name: "District of Columbia",
    rate: 6,
    local: 0.0,
    maxLocal: 6,
    notes: "The District of Columbia has a general sales tax rate of 6.00% with higher rates on restaurant dining and lodging.",
    filingAgency: "DC Office of Tax and Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "florida",
    code: "FL",
    name: "Florida",
    rate: 6,
    local: 1.02,
    maxLocal: 8.5,
    notes: "Florida counties can levy discretionary sales surtaxes ranging from 0.50% to 2.50%.",
    filingAgency: "Florida Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "georgia",
    code: "GA",
    name: "Georgia",
    rate: 4,
    local: 3.35,
    maxLocal: 9,
    notes: "Counties and special transportation districts in Georgia can add up to 5.00% in local option sales taxes.",
    filingAgency: "Georgia Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "hawaii",
    code: "HI",
    name: "Hawaii",
    rate: 4,
    local: 0.44,
    maxLocal: 4.5,
    notes: "Hawaii assesses a General Excise Tax (GET) with a 0.50% county surcharge levied on Oahu.",
    filingAgency: "Hawaii Department of Taxation",
    nexusThreshold: 100000
  },
  {
    slug: "idaho",
    code: "ID",
    name: "Idaho",
    rate: 6,
    local: 0.03,
    maxLocal: 9,
    notes: "Certain resort cities in Idaho are authorized to levy supplementary local option non-property taxes up to 3.00%.",
    filingAgency: "Idaho State Tax Commission",
    nexusThreshold: 100000
  },
  {
    slug: "illinois",
    code: "IL",
    name: "Illinois",
    rate: 6.25,
    local: 2.55,
    maxLocal: 11,
    notes: "Municipalities, counties, and regional transit authorities in Illinois combine to create local rates up to 4.75%.",
    filingAgency: "Illinois Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "indiana",
    code: "IN",
    name: "Indiana",
    rate: 7,
    local: 0.0,
    maxLocal: 7,
    notes: "Indiana imposes a standard 7.00% state sales tax with no supplementary local or county sales taxes.",
    filingAgency: "Indiana Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "iowa",
    code: "IA",
    name: "Iowa",
    rate: 6,
    local: 0.94,
    maxLocal: 7,
    notes: "Iowa jurisdictions can levy a 1.00% Local Option Sales Tax (LOST) bringing total rates up to 7.00%.",
    filingAgency: "Iowa Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "kansas",
    code: "KS",
    name: "Kansas",
    rate: 6.5,
    local: 2.17,
    maxLocal: 10.5,
    notes: "Local jurisdictions and special development districts in Kansas can add combined surtaxes up to 4.00%.",
    filingAgency: "Kansas Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "kentucky",
    code: "KY",
    name: "Kentucky",
    rate: 6,
    local: 0.0,
    maxLocal: 6,
    notes: "Kentucky enforces a uniform 6.00% state sales and use tax with zero local city or county add-ons.",
    filingAgency: "Kentucky Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "louisiana",
    code: "LA",
    name: "Louisiana",
    rate: 4.45,
    local: 5.1,
    maxLocal: 11.45,
    notes: "Louisiana parishes and municipalities independently collect local sales taxes up to 7.00%.",
    filingAgency: "Louisiana Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "maine",
    code: "ME",
    name: "Maine",
    rate: 5.5,
    local: 0.0,
    maxLocal: 5.5,
    notes: "Maine assesses a uniform 5.50% state sales tax without any additional local or municipal levies.",
    filingAgency: "Maine Revenue Services",
    nexusThreshold: 100000
  },
  {
    slug: "maryland",
    code: "MD",
    name: "Maryland",
    rate: 6,
    local: 0.0,
    maxLocal: 6,
    notes: "Maryland imposes a statewide 6.00% sales and use tax with no supplementary county or city sales taxes.",
    filingAgency: "Comptroller of Maryland",
    nexusThreshold: 100000
  },
  {
    slug: "massachusetts",
    code: "MA",
    name: "Massachusetts",
    rate: 6.25,
    local: 0.0,
    maxLocal: 6.25,
    notes: "Massachusetts has a flat 6.25% statewide sales tax rate with no local municipal surtaxes.",
    filingAgency: "Massachusetts Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "michigan",
    code: "MI",
    name: "Michigan",
    rate: 6,
    local: 0.0,
    maxLocal: 6,
    notes: "Michigan levies a constitutional 6.00% sales and use tax with no local county or city sales taxes permitted.",
    filingAgency: "Michigan Department of Treasury",
    nexusThreshold: 100000
  },
  {
    slug: "minnesota",
    code: "MN",
    name: "Minnesota",
    rate: 6.875,
    local: 0.62,
    maxLocal: 8.875,
    notes: "Minnesota cities and counties can levy local sales taxes and transit surtaxes adding up to 2.00%.",
    filingAgency: "Minnesota Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "mississippi",
    code: "MS",
    name: "Mississippi",
    rate: 7,
    local: 0.07,
    maxLocal: 8,
    notes: "Certain Mississippi cities levy a 1.00% local tax on restaurant food and lodging transactions.",
    filingAgency: "Mississippi Department of Revenue",
    nexusThreshold: 250000
  },
  {
    slug: "missouri",
    code: "MO",
    name: "Missouri",
    rate: 4.225,
    local: 4.16,
    maxLocal: 9.988,
    notes: "Missouri features complex local taxing districts including ambulance, fire, and CID zones adding up to 5.763%.",
    filingAgency: "Missouri Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "montana",
    code: "MT",
    name: "Montana",
    rate: 0,
    local: 0.0,
    maxLocal: 3,
    notes: "Montana has no state sales tax, though approved resort communities can levy local resort taxes up to 3.00%.",
    filingAgency: "Montana Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "nebraska",
    code: "NE",
    name: "Nebraska",
    rate: 5.5,
    local: 1.44,
    maxLocal: 8,
    notes: "Incorporated cities in Nebraska can add local option sales taxes up to 2.50% with voter approval.",
    filingAgency: "Nebraska Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "nevada",
    code: "NV",
    name: "Nevada",
    rate: 6.85,
    local: 1.38,
    maxLocal: 8.375,
    notes: "Nevada counties impose mandatory and optional local sales and use taxes bringing the combined rate up to 8.375%.",
    filingAgency: "Nevada Department of Taxation",
    nexusThreshold: 100000
  },
  {
    slug: "new-hampshire",
    code: "NH",
    name: "New Hampshire",
    rate: 0,
    local: 0.0,
    maxLocal: 0,
    notes: "New Hampshire does not impose a general state sales tax or local municipal sales taxes.",
    filingAgency: "New Hampshire Department of Revenue Administration",
    nexusThreshold: 100000
  },
  {
    slug: "new-jersey",
    code: "NJ",
    name: "New Jersey",
    rate: 6.625,
    local: 0.0,
    maxLocal: 6.625,
    notes: "New Jersey maintains a standard 6.625% state rate, with a reduced 3.3125% rate in designated Urban Enterprise Zones.",
    filingAgency: "New Jersey Division of Taxation",
    nexusThreshold: 100000
  },
  {
    slug: "new-mexico",
    code: "NM",
    name: "New Mexico",
    rate: 5,
    local: 2.72,
    maxLocal: 9.0625,
    notes: "New Mexico imposes a Gross Receipts Tax (GRT) where county and municipal rates add up to 4.0625%.",
    filingAgency: "New Mexico Taxation and Revenue Department",
    nexusThreshold: 100000
  },
  {
    slug: "new-york",
    code: "NY",
    name: "New York",
    rate: 4,
    local: 4.52,
    maxLocal: 8.875,
    notes: "Counties, cities, and the Metropolitan Commuter Transportation District (MCTD) add local surtaxes up to 4.875%.",
    filingAgency: "New York State Department of Taxation and Finance",
    nexusThreshold: 500000
  },
  {
    slug: "north-carolina",
    code: "NC",
    name: "North Carolina",
    rate: 4.75,
    local: 2.25,
    maxLocal: 7.5,
    notes: "North Carolina counties levy standard local sales and transit taxes adding 2.00% to 2.75% to the state rate.",
    filingAgency: "North Carolina Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "north-dakota",
    code: "ND",
    name: "North Dakota",
    rate: 5,
    local: 1.96,
    maxLocal: 8.5,
    notes: "North Dakota home-rule cities and counties can levy local option sales taxes up to 3.50%.",
    filingAgency: "North Dakota Office of State Tax Commissioner",
    nexusThreshold: 100000
  },
  {
    slug: "ohio",
    code: "OH",
    name: "Ohio",
    rate: 5.75,
    local: 1.49,
    maxLocal: 8,
    notes: "Ohio counties and regional transit authorities levy permissive local sales taxes up to 2.25%.",
    filingAgency: "Ohio Department of Taxation",
    nexusThreshold: 100000
  },
  {
    slug: "oklahoma",
    code: "OK",
    name: "Oklahoma",
    rate: 4.5,
    local: 4.49,
    maxLocal: 11.5,
    notes: "Oklahoma cities and counties can levy significant local sales taxes adding up to 7.00% to the state rate.",
    filingAgency: "Oklahoma Tax Commission",
    nexusThreshold: 100000
  },
  {
    slug: "oregon",
    code: "OR",
    name: "Oregon",
    rate: 0,
    local: 0.0,
    maxLocal: 0,
    notes: "Oregon has no state general sales tax and does not authorize general local sales taxes.",
    filingAgency: "Oregon Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "pennsylvania",
    code: "PA",
    name: "Pennsylvania",
    rate: 6,
    local: 0.34,
    maxLocal: 8,
    notes: "Allegheny County (1.00%) and Philadelphia (2.00%) levy local surtaxes on top of the 6.00% state rate.",
    filingAgency: "Pennsylvania Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "rhode-island",
    code: "RI",
    name: "Rhode Island",
    rate: 7,
    local: 0.0,
    maxLocal: 7,
    notes: "Rhode Island charges a uniform 7.00% state sales tax with no local county or city sales tax add-ons.",
    filingAgency: "Rhode Island Division of Taxation",
    nexusThreshold: 100000
  },
  {
    slug: "south-carolina",
    code: "SC",
    name: "South Carolina",
    rate: 6,
    local: 1.44,
    maxLocal: 9,
    notes: "South Carolina counties can levy local option, capital project, and education taxes up to 3.00%.",
    filingAgency: "South Carolina Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "south-dakota",
    code: "SD",
    name: "South Dakota",
    rate: 4.2,
    local: 1.91,
    maxLocal: 6.2,
    notes: "Municipalities in South Dakota can levy up to an additional 2.00% general municipal sales tax.",
    filingAgency: "South Dakota Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "tennessee",
    code: "TN",
    name: "Tennessee",
    rate: 7,
    local: 2.55,
    maxLocal: 9.75,
    notes: "Tennessee cities and counties impose local sales taxes ranging up to 2.75% on the initial $1,600 of a sale.",
    filingAgency: "Tennessee Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "texas",
    code: "TX",
    name: "Texas",
    rate: 6.25,
    local: 1.95,
    maxLocal: 8.25,
    notes: "Texas local taxing jurisdictions (cities, transit, counties) can add up to 2.00%, capping the combined rate at 8.25%.",
    filingAgency: "Texas Comptroller of Public Accounts",
    nexusThreshold: 500000
  },
  {
    slug: "utah",
    code: "UT",
    name: "Utah",
    rate: 6.1,
    local: 1.09,
    maxLocal: 9.05,
    notes: "Local counties, cities, and transit districts in Utah levy combined surtaxes adding up to 2.95%.",
    filingAgency: "Utah State Tax Commission",
    nexusThreshold: 100000
  },
  {
    slug: "vermont",
    code: "VT",
    name: "Vermont",
    rate: 6,
    local: 0.36,
    maxLocal: 7,
    notes: "Eligible Vermont towns and cities levy a 1.00% local option sales tax on retail transactions.",
    filingAgency: "Vermont Department of Taxes",
    nexusThreshold: 100000
  },
  {
    slug: "virginia",
    code: "VA",
    name: "Virginia",
    rate: 5.3,
    local: 0.45,
    maxLocal: 7,
    notes: "Virginia state rate is 4.3% plus a mandatory 1.0% local tax, with regional transportation add-ons up to 0.70%.",
    filingAgency: "Virginia Department of Taxation",
    nexusThreshold: 100000
  },
  {
    slug: "washington",
    code: "WA",
    name: "Washington",
    rate: 6.5,
    local: 2.79,
    maxLocal: 10.6,
    notes: "Washington cities, counties, and regional transit authorities levy local option taxes up to 4.10%.",
    filingAgency: "Washington State Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "west-virginia",
    code: "WV",
    name: "West Virginia",
    rate: 6,
    local: 0.57,
    maxLocal: 7,
    notes: "West Virginia home-rule municipalities are permitted to levy a 1.00% municipal sales and service tax.",
    filingAgency: "West Virginia State Tax Department",
    nexusThreshold: 100000
  },
  {
    slug: "wisconsin",
    code: "WI",
    name: "Wisconsin",
    rate: 5,
    local: 0.43,
    maxLocal: 5.9,
    notes: "Wisconsin counties and the baseball park district levy supplementary local sales taxes up to 0.90%.",
    filingAgency: "Wisconsin Department of Revenue",
    nexusThreshold: 100000
  },
  {
    slug: "wyoming",
    code: "WY",
    name: "Wyoming",
    rate: 4,
    local: 1.36,
    maxLocal: 6,
    notes: "Wyoming counties may impose general and specific purpose local option sales taxes up to 2.00%.",
    filingAgency: "Wyoming Department of Revenue",
    nexusThreshold: 100000
  }
];

// Clean us_states array format for direct export
const us_states_array = US_STATES_ACCURATE.map(s => ({
  slug: s.slug,
  name: s.name,
  rate: s.rate,
  maxLocal: s.maxLocal,
  notes: s.notes,
  filingAgency: s.filingAgency,
  nexusThreshold: s.nexusThreshold
}));

// Load existing items
const rawExisting = fs.readFileSync(path.join(process.cwd(), 'src/data/geo-matrix.json'), 'utf-8');
const parsed = JSON.parse(rawExisting);
const existingItems = Array.isArray(parsed) ? parsed : (parsed.items || parsed.tools || []);

// Update items for sales-tax-calculator
const stateMap = new Map(US_STATES_ACCURATE.map(s => [s.slug, s]));

const updatedItems = existingItems.map(item => {
  if (item.category === 'sales-tax-calculator') {
    const s = stateMap.get(item.slug);
    if (s) {
      const combinedAvg = (s.rate + s.local).toFixed(2);
      return {
        ...item,
        name: s.name,
        stateName: s.name,
        rate: s.rate,
        local: s.local,
        maxLocal: s.maxLocal,
        notes: s.notes,
        filingAgency: s.filingAgency,
        nexusThreshold: s.nexusThreshold,
        threshold: `$${s.nexusThreshold.toLocaleString()}`,
        subtitle: `Calculate combined state (${s.rate}%) and county/municipal surtaxes in ${s.name}. Instant net-to-gross and gross-to-net reverse calculations for Form 1040 Schedule C and state tax remittance.`,
        formulaLatex: `\\text{Total Sales Tax} = \\text{Net Amount} \\times (${s.rate}\\% \\text{ State} + ${s.local}\\% \\text{ County Surtax}) = \\text{Net} \\times ${combinedAvg}\\%`,
        formulaExplanation: `In ${s.name}, the state levies a statutory sales tax of ${s.rate}%. County, municipal, and transit tax districts add an average surtax of ${s.local}%, resulting in a typical effective tax burden of ${combinedAvg}%. To extract sales tax from a gross invoice: Net = Gross / (1 + ${(combinedAvg/100).toFixed(4)}).`,
        sampleTiers: [
          { amount: 50, tax: Number((50 * (combinedAvg/100)).toFixed(2)), total: Number((50 * (1 + combinedAvg/100)).toFixed(2)) },
          { amount: 250, tax: Number((250 * (combinedAvg/100)).toFixed(2)), total: Number((250 * (1 + combinedAvg/100)).toFixed(2)) },
          { amount: 1000, tax: Number((1000 * (combinedAvg/100)).toFixed(2)), total: Number((1000 * (1 + combinedAvg/100)).toFixed(2)) },
          { amount: 5000, tax: Number((5000 * (combinedAvg/100)).toFixed(2)), total: Number((5000 * (1 + combinedAvg/100)).toFixed(2)) }
        ],
        faqs: [
          {
            question: `What is the current sales tax rate in ${s.name}?`,
            answer: `The statewide base sales tax rate in ${s.name} is ${s.rate}%. When combined with municipal and county surtaxes (which average ${s.local}% and cap around ${s.maxLocal}%), the total effective rate paid by consumers typically ranges between ${s.rate}% and ${s.maxLocal}%.`
          },
          {
            question: `What is the economic nexus threshold for remote sellers in ${s.name}?`,
            answer: `Following South Dakota v. Wayfair, remote out-of-state merchants must register and remit ${s.name} sales tax once annual sales into the state exceed $${s.nexusThreshold.toLocaleString()}. Once crossed, destination-based tax collection becomes legally mandatory.`
          },
          ...(item.faqs || []).slice(2)
        ]
      };
    }
  }
  return item;
});

// Output schema with us_states property and all programmatic items
const finalGeoMatrix = {
  us_states: us_states_array,
  items: updatedItems
};

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/geo-matrix.json'),
  JSON.stringify(finalGeoMatrix, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/seo-matrix.json'),
  JSON.stringify(finalGeoMatrix, null, 2),
  'utf-8'
);

console.log(`Successfully generated geo-matrix.json with ${us_states_array.length} audited us_states and ${updatedItems.length} tool items.`);
