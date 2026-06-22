import { useEffect, useState } from "react";
import loadingImg from "@/assets/profile_3_Rbg_2.webp";


interface LoadingPageProps {
  showName: boolean;
  onComplete?: () => void;
}

export function LoadingPage({
  showName,
  onComplete,
}: LoadingPageProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    let start: number;

    function animate(timestamp: number) {
      if (!start) start = timestamp;

      const elapsed = timestamp - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      const rounded = Math.floor(percent);

      setProgress(rounded);

      if (percent < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }
    }

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
      <div className="cyber-grid absolute inset-0" />

      {/* Floating code */}
      <div className="code-bg">
        <span>{"const dev = true;"}</span>
        <span>{"return <Portfolio />"}</span>
        <span>{"npm run deploy"}</span>
        <span>{"function build(){}"}</span>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[160px]" />

      <div className="relative flex min-h-screen items-center justify-center">
        <div className="text-center">
          {/* Orbital Loader */}
          <div className="relative mx-auto mb-12 h-[260px] w-[260px]">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/10" />

            <div className="absolute inset-0 animate-spin-slow rounded-full border-t border-white/80" />

            {/* Orbit Ball */}
            <div className="orbit-container absolute inset-0">
              <div className="orbit-ball" />
            </div>

            {/* Center Logo */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="h-40 w-40 overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
    <img
      src={loadingImg}
      alt="Priyo"
      className="h-full w-full object-cover"
    />
  </div>
</div>
          </div>

          {/* Name */}
          <h1
            data-text="PRIYO-GHOSH"
            className="flicker-text glitch-text text-4xl font-semibold tracking-[0.35em] sm:text-5xl"
          >
            PRIYO-GHOSH
          </h1>

          <p
            className={`mt-4 text-sm uppercase tracking-[0.4em] text-white/50 transition-all duration-700 ${
              showName
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            {"</ Full Stack Developer >"}
          </p>

          <p className="mt-10 text-xs tracking-[0.5em] text-white/40">
            LOADING EXPERIENCE
          </p>

          {/* Progress Bar */}
          <div className="mx-auto mt-5 w-80">
            <div className="h-[4px] overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white shadow-[0_0_20px_white]"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-white/60">{progress}%</p>
        </div>
      </div>
    </div>
  );
}