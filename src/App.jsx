import useNavbarScroll from './hooks/useNavbarScroll';
import Cursor from './Components/Cursor';
import {motion, useScroll} from 'motion/react';
import { useState, useEffect } from "react";

import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import './Styles/global.css';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const scrollYProgress = useScroll().scrollYProgress;
  useNavbarScroll(); // Activate the scroll logic
  return (
    <>
    <motion.div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1 w-full origin-left fixed top-0 left-0' style={{
      scaleX: scrollYProgress,
      zIndex: 100
    }}></motion.div>
    { loading && (<div id="preLoaderContainer" className='bg-gray-100 dark:bg-gray-900'>
      <div id="preLoader"></div>
    </div>)}
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
  );
}

export default App;
