import type { PageContent } from '../types.ts';

export const virtualAssistantContent: PageContent = {
  "slug": "virtual-assistant",
  "family": "freelance",
  "title": "Freelance Virtual Assistant Hourly & Retainer Calculator | FeeKit",
  "metaDescription": "Calculate freelance executive virtual assistant hourly and package rates grounded in BLS SOC 43-6011 data, operational tooling overhead, and 65% utilization.",
  "h1": "Freelance Virtual Assistant Rate Calculator & Retainer Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes436011.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 43-6011 (Executive Secretaries and Executive Administrative Assistants)."
  },
  "overview": "Freelance virtual assistants (VAs) provide executive administrative support, calendar orchestration, complex travel coordination, email inbox triage, and CRM data management for executive founders, busy professionals, and agency leaders. Under BLS SOC 43-6011 benchmarks, salaried executive administrative assistants earn a median annual wage of $67,730 ($32.56/hour). Operating as an independent executive VA commands rates between $35 and $70+ per hour (or $1,500 to $4,500/month retainers) to cover self-employment tax, enterprise password security tools, specialized CRM software, and non-billable client onboarding.",
  "sections": [
    {
      "id": "va-admin-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 43-6011) & Virtual Assistant Pricing Structures",
      "body": "Virtual assistants structure their client engagements across four models:\n\n1. **Monthly Hours Retainer ($1,500 – $4,000/mo)**: The industry standard: purchasing dedicated blocks of time (e.g., 20, 30, or 40 hours per month) with unused hours expiring at the end of each billing cycle.\n2. **Hourly Executive Support ($35 – $75/hr)**: Ad-hoc administrative assistance for fluctuating workloads, complex calendar reorganizations, or project-based research.\n3. **Executive Travel & Offsite Coordination ($1,500 – $3,500/event)**: Flat-fee event packages organizing executive leadership offsites, flight manifests, hotel blocks, and catering logistics.\n4. **Operations & System Setup Sprint ($2,000 – $5,000 flat)**: Specialized setup configuring client email inbox filters, Notion/Asana workspace templates, and automated scheduling funnels."
    },
    {
      "id": "va-admin-billable-utilization-drivers",
      "title": "Managing the Administrative Portfolio: The 1,300-Hour Benchmark",
      "body": "Virtual assistants operate at high operational utilization. An independent executive VA maintains **60% to 68% billable utilization** (1,250 to 1,350 annual billable hours across 3 to 5 clients):\n- **Portfolio Distribution (28 to 32 billable hours/week)**:\n  - Client A (Tech Founder): 10 hours/week (Calendar triage, travel, email filtering)\n  - Client B (Real Estate Broker): 8 hours/week (CRM data entry, client follow-ups)\n  - Client C (Management Consultant): 6 hours/week (Invoicing, travel itineraries)\n  - Client D (Author/Speaker): 6 hours/week (Speaking engagement logistics)\n- **Asynchronous Task Switching & Tooling Maintenance (8 hours/week non-billable)**: Managing 1Password vaults, testing booking software, and client time tracking.\n- **Client Onboarding & Business Administration (4 hours/week)**: Scoping prospective clients and preparing monthly invoice statements."
    },
    {
      "id": "va-admin-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($5,000 – $9,000/yr)",
      "body": "Virtual assistants maintain secure administrative and communication tools:\n\n- **Enterprise Password & Security Software ($300 – $600/yr)**: 1Password Teams or Bitwarden for secure, encrypted client credential delegation without sharing raw passwords.\n- **Scheduling, Calendar & Task Suites ($600 – $1,200/yr)**: Calendly, Motion, Notion, Asana, and Zapier automated workflow tooling.\n- **Dedicated VoIP Phone Lines & Messaging ($400 – $800/yr)**: OpenPhone or RingCentral dedicated business phone lines for client calls and SMS verification.\n- **Workstation & High-Speed Internet ($1,800 – $3,000/yr amortized)**: Fast dual-monitor computer workstation and high-speed fiber internet with mobile hotspot backup.\n- **Commercial Errors & Omissions Insurance ($1,000 – $1,800/yr)**: Crucial liability coverage protecting against administrative booking errors or accidental data leakage."
    },
    {
      "id": "va-admin-contracting-risks-boundaries",
      "title": "Contracting Risks: Emergency On-Call Creep, Credit Card Handling, and Expiration",
      "body": "Virtual assistant contracts require clear operational ground rules:\n\n1. **Unused Retainer Hours Expire**: Monthly retainer hours do not roll over to subsequent months; the retainer reserves the VA's capacity.\n2. **Financial Credit Card Liability**: VAs frequently book flights and purchase supplies. The client must supply corporate credit cards; VAs must never use personal credit cards or front cash.\n3. **Turnaround Time Expectations**: Standard requests require a 24- to 48-hour business turnaround. Immediate same-day emergency requests should incur rush rates."
    },
    {
      "id": "va-admin-contract-wording-clause",
      "title": "Model Virtual Assistant Retainer Scope and Card Authorization Clause",
      "body": "Protect your administrative practice with this standard clause:\n\n> **Monthly Retainer Capacity and Purchasing Authorization Clause**:  \n> *\"Monthly Retainer reserves a dedicated capacity of [HOURS] hours per billing cycle. Unused hours do not roll over to subsequent months and are non-refundable. Standard administrative tasks are performed during standard business hours (Monday–Friday, 9am–5pm) with an average 24-hour turnaround window. For travel bookings, office purchases, or event vendor deposits, Client shall provide a dedicated corporate credit card. Assistant shall not be authorized to front personal funds. Assistant exercises reasonable care in bookings; however, Client remains responsible for verifying final itinerary details.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Executive Virtual Assistant ($65,000 Target Take-Home Net)",
    "scenario": "An executive virtual assistant targeting $65,000 net personal income budgets 48 active weeks, 28 billable hours/wk (1,344 annual hours), $7,000 in software and security overhead, 24% taxes, and a 12% safety buffer.",
    "inputs": {
      "desiredNet": "$65,000",
      "annualOverhead": "$7,000",
      "billableHours": 1344,
      "taxRate": "24%",
      "buffer": "12%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$65,000 ÷ (1 - 0.24)",
        "amount": "$85,526",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($85,526 + $7,000 overhead) × 1.12",
        "amount": "$103,629",
        "note": "Includes 12% safety buffer"
      },
      {
        "label": "Calculated Hourly Rate",
        "formula": "$103,629 ÷ 1,344 billable hours",
        "amount": "$77.10",
        "note": "Executive VA hourly rate"
      },
      {
        "label": "Monthly 20-Hour Retainer",
        "formula": "$77.10 × 20 hours",
        "amount": "$1,542/mo",
        "note": "Standard executive package"
      }
    ],
    "takeaway": "To take home $65k net after funding 1Password, dedicated VoIP, and self-employment taxes across 1,344 hours, an executive VA needs to bill ~$75–$77/hour."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Building an $8,000/Month Multi-Client VA Practice",
    "scenario": "A virtual assistant manages four clients on dedicated 25-hour monthly retainers ($1,875/mo per client at $75/hr). What is the total business revenue and capacity load?",
    "inputs": {
      "clientCount": 4,
      "monthlyHoursPerClient": 25,
      "hourlyRate": "$75"
    },
    "steps": [
      {
        "label": "Monthly Billing Per Client",
        "formula": "25 hours × $75",
        "amount": "$1,875/mo",
        "note": "Retainer per executive"
      },
      {
        "label": "Total Monthly Business Turnover",
        "formula": "$1,875 × 4 clients",
        "amount": "$7,500/mo",
        "note": "Recurring monthly revenue"
      },
      {
        "label": "Annual Business Gross Turnover",
        "formula": "$7,500 × 12 months",
        "amount": "$90,000/yr",
        "note": "Solid independent practice"
      },
      {
        "label": "Weekly Billable Workload",
        "formula": "(25 hrs × 4) ÷ 4 weeks",
        "amount": "25 hrs/week",
        "note": "Leaves 15 hrs for admin & balance"
      }
    ],
    "takeaway": "Four 25-hour client retainers generate $90,000 annually while requiring only 25 billable hours per week."
  },
  "faqs": [
    {
      "question": "What is the average hourly rate for a freelance virtual assistant?",
      "answer": "US-based executive virtual assistants typically charge between $35 and $75 per hour. Monthly retainers for 20 to 30 hours of support typically range from $1,200 to $2,500 per month.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes436011.htm"
    },
    {
      "question": "Do unused virtual assistant retainer hours roll over?",
      "answer": "Industry standard contracts specify that retainer hours do not roll over to subsequent months because the retainer guarantees the assistant’s availability and capacity.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes436011.htm"
    },
    {
      "question": "How do virtual assistants securely handle client passwords?",
      "answer": "Professional VAs use team password managers (1Password Teams, Bitwarden) that allow clients to share login access securely without revealing raw passwords.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes436011.htm"
    },
    {
      "question": "Who pays for travel and office expenses booked by a VA?",
      "answer": "The client must always provide a dedicated corporate credit card for bookings. Professional virtual assistants do not front personal cash for client purchases.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes436011.htm"
    },
    {
      "question": "What is the difference between an admin VA and a specialized VA?",
      "answer": "An admin VA handles calendars, travel, and email. Specialized VAs handle bookkeeping, social media scheduling, podcast editing, or CRM administration and charge higher rates.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes436011.htm"
    }
  ]
};

export default virtualAssistantContent;
