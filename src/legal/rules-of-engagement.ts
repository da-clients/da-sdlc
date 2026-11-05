import { SiteConfig, BusinessArchetype } from "../../site.config";
import { LegalDocument } from "./legal.types";

export function generateRulesOfEngagement(config: SiteConfig, overrideArchetype?: BusinessArchetype): LegalDocument {
  const archetype = overrideArchetype || config.business.archetype;
  const { business, contact } = config;

  if (archetype === "consulting") {
    return {
      title: "Consulting & Professional Services Rules of Engagement",
      subtitle: `Commercial standards and project protocols for engagements with ${business.name}`,
      lastUpdated: "September 2026",
      effectiveDate: "1 September 2026",
      sections: [
        {
          title: "1. Engagement Initiation & Deposit",
          content: [
            `All consulting mandates, architectural plans, and creative engagements commence upon receipt of a signed proposal and a 50% upfront project commitment deposit.`,
            `The initial deposit secures dedicated studio scheduling, research allocations, and immediate phase-one milestone kick-off.`,
          ],
        },
        {
          title: "2. Milestone Approvals & Revisions",
          content: [
            `Projects advance through sequential milestone reviews. Clients receive a structured review window (typically 5 business days) to consolidate feedback.`,
            `Each project milestone includes up to two comprehensive rounds of revisions aligned with the approved brief. Scope additions exceeding the original mandate are estimated and scheduled as separate deliverables.`,
          ],
        },
        {
          title: "3. Intellectual Property Handover",
          content: [
            `All preliminary sketches, draft documentation, source files, and working concepts remain the exclusive intellectual property of ${business.name} during the execution cycle.`,
            `Full commercial copyright, production deliverables, and deployment rights transfer to the client upon settlement of the final project invoice.`,
          ],
        },
        {
          title: "4. Communication Channels & Turnaround",
          content: [
            `Official project directives, brief amendments, and milestone sign-offs are conducted via email or documented project dashboards to maintain an accurate audit trail.`,
            `Our team provides regular progress updates during standard office hours (${contact.operatingHours}).`,
          ],
        },
      ],
    };
  }

  if (archetype === "retail") {
    return {
      title: "Retail & Product Fulfillment Rules of Engagement",
      subtitle: `Order processing, dispatch, and return standards for ${business.name}`,
      lastUpdated: "September 2026",
      effectiveDate: "1 September 2026",
      sections: [
        {
          title: "1. Order Confirmation & Fulfillment",
          content: [
            `Orders are reserved upon receipt of payment confirmation. Instant EFT or card payments are processed immediately; standard bank transfers are fulfilled upon ledger clearance.`,
            `Custom crafted items or personalized orders enter production within 24 hours of final specification approval.`,
          ],
        },
        {
          title: "2. Dispatch, Courier & Collection",
          content: [
            `Regional delivery across ${contact.serviceArea} is handled via dedicated courier partners. Tracking references are shared via SMS and WhatsApp upon dispatch.`,
            `For local studio collections, appointments must be scheduled during operating hours (${contact.operatingHours}) to ensure orders are packaged and ready.`,
          ],
        },
        {
          title: "3. Returns, Exchanges & Consumer Protection Act (CPA)",
          content: [
            `In accordance with South Africa's Consumer Protection Act (CPA), standard off-the-shelf items may be returned within 10 business days in their original packaging and unused condition.`,
            `Custom manufactured or bespoke commissions are crafted to exact client approvals and are backed by our workmanship and material replacement guarantee.`,
          ],
        },
      ],
    };
  }

  // Default: 'trade' (Contractors, Electricians, Plumbers, Air conditioning)
  return {
    title: "Trade Contractor Rules of Engagement",
    subtitle: `On-site protocols, call-out fee standards, and safety requirements for ${business.name}`,
    lastUpdated: "September 2026",
    effectiveDate: "1 September 2026",
    sections: [
      {
        title: "1. Call-Out & Diagnostic Assessment Protocol",
        content: [
          `Our certified technicians arrive equipped for immediate on-site fault assessment, safety isolation, and technical diagnosis.`,
          `A standard call-out inspection fee applies to cover vehicle dispatch and certified diagnostic testing. If the recommended repair quotation is accepted and performed during the same visit, the call-out fee is credited toward the total service value.`,
        ],
      },
      {
        title: "2. Emergency Dispatch & Rapid Response",
        content: [
          `Emergency requests receive priority dispatch across ${contact.serviceArea}. We aim to arrive on-site within 45 to 60 minutes, subject to active traffic and estate access clearances.`,
          `Technicians maintain live WhatsApp communication with clients, sharing real-time ETA updates upon departure.`,
        ],
      },
      {
        title: "3. Cancellation & Rescheduling Courtesy",
        content: [
          `We recognize that schedules change. To respect dispatch allocations, appointments may be rescheduled or cancelled without charge up to 1 hour prior to the scheduled technician departure.`,
          `Cancellations made after technicians have arrived at the premises or en route incur the standard vehicle mobilization fee.`,
        ],
      },
      {
        title: "4. Site Safety & Property Access",
        content: [
          `Clients must ensure safe and unimpeded access to work areas, DB boards, geysers, roof spaces, or outdoor pump stations.`,
          `Domestic pets must be secured in a separate area for both animal and technician safety while high-voltage testing or hazardous repairs take place.`,
        ],
      },
      {
        title: "5. Variations & Unforeseen Defects",
        content: [
          `Should opening walls, ceilings, or conduit reveal concealed hazardous wiring, non-compliant previous installations, or hidden structural damage, technicians immediately pause works.`,
          `A clear photographic report and revised variation quotation are submitted to the client via WhatsApp for explicit approval before additional works proceed.`,
        ],
      },
      {
        title: "6. Payment Settlement & Compliance Certification",
        content: [
          `Upon completion of works and demonstration of functional restoration, payment is settled immediately on-site via mobile card terminal, instant EFT, or pre-arranged account terms.`,
          `Official Certificates of Compliance (COC) are signed by our licensed master technician and issued digitally within 24 hours of invoice settlement.`,
        ],
      },
    ],
  };
}
