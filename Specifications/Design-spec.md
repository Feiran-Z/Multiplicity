# Website Design Specification: **Multiplicity: Roads Not Taken**

## 1. Project Overview
- **Project Name**: Multiplicity: Roads Not Taken
- **Description**: An educational website on causal inference, exploring alternative paths - the "what ifs" - as in Rubin's potential outcomes model.
- **Target Audience**: Students, educators, researchers, and lifelong learners interested in causal inference with its canonical methods and modern developments.
- **Design Goals**: Communicate complex research concepts with clarity and elegance. Achieve a professional, modern, and sleek aesthetic that inspires trust and intellectual curiosity.

## 2. Branding
- **Logo**: A stylized "M" ("logo.png") in `/assets/images/`. Place in top-left header; dark version on light backgrounds, light version on dark backgrounds. Minimum clear space: 16px around.
- **Brand Voice**: Authoritative yet accessible, curious, precise, and sometimes poetic. Use clear, concise explanations with a touch of storytelling.
- **Tagline**: “Explore the roads not taken.”

## 3. Color Palette
All colors meet WCAG AA contrast ratios with text. Primary #880112 is a deep burgundy, used sparingly for impact.

| Color Role       | Hex Code   | Usage Examples                                           |
|------------------|------------|----------------------------------------------------------|
| Primary          | `#880112`  | Primary buttons, key accents, active links               |
| Secondary        | `#A53A4A`  | Secondary buttons, hover states, less prominent accents  |
| Accent           | `#3A6B6B`  | Data visualizations, info badges                         |
| Background       | `#F8FAFC`  | Main page background (soft off‑white)                    |
| Surface          | `#FFFFFF`  | Cards, modals, sidebars, input backgrounds               |
| Text Primary     | `#1E293B`  | Body copy (dark slate)                                   |
| Text Secondary   | `#475569`  | Subtitles, hints, meta information                       |
| Success          | `#2E7D32`  | Success messages, confirmations, progress completion     |
| Warning          | `#ED6C02`  | Warnings, alerts, cautionary notes                       |
| Error            | `#D32F2F`  | Error states, destructive actions                        |
| Info             | `#0288D1`  | Informational messages, status updates                   |

*Dark mode (optional) will invert surfaces and adjust text – see Section 12.*

## 4. Typography
- **Primary Font**: Inter (sans‑serif) – for all body text, UI labels, and paragraphs.
- **Secondary Font**: Cinzel Decorative (serif) – for logo, main headings (H1, H2), and banner text. Elegant, crisp, and highly readable on screens.
- **Fallback Fonts**: `sans-serif` for Inter, `serif` for Cinzel Decorative.
- **Font Sizes & Weights**:
  - H1 (Cinzel Decorative): `48px/3rem` Bold (`700`) – used on homepage hero and major section titles.
  - H2 (Cinzel Decorative): `36px/2.25rem` Semi‑bold (`600`) – section headings.
  - H3 (Inter): `24px/1.5rem` Semi‑bold (`600`) – card titles, subsection heads.
  - Body (Inter): `16px/1rem` Regular (`400`) – standard text.
  - Small (Inter): `14px/0.875rem` Regular (`400`) or Light (`300`) – captions, footnotes.
- **Line Height**: Body `1.6`, headings `1.2`.

## 5. Layout & Grid
- **Page Width**: Maximum content width `1280px`; outer margins scale with viewport.
- **Grid System**: 12‑column flexible grid, gutter `24px`.
- **Breakpoints**:
  - Mobile: `< 640px` (stack columns)
  - Tablet: `641px – 1024px` (6‑column grid often used)
  - Desktop: `> 1024px` (full 12‑column)
- **Spacing Scale**: Base unit `8px`. Common multiples: `16px`, `24px`, `32px`, `48px`, `64px`.

## 6. Iconography
- **Icon Set**: Custom outline icons (modern flat design) – or use Feather Icons / Heroicons with consistent stroke width (`2px`).
- **Size**: Standard interactive icons `24x24px`; inline icons `20x20px`.
- **Color**: Icons inherit text color or use `currentColor`; interactive icons use primary on hover.

