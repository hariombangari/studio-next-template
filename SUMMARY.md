# Repository Summary — Studio Next Template

## Overview

**studio-next-template** is a minimal starter/scaffold for building modern web applications. It ships the default Next.js `create-next-app` output enhanced with Tailwind CSS v4 and strict TypeScript, providing a clean baseline that is ready to be customised for any product.

The project is currently in its **initial template state** — the single page displays the stock Next.js welcome content with links to Vercel templates, the Next.js learning centre, and documentation.

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| **Next.js** | 16.1.4 | React framework — App Router, file-system routing, server components |
| **React** | 19.2.3 | UI library |
| **TypeScript** | ^5 | Static type-checking (`strict: true`, bundler module resolution) |
| **Tailwind CSS** | v4 | Utility-first CSS via the `@tailwindcss/postcss` PostCSS plugin |
| **ESLint** | ^9 | Linting — flat config with Next.js `core-web-vitals` + TypeScript rule sets |
| **Node.js** | ≥ 20 | Runtime prerequisite |

## Project Structure

```
├── app/
│   ├── favicon.ico        # App favicon
│   ├── globals.css        # Tailwind import, CSS custom properties, dark-mode colours
│   ├── layout.tsx         # Root layout — Geist Sans & Mono fonts, HTML metadata
│   └── page.tsx           # Home page — landing with deploy/docs links
├── public/                # Static assets served at /
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore             # Git ignore rules (node_modules, .next, etc.)
├── eslint.config.mjs      # ESLint 9 flat config
├── next.config.ts         # Next.js configuration (default / empty)
├── package.json           # Project metadata, dependencies & npm scripts
├── postcss.config.mjs     # PostCSS config (@tailwindcss/postcss plugin)
├── tsconfig.json          # TypeScript compiler options
├── README.md              # Detailed README with getting-started instructions
└── SUMMARY.md             # ← This file
```

## Key Features

- **App Router** — Uses the Next.js App Router (no Pages Router); all routes live under `app/`.
- **Geist Fonts** — Pre-configured with [Geist Sans & Geist Mono](https://vercel.com/font) loaded via `next/font/google`.
- **Dark Mode** — CSS custom properties (`--background`, `--foreground`) adapt automatically through `prefers-color-scheme: dark`.
- **Tailwind CSS v4** — Inline theme configuration inside `globals.css`; integrated via `@tailwindcss/postcss`.
- **TypeScript Strict Mode** — `strict: true` with `bundler` module resolution for maximum type safety.
- **ESLint 9 Flat Config** — Combines `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- **Path Aliases** — `@/*` maps to the project root via `tsconfig.json`.

## NPM Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server (hot reload) |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Git History

The repository has three commits so far:

1. **Initial test commit** from Studio.
2. Two subsequent commits by the *Sapient Studio Agent* completing default tasks.

## Deployment

Designed for one-click deployment on [Vercel](https://vercel.com/). The home page includes a "Deploy Now" button that links to Vercel's project-creation flow.

## Status

Template / scaffold — no custom application logic has been added yet. Ready for customisation.
