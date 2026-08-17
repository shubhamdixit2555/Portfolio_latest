import { motion, useScroll, AnimatePresence } from "framer-motion";
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
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 origin-left z-[100] shadow-sm shadow-purple-500/20"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Ambient Lighting / Background Mesh */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top Left Orb */}
          <div className="absolute -top-32 -left-32 w-96 md:w-[600px] h-96 md:h-[600px] rounded-full bg-gradient-to-br from-sky-400/10 to-indigo-500/10 dark:from-sky-500/10 dark:to-purple-600/10 blur-3xl will-change-transform" />
          {/* Top Right Orb */}
          <div className="absolute top-1/3 -right-32 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full bg-gradient-to-bl from-purple-400/10 to-pink-500/10 dark:from-purple-600/10 dark:to-pink-600/10 blur-3xl will-change-transform" />
          {/* Bottom Left Orb */}
          <div className="absolute bottom-10 -left-20 w-72 md:w-[500px] h-72 md:h-[500px] rounded-full bg-gradient-to-tr from-indigo-400/10 to-sky-400/10 dark:from-indigo-600/10 dark:to-sky-500/10 blur-3xl will-change-transform" />
        </div>

        <Cursor />
        <Header />

        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-12 sm:gap-16 md:gap-20 pb-12">
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