## 7. Imagery & Illustrations
- **Photography Style**: Minimal, high‑contrast, documentary‑style images of historical events, scientific labs, or abstract concepts (blurred motion, forked roads). Use sparingly to avoid clutter.
- **Illustration Style**: Flat, geometric, with subtle gradients. Use to explain branching scenarios, timelines, and data flows. Color palette aligns with brand colors (primary, accent, neutrals).
- **Placeholders**: Light gray (`#E2E8F0`) geometric patterns for loading images.


## 8. UI Components
### 8.1 Buttons
- **Primary Button**: Background `#880112`, white text, padding `12px 24px`, border radius `6px`, hover background `#A53A4A`, transition `0.2s`.
- **Secondary Button**: Background transparent, border `2px solid #880112`, color `#880112`, padding `12px 24px`, border radius `6px`, hover background `#88011210`.
- **Text Button**: No background, `#880112` text, underline on hover.
- **Icon Button**: Square `40x40px`, border radius `6px`, hover background `#E2E8F0`.

### 8.2 Forms
- **Input Fields**: Height `48px`, border `1px solid #CBD5E1`, border radius `6px`, padding `0 16px`, focus border `#880112`, box‑shadow `0 0 0 3px #88011220`.
- **Labels & Help Text**: Inter `14px` semibold above field; help text `12px` gray below.
- **Validation**: Inline error message in red (`#D32F2F`) below field; success border green.

### 8.3 Cards
- **Structure**: Background white, border radius `12px`, box‑shadow `0 4px 12px rgba(0,0,0,0.05)`, padding `24px`. Hover shadow `0 8px 24px rgba(0,0,0,0.1)`.
- **Use Cases**: Research summaries, topic cards.

### 8.4 Navigation
- **Main Menu**: Horizontal links (Inter `16px` medium) on desktop; active state underlined with primary color. Mobile hamburger menu with slide‑out panel.
- **Breadcrumbs**: `Home / Category / Subcategory / Page` in Text Secondary, `14px`, chevron separators.
- **Footer**: Three columns: About, Resources, Contact. Social icons (flat, grayscale, turn primary on hover).


## 9. Interaction & Animation
- **Hover Effects**: Buttons darken slightly; cards lift; icons change color.
- **Loading States**: Skeleton screens for cards; progress bar for long operations.
- **Micro‑interactions**: Button click ripple (primary color); toggle switches slide with accent background.
- **Page Transitions**: Fade (`0.3s`) between main views.
- **AI Response Animations**: Text appears word‑by‑word (fast, 30ms per word) to simulate thinking.

## 10. Accessibility
- **Color Contrast**: All text/background combinations meet WCAG AA (minimum 4.5:1 for normal text). Primary button white on `#880112` contrast > 7:1.
- **Focus Indicators**: Visible `2px` outline in primary color on all focusable elements; skip to content link.
- **Alt Text**: All meaningful images have descriptive alt text; decorative images have empty alt.
- **ARIA Labels**: Custom components (chat) have appropriate roles and labels.
- **Screen Reader Compatibility**: New messages announced politely.

## 11. Responsive Design
- **Mobile Adaptations**: Stack all content; navigation becomes hamburger; touch targets at least `44x44px`.
- **Tablet Adaptations**: Two‑column layouts for cards; sidebars collapse below content.
- **Desktop Enhancements**: Hover tooltips for data points.

## 12. Dark Mode (Optional)
- **Toggle Location**: In user menu (top‑right) or footer.
- **Color Overrides**:
  - Background: `#121212`
  - Surface: `#1E1E1E`
  - Text Primary: `#E0E0E0`
  - Text Secondary: `#A0A0A0`
  - Primary button hover: adjust brightness.
- **Image/Icon Adjustments**: Slightly reduce brightness; use white versions of logo if available.

## 13. Design Assets
- **Design Tool**: [Link to Figma file]
- **Asset Export**: Icons and logos in SVG format; raster images in WebP with fallback.
- **Font Files**: Inter (Google Fonts), Playfair Display (Google Fonts). Self‑host as fallback.

## 14. Approval & Sign-off
- **Stakeholders**: Project Lead, Research Lead, UX Designer, Developer Lead.
- **Review Date**: TBD
- **Version**: 1.0

---

*This document is a living blueprint – update as the design evolves.*