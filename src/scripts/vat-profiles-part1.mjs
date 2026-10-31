/**
 * Bespoke content profiles for VAT Countries (Part 1: 10 Countries)
 * Poland, Sweden, Austria, Denmark, Finland, Portugal, Greece,
 * Czech Republic, Romania, Hungary
 */

export const VAT_PROFILES_PART1 = {
  'poland': {
    slug: 'poland',
    name: 'Poland',
    title: 'Poland VAT Calculator (23%, 8%, 5% PTU) & KAS Guide | FeeKit',
    metaDescription: 'Calculate Polish Podatek od towarów i usług (PTU / VAT) with verified KAS rates (23% standard, 8% and 5% reduced). Covers PLN 200,000 threshold, JPK_V7 filing, and split payment.',
    h1: 'Poland VAT Calculator & Krajowa Administracja Skarbowa Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.podatki.gov.pl/vat/',
    citation: 'Ustawa z dnia 11 marca 2004 r. o podatku od towarów i usług (Dz. U. z 2024 r. poz. 361) and JPK_V7 structure.',
    overview: 'Value Added Tax in Poland—formally known as Podatek od towarów i usług (PTU or VAT)—is governed by the Polish VAT Act of March 11, 2004 and administered by the National Revenue Administration (Krajowa Administracja Skarbowa - KAS). Poland applies a standard VAT rate of 23% across commercial commerce, alongside reduced rates of 8% (passenger transport, construction, restaurant catering) and 5% (basic groceries, books, e-books). Small businesses with annual turnover under PLN 200,000 qualify for subjective exemption under Article 113 of the VAT Act. Poland operates a mandatory Split Payment Mechanism (mechanizm podzielonej płatności - MPP) for sensitive commodities and requires monthly unified SAF-T audits (JPK_V7M/JPK_V7K).',
    sections: [
      {
        id: 'pl-statutory-vat-rates',
        title: 'Polish VAT Rate Architecture: Standard (23%), Reduced (8% & 5%), and Zero Rate',
        body: `Poland enforces three primary statutory tax brackets under Article 41 of the VAT Act:

1. **Standard Rate (23%)**: Governed by Art. 41 ust. 1 in conjunction with Art. 146ef ust. 1 pkt 1. Applies to general consumer merchandise, electronics, passenger motor vehicles, professional IT and consulting services, industrial equipment, and adult clothing.
2. **First Reduced Rate (8%)**: Governed by Art. 41 ust. 2. Applies to passenger transport, residential construction services, hotel lodging, certain medical equipment, and restaurant dining (excluding beverages).
3. **Second Reduced Rate (5%)**: Governed by Art. 41 ust. 2a. Applies to staple foodstuffs (bread, dairy, meat, fresh fruits, vegetables), printed books, e-books, specialized baby food, and hygienic products.
4. **Zero Rate (0%)**: Intra-Community supplies of goods (WDT) to registered EU businesses (Art. 42) and direct export of goods outside the European Union (Art. 41 ust. 4).`
      },
      {
        id: 'pl-small-business-exemption',
        title: 'PLN 200,000 Small Business Exemption (Zwolnienie podmiotowe z VAT)',
        body: `Poland provides statutory administrative relief under Article 113 of the VAT Act:

- **Revenue Ceiling**: Businesses whose aggregate net sales turnover did not exceed **PLN 200,000** in the preceding tax year, or a proportional share for new businesses starting mid-year, are exempt from registering for VAT.
- **Excluded Activities**: Certain sectors are legally barred from the small business exemption regardless of revenue: consulting services, legal advice, jewelry sales, and online sales of cosmetic or electronic parts.
- **Operational Impact**: Exempt businesses do not charge 23% VAT on invoices but cannot reclaim input VAT on commercial hardware or operational supplies.`
      },
      {
        id: 'pl-split-payment-and-jpk-filing',
        title: 'Mandatory Split Payment (MPP) & Unified JPK_V7 Reporting Standards',
        body: `Poland enforces strict digital tax compliance to prevent VAT carousel fraud:

- **Split Payment Mechanism (MPP)**: Under Article 108a, B2B invoices exceeding **PLN 15,000 gross** covering Annex 15 goods (electronics, steel, construction, automotive parts) mandate the split payment method. The net amount is transferred to the vendor’s primary business bank account, while the 23% VAT component is routed automatically into a dedicated, state-monitored VAT sub-account (rachunek VAT).
- **Unified SAF-T (JPK_V7M / JPK_V7K)**: Poland eliminated paper VAT returns. All registered taxpayers must transmit structured XML audit files (JPK_V7M for monthly filers or JPK_V7K for quarterly filers) by the **25th day of the month** following the reporting period via the Ministry of Finance portal.
- **National e-Invoicing System (KSeF)**: Phased implementation of mandatory structured B2B electronic invoices issued through the centralized government KSeF clearinghouse.`
      },
      {
        id: 'pl-b2b-reverse-charge-and-oss',
        title: 'EU Cross-Border Reverse Charge and One-Stop Shop (OSS) Rules',
        body: `Cross-border trade governed by European Union directives:

- **B2B Reverse Charge**: Cross-border services delivered to registered EU business clients are invoiced without Polish VAT displaying the annotation: *"Odwrotne obciążenie (Reverse Charge)"* alongside both parties' VAT-EU numbers.
- **One-Stop Shop (OSS)**: Polish e-commerce merchants shipping physical products or digital services to EU consumers exceeding the joint €10,000 EU-wide threshold declare destination VAT through the simplified Polish OSS portal.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise IT Equipment Sale in Warsaw (23% Rate)',
      scenario: 'A technology hardware vendor in Warsaw delivers PLN 10,000.00 net of server equipment to a Polish corporate client, subject to standard 23% VAT and mandatory split payment.',
      inputs: { netEquipmentPrice: 'PLN 10,000.00', polishStandardVatRate: '23.00%' },
      steps: [
        { label: 'Net Hardware Base', formula: 'PLN 10,000.00 merchandise', amount: 'PLN 10,000.00', note: 'Subject to 23% Polish PTU' },
        { label: 'Polish VAT Component (23%)', formula: 'PLN 10,000.00 × 23.00%', amount: 'PLN 2,300.00', note: 'Owed to Polish Tax Office' },
        { label: 'Total Invoiced Gross Amount', formula: 'PLN 10,000.00 + PLN 2,300.00', amount: 'PLN 12,300.00', note: 'Total customer payment' },
        { label: 'Split Payment Routing', formula: 'Direct split bank transfer', amount: 'PLN 2,300.00 to VAT Account', note: 'Routed to dedicated KAS sub-account' }
      ],
      takeaway: 'Under Polish VAT, the corporate customer pays PLN 12,300 gross, with PLN 10,000 reaching the vendor’s checking account and PLN 2,300 routed directly into the monitored VAT account.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a PLN 1,230.00 Retail Receipt',
      scenario: 'A retail electronics store in Krakow issues an all-inclusive PLN 1,230.00 receipt for taxable computer accessories at 23% VAT. What is the net sales revenue?',
      inputs: { totalInclusiveAmount: 'PLN 1,230.00', vatRate: '23.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: 'PLN 1,230.00 ÷ (1 + 0.23)', amount: 'PLN 1,000.00', note: 'Retained business net turnover' },
        { label: 'Polish VAT Output Liability', formula: 'PLN 1,230.00 - PLN 1,000.00', amount: 'PLN 230.00', note: 'Reported on monthly JPK_V7M' },
        { label: 'Verification Calculation', formula: 'PLN 1,000.00 × 23.00%', amount: 'PLN 230.00', note: 'Reconciles exactly to PLN 1,230.00 total' }
      ],
      takeaway: 'From an all-inclusive PLN 1,230.00 transaction, the retailer retains PLN 1,000.00 net turnover and remits PLN 230.00 in VAT to the tax office.'
    },
    faqs: [
      { question: 'What is the standard VAT rate in Poland?', answer: 'The standard VAT rate in Poland is 23%. Reduced rates of 8% (passenger transport, construction, hotel lodging) and 5% (basic groceries, books, e-books) apply to qualifying supplies.', sourceUrl: 'https://www.podatki.gov.pl/vat/' },
      { question: 'What is the Polish VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Poland is PLN 200,000 in annual net sales turnover under Article 113 of the VAT Act. Certain advisory and electronics businesses are excluded.', sourceUrl: 'https://www.podatki.gov.pl/vat/' },
      { question: 'What is the Split Payment Mechanism (MPP) in Poland?', answer: 'Split payment is mandatory for B2B invoices exceeding PLN 15,000 gross covering sensitive goods (electronics, construction, steel). The net amount is paid to the merchant and VAT is routed to a monitored VAT bank account.', sourceUrl: 'https://www.podatki.gov.pl/vat/' },
      { question: 'When are Polish VAT returns due?', answer: 'Unified JPK_V7 files (JPK_V7M for monthly filers or JPK_V7K for quarterly filers) must be submitted electronically by the 25th day of the month following the reporting period via the Ministry of Finance portal.', sourceUrl: 'https://www.podatki.gov.pl/vat/' },
      { question: 'How is cross-border B2B software taxed in Poland?', answer: 'Cross-border B2B software services provided to other EU business customers are zero-rated under the reverse charge mechanism (Odwrotne obciążenie), with VAT self-assessed by the foreign buyer.', sourceUrl: 'https://www.podatki.gov.pl/vat/' }
    ]
  },

  'sweden': {
    slug: 'sweden',
    name: 'Sweden',
    title: 'Sweden VAT Calculator (25%, 12%, 6% Moms) & Skatteverket Guide | FeeKit',
    metaDescription: 'Calculate Swedish Mervärdesskatt (Moms) with verified Skatteverket rates (25% standard, 12% food/hotel, 6% books). SEK 80k threshold, reverse charge, and Skattedeklaration.',
    h1: 'Sweden VAT Calculator & Skatteverket Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.skatteverket.se/foretag/moms.html',
    citation: 'Mervärdesskattelagen (2023:200) and Skatteverket Administrative Regulations.',
    overview: 'Value Added Tax in Sweden—known domestically as Mervärdesskatt or Moms—is governed by the Swedish VAT Act (Mervärdesskattelagen) and administered by the Swedish Tax Agency (Skatteverket). Sweden levies one of the highest standard VAT rates in the European Union at 25%, alongside reduced rates of 12% (grocery foods, restaurant dining, hotel accommodations) and 6% (printed books, newspapers, cultural admissions, passenger transport). Small businesses with annual turnover not exceeding SEK 80,000 qualify for exemption from VAT registration. Cross-border B2B services operate under EU reverse charge (omvänd skattskyldighet), and electronic reporting is conducted via Skatteverket’s digital portal.',
    sections: [
      {
        id: 'se-statutory-vat-rates',
        title: 'Swedish Moms Architecture: Standard (25%), Reduced (12% & 6%), and Zero-Rated Supplies',
        body: `Sweden enforces three statutory VAT brackets under Mervärdesskattelagen:

1. **Standard Rate (25%)**: The general rate applying to the vast majority of goods and professional services, including electronics, motor vehicles, software licensing, clothing, commercial consulting, and fuel.
2. **Intermediate Reduced Rate (12%)**: Applies to grocery food for human consumption (excluding alcohol and tobacco), restaurant dining and catering, hotel accommodation, camping fees, and minor repair services (bicycles, shoes, clothing).
3. **Low Reduced Rate (6%)**: Applies to books, audiobooks, newspapers, passenger transport within Sweden (trains, buses, domestic flights), cultural entrance fees (concerts, museums, theater), and copyright royalties for artistic works.
4. **Zero-Rated & Tax-Exempt Supplies**: Cross-border intra-Community supplies of goods, healthcare, dental services, social care, financial banking services, and insurance.`
      },
      {
        id: 'se-small-business-threshold',
        title: 'SEK 80,000 Small Business Exemption (Befrielse från moms)',
        body: `Sweden provides simplified VAT exemption rules for micro-enterprises under Chapter 9 of Mervärdesskattelagen:

- **Turnover Threshold**: Sole traders (enskild näringsidkare) and micro-enterprises whose annual taxable turnover does not exceed **SEK 80,000** in the current or preceding two tax years can elect exemption from Moms.
- **Operational Rules**: Exempt businesses do not add 25% Moms to customer invoices and cannot claim input VAT refunds on business assets or software subscriptions.
- **Voluntary Registration**: Small businesses expecting high equipment startup expenses or conducting B2B commerce can voluntarily register for Moms to reclaim input tax.`
      },
      {
        id: 'se-reverse-charge-and-invoicing',
        title: 'Reverse Charge (Omvänd skattskyldighet) & Skatteverket Invoicing Standards',
        body: `Compliance procedures enforced by Skatteverket:

- **Cross-Border EU Reverse Charge**: When providing B2B digital services to a business client in another EU member state, the Swedish vendor issues a net invoice without Moms stating: *"Omvänd skattskyldighet (Reverse Charge)"* and validating both parties' VAT numbers (SE + 10 digits + 01).
- **Domestic Reverse Charge**: Enforced in high-risk domestic sectors, particularly commercial construction and scrap metal trade, shifting tax liability to the purchasing contractor.
- **Invoice Requirements**: Must state invoice date, unique sequential invoice number, seller's Momsregistreringsnummer (VAT ID), buyer's details, taxable unit price, applied Moms rate, and total Moms amount in SEK.`
      },
      {
        id: 'se-filing-frequencies-and-deadlines',
        title: 'Skattedeklaration Deadlines and Electronic Filing Portals',
        body: `Periodic tax filing schedules administered via Skatteverket's e-tjänster:

- **Filing Cadence**:
  - **Annual Filers**: Businesses with turnover under SEK 1 million typically file annually on the **26th day of the second month** following the fiscal year (or May 12 for calendar-year businesses).
  - **Quarterly Filers**: Standard for SMEs with turnover between SEK 1M and 40M, due on the **12th day of the second month** following the quarter (or 17th day in August).
  - **Monthly Filers**: Mandatory for enterprises with annual turnover exceeding SEK 40 million, due on the **26th day of the following month**.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Software Implementation in Stockholm (25% Moms)',
      scenario: 'A Stockholm IT engineering firm delivers SEK 40,000.00 net of custom cloud integration services to a corporate client based in Gothenburg. Standard 25% Moms applies.',
      inputs: { netSoftwareService: 'SEK 40,000.00', swedishStandardMomsRate: '25.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: 'SEK 40,000.00 consulting', amount: 'SEK 40,000.00', note: 'Subject to 25% Swedish Moms' },
        { label: 'Swedish Moms Output (25%)', formula: 'SEK 40,000.00 × 25.00%', amount: 'SEK 10,000.00', note: 'Output tax liability to Skatteverket' },
        { label: 'Total Invoiced Customer Checkout', formula: 'SEK 40,000.00 + SEK 10,000.00', amount: 'SEK 50,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Swedish VAT, the Gothenburg client pays SEK 50,000.00 gross, with SEK 10,000.00 in Moms remitted on the vendor’s quarterly Skattedeklaration.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a SEK 1,250.00 Retail Receipt',
      scenario: 'A consumer in Malmö purchases SEK 1,250.00 all-inclusive of retail electronics. What is the net sales revenue and Moms component?',
      inputs: { totalInclusiveAmount: 'SEK 1,250.00', momsRate: '25.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: 'SEK 1,250.00 ÷ (1 + 0.25)', amount: 'SEK 1,000.00', note: 'Retained business net turnover' },
        { label: 'Swedish Moms Component', formula: 'SEK 1,250.00 - SEK 1,000.00', amount: 'SEK 250.00', note: 'Output Moms liability' },
        { label: 'Verification Calculation', formula: 'SEK 1,000.00 × 25.00%', amount: 'SEK 250.00', note: 'Reconciles exactly to SEK 1,250.00 total' }
      ],
      takeaway: 'From an all-inclusive SEK 1,250.00 retail transaction in Sweden, the merchant retains SEK 1,000.00 net and remits SEK 250.00 in Moms to Skatteverket.'
    },
    faqs: [
      { question: 'What is the standard VAT (Moms) rate in Sweden?', answer: 'The standard VAT rate in Sweden is 25%. Reduced rates of 12% (food, restaurant meals, hotel lodging) and 6% (books, cultural admissions, passenger transport) apply to specific sectors.', sourceUrl: 'https://www.skatteverket.se/foretag/moms.html' },
      { question: 'What is the Swedish VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Sweden is SEK 80,000 in annual turnover. Businesses below this limit do not charge Moms on sales.', sourceUrl: 'https://www.skatteverket.se/foretag/moms.html' },
      { question: 'How is Moms formatted on Swedish business invoices?', answer: 'Swedish VAT registration numbers are formatted as SE followed by the 10-digit Swedish personal or corporate identity number and 01 (e.g. SE556123456701).', sourceUrl: 'https://www.skatteverket.se/foretag/moms.html' },
      { question: 'When are Swedish VAT returns due?', answer: 'Quarterly VAT returns are due on the 12th day of the second month following the quarter via Skatteverket’s digital e-tjänster (e.g. Q1 return due May 12).', sourceUrl: 'https://www.skatteverket.se/foretag/moms.html' },
      { question: 'How is cross-border B2B software taxed in Sweden?', answer: 'B2B software and digital services delivered to business clients in other EU countries are billed without Swedish Moms under the reverse charge mechanism (omvänd skattskyldighet).', sourceUrl: 'https://www.skatteverket.se/foretag/moms.html' }
    ]
  },

  'austria': {
    slug: 'austria',
    name: 'Austria',
    title: 'Austria VAT Calculator (20%, 10%, 13% USt.) & BMF Guide | FeeKit',
    metaDescription: 'Calculate Austrian Umsatzsteuer (USt. / MwSt.) with verified BMF rates (20% standard, 10% food/rent, 13% cultural). €35k Kleinunternehmer, FinanzOnline, and reverse charge.',
    h1: 'Austria VAT Calculator & Bundesministerium für Finanzen Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html',
    citation: 'Umsatzsteuergesetz 1994 (UStG 1994) § 10, § 6 Abs. 1 Z 27 (Kleinunternehmer), and § 19 (Reverse Charge).',
    overview: 'Value Added Tax in Austria—known domestically as Umsatzsteuer (USt.) or Mehrwertsteuer (MwSt.)—is governed by the Austrian VAT Act (Umsatzsteuergesetz 1994 - UStG 1994) and administered by the Federal Ministry of Finance (Bundesministerium für Finanzen - BMF). Austria applies a standard VAT rate of 20% across commercial commerce, alongside reduced rates of 10% (staple foods, residential rent, books, public transport) and 13% (cultural events, domestic flights, wine production, hotel accommodation). Freelancers and micro-enterprises with net annual revenue under €35,000 qualify for exemption under the Austrian Kleinunternehmerregelung. Tax returns are filed electronically via FinanzOnline.',
    sections: [
      {
        id: 'at-statutory-vat-rates',
        title: 'Austrian VAT Rate Architecture: Standard (20%), Reduced (10% & 13%), and Exempt Supplies',
        body: `Austrian tax law enforces three statutory rate brackets under § 10 UStG 1994:

1. **Standard Rate (Normalsteuersatz — 20%)**: Codified in § 10 Abs. 1. Applies to the broad majority of commercial merchandise, consumer electronics, motor vehicles, apparel, and commercial IT and professional consulting services.
2. **First Reduced Rate (10%)**: Codified in § 10 Abs. 2. Applies to basic foodstuffs, water supplies, printed books and periodicals, residential apartment leasing, passenger transport, and pharmaceuticals.
3. **Second Reduced Rate (13%)**: Codified in § 10 Abs. 3. Enacted under tax reform legislation, applying to hotel and tourism accommodations, cultural entrance admissions (theaters, museums, zoos), domestic air passenger transport, live animals, plants, and farm wine sales.
4. **Special Enclave Rate (19%)**: Jungholz and Mittelberg apply a specialized 19% rate matching German MwSt. due to geographic customs isolation.`
      },
      {
        id: 'at-small-business-exemption',
        title: '€35,000 Small Business Exemption: Kleinunternehmerregelung (§ 6 Abs. 1 Z 27 UStG)',
        body: `Austria provides statutory relief for freelancers and sole proprietors:

- **Revenue Threshold**: Businesses whose annual net turnover does not exceed **€35,000** in a calendar year qualify for the small business exemption. Under Austrian law, this is evaluated on net revenue, allowing up to **€42,000 gross** equivalent. A single tolerance overshoot of up to 15% once every four years is permitted.
- **Operational Rules**: Exempt Kleinunternehmer do not charge 20% USt. on invoices and cannot claim input tax deduction (Vorsteuerabzug) on equipment purchases.
- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *"Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung gemäß § 6 Abs. 1 Z 27 UStG"* (Tax-exempt pursuant to the small business regulation).`
      },
      {
        id: 'at-reverse-charge-and-eu-b2b',
        title: 'The § 19 UStG Reverse Charge & Cross-Border EU Supplies',
        body: `Cross-border commercial trade and specialized domestic sectors:

- **The § 19 UStG Reverse Charge (Übergang der Steuerschuld)**: Applied to cross-border B2B digital services and construction work. The Austrian vendor issues a net invoice without Austrian USt. displaying both parties' VAT numbers (ATU + 8 digits) and stating: *"Steuerschuldnerschaft des Leistungsempfängers (Reverse Charge)"*.
- **One-Stop Shop (OSS)**: Austrian e-commerce sellers shipping consumer goods across EU borders exceeding the unified €10,000 EU threshold declare foreign VAT via the Austrian BMF OSS portal.`
      },
      {
        id: 'at-filing-deadlines-and-finanzonline',
        title: 'USt-Voranmeldung (U30) Deadlines and FinanzOnline Compliance',
        body: `Compliance requirements administered by the Austrian Tax Office (Finanzamt Österreich):

- **Filing Deadlines (USt-Voranmeldung - Form U30)**: Advance returns and payments are due on the **15th day of the second month** following the reporting period (e.g., January tax is due March 15).
- **Filing Frequency**:
  - Quarterly: Businesses with previous year turnover between €35,000 and €100,000.
  - Monthly: Mandatory for businesses exceeding €100,000 annual turnover.
- **Mandatory Digital Filing**: All VAT returns and summary statements must be transmitted via **FinanzOnline**, Austria’s federal electronic tax platform.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Consulting Project in Vienna (20% USt.)',
      scenario: 'A management consultancy in Vienna delivers a €10,000.00 net organizational strategy project to a domestic Austrian corporate client. Standard 20% Umsatzsteuer applies.',
      inputs: { netConsultingFee: '€10,000.00', austrianStandardVatRate: '20.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€10,000.00 consulting', amount: '€10,000.00', note: 'Subject to 20% Austrian USt.' },
        { label: 'Austrian USt. Output (20%)', formula: '€10,000.00 × 20.00%', amount: '€2,000.00', note: 'Output tax liability to BMF' },
        { label: 'Total Invoiced Customer Checkout', formula: '€10,000.00 + €2,000.00', amount: '€12,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Austrian VAT, the corporate customer pays €12,000.00 gross, with €2,000.00 remitted on the consultant’s periodic U30 return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €600.00 Retail Receipt',
      scenario: 'A consumer in Salzburg purchases €600.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Austrian VAT component?',
      inputs: { totalInclusiveAmount: '€600.00', ustRate: '20.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€600.00 ÷ (1 + 0.20)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Austrian USt. Component', formula: '€600.00 - €500.00', amount: '€100.00', note: 'Output USt. liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 20.00%', amount: '€100.00', note: 'Reconciles exactly to €600.00 total' }
      ],
      takeaway: 'From an all-inclusive €600.00 retail transaction in Austria, the merchant retains €500.00 net and remits €100.00 in VAT to the tax office.'
    },
    faqs: [
      { question: 'What is the standard VAT (USt.) rate in Austria?', answer: 'The standard VAT rate in Austria is 20%. Reduced rates of 10% (staple foods, books, residential rent) and 13% (hotel lodging, cultural admissions, domestic flights) apply to qualifying supplies.', sourceUrl: 'https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html' },
      { question: 'What is the Austrian Kleinunternehmer threshold for small businesses?', answer: 'The small business VAT exemption threshold in Austria is €35,000 in net annual turnover (€42,000 gross). Businesses below this threshold do not charge VAT on invoices.', sourceUrl: 'https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html' },
      { question: 'How is an Austrian VAT number formatted?', answer: 'Austrian VAT identification numbers (UID-Nummer) are formatted with the country prefix AT followed by the letter U and 8 numerical digits (e.g. ATU12345678).', sourceUrl: 'https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html' },
      { question: 'When are Austrian advance VAT returns (USt-Voranmeldung) due?', answer: 'Advance returns (Form U30) and payments are due on the 15th day of the second month following the reporting period via FinanzOnline (e.g. Q1 due May 15).', sourceUrl: 'https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html' },
      { question: 'How does the B2B reverse charge work in Austria?', answer: 'Under § 19 UStG, cross-border B2B digital services and construction services shift the VAT liability to the business recipient, who self-assesses the tax on their domestic return.', sourceUrl: 'https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/umsatzsteuer.html' }
    ]
  },

  'denmark': {
    slug: 'denmark',
    name: 'Denmark',
    title: 'Denmark VAT Calculator (25% Moms Flat Rate) & Skat Guide | FeeKit',
    metaDescription: 'Calculate Danish Merværdiafgift (Moms) with verified Skattestyrelsen rates (25% uniform flat rate). DKK 50,000 threshold, TastSelv Erhverv filing, and zero reduced rate.',
    h1: 'Denmark VAT Calculator & Skattestyrelsen Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://skat.dk/erhverv/moms',
    citation: 'Momsloven (Lovbekendtgørelse nr. 1021 af 26. september 2019) and Skattestyrelsen Guidelines.',
    overview: 'Value Added Tax in Denmark—known domestically as Merværdiafgift or Moms—is governed by the Danish VAT Act (Momsloven) and administered by the Danish Tax Agency (Skattestyrelsen). Denmark is unique among European Union member states for enforcing a single, uniform standard VAT rate of 25% with zero statutory reduced rates. Every commercial transaction—from staple grocery foods and restaurant dining to luxury automobiles and enterprise SaaS—is subject to the identical 25% Moms rate. Businesses with annual taxable turnover exceeding DKK 50,000 must register for VAT. VAT declarations are submitted electronically via Skat’s digital portal (TastSelv Erhverv).',
    sections: [
      {
        id: 'dk-uniform-flat-rate-policy',
        title: 'Denmark’s Single 25% Flat Rate: Zero Reduced Rates Across All Sectors',
        body: `Unlike most EU jurisdictions that provide 5% to 10% reduced brackets for essentials, Denmark maintains complete rate uniformity:

- **Uniform Standard Rate**: **25%**. Codified in Section 33 of Momsloven. Applies to groceries, bread, milk, clothing, restaurant dining, books, hotel accommodations, electronics, SaaS software, and commercial consulting.
- **Zero-Rated Supplies (0% Moms)**: Codified in Section 34. Applies strictly to newspapers published at least once weekly, international passenger transport, intra-Community B2B deliveries of goods to registered EU businesses, and exports outside the EU.
- **Statutory Exemptions (Momsfritaget)**: Codified in Section 13. Healthcare, dental treatments, primary and higher education, financial and banking transactions, insurance, and long-term residential real estate leasing are exempt from VAT.`
      },
      {
        id: 'dk-small-business-threshold',
        title: 'DKK 50,000 Registration Threshold (Momsregistreringsgrænse)',
        body: `Denmark enforces a strict, low registration ceiling under Section 48 of Momsloven:

- **Threshold Level**: Any business or self-employed sole proprietorship (enkeltmandsvirksomhed) whose annual turnover exceeds **DKK 50,000** within any rolling 12-month period must register for Moms.
- **Proactive Registration Requirement**: A business must register as soon as it anticipates exceeding DKK 50,000. Failure to register triggers retroactive tax assessments and interest penalties.
- **Zero Input Tax for Non-Registered Entities**: Unregistered micro-businesses under DKK 50,000 cannot add Moms to invoices and cannot reclaim input Moms paid on purchases.`
      },
      {
        id: 'dk-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Omvendt betalingspligt) & EU B2B Trade',
        body: `Compliance mechanisms administered under EU directives:

- **EU Cross-Border B2B Supplies**: When a Danish company delivers digital services or SaaS to a business client in another EU member state, the invoice is issued net without Danish Moms displaying the note: *"Omvendt betalingspligt (Reverse Charge)"* alongside both parties' VAT/CVR numbers (DK + 8 digits).
- **Domestic Reverse Charge**: Enforced in high-risk sectors under Section 46 of Momsloven, including commercial scrap metal, gold, and mobile phone/tablet wholesale trade.`
      },
      {
        id: 'dk-tastselv-filing-and-deadlines',
        title: 'TastSelv Erhverv Filing Deadlines and Frequencies',
        body: `VAT reporting rules enforced by Skattestyrelsen:

- **Filing Schedules**:
  - **Semi-Annual (Halvårlig)**: Default for newly registered businesses and SMEs with annual turnover under DKK 5 million. Due on March 1 and September 1.
  - **Quarterly (Kvartalsvis)**: Businesses with turnover between DKK 5M and 50M. Due on March 1, June 1, September 1, and December 1.
  - **Monthly (Månedlig)**: Mandatory for large enterprises with annual turnover exceeding DKK 50 million. Due on the **25th day of the following month**.
- **Electronic Submissions**: All VAT declarations must be submitted via **TastSelv Erhverv** with payment executed via PBS / Nets direct debit or online banking.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Software Implementation in Copenhagen (25% Moms)',
      scenario: 'A software engineering firm in Copenhagen delivers DKK 20,000.00 net of custom web architecture services to a corporate client in Aarhus. Standard 25% Moms applies.',
      inputs: { netSoftwareService: 'DKK 20,000.00', danishMomsRate: '25.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: 'DKK 20,000.00 consulting', amount: 'DKK 20,000.00', note: 'Subject to 25% Danish Moms' },
        { label: 'Danish Moms Output (25%)', formula: 'DKK 20,000.00 × 25.00%', amount: 'DKK 5,000.00', note: 'Output tax liability to Skattestyrelsen' },
        { label: 'Total Invoiced Customer Checkout', formula: 'DKK 20,000.00 + DKK 5,000.00', amount: 'DKK 25,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Denmark’s uniform 25% flat rate, the Aarhus client pays DKK 25,000.00 gross, with DKK 5,000.00 remitted on the vendor’s periodic TastSelv return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a DKK 1,000.00 Retail Receipt',
      scenario: 'A consumer in Odense purchases DKK 1,000.00 all-inclusive of retail groceries or clothing. What is the net sales revenue and Moms component?',
      inputs: { totalInclusiveAmount: 'DKK 1,000.00', momsRate: '25.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: 'DKK 1,000.00 ÷ (1 + 0.25)', amount: 'DKK 800.00', note: 'Retained business net turnover' },
        { label: 'Danish Moms Component', formula: 'DKK 1,000.00 - DKK 800.00', amount: 'DKK 200.00', note: 'Output Moms liability' },
        { label: 'Verification Calculation', formula: 'DKK 800.00 × 25.00%', amount: 'DKK 200.00', note: 'Reconciles exactly to DKK 1,000.00 total' }
      ],
      takeaway: 'From an all-inclusive DKK 1,000.00 retail transaction in Denmark, the merchant retains DKK 800.00 net and owes DKK 200.00 in Moms to Skat.'
    },
    faqs: [
      { question: 'What is the VAT rate in Denmark?', answer: 'Denmark has a single uniform VAT (Moms) rate of 25%. Unlike other EU countries, Denmark does not have any reduced VAT rates for food, restaurants, or books.', sourceUrl: 'https://skat.dk/erhverv/moms' },
      { question: 'What is the Danish VAT registration threshold?', answer: 'The VAT registration threshold in Denmark is DKK 50,000 in annual turnover within any rolling 12-month period under Section 48 of Momsloven.', sourceUrl: 'https://skat.dk/erhverv/moms' },
      { question: 'How is a Danish VAT number formatted?', answer: 'Danish VAT numbers are identical to the business CVR number, formatted with the country code DK followed by 8 digits (e.g. DK12345678).', sourceUrl: 'https://skat.dk/erhverv/moms' },
      { question: 'Are groceries subject to reduced VAT in Denmark?', answer: 'No. Denmark is the only EU country where staple groceries, fresh produce, meat, and dairy are fully taxed at the standard 25% VAT rate.', sourceUrl: 'https://skat.dk/erhverv/moms' },
      { question: 'When are Danish VAT returns due?', answer: 'Quarterly VAT returns are due on the 1st day of the third month following the quarter via TastSelv Erhverv (e.g. Q1 due June 1).', sourceUrl: 'https://skat.dk/erhverv/moms' }
    ]
  },

  'finland': {
    slug: 'finland',
    name: 'Finland',
    title: 'Finland VAT Calculator (25.5%, 14%, 10% ALV) & Verohallinto Guide | FeeKit',
    metaDescription: 'Calculate Finnish Arvonlisävero (ALV) with official Verohallinto rates (25.5% standard enacted Sept 2024, 14% food, 10% books). €20k threshold and OmaVero filing.',
    h1: 'Finland VAT Calculator & Verohallinto Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.vero.fi/en/businesses/taxes-and-charges/vat/',
    citation: 'Arvonlisäverolaki (1501/1993) and 2024 VAT Rate Reform Act (HE 61/2024 vp).',
    overview: 'Value Added Tax in Finland—known domestically as Arvonlisävero or ALV—is governed by the Finnish VAT Act (Arvonlisäverolaki) and administered by the Finnish Tax Administration (Verohallinto). Under landmark fiscal consolidation legislation effective September 1, 2024, Finland raised its standard VAT rate from 24.0% to 25.5%, ranking as the second-highest standard rate in the European Union. Finland applies reduced rates of 14% (groceries, restaurant meals, animal feed) and 10% (books, pharmaceuticals, public transport, cultural admissions, hotel lodging). The small business threshold is €20,000 annually. Tax returns are filed electronically via Verohallinto’s digital portal (OmaVero).',
    sections: [
      {
        id: 'fi-statutory-vat-rates-2024',
        title: 'Finnish ALV Rates: The September 2024 Standard Increase to 25.5% & Reduced Rates',
        body: `Finland enforces three primary statutory tax brackets under Arvonlisäverolaki:

1. **Standard Rate (25.5%)**: Enacted under Government Proposal HE 61/2024 vp, increasing the baseline rate from 24.0% to **25.5% effective September 1, 2024**. Applies to the vast majority of consumer goods, vehicles, industrial machinery, electronics, adult apparel, and commercial IT and consulting services.
2. **First Reduced Rate (14%)**: Governed by Section 85a. Applies to food and groceries for human consumption, restaurant dining and catering, and animal feed. Excludes alcohol, tobacco, and live animals.
3. **Second Reduced Rate (10%)**: Governed by Section 85a. Applies to books and e-books, pharmaceuticals, public passenger transport, cultural events, sports facilities, cinema admissions, and hotel accommodation.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international maritime vessels, and exports outside the EU.`
      },
      {
        id: 'fi-small-business-threshold',
        title: '€20,000 Small Business Exemption (Vähäisen toiminnan raja)',
        body: `Finland provides administrative relief for micro-enterprises under Section 3 of Arvonlisäverolaki:

- **Turnover Threshold**: Sole proprietors and businesses with annual taxable turnover not exceeding **€20,000** (increased from €15,000) are exempt from VAT registration.
- **Phase-Out of Tax Relief (Alarajahuojennus)**: Under EU Directive 2020/285 reforms, Finland abolished its historical sliding-scale tax relief (alarajahuojennus) for businesses earning between €15,000 and €30,000. From 2025 onwards, businesses above €20,000 pay full VAT with zero partial relief.
- **Operational Rules**: Exempt businesses do not charge 25.5% ALV and cannot deduct input VAT on equipment.`
      },
      {
        id: 'fi-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Käännetty verovelvollisuus) & Cross-Border B2B Trade',
        body: `Compliance mechanisms administered under EU directives:

- **Cross-Border EU Reverse Charge**: B2B digital services and consulting delivered to registered business clients in another EU member state are invoiced net without Finnish ALV displaying the note: *"Käännetty verovelvollisuus (Reverse Charge)"* and both parties' VAT IDs (FI + 8 digits).
- **Domestic Construction Reverse Charge**: Applied to commercial construction services under Section 8c of Arvonlisäverolaki, shifting tax liability to the purchasing building contractor.`
      },
      {
        id: 'fi-filing-frequencies-and-omavero',
        title: 'OmaVero Filing Deadlines and Electronic Compliance',
        body: `Tax compliance requirements administered by Verohallinto:

- **Filing Deadlines**: Monthly VAT returns and payments are due on the **12th day of the second month** following the reporting period (e.g., January tax is due March 12).
- **Filing Frequencies**:
  - Annual: Micro-enterprises with turnover under €30,000.
  - Quarterly: SMEs with turnover between €30,000 and €100,000.
  - Monthly: Mandatory for businesses with annual turnover exceeding €100,000.
- **Mandatory Digital Submissions**: All returns must be transmitted electronically through **OmaVero (MyTax)**.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise IT Consulting in Helsinki (25.5% ALV)',
      scenario: 'A Finnish technology consultancy in Helsinki delivers €8,000.00 net of custom software engineering services to a domestic corporate client in Espoo. Standard 25.5% ALV applies.',
      inputs: { netSoftwareService: '€8,000.00', finnishStandardAlvRate: '25.50%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€8,000.00 consulting', amount: '€8,000.00', note: 'Subject to 25.5% Finnish ALV' },
        { label: 'Finnish ALV Output (25.5%)', formula: '€8,000.00 × 25.50%', amount: '€2,040.00', note: 'Output tax liability to Verohallinto' },
        { label: 'Total Invoiced Customer Checkout', formula: '€8,000.00 + €2,040.00', amount: '€10,040.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Finland’s 25.5% standard VAT rate, the corporate client pays €10,040.00 gross, with €2,040.00 in ALV remitted on the consultant’s periodic OmaVero return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €1,255.00 Retail Receipt',
      scenario: 'A consumer in Tampere purchases €1,255.00 all-inclusive of retail electronics. What is the net sales revenue and Finnish ALV component?',
      inputs: { totalInclusiveAmount: '€1,255.00', alvRate: '25.50%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€1,255.00 ÷ (1 + 0.255)', amount: '€1,000.00', note: 'Retained business net turnover' },
        { label: 'Finnish ALV Component', formula: '€1,255.00 - €1,000.00', amount: '€255.00', note: 'Output ALV liability' },
        { label: 'Verification Calculation', formula: '€1,000.00 × 25.50%', amount: '€255.00', note: 'Reconciles exactly to €1,255.00 total' }
      ],
      takeaway: 'From an all-inclusive €1,255.00 retail transaction in Finland, the merchant retains €1,000.00 net and remits €255.00 in ALV to Verohallinto.'
    },
    faqs: [
      { question: 'What is the standard VAT (ALV) rate in Finland?', answer: 'The standard VAT rate in Finland is 25.5%, which took effect on September 1, 2024 (increased from 24.0%). Reduced rates of 14% (food, restaurant meals) and 10% (books, medicine, hotels) apply to specific goods.', sourceUrl: 'https://www.vero.fi/en/businesses/taxes-and-charges/vat/' },
      { question: 'What is the Finnish VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Finland is €20,000 in annual turnover under Section 3 of Arvonlisäverolaki.', sourceUrl: 'https://www.vero.fi/en/businesses/taxes-and-charges/vat/' },
      { question: 'How is a Finnish VAT number formatted?', answer: 'Finnish VAT identification numbers are formatted with the country prefix FI followed by 8 numerical digits (e.g. FI12345678).', sourceUrl: 'https://www.vero.fi/en/businesses/taxes-and-charges/vat/' },
      { question: 'When are Finnish VAT returns due?', answer: 'Monthly VAT returns and tax payments are due on the 12th day of the second month following the reporting period via OmaVero (e.g. Q1 return due May 12).', sourceUrl: 'https://www.vero.fi/en/businesses/taxes-and-charges/vat/' },
      { question: 'What happened to the Finnish small business tax relief (alarajahuojennus)?', answer: 'The sliding-scale small business tax relief (alarajahuojennus) was abolished in Finland effective 2025 to comply with EU VAT Directive harmonizations.', sourceUrl: 'https://www.vero.fi/en/businesses/taxes-and-charges/vat/' }
    ]
  },

  'portugal': {
    slug: 'portugal',
    name: 'Portugal',
    title: 'Portugal VAT Calculator (23%, 13%, 6% IVA) & AT Guide | FeeKit',
    metaDescription: 'Calculate Portuguese Imposto sobre o Valor Acrescentado (IVA) with Autoridade Tributária rates (23% mainland, Madeira 22%, Azores 16%). €15k threshold, SAF-T, and reverse charge.',
    h1: 'Portugal VAT Calculator & Autoridade Tributária Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.portaldasfinancas.gov.pt/',
    citation: 'Código do Imposto sobre o Valor Acrescentado (CIVA) and Portaria n.º 31/2017 (SAF-T Invoicing).',
    overview: 'Value Added Tax in Portugal—known domestically as Imposto sobre o Valor Acrescentado or IVA—is governed by the Portuguese VAT Code (Código do IVA - CIVA) and administered by the Tax and Customs Authority (Autoridade Tributária e Aduaneira - AT). Portugal enforces a standard VAT rate of 23% in mainland Portugal, alongside reduced regional rates in the Autonomous Regions of Madeira (22%) and the Azores (16%). The mainland applies an intermediate rate of 13% (wine, musical performances, agricultural supplies) and a reduced rate of 6% (staple foods, books, hotel accommodations, urban rehabilitation). Small businesses with annual turnover under €15,000 qualify for exemption under Article 53 of CIVA. Invoicing software must be certified by the AT and export monthly SAF-T audit files.',
    sections: [
      {
        id: 'pt-statutory-vat-rates-and-islands',
        title: 'Portuguese IVA Rate Architecture: Mainland (23%) vs Madeira (22%) and Azores (16%)',
        body: `Portugal enforces differentiated rates across geographic territories under Article 18 of CIVA:

- **Mainland Portugal (Continente)**:
  - **Standard Rate (23%)**: General commercial goods, apparel, electronics, vehicles, IT and professional consulting.
  - **Intermediate Rate (13%)**: Wine, restaurant food services (excluding alcoholic beverages), agricultural supplies, and cultural performances.
  - **Reduced Rate (6%)**: Basic food staples (bread, milk, meat, fresh fruits), printed books, newspapers, pharmaceutical products, hotel lodging, and passenger transport.
- **Autonomous Region of Madeira**: Standard: **22%**, Intermediate: **12%**, Reduced: **5%**.
- **Autonomous Region of the Azores**: Standard: **16%**, Intermediate: **9%**, Reduced: **4%**.`
      },
      {
        id: 'pt-small-business-exemption',
        title: '€15,000 Small Business Exemption: Artigo 53.º do CIVA',
        body: `Portugal provides statutory administrative relief for freelancers and micro-enterprises:

- **Revenue Ceiling**: Sole proprietors and independent professionals whose annual business turnover did not exceed **€15,000** in the preceding calendar year qualify for the special exemption scheme under Art. 53 CIVA.
- **Operational Rules**: Exempt professionals do not charge IVA on customer invoices and cannot deduct input IVA on business expenses.
- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *"IVA - regime de isenção [artigo 53.º do CIVA]"*.`
      },
      {
        id: 'pt-saf-t-mandate-and-certified-software',
        title: 'Mandatory Certified Invoicing Software & Monthly SAF-T (PT) Reporting',
        body: `Portugal maintains one of the strictest digital invoice auditing systems in Europe:

- **Certified Invoicing Software (Software Certificado)**: All commercial invoices must be produced using billing software certified by the Autoridade Tributária (AT), incorporating encrypted hash validation and sequential numbering.
- **Monthly SAF-T Submissions**: Businesses must export structured SAF-T (PT) XML accounting files and submit them to the AT by the **5th day of the month** following invoice issuance via the Portal das Finanças.
- **ATCUD Code & QR Code**: Every commercial invoice must display a unique Document Code (ATCUD) and two-dimensional QR code validating tax authenticity.`
      },
      {
        id: 'pt-reverse-charge-and-filing',
        title: 'Reverse Charge (Autoliquidação) and Filing Frequencies',
        body: `Cross-border trade and periodic filing rules:

- **B2B Reverse Charge**: Cross-border services provided to EU corporate clients are invoiced net without Portuguese IVA displaying: *"Autoliquidação (Reverse Charge)"* alongside verified NIF/VAT numbers (PT + 9 digits).
- **Filing Schedules**:
  - Quarterly: SMEs with turnover under €650,000. Due on the **20th day of the second month** following the quarter.
  - Monthly: Mandatory for businesses exceeding €650,000 turnover. Due on the **20th day of the second month** following the reporting month.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Software Implementation in Lisbon (23% IVA)',
      scenario: 'A digital consultancy in Lisbon delivers €6,000.00 net of custom software engineering services to a domestic corporate client in Porto. Standard 23% mainland IVA applies.',
      inputs: { netSoftwareService: '€6,000.00', mainlandStandardIvaRate: '23.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€6,000.00 consulting', amount: '€6,000.00', note: 'Subject to 23% mainland IVA' },
        { label: 'Portuguese IVA Output (23%)', formula: '€6,000.00 × 23.00%', amount: '€1,380.00', note: 'Output tax liability to AT' },
        { label: 'Total Invoiced Customer Checkout', formula: '€6,000.00 + €1,380.00', amount: '€7,380.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard mainland Portuguese VAT, the corporate client pays €7,380.00 gross, with €1,380.00 remitted on the vendor’s quarterly IVA return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €1,230.00 Retail Receipt',
      scenario: 'A consumer in Coimbra purchases €1,230.00 all-inclusive of retail electronics. What is the net sales revenue and Portuguese IVA component?',
      inputs: { totalInclusiveAmount: '€1,230.00', ivaRate: '23.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€1,230.00 ÷ (1 + 0.23)', amount: '€1,000.00', note: 'Retained business net turnover' },
        { label: 'Portuguese IVA Component', formula: '€1,230.00 - €1,000.00', amount: '€230.00', note: 'Output IVA liability' },
        { label: 'Verification Calculation', formula: '€1,000.00 × 23.00%', amount: '€230.00', note: 'Reconciles exactly to €1,230.00 total' }
      ],
      takeaway: 'From an all-inclusive €1,230.00 retail transaction in mainland Portugal, the merchant retains €1,000.00 net and remits €230.00 in IVA to the tax authority.'
    },
    faqs: [
      { question: 'What is the standard VAT (IVA) rate in Portugal?', answer: 'The standard VAT rate in mainland Portugal is 23%. Autonomous regions have lower standard rates: 22% in Madeira and 16% in the Azores.', sourceUrl: 'https://www.portaldasfinancas.gov.pt/' },
      { question: 'What is the Portuguese VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Portugal is €15,000 in annual turnover under Article 53 of the Portuguese VAT Code (CIVA).', sourceUrl: 'https://www.portaldasfinancas.gov.pt/' },
      { question: 'What is SAF-T (PT) and why is it mandatory in Portugal?', answer: 'SAF-T (PT) is an electronic standard audit file for tax. All Portuguese businesses must use certified billing software and submit monthly SAF-T files to the tax authority.', sourceUrl: 'https://www.portaldasfinancas.gov.pt/' },
      { question: 'How is a Portuguese VAT number formatted?', answer: 'Portuguese tax numbers (NIF/NIPC) are formatted with the country prefix PT followed by 9 numerical digits (e.g. PT123456789).', sourceUrl: 'https://www.portaldasfinancas.gov.pt/' },
      { question: 'When are Portuguese VAT returns due?', answer: 'Quarterly VAT returns are due on the 20th day of the second month following the quarter via the Portal das Finanças (e.g. Q1 return due May 20).', sourceUrl: 'https://www.portaldasfinancas.gov.pt/' }
    ]
  },

  'greece': {
    slug: 'greece',
    name: 'Greece',
    title: 'Greece VAT Calculator (24%, 13%, 6% FPA) & AADE Guide | FeeKit',
    metaDescription: 'Calculate Greek Foros Prostithemenis Axias (FPA / ΦΠΑ) with verified AADE rates (24% standard, 13% food, 6% medicine). €10k threshold, myDATA e-books, and island discounts.',
    h1: 'Greece VAT Calculator & Independent Authority for Public Revenue Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.aade.gr/',
    citation: 'Greek VAT Code (Law 2859/2000) and Law 4646/2019 (myDATA Digital Books).',
    overview: 'Value Added Tax in Greece—known domestically as Foros Prostithemenis Axias (FPA or ΦΠΑ)—is governed by the Greek VAT Code (Law 2859/2000) and administered by the Independent Authority for Public Revenue (AADE / ΑΑΔΕ). Greece enforces a standard VAT rate of 24% across general commercial goods and services, alongside reduced rates of 13% (staple grocery foods, restaurant dining, hotel accommodations, energy) and 6% (pharmaceuticals, medical supplies, books, theatrical admissions). Specific remote Aegean islands benefit from a statutory 30% VAT rate reduction (resulting in a 17% standard rate). Small businesses with annual turnover under €10,000 qualify for exemption. All commercial invoices must be synchronized in real time with AADE’s digital book platform (myDATA).',
    sections: [
      {
        id: 'gr-statutory-vat-rates-and-islands',
        title: 'Greek FPA Architecture: Standard (24%), Reduced (13% & 6%), and Island Reductions',
        body: `Greece enforces three primary statutory tax brackets under Article 21 of the VAT Code:

1. **Standard Rate (24%)**: Applies to general merchandise, consumer electronics, passenger vehicles, clothing, alcoholic beverages, and commercial professional consulting.
2. **First Reduced Rate (13%)**: Applies to staple grocery foods (meat, fish, milk, bread, produce), restaurant dining and catering, hotel and tourism lodging, public passenger transport, and residential electricity.
3. **Second Reduced Rate (6%)**: Applies to prescription medicines, vaccines, printed books, newspapers, and theatrical tickets.
4. **Aegean Island Surtax Reduction (17%)**: Designated Aegean border islands (Leros, Lesbos, Kos, Samos, Chios) qualify for a statutory 30% reduction on all VAT brackets, yielding rates of **17%** (standard), **9%** (reduced), and **4%** (super-reduced).`
      },
      {
        id: 'gr-small-business-exemption',
        title: '€10,000 Small Business Exemption (Special Scheme for Small Enterprises)',
        body: `Administrative relief under Article 39 of the Greek VAT Code:

- **Revenue Ceiling**: Micro-enterprises and freelancers whose annual gross sales turnover did not exceed **€10,000** in the preceding tax year can elect exemption from VAT.
- **Operational Rules**: Exempt small businesses do not charge 24% FPA on customer invoices and cannot claim input VAT refunds on business purchases.
- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *"Χωρίς Φ.Π.Α. - απαλλαγή μικρών επιχειρήσεων άρθρο 39 ν. 2859/2000"* (Exempt from VAT under Article 39).`
      },
      {
        id: 'gr-mydata-realtime-invoicing',
        title: 'Mandatory myDATA Electronic Bookkeeping & Invoicing Mandates',
        body: `AADE enforces aggressive digital tax transparency under Law 4646/2019:

- **myDATA Platform (my Digital Accounting and Tax Application)**: All businesses operating in Greece must record and transmit revenue invoices electronically to the central myDATA platform in real time.
- **MARK Number**: Every validated commercial invoice receives a unique Electronic Registry Number (MARK) from AADE and an embedded QR code validating transmission authenticity.
- **Discrepancy Matching**: AADE automatically cross-checks supplier revenue transmissions against customer expense deductions to detect VAT fraud.`
      },
      {
        id: 'gr-reverse-charge-and-filing',
        title: 'Reverse Charge and Filing Frequencies via TAXISnet',
        body: `Compliance requirements administered by AADE:

- **B2B Reverse Charge**: Cross-border services provided to registered EU corporate clients are invoiced net without Greek FPA displaying: *"Αντίστροφη επιβάρυνση (Reverse Charge)"* alongside Greek VAT numbers (EL + 9 digits).
- **Filing Schedules**:
  - Quarterly: Businesses operating under single-entry accounting (simplified books). Due on the **last business day of the month** following the quarter.
  - Monthly: Businesses operating under double-entry accounting (corporations). Due on the **last business day of the following month**.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Athens (24% FPA)',
      scenario: 'A digital consultancy in Athens delivers a €5,000.00 net cloud software implementation project to a domestic corporate client in Thessaloniki. Standard 24% FPA applies.',
      inputs: { netSoftwareService: '€5,000.00', greekStandardFpaRate: '24.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€5,000.00 consulting', amount: '€5,000.00', note: 'Subject to 24% Greek FPA' },
        { label: 'Greek FPA Output (24%)', formula: '€5,000.00 × 24.00%', amount: '€1,200.00', note: 'Output tax liability to AADE' },
        { label: 'Total Invoiced Customer Checkout', formula: '€5,000.00 + €1,200.00', amount: '€6,200.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Greek VAT, the corporate customer pays €6,200.00 gross, with €1,200.00 remitted on the vendor’s periodic TAXISnet VAT return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €620.00 Retail Receipt',
      scenario: 'A consumer in Heraklion purchases €620.00 all-inclusive of retail electronics. What is the net sales revenue and Greek FPA component?',
      inputs: { totalInclusiveAmount: '€620.00', fpaRate: '24.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€620.00 ÷ (1 + 0.24)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Greek FPA Component', formula: '€620.00 - €500.00', amount: '€120.00', note: 'Output FPA liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 24.00%', amount: '€120.00', note: 'Reconciles exactly to €620.00 total' }
      ],
      takeaway: 'From an all-inclusive €620.00 retail transaction in Greece, the merchant retains €500.00 net and remits €120.00 in FPA to AADE.'
    },
    faqs: [
      { question: 'What is the standard VAT (FPA) rate in Greece?', answer: 'The standard VAT rate in Greece is 24%. Reduced rates of 13% (food, restaurant dining, hotels) and 6% (medicine, books, theater) apply to specific goods. Certain Aegean islands qualify for a 17% rate.', sourceUrl: 'https://www.aade.gr/' },
      { question: 'What is the Greek VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Greece is €10,000 in annual turnover under Article 39 of the Greek VAT Code.', sourceUrl: 'https://www.aade.gr/' },
      { question: 'What is the AADE myDATA platform in Greece?', answer: 'myDATA is Greece’s mandatory digital bookkeeping platform. All businesses must synchronize commercial revenue invoices in real time with AADE to receive an electronic MARK validation number.', sourceUrl: 'https://www.aade.gr/' },
      { question: 'How is a Greek VAT number formatted?', answer: 'Greek VAT numbers (AFM) are formatted with the country prefix EL followed by 9 numerical digits (e.g. EL123456789). Note that EL is used internationally, while AFM is used domestically.', sourceUrl: 'https://www.aade.gr/' },
      { question: 'When are Greek VAT returns due?', answer: 'VAT returns are submitted electronically via TAXISnet on the last business day of the month following the reporting period (quarterly for simplified single-entry books, monthly for double-entry).', sourceUrl: 'https://www.aade.gr/' }
    ]
  },

  'czech-republic': {
    slug: 'czech-republic',
    name: 'Czech Republic',
    title: 'Czech Republic VAT Calculator (21% & 12% DPH) & Finanční správa Guide | FeeKit',
    metaDescription: 'Calculate Czech Daň z přidané hodnoty (DPH) with verified rates (21% standard, 12% unified reduced rate enacted 2024). CZK 2M threshold, Kontrolní hlášení, and reverse charge.',
    h1: 'Czech Republic VAT Calculator & Finanční správa Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.financnisprava.cz/',
    citation: 'Zákon č. 235/2004 Sb., o dani z přidané hodnoty (DPH) and 2024 Consolidation Package (Zákon č. 349/2023 Sb.).',
    overview: 'Value Added Tax in the Czech Republic—known domestically as Daň z přidané hodnoty or DPH—is governed by the Czech VAT Act (Zákon o DPH č. 235/2004 Sb.) and administered by the Financial Administration (Finanční správa). Under the major 2024 Consolidation Package (Zákon č. 349/2023 Sb.), the Czech Republic reformed its tax structure by consolidating its previous two reduced rates (10% and 15%) into a single, unified reduced rate of 12%, while preserving the standard rate at 21%. Printed books are completely zero-rated (0%). The small business registration threshold is CZK 2,000,000 annually. Taxpayers must submit monthly VAT returns and the mandatory VAT Control Statement (Kontrolní hlášení) by the 25th.',
    sections: [
      {
        id: 'cz-statutory-vat-rates-2024',
        title: 'Czech DPH Architecture: Standard (21%), Unified Reduced (12%), and Zero-Rated Books',
        body: `The Czech Republic operates across three statutory tax brackets under Section 47 of Zákon o DPH:

1. **Standard Rate (Základní sazba — 21%)**: Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant beer, and commercial IT and professional consulting.
2. **Unified Reduced Rate (Snížená sazba — 12%)**: Effective January 1, 2024, merging the former 10% and 15% brackets. Applies to basic foodstuffs, restaurant meals (food only), tap water, pharmaceutical products, medical equipment, residential construction, and hotel accommodations.
3. **Zero Rate (0%)**: Following 2024 reforms, printed and electronic books are fully zero-rated (0%). Cross-border intra-Community B2B deliveries of goods and exports outside the EU are also zero-rated.
4. **Tax-Exempt Supplies**: Financial and banking services, insurance, healthcare, and educational services.`
      },
      {
        id: 'cz-small-business-threshold',
        title: 'CZK 2,000,000 Registration Threshold (Registrační limit pro DPH)',
        body: `Administrative relief under Section 6 of Zákon o DPH:

- **Revenue Threshold**: A business or sole proprietor (OSVČ) whose turnover exceeds **CZK 2,000,000** in any 12 consecutive calendar months must register as a VAT payer.
- **Voluntary Flat-Rate Tax (Paušální daň)**: Non-VAT registered sole traders earning under CZK 2 million can elect the Czech simplified flat-rate tax regime combining income tax, social security, and health insurance into a single monthly payment.
- **Mandatory Filing Trigger**: Once the CZK 2,000,000 threshold is breached, the business must file an application for registration within 15 days following the month of breach.`
      },
      {
        id: 'cz-control-statement-and-filing',
        title: 'Mandatory VAT Control Statement (Kontrolní hlášení) & Electronic Filing',
        body: `Anti-fraud reporting procedures administered by Finanční správa:

- **VAT Control Statement (Kontrolní hlášení)**: All registered VAT payers must submit a detailed transaction-level Control Statement pairing supplier and buyer invoice numbers to prevent carousel fraud. Legal entities file monthly; natural persons file according to their VAT return frequency.
- **Filing Deadlines**: VAT returns (DPH přiznání) and Control Statements are due on or before the **25th day of the month** following the reporting period via the **Moje daně** portal.
- **Severe Penalties**: Failure to respond to a Control Statement discrepancy call within 5 working days triggers automatic statutory fines starting at CZK 1,000 up to CZK 50,000.`
      },
      {
        id: 'cz-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Režim přenesení daňové povinnosti) & Cross-Border B2B',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU business clients are invoiced net without Czech DPH displaying: *"Daň odvede zákazník (Reverse Charge)"* alongside verified DIČ numbers (CZ + 8, 9, or 10 digits).
- **Domestic Reverse Charge**: Enforced under Sections 92a–92g for scrap metal, construction work, and high-value wholesale electronics.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise IT Infrastructure in Prague (21% DPH)',
      scenario: 'A technology consultancy in Prague delivers CZK 100,000.00 net of custom cloud architecture services to a corporate client in Brno. Standard 21% DPH applies.',
      inputs: { netConsultingService: 'CZK 100,000.00', czechStandardDphRate: '21.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: 'CZK 100,000.00 consulting', amount: 'CZK 100,000.00', note: 'Subject to 21% Czech DPH' },
        { label: 'Czech DPH Output (21%)', formula: 'CZK 100,000.00 × 21.00%', amount: 'CZK 21,000.00', note: 'Output tax liability to Finanční správa' },
        { label: 'Total Invoiced Customer Checkout', formula: 'CZK 100,000.00 + CZK 21,000.00', amount: 'CZK 121,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Czech VAT, the corporate customer pays CZK 121,000.00 gross, with CZK 21,000.00 remitted on the vendor’s monthly Moje daně return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a CZK 1,210.00 Retail Receipt',
      scenario: 'A consumer in Ostrava purchases CZK 1,210.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Czech DPH component?',
      inputs: { totalInclusiveAmount: 'CZK 1,210.00', dphRate: '21.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: 'CZK 1,210.00 ÷ (1 + 0.21)', amount: 'CZK 1,000.00', note: 'Retained business net turnover' },
        { label: 'Czech DPH Component', formula: 'CZK 1,210.00 - CZK 1,000.00', amount: 'CZK 210.00', note: 'Output DPH liability' },
        { label: 'Verification Calculation', formula: 'CZK 1,000.00 × 21.00%', amount: 'CZK 210.00', note: 'Reconciles exactly to CZK 1,210.00 total' }
      ],
      takeaway: 'From an all-inclusive CZK 1,210.00 retail transaction in the Czech Republic, the merchant retains CZK 1,000.00 net and remits CZK 210.00 in DPH to the state.'
    },
    faqs: [
      { question: 'What is the standard VAT (DPH) rate in the Czech Republic?', answer: 'The standard VAT rate in the Czech Republic is 21%. Following 2024 tax reforms, a single unified reduced rate of 12% applies to food, pharmaceuticals, and hotels, while books are 0%.', sourceUrl: 'https://www.financnisprava.cz/' },
      { question: 'What is the Czech VAT registration threshold for small businesses?', answer: 'The VAT registration threshold in the Czech Republic is CZK 2,000,000 in turnover over any 12 consecutive calendar months under Section 6 of Zákon o DPH.', sourceUrl: 'https://www.financnisprava.cz/' },
      { question: 'What is the Czech VAT Control Statement (Kontrolní hlášení)?', answer: 'The Control Statement is a mandatory electronic report submitted alongside the VAT return that lists individual invoice numbers to detect tax evasion and cross-check transaction data.', sourceUrl: 'https://www.financnisprava.cz/' },
      { question: 'How is a Czech VAT number formatted?', answer: 'Czech VAT identification numbers (DIČ) are formatted with the prefix CZ followed by 8, 9, or 10 digits (often matching the legal entity’s IČO or individual’s birth number).', sourceUrl: 'https://www.financnisprava.cz/' },
      { question: 'When are Czech VAT returns due?', answer: 'VAT returns and Control Statements are due on or before the 25th day of the month following the end of the reporting period via the Moje daně electronic portal.', sourceUrl: 'https://www.financnisprava.cz/' }
    ]
  },

  'romania': {
    slug: 'romania',
    name: 'Romania',
    title: 'Romania VAT Calculator (19%, 9%, 5% TVA) & ANAF Guide | FeeKit',
    metaDescription: 'Calculate Romanian Taxa pe valoarea adăugată (TVA) with verified ANAF rates (19% standard, 9% food/pharma, 5% eco-housing). RON 300k threshold, RO e-Factura, and reverse charge.',
    h1: 'Romania VAT Calculator & Agenția Națională de Administrare Fiscală Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.anaf.ro/',
    citation: 'Codul Fiscal (Legea nr. 227/2015) Titlul VII (TVA) and OUG nr. 120/2021 (RO e-Factura).',
    overview: 'Value Added Tax in Romania—known domestically as Taxa pe valoarea adăugată or TVA—is governed by the Romanian Fiscal Code (Codul Fiscal - Legea 227/2015) and administered by the National Agency for Fiscal Administration (Agenția Națională de Administrare Fiscală - ANAF). Romania applies a standard VAT rate of 19% across general commercial goods and services, alongside reduced rates of 9% (food, non-alcoholic beverages, pharmaceuticals, hotel lodging) and 5% (firewood, thermal energy, ecological housing). Small businesses with annual turnover not exceeding RON 300,000 qualify for exemption. Romania enforces mandatory electronic B2B invoice transmission through the national RO e-Factura clearinghouse.',
    sections: [
      {
        id: 'ro-statutory-vat-rates',
        title: 'Romanian TVA Rate Architecture: Standard (19%), Reduced (9% & 5%), and Zero Rate',
        body: `Romania enforces three primary statutory tax brackets under Article 291 of Codul Fiscal:

1. **Standard Rate (19%)**: Applies to general merchandise, consumer electronics, passenger vehicles, apparel, alcohol, restaurant catering, and commercial IT and professional consulting services.
2. **First Reduced Rate (9%)**: Applies to human food and non-alcoholic beverages, agricultural seeds and fertilizer, medical and dental prosthetics, prescription medicines, and hotel and tourism accommodation.
3. **Second Reduced Rate (5%)**: Applies to books, newspapers, cultural and sports admissions, delivery of qualifying ecological residential housing (meeting surface and price ceilings), and school textbooks.
4. **Zero-Rated Supplies (0%)**: Intra-Community supplies of goods, international transport, and direct exports outside the European Union.`
      },
      {
        id: 'ro-small-business-exemption',
        title: 'RON 300,000 Small Business Exemption (Regimul special de scutire)',
        body: `Administrative relief under Article 310 of Codul Fiscal:

- **Revenue Ceiling**: Small enterprises and sole traders whose annual turnover does not exceed **RON 300,000** qualify for the special exemption scheme.
- **Registration Deadline**: Once the RON 300,000 threshold is reached during the tax year, the business must apply for VAT registration within 10 days of the end of the month in which the limit was exceeded.
- **Operational Rules**: Exempt small enterprises do not charge 19% TVA on invoices and cannot deduct input VAT on equipment.`
      },
      {
        id: 'ro-e-factura-mandate-and-anaf',
        title: 'Mandatory RO e-Factura B2B Clearinghouse & Form 300 Filing',
        body: `ANAF enforces aggressive digital monitoring under Government Emergency Ordinance OUG 120/2021:

- **RO e-Factura System**: Mandatory for all B2B transactions established in Romania. Invoices must be generated in standardized XML format (UBL 2.1) and transmitted directly to the Ministry of Finance SPV portal (Spațiul Privat Virtual), where ANAF applies an electronic validation signature.
- **Filing Deadlines (Decontul de TVA - Form 300)**: VAT returns and payments are due on or before the **25th day of the month** following the reporting period via ANAF’s online portal.
- **Filing Frequency**:
  - Monthly: Standard for businesses with previous year turnover exceeding €100,000.
  - Quarterly: Businesses with turnover below €100,000.`
      },
      {
        id: 'ro-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Taxare inversă) & Cross-Border B2B Supplies',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Romanian TVA displaying: *"Taxare inversă (Reverse Charge)"* alongside verified CIF numbers (RO + 2 to 10 digits).
- **Domestic Reverse Charge**: Enforced under Article 331 of Codul Fiscal for grain, timber, scrap metal, and energy certificate wholesale trade.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Bucharest (19% TVA)',
      scenario: 'A software engineering firm in Bucharest delivers RON 20,000.00 net of custom cloud integration services to a corporate client in Cluj-Napoca. Standard 19% TVA applies.',
      inputs: { netSoftwareService: 'RON 20,000.00', romanianStandardTvaRate: '19.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: 'RON 20,000.00 consulting', amount: 'RON 20,000.00', note: 'Subject to 19% Romanian TVA' },
        { label: 'Romanian TVA Output (19%)', formula: 'RON 20,000.00 × 19.00%', amount: 'RON 3,800.00', note: 'Output tax liability to ANAF' },
        { label: 'Total Invoiced Customer Checkout', formula: 'RON 20,000.00 + RON 3,800.00', amount: 'RON 23,800.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Romanian VAT, the corporate customer pays RON 23,800.00 gross, with RON 3,800.00 in TVA transmitted through RO e-Factura and remitted on Form 300.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a RON 1,190.00 Retail Receipt',
      scenario: 'A consumer in Timișoara purchases RON 1,190.00 all-inclusive of retail electronics. What is the net sales revenue and Romanian TVA component?',
      inputs: { totalInclusiveAmount: 'RON 1,190.00', tvaRate: '19.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: 'RON 1,190.00 ÷ (1 + 0.19)', amount: 'RON 1,000.00', note: 'Retained business net turnover' },
        { label: 'Romanian TVA Component', formula: 'RON 1,190.00 - RON 1,000.00', amount: 'RON 190.00', note: 'Output TVA liability' },
        { label: 'Verification Calculation', formula: 'RON 1,000.00 × 19.00%', amount: 'RON 190.00', note: 'Reconciles exactly to RON 1,190.00 total' }
      ],
      takeaway: 'From an all-inclusive RON 1,190.00 retail transaction in Romania, the merchant retains RON 1,000.00 net and remits RON 190.00 in TVA to ANAF.'
    },
    faqs: [
      { question: 'What is the standard VAT (TVA) rate in Romania?', answer: 'The standard VAT rate in Romania is 19%. Reduced rates of 9% (food, medicine, hotel accommodation) and 5% (books, cultural events, eco-housing) apply to specific qualifying goods.', sourceUrl: 'https://www.anaf.ro/' },
      { question: 'What is the Romanian VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Romania is RON 300,000 in annual turnover under Article 310 of Codul Fiscal.', sourceUrl: 'https://www.anaf.ro/' },
      { question: 'What is the RO e-Factura system in Romania?', answer: 'RO e-Factura is Romania’s mandatory electronic invoicing platform. All domestic B2B invoices must be transmitted in standardized XML format to the Ministry of Finance SPV portal.', sourceUrl: 'https://www.anaf.ro/' },
      { question: 'How is a Romanian VAT number formatted?', answer: 'Romanian VAT identification numbers (Cod de Identificare Fiscală - CIF) are formatted with the country prefix RO followed by 2 to 10 numerical digits (e.g. RO12345678).', sourceUrl: 'https://www.anaf.ro/' },
      { question: 'When are Romanian VAT returns due?', answer: 'VAT returns (Decontul de TVA - Form 300) are due on or before the 25th day of the month following the close of the reporting period via the ANAF electronic filing portal.', sourceUrl: 'https://www.anaf.ro/' }
    ]
  },

  'hungary': {
    slug: 'hungary',
    name: 'Hungary',
    title: 'Hungary VAT Calculator (27%, 18%, 5% ÁFA) & NAV Guide | FeeKit',
    metaDescription: 'Calculate Hungarian Általános forgalmi adó (ÁFA) with verified NAV rates (27% EU-highest standard, 18% dairy, 5% books). HUF 12M threshold, Online Számla, and reverse charge.',
    h1: 'Hungary VAT Calculator & Nemzeti Adó- és Vámhivatal Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://nav.gov.hu/',
    citation: '2007. évi CXXVII. törvény az általános forgalmi adóról (Áfa tv.) and Online Számla XML Data Reporting.',
    overview: 'Value Added Tax in Hungary—known domestically as Általános forgalmi adó or ÁFA—is governed by the Hungarian VAT Act (2007. évi CXXVII. törvény az áfáról) and administered by the National Tax and Customs Administration (Nemzeti Adó- és Vámhivatal - NAV). Hungary imposes a standard VAT rate of 27%, representing the highest standard VAT rate in the European Union. Hungary applies reduced rates of 18% (dairy products, bakery items, commercial hotel lodging) and 5% (printed and electronic books, pharmaceuticals, medical equipment, district heating, internet access services). Small businesses with annual turnover under HUF 12,000,000 qualify for exemption (alanyi adómentesség). Hungary operates mandatory real-time electronic invoice reporting (Online Számla).',
    sections: [
      {
        id: 'hu-statutory-vat-rates-highest-in-eu',
        title: 'Hungarian ÁFA Architecture: The 27% EU-Highest Standard & Reduced Brackets (18% & 5%)',
        body: `Hungary enforces three statutory tax brackets under Section 82 of the Hungarian VAT Act:

1. **Standard Rate (27%)**: Codified in Section 82 (1). Represents the highest general VAT rate in Europe, applying to the vast majority of commercial goods, electronics, motor vehicles, apparel, alcohol, and professional IT and consulting services.
2. **First Reduced Rate (18%)**: Codified in Section 82 (2). Applies to dairy and milk products, bakery goods, and commercial hotel accommodations.
3. **Second Reduced Rate (5%)**: Codified in Section 82 (3). Applies to fresh meat (poultry, pork, beef), fish, eggs, printed and electronic books, newspapers, medical products, district heating, and residential internet access services.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international passenger transport, and direct exports outside the EU.`
      },
      {
        id: 'hu-small-business-exemption',
        title: 'HUF 12,000,000 Small Business Exemption (Alanyi adómentesség - AAM)',
        body: `Administrative relief under Chapter XIII of the Hungarian VAT Act:

- **Revenue Ceiling**: Small businesses and sole proprietors whose annual domestic turnover does not exceed **HUF 12,000,000** qualify for subjective tax exemption (alanyi adómentesség).
- **Operational Rules**: Exempt small businesses do not add 27% ÁFA to customer invoices and cannot deduct input VAT on equipment.
- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *"Alanyi adómentes"* (Subjectively tax-exempt).`
      },
      {
        id: 'hu-online-szamla-realtime-reporting',
        title: 'Mandatory Real-Time Invoice Reporting (Online Számla System)',
        body: `NAV enforces total transaction transparency under Section 10 of Annex 10 to the VAT Act:

- **Online Számla Mandate**: All invoices issued by Hungarian taxpayers must be transmitted electronically in real time to the NAV Online Számla system via API, with zero minimum threshold.
- **Automated Audit Cross-Matching**: NAV’s automated algorithms cross-check supplier invoice data against buyer VAT deduction claims, eliminating unrecorded business transactions.
- **Electronic XML Delivery**: Invoicing software must be capable of generating valid XML schemas conforming to NAV specifications.`
      },
      {
        id: 'hu-reverse-charge-and-filing',
        title: 'Reverse Charge (Fordított adózás) and Periodic Filing Schedules',
        body: `Compliance requirements administered by NAV:

- **B2B Reverse Charge**: Cross-border services delivered to registered EU business clients are invoiced net without Hungarian ÁFA displaying: *"Fordított adózás (Reverse Charge)"* alongside Hungarian VAT numbers (HU + 8 digits).
- **Filing Schedules (Form 65)**:
  - Monthly: Large enterprises and newly registered VAT payers. Due on the **20th day of the month** following the reporting period.
  - Quarterly: Standard for SMEs with annual net tax liability under HUF 1 million. Due on the **20th day of the month** following the quarter.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Budapest (27% ÁFA)',
      scenario: 'A digital consultancy in Budapest delivers HUF 1,000,000.00 net of custom software engineering services to a domestic corporate client in Debrecen. Standard 27% ÁFA applies.',
      inputs: { netSoftwareService: 'HUF 1,000,000.00', hungarianStandardAfaRate: '27.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: 'HUF 1,000,000.00 consulting', amount: 'HUF 1,000,000.00', note: 'Subject to 27% Hungarian ÁFA' },
        { label: 'Hungarian ÁFA Output (27%)', formula: 'HUF 1,000,000.00 × 27.00%', amount: 'HUF 270,000.00', note: 'Output tax liability to NAV' },
        { label: 'Total Invoiced Customer Checkout', formula: 'HUF 1,000,000.00 + HUF 270,000.00', amount: 'HUF 1,270,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Hungary’s 27% standard VAT rate, the corporate customer pays HUF 1,270,000.00 gross, with HUF 270,000.00 transmitted through Online Számla and remitted on Form 65.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a HUF 12,700.00 Retail Receipt',
      scenario: 'A consumer in Szeged purchases HUF 12,700.00 all-inclusive of retail electronics. What is the net sales revenue and Hungarian ÁFA component?',
      inputs: { totalInclusiveAmount: 'HUF 12,700.00', afaRate: '27.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: 'HUF 12,700.00 ÷ (1 + 0.27)', amount: 'HUF 10,000.00', note: 'Retained business net turnover' },
        { label: 'Hungarian ÁFA Component', formula: 'HUF 12,700.00 - HUF 10,000.00', amount: 'HUF 2,700.00', note: 'Output ÁFA liability' },
        { label: 'Verification Calculation', formula: 'HUF 10,000.00 × 27.00%', amount: 'HUF 2,700.00', note: 'Reconciles exactly to HUF 12,700.00 total' }
      ],
      takeaway: 'From an all-inclusive HUF 12,700.00 retail transaction in Hungary, the merchant retains HUF 10,000.00 net and remits HUF 2,700.00 in ÁFA to NAV.'
    },
    faqs: [
      { question: 'What is the standard VAT (ÁFA) rate in Hungary?', answer: 'The standard VAT rate in Hungary is 27%, which is the highest standard VAT rate in the European Union. Reduced rates of 18% (dairy, bakery, hotel lodging) and 5% (books, medicine, internet) apply to specific goods.', sourceUrl: 'https://nav.gov.hu/' },
      { question: 'What is the Hungarian VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Hungary is HUF 12,000,000 in annual turnover under the subjective tax exemption scheme (alanyi adómentesség).', sourceUrl: 'https://nav.gov.hu/' },
      { question: 'What is the NAV Online Számla system in Hungary?', answer: 'Online Számla is Hungary’s mandatory real-time electronic invoice reporting platform. All commercial invoices issued by Hungarian businesses must be transmitted to NAV via API instantly upon creation.', sourceUrl: 'https://nav.gov.hu/' },
      { question: 'How is a Hungarian VAT number formatted?', answer: 'Hungarian VAT identification numbers (adószám) are formatted with the country prefix HU followed by 8 numerical digits (e.g. HU12345678).', sourceUrl: 'https://nav.gov.hu/' },
      { question: 'When are Hungarian VAT returns due?', answer: 'Periodic VAT returns (Form 65) and tax payments are due on or before the 20th day of the month following the close of the reporting period via the NAV digital portal.', sourceUrl: 'https://nav.gov.hu/' }
    ]
  }
};

