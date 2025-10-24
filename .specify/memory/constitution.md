<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0 (MINOR)
- Modified principles: None (existing principles I-V preserved)
- Added principles:
  * VI. Code Quality Standards
  * VII. Testing Discipline
  * VIII. User Experience Consistency
  * IX. Performance Requirements
- Added sections:
  * Development Standards (new section covering technical implementation)
- Removed sections: None
- Templates requiring updates:
  ✅ .specify/templates/plan-template.md - Already has Constitution Check
  ✅ .specify/templates/spec-template.md - No updates needed
  ✅ .specify/templates/tasks-template.md - No updates needed
- Follow-up TODOs: None
-->

# Academic Pages Constitution

## Core Principles

### I. Truth-First Content

All content published on this academic website MUST be verifiable and truthful. Every statement about research, education, experience, publications, and personal information MUST be:
- Based on actual facts from Guodong Lu's life and career
- Supported by verifiable evidence (publications, certificates, institutional records)
- Accurately dated and attributed
- Free from exaggeration or misrepresentation

**Rationale**: Academic integrity is paramount. This website serves as a professional portfolio and must maintain the highest standards of truthfulness to preserve credibility in the academic community.

### II. Information Freshness

Content MUST be regularly renewed and updated to reflect current status. Outdated information is considered harmful to accuracy:
- Research experience: Update within 1 month of project completion or milestone
- Publications: Add within 1 week of acceptance/publication
- CV/Resume: Update within 2 weeks of any career change
- Contact information: Verify quarterly
- Blog posts: Date-stamp all content; mark deprecated techniques/information

**Rationale**: An academic website loses value rapidly when information becomes stale. Regular updates ensure visitors receive accurate, current information about research activities and capabilities.

### III. Source Verification

Every factual claim MUST have a traceable source. Before adding content:
- Publications: Verify DOI, journal name, publication date, co-authors
- Education: Confirm degree, institution, dates, GPA from official transcripts
- Awards: Verify with issuing organization and date
- Research projects: Confirm with lab records, supervisor acknowledgment, or project documentation
- Skills: List only tools/methods with demonstrable experience (projects, publications, or coursework)

**Rationale**: Unverified claims damage credibility. Source verification protects against memory errors and ensures all content can be substantiated if questioned.

### IV. Incremental Enhancement

Website improvements MUST follow an incremental, version-controlled approach:
- All changes committed to Git with descriptive messages
- Major content additions reviewed before publishing
- New features/sections tested locally before deployment
- Breaking changes to structure documented in commit messages
- Regular backups maintained

**Rationale**: Version control provides an audit trail, enables rollback of errors, and creates accountability for all content changes.

### V. Accessibility & Clarity

Content MUST be clear, accessible, and professionally presented:
- Use proper academic English (target: international readership)
- Define specialized terminology on first use
- Structure content with clear headings and logical flow
- Ensure responsive design works on mobile devices
- Maintain consistent formatting across all pages
- Include alt text for images and figures

**Rationale**: Academic content should be accessible to the broadest possible audience, including international collaborators, potential supervisors, and researchers from adjacent fields.

### VI. Code Quality Standards

All code contributions (custom plugins, scripts, generators) MUST meet professional quality standards:
- Follow language-specific style guides (PEP 8 for Python, Ruby Style Guide for Ruby)
- Maintain clear, self-documenting code with meaningful variable/function names
- Include inline comments for complex logic or non-obvious decisions
- Modularize code into reusable functions/classes
- Avoid code duplication (DRY principle)
- Handle errors gracefully with appropriate error messages
- Remove commented-out code and debug statements before committing

**Rationale**: High-quality code is easier to maintain, debug, and extend. As an academic portfolio site, code quality demonstrates professional software development skills to potential collaborators and employers.

### VII. Testing Discipline

All custom functionality MUST be tested before deployment:
- Test locally with `bundle exec jekyll serve` before every push
- Verify responsive layout on mobile/tablet/desktop viewports
- Test all interactive elements (forms, navigation, search if implemented)
- Validate generated HTML with W3C validator for critical pages
- Test external links quarterly (publications, profiles, resources)
- Verify site builds successfully on GitHub Pages after deployment
- For custom scripts/generators: Include example inputs/outputs in documentation

**Rationale**: Broken functionality damages credibility and user experience. Thorough testing prevents publishing errors that could mislead visitors or create a negative impression.

### VIII. User Experience Consistency

Site-wide user experience MUST be consistent and intuitive:
- Maintain uniform navigation structure across all pages
- Use consistent color scheme, typography, and spacing (defined in theme)
- Ensure predictable interaction patterns (links, buttons, menus)
- Provide clear visual hierarchy (headings, sections, emphasis)
- Maintain fast page load times (< 3 seconds on standard connection)
- Ensure all pages have descriptive titles and meta descriptions
- Use consistent date formats throughout (YYYY-MM-DD or Month DD, YYYY)
- Maintain consistent citation style for publications (APA recommended)

**Rationale**: Consistency creates a professional appearance and improves usability. Visitors should be able to navigate intuitively without confusion or cognitive load.

### IX. Performance Requirements

