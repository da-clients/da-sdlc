export interface PillarItem {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  color: string;
  bgSoft: string;
  borderSoft: string;
  statHighlight: string;
  statSource: string;
  shortDescription: string;
  summary: string;
  heroImage: string;
  paragraphs: string[];
  programmes: string[];
  outcomeQuote: string;
}

export const MEET_PILLARS: PillarItem[] = [
  {
    id: "mental-health",
    letter: "M",
    title: "Mental Health",
    subtitle: "Strength Behind Every Step Forward",
    color: "#84CEE2",
    bgSoft: "rgba(132, 206, 226, 0.14)",
    borderSoft: "rgba(132, 206, 226, 0.45)",
    statHighlight: "1 woman killed every 3 hours in SA • R28.4B annual economic cost of GBV",
    statSource: "KPMG & South African National GBV Research",
    shortDescription:
      "South Africa has one of the highest rates of gender-based violence in the world. We support survivors and strengthen wellbeing, so recovery isn't a barrier to opportunity.",
    summary:
      "South Africa faces severe rates of gender-based violence and childhood trauma. We treat emotional wellbeing and nervous-system regulation as the non-negotiable starting point for every learner and woman we serve.",
    heroImage: "/assets/programs/mental-health-pillar.jpg",
    paragraphs: [
      "Mental health is the foundation everything else at SDLC is built on. Without emotional stability and psychosocial support, education, entrepreneurship, and digital skills are much harder to sustain — so we treat wellbeing as a starting point, not an afterthought.",
      "South Africa has one of the highest rates of gender-based violence in the world, with a woman killed every three hours, and an estimated R28.4 billion annual cost to the economy. These numbers translate into daily barriers for the women and children we work with: unaddressed trauma, eroded confidence, and cycles of harm.",
      "At SDLC, our trauma-informed programmes offer school-based emotional regulation (via our flagship SDLC Courage Crew™ curriculum), equine-assisted grounding and breathwork sessions, psychosocial support groups, and verified counselling referrals so survivors and young learners have safe, visible support.",
    ],
    programmes: [
      "Emotional wellbeing & nervous-system resilience",
      "Mental wellness education & SDLC Courage Crew™ school programme",
      "Trauma-informed grounding breathwork & somatic movement",
      "Youth and community wellness & GBV survivor support referrals",
    ],
    outcomeQuote:
      "By strengthening mental health first, we help the people we serve show up fully for their education, their businesses, and their families.",
  },
  {
    id: "education",
    letter: "E",
    title: "Education",
    subtitle: "Opening Doors to Lifelong Opportunity",
    color: "#DA8688",
    bgSoft: "rgba(218, 134, 136, 0.14)",
    borderSoft: "rgba(218, 134, 136, 0.45)",
    statHighlight: "Addressing SA's high youth dropout & teenage pregnancy barriers through practical learning",
    statSource: "SDLC Educational Outreach & Literacy Mandate",
    shortDescription:
      "With South Africa's teenage pregnancy rate among the highest globally, education and skills training give young mothers and learners a real path forward.",
    summary:
      "With South Africa's teenage pregnancy and youth dropout rates among the highest globally, accessible life skills, literacy drives, and educational mentorship give young mothers and school learners a real path forward.",
    heroImage: "/assets/programs/education-pillar.jpg",
    paragraphs: [
      "Education at SDLC goes beyond textbook theory. We partner directly with schools, municipal libraries, and community centres across KwaZulu-Natal and Gauteng to cultivate reading literacy, practical life skills, and personal leadership.",
      "Young women and children in underserved communities often face interrupted schooling due to economic hardship or early parenthood. Our programmes meet learners where they are — restoring confidence, curiosity, and practical academic readiness.",
    ],
    programmes: [
      "Life skills development & personal leadership",
      "Educational support & school literacy partnerships",
      "Youth development & reading comprehension drives",
      "Learning & personal development for young mothers and learners",
    ],
    outcomeQuote:
      "Every book opened and every life skill mastered rewrites the trajectory of an entire household.",
  },
  {
    id: "entrepreneurship",
    letter: "E",
    title: "Entrepreneurship",
    subtitle: "Building Economic Independence & Women-Led Enterprise",
    color: "#90D1BB",
    bgSoft: "rgba(144, 209, 187, 0.15)",
    borderSoft: "rgba(144, 209, 187, 0.45)",
    statHighlight: "Only 6.2% of South African women start their own businesses — we work to multiply that number",
    statSource: "South African Women's Enterprise & Economic Inclusion Data",
    shortDescription:
      "Only 6.2% of South African women start their own businesses. We back women-led ventures to build jobs, income, and independence.",
    summary:
      "Only 6.2% of South African women currently start their own businesses. We equip women and youth with practical business tools, mentorship, and market readiness to create self-sustaining income and independence.",
    heroImage: "/assets/programs/entrepreneurship-pillar.jpg",
    paragraphs: [
      "True empowerment requires economic freedom. When a woman or young person can generate sustainable income, they gain autonomy, security, and the ability to uplift their surrounding community.",
      "Through municipal youth economic expos, enterprise workshops, and hands-on mentorship led by founders with nearly two decades of corporate and commercial experience, SDLC bridges the gap between raw talent and viable small business ownership.",
    ],
    programmes: [
      "Practical entrepreneurial & micro-business skills",
      "Business & enterprise development workshops",
      "Executive mentorship & founder empowerment",
      "Youth & women economic participation initiatives",
    ],
    outcomeQuote:
      "Backing a woman-led venture doesn't just build a business — it builds household stability and community jobs.",
  },
  {
    id: "technology",
    letter: "T",
    title: "Technology",
    subtitle: "Closing the Digital Divide & Building AI Readiness",
    color: "#F2CB6F",
    bgSoft: "rgba(242, 203, 111, 0.16)",
    borderSoft: "rgba(242, 203, 111, 0.5)",
    statHighlight: "Less than half of women in South Africa have consistent internet access — we work to close that gap",
    statSource: "South African Digital Inclusion Benchmark",
    shortDescription:
      "Less than half of women in South Africa have consistent internet access. We work to close that gap so digital tools and technology are in everyone's hands.",
    summary:
      "Less than half of women in South Africa have consistent internet access. Our Technology pillar closes that gap by delivering foundational digital literacy, online safety, and responsible AI awareness so digital tools are in everyone's hands.",
    heroImage: "/assets/gallery/lotusville-primary-cards.jpg",
    paragraphs: [
      "In a rapidly evolving digital economy, being left offline means being locked out of modern employment, banking, and education. SDLC ensures women and youth are not left behind by the technological shift.",
      "Our curriculum spans practical digital literacy workbooks, online safety and scam prevention, foundational computing skills, and responsible Artificial Intelligence (AI) awareness — turning technology into an accessible tool for daily empowerment.",
    ],
    programmes: [
      "Foundational digital literacy & hands-on workbooks",
      "AI awareness & responsible Artificial Intelligence use",
      "Technology skills development & career readiness",
      "Digital empowerment, online safety & scam awareness",
    ],
    outcomeQuote:
      "Digital literacy transforms technology from a barrier into a bridge for the next generation.",
  },
];

