---
name: TOC Layout Fix Analysis
description: Detailed analysis of CSS fixes for TOC/sidebar wrapping in sophisticated 1:3:1 layout
type: project
---

# TOC Layout Fix Analysis

## Problem Statement

The sophisticated layout's 1:3:1 column ratio (TOC:Content:Sidebar) was experiencing wrapping issues where the TOC and sidebar would drop below the main content on medium-sized screens (768px-1023px). This occurred despite using CSS Grid with `minmax()` constraints.

## Root Cause Analysis

### 1. CSS Grid Intrinsic Minimum Width
- Grid children have an intrinsic minimum width based on their content
- Without `min-width: 0`, grid items won't shrink below this intrinsic width
- This overrides `minmax()` constraints in the grid template

### 2. Padding and Border Calculations
- TOC and sidebar have `$spacing-6` (24px) padding on all sides = 48px total
- Plus 1px borders on each side = 2px total
- Total internal spacing: ~50px per column
- Original `minmax(200px, 280px)` didn't account for this internal spacing

### 3. Container Constraints
- Default container has `max-width: 1280px` with padding
- For 1:3:1 layout at 768px-1023px, this leaves minimal space for content
- Container padding reduces available width for grid columns

## CSS Fixes Implemented

### 1. Critical Grid Child Fix (`min-width: 0`)
**Location**: `_components.scss` lines 1438, 1447, 1456, 1466, 1573, 1793

```scss
// Applied to all grid children:
.content-toc, .main-content, .sidebar {
  min-width: 0; // Critical for grid/flex children to respect container boundaries
}
```

**Why it works**: Overrides the intrinsic minimum width of grid children, allowing them to shrink below content width and respect `minmax()` constraints.

### 2. Box-Sizing Consistency
**Location**: `_components.scss` lines 1441, 1450, 1459, 1562, 1789, 1812

```scss
// Applied to all layout components:
.content-toc, .main-content, .sidebar, .sidebar-section {
  box-sizing: border-box; // Ensure padding and borders are included in width
}
```

**Why it works**: Ensures consistent width calculations across browsers. With `border-box`, width includes padding and borders, preventing overflow.

### 3. Adjusted Grid Constraints
**Location**: `_components.scss` line 1431

```scss
// Original (problematic):
// grid-template-columns: minmax(200px, 280px) minmax(0, 1fr) minmax(200px, 280px);

// Fixed (accounts for internal spacing):
grid-template-columns: minmax(150px, 230px) minmax(0, 1fr) minmax(150px, 230px);
```

**Calculation**:
- Original min: 200px + 50px (padding+borders) = 250px actual minimum
- Fixed min: 150px + 50px = 200px actual minimum
- Provides 50px buffer for container padding and gaps

### 4. Responsive Padding Adjustments
**Location**: `_components.scss` lines 1575, 1580, 1818-1821

```scss
// Medium screens (768px-1023px):
@media (min-width: $breakpoint-md) and (max-width: #{$breakpoint-lg - 1px}) {
  .content-toc {
    padding: $spacing-5; // 20px instead of 24px
  }
  
  .sidebar-section {
    padding: $spacing-5; // 20px instead of 24px
  }
}

// Larger screens restore full padding:
@media (min-width: $breakpoint-lg) {
  .content-toc {
    padding: $spacing-6; // 24px
  }
}
```

**Why it works**: Reduces internal spacing on medium screens where space is most constrained, preventing wrapping.

### 5. Enhanced Container Classes
**Location**: `_base.scss` lines 228-244, 256-262

```scss
// Wider container for sophisticated layouts
&.container-sophisticated {
  max-width: 1400px; // vs default 1280px
  
  @media (min-width: $breakpoint-2xl) {
    max-width: 1600px;
  }
  
  // Reduced padding on medium screens
  @media (min-width: $breakpoint-md) and (max-width: #{$breakpoint-lg - 1px}) {
    padding: 0 $spacing-3; // 12px instead of 16px
  }
}
```

**Why it works**: Provides more horizontal space for the 3-column layout, especially important on medium screens.

## Responsive Behavior Analysis

### Breakpoint Strategy:
- **<768px**: Single column (stacked) - `grid-template-columns: 1fr`
- **768px-1023px**: 3-column with reduced padding - `minmax(150px, 230px) minmax(0, 1fr) minmax(150px, 230px)`
- **≥1024px**: 3-column with full padding - same grid template but restored padding

### Width Calculations at 768px:
- Container width: 768px - 24px (12px padding × 2) = 744px available
- Grid columns: 150px + 0-1fr + 150px = 300px fixed + flexible middle
- Gaps: 40px (20px × 2)
- Available for middle column: 744px - 300px - 40px = 404px minimum
- This provides adequate space for content without wrapping

## Content Grid Compatibility

The `.content-grid` component inside `.main-content` also received fixes:

```scss
.content-grid-card {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

@media (min-width: $breakpoint-lg) {
  .content-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
```

**Why it works**: Prevents long words from breaking the grid layout and uses `auto-fit` with `minmax()` for responsive card sizing.

## Testing Verification

### Pages Using Sophisticated Layout:
1. `/courses` - Uses `.content-grid` with cards
2. `/resources` - Similar structure
3. `/about` - Basic content blocks
4. Blog posts with `layout_style: 'sophisticated'`

### Test Scenarios:
1. **768px width**: Should maintain 3-column layout with TOC/sidebar at ~150px each
2. **1024px width**: Should maintain 3-column layout with TOC/sidebar at ~200px each
3. **<768px**: Should stack vertically
4. **Content-heavy pages**: Should not cause wrapping

## Performance Impact

### Minimal CSS Overhead:
- Added `min-width: 0` (negligible)
- Added `box-sizing: border-box` (already global, just explicit)
- Responsive padding adjustments (standard practice)

### No JavaScript Dependencies:
- Pure CSS solution
- No performance impact on page load
- Works with existing JavaScript for TOC interactivity

## Browser Compatibility

### Supported:
- All modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required (IE11 not supported, which aligns with project requirements)

### Fallbacks:
- Mobile layout works without Grid (flexbox fallback)
- Progressive enhancement approach

## Summary

The fixes address the core issue of CSS Grid children not respecting `minmax()` constraints due to intrinsic minimum widths. By combining `min-width: 0` with adjusted grid constraints and responsive padding, the 1:3:1 layout now maintains proper proportions across all screen sizes without wrapping.

**Key Insight**: `min-width: 0` is the most critical fix - without it, no amount of grid constraint adjustments will prevent wrapping when content has intrinsic minimum widths.