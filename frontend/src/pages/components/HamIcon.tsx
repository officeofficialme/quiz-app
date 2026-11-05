import { motion } from "framer-motion";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Hamburger = ({ isOpen, setIsOpen }: HamburgerProps) => {
  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      whileTap={{ scale: 0.9 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="
      min-md:hidden
        relative flex h-10 w-10 items-center justify-center
        overflow-hidden rounded-2xl
        border border-violet-500/30
        bg-white dark:bg-[#17112D]
        shadow-lg shadow-violet-500/10
        transition-colors duration-300
        hover:border-violet-500/70
        mt-1
      "
    >
      {/* Background glow */}
      <motion.span
        animate={{
          scale: isOpen ? 1.8 : 0.8,
          opacity: isOpen ? 0.18 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="
          absolute h-8 w-8 rounded-full
          bg-violet-500 blur-xl
        "
      />

      {/* Animated bars */}
      <span className="relative h-6 w-6">

        <motion.span
          animate={{
            top: isOpen ? 10 : 3,
            left: isOpen ? 3 : 2,
            rotate: isOpen ? 45 : 0,
            width: isOpen ? 20 : 20,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="
            absolute h-[3px] rounded-full
            bg-gradient-to-r from-violet-500 to-fuchsia-500
          "
        />

        <motion.span
          animate={{
            top: 10,
            left: isOpen ? 3 : 6,
            rotate: isOpen ? -45 : 0,
            opacity: isOpen ? 1 : 0.8,
            width: isOpen ? 20 : 12,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="
            absolute h-[3px] rounded-full
            bg-gradient-to-r from-fuchsia-500 to-violet-500
          "
        />

        <motion.span
          animate={{
            top: isOpen ? 10 : 17,
            left: isOpen ? 3 : 2,
            rotate: isOpen ? -45 : 0,
            opacity: isOpen ? 0 : 1,
            width: isOpen ? 16 : 20,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="
            absolute h-[3px] rounded-full
            bg-gradient-to-r from-violet-500 to-fuchsia-500
          "
        />

      </span>
    </motion.button>
  );
};

export default Hamburger;