export interface SponsorBoxOption {
  id: string;
  pillarId: "mental-health" | "education" | "entrepreneurship" | "technology";
  pillar: string;
  letter: string;
  amountZAR: number;
  color: string;
  title: string;
  tagline: string;
  image: string;
  eftReference: string;
  impactDescription: string;
  kitItems: string[];
}

export const SPONSOR_IN_A_BOX_TIERS: SponsorBoxOption[] = [
  {
    id: "box-mental-health",
    pillarId: "mental-health",
    pillar: "Mental Health",
    letter: "M",
    amountZAR: 350,
    color: "#84CEE2",
    title: "Mental Health In-a-Box",
    tagline: "Nervous System, Breathing & Self-Care Kit",
    image: "/assets/inabox/inabox-mental-health.jpg",
    eftReference: "INABOX-MENTAL-HEALTH",
    impactDescription:
      "Provides a vulnerable learner with guided SDLC Breathing Exercises cards, emotional regulation prompts, mindfulness activities, and essential personal care items.",
    kitItems: [
      "SDLC Breathing Exercises & Somatic Grounding Card",
      "Mindfulness Colouring & Personal Reflection Tools",
      "Essential Hygiene & Self-Care Pack (Soap, Lotion, Toothbrush, Sanitary Care)",
      "Courage Crew™ Emotional Wellbeing Guide",
    ],
  },
  {
    id: "box-education",
    pillarId: "education",
    pillar: "Education",
    letter: "E",
    amountZAR: 350,
    color: "#DA8688",
    title: "Education In-a-Box",
    tagline: "Literacy, Stationery & Foundational Learning Kit",
    image: "/assets/inabox/inabox-education.jpg",
    eftReference: "INABOX-EDUCATION",
    impactDescription:
      "Equips an underserved school learner with A4 exercise books, full colour pencil and fibre-tip pen sets, stationery essentials, and reading resources.",
    kitItems: [
      "A4 College Exercise Books & Reading Workbooks",
      "Complete Colour Pencils, Fibre-Tip Pens & Glue Stick Set",
      "Erasers, Rulers & Daily Classroom Stationery Pack",
      "Personal Goal-Setting & Literacy Activity Prompts",
    ],
  },
  {
    id: "box-entrepreneurship",
    pillarId: "entrepreneurship",
    pillar: "Entrepreneurship",
    letter: "E",
    amountZAR: 350,
    color: "#90D1BB",
    title: "Entrepreneurship In-a-Box",
    tagline: "Micro-Business Starter & Financial Literacy Kit",
    image: "/assets/inabox/inabox-entrepreneurship.jpg",
    eftReference: "INABOX-ENTREPRENEURSHIP",
    impactDescription:
      "Empowers a young person or aspiring female founder with our 'Business Practice' and 'Secure the Bag' financial literacy guides, planning journals, and mentorship tools.",
    kitItems: [
      "SDLC 'Secure the Bag' Financial Literacy & Sources of Income Guide",
      "'Business Practice' Micro-Enterprise Starter Workbook",
      "Budgeting, Pricing & Goal-Planning Journal",
      "Official Stamped SDLC Skills & Learning Resource Kit",
    ],
  },
  {
    id: "box-technology",
    pillarId: "technology",
    pillar: "Technology",
    letter: "T",
    amountZAR: 550,
    color: "#F2CB6F",
    title: "Technology In-a-Box",
    tagline: "Digital Literacy, Online Safety & AI Readiness Kit",
    image: "/assets/inabox/inabox-technology.jpg",
    eftReference: "INABOX-TECHNOLOGY",
    impactDescription:
      "Bridges the digital divide with foundational computing workbooks, cybersecurity and online safety guides, AI literacy prompts, and learner care supplies.",
    kitItems: [
      "Foundational Digital Skills & Responsible AI Literacy Guide",
      "Online Safety, Cyber-Awareness & Scam Prevention Handbook",
      "Offline Computing Logic Workbook & Stationery Set",
      "Complete Learner Wellness & Educational Support Pack",
    ],
  },
];

export interface CauseEnterpriseItem {
  id: string;
  title: string;
  category: "Social Enterprise" | "Sports Collaboration" | "Corporate CSI";
  brandPartner: string;
  badgeColor: string;
  tagline: string;
  description: string;
  dualBenefit: {
    forCommunity: string;
    forEnterprise: string;
  };
  ctaText: string;
  ctaUrl: string;
}

