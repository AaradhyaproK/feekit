import type { PageContent } from '../types.ts';

export const productManagerContent: PageContent = {
  slug: 'product-manager',
  family: 'freelance',
  title: 'Freelance Product Manager Hourly & Retainer Rate Calculator | FeeKit',
  metaDescription:
    'Calculate freelance and fractional product manager hourly and retainer rates grounded in BLS SOC 11-9199 wage data, product stack overhead, self-employment taxes, and 60% billable utilization.',
  h1: 'Freelance Product Manager Rate Calculator & Compensation Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)',
    url: 'https://www.bls.gov/oes/current/oes119199.htm',
    citation: 'BLS SOC Code 11-9199 (Managers, All Other) & SOC 15-1299 (Computer Occupations), May 2023 / 2024 Survey Releases.',
  },
  overview:
    'Determining a sustainable rate as a freelance or fractional product manager requires accounting for self-employment tax (15.3% SECA), product intelligence and user analytics software, executive stakeholder alignment overhead, and non-billable discovery. While full-time salaried product managers earn a median base salary of $135,000 to $160,000 under BLS benchmarks, an independent product consultant must bill between $100 and $225+ per hour (or $6,000 to $15,000+ per month on retainer) to cover business operating costs, unbillable sprint prep, and healthcare benefits.',
  sections: [
    {
      id: 'bls-benchmarks-and-pricing-models-pm',
      title: 'Industry Benchmarks (SOC 11-9199) & Product Management Pricing Models',
      body: `Bureau of Labor Statistics data places mean annual compensation for specialized technical managers and computer occupations at **$144,200**, with senior product leaders and group PMs in major technology centers earning upwards of **$180,000** in salaried base pay.

Independent product professionals structure client engagements across four primary frameworks:

1. **Fractional PM Retainer ($6,000 – $15,000/mo)**: The dominant model for early-stage startups and mid-market scaleups. Secures dedicated leadership capacity (e.g., 15–25 hours per week) to guide product roadmaps, lead agile ceremonies, author PRDs, and interface between executive leadership and engineering teams.
2. **Hourly Advisory & Discovery ($110 – $225/hr)**: Reserved for ad-hoc product audits, customer discovery sprints, product-market fit assessments, and strategic roadmapping workshops.
3. **Fixed-Phase Deliverables ($8,000 – $25,000 per phase)**: Applied to concrete strategic assets: authoring a 0-to-1 MVP Product Requirements Document (PRD), conducting an extensive competitor teardown, or establishing a product analytics tracking architecture.
4. **Interim Head of Product**: Full-time temporary executive placement (e.g., covering a 3- to 6-month leadership transition) typically structured on a monthly executive stipend ($14,000–$25,000/mo).`,
    },
    {
      id: 'billable-utilization-drivers-pm',
      title: 'Billable Utilization: The 1,150-Hour Strategic Reality',
      body: `Product managers spend immense mental energy on synthesis, stakeholder communication, and industry research that cannot be billed directly to clients. Expecting to bill 2,080 hours per year leads directly to burnout and strategic compromises.

A sustainable freelance product practice achieves **55% to 65% billable utilization**, representing roughly **1,150 to 1,250 billable hours per year** (24–26 billable hours per week over 48 active weeks). The remaining 35% to 45% of working hours is required for essential non-billable overhead:
- **Customer Interview Synthesis & Market Trends**: Reviewing user session recordings (FullStory/Hotjar), reading market analyst reports, and synthesizing customer transcripts.
- **Cross-Functional Executive Alignment**: Preparing executive slide decks, resolving conflicting stakeholder priorities, and clarifying technical constraints with engineering leads.
- **Client Acquisition & Proposals**: Pitching early-stage founders, reviewing existing product metrics, and drafting statements of work.
- **Business Administration**: Invoicing, contract reviews, bookkeeping, and quarterly tax preparation.`,
    },
    {
      id: 'product-manager-overhead-items',
      title: 'Role-Specific Technical Overhead Line Items ($8,000 – $15,000/yr)',
      body: `Professional product consulting carries significant recurring software and analytics expenses:

- **Product Management & Roadmap Platforms ($1,500 – $3,000/yr)**: Subscriptions to Productboard, Linear, Jira Cloud, Notion Enterprise, and FigJam.
- **Product Analytics & User Intelligence ($1,800 – $3,600/yr)**: Subscriptions to Amplitude, Mixpanel, Hotjar, or UserTesting for behavioral event analysis.
- **Meeting Intelligence & AI Transcription ($600 – $1,200/yr)**: Otter.ai, Fathom, or Grain for recording and summarizing customer discovery calls.
- **Workstation & Hardware Lifecycle ($2,000 – $3,500/yr)**: Laptop, external monitors, and high-quality audiovisual equipment for remote executive presentations.
- **Commercial Errors & Omissions Insurance ($1,500 – $2,500/yr)**: Liability coverage protecting against client disputes over delivery timelines or product specifications.
- **Accounting and Tax Preparation ($1,500 – $2,500/yr)**: CPA tax prep for Schedule C / S-Corp filings and contract legal reviews.`,
    },
    {
      id: 'contracting-risks-scope-creep-pm',
      title: 'Contracting Risks: Engineering Velocity, Role Creep, and Authority',
      body: `Fractional and freelance product management carries distinct structural risks:

1. **Engineering Velocity & Execution Dependencies**: PMs do not write the code. If the client’s engineering team suffers from technical debt, poor staffing, or missed release dates, the PM cannot be held financially liable for delayed launch dates. Contracts must state that the PM is responsible for specifications and backlog management, not engineering velocity.
2. **Role Creep into Design and Engineering**: Clients often ask fractional PMs to "just whip up some Figma wireframes" or "write some SQL queries". Unless explicitly scoped and priced, design and coding should be delineated from product leadership.
3. **Decision-Making Authority Ambiguity**: If executive leadership continually overrules the approved roadmap without consulting the PM, project velocity collapses. Agreements must define clear decision-making rights and designated client sponsors.`,
    },
    {
      id: 'proposal-invoice-wording-pm',
      title: 'Standard Proposal Scope Language for Product Management Contracts',
      body: `Include this protective language in fractional PM proposals and Master Services Agreements:

> *"Scope of Deliverables: Services include backlog prioritization, authoring Product Requirements Documents (PRDs), customer discovery interviews, and sprint planning facilitation as detailed in the Proposal dated [Date]. Consultant serves in a strategic advisory capacity; final engineering execution velocity and software code quality remain the responsibility of Client’s development team. Out-of-scope services include UI/UX graphic design, software programming, and direct personnel management, which will be billed at $[Rate]/hr upon mutual written consent."*`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Fractional PM Targeting $125,000 Net Annual Income',
    scenario:
      'A fractional product manager aims for $125,000 net personal income, incurs $12,500 in annual software and operating overhead, budgets 29% for combined federal/state/SECA taxes, and plans for 1,150 annual billable hours (24 hrs/week over 48 weeks) with a 15% safety buffer.',
    inputs: {
      targetNetSalary: '$125,000.00',
      annualOverhead: '$12,500.00',
      effectiveTaxRate: '29.00% (Income + SECA)',
      safetyBuffer: '15.00% (Downtime & late payments)',
      annualBillableHours: '1,150 hours (60% utilization)',
    },
    steps: [
      {
        label: 'Gross Up Target Net for Taxes (29%)',
        formula: '$125,000 ÷ (1 − 0.29)',
        amount: '$176,056.34',
        note: 'Pre-tax income required to clear $125k net.',
      },
      {
        label: 'Add Operating Overhead',
        formula: '$176,056.34 + $12,500.00',
        amount: '$188,556.34',
        note: 'Covers product software, analytics, and liability insurance.',
      },
      {
        label: 'Apply 15% Business Risk & Downtime Buffer',
        formula: '$188,556.34 × 1.15',
        amount: '$216,839.79',
        note: 'Protects against contract gaps between startup engagements.',
      },
      {
        label: 'Calculate Required Baseline Hourly Rate',
        formula: '$216,839.79 ÷ 1,150 billable hours',
        amount: '$188.56',
        note: 'Mathematically derived hourly billing minimum.',
      },
      {
        label: 'Recommended Commercial Market Rate',
        formula: 'Rounded to standard commercial tier',
        amount: '$190.00 / hour ($7,600/month 10-hr/wk retainer)',
        note: 'Standard commercial rate for senior fractional product leaders.',
      },
    ],
    takeaway:
      'To earn $125,000 net take-home income as a fractional product manager, quoting below $120/hour fails to account for self-employment taxes, product software overhead, and realistic 1,150 billable hours. Quoting at least $190/hour (or an equivalent $7,500/month retainer) achieves sustainable compensation.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Auditing Take-Home Pay from a $130/Hour Billing Rate',
    scenario:
      'A contract PM bills $130.00/hour across 1,150 annual billable hours ($149,500 gross revenue) with $12,500 in operating overhead and 29% average tax liability.',
    inputs: {
      hourlyBillingRate: '$130.00',
      annualBillableHours: '1,150 hours',
      annualOperatingExpenses: '$12,500.00',
      effectiveTaxRate: '29.00%',
    },
    steps: [
      {
        label: 'Calculate Gross Revenue',
        formula: '$130.00 × 1,150 hours',
        amount: '$149,500.00',
        note: 'Total 1099 client billings.',
      },
      {
        label: 'Deduct Operating Expenses',
        formula: '$149,500.00 − $12,500.00',
        amount: '$137,000.00',
        note: 'Schedule C net business profit.',
      },
      {
        label: 'Deduct Income & SECA Taxes (29%)',
        formula: '$137,000.00 × 0.29',
        amount: '$39,730.00',
        note: 'Estimated federal, state, and self-employment taxes.',
      },
      {
        label: 'Net Personal Annual Take-Home Income',
        formula: '$137,000.00 − $39,730.00',
        amount: '$97,270.00',
        note: 'True disposable income ($8,105/month).',
      },
    ],
    takeaway:
      'A contractor billing $130/hr grossing nearly $150,000 takes home $97,270 after $12,500 in software overhead and $39,730 in taxes, showing why rate calculations must be calibrated to net income goals.',
  },
  faqs: [
    {
      question: 'What is the standard hourly rate for a freelance or fractional product manager?',
      answer:
        'Freelance product manager rates typically range from $85 to $120 per hour for mid-level PMs, and $140 to $225+ per hour for senior or fractional product leaders. Monthly retainers for fractional PMs generally range from $5,000 to $12,000 per month depending on weekly hours.',
    },
    {
      question: 'What is the difference between a fractional PM and a freelance PM?',
      answer:
        'A freelance PM is typically hired for a specific execution project (e.g., writing PRDs for a new feature or managing a 3-month scrum backlog). A fractional PM operates as an ongoing embedded executive, leading product strategy, mentoring junior team members, and representing product leadership at executive meetings for 10 to 20 hours per week.',
    },
    {
      question: 'How do you handle engineering delays that impact product release dates?',
      answer:
        'Clearly delineate responsibilities in your contract. The PM is responsible for backlog definition, requirement clarity, and feature acceptance. Engineering execution, code quality, and delivery velocity are the responsibility of the client’s development team.',
    },
    {
      question: 'What software tools should be included in a freelance PM’s operating budget?',
      answer:
        'Core tools include product management and roadmapping platforms like Linear, Jira, or Productboard ($1,500–$3,000/yr), product analytics suites like Amplitude or Mixpanel ($1,500–$3,500/yr), meeting intelligence and transcription software ($600–$1,200/yr), and commercial liability insurance ($1,500–$2,500/yr).',
    },
    {
      question: 'How many hours per week should a fractional PM realistically bill?',
      answer:
        'Between 22 and 26 billable hours per week is the realistic sustainable maximum across all clients (translating to roughly 1,150 to 1,250 annual billable hours over 48 weeks). User research, cross-stakeholder alignment, meeting prep, and client business development consume the remainder.',
    },
  ],
};

export default productManagerContent;

