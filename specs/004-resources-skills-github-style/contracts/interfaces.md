# Interface Contracts: Resources Page Skills and GitHub Projects Styling

**Feature**: Resources Page Skills and GitHub Projects Styling
**Date**: 2025-10-28
**Type**: Static Content Interface Definition

## Overview

This document defines the structural interfaces for the Resources page enhancements. Since this is a static Jekyll site, these contracts represent the expected HTML structure and CSS class interfaces rather than API contracts.

## HTML Structure Contracts

### Skills Section Interface

```html
<section class="skills-section" id="skills">
  <div class="skills-header">
    <h2>Technical Skills</h2>
    <p class="skills-intro">
      Comprehensive technical skills for computational materials research
    </p>
  </div>

  <div class="skills-grid">
    <!-- Skill Card 1 -->
    <article class="tool-card skill-card">
      <header class="tool-card__header">
        <h3 class="tool-card__title">
          <a href="#">Python</a>
        </h3>
        <span class="tool-badge tool-badge--lang">Programming Language</span>
      </header>

      <div class="tool-card__desc">
        Primary language for data analysis, machine learning, and scientific computing
      </div>

      <div class="tool-card__links">
        <a href="#" class="tool-btn tool-btn--primary">
          <i class="fas fa-book"></i>
          Documentation
        </a>
        <a href="#" class="tool-btn tool-btn--secondary">
          <i class="fas fa-code"></i>
          Examples
        </a>
      </div>
    </article>

    <!-- Additional skill cards... -->
  </div>
</section>
```

### GitHub Projects Section Interface

```html
<section class="repo-section" id="github-projects">
  <div class="repo-header">
    <h2>GitHub Projects</h2>
    <p class="repo-intro">
      Open-source contributions and research code repositories
    </p>
  </div>

  <div class="repo-grid">
    <!-- Repository Card 1 -->
    <article class="tool-card repo-card">
      <header class="tool-card__head">
        <h3 class="tool-card__title">
          <a href="https://github.com/user/repo" rel="noopener">Repository Name</a>
        </h3>
        <div class="tool-card__badges">
          <span class="tool-badge tool-badge--ml">Machine Learning</span>
          <span class="badge badge--archived">Archived</span>
        </div>
      </header>

      <div class="tool-card__desc">
        Brief description of the repository's purpose and functionality
      </div>

      <div class="tool-card__meta">
        <span class="meta__item">
          <i class="fas fa-star"></i>
          42
        </span>
        <span class="meta__item">
          <i class="fas fa-code-branch"></i>
          8
        </span>
        <span class="meta__item">
          <span class="lang-dot" style="background: #3572A5;"></span>
          Python
        </span>
      </div>
    </article>

    <!-- Additional repository cards... -->
  </div>
</section>
```

## CSS Class Interface Contracts

### Core Card Classes

```css
/* Base card styling - Applied to both skills and repository cards */
.tool-card {
  /* Interface: All cards must support these styles */
  background: #fff;
  border: 4px solid #000;
  border-radius: 12px;
  box-shadow: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  transition: all 0.3s ease;
}

.tool-card:hover {
  /* Interface: Hover state for all cards */
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transform: translateY(-2px);
  border-color: #333;
}
```

### Badge System Interface

```css
/* Interface: Category badges must support these color variants */
.tool-badge--dft { /* Blue - DFT */ }
.tool-badge--highthroughput { /* Indigo - High-throughput */ }
.tool-badge--ml { /* Pink - Machine Learning */ }
.tool-badge--lang { /* Yellow - Programming Languages */ }
.tool-badge--md { /* Green - Molecular Dynamics */ }
.tool-badge--dl { /* Purple - Deep Learning */ }
.tool-badge--al { /* Orange - Active Learning */ }
```

### Button Interface

```css
/* Interface: Buttons must support primary and secondary variants */
.tool-btn--primary {
  /* Interface: Primary button styling with 2px borders */
  border: 2px solid #1e40af;
  color: #1e40af;
}

.tool-btn--secondary {
  /* Interface: Secondary button styling with 2px borders */
  border: 2px solid #9ca3af;
  color: #374151;
}
```

## Grid Layout Interface

```css
/* Interface: Responsive grid containers */
.skills-grid,
.repo-grid {
  /* Interface: Must support auto-fit responsive layout */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

/* Interface: Mobile responsiveness */
@media (max-width: 768px) {
  .skills-grid,
  .repo-grid {
    grid-template-columns: 1fr;
  }
}
```

## Content Contract Compliance

### Required Elements for Each Card

**Skill Cards Must Include**:
- Title (h3 with tool-card__title class)
- Category badge (tool-badge with appropriate modifier)
- Description (tool-card__desc)
- At least one action button (tool-btn)
- Semantic article wrapper

**Repository Cards Must Include**:
- Title with external link (rel="noopener")
- Description
- Metadata display (stars, forks, language)
- Language indicator with color coding
- Semantic article wrapper

### Accessibility Contract Requirements

**Semantic HTML**:
- Use article tags for cards
- Use header tags for card headers
- Maintain proper heading hierarchy (h2 for sections, h3 for cards)

**Interactive Elements**:
- All links must have descriptive text
- External links must include rel="noopener"
- Icons must have appropriate spacing and not be standalone

**Color Contrast**:
- Text must meet WCAG 2.1 AA contrast ratios
- Badge colors must maintain sufficient contrast
- Border colors must be visible against backgrounds

## Performance Contract

**Load Time Requirements**:
- Page must load completely in under 3 seconds
- CSS must be minified and optimized
- No blocking JavaScript for core functionality

**Mobile Performance**:
- Responsive layout must work on 320px minimum width
- Touch targets must be at least 44px
- Text must be readable without zooming

## Maintenance Contract

**Content Updates**:
- Skills content can be updated through Markdown editing
- Repository information must be manually updated
- No database migrations required

**Style Updates**:
- CSS changes must be applied consistently across all card types
- New badge colors must follow existing naming convention
- Responsive breakpoints must maintain existing patterns

## Browser Compatibility Contract

**Supported Browsers**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**CSS Feature Support**:
- CSS Grid (auto-fit, minmax)
- CSS Custom Properties
- Flexbox
- CSS Transforms and Transitions

**Progressive Enhancement**:
- Core functionality must work without JavaScript
- Layout must not break on older browsers
- Fallback styling provided for unsupported features