export const CAUSE_ENTERPRISE_PARTNERSHIPS: CauseEnterpriseItem[] = [
  {
    id: "palesa-pads",
    title: "Palesa Pads Reusable Sanitary Towels",
    category: "Social Enterprise",
    brandPartner: "Palesa Pads & SDLC",
    badgeColor: "#DA8688",
    tagline: "Her Period Shouldn't Hold Her Back — 5-Year Guarantee",
    description:
      "Palesa Pads are high-quality, reusable cloth sanitary pads made in South Africa. They are more comfortable than disposable pads, can be worn for longer with no odour and fewer menstrual cramps due to the absence of chemicals. They are leak-free, easy to wash, and come with a guarantee of 5 years.",
    dualBenefit: {
      forCommunity: "Keeps schoolgirls learning continuously with comfortable, chemical-free, reusable sanitary protection that lasts up to 5 years.",
      forEnterprise: "Supports local South African manufacturing, reduces environmental waste, and keeps young women in school.",
    },
    ctaText: "Support Palesa Pads via SnapScan",
    ctaUrl: "https://pos.snapscan.io/qr/Kwc3UjHr",
  },
  {
    id: "padel-tournaments",
    title: "Community Sports & Tournament Collaborations",
    category: "Sports Collaboration",
    brandPartner: "Padel 365 & TNT Creative Solutions",
    badgeColor: "#90D1BB",
    tagline: "Active Community Fundraisers with High Brand Visibility",
    description:
      "Our milestone tournaments (such as the October 2025 Greenstone Padel 365 Tournament) unite corporate teams, amateur athletes, and brands around healthy competition. Brands sponsor courts and entrant packs; registration fees directly fund our In-a-Box school distributions.",
    dualBenefit: {
      forCommunity: "Generates crucial funding for In-a-Box school toolkits while promoting health and community unity.",
      forEnterprise: "Provides courtside brand placement, corporate team building, and direct stakeholder community engagement.",
    },
    ctaText: "Partner on a Future Tournament",
    ctaUrl: "/contact",
  },
  {
    id: "corporate-csi-rollouts",
    title: "Tailored Corporate Social Investment (CSI / CSR)",
    category: "Corporate CSI",
    brandPartner: "Institutional & Enterprise Leaders",
    badgeColor: "#84CEE2",
    tagline: "Auditable B-BBEE Socio-Economic Development (SED) Initiatives",
    description:
      "We design, execute, and document turnkey school rollouts aligned with your company's Socio-Economic Development (SED) scorecard. Whether sponsoring an entire school's Courage Crew™ emotional regulation program or equipping a youth computer lab, SDLC provides end-to-end transparent reporting.",
    dualBenefit: {
      forCommunity: "Brings long-term psychological and technical infrastructure directly into public school classrooms.",
      forEnterprise: "Meets B-BBEE SED compliance with verified NPO governance, high-resolution media, and auditable outcomes.",
    },
    ctaText: "Request CSI Proposal",
    ctaUrl: "/contact",
  },
];

export interface CsiPartnershipTrack {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  bgSoft: string;
  borderSoft: string;
  summary: string;
  offerings: string[];
}

export const CSI_PARTNERSHIP_TRACK: CsiPartnershipTrack = {
  id: "csi-partnerships",
  title: "Corporate & CSI / Social Impact Partnerships",
  subtitle: "Co-Creating Measurable Community Impact With South African Organisations",
  color: "#A4A5C6",
  bgSoft: "rgba(164, 165, 198, 0.15)",
  borderSoft: "rgba(164, 165, 198, 0.45)",
  summary:
    "We partner with corporations, municipal entities, and foundations committed to responsible Corporate Social Investment (CSI/CSR), delivering transparent reporting and measurable outcomes across KwaZulu-Natal and South Africa.",
  offerings: [
    "Custom skills development programmes aligned with corporate CSI mandates",
    "Youth empowerment & career readiness initiatives",
    "Women's empowerment & enterprise development programmes",
    "School-based trauma-informed wellness rollouts (SDLC Courage Crew™)",
    "Community development & transparent impact reporting for stakeholders",
  ],
};

export const COURAGE_CREW_CHARACTERS = [
  { name: "Yaya the Butterfly", trait: "Calm breathing & confidence" },
  { name: "Monie the Elephant", trait: "Emotional awareness & grounding" },
  { name: "Pumpkin the Penguin", trait: "Compassion & connection" },
  { name: "Nay the Panda", trait: "Courage & authenticity" },
  { name: "Kiwi the Koala", trait: "Kindness & gentle communication" },
  { name: "Egypt the Lion", trait: "Bravery & resilience" },
  { name: "Milo the Turtle", trait: "Asking for help & self-protection" },
  { name: "Angel the Bee", trait: "Positive actions & community care" },
];

export const MENTAL_HEALTH_HELPLINES = [
  { name: "GBV Command Centre (24/7 Toll-Free)", number: "0800 428 428", note: "Gender-Based Violence emergency support" },
  { name: "SADAG Mental Health Line", number: "0800 567 567", note: "South African Depression & Anxiety Group" },
  { name: "Lifeline South Africa", number: "0861 322 322", note: "24-hour confidential crisis counselling" },
  { name: "Childline South Africa", number: "116", note: "Toll-free crisis line for children & youth" },
];

export const BOARD_MEMBERS = [
  {
    name: "Simonia Buys Marimuthoo",
    role: "Founder & Executive Director",
    badgeColor: "#84CEE2",
    image: "/assets/board/simonia.jpg",
    credentials: [
      "18+ Years Corporate Technology & Account Management",
      "Certified Life Coach & NLP Practitioner",
      "Certified Breathwork Facilitator & Equine Holistic Practitioner",
    ],
    bio: [
      "A dynamic leader, passionate change-maker, and devoted mother of four who believes that lasting social impact begins at home. Simonia has dedicated her career to uplifting women and children and transforming communities across South Africa.",
      "With over 18 years of experience in account management, enterprise technology, and the corporate sector, Simonia combines sharp business acumen with a deep commitment to social entrepreneurship. As Founder of Simonia Development Learning Centre (SDLC), she spearheads programmes across mental wellness, education, entrepreneurship, and digital literacy.",
      "Combining her corporate background with certifications as a Life Coach, NLP Practitioner, Breathwork Facilitator, and Equine Holistic Practitioner, she brings a uniquely grounded, trauma-informed approach to community transformation.",
    ],
  },
  {
    name: "Nicole Naidoo",
    role: "Board Member — Education, STEM & Youth Leadership",
    badgeColor: "#DA8688",
    image: "/assets/board/nicole.png",
    credentials: [
      "Oprah Winfrey Leadership Academy for Girls Alumna",
      "BSc Biomedical Engineering & Neurosequential Model Specialist",
      "Gender & Transformation Officer (Electrical & Information Engineering)",
    ],
    bio: [
      "A proud graduate of the Oprah Winfrey Leadership Academy for Girls, where she served as Chairperson of the Cultural Committee, Deputy Chairperson of the Library Committee, and Founder & Chairperson of the iSchool Press Team.",
      "Nicole holds a Degree in Biomedical Engineering and has specialized in Neurosequential Model skills, combining rigorous STEM expertise with a deep understanding of human brain development and trauma-informed learning. As Gender and Transformation Officer for the School of Electrical and Information Engineering, she champions equity, inclusion, and diversity.",
      "Beyond her academic and engineering achievements, she is deeply committed to mentorship and creating platforms that support young women in STEM, leadership, and personal growth.",
    ],
  },
  {
    name: "Deandre Vanmali",
    role: "Board Member — Technology, Informatics & Digital Innovation",
    badgeColor: "#F2CB6F",
    image: "/assets/board/deandre.jpg",
    credentials: [
      "BCom Informatics Graduate & Honours Scholar",
      "Business & Information Systems Specialist",
      "Digital Literacy & Youth Empowerment Advocate",
    ],
    bio: [
      "A BCom Informatics Honours scholar with an unwavering passion for technology and its potential to drive meaningful social and economic change across South Africa.",
      "Deandre's work bridges the worlds of business strategy, information systems, and digital innovation — equipping SDLC with multidisciplinary expertise vital for preparing youth and women for today's technology-driven economy.",
      "Guided by a belief in lifelong learning and digital inclusion, she helps communities navigate the rapidly evolving technological landscape safely and confidently.",
    ],
  },
];

