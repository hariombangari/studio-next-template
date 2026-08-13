interface JournalEntryProps {
  date: string;
  title: string;
  excerpt: string;
}

function JournalEntry({ date, title, excerpt }: JournalEntryProps) {
  return (
    <article className="group border-t border-clay/30 py-8 dark:border-walnut/20 lg:py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
        <time className="shrink-0 text-xs uppercase tracking-[0.2em] text-walnut">
          {date}
        </time>
        <div className="flex-1">
          <h3 className="font-display text-xl text-ink transition-colors group-hover:text-kiln dark:text-parchment dark:group-hover:text-kiln lg:text-2xl">
            {title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-walnut">
            {excerpt}
          </p>
        </div>
        <span
          className="hidden text-walnut transition-transform group-hover:translate-x-1 sm:inline-block"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </article>
  );
}

const ENTRIES = [
  {
    date: "Jun 2026",
    title: "A week in Tokoname with Sueki Ceramics",
    excerpt:
      "We spent five days at the Sueki studio watching the summer firing. Here's what 1,200°C teaches you about patience.",
  },
  {
    date: "May 2026",
    title: "Why we stopped doing seasonal drops",
    excerpt:
      "The calendar-driven release model never matched how our makers actually work. We changed it.",
  },
  {
    date: "Apr 2026",
    title: "Material guide: Portuguese linen",
    excerpt:
      "Fog & Thread walks us through the six-month process behind their table linens, from flax field to finished edge.",
  },
] as const;

export function Journal() {
  return (
    <section
      id="journal"
      className="bg-parchment px-6 py-20 dark:bg-ink lg:px-12 lg:py-32"
      aria-labelledby="journal-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between lg:mb-12">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-walnut">
              From the workshop
            </p>
            <h2
              id="journal-heading"
              className="font-display text-3xl text-ink dark:text-parchment lg:text-5xl"
            >
              Journal
            </h2>
          </div>
        </div>

        <div>
          {ENTRIES.map((entry) => (
            <JournalEntry key={entry.title} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
