# SiteHeader Specification

## Overview

- Target file: `src/components/mvf/SiteHeader.tsx`
- Screenshots: `docs/design-references/mooneevalleyfoundation/home-desktop.png`, `home-mobile.png`
- Interaction model: click-driven mobile menu, static/fixed desktop nav.

## Structure

- Fixed header container.
- Text logo linking to `/`.
- Desktop nav links from `navItems`.
- Purple Donate block linking to `/support-us`.
- Mobile icon button opens a vertical drawer.

## Extracted Styles

- Header height: 68px.
- Header background: translucent navy, extracted current site approximates `rgb(45 86 119)` with opacity.
- Donate background: purple `rgb(78 31 196)`.
- Nav text: white, bold, compact.

## Behaviors

- Desktop: fixed top nav, no extracted scroll-style change.
- Mobile: local React state toggles menu; drawer preserves same nav order.
