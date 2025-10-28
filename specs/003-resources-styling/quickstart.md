# Quick Start Guide: Resources Page Styling Customization

**Feature**: 003-resources-styling
**Audience**: Developers maintaining or extending the Resources page
**Last Updated**: 2025-10-28

## Overview

This guide provides quick reference for common customization tasks on the Resources page after the card-based styling implementation. Use this when you need to add tools, adjust styling, or modify repository display.

## Prerequisites

- Basic knowledge of HTML and CSS
- Text editor or IDE
- Jekyll local development environment (optional but recommended)
- Git for version control

## Quick Reference: Common Tasks

### Task 1: Add a New Computational Tool

**File**: `_pages/resources.html`
**Location**: Inside `<div class="tools-grid">` section (currently lines 17-198)

**Template**:
```html
<article class="tool-card">
  <header class="tool-card__header">
    <h3 class="tool-card__title">TOOL_NAME</h3>
    <span class="tool-badge tool-badge--CATEGORY">CATEGORY_LABEL</span>
  </header>
  <p class="tool-card__desc">Brief description of the tool and its purpose</p>
  <div class="tool-card__links">
    <!-- Include one or both of the following: -->

    <!-- For official website: -->
    <a href="https://official-site.com" target="_blank" rel="noopener" class="tool-btn tool-btn--primary">
      <i class="fa fa-external-link"></i> Official Site
    </a>

    <!-- For GitHub repository: -->
    <a href="https://github.com/org/repo" target="_blank" rel="noopener" class="tool-btn tool-btn--secondary">
      <i class="fa fa-github"></i> GitHub
    </a>

    <!-- For GitLab repository: -->
    <a href="https://gitlab.com/org/repo" target="_blank" rel="noopener" class="tool-btn tool-btn--secondary">
      <i class="fa fa-gitlab"></i> GitLab
    </a>
  </div>
</article>
```

**Category Options** (replace `CATEGORY` and `CATEGORY_LABEL`):
| Category Label | CSS Class |
|----------------|-----------|
| DFT Simulation | `tool-badge--dft` |
| High-Throughput | `tool-badge--highthroughput` |
| Machine Learning | `tool-badge--ml` |
| Programming Language | `tool-badge--lang` |
| Molecular Dynamics | `tool-badge--md` |
| Deep Learning | `tool-badge--dl` |
| Active Learning | `tool-badge--al` |

**Example** (Adding a new DFT tool):
```html
<article class="tool-card">
  <header class="tool-card__header">
    <h3 class="tool-card__title">Quantum ESPRESSO</h3>
    <span class="tool-badge tool-badge--dft">DFT Simulation</span>
  </header>
  <p class="tool-card__desc">Open-source suite for ab-initio electronic structure calculations and materials modeling</p>
  <div class="tool-card__links">
    <a href="https://www.quantum-espresso.org" target="_blank" rel="noopener" class="tool-btn tool-btn--primary">
      <i class="fa fa-external-link"></i> Official Site
    </a>
    <a href="https://github.com/QEF/q-e" target="_blank" rel="noopener" class="tool-btn tool-btn--secondary">
      <i class="fa fa-github"></i> GitHub
    </a>
  </div>
</article>
```

### Task 2: Add a New Tool Category

**File**: `_pages/resources.html`
**Location**: Inside `<style>` block (currently lines 247-632)

**Steps**:

1. Choose category name and CSS class suffix (e.g., "Visualization" → `vis`)

2. Pick accessible color scheme:
   - Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - Ensure 4.5:1 contrast ratio (WCAG AA)
   - Recommended: light background + dark text

3. Add CSS rule in the badge section (around line 408-458):
```css
.tool-badge--vis {
  background: #e0f2fe;  /* Light blue background */
  color: #0369a1;       /* Dark blue text */
  border-color: #7dd3fc; /* Medium blue border */
}
```

4. Use the new category in tool cards:
```html
<span class="tool-badge tool-badge--vis">Visualization</span>
```

