# Research Document: Resources Page Styling & Dark Mode Removal

**Feature**: 003-resources-styling
**Date**: 2025-10-28
**Status**: Phase 0 Complete

## Overview

This document consolidates research findings for implementing card-based grid layouts on the Resources page and safely removing dark mode functionality from the Jekyll academic site.

## Part 1: Resources Page Card Grid Layout

### Decision: CSS Grid with Auto-fit for Responsive Cards

**Rationale**:
- CSS Grid provides native support for responsive card layouts without media query complexity
- `auto-fit` with `minmax()` automatically adjusts column count based on available space
- Better browser support than Flexbox for true 2D grid layouts
- Matches the reference site implementation pattern

**Implementation Approach**:
```scss
.tools-grid, .repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px-24px;
}
```

**Alternatives Considered**:
1. **Flexbox with flex-wrap**: Rejected - Less precise control over card sizing and gaps
2. **Bootstrap grid system**: Rejected - Would require adding Bootstrap dependency
3. **Manual media queries**: Rejected - More code, harder to maintain than auto-fit

### Decision: Embedded CSS in HTML File

**Rationale**:
- The current Resources page (`_pages/resources.html`) already contains `<style>` blocks (lines 247-632)
- Keeps all Resources page styling self-contained and easier to modify
- Avoids cluttering global SCSS files with page-specific styles
- Matches existing pattern in the codebase

**Implementation Approach**:
- Add new card grid styles to existing `<style>` block in `resources.html`
- Organize styles into clear sections (tools, repositories, badges, buttons)
- Use BEM-like naming (e.g., `.tool-card`, `.tool-card__header`, `.repo-card`)

**Alternatives Considered**:
1. **Separate SCSS partial**: Rejected - Would need to import into main.scss, adds file overhead
2. **Inline styles**: Rejected - Hard to maintain, no CSS reuse
3. **Global stylesheet addition**: Rejected - Resources page styles shouldn't be global

### Decision: Badge Color Scheme System

**Rationale**:
- Color-coded badges improve scannability and visual grouping
- Each tool category gets distinct, accessible color pairing
- Light background with darker text ensures readability (WCAG AA compliance)

**Color Mappings** (from reference site):
- **DFT Simulation**: Blue (`#dbeafe` bg, `#1e40af` text)
- **High-Throughput**: Indigo (`#e0e7ff` bg, `#4338ca` text)
- **Machine Learning**: Pink (`#fce7f3` bg, `#be185d` text)
- **Programming Language**: Amber (`#fef3c7` bg, `#92400e` text)
- **Molecular Dynamics**: Green (`#d1fae5` bg, `#065f46` text)
- **Deep Learning**: Purple (`#ddd6fe` bg, `#5b21b6` text)
- **Active Learning**: Orange (`#ffedd5` bg, `#9a3412` text)

**Implementation Approach**:
```scss
.tool-badge--dft { background: #dbeafe; color: #1e40af; }
.tool-badge--ml { background: #fce7f3; color: #be185d; }
// ... etc
```

### Decision: GitHub Projects Dynamic Loading

**Rationale**:
- Current implementation uses Jekyll's `site.github.public_repositories` metadata
- JavaScript fallback (lines 635-752) handles cases where metadata unavailable
- Maintains existing pattern - no need to change

**Implementation Approach**:
- Keep existing Jekyll Liquid template for server-side rendering
- Keep existing JavaScript fallback for client-side loading
- Apply new card grid styles to both rendering paths

## Part 2: Dark Mode Removal Strategy

### Decision: Clean Removal in Specific Order

**Rationale**:
- Prevents breaking changes by removing dependencies in correct sequence
- Ensures no orphaned references remain that could cause JavaScript errors
- Allows for testing at each step

**Removal Order**:
1. **Remove UI toggle first** (_includes/masthead.html)
   - Prevents users from trying to activate non-functional dark mode
2. **Remove JavaScript theme logic** (assets/js/_main.js)
   - Eliminates localStorage writes and theme detection
3. **Remove dark theme CSS imports** (assets/css/main.scss)
   - Stops compiling unused SCSS
