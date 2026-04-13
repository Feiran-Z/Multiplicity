# Frontend Styling Component Memory

## Project Structure & Patterns
- **Sass Architecture**: Well-organized partials in `_sass/` with `_variables.scss`, `_base.scss`, `_components.scss`, `_layout.scss`, `_typography.scss`, `_main-bundle.scss`
- **Color System**: Defined in `_variables.scss` with semantic names (primary: #880112, secondary: #A53A4A, accent: #3A6B6B, background: #F8FAFC, surface: #FFFFFF)
- **Typography**: Inter (sans-serif) for body, Cinzel Decorative (serif) for headings
- **Spacing Scale**: 8px base unit with consistent spacing variables ($spacing-1 to $spacing-24)
- **Breakpoints**: Mobile-first with sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

## Component Patterns
- **Card Pattern**: `.card` class with hover effects, consistent padding, border-radius, and shadows
- **Button System**: `.button` base with `.button-primary`, `.button-secondary`, `.button-text` variants
- **Form Components**: Consistent `.form-input`, `.form-textarea`, `.form-select` with focus states
- **Navigation**: Sticky header with responsive mobile menu
- **Post Components**: Basic `.post-header`, `.post-title`, `.post-meta`, `.post-content`, `.post-footer` exist but need enhancement

## Blog Post Styling Implementation
- **Enhanced Layout**: Updated `_layouts/post.html` with container wrappers and improved structure
- **Section Styling**: Created comprehensive post section styles in `_components.scss` (lines 615-750)
- **Visual Sections**: MLA Citation (teal accent), Summary (clean), Key Contributions (primary burgundy), Related Papers (secondary burgundy), Tags
- **Typography Hierarchy**: Enhanced with Cinzel Decorative for headings, Inter for body, responsive sizing
- **Navigation**: Grid-based previous/next navigation with card styling
- **Sample Post**: Created `_posts/2026-03-22-sample-enhanced-blog-post.md` demonstrating all features
- **Updated Posts**: Enhanced existing posts with new section structure

## Sophisticated Layout Design
- **New Layout System**: `_layouts/sophisticated.html` and `_includes/sophisticated-layout.html` with sidebar navigation
- **Two-Column Design**: 3:1 content-to-sidebar ratio on desktop, stacked on mobile
- **Interactive Features**: TOC with smooth scrolling, sticky sidebar, active section tracking
- **Content Blocks**: Structured `.content-block` components for organized content presentation
- **JavaScript Integration**: `assets/js/sophisticated-layout.js` for interactive features
- **Demo Page**: `sophisticated-demo.md` showcasing all features with causal inference content
- **Integration**: Updated `page.html` and `post.html` to optionally use sophisticated layout via `layout_style: 'sophisticated'`

## Design Patterns Established
- **Section-Based Architecture**: Modular `.post-section-{type}` classes for each content section
- **Color Block Strategy**: Subtle background colors with borders for visual separation
- **Responsive Grid Navigation**: Previous/next links in grid layout that stacks on mobile
- **Accessible Components**: Proper focus states, semantic HTML, WCAG AA contrast compliance
- **Sophisticated Layout**: Sidebar navigation, content blocks, TOC, and interactive features

## Key File Paths
- `/Users/teacher/Desktop/Multiplicity/_layouts/sophisticated.html` - Main sophisticated layout
- `/Users/teacher/Desktop/Multiplicity/_includes/sophisticated-layout.html` - Reusable layout include
- `/Users/teacher/Desktop/Multiplicity/_sass/_components.scss` (lines 1290-1900+) - Sophisticated layout styles
- `/Users/teacher/Desktop/Multiplicity/assets/js/sophisticated-layout.js` - Interactive features
- `/Users/teacher/Desktop/Multiplicity/sophisticated-demo.md` - Demonstration page

## TOC & Sidebar Analysis
- **Sophisticated Layout**: Used by pages with `layout_style: 'sophisticated'` (about, courses, resources, blog, contact, posts)
- **Grid System**: Flexible grid with minmax constraints (`minmax(280px, 350px) minmax(0, 1fr)`)
- **TOC Placement**: Inside `.content-sections` with TOC getting fixed width range, content flexible
- **Container Constraints**: `.container` has `max-width: 1280px` with padding, `.container-flexible` option for wider layouts
- **Width Constraints**: TOC/sidebar have `min-width: 280px, max-width: 350px` for consistent sizing
- **Responsive Design**: Mobile layouts remove constraints and stack components vertically

## TOC & Sidebar Width Fixes
- **Implemented**: Min/max width constraints (250-350px) for `.content-toc` and `.sidebar`
- **Grid Updates**: Changed from fixed 1:3:1 ratios to flexible `minmax()` grid templates
- **Container Flexibility**: Added `.container-flexible` and `.container-sophisticated` classes with wider max-width (1400-1600px)
- **Critical Fix**: Added `min-width: 0` to grid children (content-toc, main-content, sidebar) to respect CSS Grid constraints
- **Mobile Override**: Constraints removed on mobile for better stacking
- **Files Modified**: `_components.scss` (TOC, sidebar, grid layouts), `_base.scss` (container), `sophisticated-layout.html` (container class)

## TOC Layout Fix (1:3:1 Ratio Issue)
- **Problem**: TOC/sidebar wrapping due to content-grid-cards expanding middle column
- **Solution**: CSS Grid with `minmax()` constraints: `minmax(150px, 230px) minmax(0, 1fr) minmax(150px, 230px)` (accounts for 50px padding+borders)
- **Critical Fix**: Added `min-width: 0` to grid children (main-content, content-toc, sidebar) - overrides intrinsic minimum width
- **Box-Sizing**: Added `box-sizing: border-box` to all layout components for consistent width calculations
- **Content Grid**: Updated to `repeat(auto-fit, minmax(300px, 1fr))` for responsive cards
- **Text Overflow**: Added `overflow-wrap: break-word` and `hyphens: auto` to content-grid-card
- **Responsive Padding**: Reduced padding on medium screens (768px-1023px) to prevent wrapping
- **Container Enhancements**: Added `.container-sophisticated` with wider max-width (1400-1600px) and reduced padding on medium screens
- **Files Modified**: `_components.scss` (layout-grid, content-grid, content-grid-card), `_base.scss` (container classes)
- [TOC layout analysis and fix](toc-layout-analysis.md) - Complete analysis of HTML structure and CSS fixes
- [TOC layout fix summary](toc-layout-fix-summary.md) - Summary of latest fixes for sophisticated layout
- [TOC layout fix analysis](toc-layout-fix-analysis.md) - Detailed analysis of CSS fixes and calculations

## Sophisticated 3-Column Layout Analysis
- **Already Implemented**: Sophisticated 3-column layout with 1:3:1 ratio is fully functional
- **Grid Configuration**: Uses `minmax(150px, 230px) minmax(0, 1fr) minmax(150px, 230px)` for flexible constraints (accounts for padding/borders)
- **Documentation Added**: Created `_sass/_sophisticated-layout-docs.scss` with comprehensive usage guide
- **Component Clarification**: Enhanced comments distinguishing basic vs sophisticated layout components
- **Pages Using Layout**: about, courses, resources, blog, contact, instrumental-variables, and blog posts
- [Sophisticated 3-column layout analysis](sophisticated-3-column-layout-analysis.md) - Complete analysis of existing implementation
- [1:3:1 Layout analysis and fixes](1-3-1-layout-analysis.md) - Analysis of wrapping issues and responsive fixes

## Components SCSS Optimization (2026-04-05)
- **Redundancy Reduction**: Consolidated duplicate title, meta, and tags styles across page types
- **Shared Selectors**: Combined `.page-title`, `.post-title`, `.content-title` and `.post-meta`, `.content-meta`
- **Card Extensions**: Used `@extend .card` for `.content-grid-card` and `.content-team-card`
- **3-Column Layout Fix**: Updated grid to `minmax(150px, 230px) minmax(600px, 800px) minmax(150px, 230px)` for better tablet support
- **Code Reduction**: Removed ~50+ lines of duplicate CSS while maintaining design system integrity
- [Components SCSS optimization summary](components-optimization-summary.md) - Detailed summary of optimizations made

## 3-Column Layout Responsive Fix (2026-04-13)
- **Breakpoint Update**: Changed 3-column layout activation from $breakpoint-md (768px) to $breakpoint-lg (1024px)
- **Mobile Behavior**: Single column layout on screens < 1024px, 3-column layout on screens ≥ 1024px
- **Consistency**: Aligned with project specifications requiring mobile-first approach with breakpoints at 640px and 1024px
- **Documentation Updated**: Modified `_sophisticated-layout-docs.scss` to reflect new breakpoint behavior
- [3-column layout responsive fix](3-column-layout-responsive-fix.md) - Complete details of breakpoint updates

## 3-Column Layout Consistency Review (2026-04-13)
- **Documentation Mismatch**: Documentation claims `minmax(250px, 350px) minmax(0, 1fr) minmax(250px, 350px)` but implementation uses `minmax(80px, 0.5fr) 600px minmax(80px, 0.5fr)`
- **Breakpoint Consistency**: All files correctly use `$breakpoint-lg: 1024px` for 3-column activation
- **Grid Constraints**: Proper `min-width: 0` and `box-sizing: border-box` applied to grid children
- **Container Configuration**: `.container-sophisticated` with `max-width: 1400px` and responsive padding
- **SCSS Compilation**: Builds successfully without errors
- [3-column layout consistency review](3-column-layout-consistency-review.md) - Complete analysis of implementation consistency

## Homepage Scrolling Animation Fix (2026-04-13)
- **Problem**: Scroll-triggered banner shrink animation was too fast and abrupt
- **Solution**: Extended transition durations from 300ms to 600ms, added progressive opacity control, improved content hiding with fade effects
- **JavaScript Enhancement**: Added gradual opacity transitions during scroll (0-100px), lowered threshold for earlier animation start
- **CSS Improvements**: Changed from `display: none` to `opacity: 0` + `visibility: hidden` with delayed hiding
- **Files Modified**: `assets/css/main.scss`, `_sass/_main-bundle.scss`, `assets/js/home.js`, `_sass/_variables.scss`
- [Homepage scrolling animation fix](homepage-scrolling-animation-fix.md) - Complete analysis and implementation details

## 3-Column Layout Mobile Ordering Fix (2026-04-13)
- **Mobile Ordering**: Fixed to ensure TOC comes before content, sidebar after content on mobile screens (<1024px)
- **CSS Implementation**: Added `order` properties to `.layout-grid` children: TOC (-1), Content (0), Sidebar (1)
- **Desktop Reset**: Reset ordering to 0 in desktop media query to maintain 3-column layout
- **Navigation Button**: TOC toggle functionality works via `sophisticated-layout.js` with proper ARIA attributes
- **Files Modified**: `_sass/_components.scss` (layout-grid and mobile stacking sections)
- [3-column layout ordering fix](3-column-layout-ordering-fix.md) - Details of mobile ordering implementation