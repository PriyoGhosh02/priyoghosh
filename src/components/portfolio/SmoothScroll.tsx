import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      lerp: 0.08,
      wheelMultiplier: 0.85,
      touchMultiplier: 0.4,
      normalizeWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (!element) return;
      event.preventDefault();
      lenis.scrollTo(element, { offset: -96 });
    };

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href^='#']"));
    anchors.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
