export type ChatMessage = { role: "user" | "assistant"; content: string };

// Complete, rich personal database about Priyo Ghosh
const KNOWLEDGE_BASE = {
  personalInfo: {
    name: "Priyo Ghosh",
    title: "Full Stack Web Developer & Shopify Expert",
    subtitle: "React • Next.js • Shopify • Node.js Developer",
    location: "Dhaka, Bangladesh",
    nationality: "Bangladeshi",
    email: "priyoghosh02@gmail.com",
    phone: "+8801743457164",
    website: "https://priyoghosh.vercel.app",
    github: "https://github.com/PriyoGhosh02",
    linkedin: "https://www.linkedin.com/in/priyo02",
    facebook: "https://www.facebook.com/priyo.ghosh.02",
    availableForWork: true,
    workType: ["Remote", "Freelance", "Full-Time", "Contract"],
    timezone: "GMT +6",
    languages: ["English", "Bangla"],
  },
  education: [
    {
      institution: "Green University of Bangladesh",
      degree: "B.Sc. in Computer Science and Engineering (CSE)",
      duration: "2022 — 2026",
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
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "SCSS",
    ],
    backend: ["Node.js", "Express.js", "REST API", "MongoDB", "MySQL", "Firebase"],
    ecommerce: [
      "Shopify",
      "Shopify Liquid",
      "Theme Development",
      "Theme Customization",
      "Shopify CLI",
      "Shopify Metafields",
      "Shopify Sections",
      "AJAX Cart",
      "Online Store 2.0",
    ],
    cms: ["WordPress", "Contentful"],
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel", "Netlify"],
  },
  about: `I'm a full stack web developer based in Dhaka, Bangladesh, specializing in React, Next.js, Node.js, and Shopify development. I enjoy building modern, responsive, fast websites with clean UI, optimized performance, and scalable architecture. I have professional experience building CMS websites, custom Shopify sections, REST APIs, and responsive frontend applications. I'm passionate about continuous learning, UI/UX refinement, and competitive programming.`,
  experience: [
    {
      role: "Web Developer",
      company: "Softvance Delta · Bitopia Group",
      duration: "Dec 2025 - Present",
      location: "Block-F, Joypurhat Tower, Banasree Main Road, Dhaka 1219",
      description:
        "Developing modern, responsive web applications and CMS solutions using React, Next.js, TypeScript, and Tailwind CSS while collaborating with cross-functional teams.",
      achievements: [
        "Built responsive production websites and scalable CMS dashboards.",
        "Converted Figma designs into pixel-perfect production code.",
        "Developed reusable React components and optimized UI performance.",
        "Worked directly with international clients to deliver production-ready features.",
        "Built Shopify custom sections and storefront modifications.",
      ],
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Git"],
    },
    {
      role: "Web Developer",
      company: "Sardar IT",
      duration: "Aug 2025 - Nov 2025",
      location: "Shialbari, Rupnagar Rd, Dhaka 1216",
      description:
        "Developed responsive client websites by converting Figma designs into pixel-perfect interfaces and implementing modern frontend best practices.",
      achievements: [
        "Converted Figma designs into responsive layouts and web forms.",
        "Built reusable UI components using Tailwind CSS and CSS3.",
        "Worked directly with international client requirements to deliver on strict deadlines.",
        "Integrated custom styles and Liquid sections into Shopify storefronts.",
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
        "Improved analytical thinking and debugging efficiency.",
        "Practiced time-efficient coding and memory-efficient strategies.",
        "Regular participant in online programming contests.",
      ],
      stack: ["C++", "C", "Java", "Algorithms", "Data Structures"],
    },
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
      desc: "A modern developer portfolio showcasing Shopify work, skills, experience, and professional growth.",
      tags: ["react", "nextjs", "tailwindcss", "typescript"],
      liveUrl: "https://priyoghosh.vercel.app/",
    },
    {
      title: "University Management System",
      category: "Database",
      type: "Database Build",
      year: "2024",
      desc: "A database-driven project using SQL, triggers, and constraints to manage student databases, course registrations, and instructors.",
      tags: ["sql", "mysql", "database"],
      liveUrl: "#",
    },
  ],
  services: [
    "Full Stack Web Development (React, Next.js, Node.js)",
    "Custom Shopify Theme Development & Customization",
    "Figma-to-React / Figma-to-Shopify Pixel-Perfect Conversion",
    "API Integrations & Custom Web Tools",
    "Website Performance Optimization & Speed Tuning",
    "CMS Development & Management (WordPress, Contentful)",
    "Responsive Front-end Layouts & Bug Fixing",
  ],
  strengths: [
    "Clean, scalable, and maintainable codebase structure.",
    "Pixel-perfect visual execution matching Figma designs precisely.",
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
  certifications: ["Responsive Web Design", "Advanced JavaScript", "React Development", "Node.js Fundamentals"],
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
    keywords: ["hi", "hello", "hey", "yo", "hola", "greetings", "good morning", "good afternoon", "good evening", "whats up", "sup", "howdy"],
    patterns: [/^(hi|hello|hey|yo|greetings|howdy)\b/i, /^whats? up\b/i, /hello there/i],
  },
  {
    id: "about",
    keywords: ["who are you", "yourself", "introduce", "who is priyo", "bio", "background", "about you", "your story", "tell me about yourself", "priyo ghosh"],
    patterns: [/who are you/i, /tell me.*about.*yourself/i, /introduce.*yourself/i, /your background/i, /who is priyo/i, /about you/i],
  },
  {
    id: "skills",
    keywords: ["skills", "stack", "tech", "technologies", "languages", "frontend", "backend", "tools", "toolkit", "frameworks", "libraries", "expert", "best at", "strongest", "react", "next.js", "nextjs", "node", "typescript", "javascript", "tailwind", "liquid", "css"],
    patterns: [/(what|which).*(tech|stack|skill|language|tool)/i, /what do you use/i, /your toolkit/i, /what languages/i, /skills list/i],
  },
  {
    id: "projects",
    keywords: ["projects", "portfolio", "built", "made", "showcase", "client", "concept", "work", "examples", "apps", "websites", "stores", "muni diva", "atelier", "goedhoesje", "bayt el hijab", "avora", "jinglepaws", "meat bazer", "tinko", "ultimax", "warmora", "otap", "links", "live url", "github"],
    patterns: [/what.*(built|made|developed)/i, /show.*projects/i, /your projects/i, /examples of.*work/i, /any.*websites/i, /project details/i, /showcase/i],
  },
  {
    id: "experience",
    keywords: ["experience", "work", "job", "career", "employment", "history", "softvance", "bitopia", "sardar", "developer", "worked at", "companies", "duration", "working"],
    patterns: [/work.*experience/i, /job.*history/i, /where.*worked/i, /your experience/i, /employment history/i, /companies you worked/i],
  },
  {
    id: "education",
    keywords: ["education", "university", "college", "school", "study", "studied", "graduated", "graduation", "bsc", "cse", "green university", "gub", "academic", "hsc", "ssc", "qualifications"],
    patterns: [/where.*study/i, /your education/i, /what.*degree/i, /did you graduate/i, /academic background/i],
  },
  {
    id: "contact",
    keywords: ["contact", "reach", "email", "phone", "call", "message", "linkedin", "github", "facebook", "social", "address", "get in touch", "connect", "mail", "number", "tel"],
    patterns: [/how.*(reach|contact)/i, /your (email|phone|linkedin|github)/i, /get in touch/i, /contact info/i],
  },
  {
    id: "availability",
    keywords: ["available", "hire", "job", "work", "freelance", "remote", "full-time", "contract", "open to", "hiring", "opportunities"],
    patterns: [/are you (available|hiring|open to work)/i, /can i hire/i, /looking for.*job/i, /are you looking/i],
  },
  {
    id: "services",
    keywords: ["services", "offer", "provide", "do for me", "help me", "tasks", "can you build", "can you do", "skills list"],
    patterns: [/what.*(offer|provide|do|services)/i, /how can you help/i, /what services/i],
  },
  {
    id: "strengths",
    keywords: ["strengths", "why hire", "different", "best quality", "advantages", "unique", "clean code", "problem solving", "why should i", "makes you a good developer", "stand out", "why choose you", "qualities", "values"],
    patterns: [/why.*hire/i, /what makes you.*different/i, /your strengths/i, /why are you/i, /what makes you.*(good|unique|stand out)/i, /why.*(choose|select|hire).*you/i, /good developer/i],
  },
  {
    id: "competitive_programming",
    keywords: ["codeforces", "competitive", "programming", "problems", "algorithms", "dsa", "data structures", "solved", "rating", "cpp", "c++"],
    patterns: [/competitive programming/i, /codeforces/i, /problem.*solving/i, /how many problems/i],
  },
  {
    id: "shopify",
    keywords: ["shopify", "liquid", "theme", "ecommerce", "store", "custom sections", "metafields", "prestige", "ajax cart", "online store 2.0"],
    patterns: [/shopify/i, /liquid/i, /theme development/i, /e-commerce/i, /shopify developer/i],
  },
  {
    id: "figma",
    keywords: ["figma", "sketch", "convert figma", "design to react", "design to shopify", "pixel perfect"],
    patterns: [/figma to/i, /convert figma/i, /design.*code/i],
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "awesome", "great", "cool", "nice", "perfect", "appreciated", "ty", "helpful"],
    patterns: [/thank.*you/i, /thanks/i, /awesome/i, /great/i, /appreciate/i],
  },
  {
    id: "hobbies",
    keywords: ["hobbies", "interests", "free time", "fun", "apart from programming", "pass time", "music", "books", "sports", "games"],
    patterns: [/what.*do.*free time/i, /hobbies/i, /interests/i],
  },
  {
    id: "location",
    keywords: ["location", "live", "where are you", "dhaka", "bangladesh", "from", "country", "city", "timezone", "gmt"],
    patterns: [/where.*(live|from)/i, /your location/i, /what country/i, /where are you/i],
  },
  {
    id: "more",
    keywords: ["more", "details", "explain", "elaborate", "tell me more", "show more", "further", "examples", "continue"],
    patterns: [/tell me more/i, /elaborate/i, /more details/i, /give me.*examples/i, /show.*more/i, /tell me further/i],
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
    if (text === def.id || text === def.id.replace("_", " ")) {
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
        "Hi! Great to have you here. I'm Priyo. 😊 What would you like to know about my work, skills, or projects?",
        "Hey there! 👋 I'm Priyo, a Full Stack Developer & Shopify specialist. How can I help you today?",
        "Hello! I'm Priyo Ghosh. I build high-performance web applications and custom Shopify stores. What are you interested in exploring?",
      ];
      const selected = greetings[Math.floor(Math.random() * greetings.length)];
      return selected;
    }

    case "about": {
      return (
        `I'm ${KNOWLEDGE_BASE.personalInfo.name}, a Full Stack Web Developer and Shopify developer from ${KNOWLEDGE_BASE.personalInfo.location}. ` +
        `I specialize in turning design mockups (like Figma) into fast, pixel-perfect websites and high-converting storefronts.\n\n` +
        `I'm currently studying Computer Science and Engineering while working on production client builds. ` +
        `I love writing clean code, designing smooth interfaces, and solving tough logic problems. Would you like to check out my skills or see my projects?`
      );
    }

    case "skills": {
      const fe = KNOWLEDGE_BASE.skills.frontend.join(", ");
      const be = KNOWLEDGE_BASE.skills.backend.join(", ");
      const shopifyTools = KNOWLEDGE_BASE.skills.ecommerce.join(", ");
      const programmingLanguages = KNOWLEDGE_BASE.skills.languages.join(", ");

      return (
        `Here is a quick overview of my technical toolkit:\n\n` +
        `• 💻 **Frontend**: ${fe}\n` +
        `• ⚙️ **Backend & DB**: ${be}\n` +
        `• 🛍️ **Shopify Development**: ${shopifyTools}\n` +
        `• 📝 **Languages**: ${programmingLanguages}\n\n` +
        `I use Git/GitHub for version control and Figma for layouts. Let me know if you want to know more about a specific stack!`
      );
    }

    case "projects": {
      const clientHighlights = KNOWLEDGE_BASE.projects
        .filter((p) => p.category === "Client Project")
        .slice(0, 3)
        .map((p) => `• **${p.title}** (Shopify, Liquid): ${p.liveUrl}`)
        .join("\n");

      return (
        `I've built 14+ projects, including live client stores and concept work. Here are a few notable client projects:\n\n` +
        `${clientHighlights}\n\n` +
        `I also built this portfolio website custom from scratch using React, Next.js, and TypeScript! ` +
        `You can ask me about a specific project, or ask to 'tell me more' about my concept projects (like OTAP or Warmora).`
      );
    }

    case "experience": {
      const current = KNOWLEDGE_BASE.experience[0];
      const previous = KNOWLEDGE_BASE.experience[1];

      return (
        `I have professional experience as a Web Developer across two companies:\n\n` +
        `1. **${current.role}** at **${current.company}** (${current.duration}):\n` +
        `   Developing responsive web applications, CMS platforms, and custom Shopify storefronts. (${current.location})\n\n` +
        `2. **${previous.role}** at **${previous.company}** (${previous.duration}):\n` +
        `   Converted pixel-perfect layouts from Figma designs and developed storefront pages using CSS, Tailwind, and JavaScript.\n\n` +
        `Would you like to hear about my achievements in these roles? Just ask me to elaborate or say 'tell me more'.`
      );
    }

    case "education": {
      const degree = KNOWLEDGE_BASE.education[0];
      const highSchool = KNOWLEDGE_BASE.education[1];

      return (
        `I am pursuing my **${degree.degree}** at **${degree.institution}** (${degree.duration}). ` +
        `It gives me a solid backing in system design, database management, and data structures.\n\n` +
        `Prior to that, I completed my ${highSchool.degree} at ${highSchool.institution} in science. ` +
        `I really enjoy combining rigorous computer science theory with creative web builds!`
      );
    }

    case "contact": {
      return (
        `I would love to chat! You can reach me directly through any of these channels:\n\n` +
        `• 📧 **Email**: ${KNOWLEDGE_BASE.personalInfo.email}\n` +
        `• 📞 **Phone/WhatsApp**: ${KNOWLEDGE_BASE.personalInfo.phone}\n` +
        `• 💼 **LinkedIn**: [Priyo Ghosh](${KNOWLEDGE_BASE.personalInfo.linkedin})\n` +
        `• 🐙 **GitHub**: [PriyoGhosh02](${KNOWLEDGE_BASE.personalInfo.github})\n\n` +
        `Feel free to drop me a message, and I'll get back to you as soon as possible!`
      );
    }

    case "availability": {
      return (
        `Yes! I am currently **available** for remote work, freelance projects, and full-time contracts. ` +
        `My typical timezone is ${KNOWLEDGE_BASE.personalInfo.timezone}, but I am very flexible and regularly sync with international teams. ` +
        `If you have a project in mind, let's connect! You can ask for my email or phone number.`
      );
    }

    case "services": {
      const serviceList = KNOWLEDGE_BASE.services.map((s) => `• ${s}`).join("\n");
      return (
        `Here are the services I offer to help bring projects to life:\n\n` +
        `${serviceList}\n\n` +
        `I place a high value on clean, responsive frontend architectures. Do you have a design in Figma or a Shopify store that needs building?`
      );
    }

    case "strengths": {
      const strengthsList = KNOWLEDGE_BASE.strengths.map((s) => `• ${s}`).join("\n");
      return (
        `What makes me stand out as a developer is my blend of technical problem solving and visual execution:\n\n` +
        `${strengthsList}\n\n` +
        `I focus on client success, pixel-perfection, and fast loading speeds. Let me know if you'd like to see my project proofs!`
      );
    }

    case "competitive_programming": {
      return (
        `I am active in competitive programming on **Codeforces**, where I've solved over 300+ algorithm and math problems. ` +
        `It's a great hobby that keeps my data structures and coding efficiency sharp.\n\n` +
        `It also helps me write clean, performant React and Node code that scales without leaks. Ask me about my other hobbies or interests!`
      );
    }

    case "shopify": {
      const shopifySkills = KNOWLEDGE_BASE.skills.ecommerce.slice(0, 5).join(", ");
      return (
        `Shopify is a key area of my expertise. I write custom Liquid themes, build custom sections, implement AJAX carts, and customize metafields using Online Store 2.0 standards.\n\n` +
        `I have built multiple live stores for European and US clients (such as Muni Diva, Goedhoesje, and The Atelier London). ` +
        `I can help customize themes (like Prestige) or build brand-new sections. What kind of storefront features do you need?`
      );
    }

    case "figma": {
      return (
        `I specialize in figma-to-code conversions. Whether you need a Figma design converted into a responsive, component-driven React/Next.js app or customized Shopify Liquid sections, I ensure it's pixel-perfect, responsive on all devices, and fast-loading.`
      );
    }

    case "thanks": {
      const thankReplies = [
        "You're very welcome! Let me know if there's anything else I can clarify. 😊",
        "No problem! Glad I could help. What else would you like to know?",
        "Anytime! Feel free to ask more about my projects, availability, or experience.",
      ];
      return thankReplies[Math.floor(Math.random() * thankReplies.length)];
    }

    case "hobbies": {
      const interestsList = KNOWLEDGE_BASE.interests.map((i) => `• ${i}`).join("\n");
      return (
        `Besides web development, I enjoy several other tech and logic pursuits:\n\n` +
        `${interestsList}\n\n` +
        `I also enjoy keeping up with new AI dev tools and collaborating on open-source repositories!`
      );
    }

    case "location": {
      return (
        `I live and work from **${KNOWLEDGE_BASE.personalInfo.location}** (Timezone: ${KNOWLEDGE_BASE.personalInfo.timezone}). ` +
        `I coordinate regularly with clients from Germany, the UK, the Netherlands, and North America. Distance is never an issue! Where are you contacting me from?`
      );
    }

    case "more": {
      // Contextual follow-up response based on the previous intent
      switch (previousIntent) {
        case "projects": {
          const conceptHighlights = KNOWLEDGE_BASE.projects
            .filter((p) => p.category === "Concept Work" && p.type === "Shopify")
            .slice(0, 3)
            .map((p) => `• **${p.title}** (Concept store, Password: '${p.password}'): ${p.liveUrl}`)
            .join("\n");

          return (
            `Here are some details on my Shopify concept stores:\n\n` +
            `${conceptHighlights}\n\n` +
            `These stores showcase custom collection filters, landing page sections, and pet-product showcases. Let me know if you'd like to discuss Shopify theme configurations!`
          );
        }

        case "skills": {
          const backendList = KNOWLEDGE_BASE.skills.backend.map((b) => `• ${b}`).join("\n");
          const toolsList = KNOWLEDGE_BASE.skills.tools.map((t) => `• ${t}`).join("\n");
          return (
            `Sure! Expanding on my backend and tooling skills:\n\n` +
            `**Backend Stack**:\n${backendList}\n\n` +
            `**Developer Tools & Workflows**:\n${toolsList}\n\n` +
            `I structure database queries efficiently and implement REST APIs with middleware validations. Do you have a backend need for your app?`
          );
        }

        case "experience": {
          const currentExp = KNOWLEDGE_BASE.experience[0];
          const achievements = currentExp.achievements.map((a) => `• ${a}`).join("\n");
          return (
            `Certainly! At **Softvance Delta**, some of my core achievements include:\n\n` +
            `${achievements}\n\n` +
            `I've worked on large international codebases and built customizable sections from design assets. Let me know if you'd like details on specific projects.`
          );
        }

        case "education": {
          const degree = KNOWLEDGE_BASE.education[0];
          const courseHighlights = degree.highlights.map((h) => `• ${h}`).join("\n");
          return (
            `More details on my B.Sc. in CSE at Green University:\n\n` +
            `${courseHighlights}\n\n` +
            `My academic projects include designing full relational schemas for course catalogs, implementing sorting and graph traversal algorithms, and building a responsive web system using standard database integrations.`
          );
        }

        case "contact": {
          return (
            `Here are direct URLs to check out my social handles and repositories:\n\n` +
            `• 💼 **LinkedIn Profile**: ${KNOWLEDGE_BASE.personalInfo.linkedin}\n` +
            `• 🐙 **GitHub Repositories**: ${KNOWLEDGE_BASE.personalInfo.github}\n` +
            `• 🌐 **Personal Website**: ${KNOWLEDGE_BASE.personalInfo.website}\n` +
            `• 📘 **Facebook Profile**: ${KNOWLEDGE_BASE.personalInfo.facebook}\n\n` +
            `Feel free to add me or drop a message on LinkedIn. I reply pretty quickly!`
          );
        }

        case "shopify": {
          return (
            `To elaborate on my Shopify capabilities:\n` +
            `• **Theme Customization**: Working with themes like Prestige, Dawn, and Impact to implement custom sections.\n` +
            `• **Dynamic Liquid coding**: Creating conditional logic blocks, custom metafield layouts, and collection filtering systems.\n` +
            `• **Modern features**: AJAX drawers, newsletter slide-ins, customized cart notes, and custom currency pickers.\n\n` +
            `I keep themes fast and responsive without using heavy third-party app plugins.`
          );
        }

        case "competitive_programming": {
          return (
            `My competitive programming experience helps me tackle complex frontend algorithms (such as data nesting, pagination, sorting filters) and backend route optimizations.\n\n` +
            `I enjoy analyzing Big-O space and time complexity, which helps prevent performance bottlenecks. Let me know if you have a performance optimization task!`
          );
        }

        default: {
          return "I can elaborate further on my skills, details of my 14 projects, work achievements, or academic studies. Just ask about the topic you're interested in, and I'll share more! 😊";
        }
      }
    }

    case "fallback":
    default: {
      const fallbacks = [
        "Hmm, I didn't quite catch that. 😅 But I'd love to help! Ask me about my skills, 14 projects (like Muni Diva or OTAP), work history, or how to get in touch.",
        "I'm not sure I fully understand that question. Could you rephrase it? Or ask me about my Shopify, React, work experience, or contact channels!",
        "Oops, that's a bit outside my knowledge base. 💻 If you ask about my web development skills, my projects, or how to hire me, I'll have a clear answer for you!",
      ];
      return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
  }
}
