import { ArrowUpRight, Check, Copy, ExternalLink, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  category: string;
  type: string;
  year: string;
  desc: string;
  tags: string[];
  liveUrl: string;
  preview: string;
  password?: string;
};

const allProjects: Project[] = [
  // Client Work =========================================
  {
    title: "Muni Diva",
    category: "Client Project",
    type: "Shopify",
    year: "2026",
    desc: "German beauty & cosmetics Shopify store built with polished UI, rich visual storytelling, and a seamless shopping experience.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://munidiva.de/",
    preview: "/projects/client/Schenee.webp",
  },
  {
    title: "The Atelier London",
    category: "Client Project",
    type: "Shopify",
    year: "2026",
    desc: "Luxury London-based Shopify storefront showcasing bespoke handcrafted interior artwork and premium home decor.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://theatelier.london/",
    preview: "/projects/client/theatelier.webp",
  },
  {
    title: "Goedhoesje",
    category: "Client Project",
    type: "Shopify",
    year: "2026",
    desc: "High-volume Dutch tech accessory store featuring smart collection filtering and an optimized checkout funnel.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://goedhoesje.nl/",
    preview: "/projects/client/Voordelige-Hoesjes.webp",
  },
  {
    title: "Bayt El Hijab",
    category: "Client Project",
    type: "Shopify",
    year: "2026",
    desc: "Elegant modest fashion e-commerce store designed with custom apparel collection layouts and refined aesthetics.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://baytelhijab.com/",
    preview: "/projects/client/BAYT-EL-HIJAB.webp",
  },
  {
    title: "BTN Arts",
    category: "Client Project",
    type: "Shopify",
    year: "2026",
    desc: "Immersive online art gallery featuring high-resolution artwork displays and structured catalog management.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://btnarts.com/",
    preview: "/projects/client/Btn Arts.webp",
  },
  {
    title: "Belleau Lumina",
    category: "Client Project",
    type: "Shopify",
    year: "2026",
    desc: "High-end skincare store engineered with custom Liquid sections, brand-focused typography, and direct-to-consumer features.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://belleau-lumina.com/",
    preview: "/projects/client/Belleau-lumina.webp",
  },
  {
    title: "AVORA PelviPulse Pro",
    category: "Client Project",
    type: "Shopify",
    year: "2026",
    desc: "High-converting single-product landing page built for direct-response sales and quick mobile purchasing.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://www.my-avora.com/products/avora-pelvipulse-pro",
    preview: "/projects/client/AUREN™-Cutting.webp",
  },
  // Concept Work =========================================
  {
    title: "ULTIMAX Nutrition",
    category: "Concept Work",
    type: "Shopify",
    year: "2026",
    desc: "High-energy fitness supplement concept built for performance brands, featuring bold visuals and conversion triggers.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://ultimax-nutrition-2.myshopify.com/",
    password: "123",
    preview: "/projects/concept/ultimax-nutrition-2.webp",
  },
  {
    title: "Warmora",
    category: "Concept Work",
    type: "Shopify",
    year: "2026",
    desc: "Minimalist winter fashion storefront tailored for luxury outerwear, seasonal lookbooks, and high-end apparel.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://warmora-fuzwv4d6.myshopify.com/",
    password: "123",
    preview: "/projects/concept/winter fassion.webp",
  },
  {
    title: "Motor Lagacy",
    category: "Concept Work",
    type: "Shopify",
    year: "2026",
    desc: "Bold automotive parts and accessory store concept featuring industrial aesthetics and structured product grids.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://motor-legacy-3rdvkp5a.myshopify.com/",
    password: "123",
    preview: "/projects/concept/motor-legacy.webp",
  },
  {
    title: "OTAP",
    category: "Concept Work",
    type: "Shopify",
    year: "2026",
    desc: "Futuristic anime merchandise shop crafted for pop-culture apparel, collectibles, and fan gear.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://otap-2.myshopify.com/",
    password: "1",
    preview: "/projects/concept/otap-2.webp",
  },
  {
    title: "JinglePaws",
    category: "Concept Work",
    type: "Shopify",
    year: "2026",
    desc: "Festive, single-product seasonal store optimized for pet accessory launches and holiday campaigns.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://jingle-paws-wttbxemr.myshopify.com/",
    password: "123",
    preview: "/projects/concept/pet-jingle-bell.webp",
  },
  {
    title: "Meat Bazer",
    category: "Concept Work",
    type: "Shopify",
    year: "2026",
    desc: "Gourmet meat & food delivery concept showcasing structured category layouts and fresh product highlights.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://meat-bazer.myshopify.com/",
    password: "123",
    preview: "/projects/concept/meat-bazer.webp",
  },
  {
    title: "Tinko Toys",
    category: "Concept Work",
    type: "Shopify",
    year: "2026",
    desc: "Playful e-commerce concept for kids' toys featuring vibrant colors, intuitive navigation, and engaging hero sections.",
    tags: ["shopify", "liquid", "css", "javascript"],
    liveUrl: "https://tink-tonk-qx2gyeda.myshopify.com/",
    password: "123",
    preview: "/projects/concept/tinko-toy.webp",
  },
  // Personal Portfolio =========================================
  {
    title: "Priyo Ghosh Portfolio",
    category: "Concept Work",
    type: "Custom Build",
    year: "2026",
    desc: "Modern developer portfolio built with Next.js and Tailwind CSS to showcase custom Shopify builds and frontend expertise.",
    tags: ["react", "nextjs", "tailwindcss", "typescript"],
    liveUrl: "https://priyoghosh.vercel.app/",
    preview: "/projects/concept/portfolio.webp",
  },
];

