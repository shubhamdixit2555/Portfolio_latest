/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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
      stiffness: 100,
      damping: 12,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.4,
    },
  },
};

export const Home = () => {
  return (
    <section
      id="home"
      className="md:pl-10 my-6 md:my-12 p-2 flex flex-col-reverse md:flex-row md:justify-center w-full items-center min-h-[90vh] md:min-h-screen gap-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 p-2 md:pl-8"
      >
        <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold">
          Hello, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400"><b>Shubham</b></span>
        </motion.h1>
        <motion.div variants={itemVariants} className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 h-14 md:h-8">
          <TypeAnimation
            sequence={[
              "A Frontend Developer", 2000,
              "A MERN Stack Learner", 2000,
              "A Technical Assistant", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-xl">
          I'm passionate about creating user-friendly and engaging websites that look great and work smoothly. Currently, I'm exploring the MERN stack and working on my Bachelor's degree in Computer Science.
        </motion.p>
        <motion.ul variants={itemVariants} className="flex gap-4 md:gap-6">
          <li><a href="https://github.com/shubhamdixit2555" title="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors"><i className="fa-brands fa-github text-3xl"></i></a></li>
          <li><a href="https://www.instagram.com/mr_shubham_dixit" title="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors"><i className="fa-brands fa-instagram text-3xl"></i></a></li>
          <li><a href="https://www.linkedin.com/in/shubham-dixit-dev/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors"><i className="fa-brands fa-linkedin text-3xl"></i></a></li>
          <li><a href="https://www.facebook.com/shubhamdixit2550" title="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors"><i className="fa-brands fa-facebook text-3xl"></i></a></li>
          <li><a href="https://discord.com/invite/H6Q2SzUp" title="Discord" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors"><i className="fa-brands fa-discord text-3xl"></i></a></li>
          <li><a href="https://wa.me/9458549339" title="Whatsapp" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors"><i className="fa-brands fa-whatsapp text-3xl"></i></a></li>
        </motion.ul>
        <motion.div variants={itemVariants} className="relative mt-3 group">
          {/* Glow Background (blur only here) */}
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-sky-400 to-purple-600 opacity-70 blur-sm transition duration-500 group-hover:opacity-100"></div>

          {/* Actual Button */}
          <a
            href="/assets/docs/ShubhamDixitResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block rounded-lg bg-white dark:bg-gray-900 px-6 py-3 
                      text-base font-medium text-gray-900 dark:text-white 
                      transition-all duration-300 ease-in-out
                      group-hover:scale-105 group-hover:font-bold group-hover:text-sky-500"
          >
            Get My Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex items-center justify-center p-4"
      >
        <motion.img
          drag
          dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.05, cursor: "grabbing" }}
          src="/assets/images/cartoon_img.png"
          alt="Shubham Dixit"
          className="h-64 md:h-96 w-auto cursor-grab"
        />
      </motion.div>
    </section>
  );
};
