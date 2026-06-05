const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Problem Solving",
      "Team Leadership",
      "Agile/Scrum",
      "Mentoring",
      "Technical Writing",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-card/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Skills
        </h2>
        <h3 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          My tech toolbox
        </h3>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glow-border rounded-2xl border border-card-border bg-card p-8"
            >
              <h4 className="text-lg font-semibold">{cat.title}</h4>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-badge-bg px-3.5 py-1.5 text-sm font-medium text-badge-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
