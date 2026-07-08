export type ChatMessage = { role: "user" | "assistant"; content: string };

const normalize = (value: string) => value.toLowerCase().trim();

// Extended knowledge base with detailed personal information
const KNOWLEDGE_BASE = {
  personalInfo: {
    name: "Priyo Ghosh",
    title: "Aspiring Full Stack Web Developer",
    location: "Dhaka, Bangladesh",
    email: "priyoghosh02@gmail.com",
    phone: "01743457164",
    github: "https://github.com/PriyoGhosh02",
    linkedin: "https://www.linkedin.com/in/priyo02",
    facebook: "https://www.facebook.com/priyo.ghosh.02",
  },
  skills: {
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    backend: ["Node.js", "Express", "MongoDB", "MySQL"],
    languages: ["JavaScript", "TypeScript", "Java", "Python", "C"],
    tools: ["Git", "GitHub", "Figma", "VS Code"],
  },
  experience: [
    {
      role: "Web Developer",
      company: "Softvance Delta, Bitopia Group",
      duration: "Dec 2025 - Present",
      location: "Block-F, Joypurhat Tower, Banasree Main Road, Dhaka 1219",
      description: "Developing responsive web pages and CMS interfaces with frontend frameworks",
    },
    {
      role: "Web Developer",
      company: "Sardar IT",
      duration: "Aug 2025 - Nov 2025",
      location: "Shialbari, Rupnagar Rd, Dhaka 1216",
      description: "Built responsive web pages with HTML, CSS, JavaScript & Tailwind, converting Figma designs into clean interfaces",
    },
  ],
  projects: [
    {
      name: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and experience",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      features: ["Responsive design", "Smooth animations", "3D effects"],
    },
    {
      name: "University Management System",
      description: "Complete admission database with students, courses, instructors and departments",
      tech: ["SQL", "Database Design"],
      features: ["Complex queries", "Database triggers", "Constraints"],
    },
    {
      name: "The Atelier",
      description: "Boutique multi-page web experience",
      link: "https://theatelier.london/",
      tech: ["React", "Next.js", "Tailwind CSS"],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Green University of Bangladesh",
      expectedGraduation: "2026",
    },
    {
      degree: "HSC (Science)",
      institution: "Kaliganj Govt. College",
      year: "2020",
    },
    {
      degree: "SSC (Science)",
      institution: "Dr. Mujib-Ruby Model High School",
      year: "2018",
    },
  ],
  interests: ["Web Development", "UI/UX Design", "Competitive Programming", "Codeforces"],
};

export function getPortfolioReply(message: string, history: ChatMessage[] = []): string {
  const text = normalize(message);
  const lastUserMessage = history
    .slice()
    .reverse()
    .find((item) => item.role === "user")?.content ?? "";
  const combined = `${text}\n${normalize(lastUserMessage)}`;

  if (!text) {
    return "I can help with my projects, skills, experience, or how to get in touch. What would you like to know?";
  }

  if (/(hello|hi|hey|who are you|introduce|about you|yourself|what do you do)/.test(text)) {
    return `Hi! I'm ${KNOWLEDGE_BASE.personalInfo.name}, a web developer from ${KNOWLEDGE_BASE.personalInfo.location}. I love building clean, functional websites and turning designs into working products.`;
  }

  if (/(which|what).*(stack|tech|language|framework|tool)|expert|strongest|best at/.test(combined)) {
    const frontend = KNOWLEDGE_BASE.skills.frontend.slice(0, 3).join(", ");
    return `I'm especially strong in ${frontend} for modern interfaces, and I work full-stack with Node.js and databases too.`;
  }

  if (/(skill|skills|stack|tech|frontend|backend|react|next|node|mongodb|sql|tailwind|javascript|java|python|c|typescript)/.test(combined)) {
    const frontend = KNOWLEDGE_BASE.skills.frontend.join(", ");
    const backend = KNOWLEDGE_BASE.skills.backend.join(", ");
    return `My stack includes: Frontend - ${frontend}. Backend - ${backend}.`;
  }

  if (/(project|projects|portfolio|work|build|university|atelier|management system|what have you built|showcase)/.test(combined)) {
    return "I've built several projects: a portfolio website with animations, a university management system with complex SQL, and The Atelier boutique experience. Each showcases different aspects of full-stack development.";
  }

  if (/(portfolio|portfolio website|your website|this site)/.test(text)) {
    return "My portfolio is built with React, featuring smooth animations, 3D effects, and showcasing my projects and experience. It's designed to be both visually engaging and functionally solid.";
  }

  if (/(university|management|database|sql|atelier)/.test(text)) {
    const project = KNOWLEDGE_BASE.projects.find(p => p.name.toLowerCase() === "university management system");
    return `The ${project?.name} uses SQL with complex queries, triggers, and constraints to manage students, courses, instructors, and departments - a great way to practice database design.`;
  }

  if (/(experience|work|job|company|softvance|bitopia|sardar|developer|employment)/.test(combined)) {
    return "I've worked as a web developer at Softvance Delta (current) and Sardar IT, building responsive web pages and translating Figma designs into functional interfaces. It's been great learning to work with real clients and teams.";
  }

  if (/(education|university|green university|graduat|hsc|ssc|school|study)/.test(combined)) {
    return `I'm pursuing a B.Sc. in Computer Science at ${KNOWLEDGE_BASE.education[0].institution}, graduating in ${KNOWLEDGE_BASE.education[0].expectedGraduation}. Great mix of theory and hands-on learning.`;
  }

  if (/(contact|email|phone|reach|hire|talk|get in touch|linkedin|github|facebook|connect)/.test(combined)) {
    return `You can reach me at ${KNOWLEDGE_BASE.personalInfo.email} or call ${KNOWLEDGE_BASE.personalInfo.phone}. I'm active on GitHub, LinkedIn, and Facebook too - let's connect!`;
  }

  if (/(codeforces|competitive|programming|problem solving|algorithms|dsa)/.test(combined)) {
    return "I actively practice on Codeforces to sharpen my problem-solving skills. Competitive programming helps me think through algorithms and edge cases more carefully.";
  }

  if (/(shopify|e-commerce|customization)/.test(text)) {
    return "I have experience with Shopify customization and building e-commerce solutions, blending frontend design with backend integration.";
  }

  if (/(client|international|work with)/.test(text)) {
    return "I've worked with international clients, learning to communicate effectively and deliver solutions that match their vision.";
  }

  if (/(design|ui|ux|figma|responsive)/.test(text)) {
    return "I focus on building responsive, visually polished interfaces. I work closely with Figma designs and ensure they translate cleanly into working web pages.";
  }

  return `I'd be happy to tell you more about my work, projects, tech stack, or how to reach me. Ask away!`;
}
