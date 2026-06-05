import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur-md dark:border-white/[.145] dark:bg-black/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Next.js App
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
