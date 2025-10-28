# Data Model: Resources Page Entities

**Feature**: 003-resources-styling
**Date**: 2025-10-28
**Status**: Phase 1 Complete

## Overview

This document defines the entity model for the Resources page, including Tool Cards and Repository Cards. These entities represent the data structure and display properties for computational materials research tools and GitHub projects.

## Entity Definitions

### Entity 1: Tool Card

Represents a computational research tool displayed in the Resources page tools grid.

**Attributes**:

| Attribute | Type | Required | Description | Validation Rules |
|-----------|------|----------|-------------|------------------|
| `name` | String | Yes | Tool name (e.g., "VASP", "pymatgen") | Non-empty, max 100 chars |
| `category` | Enum | Yes | Tool category | One of: "DFT Simulation", "High-Throughput", "Machine Learning", "Molecular Dynamics", "Deep Learning", "Active Learning", "Programming Language" |
| `description` | String | Yes | Brief tool description | Non-empty, 50-200 chars recommended |
| `officialUrl` | URL | No | Official website URL | Valid HTTPS URL or null |
| `repositoryUrl` | URL | No | GitHub/GitLab repository URL | Valid HTTPS URL or null |
| `repositoryType` | Enum | No | Repository platform | One of: "GitHub", "GitLab", null |

**Constraints**:
- At least one of `officialUrl` or `repositoryUrl` must be present
- If `repositoryUrl` is present, `repositoryType` must be specified
- `repositoryType` must be null if `repositoryUrl` is null

**State Transitions**:
- Tool cards are static - no state changes after rendering
- Hover state managed by CSS (not part of data model)

**Display Mapping**:
```html
<article class="tool-card">
  <header class="tool-card__header">
    <h3 class="tool-card__title">${name}</h3>
    <span class="tool-badge tool-badge--${categoryClass}">${category}</span>
  </header>
  <p class="tool-card__desc">${description}</p>
  <div class="tool-card__links">
    <!-- If officialUrl present: -->
    <a href="${officialUrl}" class="tool-btn tool-btn--primary">
      <i class="fa fa-external-link"></i> Official Site
    </a>
    <!-- If repositoryUrl present: -->
    <a href="${repositoryUrl}" class="tool-btn tool-btn--secondary">
      <i class="fa fa-${repositoryIcon}"></i> ${repositoryType}
    </a>
  </div>
</article>
```

**Category to CSS Class Mapping**:
| Category | CSS Class | Background | Text Color |
|----------|-----------|------------|------------|
| DFT Simulation | `tool-badge--dft` | #dbeafe | #1e40af |
| High-Throughput | `tool-badge--highthroughput` | #e0e7ff | #4338ca |
| Machine Learning | `tool-badge--ml` | #fce7f3 | #be185d |
| Programming Language | `tool-badge--lang` | #fef3c7 | #92400e |
| Molecular Dynamics | `tool-badge--md` | #d1fae5 | #065f46 |
| Deep Learning | `tool-badge--dl` | #ddd6fe | #5b21b6 |
| Active Learning | `tool-badge--al` | #ffedd5 | #9a3412 |

### Entity 2: Repository Card

Represents a GitHub repository displayed in the Resources page GitHub Projects section.

**Attributes**:

| Attribute | Type | Required | Description | Validation Rules |
|-----------|------|----------|-------------|------------------|
| `owner` | String | Yes | Repository owner username | Non-empty, valid GitHub username |
| `name` | String | Yes | Repository name | Non-empty, valid GitHub repo name |
| `htmlUrl` | URL | Yes | Repository web URL | Valid GitHub.com URL |
| `description` | String | No | Repository description | Max 300 chars, can be null |
| `language` | String | No | Primary programming language | Valid language name or null |
| `stargazersCount` | Integer | Yes | Number of stars | Non-negative integer |
| `forksCount` | Integer | Yes | Number of forks | Non-negative integer |
| `pushedAt` | ISO 8601 Date | Yes | Last push timestamp | Valid ISO date string |
| `isFork` | Boolean | Yes | Whether repo is a fork | true or false |
| `isTemplate` | Boolean | Yes | Whether repo is a template | true or false |
| `hasPages` | Boolean | Yes | Whether GitHub Pages enabled | true or false |
| `archived` | Boolean | Yes | Whether repo is archived | true or false |

**Derived Attributes**:
| Attribute | Derivation | Example |
|-----------|------------|---------|
| `fullName` | `${owner}/${name}` | "lgd-matlab/guodong.github.io" |
| `lastUpdate` | `pushedAt` formatted as YYYY-MM-DD | "2025-10-28" |
| `statusBadges` | Array of badge strings based on boolean flags | ["Fork", "Pages"] |

**Data Source**:
- Jekyll: `site.github.public_repositories` (via jekyll-github-metadata plugin)
- JavaScript Fallback: GitHub REST API `/users/:username/repos` endpoint

**State Transitions**:
- Repository data is read-only from external sources
- No user interaction changes repository state
- Data refreshed on page load (via API) or build (via Jekyll metadata)

