# Karan Portfolio

Personal portfolio website built with Remix, React, and Three.js.

This project has been cleaned up to remove unreferenced media and temporary log files so the codebase is easier to maintain.

## Tech stack

- Remix + Vite
- React
- Three.js
- Framer Motion
- Cloudflare Pages (deployment)

## Quick start

Requirements:

- Node.js 19.9+
- npm 9.6+

Install and run:

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

## Project structure

```text
app/
  assets/        # Project images, videos, 3D assets, fonts
  components/    # Reusable UI components
  hooks/         # Reusable React hooks
  layouts/       # Shared page layouts
  routes/        # Remix route modules
  utils/         # Utility helpers
  config.json    # Personal data, social links, project metadata

public/
  static files served directly (resume, icons, robots, sitemap)

server/
  server entry for production runtime

functions/
  Cloudflare functions
```

## Main files you will edit most often

- app/config.json: profile info, links, project metadata
- app/routes/home/home.jsx: homepage sections and project cards
- app/routes/contact/contact.jsx: contact page and form action
- public/Karanpal-Singh-Resume.pdf: downloadable resume

## Content workflow

1. Update profile and project metadata in app/config.json.
2. Add or replace media in app/assets.
3. Wire the new media in relevant route files.
4. Run npm run build before deploy.

## Keeping the repo clean

- Store only assets that are actually used by routes/components.
- Avoid backup/duplicate files in app/assets (for example old-backup suffixes).
- Keep generated logs and temporary debug files out of the repository.
- After content updates, run a build to catch missing imports quickly.

Useful maintenance command:

```bash
npm run audit:unused-assets
```

Optional: delete the files reported by the script automatically.

```bash
node ./scripts/unused-assets.cjs --delete
```

## Contact form notes

Contact form submission is handled in app/routes/contact/contact.jsx.

Recommended setup (Resend):

- TO_EMAIL=your Gmail address (receiver)
- RESEND_API_KEY=your Resend API key
- RESEND_FROM_EMAIL=verified sender (for example Portfolio <noreply@yourdomain.com>)

Fallback setup (AWS SES):

- TO_EMAIL=your Gmail address (receiver)
- AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY
- FROM_EMAIL=verified SES sender

## Deployment

Deploy to Cloudflare Pages:

```bash
npm run deploy
```
#
