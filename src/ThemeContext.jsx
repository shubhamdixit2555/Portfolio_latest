/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useMemo, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    // Default to system preference
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  const applyThemeToDOM = useCallback((newTheme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", newTheme);
  }, []);

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme, applyThemeToDOM]);

  // Listen to system changes if user hasn't explicitly set a preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        applyThemeToDOM(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [applyThemeToDOM]);

  // Silky Smooth Water-Drop Ripple Theme Toggle (GPU accelerated, zero-lag on mobile)
  const toggleTheme = useCallback((event) => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    const isViewTransitionSupported =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fallback for browsers without View Transitions
    if (!isViewTransitionSupported) {
      setTheme(nextTheme);
      applyThemeToDOM(nextTheme);
      return;
    }

    // Determine water drop origin from the button or click event
    let x = window.innerWidth - 45;
    let y = 32;

    if (event) {
      if (typeof event.clientX === "number" && typeof event.clientY === "number" && event.clientX > 0) {
        x = event.clientX;
        y = event.clientY;
      } else if (event.currentTarget && typeof event.currentTarget.getBoundingClientRect === "function") {
        const rect = event.currentTarget.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    }

    // Radius to reach all screen corners
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const root = document.documentElement;
    root.classList.add("theme-transitioning");

    const transition = document.startViewTransition(() => {
      applyThemeToDOM(nextTheme);
      setTheme(nextTheme);
    });

    transition.ready
      .then(() => {
        // Detect lower-end mobile devices to optimize duration
        const isMobile =
          typeof window !== "undefined" &&
          (window.innerWidth < 768 || navigator.maxTouchPoints > 0);
        const duration = isMobile ? 320 : 380;

        const animation = root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: duration,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)", // Natural water ripple / splash expansion curve
            pseudoElement: "::view-transition-new(root)",
          }
        );

        animation.onfinish = () => {
          root.classList.remove("theme-transitioning");
        };
      })
      .catch(() => {
        root.classList.remove("theme-transitioning");
        setTheme(nextTheme);
        applyThemeToDOM(nextTheme);
      });
  }, [theme, applyThemeToDOM]);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};