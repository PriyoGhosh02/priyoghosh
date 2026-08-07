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
    desc: "Build responsive and interactive web applications using React, Next.js, TypeScript, JavaScript, HTML5, and CSS3. I focus on clean interfaces, accessibility, performance, and creating seamless user experiences across all devices.",
  },
  {
    icon: Globe,
    title: "Shopify Development",
    desc: "Develop custom Shopify themes and storefront experiences using Liquid, Shopify CLI, metafields, custom sections, and app integrations. I build flexible, responsive, and easy-to-manage e-commerce solutions.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Build backend applications and REST APIs using Node.js and Express.js, connecting databases and business logic to create reliable full-stack solutions. I continue expanding my skills in Python to strengthen my backend expertise.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Design and manage MySQL and MongoDB databases with efficient data modeling, optimized queries, schema design, and reliable CRUD operations to support scalable web applications.",
  },
  {
    icon: Layers,
    title: "UI & Design Systems",
    desc: "Create reusable UI components, responsive layouts, and scalable design systems from Figma using Tailwind CSS, Material UI, and modern frontend practices to keep interfaces consistent and maintainable.",
  },
  {
    icon: Boxes,
    title: "Tools & Workflow",
    desc: "Use Git, GitHub, VS Code, Postman, npm, Vercel, REST APIs, and collaborative development workflows for version control, deployment, debugging, API integration, and efficient project delivery.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="sticky-card sticky-card-3 content-section textured min-h-screen bg-[#E5E7E8] text-[#111111] px-6 py-32 md:py-44 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-[#111111] font-semibold">
                ( 02 ) - Capabilities
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-[#111111] md:text-6xl">
                Skills & Expertise.
              </h2>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="text-justify [hyphens:auto] max-w-md text-[16px] text-[#111111]/85 md:text-[18px]"
          >
            I build responsive web applications, custom Shopify stores, and full-stack solutions with a focus on clean code, performance, and user experience. My goal is to create reliable products that are easy to use, maintain, and scale.
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} y={20}>
              <div
                className="group relative h-full rounded-2xl border border-[#D0D4D6] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-md"
                data-cursor="hover"
              >
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <s.icon className="h-6 w-6 text-[#111111] transition-all duration-300 group-hover:scale-110 group-hover:text-brand" />
                    <span className="font-mono text-xs font-semibold text-[#111111]">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#111111]">
                    {s.title}
                  </h3>

                  <p className="text-justify [hyphens:auto] mt-3 text-[16px] leading-relaxed text-[#111111]/80">
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