import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "CloudSync Dashboard",
    description:
      "A real-time analytics dashboard for monitoring cloud infrastructure. Built with Next.js, WebSockets, and D3.js for live data visualization.",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    image: "🌩️",
  },
  {
    title: "DevCollab",
    description:
      "A collaborative code editor with real-time multi-cursor support, integrated terminal, and Git workflow. Features AI-powered code completion.",
    tags: ["React", "Node.js", "Socket.io", "Monaco"],
    github: "https://github.com",
    live: "https://example.com",
    image: "👥",
  },
  {
    title: "FinTrack",
    description:
      "Personal finance tracker with AI-categorized transactions, budget planning, and beautiful charts. Supports bank API integrations.",
    tags: ["Next.js", "Python", "PostgreSQL", "Plaid"],
    github: "https://github.com",
    live: "https://example.com",
    image: "💰",
  },
  {
    title: "HealthPulse",
    description:
      "A health & fitness app that syncs with wearable devices, tracks workouts, nutrition, and sleep patterns with personalized insights.",
    tags: ["React Native", "GraphQL", "MongoDB", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "❤️",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Projects
        </h2>
        <h3 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Featured work
        </h3>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glow-border group flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent/10 to-pink-500/10">
                <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  {project.image}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-badge-bg px-3 py-1 text-xs font-medium text-badge-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-4 border-t border-card-border pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
