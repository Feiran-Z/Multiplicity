# Multiplicity: Roads Not Taken

An educational website on causal inference, exploring alternative paths - the "what ifs" - as in Rubin's potential outcomes model.

## Live Website

**URL**: [https://Feiran-Z.github.io/Multiplicity/](https://Feiran-Z.github.io/Multiplicity/)

## Project Overview

This Jekyll-based website serves as an educational resource for causal inference methods, featuring:

- **Educational Content**: Courses, tutorials, and explanations of causal methods
- **Research Blog**: Summaries of recent causal inference papers
- **Resource Library**: Textbooks, code examples, software tools, and lecture materials
- **Interactive Features**: Homepage banner with typewriter effect, scroll-triggered navigation

## Technology Stack

- **Static Site Generator**: Jekyll (GitHub Pages compatible)
- **Styling**: Sass (SCSS) with custom design system
- **Frontend**: Vanilla JavaScript for interactive features
- **Math Support**: MathJax for LaTeX equation rendering
- **Hosting**: GitHub Pages with base URL `/Multiplicity`

## Project Structure

```
Multiplicity/
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── .gitignore              # Git ignore rules
├── index.md                # Homepage with banner features
├── about.md                # About page
├── courses.md              # Courses listing and details
├── resources.md            # Resource library
├── contact.md              # Contact form and information
├── instrumental-variables.md # Sample educational page
├── 404.html                # Custom 404 page
├── _data/                  # Site data files
│   ├── navigation.yml      # Site navigation structure
│   └── site.yml           # Site metadata and configuration
├── _includes/              # Reusable components
│   ├── head.html          # Head section with MathJax
│   ├── header.html        # Site header with navigation
│   └── footer.html        # Site footer
├── _layouts/               # Page templates
│   ├── default.html       # Base layout
│   ├── home.html          # Homepage layout
│   ├── page.html          # Regular page layout
│   └── post.html          # Blog post layout
├── _posts/                 # Blog posts
│   ├── 2024-03-22-doubly-robust-estimation-time-varying-treatments.md
│   └── 2024-03-15-causal-forests-heterogeneous-treatment-effects.md
├── _sass/                  # Sass partials
│   ├── _variables.scss    # Design system variables
│   ├── _base.scss         # Base styles and reset
│   ├── _typography.scss   # Typography styles
│   ├── _layout.scss       # Layout and grid system
│   └── _components.scss   # UI components
├── assets/                 # Static assets
│   ├── css/
│   │   └── main.scss      # Main stylesheet
│   └── js/
│       └── home.js        # Homepage JavaScript
└── blog/
    └── index.md           # Blog listing page
```

## Design System

### Color Palette
- **Primary**: `#880112` (deep burgundy)
- **Secondary**: `#A53A4A`
- **Accent**: `#3A6B6B` (teal)
- **Background**: `#F8FAFC` (soft off-white)
- **Surface**: `#FFFFFF`
- **Text Primary**: `#1E293B` (dark slate)
- **Text Secondary**: `#475569`

### Typography
- **Primary Font**: Inter (sans-serif) for body text
- **Secondary Font**: Cinzel Decorative (serif) for headings
- **Font Sources**: Google Fonts CDN with fallback fonts

### Responsive Design
- **Mobile**: < 640px (stack columns)
- **Tablet**: 641px – 1024px (6-column grid)
- **Desktop**: > 1024px (12-column grid)

## Core Features

### 1. Homepage Banner
- Full-width banner with typewriter effect on tagline
- Scroll-triggered shrink into persistent navigation bar
- Robert Frost's "The Road Not Taken" poem
- Personal story about PhD program decision
- Course listings with four educational levels

### 2. Educational Content Structure
- **Blog Posts**: MLA citations, 300-400 word summaries, related papers, tags
- **Regular Pages**: Story → Technical explanation → R code implementation
- **Courses**: Four levels from fundamentals to advanced topics

### 3. MathJax Integration
- Client-side LaTeX rendering via CDN
- Supports `$...$` inline math and `$$...$$` display math
- Compatible with kramdown Markdown processor

### 4. Accessibility Features
- WCAG AA compliant color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion preferences respected
- Skip to content link

## Local Development

### Prerequisites
- Ruby (>= 2.6.0)
- Bundler (`gem install bundler`)

### Setup
```bash
# Clone repository
git clone https://github.com/Feiran-Z/Multiplicity.git
cd Multiplicity

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build site
bundle exec jekyll build
```

The site will be available at `http://localhost:4000/Multiplicity/`

### Note on Local Ruby Version
If you encounter Ruby version conflicts:
- GitHub Pages uses its own Ruby environment
- Local build may require Ruby >= 2.7.0
- Alternative: Test via GitHub Pages deployment

## Deployment

### GitHub Pages
This site is configured for automatic deployment via GitHub Pages:

1. Push to `main` branch
2. GitHub Pages automatically builds and deploys
3. Site available at `https://Feiran-Z.github.io/Multiplicity/`

### Configuration
- **Base URL**: `/Multiplicity` (set in `_config.yml`)
- **Plugins**: Only GitHub Pages compatible plugins used
- **Assets**: All paths use `{{ site.baseurl }}` Liquid variable

## Content Management

### Adding Blog Posts
1. Create file in `_posts/` with naming convention: `YYYY-MM-DD-title.md`
2. Include front matter with layout, title, date, author, tags
3. Follow blog post structure: MLA citation, summary, related papers, tags

### Adding Regular Pages
1. Create `.md` file in root directory
2. Include front matter with layout and title
3. Follow structure: Story → Technical explanation → R code

### Updating Navigation
Edit `_data/navigation.yml`:
```yaml
- name: "Page Name"
  link: "/page-url/"
```

### Updating Site Data
Edit `_data/site.yml` for courses, social links, and other site-wide data.

## License

### Content
All educational content is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

### Code
Code examples are provided under the [MIT License](https://opensource.org/licenses/MIT).

### Website Code
The website code is available under the MIT License.

## Contributing

We welcome contributions:

1. **Content**: Blog posts, educational pages, resource suggestions
2. **Code**: Bug fixes, feature improvements, accessibility enhancements
3. **Design**: UI improvements, responsive design fixes

Please submit issues or pull requests on GitHub.

## Contact

- **Email**: [zephyr.v@outlook.com](mailto:zephyr.v@outlook.com)
- **GitHub**: [Feiran-Z](https://github.com/Feiran-Z)
- **Website**: [Contact Form](/contact/)

## Acknowledgments

- Donald Rubin, James Robins, Judea Pearl, and other pioneers of causal inference
- The open-source community for Jekyll, MathJax, and other tools
- Robert Frost's "The Road Not Taken" for philosophical inspiration
- All educators and researchers who share knowledge freely

---

*"Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference."*
— Robert Frost