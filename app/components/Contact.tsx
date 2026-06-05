"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, integrate with an API route / email service
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s work together
        </h3>
        <p className="mt-4 text-lg text-muted">
          Have a project in mind or just want to chat? Drop me a message and
          I&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-xl">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-card-border bg-card p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <MessageSquare className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold">Message Sent!</h4>
            <p className="text-muted">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glow-border space-y-5 rounded-2xl border border-card-border bg-card p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Project Inquiry"
                className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        )}

        {/* Email fallback */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
          <Mail className="h-4 w-4" />
          <span>Or email me directly at</span>
          <a
            href="mailto:alex@example.com"
            className="font-medium text-accent hover:underline"
          >
            alex@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
