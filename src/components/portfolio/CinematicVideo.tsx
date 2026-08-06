import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Film, Sparkles, Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CinematicVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !videoWrapperRef.current) return;

      if (prefersReducedMotion) {
        gsap.set(videoWrapperRef.current, {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
        });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          isMobile: "(max-width: 639px)",
        },
        (context) => {
          const { isDesktop, isTablet } = (context.conditions || {}) as {
            isDesktop?: boolean;
            isTablet?: boolean;
            isMobile?: boolean;
          };

          const initialWidth = isDesktop ? "75%" : isTablet ? "85%" : "95%";
          const initialHeight = isDesktop ? "70vh" : isTablet ? "65vh" : "55vh";

          // Set responsive initial state
          gsap.set(videoWrapperRef.current, {
            width: initialWidth,
            height: initialHeight,
            borderRadius: "24px",
          });

          // Pinned ScrollTrigger Timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=100%", // Smooth expansion
              pin: true,
              pinSpacing: true,
              scrub: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 1,
            },
          });

          // Phase 2: Scrub animation expanding 75%/85%/95% container + 24px radius to 100vw x 100vh & 0px radius
          tl.to(videoWrapperRef.current, {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            ease: "none",
            duration: 1,
          });
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase-video"
      className="relative z-20 flex h-screen w-full items-center justify-center overflow-hidden bg-[#0A0B0D] text-white"
    >
      {/* Ambient glowing backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,59,0,0.12)_0%,transparent_70%)] blur-[140px]" />

      {/* Expanding Video Container */}
      <div
        ref={videoWrapperRef}
        className="relative flex items-center justify-center overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.9)] transition-shadow duration-500 will-change-[width,height,border-radius]"
        style={{ transformOrigin: "center center" }}
      >
        <video
          ref={videoRef}
          src="/Priyo Ghosh Video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover will-change-transform"
        />

        {/* Cinematic gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/85 via-transparent to-[#0A0B0D]/50" />

        {/* Top Header Overlay */}
        <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-end">
          <button
            type="button"
            onClick={toggleMute}
            data-cursor="hover"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0A0B0D]/75 text-white backdrop-blur-md transition-all hover:border-[#FF3B00] hover:bg-[#FF3B00]"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        {/* Bottom Title & Subtitle Overlay */}
        <div className="pointer-events-none absolute bottom-8 left-6 right-6 z-10 flex flex-col justify-between gap-4 md:bottom-12 md:left-12 md:right-12 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
              Transforming Visions Into Scalable Interfaces
            </h3>
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
            Scroll to explore work ↓
          </div>
        </div>
      </div>
    </section>
  );
}
