import { SiteConfig } from "../../site.config";
import { LegalDocument } from "./legal.types";

export function generateTermsOfService(config: SiteConfig): LegalDocument {
  const { business, contact, legal } = config;

  return {
    title: "Terms and Conditions of Service",
    subtitle: `Operating agreements governing services provided by ${business.name}`,
    lastUpdated: "September 2026",
    effectiveDate: "1 September 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: [
          `By browsing this website, requesting a quotation, or confirming an appointment with ${business.name} ("the Company"), you agree to abide by these Terms and Conditions.`,
          `These terms operate alongside South Africa's Consumer Protection Act No. 68 of 2008 (CPA) and common law principles governing commercial engagements.`,
        ],
      },
      {
        title: "2. Quotations and Service Scope",
        content: [
          `Written quotations issued by ${business.name} remain valid for 14 calendar days from date of issue, unless explicitly agreed otherwise in writing.`,
          `Quotations are formulated on the visible facts, site access conditions, and specifications disclosed during initial assessment. Unforeseen structural, electrical, or municipal variables discovered during execution will be quoted as approved variations prior to commencement.`,
          `Written acceptance via WhatsApp, email, or digital signature constitutes a binding contract of engagement.`,
        ],
      },
      {
        title: "3. Appointments and Access",
        content: [
          `Clients agree to provide safe, reasonable access to the property, electricity points, and relevant installations at the agreed scheduled time.`,
          `If access requires complex gate clearances, security permits, or estate biometric credentials, the client is responsible for pre-authorizing our team prior to arrival.`,
        ],
      },
      {
        title: "4. Payment Terms and Invoicing",
        content: [
          `Invoices are issued upon completion of scheduled works or milestone stages specified in the project scope.`,
          `Unless alternative commercial credit arrangements have been established in writing, payments are due upon invoice presentation via EFT, verified instant card payment, or approved digital portal.`,
          `All statutory compliance documentation, warranty certificates, and ownership of newly installed fixtures remain reserved by ${business.name} until settlement is finalized.`,
        ],
      },
      {
        title: "5. Workmanship Guarantees and Materials",
        content: [
          `We uphold a strict standard of technical excellence. All workmanship completed by our certified personnel carries a comprehensive 12-month installation guarantee.`,
          `Materials, appliances, inverters, and hardware supplied by third-party manufacturers carry their respective factory warranties, supported by our installation compliance certificates.`,
        ],
      },
      {
        title: "6. Limitation of Liability",
        content: [
          `${business.name} maintains comprehensive public liability insurance. We take every precaution to safeguard your premises and assets during works.`,
          `Liability for pre-existing system defects, faulty unmaintained historical wiring/plumbing, or municipal utility surges outside the direct scope of our work is excluded to the extent permitted by South African law.`,
        ],
      },
      {
        title: "7. Governing Law",
        content: [
          `These terms are governed exclusively by the laws of the Republic of South Africa.`,
          `Any disputes arising out of service engagements shall be resolved in accordance with applicable South African consumer and commercial law.`,
        ],
      },
      {
        title: "8. Inquiries and Official Notices",
        content: [
          `All legal and formal communications should be directed to:`,
          `• Company: ${business.legalName}`,
          `• Registration: ${business.regNumber || "South African Registered Entity"}`,
          `• Address: ${legal.registeredAddress}`,
          `• Email: ${contact.email}`,
          `• Phone: ${contact.phoneFormatted}`,
        ],
      },
    ],
  };
}
