# Ephraim Lifanjo Sewa — Developer Portfolio

A production-oriented, multilingual portfolio for **Ephraim Lifanjo Sewa**, built from the supplied `developer-portfolio-main` base and enhanced with ideas/assets from the supplied React 3D portfolio.

## What is included

- Next.js 16 + React 19 + Tailwind CSS 4
- Responsive single-page portfolio, no admin dashboard
- Automatic browser-language selection: English, French, German
- Manual EN / FR / DE language switcher saved in `localStorage`
- Three.js animated 3D hero object
- Framer Motion section transitions
- GSAP hero entrance animation
- Real supplied portrait and work photos, cropped for portfolio use without altering facial geometry
- Nova Studio branding asset
- Projects: Clarvo Platform, Cameroon Zoom, Les Fleurs Invoice, enterprise invoice systems, RUSH, QRCode Master Pro, WhatsApp Status Saver Pro, open-source portfolio
- Education: GCE O-Level, GCE A-Level Science, HND Software Engineering, Bachelor of Technology / Computer Science, future Master's goal
- Direct contact by email and WhatsApp, avoiding fragile contact-form secrets by default
- SEO metadata and recruiter-friendly content structure
- Existing template assets retained in the repository for future reuse
- 3D model assets from the second supplied project copied into `public/models/`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production test

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. No environment variables are required for the current direct email/WhatsApp contact flow.
6. Deploy.

## Main customization files

- `utils/data/portfolio-data.js` — profile, projects, skills, experience, education and translations
- `app/components/portfolio/PortfolioClient.jsx` — page UI and sections
- `app/components/portfolio/Hero3D.jsx` — Three.js hero animation
- `app/components/portfolio/LanguageProvider.jsx` — language detection/switching
- `app/css/globals.scss` — global visual system
- `public/profile/` — profile portrait
- `public/work/` — professional work images
- `public/brand/` — Nova Studio brand asset

## Contact / public profiles

- Email: `ephraimlifanjos@gmail.com`
- WhatsApp: `+237 696 762 152`
- GitHub: `https://github.com/ephraimlifanjo`
- LinkedIn: `https://www.linkedin.com/in/ephraim-lifanjo-5b2156329`
- X: `https://x.com/EphraimLifanjo`
- DEV: `https://dev.to/ephraim_lifanjo`
- Stack Overflow: `https://stackoverflow.com/users/30354977/ephraim-lifanjo-sewa`
- Bluesky: `https://bsky.app/profile/ephraim-lifanjo.bsky.social`
- Reddit: `https://www.reddit.com/user/EphraimSewa5/`

## Notes

The portfolio intentionally avoids unsupported claims about years of professional experience. It emphasizes demonstrated products, internship experience, co-founding/product work, community building and the breadth of the technical stack instead.

The original portfolio base advertises Next.js 16, React 19, Tailwind CSS 4, responsiveness, SEO, App Router, server components, dark theme/Lottie support and deployment guidance. This rebuilt version keeps the same modern Next.js foundation while simplifying the runtime for reliability.

## Base / attribution

This project was rebuilt from the user-supplied `developer-portfolio-main` starter (the Said7388 developer portfolio family) and a user-supplied React 3D portfolio for visual/3D inspiration. Keep the applicable upstream license/attribution when redistributing any upstream code or assets.
