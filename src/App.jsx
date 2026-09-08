import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Cursor from "./Components/Cursor";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { ScrollToTop } from "./Components/ScrollToTop";
import Loader from "./Components/Loader";
import "./Styles/global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Safety fallback: ensure loading never hangs indefinitely
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader
            key="preloader"
            onLoadingComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden">
        {/* Skip to Main Content Link for WCAG 2.2 AA Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-sky-500 focus:text-white focus:font-bold focus:rounded-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Skip to main content
        </a>

        {/* Ambient Lighting / Background Mesh */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top Left Orb */}
          <div className="absolute -top-32 -left-32 w-72 md:w-[500px] h-72 md:h-[500px] rounded-full bg-gradient-to-br from-sky-400/10 to-indigo-500/10 dark:from-sky-500/10 dark:to-purple-600/10 blur-2xl md:blur-3xl" />
          {/* Top Right Orb */}
          <div className="absolute top-1/3 -right-32 w-64 md:w-[450px] h-64 md:h-[450px] rounded-full bg-gradient-to-bl from-purple-400/10 to-pink-500/10 dark:from-purple-600/10 dark:to-pink-600/10 blur-2xl md:blur-3xl" />
          {/* Bottom Left Orb */}
          <div className="absolute bottom-10 -left-20 w-64 md:w-[450px] h-64 md:h-[450px] rounded-full bg-gradient-to-tr from-indigo-400/10 to-sky-400/10 dark:from-indigo-600/10 dark:to-sky-500/10 blur-2xl md:blur-3xl" />
        </div>

        <Cursor />
        <Header />

        <main
          id="main-content"
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-12 sm:gap-16 md:gap-20 pb-12"
        >
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;

