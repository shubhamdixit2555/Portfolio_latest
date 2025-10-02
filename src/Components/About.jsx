/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../Styles/About.css";

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
      damping: 15,
    },
  },
};

const aboutData = [
  {
    icon: "👋",
    title: "Hello there!",
    span: "md:col-span-2 lg:col-span-2",
    content: (
      <>
        <p>
          I'm Shubham, a frontend developer who loves building things for the web. My focus is on creating smooth, user-friendly experiences that don't just work well, but also feel great to use. I believe the best websites are a blend of art and science, and I enjoy finding that perfect balance.
        </p>
      </>
    ),
  },
  {
    icon: "🎓",
    title: "Education",
    content: <p>I'm currently pursuing my <b>Bachelor's in Computer Science</b>, diving deep into the fundamentals of software and creative problem-solving.</p>,
  },
  {
    icon: "⚙️",
    title: "What I'm Learning",
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Right now, I'm really into the <b>MERN stack</b> for building full-stack applications.</li>
        <li>I'm also constantly honing my <b>UI/UX design</b> skills to ensure my work is as intuitive as it is functional.</li>
      </ul>
    ),
  },
  {
    icon: "🎯",
    title: "My Goals",
    content: <p>My goal is to build cool, modern websites and contribute to projects that push the boundaries of what's possible on the web. I'm always looking for the next exciting challenge.</p>,
  },
  {
    icon: "💡",
    title: "Philosophy",
    content: <p>I believe that continuous learning and experimenting with creative ideas is the key to growth as a developer.</p>,
  },
];

const Card = ({ title, icon, children, span = "" }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
    className={`bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 shadow-xl flex flex-col ${span}`}
  >
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
      <span className="text-2xl">{icon}</span> {title}
    </h3>
    <div className="md:text-xl text-lg text-gray-700 dark:text-gray-300 space-y-3">{children}</div>
  </motion.div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  span: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const About = () => {
  return (
    <section id="about" className="relative my-12 md:my-20 p-2 flex flex-col w-full items-center gap-8 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 flex items-center gap-3"
      >
        <img src="/assets/icons/user.svg" alt="user" className="h-10" /> About Me
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 w-full max-w-7xl"
              >
        {aboutData.map((item) => (
          <Card key={item.title} title={item.title} icon={item.icon} span={item.span}>
            {item.content}
          </Card>
        ))}
      </motion.div>
    </section>
  );
};
