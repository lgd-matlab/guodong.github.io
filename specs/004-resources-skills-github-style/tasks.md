# Tasks: Resources Page Skills and GitHub Projects Styling

**Input**: Design documents from `/specs/004-resources-skills-github-style/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Manual testing approach - no automated tests specified in feature requirements

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Jekyll Site**: `_pages/`, `_includes/`, `_sass/`, `assets/` at repository root
- **Documentation**: `specs/004-resources-skills-github-style/`
- **Target File**: Primary modifications in `_pages/resources.html`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure preparation

- [X] T001 Create backup of current resources.html file
- [X] T002 Verify Jekyll server runs correctly on current branch
- [X] T003 Document current Resources page structure and existing CSS patterns

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core analysis and preparation that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Analyze existing Tools section CSS patterns in _pages/resources.html
- [X] T005 Identify current Skills data sources in _pages/cv.md
- [X] T006 Document existing GitHub Projects structure and styling
- [X] T007 Verify existing badge color system and hover effects
- [X] T008 Confirm responsive breakpoints and mobile patterns
- [X] T009 Validate current accessibility implementation

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Skills in Professional Card Layout (Priority: P1) 🎯 MVP

**Goal**: Create a new Skills section with professional card-based layout matching the Tools section styling

**Independent Test**: Visit Resources page → Skills section displays with card layout, bold borders, hover effects, and proper category organization without affecting other sections

### Implementation for User Story 1

- [X] T010 [US1] Add Skills section HTML structure after Tools section in _pages/resources.html
- [X] T011 [US1] Create Programming Languages skills cards in _pages/resources.html
- [X] T012 [US1] Create Software Tools skills cards in _pages/resources.html
- [X] T013 [US1] Create Research Methods skills cards in _pages/resources.html
- [X] T014 [US1] Add Skills section CSS styling in _pages/resources.html
- [X] T015 [US1] Apply .tool-card classes to all Skills cards in _pages/resources.html
- [X] T016 [US1] Add category badges with appropriate colors to Skills cards in _pages/resources.html
- [X] T017 [US1] Add action buttons and links to Skills cards in _pages/resources.html
- [X] T018 [US1] Implement responsive Skills grid layout in _pages/resources.html
- [X] T019 [US1] Add section divider between Skills and GitHub Projects in _pages/resources.html

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View GitHub Projects in Professional Repository Layout (Priority: P1)

**Goal**: Update existing GitHub Projects section styling to match the Tools section's professional card layout

**Independent Test**: Visit Resources page → GitHub Projects section displays with 4px bold borders, consistent typography, proper metadata display, and matching visual hierarchy

### Implementation for User Story 2

- [X] T020 [US2] Update .repo-card border styling to 4px solid #000 in _pages/resources.html
- [X] T021 [US2] Update .repo-card box-shadow to none in _pages/resources.html
- [X] T022 [US2] Increase .repo-card title font-size to 1.25rem in _pages/resources.html
- [X] T023 [US2] Add consistent hover effects to .repo-card in _pages/resources.html
- [X] T024 [US2] Update .repo-card padding and spacing to match .tool-card in _pages/resources.html
- [X] T025 [US2] Ensure .repo-card border-radius matches .tool-card (12px) in _pages/resources.html
- [X] T026 [US2] Update .repo-card meta styling for consistency in _pages/resources.html
- [X] T027 [US2] Verify .repo-card responsive behavior matches Tools section in _pages/resources.html

**Checkpoint**: At this point, User Story 2 should be fully functional and testable independently

---

## Phase 5: User Story 3 - Maintain Consistent Academic Visual Theme (Priority: P1)

**Goal**: Ensure visual consistency across all Resources page sections (Tools, Skills, GitHub Projects)

**Independent Test**: View entire Resources page → all sections follow same bold border styling, consistent spacing, harmonious typography, and unified professional academic aesthetic

### Implementation for User Story 3

- [X] T028 [US3] Audit border consistency across Tools, Skills, and Projects sections in _pages/resources.html
- [X] T029 [US3] Verify typography hierarchy consistency across all sections in _pages/resources.html
- [X] T030 [US3] Ensure badge color system applied consistently in _pages/resources.html
- [X] T031 [US3] Validate spacing and margin consistency between sections in _pages/resources.html
- [X] T032 [US3] Test hover state consistency across all card types in _pages/resources.html
- [X] T033 [US3] Verify responsive behavior consistency across all sections in _pages/resources.html
- [X] T034 [US3] Check color scheme harmony across all sections in _pages/resources.html
- [X] T035 [US3] Ensure semantic HTML structure consistency in _pages/resources.html

**Checkpoint**: At this point, User Story 3 should be fully functional and testable independently

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, performance optimization, and quality assurance

- [X] T036 Test complete Resources page functionality in local Jekyll server
- [X] T037 Validate responsive design on mobile devices (≤768px width)
- [X] T038 Check accessibility compliance with WCAG 2.1 AA standards
- [X] T039 Test hover effects and interactive elements across all sections
- [X] T040 Verify external links have proper rel="noopener" attributes
- [X] T041 Test page load performance (target: <3 seconds)
- [X] T042 Validate semantic HTML structure and heading hierarchy
- [X] T043 Cross-browser compatibility testing (Chrome, Firefox, Safari, Edge)
- [X] T044 Final visual consistency check against reference design
- [X] T045 Test page functionality with JavaScript disabled
- [X] T046 Optimize CSS and remove any unused styles
- [X] T047 Documentation updates and final code cleanup

**Checkpoint**: Implementation complete and ready for deployment

---

## Dependencies

### Story Completion Order

1. **Phase 1 & 2 (Setup & Foundational)**: T001-T009 must complete first
2. **User Stories (Can run in parallel after Phase 2)**:
   - **US1 (Skills)**: T010-T019
   - **US2 (GitHub Projects)**: T020-T027
   - **US3 (Visual Consistency)**: T028-T035
3. **Phase 6 (Polish)**: T036-T047 must complete after all user stories

### Critical Dependencies
- T004-T009 (Foundational analysis) → All user story tasks
- T010-T019 (Skills implementation) → T028-T035 (Visual consistency validation)
- T020-T027 (GitHub Projects update) → T028-T035 (Visual consistency validation)

## Parallel Execution Opportunities

### Within User Story 1 (Skills Section)
- T011, T012, T013: Creating different skill categories can be done in parallel
- T016, T017: Badge and button styling can be done in parallel

### Within User Story 2 (GitHub Projects)
- T020, T021, T025: Border, shadow, and radius updates can be done in parallel
- T022, T026: Typography and meta styling can be done in parallel

### Within User Story 3 (Visual Consistency)
- T028, T029, T030: Border, typography, and badge consistency checks can be done in parallel

### Within Phase 6 (Polish)
- T036, T037, T038: Functional, responsive, and accessibility testing can be done in parallel
- T043, T044, T045: Browser testing, visual consistency, and JavaScript-disabled testing can be done in parallel

## Implementation Strategy

### MVP Scope (First Deliverable)
**Complete User Story 1 only**: Skills section with professional card layout
- Tasks: T001-T009 (Setup) + T010-T019 (Skills implementation)
- Independent test: Skills section functional without affecting existing content
- Value: Immediate visual enhancement with new content section

### Incremental Delivery
1. **MVP Release**: US1 (Skills section) → Test and validate
2. **Feature Complete**: Add US2 (GitHub Projects styling) → Full visual consistency
3. **Production Ready**: Add US3 (Cross-section consistency) + Phase 6 (Polish)

### Risk Mitigation
- **Backup Strategy**: T001 creates backup before any modifications
- **Incremental Testing**: Each user story independently testable
- **Rollback Plan**: Individual sections can be reverted without affecting others
- **Performance Guard**: T041 ensures page load time requirements met

## Success Metrics

### Completion Criteria per User Story
- **US1**: Skills section displays with card layout, functional links, responsive behavior
- **US2**: GitHub Projects styling matches Tools section (4px borders, consistent typography)
- **US3**: Visual harmony achieved across all Resources page sections

### Quality Gates
- All interactive elements functional
- Responsive design works on mobile devices
- Accessibility compliance maintained
- Page load performance under 3 seconds
- Zero dark mode functionality remaining
- Visual consistency with reference design achieved