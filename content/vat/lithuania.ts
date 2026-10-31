import type { PageContent } from '../types.ts';

export const lithuaniaVatContent: PageContent = {
  "slug": "lithuania",
  "family": "vat",
  "title": "Lithuania VAT Calculator (21%, 9%, 5% PVM) & VMI Guide | FeeKit",
  "metaDescription": "Calculate Lithuanian Pridėtinės vertės mokestis (PVM) with verified VMI rates (21% standard, 9% heating/books, 5% pharma). €45k threshold, i.MAS, and reverse charge.",
  "h1": "Lithuania VAT Calculator & Valstybinė mokesčių inspekcija Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Valstybinė mokesčių inspekcija (VMI)",
    "url": "https://www.vmi.lt/",
    "citation": "Lietuvos Respublikos pridėtinės vertės mokesčio įstatymas (PVMĮ) and i.MAS subsystem rules."
  },
  "overview": "Value Added Tax in Lithuania—known domestically as Pridėtinės vertės mokestis or PVM—is governed by the Lithuanian Law on Value Added Tax (PVM įstatymas) and administered by the State Tax Inspectorate (Valstybinė mokesčių inspekcija - VMI). Lithuania applies a standard VAT rate of 21% on commercial goods and services, alongside reduced rates of 9% (centralized heating, printed and electronic books, passenger transport, hotel accommodation) and 5% (pharmaceuticals and specialized medical equipment). Small businesses with annual turnover under €45,000 qualify for exemption. Taxpayers must submit monthly invoice registers to the national smart tax administration system (i.MAS).",
  "sections": [
    {
      "id": "lt-statutory-vat-rates",
      "title": "Lithuanian PVM Architecture: Standard (21%), Reduced (9% & 5%), and Zero Rate",
      "body": "Lithuania enforces three statutory rate brackets under Article 19 of PVMĮ:\n\n1. **Standard Rate (21%)**: Governed by Art. 19 d. 1. Applies to general merchandise, electronics, passenger motor vehicles, apparel, alcohol, restaurant food, and commercial IT and professional consulting services.\n2. **First Reduced Rate (9%)**: Governed by Art. 19 d. 3. Applies to centralized heating energy and hot water, books and non-promotional periodicals, public passenger transport, and hotel tourism accommodations.\n3. **Second Reduced Rate (5%)**: Governed by Art. 19 d. 4. Applies to prescription pharmaceuticals, medical aids, and specialized technical assistance devices for disabled individuals.\n4. **Zero-Rated Supplies (0%)**: Intra-Community B2B supplies of goods, international passenger transport, and direct export deliveries outside the EU."
    },
    {
      "id": "lt-small-business-threshold",
      "title": "€45,000 Registration Threshold (PVM registravimo riba)",
      "body": "Administrative relief under Article 71 of PVMĮ:\n\n- **Revenue Threshold**: Any taxable person established in Lithuania whose aggregate taxable turnover from goods and services in the preceding 12 months reaches **€45,000** must register for PVM.\n- **Affiliated Entity Rules**: Turnover of legally related or affiliated persons is aggregated when evaluating the €45,000 ceiling to prevent artificial company splitting.\n- **Operational Rules**: Exempt small businesses do not charge 21% PVM and cannot deduct input VAT on equipment."
    },
    {
      "id": "lt-imas-and-monthly-filing",
      "title": "Mandatory i.MAS Smart Tax Administration & FR0600 Submissions",
      "body": "VMI enforces real-time digital auditing through the i.MAS system:\n\n- **i.SAF Register Submissions**: All registered PVM payers must submit structured XML data files of issued and received tax invoices to the i.SAF subsystem of i.MAS by the **20th day of the following month**.\n- **Filing Deadlines (Form FR0600)**: Periodic VAT returns and payments are due on or before the **25th day of the month** following the reporting period via the **Mano VMI** portal.\n- **Filing Frequency**: Standard monthly filing for legal entities; semi-annual filing can be granted to individual natural persons with turnover under €60,000."
    },
    {
      "id": "lt-reverse-charge-and-eu-b2b",
      "title": "Reverse Charge (Atvirkštinis apmokestinimas) & Cross-Border B2B",
      "body": "Cross-border trade governed by European Union directives:\n\n- **Cross-Border EU Reverse Charge**: B2B digital services provided to EU corporate clients are invoiced net without Lithuanian PVM displaying: *\"Atvirkštinis apmokestinimas (Reverse Charge)\"* alongside verified PVM numbers (LT + 9 or 12 digits).\n- **Domestic Reverse Charge**: Enforced under Article 96 of PVMĮ for construction work, ferrous and non-ferrous metal scrap, and high-value wholesale mobile devices."
    }
  ],
  "workedExample": {
    "title": "Worked Example: B2B Enterprise Technology Project in Vilnius (21% PVM)",
    "scenario": "A digital consultancy in Vilnius delivers €6,000.00 net of custom software engineering services to a corporate client in Kaunas. Standard 21% PVM applies.",
    "inputs": {
      "netSoftwareService": "€6,000.00",
      "lithuanianStandardPvmRate": "21.00%"
    },
    "steps": [
      {
        "label": "Net Consulting Service Base",
        "formula": "€6,000.00 consulting",
        "amount": "€6,000.00",
        "note": "Subject to 21% Lithuanian PVM"
      },
      {
        "label": "Lithuanian PVM Output (21%)",
        "formula": "€6,000.00 × 21.00%",
        "amount": "€1,260.00",
        "note": "Output tax liability to VMI"
      },
      {
        "label": "Total Invoiced Customer Checkout",
        "formula": "€6,000.00 + €1,260.00",
        "amount": "€7,260.00",
        "note": "Total customer payment"
      }
    ],
    "takeaway": "Under standard Lithuanian VAT, the corporate customer pays €7,260.00 gross, with €1,260.00 in PVM reported on i.SAF and remitted on Form FR0600."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a €1,210.00 Retail Receipt",
    "scenario": "A consumer in Klaipėda purchases €1,210.00 all-inclusive of retail consumer electronics. What is the net sales revenue and Lithuanian PVM component?",
    "inputs": {
      "totalInclusiveAmount": "€1,210.00",
      "pvmRate": "21.00%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "€1,210.00 ÷ (1 + 0.21)",
        "amount": "€1,000.00",
        "note": "Retained business net turnover"
      },
      {
        "label": "Lithuanian PVM Component",
        "formula": "€1,210.00 - €1,000.00",
        "amount": "€210.00",
        "note": "Output PVM liability"
      },
      {
        "label": "Verification Calculation",
        "formula": "€1,000.00 × 21.00%",
        "amount": "€210.00",
        "note": "Reconciles exactly to €1,210.00 total"
      }
    ],
    "takeaway": "From an all-inclusive €1,210.00 retail transaction in Lithuania, the merchant retains €1,000.00 net and remits €210.00 in PVM to VMI."
  },
  "faqs": [
    {
      "question": "What is the standard VAT (PVM) rate in Lithuania?",
      "answer": "The standard VAT rate in Lithuania is 21%. Reduced rates of 9% (centralized heating, books, hotel lodging, passenger transport) and 5% (pharmaceuticals, medical aids) apply to qualifying supplies.",
      "sourceUrl": "https://www.vmi.lt/"
    },
    {
      "question": "What is the Lithuanian VAT registration threshold for small businesses?",
      "answer": "The mandatory VAT registration threshold in Lithuania is €45,000 in taxable turnover within the preceding 12 months under Article 71 of PVMĮ.",
      "sourceUrl": "https://www.vmi.lt/"
    },
    {
      "question": "What is the i.MAS system in Lithuania?",
      "answer": "i.MAS is Lithuania’s smart tax administration portal. All VAT-registered businesses must submit electronic invoice register data (i.SAF) to VMI by the 20th day of each month.",
      "sourceUrl": "https://www.vmi.lt/"
    },
    {
      "question": "How is a Lithuanian VAT number formatted?",
      "answer": "Lithuanian VAT identification numbers (PVM mokėtojo kodas) are formatted with the country prefix LT followed by 9 numerical digits for legal entities or 12 digits for individuals (e.g. LT123456789).",
      "sourceUrl": "https://www.vmi.lt/"
    },
    {
      "question": "When are Lithuanian VAT returns due?",
      "answer": "Periodic VAT returns (Form FR0600) and tax payments are due on or before the 25th day of the month following the reporting period via the Mano VMI digital portal.",
      "sourceUrl": "https://www.vmi.lt/"
    }
  ]
};

export default lithuaniaVatContent;
