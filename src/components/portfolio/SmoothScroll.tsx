import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Initialize Lenis Smooth Scroll engine for 1:1 responsive smooth scrubbing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.09,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
    });

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize GSAP ticker loop with Lenis frame rendering
    const updateGsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    // 2. EXACT GSAP + SCROLLTRIGGER SCALED SCRUB LOOP (Webflow sticky-sections-gsap logic)
    const stackCtx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Define card scaling animations explicitly to ensure correct triggers and order
      const scalingConfigs = [
        { cardId: "top", triggerId: "about" },
        { cardId: "about", triggerId: "skills" },
        { cardId: "skills", triggerId: "showcase-video" },
        { cardId: "work", triggerId: "experience" },
        { cardId: "experience", triggerId: "contact" },
      ];

      scalingConfigs.forEach(({ cardId, triggerId }) => {
        const card = document.getElementById(cardId);
        const trigger = document.getElementById(triggerId);

        if (!card || !trigger) return;

        gsap.to(card, {
          scale: 0.88,
          borderRadius: "24px",
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top bottom", // Starts IMMEDIATELY when the next card enters viewport bottom
            end: "top top",       // Ends EXACTLY when the next card locks at the top of the viewport
            scrub: true,          // Direct 1:1 scrollbar sync, zero threshold delays
            invalidateOnRefresh: true,
          },
        });
      });
    });

    // Refresh ScrollTrigger after initial layout render and window resize
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleRefresh);
    window.addEventListener("load", handleRefresh);

    // Initial refresh after short timeout to account for dynamic image mounts
    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    // Anchor smooth scroll handling
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (!element) return;
      event.preventDefault();
      lenis.scrollTo(element, { offset: -96 });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("resize", handleRefresh);
      window.removeEventListener("load", handleRefresh);
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(updateGsapTicker);
      stackCtx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

