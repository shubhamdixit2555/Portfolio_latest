import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/gif/Animation1.json";

export const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    // Lock scroll during preloading
    document.body.style.overflow = "hidden";

    // Lightweight stepped progress: smooth, predictable, zero lag on mobile
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (!completedRef.current) {
            completedRef.current = true;
            setTimeout(() => {
              if (onLoadingComplete) onLoadingComplete();
            }, 250);
          }
          return 100;
        }
        // Smooth progression increments (total ~1.2s duration)
        const increment = prev < 50 ? 6 : prev < 85 ? 4 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.35, ease: "easeInOut" },
      }}
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-slate-950 text-slate-100 select-none px-6"
    >
      {/* Simple, lightweight ambient glow (no heavy infinite CPU/GPU loops) */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-xs w-full text-center space-y-6">
        {/* Clean Lottie Developer Animation */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full"
          />
        </div>

        {/* Minimal Progress Info */}
        <div className="w-full space-y-2.5">
          {/* Status & Counter in one clean row */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-0.5">
            <span className="font-medium text-slate-300">
              {progress < 100 ? "Loading experience..." : "Welcome"}
            </span>
            <span className="font-bold text-sky-400">{progress}%</span>
          </div>

          {/* Smooth, lightweight progress bar with GPU CSS transition */}
          <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-0">
            <div
              className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;