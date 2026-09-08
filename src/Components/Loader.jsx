import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/gif/Animation1.json";
import { FiZap, FiCheckCircle, FiTerminal, FiCpu } from "react-icons/fi";

// Play subtle futuristic harmonic chime using Web Audio API (zero external assets needed)
const playSoftChime = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Major 9th / uplifting chime)
    const now = ctx.currentTime;

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.0001, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.04, now + i * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.5);
    });
  } catch {
    // Audio contexts might be blocked until user gesture, safely ignore
  }
};

const statusSteps = [
  { threshold: 0, text: "INITIALIZING ENVIRONMENT...", icon: FiCpu },
  { threshold: 25, text: "FETCHING REACT & MERN MODULES...", icon: FiTerminal },
  { threshold: 55, text: "COMPILING SHADERS & VISUAL ASSETS...", icon: FiZap },
  { threshold: 85, text: "OPTIMIZING INTERACTIVE CORE...", icon: FiCpu },
  { threshold: 100, text: "SYSTEM READY // WELCOME", icon: FiCheckCircle },
];

export const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const startTimeRef = useRef(Date.now());
  const completedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setProgress(100);
    setIsDone(true);
    playSoftChime();

    // Small breathing pause at 100% to let the user appreciate the completed state
    setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 450);
  }, [onLoadingComplete]);

  // Realistic calibrated progress interpolation curve
  useEffect(() => {
    // Lock scroll during preloading
    document.body.style.overflow = "hidden";

    const totalDuration = 1800; // 1.8s ideal duration
    let animationFrameId;

    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const linearRatio = Math.min(elapsed / totalDuration, 1);

      // Custom smooth easing curve (accelerates, decelerates smoothly, then snaps to finish)
      let easedRatio;
      if (linearRatio < 0.4) {
        // Fast start 0 -> 40%
        easedRatio = Math.pow(linearRatio / 0.4, 0.8) * 0.45;
      } else if (linearRatio < 0.8) {
        // Steady middle 45% -> 85%
        const sub = (linearRatio - 0.4) / 0.4;
        easedRatio = 0.45 + sub * 0.4;
      } else {
        // Final rapid stretch to 100%
        const sub = (linearRatio - 0.8) / 0.2;
        easedRatio = 0.85 + Math.pow(sub, 1.2) * 0.15;
      }

      const currentVal = Math.min(Math.floor(easedRatio * 100), 100);
      setProgress(currentVal);

      if (linearRatio < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        handleFinish();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Keyboard shortcut to skip immediately (Space, Enter, Esc)
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleFinish]);

  // Current status message based on progress threshold
  const currentStep =
    [...statusSteps].reverse().find((s) => progress >= s.threshold) || statusSteps[0];
  const StepIcon = currentStep.icon;

  return (
    <motion.div
      key="preloader-wrapper"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        filter: "blur(8px)",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[100000] flex flex-col justify-between items-center bg-[#07090e] text-slate-100 select-none overflow-hidden"
    >
      {/* Dynamic Cybernetic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle glowing mesh orbs */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-gradient-to-br from-sky-500/20 via-indigo-500/15 to-purple-600/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.18, 0.3, 0.18],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-gradient-to-tl from-purple-500/20 via-pink-500/15 to-sky-500/10 blur-[100px]"
        />

        {/* Cyber Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Scanline subtle sweep */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-sky-400/[0.03] to-transparent pointer-events-none"
        />
      </div>

      {/* TOP HUD BAR */}
      <header className="relative z-10 w-full max-w-7xl px-5 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between text-xs tracking-wider uppercase">
        {/* Left: Branding & Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono font-semibold text-slate-300 text-[11px] sm:text-xs">
              PORTFOLIO
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-sky-400 font-mono text-[10px] sm:text-[11px] hidden xs:inline">
              ONLINE
            </span>
          </div>
        </div>

        {/* Right: Latency info & Interactive Skip Chip */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
            <span className="text-slate-400">STATUS:</span>
            <span className="text-emerald-400 font-bold">OPTIMAL</span>
          </div>

          <button
            type="button"
            onClick={handleFinish}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 text-slate-400 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
            title="Skip loading screen (or press ESC / SPACE)"
          >
            <span className="text-[11px] font-mono tracking-wider">SKIP</span>
            <span className="text-sky-400 font-bold transition-transform group-hover:translate-x-0.5">
              ➔
            </span>
          </button>
        </div>
      </header>

      {/* CENTER STAGE */}
      <main className="relative z-10 flex flex-col items-center justify-center max-w-md w-full px-6 my-auto">
        {/* Animated Holographic Pedestal / Lottie Container */}
        <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
          {/* Outer Pulsing Rotating Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-sky-500/20 dark:border-purple-500/20 pointer-events-none"
          />

          {/* Inner Accent Glow Disc */}
          <div className="absolute w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl animate-pulse" />

          {/* Glass Podium Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-3xl p-2 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 shadow-2xl shadow-sky-500/10 backdrop-blur-xl flex items-center justify-center overflow-hidden group"
          >
            {/* Top Gloss Highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

            {/* Interactive Lottie Animation */}
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full drop-shadow-[0_8px_20px_rgba(56,189,248,0.2)]"
            />

            {/* Glowing Corner Accents */}
            <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-sky-400/70" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-400/70" />
            <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-indigo-400/70" />
            <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
          </motion.div>
        </div>

        {/* Percentage Counter & Dynamic Header */}
        <div className="w-full text-center space-y-3">
          {/* Monospace Metric Counter */}
          <div className="flex items-baseline justify-center gap-1.5">
            <motion.span
              className="font-mono text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-sky-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {String(progress).padStart(2, "0")}
            </motion.span>
            <span className="text-sky-400 font-mono font-bold text-lg sm:text-xl">%</span>
          </div>

          {/* Dynamic Progress Bar */}
          <div className="relative w-full h-2 sm:h-2.5 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-slate-800/90 shadow-inner">
            {/* Ambient Background Track Glow */}
            <div className="absolute inset-0 bg-slate-950/80 rounded-full" />

            {/* Filled Bar */}
            <motion.div
              className="relative h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(56,189,248,0.6)] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Animated travelling shimmer flare */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12"
              />
            </motion.div>
          </div>

          {/* Dynamic Status Text Ticker */}
          <div className="h-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.text}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2 text-xs sm:text-[13px] font-mono font-medium text-slate-400"
              >
                <StepIcon
                  className={`w-3.5 h-3.5 ${
                    isDone ? "text-emerald-400" : "text-sky-400 animate-pulse"
                  }`}
                />
                <span className={isDone ? "text-emerald-300 font-semibold" : "text-slate-300"}>
                  {currentStep.text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* BOTTOM HUD / FOOTER */}
      <footer className="relative z-10 w-full max-w-7xl px-5 sm:px-8 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] font-mono text-slate-500 border-t border-slate-900/60 pt-4">
        {/* Left Tech Stack Marks */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          <span className="text-slate-400">STACK:</span>
          <span>REACT 18 · TAILWIND · FRAMER MOTION · MERN</span>
        </div>

        {/* Right Corner Coordinate & Copyright */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-slate-600">LOC: 28.6139° N, 77.2090° E</span>
          <span className="text-slate-500">© {new Date().getFullYear()} SHUBHAM DIXIT</span>
        </div>
      </footer>
    </motion.div>
  );
};

export default Loader;