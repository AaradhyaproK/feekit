export interface ComparisonFeature {
  feature: string;
  toolA: string;
  toolB: string;
  notes: string;
}

export interface ComparisonFaq {
  question: string;
  answer: string;
}

export interface SoftwareComparison {
  slug: string;
  title: string;
  toolAName: string;
  toolBName: string;
  description: string;
  bestForToolA: string;
  bestForToolB: string;
  overviewToolA: string;
  overviewToolB: string;
  keyDifferences: string[];
  features: ComparisonFeature[];
  evaluationQuestions: string[];
  faqs: ComparisonFaq[];
  relatedCalculators: Array<{ label: string; href: string }>;
}

export const COMPARISONS_DATA: Record<string, SoftwareComparison> = {
  'freshbooks-vs-quickbooks': {
    slug: 'freshbooks-vs-quickbooks',
    title: 'FreshBooks vs QuickBooks Online: Small Business Accounting Comparison',
    toolAName: 'FreshBooks',
    toolBName: 'QuickBooks Online',
    description:
      'A factual, side-by-side comparison of FreshBooks and QuickBooks Online for freelancers, consultants, service businesses, and growing companies.',
    bestForToolA:
      'Freelancers, service professionals, consultants, and agencies focused on client time billing, project tracking, and streamlined invoicing.',
    bestForToolB:
      'Retailers, product-based companies, businesses with inventory, and organizations whose external CPAs require QuickBooks desktop or QBO files.',
    overviewToolA:
      'FreshBooks is designed around the service professional workflow: time tracking, milestone project billing, professional PDF client invoices, and automated follow-ups.',
    overviewToolB:
      'QuickBooks Online is an industry-standard double-entry ledger platform offering extensive third-party accounting integrations, multi-entity consolidation, and advanced inventory tracking.',
    keyDifferences: [
      'FreshBooks structures entry plans by active billable client count; QuickBooks structures plans by user seats and bookkeeping feature tiers.',
      'FreshBooks specializes in native project time tracking and billable hours conversion; QuickBooks offers deeper inventory assembly and purchase order management.',
      'QuickBooks has broader accountant ecosystem familiarity in North America; FreshBooks offers a simpler onboarding experience for non-accountants.',
    ],
    features: [
      {
        feature: 'Primary Workflow Orientation',
        toolA: 'Service time billing, project expense tracking, client invoicing',
        toolB: 'General ledger, multi-account banking reconciliation, inventory',
        notes: 'Service businesses often prefer FreshBooks; product businesses often require QuickBooks.',
      },
      {
        feature: 'Time Tracking',
        toolA: 'Built-in desktop & mobile timer with 1-click invoice conversion',
        toolB: 'Available on mid/higher plans or via QuickBooks Time add-on',
        notes: 'FreshBooks includes time tracking across all core tiers.',
      },
      {
        feature: 'Inventory Management',
        toolA: 'Basic tracking suitable for light digital or service items',
        toolB: 'Advanced inventory tracking with reorder points and landed cost',
        notes: 'Physical retail sellers generally require QuickBooks Online Plus or Advanced.',
      },
      {
        feature: 'Accountant Collaboration',
        toolA: 'Accountant portal access with standard financial reports',
        toolB: 'Native QuickBooks Accountant portal used by most US/UK firms',
        notes: 'Confirm which format your tax preparer prefers before deciding.',
      },
    ],
    evaluationQuestions: [
      'Do you primarily sell professional hours and deliverables or physical products?',
      'Does your external accountant or tax preparer mandate QuickBooks files?',
      'How many active clients do you invoice each month?',
    ],
    faqs: [
      {
        question: 'Which is better for freelancers: FreshBooks or QuickBooks?',
        answer: 'FreshBooks is generally more straightforward for freelancers and solo service providers due to its intuitive client invoicing, native time tracking, and minimal accounting overhead. QuickBooks Online is better suited for businesses that manage physical inventory, need complex purchase orders, or work with external CPAs who mandate QuickBooks desktop or QBO files.',
      },
      {
        question: 'Can my accountant access FreshBooks if they are accustomed to QuickBooks?',
        answer: 'Yes. FreshBooks provides standard double-entry accounting reports (General Ledger, Trial Balance, Profit and Loss, and Balance Sheet) and includes a dedicated Accountant Access portal so your CPA can review entries, adjust journals, and export year-end tax data.',
      },
      {
        question: 'How do FreshBooks and QuickBooks differ in pricing structure?',
        answer: 'FreshBooks prices its entry-level plans primarily by the number of active billable clients you invoice (e.g., 5 clients on the Lite plan), with add-on fees for extra team members. QuickBooks Online tiers its plans based on bookkeeping feature sets (e.g., Simple Start vs. Plus for inventory and project tracking) and user seat limits.',
      },
    ],
    relatedCalculators: [
      { label: 'Free Invoice Generator', href: '/invoice-generator' },
      { label: 'Freelance Rate Calculator', href: '/tools/freelance-rate-calculator' },
      { label: 'Profit Margin Calculator', href: '/tools/profit-margin-calculator/standard' },
    ],
  },
  'freshbooks-vs-wave': {
    slug: 'freshbooks-vs-wave',
    title: 'FreshBooks vs Wave: Small Business Accounting & Invoicing Comparison',
    toolAName: 'FreshBooks',
    toolBName: 'Wave Accounting',
    description:
      'Compare FreshBooks and Wave Accounting for freelancers, sole proprietors, and early-stage small businesses evaluating software costs and features.',
    bestForToolA:
      'Established freelancers, consultants, and agencies that require built-in project time tracking, automated late payment fees, and project profitability.',
    bestForToolB:
      'Solo freelancers, bootstrapped startups, and side-hustlers seeking free base invoicing and double-entry accounting with optional pay-per-use payments.',
    overviewToolA:
      'FreshBooks is a paid subscription service built for billable client management, project milestones, automated reminder workflows, and comprehensive double-entry reporting.',
    overviewToolB:
      'Wave provides free core bookkeeping and invoicing software, monetizing primarily through credit card payment processing fees and optional payroll subscriptions.',
    keyDifferences: [
      'Wave offers free basic invoicing and bank reconciliation; FreshBooks requires a paid monthly or annual subscription.',
      'FreshBooks provides native time tracking and client retainer management; Wave does not include native timers.',
      'FreshBooks offers phone and email customer support on paid plans; Wave limits live support on free tiers.',
    ],
    features: [
      {
        feature: 'Base Software Pricing',
        toolA: 'Monthly or annual subscription tiered by active clients',
        toolB: 'Free starter tier with optional paid Pro plan and transaction fees',
        notes: 'Check current tier details on official provider websites.',
      },
      {
        feature: 'Native Time Tracking',
        toolA: 'Yes (built-in timer with project billing)',
        toolB: 'No (requires external third-party time apps)',
        notes: 'Hourly contractors may prefer integrated time tracking.',
      },
      {
        feature: 'Automated Late Fees & Reminders',
        toolA: 'Configurable automated client reminders and late fees',
        toolB: 'Manual reminder capabilities or limited automation',
        notes: 'Automated chasing helps accelerate client payment turnaround.',
      },
    ],
    evaluationQuestions: [
      'Is your current administrative budget zero, or can you invest in paid automation?',
      'Do you need integrated project timers to bill clients accurately?',
      'How important is live phone or email customer support for your operations?',
    ],
    faqs: [
      {
        question: 'Is Wave really free compared to FreshBooks?',
        answer: 'Wave provides free base accounting and invoicing software with no mandatory monthly subscription on its starter tier. Wave monetizes primarily through transaction fees when processing credit card and bank payments, plus optional paid payroll. FreshBooks is a subscription platform that charges a monthly or annual fee across all tiers.',
      },
      {
        question: 'Why would a business pay for FreshBooks when Wave offers a free tier?',
        answer: 'Businesses choose FreshBooks for automated late payment reminders, native project timers, billable hourly rate tracking, comprehensive mobile mileage tracking, client retainer management, and dedicated telephone/email customer support.',
      },
      {
        question: 'Can I export my data from Wave if I upgrade to FreshBooks later?',
        answer: 'Yes. You can export customer records, vendor contacts, invoices, and your chart of accounts as CSV files from Wave and import them directly into FreshBooks.',
      },
    ],
    relatedCalculators: [
      { label: 'Free Invoice Generator', href: '/invoice-generator' },
      { label: 'Stripe Fee Calculator', href: '/tools/stripe-fee-calculator/usa' },
      { label: 'Small Business Hub', href: '/small-business' },
    ],
  },
  'freshbooks-vs-zoho-books': {
    slug: 'freshbooks-vs-zoho-books',
    title: 'FreshBooks vs Zoho Books: Small Business Accounting Comparison',
    toolAName: 'FreshBooks',
    toolBName: 'Zoho Books',
    description:
      'An objective comparison of FreshBooks and Zoho Books: workflow specialization, ecosystem integrations, and feature depth for service providers.',
    bestForToolA:
      'Independent freelancers, creative consultants, and service agencies seeking an intuitive, client-focused invoicing and time-tracking experience.',
    bestForToolB:
      'Small to mid-size businesses that utilize the broader Zoho ecosystem (Zoho CRM, Zoho Desk, Zoho Projects) or need extensive workflow rule automations.',
    overviewToolA:
      'FreshBooks emphasizes fast, client-ready invoicing, straightforward project tracking, and minimal accounting complexity.',
    overviewToolB:
      'Zoho Books is a modular, rule-driven accounting platform with robust custom fields, inventory control, and tight connections across the 40+ Zoho suite apps.',
    keyDifferences: [
      'Zoho Books offers a more customizable accounting engine with custom fields and webhook automations; FreshBooks prioritizes ease of use.',
      'FreshBooks focuses on client interaction (client portals, feedback, time logs); Zoho Books focuses on business operations and CRM integration.',
      'Zoho Books offers a free plan in certain jurisdictions for small turnover businesses; FreshBooks is a subscription platform.',
    ],
    features: [
      {
        feature: 'Ecosystem Integration',
        toolA: 'Connects to major payment gateways and business apps (GSuite, Slack)',
        toolB: 'Native integration across all Zoho applications and custom APIs',
        notes: 'Companies using Zoho One benefit from Zoho Books integration.',
      },
      {
        feature: 'Client Communication Portal',
        toolA: 'Client portal for viewing, commenting, and paying invoices',
        toolB: 'Client portal with estimate approvals and statement history',
        notes: 'Both platforms support self-service client portals.',
      },
    ],
    evaluationQuestions: [
      'Does your business already use Zoho CRM or other Zoho cloud applications?',
      'Do you require complex automation workflows or simple, rapid invoicing?',
      'Are you looking for an easy onboarding experience for non-financial staff?',
    ],
    faqs: [
      {
        question: 'How does Zoho Books compare to FreshBooks for service agencies?',
        answer: 'Zoho Books offers deeper customization for multi-app enterprise workflows and rule-based automations, particularly if your team already uses Zoho CRM. FreshBooks offers a more streamlined, client-friendly invoicing and time billing experience optimized specifically for service contractors.',
      },
      {
        question: 'Does Zoho Books have a free tier?',
        answer: 'Yes, Zoho Books offers a free tier in select jurisdictions for small enterprises with revenue below statutory thresholds ($50k USD / local equivalents). FreshBooks offers a 30-day free trial but operates as a subscription-only platform.',
      },
      {
        question: 'Which platform is faster to learn for a non-accountant?',
        answer: 'FreshBooks has a significantly gentler learning curve. Its user interface is centered around client deliverables, time tracking, and professional invoices, whereas Zoho Books features more complex menu structures and accounting configuration settings.',
      },
    ],
    relatedCalculators: [
      { label: 'Free Invoice Generator', href: '/invoice-generator' },
      { label: 'Profit Margin Calculator', href: '/tools/profit-margin-calculator/standard' },
      { label: 'Break-Even Calculator', href: '/tools/break-even-calculator/standard' },
    ],
  },
  'freshbooks-vs-xero': {
    slug: 'freshbooks-vs-xero',
    title: 'FreshBooks vs Xero: Small Business Accounting Comparison',
    toolAName: 'FreshBooks',
    toolBName: 'Xero',
    description:
      'Evaluate FreshBooks and Xero for small businesses, contractors, and agencies. Review user seat models, banking reconciliations, and reporting capabilities.',
    bestForToolA:
      'Solo contractors, consultants, and client-centric service providers who prioritize streamlined invoicing and time tracking.',
    bestForToolB:
      'Growing businesses with multiple team members that require unlimited user seats on standard plans, multi-currency accounting, and bank reconciliation.',
    overviewToolA:
      'FreshBooks is optimized for service professionals billing clients for time, retainer milestones, and pass-through project expenses.',
    overviewToolB:
      'Xero is a global cloud accounting platform popular in the UK, Australia, New Zealand, and North America, known for its bank reconciliation workflow and app marketplace.',
    keyDifferences: [
      'Xero offers unlimited user seats on its standard plans; FreshBooks charges per additional team member seat.',
      'FreshBooks entry plans limit active clients; Xero entry plans limit the number of invoices sent per month.',
      'Xero features an extensive third-party app ecosystem (1,000+ integrations); FreshBooks focuses on core service-industry tools.',
    ],
    features: [
      {
        feature: 'User Seat Model',
        toolA: 'Priced per user seat / team member add-on',
        toolB: 'Unlimited users on standard and premium tiers',
        notes: 'Companies with large bookkeeping or staff teams often favor Xero user licensing.',
      },
      {
        feature: 'Bank Reconciliation',
        toolA: 'Automated bank import with double-entry matching',
        toolB: 'Fast keyboard-driven rule matching for high transaction counts',
        notes: 'Xero is widely celebrated for its bank feed reconciliation engine.',
      },
    ],
    evaluationQuestions: [
      'How many people on your team need access to accounting data?',
      'Do you have hundreds of bank transactions each week that need rapid categorization?',
      'Is your business heavily focused on project time billing and client invoice presentation?',
    ],
    faqs: [
      {
        question: 'What is the primary difference between FreshBooks and Xero?',
        answer: 'The primary difference is user seat licensing and primary focus: Xero includes unlimited user seats on standard tiers and excels at high-volume bank feed reconciliations. FreshBooks prices additional team member seats separately but provides superior built-in time tracking, client retainer management, and client portal communication tools.',
      },
      {
        question: 'Is Xero better than FreshBooks for international or UK businesses?',
        answer: 'Xero has a massive presence in the UK, Australia, and New Zealand with comprehensive Making Tax Digital (MTD) and multi-currency capabilities. However, FreshBooks also supports UK VAT compliance, multi-currency invoicing, and international payments.',
      },
      {
        question: 'How do entry-level plan limits compare between FreshBooks and Xero?',
        answer: 'FreshBooks Lite limits you to 5 active billable clients but permits unlimited invoices to those clients. In contrast, Xero Early limits you to sending 20 invoices and 5 bills per month across any number of clients.',
      },
    ],
    relatedCalculators: [
      { label: 'Free Invoice Generator', href: '/invoice-generator' },
      { label: 'UK HMRC VAT Calculator', href: '/tools/vat-calculator/united-kingdom' },
      { label: 'Stripe UK Fee Calculator', href: '/tools/stripe-fee-calculator/uk' },
    ],
  },
};
