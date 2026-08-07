import profileImg from "@/assets/profile_sut.webp";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

/* ---------------- DATA ---------------- */

const taglines = [
  "Full-stack Developer",
  "Shopify Customization",
  "React & Next.js",
  "Database Systems",
  "Responsive Interfaces",
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "TypeScript",
  "Express.js",
  "Hydrogen",
  "Shopify",
  "GraphQL",
  "REST API",
  "Liquid",
  "MongoDB",
  "MySQL",
  "Python",
  "Java",
  "C",
];

/* ---------------- HOOKS ---------------- */

function useCounter(end: number, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

function TypingName() {
  const text = "riyo Ghosh";
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 120);
    } else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, 70);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return <span>P{displayed}</span>;
}

/* ---------------- COMPONENT ---------------- */

export function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  const years = useCounter(1);
  const projects = useCounter(60);
  const satisfaction = useCounter(96);
  const response = useCounter(24);

  useEffect(() => {
    const id = setInterval(() => setTagIndex((i) => (i + 1) % taglines.length), 2400);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="sticky-card sticky-card-1 min-h-screen bg-[#0A0B0D] px-5 pt-28 md:pt-36 pb-0 md:px-8"
    >
      {/* Ambient radial glow */}
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,59,0,0.07)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* LEFT CONTENT */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="text-center md:text-left mb-6 inline-flex rounded-full border border-[#22252A] bg-[#121417]/80 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.35em] text-white">
                Full-Stack Developer & Shopify Specialist
              </div>
            </Reveal>

            {/* MOBILE ONLY Profile Image */}
            <div className="block md:hidden my-6">
              <Reveal y={20}>
                <div className="relative mx-auto w-56">
                  <div className="absolute -inset-4 rounded-full border border-[#22252A]" />
                  <div className="relative aspect-square overflow-hidden rounded-full border border-[#22252A] shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                    <img
                      src={profileImg}
                      alt="Priyo"
                      className="h-full w-full object-cover grayscale"
                      loading="eager"
                      {...({ fetchPriority: "high" } as any)}
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <h1 className="font-display text-[clamp(2.5rem,8vw,6.8rem)] font-bold leading-[0.95] tracking-[-0.05em] text-white text-center md:text-left">
                Hello, I’m
                <br />
                <span>
                  <TypingName />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-justify [hyphens:auto] mt-6 max-w-2xl text-[16px] leading-[1.9] text-white/80">
                I build modern web applications and custom Shopify experiences using React, Next.js, and Node.js. I enjoy creating fast, responsive, and user-friendly websites with clean code, strong performance, and thoughtful user experiences.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 items-center">
                {[
                  { value: `${years}+`, label: "Years Experience" },
                  { value: `${projects}+`, label: "Projects Completed" },
                  { value: `${satisfaction}%`, label: "Client Satisfaction" },
                  { value: `${response}h`, label: "Worldwide Clients" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-4xl font-semibold text-white md:text-5xl">
                      {item.value}
                    </div>

                    <div className="mt-2 font-mono text-[12px] uppercase tracking-[0.25em] text-[#8E8E93]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Rotating Taglines */}
            <Reveal delay={0.25}>
              <div className="mt-8 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-[#8E8E93]">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
                </span>

                <span className="overflow-hidden h-5">
                  <span
                    key={tagIndex}
                    className="block animate-[fade-in_0.6s_ease-out] text-white font-mono"
                  >
                    {taglines[tagIndex]}
                  </span>
                </span>
              </div>
            </Reveal>

            {/* CTA Buttons - Removed Reveal so they render immediately */}
            <div className="mt-10 grid grid-cols-2 gap-4 md:flex md:flex-wrap">
              <a
                href="#work"
                className="cta-primary focus-ring group inline-flex items-center justify-center gap-3 text-center text-[10px] md:text-xs"
              >
                View Work
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="/Resume.pdf"
                download="Priyo_Ghosh_CV.pdf"
                className="cta-secondary focus-ring inline-flex items-center justify-center gap-3 text-center text-[10px] md:text-xs"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* DESKTOP ONLY: Right Column Profile */}
          <div className="hidden md:block md:col-span-5">
            <Reveal y={30}>
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="absolute -inset-6 rounded-full border border-[#22252A]" />
                <div className="absolute -inset-12 rounded-full border border-[#22252A]/50" />

                <div className="relative aspect-square overflow-hidden rounded-full border border-[#22252A] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                  <img
                    src={profileImg}
                    alt="Priyo"
                    className="h-full w-full object-cover grayscale"
                    loading="eager"
                    {...({ fetchPriority: "high" } as any)}
                  />
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-2xl border border-[#22252A] bg-[#121417]/90 px-5 py-4 backdrop-blur-md w-max shadow-xl">
                  <div className="text-sm font-medium text-white">Based in Bangladesh</div>
                  <div className="mt-1 font-mono text-xs text-[#8E8E93]">
                    Working with clients worldwide
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Skills Marquee - Removed Reveal so it renders immediately */}
        <div className="relative mt-12 overflow-hidden border-y border-[#22252A] py-4">
          <div className="marquee flex gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.4em] text-[#8E8E93]">
            {[...skills, ...skills, ...skills].map((s, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="text-white">{s}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
