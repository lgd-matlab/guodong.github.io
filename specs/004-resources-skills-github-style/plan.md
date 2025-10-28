# Implementation Plan: Resources Page Skills and GitHub Projects Styling

**Branch**: `004-resources-skills-github-style` | **Date**: 2025-10-28 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-resources-skills-github-style/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Transform the Resources page Skills and GitHub Projects sections to match the professional academic aesthetic shown in the reference image. This involves implementing card-based layouts with bold borders, consistent styling across all sections, and removing dark mode functionality while maintaining responsive design and accessibility standards.

## Technical Context

**Language/Version**: Jekyll 3.9.x (Ruby-based static site generator)
**Primary Dependencies**: Minimal Mistakes theme, SASS/SCSS, jQuery 3.7.1, Font Awesome icons
**Storage**: Static files (Markdown, HTML, SCSS) - no database required
**Testing**: Manual testing via Jekyll serve, responsive design testing
**Target Platform**: GitHub Pages (static hosting) with responsive mobile/desktop support
**Project Type**: Web (static site) - Jekyll-based academic portfolio
**Performance Goals**: Page load <3 seconds, 95% mobile responsiveness score
**Constraints**: GitHub Pages build limits, WCAG 2.1 AA accessibility compliance, no JavaScript dependencies for core functionality
**Scale/Scope**: Single page styling update affecting Skills and GitHub Projects sections only

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Note: Constitution file appears to be template-only. Proceeding with standard web development best practices for static site styling.

## Project Structure

### Documentation (this feature)

```text
specs/004-resources-skills-github-style/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
```text
# Jekyll Academic Portfolio - Static Site Structure
_pages/
├── resources.html       # Target file for styling modifications
└── ...

_includes/
├── masthead.html        # Navigation components (already modified in previous feature)
└── ...

_sass/
├── _minimal-mistakes.scss  # Main SCSS file
├── _variables.scss         # Theme variables
└── ...

assets/
├── css/
│   └── main.scss          # Compiled CSS output
└── js/
    └── _main.js           # JavaScript (minimal for static functionality)

tests/
└── manual/                # Manual testing procedures
    ├── responsive-test.md
    └── accessibility-check.md
```

**Structure Decision**: Jekyll static site with inline CSS in HTML files. Primary modifications will be in `_pages/resources.html` following the existing pattern established in the previous Resources page styling feature.

## Complexity Tracking

No constitution violations identified. Implementation follows standard web development best practices for static site styling with minimal complexity.

## Phase 0 Complete ✅

**Research Completed**: All technical unknowns resolved through code analysis of existing Resources page structure.

**Key Decisions**:
- Reuse existing `.tool-card` pattern for Skills section
- Update `.repo-card` styling to match Tools section (4px borders)
- No dark mode removal required (completed in previous feature)
- Static content approach maintained for performance

**Artifacts Generated**:
- [research.md](./research.md) - Technical analysis and design decisions
- [data-model.md](./data-model.md) - Content structure and validation rules
- [contracts/interfaces.md](./interfaces.md) - HTML/CSS interface contracts
- [quickstart.md](./quickstart.md) - Implementation guide

## Phase 1 Complete ✅

**Design Completed**: Data models and interface contracts defined for static content structure.

**Implementation Ready**: All technical decisions documented, agent context updated with Jekyll stack information.

**Next Phase**: Ready for `/speckit.tasks` to generate detailed implementation tasks.
