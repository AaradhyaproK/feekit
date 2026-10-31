import type { PageContent } from '../types.ts';

export const productDesignerContent: PageContent = {
  "slug": "product-designer",
  "family": "freelance",
  "title": "Freelance Product Designer Hourly Rate Calculator | FeeKit",
  "metaDescription": "Calculate freelance product designer hourly and project rates grounded in BLS SOC 27-1024 benchmarks, design system tooling overhead, and 60% billable utilization.",
  "h1": "Freelance Product Designer Rate Calculator & UX/UI Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes271024.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 27-1024 (Graphic Designers and Digital Product Designers)."
  },
  "overview": "Freelance product designers bridge user research, wireframing, high-fidelity interaction design, and design system governance. Under BLS SOC 27-1024 benchmarks, median graphic and digital designers earn $58,910, with digital product specialists in major tech hubs exceeding $105,000. Operating as an independent 1099 product design consultant requires billing between $85 and $160+ per hour to cover self-employment tax, professional Figma organization tiers, user testing suites, font licensing, and non-billable client research.",
  "sections": [
    {
      "id": "pd-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 27-1024) & Product Design Pricing Structures",
      "body": "Freelance product designers utilize four established pricing models:\n\n1. **Hourly Consulting ($85 – $165/hr)**: Suitable for staff-augmentation design sprints, joining agile standups, and refining edge-case flows alongside frontend engineers.\n2. **Fixed-Price Design Sprints ($6,000 – $18,000/phase)**: Standard for zero-to-one MVP design: Discovery & Wireframes (Sprint 1), High-Fidelity UI & Interactive Prototypes (Sprint 2), and Design System Token Handoff (Sprint 3).\n3. **Monthly Embedded Retainer ($5,000 – $12,000/mo)**: Common for fast-growing SaaS startups needing continuous feature design, usability testing oversight, and design QA without a full-time in-house hire.\n4. **Design System Architecture ($10,000 – $25,000)**: Specialized deliverable building comprehensive Figma component libraries, multi-brand tokens, accessibility auditing, and Storybook handoff documentation."
    },
    {
      "id": "pd-billable-utilization-drivers",
      "title": "Realistic Billable Utilization: The 1,150-Hour Design Reality",
      "body": "Product design requires deep, uninterrupted creative blocks. Expecting 40 billable hours per week leads to derivative work and client friction.\n\nA sustainable product design practice operates at **55% to 65% billable utilization** (1,100 to 1,250 billable hours annually across 48 weeks):\n- **User Recruitment & Screener Review (15% of time)**: Coordinating usability participants, reviewing user testing screeners, and writing research scripts.\n- **Tooling & Design System Maintenance (10% of time)**: Managing Figma library updates, component variants, and vector asset optimization.\n- **Client Workshops & Stakeholder Alignment (15% of time)**: Unbillable sales discovery, portfolio walkthroughs, and async Loom feedback recordings.\n- **Active Execution (55% to 60% billable)**: Creating interactive prototypes, user flows, UI components, and developer specs."
    },
    {
      "id": "pd-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($9,000 – $15,000/yr)",
      "body": "Professional product designers maintain an extensive design stack:\n\n- **Figma Enterprise / Organization Plan ($900 – $1,800/yr)**: Figma Professional or Organization tiers with unlimited version history, dev mode seats, and advanced component analytics.\n- **Prototyping & Usability Testing Software ($2,000 – $4,000/yr)**: Maze, UserTesting, Optimal Workshop, and ProtoPie licenses for interactive logic testing.\n- **Stock Assets, Typefaces, & 3D Libraries ($1,200 – $2,500/yr)**: Commercial typography licenses, icon suites (FontAwesome, Streamline), and premium 3D assets.\n- **Hardware & Color-Calibrated Displays ($2,500 – $3,500/yr amortized)**: High-spec MacBooks and DCI-P3 color-accurate 5K monitors (Apple Studio Display).\n- **Insurance & Legal ($1,500 – $2,500/yr)**: Commercial liability and IP assignment protections."
    },
    {
      "id": "pd-contracting-risks-revisions",
      "title": "Contracting Risks: Subjective Review Cycles, Scope Creep, and Asset Handoff",
      "body": "Design contracts frequently suffer from client subjectivity:\n\n1. **Unbounded Revision Loops**: Clients often request open-ended changes without realizing aesthetic pivots impact entire flow diagrams. Proposals must specify a fixed number of review cycles (typically 2 revisions per milestone).\n2. **Design-to-Code Disconnect**: Developers often misinterpret spacing or animations unless explicitly documented. Contracts should define whether developer handoff QA is included.\n3. **Asset Licensing Ownership**: Ensure third-party typefaces and stock photography licenses are purchased directly by the client, or clearly marked as pass-through licensing expenses."
    },
    {
      "id": "pd-contract-wording-clause",
      "title": "Model Revision and Design Approval Clause",
      "body": "Protect your design proposals with this standard approval clause:\n\n> **Design Milestone Approval and Revision Governance Clause**:  \n> *\"Each design milestone includes up to two (2) consolidated rounds of feedback and revisions based on the agreed functional scope. The Client shall designate a single primary stakeholder responsible for providing consolidated feedback within five (5) business days of deliverable submission. Feedback received after this window, or substantial pivots from previously approved wireframes, shall constitute a Change Order billable at Contractor's standard rate of $[HOURLY_RATE]/hour. Final native Figma files and design tokens will be delivered upon final invoice settlement.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Senior SaaS Product Designer ($120,000 Target Take-Home Net)",
    "scenario": "A senior product designer targeting $120,000 net income budgets 48 active weeks, 24 billable hours/wk (1,152 annual hours), $12,000 in software and hardware overhead, 28% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$120,000",
      "annualOverhead": "$12,000",
      "billableHours": 1152,
      "taxRate": "28%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$120,000 ÷ (1 - 0.28)",
        "amount": "$166,667",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($166,667 + $12,000 overhead) × 1.15",
        "amount": "$205,467",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Hourly Rate",
        "formula": "$205,467 ÷ 1,152 billable hours",
        "amount": "$178.36",
        "note": "Senior freelance product designer rate"
      },
      {
        "label": "Weekly Retainer Equivalent",
        "formula": "$178.36 × 24 hours/week",
        "amount": "$4,280/wk",
        "note": "Embedded SaaS design retainer"
      }
    ],
    "takeaway": "To take home $120k net after funding Figma tooling, user testing, and self-employment taxes, a product designer needs to bill roughly $175–$180/hour."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Fixed-Price MVP Design Package Pricing",
    "scenario": "A product designer quotes a 6-week zero-to-one MVP design project requiring 140 dedicated hours. At an effective $135/hr rate plus $800 user testing pass-through, what is the fixed milestone fee?",
    "inputs": {
      "estimatedHours": 140,
      "hourlyBase": "$135",
      "researchPassThrough": "$800",
      "revisionContingency": "15%"
    },
    "steps": [
      {
        "label": "Base Design Labor",
        "formula": "140 hours × $135",
        "amount": "$18,900",
        "note": "Core design sprint labor"
      },
      {
        "label": "Revision Contingency (15%)",
        "formula": "$18,900 × 0.15",
        "amount": "$2,835",
        "note": "Buffers revision iterations"
      },
      {
        "label": "Research & User Testing Costs",
        "formula": "Pass-through expense",
        "amount": "$800",
        "note": "Participant incentives & Maze"
      },
      {
        "label": "Total Invoiced Project Fee",
        "formula": "$18,900 + $2,835 + $800",
        "amount": "$22,535",
        "note": "Structured into 3 sprint milestones"
      }
    ],
    "takeaway": "Structuring 140 design hours into a milestone package with revision buffers yields a clear $22,500 contract fee."
  },
  "faqs": [
    {
      "question": "What is the average hourly rate for a freelance product designer?",
      "answer": "Freelance product designers typically charge between $85 and $160 per hour, with specialized SaaS and design system architects charging $175 to $225+ per hour.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "How is product design priced differently from UI/UX design?",
      "answer": "Product design encompasses business metrics, growth experiments, and design system governance alongside UI/UX, justifying higher strategic milestone and retainer pricing.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "How many billable hours does a freelance product designer work?",
      "answer": "A realistic benchmark is 24 to 26 billable hours per week (1,150 to 1,250 annual billable hours). User research setup, stakeholder syncs, and portfolio marketing consume the remaining time.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "How do product designers protect against endless revisions?",
      "answer": "Proposals must stipulate a defined limit (such as two consolidated revision rounds per milestone) with additional iterations billed at standard hourly rates.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "Who pays for user testing participants and premium font licenses?",
      "answer": "Testing incentives and commercial font licenses should be billed directly to the client or invoiced as approved pass-through expenses.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    }
  ]
};

export default productDesignerContent;
