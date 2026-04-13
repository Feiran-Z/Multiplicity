---
name: 3-column layout ordering fix
description: Fixed mobile ordering for sophisticated 3-column layout to ensure TOC comes before content and sidebar after content
type: feedback
---

**Rule:** On mobile screens (<1024px), the sophisticated layout should display Table of Contents first, then main content, then sidebar. On desktop (≥1024px), the 3-column layout with 1:3:1 ratio should be maintained.

**Why:** User reported that when 3-column layout is not activated (on smaller screens), the order should be: 1) TOC first, 2) Content next, 3) Sidebar after content. Also needed to check navigation button functionality.

**How to apply:** 
1. Added `order` properties to `.layout-grid` children for mobile layout:
   - `.content-toc { order: -1; }` (TOC appears first)
   - `.main-content { order: 0; }` (Content appears second)
   - `.sidebar { order: 1; }` (Sidebar appears last)
2. Reset ordering to `order: 0` for all elements in desktop media query (`@media (min-width: $breakpoint-lg)`)
3. Removed duplicate ordering from mobile media query (lines 1926-1934 in `_components.scss`)
4. Navigation button functionality already works via `sophisticated-layout.js` which handles TOC toggle and smooth scrolling

**Implementation details:**
- Mobile ordering is now handled in the base `.layout-grid` styles (lines 1419-1452 in `_components.scss`)
- Desktop 3-column layout still uses CSS Grid with `grid-template-columns: minmax(100px, 0.5fr) 800px minmax(100px, 0.5fr)`
- Breakpoint consistency: 3-column layout activates at `$breakpoint-lg: 1024px`
- Navigation buttons (previous/next) use shared styles via `@extend .post-navigation` for consistency