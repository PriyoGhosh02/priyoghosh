export type ChatMessage = { role: "user" | "assistant"; content: string };

// Complete, rich personal database about Priyo Ghosh
// Updated from resumes: quantified achievements, expanded Shopify/app-integration skills,
// corrected LinkedIn handle, and richer professional summary.
const KNOWLEDGE_BASE = {
  personalInfo: {
    name: "Priyo Ghosh",
    title: "Frontend Developer & Shopify Developer",
    subtitle: "React.js • Next.js • Shopify • Conversion-Focused eCommerce",
    location: "Dhaka, Bangladesh",
    nationality: "Bangladeshi",
    email: "priyoghosh02@gmail.com",
    phone: "+8801743457164",
    website: "https://priyoghosh.vercel.app",
    github: "https://github.com/PriyoGhosh02",
    linkedin: "https://www.linkedin.com/in/priyoghosh02/",
    facebook: "https://www.facebook.com/priyo.ghosh.02",
    availableForWork: true,
    workType: ["Remote", "Freelance", "Full-Time", "Contract"],
    timezone: "GMT +6 (also comfortable with PST-hours overlap for US clients)",
    languages: ["English", "Bangla"],
  },
  summary:
    "Results-driven Web Developer with 1+ years of professional experience spanning custom frontend engineering (React.js, Next.js, TypeScript) and Shopify eCommerce development (Liquid, theme customization, third-party app integration). Skilled at translating Figma designs into pixel-perfect, responsive, production-ready interfaces and conversion-focused storefronts. Delivered 60+ storefront/CMS builds, improved development efficiency by 25%, and increased user engagement by approximately 20% through performance, accessibility, and SEO improvements. Experienced collaborating with international clients across fashion, retail, jewelry, and pet product sectors using Git-based version control and staged deployment workflows.",
  education: [
    {
      institution: "Green University of Bangladesh",
      degree: "B.Sc. in Computer Science and Engineering (CSE)",
      duration: "2022 - 2026",
      expectedGraduation: "2026",
      highlights: [
        "Strong foundation in software engineering, algorithms, databases, and web systems.",
        "Created projects involving database design, SQL triggers, and responsive UI interfaces.",
        "Actively balanced academic studies with professional web development and freelancing.",
      ],
    },
    {
      institution: "Kaliganj Govt. College",
      degree: "HSC (Science)",
      duration: "Completed in 2021",
      highlights: ["Solid background in mathematics, physics, and analytical problem-solving."],
    },
    {
      institution: "Dr. Mujib-Ruby Model High School",
      degree: "SSC (Science)",
      duration: "Completed in 2019",
      highlights: ["Developed early interest in science, computers, and mathematics."],
    },
  ],
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "SCSS",
      "REST APIs",
      "Responsive & Mobile-First Design",
    ],
    backend: ["Node.js", "Express.js", "REST API", "MongoDB", "MySQL", "Firebase"],
    ecommerce: [
      "Shopify Theme Development & Customization",
      "Shopify Liquid",
      "Custom Sections",
      "Shopify CLI",
      "Shopify Admin API",
      "GraphQL API",
      "Shopify Metafields",
      "AJAX Cart",
      "Online Store 2.0",
      "Subscription & Checkout Optimization",
    ],
    appsIntegrations: ["ReCharge", "Klaviyo", "Rebuy", "AfterSell", "Okendo", "Yotpo"],
    performanceQA: [
      "Google Analytics",
      "A/B Testing",
      "Cross-Browser/Cross-Device Testing",
      "WCAG Accessibility",
      "Site Speed Optimization",
      "SEO Fundamentals",
    ],
    cms: ["WordPress", "Contentful"],
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
    tools: ["Git", "GitHub", "CI/CD Workflows", "Staged Deployments", "VS Code", "Figma", "Postman", "Vercel", "Netlify"],
  },
  about: `I'm a full stack web developer based in Dhaka, Bangladesh, specializing in React.js, Next.js, Node.js, and Shopify development. I enjoy building modern, responsive, fast websites with clean UI, optimized performance, and scalable architecture. I have professional experience building CMS websites, custom Shopify sections, REST APIs, and responsive frontend applications. I'm passionate about continuous learning, UI/UX refinement, and competitive programming.`,
  experience: [
    {
      role: "Frontend Developer",
      company: "Softvence Delta · Bitopia Group",
      duration: "Dec 2025 - Present",
      location: "Softvence Agency, Dhaka, Bangladesh",
      description:
        "Developing modern, responsive web applications, Shopify custom sections, and CMS solutions using React.js, Next.js, TypeScript, Liquid, and Tailwind CSS while collaborating with cross-functional teams.",
      achievements: [
        "Developed 60+ responsive web interfaces, Shopify custom sections, and CMS components ensuring cross-browser/cross-device compatibility.",
        "Collaborated with designers to translate 15+ complex Figma wireframes into pixel-perfect, production-ready storefronts.",
        "Built reusable UI/component systems that boosted team development efficiency by 25%, supporting faster QA and debugging.",
        "Integrated and troubleshot third-party apps (ReCharge, Klaviyo, Rebuy, AfterSell, Okendo, Yotpo) to support conversion-focused checkout and post-purchase flows.",
        "Optimized mobile performance and WCAG-aligned accessibility, increasing user engagement by approximately 20%.",
        "Delivered frontend and Shopify storefront work for international clients across fashion, retail, jewelry, and pet product sectors using Git-based version control and staged deployment workflows.",
      ],
      stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Liquid", "Node.js", "MongoDB", "Git"],
    },
    {
      role: "Web Developer",
      company: "Sardar IT",
      duration: "Aug 2025 - Nov 2025",
      location: "Sardarit BD, Dhaka, Bangladesh",
      description:
        "Developed responsive client websites by converting Figma designs into pixel-perfect interfaces and implementing modern frontend best practices.",
      achievements: [
        "Delivered 30+ responsive landing pages and business sites with 95% Figma design accuracy across browsers and devices.",
        "Improved website loading speeds and page performance, applying SEO fundamentals and frontend best practices.",
        "Built reusable UI components using Tailwind CSS and CSS3.",
        "Integrated custom styles and Liquid sections into Shopify storefronts for international clients.",
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git", "Liquid"],
    },
    {
      role: "Competitive Programmer",
      company: "Codeforces",
      duration: "2022 - Present",
      location: "Remote / Online",
      description:
        "Strengthening problem-solving, algorithms, and data structures through consistent competitive programming practice.",
      achievements: [
        "Solved 300+ algorithmic problems on Codeforces.",
        "Regularly participates in timed coding contests.",
        "Improved analytical thinking and debugging efficiency.",
        "Practices time-efficient and memory-efficient coding strategies.",
      ],
      stack: ["C++", "C", "Java", "Algorithms", "Data Structures"],
    },
  ],
  achievements: [
    "Delivered 60+ storefront/CMS builds for international clients.",
    "Improved development efficiency by 25% through reusable component/section systems.",
    "Increased user engagement by ~20% via performance, accessibility, and SEO improvements.",
    "Delivered 30+ responsive landing pages with 95% Figma design accuracy.",
    "Built a personal portfolio site scoring 90+ on Google Lighthouse performance.",
    "Modeled a relational database for 1,000+ academic records using advanced SQL joins, triggers, and normalization.",
  ],
  projects: [
    {
      title: "Muni Diva",
      category: "Client Project",
      type: "Shopify",
      year: "2026",
      desc: "Modern beauty Shopify store featuring engaging storytelling, polished UI, and clarity.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://munidiva.de/",
    },
    {
      title: "The Atelier London",
      category: "Client Project",
      type: "Shopify",
      year: "2026",
      desc: "Luxury Shopify website presenting handcrafted interior artwork through refined, premium storytelling.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://theatelier.london/",
    },
    {
      title: "Goedhoesje",
      category: "Client Project",
      type: "Shopify",
      year: "2026",
      desc: "Large-scale Shopify accessories store with tailored collections and streamlined shopping flow.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://goedhoesje.nl/",
    },
    {
      title: "Bayt El Hijab",
      category: "Client Project",
      type: "Shopify",
      year: "2026",
      desc: "Elegant Shopify fashion store featuring custom collections, refined visuals, and responsive design.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://baytelhijab.com/",
    },
    {
      title: "BTN Arts",
      category: "Client Project",
      type: "Shopify",
      year: "2026",
      desc: "Custom Shopify art gallery blending immersive visuals with responsive product storytelling.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://btnarts.com/",
    },
    {
      title: "Belleau Lumina",
      category: "Client Project",
      type: "Shopify",
      year: "2026",
      desc: "Premium skincare Shopify store with custom sections and a conversion-focused layout.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://belleau-lumina.com/",
    },
    {
      title: "AVORA PelviPulse Pro",
      category: "Client Project",
      type: "Shopify",
      year: "2026",
      desc: "Custom Shopify landing page optimized for conversions, responsiveness, and smooth shopping.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://www.my-avora.com/products/avora-pelvipulse-pro",
    },
    {
      title: "ULTIMAX Nutrition",
      category: "Concept Work",
      type: "Shopify",
      year: "2026",
      desc: "Bold fitness supplement Shopify concept with conversion-focused product showcases and energy.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://ultimax-nutrition-2.myshopify.com/",
      password: "1",
    },
    {
      title: "Warmora",
      category: "Concept Work",
      type: "Shopify",
      year: "2026",
      desc: "Minimal winter fashion Shopify concept designed for premium apparel, accessories, and elegance.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://winter-fashion-8258.myshopify.com/",
      password: "1",
    },
    {
      title: "OTAP",
      category: "Concept Work",
      type: "Shopify",
      year: "2026",
      desc: "Futuristic anime-inspired Shopify store crafted for collectibles, apparel, and accessories.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://otap-2.myshopify.com/",
      password: "1",
    },
    {
      title: "JinglePaws",
      category: "Concept Work",
      type: "Shopify",
      year: "2026",
      desc: "Festive one-product Shopify store designed for a seasonal pet accessory brand.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://pet-jingle-bell.myshopify.com/",
      password: "1",
    },
    {
      title: "Meat Bazer",
      category: "Concept Work",
      type: "Shopify",
      year: "2026",
      desc: "Premium meat delivery Shopify concept with polished product pages and modern eCommerce design.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://meat-bazer.myshopify.com/",
      password: "1",
    },
    {
      title: "Tinko Toys",
      category: "Concept Work",
      type: "Shopify",
      year: "2026",
      desc: "Colorful toy store concept featuring playful UI, custom collections, and responsive layouts.",
      tags: ["shopify", "liquid", "css", "javascript"],
      liveUrl: "https://tinko-toy.myshopify.com/",
      password: "1",
    },
    {
      title: "Priyo Ghosh Portfolio",
      category: "Custom Build",
      type: "Custom Build",
      year: "2026",
      desc: "A modern, mobile-first developer portfolio (90+ Google Lighthouse score) showcasing Shopify work, skills, experience, and professional growth.",
      tags: ["react", "nextjs", "tailwindcss", "typescript"],
      liveUrl: "https://priyoghosh.vercel.app/",
    },
    {
      title: "University Management System",
      category: "Database",
      type: "Database Build",
      year: "2024",
      desc: "A database-driven project modeling 1,000+ academic records using SQL joins, triggers, and normalization to manage student data, course registrations, and instructors.",
      tags: ["sql", "mysql", "database"],
      liveUrl: "#",
    },
  ],
  services: [
    "Full Stack Web Development (React.js, Next.js, Node.js)",
    "Custom Shopify Theme Development & Customization",
    "Figma-to-React / Figma-to-Shopify Pixel-Perfect Conversion",
    "Third-Party App Integration (ReCharge, Klaviyo, Rebuy, AfterSell, Okendo, Yotpo)",
    "API Integrations & Custom Web Tools (REST, GraphQL, Shopify Admin API)",
    "Website Performance, Accessibility (WCAG) & SEO Optimization",
    "CMS Development & Management (WordPress, Contentful)",
    "Responsive Front-end Layouts & Bug Fixing",
  ],
  strengths: [
    "Clean, scalable, and maintainable codebase structure.",
    "Pixel-perfect visual execution matching Figma designs precisely (95%+ design accuracy).",
    "Track record of measurable impact: 25% efficiency gains, ~20% engagement lift.",
    "Strong logical problem-solving skills honed through competitive programming.",
    "Fast technology adaptation and continuous learning mindset.",
    "Clear, transparent, and direct communication with clients and teammates.",
  ],
  careerGoals: {
    current: "Currently working as a Frontend and Shopify Developer.",
    future:
      "Aiming to grow into a Senior Full Stack Engineer specializing in high-performance web systems, headless e-commerce, cloud architecture, and AI-assisted workflows.",
  },
  interests: [
    "Modern Web Architecture & Headless CMS",
    "E-Commerce Innovation & Custom Storefronts",
    "Competitive Programming & Algorithmic Optimizations",
    "User Interface Motion Design & Micro-animations",
    "Emerging AI Developer Tools & Tech stacks",
  ],
  certifications: [
    "Responsive Web Design",
    "Advanced JavaScript",
    "React Development",
    "Node.js Fundamentals",
  ],
};

