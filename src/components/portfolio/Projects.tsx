import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowUpRight, ExternalLink, Search, X } from "lucide-react";

type Project = {
  title: string;
  category: string;
  type: string;
  year: string;
  desc: string;
  tags: string[];
  liveUrl: string;
  preview: string;
};

const allProjects: Project[] = [
  {
    title: "The Atelier",
    category: "Brand Identity",
    type: "Web",
    year: "2025",
    desc: "Boutique multi-page experience for a London-based atelier — refined typography and motion-led storytelling.",
    tags: ["React", "Tailwind", "GSAP"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/theatelier.jpg",
  },
  {
    title: "Sardar IT — Marketing",
    category: "Brand Identity",
    type: "Web",
    year: "2025",
    desc: "Responsive marketing site converting Figma into clean, conversion-focused interfaces.",
    tags: ["HTML", "CSS", "Tailwind"],
    liveUrl: "https://theatelier.london/",
    preview: "../projects/Btn Arts.jpeg",
  },
  {
    title: "Softvance CMS",
    category: "SaaS Platform",
    type: "Web",
    year: "2025",
    desc: "Content-managed dashboard surfaces for the Bitopia Group, focused on speed and editor ergonomics.",
    tags: ["React", "Next.js", "Node.js"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Schenee.png",
  },
  {
    title: "University Management System",
    category: "Product Design",
    type: "Web",
    year: "2024",
    desc: "University admission database with students, courses, instructors and departments — built with SQL queries, triggers and constraints.",
    tags: ["MySQL", "SQL", "Schema"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/yemo.jpeg",
  },
  {
    title: "Portfolio Website",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Personal portfolio designed and developed with HTML, CSS and JavaScript — responsive and interactive.",
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/BAYT-EL-HIJAB.png",
  },
  {
    title: "Codeforces Practice",
    category: "Product Design",
    type: "Web",
    year: "2024",
    desc: "Curated repository of competitive-programming solutions covering algorithms and data structures.",
    tags: ["C++", "Algorithms", "DS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/WALKER-S-FINEST-BARBERSHOP-BEAUTY-SUPPLY-–-Walkers-Finest-Barbershop-Beauty-Supply.png",
  },
  {
    title: "Shopify Customizations",
    category: "Mobile App",
    type: "Web",
    year: "2024",
    desc: "Theme customizations and storefront tweaks for international Shopify clients.",
    tags: ["Shopify", "Liquid", "JS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Belleau-lumina.png",
  },
  {
    title: "Material UI Dashboard",
    category: "SaaS Platform",
    type: "Web",
    year: "2024",
    desc: "Internal admin dashboard built with React and Material-UI — tables, charts and role-based views.",
    tags: ["React", "Material-UI", "MongoDB"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Nutrinook.png",
  },
  {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/ELARA.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/aromatikdripz.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/bella-Snoutt-Co.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Klumari-Premium-Anti-Aging-Skin-Care.png",
  },
     {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/AUREN™-Cutting-Mix-–-auren.jpeg",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/SPINTO-FITNESS-USA.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Voordelige-Hoesjes-Screenprotectors-Topkwaliteit-bij-Goedhoesje-nl.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/robert.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/dispenser.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/sergical.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Love Of Country.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Luxury-Hair-Extension.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/Phoenix-Baby-Resale.png",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/clawed.jpeg",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/mazalcare.jpeg",
  },
    {
    title: "Tailwind Landing Kit",
    category: "Brand Identity",
    type: "Web",
    year: "2024",
    desc: "Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",
    tags: ["Tailwind", "React", "TS"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/theislamicholiday.png",
  },

];

const categories = ["All", "Brand Identity", "SaaS Platform", "Product Design", "Mobile App"];
const types = ["All", "Web", "Mobile"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`;
    };
    const onLeave = () => {
      el.style.transform = `perspective(1000px) rotateY(0) rotateX(0)`;
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const frame = frameRef.current;
    if (!el || !frame) return;
    if (!hovered) {
      el.style.transform = "translateY(0)";
      return;
    }
    let raf = 0;
    const start = performance.now();
    const total = Math.max(el.offsetHeight - frame.clientHeight, 0);
    if (total === 0) return;
    // ~80px/sec feels like a real site scroll; capped for very long pages.
    const duration = Math.min(Math.max(total * 18, 4000), 14000);
    const tick = (t: number) => {
      const elapsed = (t - start) % duration;
      const p = elapsed / duration;
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      el.style.transform = `translateY(${-eased * total}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hovered]);

  return (
    <Reveal y={60} delay={(index % 6) * 0.06}>
      <div
        className="group relative block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          ref={tiltRef}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-black transition-[transform,border-color,box-shadow] duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)]"
          style={{ transformStyle: "preserve-3d" }}
          data-cursor="hover"
        >
          <div ref={frameRef} className="absolute inset-0 overflow-hidden bg-white">
            <img
              ref={scrollRef}
              src={project.preview}
              alt={`${project.title} preview`}
              loading="lazy"
              className="block w-full will-change-transform"
              style={{ transition: hovered ? "none" : "transform 0.6s cubic-bezier(0.77,0,0.175,1)" }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

          {/* Live link button — top right */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            data-cursor="hover"
            aria-label={`Open ${project.title} live site`}
            title="Open live site"
            className="group/btn absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black opacity-0 shadow-[0_8px_30px_-8px_rgba(255,255,255,0.4)] backdrop-blur transition-all duration-500 hover:bg-white group-hover:opacity-100"
          >
            Live
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>

          <div className="absolute left-4 top-4 z-10 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur">
            № {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              {project.category} · {project.year}
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-white transition-colors hover:text-white/70 md:text-3xl"
            >
              {project.title}
              <ArrowUpRight className="h-5 w-5 opacity-60" />
            </a>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">
              {project.desc}
            </p>
          </div>
          <div className="hidden flex-wrap justify-end gap-1.5 md:flex">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

const PAGE_SIZE = 6;

export function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProjects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (type !== "All" && p.type !== type) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category, type]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, category, type]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <section id="work" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                ( 03 ) — Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="shimmer-text mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Recent Projects.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="max-w-md text-sm text-white/55">
            Hover any project to scroll through a live preview of its homepage.
          </Reveal>
        </div>

        {/* Search + filters */}
        <Reveal delay={0.15}>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-full border border-white/15 bg-white/5 py-2.5 pl-11 pr-10 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                data-cursor="hover"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  data-cursor="hover"
                  aria-label="Clear"
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/60 hover:bg-white/10"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  data-cursor="hover"
                  className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-all ${
                    type === t
                      ? "border-white bg-white text-black"
                      : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
              <span className="mx-1 h-4 w-px bg-white/15" />
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  data-cursor="hover"
                  className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-all ${
                    category === c
                      ? "border-white bg-white text-black"
                      : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {shown.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
            <div className="text-2xl text-white/30">∅</div>
            <p className="text-sm text-white/60">No projects match that search.</p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
                setType("All");
              }}
              data-cursor="hover"
              className="mt-2 rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid gap-x-8 gap-y-24 md:grid-cols-2">
            {shown.map((p, i) => (
              <div key={p.title} className={i % 2 === 1 ? "md:mt-32" : ""}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        )}

        {hasMore && (
          <div className="mt-20 flex flex-col items-center gap-3">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              data-cursor="hover"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              See more
              <span className="font-mono text-[10px] opacity-60 group-hover:opacity-100">
                +{Math.min(PAGE_SIZE, filtered.length - visible)}
              </span>
            </button>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Showing {shown.length} of {filtered.length}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
