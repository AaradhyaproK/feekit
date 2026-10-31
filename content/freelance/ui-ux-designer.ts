import type { PageContent } from '../types.ts';

export const uiUxDesignerContent: PageContent = {
  slug: 'ui-ux-designer',
  family: 'freelance',
  title: 'Freelance UI/UX Designer Hourly Rate Calculator | FeeKit',
  metaDescription:
    'Calculate freelance UI/UX designer hourly and project rates grounded in BLS SOC 15-1255 / 27-1024 wage data, design tooling overhead, self-employment taxes, and 60% billable utilization.',
  h1: 'Freelance UI/UX Designer Rate Calculator & Compensation Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)',
    url: 'https://www.bls.gov/oes/current/oes151255.htm',
    citation: 'BLS SOC Code 15-1255 (Web and Digital Interface Designers) & SOC 27-1024 (Graphic Designers), May 2023 / 2024 Survey Releases.',
  },
  overview:
    'Calculating an accurate freelance UI/UX designer rate requires accounting for self-employment tax (15.3% SECA), user research and testing software subscriptions, high-fidelity color-accurate hardware, and non-billable client discovery. While full-time salaried digital interface designers earn a median annual wage of $79,890 to $98,540 under BLS benchmarks, an independent contractor must bill between $70 and $150+ per hour to cover operating expenses, subjective revision cycles, health benefits, and quarterly estimated taxes.',
  sections: [
    {
      id: 'bls-benchmarks-and-pricing-models-designer',
      title: 'Industry Benchmarks (SOC 15-1255 / 27-1024) & Design Pricing Models',
      body: `Bureau of Labor Statistics data places national mean annual compensation for web and digital interface designers at **$92,750**, with specialized senior product designers in tech centers commanding upwards of **$130,000** in salaried base pay.

Independent UI/UX designers structure client compensation across four standard pricing models:

1. **Hourly Consulting ($70 – $145/hr)**: Suitable for rapid UX audits, ad-hoc wireframing, design system component extensions, and embedded team staff-augmentation where product roadmaps evolve continuously.
2. **Phase / Milestone-Based Deliverables ($3,500 – $18,000 per phase)**: Ideal for defined end-to-end design initiatives: User Research & Personas $\\rightarrow$ Wireframing $\\rightarrow$ High-Fidelity UI Design $\\rightarrow$ Interactive Prototyping. Each phase requires structured stakeholder sign-off before proceeding.
3. **Dedicated Monthly Retainer ($4,500 – $9,500/mo)**: Secures a dedicated block of designer capacity (e.g., 15–20 hours per week) for continuous sprint feature designs, developer handoff reviews, and usability test evaluations.
4. **Value-Based Product Design**: Applied to critical SaaS conversion funnels, checkout redesigns, or enterprise mobile onboarding flows where improving user task completion or activation by 15% yields measurable enterprise revenue growth.`,
    },
    {
      id: 'billable-utilization-drivers-designer',
      title: 'The Reality of Billable Utilization: 1,100 to 1,200 Annual Hours',
      body: `Freelance UI/UX designers often discover that a large percentage of working hours cannot be billed directly to clients. Assuming 2,080 billable hours per year is an unsustainable calculation.

A realistic design practice operates at **55% to 60% billable utilization**, or roughly **1,100 to 1,200 billable hours per year** (23–25 billable hours per week over 48 active weeks). The remaining 40% to 45% of working hours is absorbed by necessary overhead:
- **Stakeholder Alignment & Synthesis**: Collating fragmented stakeholder feedback, aligning divergent executive opinions, and translating notes into actionable Figma briefs.
- **User Research Participant Recruiting**: Sourcing interview candidates, drafting usability screening questionnaires, and transcribing interview recordings.
- **Design System Maintenance**: Organizing Figma component auto-layouts, tokens, component variants, and interactive documentation.
- **Business Operations**: Creating portfolio case studies, proposal authoring, client discovery calls, and quarterly tax preparation.`,
    },
    {
      id: 'designer-overhead-items',
      title: 'Role-Specific Technical Overhead Line Items ($7,000 – $13,000/yr)',
      body: `Professional UI/UX design requires specialized prototyping software, research tools, and hardware:

- **Design & Prototyping Software ($1,200 – $2,500/yr)**: Figma Organization or Professional plans, Adobe Creative Cloud (Illustrator, Photoshop, After Effects for micro-interactions), and specialized prototyping tools (ProtoPie, Principle).
- **User Research & Usability Testing Suites ($1,500 – $3,000/yr)**: Usability testing subscriptions (Maze, Optimal Workshop, UserTesting), participant incentive recruiting budgets, and recording tools (Loom, Otter.ai).
- **Color-Accurate Displays & Test Hardware ($2,000 – $3,500/yr)**: Color-calibrated 4K/5K monitors (P3 wide color gamut), tablet testing hardware (iPad Pro with Apple Pencil for sketching), and mobile test devices.
- **Font & Asset Licensing ($800 – $1,800/yr)**: Commercial web font licenses, icon library subscriptions, and high-resolution stock photography assets.
- **Commercial Errors & Omissions (E&O) Insurance ($1,000 – $1,800/yr)**: Liability coverage protecting against intellectual property infringement claims or breach of contract.
- **Legal and Accounting ($1,200 – $2,000/yr)**: CPA tax prep and design contract template reviews.`,
    },
    {
      id: 'contracting-risks-scope-creep-designer',
      title: 'Contracting Risks: Subjective Feedback Loops and Figma Handoff Friction',
      body: `UI/UX design is inherently subjective, exposing freelancers to acute scope risks if contracts lack clear boundaries:

1. **Endless Subjective Revision Cycles**: Clients frequently request endless minor visual tweaks ("can we try it in green?", "make it pop") driven by internal committee opinions. Contracts must strictly limit deliverables to **two consolidated rounds of revisions per milestone**, with additional revisions billed at the hourly rate.
2. **Uncompensated Usability Participant Costs**: Clients often assume usability testing includes paying participant incentives. Agreements must state that participant recruiting fees and cash incentives are direct client pass-through expenses.
3. **Scope Creep into Frontend Development**: Clients frequently ask designers to "just inspect the CSS" or write HTML/Tailwind components. Unless front-end development is explicitly scoped and priced, development work should be excluded from design agreements.`,
    },
    {
      id: 'proposal-invoice-wording-designer',
      title: 'Standard Proposal Scope Language for UI/UX Design Contracts',
      body: `Protect your design studio by including this clause in project proposals:

> *"Scope of Deliverables: Deliverables include UX wireframes, interactive Figma prototypes, and component design tokens as specified in the project outline dated [Date]. Deliverables include up to two (2) consolidated rounds of feedback per phase. Client must designate a single Project Lead authorized to deliver unified feedback. Out-of-scope services include frontend code implementation, participant recruitment incentive fees, and major structural re-architecting of approved wireframes, which will be billed at the standard rate of $[Rate]/hr upon written client authorization."*`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Product Designer Targeting $85,000 Net Annual Income',
    scenario:
      'A freelance UI/UX designer targets $85,000 net personal income, incurs $9,500 in annual software and hardware overhead, budgets 27% for combined federal/state/SECA taxes, and plans for 1,150 annual billable hours (24 hrs/week over 48 weeks) with a 15% safety buffer.',
    inputs: {
      targetNetSalary: '$85,000.00',
      annualOverhead: '$9,500.00',
      effectiveTaxRate: '27.00% (Income + SECA)',
      safetyBuffer: '15.00% (Downtime & late payments)',
      annualBillableHours: '1,150 hours (60% utilization)',
    },
    steps: [
      {
        label: 'Gross Up Target Net for Taxes (27%)',
        formula: '$85,000 ÷ (1 − 0.27)',
        amount: '$116,438.36',
        note: 'Pre-tax income required to clear $85k net.',
      },
      {
        label: 'Add Operating Overhead',
        formula: '$116,438.36 + $9,500.00',
        amount: '$125,938.36',
        note: 'Covers Figma, user testing tools, and hardware.',
      },
      {
        label: 'Apply 15% Business Risk & Downtime Buffer',
        formula: '$125,938.36 × 1.15',
        amount: '$144,829.11',
        note: 'Protects against contract gaps and scope revisions.',
      },
      {
        label: 'Calculate Required Baseline Hourly Rate',
        formula: '$144,829.11 ÷ 1,150 billable hours',
        amount: '$125.94',
        note: 'Mathematically derived hourly billing minimum.',
      },
      {
        label: 'Recommended Commercial Market Rate',
        formula: 'Rounded to standard commercial tier',
        amount: '$130.00 / hour ($1,040 / 8-hr day)',
        note: 'Standard commercial rate for senior product designers.',
      },
    ],
    takeaway:
      'To earn $85,000 net take-home income as a freelance UI/UX designer, billing $50 or $60/hour produces a significant financial deficit. Accounting for 27% taxes, $9,500 in design tools, and realistic 1,150 billable hours requires quoting at least $130/hour.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Auditing Take-Home Pay from an $85/Hour Billing Rate',
    scenario:
      'A UI/UX designer bills $85.00/hour across 1,150 annual billable hours ($97,750 gross revenue) with $9,500 in operating expenses and 27% average tax liability.',
    inputs: {
      hourlyBillingRate: '$85.00',
      annualBillableHours: '1,150 hours',
      annualOperatingExpenses: '$9,500.00',
      effectiveTaxRate: '27.00%',
    },
    steps: [
      {
        label: 'Calculate Gross Revenue',
        formula: '$85.00 × 1,150 hours',
        amount: '$97,750.00',
        note: 'Total 1099 client billings.',
      },
      {
        label: 'Deduct Operating Expenses',
        formula: '$97,750.00 − $9,500.00',
        amount: '$88,250.00',
        note: 'Schedule C net business profit.',
      },
      {
        label: 'Deduct Income & SECA Taxes (27%)',
        formula: '$88,250.00 × 0.27',
        amount: '$23,827.50',
        note: 'Estimated federal, state, and self-employment taxes.',
      },
      {
        label: 'Net Personal Annual Take-Home Income',
        formula: '$88,250.00 − $23,827.50',
        amount: '$64,422.50',
        note: 'True disposable income ($5,368/month).',
      },
    ],
    takeaway:
      'Billing $85/hr generates nearly $100,000 in gross revenue but yields only $64,422 in take-home pay after design tools, hardware, and taxes, demonstrating why freelance designers must calculate based on net take-home goals.',
  },
  faqs: [
    {
      question: 'What is the standard hourly rate for a freelance UI/UX designer?',
      answer:
        'Freelance UI/UX designer rates typically range from $50 to $80 per hour for junior-to-mid designers, and $100 to $150+ per hour for senior product designers with deep expertise in design systems, user research, and interactive prototyping. Commercial enterprise rates can reach $175 to $225/hour.',
    },
    {
      question: 'How do you handle endless revision requests from design clients?',
      answer:
        'Include a strict revision clause in your contract stating that each milestone includes up to two consolidated rounds of feedback from a single designated stakeholder. Any subsequent feedback cycles or fundamental direction changes after sign-off must be billed at your hourly rate.',
    },
    {
      question: 'How many hours per week should a freelance designer realistically bill?',
      answer:
        'Between 22 and 25 billable hours per week is the realistic sustainable standard (translating to roughly 1,100 to 1,200 annual billable hours over 48 weeks). The remaining working time is required for stakeholder meetings, user research recruiting, design system maintenance, and business administration.',
    },
    {
      question: 'What software tools should be budgeted in a freelance design practice?',
      answer:
        'Core tools include Figma Professional or Organization ($180–$900/yr), Adobe Creative Cloud ($600–$1,000/yr), usability testing platforms like Maze or Optimal Workshop ($1,000–$2,500/yr), high-resolution color-calibrated monitors ($1,500–$3,000/yr), and commercial liability insurance ($1,000–$1,800/yr).',
    },
    {
      question: 'Should UI/UX designers charge hourly or by the project?',
      answer:
        'Project-based pricing structured into discrete phases (Discovery, Wireframing, High-Fidelity Design, Prototyping) works best when project scope is well-defined. Hourly billing or weekly sprint retainers are better suited for agile product teams where design priorities change rapidly.',
    },
  ],
};

export default uiUxDesignerContent;

