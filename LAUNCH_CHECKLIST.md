# MKJ Website Launch Checklist

This file separates completed technical hardening from items that require verified school information or the final production domain.

## Completed in launch hardening

- Hostinger preview protected with `noindex, nofollow, noarchive`
- Verified school name, address, phone numbers, and email used consistently
- School structured data added to the page
- Privacy policy added
- Google Maps directions link added
- Admissions quick-enquiry flow does not store form data on the website
- Fabricated/sample testimonials removed from the public experience
- Mobile navigation supports Escape and keyboard focus containment
- Misleading arrows removed from non-clickable Academics/Campus cards
- Production dependency audit added to CI
- Production placeholder regression check added to CI
- Build verification now runs on `main`, feature branches, and PRs to `main`
- Campus QA styles consolidated into the launch-hardening stylesheet

## Required before switching the final domain to public indexing

1. Replace all temporary Unsplash photography with approved MKJ photographs.
2. Confirm the exact classes/grades offered and update Academics wording if needed.
3. Confirm board/recognition/affiliation details, if these should be displayed.
4. Confirm medium of instruction.
5. Confirm principal/head-school name and whether a leadership message should be added.
6. Confirm school/office timings.
7. Confirm admission documents/process and any eligibility information that can be published.
8. Confirm transport/facility information before adding it.
9. Add genuine approved parent/student testimonials only if MKJ wants a testimonial section.
10. Add verified official social-media URLs, if any.
11. Provide the final domain name.
12. Provide an approved social-sharing image (ideally real MKJ photography).

## Final-domain SEO switch

Only after the items above are ready:

- Change `index.html` robots meta from `noindex, nofollow, noarchive` to `index, follow`.
- Add the final canonical URL.
- Add `og:url` using the final domain.
- Add an approved 1200x630 Open Graph image and `og:image`/Twitter image tags.
- Add the final domain URL to the School structured data.
- Add `public/sitemap.xml` using the final domain.
- Update `public/robots.txt` with the sitemap URL.
- Re-review the privacy policy if analytics, embedded maps, videos, or other trackers are introduced.

## Regression checks before every public release

- Desktop: 1920x1080, 1440x900, 1366x768
- Tablet: 768x1024
- Mobile: 390x844 and 375x812
- Keyboard-only navigation
- Reduced-motion mode
- Chrome, Safari/WebKit, Firefox
- Phone/email/directions links
- Admission enquiry form
- Privacy page
- No horizontal scrolling
- No clipped headings/cards beneath the floating navigation
- No temporary labels or unverified claims in the final indexed version