// Intent Definitions for the scoring-based categorization
type IntentId =
  | "greeting"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "contact"
  | "availability"
  | "services"
  | "strengths"
  | "achievements"
  | "apps_integrations"
  | "competitive_programming"
  | "shopify"
  | "figma"
  | "thanks"
  | "hobbies"
  | "location"
  | "more"
  | "fallback";

interface IntentDef {
  id: IntentId;
  keywords: string[];
  patterns: RegExp[];
}

const INTENTS: IntentDef[] = [
  {
    id: "greeting",
    keywords: [
      "hi",
      "hello",
      "hey",
      "yo",
      "hola",
      "greetings",
      "good morning",
      "good afternoon",
      "good evening",
      "whats up",
      "sup",
      "howdy",
    ],
    patterns: [/^(hi|hello|hey|yo|greetings|howdy)\b/i, /^whats? up\b/i, /hello there/i],
  },
  {
    id: "about",
    keywords: [
      "who are you",
      "yourself",
      "introduce",
      "who is priyo",
      "bio",
      "background",
      "about you",
      "your story",
      "tell me about yourself",
      "priyo ghosh",
      "summary",
    ],
    patterns: [
      /who are you/i,
      /tell me.*about.*yourself/i,
      /introduce.*yourself/i,
      /your background/i,
      /who is priyo/i,
      /about you/i,
      /professional summary/i,
    ],
  },
  {
    id: "skills",
    keywords: [
      "skills",
      "stack",
      "tech",
      "technologies",
      "languages",
      "frontend",
      "backend",
      "tools",
      "toolkit",
      "frameworks",
      "libraries",
      "expert",
      "best at",
      "strongest",
      "react",
      "next.js",
      "nextjs",
      "node",
      "typescript",
      "javascript",
      "tailwind",
      "liquid",
      "css",
      "graphql",
      "material ui",
    ],
    patterns: [
      /(what|which).*(tech|stack|skill|language|tool)/i,
      /what do you use/i,
      /your toolkit/i,
      /what languages/i,
      /skills list/i,
    ],
  },
  {
    id: "projects",
    keywords: [
      "projects",
      "portfolio",
      "built",
      "made",
      "showcase",
      "client",
      "concept",
      "work",
      "examples",
      "apps",
      "websites",
      "stores",
      "muni diva",
      "atelier",
      "goedhoesje",
      "bayt el hijab",
      "avora",
      "jinglepaws",
      "meat bazer",
      "tinko",
      "ultimax",
      "warmora",
      "otap",
      "links",
      "live url",
      "github",
    ],
    patterns: [
      /what.*(built|made|developed)/i,
      /show.*projects/i,
      /your projects/i,
      /examples of.*work/i,
      /any.*websites/i,
      /project details/i,
      /showcase/i,
    ],
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "work",
      "job",
      "career",
      "employment",
      "history",
      "softvance",
      "softvence",
      "bitopia",
      "sardar",
      "developer",
      "worked at",
      "companies",
      "duration",
      "working",
    ],
    patterns: [
      /work.*experience/i,
      /job.*history/i,
      /where.*worked/i,
      /your experience/i,
      /employment history/i,
      /companies you worked/i,
    ],
  },
  {
    id: "education",
    keywords: [
      "education",
      "university",
      "college",
      "school",
      "study",
      "studied",
      "graduated",
      "graduation",
      "bsc",
      "cse",
      "green university",
      "gub",
      "academic",
      "hsc",
      "ssc",
      "qualifications",
    ],
    patterns: [
      /where.*study/i,
      /your education/i,
      /what.*degree/i,
      /did you graduate/i,
      /academic background/i,
    ],
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "reach",
      "email",
      "phone",
      "call",
      "message",
      "linkedin",
      "github",
      "facebook",
      "social",
      "address",
      "get in touch",
      "connect",
      "mail",
      "number",
      "tel",
    ],
    patterns: [
      /how.*(reach|contact)/i,
      /your (email|phone|linkedin|github)/i,
      /get in touch/i,
      /contact info/i,
    ],
  },
  {
    id: "availability",
    keywords: [
      "available",
      "hire",
      "job",
      "work",
      "freelance",
      "remote",
      "full-time",
      "contract",
      "open to",
      "hiring",
      "opportunities",
    ],
    patterns: [
      /are you (available|hiring|open to work)/i,
      /can i hire/i,
      /looking for.*job/i,
      /are you looking/i,
    ],
  },
  {
    id: "services",
    keywords: [
      "services",
      "offer",
      "provide",
      "do for me",
      "help me",
      "tasks",
      "can you build",
      "can you do",
      "skills list",
    ],
    patterns: [/what.*(offer|provide|do|services)/i, /how can you help/i, /what services/i],
  },
  {
    id: "strengths",
    keywords: [
      "strengths",
      "why hire",
      "different",
      "best quality",
      "advantages",
      "unique",
      "clean code",
      "problem solving",
      "why should i",
      "makes you a good developer",
      "stand out",
      "why choose you",
      "qualities",
      "values",
    ],
    patterns: [
      /why.*hire/i,
      /what makes you.*different/i,
      /your strengths/i,
      /why are you/i,
      /what makes you.*(good|unique|stand out)/i,
      /why.*(choose|select|hire).*you/i,
      /good developer/i,
    ],
  },
  {
    id: "achievements",
    keywords: [
      "achievements",
      "results",
      "metrics",
      "numbers",
      "impact",
      "kpi",
      "increased",
      "improved",
      "60+",
      "25%",
      "20%",
      "lighthouse",
      "measurable",
      "proof",
      "accomplishments",
    ],
    patterns: [
      /what.*(achieved|accomplish)/i,
      /any.*(results|metrics|numbers)/i,
      /measurable.*impact/i,
      /prove.*(skills|value)/i,
    ],
  },
  {
    id: "apps_integrations",
    keywords: [
      "recharge",
      "klaviyo",
      "rebuy",
      "aftersell",
      "okendo",
      "yotpo",
      "third-party app",
      "third party app",
      "integration",
      "integrations",
      "subscription app",
      "reviews app",
      "marketing automation",
    ],
    patterns: [/third.?party app/i, /app integration/i, /which apps/i, /subscription.*app/i],
  },
  {
    id: "competitive_programming",
    keywords: [
      "codeforces",
      "competitive",
      "programming",
      "problems",
      "algorithms",
      "dsa",
      "data structures",
      "solved",
      "rating",
      "cpp",
      "c++",
    ],
    patterns: [
      /competitive programming/i,
      /codeforces/i,
      /problem.*solving/i,
      /how many problems/i,
    ],
  },
  {
    id: "shopify",
    keywords: [
      "shopify",
      "liquid",
      "theme",
      "ecommerce",
      "e-commerce",
      "store",
      "custom sections",
      "metafields",
      "prestige",
      "ajax cart",
      "online store 2.0",
      "admin api",
      "graphql api",
      "checkout",
    ],
    patterns: [/shopify/i, /liquid/i, /theme development/i, /e-?commerce/i, /shopify developer/i],
  },
  {
    id: "figma",
    keywords: [
      "figma",
      "sketch",
      "convert figma",
      "design to react",
      "design to shopify",
      "pixel perfect",
      "wireframe",
    ],
    patterns: [/figma to/i, /convert figma/i, /design.*code/i, /wireframe/i],
  },
  {
    id: "thanks",
    keywords: [
      "thanks",
      "thank you",
      "awesome",
      "great",
      "cool",
      "nice",
      "perfect",
      "appreciated",
      "ty",
      "helpful",
    ],
    patterns: [/thank.*you/i, /thanks/i, /awesome/i, /great/i, /appreciate/i],
  },
  {
    id: "hobbies",
    keywords: [
      "hobbies",
      "interests",
      "free time",
      "fun",
      "apart from programming",
      "pass time",
      "music",
      "books",
      "sports",
      "games",
    ],
    patterns: [/what.*do.*free time/i, /hobbies/i, /interests/i],
  },
  {
    id: "location",
    keywords: [
      "location",
      "live",
      "where are you",
      "dhaka",
      "bangladesh",
      "from",
      "country",
      "city",
      "timezone",
      "gmt",
      "pst",
    ],
    patterns: [/where.*(live|from)/i, /your location/i, /what country/i, /where are you/i],
  },
  {
    id: "more",
    keywords: [
      "more",
      "details",
      "explain",
      "elaborate",
      "tell me more",
      "show more",
      "further",
      "examples",
      "continue",
    ],
    patterns: [
      /tell me more/i,
      /elaborate/i,
      /more details/i,
      /give me.*examples/i,
      /show.*more/i,
      /tell me further/i,
    ],
  },
];

