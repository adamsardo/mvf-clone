# MVF Component Inventory

- `SiteHeader`: fixed logo/nav/donate header with mobile drawer.
- `SiteFooter`: foundation summary, visual newsletter signup, quick links, copyright strip.
- `PageBanner`: cyan page title band.
- `HomePage`: hero, split CTA strip, awards gallery, news preview, alumni voices, join CTA.
- `AlumniVoices`: reusable alumni quote/story cards sourced from structured content.
- `DonationForm`: Stripe Checkout donation form with amount, frequency, email, and QR handoff.
- `NewsCard`: reusable post card for home/news/recent posts.
- `InfoSections`: reusable heading/body/bullets section renderer.
- `VisualForms`: visual-only contact form block.
- `SupportCta`: repeated cyan donation CTA.
- `MainPage`: route dispatcher for sitemap pages.
- `PostPage`: post detail template and recent-post rail.

All source content lives in `src/data/mvf-content.ts` for easy redesign iteration.
