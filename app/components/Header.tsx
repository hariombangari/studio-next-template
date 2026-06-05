import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur-md dark:border-white/[.145] dark:bg-black/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={16}
            priority
          />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
