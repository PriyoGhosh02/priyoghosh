import { useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function Contact({ embedded = false }: { embedded?: boolean }) {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const sectionClass = embedded
    ? "relative px-6 py-12"
    : "relative px-6 py-32 md:py-48";

  return (
    <section id={embedded ? undefined : "contact"} className={sectionClass}>
      <div className="mx-auto max-w-6xl">
        {!embedded && (
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">
              ( 05 ) — Contact
            </span>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <h2
            className={`shimmer-text font-display font-semibold leading-[0.95] tracking-tight text-white ${
              embedded
                ? "text-3xl md:text-4xl"
                : "mt-8 text-5xl md:text-8xl"
            }`}
          >
        Get In Touch
          </h2>
        </Reveal>

        <div className={`grid gap-12 md:grid-cols-2 ${embedded ? "mt-10" : "mt-20 gap-16"}`}>
          <Reveal y={20}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-8"
            >
              {[
                { id: "name", label: "Your name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((f) => (
                <div key={f.id} className="relative">
                  <label
                    htmlFor={f.id}
                    className={`absolute left-0 transition-all duration-300 ${
                      focused === f.id
                        ? "-top-4 text-[10px] uppercase tracking-[0.3em] text-white"
                        : "top-3 text-sm text-white/40"
                    }`}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    onFocus={() => setFocused(f.id)}
                    onBlur={(e) => e.target.value === "" && setFocused(null)}
                    className="w-full border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors focus:border-white"
                    data-cursor="hover"
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${
                      focused === f.id ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 ${
                    focused === "message"
                      ? "-top-4 text-[10px] uppercase tracking-[0.3em] text-white"
                      : "top-3 text-sm text-white/40"
                  }`}
                >
                  Tell me about it
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={(e) => e.target.value === "" && setFocused(null)}
                  className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors focus:border-white"
                  data-cursor="hover"
                />
                <span
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${
                    focused === "message" ? "w-full" : "w-0"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white px-8 py-4 text-xs uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:text-black"
                data-cursor="hover"
              >
                <span className="absolute inset-0 origin-bottom -translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative">
                  {submitted ? "Sent ✓" : "Send message"}
                </span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </Reveal>

          <Reveal y={20} delay={0.1}>
            <div className="space-y-12 md:pl-12">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Email
                </div>
                <a
                  href="mailto:priyoghosh02@gmail.com"
                  className="underline-grow mt-2 inline-block font-display text-2xl font-medium text-white md:text-3xl"
                  data-cursor="hover"
                >
                  priyoghosh02@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Based in
                </div>
                <div className="mt-2 font-display text-2xl font-medium text-white md:text-3xl">
                  Dhaka, Bangladesh
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Phone
                </div>
                <a
                  href="tel:+8801743457164"
                  className="underline-grow mt-2 inline-block font-display text-xl font-medium text-white md:text-2xl"
                  data-cursor="hover"
                >
                  01743457164
                </a>
              </div>
              <div>
                <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Elsewhere
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "GitHub", href: "https://github.com/PriyoGhosh02" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/priyo02" },
                    { label: "Facebook", href: "https://www.facebook.com/priyo.ghosh.02" },
                    { label: "Read CV", href: "/Resume.pdf" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-white/10 py-3 text-white transition-colors hover:border-white"
                      data-cursor="hover"
                    >
                      <span className="text-sm">{s.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
