import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-12 text-clay lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl text-parchment"
              aria-label="Iro home"
            >
              iro
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-walnut">
              Curated home goods from independent makers in Japan, Portugal, and
              Scandinavia.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-parchment">
              Shop
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#collection" className="transition-colors hover:text-parchment">
                  Ceramics
                </Link>
              </li>
              <li>
                <Link href="#collection" className="transition-colors hover:text-parchment">
                  Textiles
                </Link>
              </li>
              <li>
                <Link href="#collection" className="transition-colors hover:text-parchment">
                  Objects
                </Link>
              </li>
              <li>
                <Link href="#collection" className="transition-colors hover:text-parchment">
                  Gift cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-parchment">
              Info
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="transition-colors hover:text-parchment">
                  About
                </Link>
              </li>
              <li>
                <Link href="#journal" className="transition-colors hover:text-parchment">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-parchment">
                  Shipping &amp; returns
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-parchment">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-parchment">
              Connect
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-parchment"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-parchment"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@iro.shop"
                  className="transition-colors hover:text-parchment"
                >
                  hello@iro.shop
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-walnut/20 pt-8 sm:flex-row">
          <p className="text-xs text-walnut">
            © {new Date().getFullYear()} Iro. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-walnut">
            <Link href="#" className="transition-colors hover:text-parchment">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-parchment">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
