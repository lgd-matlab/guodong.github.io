# Repository Guidelines

This repository hosts an academic website built with Jekyll (GitHub Pages compatible) using the Academic Pages theme. Follow these guidelines to keep the site consistent, buildable, and easy to review.

## Project Structure & Module Organization
- Content: `_pages/`, `_posts/`, `_publications/`, `_talks/`, `_portfolio/` (Markdown with YAML front matter).
- Layouts/Includes/Styles: `_layouts/`, `_includes/`, `_sass/`, `assets/` (JS/CSS), `images/`, `files/`.
- Scripts: `scripts/`, `markdown_generator/`, Python utilities for content prep.
- Generated/Cache: `_site/`, `.sass-cache/`, `vendor/` (do not edit; excluded by `.gitignore`).
- Config: `_config.yml`, `_config_docker.yml`, `Gemfile`, `package.json`, `Dockerfile`, `docker-compose.yaml`.

## Build, Test, and Development Commands
- Install deps: `bundle install` (Ruby), `npm install` (JS plugins).
- Serve locally: `bundle exec jekyll serve` (http://localhost:4000).
- Docker alternative: `docker compose up --build` (uses `_config_docker.yml`).
- Production build: `JEKYLL_ENV=production bundle exec jekyll build` (outputs to `_site/`).
- JS assets: `npm run build:js` (minify to `assets/js/main.min.js`), `npm run watch:js` (rebuild on change).

## Coding Style & Naming Conventions
- Markdown: 80–120 char lines, 1 blank line between sections; front matter uses 2‑space YAML indentation.
- Posts: `_posts/YYYY-MM-DD-title.md`; use lowercase and hyphens.
- Pages: `_pages/name.md` with `permalink`, `title` in front matter.
- Assets: place images in `images/` and reference with relative paths; avoid hotlinks.
- JS/SCSS: prefer small, theme-aligned changes; ensure code works with Uglify (no unsupported ES features).

## Testing Guidelines
- No unit tests; verify a clean build: `bundle exec jekyll build`.
- Manually review changed pages locally (links, images, code blocks, mobile width).
- After JS edits, confirm `assets/js/main.min.js` updates and loads without console errors.

## Commit & Pull Request Guidelines
- Commits: imperative, concise messages (e.g., "Add publications filters"). Group related edits.
- PRs must include: summary of changes, affected URLs (paths under `_pages/`, `_posts/`), and screenshots for visual updates.
- Do not commit `_site/`, caches, or local artifacts. Keep config changes minimal and documented in the PR.

## Security & Configuration Tips
- Never commit secrets. Site settings live in `_config.yml`; Docker-specific overrides are in `_config_docker.yml`.
- Validate external links and scripts you introduce; prefer local copies in `assets/` or `images/`.

