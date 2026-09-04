# KK Remote Solutions

A premium, modern, dark-first website for KK Remote Solutions, an IT repair and consulting business based in Sri Lanka.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Anton (Headings) & Inter (Body) via `next/font`

## ✨ Features

- **Premium Dark Aesthetic:** Near-black (`#0D0D0F`) backgrounds with charcoal elevated surfaces.
- **Metallic Chrome Accents:** Custom CSS gradients simulating brushed metal for high-impact text and CTAs.
- **Smooth Animations:** Staggered list reveals, floating illustration elements, and scroll-triggered count-ups.
- **Light/Dark Mode:** Flawless mode switching persisting to `localStorage` with a flash-prevention script.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewports.

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app/` - Next.js App Router, global styles, and main page composition.
- `src/components/ui/` - Reusable UI primitives (buttons, cards, badges, section headings).
- `src/components/sections/` - Major page sections (Hero, Services, Stats Bar, etc.).
- `src/components/icons/` - Custom SVG icons (e.g., Sparkle).
- `src/contexts/` - React contexts (e.g., ThemeContext for light/dark mode).
- `src/lib/` - Utility functions like `cn()` for Tailwind class merging.
- `src/types/` - Shared TypeScript interfaces.
