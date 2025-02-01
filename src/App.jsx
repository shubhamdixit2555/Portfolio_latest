import useNavbarScroll from './hooks/useNavbarScroll';
import Cursor from './components/Cursor';
import {motion, useScroll} from 'motion/react';

import { Header } from './components/Header';
import { Home } from './Components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/global.css';

function App() {
  const scrollYProgress = useScroll().scrollYProgress;
  useNavbarScroll(); // Activate the scroll logic
  return (
    <>
    <motion.div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1 w-full origin-left fixed top-0 left-0' style={{
      scaleX: scrollYProgress,
      zIndex: 100
    }}></motion.div>
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