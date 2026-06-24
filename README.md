# Studio Next Template

A starter template for building web applications with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

| Technology    | Version | Purpose                        |
| ------------- | ------- | ------------------------------ |
| Next.js       | 16.1.4  | React framework (App Router)   |
| React         | 19.2.3  | UI library                     |
| TypeScript    | 5.x     | Type-safe JavaScript           |
| Tailwind CSS  | 4.x     | Utility-first CSS framework    |
| ESLint        | 9.x     | Code linting & quality         |
| PostCSS       | —       | CSS processing (via `@tailwindcss/postcss`) |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with Geist font configuration
│   ├── page.tsx         # Home page (landing / starter page)
│   ├── globals.css      # Global styles & Tailwind imports
│   └── favicon.ico      # App favicon
├── public/              # Static assets (SVGs: Next.js, Vercel, etc.)
├── eslint.config.mjs    # ESLint config (core-web-vitals + TypeScript)
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS config (Tailwind CSS plugin)
├── tsconfig.json        # TypeScript compiler options
└── package.json         # Dependencies & scripts
```

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (included with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Features

- **App Router** — Uses the Next.js App Router (`app/` directory) for file-based routing.
- **Geist Fonts** — Pre-configured with [Geist Sans and Geist Mono](https://vercel.com/font) via `next/font/google`.
- **Dark Mode Support** — CSS custom properties adapt to `prefers-color-scheme: dark` out of the box.
- **Tailwind CSS v4** — Integrated through PostCSS with the `@tailwindcss/postcss` plugin.
- **Strict TypeScript** — `strict: true` with bundler module resolution.
- **ESLint** — Configured with `eslint-config-next` (core-web-vitals + TypeScript rules).

## License

Private — see `package.json`.
