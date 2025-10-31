# 1devops.io

[![Deploy to GitHub Pages](https://github.com/googlesky/1devops.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/deploy.yml)
[![CI - Quality Checks](https://github.com/googlesky/1devops.io/actions/workflows/ci.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/ci.yml)
[![Security Scan](https://github.com/googlesky/1devops.io/actions/workflows/security.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/security.yml)
[![Lighthouse Performance Audit](https://github.com/googlesky/1devops.io/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/lighthouse.yml)

Hacker-style landing page for Lê Phương Hiếu - Senior DevOps/SRE

## Features

- Matrix rain animation background
- Terminal-style design
- Glitch effects
- Responsive layout
- Scanline CRT effect
- Professional experience showcase
- Skills and achievements display

## Technologies

- Pure HTML5
- CSS3 with animations
- Vanilla JavaScript
- Canvas API for matrix effect

## Live Site

🚀 https://1devops.io

## CI/CD Pipeline

This project uses GitHub Actions for automated deployment and quality assurance:

### Workflows

#### 🚀 Deploy to GitHub Pages (`deploy.yml`)
- **Trigger:** Push to main branch or manual dispatch
- **Purpose:** Automated deployment to GitHub Pages
- **Steps:** Build artifacts → Deploy to Pages

#### ✅ CI - Quality Checks (`ci.yml`)
- **Trigger:** Push/PR to main branch
- **Jobs:**
  - **Validate:** HTML structure, CNAME, required files
  - **Performance:** Bundle size analysis, optimization checks
  - **Lint:** Code style, indentation, line endings

#### 🔒 Security Scan (`security.yml`)
- **Trigger:** Push/PR/Daily schedule (2 AM UTC)
- **Checks:**
  - Secret scanning
  - External dependencies analysis
  - CSP headers validation
  - HTTPS enforcement
  - Subresource Integrity (SRI)
  - Security headers recommendations

#### 📊 Lighthouse Performance Audit (`lighthouse.yml`)
- **Trigger:** Push/PR/Weekly schedule (Monday 00:00 UTC)
- **Purpose:** Performance, accessibility, SEO, and best practices audit
- **Output:** Detailed Lighthouse reports with scores

### Quick Start

```bash
# Clone repository
git clone git@github.com:googlesky/1devops.io.git
cd 1devops.io

# Open locally
open index.html

# Or serve with Python
python3 -m http.server 8000
```

### Development

The site is built with pure HTML/CSS/JavaScript - no build step required!

- Edit `index.html` for content changes
- Push to main branch for automatic deployment
- GitHub Actions handles the rest

### Performance

- 📦 Single HTML file (self-contained)
- ⚡ No external dependencies (except Google Fonts)
- 🎨 CSS animations with GPU acceleration
- 📱 Fully responsive design
- 🚀 Optimized for Core Web Vitals

---

© 2025 Lê Phương Hiếu | Built with ❤️ and DevOps best practices
