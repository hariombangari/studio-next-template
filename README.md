# Studio Next Template

A starter template for building web applications with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Overview

This repository provides a minimal, modern Next.js project scaffold generated via `create-next-app`. It serves as a clean starting point for building production-ready web applications with the latest frontend technologies.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.4 | React framework (App Router) |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first CSS framework |
| [ESLint](https://eslint.org/) | ^9 | Code linting (with Next.js Core Web Vitals & TypeScript rules) |

## Project Structure

```
.
├── app/
│   ├── favicon.ico        # App favicon
│   ├── globals.css         # Global styles (Tailwind imports + CSS variables)
│   ├── layout.tsx          # Root layout (Geist font family, metadata)
│   └── page.tsx            # Home page
├── public/                 # Static assets (SVG icons)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── eslint.config.mjs       # ESLint flat config
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies & scripts
├── postcss.config.mjs      # PostCSS config (Tailwind plugin)
└── tsconfig.json           # TypeScript compiler options
```

## Getting Started

### Prerequisites

- **Node.js** (v20 or later recommended)
- **npm** (comes with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Next.js development server. Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
```

Creates an optimized production build.

### Start

```bash
npm start
```

Runs the production build locally.

### Lint

```bash
npm run lint
```

Runs ESLint with Next.js Core Web Vitals and TypeScript rules.

## Features

- **App Router** — Uses Next.js App Router (`app/` directory) for file-based routing
- **Dark Mode Support** — CSS variables adapt to light/dark color schemes via `prefers-color-scheme`
- **Geist Font Family** — Ships with [Geist](https://vercel.com/font) sans and mono fonts from Google Fonts
- **Modern Tooling** — Tailwind CSS v4 with PostCSS, ESLint v9 flat config, TypeScript with strict mode
- **Path Aliases** — `@/*` alias configured in `tsconfig.json` for clean imports

## License

Private project — not published to npm.
