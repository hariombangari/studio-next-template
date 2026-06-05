"use client";

import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Code2 className="h-5 w-5 text-accent" />
          <span>alex.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-card-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
