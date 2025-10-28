# Feature Specification: Citation Badge Styling Update

**Feature Branch**: `002-citation-badge-styling`
**Created**: 2025-10-28
**Status**: Draft
**Input**: User description: "for plblication page,the citationons counts(VIEW ON OEPNALEX) should be changed,which  citations counts  style should be same with publication page in  reference academic page:["C:\Users\lenovo\Desktop\academicpages\academic-hue-tune"],not purple"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Citation Counts with Consistent Branding (Priority: P1)

When a visitor views the publications page, they see citation count badges that match the site's overall academic warm theme, creating a professional and cohesive visual experience.

**Why this priority**: This is the core requirement - ensuring visual consistency across the site. The purple gradient currently used stands out inappropriately against the warm academic color scheme.

**Independent Test**: Navigate to the publications page and verify that citation badges display with warm brown/tan colors matching the reference site design, not purple.

**Acceptance Scenarios**:

1. **Given** a visitor is on the publications page, **When** they view a publication entry with citation data, **Then** the citation badge displays with warm brown/tan accent colors consistent with the site theme
2. **Given** a visitor is on the publications page, **When** they view multiple publications, **Then** all citation badges use the same consistent warm color scheme
3. **Given** a publication has citation data loading from OpenAlex, **When** the page first renders, **Then** the citation badge displays with the warm color scheme during the loading state

---

### User Story 2 - Hover Interaction Consistency (Priority: P2)

When a visitor hovers over a citation badge, the hover effect maintains the warm color theme without introducing jarring color changes.

**Why this priority**: Interactive states should maintain visual consistency. This enhances user experience but is secondary to the base styling.

**Independent Test**: Hover over citation badges and verify hover effects use warm theme colors, not purple or other inconsistent colors.

**Acceptance Scenarios**:

1. **Given** a visitor hovers over a citation badge, **When** the hover state activates, **Then** the badge applies elevation effects without changing to purple or off-brand colors
2. **Given** a visitor moves their cursor away from a citation badge, **When** the hover state deactivates, **Then** the badge returns smoothly to its base warm color state

---

### Edge Cases

- What happens when citation count is zero? Badge should still display with warm colors
- What happens when citation data fails to load? Loading state should use warm colors
- What happens when viewing the page on different screen sizes? Warm colors should remain consistent across responsive layouts
- What happens when site theme switches between light and dark mode? Warm color scheme should adapt appropriately to each mode

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Citation badges MUST display with warm brown/tan accent colors that match the reference academic site design
- **FR-002**: Citation badges MUST NOT use purple gradient colors (`#667eea` to `#764ba2`)
- **FR-003**: Citation badge styling MUST match the Badge component styling shown in the reference site at `C:\Users\lenovo\Desktop\academicpages\academic-hue-tune\src\pages\Publications.tsx`
- **FR-004**: Hover states for citation badges MUST maintain the warm color theme
- **FR-005**: Loading animation for citation counts MUST use warm colors
- **FR-006**: Citation badge styling MUST work consistently across all publications on the publications page
- **FR-007**: Color scheme MUST remain consistent whether citations are loaded dynamically or displayed statically

### Key Entities

- **Citation Badge**: Visual component displaying the number of citations for a publication, including icon, text label, and citation count number
- **Publication Entry**: Individual publication item on the publications page that may contain a citation badge

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All citation badges on the publications page display with warm brown/tan colors instead of purple
- **SC-002**: Citation badge colors visually match the warm academic theme used in the reference site's Badge components
- **SC-003**: Visitor can identify citation badges as part of the cohesive site design without purple gradient drawing inappropriate attention
- **SC-004**: Visual consistency is maintained across all citation badges regardless of loading state or citation count value

## Constraints & Dependencies

### Design Constraints

- Must maintain accessibility contrast ratios for text readability
- Must preserve existing badge functionality (hover effects, animations, clickable links)
- Color choices must work in both light and dark theme modes

### Dependencies

- Current implementation in `_sass/_custom.scss` lines 115-159
- Archive single template at `_includes/archive-single.html` lines 46-59
- Reference design from `academic-hue-tune` site using warm accent colors

### Out of Scope

- Changing citation badge layout or size
- Modifying citation data source or fetching mechanism
- Updating other UI elements beyond citation badges
- Changing text labels or icon selection

## Assumptions

- The reference site's warm brown/tan color scheme is the desired target aesthetic
- Current badge functionality (hover effects, loading animations) should be preserved
- The change applies to all citation badges site-wide, not just specific publications
- Accessibility requirements for color contrast will be met by the warm color scheme
- The site uses the "default" or similar academic theme configuration
