import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Film, Sparkles, Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CinematicVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const progressCircleRef = useRef<SVGPathElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const needleRef = useRef<SVGGElement>(null);
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

          // Fade in and scale up the progress bar container in the first 15% of scroll
          tl.fromTo(
            progressContainerRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, ease: "power1.out", duration: 0.15 },
            0
          );

          // Animate the text percentage count, path dashoffset, and needle rotation from 0 to 100
          const progressObj = { value: 0 };
          tl.to(
            progressObj,
            {
              value: 100,
              ease: "none",
              duration: 1,
              onUpdate: () => {
                const currentVal = progressObj.value;

                // Update text
                if (progressTextRef.current) {
                  progressTextRef.current.textContent = `${Math.round(currentVal)}%`;
                }

                // Update gauge path dashoffset (starts at 106.8, ends at 0)
                if (progressCircleRef.current) {
                  const dashoffset = 106.8 - (106.8 * currentVal) / 100;
                  progressCircleRef.current.setAttribute("stroke-dashoffset", dashoffset.toString());
                }

                // Update needle rotation (starts at -90 deg, ends at 90 deg)
                if (needleRef.current) {
                  const angle = -90 + (180 * currentVal) / 100;
                  needleRef.current.setAttribute("transform", `rotate(${angle}, 48, 54)`);
                }
              },
            },
            0
          );

          // Fade out the progress bar container in the last 15% of scroll (from 85% to 100%)
          tl.to(
            progressContainerRef.current,
            { opacity: 0, scale: 0.8, ease: "power1.in", duration: 0.15 },
            0.85
          );
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
        className="relative flex items-center justify-center overflow-hidden will-change-[width,height,border-radius]"
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

        {/* Speedometer Gauge Progress Bar Overlay */}
        <div
          ref={progressContainerRef}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center opacity-0 scale-90"
        >
          <div className="relative flex flex-col items-center justify-center">
            <svg className="w-28 h-28 md:w-36 md:h-36" viewBox="0 0 96 96">
              {/* Background Arc */}
              <path
                d="M 14 54 A 34 34 0 0 1 82 54"
                className="stroke-white/10 fill-none"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Foreground Arc */}
              <path
                ref={progressCircleRef}
                d="M 14 54 A 34 34 0 0 1 82 54"
                className="stroke-brand fill-none"
                strokeWidth="10"
                strokeDasharray="106.8"
                strokeDashoffset="106.8"
                strokeLinecap="round"
              />
              {/* Needle Pointer & Hub Group */}
              <g ref={needleRef} transform="rotate(-90, 48, 54)">
                <polygon
                  points="46,54 47.5,18 48.5,18 50,54"
                  fill="#5A6B9B"
                />
                <circle
                  cx="48"
                  cy="54"
                  r="6"
                  fill="#5A6B9B"
                />
              </g>
            </svg>
            <span
              ref={progressTextRef}
              className="font-mono text-lg md:text-2xl font-bold tracking-tight text-white -mt-3 md:-mt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              0%
            </span>
          </div>
        </div>

        {/* Top Header Overlay */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-end md:top-6 md:left-6 md:right-6">
          <button
            type="button"
            onClick={toggleMute}
            data-cursor="hover"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/20 bg-[#0A0B0D]/75 text-white backdrop-blur-md transition-all hover:border-brand hover:bg-brand"
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5 md:h-4 md:w-4" /> : <Volume2 className="h-3.5 w-3.5 md:h-4 md:w-4" />}
          </button>
        </div>

        {/* Bottom Title & Subtitle Overlay */}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-between gap-2 md:bottom-12 md:left-12 md:right-12 md:flex-row md:items-end md:gap-4">
          <div className="max-w-xl">
            <h3 className="mt-2 font-display text-lg sm:text-2xl font-bold tracking-tight text-white md:text-4xl">
              Learning Through Practice and Real Projects
            </h3>
          </div>

          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/70">
            Scroll to Explore Work ↓
          </div>
        </div>
      </div>
    </section>
  );
}
