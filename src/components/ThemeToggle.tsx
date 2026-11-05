"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E2D9CC]/50 dark:bg-white/10 animate-pulse" />;
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle visual theme"
      className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E2D9CC] dark:border-white/15 bg-[#F4F1EA] dark:bg-[#122b1c] text-[#143823] dark:text-[#88d990] hover:bg-white dark:hover:bg-[#1B4B2F] transition-all shadow-xs"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[#f5c542]" />
      ) : (
        <Moon className="w-4 h-4 text-[#143823]" />
      )}
    </button>
  );
}
