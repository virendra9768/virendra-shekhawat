# virendra-shekhawat

Personal portfolio website — [virendrashekhawat.vercel.app](https://virendrashekhawat.vercel.app)

Built with Next.js 16 App Router, Tailwind CSS, and TypeScript. Dark editorial design with a focus on backend and full stack freelance work.

---

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + inline styles
- **Fonts** — DM Serif Display, DM Mono, DM Sans (Google Fonts)
- **Email** — Resend
- **Deployment** — Vercel

---

## Getting Started

```bash
git clone https://github.com/virendra-shekhawat/virendra-shekhawat.git
cd virendra-shekhawat
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file in the root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get a free API key at [resend.com](https://resend.com). The free tier allows 100 emails/day which is more than enough for a portfolio contact form.

---

## Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts        # Contact form API — sends email via Resend
├── layout.tsx               # Root layout, metadata, fonts
├── page.tsx                 # Home page — assembles all sections
└── globals.css

components/
├── Navbar.tsx
├── HeroSection.tsx
├── AboutSection.tsx
├── ServicesSection.tsx
├── ProcessSection.tsx
├── ProjectsSection.tsx
├── ContactSection.tsx
├── Footer.tsx
└── FadeIn.tsx               # Scroll-triggered fade animation wrapper

utils/
└── common.ts                # All static data — SERVICES, EXPERIENCE, STACK,
                             # PROJECTS, STEPS, FAQS, CONTACT_DETAILS, etc.
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | Hero | Name, scramble role animation, stats, CTAs |
| 02 | About | Bio, experience table, tech stack grid |
| 03 | Services | Expandable service rows with deliverables |
| 04 | Process | Brief → Proposal → Build → Ship + FAQ |
| 05 | Projects | Fullscreen project carousel with live iframe previews |
| 06 | Contact | Contact form with validation + Resend integration |

---

## Deployment

Deployed on Vercel. To deploy your own fork:

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `RESEND_API_KEY` under Project → Settings → Environment Variables
4. Deploy

---

## Local Development Notes

- Node.js 18+ required
- No database — all content is static data in `utils/common.ts`
- To update projects, experience, services or any site content, edit `utils/common.ts`
- The contact form hits `/api/contact` — this requires the `RESEND_API_KEY` env variable to be set, otherwise submissions will fail silently in development

---

## License

MIT