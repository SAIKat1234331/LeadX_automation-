import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { LxLogo } from '../components/LxLogo';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  onBackToHome: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#00FF88] hover:underline mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to LEADX AUTOMATION Home</span>
        </button>

        {/* Header */}
        <div className="border-b border-[#262626] pb-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <LxLogo size={36} showText={false} />
            <span className="text-xs font-mono text-[#00FF88] uppercase tracking-wider">
              Legal Documentation
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs text-[#A1A1AA]">
            Effective Date: November 3, 2026 • Last Updated: 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-[#A1A1AA] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the LEADX AUTOMATION website or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              2. Scope of Services & Project Proposals
            </h2>
            <p>
              LEADX AUTOMATION provides custom workflow engineering, AI assistant integration, WhatsApp communication workflows, and digital business process automation. All project deliverables, timelines, and milestones are governed by a mutually agreed proposal or statement of work before implementation begins.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              3. Third-Party Platforms & API Fees
            </h2>
            <p>
              Workflow automation relies upon third-party APIs (including Meta WhatsApp Business Cloud API, Google Workspace, OpenAI, Anthropic, or cloud hosting servers like n8n). Unless explicitly bundled in a signed agreement:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
              <li>Clients are responsible for their own third-party API subscription costs and usage quotas.</li>
              <li>LEADX AUTOMATION is not liable for service outages, rate limits, or policy updates enacted by third-party platforms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              4. Client Cooperation & Responsibilities
            </h2>
            <p>
              Successful automation deployment requires prompt client cooperation, including timely provision of required access credentials, verification test data, and review feedback. Delays in client feedback may adjust the scheduled delivery milestone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              5. Intellectual Property
            </h2>
            <p>
              Upon final settlement of project invoices, the client retains full ownership of their custom workflows, private business data, and system configurations created specifically for their deployment. LEADX AUTOMATION retains the right to utilize generalized, non-confidential modular architectural patterns in future non-competing implementations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              6. Limitation of Liability
            </h2>
            <p>
              While we test all automation workflows with rigorous edge-case validation, LEADX AUTOMATION cannot guarantee uninterrupted uptime or specific business revenue figures. In no event shall LEADX AUTOMATION or founder Saikat Patra be liable for indirect, incidental, or consequential damages resulting from third-party server interruptions or unexpected API deprecation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              7. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, with jurisdiction situated in West Bengal, India.
            </p>
          </section>
        </div>

        {/* Bottom Action */}
        <div className="mt-12 pt-8 border-t border-[#262626]">
          <button
            type="button"
            onClick={onBackToHome}
            className="px-5 py-2.5 rounded-lg bg-[#00FF88] text-[#0B0B0B] font-bold text-xs hover:bg-[#00e077] transition-colors cursor-pointer"
          >
            Back to Website
          </button>
        </div>
      </div>
    </div>
  );
};
