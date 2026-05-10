---
name: LexStart Design Identity
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
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
  on-tertiary: '#002e69'
  tertiary-container: '#d8e2ff'
  on-tertiary-container: '#0560cb'
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
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004494'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '300'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  stack-xl: 96px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
  stack-xs: 4px
  inset-lg: 24px
  inset-md: 16px
  gutter: 24px
  margin-page: 64px
---

## Brand & Style

This design system establishes a visual language of absolute authority and structural integrity for the legal technology sector. By merging high-contrast Brutalism with corporate precision, the aesthetic communicates transparency, speed, and the unyielding nature of law. 

The style is defined by "Architectural Professionalism"—relying on raw, honest materials (pure black, hairlines, and white light) to create a sense of digital permanence. It avoids the soft, organic trends of consumer tech in favor of sharp corners, rigid grids, and extreme typographic contrast. The UI is designed to feel like a high-end legal instrument: utilitarian, expensive, and uncompromising.

## Colors

The palette is rooted in a "Pure Black" environment to maximize focus and minimize visual noise. 

- **Primary & Neutral:** White (#ffffff) is reserved for the highest hierarchy—primary actions and headlines. Neutral shades of gray provide structural depth.
- **Surface Tiers:** Backgrounds follow a strict hierarchy of depth. The base canvas is #000000. Spec cells (data tables or code-like blocks) sit at #0d0d0d. Standard cards occupy #1a1a1a, while temporary elevated states or flyouts use #262626.
- **Accent Tricolor:** The blue, bright blue, and red tricolor is used as a signature element. It should appear as a 2px horizontal stripe at the top of cards, thin vertical dividers between navigation items, or as a decorative accent on badges to signify the brand's presence without overwhelming the content.

## Typography

This design system utilizes **Inter** exclusively to ensure technical legibility while leaning into its geometric structure.

- **Weight Contrast:** The system thrives on the friction between 700 Bold headlines and 300 Light body text. Avoid using 400, 500, or 600 weights to maintain this stylistic tension.
- **Headlines:** All headlines must be uppercase. Tracking (letter-spacing) is tightened for large display text to feel "compressed" and impactful, while smaller headlines receive slight tracking increases to ensure clarity.
- **Body Text:** Body copy is strictly 300 Light. This creates a sophisticated, airy feel that balances the heavy, bold nature of the headers.
- **Labels:** Used for buttons and small metadata, these utilize a bold weight with significant letter-spacing (up to 1.5px) for a modern, architectural look.

## Layout & Spacing

The layout is governed by a rigorous 12-column grid system. 

- **Grid Separation:** Instead of whitespace alone, this design system uses 1px hairlines (#3c3c3c) to define sections, sidebars, and header regions.
- **Generous Voids:** Major sections are separated by 96px gaps to allow the heavy typography to breathe. 
- **Card Padding:** Content within containers and cards must maintain a 24px internal margin (inset-lg) to ensure text does not feel crowded against the hard edges.
- **Mobile Reflow:** On mobile devices, the 12-column grid collapses to 4 columns. Sidebars transform into full-width top-level sections separated by horizontal hairlines.

## Elevation & Depth

This system rejects shadows in favor of **Tonal Layering**. 

Depth is communicated through the stacking of colors and the use of hairlines.
- **Level 0 (Canvas):** #000000.
- **Level 1 (Cards/Items):** #1a1a1a with a 1px #3c3c3c border.
- **Level 2 (Elevated/Hover):** #262626.
- **Interactive Depth:** When an item is clicked or active, it may drop back to Level 0 (Spec Cells) to create a "pressed" effect, or gain the Tricolor Stripe as a top-border indicator.

Hairlines must be consistent: always 1px and always #3c3c3c. They act as the primary visual connector across the interface.

## Shapes

The shape language is defined by a **zero-radius policy**. 

- **Hard Edges:** All cards, buttons, input fields, and containers must have 0px border radius. This reinforces the brutalist and legal-tech professional tone.
- **Exceptions:** Circular shapes are permitted *only* for icon-only floating action buttons or small status indicators to ensure they are visually distinct from the primary structural elements.

## Components

### Buttons
Primary buttons are 48px in height, flat rectangular shapes. They feature a white outline (1px or 1.5px) with no fill, or a solid white fill with black text for maximum emphasis. Labels are always Uppercase with 1.5px letter-spacing.

### Cards & Spec Cells
Cards use the #1a1a1a surface. Spec Cells (#0d0d0d) are used for data entry, code snippets, or legal clause viewing. Every card is encased in a #3c3c3c hairline.

### The Tricolor Stripe
A signature component. This is a thin (2px to 4px) horizontal bar featuring segments of Blue, Bright Blue, and Red. It should be applied to the top edge of a primary navigation bar, the bottom of a selected tab, or as a small vertical "status" flag on a high-priority card.

### Input Fields
Inputs are simple rectangles with a 1px hairline border. The label sits above the field in Label-MD typography. On focus, the border color changes from #3c3c3c to #ffffff. No shadows or glow effects are permitted.

### Lists
Lists are separated by horizontal 1px hairlines. Each list item should have ample vertical padding (16px to 24px) to maintain the "Generous" spacing philosophy. No alternating row colors; use Spec Cells (#0d0d0d) for hover states instead.