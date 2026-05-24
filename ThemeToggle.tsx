'use client';

import { useState, useEffect } from 'react';

export interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial theme preference
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      setIsDark(darkMode);
      document.documentElement.classList.toggle('dark', darkMode);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={`theme-toggle-skeleton ${className}`}
        aria-label="Toggle theme"
      >
        <div className="toggle-track-skeleton" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      type="button"
    >
      <span className="toggle-track">
        <span className={`toggle-thumb ${isDark ? 'translate-x-[28px]' : 'translate-x-0'}`}>
          {/* Sun icon */}
          <svg
            className={`sun-icon ${isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
              d="M12 2V6M12 18V22M22 12H18M6 12H2M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Moon icon */}
          <svg
            className={`moon-icon ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              fill="currentColor"
            />
          </svg>
        </span>
        
        {/* Decorative stars for dark mode */}
        <span className={`stars ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <span className="star star-1">✦</span>
          <span className="star star-2">✦</span>
          <span className="star star-3">✦</span>
        </span>
      </span>
    </button>
  );
}