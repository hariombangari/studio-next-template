import type { Experience } from "../data/profile";

export default function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="relative flex gap-6 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex size-3 shrink-0 rounded-full bg-blue-500 ring-4 ring-blue-50 dark:ring-zinc-900" />
        <div className="w-px grow bg-zinc-200 dark:bg-zinc-800 last:hidden" />
      </div>

      <div className="-mt-1 flex flex-col gap-2 pb-2">
        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {experience.role}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {experience.company} · {experience.period}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
