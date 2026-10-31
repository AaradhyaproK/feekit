import type { PageContent } from '../types.ts';

export const alaskaContent: PageContent = {
  "slug": "alaska",
  "family": "sales-tax",
  "title": "Alaska Sales Tax Calculator (0.00% State, Local to 7.50%) | FeeKit",
  "metaDescription": "Calculate Alaska sales tax with Alaska Remote Sellers Sales Tax Commission (ARSSTC) rates (0.0% state, 0% to 7.5% municipal). Remote seller uniform code and $100k nexus.",
  "h1": "Alaska Sales Tax Calculator & ARSSTC Remote Sellers Guide",
  "lastVerified": "2026-10-24",
  "primarySource": {
    "name": "Alaska Remote Sellers Sales Tax Commission (ARSSTC)",
    "url": "https://arsstc.org/",
    "citation": "Alaska Remote Sellers Sales Tax Code (ARSSTC) and Alaska Municipal League Joint Powers Agreement."
  },
  "overview": "The State of Alaska does not impose a state-level retail sales tax, maintaining a statutory 0.00% statewide sales tax rate. However, under Alaska’s broad home-rule constitution, local municipalities and organized boroughs (counties) possess independent taxing authority. Over 100 Alaska cities and boroughs levy local retail sales taxes ranging from 1.00% to 7.50% (such as Juneau at 5.00%, Ketchikan at 6.50%, and Wasilla at 2.50%), while major metropolitan centers like Anchorage and Fairbanks levy a 0.00% general sales tax. To resolve interstate remote seller complexity, Alaska established the Alaska Remote Sellers Sales Tax Commission (ARSSTC), providing a centralized intergovernmental portal for remote seller economic nexus compliance.",
  "sections": [
    {
      "id": "ak-zero-state-rate-and-local-boroughs",
      "title": "0.00% State Rate vs Highly Independent Borough & City Taxes (0% to 7.50%)",
      "body": "Alaska’s sales tax architecture is entirely decentralized at the local level:\n\n- **Statewide Retail Sales Tax**: **0.00%**. The State of Alaska does not collect a general sales tax.\n- **Municipal & Borough Option Rates**: Local jurisdictions enforce independent sales tax rates:\n  - **Anchorage (Municipality of Anchorage)**: **0.00% general sales tax** (levies selective taxes on hotel rooms and car rentals).\n  - **Fairbanks (Fairbanks North Star Borough)**: **0.00% general retail sales tax**.\n  - **Juneau (City and Borough of Juneau)**: **5.00% municipal sales tax**.\n  - **Wasilla (Matanuska-Susitna Borough)**: **2.50% city sales tax**.\n  - **Ketchikan (City of Ketchikan)**: **6.50% combined city and borough tax**.\n  - **Sitka (City and Borough of Sitka)**: **5.00% seasonal sales tax** (increases to 6.00% during summer months)."
    },
    {
      "id": "ak-the-arsstc-uniform-remote-code",
      "title": "The Alaska Remote Sellers Sales Tax Commission (ARSSTC) Uniform Code",
      "body": "Because Alaska has no state Department of Revenue sales tax administration, the Alaska Municipal League formed the ARSSTC under a multi-jurisdictional Joint Powers Agreement:\n\n- **Uniform Remote Sales Tax Code**: Participating member municipalities adopt the model ARSSTC Uniform Code, establishing standardized taxability definitions and administrative rules for remote commerce.\n- **Centralized Administration**: Remote merchants register, calculate taxes, file unified monthly returns, and remit payments through a single centralized online clearinghouse (**ARSSTC Portal**) rather than dealing with dozens of individual Alaska cities.\n- **Non-Member Municipalities**: A handful of local jurisdictions have not joined the ARSSTC and administer local sales taxes independently for in-person retail."
    },
    {
      "id": "ak-economic-nexus-thresholds",
      "title": "Alaska Remote Seller Economic Nexus ($100,000 / 200 Transactions)",
      "body": "Codified under Section .030 of the ARSSTC Uniform Remote Sellers Sales Tax Code:\n\n- **Statewide Economic Nexus Threshold**: An out-of-state remote seller or marketplace facilitator establishes economic nexus across all ARSSTC member jurisdictions if, during the previous or current calendar year, the merchant achieves:\n  - **$100,000 or more in gross sales** delivered statewide across all of Alaska; **OR**\n  - **200 or more separate transactions** delivered statewide into Alaska.\n- **Destination Sourcing**: Once economic nexus is triggered, the remote merchant must collect local sales tax based on the precise delivery address in participating ARSSTC member jurisdictions. If an order is delivered to Anchorage (0%), zero tax is collected. If delivered to Juneau (5%), 5.00% tax is collected.\n- **Marketplace Facilitator Law**: Facilitators (Amazon, eBay, Etsy, etc.) collect and remit local sales tax across all participating ARSSTC member cities."
    },
    {
      "id": "ak-taxability-variations-saas-groceries",
      "title": "Local Taxability Variations: SaaS, Groceries, and Delivery Rules",
      "body": "Because local codes govern taxability, product treatment varies across Alaska jurisdictions:\n\n1. **Software as a Service (SaaS)**: Taxability depends on the delivery municipality. Under ARSSTC model interpretations, digital goods and SaaS subscriptions are taxable in Juneau and select boroughs, but exempt in others.\n2. **Groceries & Food for Home Consumption**: Exempt in certain municipalities (such as Kenai Peninsula Borough), but fully taxable in Juneau, Ketchikan, and Sitka.\n3. **Clothing and Footwear**: Fully taxable in jurisdictions that levy a local sales tax.\n4. **Filing Deadlines**: ARSSTC monthly returns are due on or before the **last day of the month** following the reporting period."
    }
  ],
  "workedExample": {
    "title": "Worked Example: Online Retail Delivery to Juneau vs Anchorage",
    "scenario": "An out-of-state online electronics merchant with Alaska economic nexus ships a $500.00 tablet to a customer in Juneau, and an identical tablet to Anchorage.",
    "inputs": {
      "tabletPrice": "$500.00",
      "juneauLocalRate": "5.00% (ARSSTC Member)",
      "anchorageLocalRate": "0.00%"
    },
    "steps": [
      {
        "label": "Juneau Delivery Sales Tax (5.00%)",
        "formula": "$500.00 × 5.00%",
        "amount": "$25.00",
        "note": "Juneau ARSSTC municipal tax"
      },
      {
        "label": "Juneau Total Customer Checkout",
        "formula": "$500.00 + $25.00",
        "amount": "$525.00",
        "note": "Total invoiced to Juneau buyer"
      },
      {
        "label": "Anchorage Delivery Sales Tax (0.00%)",
        "formula": "$500.00 × 0.00%",
        "amount": "$0.00",
        "note": "Anchorage levies zero general sales tax"
      },
      {
        "label": "Anchorage Total Customer Checkout",
        "formula": "$500.00 + $0.00",
        "amount": "$500.00",
        "note": "Total invoiced to Anchorage buyer"
      }
    ],
    "takeaway": "Under Alaska’s destination sourcing rules, an identical $500 tablet incurs $25.00 sales tax when delivered to Juneau, but zero tax when delivered to Anchorage."
  },
  "workedExampleReverse": {
    "title": "Reverse Calculation: Extracting Net Revenue from a $400.00 Ketchikan Receipt",
    "scenario": "A retail merchant in Ketchikan collects an all-inclusive $400.00 payment for taxable souvenirs at a combined 6.50% local rate. What is the net sales revenue?",
    "inputs": {
      "totalInclusiveAmount": "$400.00",
      "combinedLocalRate": "6.50%"
    },
    "steps": [
      {
        "label": "Net Sales Extraction Formula",
        "formula": "$400.00 ÷ (1 + 0.065)",
        "amount": "$375.59",
        "note": "Retained business net revenue"
      },
      {
        "label": "Local Ketchikan Sales Tax Liability",
        "formula": "$400.00 - $375.59",
        "amount": "$24.41",
        "note": "Remitted to local tax authority"
      },
      {
        "label": "Verification Calculation",
        "formula": "$375.59 × 6.50%",
        "amount": "$24.41",
        "note": "Reconciles exactly to $400.00 receipt"
      }
    ],
    "takeaway": "From a $400.00 tax-inclusive transaction in Ketchikan, the merchant retains $375.59 net revenue and owes $24.41 in local sales tax."
  },
  "faqs": [
    {
      "question": "Does Alaska have a state sales tax?",
      "answer": "No. The State of Alaska does not impose a state sales tax (0.00%). However, individual cities and boroughs levy local sales taxes ranging from 1.00% to 7.50%.",
      "sourceUrl": "https://arsstc.org/"
    },
    {
      "question": "What is the Alaska Remote Sellers Sales Tax Commission (ARSSTC)?",
      "answer": "ARSSTC is an intergovernmental commission that provides centralized sales tax administration, registration, and filing for remote out-of-state sellers delivering goods into participating Alaska municipalities.",
      "sourceUrl": "https://arsstc.org/"
    },
    {
      "question": "What is the Alaska economic nexus threshold for remote sellers?",
      "answer": "Remote sellers establish economic nexus across participating Alaska municipalities when statewide sales into Alaska reach $100,000 or 200 separate transactions annually.",
      "sourceUrl": "https://arsstc.org/"
    },
    {
      "question": "Is sales tax charged in Anchorage or Fairbanks?",
      "answer": "No. Anchorage and Fairbanks do not levy a general retail sales tax. Deliveries to addresses in these cities incur 0% sales tax.",
      "sourceUrl": "https://arsstc.org/"
    },
    {
      "question": "How is SaaS taxed in Alaska?",
      "answer": "SaaS taxability depends on the local municipality. SaaS and digital goods are taxable in Juneau and select member boroughs, but exempt in others.",
      "sourceUrl": "https://arsstc.org/"
    }
  ]
};

export default alaskaContent;
