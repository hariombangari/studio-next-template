# Studio Next Template — Repository Summary

## Overview

**studio-next-template** is a starter/template web application built with [Next.js](https://nextjs.org/) (v16) and [React](https://react.dev/) (v19). It provides a minimal, ready-to-customize foundation for building modern web applications, styled with [Tailwind CSS](https://tailwindcss.com/) (v4) and written in [TypeScript](https://www.typescriptlang.org/).

- **Repository:** [github.com/hariombangari/studio-next-template](https://github.com/hariombangari/studio-next-template)
- **Package Name:** `studio-next-template`
- **Version:** `0.1.0`
- **Private:** Yes

## Tech Stack

| Layer        | Technology                  | Version |
| ------------ | --------------------------- | ------- |
| Framework    | Next.js                     | 16.1.4  |
| UI Library   | React / React DOM           | 19.2.3  |
| Language     | TypeScript                  | ^5      |
| Styling      | Tailwind CSS (via PostCSS)  | ^4      |
| Linting      | ESLint + eslint-config-next | ^9      |
| Fonts        | Geist Sans & Geist Mono (via `next/font/google`) | — |

## Project Structure

```
.
├── app/                  # Next.js App Router directory
│   ├── favicon.ico       # Site favicon
│   ├── globals.css       # Global styles (Tailwind imports + CSS custom properties)
│   ├── layout.tsx        # Root layout — sets HTML metadata, fonts, and global CSS
│   └── page.tsx          # Home page component (landing page)
├── public/               # Static assets served at /
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs     # ESLint flat config (core-web-vitals + TypeScript rules)
├── next.config.ts        # Next.js configuration (currently default/empty)
├── package.json          # Dependencies and npm scripts
├── postcss.config.mjs    # PostCSS config (Tailwind CSS plugin)
├── tsconfig.json         # TypeScript compiler options
└── .gitignore            # Git ignore rules
```

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the Next.js development server     |
| `npm run build` | Create an optimized production build     |
| `npm start`     | Serve the production build               |
| `npm run lint`  | Run ESLint across the project            |

## Key Details

- **App Router:** Uses the Next.js App Router (`app/` directory) rather than the legacy Pages Router.
- **Styling:** Tailwind CSS v4 is integrated via `@tailwindcss/postcss`. Global CSS defines light/dark theme custom properties (`--background`, `--foreground`) that respond to `prefers-color-scheme`.
- **Fonts:** The Geist Sans and Geist Mono variable fonts are loaded via `next/font/google` and exposed as CSS custom properties (`--font-geist-sans`, `--font-geist-mono`).
- **Dark Mode:** Supported out of the box via CSS `prefers-color-scheme` media query and Tailwind's `dark:` utility classes.
- **TypeScript:** Strict mode is enabled. Path alias `@/*` maps to the project root for clean imports.
- **Linting:** ESLint uses the flat config format with Next.js Core Web Vitals and TypeScript rule sets.

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. Edit `app/page.tsx` to begin customizing the application.
