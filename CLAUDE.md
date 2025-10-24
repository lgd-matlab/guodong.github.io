# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic portfolio website built with Jekyll, based on the Academic Pages template (forked from Minimal Mistakes theme). The site is hosted on GitHub Pages and serves as a personal academic and professional portfolio for Guodong Lu, a Materials Science researcher.

**Technology Stack:**
- Jekyll (static site generator)
- Ruby with Bundler for dependency management
- SASS/SCSS for styling
- JavaScript (jQuery, FitVids, smooth-scroll)
- Markdown for content
- GitHub Pages for hosting

## readin principle
当用户有所指代时，需要从索引.md中先检索用户指代内容是，确定用户需要修改的内容所在的文件及具体模块，确保能够准确理解用户的意图。



## Development Commands

### Local Development Setup

**Install dependencies:**
```bash
bundle install
```

If you encounter permission errors, install gems locally:
```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

**Run local development server:**
```bash
jekyll serve -l -H localhost
# Or with bundler to ensure correct dependencies:
bundle exec jekyll serve -l -H localhost
```

The site will be available at `http://localhost:4000`. Jekyll will auto-rebuild and refresh on changes to Markdown and HTML files. Changes to `_config.yml` require stopping and restarting the server.

**Run with Docker:**
```bash
chmod -R 777 .
docker compose up
```

**JavaScript build commands:**
```bash
npm run build:js      # Minify and concatenate JavaScript files
npm run watch:js      # Watch JS files for changes and rebuild
npm run uglify        # Manually uglify JavaScript
```

### Testing

Manual testing only - preview changes using the local Jekyll server before pushing to GitHub. GitHub Actions automatically builds and deploys the site on push to the master branch.

## Architecture Overview

### Jekyll Convention Over Configuration

This project follows Jekyll's convention-based architecture with a clear separation of concerns:

**Configuration Layer:**
- `_config.yml` - Main site configuration (site metadata, author info, collections, plugins)
- `_config_docker.yml` - Docker-specific overrides
- `_data/` - Structured data files (navigation, UI text, CV JSON)

**Content Layer:**
- `_posts/` - Blog posts (filename format: `YYYY-MM-DD-title.md`)
- `_publications/` - Academic publications (5 papers)
- `_talks/` - Conference talks and presentations (2 entries)
- `_teaching/` - Teaching materials
- `_portfolio/` - Project showcase
- `_pages/` - Static pages (About, CV, etc.)

**Template Layer:**
- `_layouts/` - Page templates (default, single, archive, talk, cv-layout)
- `_includes/` - Reusable HTML components (masthead, author-profile, footer, archive items)

**Style Layer:**
- `_sass/` - 100+ SCSS files organized in subdirectories:
  - `layout/` - Layout-specific styles (_page.scss, _sidebar.scss, _masthead.scss)
  - `themes/` - Theme variations (default/air, light/dark)
  - `vendor/` - Third-party libraries (Font Awesome, Breakpoint, Susy)
  - `_syntax.scss` - Code highlighting
- `assets/css/` - Compiled CSS and icon fonts

**Asset Layer:**
- `assets/js/` - JavaScript files and plugins
- `images/` - User-uploaded images (profile photo, blog post images)
- `files/` - Downloadable resources (PDFs, papers)

### Collections System

Jekyll collections are configured in `_config.yml` for content types:
- `publications` - Academic papers with metadata (venue, date, DOI, download links)
- `talks` - Presentations with location, date, and venue information
- `teaching` - Course materials and workshops
- `portfolio` - Project showcases

Each collection has default layout and display settings configured in the `defaults` section of `_config.yml`.

### Content Generation Tools

The `markdown_generator/` directory contains Python scripts and Jupyter notebooks for batch content creation:

**Publications:**
- `publications.py` / `publications.ipynb` - Convert TSV to markdown publication files
- `pubsFromBib.py` / `PubsFromBib.ipynb` - Import from BibTeX files
- `OrcidToBib.ipynb` - Fetch publications from ORCID
- `publications.tsv` - Source data file

**Talks:**
- `talks.py` / `talks.ipynb` - Convert TSV to markdown talk files
- `talks.tsv` - Source data file

These tools allow batch importing of academic content from structured data sources rather than manually creating individual markdown files.

### Image Insertion Scripts

Three Python scripts handle batch image insertion into blog posts:
- `add_images.py` - Add images to individual posts
- `add_all_images.py` - Process all posts in batch
- `complete_image_insertion.py` - Complete remaining image insertions

These are project-specific utilities for the current ML blog post image insertion task.

## Key Configuration Details

### Site Configuration (`_config.yml`)

**Critical fields to modify when customizing:**
- `url` - Base hostname (currently: `https://lgd-matlab.github.io`)
- `baseurl` - Subpath (currently: `/guodong.github.io`)
- `repository` - GitHub repo (currently: `lgd-matlab/guodong.github.io`)
- `author:` section - All personal information, avatar, social links
- `publication_category:` - Publication type headings

**Jekyll plugins enabled:**
- jekyll-feed - RSS feed generation
- jekyll-sitemap - Sitemap generation
- jekyll-redirect-from - Page redirects
- jemoji - GitHub-style emoji support
- jekyll-paginate - Pagination (currently disabled)

**Theme selection:**
- `site_theme: "default"` - Options: "default" or "air"
- Both themes support light/dark mode switching

### Navigation Structure

Defined in `_data/navigation.yml`:
```yaml
main:
  - title: "Publications"
    url: /publications/
  - title: "Talks"
    url: /talks/
  # etc.
```

Rendered by `_includes/masthead.html`.

### Author Profile

