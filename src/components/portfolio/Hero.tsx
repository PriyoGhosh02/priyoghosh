import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import profileImg from "@/assets/profile_sut.webp";
import { ArrowUpRight } from "lucide-react";

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
    }

    else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800); // pause after complete
    }

    else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, 70);
    }

    else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <span>
      P{displayed}
      {/* <span className="animate-pulse">|</span> */}
    </span>
  );
}

/* ---------------- COMPONENT ---------------- */

export function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  const years = useCounter(3);
  const projects = useCounter(50);
  const satisfaction = useCounter(98);
  const response = useCounter(24);

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
      className="relative min-h-screen overflow-hidden px-5 pt-28 pb-16 md:px-8"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* LEFT CONTENT */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-[12px] uppercase tracking-[0.35em] text-white/60">
                Shopify Developer & Frontend Engineer
              </div>
            </Reveal>

            {/* MOBILE ONLY: Profile Image shown after the Shopify Developer text */}
            <div className="block md:hidden my-6">
              <Reveal y={20}>
                <div className="relative mx-auto w-56">
                  <div className="absolute -inset-4 rounded-full border border-white/10" />
                  <div className="relative aspect-square overflow-hidden rounded-full border border-white/20 shadow-[0_0_80px_-10px_rgba(255,255,255,0.2)]">
                    <img
                      src={profileImg}
                      alt="Priyo"
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <h1 className="font-display text-[clamp(2.5rem,8vw,6.8rem)] font-bold leading-[0.95] tracking-[-0.05em] text-white">
                Hello, I’m
                <br />
                <span>
                  <TypingName />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-white/80">
                I build high-converting Shopify stores and modern web
                experiences that help brands grow faster. Specialized in
                scalable frontend architecture, performance optimization, and
                premium user experiences.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { value: `${years}+`, label: "Years Experience" },
                  { value: `${projects}+`, label: "Projects Completed" },
                  { value: `${satisfaction}%`, label: "Client Satisfaction" },
                  { value: `${response}h`, label: "Avg Response" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-4xl font-semibold text-white md:text-5xl">
                      {item.value}
                    </div>

                    <div className="mt-2 text-[12px] uppercase tracking-[0.25em] text-white/45">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Rotating Taglines */}
            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/65">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                </span>

                <span className="overflow-hidden h-5">
                  <span
                    key={tagIndex}
                    className="block animate-[fade-in_0.6s_ease-out] text-white"
                  >
                    {taglines[tagIndex]}
                  </span>
                </span>
              </div>
            </Reveal>

            {/* CTA - Fixed: Force two columns (1 row) on mobile screens */}
            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-2 gap-4 md:flex md:flex-wrap">
                <a
                  href="#work"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-4 py-4 md:px-8 text-center text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] md:tracking-[0.3em] text-black transition hover:scale-105"
                >
                  View Work
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="/Resume.pdf"
                  download="Priyo_Ghosh_CV.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-4 md:px-8 text-center text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* DESKTOP ONLY: Original Right Column Content */}
          <div className="hidden md:block md:col-span-5">
            <Reveal y={30}>
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="absolute -inset-6 rounded-full border border-white/10" />
                <div className="absolute -inset-12 rounded-full border border-white/5" />

                <div className="relative aspect-square overflow-hidden rounded-full border border-white/20 shadow-[0_0_120px_-10px_rgba(255,255,255,0.28)]">
                  <img
                    src={profileImg}
                    alt="Priyo"
                    className="h-full w-full object-cover grayscale"
                  />
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-md w-max">
                  <div className="text-sm font-medium text-white">
                    Based in Bangladesh
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    Working with clients worldwide
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Skills Marquee */}
        <Reveal delay={0.5} className="mt-20">
          <div className="relative overflow-hidden border-y border-white/10 py-4">
            <div className="marquee flex gap-12 whitespace-nowrap text-[12px] uppercase tracking-[0.4em] text-white/55">
              {[...skills, ...skills, ...skills].map((s, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span className="text-white/85">{s}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}