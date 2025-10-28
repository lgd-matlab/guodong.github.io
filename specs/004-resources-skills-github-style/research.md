# Research Findings: Resources Page Skills and GitHub Projects Styling

**Feature**: Resources Page Skills and GitHub Projects Styling
**Date**: 2025-10-28
**Research Method**: Code analysis of existing Resources page structure and styling patterns

## Executive Summary

The Resources page already has a well-implemented Tools section with the exact card-based layout and bold border styling required for this feature. The main work involves: (1) creating a new Skills section using the existing `.tool-card` pattern, and (2) updating the GitHub Projects section (`.repo-card`) to match the Tools section styling.

## Key Findings

### 1. Existing Tools Section - Perfect Reference Implementation

**Current State**: The Tools section already implements the desired card-based layout with professional academic styling:
- **Bold Borders**: `border: 4px solid #000`
- **Grid Layout**: CSS Grid with responsive auto-fit columns
- **Card Structure**: `.tool-card` with semantic HTML5 structure
- **Typography**: Clear hierarchy with 1.25rem titles, font-weight: 700
- **Hover Effects**: `transform: translateY(-2px)` with subtle shadow
- **Color Scheme**: Professional academic theme with category-specific badges

**Decision**: Reuse the exact `.tool-card` pattern for both Skills and GitHub Projects sections.

### 2. Skills Section - Needs Creation

**Current State**: No Skills section exists on the Resources page. Skills data is available in CV data (`_pages/cv.md`) under "Computational Tools" and "Languages" sections.

**Implementation Approach**:
- Extract skills from existing CV data or create static content
- Use the same `.tool-card` pattern as Tools section
- Organize skills into logical categories (Programming Languages, Software Tools, Research Methods)
- Apply consistent badge colors for different skill categories

**Decision**: Create new Skills section using `.tool-card` classes and semantic HTML structure.

### 3. GitHub Projects Section - Styling Update Required

**Current State**: The GitHub Projects section uses `.repo-card` with subtle styling that doesn't match the Tools section:
- Current: `border: 1px solid rgba(0,0,0,0.08)` (subtle)
- Required: `border: 4px solid #000` (bold, consistent with Tools)
- Different typography hierarchy and spacing

**Required Changes**:
- Update border styling to match Tools section (4px solid black)
- Align typography sizes and weights
- Apply consistent hover effects
- Standardize spacing and padding

**Decision**: Transform `.repo-card` styling to match `.tool-card` visual hierarchy.

### 4. Dark Mode - Already Removed

**Current State**: The previous feature (003-resources-styling) already removed:
- Theme toggle button from masthead navigation
- All `[data-theme="dark"]` CSS selectors from resources.html
- Dark mode JavaScript functionality

**Decision**: No additional dark mode removal required for this feature.

### 5. Responsive Design - Solid Foundation

**Current Implementation**:
- Tools section: Breakpoint at 768px for mobile layout
- Repo section: 280px minimum card width with auto-fit grid
- Mobile-first approach with proper spacing adjustments

**Decision**: Maintain existing responsive patterns and apply to new Skills section.

### 6. Accessibility - Good Foundation

**Current Features**:
- Semantic HTML5 (article, header elements)
- Proper heading hierarchy
- Focus states on interactive elements
- ARIA attributes on external links

**Decision**: Maintain accessibility standards and ensure new Skills section follows same patterns.

## Design Decisions

### 1. Visual Consistency Strategy
**Decision**: Apply the established `.tool-card` pattern across all three sections (Tools, Skills, GitHub Projects) to create a cohesive visual experience.

**Rationale**: The Tools section already implements the exact academic aesthetic shown in the reference image. Reusing this pattern ensures consistency and reduces implementation complexity.

### 2. Skills Data Source
**Decision**: Create static Skills content based on existing CV data rather than implementing dynamic data extraction.

**Rationale**: Simpler implementation, better performance for static site, easier to maintain. CV data can be manually curated for the most relevant skills to showcase.

### 3. Badge Color System
**Decision**: Extend the existing badge color system from Tools section to Skills categories.

**Rationale**: Maintains visual consistency across sections. Existing colors (blue for DFT, pink for ML, etc.) can be mapped to skill categories.

### 4. Typography Hierarchy
**Decision**: Standardize all section titles to 1.25rem with font-weight: 700, matching the Tools section.

**Rationale**: Creates consistent visual hierarchy across all sections while maintaining readability.

## Implementation Approach

### Phase 1: Skills Section Creation
1. Add Skills section HTML structure to resources.html
2. Create skill categories with appropriate content
3. Apply `.tool-card` classes and styling
4. Add category badges with consistent colors

### Phase 2: GitHub Projects Styling Update
1. Update `.repo-card` border styling to match `.tool-card`
2. Align typography hierarchy
3. Apply consistent hover effects
4. Ensure responsive behavior matches Tools section

### Phase 3: Final Integration
1. Verify visual consistency across all three sections
2. Test responsive behavior on mobile and desktop
3. Validate accessibility compliance
4. Performance testing and optimization

## Alternatives Considered

### Alternative 1: Dynamic Skills Data Extraction
**Approach**: Implement Jekyll plugin or Liquid template to extract skills from CV data automatically.
**Rejected Because**: Adds complexity, potential performance impact, and maintenance overhead. Static approach is more appropriate for academic portfolio.

### Alternative 2: Separate Styling for Each Section
**Approach**: Create unique styling patterns for Tools, Skills, and GitHub Projects sections.
**Rejected Because**: Would break visual consistency and create a fragmented user experience. Consistent styling reinforces professional academic presentation.

### Alternative 3: CSS Grid Reimplementation
**Approach**: Rebuild the entire layout system with new CSS Grid patterns.
**Rejected Because**: Existing grid system works well and maintains proven responsive behavior. No need to reinvent proven patterns.

## Technical Requirements

### HTML Structure
- Use semantic HTML5 elements (article, header, section)
- Maintain existing class naming conventions
- Follow BEM-like naming patterns for new elements

### CSS Styling
- Leverage existing `.tool-card` base styles
- Use CSS custom properties for color consistency
- Maintain existing responsive breakpoints
- Ensure WCAG 2.1 AA color contrast ratios

### JavaScript Requirements
- Minimal JavaScript needed (static site approach)
- Leverage existing jQuery for any interactive elements
- No dark mode functionality required

## Success Metrics

- Visual consistency achieved across all three sections
- Page load time remains under 3 seconds
- Mobile responsiveness score maintains 95%+
- Accessibility compliance with WCAG 2.1 AA standards
- Zero dark mode functionality remaining