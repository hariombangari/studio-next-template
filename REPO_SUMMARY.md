# Studio Next Template

## Overview

A starter template for building web applications using **Next.js 16** with the App Router, **React 19**, **TypeScript 5**, and **Tailwind CSS 4**. Scaffolded via `create-next-app` and hosted on GitHub at [hariombangari/studio-next-template](https://github.com/hariombangari/studio-next-template).

## Tech Stack

| Layer       | Technology                  | Version |
|-------------|-----------------------------|---------|
| Framework   | Next.js (App Router)        | 16.1.4  |
| UI Library  | React / React DOM           | 19.2.3  |
| Language    | TypeScript                  | ^5      |
| Styling     | Tailwind CSS + PostCSS      | ^4      |
| Linting     | ESLint (next core-web-vitals + typescript) | ^9 |
| Fonts       | Geist Sans & Geist Mono (via `next/font/google`) | — |

## Project Structure

```
.
├── app/
│   ├── favicon.ico        # App favicon
│   ├── globals.css         # Global styles (Tailwind import + CSS custom properties)
│   ├── layout.tsx          # Root layout (HTML shell, font setup, metadata)
│   └── page.tsx            # Home page (landing with Next.js logo, deploy & docs links)
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs       # ESLint flat config (core-web-vitals + TypeScript rules)
├── next.config.ts          # Next.js configuration (currently default/empty)
├── package.json            # Dependencies & scripts
├── postcss.config.mjs      # PostCSS config (Tailwind CSS plugin)
├── tsconfig.json           # TypeScript compiler options (bundler resolution, strict mode)
└── README.md
```

## Available Scripts

| Command         | Description                            |
|-----------------|----------------------------------------|
| `npm run dev`   | Start the development server           |
| `npm run build` | Create an optimized production build   |
| `npm run start` | Serve the production build             |
| `npm run lint`  | Run ESLint checks                      |

## Key Configuration Details

- **App Router** — uses the `app/` directory convention (no `pages/` directory).
- **Tailwind CSS v4** — integrated via `@tailwindcss/postcss`; global theme tokens defined inline in `globals.css`.
- **Dark mode** — supported via `prefers-color-scheme` media query with CSS custom properties (`--background`, `--foreground`).
- **Path aliases** — `@/*` maps to the project root in `tsconfig.json`.
- **Strict TypeScript** — `strict: true`, `noEmit`, `isolatedModules`, targeting ES2017.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
