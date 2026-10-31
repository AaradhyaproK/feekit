import type { PageContent } from '../types.ts';

export const voiceActorContent: PageContent = {
  "slug": "voice-actor",
  "family": "freelance",
  "title": "Freelance Voice Actor Rate & Commercial Buyout Calculator | FeeKit",
  "metaDescription": "Calculate voice-over rates grounded in SAG-AFTRA and GVAA industry rate guides, acoustic studio overhead, broadcast buyouts, and 45% billable studio time.",
  "h1": "Freelance Voice Actor Rate Calculator & Studio Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes272011.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Code 27-2011 and Global Voice Acting Academy (GVAA) Rate Guide."
  },
  "overview": "Freelance voice actors (VO talent) record broadcast commercial spots, corporate narrations, e-learning modules, video game characters, and audiobooks from professional broadcast-quality home recording booths. Under BLS SOC 27-2011 benchmarks, actors earn a median hourly wage of $17.94, with union (SAG-AFTRA) commercial voice talent earning $450 to $1,500+ per session plus residuals. Operating as an independent freelance voice talent requires pricing based on finished audio minutes, word counts, and commercial broadcast usage licensing (buyouts) to cover soundproof acoustic booths, high-end condenser microphones, Source-Connect lines, and vocal health downtime.",
  "sections": [
    {
      "id": "va-benchmarks-and-pricing-models",
      "title": "Industry Benchmarks (GVAA / SAG-AFTRA) & Voice-Over Pricing Models",
      "body": "Voice-over compensation is governed by standardized industry rate guides (GVAA):\n\n1. **Non-Broadcast Corporate / E-Learning ($250 – $600 base)**: Billed by word count brackets (e.g., $300 for up to 500 words, $0.25/word thereafter) for internal corporate training, explainer videos, and website demos with non-paid distribution.\n2. **Commercial Broadcast + Usage Buyouts ($750 – $3,500+ per spot)**: Composed of a Session Fee (recording time) PLUS a Usage / Buyout Fee based on distribution reach (Local TV, National TV, Paid Digital YouTube/Meta ads) and duration (13-week, 1-year, or buyout).\n3. **Audiobooks ($250 – $500 per Finished Hour - PFH)**: Standard publishing rate covering recording, editing, mastering, and ACX audio specification compliance.\n4. **Video Game & Character Voice ($350 – $800/hr)**: Session-based hourly rates with strict 2- to 4-hour caps to prevent vocal cord exhaustion."
    },
    {
      "id": "va-billable-utilization-drivers",
      "title": "The Vocal Fatigue Reality: 4 Hours of Studio Recording Maximum",
      "body": "Unlike sedentary desk work, vocal cords are biological muscles. Expecting to record 8 hours per day causes vocal strain and career-ending polyps.\n\nA sustainable voice-over practice operates at **40% to 50% billable studio utilization** (800 to 1,000 annual studio hours):\n- **Studio Recording Cap (3 to 4 hours/day max)**: Performing high-energy reads, character accents, or sustained audiobook narration.\n- **Auditioning & Self-Submissions (20% of time)**: Recording 5 to 15 competitive auditions daily for casting directors and agency rosters.\n- **Audio Editing, De-Clicking & Mastering (25% of time)**: Removing mouth clicks (iZotope RX Mouth De-click), trimming breaths, normalizing levels, and mastering to -23 LUFS / -3dB peak.\n- **Administrative & Business Operations (15% of time)**: Managing Source-Connect remote director sessions, invoicing, and contract licensing management."
    },
    {
      "id": "va-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($8,000 – $16,000/yr)",
      "body": "Voice actors maintain broadcast-certified recording infrastructure:\n\n- **Acoustic Isolation Booth ($4,000 – $8,000 amortized)**: WhisperRoom, StudioBricks, or custom acoustic vocal booths achieving an ambient noise floor below -60dB.\n- **Broadcast Condenser Microphones ($1,200 – $3,500 amortized)**: Industry-standard microphones (Sennheiser MKH 416, Neumann U87, Neumann TLM 103).\n- **Audio Interfaces & Hardware Preamps ($1,000 – $2,500)**: Clean low-noise preamps (Grace Design, Apollo Twin) and dedicated headphone monitors.\n- **Remote Directed Session Tooling ($800 – $1,800/yr)**: Source-Connect Standard license, SessionLinkPRO, and high-speed hardwired fiber internet.\n- **Audio Restoration Plugins ($1,000 – $2,000/yr)**: iZotope RX Advanced, FabFilter mastering suites, and DAW subscriptions (Reaper, Pro Tools)."
    },
    {
      "id": "va-contracting-risks-ai",
      "title": "Contracting Risks: AI Voice Cloning, Unapproved Broadcast Usage, and Re-Reads",
      "body": "Voice-over contracts require strict protective covenants:\n\n1. **AI Voice Cloning & Synthetic Training Prohibitions**: Contracts must explicitly forbid the client from using recorded audio to train generative text-to-speech (TTS) models or synthetic voice clones.\n2. **Defined Usage Licensing Windows**: Commercial voice rates are licenses, not permanent ownership. If a 1-year digital ad buyout expires, the client must pay renewal fees to keep the ad running.\n3. **Script Revision Fees**: Re-recording due to client script changes after delivery is billable at a 50% pick-up fee; re-reads due to actor pronunciation error are corrected free of charge."
    },
    {
      "id": "va-contract-wording-clause",
      "title": "Model Voice-Over Licensing and AI Voice Cloning Prohibition Clause",
      "body": "Protect your voice and intellectual property with this mandatory clause:\n\n> **Voice Licensing Term and AI Voice Cloning Prohibition Clause**:  \n> *\"Fee grants Client a non-exclusive license to broadcast the recorded Voice Deliverables strictly within the media channels, geographic territories, and time duration specified in Schedule A ('Usage Term'). Client explicitly agrees that voice recordings provided shall NOT be utilized, leased, or assigned to train artificial intelligence (AI), machine learning models, text-to-speech (TTS) engines, or synthetic voice-cloning software without separate, express written consent and payment of synthetic licensing royalties. Re-recording necessitated by script modifications following recording delivery shall incur a 50% Pick-Up Fee.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Commercial Voice Actor ($90,000 Target Take-Home Net)",
    "scenario": "A voice actor targeting $90,000 net personal income budgets 46 active weeks, 900 annual billable studio hours, $12,000 in booth/hardware overhead, 25% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$90,000",
      "annualOverhead": "$12,000",
      "billableHours": 900,
      "taxRate": "25%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$90,000 ÷ (1 - 0.25)",
        "amount": "$120,000",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($120,000 + $12,000 overhead) × 1.15",
        "amount": "$151,800",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Studio Hourly Rate",
        "formula": "$151,800 ÷ 900 studio hours",
        "amount": "$168.67/hr",
        "note": "Studio session base rate"
      },
      {
        "label": "Standard Corporate Explainer (2 min)",
        "formula": "Session base + usage license",
        "amount": "$450.00",
        "note": "GVAA guide benchmark"
      }
    ],
    "takeaway": "Because voice actors cap studio recording at ~20 hours per week to protect vocal health, an actor needs an effective ~$170/studio hour return to clear $90k net."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Commercial TV Spot Quote (Session + Buyout)",
    "scenario": "A brand hires a voice actor for a 30-second regional television spot. Under GVAA standards: $400 basic session fee + $1,200 regional broadcast 1-year buyout. What is the total invoice?",
    "inputs": {
      "sessionFee": "$400",
      "regionalTV1YearBuyout": "$1,200",
      "remoteDirectingFee": "$100"
    },
    "steps": [
      {
        "label": "Studio Session Fee",
        "formula": "Basic recording labor",
        "amount": "$400",
        "note": "Includes 1 hour directed session"
      },
      {
        "label": "Regional TV 1-Year Buyout",
        "formula": "Broadcast licensing rights",
        "amount": "$1,200",
        "note": "12-month broadcast usage"
      },
      {
        "label": "Source-Connect Remote Bridge",
        "formula": "Live director patch fee",
        "amount": "$100",
        "note": "Studio connection fee"
      },
      {
        "label": "Total Invoiced Commercial Fee",
        "formula": "$400 + $1,200 + $100",
        "amount": "$1,700",
        "note": "Commercial broadcast total"
      }
    ],
    "takeaway": "Separating session recording labor from broadcast licensing yields a $1,700 quote, protecting the actor’s intellectual property rights."
  },
  "faqs": [
    {
      "question": "How are voice actor rates calculated?",
      "answer": "Voice actor rates are calculated based on a base session/recording fee PLUS a usage/buyout fee determined by media distribution (web, local TV, national TV) and duration (13 weeks, 1 year, perpetual).",
      "sourceUrl": "https://www.bls.gov/oes/current/oes272011.htm"
    },
    {
      "question": "What is a Per Finished Hour (PFH) rate in audiobooks?",
      "answer": "PFH means the actor is paid based on the final mastered running time of the audiobook, not the hours spent recording. A 10-hour audiobook at $300 PFH yields $3,000.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes272011.htm"
    },
    {
      "question": "How do voice actors prevent their voices from being cloned by AI?",
      "answer": "Voice contracts must include explicit AI Voice Cloning Prohibition clauses legally barring clients from feeding recordings into generative text-to-speech models.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes272011.htm"
    },
    {
      "question": "Why can voice actors only record 3 to 4 hours per day?",
      "answer": "Vocal cords are delicate muscles. Exceeding 4 hours of intense vocal performance per day causes vocal strain, tone distortion, and permanent vocal cord damage.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes272011.htm"
    },
    {
      "question": "What audio hardware is mandatory for a professional voice actor?",
      "answer": "Industry standards require an acoustic isolation booth with a noise floor below -60dB, a broadcast condenser microphone (Sennheiser 416 or Neumann U87), clean preamps, and Source-Connect.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes272011.htm"
    }
  ]
};

export default voiceActorContent;
