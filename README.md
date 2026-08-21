# MKJ Children School

Production-oriented React + Vite website for MKJ Children School.

## Homepage status

All eight planned homepage sections are implemented:

1. Responsive animated navbar
2. Animated hero
3. About / mission with animated stats
4. Academics / programs
5. Campus life / gallery
6. Testimonials
7. Admissions / CTA
8. Footer / contact

## Stack

- React 19
- Vite 8
- Motion (`motion/react`)
- Plain CSS

No UI framework or icon dependency is required.

## Production checks

- Mobile-first layouts, including the 375px breakpoint
- Tablet and desktop grid layouts
- Sticky navigation and fixed-header anchor offsets
- Keyboard focus states and a skip-to-content link
- `prefers-reduced-motion` support
- WCAG AA contrast corrections for small text
- Production metadata and favicon
- GitHub Actions production-build verification

## Local development

Use Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

Vite writes the deployable site to `dist/`.

## Hostinger deployment

Recommended GitHub deployment settings for this Vite site:

- Repository: `rathoreanant98-eng/MKJ-CHILDREN-SCHOOL`
- Production branch after approval: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.x (or another version satisfying the `engines` field)

In Hostinger hPanel, add/deploy a web app, connect GitHub, select this repository and the production branch, review the detected Vite build settings, then deploy. This site currently has no required environment variables.

## Before public launch

Replace the current preview content with verified school information:

- Official school logo/brand assets
- Real address, phone number, and email
- Official admissions/application URL or enquiry workflow
- Approved parent/student testimonials
- Authentic MKJ campus photography
- Verified institutional statistics and trust claims
- Official social-media URLs
- Privacy-policy URL/content

Do not publish placeholder contact details or sample testimonials as final school information.
