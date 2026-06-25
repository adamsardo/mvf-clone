# MVF Design Tokens

Source: `docs/research/mvf-extraction.json` and desktop/mobile screenshots captured on 2026-06-25.

## Typography

- Primary extracted families: `avenir-lt-w01_85-heavy1475544`, `avenir-lt-w01_35-light1475496`, Arial/Helvetica fallbacks.
- Clone implementation: `Montserrat` via `next/font/google`, weighted 400/500/600/700/800, as a close editable baseline for the Wix Avenir-era typography.
- Major headings: heavy, centered, 48-72px desktop.
- Body/footer copy: bold or medium, compact, 13-18px with generous line height.

## Colors

- `--mvf-purple`: `rgb(78 31 196)`
- `--mvf-purple-dark`: `rgb(47 21 122)`
- `--mvf-blue`: `rgb(64 192 242)`
- `--mvf-navy`: `rgb(45 86 119)`
- `--mvf-footer`: `rgb(21 64 81)`
- `--mvf-soft`: `rgb(246 246 246)`
- `--mvf-ink`: `rgb(40 26 57)`
- `--mvf-grey`: `rgb(98 98 98)`
- `--mvf-border`: `rgb(223 223 223)`
- `--mvf-line`: `rgb(143 139 151)`

## Layout

- Header: fixed, 68px tall, translucent navy over hero on desktop.
- Page banners: cyan block, large centered white page title, content starts below fixed header.
- Main content: light grey `#f6f6f6` sections with constrained center column.
- Footer: white three-column block plus dark teal copyright strip.

## Assets

- Download manifest: `docs/research/mvf-assets.json`
- Local asset root: `public/images/mvf/`
- Screenshots: `docs/design-references/mooneevalleyfoundation/`
