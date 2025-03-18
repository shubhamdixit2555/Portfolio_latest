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
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[3px] w-full origin-left fixed top-0 left-0 z-[100]"
            style={{ scaleX: progress }}
          />
          <div className="App selection:bg-fuchsia-300 selection:text-fuchsia-900">
  
  {/* Light & Dark Mode BG */}
  <div className="fixed z-[-2] h-full w-full dark:bg-slate-950 bg-white transition-colors duration-300">
    
    {/* Radial Gradient - Left */}
    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    
    {/* Radial Gradient - Right */}
    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

  </div>

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
