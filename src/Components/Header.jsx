import { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(currentScrollY > 15);

      // Track active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = currentScrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setIsOpen(false);

    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 40);
  };

  return (
    <>
      {/* Mobile Drawer Backdrop (Click outside to close) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs md:hidden z-[990]"
          aria-hidden="true"
        />
      )}

      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/70 shadow-md shadow-black/5"
            : "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Animated Brand Logo with perfectly aligned baseline dot */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            className="group flex items-center gap-2 focus:outline-none select-none cursor-pointer"
          >
            {/* Glowing Animated Icon Badge */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
              transition={{ duration: 0.3 }}
              className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm sm:text-base shadow-sm shadow-sky-500/25 group-hover:shadow-sky-500/40 transition-shadow overflow-hidden"
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
              />
              <span className="relative z-10 text-white font-black">S</span>
            </motion.div>

            {/* Name with perfectly aligned baseline period */}
            <div className="flex items-baseline text-lg sm:text-xl font-black tracking-tight leading-none">
              {"Shubham".split("").map((char, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    y: -1.5,
                    color: "#38bdf8",
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="inline-block text-slate-900 dark:text-white transition-colors duration-150"
                >
                  {char}
                </motion.span>
              ))}
              <span className="text-sky-500 font-black text-xl sm:text-2xl ml-0.5 leading-none inline-block align-baseline animate-pulse">
                .
              </span>
            </div>
          </a>

          {/* Desktop Nav - text turns blue on hover */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-100/80 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md">
            {navLinks.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  type="button"
                  key={id}
                  onClick={() => handleLinkClick(id)}
                  className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/50 cursor-pointer"
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-amber-400 animate-spin-slow" />
              ) : (
                <FiMoon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/50 cursor-pointer select-none"
            >
              {isOpen ? <FiX className="w-6 h-6 text-sky-500" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu - ABSOLUTE FLOATING OVERLAY (Does NOT push page content down!) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 md:hidden border-b border-slate-200/80 dark:border-slate-800/80 bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {navLinks.map(({ id, label }) => {
                  const isActive = activeSection === id;
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => handleLinkClick(id)}
                      className={`w-full text-left px-5 py-3.5 rounded-2xl text-base font-bold transition-all cursor-pointer block active:scale-[0.98] ${
                        isActive
                          ? "bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400"
                          : "text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100/80 dark:hover:bg-slate-900/80"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

