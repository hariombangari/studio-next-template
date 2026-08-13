export function About() {
  return (
    <section
      id="about"
      className="bg-charcoal px-6 py-20 text-parchment lg:px-12 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Left — statement */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-clay">
            About Iro
          </p>
          <h2
            id="about-heading"
            className="font-display text-3xl leading-tight lg:text-5xl"
          >
            We find the makers.
            <br />
            You keep their work.
          </h2>
        </div>

        {/* Right — body text */}
        <div className="flex flex-col justify-center gap-6 text-base leading-relaxed text-clay lg:text-lg">
          <p>
            Iro is a small shop that works directly with independent studios
            across Japan, Portugal, and Scandinavia. Every object here is
            selected for how it feels in the hand, how it ages, and whether
            the person who made it would keep it in their own home.
          </p>
          <p>
            No inventory surpluses, no seasonal drops. When a piece is made,
            it goes up. When it&apos;s gone, it&apos;s gone. We photograph
            everything in the materials we actually live with — on the
            kitchen counter, not in a lightbox.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-8">
            <div>
              <p className="font-display text-2xl text-parchment lg:text-3xl">
                42
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-walnut">
                Makers
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-parchment lg:text-3xl">
                3
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-walnut">
                Continents
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-parchment lg:text-3xl">
                7 yr
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-walnut">
                Running
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
