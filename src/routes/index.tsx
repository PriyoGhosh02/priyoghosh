import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Scene3D } from "@/components/portfolio/Scene3D";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SocialDock } from "@/components/portfolio/SocialDock";
import { ChatWidget } from "@/components/portfolio/ChatWidget";
import { ContactDialog } from "@/components/portfolio/ContactDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyo Ghosh — Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Priyo Ghosh — aspiring full-stack web developer building responsive interfaces with React, Next.js, Tailwind, Node.js and MongoDB.",
      },
      {
        property: "og:title",
        content: "Priyo Ghosh — Full Stack Web Developer",
      },
      {
        property: "og:description",
        content:
          "Monochrome portfolio of Priyo Ghosh — full-stack web developer based in Dhaka, Bangladesh.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const nameTimer = window.setTimeout(() => setShowName(true), 1100);
    const finishTimer = window.setTimeout(() => setIsLoading(false), 2600);

    return () => {
      window.clearTimeout(nameTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-black text-white">
      {isLoading ? (
        <div className="loading-screen fixed inset-0 z-[100] bg-black text-white">
          <div className="grid-overlay absolute inset-0 opacity-20"></div>
          <div className="wave-pattern absolute inset-0 opacity-10"></div>
          <div className="flex min-h-screen items-center justify-center">
            <div className="loading-container mx-6 text-center">
              <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/60 font-light">LOADING...</p>
              <h1 className="inline-flex flex-col items-center gap-6 text-5xl font-bold tracking-tight sm:text-6xl">
                <span className="inline-flex items-center gap-6">
                  <span className="animate-hello-fade">HELLO</span>
                  <span className="inline-block animate-wave text-6xl">👋</span>
                </span>
                <span className={`text-2xl text-white/80 font-light transition-opacity duration-500 ${showName ? "opacity-100" : "opacity-0"}`}>Priyo Here</span>
              </h1>
              <div className="mt-12 w-64 mx-auto">
                <div className="progress-bar h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="progress-fill h-full bg-white rounded-full animate-progress"></div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-2 w-2 rounded-full bg-white/60 animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-white/60 animate-pulse animation-delay-200" />
                <span className="h-2 w-2 rounded-full bg-white/60 animate-pulse animation-delay-400" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <SmoothScroll />
          <CustomCursor />
          <Scene3D />

          <div className="relative z-10">
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </div>

          <SocialDock onContact={() => setContactOpen(true)} />
          <ChatWidget />
          <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
        </>
      )}
    </main>
  );
}
