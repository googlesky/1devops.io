# AGENTS.md — AI‑Friendly Repository Guide

> Drop‑in replacement or append to your existing `AGENTS.md`. Optimized for code‑generating AIs to work reliably on this Jekyll 4.4.1 site and related automation.

## 0) Mission & Constraints

**Mission:** Maintain and evolve 1devops.io as a professional DevOps portfolio + knowledge hub. Current stack is **Jekyll 4.4.1**. Content lives in Markdown. We prefer incremental PRs with tests and preview links.

**Hard constraints (must not break):**

* Keep canonical URLs stable; avoid changing slugs of published posts.
* Preserve the existing feeds/sitemaps if present (`feed.xml`, `sitemap.xml`).
* No secrets in repo. Use placeholders and docs for local `.env`.
* Do not remove existing pages unless issue/PR explicitly requests it.

---

## 1) Repository Structure

* `_config.yml` — global config
* `Gemfile` / `Gemfile.lock` — gem definitions
* `_layouts/` — layouts; `_includes/` — partials
* `_posts/` — blog posts (`YYYY-MM-DD-title.md`)
* `assets/` — `css/`, `js/`, `images/`, PDFs (resume)
* Top‑level pages map to nav (`about.md`, `profile.md`, `support.md`)
* Operational docs: `SITE_BUGS_REPORT.md`, `SITE_FIXES_SUMMARY.md`, `vulnerabilities.md`
* **New (proposed):**

  * `scripts/` — utilities (ingest, lint, checks)
  * `.github/workflows/` — CI/CD
  * `.github/PULL_REQUEST_TEMPLATE.md` — PR template
  * `Makefile` — task runner

---

## 2) Local Development & Build

### Quickstart

```bash
# Ruby & Bundler
ruby -v          # >= 3.1 recommended
bundler -v       # >= 2.4
bundle config set path vendor/bundle
bundle install

# Dev server with live reload
bundle exec jekyll serve --host 0.0.0.0 --livereload
# Build (production)
JEKYLL_ENV=production bundle exec jekyll build
# Doctor (sanity)
bundle exec jekyll doctor
```

### Make targets (add these if missing)

```makefile
.PHONY: bootstrap serve build check lint
bootstrap:
	bundle install --path vendor/bundle
serve:
	bundle exec jekyll serve --host 0.0.0.0 --livereload
build:
	JEKYLL_ENV=production bundle exec jekyll build
lint:
	npx markdownlint "**/*.md" || true
check: build
	bundle exec jekyll doctor
	bash scripts/htmlproofer.sh
```

### HTML link checks

Create `scripts/htmlproofer.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
if ! command -v htmlproofer >/dev/null; then
  gem install html-proofer --no-document
fi
htmlproofer ./_site \
  --assume-extension \
  --check-html \
  --url-ignore ".*localhost.*,.*127.0.0.1.*" \
  --http-status-ignore 429
```

---

## 3) Content Model & Front Matter

### Posts (`_posts/YYYY-MM-DD-title.md`)

```yaml
---
layout: post
title: "Post Title"
description: "1–2 sentence excerpt"
category: devops
# optional
image: /assets/images/cover.png
canonical_url: https://1devops.io/...
tags: [aws, kubernetes]
updated: 2025-10-03
---
```

### Pages (top‑level `*.md`)

```yaml
---
layout: page
title: "About"
description: "Profile and capabilities"
permalink: /about/
---
```

### Link‑posts (news/link roundup)

Place under `_posts/` or make a collection `_links/` (recommended).

Add to `_config.yml`:

```yaml
collections:
  links:
    output: true
    permalink: /links/:name/
```

Then create `/_links/slug.md`:

```yaml
---
layout: link
title: "Interesting ARM64 Cost Wins"
source: "Hacker News"
external_url: "https://news.ycombinator.com/item?id=..."
summary: "Why it matters in 80–120 words."
tags: [cost-optimization, arm64, aws]
date: 2025-10-03
---
Key takeaways:
- …
- …
```

> If `_links/` is added, create `links.html` (list page) and a layout `link.html` to render external links with a clear **“Read original”** button.

---

## 4) Coding Style & Naming

* **Liquid/HTML:** 4‑space indent. Keep logic minimal in templates; extract to includes.
* **SCSS:** use custom properties in `:root`; class names `kebab-case`.
* **JS (`assets/js/main.js`):** ES6+; classes `PascalCase`, methods `camelCase`; prefer arrow functions for callbacks.
* **Markdown:** front matter with two‑space indent; Title Case for headings; action‑oriented excerpts.

Add basic linting (optional but encouraged):

```bash
npm i -D markdownlint-cli prettier
npx prettier -w "**/*.{md,html,scss,js,json}" || true
```

---

## 5) Testing, CI & Preview

### Minimal DoD (Definition of Done)

* `bundle exec jekyll build` exits cleanly with **no warnings**.
* `bundle exec jekyll doctor` passes.
* `_site/` renders core pages (home, about, profile, support, latest posts) without layout regressions.
* `htmlproofer` passes for external links (allow 429).

### GitHub Actions (suggested files)

`.github/workflows/jekyll.yml`:

```yaml
name: build
on: [push, pull_request]
jobs:
  jekyll:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
      - run: bundle exec jekyll build
      - run: bundle exec jekyll doctor
      - run: bash scripts/htmlproofer.sh
```

`.github/workflows/ingest.yml` (if using news ingest; see §7):

