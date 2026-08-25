# Ephraim Lifanjo — Personal Portfolio

A minimal one-page developer portfolio built with **Next.js 16** and **React 19**.

The site is intentionally simple: no CMS, no admin dashboard, no database, no portfolio project catalogue, and no custom backend.

## Sections

- Intro / personal positioning
- About
- Technical toolkit
- Collaboration form
- GitHub, LinkedIn and email links

## Contact form

The collaboration form uses FormSubmit so the website remains static while messages are delivered to the portfolio email inbox.

On the very first submission, FormSubmit may send an activation email to the destination inbox. Confirm it once; subsequent submissions are delivered directly.

A normal `mailto:` link is also available as a fallback.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

GitHub Actions also runs a production build on every push to `main`.

## Deployment

Recommended host: **Vercel** with the repository connected to the `main` branch. No application environment variables are required for the current static page.

## Stack

- Next.js
- React
- CSS
- GitHub Actions
- Vercel

© 2026 Ephraim Lifanjo Sewa.
