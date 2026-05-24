"use client";

import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    updateTheme(initialTheme);
  }, []);

  const updateTheme = (newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={`relative h-14 w-14 rounded-2xl bg-zinc-100 transition-all duration-300 ${className}`}
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`group relative h-14 w-14 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-orange-200 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl dark:from-indigo-600 dark:to-purple-700 ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun/Moon Container */}
      <div className="relative h-full w-full">
        {/* Sun rays */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            theme === "light" ? "rotate-0 scale-100" : "rotate-180 scale-0"
          }`}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-1 w-6 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-400 to-transparent"
              style={{
                transform: `translateX(-50%) translateY(-50%) rotate(${i * 45}deg) translateX(100%)`,
              }}
            />
          ))}
        </div>

        {/* Sun core */}
        <div
          className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-lg transition-all duration-500 ${
            theme === "light" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />

        {/* Moon */}
        <div
          className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
            theme === "dark" ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-400" />
            <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700" />
          </div>
        </div>

        {/* Stars for dark mode */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute left-2 top-2 h-0.5 w-0.5 rounded-full bg-white" />
          <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-white" />
          <div className="absolute bottom-3 left-3 h-0.5 w-0.5 rounded-full bg-white" />
          <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-white" />
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
    </button>
  );
}