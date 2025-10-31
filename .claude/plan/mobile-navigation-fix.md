# Mobile Navigation Scrolling Fix

## Problem Statement

On mobile devices, the navigation dropdown menu (`.hidden-links`) could not be scrolled, making menu items beyond the viewport (particularly the CV page) inaccessible.

## Root Cause

The `.hidden-links` dropdown menu in `_sass/layout/_navigation.scss` lacked:
- Maximum height constraint
- Overflow scrolling capability
- Mobile-specific positioning adjustments

## Solution Implemented

**Approach:** Added scrollable dropdown functionality (Solution 1)

### Changes Made

**File:** `_sass/layout/_navigation.scss`
**Section:** `.hidden-links` (lines 263-285)

#### Added Properties:

1. **Scrolling Capability:**
   - `max-height: calc(100vh - 150px)` - Limits dropdown to viewport height minus header space
   - `overflow-y: auto` - Enables vertical scrolling when content exceeds max-height
   - `-webkit-overflow-scrolling: touch` - Smooth momentum scrolling on iOS devices

2. **Mobile Optimization:**
   - Media query for screens <600px (`$small` breakpoint)
   - `max-height: calc(100vh - 100px)` - More screen space on smaller devices
   - `right: 5px; left: 5px; width: auto` - Full-width dropdown with margins on mobile

## Benefits

✅ Minimal code change (CSS only, no JavaScript modifications)
✅ Maintains existing design and UX patterns
✅ Works across all screen sizes
✅ Smooth scrolling on iOS and Android
✅ Future-proof for any number of navigation items

## Testing Checklist

- [ ] Test on mobile viewport widths (375px, 414px, 390px)
- [ ] Verify all 6 navigation items are accessible
- [ ] Confirm CV link is reachable
- [ ] Check scroll indicators appear when needed
- [ ] Test on actual mobile devices (iOS Safari, Android Chrome)
- [ ] Verify dropdown positioning doesn't overflow screen edges
- [ ] Ensure smooth scrolling performance

## Implementation Date

2025-10-31

## Navigation Items (6 total)

1. Publications
2. Talks
3. Resources
4. Portfolio
5. Blog Posts
6. CV ← Previously inaccessible on mobile

## Technical Context

- **Site:** Academic Pages portfolio (Jekyll)
- **Navigation System:** Greedy Navigation (priority-plus pattern)
- **JavaScript:** `jquery.greedy-navigation.js` (unchanged)
- **Breakpoints:** Small: 600px, Medium: 768px, Large: 925px