**Display Mapping**:
```html
<article class="repo-card">
  <header class="repo-card__head">
    <h3 class="repo-card__title">
      <a href="${htmlUrl}">
        <strong>${owner}</strong>/<strong>${name}</strong>
      </a>
    </h3>
    <div class="repo-card__badges">
      <!-- If isFork === true: -->
      <span class="badge">Fork</span>
      <!-- If isTemplate === true: -->
      <span class="badge">Template</span>
      <!-- If hasPages === true: -->
      <span class="badge">Pages</span>
      <!-- If archived === true: -->
      <span class="badge badge--archived">Archived</span>
    </div>
  </header>
  <!-- If description present: -->
  <p class="repo-card__desc">${description}</p>
  <div class="repo-card__meta">
    <!-- If language present: -->
    <span class="meta__item">
      <span class="lang-dot"></span> ${language}
    </span>
    <span class="meta__item">
      <i class="fa fa-star"></i> ${stargazersCount}
    </span>
    <span class="meta__item">
      <i class="fa fa-code-fork"></i> ${forksCount}
    </span>
    <span class="meta__item">
      <i class="fa fa-refresh"></i> ${lastUpdate}
    </span>
  </div>
</article>
```

**Sorting**:
- Default: Sort by `stargazersCount` descending (most starred first)
- This prioritizes popular/active projects

### Entity 3: Category Badge

Represents a visual badge indicating tool category (display-only entity).

**Attributes**:

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | String | Yes | Category name to display |
| `className` | String | Yes | CSS class for styling (e.g., "tool-badge--ml") |
| `backgroundColor` | HEX Color | Yes | Background color |
| `textColor` | HEX Color | Yes | Text color |
| `borderColor` | HEX Color | Yes | Border color (if used) |

**Lifecycle**:
- Created: When tool card renders
- Destroyed: When tool card unmounts (never in static Jekyll)
- No state changes

**Accessibility Requirements**:
- Text/background contrast ratio must meet WCAG AA (4.5:1 minimum)
- Badge must not convey information through color alone (label text required)

### Entity 4: Repository Badge

Represents status badge for repository attributes (display-only entity).

**Attributes**:

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | String | Yes | Badge text ("Fork", "Template", "Pages", "Archived") |
| `type` | Enum | Yes | Badge type | One of: "fork", "template", "pages", "archived" |
| `className` | String | Yes | CSS class ("badge" or "badge badge--archived") |

**Display Rules**:
- Show badge only if corresponding repository boolean flag is true
- Multiple badges can appear on same repository
- Order: Fork, Template, Pages, Archived (left to right)

## Data Relationships

### Relationship 1: Tool → Category Badge (1:1)

Each Tool Card has exactly one Category Badge.

```
Tool Card "VASP"
  └── Category Badge "DFT Simulation" (tool-badge--dft)

Tool Card "scikit-learn"
  └── Category Badge "Machine Learning" (tool-badge--ml)
```

### Relationship 2: Repository → Status Badges (1:N)

Each Repository Card can have zero to four Status Badges.

```
Repository Card "lgd-matlab/guodong.github.io"
  ├── Status Badge "Fork" (if isFork === true)
  ├── Status Badge "Template" (if isTemplate === true)
  ├── Status Badge "Pages" (if hasPages === true)
  └── Status Badge "Archived" (if archived === true)
```

**Cardinality**: 0 to 4 badges per repository

## Data Flow

### Tool Cards Data Flow

1. **Static Content** (hardcoded in HTML):
   ```
   Developer → _pages/resources.html → Static HTML → Browser
   ```
   - Tool data manually maintained in HTML file
   - No external data source
   - Updates require code changes and redeployment

### Repository Cards Data Flow

2. **Jekyll Build Time** (preferred):
   ```
   GitHub → jekyll-github-metadata → site.github.public_repositories → Liquid template → Static HTML → Browser
   ```
   - Metadata fetched during Jekyll build (GitHub Pages environment)
   - Liquid template iterates over repositories
   - Static HTML generated at build time

3. **JavaScript Runtime** (fallback):
   ```
   Browser → JavaScript fetch() → GitHub REST API → JSON response → DOM manipulation → Rendered cards
   ```
   - Activated when Jekyll metadata unavailable (local development)
   - Fetches repository data dynamically
   - Renders cards client-side

## Validation Rules

### Tool Card Validation

**Input Validation**:
- `name`: Trim whitespace, reject empty strings
- `category`: Must match one of 7 defined categories exactly
- `description`: Trim whitespace, warn if < 50 or > 200 chars
- `officialUrl`: Validate URL format, must be HTTPS
- `repositoryUrl`: Validate URL format, must be HTTPS and github.com or gitlab.com domain

**Output Validation**:
- Ensure at least one link button renders
- Verify badge CSS class exists for category
- Confirm colors meet WCAG AA contrast ratio

### Repository Card Validation

**Input Validation**:
- `owner`: Reject empty, validate GitHub username format
- `name`: Reject empty, validate GitHub repo name format
- `htmlUrl`: Must match pattern `https://github.com/:owner/:name`
- `stargazersCount`, `forksCount`: Must be non-negative integers
- `pushedAt`: Must be valid ISO 8601 date string

