import type { PageContent } from '../types.ts';

export const brandDesignerContent: PageContent = {
  "slug": "brand-designer",
  "family": "freelance",
  "title": "Freelance Brand Designer Project & Hourly Calculator | FeeKit",
  "metaDescription": "Calculate freelance brand designer identity package and hourly rates grounded in BLS SOC 27-1024 data, typography licensing, vector suites, and 55% utilization.",
  "h1": "Freelance Brand Designer Rate Calculator & Identity Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)",
    "url": "https://www.bls.gov/oes/current/oes271024.htm",
    "citation": "U.S. Bureau of Labor Statistics OEWS Occupation Code 27-1024 (Graphic Designers and Brand Identity Designers)."
  },
  "overview": "Freelance brand designers create comprehensive visual identity systems, including logo marks, brand typography hierarchies, color palettes, vector brand guidelines, packaging designs, and digital brand collateral. Under BLS SOC 27-1024 benchmarks, median graphic designers earn $58,910 annually ($28.32/hour), while experienced brand identity specialists in major commercial centers command $85,000 to $120,000+ base. Operating as an independent brand designer requires billing between $80 and $160+ per hour (or $5,000 to $20,000+ per brand identity package) to cover commercial font licensing, vector design suites, physical swatch books, and non-billable creative exploration.",
  "sections": [
    {
      "id": "bd-benchmarks-and-pricing-models",
      "title": "Market Benchmarks (SOC 27-1024) & Brand Identity Package Structures",
      "body": "Brand designers package their services across four established structures:\n\n1. **Comprehensive Brand Identity Package ($5,000 – $18,000 flat)**: The standard industry deliverable: Brand Strategy & Moodboards (Phase 1), 3 Distinct Identity Concepts (Phase 2), and Final Logo Suite, Guidelines Book & Asset Exports (Phase 3).\n2. **Enterprise Brand System & Guidelines ($15,000 – $40,000)**: Exhaustive brand governance for scaling companies: multi-brand architecture, packaging dielines, physical retail signage, digital design tokens, and sub-brand rules.\n3. **Hourly Strategic Design Advisory ($85 – $165/hr)**: Common for brand consistency reviews, reviewing third-party agency packaging, and creative art direction.\n4. **Brand Refresh & Vector Modernization ($3,500 – $8,000)**: Updating existing legacy logos for digital legibility, modernizing color palettes, and creating responsive logo variants (horizontal, stacked, icon)."
    },
    {
      "id": "bd-billable-utilization-drivers",
      "title": "Realistic Billable Utilization: Creative Discovery Reality",
      "body": "Brand identity design requires intense divergent creative exploration. An independent brand designer maintains **50% to 58% billable utilization** (1,050 to 1,150 annual billable hours):\n- **Brand Strategy & Competitor Auditing (18% of time)**: Analyzing competitor visual landscapes, conducting founder discovery interviews, and establishing visual positioning axes.\n- **Divergent Vector Sketching (18% of time)**: Exploring dozens of conceptual directions that never make the final client presentation.\n- **Exporting & Production File Prep (10% of time)**: Exporting hundreds of asset variations (SVG, EPS, PNG, PDF in RGB, CMYK, and monochrome).\n- **Active Presentation & Execution (50% to 54% billable)**: Building client presentation decks, packaging guidelines, and vector refinement."
    },
    {
      "id": "bd-overhead-items",
      "title": "Role-Specific Technical Overhead Line Items ($8,000 – $15,000/yr)",
      "body": "Independent brand designers maintain specialized creative toolchains:\n\n- **Vector & Creative Software Subscriptions ($1,200 – $2,500/yr)**: Adobe Creative Cloud All Apps (Illustrator, InDesign, Photoshop), Figma, and vector grid plugins.\n- **Commercial Typeface Foundries & Font Testing ($1,500 – $3,500/yr)**: Purchasing desktop testing licenses from boutique foundries (Pangram Pangram, Grilli Type, Dinamo).\n- **Physical Color Swatches & Proofing Tools ($800 – $1,800/yr)**: Official Pantone Matching System (PMS) Formula Guides, CMYK swatch books, and spectrophotometers.\n- **Color-Calibrated Hardware & Drawing Tablets ($2,500 – $4,500/yr amortized)**: High-spec workstations, color-accurate displays (Eizo, Apple Studio Display), and Wacom/iPad drawing hardware.\n- **Commercial Insurance & Legal ($1,200 – $2,000/yr)**: Trademark clearance support and commercial liability insurance."
    },
    {
      "id": "bd-contracting-risks-trademark",
      "title": "Contracting Risks: Trademark Clearance, Font Licensing, and Unlimited Iterations",
      "body": "Brand design agreements must mitigate critical legal and scope exposures:\n\n1. **Trademark Clearance Disclaimers**: Brand designers create artistic visual marks. Contracts must clarify that legal trademark searches and USPTO registration are the client’s legal responsibility.\n2. **Commercial Font Licensing**: Font foundry licenses for commercial web and app embedding must be purchased directly by the client in their legal business name.\n3. **Concept Limits**: Proposals must strictly limit the number of initial creative directions presented (typically 2 to 3 concepts) and cap revisions to two rounds on the chosen concept."
    },
    {
      "id": "bd-contract-wording-clause",
      "title": "Model Brand Design Scope and Trademark Disclaimer Clause",
      "body": "Protect your brand identity practice with this standard clause:\n\n> **Brand Identity Concept Governance and Trademark Disclaimer Clause**:  \n> *\"Fee includes presentation of up to three (3) distinct visual brand concepts, and up to two (2) consolidated rounds of refinement on the single concept selected by Client. Additional concepts or substantial pivots after concept selection shall constitute a Change Order billed at $[HOURLY_RATE]/hour. Designer conducts informal visual originality checks; however, Designer does NOT provide legal trademark, copyright, or servicemark clearance. Client shall be solely responsible for conducting formal trademark availability searches with qualified legal counsel prior to commercial use. Commercial licenses for proprietary third-party typefaces shall be licensed directly by Client.\"*"
    }
  ],
  "workedExample": {
    "title": "Scenario 1: Senior Brand Identity Designer ($100,000 Target Take-Home Net)",
    "scenario": "A brand designer targeting $100,000 net personal income budgets 46 active weeks, 23 billable hours/wk (1,058 annual hours), $12,000 in software, font, and hardware overhead, 26% taxes, and a 15% safety buffer.",
    "inputs": {
      "desiredNet": "$100,000",
      "annualOverhead": "$12,000",
      "billableHours": 1058,
      "taxRate": "26%",
      "buffer": "15%"
    },
    "steps": [
      {
        "label": "Gross Pre-Tax Income Needed",
        "formula": "$100,000 ÷ (1 - 0.26)",
        "amount": "$135,135",
        "note": "Pre-tax income requirement"
      },
      {
        "label": "Total Business Revenue Needed",
        "formula": "($135,135 + $12,000 overhead) × 1.15",
        "amount": "$169,205",
        "note": "Includes 15% safety buffer"
      },
      {
        "label": "Calculated Hourly Rate",
        "formula": "$169,205 ÷ 1,058 billable hours",
        "amount": "$159.93",
        "note": "Senior brand designer rate"
      },
      {
        "label": "Full Brand Identity Package",
        "formula": "$159.93 × 60 hours",
        "amount": "$9,596",
        "note": "Standard identity package"
      }
    ],
    "takeaway": "To take home $100k net after covering font libraries, Pantone swatches, and hardware across 1,058 billable hours, a brand designer needs to charge ~$160/hour."
  },
  "workedExampleReverse": {
    "title": "Scenario 2: Calculating Fixed-Price Startup Brand Package",
    "scenario": "A designer quotes a startup brand package requiring 50 hours of design labor plus $500 for font licensing pass-through and print proofing. What is the contract price?",
    "inputs": {
      "laborHours": 50,
      "hourlyRate": "$140",
      "fontAndProofingPassThrough": "$500"
    },
    "steps": [
      {
        "label": "Base Brand Design Labor",
        "formula": "50 hours × $140",
        "amount": "$7,000",
        "note": "3 concepts + guidelines"
      },
      {
        "label": "Font & Print Proofing Costs",
        "formula": "Commercial font & swatch pass-through",
        "amount": "$500",
        "note": "Direct project expense"
      },
      {
        "label": "Total Invoiced Project Price",
        "formula": "$7,000 + $500",
        "amount": "$7,500",
        "note": "Billed across 3 milestones"
      }
    ],
    "takeaway": "A complete visual identity package with guidelines book and font licensing calculates to a clean $7,500 fixed contract fee."
  },
  "faqs": [
    {
      "question": "What is the average cost of a freelance brand identity package?",
      "answer": "A comprehensive brand identity package typically costs between $5,000 and $18,000 for startups and small businesses, while enterprise rebrands range from $25,000 to $60,000+.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "How is brand design different from logo design?",
      "answer": "Logo design is just a single mark. Brand design encompasses an entire visual system: typography hierarchy, color rules, grid systems, image treatments, and complete brand guidelines books.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "Who is legally responsible for trademark searches?",
      "answer": "The client is legally responsible for conducting formal trademark searches with an intellectual property attorney before legally filing or commercializing the brand mark.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "Who pays for commercial font licenses in brand design?",
      "answer": "Commercial licenses for font software used in websites, mobile apps, or commercial packaging must be purchased directly by the client in their company name.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    },
    {
      "question": "How many logo concepts should a brand designer present?",
      "answer": "Industry best practice is to present 2 to 3 fully fleshed-out, distinct visual concepts. Presenting more than 3 concepts dilutes strategic focus and confuses client stakeholders.",
      "sourceUrl": "https://www.bls.gov/oes/current/oes271024.htm"
    }
  ]
};

export default brandDesignerContent;