Configured in `_config.yml` under `author:` section. Includes:
- Biographical info (name, bio, location, employer)
- Avatar image path
- Email and website
- Academic profile links (Google Scholar, ORCID, ResearchGate, etc.)
- Social media accounts
- Repository links (GitHub, Bitbucket, etc.)

Rendered by `_includes/author-profile.html` in the left sidebar.

## Common Development Tasks

### Adding Content

**Blog posts:**
1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add YAML front matter:
```yaml
---
title: 'Post Title'
date: YYYY-MM-DD
permalink: /posts/YYYY/MM/title/
categories:
  - category-name
tags:
  - tag1
  - tag2
---
```
3. Write content in Markdown

**Publications:**
1. Create file in `_publications/` with format: `YYYY-MM-DD-title.md`
2. Add required metadata:
```yaml
---
title: "Paper Title"
collection: publications
category: manuscripts  # or books, conferences
permalink: /publication/YYYY-MM-DD-title
excerpt: 'Short description'
date: YYYY-MM-DD
venue: 'Journal Name'
paperurl: 'http://example.com/paper.pdf'
citation: 'Full citation string'
---
```
3. Optionally use `markdown_generator/` scripts for batch import

**Other collections (talks, teaching, portfolio):**
Follow similar patterns with collection-specific metadata fields.

### Modifying Layouts and Components

**Page layouts (`_layouts/`):**
- `default.html` - Base layout with masthead, sidebar, footer
- `single.html` - Single post/publication layout
- `archive.html` - List/archive pages
- `talk.html` - Talk-specific layout
- `cv-layout.html` - Custom CV page layout

**Reusable components (`_includes/`):**
- `masthead.html` - Top navigation bar
- `author-profile.html` - Left sidebar with author info
- `archive-single.html` - List item template (used for publications, talks, posts)
- `footer.html` - Page footer
- `seo.html` - SEO meta tags

When modifying these, test thoroughly as they affect multiple pages.

### Styling Changes

SASS files are organized hierarchically in `_sass/`:
1. Locate the relevant partial (e.g., `_masthead.scss` for navigation styling)
2. Edit the SCSS variables or rules
3. Jekyll automatically compiles SASS on save
4. Check `assets/css/main.scss` for import order if adding new partials

**Theme switching:**
- Themes defined in `_sass/themes/` (_default_light.scss, _default_dark.scss, etc.)
- Theme selection in `_config.yml` via `site_theme` variable

### Building and Deploying

**Local builds:**
Jekyll automatically rebuilds on file changes during `jekyll serve`. No explicit build command needed for development.

**Production deployment:**
Push to GitHub master branch - GitHub Actions automatically builds and deploys to GitHub Pages. No manual deployment steps required.

**JavaScript minification:**
Run `npm run build:js` before committing if you've modified JavaScript files in `assets/js/`.

## Project-Specific Context

### Current Active Work

The project is currently focused on adding images to Machine Learning blog posts:
- 7 ML tutorial posts in `_posts/` (Week 1-11 covering ML fundamentals)
- 131 images need to be inserted from source Obsidian notes
- Helper scripts available: `add_images.py`, `add_all_images.py`, `complete_image_insertion.py`
- Task plan documented in `tasks-image-insertion.md`

### Content Organization

**Publications (5 papers):**
- Materials science research (Zr-Cr-Fe intermetallic compounds)
- Machine learning for materials (HCP interstitials)
- ReaxFF force field development
- MXene battery research

**Blog posts (12 posts):**
- 7 ML course tutorials (Andrew Ng's Machine Learning course)
- Includes topics: linear/logistic regression, neural networks, SVMs, clustering, dimensionality reduction, anomaly detection, recommender systems
- Several posts still need image insertion

**Main pages:**
- About page with personal interests and research focus
- CV page with detailed academic/professional history
- Publications, Talks, Teaching, Portfolio archive pages

### File Path Conventions

**Images:**
- Profile/avatar: `images/profile.png`
- Blog post images: `images/[descriptive-name].png`
- Theme screenshots: `images/themes/`

**Downloadable files:**
- PDFs and papers: `files/[filename].pdf`
- Accessible at: `https://[username].github.io/files/[filename].pdf`

**Collections:**
- Publications: `_publications/YYYY-MM-DD-title.md`
- Talks: `_talks/YYYY-MM-DD-talk-title.md`
- Posts: `_posts/YYYY-MM-DD-title.md`

### CV Management

CV data is maintained in two formats:
1. **Markdown page:** `_pages/cv.md` - Human-readable, customizable layout
2. **JSON format:** `_data/cv.json` - Structured data for JSON Resume display

**Update workflow:**
- Edit `_pages/cv.md` for content changes
- Run `scripts/cv_markdown_to_json.py` to sync to JSON format
- Use `scripts/update_cv_json.sh` for automated updates

## Dependencies and Versions

**Ruby Gems (Gemfile):**
- jekyll, jekyll-feed, jekyll-sitemap, jekyll-redirect-from, jemoji
- github-pages (ensures compatibility with GitHub Pages)
- webrick ~> 1.8 (required for local development)
- connection_pool 2.5.0

**JavaScript (package.json):**
- jquery ^3.7.1
- fitvids ^2.1.1
- jquery-smooth-scroll ^2.2.0
- uglify-js ^3.17.4 (dev)

**Node version requirement:**
- Node >= 0.10.0

## Repository Details

- **URL:** https://lgd-matlab.github.io/guodong.github.io
- **Repository:** lgd-matlab/guodong.github.io
- **Branch for deployment:** master
- **Upstream template:** academicpages/academicpages.github.io (forked, then detached)
- **Original theme:** Minimal Mistakes Jekyll Theme by Michael Rose
