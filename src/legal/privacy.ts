import { SiteConfig } from "../../site.config";
import { LegalDocument } from "./legal.types";

export function generatePrivacyPolicy(config: SiteConfig): LegalDocument {
  const { business, contact, legal } = config;

  return {
    title: "Protection of Personal Information Policy (POPIA)",
    subtitle: `Compliance commitment for ${business.name}`,
    lastUpdated: "September 2026",
    effectiveDate: "1 September 2026",
    sections: [
      {
        title: "1. Purpose and Scope",
        content: [
          `${business.name} ("we", "us", or "our") respects your privacy and is committed to processing personal information in accordance with South Africa's Protection of Personal Information Act No. 4 of 2013 (POPIA).`,
          `This policy outlines how we collect, store, safeguard, and utilize information gathered through our website, WhatsApp business communications, service inquiries, and on-site consultations.`,
        ],
      },
      {
        title: "2. Information We Collect",
        content: [
          `We collect information necessary to provide quotes, perform services, and ensure seamless communication:`,
          `• Contact details: Full name, phone number, WhatsApp contact number, and email address.`,
          `• Physical address and location details: Street address, suburb, complex/estate name, and gate access requirements for on-site appointments.`,
          `• Project and technical specifications: Site photos, scope descriptions, electrical/plumbing histories, or project briefs voluntarily submitted.`,
          `• Billing information: Legal entity names, registration numbers, and VAT identifiers for compliant tax invoicing.`,
        ],
      },
      {
        title: "3. Lawful Basis and Purpose of Processing",
        content: [
          `Your information is processed strictly for legitimate operational purposes:`,
          `• Generating accurate quotations and service estimates.`,
          `• Scheduling on-site assessments and dispatching qualified personnel.`,
          `• Direct communication via phone, SMS, and WhatsApp regarding appointment status and project updates.`,
          `• Issuing tax invoices, warranty certificates, and statutory documentation (such as Certificates of Compliance).`,
          `• Complying with South African statutory and tax record-keeping requirements.`,
        ],
      },
      {
        title: "4. Information Security and Retention",
        content: [
          `We implement appropriate technical, administrative, and organizational safeguards to protect personal information against unauthorized access, loss, or alteration.`,
          `Access to client details is strictly restricted to authorized staff and technicians directly involved in fulfilling your request.`,
          `Personal records are retained only for as long as necessary to fulfill service agreements, provide warranty continuity, and satisfy South African revenue regulations.`,
        ],
      },
      {
        title: "5. Third-Party Sharing",
        content: [
          `We maintain client confidentiality. We do not sell, rent, or trade your personal information.`,
          `Information is only shared with verified operational service partners (such as municipal inspection authorities, specialized sub-contractors, or secure payment gateways) strictly when required to complete your project.`,
        ],
      },
      {
        title: "6. Your Statutory Rights as a Data Subject",
        content: [
          `Under POPIA, you maintain full rights regarding your personal information, including:`,
          `• The right to request confirmation of the personal records we hold.`,
          `• The right to request correction or updating of inaccurate information.`,
          `• The right to request deletion of personal records, subject to statutory retention obligations.`,
          `• The right to lodge an inquiry or complaint with the Information Regulator of South Africa.`,
        ],
      },
      {
        title: "7. Information Officer Contact Details",
        content: [
          `For questions, data access requests, or information updates, please direct inquiries to our designated Information Officer:`,
          `• Officer Name: ${legal.popiaOfficerName}`,
          `• Email: ${legal.popiaOfficerEmail}`,
          `• Physical Address: ${legal.registeredAddress}`,
          `• Direct Line: ${contact.phoneFormatted}`,
        ],
      },
    ],
  };
}
