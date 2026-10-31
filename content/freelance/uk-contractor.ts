import type { PageContent } from '../types.ts';

export const ukContractorContent: PageContent = {
  "slug": "uk-contractor",
  "family": "freelance",
  "title": "UK IT Contractor Day Rate Calculator (IR35 & VAT) | FeeKit",
  "metaDescription": "Calculate UK contractor day rates accounting for Inside vs Outside IR35 rules, employer NI (13.8%), apprenticeship levy, corporation tax (25%), and 220 billable days.",
  "h1": "UK IT Contractor Day Rate Calculator & IR35 Tax Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "HM Revenue & Customs (HMRC)",
    "url": "https://www.gov.uk/guidance/understanding-off-payroll-working-ir35",
    "citation": "HMRC Off-Payroll Working (IR35) Rules, Chapter 10 ITEPA 2003, and UK National Insurance Contributions Act 2024."
  },
  "overview": "Determining an accurate UK IT contractor day rate requires navigating the stark financial divide between Inside IR35 and Outside IR35 engagements. Operating outside IR35 through a Personal Service Company (PSC) allows contractors to optimize income through salary and dividends subject to the 25% main corporation tax rate. Conversely, an inside IR35 determination treats the contractor as an employee for tax purposes, subjecting the fee rate to employer National Insurance (13.8%), the 0.5% Apprenticeship Levy, employee NI, and PAYE income tax up to 45%. Under industry standards, an inside IR35 contract requires a 25% to 35% higher day rate—typically £600 to £850/day—to yield take-home pay equivalent to a £500/day outside IR35 role.",
  "sections": [
    {
      "id": "uk-ir35-status-and-pricing-models",
      "title": "Inside vs Outside IR35 Dynamics & Contractor Day-Rate Models",
      "body": "UK tech contractors structure day rates based on contractual IR35 determination:\n\n1. **Outside IR35 PSC Engagements (£450 – £750/day)**: The contractor operates as a genuine independent business with right of substitution, absence of mutuality of obligation (MOO), and control over working methods. Income is paid gross to the PSC without payroll deductions, enabling tax planning across low salary, dividend distributions, and legitimate business expenses.\n2. **Inside IR35 Umbrella Contracts (£600 – £950/day)**: Deemed employment under HMRC rules. The fee-payer (or umbrella company) deducts employer National Insurance (13.8%), Apprenticeship Levy (0.5%), umbrella administration margins (£20–£35/wk), followed by employee NI and PAYE income tax. Contractors must negotiate an uplifted rate to prevent take-home reductions of up to 30%.\n3. **Fixed-Price Milestone Deliverables (£5,000 – £20,000/sprint)**: Strong indicator of outside IR35 status where the PSC commits to delivering an agreed software deliverable for a fixed fee, absorbing financial risk for defects and rework.\n4. **Statement of Work (SOW) Consultancy**: Engaging through defined output statements rather than time-and-materials labor supply, protecting both client and contractor from off-payroll tax liabilities."
    },
    {
      "id": "uk-billable-days-utilization",
      "title": "Realistic UK Billable Days: The 220-Day Annual Benchmark",
      "body": "A standard calendar year contains 260 working weekdays. For a UK contractor, expecting to bill 260 days leads to severe income miscalculations.\n\nRealistic UK contractor utilization tops out at **215 to 225 billable days per year** (averaging 44 active working weeks at 5 days per week):\n- **Bank Holidays & Annual Leave (28 – 33 days)**: UK statutory holiday entitlement is 28 days (8 public bank holidays plus 20 personal vacation days). Contractors receive zero paid holiday.\n- **Contract Gaps & Bench Time (10 – 15 days)**: Transition intervals between contracts while vetting new roles, completing security clearances (BPSS/SC), and negotiating statements of work.\n- **Continuing Professional Development & Compliance (5 – 7 days)**: Time dedicated to PSC accounting, HMRC VAT returns, confirmation statements with Companies House, and acquiring cloud certifications."
    },
    {
      "id": "uk-contractor-overhead-breakdown",
      "title": "Role-Specific PSC Operating Overhead (£6,000 – £12,000/yr)",
      "body": "Maintaining a compliant UK contracting business incurs statutory and operational expenses:\n\n- **Specialist Contractor Accounting & FreeAgent (£1,500 – £2,400/yr)**: Monthly accounting retainers covering payroll, quarterly VAT reconciliation under the standard scheme, and annual CT600 corporation tax filings.\n- **Business Insurances (£600 – £1,200/yr)**: Mandatory commercial coverage including Professional Indemnity (£1m–£5m limit), Public Liability (£5m limit), and Employers Liability insurance.\n- **Hardware & Technical Software (£2,000 – £3,500/yr)**: Workstation hardware, IDE subscriptions, secure VPN tunnels, and test device provisioning.\n- **IR35 Contract Reviews & Legal Cover (£300 – £600/yr)**: Professional contract status assessments (e.g. Qdos, Kingsley Napley) and HMRC tax investigation insurance.\n- **Companies House & Banking (£100 – £300/yr)**: Annual confirmation statement fees and business banking account charges."
    },
    {
      "id": "uk-contracting-risks-sub-clause",
      "title": "Contracting Risks: Substitution Rejection, Scope Creep, and Payment Delays",
      "body": "UK contractors must actively mitigate critical operational hazards:\n\n1. **Fictional Right of Substitution**: HMRC actively challenges IR35 substitution clauses that exist only on paper. The PSC must retain genuine contractual capability to send a qualified substitute without client unreasonable veto.\n2. **Mutuality of Obligation (MOO)**: Contracts must clarify that the client has no obligation to provide continuous ongoing work and the contractor has no obligation to accept future tasks outside the agreed scope.\n3. **Public Sector Off-Payroll Shifts**: When contracting with public sector bodies (NHS, MoD, HMRC), blanket inside IR35 determinations remain prevalent, necessitating strict gross fee rate negotiations."
    },
    {
      "id": "uk-contract-wording-clause",
      "title": "Model IR35 Scope and Substitution Clause for UK Engagements",
      "body": "Include the following clause in your Master Services Agreement (MSA) with recruitment agencies or direct clients:\n\n> **Independent Contractor and Right of Substitution Clause**:  \n> *\"The Company (Contractor) is engaged by the Client as an independent business and not as an employee, worker, or agent. The Company reserves the right, at its own discretion and expense, to assign a suitably qualified and skilled substitute to perform the Services, subject only to the Client's reasonable verification of qualifications. The Client acknowledges there is no mutuality of obligation beyond the defined deliverables in the Schedule of Work. All invoices are payable within 30 days of receipt and are subject to UK VAT at the prevailing statutory rate.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Senior Cloud Engineer (£550/day Outside IR35 vs £750 Inside IR35)",
    "scenario": "A senior DevOps engineer targets £80,000 in net personal income. They evaluate an outside IR35 contract at £550/day versus an inside IR35 role at £725/day over 220 billable days.",
    "inputs": {
      "targetTakeHome": "£80,000",
      "billableDays": 220,
      "outsideRate": "£550/day",
      "insideRate": "£725/day",
      "pscOverhead": "£8,000"
    },
    "steps": [
      {
        "label": "Outside IR35 Gross Billing",
        "formula": "220 days × £550",
        "amount": "£121,000",
        "note": "PSC gross commercial revenue"
      },
      {
        "label": "PSC Overhead & Corporation Tax",
        "formula": "£8,000 costs + 25% CT on net",
        "amount": "£36,250",
        "note": "Operating costs and corporation tax"
      },
      {
        "label": "Outside IR35 Net Distribution",
        "formula": "Low salary + dividend distribution",
        "amount": "£84,750",
        "note": "Exceeds £80k target comfortably"
      },
      {
        "label": "Inside IR35 Gross Billing",
        "formula": "220 days × £725",
        "amount": "£159,500",
        "note": "Total contract fee fund"
      },
      {
        "label": "Employer Deductions (NI 13.8% + Levy)",
        "formula": "£159,500 × ~14.3%",
        "amount": "-£22,800",
        "note": "Deducted before taxable payroll"
      },
      {
        "label": "Employee PAYE & NI (Higher Rate)",
        "formula": "PAYE + Employee NI",
        "amount": "-£52,400",
        "note": "Income tax up to 45%"
      },
      {
        "label": "Inside IR35 Net Take-Home",
        "formula": "£159,500 - deductions",
        "amount": "£84,300",
        "note": "Requires £725/day to match £550 outside"
      }
    ],
    "takeaway": "Because inside IR35 umbrella deductions consume roughly 47% of gross fees, a contractor needs at least £725/day inside IR35 to achieve the same net pay as £550/day outside IR35."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Minimum Viable Day Rate from Target Net Salary (£70,000)",
    "scenario": "A UK frontend contractor requires £70,000 net take-home pay through their PSC. What is the required outside IR35 day rate across 215 billable days with £7,500 overhead?",
    "inputs": {
      "targetNet": "£70,000",
      "annualOverhead": "£7,500",
      "billableDays": 215,
      "effectiveTaxRate": "24%"
    },
    "steps": [
      {
        "label": "Gross Retained Profit Needed",
        "formula": "£70,000 ÷ (1 - 0.24)",
        "amount": "£92,105",
        "note": "Post-tax dividend requirement"
      },
      {
        "label": "Total PSC Revenue Target",
        "formula": "£92,105 + £7,500 overhead",
        "amount": "£99,605",
        "note": "Annual business turnover required"
      },
      {
        "label": "Calculated Minimum Day Rate",
        "formula": "£99,605 ÷ 215 billable days",
        "amount": "£463.28",
        "note": "Rounded to £475/day standard market rate"
      }
    ],
    "takeaway": "To take home £70,000 net outside IR35, the contractor must bill at least £475/day, generating £102,125 across 215 active working days."
  },
  "faqs": [
    {
      "question": "What is the difference between Inside and Outside IR35?",
      "answer": "Outside IR35 means you are operating as an independent business, paying corporation tax on company profits and withdrawing via salary and dividends. Inside IR35 treats you as an employee for tax purposes, subjecting fees to employer and employee NI and PAYE tax.",
      "sourceUrl": "https://www.gov.uk/guidance/understanding-off-payroll-working-ir35"
    },
    {
      "question": "How much higher should an Inside IR35 day rate be?",
      "answer": "An inside IR35 day rate should typically be 25% to 35% higher than an equivalent outside IR35 rate to compensate for employer National Insurance (13.8%), Apprenticeship Levy (0.5%), and the loss of dividend tax efficiencies.",
      "sourceUrl": "https://www.gov.uk/guidance/understanding-off-payroll-working-ir35"
    },
    {
      "question": "How many days does a UK contractor typically bill per year?",
      "answer": "A realistic benchmark is 215 to 225 billable days per year, accounting for 28 days of public and personal holidays, training downtime, and 2 to 3 weeks of gap between contracts.",
      "sourceUrl": "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2024-to-2025"
    },
    {
      "question": "Does a UK contractor need to register for VAT?",
      "answer": "Yes, if your taxable turnover exceeds the UK statutory threshold of £90,000 in any rolling 12-month period, mandatory VAT registration is required at the standard 20% rate.",
      "sourceUrl": "https://www.gov.uk/vat-registration-thresholds"
    },
    {
      "question": "What insurances are required for UK IT contractors?",
      "answer": "Most UK client contracts mandate Professional Indemnity insurance (£1m to £5m), Public Liability insurance (£5m), and Employers Liability insurance if employing others.",
      "sourceUrl": "https://www.gov.uk/guidance/understanding-off-payroll-working-ir35"
    }
  ]
};

export default ukContractorContent;
