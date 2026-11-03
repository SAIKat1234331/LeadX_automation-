import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, generateWhatsAppLink, encodeFormData } from './automation';

test('validateContactForm flags missing required fields', () => {
  const result = validateContactForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.serviceRequired);
  assert.ok(result.errors.projectDescription);
  assert.ok(result.errors.consent);
});

test('validateContactForm rejects invalid emails', () => {
  const result = validateContactForm({
    fullName: 'Saikat Patra',
    email: 'not-an-email',
    serviceRequired: 'AI Workflow Automation',
    projectDescription: 'We need automation for our CRM pipeline.',
    consent: true,
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, 'Please provide a valid email address.');
});

test('validateContactForm accepts valid form submission', () => {
  const result = validateContactForm({
    fullName: 'Rajesh Sharma',
    email: 'rajesh@example.com',
    businessName: 'Sharma Real Estate',
    serviceRequired: 'AI Workflow Automation',
    projectDescription: 'Automate lead captures from WhatsApp into Google Sheets.',
    budgetRange: '₹15,000–₹30,000',
    contactMethod: 'WhatsApp',
    consent: true,
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('generateWhatsAppLink builds correct wa.me link with message', () => {
  const url = generateWhatsAppLink('+91 9332699034', 'Hello LEADX AUTOMATION');
  assert.equal(url, 'https://wa.me/919332699034?text=Hello%20LEADX%20AUTOMATION');
});

test('encodeFormData serializes form fields for Netlify', () => {
  const encoded = encodeFormData({
    'form-name': 'leadx-project-enquiry',
    name: 'Saikat',
    agree: true,
  });
  assert.equal(encoded, 'form-name=leadx-project-enquiry&name=Saikat&agree=true');
});
