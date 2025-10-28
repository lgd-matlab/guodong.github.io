# Implementation Tasks: Resources Page Styling & Dark Mode Removal

**Feature**: 003-resources-styling  
**Branch**: `003-resources-styling`  
**Date**: 2025-10-28  
**Total Tasks**: 80  
**Estimated Duration**: 4-6 hours

## Implementation Strategy

**MVP Scope**: User Story 1 + User Story 4 (Tools styling + Dark mode removal)

---

## Phase 1: Setup & Preparation

- [ ] T001 [P] Create backup of _pages/resources.html
- [ ] T002 [P] Create backup of _includes/masthead.html
- [ ] T003 [P] Create backup of assets/js/_main.js
- [ ] T004 Verify Jekyll server runs: bundle exec jekyll serve
- [ ] T005 [P] Document current CSS bundle size
- [ ] T006 [P] Document current JS bundle size

---

## Phase 2: Foundational Tasks

- [ ] T007 Search for [data-theme="dark"] selectors
- [ ] T008 Search for theme toggle references  
- [ ] T009 Search for theme JavaScript
- [ ] T010 List SCSS files in _sass/themes/

---

## Phase 3: US1 & US2 - Tools Section (P1)

**Goal**: Update tool cards to match reference styling.

### Card Structure
- [ ] T011 [US1] Update .tools-grid gap: 20px → 24px in _pages/resources.html
- [ ] T012 [US1] Update .tool-card border: 1px → 4px in _pages/resources.html
- [ ] T013 [US1] Update .tool-card border-radius: verify 12px in _pages/resources.html
- [ ] T014 [US1] Update .tool-card box-shadow in _pages/resources.html
- [ ] T015 [US1] Add .tool-card:hover transform and shadow in _pages/resources.html

### Badges
- [ ] T016 [P] [US1] Verify .tool-badge--dft colors in _pages/resources.html
- [ ] T017 [P] [US1] Verify .tool-badge--highthroughput colors in _pages/resources.html
- [ ] T018 [P] [US1] Verify .tool-badge--ml colors in _pages/resources.html
- [ ] T019 [P] [US1] Verify .tool-badge--lang colors in _pages/resources.html
- [ ] T020 [P] [US1] Verify .tool-badge--md colors in _pages/resources.html
- [ ] T021 [P] [US1] Verify .tool-badge--dl colors in _pages/resources.html
- [ ] T022 [P] [US1] Verify .tool-badge--al colors in _pages/resources.html
- [ ] T023 [US1] Remove [data-theme="dark"] badge selectors from _pages/resources.html

### Buttons
- [ ] T024 [P] [US2] Update .tool-btn--primary border: 1px → 2px in _pages/resources.html
- [ ] T025 [P] [US2] Update .tool-btn--primary:hover border: 2px in _pages/resources.html
- [ ] T026 [P] [US2] Update .tool-btn--secondary border: 1px → 2px in _pages/resources.html
- [ ] T027 [P] [US2] Update .tool-btn--secondary:hover border: 2px in _pages/resources.html
- [ ] T028 [US2] Remove [data-theme="dark"] button selectors from _pages/resources.html

---

## Phase 4: US4 - Dark Mode Removal (P1)

**Goal**: Remove all dark mode functionality.

### Remove UI
- [ ] T029 [US4] Locate theme toggle in _includes/masthead.html
- [ ] T030 [US4] Remove theme toggle HTML from _includes/masthead.html
- [ ] T031 [US4] Remove theme toggle CSS from _sass/layout/_masthead.scss

### Remove JavaScript
- [ ] T032 [US4] Remove theme functions from assets/js/_main.js
- [ ] T033 [US4] Remove theme event listeners from assets/js/_main.js
- [ ] T034 [US4] Remove localStorage theme operations from assets/js/_main.js
- [ ] T035 [US4] Remove system preference detection from assets/js/_main.js
- [ ] T036 [US4] Remove theme attribute application from assets/js/_main.js
- [ ] T037 [US4] Add localStorage cleanup to assets/js/_main.js
- [ ] T038 [P] [US4] Remove Plotly theme handling from assets/js/theme.js

### Remove CSS
- [ ] T039 [US4] Remove dark theme imports from assets/css/main.scss
- [ ] T040 [P] [US4] Remove dark selectors from _sass/layout/_masthead.scss
- [ ] T041 [P] [US4] Remove dark selectors from other SCSS partials
- [ ] T042 [US4] Delete _sass/themes/_default_dark.scss
- [ ] T043 [US4] Delete _sass/themes/_air_dark.scss
- [ ] T044 [US4] Verify _config.yml theme setting

### Clean Resources Page
- [ ] T045 [US4] Remove dark selectors from .repo-card in _pages/resources.html
- [ ] T046 [US4] Remove dark selectors from .tools-section in _pages/resources.html
- [ ] T047 [US4] Remove dark selector from .section-divider in _pages/resources.html

---

## Phase 5: US3 - Repository Section (P2)

**Goal**: Match repository styling to tools section.

- [ ] T048 [US3] Update .repo-grid gap: 20px → 24px in _pages/resources.html
- [ ] T049 [US3] Update .repo-card border: 1px → 4px in _pages/resources.html
- [ ] T050 [US3] Update .repo-card border-radius: 12px in _pages/resources.html
- [ ] T051 [US3] Update .repo-card box-shadow: match tool-card in _pages/resources.html
- [ ] T052 [US3] Add .repo-card:hover effect: match tool-card in _pages/resources.html
- [ ] T053 [P] [US3] Verify .badge styling consistency in _pages/resources.html
- [ ] T054 [P] [US3] Verify .badge--archived styling in _pages/resources.html
- [ ] T055 [US3] Verify .repo-card__meta styling in _pages/resources.html

---

## Phase 6: Testing & Polish

### Responsive
- [ ] T056 Test desktop (>1280px): 2-3 columns
- [ ] T057 Test tablet (768-1024px): 2 columns
- [ ] T058 Test mobile (<768px): 1 column
- [ ] T059 Test hover effects

### Accessibility
- [ ] T060 [P] Check badge colors WCAG contrast
- [ ] T061 [P] Test keyboard navigation
- [ ] T062 [P] Test screen reader
- [ ] T063 Verify alt text

### Browsers
- [ ] T064 Test Chrome
- [ ] T065 [P] Test Firefox
- [ ] T066 [P] Test Safari
- [ ] T067 [P] Test Edge

### Performance
- [ ] T068 Measure CSS size vs baseline
- [ ] T069 Measure JS size vs baseline
- [ ] T070 PageSpeed homepage: >90/80
- [ ] T071 PageSpeed Resources page
- [ ] T072 Verify build time

### Final
- [ ] T073 Verify spec.md acceptance scenarios
- [ ] T074 Test edge cases
- [ ] T075 Verify section divider
- [ ] T076 Verify tools intro
- [ ] T077 Verify GitHub footer note
- [ ] T078 Test API fallback
- [ ] T079 Run bundle exec jekyll build
- [ ] T080 Commit with descriptive message

---

## Summary

**Total**: 80 tasks  
**MVP** (US1+US4): 37 tasks (46%)  
**Parallelizable**: 34 tasks (42.5%)  
**Estimated MVP**: 3-4 hours

**Status**: ✅ Ready for Implementation
