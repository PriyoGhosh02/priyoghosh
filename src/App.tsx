import { useEffect, useState } from "react";
import { Scene3D } from "./components/portfolio/Scene3D";
import { CustomCursor } from "./components/portfolio/CustomCursor";
import { SmoothScroll } from "./components/portfolio/SmoothScroll";
import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Projects } from "./components/portfolio/Projects";
import { Experience } from "./components/portfolio/Experience";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { SocialDock } from "./components/portfolio/SocialDock";
import { ChatWidget } from "./components/portfolio/ChatWidget";
import { ContactDialog } from "./components/portfolio/ContactDialog";
import { LoadingPage } from "./components/portfolio/loadingpage";

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
    <main className="grain relative min-h-screen overflow-hidden bg-black text-white">
      {isLoading ? (
        <LoadingPage
          showName={showName}
          onComplete={handleLoadingComplete}
        />
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
          <ContactDialog
            open={contactOpen}
            onClose={() => setContactOpen(false)}
          />
        </>
      )}
    </main>
  );
}

export default App;