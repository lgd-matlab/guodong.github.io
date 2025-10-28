# Data Model: Resources Page Skills and GitHub Projects Styling

**Feature**: Resources Page Skills and GitHub Projects Styling
**Date**: 2025-10-28
**Data Type**: Static content (no database or API required)

## Overview

This feature enhances the visual presentation of static content on the Resources page. No new data structures or APIs are required - we are updating the styling of existing and new static content sections.

## Content Structure

### 1. Skills Section Data

**Entity**: SkillCard
**Purpose**: Visual container for individual skill items with categories and proficiency levels

**Fields**:
- `title` (string): Name of the skill or tool
- `category` (string): Category type (Programming Language, Software Tool, Research Method)
- `proficiency` (string): Skill level indicator (Expert, Advanced, Intermediate, Basic)
- `description` (string): Brief description of skill application or context
- `badge_color` (string): Color class for category badge
- `links` (array): Optional array of related links (documentation, tutorials, projects)

**Example**:
```yaml
title: "Python"
category: "Programming Language"
proficiency: "Expert"
description: "Primary language for data analysis, machine learning, and scientific computing"
badge_color: "tool-badge--lang"
links:
  - text: "Python Documentation"
    url: "https://docs.python.org/"
  - text: "Related Projects"
    url: "#github-projects"
```

### 2. GitHub Projects Section Data

**Entity**: RepositoryCard
**Purpose**: Visual container for GitHub repository information with metadata

**Fields**:
- `name` (string): Repository name
- `description` (string): Brief description of repository purpose
- `language` (string): Primary programming language
- `stars` (integer): Star count
- `forks` (integer): Fork count
- `url` (string): Repository URL
- `is_archived` (boolean): Archive status
- `topics` (array): Repository topic tags

**Example**:
```yaml
name: "materials-ml-pipeline"
description: "Machine learning pipeline for materials property prediction"
language: "Python"
stars: 42
forks: 8
url: "https://github.com/user/materials-ml-pipeline"
is_archived: false
topics: ["machine-learning", "materials-science", "python"]
```

### 3. Category Badge System

**Entity**: CategoryBadge
**Purpose**: Visual indicator for categorizing skills and projects

**Badge Types and Colors**:
- `tool-badge--dft`: Density Functional Theory (Blue)
- `tool-badge--highthroughput`: High-throughput Computing (Indigo)
- `tool-badge--ml`: Machine Learning (Pink)
- `tool-badge--lang`: Programming Languages (Yellow)
- `tool-badge--md`: Molecular Dynamics (Green)
- `tool-badge--dl`: Deep Learning (Purple)
- `tool-badge--al`: Active Learning (Orange)

## Relationships

### SkillCard Relationships
- **Many-to-One**: Multiple SkillCards belong to one Skills section
- **Optional One-to-Many**: SkillCard can have multiple related links
- **Categorization**: Each SkillCard has exactly one category badge

### RepositoryCard Relationships
- **Many-to-One**: Multiple RepositoryCards belong to one GitHub Projects section
- **Metadata Association**: Each RepositoryCard has associated language and statistics

## Validation Rules

### SkillCard Validation
- `title`: Required, max 100 characters
- `category`: Required, must be from predefined category list
- `proficiency`: Required, must be from predefined proficiency levels
- `description`: Required, max 200 characters
- `badge_color`: Required, must match category type
- `links`: Optional, each link must have text and URL

### RepositoryCard Validation
- `name`: Required, max 100 characters
- `description`: Required, max 200 characters
- `language`: Required, must be valid programming language
- `stars`: Required, must be non-negative integer
- `forks`: Required, must be non-negative integer
- `url`: Required, must be valid GitHub URL
- `is_archived`: Required, boolean
- `topics`: Optional, array of strings max 50 characters each

## Content Organization

### Skills Section Categories

**Programming Languages**:
- Python, MATLAB, C++, JavaScript, etc.

**Software Tools**:
- VASP, LAMMPS, Quantum ESPRESSO, Git, Docker, etc.

**Research Methods**:
- Machine Learning, Molecular Dynamics, DFT, High-throughput Computing, etc.

### GitHub Projects Organization

**Active Projects**: Non-archived repositories with recent activity
**Archive**: Projects marked as archived but maintained for reference
**Teaching Materials**: Educational repositories and examples

## State Management

### Static Content
- All content is static and managed through Markdown files
- No dynamic state changes or user input required
- Content updates require page rebuild via Jekyll

### Visual State
- Hover states handled through CSS pseudo-classes
- No JavaScript state management required
- Responsive layout handled through CSS media queries

## Data Source

### Primary Sources
1. **Skills Data**: Derived from existing CV content in `_pages/cv.md`
2. **Projects Data**: Static GitHub repository information
3. **Configuration**: Jekyll site configuration and Liquid templates

### Content Management
- Manual updates to Markdown files
- Version control through Git
- Automatic deployment via GitHub Pages

## Performance Considerations

### Static Optimization
- No database queries or API calls
- Minimal JavaScript requirements
- CSS-based animations and interactions
- Image optimization through Jekyll plugins

### Caching Strategy
- Leverage browser caching for static assets
- GitHub Pages CDN for global distribution
- Minimal asset size through CSS optimization

## Accessibility Requirements

### Semantic Structure
- Use appropriate HTML5 semantic elements
- Maintain proper heading hierarchy
- Ensure logical reading order

### Interactive Elements
- Keyboard navigation support
- Screen reader compatibility
- Focus indicator visibility
- ARIA labels where needed

### Visual Requirements
- WCAG 2.1 AA color contrast ratios
- Scalable text and interface elements
- Responsive design for various devices