# Repository Summary — Studio Next Template

## Overview

**studio-next-template** is a minimal starter template for building modern web applications. It provides a clean, production-ready scaffold using the latest versions of Next.js, React, TypeScript, and Tailwind CSS.

**Repository:** [github.com/hariombangari/studio-next-template](https://github.com/hariombangari/studio-next-template)

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| **Next.js** | 16.1.4 | React framework with App Router |
| **React** | 19.2.3 | UI library |
| **TypeScript** | ^5 | Static type checking (strict mode) |
| **Tailwind CSS** | v4 | Utility-first styling via PostCSS |
| **ESLint** | ^9 | Linting with Next.js core-web-vitals & TypeScript rules |

## Project Structure

```
├── app/
│   ├── favicon.ico        # App favicon
│   ├── globals.css        # Global styles (Tailwind import, CSS custom properties, dark mode)
│   ├── layout.tsx         # Root layout (Geist Sans & Mono fonts, metadata)
│   └── page.tsx           # Home page (landing with deploy/docs links)
├── public/                # Static assets (next.svg, vercel.svg, globe.svg, etc.)
├── eslint.config.mjs      # ESLint 9 flat config (core-web-vitals + TypeScript)
├── next.config.ts         # Next.js configuration (currently default)
├── postcss.config.mjs     # PostCSS config (@tailwindcss/postcss plugin)
├── tsconfig.json          # TypeScript config (strict, bundler module resolution)
└── package.json           # Project metadata, dependencies & scripts
```

## Key Features

- **App Router Architecture** — Uses the Next.js App Router (no Pages Router).
- **Geist Fonts** — Pre-configured with Geist Sans and Geist Mono via `next/font/google`.
- **Dark Mode** — CSS custom properties (`--background`, `--foreground`) adapt automatically via `prefers-color-scheme`.
- **Tailwind CSS v4** — Integrated through the `@tailwindcss/postcss` PostCSS plugin with inline theme configuration.
- **TypeScript Strict Mode** — `strict: true` enabled for maximum type safety.
- **ESLint 9 Flat Config** — Next.js core-web-vitals and TypeScript linting rules pre-configured.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Status

The repository is in its initial template state — the home page displays default Next.js starter content with links to Vercel templates, the Next.js learning center, and documentation. It is intended to be customized for a specific application.
