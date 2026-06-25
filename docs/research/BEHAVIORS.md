# MVF Behavior Notes

Source: Playwright crawl and screenshot pass.

## Global

- Wix site uses static page navigation with fixed top header.
- No meaningful scroll-triggered style change was detected for the header in the extraction pass.
- No smooth-scroll library such as Lenis or Locomotive was detected.
- Forms are Wix app widgets on the current site; clone implements visual-only forms for baseline.

## Clicks

- Header nav routes to site pages.
- Donate links route to `/support-us`.
- Apply form buttons link to current downloadable `.doc` application files.
- News cards route to sitemap post pages.

## Mobile

- Current Wix mobile screenshots preserve much of the desktop composition and height. Clone improves manageability with a responsive drawer while preserving the same content order.

## Intentional Baseline Changes

- Remove the home contact/social widget immediately.
- Use “Melbourne’s north-west” for canonical service-area wording in editable content.
- Keep donation as a visual/link placeholder pending separate Stripe integration.
