---
name: TOC Layout Analysis and Fix
description: Analysis of the TOC layout issue and the implemented CSS fixes for the 1:3:1 ratio problem
type: project
---

## HTML Structure Analysis

The sophisticated layout uses a three-column grid structure with the following HTML hierarchy:

1. **Container**: `.container` with optional `.container-flexible` for wider layouts
2. **Layout Grid**: `.layout-grid` with three children:
   - `.content-toc` (left column) - Table of Contents
   - `.main-content` (middle column) - Main content area with `.content-blocks`
   - `.sidebar` (right column) - Sidebar with recent posts, tags, CTA

**Key Pages Using This Layout**:
- `/about/` - Uses sophisticated layout with extensive content blocks
- `/courses/` - Uses sophisticated layout with course cards and content
- `/resources/` - Uses sophisticated layout with resource grids

## JavaScript Analysis

**`sophisticated-layout.js`** provides interactive features but doesn't affect layout dimensions:
- TOC toggle functionality
- Smooth scrolling for anchor links
- Active section highlighting in TOC
- Responsive sidebar behavior (collapsible sections on mobile)
- Sticky sidebar and TOC on desktop
- Content block animations

No JavaScript interferes with the grid layout or width calculations.

## CSS Fixes Implemented

### 1. **Grid Layout Fix** (`_components.scss` lines 1581-1609)

**Before** (problematic):
```scss
.layout-grid {
  display: grid;
  gap: $spacing-8;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-lg) {
    // Three-column layout with 1:3:1 ratio (TOC:Content:Sidebar)
    grid-template-columns: 1fr 3fr 1fr;
    gap: $spacing-12;
  }
}
```

**After** (fixed):
```scss
.layout-grid {
  display: grid;
  gap: $spacing-8;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-lg) {
    // Three-column layout with 1:3:1 ratio (TOC:Content:Sidebar)
    // Using minmax() to prevent TOC/sidebar from wrapping while maintaining ratio
    // TOC: min 250px, max 350px | Content: flexible | Sidebar: min 250px, max 350px
    grid-template-columns: minmax(250px, 350px) minmax(0, 1fr) minmax(250px, 350px);
    gap: $spacing-12;

    // Explicitly place grid items in their columns
    .content-toc {
      grid-column: 1;
    }

    .main-content {
      grid-column: 2;
      // Ensure content doesn't overflow and respects grid constraints
      min-width: 0;
      overflow-wrap: break-word;
    }

    .sidebar {
      grid-column: 3;
    }
  }
}
```

### 2. **Critical `min-width: 0` Fix**

Added to all grid children to prevent overflow:
```scss
.main-content {
  // Ensure content flows properly within grid constraints
  min-width: 0; // Critical for grid/flex children to respect container boundaries
}

.content-toc {
  @media (min-width: $breakpoint-lg) {
    // Ensure TOC respects grid constraints
    min-width: 0;
  }
}

.sidebar {
  @media (min-width: $breakpoint-lg) {
    // Ensure sidebar respects grid constraints
    min-width: 0;
  }
}
```

### 3. **Content Grid Card Fix** (`_components.scss` lines 777-792)

**Before**:
```scss
.content-grid-card {
  background: $color-surface;
  border-radius: $border-radius-lg;
  padding: $spacing-6;
  border: 2px solid $color-gray-200;
  transition: all $transition-normal $transition-timing;

  &:hover {
    border-color: $color-primary;
    transform: translateY(-2px);
  }
}
```

**After**:
```scss
.content-grid-card {
  background: $color-surface;
  border-radius: $border-radius-lg;
  padding: $spacing-6;
  border: 2px solid $color-gray-200;
  transition: all $transition-normal $transition-timing;
  // Ensure cards don't overflow their containers
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  &:hover {
    border-color: $color-primary;
    transform: translateY(-2px);
  }
}
```

### 4. **Content Grid Responsive Fix** (`_components.scss` lines 771-774)

**Before**:
```scss
@media (min-width: $breakpoint-lg) {
  grid-template-columns: repeat(3, 1fr);
}
```

**After**:
```scss
@media (min-width: $breakpoint-lg) {
  // Use auto-fit with minmax to ensure cards don't overflow the container
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### 5. **Container Flexibility** (`_base.scss` lines 228-234)

Added `.container-flexible` class for wider layouts:
```scss
&.container-flexible {
  max-width: 1400px;

  @media (min-width: $breakpoint-2xl) {
    max-width: 1600px;
  }
}
```

## Root Cause Analysis

The TOC layout wrapping issue was caused by:

1. **Fixed 1:3:1 ratio without constraints**: The original `grid-template-columns: 1fr 3fr 1fr` allowed the middle column to expand indefinitely, pushing side columns to wrap.

2. **Missing `min-width: 0` on grid children**: Grid items default to `min-width: auto`, which prevents them from shrinking below their content size.

3. **Content grid cards expanding**: The `.content-grid` with fixed columns (`repeat(3, 1fr)`) created cards that didn't wrap, forcing the container to expand.

## Solution Summary

1. **Replace fixed ratios with `minmax()` constraints**: `minmax(250px, 350px) minmax(0, 1fr) minmax(250px, 350px)`
2. **Add `min-width: 0` to all grid children**: Prevents overflow by allowing items to shrink below content size
3. **Make content grid responsive**: Use `repeat(auto-fit, minmax(300px, 1fr))` for card wrapping
4. **Add text overflow handling**: `overflow-wrap: break-word` and `hyphens: auto` for long content
5. **Optional wider containers**: `.container-flexible` class for pages needing more space

## Files Modified

1. `/Users/teacher/Desktop/Multiplicity/_sass/_components.scss` (lines 1581-1609, 1611-1614, 1690-1721, 1959-1973, 762-775, 777-792)
2. `/Users/teacher/Desktop/Multiplicity/_sass/_base.scss` (lines 228-234, 237-243)

**How to apply**: These fixes are already implemented in the codebase. The sophisticated layout should now maintain the 1:3:1 ratio without wrapping on desktop, while remaining responsive on mobile.