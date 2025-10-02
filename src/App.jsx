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
    // Add a class to html for smooth scrolling
    document.documentElement.classList.add('smooth-scroll');
    return () => document.documentElement.classList.remove('smooth-scroll');
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100] backdrop-blur-sm"
            style={{ scaleX: scrollYProgress }}
          />
          <div className="App selection:bg-fuchsia-300 selection:text-fuchsia-900" style={{ scrollPaddingTop: '4rem' }}>
            {/* Light & Dark Mode BG */}
            <div className="fixed inset-0 z-[-2] dark:bg-slate-950 bg-white transition-colors duration-300">
              {/* Radial Gradient - Left */}
              <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] will-change-transform"></div>

              {/* Radial Gradient - Right */}
              <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] will-change-transform"></div>
            </div>

            <Cursor />
            <Header />

            <main className="container mx-auto px-4 pb-5 flex flex-col gap-8">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>

            <Footer />
            <ScrollToTop />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
