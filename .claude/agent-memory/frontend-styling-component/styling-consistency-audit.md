---
name: Styling Consistency Audit Findings
description: Results from comprehensive styling consistency audit across all Jekyll website pages
type: project
---

# Styling Consistency Audit - March 2026

## Overview
Completed a comprehensive audit of styling consistency across all Jekyll website pages (about, courses, resources, blog, contact, instrumental-variables, index/home). Found several inconsistencies that need fixing.

## Key Findings

### 1. **Missing CSS Classes** (Critical)
- **Problem**: Pages use `.content-card`, `.content-card-title`, `.content-card-content` classes but these are not defined in `_components.scss`
- **Affected Pages**: `about.md`, `courses.md`, `resources.md`, `contact.md`
- **Example**: `.content-card` used extensively but only `.card` is defined in CSS

### 2. **Inconsistent Card Styling**
- **`.card`** (lines 232-242): Has `box-shadow: $shadow-md`, `padding: $spacing-6`, `border-radius: $border-radius-xl`
- **`.content-grid-card`** (lines 738-749): Has `border: 2px solid $color-gray-200`, `padding: $spacing-6`, `border-radius: $border-radius-lg`
- **`.about-card`** (lines 970-999): Has `box-shadow: $shadow-lg`, `padding: $spacing-8`, `border-radius: $border-radius-xl`, gradient left border
- **`.content-team-card`** (lines 806-818): Has `box-shadow: $shadow-md`, `padding: $spacing-6`, `border-radius: $border-radius-xl`

### 3. **Typography Hierarchy Issues**
- **Homepage** (`index.md`): Uses inline `<style>` with `var()` CSS custom properties instead of Sass variables
- **Other pages**: Use proper Sass variables via class names
- **Heading sizes**: Inconsistent use of `font-size-*` variables across components

### 4. **Button Consistency**
- **Good**: Button system is well-defined with `.button`, `.button-primary`, `.button-secondary`, `.button-text`
- **Issue**: Some pages use `<a href="#" class="button button-primary">` while others might use different patterns
- **`.button-block`** (lines 2136-2144): Defined but not widely used

### 5. **Grid System Inconsistencies**
- **`.content-grid`** (lines 724-736): Responsive grid with breakpoints
- **`.about-grid`** (lines 1070-1082): Similar but separate definition
- **`.about-principles-grid`** (lines 1178-1190): Yet another grid definition
- **All should be consolidated**

### 6. **FAQ Component Issues**
- **`.content-faq`** (lines 900-937): Well-defined but used inconsistently
- **`contact.md`**: Uses `.content-faq-section` and `.content-faq-item` correctly
- **`courses.md`**: Uses `.content-faq` but structure differs slightly

### 7. **Quote Component Duplication**
- **`.content-quote`** (lines 860-898): For general pages
- **`.about-quote`** (lines 1138-1176): For about page specifically
- **Both are nearly identical** - should be consolidated

### 8. **Team Card Duplication**
- **`.content-team-card`** (lines 806-818): For general use
- **`.about-team-card`** (lines 1084-1097): For about page
- **Minor differences** in styling

### 9. **Highlight Component Duplication**
- **`.content-highlight`** (lines 701-722): General use
- **`.about-highlight`** (lines 1047-1068): About page specific
- **Identical styling** - pure duplication

### 10. **Principle Card System**
- **`.content-principle-*`** (lines 1236-1246): Extends `.about-principle-*` classes
- **Used in**: `about.md` for principles/guidelines
- **Works correctly** but naming could be more consistent

### 11. **Form Styling Consistency**
- **`.contact-form`** (lines 183-193): Well-defined with `.form-group`, `.form-label`, `.form-input`
- **`contact.md`**: Uses these classes correctly
- **Good example** of consistency

### 12. **Navigation & Layout**
- **Sophisticated layout**: Well-implemented with `.sophisticated-layout`, `.layout-grid`, `.sidebar`, `.content-block`
- **Used by**: All pages with `layout_style: 'sophisticated'` (about, courses, resources, contact, blog, instrumental-variables)
- **Homepage**: Uses different banner/hero styling

## Recommendations for Fixes

### Priority 1: Define Missing Classes
Add to `_components.scss`:
```scss
// Content card components (used in about.md, courses.md, etc.)
.content-card {
  @extend .card;
  // Additional specific styles if needed
}

.content-card-title {
  @extend .card-title;
}

.content-card-content {
  @extend .card-body;
}

.content-card-subtitle {
  @extend .card-subtitle;
}
```

### Priority 2: Consolidate Duplicate Components
1. **Merge `.content-quote` and `.about-quote`** into single `.content-quote`
2. **Merge `.content-highlight` and `.about-highlight`** into single `.content-highlight`
3. **Merge `.content-team-card` and `.about-team-card`** into single `.team-card`
4. **Consolidate grid systems** into single responsive grid component

### Priority 3: Standardize Card Styling
Choose one card pattern and apply consistently:
- Recommendation: Use `.card` as base, with modifiers for different contexts
- Standardize padding, border-radius, and shadow levels

### Priority 4: Fix Homepage Inline Styles
Replace inline `<style>` in `index.md` with proper Sass classes using variables.

### Priority 5: Typography System Audit
Ensure consistent use of `$font-size-*` variables across all heading levels and components.

## Files to Modify
1. `/Users/teacher/Desktop/Multiplicity/_sass/_components.scss` - Add missing classes, consolidate duplicates
2. `/Users/teacher/Desktop/Multiplicity/index.md` - Remove inline styles, use proper classes
3. `/Users/teacher/Desktop/Multiplicity/about.md`, `courses.md`, `resources.md`, `contact.md` - Verify class usage after fixes

## Success Metrics
- All pages use defined CSS classes (no undefined classes)
- Consistent card styling across all components
- No duplicate component definitions
- Proper use of Sass variables (no inline `var()` or hardcoded values)
- Consistent spacing using `$spacing-*` variables