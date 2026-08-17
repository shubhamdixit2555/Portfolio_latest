/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  // FaWhatsapp,
  // FaDiscord,
  // FaFacebookF,
  // FaXTwitter,
} from "react-icons/fa6";
import { FiDownload, FiArrowRight, FiZap, FiTarget, FiLayers } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.2,
    },
  },
};

export const Home = () => {
  return (
    <section
      id="home"
      className="scroll-mt-16 pt-16 sm:pt-20 md:pt-22 min-h-[calc(100vh-4.5rem)] flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-10"
    >
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 sm:gap-6"
      >
        {/* Badges: Available + Project Management Aspirant */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/25 dark:border-purple-500/25 text-sky-600 dark:text-sky-300 text-xs font-bold tracking-wide shadow-sm">
            <FiTarget className="text-sky-500" />
            <span>Project Management Aspirant</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500">
            Shubham Dixit
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 min-h-[3.2rem] flex items-center"
        >
          <TypeAnimation
            sequence={[
              "Frontend & MERN Developer 💻",
              1800,
              "Project Management Aspirant 🎯",
              1800,
              "Full-Stack Web Builder ⚡",
              1800,
              "Agile Sprint Leader 📊",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-sky-600 dark:text-sky-400"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
        >
          Building fast, responsive web applications with modern tech. Focused on writing clean code, leading agile sprints, and delivering high-quality products.
        </motion.p>

        {/* Quick Highlights */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            <FiZap className="text-amber-500" /> Fast Execution
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            <FiLayers className="text-sky-500" /> Full-Stack MERN
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
            <FiTarget className="text-emerald-500" /> Agile Sprints
          </span>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 my-1">
          {/* GitHub */}
          <a
            href="https://github.com/shubhamdixit2555"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400/50 hover:shadow-md hover:scale-105 transition-all"
          >
            <FaGithub className="text-xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shubham-dixit-dev/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400/50 hover:shadow-md hover:scale-105 transition-all"
          >
            <FaLinkedinIn className="text-lg" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mr_shubham_dixit"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-400/50 hover:shadow-md hover:scale-105 transition-all"
          >
            <FaInstagram className="text-lg" />
          </a>

          {/* ============================================================ */}
          {/* FUTURE SOCIAL LINKS (Ready to uncomment whenever you wish): */}
          {/* ============================================================ */}

          {/* WhatsApp (Uncomment below once username/link is configured) */}
          {/*
          <a
            href="https://wa.me/9458549339"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-400/50 hover:shadow-md hover:scale-105 transition-all"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          */}

          {/* Discord (Uncomment below to enable Discord link) */}
          {/*
          <a
            href="https://discord.com/invite/H6Q2SzUp"
            title="Discord"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-400/50 hover:shadow-md hover:scale-105 transition-all"
          >
            <FaDiscord className="text-lg" />
          </a>
          */}

          {/* Facebook (Uncomment below to enable Facebook link) */}
          {/*
          <a
            href="https://www.facebook.com/shubhamdixit2550"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/50 hover:shadow-md hover:scale-105 transition-all"
          >
            <FaFacebookF className="text-lg" />
          </a>
          */}

          {/* X / Twitter (Uncomment below to enable X/Twitter link) */}
          {/*
          <a
            href="https://x.com/your_handle"
            title="X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400/50 hover:shadow-md hover:scale-105 transition-all"
          >
            <FaXTwitter className="text-lg" />
          </a>
          */}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto"
        >
          <a
            href="/assets/docs/ShubhamDixitResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-600 hover:via-indigo-600 hover:to-purple-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <FiDownload className="text-lg" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/50"
          >
            <span>Let's Connect</span>
            <FiArrowRight className="text-lg" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Content / Hero Graphic */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-2/5 flex items-center justify-center relative select-none"
      >
        {/* Glow backdrop behind avatar */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-indigo-500/20 to-purple-600/25 rounded-full blur-3xl scale-90" />

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="relative z-10 p-3"
        >
          <motion.img
            drag
            dragConstraints={{ left: -15, right: 15, top: -15, bottom: 15 }}
            dragElastic={0.15}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
            src="/assets/images/cartoon_img.png"
            alt="Shubham Dixit - Avatar"
            className="h-64 sm:h-80 md:h-96 lg:h-[420px] w-auto drop-shadow-2xl cursor-grab will-change-transform"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};


