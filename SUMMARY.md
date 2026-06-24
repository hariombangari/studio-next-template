# Repository Summary

## What is this?

**studio-next-template** is a starter template for building web applications, scaffolded with `create-next-app`. It provides a clean, minimal foundation using the latest frontend technologies.

**GitHub:** [hariombangari/studio-next-template](https://github.com/hariombangari/studio-next-template)

## Tech Stack

- **Next.js 16.1.4** — React framework with App Router (`app/` directory)
- **React 19.2.3** — UI library
- **TypeScript 5** — Static type checking with strict mode
- **Tailwind CSS 4** — Utility-first CSS via PostCSS plugin
- **ESLint 9** — Linting with Next.js Core Web Vitals and TypeScript rules (flat config)

## Project Structure

```
app/
├── favicon.ico         # App favicon
├── globals.css         # Global styles (Tailwind imports, CSS variables for light/dark)
├── layout.tsx          # Root layout (Geist font family, HTML metadata)
└── page.tsx            # Home page (landing with Next.js branding)
public/                 # Static SVG assets (file, globe, next, vercel, window icons)
eslint.config.mjs       # ESLint flat config
next.config.ts          # Next.js configuration (empty — ready to customize)
postcss.config.mjs      # PostCSS config (Tailwind plugin)
tsconfig.json           # TypeScript config (strict, bundler resolution, @/* path alias)
package.json            # Dependencies & scripts
```

## Key Features

- **App Router** — File-based routing via the `app/` directory
- **Dark Mode** — Automatic light/dark theme via `prefers-color-scheme` CSS media query and CSS variables
- **Geist Font Family** — Sans and mono variants loaded from Google Fonts via `next/font`
- **Path Aliases** — `@/*` mapped to the project root for clean imports
- **Modern Config** — ESLint v9 flat config, Tailwind v4 with `@tailwindcss/postcss`, TypeScript strict mode

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server (http://localhost:3000) |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Current State

The project is at its initial scaffold state — the home page (`app/page.tsx`) displays the default Next.js landing page with links to Vercel templates, the Next.js learning center, and documentation. The `next.config.ts` is empty, ready for customization.
