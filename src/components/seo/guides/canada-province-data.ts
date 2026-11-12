/**
 * Province-specific Canadian sales tax facts.
 *
 * The Canada guide component previously rendered ~550 words of IDENTICAL
 * copy on all 10 provincial pages - only the province name and one table row
 * changed. That is a classic near-duplicate-content signal: Google has to
 * pick one page to rank, and the other nine get suppressed.
 *
 * Every field below is a real, sourced fact about that province, so the
 * guide can be written around the province's actual structure rather than a
 * generic national summary.
 */

export interface CanadaProvinceFacts {
  /** Display name used in headings. */
  name: string;
  /** Tax regime: HST, GST + PST, or GST only. */
  regime: 'HST' | 'GST + PST' | 'GST + QST' | 'GST only';
  /** Federal GST component. */
  gst: number;
  /** Provincial component (PST, QST or the HST provincial share). */
  pst: number;
  /** Combined effective rate applied to the sale. */
  total: number;
  /** The statutory authority that administers the tax. */
  authority: string;
  /** The statutory basis for the tax. */
  citation: string;
  /** How the rate is applied to a $100 net sale. */
  taxOn100: string;
  /** Province-specific narrative used in the opening answer block. */
  answer: string;
  /** Province-specific filing / registration detail. */
  filing: string;
  /** Whether the province has an HST that replaced the GST and PST. */
  isHST: boolean;
}

