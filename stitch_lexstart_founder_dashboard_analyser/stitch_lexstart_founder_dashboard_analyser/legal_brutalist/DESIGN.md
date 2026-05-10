---
name: Legal Brutalist
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#a1c9ff'
  on-secondary: '#00325a'
  secondary-container: '#0065b0'
  on-secondary-container: '#cfe2ff'
  tertiary: '#ffffff'
  on-tertiary: '#680100'
  tertiary-container: '#ffdad4'
  on-tertiary-container: '#c90f06'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#a1c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004880'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#930100'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '300'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  button-text:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 1.5px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1280px
  divider-weight: 4px
---

## Brand & Style

This design system is engineered for the high-stakes environment of Indian legal-tech. It adopts a **Brutalist-Functional** aesthetic, characterized by high gravity, mathematical precision, and an uncompromising structural clarity. The brand is designed to resonate with founders who value speed, transparency, and the absolute authority of the law.

The interface evokes the physical presence of legal documents—organized, dense, and authoritative. By stripping away decorative elements like shadows and rounded corners, the system emphasizes "The Truth of the Document." The visual identity is anchored by a sharp, high-contrast dark mode that minimizes eye strain during deep work, while using a tricolor accent inspired by the national identity to subtly ground the product in its local context.

## Colors

The palette is strictly functional, utilizing a deep `#000000` canvas to establish a foundation of stability. Text hierarchy is maintained through three levels of grayscale: `#ffffff` for primary data, `#bbbbbb` for reading copy, and `#7e7e7e` for metadata and non-interactive states.

Structural depth is achieved through tiered black-to-gray surfaces rather than shadows. The accent strategy is highly disciplined: the **Tricolor Stripe** (`#0066b1` → `#1c69d4` → `#e22718`) is strictly reserved for 4px horizontal dividers to denote section transitions or critical breaks in the information architecture. No other chromatic accents are permitted in the core UI framework.

## Typography

Typography is the primary vehicle for the brand’s professional gravity. We utilize **Inter** across all levels for its utilitarian clarity. 

All headlines must be set in **Inter 700 UPPERCASE**, emphasizing a "no-nonsense" legal tone. Body copy is set in **Inter 300** to provide a sharp, airy contrast to the heavy headers, ensuring long-form legal documents remain legible without visual clutter. For technical data or specification cells, use the `label-caps` style to differentiate metadata from prose. Letter spacing is slightly expanded in uppercase instances to maintain legibility in the high-contrast dark environment.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to maintain legal document alignment, transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid system with 16px gutters.
- **Rhythm:** All spacing (padding, margins) must follow 4px/8px increments.
- **Dividers:** The Tricolor Stripe is a fixed 4px element used to separate major content blocks. 
- **Internal Borders:** Components and internal sections are separated by a 1px hairline border (`#3c3c3c`). 

Layouts should prioritize vertical stacking to simulate the flow of a contract. Dense information density is encouraged; whitespace should be functional (separating distinct legal clauses) rather than purely aesthetic.

## Elevation & Depth

Depth is conveyed through **Surface Tiering** and **Structural Outlines**. In this Brutalist system, light and shadow are rejected in favor of solid color values and 1px hairline borders.

- **Level 0 (Canvas):** `#000000` — The lowest level.
- **Level 1 (Cells/Inputs):** `#0d0d0d` — Used for input fields and specific data cells.
- **Level 2 (Cards/Containers):** `#1a1a1a` — The standard container for content blocks.
- **Level 3 (Elevated):** `#262626` — Used for modals or hovered states.

Every surface is bounded by a `#3c3c3c` hairline border. This creates a "grid-map" effect, where the interface feels like a perfectly measured blueprint.

## Shapes

The shape language is strictly **Sharp (0px radius)**. Every element—buttons, cards, inputs, and tags—must maintain hard 90-degree angles. This reflects the rigidity and precision of the legal industry. Any deviation into roundedness is a violation of the brand's core design principle.

## Components

### Buttons
- **Height:** Fixed at 48px.
- **Style:** 0px radius. Use either a solid White fill (Primary) with Black text, or a 1px White outline (Secondary) with White text.
- **Typography:** 14px Inter 700, Uppercase, 1.5px tracking.

### Cards & Spec Cells
- **Cards:** Background `#1a1a1a`, 1px border `#3c3c3c`. No shadows.
- **Spec Cells:** Background `#0d0d0d`, used for displaying technical data, clause numbers, or fee breakdowns. These are often used in tabular arrays.

### Inputs
- **Style:** Underlined or fully boxed with 1px border `#3c3c3c`. 
- **Focus State:** Border color changes to `#ffffff`. Background remains `#0d0d0d`.

### The Tricolor Divider
- A persistent component used to anchor the page. It is a 4px high horizontal bar containing a linear gradient or three distinct blocks of `#0066b1`, `#1c69d4`, and `#e22718`. Use this to signify the end of a legal section.

### Data Tables
- High-density tables with `#3c3c3c` hairlines between every row and column. Header cells use `label-caps` typography with a `#262626` background.