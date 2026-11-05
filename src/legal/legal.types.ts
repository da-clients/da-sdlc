import { SiteConfig, BusinessArchetype } from "../../site.config";

export interface LegalSection {
  title: string;
  content: string[];
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: LegalSection[];
}
