# Repository Guidelines

## Project Structure & Module Organization
- `index.md`, `about.md`, `services/` etc. hold page content written in Markdown with YAML front matter.
- `_layouts/`, `_includes/`, `_sass/`, and `assets/` contain the Jekyll theme, partials, SCSS, and static assets (CSS, JS, images).
- `_posts/` stores blog articles named `YYYY-MM-DD-title.md`; `_tools/` and other collections follow the same front-matter pattern.
- The built site is emitted to `_site/` (discard before committing) and the deployed branch `gh-pages-main` mirrors that output.

## Build, Test, and Development Commands
- `bundle install --path vendor/bundle` installs Ruby gems locally (rerun after Gemfile changes).
- `bundle exec jekyll build` compiles the site into `_site/` for production validation.
- `bundle exec jekyll serve` launches a hot-reloading preview at `http://127.0.0.1:4000/`; add `--livereload` if desired.
- Run `bundle exec jekyll doctor` before releases to spot configuration or Liquid issues.

## Coding Style & Naming Conventions
- Use two-space indentation for YAML, Liquid, and SCSS; avoid tab characters.
- Pages and collections use lowercase kebab-case filenames (`services/cloud-platform.md`); blog posts require the `YYYY-MM-DD-` prefix.
- SCSS variables live in `_sass/` and are imported via `assets/css/main.scss` (ensure the YAML front matter `---` header remains).
- Prefer `{% raw %}{% include %}{% endraw %}` for reusable HTML; wrap dynamic links with `| relative_url` / `| absolute_url` filters.

## Testing Guidelines
- Automated tests are not configured. Validate changes with `bundle exec jekyll build` followed by manual smoke tests (nav links, forms, feed, sitemap).
- On macOS/Linux, `npx serve _site` is a quick way to inspect the build artifact in a browser separate from `jekyll serve`.

## Commit & Pull Request Guidelines
- Follow the existing history: short, imperative commits (e.g., `Add Calendly embed`, `Fix navbar labels`).
- Group related edits per commit and avoid committing `_site/` or `vendor/`.
- Pull requests should include: summary, testing notes (`jekyll build`, manual QA), screenshots for visual changes, and linked issues when applicable.
- Target `main`; deploys occur by syncing `_site/` to `gh-pages-main` after review.
