# FeeKit ⚡ — The High-Precision Financial & Merchant Fee Suite

[![Official Website](https://img.shields.io/badge/Live_Site-www.usefeekit.com-0057FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.usefeekit.com)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://www.usefeekit.com)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=for-the-badge)](LICENSE)
[![Client--Side Privacy](https://img.shields.io/badge/Privacy-100%25_Client--Side-emerald?style=for-the-badge&logo=shield)](https://www.usefeekit.com/privacy)

> **Official Production Platform:** [**https://www.usefeekit.com**](https://www.usefeekit.com)  
> FeeKit is a free, privacy-first financial utility and merchant fee calculation engine engineered for US, UK, and global businesses, online merchants, indie creators, and freelance contractors.

---

## 🌐 Live Calculators & Tool Suites

Explore the complete programmatic suite deployed live at [**usefeekit.com**](https://www.usefeekit.com):

### 💳 Payment Gateway & Merchant Fee Suite
Calculate exact gross-to-net payouts, reverse-calculate client invoices, and model cross-border currency conversion:
* [**Stripe Fee Calculator USA (2.9% + $0.30)**](https://www.usefeekit.com/tools/stripe-fee-calculator/usa) — Standard domestic online card processing deductions.
* [**Stripe Manually Keyed-In Fee Calculator (3.4% + $0.30)**](https://www.usefeekit.com/tools/stripe-fee-calculator/manual-entry) — Virtual terminal and card-not-present phone order fees.
* [**Stripe UK Fee Calculator (1.5% + 20p)**](https://www.usefeekit.com/tools/stripe-fee-calculator/uk) — UK domestic, European Economic Area (EEA), and international non-EEA cards.
* [**PayPal Fee Calculator USA (3.49% + $0.49)**](https://www.usefeekit.com/tools/paypal-fee-calculator/usa) — Commercial invoicing vs. standard goods & services checkout (2.99% + $0.49).
* [**Square POS & In-Person Fee Calculator (2.6% + $0.10)**](https://www.usefeekit.com/tools/square-fee-calculator) — In-person card reader, online store, and virtual terminal calculations.
* [**Wise vs. Stripe Cross-Border Fee Calculator**](https://www.usefeekit.com/tools/wise-vs-stripe/usd-to-eur) — Compare mid-market FX rates against traditional gateway markups.
* [**Multi-Gateway 3-Way Comparator**](https://www.usefeekit.com/tools/gateway-comparator/stripe-paypal-square) — Side-by-side fee matrix for Stripe, PayPal, and Square.

### 🏛️ US Sales Tax & International VAT Suite
Statutory statewide base tax rates, municipal local district surtaxes, and post-*Wayfair* economic nexus thresholds:
* [**California Sales Tax Calculator (7.25% to 10.75%)**](https://www.usefeekit.com/tools/sales-tax-calculator/california) — CDTFA compliance across city and county special district jurisdictions.
* [**Texas Sales Tax Calculator (6.25% to 8.25%)**](https://www.usefeekit.com/tools/sales-tax-calculator/texas) — Origin vs. destination sourcing for Texas sellers and remote merchants.
* [**New York Sales Tax Calculator (4.00% to 8.875%)**](https://www.usefeekit.com/tools/sales-tax-calculator/new-york) — Combined NYC municipal rate breakdowns.
* [**50 US States Sales Tax Directory**](https://www.usefeekit.com/tools/sales-tax-calculator) — Full directory covering all 50 states and economic nexus guides.
* [**UK HMRC VAT Calculator (20% Standard & 5% Reduced)**](https://www.usefeekit.com/tools/vat-calculator/united-kingdom) — Forward addition and reverse VAT extraction under Making Tax Digital (MTD) standards.

### 💼 1099 Freelance, Invoicing & Contractor Economics
* [**1099 Freelance Rate Calculator (37 Roles)**](https://www.usefeekit.com/tools/freelance-rate-calculator) — Convert target annual income into required hourly and day rates factoring in 15.3% SECA self-employment tax, unpaid admin, and overhead.
* [**Free PDF Invoice Generator**](https://www.usefeekit.com/invoice-generator) — Create compliant commercial B2B invoices with direct bank ACH/wire details and payment terms.
* [**E-Commerce Profit Margin & Break-Even ROAS**](https://www.usefeekit.com/tools/ecommerce-profit-calculator) — Landed COGS unit economics, shipping costs, and platform cut modeling.

### 📚 Financial Engineering & Merchant Guides
* [**Interchange-Plus vs. Flat-Rate Pricing Guide (2026)**](https://www.usefeekit.com/blog/interchange-plus-pricing-vs-flat-rate-merchant-guide) — How wholesale card interchange cuts merchant fees on volume above $20k/mo.
* [**Shopify Payments vs. Stripe Processing Fees (2026)**](https://www.usefeekit.com/blog/shopify-payments-vs-stripe-fees-2026) — The hidden 0.6%–2.0% third-party gateway penalty analyzed.
* [**ACH vs. Wire vs. Credit Card Processing Fees**](https://www.usefeekit.com/blog/ach-vs-wire-vs-credit-card-fees-guide) — B2B invoicing fee routing strategies and Stripe ACH caps ($5.00 max).
* [**Invoice Payment Terms & Late Fees Guide**](https://www.usefeekit.com/blog/late-invoice-payment-terms-guide) — Enforcing Net 15/30 terms and statutory usury interest.

---

## 🚀 Key Features

* **Bidirectional Computation (Forward & Reverse):** Calculate standard deductions (Gross → Net) or reverse invoice markup (Net Required → Gross Invoice) so you never absorb gateway shortfalls.
* **100% Client-Side Privacy:** Sensitive revenue numbers, client totals, and invoices are processed entirely in the browser using Web Workers and MathJax/KaTeX. No numbers are logged or transmitted to external servers.
* **Static Generation (SSG) & Core Web Vitals:** Pre-rendered with Next.js Turbopack across 270+ static routes for near-instant sub-50ms page loads globally.
* **2026 Statutory Compliance:** Calibrated for current US IRS self-employment wage caps, UK HMRC £90,000 VAT threshold, and confirmed card processor fee schedules.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) 16 (App Router with Turbopack)
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS 4 with custom CSS typography and fluid layouts
* **Math & Formula Rendering:** KaTeX
* **Content:** MDX via `@next/mdx` with custom Gray-Matter frontmatter parser
* **Analytics:** Google Analytics 4 (Stream ID: 15978309619)

---

## 💻 Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/AaradhyaproK/feekit.git
cd feekit
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

To validate statutory calculation matrices and build production assets:

```bash
npm run build
```

---

## 🔗 Official Links & Resources

* **Website:** [https://www.usefeekit.com](https://www.usefeekit.com)
* **Free Invoice Generator:** [https://www.usefeekit.com/invoice-generator](https://www.usefeekit.com/invoice-generator)
* **Blog & Fee Guides:** [https://www.usefeekit.com/blog](https://www.usefeekit.com/blog)
* **Affiliate & Commercial Policy:** [https://www.usefeekit.com/affiliate-disclosure](https://www.usefeekit.com/affiliate-disclosure)
* **Privacy Policy:** [https://www.usefeekit.com/privacy](https://www.usefeekit.com/privacy)

---

## 📄 License & Copyright

**Copyright © 2026 Aaradhya Pathak ([FeeKit](https://www.usefeekit.com)). All Rights Reserved.**

This software, source code, visual components, algorithms, and fee calculation matrices are **Proprietary and Confidential**.

No permission is granted to any individual or organization to copy, fork, modify, redistribute, sublicense, host, scrape, reverse engineer, or commercially exploit any part of this repository or its assets without explicit, prior written permission from the copyright owner.

Refer to the complete legal terms in the [LICENSE](LICENSE) file.
