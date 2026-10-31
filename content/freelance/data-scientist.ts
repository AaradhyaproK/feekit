import type { PageContent } from '../types.ts';

export const dataScientistContent: PageContent = {
  slug: 'data-scientist',
  family: 'freelance',
  title: 'Freelance Data Scientist Hourly & Project Rate Calculator | FeeKit',
  metaDescription:
    'Calculate freelance data scientist and ML consultant hourly rates grounded in BLS SOC 15-2051 wage data, GPU compute overhead, self-employment taxes, and 60% billable utilization.',
  h1: 'Freelance Data Scientist Rate Calculator & Compensation Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)',
    url: 'https://www.bls.gov/oes/current/oes152051.htm',
    citation: 'BLS SOC Code 15-2051 (Data Scientists), May 2023 / 2024 Survey Releases.',
  },
  overview:
    'Calculating an accurate rate as a freelance data scientist or machine learning consultant requires accounting for specialized GPU compute clusters, data cleaning overhead, statistical model risk, and self-employment tax (15.3% SECA). While full-time salaried data scientists earn a median base salary of $108,020 to $136,620 under BLS SOC 15-2051 benchmarks, an independent consultant must bill between $100 and $225+ per hour to cover heavy cloud infrastructure costs, commercial liability insurance, and non-billable model research.',
  sections: [
    {
      id: 'bls-benchmarks-and-pricing-models-data-scientist',
      title: 'Industry Benchmarks (SOC 15-2051) & Data Science Pricing Models',
      body: `Bureau of Labor Statistics data places national mean annual compensation for data scientists at **$119,040**, with top-quartile machine learning engineers and AI specialists in major metropolitan tech hubs commanding upwards of **$165,000** in base compensation.

Independent data scientists structure client compensation across four core engagement models:

1. **Hourly Consulting ($100 – $220/hr)**: Effective for exploratory data analysis (EDA), statistical model auditing, algorithm architecture reviews, and ad-hoc executive advisory.
2. **Fixed-Phase Deliverables ($7,500 – $30,000 per phase)**: Applied to concrete analytical milestones: Data Cleaning & Feature Engineering $\\rightarrow$ Baseline Model Training $\\rightarrow$ Validation & Hyperparameter Tuning $\\rightarrow$ Production Inference Pipeline Deployment.
3. **Monthly Retainer ($6,500 – $15,000/mo)**: Common for startups and enterprises needing ongoing machine learning stewardship, model drift monitoring, pipeline maintenance, and quarterly re-training.
4. **Value-Based Predictive Analytics**: Appropriate when building models with direct revenue impact (e.g., dynamic pricing algorithms, customer churn prevention models, or fraud detection systems). If a churn prediction model saves an enterprise $500,000 annually, charging a $50,000 to $80,000 project fee aligns with ROI.`,
    },
    {
      id: 'billable-utilization-drivers-data-scientist',
      title: 'Billable Utilization: The 1,150-Hour Analytical Reality',
      body: `Data science involves heavy exploratory research, reading academic whitepapers, and troubleshooting model convergence issues that cannot be invoiced directly to clients. Expecting to bill 2,080 hours per year leads directly to burnout or low-quality deliverables.

A sustainable freelance data science practice operates at **55% to 65% billable utilization**, representing roughly **1,150 to 1,250 billable hours per year** (24–26 billable hours per week over 48 active weeks). The remaining 35% to 45% of working hours is required for essential non-billable overhead:
- **Model Research & Paper Implementation**: Reading arXiv papers, evaluating updated neural architectures, and benchmarking open-source LLM/vision models.
- **Data Pipeline Environment Maintenance**: Managing Conda environments, CUDA drivers, JupyterHub staging environments, and containerized Docker images.
- **Client Discovery & Feasibility Assessments**: Evaluating raw client datasets, assessing statistical signal-to-noise ratios, and scoping problem feasibility.
- **Business Administration**: Invoicing, contract reviews, expense tracking, and quarterly estimated tax preparation.`,
    },
    {
      id: 'data-scientist-overhead-items',
      title: 'Role-Specific Technical Overhead Line Items ($10,000 – $18,000/yr)',
      body: `Data science consulting carries substantial computing, tooling, and data infrastructure expenses:

- **Cloud GPU Compute & Sandboxes ($3,000 – $6,000/yr)**: GPU compute instances (AWS EC2 p4/g5, RunPod, Lambda Labs), managed ML platforms (SageMaker, Vertex AI), and staging Snowflake or Databricks sandbox accounts.
- **Data Tooling & Experiment Tracking ($1,500 – $3,000/yr)**: Subscriptions to Weights & Biases, Comet ML, Dataiku, Hex, and professional Python IDEs (PyCharm Professional).
- **GPU Workstation Lifecycle ($3,000 – $5,000/yr)**: High-performance local workstation equipped with NVIDIA RTX GPUs with high VRAM (24GB+) for local prototyping, testing, and debugging before spinning up expensive cloud clusters.
- **Commercial Errors & Omissions Insurance ($1,500 – $2,500/yr)**: Critical liability coverage protecting against client disputes over model performance or data handling.
- **Accounting and Tax Preparation ($1,500 – $2,500/yr)**: CPA tax prep for corporate Schedule C / S-Corp filings and contract legal reviews.`,
    },
    {
      id: 'contracting-risks-scope-creep-data-scientist',
      title: 'Contracting Risks: Data Quality, Model Hallucinations, and PII Compliance',
      body: `Data science contracts carry unique technical and legal risks that must be isolated in written agreements:

1. **Uncleaned or Defective Client Datasets**: Clients often promise "clean data" that turns out to have massive missing values, corrupted timestamps, or zero signal. Contracts must include a data quality feasibility clause allowing the consultant to re-scope or bill hourly for unexpected data cleaning.
2. **Probabilistic vs. Deterministic Realities**: Unlike traditional software, machine learning models are probabilistic. Contracts must explicitly disclaim guarantees of specific model accuracy percentages or revenue outcomes.
3. **Data Privacy & PII Compliance**: Handling client customer records exposes consultants to HIPAA, GDPR, or CCPA regulations. Contracts must stipulate that the client is strictly responsible for anonymizing data and removing Personally Identifiable Information (PII) before transmission.`,
    },
    {
      id: 'proposal-invoice-wording-data-scientist',
      title: 'Standard Proposal Scope Language for Data Science Contracts',
      body: `Include this protective language in data science and machine learning proposals:

> *"Scope of Deliverables: Services include exploratory data analysis, feature engineering, and model training as specified in the Analytical Proposal dated [Date]. Deliverables are contingent upon Client providing accessible, anonymized, and representative training datasets free of unredacted PII. Because statistical algorithms operate probabilistically, Consultant makes no express guarantee of specific predictive accuracy or business outcomes. Out-of-scope services include extensive manual data labeling, 24/7 production pipeline on-call monitoring, and cloud GPU compute charges, which will be billed directly to Client."*`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Machine Learning Consultant Targeting $125,000 Net Annual Income',
    scenario:
      'A freelance data science consultant aims for $125,000 net personal income, incurs $14,000 in annual GPU compute, software, and hardware overhead, budgets 29% for combined federal/state/SECA taxes, and plans for 1,150 annual billable hours (24 hrs/week over 48 weeks) with a 15% safety buffer.',
    inputs: {
      targetNetSalary: '$125,000.00',
      annualOverhead: '$14,000.00',
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
        formula: '$176,056.34 + $14,000.00',
        amount: '$190,056.34',
        note: 'Covers cloud GPU compute, tooling, and insurance.',
      },
      {
        label: 'Apply 15% Business Risk & Downtime Buffer',
        formula: '$190,056.34 × 1.15',
        amount: '$218,564.79',
        note: 'Protects against contract gaps between analytical projects.',
      },
      {
        label: 'Calculate Required Baseline Hourly Rate',
        formula: '$218,564.79 ÷ 1,150 billable hours',
        amount: '$190.06',
        note: 'Mathematically derived hourly billing minimum.',
      },
      {
        label: 'Recommended Commercial Market Rate',
        formula: 'Rounded to standard commercial tier',
        amount: '$190.00 / hour ($1,520 / 8-hr day)',
        note: 'Standard commercial rate for senior ML and data consultants.',
      },
    ],
    takeaway:
      'To earn $125,000 net take-home income as a freelance data scientist, billing below $120/hour fails to account for self-employment taxes, high GPU compute costs, and realistic 1,150 billable hours. Quoting at least $190/hour achieves sustainable income.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Auditing Take-Home Pay from a $130/Hour Billing Rate',
    scenario:
      'A data science consultant bills $130.00/hour across 1,150 annual billable hours ($149,500 gross revenue) with $14,000 in operating overhead and 29% average tax liability.',
    inputs: {
      hourlyBillingRate: '$130.00',
      annualBillableHours: '1,150 hours',
      annualOperatingExpenses: '$14,000.00',
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
        formula: '$149,500.00 − $14,000.00',
        amount: '$135,500.00',
        note: 'Schedule C net business profit.',
      },
      {
        label: 'Deduct Income & SECA Taxes (29%)',
        formula: '$135,500.00 × 0.29',
        amount: '$39,295.00',
        note: 'Estimated federal, state, and self-employment taxes.',
      },
      {
        label: 'Net Personal Annual Take-Home Income',
        formula: '$135,500.00 − $39,295.00',
        amount: '$96,205.00',
        note: 'True disposable income ($8,017/month).',
      },
    ],
    takeaway:
      'Billing $130/hr generates $149,500 in gross revenue but yields $96,205 in actual take-home pay after $14,000 in compute/tools and $39,295 in taxes, illustrating why consultants must price according to post-tax net income.',
  },
  faqs: [
    {
      question: 'What is the standard hourly rate for a freelance data scientist?',
      answer:
        'Freelance data scientist rates typically range from $85 to $125 per hour for data analytics and basic modeling, and $150 to $230+ per hour for senior machine learning engineers and deep learning specialists with expertise in custom model training, NLP, and production ML pipelines.',
    },
    {
      question: 'Who should pay for cloud GPU compute costs during machine learning projects?',
      answer:
        'Cloud GPU compute (AWS EC2, RunPod, Lambda Labs, GCP) should always be paid directly by the client via their corporate cloud account or billed as a direct pass-through expense. Freelancers should never absorb open-ended model training compute bills into a fixed fee.',
    },
    {
      question: 'How do you handle messy or uncleaned client datasets?',
      answer:
        'Include a data validation contingency clause in your contract stating that estimates assume access to structured, clean data. If data discovery reveals missing values or unformatted files, provide a separate statement of work or bill hourly for data cleaning before model training begins.',
    },
    {
      question: 'What software and hardware expenses should be budgeted in a data science practice?',
      answer:
        'Key expenses include cloud GPU compute sandboxes ($3,000–$6,000/yr), experiment tracking software like Weights & Biases ($1,500–$3,000/yr), high-performance local GPU workstations ($3,000–$5,000/yr), commercial liability insurance ($1,500–$2,500/yr), and CPA tax preparation ($1,500–$2,500/yr).',
    },
    {
      question: 'How many hours per week can a freelance data scientist realistically bill?',
      answer:
        'Between 22 and 26 billable hours per week is the realistic sustainable standard (translating to roughly 1,150 to 1,250 annual billable hours over 48 weeks). Paper research, pipeline debugging, client discovery calls, and business administration consume the remainder.',
    },
  ],
};

export default dataScientistContent;