export const CANADA_PROVINCES: Record<string, CanadaProvinceFacts> = {
  ontario: {
    name: 'Ontario',
    regime: 'HST',
    gst: 5,
    pst: 8,
    total: 13,
    authority: 'Canada Revenue Agency (CRA)',
    citation: 'HST is imposed under Part IX of the Excise Tax Act at the 13% Ontario rate.',
    taxOn100: '$13.00',
    isHST: true,
    answer:
      'Ontario runs a single Harmonized Sales Tax. The 5% federal GST and the 8% Ontario Provincial Sales Tax were replaced by one 13% HST rate in 2010, so there is no separate PST line on an Ontario invoice. Registered sellers collect 13% on taxable supplies, remit it to the CRA, and claim input tax credits for the GST/HST paid on business purchases.',
    filing:
      'Ontario registrants file GST/HST returns with the CRA using Form GST34. Businesses with $1.5M or less in annual taxable sales default to annual filing (with optional quarterly or monthly reporting), while $1.5M to $6M files quarterly and above $6M files monthly.',
  },
  'british-columbia': {
    name: 'British Columbia',
    regime: 'GST + PST',
    gst: 5,
    pst: 7,
    total: 12,
    authority: 'British Columbia Ministry of Finance and the Canada Revenue Agency',
    citation:
      'PST is imposed under the Provincial Sales Tax Act (BC), and GST under Part IX of the Excise Tax Act. British Columbia has not adopted the HST.',
    taxOn100: '$12.00',
    isHST: false,
    answer:
      'British Columbia did not adopt the HST, so two separate taxes apply: the 5% federal GST collected under the Excise Tax Act and a 7% British Columbia PST collected under the Provincial Sales Tax Act. They are stacked, which is why the combined rate on a typical sale is 12%. Businesses must register for GST with the CRA and for PST separately with the BC Ministry of Finance.',
    filing:
      'BC businesses file GST with the CRA using Form GST34, and file PST with the provincial government on the BC PST Return. Because GST and PST are administered separately, they require separate registrations and returns.',
  },
  quebec: {
    name: 'Quebec',
    regime: 'GST + QST',
    gst: 5,
    pst: 9.975,
    total: 14.975,
    authority: 'Revenu Québec and the Canada Revenue Agency',
    citation:
      'QST is imposed under the Act respecting the Quebec sales tax, and GST under Part IX of the Excise Tax Act. Quebec has not adopted the HST.',
    taxOn100: '$14.98',
    isHST: false,
    answer:
      'Quebec is the only province that applies a third layer. The 5% federal GST applies, and on top of it Quebec charges its own QST of 9.975% - the highest provincial rate in North America. The two are stacked, producing a combined rate of 14.975%. A GST/HST and QST registrant in Quebec claims input tax credits and refunds for both components on eligible business purchases.',
    filing:
      'Quebec registrants file a Form GST34 return (via Revenu Québec for QST-administered registrants) alongside their QST return. Revenu Québec administers both returns locally in Quebec, while input tax credit rules remain defined by the respective statutes.',
  },
  alberta: {
    name: 'Alberta',
    regime: 'GST only',
    gst: 5,
    pst: 0,
    total: 5,
    authority: 'Canada Revenue Agency (CRA)',
    citation:
      'Alberta imposes no provincial sales tax. Only the 5% federal GST under Part IX of the Excise Tax Act applies.',
    taxOn100: '$5.00',
    isHST: false,
    answer:
      'Alberta has no provincial sales tax at all, which makes it the lowest-tax jurisdiction in Canada. Only the 5% federal GST applies, so a $100 sale in Alberta attracts $5.00 in tax - against $14.98 in Quebec. Registered businesses claim input tax credits on the 5% federal GST paid on commercial expenses.',
    filing:
      'Alberta businesses register with the CRA for GST/HST only and file Form GST34. There is no provincial sales tax return to file and no provincial registration to maintain.',
  },
  'nova-scotia': {
    name: 'Nova Scotia',
    regime: 'HST',
    gst: 5,
    pst: 9,
    total: 14,
    authority: 'Canada Revenue Agency (CRA)',
    citation:
      'Nova Scotia applies a 14% HST under Part IX of the Excise Tax Act, effective 1 April 2025 (reduced from 15%).',
    taxOn100: '$14.00',
    isHST: true,
    answer:
      'Nova Scotia lowered its harmonized rate from 15% to 14% on 1 April 2025 (comprising the 5% federal GST and a 9% provincial component). A single 14% HST line replaces separate federal and provincial taxes on the invoice, making Nova Scotia higher than Ontario (13%) and lower than the other Atlantic provinces (15%).',
    filing:
      'Nova Scotia registrants file Form GST34 with the CRA. Because the HST is a single harmonized tax, one return covers both the federal and provincial components, and input tax credits are claimed on the full 14% rate.',
  },
  'new-brunswick': {
    name: 'New Brunswick',
    regime: 'HST',
    gst: 5,
    pst: 10,
    total: 15,
    authority: 'Canada Revenue Agency (CRA)',
    citation:
      'New Brunswick applies a 15% HST under Part IX of the Excise Tax Act.',
    taxOn100: '$15.00',
    isHST: true,
    answer:
      'New Brunswick runs a single 15% Harmonized Sales Tax that replaced the 5% federal GST and the 10% provincial sales tax. There is no separate PST line on a New Brunswick invoice. Input tax credits are claimed on the full 15% rate, which aligns tax recovery across all business inputs.',
    filing:
      'New Brunswick registrants file Form GST34 with the CRA. One harmonized return and one registration cover both the federal and provincial components of the HST.',
  },
  manitoba: {
    name: 'Manitoba',
    regime: 'GST + PST',
    gst: 5,
    pst: 7,
    total: 12,
    authority: 'Manitoba Department of Finance and the Canada Revenue Agency',
    citation:
      'Manitoba Retail Sales Tax is imposed under the Retail Sales Tax Act (Manitoba), and GST under Part IX of the Excise Tax Act.',
    taxOn100: '$12.00',
    isHST: false,
    answer:
      'Manitoba applies the 5% federal GST plus a 7% Manitoba Retail Sales Tax, for a combined rate of 12%. The provincial component is formally RST (Retail Sales Tax) rather than PST, and carries its own separate registration, rules, and return. The two taxes stack rather than harmonize.',
    filing:
      'Manitoba businesses file GST with the CRA on Form GST34 and file the Manitoba RST return separately with Manitoba Finance.',
  },
  saskatchewan: {
    name: 'Saskatchewan',
    regime: 'GST + PST',
    gst: 5,
    pst: 6,
    total: 11,
    authority: 'Saskatchewan Ministry of Finance and the Canada Revenue Agency',
    citation:
      'Saskatchewan PST is imposed under the Provincial Sales Tax Act (Saskatchewan), and GST under Part IX of the Excise Tax Act.',
    taxOn100: '$11.00',
    isHST: false,
    answer:
      'Saskatchewan is the lowest GST-plus-PST province outside Alberta, applying the 5% federal GST and a 6% provincial PST for a combined 11%. It has not adopted the HST, so sellers must register for and file the provincial tax separately from the federal one. At 11% it sits between Alberta at 5% and British Columbia at 12%.',
    filing:
      'Saskatchewan businesses file GST with the CRA using Form GST34 and file the Saskatchewan PST return separately with the Ministry of Finance.',
  },
  'prince-edward-island': {
    name: 'Prince Edward Island',
    regime: 'HST',
    gst: 5,
    pst: 10,
    total: 15,
    authority: 'Canada Revenue Agency (CRA)',
    citation:
      'Prince Edward Island applies a 15% HST under Part IX of the Excise Tax Act.',
    taxOn100: '$15.00',
    isHST: true,
    answer:
      'Prince Edward Island applies a single 15% Harmonized Sales Tax in place of the federal GST and a separate provincial sales tax. Like New Brunswick and Newfoundland and Labrador, one 15% line appears on the invoice with no separate PST, and input tax credits are recoverable on the full harmonized rate (whereas Nova Scotia reduced its HST to 14% in April 2025).',
    filing:
      'Prince Edward Island registrants file Form GST34 with the CRA. The harmonized rate means a single federal filing satisfies both the GST and the provincial component.',
  },
  'newfoundland-and-labrador': {
    name: 'Newfoundland and Labrador',
    regime: 'HST',
    gst: 5,
    pst: 10,
    total: 15,
    authority: 'Canada Revenue Agency (CRA)',
    citation:
      'Newfoundland and Labrador applies a 15% HST under Part IX of the Excise Tax Act.',
    taxOn100: '$15.00',
    isHST: true,
    answer:
      'Newfoundland and Labrador applies a 15% Harmonized Sales Tax (set at 15% since 2016). The 5% federal GST and the 10% provincial share are combined into one 15% HST line on the invoice. At 15% it shares the highest harmonized sales tax rate in Canada alongside New Brunswick and Prince Edward Island.',
    filing:
      'Newfoundland and Labrador registrants file Form GST34 with the CRA. One harmonized return covers both the federal and provincial components of the HST.',
  },
};

/**
 * Fallback facts for a province slug that is not in the table.
 */
export function getCanadaProvince(slug: string): CanadaProvinceFacts {
  return (
    CANADA_PROVINCES[slug] || {
      name: 'Canada',
      regime: 'GST + PST',
      gst: 5,
      pst: 7,
      total: 12,
      authority: 'Canada Revenue Agency (CRA)',
      citation: 'GST is imposed under Part IX of the Excise Tax Act.',
      taxOn100: '$12.00',
      isHST: false,
      answer:
        'Canadian sales tax operates under three regimes: harmonized sales tax in the participating provinces, a stacked federal GST plus provincial sales tax in the rest, and federal GST only in Alberta. The correct rate depends on the destination of the supply, not the location of the seller.',
      filing:
        'GST/HST registrants file Form GST34 with the CRA, and file a separate provincial return in provinces that have not adopted the HST.',
    }
  );
}
