# Project Memory

## MathJax Configuration
- **Issue**: Missing `mathjax.html` file in `_includes` folder
- **Root cause**: The `jekyll-setup-engineer.md` agent specification mentioned creating `mathjax.html` but the implementation placed MathJax configuration inline in `_layouts/default.html`
- **Solution**: Created `_includes/mathjax.html` with proper MathJax configuration and updated `_layouts/default.html` to include it
- **Configuration**: MathJax supports inline math: `$...$` or `\(...\)` and display math: `$$...$$` or `\[...\]` with `processEscapes: true` for kramdown compatibility

## Project Structure
- **Base URL**: `/Multiplicity` (note: CLAUDE.md has typo `/Multiplicty`)
- **Live URL**: `https://Feiran-Z.github.io/Multiplicity/`
- **Technology**: Jekyll with GitHub Pages, MathJax for LaTeX rendering

## Ruby Version Issue
- **Current Ruby**: 2.6.10p210 (universal.arm64e-darwin24)
- **Gemfile requirement**: Ruby >= 2.6.0
- **Dependency conflict**: `ffi-1.17.3-x86_64-darwin` requires Ruby >= 3.0, < 4.1.dev
- **Impact**: Cannot run `bundle install` or `bundle exec jekyll build` locally
- **Workaround**: MathJax configuration can be tested on GitHub Pages deployment