import { Award, Calendar, CheckCircle2, MapPin, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Reveal } from "./Reveal";

type Item = {
  year: string;
  role: string;
  company: string;
  desc: string;
  location: string;
  highlights: string[];
  stack: string[];
};

const items: Item[] = [
  {
    year: "2022 – 2026",
    role: "B.Sc. in Computer Science & Engineering",
    company: "Green University of Bangladesh",
    desc: "Built a strong foundation in software engineering, web development, databases, and programming while applying classroom knowledge to academic and personal projects. This journey strengthened my problem-solving mindset and passion for building modern web applications.",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Built academic and personal web applications",
      "Worked on software engineering and database projects",
      "Strengthened programming and analytical thinking",
      "Continuously explored modern web technologies",
    ],
    stack: ["JavaScript", "Python", "Java", "MySQL", "React", "Node.js"],
  },

  {
    year: "2022 – Present",
    role: "Competitive Programming",
    company: "Codeforces",
    desc: "Regularly practice algorithms and data structures through competitive programming to improve logical thinking, debugging skills, and problem-solving abilities that support real-world software development.",
    location: "Remote",
    highlights: [
      "Solved 300+ programming problems",
      "Improved algorithmic thinking and debugging skills",
      "Practiced time-efficient coding strategies",
      "Participated in online programming contests",
    ],
    stack: ["Algorithms", "Data Structures", "C", "Java", "Problem Solving"],
  },

  {
    year: "Aug 2025 – Nov 2025",
    role: "Web Developer",
    company: "Sardar IT",
    desc: "Started my professional career by building responsive business websites and Shopify storefronts. Worked with Figma designs, transformed them into production-ready interfaces, and gained valuable experience delivering client-focused web solutions.",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Built 30+ responsive business websites",
      "Converted Figma designs into pixel-perfect interfaces",
      "Worked on business and e-commerce projects",
      "Collaborated with client requirements and project deadlines",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Shopify Liquid", "Git"],
  },

  {
    year: "Dec 2025 – Present",
    role: "Frontend Developer",
    company: "Softvence Delta · Bitopia Group",
    desc: "Currently developing responsive web applications, CMS solutions, and reusable frontend components using modern technologies. Collaborate with designers, backend developers, and project teams to build scalable, production-ready digital products.",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed 60+ responsive web interfaces and CMS components",
      "Built reusable React components for scalable applications",
      "Integrated REST APIs into production-ready projects",
      "Improved frontend performance and user experience",
      "Collaborated with cross-functional development teams",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "REST API",
      "Git",
    ],
  },
];

const truncateWords = (text: string, limit = 15) => {
  const words = text.trim().split(/\s+/);

  if (words.length <= limit) {
    return {
      text,
      truncated: false,
    };
  }

  return {
    text: words.slice(0, limit).join(" "),
    truncated: true,
  };
};

export function Experience() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section
      id="experience"
      className="sticky-card sticky-card-6 content-section textured min-h-screen bg-[#E5E7E8] text-[#111111] px-6 py-32 md:py-44 transition-colors duration-500"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-[#111111] font-semibold">
                ( 04 ) - Career
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-[#111111] md:text-6xl">
                My Journey
              </h2>
            </Reveal>
          </div>
          <Reveal
            delay={0.2}
            className="text-justify [hyphens:auto] max-w-md text-[16px] text-[#111111]/85 md:text-[18px]"
          >
            Click "See Details" to explore each role, responsibilities, and technologies used.
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-px bg-[#D0D4D6] md:left-1/2" />
          <ul className="space-y-16">
            {items.map((it, i) => {
              const preview = truncateWords(it.desc, 15);

              return (
                <Reveal key={it.year} y={30} delay={i * 0.05}>
                  <li className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* LEFT */}
                    <div
                      className={`relative pl-8 md:pl-0 ${
                        i % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                      }`}
                    >
                      <div
                        className={`flex flex-col ${i % 2 === 0 ? "md:items-end" : "md:items-start"}`}
                      >
                        <span className="self-start md:self-auto inline-flex rounded-full border border-[#D0D4D6] bg-white px-3.5 py-1 font-mono text-xs uppercase tracking-[0.25em] text-[#111111] shadow-sm">
                          {it.year}
                        </span>

                        <button
                          type="button"
                          onClick={() => setOpen(it)}
                          data-cursor="hover"
                          className={`group mt-4 cursor-pointer transition-all duration-300 focus:outline-none active:-translate-y-0.5 active:scale-[0.98] text-left ${
                            i % 2 === 0 ? "md:text-right" : "md:text-left"
                          }`}
                        >
                          <span className="inline-flex items-center gap-3 font-display text-2xl font-bold text-[#111111] transition-all duration-300 group-hover:text-brand">
                            {it.role}

                            {/* <span className="ml-3 inline-flex rounded-full border border-[#D0D4D6] bg-white px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#111111] shadow-sm transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white hidden md:block">
                              Explore
                            </span> */}
                          </span>

                          <span className="block h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
                        </button>

                        <div className="mt-2 font-mono text-base font-semibold text-[#111111]">
                          {it.company}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div
                      className={`pl-8 md:pl-0 ${
                        i % 2 === 0 ? "md:pl-12 md:text-left" : "md:order-1 md:pr-12 md:text-right"
                      }`}
                    >
                      <p className="text-justify [hyphens:auto] mt-3 max-w-xl text-[17px] leading-8 text-[#111111]/85">
                        {preview.text}

                        {preview.truncated && (
                          <>
                            ...{" "}
                            <button
                              type="button"
                              onClick={() => setOpen(it)}
                              className="inline-flex items-center font-medium text-brand transition-colors duration-300 hover:underline"
                            >
                              Continue →
                            </button>
                          </>
                        )}
                      </p>
                    </div>

                    <span className="absolute left-[-6px] top-1.5 h-3.5 w-3.5 rounded-full bg-brand shadow-[0_0_12px_var(--brand-color)] md:left-1/2 md:-translate-x-1/2" />
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Detail dialog */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain px-3 py-6 sm:px-4 sm:py-10"
            onClick={() => setOpen(null)}
          >
            <div className="absolute inset-0 bg-[#0A0B0D]/85 backdrop-blur-md" />
            <div
              className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#22252A] bg-[#121417] text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                data-cursor="hover"
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#22252A] text-white transition-colors hover:bg-brand hover:border-brand"
              >
                <X className="h-4 w-4" />
              </button>
              <div
                className="max-h-[85vh] overflow-y-auto overscroll-contain p-6 md:p-10 scrollbar-hide"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-brand">
                  {open.year}
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {open.role}
                </h3>
                <div className="mt-2 font-mono text-base text-[#8E8E93]">{open.company}</div>
                <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8E8E93]">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-brand" />
                    {open.year}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-brand" />
                    {open.location}
                  </span>
                </div>
                <div className="mt-8">
                  <h4 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-white">
                    Overview
                  </h4>
                  <p className="text-justify [hyphens:auto] leading-8 text-white/80">{open.desc}</p>
                </div>
                <div className="mt-8">
                  <div className="mb-3 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.3em] text-[#8E8E93]">
                    <Award className="h-3.5 w-3.5 text-brand" /> Highlights
                  </div>
                  <ul className="space-y-3 text-sm text-white/80">
                    {open.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 text-brand shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <h4 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-white">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {open.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#22252A] bg-[#0A0B0D] px-3 py-1 font-mono text-[12px] uppercase tracking-widest text-[#8E8E93]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
