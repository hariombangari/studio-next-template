"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur-md dark:border-white/[.145] dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Next.js App
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
