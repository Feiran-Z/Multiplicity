---
name: TOC:main content:sidebar layout fixes
description: Fixed layout ratio issues by removing minimum width constraints and implementing proper 1:3:1 ratio with CSS Grid fr units
type: feedback
---

## Layout Issue Analysis

**Problem**: The TOC:main content:sidebar layout had conflicting width constraints causing responsiveness issues:
1. Grid used `minmax(240px, 280px) minmax(0, 3fr) minmax(240px, 280px)` which created fixed minimum widths
2. Individual components (.content-toc, .sidebar) had `min-width: 280px; max-width: 350px;` constraints
3. These constraints conflicted with the 1:3:1 ratio on smaller screens

**Solution Applied**:
1. Changed grid template to `grid-template-columns: 1fr 3fr 1fr;` (pure fr units)
2. Removed min-width/max-width constraints from .content-toc and .sidebar
3. Let CSS Grid handle the proportional distribution naturally

**Why**: Fixed minimum widths prevented the layout from adapting properly on smaller screens within the grid. The 1:3:1 ratio should be fluid, not constrained by fixed pixel values.

**How to apply**: When implementing proportional layouts with CSS Grid:
- Use fr units for ratios (e.g., `1fr 3fr 1fr`)
- Avoid mixing fixed minmax() constraints with fr units in ratio-based layouts
- Let grid items expand/contract naturally within their grid columns
- Use media queries to change grid structure for mobile (stacking instead of side-by-side)