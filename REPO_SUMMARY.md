# Studio Next Template

A starter/template repository for building web applications with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Overview

| Detail            | Value                                                      |
| ----------------- | ---------------------------------------------------------- |
| **Project Name**  | `studio-next-template`                                     |
| **Version**       | 0.1.0 (private)                                            |
| **Framework**     | [Next.js](https://nextjs.org/) 16.1.4 (App Router)        |
| **UI Library**    | React 19.2.3 / ReactDOM 19.2.3                            |
| **Language**      | TypeScript 5.x                                             |
| **Styling**       | Tailwind CSS 4.x (via `@tailwindcss/postcss`)              |
| **Linting**       | ESLint 9.x with `eslint-config-next` (core-web-vitals + TS)|
| **Repository**    | <https://github.com/hariombangari/studio-next-template>    |

## Project Structure

```
.
├── app/
│   ├── favicon.ico          # App favicon
│   ├── globals.css           # Global styles (Tailwind import + CSS custom properties)
│   ├── layout.tsx            # Root layout — sets up Geist fonts and metadata
│   └── page.tsx              # Home page — default Next.js welcome page
├── public/
│   ├── file.svg              # Static SVG assets
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── eslint.config.mjs         # ESLint flat config (core-web-vitals + TypeScript rules)
├── next.config.ts            # Next.js configuration (currently default/empty)
├── package.json              # Dependencies and scripts
├── package-lock.json         # Lockfile
├── postcss.config.mjs        # PostCSS config — enables Tailwind CSS plugin
├── tsconfig.json             # TypeScript configuration (bundler module resolution)
└── README.md                 # Basic README
```

## Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the Next.js development server |
| `npm run build`   | Build the application for production |
| `npm run start`   | Start the production server        |
| `npm run lint`    | Run ESLint across the project      |

## Tech Stack Details

- **Next.js 16 (App Router)** — Uses the `app/` directory convention with server components by default.
- **React 19** — Latest React with support for server components, actions, and concurrent features.
- **Tailwind CSS 4** — Configured via PostCSS (`@tailwindcss/postcss`). Global styles in `app/globals.css` define light/dark mode CSS custom properties.
- **TypeScript** — Strict mode enabled, bundler module resolution, path alias `@/*` mapped to the project root.
- **Fonts** — [Geist](https://vercel.com/font) sans and mono fonts loaded via `next/font/google`.
- **Dark Mode** — Supported via `prefers-color-scheme` media query in `globals.css`.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Notes

- This is a **template/starter** project scaffolded with `create-next-app`. The home page (`app/page.tsx`) contains the default welcome content and can be replaced with your own UI.
- The Next.js config (`next.config.ts`) is currently empty — add any custom configuration there as needed.
- The project is marked as **private** in `package.json`.
