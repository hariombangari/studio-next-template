export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-end bg-parchment px-6 pb-16 pt-32 dark:bg-ink lg:px-12 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Decorative grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Eyebrow */}
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-walnut lg:mb-12">
          Handcrafted for the considered home
        </p>

        {/* Display headline */}
        <h1 id="hero-heading" className="hero-display font-display text-ink dark:text-parchment">
          Objects{" "}
          <em className="italic text-kiln">worth</em>
          <br className="hidden sm:block" />
          {" "}living with
        </h1>

        {/* Subtitle + CTA row */}
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mt-16">
          <p className="max-w-md text-base leading-relaxed text-walnut lg:text-lg">
            Ceramics, textiles, and everyday objects made by independent makers
            who care about material, process, and longevity.
          </p>
          <a
            href="#collection"
            className="group inline-flex items-center gap-3 self-start whitespace-nowrap border-b border-ink pb-1 text-sm font-medium tracking-wide text-ink transition-colors hover:border-kiln hover:text-kiln dark:border-parchment dark:text-parchment dark:hover:border-kiln dark:hover:text-kiln"
          >
            Browse the collection
            <span
              className="inline-block transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
