# Implementation Plan: Resources Page Styling & Dark Mode Removal

**Branch**: `003-resources-styling` | **Date**: 2025-10-28 | **Spec**: [spec.md](./spec.md)

## Summary

This feature updates the Resources page to match the reference academic site's card-based grid layout with thicker borders, adjusted colors, and enhanced visual hierarchy, while completely removing all dark mode functionality from the entire website.

**Technical Approach**: Modify inline CSS in `_pages/resources.html` to match reference styling, systematically remove all theme-related code from HTML templates, JavaScript files, and SCSS stylesheets.

## Technical Context

**Language/Version**: Ruby 3.2.0 (Jekyll), HTML5, CSS3/SCSS, JavaScript ES6
**Primary Dependencies**: Jekyll 3.9.x, jekyll-github-metadata, Font Awesome 6.x, jQuery 3.7.1, SASS/SCSS
**Storage**: Static HTML files (Jekyll-generated), no database
**Testing**: Manual browser testing, responsive design testing at multiple breakpoints
**Target Platform**: GitHub Pages (static hosting), modern web browsers (last 2 versions)
**Project Type**: Static website (Jekyll-based academic portfolio)
**Performance Goals**: Page load < 3s, Desktop PageSpeed > 90, Mobile PageSpeed > 80, CSS reduction 10-20KB, JS reduction 2-5KB
**Constraints**: GitHub Pages compatible, no npm build tools, Jekyll Liquid compatible, WCAG AA compliance
**Scale/Scope**: Single Resources page + site-wide dark mode removal, ~11 tool cards, ~600 lines CSS modified, ~100-200 lines JS removed

## Constitution Check

**✅ CONSTITUTION GATE: PASSED (Pre-Phase 0)**
- All 9 principles satisfied, no violations
- Verified: Truth-First, Freshness, Source Verification, Incremental Enhancement, Accessibility, Code Quality, Testing, UX Consistency, Performance

**✅ CONSTITUTION GATE: PASSED (Post-Phase 1)**
- All principles re-validated, no new violations introduced
- Ready for Phase 2 (Tasks generation)

## Project Structure

### Documentation
```
specs/003-resources-styling/
├── spec.md              ✅ Complete
├── plan.md              ✅ This file
├── research.md          ✅ Complete (Phase 0)
├── data-model.md        ✅ Complete (Phase 1)
├── quickstart.md        ✅ Complete (Phase 1)
└── tasks.md             ⏳ Awaiting /speckit.tasks
```

### Source Code (Jekyll Static Site)
```
guodong.github.io/
├── _pages/resources.html         # PRIMARY TARGET: Update inline CSS
├── _includes/masthead.html       # Remove theme toggle
├── _sass/themes/                 # DELETE dark theme SCSS files
├── assets/js/_main.js            # Remove theme switching JS
└── assets/css/main.scss          # Remove dark theme imports
```

## Implementation Readiness

- [x] All research complete
- [x] All design artifacts generated
- [x] Agent context updated
- [x] Constitution validated
- [x] No NEEDS CLARIFICATION remaining
- [ ] Tasks generated ← **Next: Run `/speckit.tasks`**

**Status**: ✅ Ready for Phase 2 - Task Generation