const typeOptions = ["All", ...new Set(allProjects.map((project) => project.type))];
const categoryOptions = ["All", ...new Set(allProjects.map((project) => project.category))];
const tagsOptions = ["All", ...new Set(allProjects.flatMap((project) => project.tags))];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  const handleCopyPassword = async () => {
    if (!project.password) return;

    try {
      await navigator.clipboard.writeText(project.password);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

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
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#D0D4D6] bg-white shadow-sm transition-all duration-500 group-hover:border-brand group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
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
              style={{
                transition: hovered ? "none" : "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

          {/* Live link button - top right */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            data-cursor="hover"
            aria-label={`Open ${project.title} live site`}
            title="Open live site"
            className="group/btn absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-white opacity-0 shadow-lg backdrop-blur transition-all duration-300 hover:bg-[#111111] group-hover:opacity-100"
          >
            Live
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>

          <div className="absolute left-4 top-4 z-10 rounded-full bg-[#121417]/85 px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.3em] text-white backdrop-blur">
            № {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <div className="font-mono text-[14px] uppercase tracking-[0.3em] text-[#8E8E93]">
              {project.category} · {project.year}
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-[#111111] transition-colors hover:text-brand md:text-3xl"
            >
              {project.title}
              <ArrowUpRight className="h-5 w-5 opacity-60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-brand" />
            </a>
            <p className="text-justify [hyphens:auto] mt-2 max-w-md text-[16px] leading-relaxed text-[#111111]/80">
              {project.desc}
            </p>
          </div>
          <div className="hidden flex-col items-end justify-end gap-1.5 md:flex">
            <div className="flex flex-wrap justify-end gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#D0D4D6] bg-white px-3 py-1 font-mono text-[12px] uppercase tracking-widest text-[#8E8E93]"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.password ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleCopyPassword();
                }}
                data-cursor="hover"
                aria-label={`Copy password for ${project.title}`}
                title="Copy password"
                className="inline-flex items-center gap-2 rounded-full border border-[#D0D4D6] bg-white px-3 py-1 font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[#111111] transition-all hover:border-brand hover:text-brand"
              >
                <span>Password: {project.password}</span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-brand" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            ) : (
              <span className="rounded-full border border-[#D0D4D6] bg-white px-3 py-1 font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[#111111]">
                Password: N/A
              </span>
            )}
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
  const [tag, setTag] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProjects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (type !== "All" && p.type !== type) return false;
      if (tag !== "All" && !p.tags.includes(tag)) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category, type, tag]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, category, type, tag]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <section id="work" className="sticky-card z-30 sticky-card-5 content-section textured min-h-screen bg-[#E5E7E8] text-[#111111] px-6 py-32 md:py-44 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-[#111111] font-semibold">
                ( 03 ) - Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-[#111111] md:text-6xl">
                Recent Projects.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="max-w-md text-[16px] text-[#111111]/85 md:text-[18px]">
            Hover any project to scroll through a live preview of its homepage.
          </Reveal>
        </div>

        {/* Search + filters */}
        <Reveal delay={0.15}>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8E8E93]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-full border border-[#D0D4D6] bg-white py-2.5 pl-11 pr-10 text-sm text-[#111111] placeholder:text-[#8E8E93] shadow-sm focus:border-brand focus:outline-none"
                data-cursor="hover"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  data-cursor="hover"
                  aria-label="Clear"
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[#8E8E93] hover:bg-[#E5E7E8]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {typeOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setType(option)}
                    data-cursor="hover"
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.2em] transition-all ${type === option
                      ? "border-[#121417] bg-[#121417] text-white shadow-sm"
                      : "border-[#D0D4D6] bg-white text-[#111111] hover:border-[#121417]"
                      }`}
                  >
                    {option}
                  </button>
                ))}
                <span className="mx-1 h-4 w-px bg-[#D0D4D6]" />
                {categoryOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setCategory(option)}
                    data-cursor="hover"
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.2em] transition-all ${category === option
                      ? "border-[#121417] bg-[#121417] text-white shadow-sm"
                      : "border-[#D0D4D6] bg-white text-[#111111] hover:border-[#121417]"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-12 flex flex-wrap items-center gap-2">
            {tagsOptions.map((option) => (
              <button
                key={option}
                onClick={() => setTag(option)}
                data-cursor="hover"
                className={`rounded-full border px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.2em] transition-all ${tag === option
                  ? "border-brand bg-brand text-white shadow-sm"
                  : "border-[#D0D4D6] bg-white text-[#111111] hover:border-brand hover:text-brand"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </Reveal>

        {shown.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
            <div className="text-2xl text-[#8E8E93]">∅</div>
            <p className="text-sm text-[#111111]/80">No projects match that search.</p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
                setType("All");
                setTag("All");
              }}
              data-cursor="hover"
              className="mt-2 rounded-full border border-[#D0D4D6] bg-white px-4 py-2 font-mono text-[12px] uppercase tracking-[0.2em] text-[#111111] hover:bg-brand hover:border-brand hover:text-white"
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
              className="group inline-flex items-center gap-3 rounded-full border border-[#D0D4D6] bg-white px-7 py-3 font-mono text-xs uppercase tracking-[0.3em] text-[#111111] transition-all hover:border-brand hover:bg-brand hover:text-white shadow-sm"
            >
              See more
              <span className="font-mono text-[12px] opacity-70 group-hover:opacity-100">
                +{Math.min(PAGE_SIZE, filtered.length - visible)}
              </span>
            </button>
            <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#8E8E93]">
              Showing {shown.length} of {filtered.length}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
