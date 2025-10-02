import { motion } from "framer-motion";

const navLinks = ["home", "about", "skills", "projects", "contact"];
const socialIcons = [
  { href: "https://github.com/shubhamdixit2555", icon: "fa-github", title: "GitHub" },
  { href: "https://www.linkedin.com/in/shubham-dixit-dev/", icon: "fa-linkedin", title: "LinkedIn" },
  { href: "https://www.instagram.com/mr_shubham_dixit", icon: "fa-instagram", title: "Instagram" },
  { href: "https://wa.me/9458549339", icon: "fa-whatsapp", title: "Whatsapp" },
];

const handleLinkClick = (e, sectionId) => {
  e.preventDefault();
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative mt-12 py-8 px-4 bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg border-t border-white/20 dark:border-gray-700/50 shadow-inner"
    >
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={(e) => handleLinkClick(e, link)} className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          {socialIcons.map((social) => (
            <motion.a key={social.title} href={social.href} title={social.title} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-sky-500 dark:hover:text-sky-400 transition-colors" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <i className={`fa-brands ${social.icon}`}></i>
            </motion.a>
          ))}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shubham Dixit. All rights reserved.</p>
          <p>Designed & Built by Shubham Dixit</p>
        </div>
      </div>
    </motion.footer>
  );
};
