import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const handleLinkClick = (e, sectionId) => {
  e.preventDefault();
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mt-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500"
        >
          Shubham Dixit<span className="text-slate-800 dark:text-slate-200">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, id)}
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <motion.a
            href="https://github.com/shubhamdixit2555"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400/50 transition-all shadow-sm"
          >
            <FaGithub className="text-lg" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shubham-dixit-dev/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400/50 transition-all shadow-sm"
          >
            <FaLinkedinIn className="text-base" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/shubham_dixittt"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-400/50 transition-all shadow-sm"
          >
            <FaInstagram className="text-base" />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-1">
          <p>&copy; {new Date().getFullYear()} Shubham Dixit. All rights reserved.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Crafted with React, TailwindCSS & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
