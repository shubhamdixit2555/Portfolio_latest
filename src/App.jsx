import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import useNavbarScroll from "./hooks/useNavbarScroll";
import Cursor from "./Components/Cursor";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import Loader from "./Components/Loader";
import "./Styles/global.css";

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setProgress(v);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useNavbarScroll();

  return (
    <>
      {/* Show Loader First */}
      {loading && <Loader />}

      {/* Show Website Only AFTER Loader Finishes */}
      {!loading && (
        <>
          <motion.div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1 w-full origin-left fixed top-0 left-0 z-[100]"
            style={{ scaleX: progress }}
          />
          <div className="App bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            <Cursor />
            <Header />
            <div className="container mx-auto px-4 pb-5 flex flex-col gap-8">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
