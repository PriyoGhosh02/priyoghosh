import { useState } from "react";
import { Reveal, SplitReveal } from "./Reveal";
import { ChevronLeft, ChevronRight, GraduationCap, Briefcase } from "lucide-react";
import profileImg from "@/assets/profile_3_Rbg.png";
// import profileImg from "@/assets/profile_sut.png";

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
    badge: "01 — Academic",
    title: "A computer-science foundation, in progress.",
    subtitle: "B.Sc. CSE · Green University of Bangladesh",
    body: [
      "Pursuing a B.Sc. in Computer Science and Engineering at Green University of Bangladesh, graduating in 2026.",
      "Earlier completed HSC (Science) at Kaliganj Govt. College and SSC (Science) at Dr. Mujib-Ruby Model High School — solid grounding in math, problem solving and CS fundamentals.",
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
    badge: "02 — Industrial",
    title: "Shipping responsive products for real teams.",
    subtitle: "Softvance · Sardar IT",
    body: [
      "Currently building responsive web pages and CMS interfaces at Softvance Delta (Bitopia Group) in Dhaka.",
      "Previously at Sardar IT, converting Figma designs into clean Tailwind interfaces and shipping marketing pages with HTML, CSS and JavaScript.",
    ],
    highlights: [
      { v: "2", l: "Companies" },
      { v: "10+", l: "Projects" },
      { v: "Web", l: "Focus" },
      { v: "CMS", l: "Built" },
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
    <section id="about" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">
            ( 01 ) — About
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            <SplitReveal
              text="I design and build interfaces that feel as good as they look."
              stagger={0.03}
            />
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-center">
          {/* Left: image */}
          <div className="md:col-span-4">
            <div
              key={`img-${idx}`}
              className="relative aspect-[4/5] w-full animate-[fade-in_0.6s_ease-out] overflow-hidden rounded-sm border border-white/10"
            >
              <img
                src={card.image}
                alt={card.type}
                loading="lazy"
                width={400}
                height={500}
                className="h-full w-full object-cover grayscale"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur">
                {card.type === "academic" ? (
                  <GraduationCap className="h-3.5 w-3.5" />
                ) : (
                  <Briefcase className="h-3.5 w-3.5" />
                )}
                {card.type}
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="md:col-span-8 md:pl-12">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                {card.badge}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => swap(-1)}
                  data-cursor="hover"
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => swap(1)}
                  data-cursor="hover"
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div key={`txt-${idx}`} className="animate-[fade-in_0.5s_ease-out]">
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/50">
                {card.subtitle}
              </p>
              <div className="mt-8 max-w-xl space-y-4 text-white/65">
                {card.body.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
                {card.highlights.map((h) => (
                  <div key={h.l} className="border-l border-white/15 pl-4">
                    <div className="font-display text-2xl font-semibold text-white md:text-3xl">
                      {h.v}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
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
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === idx ? "w-12 bg-white" : "w-6 bg-white/20"
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
