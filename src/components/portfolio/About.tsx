import profileImg from "@/assets/profile_3_Rbg.webp";
import { Briefcase, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
// import profileImg from "@/assets/profile_sut.webp";

type CardData = {
  type: "academic" | "industrial";
  badge: string;
  title: string;
  subtitle: string;
  body: string[];
  highlights: { v: string; l: string }[];
  image: string;
};

const cards: CardData[] = [
  {
    type: "academic",
    badge: "01 - Academic",
    title: "A computer-science foundation, in progress.",
    subtitle: "B.Sc. CSE · Green University of Bangladesh",
    body: [
      "Pursuing a B.Sc. in Computer Science and Engineering at Green University of Bangladesh, graduating in 2026.",
      "Earlier completed HSC (Science) at Kaliganj Govt. College and SSC (Science) at Dr. Mujib-Ruby Model High School - solid grounding in math, problem solving and CS fundamentals.",
    ],
    highlights: [
      { v: "B.Sc.", l: "CSE" },
      { v: "2026", l: "Graduation" },
      { v: "GUB", l: "University" },
      { v: "CP", l: "Codeforces" },
    ],
    image: profileImg,
  },
  {
    type: "industrial",
    badge: "02 - Industrial",
    title: "Responsive designs for real Projects.",
    subtitle: "Softvance · Sardar IT",
    body: [
      "Currently working as a Frontend Web Developer at Softvance Delta (Bitopia Group), Dhaka, building responsive, high-performance web interfaces and working with modern CMS platforms to deliver scalable solutions.",
      "Previously at Sardar IT, where I transformed Figma designs into clean, production-ready interfaces using Tailwind CSS, HTML, CSS, Liquid, and JavaScript, and developed engaging E-commerce pages with CMS integration.",
    ],
    highlights: [
      { v: "2", l: "Companies" },
      { v: "60+", l: "Projects" },
      { v: "Web", l: "Focus" },
      { v: "FE", l: "Responsive Frontend" },
    ],
    image: profileImg,
  },
];

export function About() {
  const [idx, setIdx] = useState(0);
  const card = cards[idx];

  const swap = (dir: 1 | -1) => {
    setIdx((i) => (i + dir + cards.length) % cards.length);
  };

  return (
    <section id="about" className="sticky-card sticky-card-2 content-section textured min-h-screen bg-[#E5E7E8] text-[#111111] px-6 py-32 md:py-44 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-[#111111] font-semibold">
            ( 01 ) - About
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-[#111111] md:text-6xl">
            Get To Know Me.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-center">
          {/* Left: image */}
          <div className="md:col-span-4">
            <div
              key={`img-${idx}`}
              className="relative aspect-[4/5] w-full animate-[fade-in_0.6s_ease-out] overflow-hidden rounded-xl border border-[#D0D4D6] bg-white shadow-md"
            >
              <img
                src={card.image}
                alt={card.type}
                loading="lazy"
                width={400}
                height={500}
                className="h-full w-full object-cover grayscale"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#0A0B0D]/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur">
                {card.type === "academic" ? (
                  <GraduationCap className="h-3.5 w-3.5 text-brand" />
                ) : (
                  <Briefcase className="h-3.5 w-3.5 text-brand" />
                )}
                {card.type}
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div id="about_content" className="md:col-span-8 rounded-2xl border border-[#D0D4D6] bg-white p-8 md:p-12 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[14px] font-semibold uppercase tracking-[0.3em] text-brand">
                {card.badge}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => swap(-1)}
                  data-cursor="hover"
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D0D4D6] text-[#111111] transition-all duration-300 hover:bg-brand hover:border-brand hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => swap(1)}
                  data-cursor="hover"
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D0D4D6] text-[#111111] transition-all duration-300 hover:bg-brand hover:border-brand hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div key={`txt-${idx}`} className="animate-[fade-in_0.5s_ease-out]">
              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
                {card.title}
              </h3>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-[#111111] font-medium">
                {card.subtitle}
              </p>
              <div className="text-justify [hyphens:auto] mt-8 max-w-xl space-y-4 text-[#111111]/85 text-[16px] md:text-[18px]">
                {card.body.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
                {card.highlights.map((h) => (
                  <div key={h.l} className="border-l-2 border-[#D0D4D6] pl-4">
                    <div className="font-display text-2xl font-bold text-[#111111] md:text-3xl">
                      {h.v}
                    </div>
                    <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.3em] text-[#111111] font-semibold">
                      {h.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="mt-10 flex items-center gap-2">
              {cards.map((c, i) => (
                <button
                  key={c.type}
                  onClick={() => setIdx(i)}
                  data-cursor="hover"
                  aria-label={c.type}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? "w-12 bg-brand" : "w-6 bg-[#D0D4D6]"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
