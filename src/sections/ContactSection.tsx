import React, { useState, useEffect } from 'react';
import { ContactFormData, ValidationErrors } from '../types';
import { validateContactForm, encodeFormData, generateWhatsAppLink } from '../utils/automation';
import { COMPANY_INFO } from '../data/content';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

const SERVICE_OPTIONS = [
  'AI Workflow Automation',
  'WhatsApp Business Automation',
  'AI Lead Generation & CRM',
  'AI Agents',
  'Business Process Automation',
  'Custom AI Solution',
];

const BUDGET_OPTIONS = [
  'Under ₹5,000',
  '₹5,000–₹15,000',
  '₹15,000–₹30,000',
  '₹30,000+',
  'Not Sure Yet',
];

const CONTACT_METHODS = ['WhatsApp', 'Email', 'Phone Call'];

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    businessName: '',
    serviceRequired: initialService || '',
    projectDescription: '',
    budgetRange: 'Not Sure Yet',
    contactMethod: 'WhatsApp',
    consent: false,
    botField: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Sync initialService when user clicks a service/package CTA elsewhere
  useEffect(() => {
    if (initialService) {
      // Find closest match or default
      const matched = SERVICE_OPTIONS.find((s) =>
        s.toLowerCase().includes(initialService.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        serviceRequired: matched || initialService,
      }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear individual error on edit
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    // Bot honeypot check
    if (formData.botField) {
      console.warn('Bot submission blocked');
      return;
    }

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Netlify Form Submission
      const payload: Record<string, string | boolean | undefined> = {
        'form-name': 'leadx-project-enquiry',
        fullName: formData.fullName,
        email: formData.email,
        businessName: formData.businessName,
        serviceRequired: formData.serviceRequired,
        projectDescription: formData.projectDescription,
        budgetRange: formData.budgetRange,
        contactMethod: formData.contactMethod,
        consent: formData.consent,
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload),
      }).catch((err) => {
        // In local preview without Netlify CDN backend, fetch('/') might return 200 or 404, we log it
        console.info('Netlify POST payload dispatched:', payload);
      });

      // Save record in local storage for persistence & verification
      const existing = JSON.parse(
        localStorage.getItem('leadx_enquiries') || '[]'
      );
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('leadx_enquiries', JSON.stringify(existing));

      setSubmittedData({ ...formData });
      setIsSubmitting(false);
    } catch (err: any) {
      console.error('Submission error:', err);
      setServerError('An unexpected error occurred. Please reach out to us directly via WhatsApp or email.');
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      businessName: '',
      serviceRequired: '',
      projectDescription: '',
      budgetRange: 'Not Sure Yet',
      contactMethod: 'WhatsApp',
      consent: false,
      botField: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] border-t border-[#262626]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-[#262626] text-xs font-semibold text-[#00FF88] uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
            Let's Automate Your Business.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            Have a repetitive task or business workflow you want to simplify? Tell us about your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Credibility (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#121212] border border-[#262626] space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Direct Contact
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                  We review every enquiry directly. Founder Saikat Patra responds within 24 business hours.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                  <div className="w-9 h-9 rounded-lg bg-[#202020] flex items-center justify-center text-[#00FF88] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="block text-white font-medium hover:text-[#00FF88] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                  <div className="w-9 h-9 rounded-lg bg-[#202020] flex items-center justify-center text-[#00FF88] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase">
                      Direct WhatsApp / Phone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="block text-white font-medium hover:text-[#00FF88] transition-colors"
                    >
                      {COMPANY_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                  <div className="w-9 h-9 rounded-lg bg-[#202020] flex items-center justify-center text-[#00FF88] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] uppercase">
                      Headquarters
                    </span>
                    <span className="block text-white font-medium">
                      {COMPANY_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat Card */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Prefer Immediate WhatsApp Chat?</span>
                </div>
                <p className="text-zinc-300 text-[11px] leading-relaxed">
                  You can also start a direct conversation with founder Saikat Patra right on WhatsApp.
                </p>
                <a
                  href={generateWhatsAppLink(
                    COMPANY_INFO.phone,
                    COMPANY_INFO.whatsappDefaultMsg
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-semibold text-xs hover:bg-[#22bf5b] transition-colors mt-1"
                >
                  <span>Open WhatsApp (+91 9332699034)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Netlify Forms-compatible Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626]">
              {submittedData ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#00FF88]/10 border border-[#00FF88] text-[#00FF88] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,255,136,0.3)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Enquiry Received!
                    </h3>
                    <p className="mt-2 text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{submittedData.fullName}</span>. Your project details have been recorded. Founder Saikat Patra will review your requirements and reach out via {submittedData.contactMethod}.
                    </p>
                  </div>

                  {/* Submission Summary Pill */}
                  <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626] text-left text-xs text-[#A1A1AA] space-y-1.5 max-w-md mx-auto">
                    <div>
                      <span className="text-zinc-400">Service:</span>{' '}
                      <span className="text-white font-medium">{submittedData.serviceRequired}</span>
                    </div>
                    {submittedData.businessName && (
                      <div>
                        <span className="text-zinc-400">Business:</span>{' '}
                        <span className="text-white font-medium">{submittedData.businessName}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-zinc-400">Budget Range:</span>{' '}
                      <span className="text-[#00FF88] font-mono">{submittedData.budgetRange}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-xs font-semibold text-white hover:bg-[#202020] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={generateWhatsAppLink(
                        COMPANY_INFO.phone,
                        `Hello Saikat, I just submitted an inquiry for ${submittedData.serviceRequired}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd59] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Active Netlify Form */
                <form
                  name="leadx-project-enquiry"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Hidden inputs required for Netlify Form processing */}
                  <input type="hidden" name="form-name" value="leadx-project-enquiry" />
                  
                  {/* Honeypot field for bot spam detection */}
                  <div className="hidden">
                    <label htmlFor="bot-field">Do not fill this out if human:</label>
                    <input
                      id="bot-field"
                      name="botField"
                      value={formData.botField}
                      onChange={handleChange}
                    />
                  </div>

                  {serverError && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800 text-xs text-rose-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        Full Name <span className="text-[#00FF88]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0B] border text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-[#262626] focus:border-[#00FF88]'
                        }`}
                        required
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        Email Address <span className="text-[#00FF88]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0B] border text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-[#262626] focus:border-[#00FF88]'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Name (Optional) */}
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        Business Name <span className="text-zinc-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Marketing Pvt Ltd"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0B] border border-[#262626] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#00FF88] transition-colors"
                      />
                    </div>

                    {/* Service Required (Dropdown) */}
                    <div>
                      <label
                        htmlFor="serviceRequired"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        Service Required <span className="text-[#00FF88]">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className={`w-full px-3 py-2.5 rounded-lg bg-[#0B0B0B] border text-xs text-white focus:outline-none transition-colors ${
                          errors.serviceRequired
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-[#262626] focus:border-[#00FF88]'
                        }`}
                        required
                      >
                        <option value="" disabled>
                          Select an automation service
                        </option>
                        {SERVICE_OPTIONS.map((srv) => (
                          <option key={srv} value={srv} className="bg-[#121212]">
                            {srv}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p className="mt-1 text-[11px] text-rose-400">
                          {errors.serviceRequired}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Budget Dropdown */}
                    <div>
                      <label
                        htmlFor="budgetRange"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        Budget Range <span className="text-zinc-500">(Optional)</span>
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#0B0B0B] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b} className="bg-[#121212]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label
                        htmlFor="contactMethod"
                        className="block text-xs font-medium text-zinc-300 mb-1.5"
                      >
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#0B0B0B] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#00FF88] transition-colors"
                      >
                        {CONTACT_METHODS.map((method) => (
                          <option key={method} value={method} className="bg-[#121212]">
                            {method}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      Project Description <span className="text-[#00FF88]">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Briefly describe what tasks you want to automate, what software you currently use (e.g. Sheets, CRM, WhatsApp), and your timeline."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0B0B] border text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                        errors.projectDescription
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#262626] focus:border-[#00FF88]'
                      }`}
                      required
                    />
                    {errors.projectDescription && (
                      <p className="mt-1 text-[11px] text-rose-400">
                        {errors.projectDescription}
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-0.5 rounded border-[#262626] bg-[#0B0B0B] text-[#00FF88] focus:ring-[#00FF88] focus:ring-offset-0"
                        required
                      />
                      <span className="text-xs text-[#A1A1AA]">
                        I agree to be contacted by LEADX AUTOMATION regarding my project enquiry. We respect your privacy and never send unsolicited spam.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-[11px] text-rose-400">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#00FF88] text-[#0B0B0B] font-bold text-sm transition-all duration-200 hover:bg-[#00e077] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Project Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#71717A] pt-1">
                    Direct founder review • Non-binding consultation • Netlify Forms Verified
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
