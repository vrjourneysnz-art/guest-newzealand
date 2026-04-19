# Guest New Zealand — guestnewzealand.com

Professional New Zealand travel planning and itinerary service built with Next.js 14, Tailwind CSS, and TypeScript. Rebranded fork of the Guest Australia site — shares architecture, differs on brand palette and country content.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Forms:** React Hook Form
- **Email:** Resend (for contact form delivery)
- **Deployment:** Railway

## Brand Palette

NZ-specific tokens defined in `tailwind.config.ts`:

| Token | Hex | Role |
|---|---|---|
| `sage` | `#789653` | Primary CTA, links |
| `sage-dark` | `#587235` | Button hover |
| `sage-light` | `#F5F8EE` | Section backgrounds |
| `sage-mid` | `#E3E8D7` | Card backgrounds, CTA panels |
| `gold` | `#D6910F` | Accent badges, highlights |
| `gold-dark` | `#C1820C` | Gold hover |
| `rust` | `#B55217` | Tertiary accent |
| `body` | `#555555` | Body copy |
| `dark` | `#343434` | Headings |
| `border` | `#ABB0B2` | Form fields, dividers |

Source: verified from live CSS, April 2026.

## Local Development

```bash
npm install
npm run dev       # dev server on http://localhost:3000
npm run build     # production build
npm start         # production server
npm run lint
```

## Site Structure

```
/                                                         Home
/travel-planning                                          Travel planning + enquiry form
/itineraries                                              Itineraries index
/itineraries/new-zealand-lifestyle-holidays               Lifestyle
/itineraries/family-holiday-new-zealand                   Family
/itineraries/honeymoon-packages-new-zealand               Honeymoon
/itineraries/new-zealand-and-australia-vacation-packages  Combined NZ & AU
/travel-information                                       Travel info index
/travel-information/travel-tips
/travel-information/places-new-zealand
/new-zealand-travel-blogs                                 Blog index
/new-zealand-travel-blogs/[slug]                          Individual posts
```

Short-slug redirects (`/itineraries/lifestyle` → `/itineraries/new-zealand-lifestyle-holidays`, etc.) live in `next.config.mjs`.

## Environment Variables

- `RESEND_API_KEY` — required for the `/api/contact` form to deliver emails. Without it, submissions will return 500.

Contact form deliveries go to `vrjourneysnz@gmail.com` (set in `src/app/api/contact/route.ts`).

## Railway Deployment

1. Push this repo to GitHub.
2. Create a new Railway service → connect the GitHub repo (one service per Guest site — do not share with AU).
3. Nixpacks auto-detects Next.js; build `npm run build`, start `npm start`.
4. Set `RESEND_API_KEY` in Railway's environment variables.
5. Railway injects `PORT` automatically.

## GoDaddy DNS Configuration

Point `guestnewzealand.com` to Railway (hold until Railway preview URL is verified):

1. Railway → Settings → Domains → add `guestnewzealand.com` and `www.guestnewzealand.com`.
2. GoDaddy DNS:
   - **A Record:** `@` → Railway's IP (as shown in Railway)
   - **CNAME:** `www` → `your-project.up.railway.app`
3. Wait for DNS propagation (up to 48 hours).

## Outstanding TODOs (placeholder content)

- **Imagery** — `public/images/hero-nz.jpg`, `family-nz.jpg`, `lifestyle-nz.jpg`, `honeymoon-nz.jpg`, `logo.jpg` currently hold the AU placeholder files. Swap with NZ-specific photography before launch.
- **Itinerary content** — `src/data/itineraries.ts` and `src/data/rich-itineraries/*.ts` retain AU destination details (Sydney, Uluru, Great Barrier Reef). Replace with NZ destinations (Auckland, Queenstown, Milford Sound, Rotorua, etc.).
- **Blog posts** — `src/data/blog.ts` and `src/data/blog-extracted.json` contain AU blog content. Replace with NZ posts.
- **Socials** — Facebook / YouTube links in `Footer.tsx` are `href="#"` placeholders. Update with NZ-specific handles once finalised.
- **Contact form email template** — `src/app/api/contact/route.ts` uses sage branding; the `from:` field assumes `enquiries@guestnewzealand.com` will be verified in Resend.

## Sister Sites

Guest New Zealand is part of the Virtual Journeys family:

- [guestaustralia.com](https://guestaustralia.com) — Australia travel planning
- [virtualjourneys.co.nz](https://virtualjourneys.co.nz) — YouTube travel channel

Once NZ is live, update the AU and VJ footers to link back.
