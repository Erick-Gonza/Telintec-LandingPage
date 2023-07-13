"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { sun, moon } from "@/app/assets";
import Image from "next/image";

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
    <div className="fixed bottom-4 right-4 sm:bottom-[100px] sm:right-8 z-10">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "dark" ? (
          <Image
            src={sun}
            alt="logo"
            className="w-[32px] h-[32px] object-contain"
          />
        ) : (
          <Image
            src={moon}
            alt="logo"
            className="w-[32px] h-[32px] object-contain"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
