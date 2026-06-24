# Studio Next Template — Repository Summary

## Overview

**studio-next-template** is a starter/template project for building web applications with [Next.js](https://nextjs.org/). It was bootstrapped using `create-next-app` and serves as a foundation for new projects, providing a modern frontend stack out of the box.

**Repository:** [github.com/hariombangari/studio-next-template](https://github.com/hariombangari/studio-next-template)

## Tech Stack

| Layer         | Technology                          |
|---------------|-------------------------------------|
| Framework     | **Next.js 16.1.4** (App Router)     |
| Language      | **TypeScript 5**                    |
| UI Library    | **React 19.2.3**                    |
| Styling       | **Tailwind CSS 4** (via PostCSS)    |
| Fonts         | Geist Sans & Geist Mono (Google)    |
| Linting       | **ESLint 9** with `eslint-config-next` (Core Web Vitals + TypeScript rules) |

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout — sets HTML lang, fonts, global styles
│   ├── page.tsx         # Home page — default Next.js landing page
│   ├── globals.css      # Global styles — Tailwind import, CSS custom properties, dark mode
│   └── favicon.ico      # App favicon
├── public/              # Static assets (SVGs: next, vercel, globe, file, window)
├── package.json         # Project metadata & scripts
├── tsconfig.json        # TypeScript configuration (ES2017 target, bundler module resolution)
├── next.config.ts       # Next.js configuration (currently default/empty)
├── postcss.config.mjs   # PostCSS config — Tailwind CSS plugin
├── eslint.config.mjs    # ESLint flat config — Next.js Core Web Vitals + TypeScript
└── README.md            # Placeholder readme
```

## Available Scripts

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start the development server             |
| `npm run build` | Create a production build                |
| `npm run start` | Start the production server              |
| `npm run lint`  | Run ESLint checks                        |

## Key Details

- **App Router:** Uses the Next.js App Router (`app/` directory) rather than the legacy Pages Router.
- **Dark Mode:** Supports light and dark themes via `prefers-color-scheme` media query with CSS custom properties (`--background`, `--foreground`).
- **Path Aliases:** TypeScript path alias `@/*` maps to the project root for clean imports.
- **Private Package:** Marked as `private: true` — not intended for npm publication.
- **Version:** `0.1.0` — early/initial stage.
