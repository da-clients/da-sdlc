export const siteConfig = {
  name: "SDLC",
  legalName: "Simonia Development Learning Centre",
  npoNumber: "NPO 301-712",
  tagline: "Empowering Women & Children Through M.E.E.T. — Mental Health, Education, Entrepreneurship & Technology.",
  domain: "https://da-sdlc.vercel.app",
  email: "Info@sdlc.org.za",
  phoneDisplay: "074 044 4098",
  phoneAltDisplay: "+27 74 044 4098",
  whatsappNumber: "27740444098",
  location: "KwaZulu-Natal & Gauteng (National NPO Footprint), South Africa",
  socials: {
    tiktok: "https://www.tiktok.com/@sdlc.npo",
    instagram: "https://www.instagram.com/sdlc.npo",
    facebook: "https://www.facebook.com/share/1BBMquChJQ/",
  },
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
    accountType: "Business Current Account",
    npoReg: "301-712",
    accountNumber: "10216589418",
    branchName: "Universal Branch",
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
      name: "Buzz Barn (Fairview Estate)",
      role: "Equine & Somatic Venue Partner",
      logo: "/assets/sponsors/buzz-barn.jpg",
    },
    {
      name: "GTU",
      role: "Gauteng Tactical Unit • Community Safety Partner",
      logo: "/assets/sponsors/gauteng-tech.jpg",
    },
    {
      name: "TNT Creative Solutions",
      role: "Community Sports & Event Co-Host",
      logo: "/assets/sponsors/tnt-creative.jpg",
      url: "https://tntcreative.co.za",
    },
    {
      name: "Print Centre",
      role: "Print & Branding Sponsor",
      logo: "/assets/sponsors/print-centre.png",
    },
    {
      name: "Palesa Pads",
      role: "Reusable Sanitary Towel Partner",
      logo: "/assets/sponsors/palesa-pads-logo.png",
    },
    {
      name: "Digital Architect",
      role: "Official Digital & Web Architecture Sponsor",
      logo: "/assets/sponsors/digital-architect.png",
      url: "https://www.digitalarchitectagency.co.za",
    },
  ],
};
