import { useEffect, useState } from "react";
import { MoreVertical, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        scrolled ? "top-4" : "top-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          scrolled
            ? "w-[min(94%,920px)] gap-3 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 shadow-[0_8px_40px_-10px_rgba(255,255,255,0.15)] backdrop-blur-2xl md:gap-6 md:px-6"
            : "max-w-7xl gap-4 px-4 py-5 md:gap-10 md:px-6 md:py-6"
        }`}
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-white md:text-base"
          data-cursor="hover"
        >
          <span>⌬</span>
          <span className="ml-1.5 hidden sm:inline">PRIYO·GHOSH</span>
          <span className="ml-1.5 inline sm:hidden">PRIYO·GHOSH</span>
        </a>
        <nav className="hidden items-center md:flex md:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-grow whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white md:text-[11px] md:tracking-[0.2em]"
              data-cursor="hover"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`hidden rounded-full border border-white/30 text-[10px] uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white hover:text-black md:inline-block ${
            scrolled ? "px-4 py-1.5" : "px-5 py-2"
          }`}
          data-cursor="hover"
        >
          Let&apos;s talk
        </a>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white hover:text-black md:hidden"
          data-cursor="hover"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
    </header>

    {/* Mobile drawer */}
    <div
      className={`fixed inset-0 z-[60] md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!mobileOpen}
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
          mobileOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-[78%] max-w-[320px] border-l border-white/10 bg-black px-6 pb-10 pt-6 shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            <span>⌬</span>
            <span className="ml-1.5">PRIYO·GHOSH</span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white hover:text-black"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="group flex items-center justify-between border-b border-white/10 py-4 text-white transition-colors hover:text-white/70"
              style={{
                transitionDelay: mobileOpen ? `${i * 60 + 120}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "500ms",
              }}
            >
              <span className="font-display text-2xl tracking-tight">{l.label}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                0{i + 1}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-white/30 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white hover:text-black"
        >
          Let&apos;s talk
        </a>
      </aside>
    </div>
    </>
  );
}
