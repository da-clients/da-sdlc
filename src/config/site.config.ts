export const siteConfig = {
  name: "SDLC",
  legalName: "Simonia Development Learning Centre",
  npoNumber: "NPO 301-712",
  tagline: "Empowering Women & Children Through M.E.E.T. — Mental Health, Education, Entrepreneurship & Technology.",
  domain: "https://www.sdlc.org.za",
  email: "info@sdlc.org.za",
  phoneDisplay: "+27 74 044 4098",
  phoneAltDisplay: "+27 82 884 1216",
  whatsappNumber: "27740444098",
  location: "Ballito, Durban & KwaZulu-Natal, South Africa",
  analytics: {
    // Ready for Samuel's Microsoft Clarity & Google Analytics 4 IDs
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || "",
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
  colors: {
    mentalHealth: "#84CEE2",     // Sky Blue (Sticker 4)
    education: "#DA8688",        // Coral Pink (Sticker 3)
    entrepreneurship: "#90D1BB", // Sage Mint Green (Sticker 1)
    technology: "#F2CB6F",       // Warm Gold Yellow (Sticker 2)
    csi: "#A4A5C6",              // Soft Lavender Purple (Canva 5th swatch)
  },
  banking: {
    bankName: "Standard Bank",
    accountHolder: "Simonia Development & Learning Centre",
    npoReg: "301-712",
    accountNumber: "10216589418",
    branchCode: "000205",
    swiftCode: "SBZAJJ",
    snapScanUrl: "https://pos.snapscan.io/qr/Kwc3UjHr",
  },
  sponsors: [
    {
      name: "eThekwini Municipality",
      role: "Municipal Youth & Community Partner",
      logo: "/assets/sponsors/ethekwini.jpg",
    },
    {
      name: "Enterprise iLembe",
      role: "Regional Development Partner",
      logo: "/assets/sponsors/ilembe.png",
    },
    {
      name: "Gauteng Tech Unit",
      role: "Technology & Innovation Partner",
      logo: "/assets/sponsors/gauteng-tech.jpg",
    },
    {
      name: "Buzz Barn (Fairview Estate, Ballito)",
      role: "Equine & Somatic Venue Partner",
      logo: "/assets/sponsors/buzz-barn.jpg",
    },
    {
      name: "Print Centre",
      role: "Print & Branding Sponsor",
      logo: "/assets/sponsors/print-centre.png",
    },
    {
      name: "Palesa Pads",
      role: "Menstrual Dignity Campaign Partner",
      logo: "/assets/sponsors/palesa-pads-qr.jpg",
    },
    {
      name: "Digital Architect",
      role: "Official Digital & Web Architecture Sponsor",
      logo: "/assets/sponsors/digital-architect.png",
      url: "https://www.digitalarchitectagency.co.za",
    },
  ],
};
