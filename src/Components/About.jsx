/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiUser, FiBookOpen, FiCode, FiCompass, FiBriefcase, FiGlobe } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

const aboutCards = [
  {
    icon: <FiUser className="w-6 h-6 text-sky-500" />,
    title: "Who I Am",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    badge: "Builder",
    content: (
      <div className="space-y-2.5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
        <p>
          I'm <span className="font-bold text-slate-900 dark:text-white">Shubham Dixit</span> — a full-stack engineer and <span className="text-sky-500 dark:text-sky-400 font-semibold">Project Management Aspirant</span>.
        </p>
        <p>
          I build modern, responsive web applications and bridge the gap between clean engineering and agile product delivery.
        </p>
      </div>
    ),
  },
  {
    icon: <FiBriefcase className="w-6 h-6 text-indigo-500" />,
    title: "Project Management",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    badge: "Agile & Product",
    content: (
      <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        <p className="font-semibold text-slate-800 dark:text-slate-200">
          Sprint & Agile Delivery
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          Hands-on with sprint roadmaps, backlog planning, and cross-functional team execution.
        </p>
      </div>
    ),
  },
  {
    icon: <FiBookOpen className="w-6 h-6 text-emerald-500" />,
    title: "Education",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    badge: "Degrees",
    content: (
      <div className="space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        <div className="flex items-center justify-between">
          <p className="font-bold text-slate-900 dark:text-white">Bachelors in CS</p>
          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">8.6 CGPA</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Pursuing <strong className="text-slate-700 dark:text-slate-200">Masters in CS</strong> to advance systems and algorithmic knowledge.
        </p>
      </div>
    ),
  },
  {
    icon: <FiCode className="w-6 h-6 text-purple-500" />,
    title: "Tech Stack",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    badge: "MERN Stack",
    content: (
      <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        <p className="font-semibold text-sky-500 dark:text-sky-400">
          React, Tailwind, Node & Mongo
        </p>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Building fast, scalable web apps with clean UI architecture and REST APIs.
        </p>
      </div>
    ),
  },
  {
    icon: <FiGlobe className="w-6 h-6 text-sky-500" />,
    title: "Languages",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    badge: "Communication",
    content: (
      <div className="space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-800 dark:text-slate-200">English</span>
          <span className="text-xs font-medium text-sky-500 dark:text-sky-400">Fluent</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-800 dark:text-slate-200">Hindi</span>
          <span className="text-xs font-medium text-emerald-500 dark:text-emerald-400">Native</span>
        </div>
      </div>
    ),
  },
  {
    icon: <FiCompass className="w-6 h-6 text-amber-500" />,
    title: "Philosophy",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    badge: "Mindset",
    content: (
      <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        <p className="font-semibold text-slate-900 dark:text-white">
          Learn by building.
        </p>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Fast iterations, high empathy for users, and clean maintainable code.
        </p>
      </div>
    ),
  },
];

const Card = ({ title, icon, badge, children, span = "" }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    className={`group relative p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all flex flex-col justify-between ${span}`}
  >
    <div>
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 group-hover:scale-105 transition-transform">
            {icon}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {title}
          </h3>
        </div>
        {badge && (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
            {badge}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  </motion.div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  badge: PropTypes.string,
  span: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const About = () => {
  return (
    <section id="about" className="scroll-mt-20 sm:scroll-mt-24 flex flex-col w-full items-center gap-8 sm:gap-10">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-2"
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-500 uppercase">
          Background & Story
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            Me
          </span>
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full"
      >
        {aboutCards.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            icon={item.icon}
            badge={item.badge}
            span={item.span}
          >
            {item.content}
          </Card>
        ))}
      </motion.div>
    </section>
  );
};
