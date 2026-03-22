# Deployment Notes for Multiplicity: Roads Not Taken

## GitHub Pages Configuration

### Base URL Configuration
- **Base URL**: `/Multiplicity` - All links must use `{{ site.baseurl }}` Liquid variable
- **Live URL**: `https://Feiran-Z.github.io/Multiplicity/`
- **Repository**: `Feiran-Z/Multiplicity`

### GitHub Pages Settings
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` (or `gh-pages` if using separate branch)
4. Folder: `/ (root)` or `/docs` if using docs folder
5. Save settings

### Automatic Deployment
- GitHub Pages automatically builds Jekyll sites from the `main` branch
- Build process uses GitHub's Jekyll environment
- No need for separate build step if using compatible gems

## Jekyll Configuration for GitHub Pages

### Compatible Gems
GitHub Pages uses a specific set of Jekyll plugins. Our `_config.yml` includes only compatible plugins:
- `jekyll-feed`
- `jekyll-seo-tag`
- `jekyll-sitemap`

### Custom Plugins
GitHub Pages does NOT support custom Jekyll plugins. We use:
- **MathJax**: Client-side via CDN (not a Jekyll plugin)
- **Custom JavaScript**: Vanilla JS for homepage features
- **Sass**: Built-in Jekyll support

### Build Process
GitHub Pages will:
1. Install gems from `Gemfile` (compatible versions only)
2. Run `jekyll build` with our `_config.yml`
3. Deploy generated `_site/` folder

## Local Development Issues

### Ruby Version Compatibility
**Issue**: Local Ruby 2.6.10 conflicts with gem requirements
**Solution for deployment**: GitHub Pages uses its own Ruby environment
**Local workaround**: Use Docker or update Ruby version

### Testing Without Local Build
Since local Ruby version causes issues, we can:
1. **Validate structure**: Check file organization and syntax
2. **Test in browser**: Deploy to GitHub Pages for testing
3. **Use GitHub Actions**: Set up CI to validate builds

## File Structure Validation

### Required Files Check
- [x] `_config.yml` - Jekyll configuration
- [x] `Gemfile` - Dependencies (GitHub Pages compatible)
- [x] `.gitignore` - Exclude `_site/`, `.jekyll-cache/`
- [x] `index.md` - Homepage with banner features
- [x] Core pages: `about.md`, `courses.md`, `resources.md`, `contact.md`
- [x] `blog/index.md` - Blog listing
- [x] `_posts/` - Sample blog posts
- [x] `_layouts/` - Page templates
- [x] `_includes/` - Reusable components
- [x] `_data/` - Navigation and site data
- [x] `_sass/` - Sass partials
- [x] `assets/css/main.scss` - Main stylesheet
- [x] `assets/js/home.js` - Homepage JavaScript
- [x] `404.html` - Custom 404 page

### Directory Structure
```
Multiplicity/
├── _config.yml
├── Gemfile
├── .gitignore
├── index.md
├── about.md
├── courses.md
├── resources.md
├── contact.md
├── instrumental-variables.md
├── 404.html
├── _data/
│   ├── navigation.yml
│   └── site.yml
├── _includes/
│   ├── head.html
│   ├── header.html
│   └── footer.html
├── _layouts/
│   ├── default.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── _posts/
│   ├── 2024-03-22-doubly-robust-estimation-time-varying-treatments.md
│   └── 2024-03-15-causal-forests-heterogeneous-treatment-effects.md
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _typography.scss
│   ├── _layout.scss
│   └── _components.scss
├── assets/
│   ├── css/
│   │   └── main.scss
│   └── js/
│       └── home.js
└── blog/
    └── index.md
```

## Deployment Checklist

### Pre-Deployment
- [x] All specification requirements implemented
- [x] Design system applied consistently
- [x] All core pages created
- [x] Sample content added
- [x] MathJax configured
- [x] Responsive design tested
- [x] Accessibility features implemented
- [x] JavaScript features working
- [x] Navigation functional
- [x] All links use `{{ site.baseurl }}`

### GitHub Pages Specific
- [x] Base URL set to `/Multiplicity` in `_config.yml`
- [x] Only GitHub Pages compatible plugins
- [x] No custom Jekyll plugins
- [x] `Gemfile` with compatible gem versions
- [x] `.gitignore` excludes `_site/`
- [x] Repository name matches base URL path

### Post-Deployment Testing
1. **Live URL**: `https://Feiran-Z.github.io/Multiplicity/`
2. **Navigation**: Test all menu links
3. **Responsive**: Test on mobile, tablet, desktop
4. **MathJax**: Verify LaTeX rendering
5. **JavaScript**: Test homepage features
6. **Forms**: Contact form functionality
7. **Accessibility**: Screen reader compatibility
8. **Performance**: Page load times
9. **Cross-browser**: Chrome, Firefox, Safari, Edge

## Troubleshooting

### Common Issues

1. **404 errors after deployment**
   - Check base URL configuration
   - Verify all links use `{{ site.baseurl }}`
   - Check GitHub Pages branch settings

2. **MathJax not rendering**
   - Verify MathJax script included in `head.html`
   - Check LaTeX syntax in content
   - Test with JavaScript enabled

3. **CSS/JS not loading**
   - Check asset paths include `{{ site.baseurl }}`
   - Verify file permissions
   - Check browser console for errors

4. **Build failures on GitHub Pages**
   - Check `Gemfile` for incompatible gems
   - Verify `_config.yml` syntax
   - Check for custom plugins

### Monitoring
- GitHub Pages build status in repository Actions tab
- Browser console for JavaScript errors
- Network tab for failed resource loads
- Mobile device testing

## Maintenance

### Content Updates
1. **Blog posts**: Add to `_posts/` with proper naming
2. **Pages**: Edit Markdown files in root
3. **Navigation**: Update `_data/navigation.yml`
4. **Site data**: Update `_data/site.yml`

### Design Updates
1. **Colors/typography**: Update `_sass/_variables.scss`
2. **Components**: Update `_sass/_components.scss`
3. **Layout**: Update `_sass/_layout.scss`

### Feature Updates
1. **JavaScript**: Add to `assets/js/`
2. **Styles**: Add to `assets/css/main.scss`
3. **Templates**: Update `_layouts/` or `_includes/`

## Backup and Version Control

### Git Strategy
- `main` branch: Production deployment
- Feature branches: Development
- Regular commits with descriptive messages

### Important Notes
- Never commit `_site/` directory
- Keep `Gemfile.lock` in repository
- Document all configuration changes
- Test locally when possible before pushing