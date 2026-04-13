---
name: Course Page Template Structure
description: Comprehensive template for educational course pages with consistent styling and required elements
type: reference
---

# Course Page Template Structure

## Template Overview
The `course-page-template.md` provides a reusable structure for creating educational course pages in the Multiplicity website. It follows the same aesthetic patterns as the about.md page while incorporating specific elements needed for course content.

## Key Structural Elements

### Front Matter Variables
- `layout: page` - Uses the page layout
- `layout_style: 'sophisticated'` - Matches about.md styling
- `course_level: "Beginner/Intermediate/Advanced"` - Required classification
- `course_duration: "Estimated duration in weeks/hours"` - Time commitment
- `prerequisites: "List of prerequisites here"` - Required background
- `instructor: "Instructor Name Here"` - Course instructor
- `instructor_bio: "Brief instructor bio here"` - Instructor background

### Content Sections (in order)
1. **Course Overview** - Title, level, duration, prerequisites, learning objectives
2. **Instructor** - Bio and teaching philosophy
3. **Course Structure** - Modules with numbered content-grid-card layout
4. **Mathematical Foundations** - LaTeX equations for causal inference concepts
5. **Implementation Examples** - R/Python code blocks with explanations
6. **Required Readings** - Core references with MLA-style citations
7. **Additional Resources** - Software, datasets, communities (grid layout)
8. **Assessment & Certification** - Self-assessment, final project, certificate
9. **Frequently Asked Questions** - Common questions with detailed answers
10. **Get Started** - Setup checklist and beginning steps
11. **Need Help?** - Support options and contact information

## Styling Patterns from about.md

### Content Blocks
- `content-block` wrapper for major sections
- `content-block-title` for section headings (H2)
- `content-card` for contained content areas
- `content-card-title` for card headings (H2 within cards)

### Highlight Elements
- `content-highlight` for important information boxes
- `content-highlight-title` for highlight section titles
- `content-highlight-content` for highlight text

### Grid Layouts
- `content-grid` for 2-4 column responsive layouts
- `content-grid-card` for individual grid items
- `content-principle-number` for numbered indicators (circles)
- `content-principle-title` for grid item titles
- `content-principle-description` for grid item content

### Special Elements
- `content-quote` for inspirational quotes at page end
- `content-quote-author` for quote attribution

## Course-Specific Adaptations

### Mathematical Content
- Uses `$...$` for inline LaTeX and `$$...$$` for display math
- Includes standard causal inference notation: $Y_i(1)$, $Y_i(0)$, $\tau$, etc.
- Explains potential outcomes framework in highlight boxes

### Code Examples
- R code blocks marked with ` ```r `
- Python code blocks marked with ` ```python `
- Includes setup instructions and package requirements
- Provides simulated data examples for reproducibility

### Resource Organization
- Readings organized by type (foundational papers, textbooks)
- Software packages listed by language (R, Python, Stata)
- External links open in new tabs with `target="_blank"`
- Uses `{{ site.baseurl }}` for internal links

## Reusability Features

### Placeholder Text
- All course-specific content marked with `[brackets]` or descriptive placeholders
- Easy find-and-replace for course authors
- Clear instructions in comments

### Modular Structure
- Sections can be removed or reordered as needed
- Grid layouts adapt to different numbers of items
- Highlight boxes can be added or removed

### Consistent Branding
- Follows design spec color palette and typography
- Maintains authoritative yet accessible tone
- Includes accessibility features (alt text, proper headings)

## Usage Instructions for Course Authors
1. Copy `course-page-template.md` to new file with descriptive name
2. Replace all placeholder text with course-specific content
3. Update front matter variables (title, description, course_level, etc.)
4. Customize modules, readings, and resources for specific topic
5. Add appropriate LaTeX equations and code examples
6. Test links and verify formatting
7. Place in appropriate directory (likely root or courses/)