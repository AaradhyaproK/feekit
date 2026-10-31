import type { PageContent } from '../types.ts';

export const cybersecurityAnalystContent: PageContent = {
  "slug": "cybersecurity-analyst",
  "family": "freelance",
  "title": "Freelance Cybersecurity Consultant Rate Calculator | FeeKit",
  "metaDescription": "Calculate freelance cybersecurity and pentesting consultant rates grounded in BLS SOC 15-1212 data, security lab overhead, E&O liability, and 55% billable utilization.",
  "h1": "Freelance Cybersecurity Consultant Rate Calculator & Security Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes151212.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 15-1212 (Information Security Analysts)."
  },
  "overview": "Freelance cybersecurity consultants perform penetration testing, vulnerability assessments, cloud security hardening, and SOC2/ISO 27001 compliance auditing. Under BLS SOC 15-1212 benchmarks, salaried information security analysts earn a median annual wage of $120,360 ($57.87/hour), with senior security specialists in enterprise defense exceeding $175,000 base. Operating as an independent cybersecurity consultant commands premium rates between $130 and $250+ per hour, reflecting the rigorous legal rules of engagement, specialized penetration testing toolchains, isolated hardware labs, and high commercial cyber liability insurance.",
  "sections": [
    {
      "id": "csa-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 15-1212) & Cybersecurity Pricing Models",
      "body": "Cybersecurity consultants structure their engagements across four primary models:\n\n1. **Strategic Hourly Consulting ($135 – $250/hr)**: Common for security architecture reviews, incident triage advisory, and vendor security risk assessments.\n2. **Fixed-Scope Penetration Testing ($8,000 – $28,000/audit)**: Standard for web application, API, and network penetration tests: Rules of Engagement & Threat Modeling (Phase 1), Active Exploitation & Vulnerability Scanning (Phase 2), and Executive Remediation Report (Phase 3).\n3. **SOC2 / ISO 27001 Readiness Retainer ($5,000 – $12,000/mo)**: Ongoing advisory guiding startups through compliance gap assessments, policy drafting, and auditor evidence collection.\n4. **Virtual CISO (vCISO) Advisory ($6,000 – $15,000/mo)**: Executive security leadership overseeing incident response plans, employee security training, and executive board reporting."
    },
    {
      "id": "csa-billable-utilization-drivers",
      "title": "Realistic Billable Utilization: The 1,050-Hour Security Reality",
      "body": "Cybersecurity consulting requires meticulous documentation and legal preparation. A consultant operates at **50% to 58% billable utilization** (1,000 to 1,150 annual billable hours):\n- **Rules of Engagement & Authorization Approvals (15% of time)**: Drafting strict permission-to-test agreements, confirming IP ranges, and establishing out-of-bounds systems.\n- **Remediation Report Writing (18% of time)**: Documenting reproduction steps, assigning CVSS scores, and providing code remediation guidance.\n- **Vulnerability Research & Lab Testing (15% of time)**: Testing new CVE exploits, updating testing scripts, and maintaining isolated lab environments.\n- **Active Penetration Testing (50% to 55% billable)**: Executing manual penetration tests, source code audits, and social engineering tests."
    },
    {
      "id": "csa-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($14,000 – $26,000/yr)",
      "body": "Independent security consultants maintain a heavily isolated technical stack:\n\n- **Commercial Security Tooling & Licenses ($4,000 – $8,000/yr)**: Burp Suite Professional, Nessus Professional, Cobalt Strike, Metasploit Pro, and Shodan enterprise subscriptions.\n- **Air-Gapped & Disposable Lab Hardware ($3,000 – $5,500/yr)**: Dedicated penetration testing laptops (ThinkPad/Framework), hardware network taps, and external drive arrays.\n- **Cyber Liability & Errors & Omissions Insurance ($4,000 – $8,000/yr)**: Critical high-limit commercial liability policies specifically underwritten for penetration testing and incident response.\n- **Certifications & Training ($2,000 – $4,000/yr)**: Maintaining professional certifications (OSCP, CISSP, CEH, AWS Security Specialty) and attending security summits (DEF CON, Black Hat).\n- **Encrypted Communication & Legal Retainers ($1,500 – $3,000/yr)**: Encrypted email, secure document portals, and specialized legal counsel for reviewing testing agreements."
    },
    {
      "id": "csa-contracting-risks-roe",
      "title": "Contracting Risks: Rules of Engagement, Accidental Outages, and CFAA",
      "body": "Cybersecurity testing carries severe legal exposure without airtight agreements:\n\n1. **Computer Fraud and Abuse Act (CFAA) Compliance**: You must hold written, signed authorization (\"Permission to Attack\") from an authorized corporate officer explicitly permitting security testing.\n2. **Accidental Service Disruption Disclaimers**: Active scanning or exploit payloads can occasionally crash legacy databases or trigger cloud firewall blocks. Contracts must hold the consultant harmless for foreseeable testing downtime.\n3. **Confidentiality & Zero-Day Disclosure**: Strict NDA terms governing how discovered vulnerabilities are handled, ensuring the client has a 30- to 90-day window to remediate prior to public disclosure."
    },
    {
      "id": "csa-contract-wording-clause",
      "title": "Model Rules of Engagement and Authorization Clause",
      "body": "Mandate this authorization clause in every penetration testing contract:\n\n> **Formal Authorization and Rules of Engagement (ROE) Clause**:  \n> *\"Client warrants that it is the legal owner or authorized licensee of all IP addresses, web domains, and cloud environments specified in the Scope of Work (Schedule A). Client hereby grants Consultant explicit legal authorization under the Computer Fraud and Abuse Act (18 U.S.C. § 1030) to perform the agreed security testing activities. Consultant shall exercise professional care to minimize service disruptions; however, Client acknowledges that security testing inherently carries risks of temporary service degradation. Consultant shall not be liable for system downtime, data corruption, or operational interruptions resulting from testing within the authorized scope.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Senior Penetration Tester ($140,000 Target Take-Home Net)",
    "scenario": "A senior cybersecurity consultant targeting $140,000 net personal income budgets 48 weeks, 22 billable hours/wk (1,056 annual hours), $18,000 in software tooling and high-limit cyber insurance, 28% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$140,000",
      "annualOverhead": "$18,000",
      "billableHours": 1056,
      "taxRate": "28%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$140,000 ÷ (1 - 0.28)",
        "amount": "$194,444",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($194,444 + $18,000 overhead) × 1.15",
        "amount": "$244,311",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Hourly Rate",
        "formula": "$244,311 ÷ 1,056 billable hours",
        "amount": "$231.36",
        "note": "Senior security consultant rate"
      },
      {
        "label": "Standard Web App Pentest Fee",
        "formula": "$231.36 × 60 hours",
        "amount": "$13,882",
        "note": "Standard 2-week pentest package"
      }
    ],
    "takeaway": "To take home $140k net after funding commercial scanning tools and high-limit cyber liability insurance, a security consultant should charge roughly $230/hour."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Fixed-Fee API Penetration Test Pricing",
    "scenario": "A consultant scopes an API security penetration test requiring 45 dedicated hours. At an effective rate of $210/hr with $500 scanner infrastructure, what is the fixed contract price?",
    "inputs": {
      "laborHours": 45,
      "hourlyRate": "$210",
      "toolExpenses": "$500"
    },
    "steps": [
      {
        "label": "Core Penetration Testing Labor",
        "formula": "45 hours × $210",
        "amount": "$9,450",
        "note": "Testing & reporting labor"
      },
      {
        "label": "Scanning Infrastructure Cost",
        "formula": "Cloud scanner instances",
        "amount": "$500",
        "note": "Pass-through testing infrastructure"
      },
      {
        "label": "Total Invoiced Pentest Price",
        "formula": "$9,450 + $500",
        "amount": "$9,950",
        "note": "Complete API pentest package"
      }
    ],
    "takeaway": "A complete 45-hour API penetration test with comprehensive reporting calculates to a $9,950 fixed contract fee."
  },
  "faqs": [
    {
      "question": "What is the average hourly rate for a freelance cybersecurity consultant?",
      "answer": "Freelance cybersecurity and penetration testing consultants typically charge between $130 and $250 per hour, with specialized principal security architects commanding $275 to $350+ per hour.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151212.htm"
    },
    {
      "question": "How much does a freelance web application penetration test cost?",
      "answer": "A professional web application or API penetration test typically costs between $8,000 and $25,000, depending on the number of endpoints, role-based access tiers, and compliance requirements.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151212.htm"
    },
    {
      "question": "Why is cybersecurity consultant overhead so high?",
      "answer": "Consultants must pay for expensive commercial security software (Burp Suite Pro, Nessus, Cobalt Strike), maintain isolated physical lab hardware, and carry high-limit cyber liability insurance.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151212.htm"
    },
    {
      "question": "What legal document is mandatory before starting a penetration test?",
      "answer": "A signed Rules of Engagement (ROE) and formal Authorization Letter explicitly granting permission under the Computer Fraud and Abuse Act (CFAA) is mandatory prior to conducting any testing.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151212.htm"
    },
    {
      "question": "What is a Virtual CISO (vCISO) and how is it priced?",
      "answer": "A vCISO provides strategic security leadership and audit readiness on a fractional retainer basis, typically charging between $6,000 and $15,000 per month per client.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes151212.htm"
    }
  ]
};

export default cybersecurityAnalystContent;
