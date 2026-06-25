# MVF Layout Architecture

## App Structure

- App Router root layout wraps all routes with `SiteHeader` and `SiteFooter`.
- Static root route renders `HomePage`.
- Dynamic `[slug]` route renders the nine sitemap content pages.
- Dynamic `post/[slug]` route renders the four sitemap posts.

## Responsive Rules

- Desktop header uses inline nav and full-height donate block.
- Mobile header collapses into a drawer with the same nav order.
- Home CTA bands and content grids stack below tablet width.
- Content pages use one-column bodies on mobile, two-column media/content layouts on desktop where the original page uses image panels.

## Data Ownership

- Navigation, footer copy, images, posts, FAQ, grant sections, alumni sections, and past winners are centralized in `src/data/mvf-content.ts`.
- Past Winners is parsed from a raw year/name/detail data block so future updates avoid JSX edits.
