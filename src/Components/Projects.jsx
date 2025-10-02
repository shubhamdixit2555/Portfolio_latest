 
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const projectData = [
  {
    title: "Family Golf Clone",
    image: "/assets/images/project-golf.png",
    description:
      "A UI clone of the 'Family Golf' website, designed to recreate its user-friendly interface with attention to detail in layout and responsiveness.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    projectLink: "https://shubham-project-golf.netlify.app/",
    codeLink: "https://github.com/shubhamdixit2555/project-golf",
    isUnavailable: false,
  },
  {
    title: "Visual Fetch",
    image: "/assets/images/visual-fetch.png",
    description:
      "A dynamic image search website leveraging the Unsplash API, allowing users to explore high-quality images based on their queries.",
    tags: ["React", "Unsplash API", "TailwindCSS"],
    projectLink: "https://visualfetch.netlify.app/",
    codeLink: "https://github.com/shubhamdixit2555/visual-fetch",
    isUnavailable: false,
  },
  {
    title: "The Vanity Unit",
    image: "/assets/images/vanity-unit.png",
    description:
      "A professional website developed for a makeup artist team based in Udaipur. Focused on modern design, responsiveness, and SEO optimization to enhance online presence.",
    tags: ["React", "TailwindCSS", "SEO", "Responsive Design"],
    projectLink: "https://thevanityunit.com/",
    codeLink: "", // private repo, so left empty
    isUnavailable: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      stiffness: 100,
      damping: 12,
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
    className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden flex flex-col group"
  >
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 font-normal text-gray-600 dark:text-gray-300 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-sky-200/50 dark:bg-sky-800/50 text-sky-800 dark:text-sky-200 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-row gap-4 mt-auto flex-wrap">
        {/* Project Link */}
        {isUnavailable ? (
          <button
            disabled
            className="cursor-not-allowed inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg"
            title="This project is currently unavailable"
          >
            🚫 Project Unavailable
          </button>
        ) : projectLink ? (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
          >
            🌐 View Project
          </a>
        ) : (
          <span className="text-sm text-gray-400">
            ⚠️ Live project link not available
          </span>
        )}

        {/* Code Link */}
        {codeLink ? (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-center text-gray-900 dark:text-white bg-white/50 dark:bg-gray-700/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-700/80 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-600 transition-colors"
          >
            💻 View Code
          </a>
        ) : (
          <span className="text-sm text-gray-400">
            🔒 Code not available (private)
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
    <section
      id="projects"
      className="my-12 md:my-20 p-2 flex flex-col w-full items-center gap-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 flex items-center gap-3"
      >
        <img src="/assets/icons/work.svg" alt="work" className="h-10" /> Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full"
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};
