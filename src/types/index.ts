export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  useCases: string[];
}

export interface IndustrySolution {
  id: string;
  industry: string;
  iconName: string;
  problem: string;
  solution: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface DemoProject {
  id: string;
  name: string;
  category: string;
  problem: string;
  workflowSummary: string;
  workflowSteps: {
    id: string;
    label: string;
    icon: string;
    system: string;
    action: string;
    samplePayload?: Record<string, any>;
  }[];
  toolsUsed: string[];
  keyBenefits: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  suitableFor: string;
  price: string;
  ctaText: string;
  popular?: boolean;
  features: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  businessName: string;
  serviceRequired: string;
  projectDescription: string;
  budgetRange: string;
  contactMethod: string;
  consent: boolean;
  botField?: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  serviceRequired?: string;
  projectDescription?: string;
  consent?: string;
}
