import fs from 'fs';
import path from 'path';

// Let's test word count by extracting the string templates for a state
const geoMatrix = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/geo-matrix.json'), 'utf-8'));
const states = geoMatrix.us_states || [];

function getDeepContentText(state) {
  const nexusFormatted = Number(state.nexusThreshold).toLocaleString();
  const hasLocal = state.maxLocal > state.rate;
  const estimatedAvgLocal = hasLocal ? ((state.maxLocal - state.rate) / 2).toFixed(2) : '0.00';

  const text = `
${state.name} Sales Tax Rate — Full Breakdown (2025)
Statutory statewide base rate, discretionary local tax jurisdictions, and invoice mathematical formulas

The statutory base sales tax rate in ${state.name} is ${state.rate.toFixed(2)}%. Every business engaging in retail transactions, remote commerce, or leasing taxable personal property in the state must account for this baseline levy. However, computing true checkout tax liability requires evaluating local composite jurisdictions.

In ${state.name}, local municipal taxing districts, county boards, and special development transit authorities levy supplementary local option sales taxes. Across all jurisdictions within ${state.name}, the average local surtax is approximately ${estimatedAvgLocal}%, while the maximum legal combined sales tax rate caps at ${state.maxLocal.toFixed(2)}%.

Local Rate Administration: Local taxes in ${state.name} are structured across three distinct administrative layers: county general taxes, municipal city taxes, and special purpose district assessments (such as transportation, public safety, and infrastructure redevelopment zones). Under ${state.name} destination-sourcing statutes, remote online orders shipped to a purchaser’s residence or commercial facility must be taxed at the buyer’s delivery destination composite rate—not the seller’s fulfillment origin location.

${state.name} Transaction Rate Comparison Table (${state.rate.toFixed(2)}% Base)

Sales Tax Nexus in ${state.name}
Evaluating physical presence triggers, economic nexus thresholds, and statutory registration requirements

Before collecting a single dollar of sales tax from customers in ${state.name}, an enterprise must establish tax nexus. Nexus is the constitutional legal connection between an out-of-state vendor and the state taxing jurisdiction that grants ${state.name} the statutory authority to mandate sales tax collection.

Physical Nexus Triggers:
Physical nexus in ${state.name} is created when an enterprise maintains an office, retail storefront, executive suite, assembly workshop, or warehouse. Crucially for e-commerce merchants, storing merchandise inventory inside a third-party logistics facility or Amazon FBA fulfillment center within ${state.name} automatically establishes physical nexus. Furthermore, having remote salaried employees, independent travelling sales contractors, or localized field technicians operating within state boundaries creates mandatory physical tax obligations.

Economic Nexus Threshold:
Following the historic U.S. Supreme Court ruling in South Dakota v. Wayfair, Inc. (2018), states enforce economic nexus on remote out-of-state vendors with no physical footprint. In ${state.name}, remote multichannel sellers trigger economic nexus upon reaching $${nexusFormatted} in gross retail receipts or 200 separate taxable transactions delivered into the state during the current or immediately preceding calendar year.

Registration & Unlawful Collection Penalties: Once economic or physical nexus is established, sellers must register for an official sales and use tax permit directly through ${state.filingAgency} before billing customers. Collecting sales tax from ${state.name} consumers without holding an active tax permit is a severe statutory violation. Because sales tax constitutes state trust funds held in fiduciary trust, unauthorized collection or retention can result in personal officer liability, mandatory civil fraud penalties of 10% to 50%, and potential criminal misdemeanor or felony prosecution.

Exemption Certificates in ${state.name}
Resale certificate compliance, verification requirements, and statutory record-keeping defense

Not every commercial transaction in ${state.name} requires sales tax collection. The state tax code recognizes specific exemptions for qualifying purchasers and commercial transaction types, provided strictly compliant documentation is executed and archived prior to invoice settlement.

Who Qualifies for Tax Exemption: Qualified exempt purchasers in ${state.name} generally encompass:
Wholesale Resellers: Merchants purchasing commercial goods strictly intended for resale in the regular course of business without prior retail consumption.
Industrial Manufacturers: Producers acquiring raw materials, component elements, or industrial ingredients that become an integral physical part of a manufactured product.
Certified Nonprofits & Educational Entities: Recognized 501(c)(3) religious, scientific, and educational organizations holding specific exemption status issued by ${state.filingAgency}.
Governmental Bodies: Direct purchasing departments of the United States federal government, ${state.name} state agencies, and public municipal districts.

Mandatory Certificate Data: To withstand statutory state audit scrutiny, every exemption certificate presented by a buyer must contain the purchaser’s legal business entity name, verified commercial operating address, active ${state.name} sales tax permit or registration ID, a specific description of property acquired, the legal reason for exemption, and the signature of an authorized corporate officer with the date of execution.

Audit Defense & Verbal Exemption Prohibition:
Vendors must retain executed exemption certificates on file for a minimum of 3 to 4 years to defend against retrospective state sales tax audit assessments. Never accept a verbal exemption claim under any circumstance. If an auditor discovers untaxed invoices lacking a valid, signed certificate on file, ${state.filingAgency} will hold the seller personally liable for the uncollected tax plus compounding interest.

Filing ${state.name} Sales Tax Returns
Filing schedules, official online portal remittance, statutory deadlines, and automation workflows

Sales and use tax compliance in ${state.name} is administered directly by ${state.filingAgency}. Once registered, merchants act as state collection trustees and must remit accrued consumer tax collections on a strictly monitored schedule.

Assigned Filing Frequencies: Upon reviewing your initial permit application and anticipated monthly transaction volume, ${state.filingAgency} will assign your enterprise a designated filing cadence:
Monthly Filing: Assigned to enterprise retailers and high-volume e-commerce brands with regular tax liabilities exceeding statutory thresholds.
Quarterly Filing: The standard assignment for small-to-midsize businesses and emerging multichannel online stores.
Annual Filing: Reserved for low-volume sellers, micro-enterprises, or seasonal businesses with minimal recurring tax liabilities.

Digital Submission & Remittance Due Dates: All sales tax returns in ${state.name} must be submitted electronically through ${state.filingAgency}’s official online portal. Returns and payments are typically due on or before the 20th or final calendar day of the month following the close of the designated tax period. Late returns trigger mandatory statutory penalties (typically 5% to 10% of tax due, plus daily compounding interest).

The Zero Return Rule: If your business generated zero taxable sales into ${state.name} during a given reporting cycle, you are still legally required to submit a timely "Zero Return." Failure to file zero returns results in administrative failure-to-file fines and can trigger automatic revocation of your business sales tax permit.

CPA Recommendation for Online Sellers:
Managing varying destination rates across multiple counties and special taxing districts in ${state.name} creates significant manual overhead. We strongly advise integrating automated sales tax compliance software such as TaxJar, Avalara AvaTax, or Stripe Tax directly into your e-commerce checkout to ensure seamless rate computation and auto-filing.

FAQ — ${state.name} Sales Tax for Online Sellers
Direct answers to the most common search queries regarding ${state.name} sales tax compliance

What is the sales tax rate in ${state.name}?
The statutory base sales tax rate in ${state.name} is exactly ${state.rate.toFixed(2)}%. However, retail customers pay a combined rate that incorporates county, municipal, and special taxing district surtaxes. Depending on the exact shipping delivery address, the combined sales tax rate can reach up to a maximum of ${state.maxLocal.toFixed(2)}%. Remote sellers must compute taxes based on the purchaser's specific street-level destination address rather than a single statewide flat rate.

Do I need to collect sales tax in ${state.name} as an out-of-state seller?
You are required to collect sales tax in ${state.name} if your business establishes physical nexus or economic nexus. Under the South Dakota v. Wayfair standard, economic nexus triggers once your remote gross sales into ${state.name} reach or exceed $${nexusFormatted} (or 200 separate transactions) during the current or previous calendar year. If your annual sales remain below this threshold and you maintain no employees or inventory in the state, you do not need to register.

Are digital products taxable in ${state.name}?
In ${state.name}, the taxability of digital products, software as a service (SaaS), and downloadable digital media depends on statutory definitions of tangible personal property. Prewritten computer software delivered electronically and digital audio-visual downloads frequently trigger state sales tax liability, whereas custom software development and pure information services often remain exempt. Online businesses selling software or digital assets into ${state.name} must consult ${state.filingAgency}'s specific digital tax rulings to determine exact SKU taxability.

How do I get a sales tax permit in ${state.name}?
You can obtain an official sales tax permit by submitting an online application through the digital taxpayer services portal managed by ${state.filingAgency}. You must provide your Federal Employer Identification Number (FEIN) or Social Security Number, legal entity documents, business NAICS code, corporate officer details, and projected sales activity. Most applications are approved within 1 to 5 business days, after which ${state.filingAgency} issues your registration certificate and establishes your assigned filing frequency.

What happens if I collect sales tax without being registered in ${state.name}?
Collecting sales tax from ${state.name} customers without holding an active sales tax permit issued by ${state.filingAgency} is strictly illegal under state law. Because collected sales tax represents state trust money, collecting taxes without remittance constitutes tax fraud. Violators face civil penalties of up to 50%, personal liability for company executives, and possible criminal prosecution. If your business collected tax erroneously prior to registration, consult a state tax CPA immediately to arrange a voluntary disclosure agreement.
`;

  return text.trim().split(/\s+/).length;
}

const ca = states.find(s => s.slug === 'california');
const tx = states.find(s => s.slug === 'texas');
const ny = states.find(s => s.slug === 'new-york');

console.log(`California deep content word count: ${getDeepContentText(ca)} words`);
console.log(`Texas deep content word count: ${getDeepContentText(tx)} words`);
console.log(`New York deep content word count: ${getDeepContentText(ny)} words`);
