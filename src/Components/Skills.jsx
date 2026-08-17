import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTarget, FiUsers, FiTrendingUp, FiLayers, FiCheckSquare } from "react-icons/fi";

const skillsData = [
  // Frontend
  { name: "HTML5", category: "Frontend", icon: "/assets/icons/HTML.svg" },
  { name: "CSS3", category: "Frontend", icon: "/assets/icons/CSS.svg" },
  { name: "TailwindCSS", category: "Frontend", lightIcon: "/assets/icons/TailwindCSS-Light.svg", darkIcon: "/assets/icons/TailwindCSS-Dark.svg" },
  { name: "Bootstrap", category: "Frontend", icon: "/assets/icons/Bootstrap.svg" },
  { name: "JavaScript", category: "Frontend", icon: "/assets/icons/JavaScript.svg" },
  { name: "React", category: "Frontend", lightIcon: "/assets/icons/React-Light.svg", darkIcon: "/assets/icons/React-Dark.svg" },

  // Backend & Database
  { name: "NodeJS", category: "Backend", lightIcon: "/assets/icons/NodeJS-Light.svg", darkIcon: "/assets/icons/NodeJS-Dark.svg" },
  { name: "ExpressJS", category: "Backend", lightIcon: "/assets/icons/ExpressJS-Light.svg", darkIcon: "/assets/icons/ExpressJS-Dark.svg" },
  { name: "MongoDB", category: "Backend", icon: "/assets/icons/MongoDB.svg" },

  // Project Management & Agile
  { name: "Agile & Scrum", category: "Project Management", reactIcon: <FiTrendingUp className="w-9 h-9 text-sky-500" /> },
  { name: "Sprint Planning", category: "Project Management", reactIcon: <FiTarget className="w-9 h-9 text-indigo-500" /> },
  { name: "Team Alignment", category: "Project Management", reactIcon: <FiUsers className="w-9 h-9 text-purple-500" /> },
  { name: "Task Workflows", category: "Project Management", reactIcon: <FiCheckSquare className="w-9 h-9 text-emerald-500" /> },
  { name: "Product Roadmap", category: "Project Management", reactIcon: <FiLayers className="w-9 h-9 text-pink-500" /> },

  // Tools & Environment
  { name: "Git", category: "Tools", icon: "/assets/icons/Git.svg" },
  { name: "GitHub", category: "Tools", lightIcon: "/assets/icons/Github-Light.svg", darkIcon: "/assets/icons/Github-Dark.svg" },
  { name: "VS Code", category: "Tools", lightIcon: "/assets/icons/VSCode-Light.svg", darkIcon: "/assets/icons/VSCode-Dark.svg" },
];

const categories = ["All", "Frontend", "Backend", "Project Management", "Tools"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="scroll-mt-20 sm:scroll-mt-24 flex flex-col w-full items-center gap-8 sm:gap-10">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-2"
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-500 uppercase">
          Technical & Leadership Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Skills &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            Competencies
          </span>
        </h2>
      </motion.div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm max-w-2xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeCategory === cat
                ? "text-white bg-gradient-to-r from-sky-500 to-purple-600 shadow-md shadow-sky-500/20"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid - 3 per row on mobile */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory}
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4 md:gap-5 w-full max-w-5xl"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              whileHover={{
                y: -5,
                scale: 1.04,
                transition: { type: "spring", stiffness: 350, damping: 15 },
              }}
              className="group relative flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-sky-400/40 dark:hover:border-sky-400/40 transition-all aspect-square"
            >
              {/* Glow background on hover */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-sky-400/0 to-purple-500/0 group-hover:from-sky-400/10 group-hover:to-purple-500/10 transition-colors pointer-events-none" />

              <div className="relative z-10 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                {skill.reactIcon ? (
                  skill.reactIcon
                ) : skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="max-h-8 max-w-8 sm:max-h-11 sm:max-w-11 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <img
                      src={skill.lightIcon}
                      alt={`${skill.name} icon`}
                      className="max-h-8 max-w-8 sm:max-h-11 sm:max-w-11 object-contain dark:hidden"
                      loading="lazy"
                    />
                    <img
                      src={skill.darkIcon}
                      alt={`${skill.name} icon`}
                      className="max-h-8 max-w-8 sm:max-h-11 sm:max-w-11 object-contain hidden dark:block"
                      loading="lazy"
                    />
                  </>
                )}
              </div>

              <p className="relative z-10 text-[11px] sm:text-xs md:text-sm font-bold text-center text-slate-800 dark:text-slate-200 tracking-tight leading-tight">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};