export interface ImpactTimelineEvent {
  id: string;
  year: string;
  dateLabel: string;
  location: string;
  region: "KwaZulu-Natal" | "Gauteng" | "National";
  pillar: "Mental Health" | "Entrepreneurship" | "Education" | "Community Drive";
  pillarColor: string;
  title: string;
  partner: string;
  summary: string;
  detailedStory: string;
  heroImage: string;
  images: { src: string; alt: string }[];
}

export const IMPACT_TIMELINE_EVENTS: ImpactTimelineEvent[] = [
  {
    id: "padel-greenstone-2025",
    year: "2025",
    dateLabel: "25 October 2025",
    location: "Padel 365, Greenstone Shopping Centre, Modderfontein (Johannesburg)",
    region: "Gauteng",
    pillar: "Community Drive",
    pillarColor: "#90D1BB",
    title: "Padel 365 Greenstone Fundraising Tournament (JHB)",
    partner: "Co-hosted with TNT Creative Solutions & Padel 365",
    summary:
      "A high-energy sports fundraiser in Modderfontein, Johannesburg, uniting corporate teams and players to fund In-a-Box school toolkits.",
    detailedStory:
      "On 25 October 2025 (11:30 AM – 3:30 PM), SDLC expanded its community footprint to Gauteng by partnering with TNT Creative Solutions for our official In-a-Box Fundraising Padel Tournament at Padel 365, Greenstone Shopping Centre. At R300 per player, teams competed across friendly and championship brackets, raising essential funding to manufacture and distribute In-a-Box learning and wellness kits for children in need.",
    heroImage: "/assets/gallery/padel-tournament-group.jpg",
    images: [
      { src: "/assets/gallery/padel-tournament-group.jpg", alt: "Tournament participants and supporters on court at Padel 365 Greenstone" },
      { src: "/assets/gallery/padel-tournament-poster.jpg", alt: "Official tournament poster co-hosted with TNT Creative Solutions" },
      { src: "/assets/gallery/padel-tournament-trophy.jpg", alt: "Championship winners receiving trophies and SDLC kits" },
      { src: "/assets/gallery/padel-tournament-court.jpg", alt: "Action on the courts during the In-a-Box fundraiser" },
      { src: "/assets/gallery/padel-extra-1.jpg", alt: "Padel 365 Greenstone tournament players and SDLC supporters" },
      { src: "/assets/gallery/padel-extra-3.jpg", alt: "Courtside community spirit at Padel 365 Greenstone" },
      { src: "/assets/gallery/padel-extra-5.jpg", alt: "Match play at Padel 365 Modderfontein" },
      { src: "/assets/gallery/padel-extra-6.jpg", alt: "SDLC banners and prize table at Greenstone" },
      { src: "/assets/gallery/padel-extra-7.jpg", alt: "Tournament participants celebrating after match play" },
      { src: "/assets/gallery/padel-extra-8.jpg", alt: "Community connections at the 2025 Gauteng fundraiser" },
      { src: "/assets/gallery/padel-extra-9.jpg", alt: "Players competing in the Greenstone Padel 365 brackets" },
      { src: "/assets/gallery/padel-extra-10.jpg", alt: "Supporters and teams gathered at Padel 365 Modderfontein" },
      { src: "/assets/gallery/padel-extra-13.jpg", alt: "Closing team celebration at the SDLC Padel fundraiser" },
    ],
  },
  {
    id: "world-read-aloud-2026",
    year: "2026",
    dateLabel: "February 2026",
    location: "eThekwini Municipality Tongaat Beach Library, Tongaat",
    region: "KwaZulu-Natal",
    pillar: "Education",
    pillarColor: "#DA8688",
    title: "World Read Aloud Day — Tongaat Beach Library",
    partner: "eThekwini Municipality Tongaat Beach Library",
    summary:
      "Partnered with eThekwini Municipality Tongaat Beach Library to celebrate World Read Aloud Day through interactive reading and youth confidence.",
    detailedStory:
      "SDLC joined forces with the eThekwini Municipality Tongaat Beach Library to commemorate World Read Aloud Day. Facilitators and library staff guided learners through expressive reading aloud sessions, vocabulary building, and discussions linking literacy to emotional confidence and mental wellbeing.",
    heroImage: "/assets/gallery/world-read-aloud-1.jpg",
    images: [
      { src: "/assets/gallery/world-read-aloud-1.jpg", alt: "Simonia and Tongaat Beach Librarian beside World Read Aloud Day display" },
      { src: "/assets/gallery/world-read-aloud-2.jpg", alt: "World Read Aloud Day session with learners at Tongaat Beach Library" },
      { src: "/assets/gallery/world-read-aloud-3.jpg", alt: "Interactive storytelling and reading aloud with school learners" },
      { src: "/assets/gallery/world-read-aloud-4.jpg", alt: "Learners participating in World Read Aloud Day activities" },
      { src: "/assets/gallery/world-read-aloud-5.jpg", alt: "SDLC Education and Mental Health banners at Tongaat Beach Library" },
      { src: "/assets/gallery/world-read-aloud-6.jpg", alt: "Reading comprehension and youth engagement during World Read Aloud Day" },
      { src: "/assets/gallery/world-read-aloud-7.jpg", alt: "Group literacy celebration at Tongaat Beach Library" },
      { src: "/assets/gallery/world-read-aloud-8.jpg", alt: "Library outreach fostering a lifelong love of books" },
    ],
  },
  {
    id: "ethekwini-youth-econ-2026",
    year: "2026",
    dateLabel: "20 March 2026",
    location: "Durban Exhibition Centre, Durban",
    region: "KwaZulu-Natal",
    pillar: "Entrepreneurship",
    pillarColor: "#90D1BB",
    title: "eThekwini Youth Economic Summit (Durban)",
    partner: "eThekwini Municipality Libraries & Heritage",
    summary:
      "Mentored emerging youth founders and shared our 'Secure the Bag' financial literacy guides at Durban's economic summit.",
    detailedStory:
      "On 20 March 2026, SDLC exhibited at the Youth Economic Development Programme hosted by eThekwini Municipality in Durban. Simonia and our advisory mentors consulted with young entrepreneurs on sources of income, financial discipline ('Secure the Bag'), and turning practical skills into sustainable micro-businesses.",
    heroImage: "/assets/gallery/youth-econ-1.jpg",
    images: [
      { src: "/assets/gallery/youth-econ-1.jpg", alt: "SDLC exhibition stand at eThekwini Youth Economic Development Programme" },
      { src: "/assets/gallery/youth-econ-2.jpg", alt: "SDLC Education, Mental Health, and Entrepreneurship banners in Durban" },
      { src: "/assets/gallery/youth-econ-3.jpg", alt: "Simonia with eThekwini Municipality Libraries & Heritage representative" },
    ],
  },
  {
    id: "stanger-campus-equine-2026",
    year: "2026",
    dateLabel: "April 2026",
    location: "Stanger Training Centre Campus, KwaDukuza",
    region: "KwaZulu-Natal",
    pillar: "Mental Health",
    pillarColor: "#84CEE2",
    title: "Stanger Training Centre — Equine Breathwork & Grounding Session",
    partner: "Stanger Training Centre & SDLC Mental Health Pillar",
    summary:
      "Delivered an on-campus equine breathwork and somatic grounding session for special-needs learners and educators at Stanger Training Centre.",
    detailedStory:
      "Under SDLC's Mental Health Pillar, Simonia and equine specialists brought a gentle therapy horse directly to the Stanger Training Centre campus in KwaDukuza. Learners and educators participated in outdoor grounding circles, calm breathing exercises, and tactile equine connection designed to soothe the nervous system and build emotional trust.",
    heroImage: "/assets/gallery/stanger-campus-equine-1.jpg",
    images: [
      { src: "/assets/gallery/stanger-campus-equine-1.jpg", alt: "Simonia, equine facilitator, and staff at Stanger Training Centre with therapy horse" },
      { src: "/assets/gallery/stanger-campus-equine-2.jpg", alt: "Equine breathwork and grounding circle on Stanger Training Centre grounds" },
      { src: "/assets/gallery/stanger-campus-equine-3.jpg", alt: "Learners connecting with therapy horse during mental wellness session" },
      { src: "/assets/gallery/stanger-campus-equine-4.jpg", alt: "Guided somatic grounding and calm breathing exercise" },
      { src: "/assets/gallery/stanger-campus-equine-5.jpg", alt: "Special-needs learners experiencing tactile horse interaction" },
      { src: "/assets/gallery/stanger-campus-equine-6.jpg", alt: "Facilitators supporting learners during outdoor equine grounding" },
      { src: "/assets/gallery/stanger-campus-equine-7.jpg", alt: "SDLC Mental Health Pillar outreach at Stanger Training Centre" },
      { src: "/assets/gallery/stanger-campus-equine-8.jpg", alt: "Group reflection and nervous system regulation with learners" },
    ],
  },
  {
    id: "stanger-buzzbarn-equine-2026",
    year: "2026",
    dateLabel: "May 2026",
    location: "Buzz Barn, Fairview Estate, Ballito",
    region: "KwaZulu-Natal",
    pillar: "Mental Health",
    pillarColor: "#84CEE2",
    title: "Stanger Training Centre & Buzz Barn — Equine Nervous System Regulation",
    partner: "Stanger Training Centre & Buzz Barn (Ballito)",
    summary:
      "Hosted Stanger Training Centre learners at Buzz Barn in Ballito for immersive nervous system regulation, horse riding, and equine breathwork.",
    detailedStory:
      "Building on our school-based mental wellness work, SDLC partnered with Buzz Barn at Fairview Estate in Ballito to host learners from Stanger Training Centre. Surrounded by nature and wooden stables, students practiced equine breathwork alongside the horses, enjoyed supervised therapeutic riding rounds in the paddock, and shared healthy refreshments together.",
    heroImage: "/assets/gallery/stanger-buzzbarn-equine-7.jpg",
    images: [
      { src: "/assets/gallery/stanger-buzzbarn-equine-7.jpg", alt: "Learners gently stroking therapy horse during equine breathwork at Buzz Barn" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-1.jpg", alt: "Simonia between Mental Health and Education banners inside Buzz Barn stables" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-2.jpg", alt: "Refreshment table prepared inside Buzz Barn for Stanger Training Centre learners" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-11.jpg", alt: "Supervised therapeutic horse riding in the Buzz Barn outdoor arena" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-3.jpg", alt: "Learners practicing nervous system regulation with horses at Buzz Barn" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-4.jpg", alt: "Sensory connection and grounding beside the paddock" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-5.jpg", alt: "Equine breathwork facilitation with Stanger Training Centre learners" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-6.jpg", alt: "Students building confidence and calm through horse interaction" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-8.jpg", alt: "Guided therapeutic riding and motor coordination session" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-9.jpg", alt: "Outdoor equine wellness day at Fairview Estate Ballito" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-10.jpg", alt: "Facilitators and learners walking the arena trail at Buzz Barn" },
      { src: "/assets/gallery/stanger-buzzbarn-equine-12.jpg", alt: "Group moment at Buzz Barn Equine Breathwork outreach" },
    ],
  },
  {
    id: "edenvale-blanket-drive-2026",
    year: "2026",
    dateLabel: "June 2026 (Winter Drive)",
    location: "Edenvale Child Welfare South Africa, Edenvale (Johannesburg)",
    region: "Gauteng",
    pillar: "Community Drive",
    pillarColor: "#90D1BB",
    title: "Edenvale Child Welfare & SDLC Winter Blanket Drive (JHB)",
    partner: "Child Welfare South Africa — Edenvale",
    summary:
      "Delivered warm winter blankets and care supplies to Edenvale Child Welfare in Johannesburg to support vulnerable children through winter.",
    detailedStory:
      "Continuing SDLC's national outreach in Gauteng, our Johannesburg team partnered with Child Welfare South Africa (Edenvale) for a dedicated Winter Blanket Drive. Team members delivered packages of warm fleece blankets and essential comfort items to ensure vulnerable children and families in Edenvale were protected during the cold Highveld winter months.",
    heroImage: "/assets/gallery/edenvale-blanket-1.jpg",
    images: [
      { src: "/assets/gallery/edenvale-blanket-1.jpg", alt: "SDLC team delivering winter blankets at Child Welfare South Africa Edenvale" },
      { src: "/assets/gallery/edenvale-blanket-2.jpg", alt: "Winter blanket handover outside Edenvale Child Welfare offices" },
      { src: "/assets/gallery/edenvale-blanket-3.jpg", alt: "SDLC representatives and Edenvale Child Welfare staff with donated blankets" },
      { src: "/assets/gallery/edenvale-blanket-4.jpg", alt: "Community care packages prepared for the Edenvale Winter Blanket Drive" },
    ],
  },
  {
    id: "reading-quest-tongaat-2026",
    year: "2026",
    dateLabel: "July 2026",
    location: "eThekwini Municipality Tongaat Beach Library, Tongaat",
    region: "KwaZulu-Natal",
    pillar: "Education",
    pillarColor: "#DA8688",
    title: "The Ultimate Reading Quest Programme — Tongaat Beach Library",
    partner: "eThekwini Municipality Tongaat Beach Library",
    summary:
      "Co-hosted 'The Ultimate Reading Quest Programme' with Tongaat Beach Library to spark reading adventure and comprehension among primary learners.",
    detailedStory:
      "In partnership with eThekwini Municipality's Tongaat Beach Library ('One City One Book'), SDLC delivered The Ultimate Reading Quest Programme. Learners embarked on guided reading challenges inside the library's Activities Room, exploring new books, presenting creative book reviews, and building strong reading comprehension habits.",
    heroImage: "/assets/gallery/reading-quest-1.jpg",
    images: [
      { src: "/assets/gallery/reading-quest-1.jpg", alt: "Simonia and library partner beside eThekwini Municipality Libraries banner" },
      { src: "/assets/gallery/reading-quest-2.jpg", alt: "Learners gathered for The Ultimate Reading Quest at Tongaat Beach Library" },
      { src: "/assets/gallery/reading-quest-3.jpg", alt: "Interactive literacy quest activities in the library Activities Room" },
      { src: "/assets/gallery/reading-quest-4.jpg", alt: "Students presenting their reading quest discoveries" },
      { src: "/assets/gallery/reading-quest-5.jpg", alt: "Facilitators mentoring learners during The Ultimate Reading Quest" },
      { src: "/assets/gallery/reading-quest-6.jpg", alt: "Group reading and storytelling session at Tongaat Beach Library" },
      { src: "/assets/gallery/reading-quest-7.jpg", alt: "Learners engaging with books and literacy prompts" },
      { src: "/assets/gallery/reading-quest-8.jpg", alt: "Youth literacy empowerment with eThekwini Municipality Libraries" },
      { src: "/assets/gallery/reading-quest-9.jpg", alt: "Celebrating reading milestones during The Ultimate Reading Quest" },
      { src: "/assets/gallery/reading-quest-10.jpg", alt: "Participants and facilitators at Tongaat Beach Library" },
    ],
  },
  {
    id: "seatides-inabox-outreach-2026",
    year: "2026",
    dateLabel: "July 2026",
    location: "Seatides Combined School, Seatides (North Coast KZN)",
    region: "KwaZulu-Natal",
    pillar: "Education",
    pillarColor: "#DA8688",
    title: "Seatides Combined School — SDLC In-a-Box Reading & Storytelling Outreach",
    partner: "Seatides Combined School & eThekwini Libraries",
    summary:
      "Delivered the SDLC In-a-Box Outreach Programme at Seatides Combined School through creative poster presentations, reading, and storytelling.",
    detailedStory:
      "SDLC partnered with Seatides Combined School to deliver an inspiring In-a-Box Outreach Programme centred on reading and storytelling. Learners designed creative literacy posters ('Open a Book, Open a Mind' and 'Reading Takes You on an Adventure'), shared stories at the microphone, and received educational resources encouraging daily curiosity and academic pride.",
    heroImage: "/assets/gallery/seatides-inabox-1.jpg",
    images: [
      { src: "/assets/gallery/seatides-inabox-1.jpg", alt: "Seatides Combined School learners holding handmade reading adventure posters" },
      { src: "/assets/gallery/seatides-inabox-2.jpg", alt: "Educators and SDLC team addressing Seatides Combined School learners" },
      { src: "/assets/gallery/seatides-inabox-3.jpg", alt: "Storytelling and reading presentations during the In-a-Box outreach" },
      { src: "/assets/gallery/seatides-inabox-4.jpg", alt: "Learners showcasing creative book posters at Seatides Combined School" },
      { src: "/assets/gallery/seatides-inabox-5.jpg", alt: "SDLC In-a-Box literacy awards and student recognition" },
      { src: "/assets/gallery/seatides-inabox-6.jpg", alt: "Students participating in interactive storytelling circles" },
      { src: "/assets/gallery/seatides-inabox-7.jpg", alt: "Reading champions at Seatides Combined School with SDLC banners" },
      { src: "/assets/gallery/seatides-inabox-8.jpg", alt: "Youth literacy and public speaking confidence session" },
      { src: "/assets/gallery/seatides-inabox-9.jpg", alt: "Simonia and educators celebrating learner creativity at Seatides" },
      { src: "/assets/gallery/seatides-inabox-10.jpg", alt: "Group photo of Seatides Combined School reading ambassadors" },
      { src: "/assets/gallery/seatides-inabox-11.jpg", alt: "In-a-Box educational materials shared with students" },
      { src: "/assets/gallery/seatides-inabox-12.jpg", alt: "Learner presenting book review at Seatides Combined School" },
      { src: "/assets/gallery/seatides-inabox-13.jpg", alt: "Joyful moments from the Seatides reading and storytelling outreach" },
      { src: "/assets/gallery/seatides-inabox-14.jpg", alt: "Educators and library partners supporting Seatides Combined School" },
      { src: "/assets/gallery/seatides-inabox-15.jpg", alt: "Students celebrating literacy achievements with SDLC" },
      { src: "/assets/gallery/seatides-inabox-16.jpg", alt: "Closing group celebration at Seatides Combined School" },
    ],
  },
  {
    id: "lotusville-primary-2026",
    year: "2026",
    dateLabel: "August 2026",
    location: "Lotusville Primary School, Verulam",
    region: "KwaZulu-Natal",
    pillar: "Mental Health",
    pillarColor: "#84CEE2",
    title: "Lotusville Primary School — SDLC Courage Crew™ Nervous System Programme",
    partner: "Lotusville Primary School Educators & Administration",
    summary:
      "Brought somatic chest-grounding, balloon breathing, and the Courage Crew™ nervous system programme to hundreds of learners at Lotusville Primary.",
    detailedStory:
      "In August 2026, SDLC facilitated a full-school SDLC Courage Crew™ Nervous System Programme assembly at Lotusville Primary School in Verulam, KZN. Led by Simonia and the team in signature pastel M.E.E.T. shirts, learners practiced somatic heart-chest hand placements to regulate their nervous systems, mindful balloon breathing to ease anxiety, and positive emotional check-ins.",
    heroImage: "/assets/gallery/lotusville-primary-grounding.jpg",
    images: [
      { src: "/assets/gallery/lotusville-primary-grounding.jpg", alt: "Learner practicing somatic heart-chest grounding at Lotusville Primary" },
      { src: "/assets/gallery/lotusville-primary-hall.jpg", alt: "Lotusville Primary School hall assembly with SDLC facilitators" },
      { src: "/assets/gallery/lotusville-primary-breathing.jpg", alt: "Balloon breathing and nervous system regulation exercise" },
      { src: "/assets/gallery/lotusville-primary-simonia.jpg", alt: "Simonia engaging learners with Courage Crew characters" },
      { src: "/assets/gallery/lotusville-primary-team.jpg", alt: "SDLC team with Lotusville Primary educators and leadership" },
      { src: "/assets/gallery/lotusville-primary-cards.jpg", alt: "Learners engaging with Courage Crew character cards" },
      { src: "/assets/gallery/lotusville-extra-1.jpg", alt: "Lotusville Primary learners participating in nervous system grounding" },
      { src: "/assets/gallery/lotusville-extra-3.jpg", alt: "Interactive Courage Crew session in the school assembly hall" },
      { src: "/assets/gallery/lotusville-extra-8.jpg", alt: "Facilitators guiding breathing exercises with primary learners" },
      { src: "/assets/gallery/lotusville-extra-9.jpg", alt: "Students practicing emotional check-ins at Lotusville Primary" },
      { src: "/assets/gallery/lotusville-extra-11.jpg", alt: "Lotusville Primary School Courage Crew programme group moment" },
    ],
  },
  {
    id: "buffelsdale-youth-empowerment-2026",
    year: "2026",
    dateLabel: "August 2026",
    location: "Buffelsdale Primary School, Tongaat",
    region: "KwaZulu-Natal",
    pillar: "Mental Health",
    pillarColor: "#84CEE2",
    title: "Youth Empowerment Programme at Buffelsdale Primary",
    partner: "Powered by eThekwini Municipality Tongaat South Library",
    summary:
      "Delivered an interactive Youth Empowerment & Emotions Check-In programme at Buffelsdale Primary powered by Tongaat South Library.",
    detailedStory:
      "Powered by the eThekwini Municipality Tongaat South Library under the theme 'Act Today, Shape Tomorrow', SDLC facilitated a Youth Empowerment Programme at Buffelsdale Primary School. Simonia guided learners through the SDLC Emotions Check-In chart, helping students identify their feelings, build self-worth, and make positive daily choices.",
    heroImage: "/assets/gallery/buffelsdale-youth-1.jpg",
    images: [
      { src: "/assets/gallery/buffelsdale-youth-1.jpg", alt: "Simonia presenting the Emotions Check-In chart at Buffelsdale Primary School" },
      { src: "/assets/gallery/buffelsdale-youth-2.jpg", alt: "Youth Empowerment Programme assembly with Tongaat South Library" },
      { src: "/assets/gallery/buffelsdale-youth-3.jpg", alt: "Buffelsdale Primary learners engaging in the Youth Empowerment session" },
      { src: "/assets/gallery/buffelsdale-youth-4.jpg", alt: "Interactive emotional awareness workshop at Buffelsdale Primary" },
      { src: "/assets/gallery/buffelsdale-youth-5.jpg", alt: "Students participating in 'Act Today Shape Tomorrow' activities" },
      { src: "/assets/gallery/buffelsdale-youth-6.jpg", alt: "Educators, librarians, and SDLC facilitators at Buffelsdale Primary" },
      { src: "/assets/gallery/buffelsdale-youth-7.jpg", alt: "Learners practicing confidence and leadership skills" },
      { src: "/assets/gallery/buffelsdale-youth-8.jpg", alt: "Group recognition at Buffelsdale Primary Youth Empowerment day" },
      { src: "/assets/gallery/buffelsdale-youth-9.jpg", alt: "Closing celebration with eThekwini Municipality Tongaat South Library" },
    ],
  },
  {
    id: "buffelsdale-speech-contest-2026",
    year: "2026",
    dateLabel: "September 2026",
    location: "Buffelsdale Primary School (Billy Nair Circuit), Tongaat",
    region: "KwaZulu-Natal",
    pillar: "Education",
    pillarColor: "#DA8688",
    title: "Speech Contest Finals at Buffelsdale Primary — SDLC Adjudicator Duties",
    partner: "Buffelsdale Primary School & Billy Nair Circuit",
    summary:
      "Served on the official adjudication panel for the Speech Contest Finals hosted at Buffelsdale Primary School in the Billy Nair Circuit.",
    detailedStory:
      "SDLC was honoured to serve as official adjudicators for the Speech Contest Finals hosted by Buffelsdale Primary School under the Billy Nair Circuit ('Liberation Through Education'). Young speakers demonstrated remarkable poise, critical thinking, and articulation as they competed for top honours.",
    heroImage: "/assets/gallery/buffelsdale-speech-1.jpg",
    images: [
      { src: "/assets/gallery/buffelsdale-speech-1.jpg", alt: "Speech Contest Finals podium and Billy Nair Circuit banner at Buffelsdale Primary" },
      { src: "/assets/gallery/buffelsdale-speech-2.jpg", alt: "Adjudication panel and trophy presentation at Buffelsdale Primary Speech Contest" },
      { src: "/assets/gallery/buffelsdale-speech-3.jpg", alt: "Student finalists and educators at the Buffelsdale Primary Speech Contest" },
      { src: "/assets/gallery/buffelsdale-speech-4.jpg", alt: "Celebrating youth public speaking excellence in Tongaat" },
    ],
  },
  {
    id: "phoenix-muslim-speech-contest-2026",
    year: "2026",
    dateLabel: "September 2026",
    location: "Phoenix Muslim School (Verulam Circuit), Phoenix",
    region: "KwaZulu-Natal",
    pillar: "Education",
    pillarColor: "#DA8688",
    title: "Verulam Circuit Speech Contest at Phoenix Muslim School — Adjudicator Duties",
    partner: "Phoenix Muslim School & Verulam Circuit",
    summary:
      "Fulfilled circuit-level adjudicator duties at the Verulam Circuit Level Speech Contest hosted by Phoenix Muslim School.",
    detailedStory:
      "Continuing SDLC's support for youth voice and academic excellence across KwaZulu-Natal circuits, Simonia served on the adjudication panel for the Verulam Circuit Level Speech Contest at Phoenix Muslim School, celebrating top student orators with certificates and mentorship.",
    heroImage: "/assets/gallery/phoenix-speech-1.jpg",
    images: [
      { src: "/assets/gallery/phoenix-speech-1.jpg", alt: "Simonia with educators and adjudicators at the Verulam Circuit Speech Contest" },
      { src: "/assets/gallery/phoenix-speech-2.jpg", alt: "Winning learners holding certificates at Phoenix Muslim School Speech Contest" },
      { src: "/assets/gallery/phoenix-speech-3.jpg", alt: "Verulam Circuit Level Speech Contest ceremony at Phoenix Muslim School" },
      { src: "/assets/gallery/phoenix-speech-4.jpg", alt: "Student speakers and adjudicators celebrating circuit-level achievements" },
      { src: "/assets/gallery/phoenix-speech-5.jpg", alt: "Group photo in front of the Phoenix Muslim School Speech Contest backdrop" },
    ],
  },
  {
    id: "jhb-women-in-business-expo-2026",
    year: "2026",
    dateLabel: "31 October 2026 (9 AM – 3 PM)",
    location: "Dickie Fritz Hall, Dowerglen, Edenvale (Johannesburg)",
    region: "Gauteng",
    pillar: "Entrepreneurship",
    pillarColor: "#90D1BB",
    title: "Women in Business Expo — SDLC Johannesburg",
    partner: "Sip & Slay Edenvale Ladies Club (Dowerglen, JHB)",
    summary:
      "Showcased all four S-D-L-C In-a-Box toolkits, 'Secure the Bag' entrepreneurship guides, and Palesa Pads at the Edenvale Women in Business Expo.",
    detailedStory:
      "On 31 October 2026 (9:00 AM – 3:00 PM) at Dickie Fritz Hall in Dowerglen, Edenvale, our Johannesburg SDLC team hosted a full exhibition stall at the Sip & Slay Women in Business Expo. Visitors explored our four physical 'S-D-L-C' In-a-Box kits across Mental Health, Education, Entrepreneurship (featuring 'Business Practice' and 'Secure the Bag' financial literacy guides), and Technology, alongside our Palesa Pads reusable sanitary pad partnership.",
    heroImage: "/assets/gallery/jhb-women-expo-1.jpg",
    images: [
      { src: "/assets/gallery/jhb-women-expo-1.jpg", alt: "SDLC Johannesburg team at the Women in Business Expo stall in Dowerglen, Edenvale" },
      { src: "/assets/gallery/jhb-women-expo-3.jpg", alt: "Official Women in Business Expo SDLC JHB invitation poster (31 October 2026)" },
      { src: "/assets/gallery/jhb-women-expo-2.jpg", alt: "Full S-D-L-C In-a-Box exhibition table at Dickie Fritz Hall, Edenvale" },
      { src: "/assets/gallery/jhb-women-expo-5.jpg", alt: "Founder at the SDLC Entrepreneurship Pillar stall in Johannesburg" },
      { src: "/assets/gallery/jhb-women-expo-4.jpg", alt: "SDLC branded hot water bottle cover, water bottle, and wellness kit items" },
      { src: "/assets/gallery/jhb-women-expo-6.jpg", alt: "Secure the Bag financial literacy guides and SDLC brochures" },
      { src: "/assets/gallery/jhb-women-expo-7.jpg", alt: "Entrepreneurship In-a-Box featuring Business Practice guide and journal" },
      { src: "/assets/gallery/jhb-women-expo-8.jpg", alt: "Mental Health In-a-Box featuring Secret Garden mindfulness colouring book and bath salts" },
    ],
  },
];

