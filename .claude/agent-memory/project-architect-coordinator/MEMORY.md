# Project Architect Coordinator Memory

## Project Overview
- **Project**: Multiplicity: Roads Not Taken - Educational website on causal inference
- **Technology**: Jekyll static site generator for GitHub Pages
- **Base URL**: `/Multiplicity`
- **Live URL**: `https://Feiran-Z.github.io/Multiplicity/`

## Key Specifications Summary

### Design System
- **Primary Color**: `#880112` (deep burgundy)
- **Secondary Color**: `#A53A4A`
- **Accent Color**: `#3A6B6B`
- **Background**: `#F8FAFC` (soft off-white)
- **Surface**: `#FFFFFF`
- **Text Primary**: `#1E293B` (dark slate)
- **Text Secondary**: `#475569`
- **Primary Font**: Inter (sans-serif) for body text
- **Secondary Font**: Cinzel Decorative (serif) for headings/logo
- **Breakpoints**: Mobile <640px, Tablet 641-1024px, Desktop >1024px

### Core Pages (Navigation)
1. Home (index.md) - with special banner features
2. About (about.md)
3. Courses (courses.md)
4. Resources (resources.md)
5. Blog (blog/index.md)
6. Contact (contact.md)

### Content Requirements
- **Blog Posts**: MLA citations with DOI links, 300-400 word summaries, related papers (max 3), tags (max 3)
- **Regular Pages**: Story → Technical explanation → Implementation example (R code)
- **LaTeX Support**: MathJax client-side rendering with `$...$` inline and `$$...$$` display math
- **Code Blocks**: R code examples with language specification

### Special Features
- **Homepage Banner**: Full-width with typewriter effect on tagline
- **Scroll Animation**: Banner shrinks to persistent navigation bar on scroll
- **Robert Frost Poem**: "The Road Not Taken" as prologue
- **Personal Story**: Placeholder for author's PhD program decision reflection
- **Course Listings**: Four levels of causal inference education

### Technical Requirements
- **Jekyll Structure**: Standard with customizations for GitHub Pages
- **MathJax**: Client-side rendering via CDN
- **Accessibility**: WCAG AA compliance
- **Responsive Design**: Mobile-first approach
- **GitHub Pages**: Automatic deployment from main branch

## Architectural Decisions
1. Use standard Jekyll directory structure with customizations
2. Implement design system via Sass partials
3. Create reusable components (header, footer, navigation)
4. Use YAML data files for navigation and site data
5. Implement homepage features with vanilla JavaScript
6. Ensure all links use `{{ site.baseurl }}` Liquid variable

## Integration Points
- Navigation consistency across all pages
- Design system application to all components
- MathJax integration in layout templates
- Responsive design breakpoints
- Accessibility features throughout