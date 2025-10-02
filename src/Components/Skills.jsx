import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", icon: "/assets/icons/HTML.svg" },
  { name: "CSS", icon: "/assets/icons/CSS.svg" },
  { name: "Bootstrap", icon: "/assets/icons/Bootstrap.svg" },
  { name: "TailwindCSS", lightIcon: "/assets/icons/TailwindCSS-Light.svg", darkIcon: "/assets/icons/TailwindCSS-Dark.svg" },
  { name: "JavaScript", icon: "/assets/icons/JavaScript.svg" },
  { name: "React", lightIcon: "/assets/icons/React-Light.svg", darkIcon: "/assets/icons/React-Dark.svg" },
  { name: "NodeJS", lightIcon: "/assets/icons/NodeJS-Light.svg", darkIcon: "/assets/icons/NodeJS-Dark.svg" },
  { name: "MongoDB", icon: "/assets/icons/MongoDB.svg" },
  { name: "ExpressJS", lightIcon: "/assets/icons/ExpressJS-Light.svg", darkIcon: "/assets/icons/ExpressJS-Dark.svg" },
  { name: "Git", icon: "/assets/icons/Git.svg" },
  { name: "Github", lightIcon: "/assets/icons/Github-Light.svg", darkIcon: "/assets/icons/Github-Dark.svg" },
  { name: "VSCode", lightIcon: "/assets/icons/VSCode-Light.svg", darkIcon: "/assets/icons/VSCode-Dark.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export const Skills = () => {
  return (
    <section id="skills" className="my-12 md:my-20 p-2 flex flex-col w-full items-center gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 flex items-center gap-3"
      >
        <img src="/assets/icons/skill.svg" alt="Skills Icon" className="h-10" />
        Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 w-full max-w-5xl"
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-xl shadow-lg aspect-square"
          >
            {skill.icon ? (
              <img src={skill.icon} title={skill.name} alt={`${skill.name} icon`} className="h-10 md:h-12" />
            ) : (
              <>
                <img src={skill.lightIcon} title={skill.name} alt={`${skill.name} icon`} className="h-10 md:h-12 dark:hidden" />
                <img src={skill.darkIcon} title={skill.name} alt={`${skill.name} icon`} className="h-10 md:h-12 hidden dark:block" />
              </>
            )}
            <p className="text-sm md:text-base font-medium text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
