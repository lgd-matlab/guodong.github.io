# Feature Specification: Resources Page Styling Update & Dark Mode Removal

**Feature Branch**: `003-resources-styling`
**Created**: 2025-10-28
**Updated**: 2025-10-28 (Expanded scope to include dark mode removal)
**Status**: Draft
**Input**: User description: "for Resources page, the displayed style of skills and github project should be changed, the style should be same with resources page in reference academic page" + "deleting all codes about opening dark mode, remove it in webpage and for the icon, also remove"

**Feature Scope**:
This feature has two main components:
1. **Resources Page Styling** - Update the Resources page to match the reference site's card-based grid layout
2. **Dark Mode Removal** - Completely remove dark mode functionality from the entire website including:
   - Theme toggle button/icon in navigation
   - JavaScript theme switching logic
   - Dark theme CSS files and styles
   - localStorage theme preference handling
   - System preference detection for dark mode

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Computational Tools in Card Grid Layout (Priority: P1)

When a visitor browses the Resources page, they should see the computational materials research tools displayed in a modern card-based grid layout similar to the reference site, with each tool showing its name, category badge, description, and relevant links.

**Why this priority**: This is the primary visual component of the Resources page and represents the most noticeable change. The card-based layout improves scannability and visual appeal compared to any previous list-based layout.

**Independent Test**: Can be fully tested by navigating to the Resources page and verifying the tools section displays in a responsive grid with styled cards containing badges, descriptions, and action buttons.

**Acceptance Scenarios**:

1. **Given** a visitor is on the Resources page, **When** they view the Computational Materials Research Tools section, **Then** they see tools arranged in a multi-column grid (responsive: 1 column on mobile, 2+ columns on desktop)
2. **Given** a visitor views a tool card, **When** they examine it, **Then** they see a clear visual hierarchy with title at top, category badge, description text, and action buttons at bottom
3. **Given** a visitor hovers over a tool card (desktop), **When** the mouse enters the card area, **Then** the card displays a subtle lift/shadow animation effect
4. **Given** a visitor views category badges, **When** they look at different tools, **Then** each category has a distinct color scheme (e.g., DFT Simulation in blue, Machine Learning in pink, High-Throughput in indigo)

---

### User Story 2 - Access Tool Links with Styled Buttons (Priority: P1)

When a visitor wants to visit a tool's official site or repository, they should see clearly labeled, consistently styled buttons within each card that distinguish between primary links (Official Site) and secondary links (GitHub/GitLab).

**Why this priority**: Button styling and link accessibility are critical for usability. Users need clear calls-to-action to access the actual tools being described.

**Independent Test**: Can be fully tested by clicking links within tool cards and verifying they open correctly in new tabs, and by checking that button styles are consistent and distinguish primary from secondary actions.

**Acceptance Scenarios**:

1. **Given** a tool has an official site link, **When** the visitor views the card, **Then** they see a primary-styled button with an external link icon and "Official Site" label
2. **Given** a tool has a GitHub/GitLab repository, **When** the visitor views the card, **Then** they see a secondary-styled button with the appropriate icon and "GitHub"/"GitLab" label
3. **Given** a visitor clicks any tool link button, **When** the link is activated, **Then** it opens in a new browser tab with appropriate security attributes (noopener, noreferrer)
4. **Given** a visitor hovers over a button, **When** the mouse enters the button area, **Then** the button displays hover state styling (background change, border emphasis)

---

### User Story 3 - View GitHub Projects in Repository Card Grid (Priority: P2)

When a visitor scrolls to the GitHub Projects section, they should see repositories displayed in a card-based grid layout matching the tools section styling, with each repository showing name, description, metadata (language, stars, forks, last update), and status badges.

**Why this priority**: While important for completeness, the GitHub Projects section is secondary to the tools showcase. It follows the same visual pattern established by the tools section.

**Independent Test**: Can be fully tested by navigating to the GitHub Projects section and verifying repositories are displayed in cards with complete metadata, proper badge styling for repository attributes, and consistent visual treatment with the tools section.

**Acceptance Scenarios**:

1. **Given** a visitor views the GitHub Projects section, **When** they scroll to it, **Then** they see repositories arranged in a responsive grid matching the tools section layout
2. **Given** a repository card is displayed, **When** the visitor examines it, **Then** they see repository owner/name as a linked title, description, and metadata row (language dot, star count, fork count, last update)
3. **Given** a repository has attributes (Fork, Template, Pages, Archived), **When** the visitor views the card, **Then** these attributes are displayed as small badge pills in the card header
4. **Given** repositories are loaded from Jekyll metadata, **When** the page renders, **Then** repositories are sorted by star count (descending) by default
5. **Given** GitHub metadata is unavailable, **When** the page loads, **Then** a fallback message displays with a direct link to the GitHub profile

---

### User Story 4 - No Dark Mode Toggle or Functionality (Priority: P1)

When a visitor browses any page on the website, they should see a clean, light-themed interface without any dark mode toggle button or icon, and the site should not attempt to detect or apply dark mode preferences.

**Why this priority**: Removing unused functionality simplifies the codebase and ensures consistent light-themed experience across all pages. Dark mode is not being used and adds unnecessary complexity.

