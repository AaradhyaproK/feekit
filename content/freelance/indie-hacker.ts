import type { PageContent } from '../types.ts';

export const indieHackerContent: PageContent = {
  "slug": "indie-hacker",
  "family": "freelance",
  "title": "Indie Hacker Runway & Freelance Rate Calculator | FeeKit",
  "metaDescription": "Calculate freelance consulting rates needed to fund SaaS product runway. Grounded in BLS software benchmarks, 40% billable allocation, and micro-SaaS overhead.",
  "h1": "Indie Hacker Rate Calculator & Micro-SaaS Runway Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes151252.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 15-1252 (Software Developers and Bootstrapped Founders)."
  },
  "overview": "An indie hacker splits working time between high-rate client consulting and building independent digital products (micro-SaaS, developer tooling, paid APIs). While standard full-time developers target 1,200 billable client hours per year, a sustainable indie hacker deliberately caps consulting at 15 to 20 billable hours per week (roughly 700 to 900 annual hours). This deliberate constraint requires charging premium hourly or weekly consulting rates ($110 to $195/hr) to fully fund personal living expenses, SaaS hosting overhead, and payment gateway reserves while protecting 50% of the working week for unbilled product development.",
  "sections": [
    {
      "id": "ih-consulting-to-product-balance",
      "title": "The Consulting-to-Product Ratio: 50/50 Time Allocation",
      "body": "Indie hackers balance financial survival against product equity:\n\n1. **High-Rate Weekly Sprints ($3,500 – $6,500/wk)**: Contracting for 15–20 hours per week for 2 to 3 weeks per month covers 100% of baseline living expenses and business overhead, leaving the remaining time completely open for SaaS feature building.\n2. **Fixed-Scope Architecture Audits ($4,000 – $10,000 flat)**: Selling quick-turnaround audits (performance, database optimization, technical due diligence) that require minimal ongoing context switching.\n3. **Runway Banking**: Allocating surplus consulting revenue into a dedicated 12-month corporate cash runway to fund periods of full-time product bootstrapping.\n4. **Product MRR Transition**: Gradually reducing billable client hours as Monthly Recurring Revenue (MRR) reaches key benchmarks ($2k, $5k, $10k MRR)."
    },
    {
      "id": "ih-billable-utilization-drivers",
      "title": "The 800-Hour Client Ceiling: Protecting Creative Energy",
      "body": "For an indie hacker, billing 40 client hours per week guarantees product failure due to mental exhaustion.\n\nAn effective indie hacker maintains a disciplined **35% to 45% client billable utilization rate** (750 to 900 annual client hours):\n- **Client Billable Consulting (35% to 45% of time)**: Focused high-leverage software development and technical consulting.\n- **SaaS Product Engineering (35% of time)**: Building proprietary code, payment checkouts (Stripe/Lemon Squeezy), and customer feature requests.\n- **Product Marketing & Distribution (15% of time)**: Content creation, SEO, Build-in-Public social distribution, user interviews, and cold email outreach.\n- **Business Operations & Customer Support (10% of time)**: Answering user bug tickets, handling Stripe refunds, and tax accounting."
    },
    {
      "id": "ih-overhead-items",
      "title": "Combined Consulting & SaaS Overhead Line Items ($10,000 – $18,000/yr)",
      "body": "Indie hackers incur dual overhead across consulting and active product hosting:\n\n- **SaaS Infrastructure & Cloud Hosting ($2,000 – $4,500/yr)**: Vercel, Supabase, AWS compute, Render, Redis caching, and domain registrations.\n- **Marketing & Analytics Tools ($1,500 – $3,500/yr)**: PostHog, Plausible/Fathom analytics, ConvertKit/Postmark email delivery, and customer support widgets.\n- **Merchant of Record & Payment Platform Costs ($1,200 – $2,500/yr)**: Stripe processing fees, Lemon Squeezy merchant-of-record costs, and Chargebee tooling.\n- **Development Workstation & Tooling ($2,500 – $4,000/yr)**: Hardware upgrades, GitHub Copilot/Cursor, IDE subscriptions, and productivity software.\n- **Legal & Accounting ($1,800 – $3,500/yr)**: Single-member LLC formation, Delaware franchise taxes, and annual Schedule C tax preparation."
    },
    {
      "id": "ih-contracting-risks-ip",
      "title": "Contracting Risks: Non-Competes, Intellectual Property, and Client Lock-In",
      "body": "Indie hackers must zealously guard their product IP in client contracts:\n\n1. **Overly Broad IP Assignment Clauses**: Standard client agreements often assign all inventions created during the term to the client. Indie hackers must explicitly carve out their proprietary SaaS code, domain names, and pre-existing libraries in Exhibit A.\n2. **Restrictive Non-Compete Clauses**: Never sign non-competes that restrict you from building software in broad industry verticals. Restrict non-competes strictly to direct competitors of the specific client product.\n3. **Context-Switching Penalties**: Avoid clients demanding constant synchronous Slack presence. Require asynchronous communication to protect deep-work product blocks."
    },
    {
      "id": "ih-contract-wording-clause",
      "title": "Model Pre-Existing IP Carve-Out Clause for Indie Hackers",
      "body": "Insert this clause into every consulting agreement to protect your SaaS products:\n\n> **Pre-Existing Intellectual Property and Open Work Carve-Out Clause**:  \n> *\"Client agrees that Consultant is an independent software creator who actively develops and operates independent commercial software products, including but not limited to the products and tools listed in Schedule B ('Pre-Existing Inventions'). Consultant retains sole and exclusive ownership of all pre-existing code, libraries, algorithms, and SaaS assets. Client is assigned rights only to custom, bespoke code written exclusively for Client's proprietary business under this Statement of Work. Nothing in this Agreement shall restrict Consultant from developing, launching, or commercializing independent software products.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Bootstrapping a Micro-SaaS on 18 Billable Hours/Week",
    "scenario": "An indie hacker targets $110,000 in net personal take-home pay while dedicating 50% of their working time to their SaaS product. They budget 46 active weeks, 18 client billable hours/wk (828 annual hours), $14,000 overhead, 28% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$110,000",
      "annualOverhead": "$14,000",
      "clientHours": 828,
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
        "formula": "($152,778 + $14,000 overhead) × 1.15",
        "amount": "$191,795",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Hourly Consulting Rate",
        "formula": "$191,795 ÷ 828 client hours",
        "amount": "$231.64",
        "note": "Target hourly consulting rate"
      },
      {
        "label": "Weekly Consulting Rate",
        "formula": "$231.64 × 18 billable hours",
        "amount": "$4,169/wk",
        "note": "3 days consulting / 2 days SaaS"
      }
    ],
    "takeaway": "Because client hours are restricted to 18 hours/week to protect product building, the indie hacker must bill ~$230/hour to fully fund a $110k personal take-home."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Months of Cash Runway from a $30,000 Client Contract",
    "scenario": "An indie hacker lands a $30,000 fixed-price client project requiring 150 hours of work. After 28% taxes and $1,500 monthly personal/business expenses, how many months of full-time SaaS runway does it generate?",
    "inputs": {
      "contractValue": "$30,000",
      "taxRate": "28%",
      "monthlyBurnRate": "$4,500"
    },
    "steps": [
      {
        "label": "Net Post-Tax Contract Cash",
        "formula": "$30,000 × (1 - 0.28)",
        "amount": "$21,600",
        "note": "Cash available after taxes"
      },
      {
        "label": "Calculated Pure Runway",
        "formula": "$21,600 ÷ $4,500 monthly burn",
        "amount": "4.8 Months",
        "note": "Full-time bootstrapping time"
      }
    ],
    "takeaway": "A single $30,000 consulting project provides nearly 5 months of dedicated, uninterrupted SaaS building runway."
  },
  "faqs": [
    {
      "question": "What is an indie hacker rate calculator used for?",
      "answer": "It calculates the hourly or project consulting rate an indie hacker must charge to fully fund living expenses and business overhead while working part-time (15–20 hours/wk) on client work.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151252.htm"
    },
    {
      "question": "How many hours should an indie hacker bill to clients?",
      "answer": "An effective guideline is 15 to 20 client billable hours per week (700 to 900 hours per year). Exceeding 25 hours per week severely drains creative energy needed to build SaaS products.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151252.htm"
    },
    {
      "question": "How do indie hackers protect their SaaS IP from consulting clients?",
      "answer": "Contracts must include explicit Pre-Existing Intellectual Property carve-outs listing all proprietary products, ensuring the client only owns bespoke code written specifically for them.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151252.htm"
    },
    {
      "question": "What is a typical indie hacker monthly overhead?",
      "answer": "Combined consulting and SaaS product overhead typically runs between $800 and $1,500 per month, covering cloud hosting (Vercel/AWS), domain fees, email delivery, and accounting.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151252.htm"
    },
    {
      "question": "When should an indie hacker stop freelancing completely?",
      "answer": "Most founders transition to full-time product development when Monthly Recurring Revenue (MRR) reliably covers 1.5x of baseline personal and business living expenses.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151252.htm"
    }
  ]
};

export default indieHackerContent;