**Output Validation**:
- Verify repository link is functional
- Confirm date format is YYYY-MM-DD
- Ensure badge count matches boolean flags

## Edge Cases

### Tool Cards

1. **Tool with no official URL**:
   - Valid: Only show repository button
   - Example: SISSO (GitHub-only)

2. **Tool with no repository URL**:
   - Valid: Only show official site button
   - Example: VASP (commercial, no public repo)

3. **Tool with very long description** (> 200 chars):
   - Risk: Card height imbalance, layout issues
   - Mitigation: Truncate with ellipsis, or allow flexible height

4. **Tool with special characters in name**:
   - Example: "DeePMD-kit" (hyphen)
   - Handling: HTML encode, CSS handles automatically

### Repository Cards

1. **Repository with null description**:
   - Valid: Skip description paragraph entirely
   - Display: Card shows title, badges, metadata only

2. **Repository with very long description** (> 300 chars):
   - Risk: Card overflow, layout break
   - Mitigation: CSS `overflow: hidden` or ellipsis

3. **Repository with null language**:
   - Valid: Skip language indicator in metadata
   - Display: Show stars, forks, date without language dot

4. **Repository with 0 stars**:
   - Valid: Display "0" not empty/null
   - Sorting: Appears last in star-sorted list

5. **Archived repository**:
   - Display: Show "Archived" badge with red styling
   - Indication: Different badge color (warning)

## Data Model Compliance with Constitution

### Principle I: Truth-First Content
- All tool information must be factually accurate
- Repository data sourced directly from GitHub (authoritative)
- No fabricated or speculative tool attributes

### Principle II: Information Freshness
- Repository data updates on every Jekyll build (if metadata available)
- JavaScript fallback ensures fresh data in local development
- Tool cards require manual updates (acceptable for relatively stable tool list)

### Principle III: Source Verification
- Repository data: GitHub REST API (verified source)
- Tool data: Manual entry, should be cross-referenced with official documentation
- All URLs must be validated before publication

### Principle V: Accessibility & Clarity
- Badge colors validated against WCAG AA contrast ratios
- Semantic HTML structure (`<article>`, `<header>`, proper headings)
- Link labels are descriptive ("Official Site", "GitHub", not "Click here")
- Touch targets meet 44x44px minimum (buttons)

### Principle VI: Code Quality Standards
- Clear entity definitions with explicit validation rules
- No duplicate entities or properties
- Well-defined relationships and data flow

## Testing Scenarios

### Tool Card Test Cases

1. **Complete tool** (all fields present):
   - Input: name="AFLOW", category="High-Throughput", description="...", officialUrl="https://...", repositoryUrl="https://github.com/..."
   - Expected: Card with both Official Site and GitHub buttons

2. **GitHub-only tool**:
   - Input: name="SISSO", officialUrl=null, repositoryUrl="https://github.com/..."
   - Expected: Card with GitHub button only

3. **Official-only tool**:
   - Input: name="VASP", officialUrl="https://...", repositoryUrl=null
   - Expected: Card with Official Site button only

4. **Category badge rendering**:
   - For each of 7 categories, verify correct CSS class applied
   - Verify colors match specification

### Repository Card Test Cases

1. **Complete repository** (all fields populated):
   - Expected: Full card with title, description, all metadata items

2. **Repository with no description**:
   - Expected: Card without description paragraph, metadata shown

3. **Repository with no language**:
   - Expected: Metadata row without language item, others shown

4. **Repository with multiple status badges**:
   - Input: isFork=true, hasPages=true
   - Expected: Two badges shown: "Fork", "Pages"

5. **Archived repository**:
   - Input: archived=true
   - Expected: Red-styled "Archived" badge visible

6. **Sorting validation**:
   - Input: 5 repos with varying star counts
   - Expected: Sorted descending by stars (highest first)

## Future Extensibility

### Potential Enhancements

1. **Tool Card Filtering**:
   - Add category filter dropdown
   - Filter cards by category on click
   - Requires JavaScript state management

2. **Repository Search**:
   - Add search input for repository names/descriptions
   - Filter visible cards based on query
   - Requires JavaScript filtering logic

3. **Tool Metadata**:
   - Add attributes: `license`, `lastUpdate`, `documentation URL`
   - Display as metadata row similar to repositories
   - Requires HTML structure changes

4. **Dynamic Tool Loading**:
   - Move tool data to JSON or YAML file
   - Load dynamically like repositories
   - Easier maintenance, no HTML editing

**Note**: These enhancements are outside current scope but documented for future reference.

## Checklist

- [x] Tool Card entity defined with all attributes
- [x] Repository Card entity defined with all attributes
- [x] Category Badge entity defined
- [x] Repository Badge entity defined
- [x] Relationships documented (1:1, 1:N)
- [x] Data flow diagrams provided (Jekyll and JS paths)
- [x] Validation rules specified for all entities
- [x] Edge cases documented with handling strategies
- [x] Constitution compliance verified
- [x] Test scenarios provided for all entities
- [x] Future extensibility considerations documented

**Status**: ✅ Data Model Complete - Ready for Tasks Generation
