---
name: TOC Layout Fix Implementation
description: Solution for 1:3:1 ratio layout where TOC/sidebar were wrapping due to content-grid-cards
type: project
---

# TOC Layout Fix Implementation

## Problem Identified
The flexible 1:3:1 ratio layout (TOC:Main Content:Sidebar) was breaking when pages like About, Courses, and Resources contained `.content-grid-card` components. The issue was that CSS Grid's `1fr 3fr 1fr` ratio doesn't account for minimum content widths, causing the middle column to expand beyond available space and push TOC/sidebar to wrap.

## Root Cause Analysis
1. **Grid Ratio Issue**: `grid-template-columns: 1fr 3fr 1fr` uses fractional units without minimum constraints
2. **Content Overflow**: `.content-grid` with `repeat(3, 1fr)` creates fixed 3-column layout that doesn't adapt to container width
3. **Missing Constraints**: No `min-width: 0` on grid children to respect container boundaries

## Solution Implemented

### 1. Grid Layout with minmax() Constraints
```scss
@media (min-width: $breakpoint-lg) {
  // TOC: min 250px, max 350px | Content: flexible | Sidebar: min 250px, max 350px
  grid-template-columns: minmax(250px, 350px) minmax(0, 1fr) minmax(250px, 350px);

  .main-content {
    grid-column: 2;
    min-width: 0; // Critical for respecting grid constraints
    overflow-wrap: break-word;
  }
}
```

### 2. Content Grid Responsiveness
```scss
.content-grid {
  @media (min-width: $breakpoint-lg) {
    // Use auto-fit with minmax to ensure cards don't overflow
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.content-grid-card {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}
```

### 3. Critical CSS Fixes
- Added `min-width: 0` to `.main-content`, `.content-toc`, and `.sidebar` within grid context
- This allows grid children to shrink below their intrinsic minimum width
- Added text overflow handling with `overflow-wrap: break-word`

## Why This Works

1. **minmax() Constraints**: Provides both minimum (250px) and maximum (350px) widths for TOC/sidebar
2. **Flexible Middle Column**: `minmax(0, 1fr)` allows content to shrink to 0 if needed
3. **Auto-fit for Cards**: `repeat(auto-fit, minmax(300px, 1fr))` creates responsive card grids
4. **min-width: 0**: Overrides default `min-width: auto` behavior in CSS Grid/Flexbox

## Affected Pages
- `about.md` (contains `.content-grid` with cards)
- `courses.md` (course listings with cards)
- `resources.md` (resource cards)
- All pages using `layout_style: 'sophisticated'`

## Testing Considerations
- Verify TOC/sidebar stay in place on desktop (≥1024px)
- Check content-grid cards wrap responsively
- Ensure mobile layout still stacks vertically
- Test with long content/text to verify overflow handling

**How to apply**: The fix is automatically applied to all pages using the sophisticated layout via `_includes/sophisticated-layout.html`. No manual changes needed to individual pages.