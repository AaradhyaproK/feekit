import type { PageContent } from '../types.ts';

export const illustratorContent: PageContent = {
  "slug": "illustrator",
  "family": "freelance",
  "title": "Freelance Illustrator Project & Licensing Calculator | FeeKit",
  "metaDescription": "Calculate freelance illustrator project and licensing rates grounded in BLS SOC 27-1013 data, graphic tablet overhead, copyright buyouts, and 55% utilization.",
  "h1": "Freelance Illustrator Rate Calculator & Commercial Licensing Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes271013.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Code 27-1013 and Graphic Artists Guild Handbook: Pricing & Ethical Guidelines."
  },
  "overview": "Freelance illustrators create editorial magazine artwork, children’s book illustrations, packaging art, digital game concept art, and corporate marketing imagery using Procreate, Adobe Photoshop, and digital pen displays. Under BLS SOC 27-1013 benchmarks, fine artists and illustrators earn a median annual wage of $69,870 ($33.59/hour). Operating as an independent freelance illustrator requires pricing work based on creative labor plus commercial copyright licensing (print runs, territory, and exclusivity) to cover digital drawing displays, archival scanning equipment, high-res art software, and non-billable rough sketching.",
  "sections": [
    {
      "id": "il-benchmarks-and-pricing-models",
      "title": "Industry Benchmarks (Graphic Artists Guild) & Illustration Pricing Models",
      "body": "Illustrators structure their fees based on industry standards (Graphic Artists Guild Handbook):\n\n1. **Editorial Illustration ($500 – $2,500/spot or cover)**: Standard rates for magazine, newspaper, and digital publication articles. Spots ($500–$800), full-page ($1,200–$1,800), and covers ($2,000–$3,500+).\n2. **Commercial Packaging & Advertising ($3,000 – $15,000/campaign)**: High-visibility commercial packaging, consumer product labels, and retail displays. Incorporates heavy usage licensing premiums.\n3. **Children’s Book Project ($6,000 – $25,000 advance + royalties)**: Complete 32-page picture book illustration packages, typically structured as an advance against a 3.5% to 6.0% author/illustrator book royalty.\n4. **Hourly Concept Art & Production ($65 – $130/hr)**: Common for video game studio character exploration, rough ideation sketches, and storyboard frames."
    },
    {
      "id": "il-billable-utilization-drivers",
      "title": "Realistic Billable Utilization: Thumbnailing and Art Exploration",
      "body": "Illustration requires significant non-billable sketching and revision. An independent illustrator maintains **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours):\n- **Thumbnail Sketching & Visual Research (18% of time)**: Exploring composition thumbnails, color studies, and collecting reference photography.\n- **Client Rough Sketch Reviews (12% of time)**: Presenting pencil roughs, securing feedback, and refining composition anatomy before final rendering.\n- **High-Res Scanning & Color Separation (10% of time)**: Color-correcting digital files, setting CMYK print profiles, and preparing print-ready vector/TIFF files.\n- **Active Rendering & Inking (52% to 56% billable)**: Final inking, digital painting, texturing, and rendering."
    },
    {
      "id": "il-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($7,000 – $13,000/yr)",
      "body": "Illustrators maintain specialized creative and physical art tooling:\n\n- **Digital Drawing Displays & Tablets ($1,500 – $3,500 amortized)**: Wacom Cintiq Pro 24/27, iPad Pro with Apple Pencil, or Huion drawing tablets.\n- **Illustration Software & Brushes ($800 – $1,800/yr)**: Adobe Creative Cloud, Procreate, Clip Studio Paint EX, and commercial brush pack subscriptions.\n- **High-Resolution Art Scanners & Color Proofing ($1,200 – $2,500 amortized)**: Large-format Epson scanners for physical traditional artwork, plus archival proofing printers.\n- **High-End Workstation Hardware ($2,000 – $3,500/yr amortized)**: Mac Studio or PC with high RAM for running multi-layered 600DPI Photoshop art files.\n- **Commercial Insurance & Studio Supplies ($1,200 – $2,000/yr)**: Studio space insurance, traditional paints, archival paper, and professional guild memberships."
    },
    {
      "id": "il-contracting-risks-copyright",
      "title": "Contracting Risks: Work-for-Hire Traps, Copyright Buyouts, and AI Scraping",
      "body": "Illustration contracts require strict legal copyright boundaries:\n\n1. **Beware of \"Work-for-Hire\" Clauses**: Work-for-hire strips the artist of all future copyright, meaning the client owns the art forever and can resell it without royalties. Never sign work-for-hire without a 100% to 300% buyout surcharge.\n2. **Limited Commercial License Structure**: License the artwork for specific uses (e.g., North American Print English Rights for 2 years). Additional prints or merchandise runs require new licensing fees.\n3. **AI Training Scraping Protections**: Contracts must explicitly forbid using illustration files to train generative AI diffusion models (Midjourney, Stable Diffusion)."
    },
    {
      "id": "il-contract-wording-clause",
      "title": "Model Illustration Copyright Licensing and AI Prohibition Clause",
      "body": "Protect your artwork with this standard Graphic Artists Guild clause:\n\n> **Illustration Copyright Licensing and AI Model Training Prohibition**:  \n> *\"Artist retains full, exclusive copyright and intellectual property rights to all original artwork, sketches, and digital files. Upon receipt of full payment, Artist grants Client an exclusive commercial license to reproduce the final artwork solely within the media formats, territories, and time period specified in Schedule A ('Licensed Use'). This engagement does NOT constitute a Work-for-Hire. Client is strictly prohibited from utilizing, selling, or uploading Artist's artwork into artificial intelligence (AI), machine learning models, or diffusion image generators. Any expanded media usage, reprints, or secondary product merchandising shall require separate written licensing agreement.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Commercial Editorial & Packaging Illustrator ($85,000 Target Take-Home Net)",
    "scenario": "An illustrator targeting $85,000 net personal income budgets 46 active weeks, 23 billable hours/wk (1,058 annual hours), $10,000 in tablet/software overhead, 25% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$85,000",
      "annualOverhead": "$10,000",
      "billableHours": 1058,
      "taxRate": "25%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$85,000 ÷ (1 - 0.25)",
        "amount": "$113,333",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($113,333 + $10,000 overhead) × 1.15",
        "amount": "$141,833",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Hourly Rate",
        "formula": "$141,833 ÷ 1,058 billable hours",
        "amount": "$134.06",
        "note": "Senior commercial illustrator rate"
      },
      {
        "label": "Packaging Art Package (25 hrs)",
        "formula": "$134.06 × 25 hours",
        "amount": "$3,351",
        "note": "Excludes commercial buyout surcharge"
      }
    ],
    "takeaway": "To take home $85k net while paying for Cintiq displays, software, and taxes across 1,058 billable hours, an illustrator needs an effective ~$135/hour return."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Commercial Packaging Illustration with Buyout Surcharge",
    "scenario": "A food company commissions an illustrated mascot for a national snack brand. Base creative labor is $3,500. The client requires a full commercial copyright buyout (150% surcharge). What is the total quote?",
    "inputs": {
      "baseIllustrationLabor": "$3,500",
      "copyrightBuyoutSurcharge": "150%"
    },
    "steps": [
      {
        "label": "Base Creation Labor",
        "formula": "Concept, sketch, render",
        "amount": "$3,500",
        "note": "Core illustration labor"
      },
      {
        "label": "Copyright Buyout Surcharge (150%)",
        "formula": "$3,500 × 1.50",
        "amount": "$5,250",
        "note": "Full commercial buyout rights"
      },
      {
        "label": "Total Invoiced Project Price",
        "formula": "$3,500 + $5,250",
        "amount": "$8,750",
        "note": "Full copyright transfer"
      }
    ],
    "takeaway": "Adding a 150% buyout surcharge for perpetual copyright transfer yields an $8,750 commercial contract."
  },
  "faqs": [
    {
      "question": "What is the average hourly rate for a freelance illustrator?",
      "answer": "Freelance illustrators typically charge between $65 and $130 per hour, with specialized commercial packaging and publishing artists charging $140 to $180+ per hour.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271013.htm"
    },
    {
      "question": "Why do illustrators charge licensing fees instead of flat labor?",
      "answer": "Illustration value is determined by audience reach. A piece printed on 500 local flyers has less commercial value than the same piece printed on 1,000,000 cereal boxes nationwide.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271013.htm"
    },
    {
      "question": "What is a work-for-hire clause and why is it dangerous for illustrators?",
      "answer": "Work-for-hire permanently transfers all copyright to the client, preventing the artist from ever licensing the image again, publishing prints, or showcasing it in books without permission.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271013.htm"
    },
    {
      "question": "How much does a children’s book illustration advance pay?",
      "answer": "Traditional publishing advances for a 32-page picture book typically range from $6,000 to $25,000+, paid across milestones (signing, sketches, final art) against book royalties.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271013.htm"
    },
    {
      "question": "How do illustrators protect artwork from AI image scrapers?",
      "answer": "Contracts must include strict clauses prohibiting clients from uploading artwork to train generative AI diffusion models, and artists apply invisible watermark cloaks (Glaze, Nightshade).",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271013.htm"
    }
  ]
};

export default illustratorContent;
