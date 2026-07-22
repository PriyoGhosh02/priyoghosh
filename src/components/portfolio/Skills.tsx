import {
  Boxes,
  Code2,
  Database,
  Globe,
  Layers,
  Server,
} from "lucide-react";
import { Reveal } from "./Reveal";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building modern, responsive web applications using React, TypeScript, JavaScript, HTML5, CSS3, Next.js, and Vite with a focus on performance, accessibility, and clean UI.",
  },
  {
    icon: Layers,
    title: "UI & Design Systems",
    desc: "Creating scalable interfaces with Tailwind CSS, DaisyUI, Material UI, responsive layouts, reusable components, animations, and pixel-perfect implementations from Figma.",
  },
  {
    icon: Globe,
    title: "Shopify Development",
    desc: "Custom Shopify theme development using Liquid, Shopify CLI, Theme Customizer, metafields, sections, app integrations, responsive storefronts, and performance optimization.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing secure backend applications with Python, Django, REST APIs, authentication, database integration, and scalable business logic for full-stack solutions.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Designing and managing relational and NoSQL databases using MySQL and MongoDB with optimized queries, schema design, data modeling, and CRUD operations.",
  },
  {
    icon: Boxes,
    title: "Tools & Workflow",
    desc: "Git, GitHub, VS Code, Postman, npm, Vercel, Netlify, EmailJS, REST APIs, responsive debugging, deployment, and collaborative development using modern workflows.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-[14px] uppercase tracking-[0.4em] text-white/80">
                ( 02 ) — Capabilities
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="shimmer-text mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Skills & Expertise.
              </h2>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="max-w-md text-[16px] text-white/80 md:text-[18px]"
          >
            I specialize in building modern web experiences—from interactive
            frontend interfaces to scalable backend systems and customized
            Shopify storefronts—using clean architecture and industry-standard
            development practices.
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} y={20}>
              <div
                className="group relative h-full bg-black p-8 transition-all duration-500 hover:bg-white/[0.03]"
                data-cursor="hover"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                </div>

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <s.icon className="h-6 w-6 text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                    <span className="font-mono text-xs text-white/30">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-white">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-[16px] leading-relaxed text-white/80">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}