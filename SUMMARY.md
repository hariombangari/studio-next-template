# Studio Next Template — Repository Summary

## Overview

**studio-next-template** is a starter/template project for building web applications with [Next.js](https://nextjs.org/). It was bootstrapped using `create-next-app` and serves as a clean foundation for new projects, providing a modern frontend stack out of the box.

**Repository:** [github.com/hariombangari/studio-next-template](https://github.com/hariombangari/studio-next-template)

## Tech Stack

| Layer     | Technology                                                                |
| --------- | ------------------------------------------------------------------------- |
| Framework | **Next.js 16.1.4** (App Router)                                          |
| Language  | **TypeScript 5**                                                         |
| UI        | **React 19.2.3** / **React DOM 19.2.3**                                  |
| Styling   | **Tailwind CSS 4** (via `@tailwindcss/postcss`)                          |
| Fonts     | **Geist Sans** & **Geist Mono** (loaded from Google Fonts via `next/font`) |
| Linting   | **ESLint 9** with `eslint-config-next` (Core Web Vitals + TypeScript)    |

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout — sets HTML lang, Geist fonts, global CSS
│   ├── page.tsx         # Home page — landing page with Next.js branding & links
│   ├── globals.css      # Global styles — Tailwind import, CSS custom properties, dark mode
│   └── favicon.ico      # App favicon
├── public/              # Static assets (SVGs: next, vercel, globe, file, window)
├── package.json         # Project metadata, scripts & dependencies
├── tsconfig.json        # TypeScript config (ES2017 target, bundler module resolution, @/* alias)
├── next.config.ts       # Next.js configuration (default/empty)
├── postcss.config.mjs   # PostCSS config — Tailwind CSS plugin
├── eslint.config.mjs    # ESLint flat config — Next.js Core Web Vitals + TypeScript rules
├── README.md            # Placeholder readme
└── SUMMARY.md           # This file
```

## Available Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build  |
| `npm run start` | Start the production server |
| `npm run lint`  | Run ESLint checks          |

## Key Details

- **App Router:** Uses the Next.js App Router (`app/` directory), not the legacy Pages Router.
- **Dark Mode:** Supports light/dark themes via `prefers-color-scheme` media query with CSS custom properties (`--background`, `--foreground`).
- **Path Aliases:** TypeScript path alias `@/*` maps to the project root for clean imports.
- **Fonts:** Geist Sans and Geist Mono are loaded as CSS variables (`--font-geist-sans`, `--font-geist-mono`) and applied via Tailwind's `@theme` directive.
- **Home Page:** The default `page.tsx` renders a landing page with the Next.js logo, instructional text, and links to deploy on Vercel, explore templates, and read the docs.
- **Private Package:** Marked `private: true` — not intended for npm publication.
- **Version:** `0.1.0` — early/initial stage.

## Git History

The repository was initialized with a test commit and has since received updates from the Sapient Studio Agent. The current branch is `silent-thunder-5539`.
