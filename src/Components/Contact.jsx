/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck, FiZap, FiClock } from "react-icons/fi";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shubhamdixit2555@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-20 sm:scroll-mt-24 flex flex-col w-full items-center gap-8 sm:gap-10">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center space-y-2"
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-500 uppercase">
          Let's Connect
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Drop a Line &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            Let's Collaborate
          </span>
        </h2>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl">
        {/* Left Column: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-5 flex flex-col justify-between gap-6 p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
        >
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Let's talk.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Have a project, role opportunity, or just want to connect? Send a message and I'll get back to you soon.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
              <FiClock />
              <span>Replies within a few hours</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {/* Email Card with Copy button */}
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between gap-3 group hover:border-sky-400/40 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Direct Email</p>
                  <a
                    href="mailto:shubhamdixit2555@gmail.com"
                    className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 truncate block transition-colors"
                  >
                    shubhamdixit2555@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Copy Email to Clipboard"
                className="p-2.5 rounded-xl text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-sky-400/50 cursor-pointer"
              >
                {copied ? <FiCheck className="w-4 h-4 text-emerald-500" /> : <FiCopy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-3 hover:border-indigo-400/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Phone / WhatsApp</p>
                <a
                  href="tel:+919458549339"
                  className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  +91 9458549339
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-3 hover:border-purple-400/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Location</p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean & Modern Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="5c30d441-a642-4ba0-8466-e799185ebcc8" />

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  First Name <span className="text-sky-500">*</span>
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  placeholder="e.g. Alex"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="e.g. Rivera"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all"
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  Email Address <span className="text-sky-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  Phone <span className="text-slate-400 dark:text-slate-500 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. +91 00000 00000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                Message <span className="text-sky-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Hey Shubham, I would love to connect with you regarding..."
                className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-600 hover:via-indigo-600 hover:to-purple-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
            >
              <span>Send Message</span>
              <FiSend className="text-base" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};




