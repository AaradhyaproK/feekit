/**
 * Bespoke content profiles for VAT Countries (Part 2: 10 Countries)
 * Slovakia, Bulgaria, Croatia, Lithuania, Slovenia, Latvia,
 * Estonia, Cyprus, Luxembourg, Malta
 */

export const VAT_PROFILES_PART2 = {
  'slovakia': {
    slug: 'slovakia',
    name: 'Slovakia',
    title: 'Slovakia VAT Calculator (20%, 10%, 5% DPH) & Finančná správa Guide | FeeKit',
    metaDescription: 'Calculate Slovak Daň z pridanej hodnoty (DPH) with verified Finančná správa rates (20% standard, 10% food/pharma, 5% housing). €50k threshold, e-Kasa, and reverse charge.',
    h1: 'Slovakia VAT Calculator & Finančná správa Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.financnasprava.sk/',
    citation: 'Zákon č. 222/2004 Z. z. o dani z pridanej hodnoty (DPH) and e-Kasa Act.',
    overview: 'Value Added Tax in Slovakia—known domestically as Daň z pridanej hodnoty or DPH—is governed by the Slovak VAT Act (Zákon č. 222/2004 Z. z.) and administered by the Financial Administration of the Slovak Republic (Finančná správa SR). Slovakia enforces a standard VAT rate of 20% on general goods and professional services, alongside reduced rates of 10% (staple foodstuffs, pharmaceuticals, medical aids, printed books) and 5% (social housing supplies). The small business registration threshold is €50,000 over 12 consecutive calendar months. All retail transactions must be recorded through online fiscal cash registers (e-Kasa), and periodic tax filings are submitted electronically.',
    sections: [
      {
        id: 'sk-statutory-vat-rates',
        title: 'Slovak DPH Rate Architecture: Standard (20%), Reduced (10% & 5%), and Zero Rate',
        body: `Slovakia enforces three statutory tax brackets under Section 27 of Zákon o DPH:

1. **Standard Rate (20%)**: Applies to general merchandise, consumer electronics, passenger vehicles, apparel, alcohol, restaurant beer, and commercial IT and professional consulting services.
2. **First Reduced Rate (10%)**: Applies to basic food items (fresh meat, milk, butter, fresh bread), pharmaceuticals, prescription eyeglasses, medical equipment, and printed books.
3. **Second Reduced Rate (5%)**: Applies to state-supported social housing construction and materials.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods to registered EU businesses and direct exports outside the EU.`
      },
      {
        id: 'sk-small-business-threshold',
        title: '€50,000 Registration Threshold (Registračná povinnosť)',
        body: `Administrative relief under Section 4 of Zákon o DPH:

- **Revenue Threshold**: A taxable person with business seat or permanent address in Slovakia whose turnover reaches **€50,000** for at most 12 preceding consecutive calendar months must file an application for VAT registration.
- **Registration Deadline**: The application must be filed with the tax authority by the **20th day of the calendar month** following the month in which the turnover threshold was breached.
- **Operational Rules**: Exempt small businesses do not charge 20% DPH and cannot deduct input VAT on equipment.`
      },
      {
        id: 'sk-e-kasa-and-control-statement',
        title: 'Mandatory e-Kasa Online Registers & VAT Control Statement (Kontrolný výkaz)',
        body: `Anti-fraud compliance measures enforced by Finančná správa:

- **e-Kasa System**: All cash and electronic card retail transactions must be transmitted in real time to the central Finančná správa database via certified e-Kasa fiscal cash register hardware.
- **VAT Control Statement (Kontrolný výkaz DPH)**: Mandatory electronic report submitted alongside the VAT return, pairing individual B2B invoice numbers, tax bases, and partner VAT IDs.
- **Filing Deadlines**: VAT returns (Daňové priznanie k DPH) and Control Statements are due on or before the **25th day of the month** following the reporting period via the Finančná správa portal.`
      },
      {
        id: 'sk-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Prenesenie daňovej povinnosti) & Cross-Border B2B',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Slovak DPH displaying: *"Prenesenie daňovej povinnosti (Reverse Charge)"* alongside verified IČ DPH numbers (SK + 10 digits).
- **Domestic Reverse Charge**: Enforced under Section 69 for construction work, metal scrap, and high-value agricultural supplies.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Software Implementation in Bratislava (20% DPH)',
      scenario: 'A digital consultancy in Bratislava delivers €5,000.00 net of custom cloud integration services to a corporate client in Košice. Standard 20% DPH applies.',
      inputs: { netSoftwareService: '€5,000.00', slovakStandardDphRate: '20.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€5,000.00 consulting', amount: '€5,000.00', note: 'Subject to 20% Slovak DPH' },
        { label: 'Slovak DPH Output (20%)', formula: '€5,000.00 × 20.00%', amount: '€1,000.00', note: 'Output tax liability to Finančná správa' },
        { label: 'Total Invoiced Customer Checkout', formula: '€5,000.00 + €1,000.00', amount: '€6,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Slovak VAT, the corporate customer pays €6,000.00 gross, with €1,000.00 in DPH remitted on the vendor’s monthly tax return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €600.00 Retail Receipt',
      scenario: 'A consumer in Žilina purchases €600.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Slovak DPH component?',
      inputs: { totalInclusiveAmount: '€600.00', dphRate: '20.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€600.00 ÷ (1 + 0.20)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Slovak DPH Component', formula: '€600.00 - €500.00', amount: '€100.00', note: 'Output DPH liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 20.00%', amount: '€100.00', note: 'Reconciles exactly to €600.00 total' }
      ],
      takeaway: 'From an all-inclusive €600.00 retail transaction in Slovakia, the merchant retains €500.00 net and remits €100.00 in DPH to the state.'
    },
    faqs: [
      { question: 'What is the standard VAT (DPH) rate in Slovakia?', answer: 'The standard VAT rate in Slovakia is 20%. Reduced rates of 10% (staple foods, medicine, books) and 5% (social housing) apply to specific qualifying supplies.', sourceUrl: 'https://www.financnasprava.sk/' },
      { question: 'What is the Slovak VAT registration threshold for small businesses?', answer: 'The VAT registration threshold in Slovakia is €50,000 in turnover over any 12 consecutive calendar months under Section 4 of Zákon o DPH.', sourceUrl: 'https://www.financnasprava.sk/' },
      { question: 'What is the Slovak e-Kasa system?', answer: 'e-Kasa is Slovakia’s mandatory online fiscal cash register system. All cash and electronic retail transactions must be transmitted in real time to the tax authority database.', sourceUrl: 'https://www.financnasprava.sk/' },
      { question: 'How is a Slovak VAT number formatted?', answer: 'Slovak VAT identification numbers (IČ DPH) are formatted with the country prefix SK followed by 10 numerical digits (e.g. SK1234567890).', sourceUrl: 'https://www.financnasprava.sk/' },
      { question: 'When are Slovak VAT returns due?', answer: 'VAT returns and Control Statements are due on or before the 25th day of the month following the reporting period via the Finančná správa electronic portal.', sourceUrl: 'https://www.financnasprava.sk/' }
    ]
  },

  'bulgaria': {
    slug: 'bulgaria',
    name: 'Bulgaria',
    title: 'Bulgaria VAT Calculator (20% & 9% DDS) & NAP Guide | FeeKit',
    metaDescription: 'Calculate Bulgarian Danak varhu dobavenata stoynost (DDS / ДДС) with verified National Revenue Agency rates (20% standard, 9% hotel lodging). BGN 100k threshold and reverse charge.',
    h1: 'Bulgaria VAT Calculator & National Revenue Agency (NAP) Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://nra.bg/',
    citation: 'Zakon za danak varhu dobavenata stoynost (ZDDS) and National Revenue Agency Regulations.',
    overview: 'Value Added Tax in Bulgaria—known domestically as Danak varhu dobavenata stoynost (DDS or ДДС)—is governed by the Bulgarian Value Added Tax Act (ZDDS) and administered by the National Revenue Agency (Natsionalna agentsiya za prihodite - NAP). Bulgaria imposes a standard VAT rate of 20% on general goods, electronics, vehicles, and commercial services, alongside a single statutory reduced rate of 9% restricted primarily to hotel and holiday tourist accommodations. Small businesses with annual taxable turnover under BGN 100,000 qualify for exemption from mandatory VAT registration. VAT declarations are submitted monthly via NAP’s digital portal.',
    sections: [
      {
        id: 'bg-statutory-vat-rates',
        title: 'Bulgarian DDS Architecture: Standard (20%), Reduced (9%), and Zero Rate',
        body: `Bulgaria enforces two statutory rate tiers under the Value Added Tax Act (ZDDS):

1. **Standard Rate (20%)**: Codified in Article 66, Paragraph 1 of ZDDS. Applies to general consumer merchandise, electronics, motor vehicles, apparel, restaurant dining, food, and commercial IT and professional consulting services.
2. **Reduced Rate (9%)**: Codified in Article 66, Paragraph 2 of ZDDS. Applies strictly to hotel accommodations, holiday village rentals, and camping facilities.
3. **Zero-Rated Supplies (0%)**: Intra-Community supplies of goods (WOD) to registered EU businesses, international transport, and direct export deliveries outside the EU.`
      },
      {
        id: 'bg-small-business-threshold',
        title: 'BGN 100,000 Mandatory Registration Threshold (Prag za registratsiya)',
        body: `Administrative relief under Article 96 of ZDDS:

- **Turnover Threshold**: Any taxable person established in Bulgaria whose taxable turnover reaches **BGN 100,000** in a period not longer than 12 consecutive months must register for VAT.
- **Registration Application Window**: The application must be filed with the territorial directorate of NAP within 7 days from the end of the month in which the threshold was reached.
- **Operational Rules**: Exempt small businesses do not charge 20% DDS on customer invoices and cannot claim input VAT refunds on business expenses.`
      },
      {
        id: 'bg-monthly-filing-and-nap-deadlines',
        title: 'Monthly Electronic Submissions & NAP Filing Deadlines',
        body: `Reporting requirements administered by the National Revenue Agency (NAP):

- **Strict Monthly Filing Schedule**: In Bulgaria, all registered VAT payers must file monthly returns, regardless of business size or turnover volume. Quarterly filing is not permitted.
- **Filing Deadlines**: VAT declarations (Spravka-deklaratsiya), sales ledgers (Dnevnik za prodazhbite), and purchase ledgers (Dnevnik za pokupkite) must be submitted by the **14th day of the month** following the reporting period via NAP's electronic services.
- **Mandatory Digital Signature**: Submissions require a qualified electronic signature (QES).`
      },
      {
        id: 'bg-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Obratno oblagane) & Cross-Border B2B Supplies',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Bulgarian DDS displaying: *"Obratno oblagane (Reverse Charge)"* alongside verified Bulgarian VAT numbers (BG + 9 or 10 digits).
- **Domestic Reverse Charge**: Enforced under Article 163a of ZDDS for grain, industrial crops, and metal scrap.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise IT Infrastructure in Sofia (20% DDS)',
      scenario: 'A technology engineering firm in Sofia delivers BGN 10,000.00 net of custom cloud architecture services to a corporate client in Plovdiv. Standard 20% DDS applies.',
      inputs: { netSoftwareService: 'BGN 10,000.00', bulgarianStandardDdsRate: '20.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: 'BGN 10,000.00 consulting', amount: 'BGN 10,000.00', note: 'Subject to 20% Bulgarian DDS' },
        { label: 'Bulgarian DDS Output (20%)', formula: 'BGN 10,000.00 × 20.00%', amount: 'BGN 2,000.00', note: 'Output tax liability to NAP' },
        { label: 'Total Invoiced Customer Checkout', formula: 'BGN 10,000.00 + BGN 2,000.00', amount: 'BGN 12,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Bulgarian VAT, the corporate customer pays BGN 12,000.00 gross, with BGN 2,000.00 remitted on the vendor’s monthly NAP declaration.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a BGN 1,200.00 Retail Receipt',
      scenario: 'A consumer in Varna purchases BGN 1,200.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Bulgarian DDS component?',
      inputs: { totalInclusiveAmount: 'BGN 1,200.00', ddsRate: '20.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: 'BGN 1,200.00 ÷ (1 + 0.20)', amount: 'BGN 1,000.00', note: 'Retained business net turnover' },
        { label: 'Bulgarian DDS Component', formula: 'BGN 1,200.00 - BGN 1,000.00', amount: 'BGN 200.00', note: 'Output DDS liability' },
        { label: 'Verification Calculation', formula: 'BGN 1,000.00 × 20.00%', amount: 'BGN 200.00', note: 'Reconciles exactly to BGN 1,200.00 total' }
      ],
      takeaway: 'From an all-inclusive BGN 1,200.00 retail transaction in Bulgaria, the merchant retains BGN 1,000.00 net and remits BGN 200.00 in DDS to NAP.'
    },
    faqs: [
      { question: 'What is the standard VAT (DDS) rate in Bulgaria?', answer: 'The standard VAT rate in Bulgaria is 20%. A single reduced rate of 9% applies strictly to hotel lodging and tourist holiday accommodations.', sourceUrl: 'https://nra.bg/' },
      { question: 'What is the Bulgarian VAT registration threshold for small businesses?', answer: 'The mandatory VAT registration threshold in Bulgaria is BGN 100,000 in taxable turnover within 12 consecutive months under Article 96 of ZDDS.', sourceUrl: 'https://nra.bg/' },
      { question: 'How frequently are Bulgarian VAT returns filed?', answer: 'In Bulgaria, all VAT-registered entities must file monthly VAT returns and sales/purchase ledgers by the 14th day of the following month. Quarterly filing is not permitted.', sourceUrl: 'https://nra.bg/' },
      { question: 'How is a Bulgarian VAT number formatted?', answer: 'Bulgarian VAT identification numbers (EIK/BULSTAT) are formatted with the country prefix BG followed by 9 or 10 numerical digits (e.g. BG123456789).', sourceUrl: 'https://nra.bg/' },
      { question: 'How is cross-border B2B software taxed in Bulgaria?', answer: 'B2B digital services provided to EU corporate clients are zero-rated under the reverse charge mechanism (Obratno oblagane), with tax self-assessed by the recipient.', sourceUrl: 'https://nra.bg/' }
    ]
  },

  'croatia': {
    slug: 'croatia',
    name: 'Croatia',
    title: 'Croatia VAT Calculator (25%, 13%, 5% PDV) & Porezna uprava Guide | FeeKit',
    metaDescription: 'Calculate Croatian Porez na dodanu vrijednost (PDV) with verified rates (25% standard, 13% dining/hotel, 5% bread/milk). €40k threshold, Fiskalizacija, and reverse charge.',
    h1: 'Croatia VAT Calculator & Porezna uprava Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.porezna-uprava.hr/',
    citation: 'Zakon o porezu na dodanu vrijednost (NN br. 73/13 do 114/23) and Zakon o fiskalizaciji.',
    overview: 'Value Added Tax in Croatia—known domestically as Porez na dodanu vrijednost or PDV—is governed by the Croatian VAT Act (Zakon o PDV-u) and administered by the Tax Administration (Porezna uprava). Following full adoption of the Euro (€) on January 1, 2023, Croatia enforces a standard VAT rate of 25%, alongside reduced rates of 13% (prepared restaurant food, hotel accommodations, electricity, water utility) and 5% (staple bread, milk, pharmaceuticals, books). Small businesses with annual turnover under €40,000 qualify for exemption. Croatia enforces mandatory real-time electronic cash register fiscalization (Fiskalizacija).',
    sections: [
      {
        id: 'hr-statutory-vat-rates',
        title: 'Croatian PDV Architecture: Standard (25%), Reduced (13% & 5%), and Zero Rate',
        body: `Croatia enforces three statutory rate brackets under Article 38 of Zakon o PDV-u:

1. **Standard Rate (25%)**: Applies to general merchandise, consumer electronics, passenger vehicles, apparel, alcohol, and commercial IT and professional consulting services.
2. **First Reduced Rate (13%)**: Applies to restaurant dining, hotel and tourist accommodation, residential electricity, public water utility, garbage collection, and menstrual hygiene products.
3. **Second Reduced Rate (5%)**: Applies to staple bread and milk, baby formula, prescription pharmaceuticals, medical implants, printed books, e-books, and daily newspapers.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B deliveries of goods and direct exports outside the European Union.`
      },
      {
        id: 'hr-small-business-threshold',
        title: '€40,000 Small Business Exemption (Mali porezni obveznik)',
        body: `Administrative relief under Article 90 of Zakon o PDV-u:

- **Revenue Threshold**: Businesses and self-employed professionals whose annual turnover does not exceed **€40,000** in the preceding or current calendar year are exempt from registering for PDV.
- **Operational Rules**: Exempt small taxpayers (mali porezni obveznici) do not charge 25% PDV on customer invoices and cannot deduct input VAT on equipment.
- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *"Oslobođeno plaćanja PDV-a temeljem članka 90. stavka 2. Zakona o PDV-u"* (Exempt from PDV under Article 90).`
      },
      {
        id: 'hr-fiskalizacija-and-eporezna',
        title: 'Mandatory Real-Time Fiscalization (Fiskalizacija) & ePorezna Submissions',
        body: `Anti-fraud reporting procedures administered by Porezna uprava:

- **Fiskalizacija Mandate**: All retail point-of-sale cash and card transactions must be certified by Porezna uprava in real time via an encrypted web service, returning a unique JIR code (Jedinstveni identifikator računa) and ZKI security code printed on every customer receipt.
- **Filing Deadlines (Obrazac PDV)**: VAT returns and tax payments are due on or before the **20th day of the month** following the reporting period via the **ePorezna** portal.
- **Filing Frequency**:
  - Quarterly: SMEs with previous year turnover under €110,000.
  - Monthly: Mandatory for businesses exceeding €110,000 annual turnover.`
      },
      {
        id: 'hr-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Prijenos porezne obveze) & Cross-Border B2B',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Croatian PDV displaying: *"Prijenos porezne obveze (Reverse Charge)"* alongside verified OIB numbers (HR + 11 digits).
- **Domestic Reverse Charge**: Enforced under Article 75 for commercial construction services and scrap metal trade.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Zagreb (25% PDV)',
      scenario: 'A digital consultancy in Zagreb delivers €8,000.00 net of custom cloud integration services to a corporate client in Split. Standard 25% PDV applies.',
      inputs: { netSoftwareService: '€8,000.00', croatianStandardPdvRate: '25.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€8,000.00 consulting', amount: '€8,000.00', note: 'Subject to 25% Croatian PDV' },
        { label: 'Croatian PDV Output (25%)', formula: '€8,000.00 × 25.00%', amount: '€2,000.00', note: 'Output tax liability to Porezna uprava' },
        { label: 'Total Invoiced Customer Checkout', formula: '€8,000.00 + €2,000.00', amount: '€10,000.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Croatian VAT, the corporate customer pays €10,000.00 gross, with €2,000.00 remitted on the vendor’s periodic ePorezna VAT return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €1,250.00 Retail Receipt',
      scenario: 'A consumer in Rijeka purchases €1,250.00 all-inclusive of retail electronics. What is the net sales revenue and Croatian PDV component?',
      inputs: { totalInclusiveAmount: '€1,250.00', pdvRate: '25.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€1,250.00 ÷ (1 + 0.25)', amount: '€1,000.00', note: 'Retained business net turnover' },
        { label: 'Croatian PDV Component', formula: '€1,250.00 - €1,000.00', amount: '€250.00', note: 'Output PDV liability' },
        { label: 'Verification Calculation', formula: '€1,000.00 × 25.00%', amount: '€250.00', note: 'Reconciles exactly to €1,250.00 total' }
      ],
      takeaway: 'From an all-inclusive €1,250.00 retail transaction in Croatia, the merchant retains €1,000.00 net and remits €250.00 in PDV to the tax office.'
    },
    faqs: [
      { question: 'What is the standard VAT (PDV) rate in Croatia?', answer: 'The standard VAT rate in Croatia is 25%. Reduced rates of 13% (restaurant dining, hotel lodging, utilities) and 5% (bread, milk, medicine, books) apply to specific qualifying supplies.', sourceUrl: 'https://www.porezna-uprava.hr/' },
      { question: 'What is the Croatian VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Croatia is €40,000 in annual turnover under Article 90 of Zakon o PDV-u.', sourceUrl: 'https://www.porezna-uprava.hr/' },
      { question: 'What is Fiskalizacija in Croatia?', answer: 'Fiskalizacija is Croatia’s mandatory real-time electronic cash register system. Invoices are authenticated via web service with Porezna uprava, returning a unique JIR code printed on the receipt.', sourceUrl: 'https://www.porezna-uprava.hr/' },
      { question: 'How is a Croatian VAT number formatted?', answer: 'Croatian VAT numbers are formatted with the country prefix HR followed by the 11-digit Personal Identification Number (OIB) (e.g. HR12345678901).', sourceUrl: 'https://www.porezna-uprava.hr/' },
      { question: 'When are Croatian VAT returns due?', answer: 'Periodic VAT returns (Obrazac PDV) and tax payments are due on or before the 20th day of the month following the close of the reporting period via the ePorezna digital portal.', sourceUrl: 'https://www.porezna-uprava.hr/' }
    ]
  },

  'lithuania': {
    slug: 'lithuania',
    name: 'Lithuania',
    title: 'Lithuania VAT Calculator (21%, 9%, 5% PVM) & VMI Guide | FeeKit',
    metaDescription: 'Calculate Lithuanian Pridėtinės vertės mokestis (PVM) with verified VMI rates (21% standard, 9% heating/books, 5% pharma). €45k threshold, i.MAS, and reverse charge.',
    h1: 'Lithuania VAT Calculator & Valstybinė mokesčių inspekcija Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.vmi.lt/',
    citation: 'Lietuvos Respublikos pridėtinės vertės mokesčio įstatymas (PVMĮ) and i.MAS subsystem rules.',
    overview: 'Value Added Tax in Lithuania—known domestically as Pridėtinės vertės mokestis or PVM—is governed by the Lithuanian Law on Value Added Tax (PVM įstatymas) and administered by the State Tax Inspectorate (Valstybinė mokesčių inspekcija - VMI). Lithuania applies a standard VAT rate of 21% on commercial goods and services, alongside reduced rates of 9% (centralized heating, printed and electronic books, passenger transport, hotel accommodation) and 5% (pharmaceuticals and specialized medical equipment). Small businesses with annual turnover under €45,000 qualify for exemption. Taxpayers must submit monthly invoice registers to the national smart tax administration system (i.MAS).',
    sections: [
      {
        id: 'lt-statutory-vat-rates',
        title: 'Lithuanian PVM Architecture: Standard (21%), Reduced (9% & 5%), and Zero Rate',
        body: `Lithuania enforces three statutory rate brackets under Article 19 of PVMĮ:

1. **Standard Rate (21%)**: Governed by Art. 19 d. 1. Applies to general merchandise, electronics, passenger motor vehicles, apparel, alcohol, restaurant food, and commercial IT and professional consulting services.
2. **First Reduced Rate (9%)**: Governed by Art. 19 d. 3. Applies to centralized heating energy and hot water, books and non-promotional periodicals, public passenger transport, and hotel tourism accommodations.
3. **Second Reduced Rate (5%)**: Governed by Art. 19 d. 4. Applies to prescription pharmaceuticals, medical aids, and specialized technical assistance devices for disabled individuals.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international passenger transport, and direct export deliveries outside the EU.`
      },
      {
        id: 'lt-small-business-threshold',
        title: '€45,000 Registration Threshold (PVM registravimo riba)',
        body: `Administrative relief under Article 71 of PVMĮ:

- **Revenue Threshold**: Any taxable person established in Lithuania whose aggregate taxable turnover from goods and services in the preceding 12 months reaches **€45,000** must register for PVM.
- **Affiliated Entity Rules**: Turnover of legally related or affiliated persons is aggregated when evaluating the €45,000 ceiling to prevent artificial company splitting.
- **Operational Rules**: Exempt small businesses do not charge 21% PVM and cannot deduct input VAT on equipment.`
      },
      {
        id: 'lt-imas-and-monthly-filing',
        title: 'Mandatory i.MAS Smart Tax Administration & FR0600 Submissions',
        body: `VMI enforces real-time digital auditing through the i.MAS system:

- **i.SAF Register Submissions**: All registered PVM payers must submit structured XML data files of issued and received tax invoices to the i.SAF subsystem of i.MAS by the **20th day of the following month**.
- **Filing Deadlines (Form FR0600)**: Periodic VAT returns and payments are due on or before the **25th day of the month** following the reporting period via the **Mano VMI** portal.
- **Filing Frequency**: Standard monthly filing for legal entities; semi-annual filing can be granted to individual natural persons with turnover under €60,000.`
      },
      {
        id: 'lt-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Atvirkštinis apmokestinimas) & Cross-Border B2B',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Lithuanian PVM displaying: *"Atvirkštinis apmokestinimas (Reverse Charge)"* alongside verified PVM numbers (LT + 9 or 12 digits).
- **Domestic Reverse Charge**: Enforced under Article 96 of PVMĮ for construction work, ferrous and non-ferrous metal scrap, and high-value wholesale mobile devices.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Vilnius (21% PVM)',
      scenario: 'A digital consultancy in Vilnius delivers €6,000.00 net of custom software engineering services to a corporate client in Kaunas. Standard 21% PVM applies.',
      inputs: { netSoftwareService: '€6,000.00', lithuanianStandardPvmRate: '21.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€6,000.00 consulting', amount: '€6,000.00', note: 'Subject to 21% Lithuanian PVM' },
        { label: 'Lithuanian PVM Output (21%)', formula: '€6,000.00 × 21.00%', amount: '€1,260.00', note: 'Output tax liability to VMI' },
        { label: 'Total Invoiced Customer Checkout', formula: '€6,000.00 + €1,260.00', amount: '€7,260.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Lithuanian VAT, the corporate customer pays €7,260.00 gross, with €1,260.00 in PVM reported on i.SAF and remitted on Form FR0600.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €1,210.00 Retail Receipt',
      scenario: 'A consumer in Klaipėda purchases €1,210.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Lithuanian PVM component?',
      inputs: { totalInclusiveAmount: '€1,210.00', pvmRate: '21.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€1,210.00 ÷ (1 + 0.21)', amount: '€1,000.00', note: 'Retained business net turnover' },
        { label: 'Lithuanian PVM Component', formula: '€1,210.00 - €1,000.00', amount: '€210.00', note: 'Output PVM liability' },
        { label: 'Verification Calculation', formula: '€1,000.00 × 21.00%', amount: '€210.00', note: 'Reconciles exactly to €1,210.00 total' }
      ],
      takeaway: 'From an all-inclusive €1,210.00 retail transaction in Lithuania, the merchant retains €1,000.00 net and remits €210.00 in PVM to VMI.'
    },
    faqs: [
      { question: 'What is the standard VAT (PVM) rate in Lithuania?', answer: 'The standard VAT rate in Lithuania is 21%. Reduced rates of 9% (centralized heating, books, hotel lodging, passenger transport) and 5% (pharmaceuticals, medical aids) apply to qualifying supplies.', sourceUrl: 'https://www.vmi.lt/' },
      { question: 'What is the Lithuanian VAT registration threshold for small businesses?', answer: 'The mandatory VAT registration threshold in Lithuania is €45,000 in taxable turnover within the preceding 12 months under Article 71 of PVMĮ.', sourceUrl: 'https://www.vmi.lt/' },
      { question: 'What is the i.MAS system in Lithuania?', answer: 'i.MAS is Lithuania’s smart tax administration portal. All VAT-registered businesses must submit electronic invoice register data (i.SAF) to VMI by the 20th day of each month.', sourceUrl: 'https://www.vmi.lt/' },
      { question: 'How is a Lithuanian VAT number formatted?', answer: 'Lithuanian VAT identification numbers (PVM mokėtojo kodas) are formatted with the country prefix LT followed by 9 numerical digits for legal entities or 12 digits for individuals (e.g. LT123456789).', sourceUrl: 'https://www.vmi.lt/' },
      { question: 'When are Lithuanian VAT returns due?', answer: 'Periodic VAT returns (Form FR0600) and tax payments are due on or before the 25th day of the month following the reporting period via the Mano VMI digital portal.', sourceUrl: 'https://www.vmi.lt/' }
    ]
  },

  'slovenia': {
    slug: 'slovenia',
    name: 'Slovenia',
    title: 'Slovenia VAT Calculator (22%, 9.5%, 5% DDV) & FURS Guide | FeeKit',
    metaDescription: 'Calculate Slovenian Davek na dodano vrednost (DDV) with verified FURS rates (22% standard, 9.5% food, 5% books). €50k threshold, eDavki filing, and reverse charge.',
    h1: 'Slovenia VAT Calculator & Finančna uprava Republike Slovenije Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://edavki.durs.si/',
    citation: 'Zakon o davku na dodano vrednost (ZDDV-1) and Pravilnik o izvajanju ZDDV-1.',
    overview: 'Value Added Tax in Slovenia—known domestically as Davek na dodano vrednost or DDV—is governed by the Slovenian VAT Act (Zakon o davku na dodano vrednost - ZDDV-1) and administered by the Financial Administration of the Republic of Slovenia (Finančna uprava Republike Slovenije - FURS). Slovenia applies a standard VAT rate of 22% across commercial commerce, alongside reduced rates of 9.5% (food, restaurant meals, hotel lodging, passenger transport) and a special 5% super-reduced rate (printed and electronic books, newspapers). Small businesses with annual turnover under €50,000 qualify for exemption. Periodic tax declarations are submitted via FURS’s electronic portal (eDavki).',
    sections: [
      {
        id: 'si-statutory-vat-rates',
        title: 'Slovenian DDV Architecture: Standard (22%), Reduced (9.5% & 5%), and Zero Rate',
        body: `Slovenia enforces three statutory rate brackets under Article 41 of ZDDV-1:

1. **Standard Rate (22%)**: Codified in Article 41, Paragraph 1. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, and commercial IT and professional consulting services.
2. **First Reduced Rate (9.5%)**: Codified in Article 41, Paragraph 2. Applies to staple foodstuffs for human consumption, water supply, pharmaceuticals, medical equipment, passenger transport, hotel accommodations, and restaurant food services.
3. **Special Super-Reduced Rate (5%)**: Codified in Article 41, Paragraph 3. Applies to physical and electronic books, newspapers, and non-advertising periodicals.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B deliveries of goods and direct exports outside the European Union.`
      },
      {
        id: 'si-small-business-threshold',
        title: '€50,000 Small Business Exemption (Oprostitev za male davčne zavezance)',
        body: `Administrative relief under Article 94 of ZDDV-1:

- **Revenue Threshold**: A taxable person established in Slovenia whose taxable turnover does not exceed **€50,000** in the preceding 12 months qualifies for exemption from DDV.
- **Operational Rules**: Exempt small taxpayers do not charge 22% DDV on customer invoices and cannot deduct input VAT on business purchases.
- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *"DDV ni obračunan na podlagi 1. odstavka 94. člena Zakona o davku na dodano vrednost"* (DDV is not charged pursuant to Article 94(1) of ZDDV-1).`
      },
      {
        id: 'si-edavki-and-fiscal-cash-registers',
        title: 'Fiscal Cash Registers (Davčne blagajne) & eDavki Filing Deadlines',
        body: `Compliance requirements administered by FURS:

- **Davčne blagajne (Fiscal Cash Registers)**: Mandatory real-time electronic authorization with FURS for all point-of-sale cash and card transactions, printing a unique EOR security code and QR verification code on customer receipts.
- **Filing Deadlines (Obrazec DDV-O)**: VAT returns and payments are due on or before the **last business day of the month** following the reporting period via **eDavki** (or the 20th day if conducting EU transactions).
- **Filing Frequency**:
  - Monthly: Standard for entities with previous year turnover exceeding €210,000 or new businesses.
  - Quarterly: Small businesses with turnover below €210,000 without cross-border EU trade.`
      },
      {
        id: 'si-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Obrnjena davčna obveznost) & Cross-Border B2B',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Slovenian DDV displaying: *"Obrnjena davčna obveznost (Reverse Charge)"* alongside verified Slovenian VAT numbers (SI + 8 digits).
- **Domestic Reverse Charge**: Enforced under Article 76a of ZDDV-1 for construction services, scrap metal, and greenhouse gas emission allowances.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Ljubljana (22% DDV)',
      scenario: 'A digital consultancy in Ljubljana delivers €5,000.00 net of custom cloud integration services to a corporate client in Maribor. Standard 22% DDV applies.',
      inputs: { netSoftwareService: '€5,000.00', slovenianStandardDdvRate: '22.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€5,000.00 consulting', amount: '€5,000.00', note: 'Subject to 22% Slovenian DDV' },
        { label: 'Slovenian DDV Output (22%)', formula: '€5,000.00 × 22.00%', amount: '€1,100.00', note: 'Output tax liability to FURS' },
        { label: 'Total Invoiced Customer Checkout', formula: '€5,000.00 + €1,100.00', amount: '€6,100.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Slovenian VAT, the corporate customer pays €6,100.00 gross, with €1,100.00 in DDV remitted on the vendor’s periodic eDavki return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €610.00 Retail Receipt',
      scenario: 'A consumer in Celje purchases €610.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Slovenian DDV component?',
      inputs: { totalInclusiveAmount: '€610.00', ddvRate: '22.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€610.00 ÷ (1 + 0.22)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Slovenian DDV Component', formula: '€610.00 - €500.00', amount: '€110.00', note: 'Output DDV liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 22.00%', amount: '€110.00', note: 'Reconciles exactly to €610.00 total' }
      ],
      takeaway: 'From an all-inclusive €610.00 retail transaction in Slovenia, the merchant retains €500.00 net and remits €110.00 in DDV to FURS.'
    },
    faqs: [
      { question: 'What is the standard VAT (DDV) rate in Slovenia?', answer: 'The standard VAT rate in Slovenia is 22%. Reduced rates of 9.5% (food, restaurant meals, hotel lodging, passenger transport) and 5% (books, newspapers) apply to specific qualifying supplies.', sourceUrl: 'https://edavki.durs.si/' },
      { question: 'What is the Slovenian VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Slovenia is €50,000 in annual turnover over the preceding 12 months under Article 94 of ZDDV-1.', sourceUrl: 'https://edavki.durs.si/' },
      { question: 'What are Davčne blagajne in Slovenia?', answer: 'Davčne blagajne are mandatory online fiscal cash registers that communicate in real time with FURS for every cash or card transaction, returning an encrypted EOR authorization code.', sourceUrl: 'https://edavki.durs.si/' },
      { question: 'How is a Slovenian VAT number formatted?', answer: 'Slovenian VAT identification numbers (davčna številka) are formatted with the country prefix SI followed by 8 numerical digits (e.g. SI12345678).', sourceUrl: 'https://edavki.durs.si/' },
      { question: 'When are Slovenian VAT returns due?', answer: 'VAT returns (Obrazac DDV-O) are submitted via eDavki on the last business day of the month following the reporting period (or the 20th day if conducting EU cross-border trade).', sourceUrl: 'https://edavki.durs.si/' }
    ]
  },

  'latvia': {
    slug: 'latvia',
    name: 'Latvia',
    title: 'Latvia VAT Calculator (21%, 12%, 5% PVN) & VID Guide | FeeKit',
    metaDescription: 'Calculate Latvian Pievienotās vērtības nodoklis (PVN) with verified VID rates (21% standard, 12% medicine/heating, 5% fresh produce). €50k threshold, EDS, and reverse charge.',
    h1: 'Latvia VAT Calculator & Valsts ieņēmumu dienests Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.vid.gov.lv/',
    citation: 'Pievienotās vērtības nodokļa likums (PVN likums) and Electronic Declaration System (EDS) regulations.',
    overview: 'Value Added Tax in Latvia—known domestically as Pievienotās vērtības nodoklis or PVN—is governed by the Latvian Value Added Tax Law (Pievienotās vērtības nodokļa likums) and administered by the State Revenue Service (Valsts ieņēmumu dienests - VID). Latvia applies a standard VAT rate of 21% on commercial goods and services, alongside reduced rates of 12% (pharmaceuticals, medical devices, baby food, domestic passenger transport, hotel accommodations, district heating) and a specialized 5% reduced rate for fresh fruits, berries, and vegetables typical of Latvia. Small businesses with annual turnover under €50,000 qualify for exemption. Tax declarations are submitted electronically through VID’s Electronic Declaration System (EDS).',
    sections: [
      {
        id: 'lv-statutory-vat-rates',
        title: 'Latvian PVN Architecture: Standard (21%), Reduced (12% & 5%), and Zero Rate',
        body: `Latvia enforces three statutory rate brackets under Sections 41 and 42 of the PVN Law:

1. **Standard Rate (21%)**: Governed by Section 41, Paragraph 1. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant food, and commercial IT and professional consulting services.
2. **First Reduced Rate (12%)**: Governed by Section 42. Applies to prescription and non-prescription medicines, medical devices, infant food, domestic passenger transport, books, newspapers, hotel accommodations, and residential thermal energy.
3. **Second Reduced Rate (5%)**: Governed by Section 42, Paragraph 16. Applies to fresh fruits, berries, and vegetables characteristic of the local agricultural sector.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international transport, and direct export deliveries outside the EU.`
      },
      {
        id: 'lv-small-business-threshold',
        title: '€50,000 Small Business Exemption (Reģistrācijas slieksnis)',
        body: `Administrative relief under Section 59 of the PVN Law:

- **Turnover Threshold**: A taxable person established in Latvia whose aggregate taxable turnover of goods and services did not exceed **€50,000** during the preceding 12 months is not required to register as a VAT payer.
- **Mandatory Registration Window**: Once the €50,000 limit is reached, an application for VAT registration must be submitted to VID not later than the **15th day of the month** following the month of breach.
- **Operational Rules**: Exempt small businesses do not charge 21% PVN and cannot deduct input VAT on equipment.`
      },
      {
        id: 'lv-eds-and-filing-deadlines',
        title: 'Electronic Declaration System (EDS) Submissions & Deadlines',
        body: `Compliance requirements administered by the State Revenue Service (VID):

- **Mandatory Digital Submissions**: All VAT returns (PVN 1 declaration) and annexes must be transmitted via **VID EDS (Elektroniskās deklarēšanas sistēma)**.
- **Filing Deadlines**: Monthly returns and tax payments are due on or before the **20th day of the month** following the reporting period.
- **Filing Frequency**:
  - Monthly: Mandatory for businesses exceeding €50,000 turnover or carrying out cross-border EU trade.
  - Quarterly: Taxable persons with annual turnover under €50,000 who do not conduct intra-Community transactions.`
      },
      {
        id: 'lv-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Reversais PVN) & Cross-Border B2B Supplies',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Latvian PVN displaying: *"Apgrieztā PVN maksāšana (Reverse Charge)"* alongside verified Latvian VAT numbers (LV + 11 digits).
- **Domestic Reverse Charge**: Enforced under Sections 141–143 of the PVN Law for timber, scrap metal, mobile electronics, and commercial construction services.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Riga (21% PVN)',
      scenario: 'A digital consultancy in Riga delivers €5,000.00 net of custom cloud integration services to a corporate client in Daugavpils. Standard 21% PVN applies.',
      inputs: { netSoftwareService: '€5,000.00', latvianStandardPvnRate: '21.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€5,000.00 consulting', amount: '€5,000.00', note: 'Subject to 21% Latvian PVN' },
        { label: 'Latvian PVN Output (21%)', formula: '€5,000.00 × 21.00%', amount: '€1,050.00', note: 'Output tax liability to VID' },
        { label: 'Total Invoiced Customer Checkout', formula: '€5,000.00 + €1,050.00', amount: '€6,050.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Latvian VAT, the corporate customer pays €6,050.00 gross, with €1,050.00 in PVN remitted on the vendor’s monthly VID EDS return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €605.00 Retail Receipt',
      scenario: 'A consumer in Liepāja purchases €605.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Latvian PVN component?',
      inputs: { totalInclusiveAmount: '€605.00', pvnRate: '21.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€605.00 ÷ (1 + 0.21)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Latvian PVN Component', formula: '€605.00 - €500.00', amount: '€105.00', note: 'Output PVN liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 21.00%', amount: '€105.00', note: 'Reconciles exactly to €605.00 total' }
      ],
      takeaway: 'From an all-inclusive €605.00 retail transaction in Latvia, the merchant retains €500.00 net and remits €105.00 in PVN to VID.'
    },
    faqs: [
      { question: 'What is the standard VAT (PVN) rate in Latvia?', answer: 'The standard VAT rate in Latvia is 21%. Reduced rates of 12% (medicine, medical devices, heating, domestic transit, books, hotels) and 5% (local fresh produce) apply to specific qualifying goods.', sourceUrl: 'https://www.vid.gov.lv/' },
      { question: 'What is the Latvian VAT registration threshold for small businesses?', answer: 'The small business VAT registration threshold in Latvia is €50,000 in annual turnover over the preceding 12 months under Section 59 of the PVN Law.', sourceUrl: 'https://www.vid.gov.lv/' },
      { question: 'What is VID EDS in Latvia?', answer: 'VID EDS (Elektroniskās deklarēšanas sistēma) is Latvia’s mandatory electronic tax declaration portal. All VAT returns, annexes, and tax payments must be submitted through EDS.', sourceUrl: 'https://www.vid.gov.lv/' },
      { question: 'How is a Latvian VAT number formatted?', answer: 'Latvian VAT identification numbers are formatted with the country prefix LV followed by 11 numerical digits (e.g. LV12345678901).', sourceUrl: 'https://www.vid.gov.lv/' },
      { question: 'When are Latvian VAT returns due?', answer: 'Monthly VAT returns and tax payments are due on or before the 20th day of the month following the close of the reporting period via the VID EDS portal.', sourceUrl: 'https://www.vid.gov.lv/' }
    ]
  },

  'estonia': {
    slug: 'estonia',
    name: 'Estonia',
    title: 'Estonia VAT Calculator (22%, 9%, 5% KM) & e-MTA Guide | FeeKit',
    metaDescription: 'Calculate Estonian Käibemaks (KM) with verified Maksu- ja Tolliamet rates (22% standard enacted 2024, 9% accommodation, 5% press). €40k threshold and e-Residency filing.',
    h1: 'Estonia VAT Calculator & Maksu- ja Tolliamet Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks',
    citation: 'Käibemaksuseadus (KMS) and 2024 VAT Amendment Act (RT I, 01.07.2023, 2).',
    overview: 'Value Added Tax in Estonia—known domestically as Käibemaks or KM—is governed by the Estonian Value Added Tax Act (Käibemaksuseadus - KMS) and administered by the Estonian Tax and Customs Board (Maksu- ja Tolliamet - MTA). Under statutory tax reforms effective January 1, 2024, Estonia increased its standard VAT rate from 20% to 22%. Estonia applies reduced rates of 9% (hotel and tourist accommodation, printed and electronic books, pharmaceuticals) and 5% (press publications). The small business threshold is €40,000 annually. As the world pioneer in digital government and e-Residency, 100% of Estonian VAT declarations are submitted electronically via e-MTA.',
    sections: [
      {
        id: 'ee-statutory-vat-rates-2024',
        title: 'Estonian Käibemaks Rates: The 2024 Standard Increase to 22% & Reduced Brackets',
        body: `Estonia enforces three statutory rate brackets under Section 15 of Käibemaksuseadus:

1. **Standard Rate (22%)**: Effective **January 1, 2024**, increasing the general rate from 20% to **22%** under the 2023 Amendment Act. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant meals, and commercial IT and professional consulting services.
2. **First Reduced Rate (9%)**: Governed by Section 15, Subsection 2. Applies to accommodation services, books and learning materials (both physical and electronic), pharmaceuticals, and medical devices. Note: Accommodation rate rises to 13% effective 2025 under enacted reforms.
3. **Second Reduced Rate (5%)**: Governed by Section 15, Subsection 2^1. Applies to physical and digital press publications (periodicals, newspapers, magazines), excluding publications consisting predominantly of advertising or pornography.
4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international transport, and direct export deliveries outside the EU.`
      },
      {
        id: 'ee-small-business-threshold',
        title: '€40,000 Registration Threshold (Käibemaksukohustuslaseks registreerimine)',
        body: `Administrative relief under Section 19 of Käibemaksuseadus:

- **Turnover Threshold**: A business or sole proprietor (FIE) whose taxable turnover exceeds **€40,000** from the beginning of a calendar year must register as a VAT payer.
- **Mandatory Filing Deadline**: The application for registration must be submitted to Maksu- ja Tolliamet within 3 working days from the date on which the threshold was exceeded.
- **Operational Rules**: Exempt small businesses do not charge 22% KM and cannot deduct input VAT on equipment.`
      },
      {
        id: 'ee-emta-and-digital-filing',
        title: '100% Digital e-MTA Filing & Form KMD Submissions',
        body: `Digital tax administration administered by Maksu- ja Tolliamet:

- **e-Residency & Digital ID**: Estonian company founders and e-Residents authenticate using their digital identity cards (or Smart-ID / Mobile-ID) to manage VAT filings from anywhere in the world.
- **Filing Deadlines (Form KMD & INF)**: VAT returns (Vorm KMD) and the Annex of Invoices (KMD INF, listing B2B invoices exceeding €1,000) are due on or before the **20th day of the month** following the reporting period via **e-MTA**.
- **Unified Monthly Cadence**: All registered taxpayers file monthly returns; quarterly filing is not used in Estonia.`
      },
      {
        id: 'ee-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Pöördmaksustamine) & Cross-Border B2B Supplies',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Estonian KM displaying: *"Pöördmaksustamine (Reverse Charge)"* alongside verified Estonian VAT numbers (EE + 9 digits).
- **Domestic Reverse Charge**: Enforced under Section 41^1 of KMS for commercial real estate, scrap metal, precious metals, and investment gold.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Tallinn (22% KM)',
      scenario: 'A digital consultancy in Tallinn delivers €5,000.00 net of custom cloud software services to a corporate client in Tartu. Standard 22% KM applies.',
      inputs: { netSoftwareService: '€5,000.00', estonianStandardKmRate: '22.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€5,000.00 consulting', amount: '€5,000.00', note: 'Subject to 22% Estonian KM' },
        { label: 'Estonian KM Output (22%)', formula: '€5,000.00 × 22.00%', amount: '€1,100.00', note: 'Output tax liability to e-MTA' },
        { label: 'Total Invoiced Customer Checkout', formula: '€5,000.00 + €1,100.00', amount: '€6,100.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Estonia’s 22% standard VAT rate, the corporate customer pays €6,100.00 gross, with €1,100.00 in KM remitted on the vendor’s monthly Form KMD return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €610.00 Retail Receipt',
      scenario: 'A consumer in Pärnu purchases €610.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Estonian KM component?',
      inputs: { totalInclusiveAmount: '€610.00', kmRate: '22.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€610.00 ÷ (1 + 0.22)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Estonian KM Component', formula: '€610.00 - €500.00', amount: '€110.00', note: 'Output KM liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 22.00%', amount: '€110.00', note: 'Reconciles exactly to €610.00 total' }
      ],
      takeaway: 'From an all-inclusive €610.00 retail transaction in Estonia, the merchant retains €500.00 net and remits €110.00 in KM to Maksu- ja Tolliamet.'
    },
    faqs: [
      { question: 'What is the standard VAT (KM) rate in Estonia?', answer: 'The standard VAT rate in Estonia is 22%, which took effect on January 1, 2024 (increased from 20%). Reduced rates of 9% (accommodation, books, medicine) and 5% (press publications) apply to specific goods.', sourceUrl: 'https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks' },
      { question: 'What is the Estonian VAT registration threshold for small businesses?', answer: 'The VAT registration threshold in Estonia is €40,000 in taxable turnover from the beginning of a calendar year under Section 19 of Käibemaksuseadus.', sourceUrl: 'https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks' },
      { question: 'Can e-Residents file Estonian VAT returns online?', answer: 'Yes. 100% of Estonian VAT returns (Form KMD) are filed digitally through the e-MTA electronic portal using Estonian digital ID cards, Smart-ID, or Mobile-ID.', sourceUrl: 'https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks' },
      { question: 'How is an Estonian VAT number formatted?', answer: 'Estonian VAT identification numbers (KMKR number) are formatted with the country prefix EE followed by 9 numerical digits (e.g. EE123456789).', sourceUrl: 'https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks' },
      { question: 'When are Estonian VAT returns due?', answer: 'VAT declarations (Form KMD) and the Annex of Invoices (KMD INF) are due on or before the 20th day of the month following the reporting period via e-MTA.', sourceUrl: 'https://www.emta.ee/ari-ja-ettevotja/maksud-ja-tasumine/kaibemaks' }
    ]
  },

  'cyprus': {
    slug: 'cyprus',
    name: 'Cyprus',
    title: 'Cyprus VAT Calculator (19%, 9%, 5%, 3% FPA) & Tax Dept Guide | FeeKit',
    metaDescription: 'Calculate Cypriot Foros Prostithemenis Axias (FPA / ΦΠΑ) with verified Tax Department rates (19% standard, 9% dining, 5% food, 3% books). €15.6k threshold and Taxisnet filing.',
    h1: 'Cyprus VAT Calculator & Tax Department Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://www.mof.gov.cy/tax',
    citation: 'The Value Added Tax Law of 2000 (Law 95(I)/2000) and Taxisnet regulations.',
    overview: 'Value Added Tax in Cyprus—known domestically as Foros Prostithemenis Axias (FPA or ΦΠΑ)—is governed by the Cyprus Value Added Tax Law of 2000 (Law 95(I)/2000) and administered by the Tax Department (Τμήμα Φορολογίας) of the Ministry of Finance. Cyprus applies a competitive standard VAT rate of 19% across commercial goods and professional services, alongside reduced rates of 9% (restaurant dining, hotel accommodation, domestic passenger transport), 5% (staple foodstuffs, pharmaceuticals, residential property acquisition under conditions), and a 3% super-reduced rate (printed and electronic books, theater tickets). Small businesses with annual taxable turnover exceeding €15,600 must register for VAT. VAT returns are submitted electronically via Taxisnet.',
    sections: [
      {
        id: 'cy-statutory-vat-rates',
        title: 'Cypriot FPA Rate Architecture: Standard (19%), Reduced (9%, 5%, 3%), and Zero Rate',
        body: `Cyprus enforces four statutory rate brackets under the Value Added Tax Law:

1. **Standard Rate (19%)**: Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, commercial software, and professional consulting services.
2. **First Reduced Rate (9%)**: Applies to restaurant dining, catering services, hotel and tourist accommodations, and domestic passenger transport (taxis, buses).
3. **Second Reduced Rate (5%)**: Applies to basic food supplies, confectionery, pharmaceuticals, medical equipment, and the supply/construction of primary residential dwellings (up to statutory surface limits).
4. **Super-Reduced Rate (3%)**: Enacted under recent harmonizations, applying to books, newspapers, cultural admissions, and special orthopaedic appliances.
5. **Zero-Rated Supplies (0%)**: Intra-Community supplies of goods and exports outside the European Union.`
      },
      {
        id: 'cy-small-business-threshold',
        title: '€15,600 Registration Threshold (Υποχρέωση Εγγραφής)',
        body: `Administrative relief under Schedule 1 of the Cyprus VAT Law:

- **Turnover Threshold**: Any business or individual whose taxable turnover of goods and services exceeds **€15,600** in any preceding 12-month period, or is expected to exceed €15,600 in the next 30 days, must register for VAT.
- **Voluntary Registration**: Small enterprises below €15,600 can voluntarily register if carrying out commercial transactions and seeking input tax deductions.
- **Operational Rules**: Exempt businesses do not charge 19% FPA and cannot deduct input VAT on equipment.`
      },
      {
        id: 'cy-taxisnet-and-filing-deadlines',
        title: 'Taxisnet Submissions & Quarterly Filing Schedules',
        body: `Compliance requirements administered by the Cyprus Tax Department:

- **Filing Deadlines**: VAT declarations (Form VAT 100) and tax payments are due on or before the **10th day of the second month** following the end of the VAT period (e.g., period ending March 31 is due May 10).
- **Quarterly Cadence**: Registered businesses are allocated into one of three quarterly staggering cycles by the Tax Department.
- **Mandatory Digital Filing**: All returns must be transmitted electronically through **Taxisnet Cyprus** with payments executed via the **Tax Portal** or Internet Banking.`
      },
      {
        id: 'cy-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Αντίστροφη Χρέωση) & Cross-Border B2B Supplies',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Cypriot FPA displaying: *"Αντίστροφη Χρέωση (Reverse Charge)"* alongside verified Cypriot VAT numbers (CY + 8 digits + 1 letter).
- **Domestic Construction Reverse Charge**: Enforced under Article 11B of the VAT Law for commercial construction and demolition services.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Nicosia (19% FPA)',
      scenario: 'A digital consultancy in Nicosia delivers €5,000.00 net of custom cloud integration services to a corporate client in Limassol. Standard 19% FPA applies.',
      inputs: { netSoftwareService: '€5,000.00', cypriotStandardFpaRate: '19.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€5,000.00 consulting', amount: '€5,000.00', note: 'Subject to 19% Cypriot FPA' },
        { label: 'Cypriot FPA Output (19%)', formula: '€5,000.00 × 19.00%', amount: '€950.00', note: 'Output tax liability to Tax Department' },
        { label: 'Total Invoiced Customer Checkout', formula: '€5,000.00 + €950.00', amount: '€5,950.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Cypriot VAT, the corporate customer pays €5,950.00 gross, with €950.00 in FPA remitted on the vendor’s quarterly Taxisnet return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €595.00 Retail Receipt',
      scenario: 'A consumer in Larnaca purchases €595.00 all-inclusive of retail electronics. What is the net sales revenue and Cypriot FPA component?',
      inputs: { totalInclusiveAmount: '€595.00', fpaRate: '19.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€595.00 ÷ (1 + 0.19)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Cypriot FPA Component', formula: '€595.00 - €500.00', amount: '€95.00', note: 'Output FPA liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 19.00%', amount: '€95.00', note: 'Reconciles exactly to €595.00 total' }
      ],
      takeaway: 'From an all-inclusive €595.00 retail transaction in Cyprus, the merchant retains €500.00 net and remits €95.00 in FPA to the Tax Department.'
    },
    faqs: [
      { question: 'What is the standard VAT (FPA) rate in Cyprus?', answer: 'The standard VAT rate in Cyprus is 19%. Reduced rates of 9% (restaurants, hotels, domestic transport), 5% (basic food, medicine, residential housing), and 3% (books, culture) apply to qualifying supplies.', sourceUrl: 'https://www.mof.gov.cy/tax' },
      { question: 'What is the Cyprus VAT registration threshold for small businesses?', answer: 'The VAT registration threshold in Cyprus is €15,600 in annual taxable turnover within any rolling 12-month period under Schedule 1 of the VAT Law.', sourceUrl: 'https://www.mof.gov.cy/tax' },
      { question: 'What is the Taxisnet system in Cyprus?', answer: 'Taxisnet is Cyprus’s mandatory digital tax portal used for the electronic filing of quarterly VAT returns (Form VAT 100) and VIES summary statements.', sourceUrl: 'https://www.mof.gov.cy/tax' },
      { question: 'How is a Cypriot VAT number formatted?', answer: 'Cyprus VAT numbers are formatted with the country prefix CY followed by 8 numerical digits and 1 check letter (e.g. CY12345678X).', sourceUrl: 'https://www.mof.gov.cy/tax' },
      { question: 'When are Cyprus VAT returns due?', answer: 'VAT returns and tax payments are due on or before the 10th day of the second month following the end of the quarterly VAT period via Taxisnet (e.g. Q1 due May 10).', sourceUrl: 'https://www.mof.gov.cy/tax' }
    ]
  },

  'luxembourg': {
    slug: 'luxembourg',
    name: 'Luxembourg',
    title: 'Luxembourg VAT Calculator (17%, 14%, 8%, 3% TVA) & AED Guide | FeeKit',
    metaDescription: 'Calculate Luxembourg Taxe sur la valeur ajoutée (TVA) with verified AED rates (17% lowest standard in EU, 14%, 8%, 3%). €35k threshold, eCDF, and reverse charge.',
    h1: 'Luxembourg VAT Calculator & Administration de l’enregistrement Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://pfi.public.lu/',
    citation: 'Loi modifiée du 12 février 1979 concernant la taxe sur la valeur ajoutée (TVA) and eCDF portal rules.',
    overview: 'Value Added Tax in the Grand Duchy of Luxembourg—known domestically as Taxe sur la valeur ajoutée or TVA—is governed by the Luxembourg VAT Act of February 12, 1979 and administered by the Registration Duties, Estates and VAT Authority (Administration de l\'enregistrement, des domaines et de la TVA - AED). Luxembourg maintains a standard VAT rate of 17%, representing the lowest standard VAT rate in the European Union. Luxembourg features an intermediate rate of 14% (fuel, adult wines, advertising), a reduced rate of 8% (heating energy, cleaning), and a super-reduced rate of 3% (staple foods, pharmaceutical products, books, e-books, children’s clothing, and restaurant dining excluding alcohol). Small businesses with annual turnover under €35,000 qualify for exemption. Tax returns are filed via eCDF.',
    sections: [
      {
        id: 'lu-statutory-vat-rates-lowest-in-eu',
        title: 'Luxembourg TVA Architecture: The 17% EU-Lowest Standard & Tiered Brackets (14%, 8%, 3%)',
        body: `Luxembourg enforces four statutory rate brackets under Article 39 of the Luxembourg VAT Law:

1. **Standard Rate (17%)**: Represents the lowest standard general VAT rate across all 27 EU member states. Applies to general consumer goods, electronics, motor vehicles, apparel, and commercial IT and professional consulting services.
2. **Intermediate Rate (14%)**: Applies to solid mineral fuels, mineral oils, cleaning products, advertising services, and print promotional materials.
3. **Reduced Rate (8%)**: Applies to gas and electricity supplies for residential use, district heating, and floral supplies.
4. **Super-Reduced Rate (3%)**: Governed by Article 40. Applies to staple foodstuffs, non-alcoholic restaurant meals, printed and electronic books, newspapers, pharmaceutical drugs, children’s clothing and footwear, and residential property construction/renovations.
5. **Zero-Rated Supplies (0%)**: Intra-Community B2B deliveries of goods and direct exports outside the EU.`
      },
      {
        id: 'lu-small-business-exemption',
        title: '€35,000 Small Business Exemption (Régime de la franchise de taxe)',
        body: `Administrative relief under Article 57 of the Luxembourg VAT Law:

- **Turnover Threshold**: Small enterprises and sole traders whose annual pre-tax turnover did not exceed **€35,000** in the preceding calendar year qualify for the small business exemption scheme.
- **Operational Rules**: Exempt small businesses do not charge 17% TVA on customer invoices and cannot deduct input VAT on equipment.
- **Mandatory Invoice Disclaimer**: Invoices must display the statutory note: *"Régime de franchise de taxe, article 57 de la loi modifiée du 12 février 1979"*.`
      },
      {
        id: 'lu-ecdf-and-filing-deadlines',
        title: 'eCDF Electronic Platform Submissions & Filing Schedules',
        body: `Compliance requirements administered by the AED:

- **Mandatory Digital Submissions**: All periodic and annual VAT declarations must be transmitted through the **eCDF electronic platform** (plateforme de collecte de données financières).
- **Filing Deadlines**: Monthly and quarterly returns are due on or before the **15th day of the month** following the reporting period via eCDF.
- **Filing Frequency**:
  - Annual: Taxpayers with annual turnover under €112,000.
  - Quarterly: Businesses with turnover between €112,000 and €620,000.
  - Monthly: Mandatory for enterprises with annual turnover exceeding €620,000.`
      },
      {
        id: 'lu-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge (Autoliquidation) & Cross-Border B2B Supplies',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Luxembourg TVA displaying: *"Autoliquidation (Reverse Charge)"* alongside verified Luxembourg VAT numbers (LU + 8 digits).
- **Financial Services Center**: Luxembourg serves as Europe’s premier fund management hub; specialized VAT exemptions apply to collective investment management under Article 44.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Luxembourg City (17% TVA)',
      scenario: 'A digital consultancy in Luxembourg City delivers €10,000.00 net of custom cloud integration services to a domestic corporate client in Kirchberg. Standard 17% TVA applies.',
      inputs: { netSoftwareService: '€10,000.00', luxembourgStandardTvaRate: '17.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€10,000.00 consulting', amount: '€10,000.00', note: 'Subject to 17% Luxembourg TVA' },
        { label: 'Luxembourg TVA Output (17%)', formula: '€10,000.00 × 17.00%', amount: '€1,700.00', note: 'Output tax liability to AED' },
        { label: 'Total Invoiced Customer Checkout', formula: '€10,000.00 + €1,700.00', amount: '€11,700.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under Luxembourg’s competitive 17% standard VAT rate, the corporate customer pays €11,700.00 gross, with €1,700.00 in TVA remitted on the vendor’s periodic eCDF return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €585.00 Retail Receipt',
      scenario: 'A consumer in Esch-sur-Alzette purchases €585.00 all-inclusive of retail electronics. What is the net sales revenue and Luxembourg TVA component?',
      inputs: { totalInclusiveAmount: '€585.00', tvaRate: '17.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€585.00 ÷ (1 + 0.17)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Luxembourg TVA Component', formula: '€585.00 - €500.00', amount: '€85.00', note: 'Output TVA liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 17.00%', amount: '€85.00', note: 'Reconciles exactly to €585.00 total' }
      ],
      takeaway: 'From an all-inclusive €585.00 retail transaction in Luxembourg, the merchant retains €500.00 net and remits €85.00 in TVA to the AED.'
    },
    faqs: [
      { question: 'What is the standard VAT (TVA) rate in Luxembourg?', answer: 'The standard VAT rate in Luxembourg is 17%, which is the lowest standard VAT rate in the European Union. Tiered rates of 14% (fuels, advertising), 8% (utilities), and 3% (food, books, children’s clothes) apply to specific goods.', sourceUrl: 'https://pfi.public.lu/' },
      { question: 'What is the Luxembourg VAT registration threshold for small businesses?', answer: 'The small business VAT exemption threshold in Luxembourg is €35,000 in annual pre-tax turnover under Article 57 of the Luxembourg VAT Law.', sourceUrl: 'https://pfi.public.lu/' },
      { question: 'What is the eCDF system in Luxembourg?', answer: 'eCDF is Luxembourg’s centralized electronic platform used for submitting periodic and annual VAT declarations, financial statements, and VIES recapitulative statements to the AED.', sourceUrl: 'https://pfi.public.lu/' },
      { question: 'How is a Luxembourg VAT number formatted?', answer: 'Luxembourg VAT identification numbers (numéro d’identification TVA) are formatted with the country prefix LU followed by 8 numerical digits (e.g. LU12345678).', sourceUrl: 'https://pfi.public.lu/' },
      { question: 'When are Luxembourg VAT returns due?', answer: 'Periodic VAT declarations are due on or before the 15th day of the month following the close of the reporting period via the eCDF electronic portal.', sourceUrl: 'https://pfi.public.lu/' }
    ]
  },

  'malta': {
    slug: 'malta',
    name: 'Malta',
    title: 'Malta VAT Calculator (18%, 7%, 5% VAT) & CfR Guide | FeeKit',
    metaDescription: 'Calculate Maltese Value Added Tax with verified Commissioner for Revenue rates (18% standard, 7% hotel, 5% electricity, 0% food/medicine). Article 11 threshold and CfR portal.',
    h1: 'Malta VAT Calculator & Commissioner for Revenue Statutory Guide',
    lastVerified: '2026-10-24',
    sourceUrl: 'https://cfr.gov.mt/en/taxes/vat/',
    citation: 'Value Added Tax Act (Chapter 406 of the Laws of Malta) and CfR Guidelines.',
    overview: 'Value Added Tax in Malta—known officially as Value Added Tax or VAT—is governed by the Maltese Value Added Tax Act (Chapter 406 of the Laws of Malta) and administered by the Commissioner for Revenue (CfR). Malta applies a standard VAT rate of 18% on commercial merchandise and professional services, alongside reduced rates of 7% (hotel accommodations and licensed tourist lodging), 5% (residential electricity, printed and electronic books, medical accessories), and a statutory 0% zero-rate for staple groceries and prescription pharmaceuticals. Small businesses with annual turnover under €30,000 (services) or €35,000 (goods) qualify for Article 11 Small Undertakings exemption. VAT declarations are submitted via CfR’s online portal.',
    sections: [
      {
        id: 'mt-statutory-vat-rates',
        title: 'Maltese VAT Rate Architecture: Standard (18%), Reduced (7% & 5%), and Zero Rate',
        body: `Malta enforces four statutory rate brackets under the Value Added Tax Act:

1. **Standard Rate (18%)**: Governed by Section 19. Applies to general consumer merchandise, electronics, motor vehicles, apparel, alcohol, restaurant meals, commercial software, and professional consulting services.
2. **First Reduced Rate (7%)**: Applies to holiday accommodation in hotels, guesthouses, and tourist holiday premises, and the letting of sites for camping.
3. **Second Reduced Rate (5%)**: Applies to residential electricity supplies, printed and electronic books, newspapers, medical equipment for disabled persons, and minor repair services.
4. **Zero-Rated Supplies (0%)**: Under Part One of the Fifth Schedule, staple foods for human consumption (bread, milk, meat, fresh produce) and human prescription pharmaceuticals are zero-rated (0% VAT with full input deduction).`
      },
      {
        id: 'mt-small-business-threshold',
        title: 'Article 11 Small Undertakings Exemption (€30,000 / €35,000 Threshold)',
        body: `Administrative relief under Article 11 of the Maltese VAT Act:

- **Turnover Ceilings**:
  - **€30,000**: For businesses primarily providing services with relatively low value added.
  - **€35,000**: For economic activities consisting primarily in the supply of goods.
- **Operational Rules**: Registered Article 11 small undertakings do not charge 18% VAT on customer invoices, do not submit quarterly VAT returns, and cannot claim input tax deductions on equipment.
- **Article 10 vs Article 11 Registration**: Businesses operating above the threshold register under Article 10 as standard taxable persons.`
      },
      {
        id: 'mt-cfr-and-filing-deadlines',
        title: 'Commissioner for Revenue (CfR) Online Portal Submissions & Deadlines',
        body: `Compliance requirements administered by the Commissioner for Revenue (CfR):

- **Filing Deadlines**: Standard quarterly VAT returns and payments are due on or before the **15th day of the second month** following the end of the quarterly tax period (extended to the 22nd day for electronic filers submitting via the CfR online services portal).
- **Quarterly Cadence**: Article 10 registered businesses file on a standard quarterly staggering cycle assigned by the CfR.
- **Mandatory Electronic Submissions**: Submissions and electronic bank payments are executed via the **CfR Online Tax Portal**.`
      },
      {
        id: 'mt-reverse-charge-and-eu-b2b',
        title: 'Reverse Charge & Cross-Border EU Supplies',
        body: `Cross-border trade governed by European Union directives:

- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Maltese VAT displaying: *"Reverse Charge"* alongside verified Maltese VAT numbers (MT + 8 digits).
- **International Corporate Hub**: Malta hosts extensive remote gaming, maritime shipping, and aviation holding entities operating under specialized international VAT exemption frameworks.`
      }
    ],
    workedExample: {
      title: 'Worked Example: B2B Enterprise Technology Project in Valletta (18% VAT)',
      scenario: 'A digital consultancy in Valletta delivers €5,000.00 net of custom software engineering services to a corporate client in Sliema. Standard 18% VAT applies.',
      inputs: { netSoftwareService: '€5,000.00', malteseStandardVatRate: '18.00%' },
      steps: [
        { label: 'Net Consulting Service Base', formula: '€5,000.00 consulting', amount: '€5,000.00', note: 'Subject to 18% Maltese VAT' },
        { label: 'Maltese VAT Output (18%)', formula: '€5,000.00 × 18.00%', amount: '€900.00', note: 'Output tax liability to CfR' },
        { label: 'Total Invoiced Customer Checkout', formula: '€5,000.00 + €900.00', amount: '€5,900.00', note: 'Total customer payment' }
      ],
      takeaway: 'Under standard Maltese VAT, the corporate customer pays €5,900.00 gross, with €900.00 in VAT remitted on the vendor’s quarterly CfR tax return.'
    },
    workedExampleReverse: {
      title: 'Reverse Calculation: Extracting Net Revenue from a €590.00 Retail Receipt',
      scenario: 'A consumer in St. Julian’s purchases €590.00 all-inclusive of retail electronics. What is the net sales revenue and Maltese VAT component?',
      inputs: { totalInclusiveAmount: '€590.00', vatRate: '18.00%' },
      steps: [
        { label: 'Net Sales Extraction Formula', formula: '€590.00 ÷ (1 + 0.18)', amount: '€500.00', note: 'Retained business net turnover' },
        { label: 'Maltese VAT Component', formula: '€590.00 - €500.00', amount: '€90.00', note: 'Output VAT liability' },
        { label: 'Verification Calculation', formula: '€500.00 × 18.00%', amount: '€90.00', note: 'Reconciles exactly to €590.00 total' }
      ],
      takeaway: 'From an all-inclusive €590.00 retail transaction in Malta, the merchant retains €500.00 net and remits €90.00 in VAT to the Commissioner for Revenue.'
    },
    faqs: [
      { question: 'What is the standard VAT rate in Malta?', answer: 'The standard VAT rate in Malta is 18%. Reduced rates of 7% (hotel accommodation), 5% (electricity, books, medical devices), and 0% (groceries, prescription drugs) apply to specific qualifying supplies.', sourceUrl: 'https://cfr.gov.mt/en/taxes/vat/' },
      { question: 'What is the Maltese Article 11 Small Undertakings threshold?', answer: 'The small business VAT exemption threshold in Malta is €30,000 for service providers and €35,000 for economic activities consisting primarily of the supply of goods under Article 11 of the VAT Act.', sourceUrl: 'https://cfr.gov.mt/en/taxes/vat/' },
      { question: 'Are groceries subject to VAT in Malta?', answer: 'No. Staple groceries, fresh produce, bread, milk, and human pharmaceuticals are zero-rated (0% VAT) under Part One of the Fifth Schedule to the Maltese VAT Act.', sourceUrl: 'https://cfr.gov.mt/en/taxes/vat/' },
      { question: 'How is a Maltese VAT number formatted?', answer: 'Maltese VAT identification numbers are formatted with the country prefix MT followed by 8 numerical digits (e.g. MT12345678).', sourceUrl: 'https://cfr.gov.mt/en/taxes/vat/' },
      { question: 'When are Maltese VAT returns due?', answer: 'Quarterly VAT returns are due on the 15th day of the second month following the end of the tax period (or the 22nd day for electronic filers via the CfR portal).', sourceUrl: 'https://cfr.gov.mt/en/taxes/vat/' }
    ]
  }
};

