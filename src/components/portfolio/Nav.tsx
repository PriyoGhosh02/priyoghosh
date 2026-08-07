import { CodeXml, MoreVertical, Sun, Moon, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  onContactClick: () => void;
}

export function Nav({ onContactClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

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
        className={`fixed left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "top-3 md:top-4" : "top-3 md:top-5"
          }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
            ? "w-[min(92%,1280px)] gap-3 rounded-full border border-[#22252A] bg-[#0A0B0D]/85 px-5 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl md:gap-6 md:px-7"
            : "w-[min(95%,1280px)] gap-4 rounded-full border border-[#22252A] bg-[#0A0B0D]/75 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:gap-10 md:px-8"
            }`}
        >
          <a
            href="#top"
            className="flex items-center font-display text-sm font-semibold tracking-tight text-white transition-colors hover:text-brand md:text-base"
            data-cursor="hover"
          >
            <CodeXml className="h-5 w-5 text-brand mr-1.5" />
            <span className="hidden sm:inline">PRIYO GHOSH</span>
            <span className="inline sm:hidden">PRIYO GHOSH</span>
          </a>
          <nav className="hidden items-center md:flex md:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[13px] uppercase tracking-[0.2em] text-white transition-colors hover:text-brand"
                data-cursor="hover"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={() => setIsDark(!isDark)}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22252A] bg-[#121417] text-white transition-all hover:border-brand hover:text-brand"
              data-cursor="hover"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={onContactClick}
              type="button"
              className={`rounded-full bg-white font-medium text-[13px] uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-brand hover:text-white shadow-md ${scrolled ? "px-4 py-1.5" : "px-5 py-2"
                }`}
              data-cursor="hover"
            >
              Let&apos;s talk
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22252A] bg-[#121417] text-white transition-all hover:border-brand hover:text-brand"
              data-cursor="hover"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22252A] bg-[#121417] text-white transition-all hover:border-brand hover:text-brand"
              data-cursor="hover"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden overflow-hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-[#0A0B0D]/80 backdrop-blur-md transition-opacity duration-500 ${mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[78%] max-w-[320px] border-l border-[#22252A] bg-[#0A0B0D] px-6 pb-10 pt-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen
            ? "translate-x-0 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            : "translate-x-[110%] shadow-none"
            }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center font-display text-sm font-semibold tracking-tight text-white">
              <CodeXml className="h-5 w-5 text-brand mr-1.5" />
              <span>PRIYO·GHOSH</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22252A] text-white transition-all hover:border-brand hover:bg-brand hover:text-white"
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
                className="group flex items-center justify-between border-b border-[#22252A] py-4 font-mono text-lg text-white transition-colors hover:text-brand"
                style={{
                  transitionDelay: mobileOpen ? `${i * 60 + 120}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(20px)",
                  transitionProperty: "opacity, transform, color",
                  transitionDuration: "500ms",
                }}
              >
                <span className="font-display text-2xl tracking-tight">{l.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileOpen(false);
              onContactClick();
            }}
            type="button"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black transition-all hover:bg-brand hover:text-white"
          >
            Let&apos;s talk
          </button>
        </aside>
      </div>
    </>
  );
}
