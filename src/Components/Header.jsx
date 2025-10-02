import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.getAttribute("id");
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);

        // ✅ Update URL hash when scrolling
        if (window.location.hash !== `#${currentSection}`) {
          history.pushState(null, "", `#${currentSection}`);
        }
      } else {
        setActiveSection("home");
        history.pushState(null, "", "#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });

      // ✅ Update URL hash on click also
      history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <motion.nav
      ref={navRef}
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-xl" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg"></div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative z-10">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="whitespace-nowrap self-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-sky-400 from-purple-400">
            <b>Portfolio</b>
          </span>
        </a>

        {/* Spacer to push nav to the right on desktop */}
        <div className="hidden md:flex md:flex-grow"></div>

        <div className="flex items-center md:order-2">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <motion.div
              className="flex flex-col items-center justify-center"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                className="block h-0.5 w-6 bg-current"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 },
                }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-current mt-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-current mt-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 },
                }}
              />
            </motion.div>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-8 rtl:space-x-reverse">
            {navLinks.map((section) => (
              <li key={section} className="relative">
                <a
                  href={`#${section}`}
                  onClick={(e) => handleLinkClick(e, section)}
                  className="block py-2 transition-colors duration-300 text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
                {activeSection === section && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-sky-400"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="absolute top-full left-0 w-full md:hidden z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="font-medium flex flex-col p-4 border-t border-gray-200 dark:border-gray-700">
                {navLinks.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={(e) => handleLinkClick(e, section)}
                      className={`block py-2 px-3 rounded transition-colors duration-300 text-center ${
                        activeSection === section
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-900 dark:text-gray-300"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
