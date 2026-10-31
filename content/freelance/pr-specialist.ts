import type { PageContent } from '../types.ts';

export const prSpecialistContent: PageContent = {
  "slug": "pr-specialist",
  "family": "freelance",
  "title": "Freelance PR Specialist Retainer & Hourly Calculator | FeeKit",
  "metaDescription": "Calculate freelance public relations (PR) consultant monthly retainers grounded in BLS SOC 27-3031 data, media database overhead, and press pitch management.",
  "h1": "Freelance PR Specialist Rate Calculator & Media Relations Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes273031.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 27-3031 (Public Relations Specialists)."
  },
  "overview": "Freelance Public Relations (PR) specialists craft press releases, build targeted journalist media lists, pitch tier-one editorial publications, manage product launch announcements, and execute crisis communications for venture-backed startups and corporate executives. Under BLS SOC 27-3031 benchmarks, salaried PR specialists earn a median annual wage of $67,440 ($32.42/hour), with senior agency PR directors in major metropolitan markets exceeding $125,000. Independent PR consultants typically manage 2 to 4 corporate accounts, billing monthly retainers between $4,000 and $10,000 per client (or $125 to $250/hour) to cover expensive media database subscriptions (Muck Rack, Cision), wire distribution fees, and crisis availability.",
  "sections": [
    {
      "id": "pr-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 27-3031) & PR Retainer Pricing Structures",
      "body": "PR consultants package their media relations services across four models:\n\n1. **Monthly Media Relations Retainer ($4,500 – $10,000/mo per client)**: The dominant PR model, providing strategic narrative positioning, proactive journalist pitching, drafting press announcements, and media interview prep.\n2. **Product Launch & Funding Announcement Sprint ($8,000 – $20,000 flat)**: Intensive 6- to 8-week project orchestrating an embargoed funding round (Series A/B) or major product debut across TechCrunch, Forbes, Bloomberg, and industry trades.\n3. **Crisis Communication Advisory ($200 – $350/hr)**: High-stakes emergency advisory guiding leadership through reputational threats, executive transitions, data breach disclosures, or regulatory scrutiny.\n4. **Thought Leadership Executive Op-Ed Placement ($3,500 – $8,000)**: Ghostwriting and placing strategic executive commentary in targeted trade journals and national opinion columns."
    },
    {
      "id": "pr-billable-utilization-drivers",
      "title": "Managing the Media Portfolio: 2 to 4 Accounts Maximum",
      "body": "Public relations demands deep journalist relationship maintenance. A freelance PR specialist operates at **52% to 60% billable utilization** (1,050 to 1,200 annual billable hours):\n- **Journalist Relationship Cultivation (18% of time)**: Monitoring journalist beat changes on X/Twitter, meeting reporters for coffee, and reading daily newsletters.\n- **Press Pitch Customization (15% of time)**: Writing bespoke, highly tailored pitch emails tied to breaking news hooks (newsjacking).\n- **Executive Media Training & Interview Prep (12% of time)**: Preparing briefing sheets, soundbites, and Q&A talking points for client interviews.\n- **Active Campaign Strategy & Placement (52% to 55% billable)**: Executing launch strategies, organizing press tours, and tracking media coverage."
    },
    {
      "id": "pr-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($9,000 – $18,000/yr)",
      "body": "PR consultants maintain exceptionally expensive media intelligence software:\n\n- **Media Database & Journalist Outreach Suites ($4,000 – $8,000/yr)**: Muck Rack, Cision, or Meltwater subscriptions providing verified reporter contact info and beat histories.\n- **Media Monitoring & Coverage Tracking ($1,500 – $3,500/yr)**: CoverageBook, Brand24, or Critical Mention to track digital, broadcast, and print placements.\n- **Wire Distribution Services ($1,500 – $3,000/yr)**: PR Newswire or Business Wire distribution credits (typically passed through directly to clients).\n- **Workstation Hardware & High-Speed Mobile ($1,500 – $2,500/yr amortized)**: Fast mobile hardware for immediate crisis communication responses.\n- **Commercial & Defamation Liability Insurance ($1,500 – $2,500/yr)**: Protection against intellectual property or defamation claims."
    },
    {
      "id": "pr-contracting-risks-coverage",
      "title": "Contracting Risks: The \"Guaranteed Coverage\" Trap and Wire Fees",
      "body": "PR consulting agreements require ironclad legal guardrails:\n\n1. **Earned Media Cannot Be Guaranteed**: Earned media depends on independent editorial discretion and breaking world news. Contracts must explicitly state that compensation is for strategic pitching and media relations labor, not guaranteed coverage.\n2. **Wire Service Pass-Through**: Press wire distribution fees (PR Newswire / Business Wire, costing $800–$2,000 per release) must be paid directly by the client.\n3. **Client Interview Cancellations**: If a client executive fails to show up for an arranged journalist interview, the PR consultant is not liable for lost media relationships."
    },
    {
      "id": "pr-contract-wording-clause",
      "title": "Model PR Retainer Scope and Earned Media Disclaimer Clause",
      "body": "Protect your PR practice with this standard earned media disclaimer:\n\n> **Public Relations Retainer Scope and Earned Media Disclaimer**:  \n> *\"Consultant applies professional media relations methodologies to draft press materials, curate media lists, and pitch accredited journalists as outlined in Schedule A. Client acknowledges that earned editorial media is subject to independent journalist and editor discretion, newsroom priorities, and breaking global events. Consultant does NOT guarantee specific press placements, interview inclusions, or publication dates. Consultant's compensation is earned for professional media relations labor and representation, and is not contingent on specific media placements. All wire distribution fees (e.g., Business Wire) shall be billed directly to Client.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: B2B Tech PR Consultant ($120,000 Target Take-Home Net)",
    "scenario": "A tech PR consultant targeting $120,000 net personal income maintains three corporate accounts. They budget $14,000 in Muck Rack and tracking overhead, 27% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$120,000",
      "annualOverhead": "$14,000",
      "clientCount": 3,
      "taxRate": "27%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$120,000 ÷ (1 - 0.27)",
        "amount": "$164,384",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Annual Business Revenue",
        "formula": "($164,384 + $14,000 overhead) × 1.15",
        "amount": "$205,141",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Monthly Portfolio Target",
        "formula": "$205,141 ÷ 12 months",
        "amount": "$17,095/mo",
        "note": "Total monthly billing needed"
      },
      {
        "label": "Required Retainer Per Client",
        "formula": "$17,095 ÷ 3 clients",
        "amount": "$5,698/mo",
        "note": "Average retainer per account"
      }
    ],
    "takeaway": "Maintaining three tech PR accounts at ~$5,700/month each achieves $205k in gross billings, yielding $120k clean personal take-home."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Series A Funding Launch PR Package",
    "scenario": "A startup hires a PR consultant for an 8-week Series A funding announcement requiring 60 hours of messaging, pitch drafting, and exclusive embargo pitching. At $180/hr, what is the contract price?",
    "inputs": {
      "projectHours": 60,
      "hourlyRate": "$180",
      "mediaDatabaseAllocation": "$800"
    },
    "steps": [
      {
        "label": "Base PR Campaign Labor",
        "formula": "60 hours × $180",
        "amount": "$10,800",
        "note": "Strategy, pitching, interview prep"
      },
      {
        "label": "Media List Database Allocation",
        "formula": "Targeted Muck Rack list cost",
        "amount": "$800",
        "note": "Direct project expense"
      },
      {
        "label": "Total Launch Contract Price",
        "formula": "$10,800 + $800",
        "amount": "$11,600",
        "note": "Billed across 2 project phases"
      }
    ],
    "takeaway": "A complete 8-week funding announcement campaign calculates to an $11,600 fixed contract fee."
  },
  "faqs": [
    {
      "question": "What is the average monthly retainer for a freelance PR specialist?",
      "answer": "Freelance PR retainers typically range from $4,000 to $10,000 per month per client, representing strategic positioning, proactive media pitching, and executive interview coordination.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes273031.htm"
    },
    {
      "question": "Do PR consultants guarantee media placements in Forbes or TechCrunch?",
      "answer": "No. Legitimate PR consultants do not guarantee earned media placements because journalists and editors retain absolute editorial discretion over what they publish.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes273031.htm"
    },
    {
      "question": "Who pays for press release wire distribution fees?",
      "answer": "The client must always pay press release wire distribution platforms (PR Newswire, Business Wire) directly or reimburse the consultant as a separate pass-through expense.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes273031.htm"
    },
    {
      "question": "How is a PR specialist different from a content marketer?",
      "answer": "Content marketers write articles published on your company blog. PR specialists pitch your company stories to external third-party news outlets, podcasts, and trade journals.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes273031.htm"
    },
    {
      "question": "What software tools are mandatory for an independent PR consultant?",
      "answer": "A verified media database (Muck Rack, Cision) is essential for reporter contact details, alongside media monitoring tools (CoverageBook) to track press impressions.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes273031.htm"
    }
  ]
};

export default prSpecialistContent;
