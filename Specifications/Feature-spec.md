# Feature Specification: **Multiplicity: Roads Not Taken**

## 1. Overview
This document provides additional specfications on special features, such as banners and special animations, to be implemented on different pages of the website, in addition to the overall design specifications included in `Design-spec.md`.

## 2. Homepage Banner & Scroll Animation

The landing page features an eye‑catching full‑width banner that introduces the project with a dynamic typewriter effect. As the user scrolls down, the banner smoothly shrinks into a persistent navigation bar, maintaining branding and navigation access.

### 2.1 Banner Structure
- **Container**: Full viewport width, height `100vh` (or `min-height: 100vh`). Background color: `#880112` (primary) with optional subtle overlay gradient.
- **Content**: Vertically and horizontally centered.
  - **Project Name**: Displayed as `<h1>` using the serif font (Cinzel Decorative), large size (e.g., `5rem` on desktop, scaled down on mobile). Text: “Multiplicity: Roads Not Taken”.
  - **Tagline / Purpose**: A `<p>` or `<span>` with the typewriter effect. Can be a single rotating set of phrases (e.g., “Explore the paths not taken”, “Causal inference for curious minds”, “Research education reimagined”). Use Inter font, size `2rem`, light weight.
- **Optional**: A subtle down‑arrow icon indicating scrollability.

### 2.2 Typewriter Effect
- **Mechanism**: JavaScript cycles through an array of strings, typing and then erasing each character.
- **Pacing**: Typing speed ~50–70ms per character, pause ~2s after full phrase, then erase at ~30ms per character.
- **Implementation**:
  - The element to animate is a container (e.g., `<span id="typewriter"></span>`).
  - JavaScript updates the text content character by character, using `setTimeout` or `requestAnimationFrame`.
  - Accessible fallback: if JavaScript fails, display the first phrase statically.
- **Alternative**: Use a lightweight library like TypeIt, but vanilla JS is preferred for control.

### 2.3 Scroll‑Triggered Shrink into Navbar
- **Initial State**: Banner occupies full viewport; navigation links (Home, About, Blog, etc.) are not visible (or could be hidden) to keep focus on the banner.
- **Shrink Behavior**:
  - As the user scrolls down, when the scroll position exceeds, say, `100px` (or 10% of viewport height), the banner container begins to transition.
  - The banner’s height reduces to a fixed navbar height (e.g., `70px`).
  - The large text scales down and may reposition to the left, revealing a horizontal navigation bar.
  - The final state: a compact header containing the logo/project name (smaller), and navigation links (Home, About, Blog, etc.) aligned to the right. This matches the regular site header used on other pages.
- **CSS Implementation**:
  - Use CSS transitions on `height`, `padding`, `font-size`, and `opacity` of elements.
  - Initially, set the banner container with a class `.banner`.
  - On scroll, use JavaScript to add a class `.banner--shrunk` to the container, triggering the transition.
  - Alternatively, use the Intersection Observer to detect when the banner is no longer fully visible.
- **HTML Structure**:
  ```html
  <header class="banner" id="banner">
    <div class="banner__content">
      <h1 class="banner__title">Multiplicity: Roads Not Taken</h1>
      <p class="banner__typewriter">
        <span id="typewriter"></span><span class="cursor">|</span>
      </p>
    </div>
    <nav class="banner__nav">
      <!-- navigation links appear only after shrink -->
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/blog/">Blog</a></li>
      </ul>
    </nav>
  </header>
  ```
    - The navigation is initially hidden (opacity 0) and becomes visible in the shrunk state.
- **JavaScript**:
    ```Javascript
    const banner = document.getElementById('banner');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        banner.classList.add('banner--shrunk');
    } else {
        banner.classList.remove('banner--shrunk');
    }
    });
    ```
    - For performance, consider using `requestAnimationFrame` or throttling.
- **CSS Transitions**:
    ```css
    .banner {
        height: 100vh;
        transition: height 0.3s ease, padding 0.3s ease;
        /* other styles */
    }
    .banner--shrunk {
    height: 70px;
    }
    .banner__title {
    font-size: 5rem;
    transition: font-size 0.3s ease;
    }
    .banner--shrunk .banner__title {
    font-size: 1.5rem;
    }
    .banner__nav {
    opacity: 0;
    transition: opacity 0.3s ease;
    }
    .banner--shrunk .banner__nav {
    opacity: 1;
    }
    ```
## 2.4 Responsive Considerations
- On mobile, the banner height might be less than 100vh to avoid excessive scrolling. Use `min-height: 100vh` and adjust typography.
- In the shrunk state, ensure the navbar is touch‑friendly (minimum tap target 44×44px) and navigation collapses into a hamburger menu if needed.
- The typewriter effect should have reduced motion preference respected (`prefers-reduced-motion`). Provide a static fallback.

## 2.5 Accessibility
- The typewriter animation should be paused or disabled if `prefers-reduced-motion` is set.
- The cursor element should have `aria-hidden="true"`.
- Ensure the final navbar is keyboard navigable and has proper ARIA labels.

## 2.6 Integration with Jekyll
- The banner and scroll behavior are part of the homepage only. Place the specific HTML in `index.md` or `index.html` (which uses the `home` layout). The JavaScript and CSS should be included conditionally for the homepage.
- The navigation links in the banner’s nav should match the site’s main navigation (could be populated from `_data/navigation.yml` for consistency).

*This behavior creates a seamless transition from a bold introductory statement to a functional header, enhancing user engagement and brand recall.*