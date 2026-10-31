/**
 * Bespoke content profiles for Freelance Roles (Group 2: 13 Roles)
 * financial-modeler, video-editor, motion-graphics-designer, social-media-manager,
 * growth-hacker, content-strategist, brand-designer, voice-actor,
 * illustrator, virtual-assistant, pr-specialist, business-analyst, executive-coach
 */

export const FREELANCE_PROFILES_GROUP2 = {
  'financial-modeler': {
    slug: 'financial-modeler',
    roleTitle: 'Financial Modeler',
    title: 'Freelance Financial Modeler Hourly Rate Calculator | FeeKit',
    metaDescription: 'Calculate freelance financial modeler hourly and project rates grounded in BLS SOC 13-2051 benchmarks, 3-statement models, DCF valuation, and 55% utilization.',
    h1: 'Freelance Financial Modeler Rate Calculator & Valuation Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes132051.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 13-2051 (Financial and Investment Analysts).',
    overview: 'Freelance financial modelers build dynamic three-statement operating models, discounted cash flow (DCF) valuations, leveraged buyout (LBO) schedules, and SaaS unit-economics models for private equity, venture-backed startups, and M&A transactions. Under BLS SOC 13-2051 benchmarks, salaried financial analysts earn a median annual wage of $99,890 ($48.02/hour), with senior Wall Street and PE associates exceeding $165,000 base. Operating as an independent financial modeling consultant commands consulting rates between $100 and $225+ per hour to cover self-employment tax, premium market data terminals, modeling add-in software, and commercial errors & omissions insurance.',
    sections: [
      {
        id: 'fm-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 13-2051) & Financial Modeling Pricing Structures',
        body: `Financial modeling consultants package their services across four established structures:

1. **Hourly Advisory ($110 – $225/hr)**: Common for investor Q&A support, dynamic sensitivity testing, and ad-hoc boardroom scenario updates.
2. **Fixed-Scope Model Deliverables ($5,000 – $18,000/model)**: Scoped across Assumptions & Revenue Driver Architecture (Phase 1), 3-Statement & Working Capital Integration (Phase 2), and Scenarios, Debt Schedules & Executive Summary (Phase 3).
3. **M&A Due Diligence & Data Room Support ($8,000 – $25,000)**: Rapid turnaround modeling during active acquisition bidding or Series A/B fundraising rounds, auditing financial hygiene and cleaning historical accounting data.
4. **Fractional Head of Strategic Finance ($4,000 – $10,000/mo)**: Ongoing monthly retainer providing monthly budget vs actuals (BVA) analysis, rolling cash burn forecasts, and investor reporting updates.`
      },
      {
        id: 'fm-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: The 1,050-Hour Modeling Reality',
        body: `Financial modeling requires extreme mathematical rigor. An independent consultant maintains **50% to 58% billable utilization** (1,000 to 1,150 annual billable hours):
- **Historical Data Scrubbing & General Ledger Triage (18% of time)**: Exporting dirty QuickBooks/Xero ledger data, reconciling chart of accounts, and verifying historical balance sheet reconciliations.
- **Formulas & Circular Reference Debugging (12% of time)**: Auditing debt schedules, interest expense circularities, and balance sheet plugs.
- **Client Scenario Strategy & Pitch Review (15% of time)**: Meeting with founders to align financial assumptions with market size and sales hiring plans.
- **Active Model Engineering (50% to 55% billable)**: Writing dynamic Excel/Python formulas, sensitivity data tables, and dynamic dashboards.`
      },
      {
        id: 'fm-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($10,000 – $20,000/yr)',
        body: `Financial modelers maintain specialized data and auditing toolchains:

- **Market Data & Financial Software ($3,500 – $7,500/yr)**: CapIQ, PitchBook, or Koyfin market data subscriptions for comparable company multiples and industry beta benchmarks.
- **Excel Auditing & Modeling Add-ins ($1,200 – $2,500/yr)**: Macabacus, Operis Analysis Kit (OAK), and advanced financial charting suites.
- **Hardware & Multi-Monitor Setup ($2,500 – $4,000/yr amortized)**: High-RAM multi-core workstations capable of running 50MB+ financial spreadsheets with complex VBA macros across multiple 4K displays.
- **Commercial Errors & Omissions Insurance ($2,000 – $4,000/yr)**: Crucial liability coverage protecting against client claims of calculation errors influencing investment decisions.
- **Legal & Accounting ($1,500 – $2,500/yr)**: Corporate entity maintenance and annual tax filings.`
      },
      {
        id: 'fm-contracting-risks-disclaimers',
        title: 'Contracting Risks: Valuation Disclaimers, Audit Liabilities, and Investment Advice',
        body: `Financial modeling contracts must carry strict regulatory protections:

1. **No Fiduciary or Investment Advice Disclaimers**: Contracts must clarify that the modeler provides mathematical projections based solely on client-provided assumptions, and does not serve as a registered investment advisor (RIA) or broker-dealer under SEC rules.
2. **Assumption Integrity Warranty**: The client warrants that all historical financials, revenue targets, and churn metrics supplied are accurate.
3. **No Fundraising Outcome Guarantees**: Modeler compensation is never contingent on whether an investor commits capital or whether a loan is approved.`
      },
      {
        id: 'fm-contract-wording-clause',
        title: 'Model Financial Modeling Scope and Investment Disclaimer Clause',
        body: `Incorporate this protective clause into every financial modeling statement of work:

> **Mathematical Projection and Investment Advice Disclaimer Clause**:  
> *"Consultant is engaged solely to provide financial modeling, mathematical forecasting, and quantitative workbook design based on data and business assumptions supplied by Client. Consultant is not a registered investment advisor, broker-dealer, certified public accountant, or legal counsel. The deliverables constitute operational planning projections and do NOT represent formal fairness opinions, investment recommendations, or guarantees of future performance. Client acknowledges that actual financial outcomes will vary from forecasted scenarios. Consultant shall not be liable for third-party investor decisions or commercial financing outcomes."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Senior SaaS Financial Modeler ($125,000 Target Take-Home Net)',
      scenario: 'A senior financial modeling consultant targeting $125,000 net personal income budgets 48 active weeks, 23 billable hours/wk (1,104 annual hours), $14,000 in software and market data overhead, 28% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$125,000', annualOverhead: '$14,000', billableHours: 1104, taxRate: '28%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$125,000 ÷ (1 - 0.28)', amount: '$173,611', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($173,611 + $14,000 overhead) × 1.15', amount: '$215,753', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Hourly Rate', formula: '$215,753 ÷ 1,104 billable hours', amount: '$195.43', note: 'Senior financial consultant rate' },
        { label: 'Standard 3-Statement Model Fee', formula: '$195.43 × 50 hours', amount: '$9,771', note: 'Fixed-price model package' }
      ],
      takeaway: 'To take home $125k net while paying for CapIQ data, Macabacus add-ins, and high-tier E&O insurance, a financial modeler should bill ~$195/hour.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Fixed-Price Series A Pitch Deck Financial Model',
      scenario: 'A startup hires a modeler to build an institutional-grade SaaS growth model requiring 60 hours of work. At $180/hr, what is the fixed contract price?',
      inputs: { estimatedHours: 60, hourlyRate: '$180', contingencyBuffer: '15%' },
      steps: [
        { label: 'Base Modeling Labor', formula: '60 hours × $180', amount: '$10,800', note: 'Core 3-statement model design' },
        { label: 'Investor Revision Contingency (15%)', formula: '$10,800 × 0.15', amount: '$1,620', note: 'Buffers investor Q&A iterations' },
        { label: 'Total Invoiced Project Price', formula: '$10,800 + $1,620', amount: '$12,420', note: 'Structured into 2 milestone payments' }
      ],
      takeaway: 'Adding a 15% buffer for investor-driven assumption updates yields a clean $12,400 institutional modeling package.'
    },
    faqs: [
      { question: 'What is the average hourly rate for a freelance financial modeler?', answer: 'Freelance financial modelers typically charge between $100 and $225 per hour, with specialized private equity and M&A valuation consultants commanding $250+ per hour.', sourceUrl: 'https://www.bls.gov/oes/current/oes132051.htm' },
      { question: 'How much does a 3-statement financial model cost to build?', answer: 'A bespoke 3-statement financial model typically costs between $5,000 and $18,000, depending on the complexity of unit economics, multi-tier pricing, and debt schedules.', sourceUrl: 'https://www.bls.gov/oes/current/oes132051.htm' },
      { question: 'Do financial modelers provide formal investment advice?', answer: 'No. Freelance financial modelers provide operational mathematical projections based on client assumptions. They are not registered investment advisors (RIAs) and do not issue fairness opinions.', sourceUrl: 'https://www.bls.gov/oes/current/oes132051.htm' },
      { question: 'What software tools are required for professional financial modeling?', answer: 'Professional financial modelers rely on Microsoft Excel, Macabacus or Operis add-ins, financial data terminals (Koyfin, CapIQ, PitchBook), and Python/Power BI for large datasets.', sourceUrl: 'https://www.bls.gov/oes/current/oes132051.htm' },
      { question: 'How many billable hours does a freelance financial modeler work per year?', answer: 'A realistic benchmark is 1,000 to 1,150 billable hours per year (roughly 22–24 hours/week). Historical accounting ledger cleanup and assumption sanity checks consume 40% of time.', sourceUrl: 'https://www.bls.gov/oes/current/oes132051.htm' }
    ]
  },

  'video-editor': {
    slug: 'video-editor',
    roleTitle: 'Video Editor',
    title: 'Freelance Video Editor Day Rate & Hourly Calculator | FeeKit',
    metaDescription: 'Calculate freelance video editor hourly and day rates grounded in BLS SOC 27-4032 data, rendering workstation overhead, NAS storage, and 55% utilization.',
    h1: 'Freelance Video Editor Rate Calculator & Production Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes274032.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 27-4032 (Film and Video Editors).',
    overview: 'Freelance video editors craft commercial video content, YouTube documentaries, corporate brand stories, and social reels using Adobe Premiere Pro, DaVinci Resolve Studio, and Final Cut Pro. Under BLS SOC 27-4032 benchmarks, median salaried video editors earn $63,520 annually ($30.54/hour), with senior editors in commercial broadcast hubs exceeding $115,000. Independent editors typically bill day rates between $450 and $900/day (or $60 to $125/hour) to cover massive localized RAID/NAS storage arrays, GPU workstation amortization, stock licensing platforms, and unbilled file-transfer overhead.',
    sections: [
      {
        id: 've-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 27-4032) & Video Editing Pricing Structures',
        body: `Freelance video editors structure compensation across four established formats:

1. **Production Day Rate ($500 – $950/day)**: The commercial industry standard, based on an 8- to 10-hour working day covering raw footage ingestion, assembly, rough cut, and sound balancing.
2. **Per-Video Fixed Milestone ($1,500 – $8,000/video)**: Scoped across Story Assembly & Rough Cut (Milestone 1), Fine Cut, Pacing & Audio Mastering (Milestone 2), and Color Grade, Title Graphics & Final Master Delivery (Milestone 3).
3. **Monthly Retainer Editing ($3,000 – $8,500/mo)**: Common for content creators and brands requiring a steady volume of weekly long-form YouTube videos and short-form social reels.
4. **Hourly Commercial Overtime ($75 – $140/hr)**: Applied to unexpected rush turnarounds, weekend overtime, or excessive revision cycles beyond contractual allowances.`
      },
      {
        id: 've-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: The 1,100-Hour Editing Reality',
        body: `Video editing involves substantial unbillable technical overhead. An independent editor maintains **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours or roughly 130–150 billable days):
- **Raw Media Ingestion & Proxy Transcoding (15% of time)**: Downloading multi-gigabyte 4K/6K camera rushes, organizing bin structures, and generating ProRes/DNxHR editing proxies.
- **Asset Sourcing & Audio Cleanup (12% of time)**: Sourcing commercial music tracks, sound effects, and cleaning background noise with iZotope RX.
- **Client Review Cycles & Timestamp Management (13% of time)**: Consolidating Frame.io comments, exporting review links, and managing version naming conventions.
- **Active Creative Cutting (50% to 55% billable)**: Pacing, narrative cutting, sound design, and color grading.`
      },
      {
        id: 've-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($9,000 – $16,000/yr)',
        body: `Video editors maintain capital-intensive hardware and storage arrays:

- **High-Performance GPU Workstation ($3,500 – $6,000/yr amortized)**: High-end Mac Studio (M2/M3 Max/Ultra) or custom PC with NVIDIA RTX 4080/4090 GPUs for real-time 4K timeline playback.
- **Local High-Speed Storage & NAS RAID ($2,000 – $4,000/yr)**: High-capacity NVMe scratch drives and multi-bay Synology/QNAP NAS arrays with redundant RAID configurations for long-term archiving.
- **Software Subscriptions & Plugins ($1,500 – $2,500/yr)**: Adobe Creative Cloud All Apps, DaVinci Resolve Studio license, Frame.io enterprise seats, and audio cleanup plugins (iZotope RX).
- **Stock Music & Footage Licenses ($1,200 – $2,500/yr)**: Commercial music licensing platforms (Musicbed, Artlist, Epidemic Sound) and stock footage libraries.
- **Commercial Insurance & Cloud Backup ($1,200 – $2,000/yr)**: Backblaze unlimited cloud backup and commercial liability coverage.`
      },
      {
        id: 've-contracting-risks-revisions',
        title: 'Contracting Risks: Revision Hell, Raw Footage Demands, and Music Buyouts',
        body: `Video contracts frequently unravel over subjective creative changes:

1. **Uncapped Creative Revision Rounds**: Clients often demand subjective micro-edits ("make it pop," "try 5 different song options"). Contracts must cap revisions strictly to two (2) consolidated rounds.
2. **Raw Footage & Project File Ownership**: Contracts must clarify that client fees cover the final exported master video files. Native project files (Premiere .prproj / DaVinci .drp) and raw footage remain the property of the editor unless a project file buyout fee (typically 50% to 100% markup) is paid.
3. **Music Licensing Limitations**: Commercial music tracks are licensed for specific web/broadcast territories. The client must fund extended broadcast synchronization licenses.`
      },
      {
        id: 've-contract-wording-clause',
        title: 'Model Video Editing Revision and Project File Ownership Clause',
        body: `Protect your editing business with this standard contract clause:

> **Video Deliverable Scope and Project File Ownership Clause**:  
> *"Fee includes delivery of finished, exported master video files in the formats specified in Exhibit A, and up to two (2) consolidated rounds of creative feedback submitted via Frame.io within seven (7) business days of rough cut delivery. Subsequent revisions or changes to previously approved scripts or voiceover tracks shall be billed at Editor's standard rate of $[HOURLY_RATE]/hour. Native editing project files (.prproj, .drp), timeline presets, and project project architecture remain the exclusive intellectual property of Editor and are not included in this engagement unless an explicit Project File Buyout Fee is negotiated in writing."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Commercial Brand Video Editor ($95,000 Target Take-Home Net)',
      scenario: 'A commercial video editor targeting $95,000 net personal income budgets 46 active weeks, 140 billable days/yr, $13,000 in workstation and storage overhead, 25% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$95,000', annualOverhead: '$13,000', billableDays: 140, taxRate: '25%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$95,000 ÷ (1 - 0.25)', amount: '$126,667', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($126,667 + $13,000 overhead) × 1.15', amount: '$160,617', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Day Rate', formula: '$160,617 ÷ 140 billable days', amount: '$1,147.26', note: 'Commercial agency day rate' },
        { label: 'Hourly Rate Equivalent (8-hr day)', formula: '$1,147.26 ÷ 8 hours', amount: '$143.41/hr', note: 'Hourly overtime rate' }
      ],
      takeaway: 'To take home $95k net after funding 40TB NAS arrays and GPU workstations across 140 realistic billable days, an editor needs a ~$1,150 commercial day rate.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Fixed-Price 3-Minute Brand Video Package',
      scenario: 'An editor quotes a 3-minute corporate brand video requiring 32 hours of editing, color grading, and audio mastering. At $85/hr plus $300 commercial music licensing, what is the contract fee?',
      inputs: { editingHours: 32, hourlyRate: '$85', musicLicensePassThrough: '$300', revisionBuffer: '15%' },
      steps: [
        { label: 'Base Video Editing Labor', formula: '32 hours × $85', amount: '$2,720', note: 'Assembly, fine cut, color' },
        { label: 'Revision Contingency (15%)', formula: '$2,720 × 0.15', amount: '$408', note: 'Buffers revision iterations' },
        { label: 'Commercial Music Licensing', formula: 'Artlist / Musicbed sync license', amount: '$300', note: 'Direct pass-through' },
        { label: 'Total Project Contract Price', formula: '$2,720 + $408 + $300', amount: '$3,428', note: 'Complete video package' }
      ],
      takeaway: 'A complete corporate video edit with color, sound mastering, and licensed music calculates to a $3,400 project fee.'
    },
    faqs: [
      { question: 'What is the average day rate for a freelance video editor?', answer: 'Freelance video editors typically charge day rates between $450 and $900/day. High-end commercial broadcast and national agency editors charge $1,000 to $1,500+ per day.', sourceUrl: 'https://www.bls.gov/oes/current/oes274032.htm' },
      { question: 'Why do video editors charge day rates instead of hourly?', answer: 'Day rates protect editors against rapid client scope pivots and account for massive rendering and export wait times that cannot be cleanly tracked in single hours.', sourceUrl: 'https://www.bls.gov/oes/current/oes274032.htm' },
      { question: 'Does the client own the Premiere or DaVinci project files?', answer: 'Standard industry contracts specify that the client owns the exported master video files. Native project files (.prproj/.drp) remain the property of the editor unless a project file buyout fee is paid.', sourceUrl: 'https://www.bls.gov/oes/current/oes274032.htm' },
      { question: 'How much local storage does a freelance video editor need?', answer: 'Most professional editors maintain at least 20TB to 60TB of high-speed RAID/NAS storage to hold raw 4K camera rushes, proxies, and multi-year project archives.', sourceUrl: 'https://www.bls.gov/oes/current/oes274032.htm' },
      { question: 'How many rounds of revisions are standard in video editing?', answer: 'Two (2) consolidated rounds of revisions are standard in the video production industry. Further revision loops are billed at hourly rates.', sourceUrl: 'https://www.bls.gov/oes/current/oes274032.htm' }
    ]
  },

  'motion-graphics-designer': {
    slug: 'motion-graphics-designer',
    roleTitle: 'Motion Graphics Designer',
    title: 'Freelance Motion Graphics Designer Day Rate Calculator | FeeKit',
    metaDescription: 'Calculate freelance motion designer day and project rates grounded in BLS SOC 27-1014 data, Cinema 4D/After Effects overhead, render farms, and 55% utilization.',
    h1: 'Freelance Motion Graphics Designer Rate Calculator & Animation Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes271014.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 27-1014 (Special Effects Artists and Animators).',
    overview: 'Freelance motion graphics designers create kinetic typography, 3D product visualizations, animated explainer videos, and UI micro-interactions using Adobe After Effects, Maxon Cinema 4D, Blender, and Houdini. Under BLS SOC 27-1014 benchmarks, salaried animators and VFX artists earn a median annual wage of $98,950 ($47.57/hour), with senior 3D specialists in commercial advertising exceeding $140,000. Operating as an independent motion graphics designer requires billing day rates between $550 and $1,100/day (or $75 to $150/hour) to offset heavy subscription outlays for 3D render engines (Redshift, Octane), cloud render farm credits, and high-performance multi-GPU animation workstations.',
    sections: [
      {
        id: 'mg-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 27-1014) & Motion Design Pricing Structures',
        body: `Motion designers structure their commercial fees across four established models:

1. **Production Day Rate ($600 – $1,100/day)**: The standard agency rate for 2D/3D animation, covering 8 hours of keyframing, rigging, and simulation.
2. **Fixed-Price Explainer Video Package ($5,000 – $20,000/video)**: Scoped across Styleframes & Storyboard (Phase 1), Animatic & Voiceover Timing (Phase 2), and Full Animation, Sound Design & Render Delivery (Phase 3).
3. **UI Micro-Interaction & Lottie Package ($3,500 – $8,000)**: Specialized 2D vector animation for web and mobile apps, outputting lightweight JSON/DotLottie code for developers.
4. **3D Product Visualizations ($4,000 – $15,000)**: Photorealistic C4D/Octane product renders and exploded-view animations for hardware product launches.`
      },
      {
        id: 'mg-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: Render Times and Storyboard Approvals',
        body: `Motion design requires intense iteration before animation begins. An independent motion designer maintains **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours or roughly 130–145 billable days):
- **Concepting, Moodboards & Styleframes (18% of time)**: Creating vector styleframes and concept art to establish the visual language prior to animating.
- **Render Management & Simulation Baking (15% of time)**: Baking particle physics, managing GPU memory constraints, and troubleshooting render noise passes.
- **Client Animatic Reviews (12% of time)**: Aligning visual timing to voiceover scratch tracks and securing client sign-off before keyframing.
- **Active Keyframing & Compositing (50% to 55% billable)**: Animating curves, rigging characters, lighting 3D scenes, and sound design.`
      },
      {
        id: 'mg-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($11,000 – $20,000/yr)',
        body: `Motion designers incur heavy software licensing and render infrastructure expenses:

- **3D Modeling & Animation Suites ($2,500 – $4,500/yr)**: Maxon One (Cinema 4D, Redshift, ZBrush) or Houdini Indie licenses, plus Adobe Creative Cloud.
- **GPU Render Engines & Render Farm Credits ($2,000 – $4,500/yr)**: OctaneRender enterprise subscriptions and on-demand cloud render farm usage (Drop & Render, GarageFarm).
- **Animation Workstation Hardware ($4,000 – $6,500/yr amortized)**: Multi-GPU workstations (dual NVIDIA RTX 4090s) with 128GB RAM and liquid cooling for handling heavy 3D geometry.
- **Commercial Plugin Suites ($1,500 – $3,000/yr)**: Trapcode Suite, Optical Flares, Newton physics engine, and specialized After Effects scripts.
- **Commercial Insurance & Business Administration ($1,500 – $2,500/yr)**: Commercial liability and IP assignment protections.`
      },
      {
        id: 'mg-contracting-risks-storyboard',
        title: 'Contracting Risks: Animating Without Approved Storyboards and Render Overages',
        body: `Motion design contracts require strict procedural gateways:

1. **Mandatory Storyboard Gate**: Never start animating until styleframes and an animatic are formally approved in writing. Changing character models or narrative flow after keyframing is complete requires rebuilding the entire animation from scratch.
2. **Cloud Render Farm Pass-Through**: Cloud rendering costs for heavy 3D scenes must be defined as client pass-through expenses.
3. **Voiceover Lockout**: Voiceover audio must be final before animation begins; re-recording voiceover alters timing across every keyframe.`
      },
      {
        id: 'mg-contract-wording-clause',
        title: 'Model Storyboard Approval and Render Cost Clause',
        body: `Include this essential approval clause in your motion design contracts:

> **Styleframe Approval and Animation Re-Keyframing Clause**:  
> *"Full animation production shall commence only upon Client's formal written approval of the visual Styleframes and Storyboard Animatic. Any structural changes requested to the visual style, character geometry, or voiceover timing after Storyboard approval shall constitute a Change Order billable at Designer's standard rate of $[HOURLY_RATE]/hour. Final master deliverables include high-resolution ProRes 422HQ and MP4 exports. Native Cinema 4D project scenes and After Effects project files are excluded unless a separate Source File License Fee is agreed in writing."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Senior 3D Motion Designer ($110,000 Target Take-Home Net)',
      scenario: 'A 3D motion designer targeting $110,000 net personal income budgets 46 active weeks, 135 billable days/yr, $15,000 in software, hardware, and render overhead, 26% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$110,000', annualOverhead: '$15,000', billableDays: 135, taxRate: '26%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$110,000 ÷ (1 - 0.26)', amount: '$148,649', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($148,649 + $15,000 overhead) × 1.15', amount: '$188,196', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Day Rate', formula: '$188,196 ÷ 135 billable days', amount: '$1,394.04', note: 'High-end 3D agency day rate' },
        { label: 'Hourly Rate Equivalent (8-hr day)', formula: '$1,394.04 ÷ 8 hours', amount: '$174.26/hr', note: 'Senior 3D animator rate' }
      ],
      takeaway: 'Due to extreme GPU hardware costs, C4D/Octane software licenses, and 135 billable days, a senior 3D motion designer needs a ~$1,390 day rate to clear $110k net.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating 60-Second 2D Animated Explainer Package',
      scenario: 'A designer quotes a 60-second 2D After Effects animated explainer video requiring 50 hours of illustration and keyframing, with $400 for professional voiceover licensing. What is the total package fee?',
      inputs: { animationHours: 50, hourlyRate: '$120', voiceoverPassThrough: '$400', soundDesignAddOn: '$500' },
      steps: [
        { label: 'Core Animation Labor', formula: '50 hours × $120', amount: '$6,000', note: 'Storyboards & keyframing' },
        { label: 'Voiceover Talent Fee', formula: 'Pass-through commercial talent', amount: '$400', note: 'Vetted voice actor fee' },
        { label: 'Custom Sound Design & Mix', formula: 'Foley, SFX, and mastering', amount: '$500', note: 'Commercial audio mix' },
        { label: 'Total Invoiced Project Price', formula: '$6,000 + $400 + $500', amount: '$6,900', note: 'Complete 60-second explainer' }
      ],
      takeaway: 'A complete 60-second animated explainer video with sound design and voiceover calculates to a $6,900 package.'
    },
    faqs: [
      { question: 'What is the average day rate for a freelance motion graphics designer?', answer: 'Freelance motion graphics designers typically charge day rates between $600 and $1,100/day. High-end 3D product visualizers and VFX animators command $1,200 to $1,600+ per day.', sourceUrl: 'https://www.bls.gov/oes/current/oes271014.htm' },
      { question: 'How much does a 60-second animated explainer video cost?', answer: 'A professional 60-second 2D animated explainer video typically costs between $5,000 and $15,000, while a 3D animated video ranges from $12,000 to $30,000.', sourceUrl: 'https://www.bls.gov/oes/current/oes271014.htm' },
      { question: 'Why is storyboard approval mandatory before animating?', answer: 'Animating is mathematically intensive. Modifying narrative pacing or character assets after keyframing is complete requires discarding dozens of hours of render-ready work.', sourceUrl: 'https://www.bls.gov/oes/current/oes271014.htm' },
      { question: 'Who pays for cloud render farm credits?', answer: 'Render farm fees for complex 3D scenes should be estimated upfront and billed directly to the client as an approved pass-through project expense.', sourceUrl: 'https://www.bls.gov/oes/current/oes271014.htm' },
      { question: 'Are project files included in freelance motion design quotes?', answer: 'No. Industry standards provide finished high-resolution master video files. Native After Effects and Cinema 4D project scenes remain the designer’s IP unless a buyout fee is paid.', sourceUrl: 'https://www.bls.gov/oes/current/oes271014.htm' }
    ]
  },

  'social-media-manager': {
    slug: 'social-media-manager',
    roleTitle: 'Social Media Manager',
    title: 'Freelance Social Media Manager Retainer Calculator | FeeKit',
    metaDescription: 'Calculate freelance social media manager monthly retainers and rates grounded in BLS SOC 27-3031 data, content calendar tooling, and multi-client portfolio management.',
    h1: 'Freelance Social Media Manager Rate Calculator & Retainer Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 27-3031 (Public Relations and Social Media Specialists).',
    overview: 'Freelance social media managers develop content strategies, curate brand narratives, produce short-form video reels, and manage community engagement across LinkedIn, Instagram, TikTok, and X. Under BLS SOC 27-3031 benchmarks, salaried media specialists earn a median annual wage of $67,440 ($32.42/hour). Independent social media consultants typically manage a portfolio of 3 to 6 brand clients, charging monthly retainers between $2,000 and $5,500 per client (or $50 to $95/hour) to cover publishing software, social listening suites, graphic toolkits, and non-billable community monitoring.',
    sections: [
      {
        id: 'smm-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 27-3031) & Retainer Pricing Structures',
        body: `Social media managers structure compensation across four established models:

1. **Monthly Content Retainer ($2,000 – $5,000/mo per client)**: The dominant model, covering a defined monthly deliverable package (e.g., 12 static graphics, 4 short-form reels, caption copy, hashtag strategy, and scheduling).
2. **Community Management Add-On ($800 – $2,000/mo)**: Dedicated daily active monitoring of comments, direct messages (DMs), customer service triage, and outbound audience engagement.
3. **Social Strategy & Channel Audit ($2,500 – $6,000 flat)**: One-time strategic audits evaluating brand aesthetics, competitor gap analysis, bio optimization, and content pillars.
4. **Influencer Collaboration Management ($3,000 – $7,500/campaign)**: Sourcing creator talent, negotiating usage agreements, shipping product samples, and tracking campaign ROI.`
      },
      {
        id: 'smm-billable-utilization-drivers',
        title: 'Managing the Brand Portfolio: 4 to 6 Clients Without Burnout',
        body: `Social media management suffers from 24/7 availability pressure. Maintaining balance requires disciplined portfolio boundaries:

- **Portfolio Balance (30 hours/week total across 4 clients)**:
  - Client A (B2B SaaS LinkedIn): 8 hours/week (Executive ghostwriting & infographics)
  - Client B (D2C Lifestyle Instagram): 8 hours/week (Reel editing, aesthetic feed curation)
  - Client C (Hospitality / Dining): 7 hours/week (Stories, user-generated content curation)
  - Client D (Fitness App TikTok): 7 hours/week (Trend analysis, viral short-form audio)
- **Trend Research & Platform Algorithm Shifts (8 hours/week non-billable)**: Reviewing trending audios, algorithm documentation updates, and analyzing competitor viral content.
- **Client Reporting & Analytics Dashboards (4 hours/week)**: Preparing monthly engagement, reach, and follower conversion reports.`
      },
      {
        id: 'smm-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($6,000 – $12,000/yr)',
        body: `Social media managers maintain an extensive publishing and creation toolchain:

- **Scheduling & Publishing Suites ($1,500 – $3,500/yr)**: Sprout Social, Hootsuite, Later, or Buffer agency tiers supporting multi-brand profiles.
- **Creative Production Software ($1,200 – $2,500/yr)**: Canva Pro, Adobe Creative Cloud, CapCut Pro, and mobile filming lighting kits.
- **Social Listening & Analytics Tooling ($1,200 – $2,500/yr)**: Brand24, Mention, or Metricool subscriptions for sentiment monitoring.
- **Stock Imagery & Template Libraries ($800 – $1,500/yr)**: Commercial asset subscriptions for social graphics.
- **Smartphone Hardware & Mobile Data Plans ($1,500 – $2,500/yr amortized)**: High-spec mobile camera hardware (iPhone Pro) and redundant high-speed data plans.`
      },
      {
        id: 'smm-contracting-risks-boundaries',
        title: 'Contracting Risks: 24/7 Expectation Creep and Virality Guarantees',
        body: `Social media contracts carry severe boundary hazards:

1. **24/7 Community Availability**: Clients often expect instant responses to DMs at midnight. Contracts must explicitly state operating hours (e.g., Monday–Friday, 9am–5pm) and exclude 24/7 crisis response unless an on-call retainer is added.
2. **No Virality or Follower Guarantees**: Organic reach is governed by third-party proprietary algorithms. Never guarantee specific follower counts or viral video views.
3. **Ad Spend Separation**: Boosting posts and paid social ads must be billed directly through client ad accounts.`
      },
      {
        id: 'smm-contract-wording-clause',
        title: 'Model Social Media Retainer Scope and Availability Clause',
        body: `Include this boundary-setting clause in your social media agreements:

> **Social Media Deliverable Scope and Operating Hours Clause**:  
> *"Monthly Retainer includes the content creation, scheduling, and community engagement deliverables explicitly defined in Schedule A. Community monitoring and DM response coverage is provided Monday through Friday between 9:00 AM and 5:00 PM EST. Manager does not provide 24/7 crisis monitoring. Content strategy is designed to maximize organic reach and brand affinity; however, because platform distribution algorithms are operated by third parties, Manager makes no express guarantees regarding follower growth, viral metrics, or direct sales conversions."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Building an $80,000 Social Media Retainer Practice (4 Clients)',
      scenario: 'A social media consultant targeting $80,000 net personal income maintains four brand retainers. They budget $9,000 in software overhead, 25% taxes, and a 12% safety buffer.',
      inputs: { desiredNet: '$80,000', annualOverhead: '$9,000', clientCount: 4, taxRate: '25%', buffer: '12%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$80,000 ÷ (1 - 0.25)', amount: '$106,667', note: 'Pre-tax income requirement' },
        { label: 'Total Annual Business Revenue', formula: '($106,667 + $9,000 overhead) × 1.12', amount: '$129,547', note: 'Includes 12% safety buffer' },
        { label: 'Monthly Portfolio Target', formula: '$129,547 ÷ 12 months', amount: '$10,795/mo', note: 'Total monthly billing needed' },
        { label: 'Required Retainer Per Client', formula: '$10,795 ÷ 4 clients', amount: '$2,698/mo', note: 'Average retainer per brand' }
      ],
      takeaway: 'Managing four social media clients at ~$2,700/month each achieves $130k in gross revenue, yielding $80k clean personal take-home pay.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Effective Hourly Return on a $3,000 Retainer',
      scenario: 'A social media manager delivers 16 scheduled posts and 5 hours of weekly engagement for a $3,000 monthly retainer (totaling 30 hours per month). What is their effective hourly rate?',
      inputs: { monthlyRetainer: '$3,000', monthlyHours: 30 },
      steps: [
        { label: 'Effective Hourly Realization', formula: '$3,000 ÷ 30 hours', amount: '$100.00/hr', note: 'Clean hourly realization' },
        { label: 'Per-Post Equivalent Value', formula: '$3,000 ÷ 16 posts', amount: '$187.50/post', note: 'Includes copy, graphic, and scheduling' }
      ],
      takeaway: 'Structuring 30 hours of monthly social work into a $3,000 retainer yields an effective $100/hour return.'
    },
    faqs: [
      { question: 'What is the average monthly retainer for a freelance social media manager?', answer: 'Monthly retainers typically range from $2,000 to $5,500 per client, depending on post volume, reel creation, and whether community management is included.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'How many clients should a freelance social media manager take on?', answer: 'Most independent managers handle 3 to 6 clients simultaneously. Taking on more than 6 clients often degrades content quality and leads to community management burnout.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'Do social media managers guarantee follower growth?', answer: 'No. Professional managers do not guarantee follower counts or viral reach because organic distribution is controlled by third-party algorithms.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'Who pays for scheduling software like Sprout Social or Later?', answer: 'The manager typically provides access through their agency subscription, factored into their operational overhead, unless the client requires an enterprise dedicated account.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'How do social media managers handle weekend DM coverage?', answer: 'Weekend coverage must be specified as an additional service tier or handled via automated keyword responders, protecting standard business operating hours.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' }
    ]
  },

  'growth-hacker': {
    slug: 'growth-hacker',
    roleTitle: 'Growth Hacker',
    title: 'Freelance Growth Hacker Hourly & Retainer Calculator | FeeKit',
    metaDescription: 'Calculate freelance growth hacker and acquisition specialist rates grounded in BLS SOC 13-1161 data, funnel experimentation, A/B testing, and 60% utilization.',
    h1: 'Freelance Growth Hacker Rate Calculator & Experimentation Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes131161.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 13-1161 (Market Research Analysts and Growth Specialists).',
    overview: 'Freelance growth hackers run cross-functional experimentation across the entire Pirate Metrics funnel (Acquisition, Activation, Retention, Referral, Revenue). Combining data engineering, paid performance marketing, landing page CRO, and product onboarding optimization, independent growth specialists command premium rates between $110 and $225+ per hour (or $6,000 to $14,000/month retainers). Under BLS SOC 13-1161 benchmarks, salaried market analysts earn a median annual wage of $74,680 ($35.90/hour), while experienced growth consultants in venture-backed tech command high consulting fees to account for specialized analytics toolchains, A/B testing platforms, and automation software.',
    sections: [
      {
        id: 'gh-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 13-1161) & Growth Consulting Structures',
        body: `Growth hackers package their experimentation services across four models:

1. **Strategic Experimentation Retainer ($6,000 – $14,000/mo)**: The standard engagement, executing a rapid cadence of 2 to 4 growth experiments per week across acquisition channels, onboarding flows, and email re-engagement.
2. **Funnel & CRO Growth Sprint ($10,000 – $22,000 flat)**: Intensive 6-week projects auditing user drop-off points, designing high-converting landing pages, and building automated multi-channel onboarding sequences.
3. **Product-Led Growth (PLG) Architecture ($12,000 – $25,000)**: Specialized consulting building viral referral loops, automated invite systems, and freemium-to-paid upgrade triggers.
4. **Base Retainer + Performance Bonus**: A base consulting fee ($5,000/mo) paired with milestone bonuses tied to verified increases in monthly activation rate or ARR growth.`
      },
      {
        id: 'gh-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: Fast-Paced Analytics vs Execution',
        body: `Growth consulting requires deep statistical analysis. A growth hacker maintains **55% to 62% billable utilization** (1,100 to 1,220 annual billable hours):
- **Data Pipeline Verification & Attribution Audits (15% of time)**: Auditing Google Analytics 4, Mixpanel, and server-side tracking (CAPI) to eliminate data discrepancies.
- **Experiment Ideation & ICE Prioritization (12% of time)**: Scoring experiment ideas based on Impact, Confidence, and Ease (ICE framework).
- **Stakeholder Syncs & Readout Dashboards (13% of time)**: Reviewing weekly experiment wins, statistical significance benchmarks, and failed experiment learnings with founders.
- **Active Experiment Execution (55% to 60% billable)**: Writing landing page copy, configuring A/B tests, setting up automation webhooks, and optimizing paid ad sets.`
      },
      {
        id: 'gh-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($10,000 – $18,000/yr)',
        body: `Independent growth hackers maintain an extensive growth stack:

- **Product Analytics & Tracking Tooling ($2,500 – $5,000/yr)**: Mixpanel, Amplitude, PostHog, or Segment licenses for behavioral cohort analysis.
- **A/B Testing & Heatmap Software ($2,000 – $4,000/yr)**: VWO, Statsig, Hotjar, or Microsoft Clarity premium suites.
- **Automation & Scraping Toolchains ($1,500 – $3,000/yr)**: Zapier, Make.com, PhantomBuster, and Clay subscriptions for lead enrichment and workflow automation.
- **Ad Intelligence & SEO Suites ($2,000 – $3,500/yr)**: Meta Ad Library trackers, AdSpy, Semrush, and SpyFu.
- **Commercial Insurance & Legal ($1,500 – $2,500/yr)**: Commercial liability and contractor client agreement reviews.`
      },
      {
        id: 'gh-contracting-risks-data',
        title: 'Contracting Risks: Data Hygiene, Attribution Disputes, and Failed Experiments',
        body: `Growth consulting agreements must protect against common client disputes:

1. **Experiments Inevitably Fail**: Growth hacking is scientific experimentation; roughly 60% of A/B tests fail to achieve statistical significance. Contracts must clarify that compensation is earned for running rigorous experiments, not guaranteed wins.
2. **Third-Party Ad Spend Liability**: Client must pay ad networks directly. Never front client ad budget.
3. **Attribution Modeling Disputes**: Disagreements over last-touch vs multi-touch attribution can sour performance bonuses. Baseline attribution models must be agreed in writing prior to campaign launch.`
      },
      {
        id: 'gh-contract-wording-clause',
        title: 'Model Growth Experimentation and Scientific Disclaimer Clause',
        body: `Protect your growth consulting agreements with this standard clause:

> **Growth Experimentation and Scientific Methodology Clause**:  
> *"Consultant applies rigorous data-driven experimentation methodologies (ICE prioritization, A/B testing, and cohort tracking) to optimize Client's acquisition and retention funnels. Client acknowledges that scientific experimentation involves testing hypotheses, and that individual experiments may yield neutral or negative findings. Consultant's compensation is earned for executing the agreed experimentation cadence defined in Schedule A, and is not contingent on specific growth metrics or conversion rate outcomes unless an explicit performance bonus structure is mutually executed."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Senior B2B SaaS Growth Consultant ($135,000 Target Take-Home Net)',
      scenario: 'A growth hacker targeting $135,000 net personal income budgets 48 active weeks, 24 billable hours/wk (1,152 annual hours), $14,000 in software overhead, 28% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$135,000', annualOverhead: '$14,000', billableHours: 1152, taxRate: '28%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$135,000 ÷ (1 - 0.28)', amount: '$187,500', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($187,500 + $14,000 overhead) × 1.15', amount: '$231,725', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Hourly Rate', formula: '$231,725 ÷ 1,152 billable hours', amount: '$201.15', note: 'Senior growth consultant rate' },
        { label: 'Monthly Retainer Equivalent', formula: '$201.15 × 24 hours × 4 weeks', amount: '$19,310/mo', note: 'Enterprise growth retainer' }
      ],
      takeaway: 'To take home $135k net after funding tracking tools, A/B testing software, and taxes, a growth hacker should bill ~$200/hour.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Fixed-Fee Funnel Optimization Sprint',
      scenario: 'A growth consultant scopes a 6-week activation sprint requiring 75 hours of analytics audit, landing page CRO, and onboarding email design. At $175/hr, what is the project fee?',
      inputs: { sprintHours: 75, hourlyRate: '$175', testingToolingPassThrough: '$800' },
      steps: [
        { label: 'Base Growth Consulting Labor', formula: '75 hours × $175', amount: '$13,125', note: 'Funnel audit & CRO implementation' },
        { label: 'Specialized Testing Tooling', formula: 'Heatmap & testing licenses', amount: '$800', note: 'Pass-through project cost' },
        { label: 'Total Invoiced Sprint Price', formula: '$13,125 + $800', amount: '$13,925', note: 'Billed across 2 project milestones' }
      ],
      takeaway: 'A complete 6-week growth audit and onboarding sprint calculates to a clear $13,900 fixed fee.'
    },
    faqs: [
      { question: 'What is the average hourly rate for a freelance growth hacker?', answer: 'Freelance growth hackers typically charge between $110 and $225 per hour. Retainers for venture-backed startups generally range from $6,000 to $14,000 per month.', sourceUrl: 'https://www.bls.gov/oes/current/oes131161.htm' },
      { question: 'How is growth hacking different from traditional marketing?', answer: 'Traditional marketing focuses on brand awareness and acquisition. Growth hacking focuses on the entire customer journey, including product activation, feature adoption, referral loops, and retention.', sourceUrl: 'https://www.bls.gov/oes/current/oes131161.htm' },
      { question: 'Do growth hackers guarantee conversion rate increases?', answer: 'No. Professional growth consultants do not guarantee specific metric increases because growth relies on iterative scientific testing where many hypotheses fail before finding a winning breakthrough.', sourceUrl: 'https://www.bls.gov/oes/current/oes131161.htm' },
      { question: 'Who pays for ad spend and testing software during a growth sprint?', answer: 'The client must always pay advertising networks (Google, Meta, LinkedIn) and dedicated software platforms directly. Consultants never front advertising capital.', sourceUrl: 'https://www.bls.gov/oes/current/oes131161.htm' },
      { question: 'What is the ICE framework in growth consulting?', answer: 'The ICE framework prioritizes experiments based on Impact, Confidence, and Ease, scored from 1 to 10, ensuring engineering resources focus on the highest-leverage growth opportunities.', sourceUrl: 'https://www.bls.gov/oes/current/oes131161.htm' }
    ]
  },

  'content-strategist': {
    slug: 'content-strategist',
    roleTitle: 'Content Strategist',
    title: 'Freelance Content Strategist Hourly & Project Calculator | FeeKit',
    metaDescription: 'Calculate freelance content strategist hourly and retainer rates grounded in BLS SOC 27-3043 data, content audit frameworks, SEO tooling, and 58% utilization.',
    h1: 'Freelance Content Strategist Rate Calculator & Strategy Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes273043.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 27-3043 (Writers and Content Strategists).',
    overview: 'Freelance content strategists design full-funnel editorial architectures, SEO topic clusters, content governance frameworks, and messaging guidelines for enterprise brands and SaaS companies. Under BLS SOC 27-3043 benchmarks, salaried writers and content strategists earn a median annual wage of $73,690 ($35.43/hour). Operating as an independent content strategy consultant commands rates between $85 and $175+ per hour (or $4,000 to $10,000/month retainers) to cover enterprise SEO data suites, editorial workflow software, and non-billable content audit analysis.',
    sections: [
      {
        id: 'cs-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 27-3043) & Content Strategy Pricing Structures',
        body: `Content strategists package their services across four established structures:

1. **Strategic Hourly Advisory ($90 – $175/hr)**: Common for content governance workshops, brand voice coaching, and advising internal content marketing teams.
2. **Comprehensive Content Audit & Pillar Roadmap ($5,000 – $15,000 flat)**: Scoped across Inventory & Quality Audit (Phase 1), Keyword Gap & Competitor Topic Clustering (Phase 2), and Editorial Calendar & Brief Blueprints (Phase 3).
3. **Monthly Editorial Direction Retainer ($4,000 – $9,000/mo)**: Directing in-house writers and external freelancers, writing detailed content briefs, performing final editorial reviews, and monitoring organic ranking velocity.
4. **Website Replatforming & Messaging Overhaul ($8,000 – $20,000)**: Structuring information architecture (IA), taxonomy, and conversion messaging for new corporate website launches.`
      },
      {
        id: 'cs-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: Deep Research vs Editorial Execution',
        body: `Content strategy requires deep competitive data analysis. A freelance strategist operates at **52% to 60% billable utilization** (1,050 to 1,200 annual billable hours):
- **Content Inventory Crawling & Scoring (18% of time)**: Crawling thousands of existing URLs, identifying decaying content, duplicate keywords, and thin pages.
- **SERP Analysis & Intent Mapping (14% of time)**: Analyzing search engine results pages to determine exact search intent (informational, transactional, commercial).
- **Brief Preparation & Stakeholder Alignment (12% of time)**: Writing high-depth editorial briefs detailing heading hierarchies, primary entities, and internal link plans.
- **Active Strategy Execution (52% to 56% billable)**: Building topic clusters, taxonomy maps, and brand messaging guidelines.`
      },
      {
        id: 'cs-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($7,000 – $14,000/yr)',
        body: `Independent content strategists maintain heavy data intelligence subscriptions:

- **Enterprise SEO & Keyword Intelligence ($2,500 – $5,000/yr)**: Ahrefs, Semrush, or BrightEdge subscriptions for keyword clustering and competitor content gap analysis.
- **Content Optimization & Semantic NLP Tools ($1,500 – $3,000/yr)**: Clearscope, SurferSEO, or MarketMuse licenses for evaluating semantic entity coverage.
- **Crawling & Information Architecture Software ($800 – $1,800/yr)**: Screaming Frog SEO Spider enterprise licenses and visual sitemap tools (FlowMapp, Octopus).
- **Workstation & Grammar Suites ($1,500 – $2,500/yr amortized)**: Hardware upgrades, Grammarly Premium, and Notion Enterprise collaboration software.
- **Commercial Insurance & Legal ($1,200 – $2,000/yr)**: Commercial liability protecting against intellectual property and copyright disputes.`
      },
      {
        id: 'cs-contracting-risks-scope',
        title: 'Contracting Risks: Writing vs Strategy Creep and Search Algorithm Volatility',
        body: `Content strategy contracts require careful boundary definitions:

1. **The "Writing vs Strategy" Scope Trap**: Clients frequently assume a content strategist will personally draft 10,000 words of blog articles. Proposals must clarify that strategy deliverables comprise briefs, audits, and roadmaps; drafting content is billed as separate copywriting.
2. **Search Engine Algorithm Fluctuations**: Google core updates and AI search overhauls impact rankings. Contracts must state that strategists apply SEO best practices, but cannot guarantee specific page 1 rankings.
3. **Internal Governance Delays**: Client review bottlenecks often stall publishing schedules. Contracts must tie billing to delivery of strategy documents, not client publishing dates.`
      },
      {
        id: 'cs-contract-wording-clause',
        title: 'Model Content Strategy Scope and SEO Disclaimer Clause',
        body: `Protect your content strategy agreements with this standard clause:

> **Content Strategy Scope and Search Engine Ranking Disclaimer**:  
> *"Services provided under this Statement of Work encompass high-level editorial strategy, content audits, keyword gap analysis, and content brief preparation as detailed in Exhibit A. Services do NOT include drafting full-length article copy, graphic design, or CMS publishing unless explicitly outlined in a separate Copywriting Amendment. Consultant applies industry-standard search engine optimization (SEO) and information architecture best practices; however, because search algorithms are controlled by independent third parties (e.g., Google), Consultant makes no warranties or guarantees regarding specific organic search rankings, traffic volumes, or indexing timelines."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Senior B2B SaaS Content Strategist ($105,000 Target Take-Home Net)',
      scenario: 'A content strategist targeting $105,000 net personal income budgets 48 active weeks, 24 billable hours/wk (1,152 annual hours), $11,000 in software overhead, 26% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$105,000', annualOverhead: '$11,000', billableHours: 1152, taxRate: '26%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$105,000 ÷ (1 - 0.26)', amount: '$141,892', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($141,892 + $11,000 overhead) × 1.15', amount: '$175,826', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Hourly Rate', formula: '$175,826 ÷ 1,152 billable hours', amount: '$152.63', note: 'Senior content strategist rate' },
        { label: 'Quarterly Audit Package', formula: '$152.63 × 50 hours', amount: '$7,631', note: 'Fixed-price audit package' }
      ],
      takeaway: 'To take home $105k net while paying for Ahrefs, Clearscope, and self-employment taxes, a content strategist should bill roughly $150–$155/hour.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Fixed-Price Topic Cluster & Content Roadmap Package',
      scenario: 'A brand hires a strategist to build a 6-month content roadmap covering 3 core topic pillars and 24 detailed content briefs, requiring 65 hours. At $140/hr, what is the project fee?',
      inputs: { estimatedHours: 65, hourlyRate: '$140', keywordToolingCost: '$400' },
      steps: [
        { label: 'Base Strategy Labor', formula: '65 hours × $140', amount: '$9,100', note: 'Topic clustering & brief creation' },
        { label: 'Specialized Keyword Tooling', formula: 'Targeted SERP analysis cost', amount: '$400', note: 'Pass-through data cost' },
        { label: 'Total Invoiced Project Price', formula: '$9,100 + $400', amount: '$9,500', note: 'Billed across 2 project phases' }
      ],
      takeaway: 'A complete 3-pillar content strategy with 24 production briefs calculates to a clean $9,500 fixed contract fee.'
    },
    faqs: [
      { question: 'What is the average hourly rate for a freelance content strategist?', answer: 'Freelance content strategists typically charge between $85 and $175 per hour, with enterprise B2B and technical content architects commanding $180 to $225+ per hour.', sourceUrl: 'https://www.bls.gov/oes/current/oes273043.htm' },
      { question: 'How is a content strategist different from a copywriter?', answer: 'A copywriter writes the actual article or copy. A content strategist determines what topics to cover, who to target, which keywords to cluster, how content is structured, and how performance is measured.', sourceUrl: 'https://www.bls.gov/oes/current/oes273043.htm' },
      { question: 'How much does a freelance content audit cost?', answer: 'A comprehensive website content audit and keyword gap roadmap typically costs between $5,000 and $15,000, depending on the volume of existing indexable URLs.', sourceUrl: 'https://www.bls.gov/oes/current/oes273043.htm' },
      { question: 'What tools are essential for an independent content strategy practice?', answer: 'Essential tools include Ahrefs or Semrush for keyword data, Clearscope or MarketMuse for content optimization, Screaming Frog for website crawling, and Notion for editorial workflow.', sourceUrl: 'https://www.bls.gov/oes/current/oes273043.htm' },
      { question: 'Do content strategists guarantee search engine rankings?', answer: 'No. Professional strategists apply best practices for organic search and user intent, but do not guarantee specific rankings due to algorithmic volatility.', sourceUrl: 'https://www.bls.gov/oes/current/oes273043.htm' }
    ]
  },

  'brand-designer': {
    slug: 'brand-designer',
    roleTitle: 'Brand Designer',
    title: 'Freelance Brand Designer Project & Hourly Calculator | FeeKit',
    metaDescription: 'Calculate freelance brand designer identity package and hourly rates grounded in BLS SOC 27-1024 data, typography licensing, vector suites, and 55% utilization.',
    h1: 'Freelance Brand Designer Rate Calculator & Identity Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes271024.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 27-1024 (Graphic Designers and Brand Identity Designers).',
    overview: 'Freelance brand designers create comprehensive visual identity systems, including logo marks, brand typography hierarchies, color palettes, vector brand guidelines, packaging designs, and digital brand collateral. Under BLS SOC 27-1024 benchmarks, median graphic designers earn $58,910 annually ($28.32/hour), while experienced brand identity specialists in major commercial centers command $85,000 to $120,000+ base. Operating as an independent brand designer requires billing between $80 and $160+ per hour (or $5,000 to $20,000+ per brand identity package) to cover commercial font licensing, vector design suites, physical swatch books, and non-billable creative exploration.',
    sections: [
      {
        id: 'bd-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 27-1024) & Brand Identity Package Structures',
        body: `Brand designers package their services across four established structures:

1. **Comprehensive Brand Identity Package ($5,000 – $18,000 flat)**: The standard industry deliverable: Brand Strategy & Moodboards (Phase 1), 3 Distinct Identity Concepts (Phase 2), and Final Logo Suite, Guidelines Book & Asset Exports (Phase 3).
2. **Enterprise Brand System & Guidelines ($15,000 – $40,000)**: Exhaustive brand governance for scaling companies: multi-brand architecture, packaging dielines, physical retail signage, digital design tokens, and sub-brand rules.
3. **Hourly Strategic Design Advisory ($85 – $165/hr)**: Common for brand consistency reviews, reviewing third-party agency packaging, and creative art direction.
4. **Brand Refresh & Vector Modernization ($3,500 – $8,000)**: Updating existing legacy logos for digital legibility, modernizing color palettes, and creating responsive logo variants (horizontal, stacked, icon).`
      },
      {
        id: 'bd-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: Creative Discovery Reality',
        body: `Brand identity design requires intense divergent creative exploration. An independent brand designer maintains **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours):
- **Brand Strategy & Competitor Auditing (18% of time)**: Analyzing competitor visual landscapes, conducting founder discovery interviews, and establishing visual positioning axes.
- **Divergent Vector Sketching (18% of time)**: Exploring dozens of conceptual directions that never make the final client presentation.
- **Exporting & Production File Prep (10% of time)**: Exporting hundreds of asset variations (SVG, EPS, PNG, PDF in RGB, CMYK, and monochrome).
- **Active Presentation & Execution (50% to 54% billable)**: Building client presentation decks, packaging guidelines, and vector refinement.`
      },
      {
        id: 'bd-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($8,000 – $15,000/yr)',
        body: `Independent brand designers maintain specialized creative toolchains:

- **Vector & Creative Software Subscriptions ($1,200 – $2,500/yr)**: Adobe Creative Cloud All Apps (Illustrator, InDesign, Photoshop), Figma, and vector grid plugins.
- **Commercial Typeface Foundries & Font Testing ($1,500 – $3,500/yr)**: Purchasing desktop testing licenses from boutique foundries (Pangram Pangram, Grilli Type, Dinamo).
- **Physical Color Swatches & Proofing Tools ($800 – $1,800/yr)**: Official Pantone Matching System (PMS) Formula Guides, CMYK swatch books, and spectrophotometers.
- **Color-Calibrated Hardware & Drawing Tablets ($2,500 – $4,500/yr amortized)**: High-spec workstations, color-accurate displays (Eizo, Apple Studio Display), and Wacom/iPad drawing hardware.
- **Commercial Insurance & Legal ($1,200 – $2,000/yr)**: Trademark clearance support and commercial liability insurance.`
      },
      {
        id: 'bd-contracting-risks-trademark',
        title: 'Contracting Risks: Trademark Clearance, Font Licensing, and Unlimited Iterations',
        body: `Brand design agreements must mitigate critical legal and scope exposures:

1. **Trademark Clearance Disclaimers**: Brand designers create artistic visual marks. Contracts must clarify that legal trademark searches and USPTO registration are the client’s legal responsibility.
2. **Commercial Font Licensing**: Font foundry licenses for commercial web and app embedding must be purchased directly by the client in their legal business name.
3. **Concept Limits**: Proposals must strictly limit the number of initial creative directions presented (typically 2 to 3 concepts) and cap revisions to two rounds on the chosen concept.`
      },
      {
        id: 'bd-contract-wording-clause',
        title: 'Model Brand Design Scope and Trademark Disclaimer Clause',
        body: `Protect your brand identity practice with this standard clause:

> **Brand Identity Concept Governance and Trademark Disclaimer Clause**:  
> *"Fee includes presentation of up to three (3) distinct visual brand concepts, and up to two (2) consolidated rounds of refinement on the single concept selected by Client. Additional concepts or substantial pivots after concept selection shall constitute a Change Order billed at $[HOURLY_RATE]/hour. Designer conducts informal visual originality checks; however, Designer does NOT provide legal trademark, copyright, or servicemark clearance. Client shall be solely responsible for conducting formal trademark availability searches with qualified legal counsel prior to commercial use. Commercial licenses for proprietary third-party typefaces shall be licensed directly by Client."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Senior Brand Identity Designer ($100,000 Target Take-Home Net)',
      scenario: 'A brand designer targeting $100,000 net personal income budgets 46 active weeks, 23 billable hours/wk (1,058 annual hours), $12,000 in software, font, and hardware overhead, 26% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$100,000', annualOverhead: '$12,000', billableHours: 1058, taxRate: '26%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$100,000 ÷ (1 - 0.26)', amount: '$135,135', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($135,135 + $12,000 overhead) × 1.15', amount: '$169,205', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Hourly Rate', formula: '$169,205 ÷ 1,058 billable hours', amount: '$159.93', note: 'Senior brand designer rate' },
        { label: 'Full Brand Identity Package', formula: '$159.93 × 60 hours', amount: '$9,596', note: 'Standard identity package' }
      ],
      takeaway: 'To take home $100k net after covering font libraries, Pantone swatches, and hardware across 1,058 billable hours, a brand designer needs to charge ~$160/hour.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Fixed-Price Startup Brand Package',
      scenario: 'A designer quotes a startup brand package requiring 50 hours of design labor plus $500 for font licensing pass-through and print proofing. What is the contract price?',
      inputs: { laborHours: 50, hourlyRate: '$140', fontAndProofingPassThrough: '$500' },
      steps: [
        { label: 'Base Brand Design Labor', formula: '50 hours × $140', amount: '$7,000', note: '3 concepts + guidelines' },
        { label: 'Font & Print Proofing Costs', formula: 'Commercial font & swatch pass-through', amount: '$500', note: 'Direct project expense' },
        { label: 'Total Invoiced Project Price', formula: '$7,000 + $500', amount: '$7,500', note: 'Billed across 3 milestones' }
      ],
      takeaway: 'A complete visual identity package with guidelines book and font licensing calculates to a clean $7,500 fixed contract fee.'
    },
    faqs: [
      { question: 'What is the average cost of a freelance brand identity package?', answer: 'A comprehensive brand identity package typically costs between $5,000 and $18,000 for startups and small businesses, while enterprise rebrands range from $25,000 to $60,000+.', sourceUrl: 'https://www.bls.gov/oes/current/oes271024.htm' },
      { question: 'How is brand design different from logo design?', answer: 'Logo design is just a single mark. Brand design encompasses an entire visual system: typography hierarchy, color rules, grid systems, image treatments, and complete brand guidelines books.', sourceUrl: 'https://www.bls.gov/oes/current/oes271024.htm' },
      { question: 'Who is legally responsible for trademark searches?', answer: 'The client is legally responsible for conducting formal trademark searches with an intellectual property attorney before legally filing or commercializing the brand mark.', sourceUrl: 'https://www.bls.gov/oes/current/oes271024.htm' },
      { question: 'Who pays for commercial font licenses in brand design?', answer: 'Commercial licenses for font software used in websites, mobile apps, or commercial packaging must be purchased directly by the client in their company name.', sourceUrl: 'https://www.bls.gov/oes/current/oes271024.htm' },
      { question: 'How many logo concepts should a brand designer present?', answer: 'Industry best practice is to present 2 to 3 fully fleshed-out, distinct visual concepts. Presenting more than 3 concepts dilutes strategic focus and confuses client stakeholders.', sourceUrl: 'https://www.bls.gov/oes/current/oes271024.htm' }
    ]
  },

  'voice-actor': {
    slug: 'voice-actor',
    roleTitle: 'Voice Actor',
    title: 'Freelance Voice Actor Rate & Commercial Buyout Calculator | FeeKit',
    metaDescription: 'Calculate voice-over rates grounded in SAG-AFTRA and GVAA industry rate guides, acoustic studio overhead, broadcast buyouts, and 45% billable studio time.',
    h1: 'Freelance Voice Actor Rate Calculator & Studio Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes272011.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Code 27-2011 and Global Voice Acting Academy (GVAA) Rate Guide.',
    overview: 'Freelance voice actors (VO talent) record broadcast commercial spots, corporate narrations, e-learning modules, video game characters, and audiobooks from professional broadcast-quality home recording booths. Under BLS SOC 27-2011 benchmarks, actors earn a median hourly wage of $17.94, with union (SAG-AFTRA) commercial voice talent earning $450 to $1,500+ per session plus residuals. Operating as an independent freelance voice talent requires pricing based on finished audio minutes, word counts, and commercial broadcast usage licensing (buyouts) to cover soundproof acoustic booths, high-end condenser microphones, Source-Connect lines, and vocal health downtime.',
    sections: [
      {
        id: 'va-benchmarks-and-pricing-models',
        title: 'Industry Benchmarks (GVAA / SAG-AFTRA) & Voice-Over Pricing Models',
        body: `Voice-over compensation is governed by standardized industry rate guides (GVAA):

1. **Non-Broadcast Corporate / E-Learning ($250 – $600 base)**: Billed by word count brackets (e.g., $300 for up to 500 words, $0.25/word thereafter) for internal corporate training, explainer videos, and website demos with non-paid distribution.
2. **Commercial Broadcast + Usage Buyouts ($750 – $3,500+ per spot)**: Composed of a Session Fee (recording time) PLUS a Usage / Buyout Fee based on distribution reach (Local TV, National TV, Paid Digital YouTube/Meta ads) and duration (13-week, 1-year, or buyout).
3. **Audiobooks ($250 – $500 per Finished Hour - PFH)**: Standard publishing rate covering recording, editing, mastering, and ACX audio specification compliance.
4. **Video Game & Character Voice ($350 – $800/hr)**: Session-based hourly rates with strict 2- to 4-hour caps to prevent vocal cord exhaustion.`
      },
      {
        id: 'va-billable-utilization-drivers',
        title: 'The Vocal Fatigue Reality: 4 Hours of Studio Recording Maximum',
        body: `Unlike sedentary desk work, vocal cords are biological muscles. Expecting to record 8 hours per day causes vocal strain and career-ending polyps.

A sustainable voice-over practice operates at **40% to 50% billable studio utilization** (800 to 1,000 annual studio hours):
- **Studio Recording Cap (3 to 4 hours/day max)**: Performing high-energy reads, character accents, or sustained audiobook narration.
- **Auditioning & Self-Submissions (20% of time)**: Recording 5 to 15 competitive auditions daily for casting directors and agency rosters.
- **Audio Editing, De-Clicking & Mastering (25% of time)**: Removing mouth clicks (iZotope RX Mouth De-click), trimming breaths, normalizing levels, and mastering to -23 LUFS / -3dB peak.
- **Administrative & Business Operations (15% of time)**: Managing Source-Connect remote director sessions, invoicing, and contract licensing management.`
      },
      {
        id: 'va-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($8,000 – $16,000/yr)',
        body: `Voice actors maintain broadcast-certified recording infrastructure:

- **Acoustic Isolation Booth ($4,000 – $8,000 amortized)**: WhisperRoom, StudioBricks, or custom acoustic vocal booths achieving an ambient noise floor below -60dB.
- **Broadcast Condenser Microphones ($1,200 – $3,500 amortized)**: Industry-standard microphones (Sennheiser MKH 416, Neumann U87, Neumann TLM 103).
- **Audio Interfaces & Hardware Preamps ($1,000 – $2,500)**: Clean low-noise preamps (Grace Design, Apollo Twin) and dedicated headphone monitors.
- **Remote Directed Session Tooling ($800 – $1,800/yr)**: Source-Connect Standard license, SessionLinkPRO, and high-speed hardwired fiber internet.
- **Audio Restoration Plugins ($1,000 – $2,000/yr)**: iZotope RX Advanced, FabFilter mastering suites, and DAW subscriptions (Reaper, Pro Tools).`
      },
      {
        id: 'va-contracting-risks-ai',
        title: 'Contracting Risks: AI Voice Cloning, Unapproved Broadcast Usage, and Re-Reads',
        body: `Voice-over contracts require strict protective covenants:

1. **AI Voice Cloning & Synthetic Training Prohibitions**: Contracts must explicitly forbid the client from using recorded audio to train generative text-to-speech (TTS) models or synthetic voice clones.
2. **Defined Usage Licensing Windows**: Commercial voice rates are licenses, not permanent ownership. If a 1-year digital ad buyout expires, the client must pay renewal fees to keep the ad running.
3. **Script Revision Fees**: Re-recording due to client script changes after delivery is billable at a 50% pick-up fee; re-reads due to actor pronunciation error are corrected free of charge.`
      },
      {
        id: 'va-contract-wording-clause',
        title: 'Model Voice-Over Licensing and AI Voice Cloning Prohibition Clause',
        body: `Protect your voice and intellectual property with this mandatory clause:

> **Voice Licensing Term and AI Voice Cloning Prohibition Clause**:  
> *"Fee grants Client a non-exclusive license to broadcast the recorded Voice Deliverables strictly within the media channels, geographic territories, and time duration specified in Schedule A ('Usage Term'). Client explicitly agrees that voice recordings provided shall NOT be utilized, leased, or assigned to train artificial intelligence (AI), machine learning models, text-to-speech (TTS) engines, or synthetic voice-cloning software without separate, express written consent and payment of synthetic licensing royalties. Re-recording necessitated by script modifications following recording delivery shall incur a 50% Pick-Up Fee."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Commercial Voice Actor ($90,000 Target Take-Home Net)',
      scenario: 'A voice actor targeting $90,000 net personal income budgets 46 active weeks, 900 annual billable studio hours, $12,000 in booth/hardware overhead, 25% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$90,000', annualOverhead: '$12,000', billableHours: 900, taxRate: '25%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$90,000 ÷ (1 - 0.25)', amount: '$120,000', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($120,000 + $12,000 overhead) × 1.15', amount: '$151,800', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Studio Hourly Rate', formula: '$151,800 ÷ 900 studio hours', amount: '$168.67/hr', note: 'Studio session base rate' },
        { label: 'Standard Corporate Explainer (2 min)', formula: 'Session base + usage license', amount: '$450.00', note: 'GVAA guide benchmark' }
      ],
      takeaway: 'Because voice actors cap studio recording at ~20 hours per week to protect vocal health, an actor needs an effective ~$170/studio hour return to clear $90k net.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Commercial TV Spot Quote (Session + Buyout)',
      scenario: 'A brand hires a voice actor for a 30-second regional television spot. Under GVAA standards: $400 basic session fee + $1,200 regional broadcast 1-year buyout. What is the total invoice?',
      inputs: { sessionFee: '$400', regionalTV1YearBuyout: '$1,200', remoteDirectingFee: '$100' },
      steps: [
        { label: 'Studio Session Fee', formula: 'Basic recording labor', amount: '$400', note: 'Includes 1 hour directed session' },
        { label: 'Regional TV 1-Year Buyout', formula: 'Broadcast licensing rights', amount: '$1,200', note: '12-month broadcast usage' },
        { label: 'Source-Connect Remote Bridge', formula: 'Live director patch fee', amount: '$100', note: 'Studio connection fee' },
        { label: 'Total Invoiced Commercial Fee', formula: '$400 + $1,200 + $100', amount: '$1,700', note: 'Commercial broadcast total' }
      ],
      takeaway: 'Separating session recording labor from broadcast licensing yields a $1,700 quote, protecting the actor’s intellectual property rights.'
    },
    faqs: [
      { question: 'How are voice actor rates calculated?', answer: 'Voice actor rates are calculated based on a base session/recording fee PLUS a usage/buyout fee determined by media distribution (web, local TV, national TV) and duration (13 weeks, 1 year, perpetual).', sourceUrl: 'https://www.bls.gov/oes/current/oes272011.htm' },
      { question: 'What is a Per Finished Hour (PFH) rate in audiobooks?', answer: 'PFH means the actor is paid based on the final mastered running time of the audiobook, not the hours spent recording. A 10-hour audiobook at $300 PFH yields $3,000.', sourceUrl: 'https://www.bls.gov/oes/current/oes272011.htm' },
      { question: 'How do voice actors prevent their voices from being cloned by AI?', answer: 'Voice contracts must include explicit AI Voice Cloning Prohibition clauses legally barring clients from feeding recordings into generative text-to-speech models.', sourceUrl: 'https://www.bls.gov/oes/current/oes272011.htm' },
      { question: 'Why can voice actors only record 3 to 4 hours per day?', answer: 'Vocal cords are delicate muscles. Exceeding 4 hours of intense vocal performance per day causes vocal strain, tone distortion, and permanent vocal cord damage.', sourceUrl: 'https://www.bls.gov/oes/current/oes272011.htm' },
      { question: 'What audio hardware is mandatory for a professional voice actor?', answer: 'Industry standards require an acoustic isolation booth with a noise floor below -60dB, a broadcast condenser microphone (Sennheiser 416 or Neumann U87), clean preamps, and Source-Connect.', sourceUrl: 'https://www.bls.gov/oes/current/oes272011.htm' }
    ]
  },

  'illustrator': {
    slug: 'illustrator',
    roleTitle: 'Illustrator',
    title: 'Freelance Illustrator Project & Licensing Calculator | FeeKit',
    metaDescription: 'Calculate freelance illustrator project and licensing rates grounded in BLS SOC 27-1013 data, graphic tablet overhead, copyright buyouts, and 55% utilization.',
    h1: 'Freelance Illustrator Rate Calculator & Commercial Licensing Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes271013.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Code 27-1013 and Graphic Artists Guild Handbook: Pricing & Ethical Guidelines.',
    overview: 'Freelance illustrators create editorial magazine artwork, children’s book illustrations, packaging art, digital game concept art, and corporate marketing imagery using Procreate, Adobe Photoshop, and digital pen displays. Under BLS SOC 27-1013 benchmarks, fine artists and illustrators earn a median annual wage of $69,870 ($33.59/hour). Operating as an independent freelance illustrator requires pricing work based on creative labor plus commercial copyright licensing (print runs, territory, and exclusivity) to cover digital drawing displays, archival scanning equipment, high-res art software, and non-billable rough sketching.',
    sections: [
      {
        id: 'il-benchmarks-and-pricing-models',
        title: 'Industry Benchmarks (Graphic Artists Guild) & Illustration Pricing Models',
        body: `Illustrators structure their fees based on industry standards (Graphic Artists Guild Handbook):

1. **Editorial Illustration ($500 – $2,500/spot or cover)**: Standard rates for magazine, newspaper, and digital publication articles. Spots ($500–$800), full-page ($1,200–$1,800), and covers ($2,000–$3,500+).
2. **Commercial Packaging & Advertising ($3,000 – $15,000/campaign)**: High-visibility commercial packaging, consumer product labels, and retail displays. Incorporates heavy usage licensing premiums.
3. **Children’s Book Project ($6,000 – $25,000 advance + royalties)**: Complete 32-page picture book illustration packages, typically structured as an advance against a 3.5% to 6.0% author/illustrator book royalty.
4. **Hourly Concept Art & Production ($65 – $130/hr)**: Common for video game studio character exploration, rough ideation sketches, and storyboard frames.`
      },
      {
        id: 'il-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: Thumbnailing and Art Exploration',
        body: `Illustration requires significant non-billable sketching and revision. An independent illustrator maintains **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours):
- **Thumbnail Sketching & Visual Research (18% of time)**: Exploring composition thumbnails, color studies, and collecting reference photography.
- **Client Rough Sketch Reviews (12% of time)**: Presenting pencil roughs, securing feedback, and refining composition anatomy before final rendering.
- **High-Res Scanning & Color Separation (10% of time)**: Color-correcting digital files, setting CMYK print profiles, and preparing print-ready vector/TIFF files.
- **Active Rendering & Inking (52% to 56% billable)**: Final inking, digital painting, texturing, and rendering.`
      },
      {
        id: 'il-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($7,000 – $13,000/yr)',
        body: `Illustrators maintain specialized creative and physical art tooling:

- **Digital Drawing Displays & Tablets ($1,500 – $3,500 amortized)**: Wacom Cintiq Pro 24/27, iPad Pro with Apple Pencil, or Huion drawing tablets.
- **Illustration Software & Brushes ($800 – $1,800/yr)**: Adobe Creative Cloud, Procreate, Clip Studio Paint EX, and commercial brush pack subscriptions.
- **High-Resolution Art Scanners & Color Proofing ($1,200 – $2,500 amortized)**: Large-format Epson scanners for physical traditional artwork, plus archival proofing printers.
- **High-End Workstation Hardware ($2,000 – $3,500/yr amortized)**: Mac Studio or PC with high RAM for running multi-layered 600DPI Photoshop art files.
- **Commercial Insurance & Studio Supplies ($1,200 – $2,000/yr)**: Studio space insurance, traditional paints, archival paper, and professional guild memberships.`
      },
      {
        id: 'il-contracting-risks-copyright',
        title: 'Contracting Risks: Work-for-Hire Traps, Copyright Buyouts, and AI Scraping',
        body: `Illustration contracts require strict legal copyright boundaries:

1. **Beware of "Work-for-Hire" Clauses**: Work-for-hire strips the artist of all future copyright, meaning the client owns the art forever and can resell it without royalties. Never sign work-for-hire without a 100% to 300% buyout surcharge.
2. **Limited Commercial License Structure**: License the artwork for specific uses (e.g., North American Print English Rights for 2 years). Additional prints or merchandise runs require new licensing fees.
3. **AI Training Scraping Protections**: Contracts must explicitly forbid using illustration files to train generative AI diffusion models (Midjourney, Stable Diffusion).`
      },
      {
        id: 'il-contract-wording-clause',
        title: 'Model Illustration Copyright Licensing and AI Prohibition Clause',
        body: `Protect your artwork with this standard Graphic Artists Guild clause:

> **Illustration Copyright Licensing and AI Model Training Prohibition**:  
> *"Artist retains full, exclusive copyright and intellectual property rights to all original artwork, sketches, and digital files. Upon receipt of full payment, Artist grants Client an exclusive commercial license to reproduce the final artwork solely within the media formats, territories, and time period specified in Schedule A ('Licensed Use'). This engagement does NOT constitute a Work-for-Hire. Client is strictly prohibited from utilizing, selling, or uploading Artist's artwork into artificial intelligence (AI), machine learning models, or diffusion image generators. Any expanded media usage, reprints, or secondary product merchandising shall require separate written licensing agreement."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Commercial Editorial & Packaging Illustrator ($85,000 Target Take-Home Net)',
      scenario: 'An illustrator targeting $85,000 net personal income budgets 46 active weeks, 23 billable hours/wk (1,058 annual hours), $10,000 in tablet/software overhead, 25% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$85,000', annualOverhead: '$10,000', billableHours: 1058, taxRate: '25%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$85,000 ÷ (1 - 0.25)', amount: '$113,333', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($113,333 + $10,000 overhead) × 1.15', amount: '$141,833', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Hourly Rate', formula: '$141,833 ÷ 1,058 billable hours', amount: '$134.06', note: 'Senior commercial illustrator rate' },
        { label: 'Packaging Art Package (25 hrs)', formula: '$134.06 × 25 hours', amount: '$3,351', note: 'Excludes commercial buyout surcharge' }
      ],
      takeaway: 'To take home $85k net while paying for Cintiq displays, software, and taxes across 1,058 billable hours, an illustrator needs an effective ~$135/hour return.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Commercial Packaging Illustration with Buyout Surcharge',
      scenario: 'A food company commissions an illustrated mascot for a national snack brand. Base creative labor is $3,500. The client requires a full commercial copyright buyout (150% surcharge). What is the total quote?',
      inputs: { baseIllustrationLabor: '$3,500', copyrightBuyoutSurcharge: '150%' },
      steps: [
        { label: 'Base Creation Labor', formula: 'Concept, sketch, render', amount: '$3,500', note: 'Core illustration labor' },
        { label: 'Copyright Buyout Surcharge (150%)', formula: '$3,500 × 1.50', amount: '$5,250', note: 'Full commercial buyout rights' },
        { label: 'Total Invoiced Project Price', formula: '$3,500 + $5,250', amount: '$8,750', note: 'Full copyright transfer' }
      ],
      takeaway: 'Adding a 150% buyout surcharge for perpetual copyright transfer yields an $8,750 commercial contract.'
    },
    faqs: [
      { question: 'What is the average hourly rate for a freelance illustrator?', answer: 'Freelance illustrators typically charge between $65 and $130 per hour, with specialized commercial packaging and publishing artists charging $140 to $180+ per hour.', sourceUrl: 'https://www.bls.gov/oes/current/oes271013.htm' },
      { question: 'Why do illustrators charge licensing fees instead of flat labor?', answer: 'Illustration value is determined by audience reach. A piece printed on 500 local flyers has less commercial value than the same piece printed on 1,000,000 cereal boxes nationwide.', sourceUrl: 'https://www.bls.gov/oes/current/oes271013.htm' },
      { question: 'What is a work-for-hire clause and why is it dangerous for illustrators?', answer: 'Work-for-hire permanently transfers all copyright to the client, preventing the artist from ever licensing the image again, publishing prints, or showcasing it in books without permission.', sourceUrl: 'https://www.bls.gov/oes/current/oes271013.htm' },
      { question: 'How much does a children’s book illustration advance pay?', answer: 'Traditional publishing advances for a 32-page picture book typically range from $6,000 to $25,000+, paid across milestones (signing, sketches, final art) against book royalties.', sourceUrl: 'https://www.bls.gov/oes/current/oes271013.htm' },
      { question: 'How do illustrators protect artwork from AI image scrapers?', answer: 'Contracts must include strict clauses prohibiting clients from uploading artwork to train generative AI diffusion models, and artists apply invisible watermark cloaks (Glaze, Nightshade).', sourceUrl: 'https://www.bls.gov/oes/current/oes271013.htm' }
    ]
  },

  'virtual-assistant': {
    slug: 'virtual-assistant',
    roleTitle: 'Virtual Assistant',
    title: 'Freelance Virtual Assistant Hourly & Retainer Calculator | FeeKit',
    metaDescription: 'Calculate freelance executive virtual assistant hourly and package rates grounded in BLS SOC 43-6011 data, operational tooling overhead, and 65% utilization.',
    h1: 'Freelance Virtual Assistant Rate Calculator & Retainer Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes436011.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 43-6011 (Executive Secretaries and Executive Administrative Assistants).',
    overview: 'Freelance virtual assistants (VAs) provide executive administrative support, calendar orchestration, complex travel coordination, email inbox triage, and CRM data management for executive founders, busy professionals, and agency leaders. Under BLS SOC 43-6011 benchmarks, salaried executive administrative assistants earn a median annual wage of $67,730 ($32.56/hour). Operating as an independent executive VA commands rates between $35 and $70+ per hour (or $1,500 to $4,500/month retainers) to cover self-employment tax, enterprise password security tools, specialized CRM software, and non-billable client onboarding.',
    sections: [
      {
        id: 'va-admin-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 43-6011) & Virtual Assistant Pricing Structures',
        body: `Virtual assistants structure their client engagements across four models:

1. **Monthly Hours Retainer ($1,500 – $4,000/mo)**: The industry standard: purchasing dedicated blocks of time (e.g., 20, 30, or 40 hours per month) with unused hours expiring at the end of each billing cycle.
2. **Hourly Executive Support ($35 – $75/hr)**: Ad-hoc administrative assistance for fluctuating workloads, complex calendar reorganizations, or project-based research.
3. **Executive Travel & Offsite Coordination ($1,500 – $3,500/event)**: Flat-fee event packages organizing executive leadership offsites, flight manifests, hotel blocks, and catering logistics.
4. **Operations & System Setup Sprint ($2,000 – $5,000 flat)**: Specialized setup configuring client email inbox filters, Notion/Asana workspace templates, and automated scheduling funnels.`
      },
      {
        id: 'va-admin-billable-utilization-drivers',
        title: 'Managing the Administrative Portfolio: The 1,300-Hour Benchmark',
        body: `Virtual assistants operate at high operational utilization. An independent executive VA maintains **60% to 68% billable utilization** (1,250 to 1,350 annual billable hours across 3 to 5 clients):
- **Portfolio Distribution (28 to 32 billable hours/week)**:
  - Client A (Tech Founder): 10 hours/week (Calendar triage, travel, email filtering)
  - Client B (Real Estate Broker): 8 hours/week (CRM data entry, client follow-ups)
  - Client C (Management Consultant): 6 hours/week (Invoicing, travel itineraries)
  - Client D (Author/Speaker): 6 hours/week (Speaking engagement logistics)
- **Asynchronous Task Switching & Tooling Maintenance (8 hours/week non-billable)**: Managing 1Password vaults, testing booking software, and client time tracking.
- **Client Onboarding & Business Administration (4 hours/week)**: Scoping prospective clients and preparing monthly invoice statements.`
      },
      {
        id: 'va-admin-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($5,000 – $9,000/yr)',
        body: `Virtual assistants maintain secure administrative and communication tools:

- **Enterprise Password & Security Software ($300 – $600/yr)**: 1Password Teams or Bitwarden for secure, encrypted client credential delegation without sharing raw passwords.
- **Scheduling, Calendar & Task Suites ($600 – $1,200/yr)**: Calendly, Motion, Notion, Asana, and Zapier automated workflow tooling.
- **Dedicated VoIP Phone Lines & Messaging ($400 – $800/yr)**: OpenPhone or RingCentral dedicated business phone lines for client calls and SMS verification.
- **Workstation & High-Speed Internet ($1,800 – $3,000/yr amortized)**: Fast dual-monitor computer workstation and high-speed fiber internet with mobile hotspot backup.
- **Commercial Errors & Omissions Insurance ($1,000 – $1,800/yr)**: Crucial liability coverage protecting against administrative booking errors or accidental data leakage.`
      },
      {
        id: 'va-admin-contracting-risks-boundaries',
        title: 'Contracting Risks: Emergency On-Call Creep, Credit Card Handling, and Expiration',
        body: `Virtual assistant contracts require clear operational ground rules:

1. **Unused Retainer Hours Expire**: Monthly retainer hours do not roll over to subsequent months; the retainer reserves the VA's capacity.
2. **Financial Credit Card Liability**: VAs frequently book flights and purchase supplies. The client must supply corporate credit cards; VAs must never use personal credit cards or front cash.
3. **Turnaround Time Expectations**: Standard requests require a 24- to 48-hour business turnaround. Immediate same-day emergency requests should incur rush rates.`
      },
      {
        id: 'va-admin-contract-wording-clause',
        title: 'Model Virtual Assistant Retainer Scope and Card Authorization Clause',
        body: `Protect your administrative practice with this standard clause:

> **Monthly Retainer Capacity and Purchasing Authorization Clause**:  
> *"Monthly Retainer reserves a dedicated capacity of [HOURS] hours per billing cycle. Unused hours do not roll over to subsequent months and are non-refundable. Standard administrative tasks are performed during standard business hours (Monday–Friday, 9am–5pm) with an average 24-hour turnaround window. For travel bookings, office purchases, or event vendor deposits, Client shall provide a dedicated corporate credit card. Assistant shall not be authorized to front personal funds. Assistant exercises reasonable care in bookings; however, Client remains responsible for verifying final itinerary details."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Executive Virtual Assistant ($65,000 Target Take-Home Net)',
      scenario: 'An executive virtual assistant targeting $65,000 net personal income budgets 48 active weeks, 28 billable hours/wk (1,344 annual hours), $7,000 in software and security overhead, 24% taxes, and a 12% safety buffer.',
      inputs: { desiredNet: '$65,000', annualOverhead: '$7,000', billableHours: 1344, taxRate: '24%', buffer: '12%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$65,000 ÷ (1 - 0.24)', amount: '$85,526', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($85,526 + $7,000 overhead) × 1.12', amount: '$103,629', note: 'Includes 12% safety buffer' },
        { label: 'Calculated Hourly Rate', formula: '$103,629 ÷ 1,344 billable hours', amount: '$77.10', note: 'Executive VA hourly rate' },
        { label: 'Monthly 20-Hour Retainer', formula: '$77.10 × 20 hours', amount: '$1,542/mo', note: 'Standard executive package' }
      ],
      takeaway: 'To take home $65k net after funding 1Password, dedicated VoIP, and self-employment taxes across 1,344 hours, an executive VA needs to bill ~$75–$77/hour.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Building an $8,000/Month Multi-Client VA Practice',
      scenario: 'A virtual assistant manages four clients on dedicated 25-hour monthly retainers ($1,875/mo per client at $75/hr). What is the total business revenue and capacity load?',
      inputs: { clientCount: 4, monthlyHoursPerClient: 25, hourlyRate: '$75' },
      steps: [
        { label: 'Monthly Billing Per Client', formula: '25 hours × $75', amount: '$1,875/mo', note: 'Retainer per executive' },
        { label: 'Total Monthly Business Turnover', formula: '$1,875 × 4 clients', amount: '$7,500/mo', note: 'Recurring monthly revenue' },
        { label: 'Annual Business Gross Turnover', formula: '$7,500 × 12 months', amount: '$90,000/yr', note: 'Solid independent practice' },
        { label: 'Weekly Billable Workload', formula: '(25 hrs × 4) ÷ 4 weeks', amount: '25 hrs/week', note: 'Leaves 15 hrs for admin & balance' }
      ],
      takeaway: 'Four 25-hour client retainers generate $90,000 annually while requiring only 25 billable hours per week.'
    },
    faqs: [
      { question: 'What is the average hourly rate for a freelance virtual assistant?', answer: 'US-based executive virtual assistants typically charge between $35 and $75 per hour. Monthly retainers for 20 to 30 hours of support typically range from $1,200 to $2,500 per month.', sourceUrl: 'https://www.bls.gov/oes/current/oes436011.htm' },
      { question: 'Do unused virtual assistant retainer hours roll over?', answer: 'Industry standard contracts specify that retainer hours do not roll over to subsequent months because the retainer guarantees the assistant’s availability and capacity.', sourceUrl: 'https://www.bls.gov/oes/current/oes436011.htm' },
      { question: 'How do virtual assistants securely handle client passwords?', answer: 'Professional VAs use team password managers (1Password Teams, Bitwarden) that allow clients to share login access securely without revealing raw passwords.', sourceUrl: 'https://www.bls.gov/oes/current/oes436011.htm' },
      { question: 'Who pays for travel and office expenses booked by a VA?', answer: 'The client must always provide a dedicated corporate credit card for bookings. Professional virtual assistants do not front personal cash for client purchases.', sourceUrl: 'https://www.bls.gov/oes/current/oes436011.htm' },
      { question: 'What is the difference between an admin VA and a specialized VA?', answer: 'An admin VA handles calendars, travel, and email. Specialized VAs handle bookkeeping, social media scheduling, podcast editing, or CRM administration and charge higher rates.', sourceUrl: 'https://www.bls.gov/oes/current/oes436011.htm' }
    ]
  },

  'pr-specialist': {
    slug: 'pr-specialist',
    roleTitle: 'PR Specialist',
    title: 'Freelance PR Specialist Retainer & Hourly Calculator | FeeKit',
    metaDescription: 'Calculate freelance public relations (PR) consultant monthly retainers grounded in BLS SOC 27-3031 data, media database overhead, and press pitch management.',
    h1: 'Freelance PR Specialist Rate Calculator & Media Relations Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 27-3031 (Public Relations Specialists).',
    overview: 'Freelance Public Relations (PR) specialists craft press releases, build targeted journalist media lists, pitch tier-one editorial publications, manage product launch announcements, and execute crisis communications for venture-backed startups and corporate executives. Under BLS SOC 27-3031 benchmarks, salaried PR specialists earn a median annual wage of $67,440 ($32.42/hour), with senior agency PR directors in major metropolitan markets exceeding $125,000. Independent PR consultants typically manage 2 to 4 corporate accounts, billing monthly retainers between $4,000 and $10,000 per client (or $125 to $250/hour) to cover expensive media database subscriptions (Muck Rack, Cision), wire distribution fees, and crisis availability.',
    sections: [
      {
        id: 'pr-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 27-3031) & PR Retainer Pricing Structures',
        body: `PR consultants package their media relations services across four models:

1. **Monthly Media Relations Retainer ($4,500 – $10,000/mo per client)**: The dominant PR model, providing strategic narrative positioning, proactive journalist pitching, drafting press announcements, and media interview prep.
2. **Product Launch & Funding Announcement Sprint ($8,000 – $20,000 flat)**: Intensive 6- to 8-week project orchestrating an embargoed funding round (Series A/B) or major product debut across TechCrunch, Forbes, Bloomberg, and industry trades.
3. **Crisis Communication Advisory ($200 – $350/hr)**: High-stakes emergency advisory guiding leadership through reputational threats, executive transitions, data breach disclosures, or regulatory scrutiny.
4. **Thought Leadership Executive Op-Ed Placement ($3,500 – $8,000)**: Ghostwriting and placing strategic executive commentary in targeted trade journals and national opinion columns.`
      },
      {
        id: 'pr-billable-utilization-drivers',
        title: 'Managing the Media Portfolio: 2 to 4 Accounts Maximum',
        body: `Public relations demands deep journalist relationship maintenance. A freelance PR specialist operates at **52% to 60% billable utilization** (1,050 to 1,200 annual billable hours):
- **Journalist Relationship Cultivation (18% of time)**: Monitoring journalist beat changes on X/Twitter, meeting reporters for coffee, and reading daily newsletters.
- **Press Pitch Customization (15% of time)**: Writing bespoke, highly tailored pitch emails tied to breaking news hooks (newsjacking).
- **Executive Media Training & Interview Prep (12% of time)**: Preparing briefing sheets, soundbites, and Q&A talking points for client interviews.
- **Active Campaign Strategy & Placement (52% to 55% billable)**: Executing launch strategies, organizing press tours, and tracking media coverage.`
      },
      {
        id: 'pr-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($9,000 – $18,000/yr)',
        body: `PR consultants maintain exceptionally expensive media intelligence software:

- **Media Database & Journalist Outreach Suites ($4,000 – $8,000/yr)**: Muck Rack, Cision, or Meltwater subscriptions providing verified reporter contact info and beat histories.
- **Media Monitoring & Coverage Tracking ($1,500 – $3,500/yr)**: CoverageBook, Brand24, or Critical Mention to track digital, broadcast, and print placements.
- **Wire Distribution Services ($1,500 – $3,000/yr)**: PR Newswire or Business Wire distribution credits (typically passed through directly to clients).
- **Workstation Hardware & High-Speed Mobile ($1,500 – $2,500/yr amortized)**: Fast mobile hardware for immediate crisis communication responses.
- **Commercial & Defamation Liability Insurance ($1,500 – $2,500/yr)**: Protection against intellectual property or defamation claims.`
      },
      {
        id: 'pr-contracting-risks-coverage',
        title: 'Contracting Risks: The "Guaranteed Coverage" Trap and Wire Fees',
        body: `PR consulting agreements require ironclad legal guardrails:

1. **Earned Media Cannot Be Guaranteed**: Earned media depends on independent editorial discretion and breaking world news. Contracts must explicitly state that compensation is for strategic pitching and media relations labor, not guaranteed coverage.
2. **Wire Service Pass-Through**: Press wire distribution fees (PR Newswire / Business Wire, costing $800–$2,000 per release) must be paid directly by the client.
3. **Client Interview Cancellations**: If a client executive fails to show up for an arranged journalist interview, the PR consultant is not liable for lost media relationships.`
      },
      {
        id: 'pr-contract-wording-clause',
        title: 'Model PR Retainer Scope and Earned Media Disclaimer Clause',
        body: `Protect your PR practice with this standard earned media disclaimer:

> **Public Relations Retainer Scope and Earned Media Disclaimer**:  
> *"Consultant applies professional media relations methodologies to draft press materials, curate media lists, and pitch accredited journalists as outlined in Schedule A. Client acknowledges that earned editorial media is subject to independent journalist and editor discretion, newsroom priorities, and breaking global events. Consultant does NOT guarantee specific press placements, interview inclusions, or publication dates. Consultant's compensation is earned for professional media relations labor and representation, and is not contingent on specific media placements. All wire distribution fees (e.g., Business Wire) shall be billed directly to Client."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: B2B Tech PR Consultant ($120,000 Target Take-Home Net)',
      scenario: 'A tech PR consultant targeting $120,000 net personal income maintains three corporate accounts. They budget $14,000 in Muck Rack and tracking overhead, 27% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$120,000', annualOverhead: '$14,000', clientCount: 3, taxRate: '27%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$120,000 ÷ (1 - 0.27)', amount: '$164,384', note: 'Pre-tax income requirement' },
        { label: 'Total Annual Business Revenue', formula: '($164,384 + $14,000 overhead) × 1.15', amount: '$205,141', note: 'Includes 15% safety buffer' },
        { label: 'Monthly Portfolio Target', formula: '$205,141 ÷ 12 months', amount: '$17,095/mo', note: 'Total monthly billing needed' },
        { label: 'Required Retainer Per Client', formula: '$17,095 ÷ 3 clients', amount: '$5,698/mo', note: 'Average retainer per account' }
      ],
      takeaway: 'Maintaining three tech PR accounts at ~$5,700/month each achieves $205k in gross billings, yielding $120k clean personal take-home.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Series A Funding Launch PR Package',
      scenario: 'A startup hires a PR consultant for an 8-week Series A funding announcement requiring 60 hours of messaging, pitch drafting, and exclusive embargo pitching. At $180/hr, what is the contract price?',
      inputs: { projectHours: 60, hourlyRate: '$180', mediaDatabaseAllocation: '$800' },
      steps: [
        { label: 'Base PR Campaign Labor', formula: '60 hours × $180', amount: '$10,800', note: 'Strategy, pitching, interview prep' },
        { label: 'Media List Database Allocation', formula: 'Targeted Muck Rack list cost', amount: '$800', note: 'Direct project expense' },
        { label: 'Total Launch Contract Price', formula: '$10,800 + $800', amount: '$11,600', note: 'Billed across 2 project phases' }
      ],
      takeaway: 'A complete 8-week funding announcement campaign calculates to an $11,600 fixed contract fee.'
    },
    faqs: [
      { question: 'What is the average monthly retainer for a freelance PR specialist?', answer: 'Freelance PR retainers typically range from $4,000 to $10,000 per month per client, representing strategic positioning, proactive media pitching, and executive interview coordination.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'Do PR consultants guarantee media placements in Forbes or TechCrunch?', answer: 'No. Legitimate PR consultants do not guarantee earned media placements because journalists and editors retain absolute editorial discretion over what they publish.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'Who pays for press release wire distribution fees?', answer: 'The client must always pay press release wire distribution platforms (PR Newswire, Business Wire) directly or reimburse the consultant as a separate pass-through expense.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'How is a PR specialist different from a content marketer?', answer: 'Content marketers write articles published on your company blog. PR specialists pitch your company stories to external third-party news outlets, podcasts, and trade journals.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' },
      { question: 'What software tools are mandatory for an independent PR consultant?', answer: 'A verified media database (Muck Rack, Cision) is essential for reporter contact details, alongside media monitoring tools (CoverageBook) to track press impressions.', sourceUrl: 'https://www.bls.gov/oes/current/oes273031.htm' }
    ]
  },

  'business-analyst': {
    slug: 'business-analyst',
    roleTitle: 'Business Analyst',
    title: 'Freelance Business Analyst Hourly & Project Calculator | FeeKit',
    metaDescription: 'Calculate freelance business analyst consulting rates grounded in BLS SOC 13-1111 data, process mapping (BPMN), requirements gathering, and 60% utilization.',
    h1: 'Freelance Business Analyst Rate Calculator & Requirements Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes131111.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Occupation Code 13-1111 (Management Analysts and Business Analysts).',
    overview: 'Freelance business analysts (BAs) analyze operational workflows, elicit stakeholder requirements, document functional specifications (BRDs, user stories), and design business process models (BPMN) to bridge executive leadership and technical software engineering squads. Under BLS SOC 13-1111 benchmarks, salaried management analysts earn a median annual wage of $99,410 ($47.79/hour), with senior enterprise consultants exceeding $160,000. Operating as an independent business analyst commands consulting rates between $90 and $180+ per hour to cover process modeling suites, collaboration tools, and non-billable client discovery.',
    sections: [
      {
        id: 'ba-benchmarks-and-pricing-models',
        title: 'Market Benchmarks (SOC 13-1111) & Business Analysis Pricing Structures',
        body: `Business analysts structure their consulting across four established models:

1. **Strategic Hourly Consulting ($95 – $175/hr)**: Common for joining agile Scrum ceremonies, writing acceptance criteria, and facilitating stakeholder grooming sessions.
2. **Business Requirements Document (BRD) Milestone ($8,000 – $22,000)**: Scoped across Stakeholder Interviews & Discovery (Phase 1), As-Is vs To-Be Process Mapping (Phase 2), and Complete Functional Requirements & Acceptance Criteria (Phase 3).
3. **ERP / Software Vendor Evaluation Sprint ($10,000 – $25,000)**: Structuring RFP documentation, scoring enterprise software vendors (Salesforce, SAP, NetSuite), and assessing vendor technical capability matrices.
4. **Monthly Operations Retainer ($5,000 – $11,000/mo)**: Ongoing advisory overseeing enterprise digital transformation, monitoring system adoption KPIs, and refining operational workflows.`
      },
      {
        id: 'ba-billable-utilization-drivers',
        title: 'Realistic Billable Utilization: Stakeholder Alignment Reality',
        body: `Business analysis requires heavy interview synthesis and consensus building. A freelance BA maintains **55% to 62% billable utilization** (1,100 to 1,220 annual billable hours):
- **Cross-Department Stakeholder Interviews (18% of time)**: Interviewing department heads, customer support leads, and operational staff to map pain points.
- **Process Diagramming & User Story Refinement (15% of time)**: Designing BPMN 2.0 flowcharts, swimlane diagrams, and writing detailed Gherkin acceptance criteria (Given-When-Then).
- **Consensus Building & Conflict Resolution (12% of time)**: Mediating conflicting priorities between sales, operations, and IT departments.
- **Active Technical Handoff (55% to 60% billable)**: Grooming Jira backlogs and validating technical user acceptance testing (UAT).`
      },
      {
        id: 'ba-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($7,000 – $14,000/yr)',
        body: `Independent business analysts maintain specialized modeling toolchains:

- **Process Mapping & Diagramming Software ($600 – $1,500/yr)**: Lucidchart, Microsoft Visio, Signavio, or Miro enterprise licenses for BPMN process flows.
- **Agile Project Management & Requirement Suites ($1,200 – $2,500/yr)**: Jira Enterprise, Confluence, and Azure DevOps subscriptions.
- **Data Analysis & Business Intelligence Tools ($1,200 – $2,500/yr)**: Power BI Pro, Tableau, or advanced SQL database querying suites.
- **Workstation & Remote Collaboration Hardware ($1,800 – $3,000/yr amortized)**: High-speed dual-monitor workstation and enterprise Zoom/Teams setups.
- **Commercial Errors & Omissions Insurance ($1,500 – $2,500/yr)**: Liability protection against allegations of requirement oversight or implementation delays.`
      },
      {
        id: 'ba-contracting-risks-scope',
        title: 'Contracting Risks: Scope Creep, Developer Rework, and Implementation Blame',
        body: `Business analysis proposals must establish firm procedural boundaries:

1. **Sign-Off Freeze Gates**: Once a Business Requirements Document (BRD) is approved by executive stakeholders, subsequent scope changes must follow formal Change Control procedures.
2. **Implementation Responsibility**: BAs define *what* needs to be built and *why*, but are not responsible for software developer implementation delays or third-party vendor code defects.
3. **User Acceptance Testing (UAT) Limits**: Define whether BA oversight covers writing UAT test scripts or physically executing user tests alongside staff.`
      },
      {
        id: 'ba-contract-wording-clause',
        title: 'Model Requirements Sign-Off and Change Management Clause',
        body: `Protect your business analysis consulting practice with this clause:

> **Requirements Specification Sign-Off and Change Control Clause**:  
> *"Consultant shall deliver the Business Requirements Document (BRD) and Functional Specifications in accordance with the milestones outlined in Schedule A. Client shall designate an Executive Sponsor responsible for providing consolidated review and formal written sign-off within ten (10) business days of deliverable submission. Following formal sign-off, any requested modifications to functional specifications, data schemas, or process flows shall constitute a Change Order billable at Consultant's standard consulting rate of $[HOURLY_RATE]/hour. Consultant defines requirements; Consultant is not liable for third-party software vendor delivery timelines or software engineering defect remediation."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Senior Enterprise Business Analyst ($115,000 Target Take-Home Net)',
      scenario: 'An enterprise business analyst targeting $115,000 net personal income budgets 48 active weeks, 24 billable hours/wk (1,152 annual hours), $11,000 in software overhead, 27% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$115,000', annualOverhead: '$11,000', billableHours: 1152, taxRate: '27%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$115,000 ÷ (1 - 0.27)', amount: '$157,534', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($157,534 + $11,000 overhead) × 1.15', amount: '$193,814', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Hourly Rate', formula: '$193,814 ÷ 1,152 billable hours', amount: '$168.24', note: 'Senior business analyst rate' },
        { label: 'Standard BRD Project (60 hrs)', formula: '$168.24 × 60 hours', amount: '$10,094', note: 'Complete requirements package' }
      ],
      takeaway: 'To take home $115k net while paying for Lucidchart, Jira, and self-employment taxes across 1,152 billable hours, a business analyst should bill ~$165–$170/hour.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Fixed-Fee ERP Vendor Selection Sprint',
      scenario: 'A company hires a BA to run an ERP vendor evaluation requiring 80 hours of requirements mapping, RFP drafting, and vendor scoring. At $150/hr, what is the contract fee?',
      inputs: { estimatedHours: 80, hourlyRate: '$150', contingencyBuffer: '12%' },
      steps: [
        { label: 'Base Consulting Labor', formula: '80 hours × $150', amount: '$12,000', note: 'RFP drafting and vendor scoring' },
        { label: 'Stakeholder Review Contingency (12%)', formula: '$12,000 × 0.12', amount: '$1,440', note: 'Buffers stakeholder consensus' },
        { label: 'Total Invoiced Project Price', formula: '$12,000 + $1,440', amount: '$13,440', note: 'Billed across 2 project milestones' }
      ],
      takeaway: 'A complete ERP vendor evaluation sprint with RFP documentation calculates to a $13,400 contract package.'
    },
    faqs: [
      { question: 'What is the average hourly rate for a freelance business analyst?', answer: 'Freelance business analysts typically charge between $90 and $180 per hour, with senior enterprise systems and financial BA consultants charging $185 to $225+ per hour.', sourceUrl: 'https://www.bls.gov/oes/current/oes131111.htm' },
      { question: 'What deliverables does a freelance business analyst produce?', answer: 'Key deliverables include Business Requirements Documents (BRDs), BPMN 2.0 process flowcharts, user stories with acceptance criteria, RFP vendor scorecards, and UAT test plans.', sourceUrl: 'https://www.bls.gov/oes/current/oes131111.htm' },
      { question: 'How is a business analyst different from a product manager?', answer: 'Product managers decide *what* to build based on market opportunity and business strategy. Business analysts focus on *how* systems must work internally to support that vision.', sourceUrl: 'https://www.bls.gov/oes/current/oes131111.htm' },
      { question: 'What software tools are mandatory for an independent business analyst?', answer: 'Essential tools include process mapping software (Lucidchart, Visio), backlog management tools (Jira, Confluence), and data querying/BI tools (SQL, Power BI).', sourceUrl: 'https://www.bls.gov/oes/current/oes131111.htm' },
      { question: 'How many billable hours does a freelance business analyst work per year?', answer: 'A realistic benchmark is 1,100 to 1,220 billable hours annually (roughly 23–26 hours per week). Stakeholder consensus and requirements discovery consume the remainder.', sourceUrl: 'https://www.bls.gov/oes/current/oes131111.htm' }
    ]
  },

  'executive-coach': {
    slug: 'executive-coach',
    roleTitle: 'Executive Coach',
    title: 'Freelance Executive Coach Package & Hourly Calculator | FeeKit',
    metaDescription: 'Calculate executive coaching 6-month package and hourly rates grounded in BLS SOC 13-1151 data, ICF credentialing overhead, 360-degree assessments, and 45% utilization.',
    h1: 'Freelance Executive Coach Rate Calculator & Leadership Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bls.gov/oes/current/oes131151.htm',
    citation: 'U.S. Bureau of Labor Statistics OEWS Code 13-1151 and International Coaching Federation (ICF) Global Coaching Study.',
    overview: 'Freelance executive coaches provide confidential 1-on-1 leadership advisory, 360-degree feedback assessments, emotional intelligence coaching, and strategic alignment for C-suite executives, startup founders, and vice presidents. Under BLS SOC 13-1151 benchmarks, training specialists earn a median annual wage of $64,340 ($30.93/hour), while credentialed executive coaches (ICF PCC/MCC) command premium fees between $250 and $600+ per hour (or $10,000 to $35,000 per 6-month executive engagement) to cover intensive psychological assessment tooling, credentialing renewals, and emotional containment downtime.',
    sections: [
      {
        id: 'ec-benchmarks-and-pricing-models',
        title: 'Executive Benchmarks (ICF) & Leadership Coaching Package Structures',
        body: `Executive coaches package their services across four established structures:

1. **6-Month Executive Coaching Engagement ($10,000 – $30,000/executive)**: The global corporate standard: Stakeholder Discovery & 360 Assessment (Month 1), Bi-Weekly 1-on-1 Deep Coaching Sessions (Months 2–5), and Stakeholder Review & Leadership Roadmap (Month 6).
2. **Founder & CEO Retainer ($3,500 – $8,000/mo)**: Ongoing executive sounding board support for venture-backed founders navigating investor relations, board governance, and high-growth hiring stress.
3. **Executive Team Offsite Alignment ($8,000 – $20,000/retreat)**: Facilitating high-impact 2-day executive retreats to resolve leadership friction, align strategic vision, and build vulnerability-based trust.
4. **Hourly Executive Advisory ($300 – $600/hr)**: Reserved for laser coaching, emergency crisis decision support, or ad-hoc boardroom transitions.`
      },
      {
        id: 'ec-billable-utilization-drivers',
        title: 'Emotional Containment: The 15-Hour Weekly Coaching Ceiling',
        body: `Executive coaching requires intense active listening and emotional presence. Expecting 30 client coaching hours per week leads to emotional depletion.

An independent executive coach maintains **35% to 45% billable session utilization** (700 to 900 annual client session hours across 10–15 active executive coachees):
- **1-on-1 Coaching Session Cap (12 to 15 hours/week max)**: Holding confidential 60- to 90-minute coaching sessions.
- **Session Notes, Synthesis & Reflective Planning (20% of time)**: Writing post-session insights, curating leadership frameworks, and preparing accountability check-ins.
- **360 Assessment Administration & Stakeholder Debriefs (15% of time)**: Conducting confidential stakeholder interviews with the coachee's manager, peers, and direct reports.
- **Thought Leadership & Corporate Business Development (20% of time)**: Publishing executive insights, speaking at industry summits, and meeting corporate HR sponsors.`
      },
      {
        id: 'ec-overhead-items',
        title: 'Role-Specific Technical Overhead Line Items ($10,000 – $20,000/yr)',
        body: `Executive coaches maintain specialized assessment and accreditation toolchains:

- **Psychometric & 360-Degree Assessment Tooling ($3,000 – $6,500/yr)**: Commercial scoring certifications and test credits (Hogan Assessments, Leadership Circle Profile, Korn Ferry 360).
- **Professional Accreditations & Supervision ($2,000 – $4,500/yr)**: International Coaching Federation (ICF) annual dues, PCC/MCC credential renewals, and paid coaching supervision hours.
- **Executive Retreat & On-Site Travel ($2,500 – $5,000/yr)**: Travel expenses for conducting in-person client offsites and board meetings.
- **Confidential Meeting Tooling & Hardware ($1,200 – $2,500/yr amortized)**: Encrypted video meeting infrastructure, noise-canceling hardware, and secure CRM note vaults.
- **Commercial & E&O Professional Insurance ($1,500 – $2,500/yr)**: Professional indemnity protecting against coaching or advisory disputes.`
      },
      {
        id: 'ec-contracting-risks-confidentiality',
        title: 'Contracting Risks: The Three-Way Sponsor Triangle and Confidentiality',
        body: `Corporate coaching contracts require airtight ethical boundaries:

1. **The Three-Way Sponsor Agreement**: The corporate sponsor (HR/CEO) pays the fee, but the coachee is the client. Contracts must establish absolute confidentiality: the coach never reports confidential session details to the corporate sponsor, sharing only high-level development themes.
2. **Coaching vs Therapy Disclaimers**: Coaching is future-focused developmental inquiry, not clinical psychotherapy or psychiatric counseling. Contracts must include explicit therapy disclaimers.
3. **No Executive Decision Liability**: The coachee retains full legal responsibility for corporate decisions; the coach is not liable for business or financial outcomes.`
      },
      {
        id: 'ec-contract-wording-clause',
        title: 'Model Executive Coaching Confidentiality and Therapy Disclaimer Clause',
        body: `Include this mandatory ICF-aligned clause in every executive coaching agreement:

> **Three-Way Confidentiality and Coaching vs Therapy Disclaimer Clause**:  
> *"Coaching is a professional, collaborative relationship focused on personal and executive development. Coaching does NOT constitute psychological counseling, mental health therapy, or psychiatric medical treatment. Client acknowledges that all commercial and operational decisions remain the sole responsibility of Client. All conversations between Coach and Coachee are held in strict professional confidence under the ICF Code of Ethics. In engagements funded by a Corporate Sponsor, Coach shall share only broad developmental milestones and goals agreed with Coachee; confidential disclosures made during coaching sessions shall not be disclosed to Corporate Sponsor."*`
      }
    ],
    workedExample: {
      title: 'Scenario 1: Senior Executive Coach ($150,000 Target Take-Home Net)',
      scenario: 'An executive coach targeting $150,000 net personal income budgets 46 active weeks, 16 billable coaching hours/wk (736 annual session hours), $15,000 in assessment and accreditation overhead, 28% taxes, and a 15% safety buffer.',
      inputs: { desiredNet: '$150,000', annualOverhead: '$15,000', billableHours: 736, taxRate: '28%', buffer: '15%' },
      steps: [
        { label: 'Gross Pre-Tax Income Needed', formula: '$150,000 ÷ (1 - 0.28)', amount: '$208,333', note: 'Pre-tax income requirement' },
        { label: 'Total Business Revenue Needed', formula: '($208,333 + $15,000 overhead) × 1.15', amount: '$256,833', note: 'Includes 15% safety buffer' },
        { label: 'Calculated Session Hourly Rate', formula: '$256,833 ÷ 736 session hours', amount: '$348.96', note: 'Executive coaching session rate' },
        { label: '6-Month Executive Package (36 hrs)', formula: '$348.96 × 36 hours', amount: '$12,562', note: 'Includes 360 assessment' }
      ],
      takeaway: 'Because executive coaching is strictly capped at ~16 hours per week to maintain presence, a coach needs an hourly realization of ~$350/hour to clear $150k net.'
    },
    workedExampleReverse: {
      title: 'Scenario 2: Calculating Annual Capacity Across 6-Month Executive Packages',
      scenario: 'A coach structures their practice around 6-month corporate coaching packages priced at $15,000 per executive (delivering 24 coaching hours + 360 assessment). Managing 12 executives annually, what is the practice revenue?',
      inputs: { packagePrice: '$15,000', annualExecutiveCount: 12 },
      steps: [
        { label: 'Annual Gross Practice Revenue', formula: '$15,000 × 12 executives', amount: '$180,000', note: 'Recurring corporate contracts' },
        { label: 'Annual Billable Session Hours', formula: '12 executives × 24 hours', amount: '288 session hours', note: 'Roughly 6 hours/week in session' },
        { label: 'Effective Hourly Realization', formula: '$180,000 ÷ 288 hours', amount: '$625.00/hr', note: 'Reflects high-leverage value' }
      ],
      takeaway: 'Twelve 6-month executive coaching packages at $15,000 generate $180,000 while requiring only 6 direct coaching hours per week.'
    },
    faqs: [
      { question: 'What is the average rate for an executive coach?', answer: 'Executive coaches typically charge between $250 and $600+ per hour. Six-month corporate coaching packages typically range from $10,000 to $30,000 per executive.', sourceUrl: 'https://www.bls.gov/oes/current/oes131151.htm' },
      { question: 'How is executive coaching different from therapy?', answer: 'Therapy focuses on mental health healing, trauma, and resolving past psychological patterns. Executive coaching is future-focused developmental inquiry aimed at leadership performance and strategic impact.', sourceUrl: 'https://www.bls.gov/oes/current/oes131151.htm' },
      { question: 'What happens to confidentiality when an employer pays for the coaching?', answer: 'Under the ICF Code of Ethics, strict confidentiality is maintained. The coach provides high-level development goals to the corporate sponsor, but never reveals private session discussions.', sourceUrl: 'https://www.bls.gov/oes/current/oes131151.htm' },
      { question: 'What is a 360-degree assessment in executive coaching?', answer: 'A 360-degree assessment collects structured feedback from the executive’s manager, peers, and direct reports to uncover blind spots and measure leadership competencies.', sourceUrl: 'https://www.bls.gov/oes/current/oes131151.htm' },
      { question: 'How many clients does an executive coach handle at one time?', answer: 'Most full-time executive coaches work with 8 to 15 executives at a time, capping 1-on-1 sessions at 12 to 15 hours per week to prevent emotional exhaustion.', sourceUrl: 'https://www.bls.gov/oes/current/oes131151.htm' }
    ]
  }
};

