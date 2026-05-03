import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-black text-white">
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
    </main>
  );
}
