import { ContactFormData, ValidationErrors } from '../types';

/**
 * Validates the contact enquiry form according to project rules.
 */
export function validateContactForm(data: Partial<ContactFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  // Full Name
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  // Service Required
  if (!data.serviceRequired || data.serviceRequired.trim() === '') {
    errors.serviceRequired = 'Please select a service for your project.';
  }

  // Project Description
  if (!data.projectDescription || data.projectDescription.trim().length < 10) {
    errors.projectDescription = 'Please provide a brief description of your project (at least 10 characters).';
  }

  // Consent checkbox
  if (!data.consent) {
    errors.consent = 'You must agree to be contacted regarding your project enquiry.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an official WhatsApp click-to-chat URL with pre-filled message.
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  message: string
): string {
  // Strip non-digit characters for clean wa.me phone parameter
  const cleanedPhone = phoneNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanedPhone}?text=${encodedText}`;
}

/**
 * Encodes object to application/x-www-form-urlencoded format for Netlify forms submission.
 */
export function encodeFormData(data: Record<string, string | boolean | undefined>): string {
  return Object.keys(data)
    .filter((key) => data[key] !== undefined)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(String(data[key]))}`)
    .join('&');
}

export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzjLB66ezKmNi4jcUOD8iuln-17edxd_l8zNMFQnfwioRASk0hXGRkCoR7PgJ6DjVDxRQ/exec';

/**
 * Target Google Sheet metadata for LEADX AUTOMATION leads
 */
export const GOOGLE_SHEET_CONFIG = {
  spreadsheetId: '10rXeBUuMo0nE3pL0YLyff75YhvmvjdLlea9nkUvxe88',
  spreadsheetName: 'leadx automation',
  sheetTab: 'Sheet1',
  tabName: 'Sheet1',
  sheetName: 'Sheet1',
  sheet: 'Sheet1',
  headerRow: 4,
  headersRow: 4,
};

/**
 * Maps the website's actual enquiry form field names to the Google Sheet column headers
 * (located in Row 4 of Sheet1 in spreadsheet 10rXeBUuMo0nE3pL0YLyff75YhvmvjdLlea9nkUvxe88).
 */
