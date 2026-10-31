import type { PageContent } from '../types.ts';

export const growthHackerContent: PageContent = {
  "slug": "growth-hacker",
  "family": "freelance",
  "title": "Freelance Growth Hacker Hourly & Retainer Calculator | FeeKit",
  "metaDescription": "Calculate freelance growth hacker and acquisition specialist rates grounded in BLS SOC 13-1161 data, funnel experimentation, A/B testing, and 60% utilization.",
  "h1": "Freelance Growth Hacker Rate Calculator & Experimentation Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes131161.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 13-1161 (Market Research Analysts and Growth Specialists)."
  },
  "overview": "Freelance growth hackers run cross-functional experimentation across the entire Pirate Metrics funnel (Acquisition, Activation, Retention, Referral, Revenue). Combining data engineering, paid performance marketing, landing page CRO, and product onboarding optimization, independent growth specialists command premium rates between $110 and $225+ per hour (or $6,000 to $14,000/month retainers). Under BLS SOC 13-1161 benchmarks, salaried market analysts earn a median annual wage of $74,680 ($35.90/hour), while experienced growth consultants in venture-backed tech command high consulting fees to account for specialized analytics toolchains, A/B testing platforms, and automation software.",
  "sections": [
    {
      "id": "gh-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 13-1161) & Growth Consulting Structures",
      "body": "Growth hackers package their experimentation services across four models:\n\n1. **Strategic Experimentation Retainer ($6,000 – $14,000/mo)**: The standard engagement, executing a rapid cadence of 2 to 4 growth experiments per week across acquisition channels, onboarding flows, and email re-engagement.\n2. **Funnel & CRO Growth Sprint ($10,000 – $22,000 flat)**: Intensive 6-week projects auditing user drop-off points, designing high-converting landing pages, and building automated multi-channel onboarding sequences.\n3. **Product-Led Growth (PLG) Architecture ($12,000 – $25,000)**: Specialized consulting building viral referral loops, automated invite systems, and freemium-to-paid upgrade triggers.\n4. **Base Retainer + Performance Bonus**: A base consulting fee ($5,000/mo) paired with milestone bonuses tied to verified increases in monthly activation rate or ARR growth."
    },
    {
      "id": "gh-billable-utilization-drivers",
      "title": "Realistic Billable Utilization: Fast-Paced Analytics vs Execution",
      "body": "Growth consulting requires deep statistical analysis. A growth hacker maintains **55% to 62% billable utilization** (1,100 to 1,220 annual billable hours):\n- **Data Pipeline Verification & Attribution Audits (15% of time)**: Auditing Google Analytics 4, Mixpanel, and server-side tracking (CAPI) to eliminate data discrepancies.\n- **Experiment Ideation & ICE Prioritization (12% of time)**: Scoring experiment ideas based on Impact, Confidence, and Ease (ICE framework).\n- **Stakeholder Syncs & Readout Dashboards (13% of time)**: Reviewing weekly experiment wins, statistical significance benchmarks, and failed experiment learnings with founders.\n- **Active Experiment Execution (55% to 60% billable)**: Writing landing page copy, configuring A/B tests, setting up automation webhooks, and optimizing paid ad sets."
    },
    {
      "id": "gh-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($10,000 – $18,000/yr)",
      "body": "Independent growth hackers maintain an extensive growth stack:\n\n- **Product Analytics & Tracking Tooling ($2,500 – $5,000/yr)**: Mixpanel, Amplitude, PostHog, or Segment licenses for behavioral cohort analysis.\n- **A/B Testing & Heatmap Software ($2,000 – $4,000/yr)**: VWO, Statsig, Hotjar, or Microsoft Clarity premium suites.\n- **Automation & Scraping Toolchains ($1,500 – $3,000/yr)**: Zapier, Make.com, PhantomBuster, and Clay subscriptions for lead enrichment and workflow automation.\n- **Ad Intelligence & SEO Suites ($2,000 – $3,500/yr)**: Meta Ad Library trackers, AdSpy, Semrush, and SpyFu.\n- **Commercial Insurance & Legal ($1,500 – $2,500/yr)**: Commercial liability and contractor client agreement reviews."
    },
    {
      "id": "gh-contracting-risks-data",
      "title": "Contracting Risks: Data Hygiene, Attribution Disputes, and Failed Experiments",
      "body": "Growth consulting agreements must protect against common client disputes:\n\n1. **Experiments Inevitably Fail**: Growth hacking is scientific experimentation; roughly 60% of A/B tests fail to achieve statistical significance. Contracts must clarify that compensation is earned for running rigorous experiments, not guaranteed wins.\n2. **Third-Party Ad Spend Liability**: Client must pay ad networks directly. Never front client ad budget.\n3. **Attribution Modeling Disputes**: Disagreements over last-touch vs multi-touch attribution can sour performance bonuses. Baseline attribution models must be agreed in writing prior to campaign launch."
    },
    {
      "id": "gh-contract-wording-clause",
      "title": "Model Growth Experimentation and Scientific Disclaimer Clause",
      "body": "Protect your growth consulting agreements with this standard clause:\n\n> **Growth Experimentation and Scientific Methodology Clause**:  \n> *\"Consultant applies rigorous data-driven experimentation methodologies (ICE prioritization, A/B testing, and cohort tracking) to optimize Client's acquisition and retention funnels. Client acknowledges that scientific experimentation involves testing hypotheses, and that individual experiments may yield neutral or negative findings. Consultant's compensation is earned for executing the agreed experimentation cadence defined in Schedule A, and is not contingent on specific growth metrics or conversion rate outcomes unless an explicit performance bonus structure is mutually executed.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Senior B2B SaaS Growth Consultant ($135,000 Target Take-Home Net)",
    "scenario": "A growth hacker targeting $135,000 net personal income budgets 48 active weeks, 24 billable hours/wk (1,152 annual hours), $14,000 in software overhead, 28% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$135,000",
      "annualOverhead": "$14,000",
      "billableHours": 1152,
      "taxRate": "28%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$135,000 ÷ (1 - 0.28)",
        "amount": "$187,500",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($187,500 + $14,000 overhead) × 1.15",
        "amount": "$231,725",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Hourly Rate",
        "formula": "$231,725 ÷ 1,152 billable hours",
        "amount": "$201.15",
        "note": "Senior growth consultant rate"
      },
      {
        "label": "Monthly Retainer Equivalent",
        "formula": "$201.15 × 24 hours × 4 weeks",
        "amount": "$19,310/mo",
        "note": "Enterprise growth retainer"
      }
    ],
    "takeaway": "To take home $135k net after funding tracking tools, A/B testing software, and taxes, a growth hacker should bill ~$200/hour."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Fixed-Fee Funnel Optimization Sprint",
    "scenario": "A growth consultant scopes a 6-week activation sprint requiring 75 hours of analytics audit, landing page CRO, and onboarding email design. At $175/hr, what is the project fee?",
    "inputs": {
      "sprintHours": 75,
      "hourlyRate": "$175",
      "testingToolingPassThrough": "$800"
    },
    "steps": [
      {
        "label": "Base Growth Consulting Labor",
        "formula": "75 hours × $175",
        "amount": "$13,125",
        "note": "Funnel audit & CRO implementation"
      },
      {
        "label": "Specialized Testing Tooling",
        "formula": "Heatmap & testing licenses",
        "amount": "$800",
        "note": "Pass-through project cost"
      },
      {
        "label": "Total Invoiced Sprint Price",
        "formula": "$13,125 + $800",
        "amount": "$13,925",
        "note": "Billed across 2 project milestones"
      }
    ],
    "takeaway": "A complete 6-week growth audit and onboarding sprint calculates to a clear $13,900 fixed fee."
  },
  "faqs": [
    {
      "question": "What is the average hourly rate for a freelance growth hacker?",
      "answer": "Freelance growth hackers typically charge between $110 and $225 per hour. Retainers for venture-backed startups generally range from $6,000 to $14,000 per month.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131161.htm"
    },
    {
      "question": "How is growth hacking different from traditional marketing?",
      "answer": "Traditional marketing focuses on brand awareness and acquisition. Growth hacking focuses on the entire customer journey, including product activation, feature adoption, referral loops, and retention.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131161.htm"
    },
    {
      "question": "Do growth hackers guarantee conversion rate increases?",
      "answer": "No. Professional growth consultants do not guarantee specific metric increases because growth relies on iterative scientific testing where many hypotheses fail before finding a winning breakthrough.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131161.htm"
    },
    {
      "question": "Who pays for ad spend and testing software during a growth sprint?",
      "answer": "The client must always pay advertising networks (Google, Meta, LinkedIn) and dedicated software platforms directly. Consultants never front advertising capital.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131161.htm"
    },
    {
      "question": "What is the ICE framework in growth consulting?",
      "answer": "The ICE framework prioritizes experiments based on Impact, Confidence, and Ease, scored from 1 to 10, ensuring engineering resources focus on the highest-leverage growth opportunities.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131161.htm"
    }
  ]
};

export default growthHackerContent;
