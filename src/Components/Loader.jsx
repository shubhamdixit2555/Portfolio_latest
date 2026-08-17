import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/gif/Animation1.json";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-[99999] flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pointer-events-none"
    >
      <Lottie animationData={animationData} loop={true} className="w-44 sm:w-56 h-44 sm:h-56" />
    </motion.div>
  );
};

export default Loader;
