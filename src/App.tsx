import { useEffect, useState } from "react";
import { About } from "./components/portfolio/About";
import { ChatWidget } from "./components/portfolio/ChatWidget";
import { Contact } from "./components/portfolio/Contact";
import { ContactDialog } from "./components/portfolio/ContactDialog";
import { CustomCursor } from "./components/portfolio/CustomCursor";
import { Experience } from "./components/portfolio/Experience";
import { Footer } from "./components/portfolio/Footer";
import { Hero } from "./components/portfolio/Hero";
import { LoadingPage } from "./components/portfolio/loadingpage";
import { Nav } from "./components/portfolio/Nav";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";
import { SmoothScroll } from "./components/portfolio/SmoothScroll";
import { SocialDock } from "./components/portfolio/SocialDock";
import SEO from "./components/SEO";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const nameTimer = window.setTimeout(() => {
      setShowName(true);
    }, 900);

    return () => {
      window.clearTimeout(nameTimer);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-[#0A0B0D] text-white">
      {isLoading ? (
        <LoadingPage showName={showName} onComplete={handleLoadingComplete} />
      ) : (
        <>
          <SEO />
          <SmoothScroll />
          <CustomCursor />

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

export default App;
