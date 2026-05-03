import { useEffect, useState } from "react";
import { SplitReveal, Reveal } from "./Reveal";
// import profileImg from "@/assets/profile_3_Rbg_2.png";
import profileImg from "@/assets/profile_sut.png";
import { ArrowUpRight, Sparkles } from "lucide-react";

const taglines = [
  "Full-stack developer",
  "Shopify customization",
  "React & Next.js",
  "Database systems",
  "Responsive interfaces",
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Python",
  "Java",
  "C",
];

export function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setTagIndex((i) => (i + 1) % taglines.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-32 pb-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50">
          <span className="h-px w-12 bg-white/30" />
          Portfolio · Priyo Ghosh · 2026
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          {/* Profile column */}
          <Reveal y={30} className="md:col-span-3 md:order-2">
            <div className="relative mx-auto w-44 md:ml-auto md:mr-0 md:w-full md:max-w-[240px]">
              <div className="absolute -inset-3 rounded-full border border-white/10" />
              <div className="absolute -inset-6 rounded-full border border-white/5" />
              <div className="relative aspect-square overflow-hidden rounded-full border border-white/20 shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)]">
                <img
                  src={profileImg}
                  alt="Priyo Ghosh portrait"
                  width={240}
                  height={240}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <span className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-black px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-white">
                {/* <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span> */}
                {"<>"} Available {"</>"}
              </span>
            </div>
          </Reveal>

          {/* Title column */}
          <div className="md:col-span-9 md:order-1">
            <h1 className="font-display text-[clamp(2.6rem,9vw,9rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
              <SplitReveal text="Hello" />
              <br />
              <SplitReveal text="I'm" delay={0.15} className="italic text-white/90 ff" />
              <br />
              <SplitReveal text="Priyo." delay={0.3} />
            </h1>
          </div>
        </div>

        {/* Description + tagline rotator */}
        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md text-base leading-relaxed text-white/60 md:text-lg">
            Aspiring full-stack developer building responsive web sites at
            the intersection of <span className="text-white">code</span>,{" "}
            <span className="text-white">design</span>, and{" "}
            <span className="text-white">data</span>.
          </p>

          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
            <Sparkles className="h-3.5 w-3.5 text-white" />
            <span className="overflow-hidden">
              <span
                key={tagIndex}
                className="block animate-[fade-in_0.6s_ease-out] text-white"
              >
                {taglines[tagIndex]}
              </span>
            </span>
          </div>
        </div>

        {/* Skills marquee */}
        <Reveal delay={0.3} className="mt-14">
          <div className="relative overflow-hidden border-y border-white/10 py-4">
            <div className="marquee gap-12 whitespace-nowrap text-[11px] uppercase tracking-[0.4em] text-white/50">
              {[...skills, ...skills, ...skills].map((s, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span className="text-white/80">{s}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { v: "2+", l: "Years coding" },
            { v: "10+", l: "Projects" },
            { v: "2", l: "Companies" },
            { v: "B.Sc.", l: "CSE · 2026" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={0.1 + i * 0.05}>
              <div className="flex items-baseline gap-3 border-l border-white/15 pl-4">
                <div className="font-display text-3xl font-semibold text-white md:text-4xl">
                  {s.v}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA row */}
        <Reveal delay={0.4} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-black transition-transform hover:scale-105"
          >
            View work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/Resume.pdf"
            download="Priyo_Ghosh_CV.pdf"
            data-cursor="hover"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            Download CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
