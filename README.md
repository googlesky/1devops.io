# Lê Hiếu — Senior DevOps: Landing Page

Pure HTML/CSS/JS single-page profile with an animated star-network background and glass UI. Optimized for GitHub Pages and file:// usage.

## Local use

- Open `index.html` directly in a browser.
- No build steps required.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository (e.g., `googlesky/home-landing-page` or `googlesky/googlesky.github.io`).
2. In GitHub → Settings → Pages:
   - Source: `main` branch
   - Root: `/` (root)
3. Wait for publish. Your site will be available at the repository URL.

### Custom domain (optional)

- Replace or edit the `CNAME` file with your domain. Currently set to: `lphieu.1devops.io`.
- Point your DNS to GitHub Pages per their docs.

## Content edits

- Update name/title/links in `index.html` if needed.
- Experience bullets live in `index.html` for simplicity.
- JSON-LD schema is injected in `assets/js/main.js`.

## OG image and favicon

- Place a 1200×630 PNG at `assets/img/og.png` for social share previews.
- Add a favicon at `assets/img/favicon.ico`.
- Quick generation tip (Linux ImageMagick):
  ```bash
  convert -size 1200x630 \
    gradient:\#1B6FFF-\#9A5BFF \
    -gravity center -font DejaVu-Sans -pointsize 84 -fill white \
    -annotate +0+0 'Lê Hiếu — Senior DevOps' assets/img/og.png
  convert assets/img/og.png -resize 128x128 assets/img/favicon.ico
  ```

## Performance & accessibility

- Respects `prefers-reduced-motion`.
- Keyboard accessible with visible focus styles and skip link.
- Targets Lighthouse ≥ 90 Performance, ≥ 95 Accessibility.

## License

MIT


