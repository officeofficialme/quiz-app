import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Theme = "light" | "dark";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("quizora-theme");

    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("quizora-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center gap-3 overflow-hidden rounded-full border border-[#292B59] bg-white px-4 py-2 text-black transition-colors duration-500 dark:bg-[#101333] dark:text-white"
    >
      {/* Animated Sun / Moon */}

      <span className="relative flex h-8 w-8 items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.3, y: 5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.3, y: -5 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="absolute text-2xl"
            >
              🌙
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.3, y: 5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.3, y: -5 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="absolute text-2xl"
            >
              ☀️
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Animated Label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="font-medium"
        >
          {isDark ? "Dark Mode" : "Light Mode"}
        </motion.span>
      </AnimatePresence>

      {/* Sliding switch */}
      <span
        className={`relative h-6 w-11 rounded-full transition-colors duration-100 ${
          isDark ? "bg-purple-600" : "bg-yellow-400"
        }`}
      >
        <motion.span
          animate={{ x: isDark ? 14 : 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md"
        />
      </span>
    </button>
  );
}

export default ThemeToggle;
