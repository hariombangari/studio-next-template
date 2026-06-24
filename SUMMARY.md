# Repository Summary — Studio Next Template

## Overview

**studio-next-template** is a minimal starter template for building modern web applications using Next.js 16, React 19, TypeScript, and Tailwind CSS v4. It provides a clean, production-ready scaffold generated from `create-next-app` with modern defaults — ready to be customized for any project.

The repository is currently in its **initial template state** with the stock Next.js welcome page and no custom application logic.

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.4 | React framework — App Router, file-system routing, server components |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Static type-checking (`strict: true`) |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first CSS via `@tailwindcss/postcss` |
| [ESLint](https://eslint.org/) | ^9 | Linting — flat config with core-web-vitals & TypeScript rules |

## Project Structure

```
├── app/
│   ├── favicon.ico        # App favicon
│   ├── globals.css        # Tailwind import & CSS custom properties (light/dark)
│   ├── layout.tsx         # Root layout — Geist Sans & Mono fonts, HTML metadata
│   └── page.tsx           # Home page — landing with deploy & docs links
├── public/                # Static assets (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
├── .gitignore
├── eslint.config.mjs      # ESLint 9 flat config
├── next.config.ts         # Next.js configuration (empty/default)
├── package.json           # Dependencies & npm scripts
├── postcss.config.mjs     # PostCSS config (Tailwind plugin)
├── tsconfig.json          # TypeScript compiler options
└── README.md              # Getting-started documentation
```

## Key Features

- **App Router** — All routes under `app/`; no Pages Router.
- **Geist Fonts** — [Geist Sans & Geist Mono](https://vercel.com/font) loaded via `next/font/google`.
- **Dark Mode** — CSS custom properties (`--background`, `--foreground`) auto-adapt via `prefers-color-scheme`.
- **Tailwind CSS v4** — Inline theme config in `globals.css`; integrated through PostCSS.
- **TypeScript Strict Mode** — `strict: true` with `bundler` module resolution.
- **ESLint 9 Flat Config** — Combines `core-web-vitals` and TypeScript rule sets.
- **Path Aliases** — `@/*` maps to the project root.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Designed for one-click deployment on [Vercel](https://vercel.com/).

## Status

Template / scaffold — no custom application logic has been added. Ready for customization.