4. **Delete dark theme SCSS files** (_sass/themes/*_dark.scss)
   - Removes source files entirely

**Alternatives Considered**:
1. **Comment out instead of delete**: Rejected - Leaves dead code, violates Constitution VI
2. **Delete files first**: Rejected - Would cause Sass compilation errors while imports remain
3. **Keep dark themes for future use**: Rejected - User explicitly wants removal, YAGNI principle

### Decision: Handle Plotly Theme References Carefully

**Rationale**:
- `assets/js/theme.js` contains Plotly-specific dark/light theme templates
- `_main.js` references these themes when applying plot styling
- Need to determine if plots exist on site before removal

**Research Question**: Are there any Plotly visualizations on the site?

**Search Results**:
- Plotly library is loaded in footer (`_includes/footer/custom.html`)
- NO actual Plotly plots found in blog posts or pages
- Plotly theme files in `theme.js` are unused

**Decision**: Remove Plotly theme handling from `theme.js` and `_main.js`
- Plotly library loading can remain (may be used for future posts)
- Theme switching logic for Plotly is unnecessary without dark mode

### Decision: localStorage Cleanup Strategy

**Rationale**:
- Existing users may have `theme` key in localStorage from previous visits
- Removing the key prevents confusion if dark mode is re-added later
- Maintains clean browser state

**Implementation Approach**:
```javascript
// One-time cleanup on page load
if (localStorage.getItem('theme')) {
  localStorage.removeItem('theme');
}
```

**Placement**: Add to beginning of document ready handler, then remove after a few weeks

**Alternatives Considered**:
1. **Leave localStorage intact**: Rejected - Orphaned data violates clean code principles
2. **Clear all localStorage**: Rejected - May contain other site data
3. **Ignore existing data**: Rejected - Could cause confusion if inspected

### Decision: Icon Font Dependency Check

**Rationale**:
- Theme toggle uses Font Awesome icons (fa-sun, fa-moon)
- Need to verify these icons aren't used elsewhere before assuming safe to ignore

**Research Findings**:
- Font Awesome 6.x is loaded site-wide
- Only sun/moon icons are theme-related
- Removing toggle doesn't affect Font Awesome dependency
- Library still used for other icons (GitHub, email, external link, etc.)

**Decision**: Keep Font Awesome dependency, only remove sun/moon icon references in masthead

## Part 3: Testing Strategy

### Testing Approach for Resources Page

**Manual Test Checklist**:
1. Desktop view (> 1024px):
   - Verify tools display in 2-3 column grid
   - Verify repos display in matching grid
   - Check hover effects work on cards and buttons
2. Tablet view (768px - 1024px):
   - Verify responsive reflow
   - Check touch interactions
3. Mobile view (< 768px):
   - Verify single-column layout
   - Check button sizing for touch
4. Content edge cases:
   - Tool with no links (if any)
   - Very long repository descriptions
   - Special characters in names

### Testing Approach for Dark Mode Removal

**Manual Test Checklist**:
1. Navigation bar:
   - Verify theme toggle is gone
   - Verify navigation layout looks correct
   - Check on all pages
2. JavaScript console:
   - Verify no errors on page load
   - Verify no theme-related warnings
3. Browser developer tools:
   - Check localStorage (should have no 'theme' key after visiting)
   - Check HTML element (should have no data-theme attribute)
4. Jekyll build:
   - Verify build completes without Sass errors
   - Check compiled CSS size (should be smaller)
5. System dark mode test:
   - Enable OS-level dark mode
   - Verify site stays light (ignores preference)

### Performance Validation

**Before/After Comparison**:
- Measure JavaScript bundle size (assets/js/main.min.js)
- Measure CSS bundle size (assets/css/main.css)
- Run PageSpeed Insights on homepage
- Expected improvements: 5-10% reduction in CSS, 2-3% in JS

## Part 4: Implementation Dependencies

### No External Dependencies Required

**Rationale**:
- All features use native CSS Grid, no framework needed
- Dark mode removal eliminates code, doesn't add any
- Jekyll and existing libraries (Font Awesome, jQuery) are sufficient

### Dependency Analysis

**Current Dependencies (Unchanged)**:
- Jekyll 3.9.x - Static site generator
- GitHub Pages gem - Deployment platform
- Font Awesome 6.x - Icon library
- jQuery 3.7.1 - DOM manipulation and events

**Dependencies Removed**: None (only code removal)

**Dependencies Added**: None

## Part 5: Best Practices Applied

### Jekyll Best Practices

1. **Liquid Template Syntax**:
   - Use `{% if %}` conditions for optional content
   - Use `{% for %}` loops for repository iteration
   - Maintain existing Liquid patterns

2. **SCSS Organization**:
   - Use BEM-like naming for CSS classes
   - Group related styles together
   - Use CSS custom properties for repeated values

3. **Performance**:
   - Keep styles scoped to page (embedded in HTML)
   - Remove unused CSS (dark themes)
   - Minimize JavaScript execution on load

### Web Performance Best Practices

1. **Responsive Images**: N/A (no new images in this feature)
2. **CSS Grid over JavaScript**: Use native browser features
3. **Remove Dead Code**: Dark mode deletion improves load time
4. **Minimize Reflows**: Card grid layout is static, no dynamic sizing

### Accessibility Best Practices

1. **Color Contrast**: All badge colors meet WCAG AA (4.5:1 minimum)
2. **Semantic HTML**: Use `<article>` for cards, `<header>` for card headers
3. **Link Clarity**: Button labels are descriptive ("Official Site", "GitHub")
4. **Touch Targets**: Buttons are minimum 44x44px for mobile
5. **Focus States**: Maintain visible focus indicators on interactive elements

## Research Completion Checklist

- [x] CSS Grid layout approach validated
- [x] Badge color system defined with accessibility check
- [x] Dark mode removal order determined
- [x] Plotly usage verified (unused, can remove theme handling)
- [x] localStorage cleanup strategy defined
- [x] Font Awesome dependency confirmed (keep)
- [x] Testing strategy documented
- [x] Performance metrics defined
- [x] No new dependencies required
- [x] Best practices documented

**Status**: ✅ Research Phase Complete - Ready for Phase 1 (Design & Contracts)