**Color Palette Suggestions**:
- Teal: `bg: #ccfbf1, text: #115e59, border: #5eead4`
- Rose: `bg: #ffe4e6, text: #9f1239, border: #fda4af`
- Slate: `bg: #f1f5f9, text: #334155, border: #cbd5e1`

### Task 3: Change Card Grid Layout

**File**: `_pages/resources.html`
**Location**: `.tools-grid` and `.repo-grid` CSS rules (around lines 355-360, 248-253)

**Current Grid**:
```css
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

**Common Adjustments**:

**More columns** (narrower cards):
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

**Fewer columns** (wider cards):
```css
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
```

**Fixed 3 columns on desktop**:
```css
grid-template-columns: repeat(3, 1fr);

@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 640px) {
  grid-template-columns: 1fr;
}
```

**Larger gap between cards**:
```css
gap: 32px;  /* Increase from 24px */
```

### Task 4: Customize Badge Colors

**File**: `_pages/resources.html`
**Location**: Badge color definitions (around lines 418-500)

**Current Approach**: Each category has one CSS rule defining colors.

**To Change a Category's Colors**:

1. Find the badge CSS class (e.g., `.tool-badge--ml` for Machine Learning)

2. Update the color values:
```css
.tool-badge--ml {
  background: #NEW_BG_COLOR;
  color: #NEW_TEXT_COLOR;
  border-color: #NEW_BORDER_COLOR;
}
```

3. Verify contrast ratio using [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - Minimum: 4.5:1 for WCAG AA compliance

**Example** (Making ML badge more vibrant):
```css
.tool-badge--ml {
  background: #fce7f3;  /* Kept light pink */
  color: #831843;       /* Darker pink (was #be185d) */
  border-color: #f9a8d4; /* Kept medium pink */
}
```

### Task 5: Adjust Card Hover Effects

**File**: `_pages/resources.html`
**Location**: `.tool-card:hover` and `.repo-card:hover` rules (around lines 374-387, not explicitly in current code)

**Current Hover Effect**:
```css
.tool-card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
```

**Common Adjustments**:

**Stronger lift**:
```css
.tool-card:hover {
  transform: translateY(-4px);  /* Increase from -2px */
}
```

**Different shadow**:
```css
.tool-card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);  /* Larger, darker */
}
```

**Add border color change**:
```css
.tool-card:hover {
  border-color: #1e40af;  /* Change border color on hover */
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
```

**Subtle scale effect**:
```css
.tool-card:hover {
  transform: scale(1.02);  /* Slight grow instead of lift */
}
```

### Task 6: Customize Button Styling

**File**: `_pages/resources.html`
**Location**: `.tool-btn--primary` and `.tool-btn--secondary` rules (around lines 539-580)

**Current Primary Button** (Official Site):
```css
.tool-btn--primary {
  background: transparent;
  color: #1e40af;
  border-color: rgba(30,64,175,0.2);
}

.tool-btn--primary:hover {
  background: #dbeafe;
  border-color: #1e40af;
}
```

**Common Adjustments**:

**Solid background primary button**:
```css
.tool-btn--primary {
  background: #1e40af;      /* Solid blue */
  color: #ffffff;           /* White text */
  border-color: #1e40af;
}

.tool-btn--primary:hover {
  background: #1e3a8a;      /* Darker blue */
}
```

**Different secondary button style**:
```css
.tool-btn--secondary {
  background: transparent;
  color: #6b7280;
  border-color: #d1d5db;
}

.tool-btn--secondary:hover {
  background: #f9fafb;
  border-color: #6b7280;
}
```

### Task 7: Remove a Tool

**File**: `_pages/resources.html`
**Location**: Find the tool's `<article class="tool-card">` block in the tools grid

**Steps**:

1. Search for the tool name in the file (Ctrl+F / Cmd+F)

2. Select the entire `<article class="tool-card">...</article>` block

3. Delete the block

4. Save and test locally

**Example** (Removing SISSO):
- Find the article starting with `<h3 class="tool-card__title">SISSO</h3>`
- Delete from opening `<article class="tool-card">` to closing `</article>`
- Ensure no extra blank lines left

### Task 8: Change Repository Sort Order

**File**: `_pages/resources.html`
**Location**: Liquid template (line 209) and JavaScript (line 702)

**Current Sort**: By star count (descending)

**Liquid Template** (Jekyll build):
```liquid
{% assign repos = site.github.public_repositories | sort: "stargazers_count" | reverse %}
```

**JavaScript Fallback** (client-side):
```javascript
repos.sort((a,b) => (b.stargazers_count||0) - (a.stargazers_count||0))
```

**Alternative Sort Options**:

**By last update (most recent first)**:
```liquid
{% assign repos = site.github.public_repositories | sort: "pushed_at" | reverse %}
```
```javascript
repos.sort((a,b) => new Date(b.pushed_at) - new Date(a.pushed_at))
```

**By name (alphabetical)**:
```liquid
{% assign repos = site.github.public_repositories | sort: "name" %}
```
```javascript
repos.sort((a,b) => a.name.localeCompare(b.name))
```

**By fork count (most forked first)**:
```liquid
{% assign repos = site.github.public_repositories | sort: "forks_count" | reverse %}
```
```javascript
repos.sort((a,b) => (b.forks_count||0) - (a.forks_count||0))
```

## Testing Your Changes

### Local Testing

1. **Start Jekyll server**:
   ```bash
   cd C:\Users\lenovo\Desktop\academicpages\guodong.github.io
   bundle exec jekyll serve
   ```

2. **Open browser**: Navigate to `http://localhost:4000/resources/`

3. **Test responsive behavior**:
   - Open browser DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
   - Test mobile (375px), tablet (768px), desktop (1280px) views

4. **Verify hover effects**: Hover over cards and buttons

5. **Check color contrast**: Use browser extensions like "Accessibility Insights" or "axe DevTools"

### Validation Checklist

After making changes, verify:

- [ ] Page loads without errors (check browser console)
- [ ] All tool cards display correctly
- [ ] Category badges show correct colors
- [ ] All links work and open in new tabs
- [ ] Hover effects work smoothly
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Repository section loads (if GitHub metadata available)
- [ ] No horizontal scrolling on mobile

## Common Issues & Solutions

### Issue 1: Card Overflowing Grid

**Symptom**: Card content breaks out of card boundaries

**Cause**: Long words without spaces (URLs, code snippets)

**Solution**: Add word-break CSS to description:
```css
.tool-card__desc {
  word-break: break-word;
  overflow-wrap: break-word;
}
```

### Issue 2: Uneven Card Heights

**Symptom**: Cards in the same row have different heights

**Cause**: Varying description lengths

**Solutions**:

**Option 1** (Accept variable heights): No action needed, CSS Grid handles naturally

**Option 2** (Force equal heights): Limit description lines:
```css
.tool-card__desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;  /* Max 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### Issue 3: Badge Color Not Showing

**Symptom**: Badge appears with default styling

**Cause**: CSS class name mismatch

**Solution**:
- Verify badge HTML uses correct class (e.g., `tool-badge--ml`)
- Check CSS rule exists for that class
- Ensure no typos in class name (case-sensitive)

### Issue 4: Repository Section Empty

**Symptom**: No repositories displayed, fallback message shows

**Cause**: Jekyll GitHub metadata unavailable (common in local development)

**Solution**:
- JavaScript fallback should load repos from GitHub API
- Check browser console for errors
- Verify GitHub username in `_config.yml`: `author.github: "your-username"`
- Check network tab for API request (may be rate-limited)

### Issue 5: Hover Effect Not Working

**Symptom**: Cards don't respond to mouse hover

**Cause**: CSS specificity conflict or syntax error

**Solution**:
- Check browser DevTools for CSS errors
- Verify `:hover` pseudo-class syntax
- Ensure no conflicting CSS rules with higher specificity
- Test in different browsers (Chrome, Firefox, Safari)

## Advanced Customizations

### Add Search/Filter Functionality

To add category filtering (requires JavaScript):

1. Add filter buttons above tools grid:
```html
<div class="filter-buttons">
  <button class="filter-btn active" data-category="all">All</button>
  <button class="filter-btn" data-category="dft">DFT</button>
  <button class="filter-btn" data-category="ml">Machine Learning</button>
  <!-- Add more categories -->
</div>
```

2. Add data attributes to tool cards:
```html
<article class="tool-card" data-category="dft">
```

3. Add JavaScript filtering logic:
```javascript
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.dataset.category;
    document.querySelectorAll('.tool-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

### Load Tools from Data File

To manage tools in YAML instead of HTML:

1. Create `_data/tools.yml`:
```yaml
- name: VASP
  category: DFT Simulation
  description: Vienna Ab initio Simulation Package
  official_url: https://www.vasp.at
  repository_url: null
  repository_type: null

- name: AFLOW
  category: High-Throughput
  description: Automatic FLOW for materials discovery
  official_url: https://aflow.org/documentation
  repository_url: https://github.com/aflow-org/aflow
  repository_type: GitHub
```

2. Replace static HTML with Liquid loop:
```liquid
{% for tool in site.data.tools %}
  <article class="tool-card">
    <header class="tool-card__header">
      <h3 class="tool-card__title">{{ tool.name }}</h3>
      <span class="tool-badge tool-badge--{{ tool.category | downcase | replace: ' ', '' }}">
        {{ tool.category }}
      </span>
    </header>
    <p class="tool-card__desc">{{ tool.description }}</p>
    <div class="tool-card__links">
      {% if tool.official_url %}
        <a href="{{ tool.official_url }}" target="_blank" rel="noopener" class="tool-btn tool-btn--primary">
          <i class="fa fa-external-link"></i> Official Site
        </a>
      {% endif %}
      {% if tool.repository_url %}
        <a href="{{ tool.repository_url }}" target="_blank" rel="noopener" class="tool-btn tool-btn--secondary">
          <i class="fa fa-{% if tool.repository_type == 'GitLab' %}gitlab{% else %}github{% endif %}"></i>
          {{ tool.repository_type }}
        </a>
      {% endif %}
    </div>
  </article>
{% endfor %}
```

**Benefits**:
- Easier to add/edit tools (YAML is simpler than HTML)
- Tools can be reused elsewhere in the site
- Simpler to maintain for non-technical contributors

## Resources

### Documentation
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Font Awesome Icons](https://fontawesome.com/v4.7.0/icons/)

### Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verify color accessibility
- [Can I Use](https://caniuse.com/) - Check browser support for CSS features
- [GitHub REST API Docs](https://docs.github.com/en/rest) - For repository data

### Color Palettes
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) - Accessible color palettes
- [Coolors](https://coolors.co/) - Color scheme generator
- [Color Hunt](https://colorhunt.co/) - Curated color palettes

## Getting Help

If you encounter issues:

1. Check this guide's "Common Issues & Solutions" section
2. Review the spec and data model in `specs/003-resources-styling/`
3. Test in multiple browsers to isolate browser-specific issues
4. Use browser DevTools to inspect CSS and debug JavaScript
5. Consult Jekyll documentation for Liquid template syntax
6. Search GitHub issues in academicpages/academicpages.github.io repository

## Conclusion

This quick start guide covers the most common customization scenarios for the Resources page. For more complex modifications, refer to the full specification in `specs/003-resources-styling/spec.md` and data model in `specs/003-resources-styling/data-model.md`.

**Remember**:
- Always test changes locally before deploying
- Verify accessibility (color contrast, keyboard navigation)
- Maintain responsive behavior across device sizes
- Follow the existing code style and conventions
- Commit changes to version control with clear messages

Happy customizing!
