import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Based in San Francisco, CA" },
  { icon: Briefcase, label: "5+ years of experience" },
  { icon: GraduationCap, label: "B.S. Computer Science" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          About Me
        </h2>
        <h3 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Turning ideas into reality
        </h3>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-card-border bg-card sm:h-80 sm:w-80">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-pink-500/20">
                <span className="text-7xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a passionate full-stack developer with a love for clean
              code and thoughtful design. I specialize in building modern web
              applications using React, Next.js, Node.js, and TypeScript.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              When I&apos;m not coding, you&apos;ll find me contributing to
              open-source projects, writing technical blog posts, or exploring
              the latest in AI and web technologies.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-badge-bg text-badge-text">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
