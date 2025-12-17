# 1devops.io

[![Deploy to Production](https://github.com/googlesky/1devops.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/deploy.yml)

> **Professional landing page** for Lê Phương Hiếu - Senior DevOps/SRE Engineer

Built with Next.js 15, React 19, and TypeScript. Deployed to GitHub Pages with static export.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** CSS Modules + Global CSS
- **Deployment:** GitHub Pages (Static Export)

## Features

### Design
- Clean, professional light theme
- Smooth animations and transitions
- Interactive 3D card effect
- Typing animation effect
- Responsive design for all devices

### Technical
- Server-side rendering with static export
- Optimized images with next/image
- Google Fonts (Inter) via next/font
- Accessible markup (ARIA, semantic HTML)
- SEO optimized with structured data

## Project Structure

```
1devops.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main page component
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Header.tsx      # Navigation header
│       ├── Hero.tsx        # Hero section with typing effect
│       ├── TechStack.tsx   # Technology categories
│       ├── Services.tsx    # Service offerings
│       ├── Portfolio.tsx   # Project highlights
│       ├── Process.tsx     # Engagement timeline
│       ├── Testimonials.tsx # Client feedback
│       ├── CTA.tsx         # Call to action
│       ├── Footer.tsx      # Footer with contact
│       └── index.ts        # Component exports
├── public/
│   ├── assets/             # Images, CSS, JS, resume
│   ├── CNAME              # Custom domain
│   └── site.webmanifest   # PWA manifest
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Deployment

The site is automatically deployed to GitHub Pages on push to `main` branch via GitHub Actions.

### Manual Deployment

```bash
# Build static export
npm run build

# Output is in ./out directory
```

## Configuration

### Next.js Config (`next.config.ts`)

```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Static export for GitHub Pages
  trailingSlash: true,     // Required for GitHub Pages
  images: {
    unoptimized: true,     // Required for static export
  },
}
```

### GitHub Actions

The deployment workflow:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Build Next.js (`npm run build`)
5. Upload `./out` directory
6. Deploy to GitHub Pages

## Contact

**Lê Phương Hiếu** - Senior DevOps/SRE
- Website: https://1devops.io
- Email: hieulp@1devops.io
- LinkedIn: https://linkedin.com/in/googlesky
- Location: Ho Chi Minh City, Vietnam

---

© 2025 Lê Phương Hiếu | **1devops.io**
