import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { LxLogo } from '../components/LxLogo';
import { ArrowLeft, ShieldCheck, Mail, Lock, EyeOff } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBackToHome,
}) => {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[#A1A1AA]">
            Effective Date: November 3, 2026 • Last Updated: 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-[#A1A1AA] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              1. Introduction
            </h2>
            <p>
              LEADX AUTOMATION ("we", "our", or "us"), founded by Saikat Patra and based in West Bengal, India, respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or submit an enquiry for our AI automation and business process services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              2. Information We Collect
            </h2>
            <p>We only collect personal information that you voluntarily provide to us when submitting a project enquiry form or communicating via WhatsApp or email. This includes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
              <li>Contact Details: Full Name, Email Address, Phone/WhatsApp Number.</li>
              <li>Business Information: Business Name, current tools used (Google Sheets, CRM, WhatsApp).</li>
              <li>Project Details: Description of tasks you wish to automate, budget preferences, and operational objectives.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information solely for business purposes, specifically to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
              <li>Evaluate your workflow requirements and prepare a custom proposal or quote.</li>
              <li>Communicate directly with you regarding your project enquiry.</li>
              <li>Deliver agreed automation workflows, documentation, and technical support.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p>
              We do not sell, rent, trade, or monetize your personal information to third-party data brokers or marketing lists under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              4. Third-Party Services & Integrations
            </h2>
            <p>
              In delivering automation workflows, LEADX AUTOMATION may configure supported third-party APIs and services (such as Meta WhatsApp Cloud API, Google Workspace, n8n, OpenAI, or Gemini AI). Client credentials and API keys remain the property of the client and are handled with strict confidentiality. You are subject to the respective terms and privacy policies of those third-party providers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard technical measures to prevent unauthorized access, alteration, or disclosure of your information. Contact submissions through our website are secured via HTTPS encryption and handled via Netlify Forms infrastructure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">
              6. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or wish to have your submitted details deleted, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] text-xs text-zinc-300 space-y-1 font-mono">
              <p className="text-white font-bold">{COMPANY_INFO.name}</p>
              <p>Founder: {COMPANY_INFO.founder}</p>
              <p>Location: {COMPANY_INFO.location}</p>
              <p>Email: {COMPANY_INFO.email}</p>
              <p>Phone: {COMPANY_INFO.formattedPhone}</p>
            </div>
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