```yaml
name: ingest
on:
  schedule:
    - cron: '17 3,9,15 * * *'  # 3x daily UTC
  workflow_dispatch:
jobs:
  ingest:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci || npm i
      - run: node scripts/ingest.js
      - name: Create PR
        uses: peter-evans/create-pull-request@v6
        with:
          title: "[ingest] news links"
          branch: ingest/news
          commit-message: "chore(ingest): add link-posts"
```

Optional Lighthouse CI for performance & SEO.

---

## 6) Commit, Branching, and PR Rules

* **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).
* One concern per commit: content vs styling vs automation.
* Keep subject ≤ 72 chars; body explains rationale and breaking changes.
* Branch naming: `feat/…`, `fix/…`, `chore/…`, `ingest/…`.
* PR description **must include**: purpose, screenshots (UI), verification steps, and checkboxes from DoD.

**PR template** (create `.github/PULL_REQUEST_TEMPLATE.md`):

```md
## Summary

## Changes
- [ ] …

## Verification
- [ ] `bundle exec jekyll build`
- [ ] `bundle exec jekyll doctor`
- [ ] `htmlproofer _site`

## Screenshots

## Checklist
- [ ] No secrets added
- [ ] Canonical URLs unchanged for existing posts
- [ ] Lint/format applied
```

---

## 7) News/Link Ingestion (Hacker News + Cloud Blogs)

**Goal:** Generate link‑posts from curated sources with proper attribution. No full‑text copying.

**Sources:**

* Hacker News (Algolia API / hnrss)
* AWS “What’s New”, AWS Architecture Blog
* Kubernetes Blog, CNCF Blog
* Cloudflare Blog, Grafana Labs, HashiCorp
* GitLab/Atlassian engineering blogs

**Script:** `scripts/ingest.js` (Node 20). Behavior:

1. Fetch latest items from sources.
2. For each item, create **`_links/<slug>.md`** with front matter:

   ```yaml
   ---
   layout: link
   title: "…"
   source: "Hacker News"
   external_url: "https://…"
   summary: "50–120 words personal summary"
   tags: [aws, sre, kubernetes]
   date: 2025-10-03
   ---
   - Takeaway 1
   - Takeaway 2
   ```
3. Skip if slug already exists.
4. Run build to validate; if OK, open PR (see CI above).

**Attribution & copyright:** always link to the original; use short quotes only.

---

## 8) Security & Content Maintenance

* Validate `vulnerabilities.md` entries: CVE ID, CVSS score, affected versions, remediation.
* Sync contact details in `contact.md`/`footer.html` with `_config.yml`.
* Remove unused assets under `assets/images/`; log in `SITE_FIXES_SUMMARY.md`.
* Add **CSP meta** in layout if hosted where headers are configurable; otherwise keep inline scripts minimal.

Example `vulnerabilities.md` entry:

```md
### CVE-2025-12345 — libXYZ buffer overflow
- **CVSS:** 8.1 (High)
- **Affected:** 1.2.0–1.2.9
- **Remediation:** upgrade to 1.3.0+
- **Refs:** vendor advisory, NVD link
```

---

## 9) AI Coding Agent Operating Procedure (AICP)

When you (AI) implement a task, follow this:

1. **Plan (short):** list intended changes (files, layouts, includes).
2. **Implement:** small, atomic commits with clear messages.
3. **Validate:** run `build`, `doctor`, and `htmlproofer`.
4. **Document:** update `SITE_FIXES_SUMMARY.md` for structural/asset changes.
5. **Open PR:** fill the template and attach screenshots for UI changes.

**Guardrails:**

* Don’t alter permalink structure without explicit approval.
* Don’t change front matter keys in bulk; ensure backward compatibility.
* Use placeholders for credentials; never hardcode tokens.
* Keep JS progressive‑enhancement friendly; site must work without JS.

**Deliverables for feature tasks:**

* Modified files diff summary
* Verification steps
* Rollback notes (how to revert)

---

## 10) Task Request Template (for humans to ask AI)

Copy‑paste this when opening an issue or chat with an AI agent:

```md
**Context:** (what page/section, current behavior)
**Goal:** (what outcome you want)
**Scope:** (files/dirs to touch; e.g., _layouts/post.html, _includes/header.html)
**Constraints:** (no slug changes, no JS frameworks, etc.)
**Acceptance Criteria:**
- [ ] A
- [ ] B
- [ ] Build, doctor, htmlproofer pass
**Out of Scope:** (e.g., theme swap, analytics)
**References:** (links, screenshots)
```

---

## 11) (Optional) Migration Track → Next.js + MDX

If/when we migrate, open an epic and implement in a separate `next/` directory or branch. High‑level steps:

* Scaffold Next.js App Router + Tailwind + shadcn/ui.
* Content layer (MDX + Contentlayer/Velite), search index, OG image generation.
* Recreate routes and canonical URLs; add 301s if hosting allows.
* Port analytics and RSS; ensure Lighthouse ≥ 95 across categories.

Acceptance: the Next build reproduces the current site content and navigation, adds link‑post support, and passes the same DoD checks where applicable.

---

## 12) FAQ for Agents

* **Where do I add a new nav item?** Edit `_config.yml` or the header include depending on theme.
* **How do I add a new post?** Create `_posts/YYYY-MM-DD-title.md` with front matter; run dev to preview.
* **How do I add a link‑post?** Use `_links/` collection and `layout: link`.
* **How do I check for broken links?** `bash scripts/htmlproofer.sh` after a build.
* **Can I add dependencies?** Yes, via `Gemfile` or dev‑tooling via `package.json`—document the change in PR.

---

## 13) Changelog Discipline

Record any structural changes, redirects, or asset cleanups in `SITE_FIXES_SUMMARY.md` with date, author, and rationale.

---

*End of AGENTS.md.*
