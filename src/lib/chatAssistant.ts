export type ChatMessage = { role: "user" | "assistant"; content: string };

const normalize = (value: string) => value.toLowerCase().trim();

// Extended knowledge base with detailed personal information
const KNOWLEDGE_BASE = {
  personalInfo: {
    name: "Priyo Ghosh",
    title: "Full Stack Web Developer",
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
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel", "Netlify"],
  },
  about: `I'm a full stack web developer specializing in React, Next.js,
Node.js and Shopify development.

I enjoy building modern, responsive, fast websites with clean UI,
optimized performance and scalable architecture.

I have professional experience building CMS websites,
Shopify stores, landing pages, custom sections,
REST APIs and responsive frontend applications.

I'm passionate about continuously learning new technologies,
improving UI/UX, and solving real-world problems.
`,
  experience: [
    {
      role: "Web Developer",
      company: "Softvance Delta, Bitopia Group",
      duration: "Dec 2025 - Present",
      location: "Block-F, Joypurhat Tower, Banasree Main Road, Dhaka 1219",
      description:
        "Developing modern, responsive web applications and CMS solutions using React, Next.js, TypeScript, and Tailwind CSS.",
      achievements: [
        "Built responsive production websites",
        "Converted Figma designs into production code",
        "Developed reusable components",
        "Worked with international clients",
        "Built Shopify custom sections",
        "Optimized website performance",
        "Maintained CMS websites",
      ],
    },
    {
      role: "Web Developer",
      company: "Sardar IT",
      duration: "Aug 2025 - Nov 2025",
      location: "Shialbari, Rupnagar Rd, Dhaka 1216",
      description:
        "Developed responsive client websites by converting Figma designs into pixel-perfect interfaces and implementing modern frontend best practices.",
      achievements: [
        "Converted Figma designs into responsive websites",
        "Built reusable UI components using Tailwind CSS",
        "Worked directly with international client requirements",
        "Delivered production-ready websites within deadlines",
      ],
    },
  ],
  achievements: [
    "Built responsive production websites",
    "Converted Figma designs into production code",
    "Developed reusable components",
    "Worked with international clients",
    "Built Shopify custom sections",
    "Optimized website performance",
    "Maintained CMS websites",
  ],
  projects: [
    {
      name: "Personal Portfolio",
      category: "Portfolio",
      live: "https://priyoghosh.vercel.app",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Shopify Fashion Store",
      category: "E-Commerce",
      tech: ["Shopify", "Liquid", "JavaScript"],
      features: ["Custom Sections", "Responsive Design", "Metafields", "Product Pages"],
    },
    {
      name: "Pet Store",
      category: "Shopify",
      tech: ["Shopify", "Liquid", "CSS"],
    },
    {
      name: "Luxury Fashion Store",
      category: "Shopify",
      tech: ["Prestige Theme", "Liquid", "JavaScript"],
    },
    {
      name: "University Management System",
      category: "Database",
      tech: ["SQL", "MySQL"],
    },
  ],
  services: [
    "Full Stack Web Development",
    "Frontend Development",
    "React Development",
    "Next.js Development",
    "Shopify Store Development",
    "Shopify Theme Customization",
    "Shopify Theme Development",
    "Landing Page Development",
    "Website Redesign",
    "Responsive Website Development",
    "API Integration",
    "Bug Fixing",
    "Performance Optimization",
  ],
  strengths: [
    "Clean Code",
    "Responsive Design",
    "Problem Solving",
    "Fast Learner",
    "Attention to Detail",
    "Performance Optimization",
    "UI Implementation",
    "Communication",
    "Team Collaboration",
  ],
  careerGoals: {
    current: "Working as a Full Stack and Shopify Developer.",
    future:
      "Become a senior full stack engineer specializing in scalable web applications, e-commerce solutions, AI-powered products, and cloud technologies.",
  },
  interests: [
    "Web Development",
    "Open Source",
    "UI/UX",
    "Artificial Intelligence",
    "Competitive Programming",
    "Shopify Development",
    "System Design",
    "Modern JavaScript",
    "React Ecosystem",
  ],
  certifications: ["Responsive Web Design", "JavaScript", "React", "Node.js"],
  keywords: [
    "React Developer",
    "Next.js Developer",
    "Shopify Developer",
    "Shopify Expert",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "E-commerce Developer",
    "CMS Developer",
  ],
};

