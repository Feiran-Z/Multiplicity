---
name: 3-column layout responsive breakpoint fix
description: Updated 3-column layout to activate at $breakpoint-lg (1024px) instead of $breakpoint-md (768px)
type: feedback
---

**Rule**: 3-column layout for regular pages should only activate at $breakpoint-lg (1024px) or above, using single column layout on smaller screens.

**Why**: Project specifications require mobile-first approach with breakpoints at 640px and 1024px. The 3-column layout was previously activating at 768px which was too early for tablet devices.

**How to apply**: 
1. Updated `.layout-grid` media query from `@media (min-width: $breakpoint-md)` to `@media (min-width: $breakpoint-lg)`
2. Updated `.content-toc` sticky positioning to only apply at `$breakpoint-lg`
3. Updated `.sidebar` min-width and margin-bottom logic to use `$breakpoint-lg` breakpoint
4. Updated mobile stacking media query from `@media (max-width: #{$breakpoint-md - 1px})` to `@media (max-width: #{$breakpoint-lg - 1px})`
5. Updated documentation in `_sophisticated-layout-docs.scss` to reflect new breakpoint behavior

**Files modified**:
- `/Users/teacher/Desktop/Multiplicity/_sass/_components.scss` (lines 1425, 1503, 1722, 1726, 1925, 1938)
- `/Users/teacher/Desktop/Multiplicity/_sass/_sophisticated-layout-docs.scss` (lines 13, 56, 61, 130, 134, 140, 176)

**Note**: The `.content-grid` component uses different breakpoints: 1 column on mobile, 2 columns at `$breakpoint-md` (768px), and auto-fit grid at `$breakpoint-lg` (1024px). This is correct and separate from the 3-column layout system.