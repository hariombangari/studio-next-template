# Repository Summary — `studio-next-template`

## Overview

This is a **Next.js 16** starter/template application bootstrapped with `create-next-app`. It serves as a minimal landing page scaffold with modern defaults, intended to be used as a starting point for building Next.js projects via Vercel's Studio workflow.

**Repository:** [hariombangari/studio-next-template](https://github.com/hariombangari/studio-next-template)

## Tech Stack

| Layer        | Technology                   | Version  |
| ------------ | ---------------------------- | -------- |
| Framework    | Next.js (App Router)         | 16.1.4   |
| UI Library   | React                        | 19.2.3   |
| Language     | TypeScript                   | ^5       |
| Styling      | Tailwind CSS v4 (via PostCSS)| ^4       |
| Linting      | ESLint 9 (flat config)       | ^9       |
| Fonts        | Geist Sans & Geist Mono (Google Fonts via `next/font`) | — |

## Project Structure

```
.
├── app/
│   ├── favicon.ico          # App favicon
│   ├── globals.css           # Global styles (Tailwind import + CSS custom properties)
│   ├── layout.tsx            # Root layout — sets HTML lang, loads Geist fonts, applies antialiased styling
│   └── page.tsx              # Home page — landing page with Next.js branding, deploy & docs links
├── public/
│   ├── file.svg              # Static SVG assets
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs         # ESLint flat config — extends next/core-web-vitals & next/typescript
├── next.config.ts            # Next.js configuration (empty/default)
├── package.json              # Project manifest & scripts
├── postcss.config.mjs        # PostCSS config — Tailwind CSS v4 plugin
├── tsconfig.json             # TypeScript config — bundler module resolution, path alias @/*
└── README.md                 # Placeholder README
```

## Key Configuration Details

### App Router (Next.js)
The project uses the **App Router** (`app/` directory) rather than the legacy Pages Router. The single route (`/`) renders a landing page with:
- The Next.js logo
- Instructional text directing developers to edit `page.tsx`
- Links to Vercel templates, Next.js learning resources, deploy, and documentation

### Styling
- **Tailwind CSS v4** is integrated via `@tailwindcss/postcss` PostCSS plugin.
- CSS custom properties (`--background`, `--foreground`) define light/dark theme colors.
- Dark mode is handled via `prefers-color-scheme` media query.
- Geist font family variables (`--font-geist-sans`, `--font-geist-mono`) are mapped to Tailwind's `--font-sans` and `--font-mono` tokens.

### TypeScript
- Strict mode enabled.
- Bundler-style module resolution.
- Path alias `@/*` maps to the project root for clean imports.
- Targets ES2017.

### ESLint
- Uses ESLint 9 flat config format.
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

## Available Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Start the development server         |
| `npm run build`| Build the production application     |
| `npm run start`| Start the production server          |
| `npm run lint` | Run ESLint                           |

## Current State

The repository is in its initial template state with a single commit (`"Test Commit From Studio"`). No custom application logic, additional routes, API routes, or third-party integrations have been added beyond the default `create-next-app` scaffold.
