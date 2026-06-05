import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const socials = [
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com", label: "X (Twitter)" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Status badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </div>

        <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Alex Chen</span>
        </h1>

        <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          A full-stack developer who crafts performant, accessible, and
          beautifully designed web applications.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-card-border px-7 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            Get In Touch
          </a>
        </div>

        {/* Socials */}
        <div className="animate-fade-in-up animation-delay-400 mt-12 flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-card-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