// Helper to normalize input string
const normalize = (value: string) => value.toLowerCase().trim();

// Scoring classification engine
function detectIntentId(text: string): IntentId {
  let bestIntent: IntentId = "fallback";
  let maxScore = 0;

  for (const def of INTENTS) {
    let score = 0;

    // 1. Strict regex patterns (highly specific phrases)
    for (const pattern of def.patterns) {
      if (pattern.test(text)) {
        score += 15;
      }
    }

    // 2. Keyword check
    for (const keyword of def.keywords) {
      const hasSpecial = /[.*+?^${}()|[\]\\]/.test(keyword);
      if (hasSpecial) {
        if (text.includes(keyword)) {
          score += 3;
        }
      } else {
        // Create a regex for keyword with boundaries to prevent partial matches like "hire" in "shire"
        const keywordRegex = new RegExp(`\\b${keyword}\\b`, "i");
        if (keywordRegex.test(text)) {
          score += 3;
        } else if (text.includes(keyword)) {
          score += 1; // Substring match
        }
      }
    }

    // 3. Exact matches or close synonyms
    if (text === def.id || text === def.id.replace(/_/g, " ")) {
      score += 6;
    }

    if (score > maxScore) {
      maxScore = score;
      bestIntent = def.id;
    }
  }

  // Fallback threshold
  if (maxScore < 2.5) {
    return "fallback";
  }

  return bestIntent;
}

