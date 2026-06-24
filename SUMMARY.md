# Repository Summary

## Overview

**studio-next-template** is a starter/template project built with [Next.js](https://nextjs.org/) (v16.1.4) using the App Router, [React](https://react.dev/) 19, [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/) v4. It was scaffolded with `create-next-app` and provides a minimal foundation for building modern web applications.

## Tech Stack

| Technology     | Version | Purpose                        |
| -------------- | ------- | ------------------------------ |
| Next.js        | 16.1.4  | React framework (App Router)   |
| React          | 19.2.3  | UI library                     |
| TypeScript     | ^5      | Type-safe JavaScript           |
| Tailwind CSS   | ^4      | Utility-first CSS framework    |
| PostCSS        | —       | CSS processing (via `@tailwindcss/postcss`) |
| ESLint         | ^9      | Code linting (with `eslint-config-next`)    |

## Project Structure

```
src/
├── app/
│   ├── favicon.ico        # App favicon
│   ├── globals.css         # Global styles (Tailwind + CSS variables for theming)
│   ├── layout.tsx          # Root layout (Geist font family, dark mode support)
│   └── page.tsx            # Home page (landing page with Next.js branding)
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs       # ESLint configuration (core-web-vitals + TypeScript)
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration (Tailwind CSS plugin)
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── .gitignore              # Git ignore rules
```

## Key Features

- **App Router**: Uses the Next.js App Router (`app/` directory) for file-based routing.
- **Dark Mode**: Built-in dark mode support via CSS `prefers-color-scheme` media query and Tailwind dark variant classes.
- **Custom Fonts**: Uses [Geist](https://vercel.com/font) sans and mono fonts loaded via `next/font/google`.
- **Path Aliases**: TypeScript path alias `@/*` maps to the project root for cleaner imports.

## Available Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the development server         |
| `npm run build`  | Create a production build            |
| `npm run start`  | Start the production server          |
| `npm run lint`   | Run ESLint                           |

## Getting Started

```bash
cd src
npm install
npm run dev
```

The development server will start at [http://localhost:3000](http://localhost:3000).
