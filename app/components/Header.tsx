import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Next.js App
        </span>
        <ThemeSelector />
      </div>
    </header>
  );
}
