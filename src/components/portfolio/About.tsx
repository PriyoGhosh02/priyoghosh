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
    title: "Building a Strong Foundation in Computer Science.",
    subtitle: "B.Sc. CSE · Green University of Bangladesh",
    body: [
      "Pursuing a B.Sc. in Computer Science and Engineering at Green University of Bangladesh, graduating in 2026.",
      "My academic journey has helped me build a strong understanding of programming, data structures, databases, software engineering, and problem-solving. Along the way, I've enjoyed applying what I learn to real-world projects and continuously improving my development skills..",
    ],
    highlights: [
      { v: "B.Sc.", l: "CSE" },
      { v: "2026", l: "Graduation" },
      { v: "CP", l: "Codeforces Problem Solving" },
      { v: "Projects", l: "Hands-on Learning" },
    ],
    image: profileImg,
  },
  {
    type: "industrial",
    badge: "02 - Industrial",
    title: "Building Real-World Web Applications.",
    subtitle: "Frontend Developer - Softvence Delta | Formerly Sardar IT",
    body: [
      "I'm currently working as a Frontend Developer at Softvence Delta (Bitopia Group), where I build responsive web applications, develop reusable UI components, and work with modern CMS platforms to deliver scalable digital solutions.",
      "Before joining Softvence Delta, I worked at Sardar IT, where I transformed Figma designs into responsive, production-ready websites and gained hands-on experience building business websites and e-commerce solutions using HTML, CSS, JavaScript, Tailwind CSS, Shopify Liquid, and CMS platforms.",
    ],
    highlights: [
      { v: "2", l: "Companies" },
      { v: "60+", l: "Projects" },
      { v: "React", l: "Next.js" },
      { v: "Shopify", l: "Development" },
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
    <section
      id="about"
      className="sticky-card sticky-card-2 content-section textured min-h-screen bg-[#E5E7E8] text-[#111111] px-6 py-32 md:py-44 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
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
          </div>
          <Reveal delay={0.2} className="max-w-md text-[16px] text-[#111111]/85 md:text-[18px]">
            I enjoy solving real problems through code and building websites that are fast, easy to
            use, and designed to create a better experience for both businesses and users.
          </Reveal>
        </div>

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
          <div
            id="about_content"
            className="md:col-span-8 rounded-2xl border border-[#D0D4D6] bg-white p-8 md:p-12 shadow-sm transition-all duration-300 hover:shadow-md"
          >
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
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === idx ? "w-12 bg-brand" : "w-6 bg-[#D0D4D6]"
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
