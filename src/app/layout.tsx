import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import HeaderBase from '@/components/layout/HeaderBase';
import FooterBase from '@/components/layout/FooterBase';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import JsonLdSchema from '@/components/JsonLdSchema';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'SDLC — Simonia Development Learning Centre | NPO 301-712',
  description:
    'Empowering women and children across South Africa through M.E.E.T. — Mental Health (including SDLC Courage Crew™ for schools), Education, Entrepreneurship, and Technology.',
  keywords: [
    'SDLC',
    'Simonia Development Learning Centre',
    'NPO 301-712',
    'South Africa NPO',
    'KwaZulu-Natal NPO',
    'Ballito NPO',
    'Durban CSI Partnerships',
    'SDLC Courage Crew',
    'M.E.E.T. Framework',
    'Simonia Buys Marimuthoo',
  ],
  openGraph: {
    title: 'SDLC — Simonia Development Learning Centre (NPO 301-712)',
    description:
      'Empowering women and children through Mental Health, Education, Entrepreneurship, and Technology.',
    url: 'https://www.sdlc.org.za',
    siteName: 'Simonia Development Learning Centre',
    type: 'website',
  },
};

const npoSchema = {
  '@context': 'https://schema.org',
  '@type': ['NonprofitOrganization', 'EducationalOrganization'],
  name: 'Simonia Development Learning Centre (SDLC)',
  alternateName: 'SDLC NPO 301-712',
  nonprofitStatus: 'Registered South African NPO 301-712',
  url: 'https://www.sdlc.org.za',
  logo: 'https://www.sdlc.org.za/assets/sdlc-logo-transparent.png',
  email: 'info@sdlc.org.za',
  telephone: '+27-74-044-4098',
  founder: {
    '@type': 'Person',
    name: 'Simonia Buys Marimuthoo',
    jobTitle: 'Founder & Executive Director',
  },
  member: [
    {
      '@type': 'Person',
      name: 'Nicole Naidoo',
      jobTitle: 'Board Member',
    },
    {
      '@type': 'Person',
      name: 'Deandre Vanmali',
      jobTitle: 'Board Member',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  knowsAbout: [
    'Trauma-Informed School Mental Health (SDLC Courage Crew)',
    'Youth & Women Education and Literacy',
    'Women Entrepreneurship & Micro-Enterprise Development',
    'Digital Literacy & Responsible AI Education',
    'Corporate Social Investment (CSI/CSR) Partnerships',
  ],
  sponsor: {
    '@type': 'Organization',
    name: 'Digital Architect',
    url: 'https://www.digitalarchitectagency.co.za',
    description: 'Official Digital & Web Architecture Sponsor for SDLC NPO 301-712.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alice&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLdSchema schema={npoSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased">
        <AnalyticsProvider
          clarityId={siteConfig.analytics.clarityId}
          gaMeasurementId={siteConfig.analytics.gaMeasurementId}
        />
        <ThemeProvider>
          <HeaderBase />
          <main className="flex-1">{children}</main>
          <FooterBase />
        </ThemeProvider>
      </body>
    </html>
  );
}
