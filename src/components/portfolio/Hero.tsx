import { useEffect, useState } from "react";
import { SplitReveal, Reveal } from "./Reveal";
import profileImg from "@/assets/profile_sut.png";
import { ArrowUpRight, Code2 } from "lucide-react";


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
      2400
    );

    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-5 pt-28 pb-16 md:px-8"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex items-center justify-center gap-3 text-center text-xs uppercase tracking-[0.4em] text-white/50 md:justify-start">
          <span className="hidden h-px w-12 bg-white/30 md:block" />
          {/* Portfolio · Priyo Ghosh · 2026 */}
          <h1>
  Priyo Ghosh · Shopify Developer & Full Stack Web Developer · 2026
</h1>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          {/* Profile */}
          <Reveal y={30} className="order-1 md:order-2 md:col-span-3">
            <div className="relative mx-auto w-56 md:ml-auto md:mr-0 md:w-full md:max-w-[320px] lg:max-w-[380px]">
              <div className="absolute -inset-4 rounded-full border border-white/10" />
              <div className="absolute -inset-8 rounded-full border border-white/5" />

              <div className="relative aspect-square overflow-hidden rounded-full border border-white/20 shadow-[0_0_100px_-10px_rgba(255,255,255,0.28)]">
                <img
                  src={profileImg}
                  alt="Priyo"
                  className="h-full w-full object-cover grayscale"
                />
              </div>

              <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-black px-4 py-1 text-[9px] uppercase tracking-[0.25em]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Available
              </span>
            </div>
          </Reveal>

          {/* Title */}
<div className="order-2 text-center md:order-1 md:col-span-9 md:text-left">
  <h2 className="font-display text-[clamp(2.4rem,14vw,9rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
    <SplitReveal text="Hello" />
    <br />

    <SplitReveal
      text="I'm"
      delay={0.15}
      className="italic text-white/90 ff"
    />
    <br />

    <span className="glitch-wrapper inline-block">
      <span
        className=""
        data-text="Priyo."
      >
        Priyo.
      </span>
    </span>
  </h2>
</div>
        </div>

        {/* Description */}
        <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <p className="mx-auto max-w-md text-center text-base leading-relaxed text-white/60 md:mx-0 md:text-left md:text-lg">
            Aspiring full-stack developer and  a Shopify developer  specializing in Shopify custom themes, React applications,
  TypeScript, frontend development, and eCommerce optimization. Building responsive websites at
            the intersection of <span className="text-white">code</span>,
            <span className="text-white"> design</span>, and
            <span className="text-white"> data</span>.
          </p>

          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
            <Code2 className="h-3.5 w-3.5 text-white" />

            <span className="overflow-hidden">
              <span
                key={tagIndex}
                className="block animate-[fade-in_0.6s_ease-out] text-white"
              >
                {taglines[tagIndex]}
              </span>
            </span>
                        <Code2 className="h-3.5 w-3.5 text-white" />

          </div>
        </div>

        {/* Skills */}
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

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { v: "2+", l: "Years coding" },
            { v: "50+", l: "Projects" },
            { v: "2", l: "Companies" },
            { v: "B.Sc.", l: "CSE · 2026" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={0.1 + i * 0.05}>
              <div className="flex items-baseline gap-3 border-l border-white/15 pl-4">
                <div className="font-display text-3xl font-semibold md:text-4xl">
                  {s.v}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal
          delay={0.4}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-black transition-transform hover:scale-105"
          >
            View work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="/Resume.pdf"
            download="Priyo_Ghosh_CV.pdf"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            Download CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}