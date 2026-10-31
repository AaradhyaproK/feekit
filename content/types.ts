export interface ContentSection {
  id: string;
  title: string;
  body: string; // Markdown or rich text with substantive, page-specific explanations
}

export interface WorkedStep {
  label: string;
  formula?: string;
  amount: string;
  note?: string;
}

export interface WorkedExample {
  title: string;
  scenario: string;
  inputs: Record<string, string | number>;
  steps: WorkedStep[];
  takeaway: string;
}

export interface ContentFaq {
  question: string;
  answer: string;
  sourceUrl?: string;
}

export interface PageContent {
  slug: string;
  family: 'sales-tax' | 'freelance' | 'gateways' | 'vat' | 'ecommerce' | 'wise' | 'tools';
  title: string;
  metaDescription: string;
  h1: string;
  lastVerified: string; // ISO date matching /data/
  primarySource: {
    name: string;
    url: string;
    citation: string;
  };
  overview: string;
  sections: ContentSection[];
  workedExample: WorkedExample;
  workedExampleReverse?: WorkedExample;
  faqs: ContentFaq[];
  metadata?: Record<string, any>;
}

