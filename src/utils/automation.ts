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
