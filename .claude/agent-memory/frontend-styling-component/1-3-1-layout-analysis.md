---
name: 1:3:1 Layout Analysis and Fixes
description: Analysis of the sophisticated 1:3:1 column layout structure and fixes for TOC/sidebar wrapping issues
type: project
---

# 1:3:1 Layout Analysis and Fixes

## Current Implementation Analysis

The sophisticated layout uses a 1:3:1 column ratio (TOC:Content:Sidebar) implemented with CSS Grid:

**Grid Configuration:**
- Mobile: Single column (stacked)
- Tablet/Desktop (≥768px): `minmax(150px, 230px) minmax(0, 1fr) minmax(150px, 230px)`
- Gap: `$spacing-10` (40px) on desktop, `$spacing-8` (32px) on mobile

**Key Components:**
- `.content-toc`: Left column with sticky positioning
- `.main-content`: Middle column with flexible width
- `.sidebar`: Right column with various content sections

## Problem Identified

The TOC and sidebar were potentially wrapping below the main content due to:
1. **Padding**: Both TOC and sidebar sections have `$spacing-6` (24px) padding on all sides
2. **Borders**: 1px borders on TOC and sidebar sections
3. **Gaps**: `$spacing-10` (40px) between columns
4. **Container padding**: Container has `$spacing-4` (16px) padding on sides

**Total width calculation issue:**
- Original minmax: `minmax(200px, 280px)`
- Actual width needed: `200px + 48px (padding) + 2px (border) = 250px`
- This left minimal room for content in the middle column

## Fixes Implemented

### 1. Adjusted Grid Constraints
- Changed from `minmax(200px, 280px)` to `minmax(150px, 230px)`
- Accounts for 50px of internal spacing (padding + borders)
- Maintains visual proportions while preventing wrapping

### 2. Added Box-Sizing
- Added `box-sizing: border-box` to `.content-toc`, `.main-content`, and `.sidebar`
- Ensures padding and borders are included in width calculations
- Consistent with global `box-sizing: border-box` reset

### 3. Responsive Padding Adjustments
- **TOC**: Reduced to `$spacing-5` (20px) on medium screens (768px-1023px), restored to `$spacing-6` on larger screens
- **Sidebar sections**: Reduced to `$spacing-5` on medium screens
- **Container**: Reduced to `$spacing-3` (12px) padding on medium screens for `.container-sophisticated`

### 4. Enhanced Container Flexibility
- Added responsive padding adjustments for `.container-sophisticated`
- Maintains wider max-width (1400px-1600px) for sophisticated layouts
- Provides more space for the 1:3:1 layout on medium screens

## Technical Details

**Breakpoints:**
- `$breakpoint-md`: 768px (3-column layout activates)
- `$breakpoint-lg`: 1024px (full padding restored)

**Spacing Variables:**
- `$spacing-3`: 12px (reduced container padding)
- `$spacing-5`: 20px (reduced component padding)
- `$spacing-6`: 24px (default component padding)
- `$spacing-10`: 40px (column gap on desktop)

## Testing Considerations

**Test Pages:**
- `/courses` - Uses sophisticated layout with content-grid cards
- `/resources` - Similar structure
- `/about` - Basic content blocks
- Blog posts with `layout_style: 'sophisticated'`

**Test Scenarios:**
1. **768px-1023px**: Should maintain 3-column layout with reduced padding
2. **1024px+**: Should maintain 3-column layout with full padding
3. **<768px**: Should stack vertically with mobile-optimized padding
4. **Content-heavy pages**: Ensure TOC/sidebar don't wrap with long content

## Files Modified

1. `_sass/_components.scss` (lines 1416-1452, 1538-1573, 1766-1781, 1783-1798)
2. `_sass/_base.scss` (lines 217-254)

## Why These Fixes Work

1. **Box-sizing**: Ensures consistent width calculations across browsers
2. **Reduced minmax values**: Accounts for internal spacing while maintaining proportions
3. **Responsive padding**: Optimizes space usage on medium screens where wrapping is most likely
4. **Container adjustments**: Provides more available width for the grid layout

The fixes ensure the 1:3:1 layout remains stable across screen sizes while maintaining good visual proportions and readability.