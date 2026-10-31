import type { PageContent } from '../types.ts';

export const executiveCoachContent: PageContent = {
  "slug": "executive-coach",
  "family": "freelance",
  "title": "Freelance Executive Coach Package & Hourly Calculator | FeeKit",
  "metaDescription": "Calculate executive coaching 6-month package and hourly rates grounded in BLS SOC 13-1151 data, ICF credentialing overhead, 360-degree assessments, and 45% utilization.",
  "h1": "Freelance Executive Coach Rate Calculator & Leadership Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes131151.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Code 13-1151 and International Coaching Federation (ICF) Global Coaching Study."
  },
  "overview": "Freelance executive coaches provide confidential 1-on-1 leadership advisory, 360-degree feedback assessments, emotional intelligence coaching, and strategic alignment for C-suite executives, startup founders, and vice presidents. Under BLS SOC 13-1151 benchmarks, training specialists earn a median annual wage of $64,340 ($30.93/hour), while credentialed executive coaches (ICF PCC/MCC) command premium fees between $250 and $600+ per hour (or $10,000 to $35,000 per 6-month executive engagement) to cover intensive psychological assessment tooling, credentialing renewals, and emotional containment downtime.",
  "sections": [
    {
      "id": "ec-benchmarks-and-pricing-models",
      "title": "Executive Benchmarks (ICF) & Leadership Coaching Package Structures",
      "body": "Executive coaches package their services across four established structures:\n\n1. **6-Month Executive Coaching Engagement ($10,000 – $30,000/executive)**: The global corporate standard: Stakeholder Discovery & 360 Assessment (Month 1), Bi-Weekly 1-on-1 Deep Coaching Sessions (Months 2–5), and Stakeholder Review & Leadership Roadmap (Month 6).\n2. **Founder & CEO Retainer ($3,500 – $8,000/mo)**: Ongoing executive sounding board support for venture-backed founders navigating investor relations, board governance, and high-growth hiring stress.\n3. **Executive Team Offsite Alignment ($8,000 – $20,000/retreat)**: Facilitating high-impact 2-day executive retreats to resolve leadership friction, align strategic vision, and build vulnerability-based trust.\n4. **Hourly Executive Advisory ($300 – $600/hr)**: Reserved for laser coaching, emergency crisis decision support, or ad-hoc boardroom transitions."
    },
    {
      "id": "ec-billable-utilization-drivers",
      "title": "Emotional Containment: The 15-Hour Weekly Coaching Ceiling",
      "body": "Executive coaching requires intense active listening and emotional presence. Expecting 30 client coaching hours per week leads to emotional depletion.\n\nAn independent executive coach maintains **35% to 45% billable session utilization** (700 to 900 annual client session hours across 10–15 active executive coachees):\n- **1-on-1 Coaching Session Cap (12 to 15 hours/week max)**: Holding confidential 60- to 90-minute coaching sessions.\n- **Session Notes, Synthesis & Reflective Planning (20% of time)**: Writing post-session insights, curating leadership frameworks, and preparing accountability check-ins.\n- **360 Assessment Administration & Stakeholder Debriefs (15% of time)**: Conducting confidential stakeholder interviews with the coachee's manager, peers, and direct reports.\n- **Thought Leadership & Corporate Business Development (20% of time)**: Publishing executive insights, speaking at industry summits, and meeting corporate HR sponsors."
    },
    {
      "id": "ec-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($10,000 – $20,000/yr)",
      "body": "Executive coaches maintain specialized assessment and accreditation toolchains:\n\n- **Psychometric & 360-Degree Assessment Tooling ($3,000 – $6,500/yr)**: Commercial scoring certifications and test credits (Hogan Assessments, Leadership Circle Profile, Korn Ferry 360).\n- **Professional Accreditations & Supervision ($2,000 – $4,500/yr)**: International Coaching Federation (ICF) annual dues, PCC/MCC credential renewals, and paid coaching supervision hours.\n- **Executive Retreat & On-Site Travel ($2,500 – $5,000/yr)**: Travel expenses for conducting in-person client offsites and board meetings.\n- **Confidential Meeting Tooling & Hardware ($1,200 – $2,500/yr amortized)**: Encrypted video meeting infrastructure, noise-canceling hardware, and secure CRM note vaults.\n- **Commercial & E&O Professional Insurance ($1,500 – $2,500/yr)**: Professional indemnity protecting against coaching or advisory disputes."
    },
    {
      "id": "ec-contracting-risks-confidentiality",
      "title": "Contracting Risks: The Three-Way Sponsor Triangle and Confidentiality",
      "body": "Corporate coaching contracts require airtight ethical boundaries:\n\n1. **The Three-Way Sponsor Agreement**: The corporate sponsor (HR/CEO) pays the fee, but the coachee is the client. Contracts must establish absolute confidentiality: the coach never reports confidential session details to the corporate sponsor, sharing only high-level development themes.\n2. **Coaching vs Therapy Disclaimers**: Coaching is future-focused developmental inquiry, not clinical psychotherapy or psychiatric counseling. Contracts must include explicit therapy disclaimers.\n3. **No Executive Decision Liability**: The coachee retains full legal responsibility for corporate decisions; the coach is not liable for business or financial outcomes."
    },
    {
      "id": "ec-contract-wording-clause",
      "title": "Model Executive Coaching Confidentiality and Therapy Disclaimer Clause",
      "body": "Include this mandatory ICF-aligned clause in every executive coaching agreement:\n\n> **Three-Way Confidentiality and Coaching vs Therapy Disclaimer Clause**:  \n> *\"Coaching is a professional, collaborative relationship focused on personal and executive development. Coaching does NOT constitute psychological counseling, mental health therapy, or psychiatric medical treatment. Client acknowledges that all commercial and operational decisions remain the sole responsibility of Client. All conversations between Coach and Coachee are held in strict professional confidence under the ICF Code of Ethics. In engagements funded by a Corporate Sponsor, Coach shall share only broad developmental milestones and goals agreed with Coachee; confidential disclosures made during coaching sessions shall not be disclosed to Corporate Sponsor.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Senior Executive Coach ($150,000 Target Take-Home Net)",
    "scenario": "An executive coach targeting $150,000 net personal income budgets 46 active weeks, 16 billable coaching hours/wk (736 annual session hours), $15,000 in assessment and accreditation overhead, 28% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$150,000",
      "annualOverhead": "$15,000",
      "billableHours": 736,
      "taxRate": "28%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$150,000 ÷ (1 - 0.28)",
        "amount": "$208,333",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($208,333 + $15,000 overhead) × 1.15",
        "amount": "$256,833",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Session Hourly Rate",
        "formula": "$256,833 ÷ 736 session hours",
        "amount": "$348.96",
        "note": "Executive coaching session rate"
      },
      {
        "label": "6-Month Executive Package (36 hrs)",
        "formula": "$348.96 × 36 hours",
        "amount": "$12,562",
        "note": "Includes 360 assessment"
      }
    ],
    "takeaway": "Because executive coaching is strictly capped at ~16 hours per week to maintain presence, a coach needs an hourly realization of ~$350/hour to clear $150k net."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Annual Capacity Across 6-Month Executive Packages",
    "scenario": "A coach structures their practice around 6-month corporate coaching packages priced at $15,000 per executive (delivering 24 coaching hours + 360 assessment). Managing 12 executives annually, what is the practice revenue?",
    "inputs": {
      "packagePrice": "$15,000",
      "annualExecutiveCount": 12
    },
    "steps": [
      {
        "label": "Annual Gross Practice Revenue",
        "formula": "$15,000 × 12 executives",
        "amount": "$180,000",
        "note": "Recurring corporate contracts"
      },
      {
        "label": "Annual Billable Session Hours",
        "formula": "12 executives × 24 hours",
        "amount": "288 session hours",
        "note": "Roughly 6 hours/week in session"
      },
      {
        "label": "Effective Hourly Realization",
        "formula": "$180,000 ÷ 288 hours",
        "amount": "$625.00/hr",
        "note": "Reflects high-leverage value"
      }
    ],
    "takeaway": "Twelve 6-month executive coaching packages at $15,000 generate $180,000 while requiring only 6 direct coaching hours per week."
  },
  "faqs": [
    {
      "question": "What is the average rate for an executive coach?",
      "answer": "Executive coaches typically charge between $250 and $600+ per hour. Six-month corporate coaching packages typically range from $10,000 to $30,000 per executive.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131151.htm"
    },
    {
      "question": "How is executive coaching different from therapy?",
      "answer": "Therapy focuses on mental health healing, trauma, and resolving past psychological patterns. Executive coaching is future-focused developmental inquiry aimed at leadership performance and strategic impact.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131151.htm"
    },
    {
      "question": "What happens to confidentiality when an employer pays for the coaching?",
      "answer": "Under the ICF Code of Ethics, strict confidentiality is maintained. The coach provides high-level development goals to the corporate sponsor, but never reveals private session discussions.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131151.htm"
    },
    {
      "question": "What is a 360-degree assessment in executive coaching?",
      "answer": "A 360-degree assessment collects structured feedback from the executive’s manager, peers, and direct reports to uncover blind spots and measure leadership competencies.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131151.htm"
    },
    {
      "question": "How many clients does an executive coach handle at one time?",
      "answer": "Most full-time executive coaches work with 8 to 15 executives at a time, capping 1-on-1 sessions at 12 to 15 hours per week to prevent emotional exhaustion.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes131151.htm"
    }
  ]
};

export default executiveCoachContent;
