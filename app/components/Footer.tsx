import { Code2, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com", label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Code2 className="h-5 w-5 text-accent" />
          <span>alex.dev</span>
        </a>

        {/* Links */}
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {footerLinks.map((link) => (
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
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="flex items-center gap-1 text-sm text-muted">
          © {new Date().getFullYear()} Alex Chen. Built with
          <Heart className="h-3.5 w-3.5 text-pink-500" />
          using Next.js
        </p>
      </div>
    </footer>
  );
}
