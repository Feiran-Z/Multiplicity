# Accessibility Patterns and Best Practices

## Color Contrast Patterns

### Text on Background Ratios
- **Normal text (≤18pt)**: Minimum 4.5:1 contrast ratio
- **Large text (≥18pt or bold ≥14pt)**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Project-Specific Color Combinations
1. **Primary (#880112) on white (#FFFFFF)**: 8.59:1 ✓
2. **Primary on background (#F8FAFC)**: 7.83:1 ✓
3. **Text primary (#1E293B) on white**: 15.92:1 ✓
4. **Text secondary (#475569) on white**: 7.17:1 ✓
5. **White text on primary**: 8.59:1 ✓

### Hover State Contrast
- Ensure hover states maintain or improve contrast ratios
- Test: `:hover` and `:focus` states for all interactive elements

## Keyboard Navigation Patterns

### Focus Management
1. **Focus order**: Follows visual layout (left-to-right, top-to-bottom)
2. **Focus indicators**: 2px solid outline with 2px offset
3. **Focus trapping**: For modals and dropdowns
4. **Skip links**: First focusable element should be skip-to-content

### Interactive Element Requirements
1. **Buttons**: Minimum 44×44px touch target, accessible name
2. **Links**: Clear link text, `aria-label` for icon-only links
3. **Form controls**: Associated `<label>`, error messaging
4. **Custom controls**: Proper ARIA roles and keyboard handlers

## Screen Reader Patterns

### Semantic HTML Structure
1. **Headings**: Proper hierarchy (h1 → h2 → h3)
2. **Landmarks**: `<header>`, `<nav>`, `<main>`, `<footer>`
3. **Lists**: `<ul>`, `<ol>` for navigation and content
4. **Tables**: Proper `<caption>`, `<th>` scope

### ARIA Usage Guidelines
1. **Live regions**: For dynamic content updates
2. **Labels**: `aria-label` or `aria-labelledby`
3. **Descriptions**: `aria-describedby` for complex controls
4. **States**: `aria-expanded`, `aria-pressed`, `aria-selected`

### Announcement Patterns
1. **Page titles**: `<title>` element updates on navigation
2. **Status messages**: `role="status"` for success/error messages
3. **Alert messages**: `role="alert"` for important notifications
4. **Loading states**: `aria-busy="true"` during async operations

## Responsive Design Patterns

### Mobile-First Considerations
1. **Touch targets**: Minimum 44×44px on mobile
2. **Viewport**: `<meta name="viewport">` properly configured
3. **Font sizes**: Relative units (rem, em) for scalability
4. **Spacing**: Adequate spacing for touch interaction

### Breakpoint Testing
- **320px-480px**: Mobile devices
- **768px-1024px**: Tablets
- **1200px+**: Desktop
- Test: Layout reflows, text readability, interaction patterns

## Form Accessibility Patterns

### Labeling Requirements
1. **Visible labels**: Always present, positioned correctly
2. **Association**: `for` attribute matches `id`
3. **Placeholder text**: Not a substitute for labels
4. **Instructions**: Clear, concise, placed before form controls

### Validation Patterns
1. **Real-time validation**: Announce errors immediately
2. **Error messages**: Clear, specific, associated with controls
3. **Success messages**: Confirm successful submission
4. **Required fields**: `aria-required="true"` and visual indicator

### Input Types and Patterns
1. **Text inputs**: Proper `type` attributes (email, tel, url)
2. **Select menus**: Native `<select>` with accessible alternatives
3. **Checkboxes/radios**: Group with `<fieldset>` and `<legend>`
4. **Custom controls**: Full keyboard and screen reader support

## Animation and Motion Patterns

### Reduced Motion Support
1. **CSS**: `@media (prefers-reduced-motion: reduce)`
2. **JavaScript**: Check `window.matchMedia('(prefers-reduced-motion: reduce)')`
3. **Defaults**: No auto-playing animations
4. **Controls**: User can pause/stop animations

### Safe Animation Patterns
1. **Duration**: Short animations (< 1 second)
2. **Repetition**: Limited cycles or user-controlled
3. **Flashing**: No content flashes more than 3 times per second
4. **Parallax**: Consider performance and motion sensitivity

## Cross-Browser Compatibility Patterns

### CSS Feature Support
1. **Grid/Flexbox**: Well-supported, test in older browsers
2. **Custom Properties**: Good support, provide fallbacks
3. **CSS Shapes**: Limited support, progressive enhancement
4. **Blend Modes**: Check contrast in different browsers

### JavaScript Compatibility
1. **ES6+ features**: Transpile for older browsers
2. **APIs**: Feature detection before use
3. **Polyfills**: For critical functionality
4. **Progressive enhancement**: Core functionality works without JS

### Browser-Specific Issues
1. **Safari**: Focus ring styling, form control appearance
2. **Firefox**: Scroll behavior, form validation
3. **Chrome**: Performance, dev tools accessibility features
4. **Edge**: Legacy support considerations

## Testing Methodology Patterns

### Manual Testing Checklist
1. **Keyboard navigation**: Tab through all interactive elements
2. **Screen reader**: Test with NVDA, VoiceOver, JAWS
3. **Color contrast**: Use tools like axe DevTools, WAVE
4. **Zoom testing**: 200% zoom, text resizing

### Automated Testing Integration
1. **Linting**: ESLint with accessibility plugins
2. **Unit tests**: Component accessibility testing
3. **E2E tests**: Keyboard navigation flows
4. **CI/CD**: Automated accessibility checks in pipeline

### User Testing Considerations
1. **Disability types**: Visual, motor, cognitive, auditory
2. **Assistive tech**: Screen readers, magnifiers, voice control
3. **Real users**: Include people with disabilities in testing
4. **Feedback loops**: Continuous improvement based on user feedback

## Performance and Accessibility

### Loading Patterns
1. **Critical CSS**: Load above-the-fold styles first
2. **Lazy loading**: Images below the fold
3. **Font loading**: `font-display: swap` with fallbacks
4. **Script loading**: `defer` or `async` attributes

### Rendering Performance
1. **Layout shifts**: Minimize CLS (Cumulative Layout Shift)
2. **Interaction latency**: Fast response to user input
3. **Animation performance**: Use `transform` and `opacity`
4. **Memory usage**: Clean up event listeners, avoid memory leaks

### Network Conditions
1. **Offline support**: Core functionality without network
2. **Slow connections**: Progressive loading, skeleton screens
3. **Data savings**: Respect `Save-Data` header
4. **Caching strategies**: Service workers for repeat visits