import {
  ServiceItem,
  IndustrySolution,
  WorkflowStep,
  DemoProject,
  PricingPackage,
  FaqItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'LEADX AUTOMATION',
  founder: 'Saikat Patra',
  location: 'West Bengal, India',
  phone: '9332699034',
  formattedPhone: '+91 9332699034',
  email: 'saikatpatra2179@gmail.com',
  tagline: 'Automate Smarter. Grow Faster.',
  whatsappDefaultMsg:
    'Hello LEADX AUTOMATION, I am interested in your AI automation services. I would like to discuss my business requirements.',
  colors: {
    bgPrimary: '#0B0B0B',
    bgSecondary: '#121212',
    accent: '#00FF88',
    textPrimary: '#FFFFFF',
    textSecondary: '#A1A1AA',
    border: '#262626',
  },
};

export const VALUE_PROPOSITIONS = [
  {
    id: 'smart-automation',
    title: 'Smart Automation',
    description: 'Reduce repetitive manual tasks through practical automation workflows.',
    iconName: 'Cpu',
  },
  {
    id: 'lead-management',
    title: 'Better Lead Management',
    description: 'Organize, capture, and manage business leads more efficiently.',
    iconName: 'Target',
  },
  {
    id: 'connected-systems',
    title: 'Connected Systems',
    description: 'Connect your business tools to create smoother operational workflows.',
    iconName: 'GitMerge',
  },
  {
    id: 'scalable-solutions',
    title: 'Scalable Solutions',
    description: 'Build automation systems that can grow with your business needs.',
    iconName: 'TrendingUp',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    shortDesc:
      'Automate repetitive business processes by connecting applications, databases, and AI tools.',
    iconName: 'Boxes',
    useCases: [
      'Google Sheets automation',
      'Email notifications',
      'Form processing',
      'Data synchronization',
      'Task management workflows',
    ],
  },
  {
    id: 'whatsapp-business-automation',
    title: 'WhatsApp Business Automation',
    shortDesc:
      'Build smarter customer communication workflows using supported WhatsApp Business integrations.',
    iconName: 'MessageSquare',
    useCases: [
      'Customer enquiry automation',
      'FAQ responses',
      'Lead capture',
      'Customer notifications',
      'CRM integration',
    ],
  },
  {
    id: 'ai-lead-generation-crm',
    title: 'AI Lead Generation & CRM',
    shortDesc:
      'Create organized lead management systems that help businesses capture, qualify, and follow up with prospects.',
    iconName: 'Users',
    useCases: [
      'Lead capture forms',
      'CRM workflow automation',
      'Lead qualification',
      'Follow-up reminders',
      'Google Sheets CRM',
    ],
  },
  {
    id: 'ai-agents-support',
    title: 'AI Agents & Customer Support',
    shortDesc:
      'Create AI assistants that help answer customer questions using approved business information and escalate complex cases to a human.',
    iconName: 'Bot',
    useCases: [
      'Website AI assistant',
      'FAQ chatbot',
      'Business knowledge assistant',
      'Customer support workflow',
      'Human escalation',
    ],
  },
  {
    id: 'business-process-automation',
    title: 'Business Process Automation',
    shortDesc: 'Connect everyday business tools and streamline internal operations.',
    iconName: 'Workflow',
    useCases: [
      'Appointment booking',
      'Notifications',
      'Document processing',
      'Reporting workflows',
      'Internal task automation',
    ],
  },
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'digital-marketing',
    industry: 'Digital Marketing Agencies',
    iconName: 'Megaphone',
    problem: 'Manual client reporting, lead follow-up, and repetitive campaign operations.',
    solution: 'Automated reporting, CRM workflows, lead management, and task automation.',
  },
  {
    id: 'ecommerce',
    industry: 'E-commerce Businesses',
    iconName: 'ShoppingCart',
    problem: 'Manual order updates, customer queries, and operational notifications.',
    solution: 'Order notifications, customer support workflows, and data synchronization.',
  },
  {
    id: 'real-estate',
    industry: 'Real Estate Businesses',
    iconName: 'Building',
    problem: 'Manual enquiry handling, lead tracking, and appointment coordination.',
    solution: 'Lead capture CRM, follow-up reminders, and appointment workflows.',
  },
  {
    id: 'coaching',
    industry: 'Coaching Institutes',
    iconName: 'GraduationCap',
    problem: 'Manual student enquiry management, reminders, and registration workflows.',
    solution: 'Student enquiry automation, notifications, and registration systems.',
  },
  {
    id: 'startups',
    industry: 'Startups & Small Businesses',
    iconName: 'Rocket',
    problem: 'Limited time and resources for repetitive operational tasks.',
    solution: 'Custom business workflows, reporting, and AI-powered assistance.',
  },
];

