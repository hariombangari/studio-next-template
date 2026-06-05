export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  stars?: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface DeveloperProfile {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatarUrl: string;
  email: string;
  availableForHire: boolean;
  skills: string[];
  socials: SocialLink[];
  projects: Project[];
  experience: Experience[];
  stats: {
    yearsOfExperience: number;
    projectsCompleted: number;
    contributions: number;
    coffeeConsumed: number;
  };
}

export const profile: DeveloperProfile = {
  name: "Alex Chen",
  title: "Senior Full-Stack Developer",
  location: "San Francisco, CA",
  bio: "Passionate full-stack developer with 8+ years of experience building scalable web applications. I love turning complex problems into simple, elegant solutions. Open-source enthusiast and occasional tech blogger.",
  avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4",
  email: "alex.chen@example.dev",
  availableForHire: true,
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "GraphQL",
    "Tailwind CSS",
    "Prisma",
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/alexchen", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/alexchen", icon: "linkedin" },
    { platform: "Twitter / X", url: "https://x.com/alexchen_dev", icon: "x" },
    { platform: "Blog", url: "https://alexchen.dev/blog", icon: "blog" },
  ],
  projects: [
    {
      title: "DevFlow",
      description:
        "A real-time collaborative code review platform with AI-powered suggestions and inline annotations.",
      tags: ["Next.js", "WebSocket", "OpenAI", "PostgreSQL"],
      url: "https://github.com/alexchen/devflow",
      stars: 1240,
    },
    {
      title: "CloudSync CLI",
      description:
        "Blazing-fast CLI tool for syncing local development environments with cloud infrastructure.",
      tags: ["Rust", "AWS", "Docker", "CLI"],
      url: "https://github.com/alexchen/cloudsync",
      stars: 876,
    },
    {
      title: "Pixel UI",
      description:
        "A lightweight, accessible component library for React with built-in dark mode and theming.",
      tags: ["React", "TypeScript", "Storybook", "A11y"],
      url: "https://github.com/alexchen/pixel-ui",
      stars: 2100,
    },
    {
      title: "QueryForge",
      description:
        "Type-safe SQL query builder for TypeScript that compiles queries at build time for zero-runtime overhead.",
      tags: ["TypeScript", "SQL", "Compiler", "Node.js"],
      url: "https://github.com/alexchen/queryforge",
      stars: 530,
    },
  ],
  experience: [
    {
      company: "Vercel",
      role: "Senior Software Engineer",
      period: "2022 – Present",
      description:
        "Leading the development of edge-first deployment infrastructure. Built internal tooling that reduced build times by 40%. Mentoring junior engineers and contributing to open-source projects.",
      technologies: ["Next.js", "TypeScript", "Edge Functions", "Turborepo"],
    },
    {
      company: "Stripe",
      role: "Software Engineer II",
      period: "2019 – 2022",
      description:
        "Designed and implemented payment processing microservices handling 10M+ daily transactions. Improved API latency by 25% through caching optimizations.",
      technologies: ["Ruby", "Go", "PostgreSQL", "Kafka"],
    },
    {
      company: "Startup Labs",
      role: "Full-Stack Developer",
      period: "2017 – 2019",
      description:
        "Early engineer at a YC-backed startup. Built the entire frontend from scratch and established CI/CD pipelines. Product grew from 0 to 50K MAU.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
  ],
  stats: {
    yearsOfExperience: 8,
    projectsCompleted: 42,
    contributions: 1847,
    coffeeConsumed: 4392,
  },
};
