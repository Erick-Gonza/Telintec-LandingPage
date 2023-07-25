"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "../../../../public/assets";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-[50px] sm:right-8 z-10">
      <motion.div
        whileTap={{
          scale: 1.25,
          opacity: 0.8,
        }}
      >
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "dark" ? (
            <BsSunFill className="w-[40px] h-[40px] object-contain bg-transparent rounded-full p-[4px] text-black dark:text-white border bg-white dark:bg-black" />
          ) : (
            <BsMoonFill className="w-[40px] h-[40px] object-contain bg-transparent rounded-full p-[4px] text-black dark:text-white border bg-white dark:bg-black" />
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