export const ADDITIONAL_GALLERY_COLLECTIONS: ImpactTimelineEvent[] = [
  {
    id: "palesa-pads-collection",
    year: "Partnership",
    dateLabel: "Ongoing Partnership",
    location: "KwaZulu-Natal & Gauteng School Outreaches",
    region: "National",
    pillar: "Community Drive",
    pillarColor: "#DA8688",
    title: "Palesa Pads & SDLC Reusable Sanitary Pad Partnership",
    partner: "Palesa Pads & SnapScan",
    summary:
      "Palesa Pads are high-quality, reusable cloth sanitary pads made in South Africa — leak-free, easy to wash, and guaranteed for 5 years.",
    detailedStory:
      "Palesa Pads are high-quality, reusable cloth sanitary pads made in South Africa. They are more comfortable than disposable pads, can be worn for longer with no odour and fewer menstrual cramps due to the absence of chemicals. They are leak-free, easy to wash, and come with a guarantee of 5 years — because her period shouldn't hold her back.",
    heroImage: "/assets/gallery/palesa-1.jpg",
    images: [
      { src: "/assets/gallery/palesa-1.jpg", alt: "Palesa Pads and SDLC school outreach" },
      { src: "/assets/gallery/palesa-2.jpg", alt: "Palesa Pads reusable sanitary towel distribution for learners" },
    ],
  },
];
