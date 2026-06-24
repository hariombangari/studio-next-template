# Studio Next Template

A starter template for building web applications with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Overview

This repository provides a minimal, ready-to-use Next.js project scaffolded with modern defaults. It serves as a clean starting point for building production-grade web applications.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.4 | React framework (App Router) |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first CSS |
| [ESLint](https://eslint.org/) | ^9 | Linting (with Next.js core-web-vitals & TypeScript rules) |

## Project Structure

```
.
├── app/
│   ├── favicon.ico       # App favicon
│   ├── globals.css        # Global styles & Tailwind import
│   ├── layout.tsx         # Root layout (Geist font, metadata)
│   └── page.tsx           # Home page
├── public/                # Static assets (SVGs: Next.js, Vercel, etc.)
├── eslint.config.mjs      # ESLint flat config
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS config (Tailwind plugin)
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies & scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- npm (comes with Node.js)

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start development server with hot reload |
| `build` | `npm run build` | Create optimized production build |
| `start` | `npm run start` | Serve the production build |
| `lint` | `npm run lint` | Run ESLint checks |

## Features

- **App Router** — Uses the Next.js App Router architecture
- **Geist Fonts** — Pre-configured with [Geist Sans & Geist Mono](https://vercel.com/font) via `next/font`
- **Dark Mode Support** — CSS custom properties adapt to `prefers-color-scheme`
- **Tailwind CSS v4** — Integrated via PostCSS with the `@tailwindcss/postcss` plugin
- **TypeScript Strict Mode** — Enabled for maximum type safety
- **ESLint 9 Flat Config** — Next.js core-web-vitals and TypeScript rules pre-configured

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

Private project.
