import type { PageContent } from '../types.ts';

export const uxResearcherContent: PageContent = {
  "slug": "ux-researcher",
  "family": "freelance",
  "title": "Freelance UX Researcher Hourly Rate Calculator | FeeKit",
  "metaDescription": "Calculate freelance UX researcher hourly and project rates grounded in BLS SOC 19-3022 data, participant recruiting incentives, testing toolkits, and 55% utilization.",
  "h1": "Freelance UX Researcher Rate Calculator & User Testing Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes193022.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 19-3022 (Survey Researchers and User Experience Researchers)."
  },
  "overview": "Freelance User Experience (UX) researchers uncover customer behavioral insights through generative user interviews, usability testing, quantitative surveys, and card-sorting studies. Under BLS SOC 19-3022 benchmarks, median survey researchers earn $60,410 annually ($29.04/hour), while senior digital UX researchers in tech hubs command between $95,000 and $145,000 base. Operating as an independent UX research consultant requires billing between $85 and $165+ per hour to cover self-employment tax, participant panel recruiting tools, transcription software, and unbilled synthesis time.",
  "sections": [
    {
      "id": "uxr-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 19-3022) & UX Research Pricing Models",
      "body": "Freelance UX researchers structure engagements across four established models:\n\n1. **Hourly Advisory ($85 – $165/hr)**: Suitable for study design reviews, heuristic evaluations, and coaching internal product squads on research methods.\n2. **Fixed-Scope Research Sprint ($8,000 – $22,000/study)**: Standard for comprehensive generative or evaluative studies: Screener & Protocol Design (Phase 1), Moderated Interviews / Testing (Phase 2), and Insight Synthesis & Stakeholder Readout (Phase 3).\n3. **Monthly Embedded Research Retainer ($4,500 – $10,000/mo)**: Provides ongoing user discovery, running 2 to 3 iterative usability tests per month for continuous product validation.\n4. **Usability Benchmark Audit ($5,000 – $12,000 flat)**: Quantitative benchmarking evaluating System Usability Scale (SUS) scores and task completion rates against key competitors."
    },
    {
      "id": "uxr-billable-utilization-drivers",
      "title": "Realistic Billable Utilization: The 1,100-Hour Research Reality",
      "body": "UX research requires heavy non-interview synthesis time. A freelance researcher operates at **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours):\n- **Participant Recruiting & Screener Verification (18% of time)**: Vetting participant profiles, managing no-shows, and distributing honorarium incentives.\n- **Synthesis & Affinity Mapping (15% of time)**: Tagging session transcripts, creating thematic affinity maps, and synthesizing video highlight reels.\n- **Stakeholder Readout Preparation (12% of time)**: Creating executive summary slide decks, persona updates, and journey maps.\n- **Active Research Moderation (50% to 55% billable)**: Conducting moderated interviews, usability test sessions, and client briefing workshops."
    },
    {
      "id": "uxr-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($9,000 – $16,000/yr)",
      "body": "Independent UX researchers maintain specialized research toolchains:\n\n- **Research Panels & Recruiting Platforms ($3,000 – $6,000/yr)**: User Interviews, Respondent.io, or UserTesting subscriptions for sourcing vetted B2B/B2C participants.\n- **Analysis, Repository & Transcription Tooling ($1,800 – $3,500/yr)**: Dovetail, Marvin, Otter.ai, and Miro subscriptions for qualitative tagging and insight repositories.\n- **Unmoderated Testing Software ($1,500 – $3,000/yr)**: Maze, Lookback, or Optimal Workshop licenses for tree testing and remote usability metrics.\n- **Hardware & Recording Audio Equipment ($1,500 – $2,500/yr amortized)**: Broadcast microphones, dual-monitor workstations, and secure encrypted backup drives.\n- **Commercial & Privacy Insurance ($1,500 – $2,500/yr)**: Protection against data privacy breaches (GDPR/CCPA) and NDA liabilities."
    },
    {
      "id": "uxr-contracting-risks-recruiting",
      "title": "Contracting Risks: Participant No-Shows, B2B Recruiting Costs, and Actionability",
      "body": "UX research contracts carry specific operational hazards:\n\n1. **Participant Incentive Pass-Through**: Client contracts must state that participant honorarium incentives are direct pass-through expenses paid in advance.\n2. **Niche B2B Recruiting Delays**: Recruiting specialized participants (e.g., pediatric surgeons, enterprise CIOs) takes longer than consumer testing. Contracts must establish that recruiting timelines are estimates subject to candidate availability.\n3. **Research Objectivity and Scope**: Research findings may reveal that a client's core feature idea is flawed. Contracts must clarify that compensation is for rigorous inquiry, not for validating executive biases."
    },
    {
      "id": "uxr-contract-wording-clause",
      "title": "Model Participant Incentive and Research Objectivity Clause",
      "body": "Protect your UX research proposals with this standard clause:\n\n> **Participant Incentive Pass-Through and Research Integrity Clause**:  \n> *\"All participant honorariums, incentive payouts, and specialized panel recruiting platform fees shall be funded directly by Client or deposited with Researcher in advance of study launch. Researcher shall apply objective scientific methodologies to recruit participants meeting the approved screener criteria in Exhibit A. Researcher provides objective findings and empirical insights; compensation is earned for conducting the research study and is not contingent on specific research outcomes, positive user feedback, or validation of Client product hypotheses.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Senior Mixed-Methods UX Researcher ($110,000 Target Take-Home Net)",
    "scenario": "A senior UX researcher targeting $110,000 net personal income budgets 48 active weeks, 23 billable hours/wk (1,104 annual hours), $12,000 in software and panel overhead, 28% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$110,000",
      "annualOverhead": "$12,000",
      "billableHours": 1104,
      "taxRate": "28%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$110,000 ÷ (1 - 0.28)",
        "amount": "$152,778",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($152,778 + $12,000 overhead) × 1.15",
        "amount": "$189,495",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Hourly Rate",
        "formula": "$189,495 ÷ 1,104 billable hours",
        "amount": "$171.64",
        "note": "Senior UX research consulting rate"
      },
      {
        "label": "Standard 4-Week Study Fee",
        "formula": "$171.64 × 80 hours",
        "amount": "$13,731",
        "note": "Excludes participant incentives"
      }
    ],
    "takeaway": "To take home $110k net after covering Dovetail, recruiting software, and self-employment taxes, a UX researcher should charge ~$170/hour."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Fixed-Price Usability Study Pricing",
    "scenario": "A UX researcher scopes a 12-participant moderated usability study requiring 70 hours of work. Participant incentives are $100 each ($1,200 total). At $145/hr, what is the total invoice?",
    "inputs": {
      "laborHours": 70,
      "hourlyRate": "$145",
      "participantIncentives": "$1,200",
      "panelRecruitingFees": "$600"
    },
    "steps": [
      {
        "label": "Core Research Labor",
        "formula": "70 hours × $145",
        "amount": "$10,150",
        "note": "Protocol, moderation, synthesis"
      },
      {
        "label": "Participant Incentive Pass-Through",
        "formula": "12 participants × $100",
        "amount": "$1,200",
        "note": "Pass-through paid in advance"
      },
      {
        "label": "Panel Platform Recruiting Fees",
        "formula": "Respondent.io platform costs",
        "amount": "$600",
        "note": "Pass-through recruiting costs"
      },
      {
        "label": "Total Invoiced Study Price",
        "formula": "$10,150 + $1,200 + $600",
        "amount": "$11,950",
        "note": "Complete research package"
      }
    ],
    "takeaway": "A complete 12-session usability study with synthesis and participant incentives calculates to an $11,950 contract package."
  },
  "faqs": [
    {
      "question": "What is the average hourly rate for a freelance UX researcher?",
      "answer": "Freelance UX researchers typically charge between $85 and $165 per hour, with specialized mixed-methods and enterprise B2B researchers commanding $175 to $225+ per hour.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes193022.htm"
    },
    {
      "question": "How much does a freelance usability research study cost?",
      "answer": "A standard 10- to 12-participant usability study typically costs between $8,000 and $18,000, depending on participant recruiting difficulty and whether eye-tracking is required.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes193022.htm"
    },
    {
      "question": "Who pays for participant incentives in freelance research?",
      "answer": "The client must always fund participant incentives and recruiting platform fees directly, either paying platforms in advance or depositing funds with the researcher.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes193022.htm"
    },
    {
      "question": "How many billable hours does a freelance UX researcher work?",
      "answer": "A realistic benchmark is 20 to 24 billable hours per week (1,000 to 1,150 annual billable hours) due to the heavy unbilled time required for participant recruiting and affinity mapping.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes193022.htm"
    },
    {
      "question": "What software is essential for an independent UX research practice?",
      "answer": "Essential tools include Dovetail or Marvin for qualitative tagging, User Interviews or Respondent for participant recruiting, and Maze or Lookback for testing sessions.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes193022.htm"
    }
  ]
};

export default uxResearcherContent;
