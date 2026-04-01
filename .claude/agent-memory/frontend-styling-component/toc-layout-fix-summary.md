---
name: TOC Layout Fix Summary
description: Summary of fixes applied to resolve TOC layout issues in sophisticated layout
type: project
---

## TOC Layout Issue Analysis

**Problem**: The Table of Contents (TOC) and sidebar in the sophisticated layout were experiencing wrapping/overflow issues due to CSS Grid constraints not being properly respected.

**Root Cause**: Grid children (`.content-toc`, `.main-content`, `.sidebar`) were not respecting the `minmax()` constraints in the grid template because they lacked `min-width: 0` which is critical for CSS Grid children to shrink below their intrinsic minimum width.

## Fixes Applied

1. **Added `min-width: 0` to grid children** in `_components.scss`:
   - `.content-toc` (line 1597): Added `min-width: 0` to respect grid column constraints
   - `.sidebar` (line 1609): Added `min-width: 0` to respect grid column constraints
   - `.main-content` already had `min-width: 0` (line 1603)

2. **Created specialized container class** in `_base.scss`:
   - Added `.container-sophisticated` class with wider max-width (1400-1600px) and minimum width constraints
   - This ensures the container has enough space for the 1:3:1 grid layout (TOC:Content:Sidebar)

3. **Updated sophisticated layout HTML**:
   - Changed `<div class="container">` to `<div class="container container-sophisticated">` in `_includes/sophisticated-layout.html`
   - This applies the specialized container styling to sophisticated layout pages

## CSS Grid Configuration

The layout uses a responsive grid:
- Mobile: Single column (stacked)
- Desktop (≥1024px): Three-column layout with `minmax()` constraints:
  - TOC: `minmax(250px, 350px)` - Fixed width range
  - Content: `minmax(0, 1fr)` - Flexible middle column
  - Sidebar: `minmax(250px, 350px)` - Fixed width range

**Key Insight**: The `min-width: 0` on grid children is CRITICAL for CSS Grid. Without it, grid items won't shrink below their intrinsic minimum content width, causing overflow/wrapping issues even with `minmax()` constraints.

## Compatibility Check

The fixes maintain compatibility with:
- Existing color palette (primary: #880112, secondary: #A53A4A, accent: #3A6B6B)
- Typography system (Inter for body, Cinzel Decorative for headings)
- Responsive design (mobile-first with breakpoints at 640px, 1024px, 1280px, 1536px)
- Accessibility requirements (WCAG AA contrast ratios)

**Files Modified**:
- `/Users/teacher/Desktop/Multiplicity/_sass/_components.scss` (lines 1597, 1609)
- `/Users/teacher/Desktop/Multiplicity/_sass/_base.scss` (lines 228-244)
- `/Users/teacher/Desktop/Multiplicity/_includes/sophisticated-layout.html` (line 2)

**Tested**: Jekyll build completes successfully with the updated sophisticated-demo page showing proper three-column layout on desktop and stacked layout on mobile.