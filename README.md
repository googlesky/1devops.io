# 1devops.io

[![Deploy to Production](https://github.com/googlesky/1devops.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/deploy.yml)
[![CI](https://github.com/googlesky/1devops.io/actions/workflows/ci.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/ci.yml)
[![Security](https://github.com/googlesky/1devops.io/actions/workflows/security.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/security.yml)
[![Performance](https://github.com/googlesky/1devops.io/actions/workflows/performance-monitoring.yml/badge.svg)](https://github.com/googlesky/1devops.io/actions/workflows/performance-monitoring.yml)

> **Hacker-style landing page** for Lê Phương Hiếu - Senior DevOps/SRE Engineer

Enterprise-grade static site with comprehensive CI/CD pipelines, security scanning, performance monitoring, and automated quality assurance.

## 🚀 Features

### Design
- 🎨 **Matrix Rain Animation** - Authentic hacker aesthetic with falling code
- 💻 **Terminal Interface** - Command-line inspired design
- ⚡ **Glitch Effects** - Dynamic visual effects
- 📱 **Fully Responsive** - Optimized for all devices
- 🎭 **CRT Scanline Effect** - Retro monitor simulation

### Technical
- ⚡ **Single-file Architecture** - No build process required
- 🗜️ **Optimized Delivery** - Minified and compressed in production
- 🎯 **Perfect Lighthouse Scores** - 90+ on all metrics
- 🔒 **Security Hardened** - Multiple security scans
- 📊 **Performance Monitored** - Continuous tracking

## 🏗️ Architecture

```
1devops.io/
├── index.html              # Main landing page (self-contained)
├── CNAME                   # Custom domain configuration
├── .nojekyll              # GitHub Pages optimization
├── .github/
│   ├── workflows/         # CI/CD Pipelines
│   │   ├── deploy.yml                   # 🚀 Production deployment
│   │   ├── ci.yml                       # ✅ Quality checks
│   │   ├── security.yml                 # 🔒 Security scanning
│   │   ├── performance-monitoring.yml   # 📊 Performance tracking
│   │   ├── pr-automation.yml            # 🤖 PR automation
│   │   ├── dependency-update.yml        # 📦 Dependency management
│   │   └── maintenance.yml              # 🧹 Repo maintenance
│   └── labeler.yml        # Auto-labeling configuration
├── .lighthouserc.json     # Lighthouse CI configuration
└── .htmlvalidate.json     # HTML validation rules
```

## 🔄 CI/CD Pipeline

### 🚀 Deployment Pipeline (`deploy.yml`)

**Multi-stage production deployment with optimization and validation**

```
┌─────────────────────────────────────────────────────────┐
│ Pre-Deploy Checks → Optimize → Security → Build → Deploy│
└─────────────────────────────────────────────────────────┘
```

**Stages:**
1. **Pre-deployment Validation**
   - HTML structure verification
   - Performance budget checks (500KB limit)
   - Version generation

2. **Asset Optimization**
   - HTML minification (removes whitespace, comments)
   - CSS minification (inline styles)
   - JavaScript minification (inline scripts)
   - Gzip compression (9 level)
   - Size reduction reporting

3. **Security Pre-flight**
   - TruffleHog secret scanning
   - Security header validation

4. **Build & Deploy**
   - GitHub Pages artifact creation
   - Deployment metadata injection
   - Production deployment

5. **Post-deployment Verification**
   - Health checks with exponential backoff
   - Performance quick check
   - Deployment notification

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

### ✅ Continuous Integration (`ci.yml`)

**Comprehensive quality assurance with 7 parallel jobs**

| Job | Checks |
|-----|--------|
| **Code Quality** | HTMLHint, StyleLint, ESLint, Code metrics |
| **W3C Validation** | HTML5 validation, CSS validation |
| **Accessibility** | Pa11y-CI, WCAG 2.0 AA compliance |
| **Performance** | Bundle size analysis, Performance budget |
| **Security** | Secret patterns, eval() detection, XSS vectors |
| **Links** | Internal/external link validation |
| **Compatibility** | Modern feature detection, Browser compatibility |

**Performance Budgets:**
- Total bundle: < 512KB
- Individual files tracked
- Historical size tracking

### 🔒 Advanced Security (`security.yml`)

**Enterprise-grade security scanning with SAST, secrets, and supply chain**

**Security Layers:**

1. **Static Analysis (SAST)**
   - **CodeQL:** Security vulnerabilities and code quality
   - **Semgrep:** OWASP Top 10, security patterns, secrets
   - **Trivy:** Filesystem and dependency scanning

2. **Secret Detection**
   - **Gitleaks:** Git history scanning
   - **TruffleHog:** Verified secret detection

3. **Supply Chain Security**
   - **OpenSSF Scorecard:** Repository security posture
   - **SBOM Generation:** Software Bill of Materials (CycloneDX)
   - **Dependency Review:** License and vulnerability checks

4. **Application Security**
   - **OWASP ZAP:** Dynamic application security testing
   - **Security Headers:** Best practices validation

**Results Integration:**
- SARIF uploads to GitHub Security tab
- Automated security summaries
- Daily scheduled scans (2 AM UTC)

### 📊 Performance Monitoring (`performance-monitoring.yml`)

**Continuous performance tracking with Core Web Vitals**

**Metrics Tracked:**

| Metric | Target | Frequency |
|--------|--------|-----------|
| Lighthouse Score | > 90 | Every push + 6h |
| LCP (Largest Contentful Paint) | < 2.5s | Continuous |
| FID (First Input Delay) | < 100ms | Continuous |
| CLS (Cumulative Layout Shift) | < 0.1 | Continuous |
| Bundle Size | < 512KB | Every commit |
| Compression Ratio | Track Gzip/Brotli | Weekly |

**Analysis:**
- Lighthouse CI with public storage
- WebPageTest integration
- Bundle size history tracking
- Compression analysis (Gzip, Brotli)

### 🤖 PR Automation (`pr-automation.yml`)

**Intelligent pull request management and review assistance**

**Features:**
- **Auto-labeling:** File type, size (XS/S/M/L/XL)
- **Semantic PR titles:** Conventional commits validation
- **PR validation:** Description quality checks
- **Preview deployments:** Local preview instructions
- **AI Code Review:** Automated change analysis
  - Risk assessment (Low/Medium/High)
  - Complexity metrics
  - Recommendations
- **PR Metrics:** Change statistics and insights

### 📦 Dependency Management (`dependency-update.yml`)

**Automated dependency tracking and updates**

- CDN resource version monitoring
- Google Fonts update checks
- Weekly update reports
- Renovate bot integration ready

### 🧹 Repository Maintenance (`maintenance.yml`)

**Automated housekeeping for repository health**

**Jobs:**
- **Stale Management:** Close inactive issues/PRs (60 day + 7 day)
- **Artifact Cleanup:** Remove old artifacts (30 days, keep recent 5)
- **Cache Management:** Automatic cache lifecycle
- **Security Audit:** Weekly security posture review
- **Link Checking:** External link health verification
- **Repository Metrics:** Commit history, contributors, age tracking

## 🎯 Quick Start

### Development

```bash
# Clone repository
git clone git@github.com:googlesky/1devops.io.git
cd 1devops.io

# Open in browser
open index.html

# Or serve locally
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Local Testing

```bash
# Test HTML validation
npm install -g htmlhint
htmlhint index.html

# Test accessibility
npm install -g pa11y-ci
python3 -m http.server 8080 &
pa11y-ci http://localhost:8080

# Check bundle size
ls -lh index.html

# Test compression
gzip -c -9 index.html | wc -c
```

## 📋 Workflow Triggers

| Workflow | Push | PR | Schedule | Manual |
|----------|------|----|-----------| -------|
| Deploy | ✅ main | - | - | ✅ |
| CI | ✅ main/develop | ✅ | - | ✅ |
| Security | ✅ main | ✅ | Daily 2 AM | ✅ |
| Performance | ✅ main | ✅ | Every 6h | ✅ |
| PR Automation | - | ✅ | - | - |
| Dependencies | - | - | Weekly Mon | ✅ |
| Maintenance | - | - | Weekly Sun | ✅ |

## 🔐 Security

### Implemented Protections

- ✅ **No eval()** - XSS prevention
- ✅ **No inline handlers** - CSP compliance
- ✅ **HTTPS only** - Secure transport
- ✅ **Secret scanning** - Gitleaks + TruffleHog
- ✅ **SAST scanning** - CodeQL + Semgrep
- ✅ **Dependency scanning** - Trivy
- ✅ **SBOM generation** - Software Bill of Materials
- ✅ **Supply chain** - OpenSSF Scorecard

### Security Reports

- View in GitHub Security tab
- SARIF format for integration
- Automated daily scans
- PR security checks

## 📈 Performance

### Current Metrics

- **Lighthouse Score:** 95+ (all categories)
- **Bundle Size:** ~25KB (original) → ~18KB (minified) → ~6KB (gzipped)
- **First Contentful Paint:** < 1s
- **Largest Contentful Paint:** < 2s
- **Total Blocking Time:** < 100ms
- **Cumulative Layout Shift:** < 0.05

### Optimizations

- ⚡ Single HTTP request
- 🗜️ Gzip/Brotli compression
- 🎨 GPU-accelerated animations
- 📦 Minified production builds
- 🚀 CDN delivery (GitHub Pages)

## 🛠️ Technologies

### Frontend
- HTML5 (semantic markup)
- CSS3 (animations, flexbox, grid)
- Vanilla JavaScript (ES6+)
- Canvas API (Matrix effect)

### CI/CD & DevOps
- **GitHub Actions** - All automation
- **GitHub Pages** - Hosting
- **Lighthouse CI** - Performance testing
- **CodeQL** - Security analysis
- **Semgrep** - SAST
- **Trivy** - Vulnerability scanning
- **OWASP ZAP** - DAST
- **Pa11y** - Accessibility testing

### Quality Tools
- HTMLHint
- html5validator
- ESLint
- Gitleaks
- TruffleHog

## 📊 Monitoring

### Available Metrics

- **Performance:** Lighthouse CI reports
- **Security:** GitHub Security tab
- **Uptime:** Health checks in deployment
- **Bundle Size:** Historical tracking
- **Quality:** CI summary reports

### Dashboards

- Actions tab: Workflow runs
- Security tab: Vulnerability reports
- Insights: Repository metrics
- Artifacts: Lighthouse reports, SBOM

## 🤝 Contributing

### Pull Request Process

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes with conventional commits
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation
   - `style:` formatting
   - `refactor:` code restructuring
   - `perf:` performance improvement
   - `test:` testing
   - `chore:` maintenance
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

### PR Requirements

- ✅ Semantic commit title
- ✅ Description (minimum 20 characters)
- ✅ All CI checks pass
- ✅ Security scan pass
- ✅ Performance budget met
- ✅ Accessibility compliance

## 📝 License

This project is a personal portfolio site.

## 📧 Contact

**Lê Phương Hiếu** - Senior DevOps/SRE
- 🌐 Website: https://1devops.io
- 📧 Email: hieulp@1devops.io
- 💼 LinkedIn: https://linkedin.com/in/googlesky
- 📍 Location: Ho Chi Minh City, Vietnam

## 🏆 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/googlesky/1devops.io)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/googlesky/1devops.io)
![GitHub repo size](https://img.shields.io/github/repo-size/googlesky/1devops.io)

---

<div align="center">

**Built with 🔥 by a DevOps Engineer for DevOps Engineers**

*Featuring enterprise-grade CI/CD, security scanning, performance monitoring, and automated quality assurance*

© 2025 Lê Phương Hiếu | **1devops.io**

</div>
