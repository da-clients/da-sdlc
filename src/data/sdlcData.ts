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
      "South Africa faces one of the highest rates of gender-based violence and childhood trauma globally. We treat emotional wellbeing and nervous-system regulation as the starting point for every learner and woman we serve.",
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
    paragraphs: [
      "Education at SDLC goes beyond textbook theory. We partner directly with schools, municipal libraries, and community centres across KwaZulu-Natal to cultivate reading literacy, practical life skills, and personal leadership.",
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

export const CSI_PARTNERSHIP_TRACK = {
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
  dateLabel: string;
  location: string;
  pillar: "Mental Health" | "Entrepreneurship" | "Education" | "Community Drive";
  pillarColor: string;
  title: string;
  partner: string;
  summary: string;
  images: { src: string; alt: string }[];
}

export const IMPACT_TIMELINE_EVENTS: ImpactTimelineEvent[] = [
  {
    id: "stanger-equine-2026",
    dateLabel: "2026 Q1 Outreach",
    location: "Buzz Barn, Fairview Estate — Ballito, KZN",
    pillar: "Mental Health",
    pillarColor: "#84CEE2",
    title: "Stanger Training School for Special Needs × SDLC Equine & Breathwork Day",
    partner: "Hosted at Buzz Barn, Fairview Estate (Ballito)",
    summary:
      "20 learners from Stanger Training School for Special Needs experienced the magic of equine-assisted therapy during a dedicated hippo-therapy session in Ballito. We began the morning with gentle grounding breathwork to help the children feel calm and safe, followed by somatic movement to awaken and regulate the body.",
    images: [
      { src: "/assets/gallery/stanger-1.jpg", alt: "Stanger Special Needs learners grounding breathwork at Buzz Barn Ballito" },
      { src: "/assets/gallery/stanger-2.jpg", alt: "Equine therapy and somatic movement session with SDLC" },
      { src: "/assets/gallery/stanger-3.jpg", alt: "Group celebration at Fairview Estate Ballito with Stanger learners" },
    ],
  },
  {
    id: "ethekwini-youth-econ-2026",
    dateLabel: "20 March 2026",
    location: "Durban Exhibition — eThekwini Municipality",
    pillar: "Entrepreneurship",
    pillarColor: "#90D1BB",
    title: "Youth Economic Development Programme Exhibition 2026",
    partner: "Hosted by eThekwini Municipality (Durban)",
    summary:
      "On 20 March 2026, SDLC had the honour of exhibiting at the Youth Economic Development Programme hosted by eThekwini Municipality in Durban. We connected directly with ambitious young entrepreneurs ready to step into their purpose, launch micro-enterprises, and build sustainable livelihoods.",
    images: [
      { src: "/assets/gallery/youth-econ-1.jpg", alt: "SDLC exhibition stand at eThekwini Youth Economic Development Programme" },
      { src: "/assets/gallery/youth-econ-2.jpg", alt: "Mentoring young entrepreneurs in Durban on 20 March 2026" },
      { src: "/assets/gallery/youth-econ-3.jpg", alt: "Youth Economic Development Programme community connections" },
    ],
  },
  {
    id: "tongaat-library-2026",
    dateLabel: "2026 Literacy Drive",
    location: "Tongaat Beach Library & Seatides Combined School",
    pillar: "Education",
    pillarColor: "#DA8688",
    title: "eThekwini Tongaat Beach Library & Seatides Combined School Reading Initiative",
    partner: "In Partnership with eThekwini Municipality Libraries",
    summary:
      "SDLC and eThekwini Municipality's Tongaat Beach Library united to celebrate the power of reading with learners from Seatides Combined School. Students explored how literacy unlocks critical thinking, self-expression, and lifelong educational opportunity.",
    images: [
      { src: "/assets/gallery/tongaat-1.jpg", alt: "Seatides Combined School learners at Tongaat Beach Library literacy session" },
      { src: "/assets/gallery/tongaat-2.jpg", alt: "Interactive reading and youth development workshop with SDLC" },
      { src: "/assets/gallery/tongaat-3.jpg", alt: "Students and facilitators celebrating reading at Tongaat Beach Library" },
    ],
  },
  {
    id: "palesa-pads-2026",
    dateLabel: "2026 Ongoing Campaign",
    location: "KwaZulu-Natal Schools & Community Drives",
    pillar: "Community Drive",
    pillarColor: "#A4A5C6",
    title: "Palesa Pads × SDLC Menstrual Dignity Partnership",
    partner: "In Partnership with Palesa Pads & SnapScan",
    summary:
      "No girl should miss school because she cannot afford sanitary products. Through our dedicated partnership with Palesa Pads, supporters can sponsor reusable sanitary pad packs directly via QR code, keeping young women in the classroom with dignity and confidence.",
    images: [
      { src: "/assets/gallery/palesa-1.jpg", alt: "Palesa Pads and SDLC menstrual dignity school outreach" },
      { src: "/assets/gallery/palesa-2.jpg", alt: "Sanitary pad sponsorship distribution for learners" },
    ],
  },
];
