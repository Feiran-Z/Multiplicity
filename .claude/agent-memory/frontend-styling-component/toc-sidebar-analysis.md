---
name: TOC and Sidebar Styling Analysis
description: Analysis of TOC and sidebar styling inconsistencies across different pages
type: project
---

**Analysis of TOC and Sidebar Styling Inconsistencies**

**Key Findings:**

1. **Two Layout Systems Exist:**
   - **Sophisticated Layout**: Used by pages with `layout_style: 'sophisticated'` in frontmatter
   - **Basic Layout**: Default layout for pages without sophisticated styling

2. **Pages Using Sophisticated Layout:**
   - `about.md`, `courses.md`, `resources.md`, `blog/index.md`, `contact.md`, `instrumental-variables.md`
   - All blog posts (`_posts/*.md`)
   - `index.md` (homepage)
   - `sophisticated-demo.md`

3. **TOC/Sidebar Implementation in Sophisticated Layout:**
   - **File**: `_includes/sophisticated-layout.html`
   - **Structure**: Two-column grid (3:1 ratio on desktop, stacked on mobile)
   - **TOC**: `.content-toc` inside `.content-sections` (left column on desktop)
   - **Sidebar**: `.sidebar` as separate column (right column on desktop)

4. **CSS Styling (in `_sass/_components.scss`):**
   - **`.layout-grid`**: `grid-template-columns: 3fr 1fr` at `$breakpoint-lg` (1024px+)
   - **`.content-sections`**: `grid-template-columns: 1fr 3fr` at `$breakpoint-lg` (TOC left, content right)
   - **`.content-toc`**: Fixed width determined by grid column (1fr of 4fr total = 25%)
   - **`.sidebar`**: Fixed width determined by grid column (1fr of 4fr total = 25%)

5. **Container Width Issue:**
   - **`.container`** class defined in `_sass/_base.scss` with `max-width: $container-xl` (1280px)
   - **Padding**: `padding: 0 $spacing-4` (mobile), `padding: 0 $spacing-6` at `$breakpoint-lg`
   - **Problem**: Container padding reduces available width for TOC/sidebar

6. **Width Calculation:**
   - At 1280px container width with 24px padding (2 × $spacing-6 = 2 × 12px)
   - Available content width: 1280px - 48px = 1232px
   - TOC width: 25% of 1232px = 308px
   - Sidebar width: 25% of 1232px = 308px
   - Main content: 75% of 1232px = 924px

7. **Potential Inconsistency Sources:**
   - **Different content lengths**: TOC width depends on heading text length
   - **Responsive breakpoints**: Mobile vs desktop layouts differ significantly
   - **Container constraints**: Padding reduces available space
   - **Grid system**: Fixed 3:1 ratio may not be optimal for all content

8. **Files Controlling Styling:**
   - `/Users/teacher/Desktop/Multiplicity/_sass/_components.scss` (lines 1576-2163)
   - `/Users/teacher/Desktop/Multiplicity/_sass/_base.scss` (lines 217-226)
   - `/Users/teacher/Desktop/Multiplicity/_sass/_variables.scss` (lines 76-79)

**Why Different Pages Might Have Different Widths:**
1. **Content-dependent TOC width**: TOC width expands based on heading text length
2. **Sidebar content variation**: Different sections (recent posts, tags, CTA) affect height
3. **Responsive behavior**: Mobile layout stacks elements, desktop uses grid
4. **Container padding**: Consistent but reduces available width proportionally

**Responsive Design Issues Identified:**
1. **Fixed grid ratios**: 3:1 ratio may not be optimal for all screen sizes
2. **TOC sticky positioning**: `position: sticky` with `max-height` on desktop
3. **Mobile stacking order**: TOC and sidebar reorder on mobile (`order: -1`, `order: -2`)
4. **Breakpoint transitions**: Sudden layout changes at `$breakpoint-lg` (1024px)

**CSS Rules That Need Adjustment:**
1. **`.content-sections` grid-template-columns** (line 1662): Consider more flexible ratios
2. **`.layout-grid` grid-template-columns** (line 1582): Adjust 3:1 ratio
3. **`.content-toc` width constraints**: Add min/max width for consistency
4. **`.sidebar` width constraints**: Ensure consistent width across pages
5. **Container padding**: Consider impact on sidebar/TOC width

**Recommendations:**
1. **Add minimum widths**: Set `min-width` for TOC and sidebar to prevent too narrow appearance
2. **Flexible grid ratios**: Consider using `minmax()` for more responsive columns
3. **Consistent padding**: Ensure TOC/sidebar internal padding is consistent
4. **Width testing**: Test with varying content lengths to identify minimum usable widths
5. **Breakpoint optimization**: Consider intermediate breakpoints for smoother transitions