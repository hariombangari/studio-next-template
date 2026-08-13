import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm dark:bg-ink/90">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-ink dark:text-parchment"
          aria-label="Iro home"
        >
          iro
        </Link>

        <ul className="hidden items-center gap-8 text-sm tracking-wide text-walnut md:flex">
          <li>
            <Link
              href="#collection"
              className="transition-colors hover:text-ink dark:hover:text-parchment"
            >
              Collection
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="transition-colors hover:text-ink dark:hover:text-parchment"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#journal"
              className="transition-colors hover:text-ink dark:hover:text-parchment"
            >
              Journal
            </Link>
          </li>
        </ul>

        <Link
          href="#collection"
          className="text-sm tracking-wide text-walnut transition-colors hover:text-ink dark:hover:text-parchment"
        >
          Shop
        </Link>
      </nav>
    </header>
  );
}
