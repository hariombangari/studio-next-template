interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechNova Inc.",
    period: "2023 — Present",
    description:
      "Leading development of the core platform serving 2M+ users. Architecting micro-frontend systems and mentoring junior engineers.",
    highlights: [
      "Reduced page load time by 40% through SSR and code splitting",
      "Led migration from REST to GraphQL, improving API efficiency",
      "Mentored a team of 5 developers",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "DataFlow Labs",
    period: "2021 — 2023",
    description:
      "Built data visualization tools and real-time dashboards for enterprise clients in the fintech space.",
    highlights: [
      "Developed a real-time analytics dashboard processing 10K+ events/sec",
      "Implemented OAuth 2.0 + RBAC for multi-tenant applications",
      "Shipped 12 features in 6 months with zero critical bugs",
    ],
  },
  {
    role: "Frontend Developer",
    company: "PixelCraft Studio",
    period: "2020 — 2021",
    description:
      "Crafted pixel-perfect responsive interfaces for high-profile clients in e-commerce and media.",
    highlights: [
      "Built a component library used across 8 client projects",
      "Improved accessibility scores from 62 to 98 on Lighthouse",
      "Automated visual regression testing with 95% coverage",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-card/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </h2>
        <h3 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Where I&apos;ve worked
        </h3>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-card-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {jobs.map((job, i) => (
              <div
                key={job.company}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <span className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
                </div>

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="glow-border rounded-2xl border border-card-border bg-card p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {job.period}
                    </span>
                    <h4 className="mt-2 text-lg font-bold">{job.role}</h4>
                    <p className="text-sm font-medium text-muted">{job.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {job.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
