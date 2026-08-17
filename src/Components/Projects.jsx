import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiExternalLink, FiLock } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

const projectData = [
  {
    title: "Visual Fetch",
    image: "/assets/images/visual-fetch.png",
    description:
      "Fast image search and discovery application powered by the Unsplash API with instant high-res downloads.",
    tags: ["React", "Unsplash API", "TailwindCSS"],
    projectLink: "https://visualfetch.netlify.app/",
    codeLink: "https://github.com/shubhamdixit2555/visual-fetch",
    isUnavailable: false,
  },
  {
    title: "The Vanity Unit",
    image: "/assets/images/vanity-unit.png",
    description:
      "Production client website built for an Udaipur makeup artistry brand, optimized for mobile performance and SEO.",
    tags: ["React", "TailwindCSS", "SEO", "Responsive UI"],
    projectLink: "https://thevanityunit.com/",
    codeLink: "", // private client repo
    isUnavailable: false,
  },
  {
    title: "Family Golf Clone",
    image: "/assets/images/project-golf.png",
    description:
      "Interactive web clone featuring custom GSAP scroll animations, responsive layouts, and modern UI interactions.",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    projectLink: "https://shubham-project-golf.netlify.app/",
    codeLink: "https://github.com/shubhamdixit2555/project-golf",
    isUnavailable: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
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

const ProjectCard = ({
  title,
  image,
  description,
  tags,
  projectLink,
  codeLink,
  isUnavailable,
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    className="group relative flex flex-col rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-2xl hover:border-sky-400/40 dark:hover:border-sky-400/40 transition-all overflow-hidden"
  >
    {/* Image Preview */}
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>

    {/* Details */}
    <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between gap-4">
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-sky-500/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-300 border border-sky-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 mt-auto">
        {isUnavailable ? (
          <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl text-slate-400 bg-slate-100 dark:bg-slate-800/50">
            Unavailable
          </span>
        ) : projectLink ? (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
          >
            <span>Live Demo</span>
            <FiExternalLink className="text-sm" />
          </a>
        ) : null}

        {codeLink ? (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none cursor-pointer"
          >
            <FaGithub className="text-sm" />
            <span>Code</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 dark:text-slate-500">
            <FiLock className="text-xs" /> Private Repo
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  codeLink: PropTypes.string,
  isUnavailable: PropTypes.bool,
};

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 sm:scroll-mt-24 flex flex-col w-full items-center gap-8 sm:gap-10">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-2"
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-500 uppercase">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Recent{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            Projects
          </span>
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

