import { Reveal } from "./Reveal";
import { Code2, Layers, Database, Boxes, Zap, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "HTML, CSS, JavaScript, React, Next.js — building responsive, user-friendly interfaces.",
  },
  {
    icon: Layers,
    title: "UI Frameworks",
    desc: "Tailwind CSS and Material-UI for fast, consistent design systems.",
  },
    {
    icon: Globe,
    title: "Shopify & CMS",
    desc: "Theme customization, storefront tweaks and CMS-driven page building.",
  }, 
   {
    icon: Zap,
    title: "Programming",
    desc: "C, Java, Python and JavaScript — strong fundamentals from competitive programming.",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "MongoDB and MySQL — schema design, queries, triggers and constraints.",
  },

{
    icon: Boxes,
    title: "Backend & Node",
    desc: "Node.js services, REST APIs and CMS integrations.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                ( 02 ) — Capabilities
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                What I do.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="max-w-md text-white/60">
Combining modern frontend technologies, backend systems, and CMS expertise to deliver efficient, scalable, and user-centered web applications.
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
                  <div
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  />
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
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
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
