import type { PageContent } from '../types.ts';

export const videoEditorContent: PageContent = {
  "slug": "video-editor",
  "family": "freelance",
  "title": "Freelance Video Editor Day Rate & Hourly Calculator | FeeKit",
  "metaDescription": "Calculate freelance video editor hourly and day rates grounded in BLS SOC 27-4032 data, rendering workstation overhead, NAS storage, and 55% utilization.",
  "h1": "Freelance Video Editor Rate Calculator & Production Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes274032.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 27-4032 (Film and Video Editors)."
  },
  "overview": "Freelance video editors craft commercial video content, YouTube documentaries, corporate brand stories, and social reels using Adobe Premiere Pro, DaVinci Resolve Studio, and Final Cut Pro. Under BLS SOC 27-4032 benchmarks, median salaried video editors earn $63,520 annually ($30.54/hour), with senior editors in commercial broadcast hubs exceeding $115,000. Independent editors typically bill day rates between $450 and $900/day (or $60 to $125/hour) to cover massive localized RAID/NAS storage arrays, GPU workstation amortization, stock licensing platforms, and unbilled file-transfer overhead.",
  "sections": [
    {
      "id": "ve-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 27-4032) & Video Editing Pricing Structures",
      "body": "Freelance video editors structure compensation across four established formats:\n\n1. **Production Day Rate ($500 – $950/day)**: The commercial industry standard, based on an 8- to 10-hour working day covering raw footage ingestion, assembly, rough cut, and sound balancing.\n2. **Per-Video Fixed Milestone ($1,500 – $8,000/video)**: Scoped across Story Assembly & Rough Cut (Milestone 1), Fine Cut, Pacing & Audio Mastering (Milestone 2), and Color Grade, Title Graphics & Final Master Delivery (Milestone 3).\n3. **Monthly Retainer Editing ($3,000 – $8,500/mo)**: Common for content creators and brands requiring a steady volume of weekly long-form YouTube videos and short-form social reels.\n4. **Hourly Commercial Overtime ($75 – $140/hr)**: Applied to unexpected rush turnarounds, weekend overtime, or excessive revision cycles beyond contractual allowances."
    },
    {
      "id": "ve-billable-utilization-drivers",
      "title": "Realistic Billable Utilization: The 1,100-Hour Editing Reality",
      "body": "Video editing involves substantial unbillable technical overhead. An independent editor maintains **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours or roughly 130–150 billable days):\n- **Raw Media Ingestion & Proxy Transcoding (15% of time)**: Downloading multi-gigabyte 4K/6K camera rushes, organizing bin structures, and generating ProRes/DNxHR editing proxies.\n- **Asset Sourcing & Audio Cleanup (12% of time)**: Sourcing commercial music tracks, sound effects, and cleaning background noise with iZotope RX.\n- **Client Review Cycles & Timestamp Management (13% of time)**: Consolidating Frame.io comments, exporting review links, and managing version naming conventions.\n- **Active Creative Cutting (50% to 55% billable)**: Pacing, narrative cutting, sound design, and color grading."
    },
    {
      "id": "ve-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($9,000 – $16,000/yr)",
      "body": "Video editors maintain capital-intensive hardware and storage arrays:\n\n- **High-Performance GPU Workstation ($3,500 – $6,000/yr amortized)**: High-end Mac Studio (M2/M3 Max/Ultra) or custom PC with NVIDIA RTX 4080/4090 GPUs for real-time 4K timeline playback.\n- **Local High-Speed Storage & NAS RAID ($2,000 – $4,000/yr)**: High-capacity NVMe scratch drives and multi-bay Synology/QNAP NAS arrays with redundant RAID configurations for long-term archiving.\n- **Software Subscriptions & Plugins ($1,500 – $2,500/yr)**: Adobe Creative Cloud All Apps, DaVinci Resolve Studio license, Frame.io enterprise seats, and audio cleanup plugins (iZotope RX).\n- **Stock Music & Footage Licenses ($1,200 – $2,500/yr)**: Commercial music licensing platforms (Musicbed, Artlist, Epidemic Sound) and stock footage libraries.\n- **Commercial Insurance & Cloud Backup ($1,200 – $2,000/yr)**: Backblaze unlimited cloud backup and commercial liability coverage."
    },
    {
      "id": "ve-contracting-risks-revisions",
      "title": "Contracting Risks: Revision Hell, Raw Footage Demands, and Music Buyouts",
      "body": "Video contracts frequently unravel over subjective creative changes:\n\n1. **Uncapped Creative Revision Rounds**: Clients often demand subjective micro-edits (\"make it pop,\" \"try 5 different song options\"). Contracts must cap revisions strictly to two (2) consolidated rounds.\n2. **Raw Footage & Project File Ownership**: Contracts must clarify that client fees cover the final exported master video files. Native project files (Premiere .prproj / DaVinci .drp) and raw footage remain the property of the editor unless a project file buyout fee (typically 50% to 100% markup) is paid.\n3. **Music Licensing Limitations**: Commercial music tracks are licensed for specific web/broadcast territories. The client must fund extended broadcast synchronization licenses."
    },
    {
      "id": "ve-contract-wording-clause",
      "title": "Model Video Editing Revision and Project File Ownership Clause",
      "body": "Protect your editing business with this standard contract clause:\n\n> **Video Deliverable Scope and Project File Ownership Clause**:  \n> *\"Fee includes delivery of finished, exported master video files in the formats specified in Exhibit A, and up to two (2) consolidated rounds of creative feedback submitted via Frame.io within seven (7) business days of rough cut delivery. Subsequent revisions or changes to previously approved scripts or voiceover tracks shall be billed at Editor's standard rate of $[HOURLY_RATE]/hour. Native editing project files (.prproj, .drp), timeline presets, and project project architecture remain the exclusive intellectual property of Editor and are not included in this engagement unless an explicit Project File Buyout Fee is negotiated in writing.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Commercial Brand Video Editor ($95,000 Target Take-Home Net)",
    "scenario": "A commercial video editor targeting $95,000 net personal income budgets 46 active weeks, 140 billable days/yr, $13,000 in workstation and storage overhead, 25% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$95,000",
      "annualOverhead": "$13,000",
      "billableDays": 140,
      "taxRate": "25%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$95,000 ÷ (1 - 0.25)",
        "amount": "$126,667",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($126,667 + $13,000 overhead) × 1.15",
        "amount": "$160,617",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Day Rate",
        "formula": "$160,617 ÷ 140 billable days",
        "amount": "$1,147.26",
        "note": "Commercial agency day rate"
      },
      {
        "label": "Hourly Rate Equivalent (8-hr day)",
        "formula": "$1,147.26 ÷ 8 hours",
        "amount": "$143.41/hr",
        "note": "Hourly overtime rate"
      }
    ],
    "takeaway": "To take home $95k net after funding 40TB NAS arrays and GPU workstations across 140 realistic billable days, an editor needs a ~$1,150 commercial day rate."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Fixed-Price 3-Minute Brand Video Package",
    "scenario": "An editor quotes a 3-minute corporate brand video requiring 32 hours of editing, color grading, and audio mastering. At $85/hr plus $300 commercial music licensing, what is the contract fee?",
    "inputs": {
      "editingHours": 32,
      "hourlyRate": "$85",
      "musicLicensePassThrough": "$300",
      "revisionBuffer": "15%"
    },
    "steps": [
      {
        "label": "Base Video Editing Labor",
        "formula": "32 hours × $85",
        "amount": "$2,720",
        "note": "Assembly, fine cut, color"
      },
      {
        "label": "Revision Contingency (15%)",
        "formula": "$2,720 × 0.15",
        "amount": "$408",
        "note": "Buffers revision iterations"
      },
      {
        "label": "Commercial Music Licensing",
        "formula": "Artlist / Musicbed sync license",
        "amount": "$300",
        "note": "Direct pass-through"
      },
      {
        "label": "Total Project Contract Price",
        "formula": "$2,720 + $408 + $300",
        "amount": "$3,428",
        "note": "Complete video package"
      }
    ],
    "takeaway": "A complete corporate video edit with color, sound mastering, and licensed music calculates to a $3,400 project fee."
  },
  "faqs": [
    {
      "question": "What is the average day rate for a freelance video editor?",
      "answer": "Freelance video editors typically charge day rates between $450 and $900/day. High-end commercial broadcast and national agency editors charge $1,000 to $1,500+ per day.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes274032.htm"
    },
    {
      "question": "Why do video editors charge day rates instead of hourly?",
      "answer": "Day rates protect editors against rapid client scope pivots and account for massive rendering and export wait times that cannot be cleanly tracked in single hours.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes274032.htm"
    },
    {
      "question": "Does the client own the Premiere or DaVinci project files?",
      "answer": "Standard industry contracts specify that the client owns the exported master video files. Native project files (.prproj/.drp) remain the property of the editor unless a project file buyout fee is paid.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes274032.htm"
    },
    {
      "question": "How much local storage does a freelance video editor need?",
      "answer": "Most professional editors maintain at least 20TB to 60TB of high-speed RAID/NAS storage to hold raw 4K camera rushes, proxies, and multi-year project archives.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes274032.htm"
    },
    {
      "question": "How many rounds of revisions are standard in video editing?",
      "answer": "Two (2) consolidated rounds of revisions are standard in the video production industry. Further revision loops are billed at hourly rates.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes274032.htm"
    }
  ]
};

export default videoEditorContent;