// Conversation-derived previous intent helper
function getPreviousUserIntent(history: ChatMessage[]): IntentId {
  // Loop backwards through message history.
  // We want to find the last user message BEFORE the current one.
  // The current message is already appended to the history, so we look at the second to last.
  if (history.length < 2) return "fallback";

  const userMessages = history.filter((m) => m.role === "user");
  // The current message is userMessages[userMessages.length - 1].
  // The previous user message is userMessages[userMessages.length - 2].
  if (userMessages.length >= 2) {
    const prevText = normalize(userMessages[userMessages.length - 2].content);
    return detectIntentId(prevText);
  }

  return "fallback";
}

// Dynamic response templates to humanize replies
export function getPortfolioReply(message: string, history: ChatMessage[] = []): string {
  const normalizedText = normalize(message);

  if (!normalizedText) {
    return "Hey! I'm here to share details about my projects, coding skills, experience, or how to get in touch. What's on your mind? 😊";
  }

  // Detect current user intent
  const currentIntent = detectIntentId(normalizedText);
  // Detect previous user intent for context-sensitive answers (e.g. "tell me more")
  const previousIntent = getPreviousUserIntent(history);

  // Intent response dispatcher
  switch (currentIntent) {
    case "greeting": {
      const greetings = [
        "Hey! Great to have you here. I'm Priyo. 😊 What would you like to know about my work, skills, or projects?",
        "Hey there! 👋 I'm Priyo, a Frontend and Shopify Developer. How can I help you today?",
        "Hello! I'm Priyo Ghosh. I build high-performance web applications and conversion-focused Shopify storefronts. What are you interested in exploring?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    case "about": {
      return (
        `I'm Priyo, a Frontend and Shopify Developer based in Dhaka. I spend my time building clean, custom React/Next.js interfaces and optimizing Shopify e-commerce stores for better conversion rates.\n\n` +
        `Over the last year, I've delivered around 60 storefront and CMS builds. I focus on translating design wireframes into pixel-perfect code while speeding up site loads and improving user experience. ` +
        `Would you like to check out my skills, some of my proudest achievements, or see my projects?`
      );
    }

    case "skills": {
      return (
        `My technical toolkit is focused heavily on building modern, high-performance web interfaces:\n\n` +
        `• **Frontend**: I build custom UI systems using **React.js**, **Next.js**, and **TypeScript**, styled with **Tailwind CSS** or **Material UI**.\n` +
        `• **Shopify eCommerce**: I write custom Liquid themes, build reusable sections, set up AJAX cart workflows, and configure Shopify Metafields/Metaobjects.\n` +
        `• **Shopify Apps**: I integrate and troubleshoot apps like **ReCharge** (subscriptions), **Klaviyo** (marketing), **Rebuy**/**AfterSell** (upsells), and **Okendo**/**Yotpo** (reviews).\n` +
        `• **Backend & Databases**: I write APIs with **Node.js** and **Express.js**, and work with **MongoDB** and **MySQL**.\n` +
        `• **Performance & SEO**: I optimize site speed, ensure WCAG-aligned accessibility, and set up solid SEO foundations.\n\n` +
        `I also use Git/GitHub with staged development workflows. Is there a particular technology or tool you're interested in?`
      );
    }

    case "projects": {
      const clientHighlights = KNOWLEDGE_BASE.projects
        .filter((p) => p.category === "Client Project")
        .slice(0, 3)
        .map((p) => `• **${p.title}** (Shopify, Liquid): ${p.liveUrl}`)
        .join("\n");

      return (
        `I've delivered 60+ storefront and CMS builds, including live client stores and concept work. Here are a few notable client projects I've worked on recently:\n\n` +
        `${clientHighlights}\n\n` +
        `I also built this portfolio website from scratch using React, Next.js, and TypeScript (with a 90+ Google Lighthouse score!). ` +
        `Feel free to ask me about any of these, or say "tell me more" to check out some of my concept projects like OTAP or Warmora.`
      );
    }

    case "experience": {
      return (
        `I've been working professionally as a frontend and web developer for over a year now:\n\n` +
        `1. **Frontend Developer** at **Softvence Delta** (Dec 2025 - Present):\n` +
        `   I build custom React/Next.js web applications, CMS portals, and custom Shopify storefronts. I developed reusable component libraries that boosted our team's development cycle by 25%.\n\n` +
        `2. **Web Developer** at **Sardar IT** (Aug 2025 - Nov 2025):\n` +
        `   I converted Figma wireframes into pixel-perfect, responsive landing pages (with 95%+ design accuracy) and integrated custom Liquid sections for Shopify storefronts.\n\n` +
        `Would you like to hear about my achievements in these roles, or how I collaborate with international clients?`
      );
    }

    case "education": {
      return (
        `I'm currently working towards my **B.Sc. in Computer Science and Engineering** at **Green University of Bangladesh** (graduating in 2026). It has given me a great foundation in data structures, database design, and software engineering.\n\n` +
        `Before university, I completed my high school studies in science at Kaliganj Govt. College.\n\n` +
        `I love combining rigorous computer science theory with creative, user-friendly frontend builds!`
      );
    }

    case "contact": {
      return (
        `I would love to connect and chat! You can reach me directly through any of these options:\n\n` +
        `• 📧 **Email**: [priyoghosh02@gmail.com](mailto:priyoghosh02@gmail.com)\n` +
        `• 📞 **WhatsApp/Phone**: [+8801743457164](tel:+8801743457164)\n` +
        `• 💼 **LinkedIn**: [linkedin.com/in/priyoghosh02](https://www.linkedin.com/in/priyoghosh02/)\n` +
        `• 🐙 **GitHub**: [github.com/PriyoGhosh02](https://github.com/PriyoGhosh02)\n` +
        `• 🌐 **Portfolio**: [priyoghosh.vercel.app](https://priyoghosh.vercel.app)\n\n` +
        `Feel free to shoot me an email, a message on WhatsApp, or connect on LinkedIn. I reply pretty quickly!`
      );
    }

    case "availability": {
      return (
        `Yes! I am currently **available** for remote work, freelance projects, and full-time contracts.\n\n` +
        `My local timezone is GMT+6, but I am very flexible and regularly shift my schedule to overlap with US (PST/EST) or European work hours to sync with international teams. ` +
        `If you have a project or store in mind, let's connect!`
      );
    }

    case "services": {
      return (
        `Here are the services I offer to help bring web projects to life:\n\n` +
        `• **Full Stack Web Development**: Custom frontend applications built with React.js and Next.js.\n` +
        `• **Shopify Development**: Custom Liquid theme coding, custom sections, AJAX drawers, and metafield configurations.\n` +
        `• **Figma-to-Code Conversion**: Translating design wireframes into pixel-perfect, responsive layouts.\n` +
        `• **Third-Party Shopify App Integrations**: Setting up and troubleshooting subscriptions, marketing automation, upsells, and reviews.\n` +
        `• **Speed & SEO Optimization**: Improving page loading speeds, WCAG accessibility, and SEO structure.\n` +
        `• **CMS Setup**: Designing and configuring WordPress or Contentful templates.\n\n` +
        `I focus on clean code and pixel-perfect layouts. Do you have a design in Figma or a Shopify store that needs building?`
      );
    }

    case "strengths": {
      return (
        `What makes me stand out as a developer is my blend of logical problem solving, visual accuracy, and measurable business impact:\n\n` +
        `• **Clean & Scalable Code**: I write structured, modular code that's easy to maintain and expand.\n` +
        `• **Figma Precision**: I translate mockups into code with up to 95%+ design accuracy across screen sizes.\n` +
        `• **Algorithmic Thinking**: My competitive programming background helps me write highly optimized code and avoid page latency issues.\n` +
        `• **Client Focus**: I prioritize delivering measurable results (like speed gains and engagement improvements) and maintain clear, direct communication.\n\n` +
        `Let me know if you'd like to see the numbers behind my work—you can just ask about my achievements!`
      );
    }

    case "achievements": {
      return (
        `I'm proud of the real, measurable impact I've made in my projects so far:\n\n` +
        `• Delivered over **60 storefront and CMS builds** for global clients.\n` +
        `• **Improved development efficiency by 25%** at Softvence Delta by designing reusable component systems.\n` +
        `• **Boosted user engagement by about 20%** on client stores through speed optimization, WCAG accessibility, and SEO.\n` +
        `• Built **30+ custom landing pages** with 95%+ design accuracy.\n` +
        `• Modeled a relational database managing over **1,000 academic records** using advanced SQL joins and triggers.\n` +
        `• Built a custom portfolio site that scores **90+ on Google Lighthouse** performance.\n\n` +
        `Want to know the story behind any of these achievements? I'd love to share!`
      );
    }

    case "apps_integrations": {
      return (
        `I frequently integrate and troubleshoot third-party apps to add premium features to Shopify stores. Some of the apps I work with include:\n\n` +
        `• **Subscriptions**: ReCharge\n` +
        `• **Email & SMS Marketing**: Klaviyo\n` +
        `• **Upsells & Cross-sells**: Rebuy and AfterSell\n` +
        `• **Reviews & Social Proof**: Okendo and Yotpo\n\n` +
        `I integrate these directly into themes and resolve any script or layout conflicts so your store keeps running fast. What integrations does your store need?`
      );
    }

    case "competitive_programming": {
      return (
        `I'm active in competitive programming on **Codeforces**, where I've solved over 300+ algorithm challenges. It's a great way to keep my logical thinking and debugging efficiency sharp.\n\n` +
        `In web development, this translates to writing cleaner logic for things like database queries, sorting filters, and complex state management, making sure pages load fast and scale without leaks.`
      );
    }

    case "shopify": {
      return (
        `Shopify theme development is one of my core specialties. I write custom Liquid themes, build reusable sections, set up AJAX cart workflows, work with Shopify Admin and GraphQL APIs, and customize metafields using Online Store 2.0 standards.\n\n` +
        `I've delivered 60+ storefront builds and coordinate integrations with apps like ReCharge and Klaviyo. What kind of e-commerce features are you looking to build?`
      );
    }

    case "figma": {
      return (
        `I specialize in figma-to-code conversions. Whether you need a design converted into a component-driven React/Next.js app or customized Shopify Liquid sections, I ensure it's pixel-perfect (with up to 95%+ accuracy), fully responsive across all device sizes, and highly optimized for page speed.`
      );
    }

    case "thanks": {
      const thankReplies = [
        "You're very welcome! Let me know if there's anything else I can clarify. 😊",
        "No problem at all! Glad I could help. What else would you like to know?",
        "Anytime! Feel free to ask more about my projects, availability, or experience.",
      ];
      return thankReplies[Math.floor(Math.random() * thankReplies.length)];
    }

    case "hobbies": {
      return (
        `Besides web development, I spend time practicing algorithms and competitive programming. I also enjoy reading about modern web architectures, exploring emerging developer tools, and experimenting with interactive frontend micro-animations.\n\n` +
        `What about you? What kind of project brings you here today?`
      );
    }

    case "location": {
      return (
        `I'm based in **Dhaka, Bangladesh** (Timezone: GMT+6).\n\n` +
        `I work remotely with clients worldwide—including Germany, the UK, the Netherlands, and North America—and regularly align my schedule to ensure smooth communication. Where are you contacting me from?`
      );
    }

    case "more": {
      // Contextual follow-up response based on the previous intent
      switch (previousIntent) {
        case "projects": {
          return (
            `Sure! Here are some details on my Shopify concept projects:\n\n` +
            `• **ULTIMAX Nutrition**: A bold, high-energy fitness supplement store concept.\n` +
            `• **Warmora**: A clean, minimal winter fashion layout.\n` +
            `• **OTAP**: A futuristic anime merch store concept.\n\n` +
            `These showcase custom collection filters, landing page layouts, and pet product collections. Let me know if you'd like to talk about custom storefront features!`
          );
        }

        case "skills": {
          return (
            `Absolutely! Expanding on my backend and tooling skills:\n\n` +
            `• **Backend & DB**: I use **Node.js** and **Express.js** to build secure REST or GraphQL APIs, and work with **MongoDB** and **MySQL** for structured databases.\n` +
            `• **Workflow**: I use **Git/GitHub** for version control, along with staged deployments on platforms like **Vercel** or **Netlify** to make sure updates are fully tested before going live.\n\n` +
            `I focus on database query efficiency and clean middleware structures. Do you have a backend need for your app?`
          );
        }

        case "experience": {
          return (
            `Certainly! During my time at **Softvence Delta**, I've focused on creating modular component libraries that saved our team time and boosted coding efficiency by 25%. I also integrated custom Shopify apps like ReCharge for recurring subscriptions and worked on improving site speeds for client storefronts. Let me know if you'd like details on specific projects!`
          );
        }

        case "education": {
          return (
            `To share a bit more, my studies at **Green University of Bangladesh** have given me a great foundation in database management. For instance, I built a relational university management database project managing over 1,000 academic records using advanced SQL joins and triggers. It's really helped me write highly optimized database queries in my professional projects!`
          );
        }

        case "contact": {
          return (
            `Here are the direct links to my online profiles:\n\n` +
            `• 💼 **LinkedIn**: [linkedin.com/in/priyoghosh02](https://www.linkedin.com/in/priyoghosh02/)\n` +
            `• 🐙 **GitHub**: [github.com/PriyoGhosh02](https://github.com/PriyoGhosh02)\n` +
            `• 🌐 **Portfolio**: [priyoghosh.vercel.app](https://priyoghosh.vercel.app/)\n` +
            `• 📘 **Facebook**: [facebook.com/priyo.ghosh.02](https://www.facebook.com/priyo.ghosh.02)\n\n` +
            `Feel free to connect or check out my repositories. I look forward to hearing from you!`
          );
        }

        case "shopify": {
          return (
            `To expand on my Shopify capabilities, I focus on building custom functionalities without relying on too many third-party apps, which keeps pages loading quickly. This includes coding custom newsletter slide-ins, customized cart notes, custom currency selectors, and AJAX cart drawers. I make sure everything fits the Online Store 2.0 standards.`
          );
        }

        case "competitive_programming": {
          return (
            `My competitive programming experience helps me tackle complex frontend algorithms (such as data nesting, pagination, sorting filters) and backend route optimizations.\n\n` +
            `I enjoy analyzing Big-O space and time complexity, which helps prevent performance bottlenecks. Let me know if you have a performance optimization task!`
          );
        }

        case "achievements": {
          return (
            `Expanding on my achievements: my work on speed optimization, WCAG accessibility, and SEO at Softvence Delta drove a ~20% engagement lift for clients. I delivered 30+ responsive pages at Sardar IT with high fidelity, and my personal projects (like this site) are optimized to hit 90+ Lighthouse performance scores.`
          );
        }

        case "apps_integrations": {
          return (
            `For app integrations, I typically hook apps into Shopify's checkout and post-purchase loops. For example, setting up ReCharge for dynamic customer subscriptions, Klaviyo for email marketing triggers, and Rebuy/AfterSell for post-purchase upsells. I make sure scripts are deferred and loaded efficiently to protect page load speeds.`
          );
        }

        default: {
          return "I can elaborate further on my web development skills, details of my projects, work achievements, or academic studies. Just ask about the topic you're interested in, and I'll share more! 😊";
        }
      }
    }

    case "fallback":
    default: {
      const fallbacks = [
        "Hmm, I didn't quite catch that. 😅 But I'd love to help! Ask me about my skills, projects (like Muni Diva or OTAP), work history, achievements, or how to get in touch.",
        "I'm not sure I fully understand that question. Could you rephrase it? Or ask me about my Shopify apps/integrations, React, work experience, or contact channels!",
        "Oops, that's a bit outside my knowledge base. 💻 If you ask about my web development skills, my projects, achievements, or how to hire me, I'll have a clear answer for you!",
      ];
      return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
  }
}