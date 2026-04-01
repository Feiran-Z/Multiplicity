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
- **Implemented**: Min/max width constraints (280-350px) for `.content-toc` and `.sidebar`
- **Grid Updates**: Changed from fixed 3:1 ratios to flexible `minmax()` grid templates
- **Container Flexibility**: Added `.container-flexible` class with wider max-width (1400-1600px)
- **Mobile Override**: Constraints removed on mobile for better stacking
- **Files Modified**: `_components.scss` (TOC, sidebar, grid layouts), `_base.scss` (container)

## Layout Ratio Fixes
- [TOC:main content:sidebar layout fixes](layout-fixes.md) - Fixed layout ratio issues by removing minimum width constraints and implementing proper 1:3:1 ratio with CSS Grid fr units