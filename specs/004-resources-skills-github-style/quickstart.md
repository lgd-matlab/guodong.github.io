# Quick Start Guide: Resources Page Skills and GitHub Projects Styling

**Feature**: Resources Page Skills and GitHub Projects Styling
**Branch**: `004-resources-skills-github-style`
**Last Updated**: 2025-10-28

## Overview

This guide provides step-by-step instructions to implement the Resources page Skills and GitHub Projects styling enhancements. The feature transforms the existing Resources page by adding a new Skills section and updating the GitHub Projects section to match the professional academic aesthetic of the Tools section.

## Prerequisites

### Development Environment
- Jekyll 3.9.x installed locally
- Ruby with Bundler
- Git repository access
- Text editor or IDE

### Required Files
- `_pages/resources.html` (primary target file)
- Access to existing Tools section styling for reference
- CV data in `_pages/cv.md` for Skills content reference

## Quick Implementation Steps

### Step 1: Backup Current Resources Page
```bash
cp _pages/resources.html _pages/resources.html.backup-$(date +%Y%m%d)
```

### Step 2: Add Skills Section HTML Structure

Add this HTML structure after the Tools section in `_pages/resources.html`:

```html
<!-- Skills Section -->
<section class="skills-section" id="skills">
  <div class="skills-header">
    <h2>Technical Skills</h2>
    <p class="skills-intro">
      Comprehensive technical skills for computational materials research and data analysis
    </p>
  </div>

  <div class="skills-grid">
    <!-- Programming Languages -->
    <article class="tool-card skill-card">
      <header class="tool-card__header">
        <h3 class="tool-card__title">
          <a href="#">Python</a>
        </h3>
        <span class="tool-badge tool-badge--lang">Programming Language</span>
      </header>
      <div class="tool-card__desc">
        Expert-level proficiency in scientific computing, data analysis, and machine learning applications
      </div>
      <div class="tool-card__links">
        <a href="https://docs.python.org/" class="tool-btn tool-btn--primary">
          <i class="fas fa-book"></i>
          Documentation
        </a>
        <a href="#github-projects" class="tool-btn tool-btn--secondary">
          <i class="fas fa-code"></i>
          Projects
        </a>
      </div>
    </article>

    <!-- Software Tools -->
    <article class="tool-card skill-card">
      <header class="tool-card__header">
        <h3 class="tool-card__title">
          <a href="#">VASP</a>
        </h3>
        <span class="tool-badge tool-badge--dft">DFT</span>
      </header>
      <div class="tool-card__desc">
        Advanced density functional theory calculations for materials property prediction
      </div>
      <div class="tool-card__links">
        <a href="https://www.vasp.at/" class="tool-btn tool-btn--primary">
          <i class="fas fa-external-link-alt"></i>
          Official Site
        </a>
      </div>
    </article>

    <!-- Add more skill cards as needed -->
  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">
```

### Step 3: Add Skills Section CSS

Add these CSS styles to the `<style>` section in `_pages/resources.html`:

```css
/* Skills Section Styling */
.skills-header {
  text-align: center;
  margin-bottom: 32px;
}

.skills-header h2 {
  margin-bottom: 12px;
  font-size: 1.8rem;
}

.skills-intro {
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

/* Responsive adjustments for skills */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skills-header h2 {
    font-size: 1.5rem;
  }

  .skills-intro {
    font-size: 1rem;
  }
}
```

### Step 4: Update GitHub Projects Section Styling

Update the existing `.repo-card` CSS in `_pages/resources.html`:

```css
/* Update existing repo-card styling to match tool-card */
.repo-card {
  background: #fff;
  border: 4px solid #000;  /* Changed from 1px to 4px */
  border-radius: 12px;
  box-shadow: none;       /* Changed from subtle shadow to none */
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  transition: all 0.3s ease;
}

.repo-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transform: translateY(-2px);
  border-color: #333;
}

/* Update repo card title to match tool card */
.repo-card__title {
  font-weight: 700;
  font-size: 1.25rem;     /* Changed from 1.0rem to 1.25rem */
  margin: 0;
  line-height: 1.25;
}

.repo-card__title a {
  color: #1e6bb8;
  text-decoration: none;
}

.repo-card__title a:hover {
  text-decoration: underline;
}
```

### Step 5: Test Local Development

Start Jekyll server and test changes:

```bash
# Kill any existing Jekyll processes
pkill -f jekyll

# Start local development server
bundle exec jekyll serve -l -H localhost

# Or run with auto-rebuild
bundle exec jekyll serve --livereload
```

Visit: `http://localhost:4000/guodong.github.io/resources/`

### Step 6: Validate Implementation

**Visual Checks**:
- [ ] Skills section displays with card layout
- [ ] All cards have bold 4px black borders
- [ ] Hover effects work (lift and shadow)
- [ ] GitHub Projects section styling matches Tools section
- [ ] Typography is consistent across all sections

**Responsive Testing**:
- [ ] Layout works on mobile (≤768px width)
- [ ] Cards stack vertically on small screens
- [ ] Text remains readable without zooming

**Accessibility Testing**:
- [ ] Semantic HTML structure (article, header tags)
- [ ] Proper heading hierarchy (h2 → h3)
- [ ] External links have `rel="noopener"`
- [ ] Color contrast meets WCAG standards

**Functionality Testing**:
- [ ] All links work correctly
- [ ] Navigation between sections works
- [ ] No JavaScript errors in browser console

## Customization Guide

### Adding New Skills

1. **Create New Skill Card**:
```html
<article class="tool-card skill-card">
  <header class="tool-card__header">
    <h3 class="tool-card__title">
      <a href="#">Skill Name</a>
    </h3>
    <span class="tool-badge tool-badge--category">Category</span>
  </header>
  <div class="tool-card__desc">
    Skill description and applications
  </div>
  <div class="tool-card__links">
    <a href="#" class="tool-btn tool-btn--primary">
      <i class="fas fa-icon"></i>
      Action
    </a>
  </div>
</article>
```

2. **Choose Badge Color**:
   - `tool-badge--lang` (Yellow) - Programming Languages
   - `tool-badge--ml` (Pink) - Machine Learning
   - `tool-badge--dft` (Blue) - DFT/Computational Chemistry
   - `tool-badge--md` (Green) - Molecular Dynamics
   - `tool-badge--highthroughput` (Indigo) - High-throughput Computing

### Modifying Colors

Update badge colors in the CSS:

```css
.tool-badge--newcategory {
  background: #your-color;
  color: #your-text-color;
  border-color: #your-border-color;
}
```

### Adjusting Layout

Modify grid columns:

```css
.skills-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Smaller minimum */
  gap: 20px; /* Tighter spacing */
}
```

## Troubleshooting

### Common Issues

**Cards not aligning properly**:
- Ensure all cards have the same CSS classes
- Check for missing `min-height` property
- Verify grid container has proper `display: grid`

**Borders not showing**:
- Check that `border: 4px solid #000` is applied
- Ensure no conflicting CSS rules override border
- Verify CSS specificity

**Responsive layout broken**:
- Test at different viewport sizes
- Check media query breakpoints
- Ensure `grid-template-columns` has fallback

**Hover effects not working**:
- Verify CSS transitions are applied
- Check for JavaScript conflicts
- Test in different browsers

### Performance Issues

**Page loading slowly**:
- Optimize images if any are added
- Minimize CSS in the `<style>` block
- Check for unused CSS rules

**Mobile performance**:
- Reduce animation complexity on mobile
- Optimize touch targets
- Test on actual mobile devices

## Deployment

### Commit Changes
```bash
git add _pages/resources.html
git commit -m "Add Skills section and update GitHub Projects styling

- Added comprehensive Skills section with card-based layout
- Updated GitHub Projects styling to match Tools section
- Applied consistent bold border styling (4px solid #000)
- Maintained responsive design and accessibility standards
- All sections now follow unified visual design language"
```

### Deploy to GitHub Pages
```bash
git push origin 004-resources-skills-github-style
```

### Merge to Main
```bash
git checkout main
git merge 004-resources-skills-github-style
git push origin main
```

## Next Steps

After implementation:

1. **Monitor Performance**: Check Google PageSpeed Insights
2. **Validate Accessibility**: Run accessibility testing tools
3. **Gather Feedback**: Collect user feedback on the new design
4. **Maintain Content**: Keep Skills and Projects sections updated

## Support

For issues or questions:
- Check the Jekyll documentation: https://jekyllrb.com/docs/
- Review Minimal Mistakes theme: https://mmistakes.github.io/minimal-mistakes/
- Test in different browsers for compatibility issues