export const HOW_IT_WORKS: WorkflowStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'We understand your business process, challenges, and automation goals.',
    details: [
      'Understand current operational bottlenecks',
      'Audit repetitive manual data entry points',
      'Define expected business turnaround times',
    ],
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'We identify suitable workflows, tools, and integration requirements.',
    details: [
      'Select robust tools (n8n, Google Workspace, WhatsApp API, Webhooks)',
      'Map data schemas and trigger conditions',
      'Review security, privacy, and budget fit',
    ],
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'We create, test, and refine your automation solution.',
    details: [
      'Configure nodes and custom logic pipelines',
      'Conduct rigorous edge-case testing',
      'Implement fail-safe retry mechanisms',
    ],
  },
  {
    step: '04',
    title: 'LAUNCH & IMPROVE',
    description:
      'We deploy the workflow, provide documentation, and offer support according to the agreed scope.',
    details: [
      'Production deployment and live testing',
      'Clear user guide and runbook handover',
      'Agreed post-launch support and iteration',
    ],
  },
];

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: 'demo-whatsapp-crm',
    name: 'WhatsApp Lead Capture CRM',
    category: 'WhatsApp & CRM Automation',
    problem:
      'Inbound WhatsApp enquiries get buried in chat lists without CRM entry, causing missed sales opportunities and delayed follow-ups.',
    workflowSummary:
      'Customer Enquiry → Lead Capture → Google Sheets CRM → Notification',
    workflowSteps: [
      {
        id: 'step-1',
        label: 'Customer Enquiry',
        icon: 'MessageSquare',
        system: 'WhatsApp Cloud API / Webhook',
        action: 'Inbound message received with user contact info and inquiry intent',
        samplePayload: {
          sender: '+91 98765 43210',
          customerName: 'Aarav Mehta',
          message: 'Interested in AI workflow setup for coaching institute',
          timestamp: '2026-11-03 10:15:00',
        },
      },
      {
        id: 'step-2',
        label: 'Lead Capture & Filter',
        icon: 'Filter',
        system: 'n8n / Workflow Engine',
        action: 'Parses payload, validates contact fields, and categorizes lead tier',
        samplePayload: {
          leadCategory: 'Education / Coaching',
          priority: 'High',
          status: 'Qualified',
        },
      },
      {
        id: 'step-3',
        label: 'Google Sheets CRM Sync',
        icon: 'Table',
        system: 'Google Sheets / Airtable CRM',
        action: 'Appends new row with timestamp, lead status, and assigned rep',
        samplePayload: {
          sheetRowId: 142,
          leadOwner: 'Saikat Patra',
          status: 'New Enquiry',
          pipelineStage: 'Initial Review',
        },
      },
      {
        id: 'step-4',
        label: 'Team Notification',
        icon: 'Bell',
        system: 'Telegram / Email / Slack Alert',
        action: 'Instant push alert sent to sales team with one-click reply link',
        samplePayload: {
          alertChannel: '#sales-leads-instant',
          dispatchTimeMs: 420,
          delivered: true,
        },
      },
    ],
    toolsUsed: ['WhatsApp API', 'n8n', 'Google Sheets', 'Email / Webhook'],
    keyBenefits: [
      'Zero manual entry of WhatsApp messages',
      'Instant alert within 2 seconds of enquiry',
      'Centralized Google Sheets database for transparency',
    ],
  },
  {
    id: 'demo-ai-email-assistant',
    name: 'AI Email Assistant',
    category: 'AI Workflow Automation',
    problem:
      'Support teams spend hours reading repetitive inquiries, writing draft responses from scratch, and classifying priorities.',
    workflowSummary:
      'Incoming Email → Categorization → AI Draft Suggestion → Human Review',
    workflowSteps: [
      {
        id: 'step-1',
        label: 'Incoming Email',
        icon: 'Mail',
        system: 'Gmail / Outlook Webhook',
        action: 'Triggers on new unread message in business inbox',
        samplePayload: {
          from: 'client@techventures.io',
          subject: 'Request for custom workflow pricing',
          bodyLength: 280,
        },
      },
      {
        id: 'step-2',
        label: 'AI Categorization',
        icon: 'Sparkles',
        system: 'Gemini AI Model',
        action: 'Analyzes intent, urgency, and extracts key business requirements',
        samplePayload: {
          intent: 'Sales Inquiry',
          urgency: 'Medium',
          entities: ['Custom n8n', 'Google Workspace'],
        },
      },
      {
        id: 'step-3',
        label: 'AI Draft Suggestion',
        icon: 'FileText',
        system: 'LLM Orchestrator',
        action: 'Generates professional personalized draft response using agency knowledge base',
        samplePayload: {
          draftStatus: 'Created in Gmail Drafts',
          tone: 'Professional & Helpful',
        },
      },
      {
        id: 'step-4',
        label: 'Human Review & Send',
        icon: 'CheckCircle2',
        system: 'Human-in-the-Loop Review',
        action: 'Account manager reviews draft, makes final tweaks, and approves send',
        samplePayload: {
          approvedBy: 'Saikat Patra',
          sentTimestamp: '2026-11-03 11:20:00',
        },
      },
    ],
    toolsUsed: ['Gmail API', 'Gemini AI', 'n8n', 'Internal Knowledge Base'],
    keyBenefits: [
      '70% reduction in first-response draft time',
      'Consistent, error-free corporate messaging',
      'Guaranteed human oversight before any email is dispatched',
    ],
  },
  {
    id: 'demo-appointment-booking',
    name: 'Appointment Booking Automation',
    category: 'Business Process Automation',
    problem:
      'Back-and-forth messaging to pick meeting slots causes dropped leads and double-booking mistakes.',
    workflowSummary:
      'Booking Form → Calendar Event → Confirmation Email → Reminder',
    workflowSteps: [
      {
        id: 'step-1',
        label: 'Booking Form',
        icon: 'Calendar',
        system: 'Web Booking Widget',
        action: 'Prospect picks open time slot and enters company details',
        samplePayload: {
          clientName: 'Pooja Sen',
          slot: 'Thursday, 4:00 PM IST',
          meetingType: '30-min Strategy Call',
        },
      },
      {
        id: 'step-2',
        label: 'Calendar Event Creation',
        icon: 'Clock',
        system: 'Google Calendar API',
        action: 'Creates scheduled meeting event with auto-generated Google Meet link',
        samplePayload: {
          eventId: 'gcal_894318',
          meetLink: 'https://meet.google.com/abc-xyz-123',
          status: 'Confirmed',
        },
      },
      {
        id: 'step-3',
        label: 'Confirmation Email',
        icon: 'Send',
        system: 'Transactional Email Service',
        action: 'Sends calendar invite (.ics) and confirmation email to attendee',
        samplePayload: {
          recipient: 'pooja@agencygrowth.com',
          templateId: 'leadx_booking_confirm',
        },
      },
      {
        id: 'step-4',
        label: 'Automated Reminders',
        icon: 'Clock',
        system: 'Scheduled Workflow Queue',
        action: 'Sends automated WhatsApp/SMS reminder 1 hour before scheduled time',
        samplePayload: {
          scheduledReminder: 'Thursday 3:00 PM IST',
          channel: 'WhatsApp + Email',
        },
      },
    ],
    toolsUsed: ['Google Calendar', 'Google Meet', 'Email Service', 'WhatsApp API'],
    keyBenefits: [
      'Zero back-and-forth email scheduling',
      'Drastically reduced meeting no-show rate',
      'Automatic sync with team calendars',
    ],
  },
  {
    id: 'demo-ai-support-assistant',
    name: 'AI Customer Support Assistant',
    category: 'AI Agents & Support',
    problem:
      'Repetitive FAQ queries consume support bandwidth while complex urgent queries wait in the queue.',
    workflowSummary:
      'Customer Question → Business Knowledge Retrieval → AI Response → Human Escalation',
    workflowSteps: [
      {
        id: 'step-1',
        label: 'Customer Question',
        icon: 'MessageCircle',
        system: 'Website Chat Widget / WhatsApp',
        action: 'User submits inquiry regarding pricing, service turnaround, or scope',
        samplePayload: {
          query: 'What tools do you use for workflow automation?',
          visitorId: 'anon_9921',
        },
      },
      {
        id: 'step-2',
        label: 'Knowledge Retrieval',
        icon: 'Database',
        system: 'Curated Knowledge Base',
        action: 'Searches verified business documentation and approved company guidelines',
        samplePayload: {
          matchedDocs: ['LEADX_Tech_Stack.md', 'Workflow_Pricing_Guide.md'],
          confidenceScore: 0.94,
        },
      },
      {
        id: 'step-3',
        label: 'AI Response Generation',
        icon: 'Bot',
        system: 'Strict AI Agent Guardrails',
        action: 'Generates concise, factual answer strictly grounded in approved knowledge',
        samplePayload: {
          response:
            'LEADX AUTOMATION builds workflows using n8n, Google Workspace, WhatsApp Business API, and customized webhooks.',
          grounded: true,
        },
      },
      {
        id: 'step-4',
        label: 'Human Escalation',
        icon: 'UserCheck',
        system: 'Escalation Router',
        action: 'If confidence is low or user requests a quote, transfers thread to Saikat Patra',
        samplePayload: {
          escalationStatus: 'Handed to Saikat Patra via WhatsApp',
          leadCaptured: true,
        },
      },
    ],
    toolsUsed: ['Gemini AI Agent', 'Knowledge Retrieval', 'n8n', 'WhatsApp Bot'],
    keyBenefits: [
      'Instant 24/7 answers to routine questions',
      'No hallucinations due to strict knowledge grounding',
      'Seamless human escalation for high-value inquiries',
    ],
  },
  {
    id: 'demo-google-forms-automation',
    name: 'Google Forms Business Automation',
    category: 'AI Workflow Automation',
    problem:
      'Manual copying of Google Form inquiries into databases and manual notification dispatch is prone to human error.',
    workflowSummary:
      'Form Submission → Data Processing → Google Sheets → Email Notification',
    workflowSteps: [
      {
        id: 'step-1',
        label: 'Form Submission',
        icon: 'CheckSquare',
        system: 'Google Forms / Typeform',
        action: 'Client or prospect submits survey, job request, or audit form',
        samplePayload: {
          formName: 'Client Project Intake',
          respondentEmail: 'director@innovate.co',
        },
      },
      {
        id: 'step-2',
        label: 'Data Processing & Cleaning',
        icon: 'Cog',
        system: 'n8n Webhook Listener',
        action: 'Cleans whitespace, formats phone numbers, and validates required data',
        samplePayload: {
          cleanedData: true,
          countryCodeAdded: '+91',
        },
      },
      {
        id: 'step-3',
        label: 'Google Sheets Storage',
        icon: 'FileSpreadsheet',
        system: 'Master Google Sheet',
        action: 'Appends data into categorized worksheet tabs with formula timestamps',
        samplePayload: {
          tab: 'Nov_2026_Intake',
          status: 'Pending Review',
        },
      },
      {
        id: 'step-4',
        label: 'Email & WhatsApp Notification',
        icon: 'Send',
        system: 'Multi-Channel Dispatch',
        action: 'Sends PDF summary copy to respondent and ping alert to administration',
        samplePayload: {
          pdfGenerated: true,
          emailSent: true,
        },
      },
    ],
    toolsUsed: ['Google Forms', 'Google Sheets', 'n8n', 'Gmail / SMTP'],
    keyBenefits: [
      'Eliminates copy-paste errors completely',
      'Automated receipt and confirmation to respondent',
      'Real-time data synchronization across business sheets',
    ],
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter-automation',
    name: 'STARTER AUTOMATION',
    tagline: 'Ideal for small businesses taking their first step into workflow automation.',
    suitableFor: 'Small businesses and individuals',
    price: 'Custom Quote',
    ctaText: 'Get Started',
    popular: false,
    features: [
      'One focused workflow automation',
      'Basic application integration (e.g. Google Sheets or Forms)',
      'Thorough workflow testing and edge case check',
      'Clear basic documentation and handover',
      'Email / WhatsApp deployment confirmation',
    ],
  },
  {
    id: 'business-automation',
    name: 'BUSINESS AUTOMATION',
    tagline: 'Connect multiple platforms to streamline daily operational workflows.',
    suitableFor: 'Businesses needing multiple connected workflows',
    price: 'Custom Quote',
    ctaText: 'Discuss Your Project',
    popular: true,
    features: [
      'Multiple workflows based on project scope',
      'Multi-application integration (Sheets, CRM, WhatsApp, Email)',
      'End-to-end integration testing and validation',
      'Detailed system architecture documentation',
      'Basic post-deployment support as agreed in scope',
    ],
  },
  {
    id: 'custom-ai-solution',
    name: 'CUSTOM AI SOLUTION',
    tagline: 'Advanced AI agents and tailored business automation architectures.',
    suitableFor: 'Businesses needing AI agents or advanced automation',
    price: 'Request a Quote',
    ctaText: 'Contact Us',
    popular: false,
    features: [
      'Deep operational requirement analysis',
      'Custom AI workflow & knowledge base integration',
      'Integration architecture planning (n8n, API, AI models)',
      'Strict quality & guardrail testing',
      'Deployment assistance and team orientation',
      'Optional ongoing maintenance agreement',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is AI automation?',
    answer:
      'AI automation combines artificial intelligence and workflows to help perform repetitive business tasks with less manual effort. It allows software systems to handle data entry, lead categorization, email drafting, and notifications automatically.',
  },
  {
    id: 'faq-2',
    question: 'What types of businesses can use automation?',
    answer:
      'Startups, small businesses, marketing agencies, e-commerce stores, coaching institutes, real estate consultancies, and other businesses with repetitive operational tasks can benefit from suitable workflows.',
  },
  {
    id: 'faq-3',
    question: 'Do I need technical knowledge?',
    answer:
      'No. We handle the technical setup, architecture, and deployment. We explain the solution in simple English and provide clear guidance according to the agreed project scope.',
  },
  {
    id: 'faq-4',
    question: 'Can you automate WhatsApp Business?',
    answer:
      'Yes. Suitable workflows can be developed using supported official integrations, Meta Cloud API, and compliant webhook endpoints.',
  },
  {
    id: 'faq-5',
    question: 'How much does automation cost?',
    answer:
      'Pricing depends on workflow complexity, the number of integrations, AI usage, and your specific project requirements. We provide transparent, custom quotes tailored to your business needs.',
  },
  {
    id: 'faq-6',
    question: 'How long does a project take?',
    answer:
      'The timeline depends on project complexity. Simple starter workflows often take a few days, while multi-system connected workflows require more planning and testing. A clear timeline will be shared after reviewing your requirements.',
  },
  {
    id: 'faq-7',
    question: 'Do you provide support after deployment?',
    answer:
      'Yes. Post-launch support and maintenance options can be agreed upon before project delivery to ensure your workflows continue running smoothly.',
  },
  {
    id: 'faq-8',
    question: 'How do I start?',
    answer:
      'Submit a project enquiry form on this website or contact LEADX AUTOMATION directly via WhatsApp or email. We will review your requirements and schedule a discussion.',
  },
];
