"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      className="border-t border-clay/30 bg-parchment px-6 py-20 dark:border-walnut/20 dark:bg-ink lg:px-12 lg:py-28"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2
          id="newsletter-heading"
          className="font-display text-3xl text-ink dark:text-parchment lg:text-5xl"
        >
          Stay close to the work
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-walnut lg:text-base">
          A short letter when new pieces arrive or a maker has something to say.
          No promotions, no algorithms.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm font-medium text-kiln" role="status">
            Thank you. We&apos;ll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-b border-ink/20 bg-transparent px-0 py-3 text-sm text-ink placeholder:text-walnut/60 focus:border-ink focus:outline-none dark:border-parchment/20 dark:text-parchment dark:focus:border-parchment"
            />
            <button
              type="submit"
              className="shrink-0 border border-ink bg-ink px-6 py-3 text-sm font-medium tracking-wide text-parchment transition-colors hover:bg-charcoal dark:border-parchment dark:bg-parchment dark:text-ink dark:hover:bg-clay"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