export function getPortfolioReply(message: string, history: ChatMessage[] = []): string {
  const text = normalize(message);
  const lastUserMessage =
    history
      .slice()
      .reverse()
      .find((item) => item.role === "user")?.content ?? "";
  const combined = `${text}\n${normalize(lastUserMessage)}`;

  if (!text) {
    return "Hey! I can share details about my work, projects, skills, or how to get in touch. What would you like to know?";
  }

  if (/(hello|hi|hey|who are you|introduce|about you|yourself|what do you do)/.test(text)) {
    return `Hey there! I'm ${KNOWLEDGE_BASE.personalInfo.name}, a full stack web developer from ${KNOWLEDGE_BASE.personalInfo.location}. I enjoy turning designs into polished, responsive websites and Shopify stores.`;
  }

  if (
    /(which|what).*(stack|tech|language|framework|tool)|expert|strongest|best at/.test(combined)
  ) {
    const frontend = KNOWLEDGE_BASE.skills.frontend.slice(0, 3).join(", ");
    return `I feel most comfortable with ${frontend} on the frontend, and I also build backend apps with Node.js, Express, and databases like MongoDB or MySQL.`;
  }

  if (
    /(skill|skills|stack|tech|frontend|backend|react|next|node|mongodb|sql|tailwind|javascript|java|python|c|typescript)/.test(
      combined,
    )
  ) {
    const frontend = KNOWLEDGE_BASE.skills.frontend.join(", ");
    const backend = KNOWLEDGE_BASE.skills.backend.join(", ");
    return `My toolkit includes frontend tech like ${frontend}, plus backend tools like ${backend}. I enjoy bringing both sides together in real web projects.`;
  }

  if (
    /(services|service|offer|provide|project types|what do you offer|what services do you provide)/.test(
      combined,
    )
  ) {
    return `I help create full-stack web applications, frontend interfaces, React/Next.js apps, Shopify stores and themes, REST API integrations, performance tuning, and responsive website redesigns.`;
  }

  if (
    /(available.*(work|remote|freelance)|remote work|open to freelance|freelance projects|hire you|can i hire you|are you available|available for work)/.test(
      combined,
    )
  ) {
    return `Yes, I'm open to new work. I enjoy remote, freelance, full-time, and contract projects, especially when they involve clean UI, good performance, and practical solutions.`;
  }

  if (
    /(shopify|e-commerce|liquid|shopify liquid|theme development|theme customization|online store 2.0|shopify cli|metafields)/.test(
      combined,
    )
  ) {
    return `I work with Shopify often: theme development, Liquid templates, custom sections, metafields, AJAX carts, and Online Store 2.0 storefronts.`;
  }

  if (/(strongest|best skill|favorite skill|strongest skill|expert at)/.test(combined)) {
    return `My strongest skills are React, Next.js, TypeScript, and Shopify development, especially when it comes to building responsive interfaces and reusable components.`;
  }

  if (
    /(technologies|tech stack|stack|technologies do you use|preferred tech|preferred stack)/.test(
      combined,
    )
  ) {
    const tech = [...KNOWLEDGE_BASE.skills.frontend, ...KNOWLEDGE_BASE.skills.backend].join(", ");
    return `I typically work with ${tech}. For stores and storefronts, I also lean on Shopify, Liquid, and modern frontend workflows.`;
  }

  if (/(rest api|api integration|api|express|backend)/.test(combined)) {
    return `I can build REST APIs with Node.js and Express, then connect them to frontend apps or Shopify experiences to make data-driven features work smoothly.`;
  }

  if (/(figma.*react|convert figma.*react|figma to react|convert figma to react)/.test(combined)) {
    return `Absolutely. I turn Figma designs into React apps with clean structure, responsive layouts, and reusable components.`;
  }

  if (/(figma.*shopify|convert figma.*shopify|figma to shopify)/.test(combined)) {
    return `Yes, I can convert Figma designs into Shopify themes and custom sections while keeping the storefront responsive and production-ready.`;
  }

  if (/(tailwind|tailwind css)/.test(combined)) {
    return `I use Tailwind CSS to build modern, utility-first UI quickly and consistently in React and Next.js projects.`;
  }

  if (/(next.js|nextjs|next js)/.test(combined)) {
    return `I build Next.js apps with good performance, nice page transitions, and SEO-friendly structure.`;
  }

  if (/(admin dashboard|dashboard)/.test(combined)) {
    return `I can build dashboards with reusable components, tables, charts, and API-powered data management.`;
  }

  if (
    /(performance optimize|performance optimization|optimize website|speed|fast website)/.test(
      combined,
    )
  ) {
    return `I improve website performance by optimizing code, images, CSS, and load behavior so sites feel faster and smoother.`;
  }

  if (/(bug fix|fix bugs|bug fixing|debug)/.test(combined)) {
    return `I tackle bugs by tracing the root issue, cleaning up the code, and verifying fixes across browsers and devices.`;
  }

  if (/(databases|mysql|mongodb|sql|firebase|database)/.test(combined)) {
    return `I work with MongoDB, MySQL, Firebase, and SQL databases to manage data, support authentication, and power backend logic.`;
  }

  if (
    /(why should i hire you|what makes you different|why hire you|what makes you different)/.test(
      combined,
    )
  ) {
    return `You should hire me because I write clean code, focus on polished UI, and deliver work that fits real business needs on time.`;
  }

  if (/(latest work|recent work|latest project|recent project|latest)/.test(combined)) {
    return `Recently, I've been building responsive web apps, Shopify storefronts, and CMS dashboards with an emphasis on speed, usability, and clear UI.`;
  }

  if (/(industry|industries|sector|worked in)/.test(combined)) {
    return `I've worked on e-commerce, CMS, portfolio, and client-facing web app projects, often with an international or remote focus.`;
  }

  if (
    /(project|projects|portfolio|work|build|university|atelier|management system|what have you built|showcase)/.test(
      combined,
    )
  ) {
    return `I've built a variety of projects, including my own portfolio site, Shopify stores, a university management system, and client-facing web apps.`;
  }

  if (/(portfolio|portfolio website|your website|this site)/.test(text)) {
    return `My portfolio is built with React and designed to show my work clearly, with smooth animations and a responsive layout.`;
  }

  if (/(university|management|database|sql|atelier)/.test(text)) {
    const project = KNOWLEDGE_BASE.projects.find(
      (p) => p.name.toLowerCase() === "university management system",
    );
    return `The ${project?.name} is a database-driven project using SQL, triggers, and constraints to manage students, courses, instructors, and departments.`;
  }

  if (
    /(experience|work|job|company|softvance|bitopia|sardar|developer|employment)/.test(combined)
  ) {
    return `I've worked as a web developer at Softvance Delta and Sardar IT, creating responsive websites, Shopify sections, and client-ready frontend features.`;
  }

  if (/(education|university|green university|graduat|hsc|ssc|school|study)/.test(combined)) {
    return `I completed my B.Sc. in Computer Science at ${KNOWLEDGE_BASE.education[0].institution} in ${KNOWLEDGE_BASE.education[0].expectedGraduation}. It was a great mix of theory and hands-on projects.`;
  }

  if (
    /(contact|email|phone|reach|hire|talk|get in touch|linkedin|github|facebook|connect)/.test(
      combined,
    )
  ) {
    return `You can reach me at ${KNOWLEDGE_BASE.personalInfo.email} or via phone at ${KNOWLEDGE_BASE.personalInfo.phone}. I'm also available on GitHub and LinkedIn.`;
  }

  if (/(codeforces|competitive|programming|problem solving|algorithms|dsa)/.test(combined)) {
    return `I practice on Codeforces to keep my problem-solving and algorithm skills sharp. It helps me write better, more efficient code.`;
  }

  if (/(shopify|e-commerce|customization)/.test(text)) {
    return `I enjoy building Shopify stores and custom themes, especially when the project needs a strong visual design and smooth storefront experience.`;
  }

  if (/(client|international|work with)/.test(text)) {
    return `I've worked with international clients, and I try to keep communication clear while delivering a product that matches their goals.`;
  }

  if (/(design|ui|ux|figma|responsive)/.test(text)) {
    return `I focus on converting Figma designs into responsive, polished web pages that look great and work well across devices.`;
  }

  return `If you want, ask me about my projects, skills, experience, or how we can work together.`;
}
