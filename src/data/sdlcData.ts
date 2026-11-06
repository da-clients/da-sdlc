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
  pillar: string;
  letter: string;
  amountZAR: number;
  color: string;
  title: string;
  tagline: string;
  impactDescription: string;
  kitItems: string[];
}

export const SPONSOR_IN_A_BOX_TIERS: SponsorBoxOption[] = [
  {
    id: "box-mental-health",
    pillar: "Mental Health",
    letter: "M",
    amountZAR: 350,
    color: "#84CEE2",
    title: "Mental Health In-a-Box",
    tagline: "Nervous System & Emotional Regulation Kit",
    impactDescription:
      "Provides one primary school learner with somatic grounding tools, emotion-regulation journals, and interactive Courage Crew™ character prompt cards.",
    kitItems: [
      "SDLC Courage Crew™ Workbook",
      "Somatic Heart-Chest Grounding Card Set",
      "Sensory Calming & Breathing Balloon Tool",
      "Personal Reflection & Safe-Care Journal",
    ],
  },
  {
    id: "box-education",
    pillar: "Education",
    letter: "E",
    amountZAR: 350,
    color: "#DA8688",
    title: "Education In-a-Box",
    tagline: "Literacy & Foundational Learning Kit",
    impactDescription:
      "Equips an underserved learner or young mother with core literacy books, essential stationery, and personal leadership guides.",
    kitItems: [
      "Curated South African Storybook / Reader",
      "Complete School Stationery & Pencil Pack",
      "Personal Goal-Setting & Leadership Planner",
      "Maths & Reading Practice Activity Sheets",
    ],
  },
  {
    id: "box-entrepreneurship",
    pillar: "Entrepreneurship",
    letter: "E",
    amountZAR: 350,
    color: "#90D1BB",
    title: "Entrepreneurship In-a-Box",
    tagline: "Micro-Business Starter & Financial Literacy",
    impactDescription:
      "Enables a young person or aspiring female entrepreneur to formulate their business concept, manage basic bookkeeping, and build financial autonomy.",
    kitItems: [
      "Micro-Enterprise Step-by-Step Canvas",
      "Cash Flow & Budgeting Ledger Book",
      "Customer Pitch & Branding Guide",
      "Pricing & Market Strategy Toolkit",
    ],
  },
  {
    id: "box-technology",
    pillar: "Technology",
    letter: "T",
    amountZAR: 550,
    color: "#F2CB6F",
    title: "Technology In-a-Box",
    tagline: "Digital Literacy & AI Readiness Kit",
    impactDescription:
      "Bridges the digital divide with foundational computing guides, online cybersecurity safety prompts, and subsidized educational connectivity.",
    kitItems: [
      "Foundational Digital Skills & AI Guide",
      "Online Safety, Scams & Cyber-Awareness Handbook",
      "Offline Computing Logic Workbook",
      "Educational Data Connectivity Support",
    ],
  },
  {
    id: "box-full-term",
    pillar: "All 4 Pillars",
    letter: "M.E.E.T.",
    amountZAR: 1400,
    color: "#A4A5C6",
    title: "Full M.E.E.T. Empowerment Box",
    tagline: "Comprehensive Full-Term Child Transformation",
    impactDescription:
      "Sponsors a vulnerable learner across all 4 developmental pillars for an entire school term, integrating emotional, educational, enterprise, and digital backing.",
    kitItems: [
      "All 4 Individual In-a-Box Kits Combined",
      "Full Courage Crew™ Term Access & Teacher Check-ins",
      "Community Wellness & Literacy Support Participation",
      "Personalized Impact Progress Update for the Sponsor",
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
    title: "Palesa Reusable Sanitary Dignity Packs",
    category: "Social Enterprise",
    brandPartner: "Palesa Pads & SDLC",
    badgeColor: "#DA8688",
    tagline: "Keeping Girls in School with Washable, Reusable Menstrual Towels",
    description:
      "No young woman should miss up to 50 days of school each year due to period poverty. Palesa Pads produces high-grade, washable, reusable sanitary towels that last up to 5 years. By purchasing or sponsoring Palesa Packs through SDLC, supporters simultaneously keep learners in classrooms and support female-owned South African manufacturing.",
    dualBenefit: {
      forCommunity: "Keeps schoolgirls learning continuously with hygiene, comfort, and zero monthly supply anxiety.",
      forEnterprise: "Drives sustainable local manufacturing, environmental waste reduction, and verifiable social returns.",
    },
    ctaText: "Sponsor a Palesa Dignity Kit",
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
    location: "Padel 365, Greenstone Shopping Centre, Modderfontein",
    region: "Gauteng",
    pillar: "Community Drive",
    pillarColor: "#90D1BB",
    title: "Padel 365 Greenstone Tournament (Gauteng)",
    partner: "Co-hosted with TNT Creative Solutions & Padel 365",
    summary:
      "A high-energy sports fundraiser in Modderfontein, Gauteng, uniting corporate teams and players to fund In-a-Box school toolkits.",
    detailedStory:
      "On 25 October 2025, SDLC expanded its community footprint to Gauteng by partnering with TNT Creative Solutions for our official In-a-Box Fundraising Padel Tournament at Padel 365, Greenstone Shopping Centre. Teams competed across friendly and championship brackets, raising essential funding to manufacture and distribute In-a-Box learning and wellness kits for children in need.",
    heroImage: "/assets/gallery/padel-tournament-group.jpg",
    images: [
      { src: "/assets/gallery/padel-tournament-group.jpg", alt: "Tournament participants and supporters on court at Padel 365 Greenstone" },
      { src: "/assets/gallery/padel-tournament-poster.jpg", alt: "Official tournament poster co-hosted with TNT Creative Solutions" },
      { src: "/assets/gallery/padel-tournament-trophy.jpg", alt: "Championship winners receiving trophies and SDLC kits" },
      { src: "/assets/gallery/padel-tournament-court.jpg", alt: "Action on the courts during the In-a-Box fundraiser" },
    ],
  },
  {
    id: "stanger-equine-2026",
    year: "2026",
    dateLabel: "Q1 2026",
    location: "Buzz Barn, Fairview Estate — Ballito",
    region: "KwaZulu-Natal",
    pillar: "Mental Health",
    pillarColor: "#84CEE2",
    title: "Stanger Special Needs Equine Day (Ballito)",
    partner: "Hosted at Buzz Barn, Fairview Estate",
    summary:
      "20 special needs learners experienced sensory grounding, hippo-therapy movement, and equine connection in Ballito.",
    detailedStory:
      "20 learners from Stanger Training School for Special Needs experienced the restorative power of equine-assisted therapy during a dedicated morning in Ballito. The session opened with gentle grounding breathwork to help the children feel calm and safe, followed by somatic movement and horse interactions that stimulate motor function and emotional trust.",
    heroImage: "/assets/gallery/stanger-1.jpg",
    images: [
      { src: "/assets/gallery/stanger-1.jpg", alt: "Stanger Special Needs learners grounding breathwork at Buzz Barn Ballito" },
      { src: "/assets/gallery/stanger-2.jpg", alt: "Equine therapy and somatic movement session with SDLC" },
      { src: "/assets/gallery/stanger-3.jpg", alt: "Group celebration at Fairview Estate Ballito with Stanger learners" },
    ],
  },
  {
    id: "ethekwini-youth-econ-2026",
    year: "2026",
    dateLabel: "March 2026",
    location: "Durban Exhibition Centre, Durban",
    region: "KwaZulu-Natal",
    pillar: "Entrepreneurship",
    pillarColor: "#90D1BB",
    title: "eThekwini Youth Economic Summit (Durban)",
    partner: "eThekwini Municipality",
    summary:
      "Mentored emerging youth founders and showcased community micro-enterprise opportunities at Durban's premier economic summit.",
    detailedStory:
      "On 20 March 2026, SDLC exhibited at the Youth Economic Development Programme hosted by eThekwini Municipality in Durban. Simonia and our advisory mentors consulted with dozens of young entrepreneurs seeking guidance on turning practical crafts and skills into sustainable, legally sound micro-businesses.",
    heroImage: "/assets/gallery/youth-econ-1.jpg",
    images: [
      { src: "/assets/gallery/youth-econ-1.jpg", alt: "SDLC exhibition stand at eThekwini Youth Economic Development Programme" },
      { src: "/assets/gallery/youth-econ-2.jpg", alt: "Mentoring young entrepreneurs in Durban on 20 March 2026" },
      { src: "/assets/gallery/youth-econ-3.jpg", alt: "Youth Economic Development Programme community connections" },
    ],
  },
  {
    id: "tongaat-library-2026",
    year: "2026",
    dateLabel: "2026 Literacy Drive",
    location: "Tongaat Beach Library & Seatides Combined School",
    region: "KwaZulu-Natal",
    pillar: "Education",
    pillarColor: "#DA8688",
    title: "Seatides Combined School & Tongaat Beach Reading Initiative",
    partner: "eThekwini Municipality Libraries",
    summary:
      "Celebrated the transformative power of books and critical thinking with learners from Seatides Combined School.",
    detailedStory:
      "SDLC joined hands with eThekwini Municipality's Tongaat Beach Library to foster a love for reading among Seatides Combined School learners. Students explored interactive literacy tools, participated in storytelling circles, and learned how daily reading expands vocabulary and academic confidence.",
    heroImage: "/assets/gallery/tongaat-1.jpg",
    images: [
      { src: "/assets/gallery/tongaat-1.jpg", alt: "Seatides Combined School learners at Tongaat Beach Library literacy session" },
      { src: "/assets/gallery/tongaat-2.jpg", alt: "Interactive reading and youth development workshop with SDLC" },
      { src: "/assets/gallery/tongaat-3.jpg", alt: "Students and facilitators celebrating reading at Tongaat Beach Library" },
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
    title: "Lotusville Primary School Courage Crew™ (KZN)",
    partner: "Lotusville Primary School Educators & Administration",
    summary:
      "Brought somatic chest-grounding and calm balloon breathing to hundreds of learners at Lotusville Primary School hall assembly.",
    detailedStory:
      "In August 2026, SDLC facilitated an immersive emotional wellness assembly at Lotusville Primary School in Verulam, KZN. Led by Simonia and the team in pastel M.E.E.T. shirts, learners were guided through somatic heart-chest hand placements to regulate their central nervous systems, practiced mindful balloon breathing to manage anxiety, and were introduced to the Courage Crew™ character frameworks for healthy self-expression in the classroom.",
    heroImage: "/assets/gallery/lotusville-primary-grounding.jpg",
    images: [
      { src: "/assets/gallery/lotusville-primary-grounding.jpg", alt: "Learner practicing somatic heart-chest grounding at Lotusville Primary" },
      { src: "/assets/gallery/lotusville-primary-hall.jpg", alt: "Lotusville Primary School hall assembly with SDLC facilitators" },
      { src: "/assets/gallery/lotusville-primary-breathing.jpg", alt: "Balloon breathing and nervous system regulation exercise" },
      { src: "/assets/gallery/lotusville-primary-simonia.jpg", alt: "Simonia engaging learners with Courage Crew characters" },
      { src: "/assets/gallery/lotusville-primary-team.jpg", alt: "SDLC team with Lotusville Primary educators and leadership" },
      { src: "/assets/gallery/lotusville-primary-cards.jpg", alt: "Learners engaging with Courage Crew character cards" },
    ],
  },
  {
    id: "palesa-pads-ongoing",
    year: "Ongoing",
    dateLabel: "Ongoing",
    location: "National School Outreaches",
    region: "National",
    pillar: "Community Drive",
    pillarColor: "#A4A5C6",
    title: "Palesa Pads Menstrual Dignity Campaign",
    partner: "Palesa Pads & SnapScan",
    summary:
      "Distributing reusable, washable sanitary towels to keep vulnerable young women in school with full dignity and zero interruptions.",
    detailedStory:
      "Through our ongoing cause partnership with Palesa Pads, SDLC supplies schools with washable menstrual kits that provide up to five years of continuous hygiene protection. This initiative tackles the root causes of menstrual absenteeism, ensuring that dignity is never a barrier to educational attainment.",
    heroImage: "/assets/sponsors/palesa-pads-logo.png",
    images: [
      { src: "/assets/gallery/palesa-1.jpg", alt: "Palesa Pads and SDLC menstrual dignity school outreach" },
      { src: "/assets/gallery/palesa-2.jpg", alt: "Sanitary pad sponsorship distribution for learners" },
    ],
  },
];
