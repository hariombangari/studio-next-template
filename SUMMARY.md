# Repository Summary

## Project Name

**studio-next-template** (v0.1.0)

## Overview

This is a starter template for a [Next.js](https://nextjs.org/) web application, bootstrapped with `create-next-app`. It provides a minimal, production-ready foundation for building modern React applications with server-side rendering and static site generation.

## Tech Stack

| Technology   | Version | Purpose                        |
| ------------ | ------- | ------------------------------ |
| Next.js      | 16.1.4  | React framework (App Router)   |
| React        | 19.2.3  | UI library                     |
| TypeScript   | ^5      | Type-safe JavaScript           |
| Tailwind CSS | ^4      | Utility-first CSS framework    |
| PostCSS      | —       | CSS processing (via Tailwind)  |
| ESLint       | ^9      | Code linting                   |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with Geist font family & global styles
│   ├── page.tsx         # Home page (landing page with Next.js branding)
│   ├── globals.css      # Global CSS with Tailwind imports & CSS custom properties
│   └── favicon.ico      # Site favicon
├── public/              # Static assets (SVG logos for Next.js, Vercel, etc.)
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── postcss.config.mjs   # PostCSS configuration (Tailwind plugin)
├── eslint.config.mjs    # ESLint configuration
├── package.json         # Dependencies & scripts
└── .gitignore           # Git ignore rules
```

## Key Features

- **App Router** — Uses Next.js App Router (`app/` directory) for file-system based routing.
- **TypeScript** — Fully typed with strict mode enabled.
- **Tailwind CSS v4** — Utility-first styling with dark mode support via `prefers-color-scheme`.
- **Geist Font Family** — Uses Geist Sans and Geist Mono fonts loaded via `next/font/google`.
- **Dark Mode** — Built-in light/dark theme support using CSS custom properties.
- **Path Aliases** — `@/*` alias configured for clean imports from the project root.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint for code quality checks   |

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.
4. Edit `app/page.tsx` to start building your application.
