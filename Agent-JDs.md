# AI Agent Roles for Building "Multiplicity: Roads Not Taken"

The following agent roles are designed to collaborate using Claude Code, leveraging the design specification and repository specification provided. Each agent is autonomous but may request input or hand off tasks to others. All agents have access to the shared specification files and a common project workspace.

---

## 1. Project Architect / Coordinator

**Role Title:** Project Architect

**Objective:** Oversee the entire build process, ensure adherence to specifications, coordinate between agents, and validate final output.

**Key Responsibilities:**
- Interpret design and repo specs, break down work into tasks for other agents.
- Assign tasks to appropriate agents and manage handoffs.
- Review agent outputs for consistency with overall vision.
- Maintain project timeline and flag blockers.
- Ensure integration of all components (frontend, Jekyll, content).
- Conduct final review before deployment.

**Required Skills:**
- Understanding of Jekyll, HTML/CSS, JavaScript, and web accessibility.
- Familiarity with the design choices (color palette, typography, components).
- Ability to synthesize outputs from multiple sources.

**Inputs:** Design spec, repo spec, agent outputs.

**Outputs:** Task assignments, integration plan, final approval.

---

## 2. Jekyll Setup & Integration Agent

**Role Title:** Jekyll Engineer

**Objective:** Set up the Jekyll project structure, configure essential files, and create reusable layouts/includes as per the repo spec.

**Key Responsibilities:**
- Initialize Jekyll project with appropriate Gemfile and `_config.yml`.
- Create directory structure: `_layouts`, `_includes`, `_sass`, `assets`, etc.
- Implement base layout (`default.html`) with proper `<head>`, header, footer, and main content area.
- Create page layouts: `home.html`, `page.html`, `post.html` (if needed).
- Set up Sass pipeline: import partials, define variables (colors, fonts) from design spec.
- Ensure proper inclusion of Google Fonts (Inter, Cinzel Decorative) and asset pipeline.
- Configure permalinks, markdown options, and plugins.
- Integrate additional tools (e.g. MathJax) to support additional functionalities (e.g. LaTeX).

**Required Skills:**
- Proficiency in Jekyll, Liquid templating, Ruby (basic), Sass.
- Attention to detail regarding folder structure and config.

**Inputs:** Repo spec, design spec (for global styles), feature spec (for specific features to integrate).

**Outputs:** Fully configured Jekyll project with base templates and styles.

**Dependencies:** Works closely with Frontend Styling Agent to integrate component styles.

---

## 3. Frontend Styling & Component Agent

**Role Title:** UI Developer

**Objective:** Implement the visual design, including color palette, typography, and all UI components (buttons, cards, forms, navigation, AI-specific elements) using HTML and Sass.

**Key Responsibilities:**
- Create Sass partials for variables, mixins, base styles, and components.
- Implement the color palette as CSS custom properties or Sass variables.
- Style typography: headings, body text, small text using specified fonts.
- Build reusable components:
  - Buttons (primary, secondary, text, icon, AI action)
  - Form elements (inputs, labels, validation states)
  - Cards (with hover effects)
  - Navigation (main menu, breadcrumbs, footer)
  - Banner (with animations)
- Ensure responsive behavior via media queries (mobile, tablet, desktop).
- Implement hover effects, transitions, and micro-interactions.
- Add loading states (skeleton screens, spinners) and animations (typing indicator).

**Required Skills:**
- Expert in HTML5, CSS3, Sass.
- Understanding of responsive design and CSS architecture (e.g., BEM).
- Ability to implement design from spec with pixel precision.

**Inputs:** Design spec (color palette, typography, component details), feature spec (specific features like banners), base templates from Jekyll Agent.

**Outputs:** Complete Sass files and HTML snippets ready for integration into Jekyll layouts/includes.

**Dependencies:** Receives base structure from Jekyll Agent.

---

## 4. Content Creation & Copy Agent

**Role Title:** Content Curator

**Objective:** Populate the website with meaningful, research-oriented content that aligns with website goal and its target audience.

**Key Responsibilities:**
- Write or source text for homepage, about page, and course topics (regular pages).
- Create sample blog posts or case studies illustrating "roads not taken" in social sciences.
- Ensure content is clear, engaging, and matches the brand voice (authoritative yet accessible).
- Optimize content for SEO (meta descriptions, headings structure) in collaboration with Jekyll Agent.
- Provide image descriptions and alt text for accessibility.

**Required Skills:**
- Excellent writing and editing skills.
- Familiarity with research education topics.
- Basic understanding of Markdown and front matter for Jekyll posts.

**Inputs:** Content spec (content structure and substance), design spec (brand voice), repo spec (site structure and folder locations), maybe external research.

**Outputs:** Markdown files for pages/posts, image descriptions.

**Dependencies:** Provides content to be inserted into Jekyll layouts by Jekyll Agent.

---

## 5. Accessibility & QA Agent

**Role Title:** Quality Assurance Specialist

**Objective:** Ensure the website meets WCAG 2.1 AA standards, works across browsers/devices, and is free of errors.

**Key Responsibilities:**
- Audit all pages for color contrast, focus indicators, alt text, and ARIA usage.
- Test keyboard navigation and screen reader compatibility.
- Verify responsive behavior on mobile, tablet, and desktop.
- Cross-browser testing (Chrome, Firefox, Safari, Edge).
- Identify broken links, missing assets, or Liquid errors.
- Report issues to relevant agents with clear reproduction steps.
- Re-test after fixes.

**Required Skills:**
- Knowledge of WCAG guidelines and accessibility testing tools (axe, WAVE, Lighthouse).
- Familiarity with browser dev tools.
- Attention to detail and systematic testing approach.

**Inputs:** Live site (local or preview), design spec (accessibility section), component implementations.

**Outputs:** Issue reports, validation results, final sign-off.

**Dependencies:** Tests after all other agents have integrated their work.

---

## 6. Deployment & Documentation Agent

**Role Title:** DevOps & Documentation Lead

**Objective:** Prepare the site for GitHub Pages deployment, write clear documentation, and ensure a smooth handoff.

**Key Responsibilities:**
- Configure `_config.yml` for production (baseurl, url).
- Add a `CNAME` file if using a custom domain.
- Ensure `.gitignore` excludes unnecessary files.
- Write a comprehensive `README.md` with setup instructions, as per repo spec.
- Add any necessary documentation for future contributors.
- Trigger build and verify live site after deployment.
- Coordinate with Project Architect for final release.

**Required Skills:**
- Familiarity with Git, GitHub Pages, Jekyll deployment.
- Technical writing ability.
- Basic understanding of DNS if custom domain used.

**Inputs:** Repo spec, all agent outputs, final site content.

**Outputs:** Deployed site, `README.md`, documentation files.

**Dependencies:** Works after all content and code are merged; final step before launch.

---

## Agent Collaboration Workflow

1. **Project Architect** initializes the project and assigns tasks to **Jekyll Engineer** and **UI Developer** (parallel work).
2. **Jekyll Engineer** sets up the skeleton; **UI Developer** creates component styles.
3. **Content Curator** supplies text and sample data, integrated by **Jekyll Engineer**.
4. **QA Specialist** tests all features and reports issues to respective agents.
5. After fixes, **Deployment Agent** deploys to GitHub Pages and writes documentation.
6. **Project Architect** reviews final product and approves.

All agents communicate via a shared task board (e.g., Claude Code’s context) and can request clarifications from the spec files.

--- 

*These JDs assume each agent is implemented as a Claude Code instance with appropriate instructions and tool access. Adjust scope as needed.*