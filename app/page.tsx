import Image from "next/image";
import { profile } from "./data/profile";
import SocialLinks from "./components/SocialLinks";
import SkillBadge from "./components/SkillBadge";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceItem";
import StatCard from "./components/StatCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      {/* Header / Hero */}
      <header className="relative overflow-hidden border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        {/* Gradient accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-10 pt-14 text-center sm:flex-row sm:text-left">
          {/* Avatar */}
          <div className="relative shrink-0">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-white bg-zinc-100 shadow-lg dark:border-zinc-800 dark:bg-zinc-800"
              priority
            />
            {profile.availableForHire && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-950/60 dark:text-green-400 dark:ring-green-500/30">
                Available for hire
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {profile.name}
              </h1>
              <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
                {profile.title}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {profile.email}
              </a>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {profile.bio}
            </p>

            <SocialLinks links={profile.socials} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* Stats */}
        <section className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard
            label="Years Experience"
            value={`${profile.stats.yearsOfExperience}+`}
            icon={
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
            }
          />
          <StatCard
            label="Projects Completed"
            value={profile.stats.projectsCompleted.toString()}
            icon={
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
            }
          />
          <StatCard
            label="Contributions"
            value={profile.stats.contributions.toLocaleString()}
            icon={
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
            }
          />
          <StatCard
            label="Coffees Consumed"
            value={profile.stats.coffeeConsumed.toLocaleString()}
            icon={
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" /></svg>
            }
          />
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Featured Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>
          <div className="ml-1">
            {profile.experience.map((exp) => (
              <ExperienceItem key={`${exp.company}-${exp.period}`} experience={exp} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center dark:border-zinc-800 dark:from-blue-950/30 dark:to-purple-950/30">
          <h2 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Let&apos;s Work Together
          </h2>
          <p className="mb-5 text-sm text-zinc-600 dark:text-zinc-400">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Get In Touch
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
