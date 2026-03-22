# Repository Specification: **Multiplicity: Roads Not Taken**

## 1. Overview
- **Repository Name**: `Multiplicity`
- **Description**: An educational website on causal inference, exploring alternative paths - the "what ifs" - as in Rubin's potential outcomes model. – hosted on GitHub Pages using Jekyll.
- **Purpose**: Explore the multiplicity 
- **Live URL**: "https://Feiran-Z.github.io/Multiplicity/"
- **Base URL**: "/Multiplicty"
- **URL**: "https://Feiran-Z.github.io"

## 2. Technologies
- **Static Site Generator**: Jekyll (built‑in with GitHub Pages), with plugins like SEO, pagination, feed, etc.
- **Markup**: HTML, Markdown, Liquid
- **Styling**: Sass (SCSS)
- **Frontend**: Vanilla JavaScript (or minimal framework if needed)
- **Dependencies**: Managed via `Gemfile` and `Gemfile.lock`

## 3. Prerequisites
- Ruby (version specified in `.ruby-version` or `Gemfile`)
- Bundler (`gem install bundler`)
- Git

## 4. Repository Structure
├── _data/                # YAML/JSON data files (e.g., navigation.yml, team.yml)
├── _drafts/              # Unpublished blog posts
├── _includes/            # Reusable HTML snippets (e.g., header.html, footer.html)
├── _layouts/             # Page layout templates (default.html, post.html)
├── _posts/               # Blog posts (named YYYY-MM-DD-title.md)
├── _sass/                # Sass partials (e.g., _base.scss, _variables.scss)
├── _site/                # Generated output (ignored by git)
├── assets/               # Compiled CSS, images, fonts, JavaScript
│   ├── css/              # Main CSS file (often main.scss)
│   ├── images/           # All images (logos, illustrations, photos)
│   ├── js/               # Custom JavaScript
│   └── fonts/            # Self‑hosted font files (if any)
├── .gitignore            # Git ignore rules
├── 404.html              # Custom 404 page
├── _config.yml           # Jekyll configuration
├── Gemfile               # Ruby gem dependencies
├── Gemfile.lock          # Dependency lock file
├── index.md              # Homepage (can also be index.html)
└── README.md             # Project overview (this document)

## 5. Core Pages (to be shown on navigation bar)
- Home                    # Homepage
- About                   # About the website and the author/owner of the website
- Courses                 # Courses offered, including "Empirical Research Fundamentals", "Introduction to Causal Inference", "Intermediate Causal Inference", and "Advanced Causal Inference"
- Resources               # Additional resources such as references, eBooks, slides, R/Python codes, etc.
- Blog                    # Blogposts on the most recent developments in causal inference
- Contact                 # A form to contact the author/owner of the website

## 6. LaTeX Support
The website will include mathematical formulas and equations in pages and posts. Since GitHub Pages does not support custom Jekyll plugins, we use **MathJax** via client‑side rendering.

### 6.1 Adding MathJax to the Site
Include the MathJax script in the `<head>` of your layout (e.g., `_includes/head.html` or directly in `_layouts/default.html`). Use the following code to load MathJax with TeX‑MML‑CHTML configuration:

```html
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
```

For better performance and support for inline math, use the inline configuration:
```html
<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$','$$'], ['\\[', '\\]']],
    processEscapes: true
  },
  svg: {
    fontCache: 'global'
  }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
```
Place this in `_includes/head.html` (create if not exists) and ensure it is included in your `default.html` layout.

### 6.2 Writing LaTeX in Markdown
- **Inline math**: use `$...$` or `\\(...\\)`. Example: `$E=mc^2$`.
- **Display math**: use `$$...$$` or `\\[...\\]`. Example: `$$ \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} $$`.

### 6.3 Markdown and LaTeX Compatibility
GitHub Pages uses kramdown as its Markdown processor. Kramdown passes content inside $...$ and $$...$$ untouched, which works well with MathJax. To prevent accidental Markdown interpretation of underscores or other characters within LaTeX, ensure that processEscapes: true is set (as above). If you encounter issues, you can also wrap LaTeX in <span> or <div> with explicit escaping.

### 6.4 Testing
After adding MathJax, test locally with `bundle exec jekyll serve`. Verify that equations render correctly on both posts and pages. If you use a different Markdown processor, adjust accordingly.

---

*This document is a living blueprint – update as the project evolves.*