# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Multiplicity: Roads Not Taken** is an educational Jekyll website about causal inference, exploring alternative paths ("what ifs") as in Rubin's potential outcomes model. The site is hosted on GitHub Pages at `https://Feiran-Z.github.io/Multiplicity/` with base URL `/Multiplicity`.

## Technology Stack

- **Static Site Generator**: Jekyll (built-in with GitHub Pages)
- **Markup**: HTML, Markdown, Liquid templating
- **Styling**: Sass (SCSS) with CSS custom properties
- **Frontend**: Vanilla JavaScript for interactive features
- **Math Support**: MathJax client-side rendering for LaTeX equations
- **Dependencies**: Ruby gems managed via `Gemfile` and `Gemfile.lock`

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve locally with auto-reload
bundle exec jekyll serve

# Build site without serving
bundle exec jekyll build

# Clean generated site
bundle exec jekyll clean
```

### Testing
- The site uses Jekyll's built-in development server
- MathJax equations render client-side - test locally with `bundle exec jekyll serve`
- No formal test suite; manual testing of responsive design and accessibility

## Project Structure

The repository follows standard Jekyll structure with some customizations:

```
├── _data/                # YAML/JSON data files (navigation.yml, team.yml)
├── _drafts/              # Unpublished blog posts
├── _includes/            # Reusable HTML snippets (header.html, footer.html)
├── _layouts/             # Page layout templates (default.html, post.html)
├── _posts/               # Blog posts (YYYY-MM-DD-title.md format)
├── _sass/                # Sass partials (_base.scss, _variables.scss)
├── assets/               # Compiled CSS, images, fonts, JavaScript
│   ├── css/              # Main CSS file (main.scss)
│   ├── images/           # All images (logos, illustrations)
│   ├── js/               # Custom JavaScript
│   └── fonts/            # Self-hosted font files
├── Specifications/        # Project specifications (design, content, features)
├── .claude/agents/       # Claude Code agent definitions
├── _config.yml           # Jekyll configuration
├── Gemfile               # Ruby gem dependencies
└── index.md              # Homepage
```

## Key Design Specifications

### Color Palette
- **Primary**: `#880112` (deep burgundy) - used for primary buttons, key accents
- **Secondary**: `#A53A4A` - secondary buttons, hover states
- **Accent**: `#3A6B6B` - data visualizations, info badges
- **Background**: `#F8FAFC` (soft off-white)
- **Surface**: `#FFFFFF` - cards, modals, sidebars
- **Text Primary**: `#1E293B` (dark slate)
- **Text Secondary**: `#475569`

### Typography
- **Primary Font**: Inter (sans-serif) - body text, UI labels
- **Secondary Font**: Cinzel Decorative (serif) - logo, main headings (H1, H2), banner text
- **Font Sources**: Google Fonts, self-hosted as fallback

### Core Pages
1. **Home** (`index.md`) - Features Robert Frost poem, personal story, course listings
2. **About** (`about.md`) - Project introduction, author biography
3. **Courses** - Four educational courses on causal inference
4. **Resources** - References, eBooks, slides, R/Python code
5. **Blog** - Recent research paper summaries with MLA citations
6. **Contact** (`contact.md`) - Contact form, social media links

## Content Specifications

### Blog Posts
- Format: `YYYY-MM-DD-short-title.md` in `_posts/`
- Required sections: MLA citation with DOI link, 300-400 word summary, related papers (max 3), tags (max 3)
- Tags: lowercase, hyphenated (e.g., `instrumental-variables`, `difference-in-differences`)

### Regular Pages
- Structure: Story → Technical explanation → Implementation example (R code)
- Use LaTeX for formulas: `$...$` inline, `$$...$$` display
- Code blocks with language specification: ` ```r ` for R examples

### Homepage Features
- Full-width banner with typewriter effect on tagline
- Scroll-triggered shrink into persistent navigation bar
- Robert Frost's "The Road Not Taken" poem as prologue
- Personal story placeholder about PhD program decision
- Course listings with four levels of causal inference education

## Agent System

This repository uses a multi-agent Claude Code system defined in `Agent-JDs.md` and `.claude/agents/`:

1. **Project Architect Coordinator** - Oversees entire build process
2. **Jekyll Setup Engineer** - Configures Jekyll structure and templates
3. **Frontend Styling Component** - Implements visual design and UI components
4. **Content Curator** - Creates research-oriented content
5. **Accessibility QA Auditor** - Tests for WCAG compliance and cross-browser compatibility
6. **Deployment Documentation Lead** - Handles GitHub Pages deployment and documentation

## MathJax Configuration

LaTeX equations are rendered client-side using MathJax. Configuration is in `_includes/head.html`:
- Inline math: `$...$` or `\(...\)`
- Display math: `$$...$$` or `\[...\]`
- Process escapes enabled for compatibility with kramdown

## Development Notes

- **Base URL**: `/Multiplicity` - all links should use `{{ site.baseurl }}` Liquid variable
- **Live URL**: `https://Feiran-Z.github.io/Multiplicity/`
- **GitHub Pages**: Automatic deployment from `main` branch
- **Accessibility**: Must meet WCAG AA standards; color contrast ratios validated
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 1024px

## Important Files

- `Specifications/` - Contains all project requirements:
  - `Repo-spec.md` - Repository structure and technical setup
  - `Design-spec.md` - Visual design system and components
  - `Content-spec.md` - Content structure and writing guidelines
  - `Feature-spec.md` - Interactive features (banner, animations)
- `Agent-JDs.md` - Agent roles and collaboration workflow
- `.claude/agents/` - Individual agent definitions for Claude Code

When implementing features, always reference the relevant specification files to ensure consistency with project requirements.