Site performance MUST meet the following standards:
- Page load time: < 3 seconds on 4G connection
- Mobile PageSpeed Insight score: > 80
- Desktop PageSpeed Insight score: > 90
- Optimize images: compress to < 200KB per image, use WebP where supported
- Minimize HTTP requests: combine CSS/JS where possible
- Lazy-load images below the fold
- Enable browser caching for static assets
- Minify CSS and JavaScript for production
- Limit use of external dependencies that block rendering

**Rationale**: Academic visitors often access sites from various network conditions globally. Fast-loading pages demonstrate technical competence and respect for visitors' time. Performance also impacts SEO and accessibility.

## Content Management Standards

### Publication Requirements

When adding publications:
- MUST include: Title, Authors (with position), Journal, Year, DOI (if available)
- MUST include: Abstract (especially for first-author papers)
- SHOULD include: PDF link (if permissible), citation count, journal impact factor
- MUST mark status accurately: Published, Accepted, Under Review, In Preparation
- MUST update status when changed (e.g., from Accepted to Published)

### CV/Resume Synchronization

CV content MUST stay synchronized with other site sections:
- Publications list matches `_publications/` collection
- Research experience aligns with project descriptions
- Skills listed match demonstrated usage in research
- Dates are consistent across CV, About page, and timeline

### Blog Content Standards

Blog posts MUST follow these guidelines:
- Include clear publication date
- Tag with relevant categories (Tutorial, Research Notes, Tools, etc.)
- Provide context for technical tutorials (software versions, environment)
- Update tutorials when methods become outdated or deprecated
- Credit sources and inspirations appropriately

## Development Standards

### Code Review Requirements

Before merging code changes:
- Review code for adherence to Principle VI (Code Quality Standards)
- Verify local testing completed per Principle VII (Testing Discipline)
- Check for performance regressions per Principle IX (Performance Requirements)
- Ensure UX consistency per Principle VIII (User Experience Consistency)

### Dependency Management

When adding new dependencies (Ruby gems, npm packages):
- Document why the dependency is needed
- Verify the dependency is actively maintained
- Check for security vulnerabilities
- Prefer lightweight alternatives when available
- Lock dependency versions in Gemfile.lock/package-lock.json

### Build Process

The site build process MUST:
- Complete without errors or warnings
- Generate valid HTML/CSS
- Produce accessible markup (WCAG 2.1 AA compliance goal)
- Create properly formatted sitemaps and feeds
- Succeed on both local and GitHub Pages environments

## Quality Assurance & Verification

### Pre-Publication Checklist

Before deploying changes, verify:
- [ ] All new facts checked against source documents
- [ ] Dates in ISO format or consistent format (YYYY-MM-DD preferred)
- [ ] No dead links (publications, external references)
- [ ] Local Jekyll build succeeds without errors
- [ ] Mobile responsive layout verified
- [ ] Git commit message describes changes accurately
- [ ] Code quality standards met (Principle VI)
- [ ] Testing completed (Principle VII)
- [ ] UX consistency maintained (Principle VIII)
- [ ] Performance requirements met (Principle IX)

### Quarterly Review Process

Every 3 months, conduct systematic review:
- Review CV for outdated information
- Verify publication status updates
- Check for deprecated blog content
- Update skills section based on recent work
- Review contact information accuracy
- Test all external links
- Run PageSpeed Insights and address regressions
- Validate HTML/CSS on key pages
- Review analytics for UX issues (if implemented)

### Annual Archive Policy

Once per year:
- Archive completed projects with clear end dates
- Mark historical blog posts with year context
- Update "current research" to reflect actual current work
- Review entire site for consistency and accuracy
- Audit dependencies for security updates
- Review and update code quality practices

## Governance

### Amendment Procedure

Constitution amendments require:
1. Documented rationale for change
2. Impact analysis on existing content
3. Version increment following semantic versioning
4. Propagation of changes to dependent templates
5. Git commit with clear description

### Compliance Enforcement

All content and code updates MUST:
- Pass the Pre-Publication Checklist
- Align with Core Principles I-IX
- Follow Content Management Standards
- Follow Development Standards (for code changes)
- Be version-controlled in Git

### Conflict Resolution

When principles conflict:
1. **Truth-First** (Principle I) supersedes all other principles
2. **Source Verification** (Principle III) takes precedence over convenience
3. **Information Freshness** (Principle II) should not compromise accuracy
4. **Performance** (Principle IX) should not compromise **Accessibility** (Principle V)
5. **Testing** (Principle VII) is mandatory before addressing **Performance** (Principle IX)
6. When in doubt, delay publication until verification complete

### Template Dependencies

This constitution governs:
- `.specify/templates/plan-template.md` - Feature planning must align with all principles
- `.specify/templates/spec-template.md` - Requirements must include verification sources and testing criteria
- `.specify/templates/tasks-template.md` - Tasks must include validation, testing, and quality steps
- Runtime updates to website content (all pages, posts, publications)
- Code changes (plugins, scripts, generators, theme modifications)

**Version**: 1.1.0 | **Ratified**: 2025-10-21 | **Last Amended**: 2025-10-21
