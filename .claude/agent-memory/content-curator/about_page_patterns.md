---
name: About Page Pattern Analysis
description: Analysis of structural patterns and styling from the about.md reference page
type: reference
---

# About Page Pattern Analysis

## Document Structure
The `about.md` page serves as the primary reference for content structure and styling patterns in the Multiplicity website. Analysis reveals consistent patterns that should be replicated in other content.

## Content Block Hierarchy

### Top-Level Structure
```
content-block (major section)
  ├── h2.content-block-title (section heading)
  ├── content-card (contained content area)
  │   ├── h2.content-card-title (card heading)
  │   └── content-card-content (card body)
  └── content-grid (multi-column layout)
```

### Nested Elements
- `content-highlight` boxes within `content-card-content`
- `content-grid` within `content-card-content` for principle/feature displays
- Lists (`ul`, `ol`) within `content-highlight-content` and `content-principle-description`

## Styling Patterns

### Heading Structure
- **H1**: Not used in about.md (likely reserved for page title in layout)
- **H2 with `.content-block-title`**: Major section headings (e.g., "Our Mission", "Educational Philosophy")
- **H2 with `.content-card-title`**: Card headings within sections (e.g., "Why Causal Inference Matters")
- **No H3-H6 observed**: Simpler hierarchy with consistent H2 usage

### Content Organization
1. **Vision/Overview** - High-level introduction with highlight box
2. **Mission/Principles** - Grid layout with numbered principles
3. **Educational Approach** - Another grid with numbered steps
4. **Content Principles** - Grid with lettered principles (A-R-P-T-I)
5. **Team** - Team cards with contact information
6. **Acknowledgments** - Multiple highlight boxes for different acknowledgments
7. **Get Involved** - Grid with emoji-numbered action items
8. **License & Usage** - Highlight boxes for different license types
9. **Contact** - Highlight box with contact methods
10. **Quote** - Inspirational quote at page end

### Grid Layout Patterns
- **Numbered Principles**: `.content-principle-number` with numbers 1-4 or 1-5
- **Lettered Principles**: `.content-principle-number` with letters A-R-P-T-I
- **Emoji Principles**: `.content-principle-number` with emojis (📚, 📢, ✏️, 💬)
- **Team Cards**: `.content-team-card` with name, role, bio, contact

### Highlight Box Usage
- Used for: Core questions, intellectual foundations, open source acknowledgment, contact methods
- Structure: `.content-highlight-title` + `.content-highlight-content`
- Content: Can contain paragraphs, lists, or mixed content
- Positioning: Within `content-card-content` sections

## Content-Specific Observations

### Team Section
- Uses `.content-team-card` instead of `.content-grid-card`
- Contains: `.content-team-name`, `.content-team-role`, `.content-team-bio`, `.content-team-contact`
- Single card in about.md (solo project)

### Acknowledgments Section
- Multiple `.content-highlight` boxes in sequence
- Each highlights a different group: intellectual foundations, open source, educators, literary inspiration
- No grid layout for this section

### Quote Section
- `.content-quote` at page end (after all content blocks)
- `.content-quote-author` for attribution
- Contains Robert Frost quote in about.md

## Accessibility & SEO Patterns

### Link Structure
- External links use `target="_blank" rel="noopener noreferrer"`
- Email links use `mailto:` protocol
- Internal links use site-relative paths
- Descriptive link text with `aria-label` for external links

### Content Flow
- Clear hierarchical structure with consistent spacing
- Logical progression from high-level to detailed information
- Mix of text, grids, and highlight boxes for visual variety
- Quote provides emotional resonance at conclusion

## Implications for Course Pages

### Required Elements to Replicate
1. `.content-block` + `.content-block-title` for major sections
2. `.content-card` for contained content areas
3. `.content-grid` for multi-item displays (modules, resources)
4. `.content-highlight` for important information boxes
5. Consistent H2 usage with appropriate classes

### Adaptable Patterns
- Numbered grids for course modules
- Highlight boxes for key concepts or warnings
- Team/Instructor cards adapted for course instructor
- Resource grids for software, datasets, communities

### Content Flow for Courses
1. Course overview (title, level, duration, prerequisites)
2. Instructor information
3. Course structure (modules grid)
4. Technical content (math, code examples)
5. Resources (readings, software, datasets)
6. Assessment information
7. FAQs
8. Getting started instructions
9. Support/contact information
10. Inspirational quote