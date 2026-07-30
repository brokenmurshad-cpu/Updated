# Muhammad Husnain — Cinematic Developer Portfolio

Awwwards-inspired cinematic portfolio for **Muhammad Husnain**  
Full Stack Developer · AI Engineer · SaaS Builder · Dubai, UAE

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Framer Motion utilities
- Lucide React

## Features

- Scribble preloader transition
- Fullscreen hamburger menu with curved reveal
- Editorial hero with overlapping video, animated wordmark, and handwritten signature
- Custom cursor + purple click ripples
- Magnetic buttons, tilt cards, marquee roles
- Full-screen GSAP sticky service card stack
- Five cinematic project cases plus a 13-project cursor-preview index
- Sticky experience timeline with progress line
- Testimonials marquee
- Premium contact section
- Floating WhatsApp CTA
- SEO metadata + responsive layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Upload Note

Media assets are optimized so the full repository stays well under GitHub’s practical upload limits:

- Hero video compressed for web (`public/video/hero-bg.mp4`)
- Profile + project images optimized as progressive JPEGs

If you later add a larger original video, use [Git LFS](https://git-lfs.com) or host the video on CDN/Vercel Blob and keep only a lightweight web version in the repo.

## Production

```bash
npm run build
npm start
```

## Project Structure

```text
src/
  app/                 # App router entry + global styles
  components/
    layout/            # Header, Preloader, Cursor, Footer...
    sections/          # Hero, About, Services, Projects...
    ui/                # Buttons, Magnetic, Reveal, Marquee...
    design/            # Decorative elements
  data/content.ts      # All editable site content
  lib/                 # GSAP helpers + utilities
public/
  images/              # Profile + project assets
  video/hero-bg.mp4    # Hero background video
```

## Content

Edit branding, projects, experience, and social links in:

`src/data/content.ts`

## Contact

- WhatsApp: +971 50 5677 023
- LinkedIn: https://www.linkedin.com/in/muhammad-husnain-4556233a1
- GitHub: https://www.github.com/Mhusnain0027
- Email: Mhusnain0027@outlook.com
