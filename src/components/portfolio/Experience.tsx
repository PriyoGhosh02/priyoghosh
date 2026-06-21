import { useState } from "react";
import { Reveal } from "./Reveal";
import { X, MapPin, Calendar, Award } from "lucide-react";

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
    year: "Dec 2025 — Present",
    role: "Web Developer",
    company: "Softvance Delta · Bitopia Group",
    desc: "Developing responsive web pages and CMS interfaces with modern frontend frameworks.",
    location: "Block-F, Joypurhat Tower, Banasree Main Road, Dhaka 1219",
    highlights: [
      "Building responsive web pages and CMS-driven interfaces",
      "Working with frontend frameworks and UI systems",
      "Collaborating with the Bitopia Group product teams",
    ],
    stack: ["React", "Next.js", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    year: "Aug 2025 — Nov 2025",
    role: "Web Developer",
    company: "Sardar IT",
    desc: "Converted Figma designs into clean, user-friendly responsive interfaces.",
    location: "Shialbari, Rupnagar Rd, Dhaka 1216",
    highlights: [
      "Built responsive web pages with HTML, CSS, JavaScript & Tailwind",
      "Converted Figma designs into pixel-accurate interfaces",
      "Worked with international clients on production deliverables",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    year: "2022 — Present",
    role: "Competitive Programming",
    company: "Codeforces",
    desc: "Regular practice in algorithms, data structures and contest problem solving.",
    location: "Remote · Online",
    highlights: [
      "Solving algorithmic problems on Codeforces regularly",
      "Practicing logical thinking and efficient coding techniques",
      "Participating in contests to sharpen problem-solving skills",
    ],
    stack: ["C++", "C", "Java", "Algorithms"],
  },
  {
    year: "2022 — 2026",
    role: "B.Sc. in CSE",
    company: "Green University of Bangladesh",
    desc: "Undergraduate studies in Computer Science & Engineering, graduating in 2026.",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Coursework in databases, programming, software engineering",
      "Project: University Management System — full SQL schema with triggers",
      "Active in coding practice and self-led web-development projects",
    ],
    stack: ["C", "Java", "Python", "MySQL"],
  },
];

export function Experience() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section id="experience" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">
              ( 04 ) — Experience
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="shimmer-text mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A Quick History.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-sm text-white/50">
              Hover any role for the full story.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2" />
          <ul className="space-y-16">
            {items.map((it, i) => (
              <Reveal key={it.year} y={30} delay={i * 0.05}>
                <li className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div
                    className={`relative pl-8 md:pl-0 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"
                    }`}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {it.year}
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(it)}
                      data-cursor="hover"
                      className="group mt-2 cursor-pointer text-left md:text-inherit transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <span className="inline-flex items-center gap-3 font-display text-2xl font-semibold text-white transition-all duration-300 group-hover:text-white">
                        {it.role}
                        <span className="text-2xl text-white/70 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                      </span>
                      <span className="block h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                    </button>
                    <div className="mt-1 text-sm text-white/60">{it.company}</div>
                  </div>
                  <div
                    className={`pl-8 md:pl-0 ${
                      i % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12 md:text-right"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-white/55">{it.desc}</p>
                  </div>
                  <span className="absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] md:left-1/2 md:-translate-x-1/2" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      {/* Detail dialog */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-10"
          onClick={() => setOpen(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-black p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              data-cursor="hover"
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {open.year}
            </div>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {open.role}
            </h3>
            <div className="mt-1 text-sm text-white/60">{open.company}</div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/50">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" />
                {open.year}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                {open.location}
              </span>
            </div>
            <p className="mt-6 leading-relaxed text-white/70">{open.desc}</p>
            <div className="mt-8">
              <div className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50">
                <Award className="h-3.5 w-3.5" /> Highlights
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                {open.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-white/40" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {open.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
