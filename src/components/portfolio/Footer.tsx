export function Footer() {
  return (
    <footer className="relative z-60 bg-[#0A0B0D] border-t border-[#22252A] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.3em] text-white/90 md:flex-row">
        <div>© {new Date().getFullYear()} Priyo Ghosh - All rights reserved</div>
        <div className="overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap">
            <span>Designed &amp; built by Priyo Ghosh</span>
          </div>
        </div>
        <a href="#top" className="text-white transition-colors hover:text-[#FF3B00]" data-cursor="hover">
          Back to top <b className="text-xl text-[#FF3B00]">↑</b>
        </a>
      </div>
    </footer>
  );
}
