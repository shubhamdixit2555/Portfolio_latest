import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;