export function mapFormDataToSheetPayload(
  formData: ContactFormData
): Record<string, any> {
  const trimmedName = (formData.fullName || '').trim();
  const trimmedEmail = (formData.email || '').trim();
  const trimmedPhone = (formData.phone || '').trim();
  const trimmedBusiness = (formData.businessName || '').trim() || 'N/A';
  const trimmedBusinessType = (formData.businessType || '').trim() || 'General Business';
  const service = formData.serviceRequired || '';
  const trimmedDescription = (formData.projectDescription || '').trim();
  const trimmedTools = (formData.currentTools || '').trim() || 'None specified';
  const trimmedTimeline = (formData.timeline || '').trim() || 'Flexible';
  const budget = formData.budgetRange || 'Not Sure Yet';
  const contactMethod = formData.contactMethod || 'WhatsApp';
  const consentStr = formData.consent ? 'Yes' : 'No';

  const nowIso = new Date().toISOString();
  const istDateString = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
  const istTimeString = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
  const istFullString = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return {
    // 1. Exact website form field names (original camelCase)
    fullName: trimmedName,
    email: trimmedEmail,
    phone: trimmedPhone,
    businessName: trimmedBusiness,
    businessType: trimmedBusinessType,
    serviceRequired: service,
    budgetRange: budget,
    contactMethod: contactMethod,
    projectDescription: trimmedDescription,
    currentTools: trimmedTools,
    timeline: trimmedTimeline,
    consent: consentStr,

    // 2. Google Sheet & Tab Identifiers (Row 4 header reference)
    spreadsheetId: GOOGLE_SHEET_CONFIG.spreadsheetId,
    sheetTab: GOOGLE_SHEET_CONFIG.sheetTab,
    tabName: GOOGLE_SHEET_CONFIG.tabName,
    sheetName: GOOGLE_SHEET_CONFIG.sheetName,
    sheet: GOOGLE_SHEET_CONFIG.sheet,
    headerRow: GOOGLE_SHEET_CONFIG.headerRow,
    headersRow: GOOGLE_SHEET_CONFIG.headersRow,

    // 3. Row 4 Column Header Mappings matching the user's exact specification
    // Full Name
    'Full Name': trimmedName,
    'Name': trimmedName,
    'FullName': trimmedName,
    'Client Name': trimmedName,
    'Lead Name': trimmedName,
    'full_name': trimmedName,

    // Email Address
    'Email Address': trimmedEmail,
    'Email': trimmedEmail,
    'Email ID': trimmedEmail,
    'email_address': trimmedEmail,

    // Phone / WhatsApp
    'Phone / WhatsApp': trimmedPhone,
    'Phone': trimmedPhone,
    'WhatsApp': trimmedPhone,
    'Phone/WhatsApp': trimmedPhone,
    'Contact Number': trimmedPhone,
    'Mobile': trimmedPhone,
    'phone_number': trimmedPhone,

    // Business Name
    'Business Name': trimmedBusiness,
    'Company': trimmedBusiness,
    'Company Name': trimmedBusiness,
    'Business': trimmedBusiness,
    'Organization': trimmedBusiness,
    'business_name': trimmedBusiness,

    // Business Type
    'Business Type': trimmedBusinessType,
    'Industry': trimmedBusinessType,
    'Type of Business': trimmedBusinessType,
    'business_type': trimmedBusinessType,

    // Service Required
    'Service Required': service,
    'Service': service,
    'Services': service,
    'Service Needed': service,
    'Requirement': service,
    'service_required': service,

    // Budget Range
    'Budget Range': budget,
    'Budget': budget,
    'Expected Budget': budget,
    'Investment': budget,
    'budget_range': budget,

    // Preferred Contact Method
    'Preferred Contact Method': contactMethod,
    'Contact Method': contactMethod,
    'Preferred Contact': contactMethod,
    'Communication': contactMethod,
    'contact_method': contactMethod,

    // Project Description
    'Project Description': trimmedDescription,
    'Description': trimmedDescription,
    'Message': trimmedDescription,
    'Project Details': trimmedDescription,
    'Requirements': trimmedDescription,
    'Details': trimmedDescription,
    'project_description': trimmedDescription,

    // Current Software / Tools
    'Current Software / Tools': trimmedTools,
    'Current Software': trimmedTools,
    'Current Tools': trimmedTools,
    'Software / Tools': trimmedTools,
    'Tools': trimmedTools,
    'current_software': trimmedTools,
    'current_tools': trimmedTools,

    // Project Timeline
    'Project Timeline': trimmedTimeline,
    'Timeline': trimmedTimeline,
    'Expected Timeline': trimmedTimeline,
    'project_timeline': trimmedTimeline,

    // Consent
    'Consent': consentStr,
    'Agreed': consentStr,
    'consent_given': consentStr,

    // Timestamps
    timestamp: nowIso,
    submittedAt: istFullString,
    'Timestamp': nowIso,
    'Date': istDateString,
    'Time': istTimeString,
    'Date & Time': istFullString,
    'Submitted At': istFullString,
    'Submission Date': istDateString,
    'Status': 'New Lead',
  };
}

/**
 * Sends contact enquiry data to the Google Apps Script endpoint using POST, mode: 'no-cors', and text/plain;charset=utf-8 JSON payload.
 * Includes abort timeout to avoid hanging requests.
 */
export async function submitToGoogleScript(
  endpointUrl: string,
  payload: Record<string, any>,
  timeoutMs: number = 15000
): Promise<boolean> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    await fetch(endpointUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return true;
  } finally {
    clearTimeout(timeoutId);
  }
}

