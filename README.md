# Studio Next Template

A starter template for building web applications with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.4 | React framework with App Router |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first CSS framework |
| [ESLint](https://eslint.org/) | ^9 | Code linting (with Next.js Core Web Vitals & TypeScript rules) |

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with Geist font configuration
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles & Tailwind imports
│   └── favicon.ico      # App favicon
├── public/              # Static assets (SVGs: Next.js, Vercel, etc.)
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── postcss.config.mjs   # PostCSS config (Tailwind CSS plugin)
├── eslint.config.mjs    # ESLint flat config
└── package.json         # Dependencies and scripts
```

## Features

- **App Router** — Uses the Next.js App Router (`app/` directory) for file-based routing
- **Geist Fonts** — Pre-configured with [Geist Sans & Geist Mono](https://vercel.com/font) via `next/font/google`
- **Dark Mode Support** — CSS custom properties with `prefers-color-scheme` media query for automatic light/dark theming
- **Tailwind CSS v4** — Integrated via PostCSS with inline theme configuration
- **TypeScript Strict Mode** — Strict type checking enabled out of the box

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learning Center](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/new)
