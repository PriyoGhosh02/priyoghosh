export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex-row">
        <div>© {new Date().getFullYear()} Priyo Ghosh — All rights reserved</div>
        <div className="overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap">
            <span>Designed &amp; built by Priyo Ghosh</span>
            <span>·</span>
            <span>React · Next.js · Tailwind</span>
          </div>
        </div>
        <a href="#top" className="underline-grow text-white" data-cursor="hover">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
