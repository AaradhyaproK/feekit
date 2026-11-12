/**
 * Role-specific freelance rate facts.
 *
 * The generic `freelance` branch of `ToolGuide` rendered identical copy on
 * every freelance page that does not have bespoke content - 7 pages
 * (business consultant, ghostwriter, photographer, AI prompt engineer,
 * growth marketer, podcast editor, no-code developer) all carried the same
 * generic paragraphs with no mention of their own discipline.
 *
 * Each role below supplies the discipline-specific detail that makes its
 * page worth ranking: what the client is actually buying, the billable-hour
 * reality of that kind of work, the contract shape that fits it, and the
 * overhead that usually gets forgotten.
 */

export interface FreelanceRoleFacts {
  /** Display name of the discipline. */
  name: string;
  /** What the client is paying for - the core value proposition. */
  buys: string;
  /** Why the billable-hour assumption differs for this discipline. */
  utilization: string;
  /** The contract structure that suits the work. */
  contract: string;
  /** The overhead line that most freelancers in this discipline miss. */
  overhead: string;
  /** A typical day rate anchor used in the worked example. */
  dayRate: number;
  /** A typical annual net-income target used in the worked example. */
  netTarget: number;
}

export const FREELANCE_ROLES: Record<string, FreelanceRoleFacts> = {
  'business-consultant': {
    name: 'Strategy & Management Consulting',
    buys:
      'A diagnosis the client cannot produce themselves, and a plan they are willing to fund. Clients are buying judgement - the ability to look at a P&L, a market, or an operating model and identify the constraint that is actually binding.',
    utilization:
      'Consulting billable hours sit lower than in engineering because a meaningful share of the work is preparation - reading the org, building the model, and reconstructing context before the first workshop. Plan on 15 to 20 billable hours a week rather than 25.',
    contract:
      'Diagnostic phase first. A fixed-fee discovery engagement with a written deliverable de-risks both sides, because it converts an open-ended advisory relationship into something a procurement department can approve. Move to a day rate or a phased retainer only once the scope is understood.',
    overhead:
      'Travel and client entertaining are the two that get missed. A consultant billing $150 an hour and flying to four client sites a month can carry $3,000 to $6,000 a year in unrecovered travel and unbillable positioning time. Quote travel as a separate line item.',
    dayRate: 1800,
    netTarget: 160000,
  },
  ghostwriter: {
    name: 'Ghostwriting & Editorial',
    buys:
      'A finished manuscript that sounds like the client. The client is buying the absence of a deadline and the absence of a draft, which is why ghostwriting is priced per finished piece rather than per hour - a 60,000-word book is a deliverable, not a time estimate.',
    utilization:
      'Ghostwriting is one of the few disciplines where billable hours understate the work. Interviews, research, outlining and two full revision cycles routinely consume two to three times the raw writing time, and the revisions are the part nobody budgets for.',
    contract:
      'Per-word or per-project pricing with a defined revision count. Two rounds of structural revision and two rounds of line edits, after which further changes are billed at the day rate. A ghostwritten book typically runs 60,000 to 90,000 words, and the middle of that range is where the rate pressure is.',
    overhead:
      'Transcription, ghostwriting software and reference research run $200 to $600 a month for an active ghostwriter. If you interview subjects, budget recording and transcription as a separate line rather than absorbing it into the per-word fee.',
    dayRate: 900,
    netTarget: 110000,
  },
  photographer: {
    name: 'Commercial & Editorial Photography',
    buys:
      'Images that work. A commercial shoot delivers licensed, retouched, ready-to-publish assets, and the value is in the production - art direction, lighting, location management and a clean selection - not in the hours behind the shutter.',
    utilization:
      'Photography has the lowest billable ratio of any creative discipline. A two-day commercial shoot can occupy 40 hours of working time for 16 hours of billable shooting, because setup, lighting tests, travel, culling and retouching are unbillable by default. Charge per day, never per hour.',
    contract:
      'Day rate with a shot-list and a usage licence agreed in advance. Separate the licence terms from the shoot fee - a 12-month digital and print licence is a different product from unlimited worldwide perpetual use, and it should cost differently. Retainer arrangements work well for brands shooting monthly.',
    overhead:
      'Gear rental, insurance, storage and colour grading. A full-frame body with lenses insured for commercial work runs roughly $60 to $150 a day to rent, and a commercial photographer needs errors-and-omissions insurance that personal policies do not cover.',
    dayRate: 1400,
    netTarget: 120000,
  },
  'ai-prompt-engineer': {
    name: 'AI Prompt & LLM Systems Engineering',
    buys:
      'A production system that behaves. Clients are not buying prompts - they are buying evaluation harnesses, guardrails, retrieval structure and the confidence that output quality does not collapse when the model is swapped.',
    utilization:
      'This is a new discipline, and the billing model is still settling. Early engagements are mostly paid discovery - proving that the use case works at all - which does not translate into repeatable weekly hours. Expect to be quoting projects rather than retainers for the first year.',
    contract:
      'Milestone-based fixed fees with a written acceptance test. Define the evaluation criteria in the contract, because "the outputs are good" is not a measurable term and is the single most common cause of a stalled AI project. Scope changes should be priced per iteration.',
    overhead:
      'Model API usage, evaluation infrastructure and vector storage are real ongoing costs and should be passed through explicitly rather than buried in the rate. A team running heavy inference for a client can carry five-figure monthly API spend that is not a profit centre.',
    dayRate: 1600,
    netTarget: 180000,
  },
  'growth-marketer': {
    name: 'Growth Marketing',
    buys:
      'A repeatable acquisition engine and the confidence that it will keep working. The deliverable is a channel that has predictable unit economics and a testing cadence, not a list of tactics.',
    utilization:
      'Growth work is heavily front-loaded and then lumpy. A quarter of analysis, instrumentation and channel setup can precede the first real result, and then reporting, stand-ups and client reviews consume hours that are rarely billable. Plan on 12 to 18 billable hours a week on a retainer.',
    contract:
      'Base retainer plus performance compensation tied to a metric the client controls - CAC payback, pipeline contribution or retained revenue - rather than on revenue the team does not directly influence. A pure performance model without a base retainer leaves both sides exposed.',
    overhead:
      'Ad spend is pass-through, not revenue, and mixing it into your income makes your books unreadable. Analytics and attribution tooling, which is essential to the work, is the most commonly forgotten line item in a growth retainer.',
    dayRate: 1200,
    netTarget: 140000,
  },
  'podcast-editor': {
    name: 'Podcast & Audio Post-Production',
    buys:
      'A finished episode that sounds broadcast-ready. Clients are buying the hours of cutting, levelling, noise reduction, music, mastering and show notes that they do not want to do themselves.',
    utilization:
      'Audio post-production is a fixed-scope, fixed-cost job. A 60-minute episode is roughly 3 to 5 hours of work regardless of how good the source recording is, which means your rate has to be priced per episode, not per hour, or a difficult recording will quietly consume your margin.',
    contract:
      'Per-episode pricing with a defined turnaround time and a defined number of revision rounds. Include an explicit raw-footage handling and backup commitment - clients will want to know their master archive is preserved for the full run of the show.',
    overhead:
      'Storage and archiving of raw multi-track recordings is the line item that scales badly. A weekly show with 60-minute multi-track sessions can generate 30 GB or more a month, and clients frequently expect indefinite retention.',
    dayRate: 700,
    netTarget: 95000,
  },
  'no-code-developer': {
    name: 'No-Code & Webflow Development',
    buys:
      'A working system, fast, without a full engineering team. Clients are buying delivery speed and the ability to change their own site afterwards, which is exactly what Webflow and Bubble are for.',
    utilization:
      'No-code work looks fast in the demo and is slower in delivery, because clients discover requirements mid-build and the platform runs into limits that force a rebuild. Budget 20 to 22 billable hours a week and expect a discovery phase to be billed separately.',
    contract:
      'Fixed-scope build with a training and handover session included. A no-code site that the client cannot edit becomes a maintenance liability, so the handover session and a short written guide are part of the deliverable, not an extra. Scope creep is the main risk - cap the number of revision rounds in writing.',
    overhead:
      'Hosting, domains, form and automation tiers, plus paid project management seats. A client project typically runs $50 to $200 a month in platform costs that should be rebilled rather than absorbed into the build fee.',
    dayRate: 950,
    netTarget: 120000,
  },
};

/**
 * Fallback facts for a role slug that is not in the table. The generic
 * fallback keeps every freelance page substantive even if a new role is
 * added to the matrix before its bespoke content is written.
 */
export function getFreelanceRole(slug: string): FreelanceRoleFacts {
  return (
    FREELANCE_ROLES[slug] || {
      name: 'Independent Professional Services',
      buys:
        'A defined deliverable that the client cannot produce themselves, delivered to an agreed scope, date and standard.',
      utilization:
        'Full-time freelancers cannot bill 40 hours a week. Professional service benchmarks indicate 30% to 40% of working time goes on business development, proposals, accounting and continuing education, so realistic annual billable capacity sits around 1,000 to 1,200 hours.',
      contract:
        'Fixed scope with a written statement of deliverables, a number of revision rounds, and a change-order process for anything outside the original scope.',
      overhead:
        'Equipment, software subscriptions, insurance and professional development. These belong in the rate, not in the margin, and the most common pricing mistake is under-recovering them.',
      dayRate: 1000,
      netTarget: 120000,
    }
  );
}
