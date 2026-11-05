import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  generateWhatsAppLink,
  encodeFormData,
  GOOGLE_APPS_SCRIPT_URL,
  GOOGLE_SHEET_CONFIG,
  mapFormDataToSheetPayload,
} from './automation';

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

test('GOOGLE_APPS_SCRIPT_URL matches the Google Apps Script Web App endpoint', () => {
  assert.equal(
    GOOGLE_APPS_SCRIPT_URL,
    'https://script.google.com/macros/s/AKfycbzjLB66ezKmNi4jcUOD8iuln-17edxd_l8zNMFQnfwioRASk0hXGRkCoR7PgJ6DjVDxRQ/exec'
  );
});

test('GOOGLE_SHEET_CONFIG matches Spreadsheet ID 10rXeBUuMo0nE3pL0YLyff75YhvmvjdLlea9nkUvxe88 and Row 4', () => {
  assert.equal(GOOGLE_SHEET_CONFIG.spreadsheetId, '10rXeBUuMo0nE3pL0YLyff75YhvmvjdLlea9nkUvxe88');
  assert.equal(GOOGLE_SHEET_CONFIG.tabName, 'Sheet1');
  assert.equal(GOOGLE_SHEET_CONFIG.headerRow, 4);
});

test('mapFormDataToSheetPayload maps all 11 enquiry fields and row 4 header aliases', () => {
  const payload = mapFormDataToSheetPayload({
    fullName: '  Amitabh Roy  ',
    email: '  amitabh@domain.com  ',
    phone: '  +91 98765 43210  ',
    businessName: '  Roy Logistics  ',
    businessType: 'E-commerce & Retail',
    serviceRequired: 'AI Workflow Automation',
    projectDescription: '  Automate dispatch notifications to drivers and dispatchers.  ',
    currentTools: 'Google Sheets, WhatsApp Business API',
    timeline: 'Within 2-4 weeks',
    budgetRange: '₹15,000–₹30,000',
    contactMethod: 'WhatsApp',
    consent: true,
  });

  // Original camelCase fields
  assert.equal(payload.fullName, 'Amitabh Roy');
  assert.equal(payload.email, 'amitabh@domain.com');
  assert.equal(payload.phone, '+91 98765 43210');
  assert.equal(payload.businessName, 'Roy Logistics');
  assert.equal(payload.businessType, 'E-commerce & Retail');
  assert.equal(payload.serviceRequired, 'AI Workflow Automation');
  assert.equal(payload.projectDescription, 'Automate dispatch notifications to drivers and dispatchers.');
  assert.equal(payload.currentTools, 'Google Sheets, WhatsApp Business API');
  assert.equal(payload.timeline, 'Within 2-4 weeks');
  assert.equal(payload.budgetRange, '₹15,000–₹30,000');
  assert.equal(payload.contactMethod, 'WhatsApp');
  assert.equal(payload.consent, 'Yes');

  // Sheet configuration
  assert.equal(payload.spreadsheetId, '10rXeBUuMo0nE3pL0YLyff75YhvmvjdLlea9nkUvxe88');
  assert.equal(payload.sheetTab, 'Sheet1');
  assert.equal(payload.headerRow, 4);

  // Exact 11 Row 4 Column Header Mappings
  assert.equal(payload['Full Name'], 'Amitabh Roy');
  assert.equal(payload['Email Address'], 'amitabh@domain.com');
  assert.equal(payload['Phone / WhatsApp'], '+91 98765 43210');
  assert.equal(payload['Business Name'], 'Roy Logistics');
  assert.equal(payload['Business Type'], 'E-commerce & Retail');
  assert.equal(payload['Service Required'], 'AI Workflow Automation');
  assert.equal(payload['Budget Range'], '₹15,000–₹30,000');
  assert.equal(payload['Preferred Contact Method'], 'WhatsApp');
  assert.equal(payload['Project Description'], 'Automate dispatch notifications to drivers and dispatchers.');
  assert.equal(payload['Current Software / Tools'], 'Google Sheets, WhatsApp Business API');
  assert.equal(payload['Project Timeline'], 'Within 2-4 weeks');

  assert.equal(payload['Consent'], 'Yes');
  assert.ok(payload.timestamp);
  assert.ok(payload['Date']);
});