**Independent Test**: Can be fully tested by inspecting the navigation bar for absence of theme toggle, checking browser localStorage for theme preferences (should not exist), and verifying all pages render in light mode only.

**Acceptance Scenarios**:

1. **Given** a visitor views the navigation bar on any page, **When** they look for theme controls, **Then** they see no sun/moon icon or theme toggle button
2. **Given** a visitor inspects browser localStorage, **When** they check for stored preferences, **Then** no "theme" key exists in localStorage
3. **Given** a visitor has system-level dark mode preference enabled, **When** they visit the site, **Then** the site displays in light mode regardless of system preference
4. **Given** a visitor browses multiple pages, **When** they navigate through the site, **Then** all pages consistently display in light mode
5. **Given** a developer inspects the HTML element, **When** they check for theme attributes, **Then** no `data-theme` attribute exists on the `<html>` element

---

### Edge Cases

- What happens when a tool has neither an official site link nor a repository link?
- What happens when a repository description is extremely long (200+ characters)?
- What happens when the GitHub API fails or is rate-limited and Jekyll metadata is unavailable?
- How does the card grid reflow on tablet sizes (768px-1024px)?
- What happens when tool titles or repository names contain special characters or are very long?
- How are language dots colored for different programming languages?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The tools section MUST display all computational materials research tools in a responsive grid layout (minimum 280px per card, auto-fit behavior)
- **FR-002**: Each tool card MUST display the tool name, category badge, description text, and relevant action buttons in a consistent visual hierarchy
- **FR-003**: Tool category badges MUST use distinct color schemes for each category (DFT Simulation, High-Throughput, Machine Learning, Molecular Dynamics, Deep Learning, Active Learning, Programming Language)
- **FR-004**: Tool cards MUST display hover effects including box-shadow enhancement and subtle upward translation (2px) on desktop devices
- **FR-005**: Each tool link button MUST include an appropriate icon (external link for official sites, GitHub logo for GitHub repos, GitLab logo for GitLab repos)
- **FR-006**: All external links MUST open in new tabs with security attributes (target="_blank", rel="noopener noreferrer")
- **FR-007**: The GitHub Projects section MUST display repositories in a card grid matching the tools section visual style
- **FR-008**: Each repository card MUST display owner/name as linked title, description (if available), and metadata row with language, star count, fork count, and last update date
- **FR-009**: Repository cards MUST display status badges when applicable (Fork, Template, Pages, Archived)
- **FR-010**: Repositories MUST be sorted by star count in descending order by default
- **FR-011**: A fallback message with GitHub profile link MUST display when Jekyll GitHub metadata is unavailable
- **FR-012**: The layout MUST be fully responsive with breakpoints for mobile (< 480px), tablet (480px-768px), and desktop (> 768px)
- **FR-013**: A section divider MUST visually separate the tools section from the GitHub Projects section
- **FR-014**: The tools section MUST include an introductory paragraph explaining the tool collection
- **FR-015**: The page MUST include a footer note explaining the data source for GitHub projects
- **FR-016**: The theme toggle button/icon MUST be removed from the navigation masthead
- **FR-017**: All JavaScript code for theme switching, detection, and localStorage handling MUST be removed
- **FR-018**: All dark theme CSS files MUST be removed from the codebase
- **FR-019**: All dark theme CSS selectors and styles MUST be removed from remaining stylesheets
- **FR-020**: The site MUST NOT respond to system-level dark mode preferences
- **FR-021**: The HTML element MUST NOT have any `data-theme` attributes applied
- **FR-022**: No theme-related data MUST be stored in browser localStorage

### Key Entities

- **Tool Card**: Represents a computational research tool with attributes: name, category, description, official site URL (optional), repository URL (optional), repository type (GitHub/GitLab)
- **Category Badge**: Visual indicator of tool type with attributes: label, color scheme, used for visual grouping
- **Repository Card**: Represents a GitHub repository with attributes: owner, name, description, language, star count, fork count, last push date, status flags (is_fork, is_template, has_pages, archived)
- **Repository Badge**: Small pill indicator showing repository attributes (Fork, Template, Pages, Archived)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors can distinguish between different tool categories at a glance through consistent color-coded badges
- **SC-002**: The page layout adapts smoothly across all device sizes (mobile, tablet, desktop) without horizontal scrolling or layout breaks
- **SC-003**: All interactive elements (cards, buttons, links) provide clear visual feedback on hover and click
- **SC-004**: All tool and repository information is readable with appropriate font sizing (minimum 0.90rem for body text, 1.0rem+ for titles)
- **SC-005**: Card grids utilize available horizontal space efficiently while maintaining comfortable reading width (maximum 7xl container)
- **SC-006**: The Resources page loading and rendering completes without visual layout shifts or reflows
- **SC-007**: External links consistently open in new tabs without affecting the current browsing session
- **SC-008**: The navigation bar displays without any theme toggle controls across all pages
- **SC-009**: The website maintains a consistent light theme appearance regardless of user system preferences
- **SC-010**: JavaScript bundle size is reduced by removing theme switching code
- **SC-011**: CSS file size is reduced by removing dark theme styles

