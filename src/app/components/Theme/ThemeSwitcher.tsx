"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "@/app/assets";

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
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "dark" ? (
          <BsSunFill className="w-[40px] h-[40px] object-contain bg-transparent rounded-full p-[4px] text-black dark:text-white" />
        ) : (
          <BsMoonFill className="w-[40px] h-[40px] object-contain bg-transparent rounded-full p-[4px] text-black dark:text-white" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;