# Site Structure — Guest Website Family

Canonical page tree and component inventory from the Guest Australia Next.js build. All Guest-brand sites share this structure — only the country-specific content differs.

---

## Tech Stack (all Guest sites)

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form
- **Images:** Next.js Image component with optimisation
- **SEO:** Next.js Metadata API
- **Deployment:** Railway
- **Domain management:** GoDaddy DNS
- **Repo:** GitHub (same account as Virtual Journeys travel app)

---

## Page Tree

```
/                                    Home
/travel-planning                     Travel Planning (enquiry form)
/itineraries                         Itineraries parent
├── /lifestyle                       Lifestyle category
│   └── /[slug]                      Individual lifestyle itinerary pages
├── /family                          Family category
│   └── /[slug]                      Individual family itinerary pages
├── /honeymoon                       Honeymoon category
│   └── /[slug]                      Individual honeymoon itinerary pages
└── /australia-and-new-zealand       Combined AU/NZ trips (or country-specific equivalent)
    └── /[slug]

/travel-information                  Travel Info parent
├── /travel-tips                     Travel tips subpage
└── /places-in-[country]             Country places subpage (swap per site)

/travel-blogs                        Blog index
└── /[slug]                          Individual blog post pages
```

### Country-specific variations

| Site | `/itineraries` fourth category | `/travel-information` subpage |
|---|---|---|
| Guest Australia | `/australia-and-new-zealand` | `/places-in-australia` |
| Guest New Zealand | `/new-zealand-and-australia` | `/places-in-new-zealand` |

---

## Shared Components

Built once, reused across every page:

| Component | Purpose |
|---|---|
| `<Nav />` | Top nav with hamburger on mobile; links to all major pages + sister sites |
| `<Footer />` | Copyright, contact info, sister site cross-links, newsletter embed |
| `<Hero />` | Full-width photographic hero with video background support + overlay |
| `<CategoryCard />` | Full-bleed image card with dark gradient + white text (used on home + itineraries index) |
| `<CTAPanel />` | Solid-colour panel using the secondary accent tone |
| `<Button />` | Primary CTA button (brand primary fill, white text, 3px radius) |
| `<ItineraryCard />` | Card for itinerary listings — duration badge, image, title, summary |
| `<TestimonialCard />` | Client review card |
| `<EnquiryForm />` | React Hook Form wrapper for the Travel Planning page |
| `<BlogCard />` | Blog post listing card |

---

## Shared Testimonials (for all Guest sites)

Used on the home page testimonial section (same for AU and NZ):

1. **Audrey Mothupi & Family** — "Michael truly is the best! Planned an amazing 20 day trip to Australia and New Zealand... A truly seamless perfect family holiday"
2. **Lisa Mansour & Family** — "It was the trip of a lifetime! Sydney, Blue Mountains, Port Douglas/Great Barrier Reef, Uluru, and Melbourne all in 10 days"
3. **Mindy Ross, Lifestyle Traveller** — "Each and every accommodation was off the hook fabulous... I highly recommend Michael as a travel designer"

---

## Sister Site Cross-Links

Every Guest site links to the other two members of the Virtual Journeys family:

| Current site | Links to |
|---|---|
| Guest Australia | guestnewzealand.com + virtualjourneys.co.nz |
| Guest New Zealand | guestaustralia.com + virtualjourneys.co.nz |
| Virtual Journeys NZ | guestaustralia.com + guestnewzealand.com |

Cross-links live in the footer and a dedicated section on the home page.

---

## Home Page Sections (in order)

1. **Hero** — full-width photographic/video background, headline + subheadline, dual CTA ("View Itineraries" + "Plan My Trip")
2. **3-Column Feature** — Honeymoon / Lifestyle / Family (each: icon, short description, link to category)
3. **How It Works** — 3 steps: View Itineraries → Receive Your Quote → Communicate with Michael
4. **Testimonials** — 3 real reviews (see Shared Testimonials above)
5. **Sister Sites** — links to the other two family sites
6. **Footer**

---

## Travel Planning Page Sections

1. **Page headline** — "Plan Your [Country] Holiday"
2. **Service description** — personalised, expert-led, stress-free
3. **Service tiers** — Standard Consultation (US$169) / Premium Consultation (US$399)
4. **Enquiry form fields:**
   - Name, Email, Phone
   - Travel Dates
   - Number of Travellers
   - Holiday Type (dropdown: Lifestyle / Family / Honeymoon / Combined)
   - Message
5. **Michael's expert profile snippet** with link to full profile

---

## SEO Metadata Pattern

Every page needs unique metadata via the Next.js Metadata API:

| Page | Title pattern |
|---|---|
| Home | `[Country] Travel Planning \| Guest [Country]` |
| Itineraries index | `[Country] Travel Itineraries \| Guest [Country]` |
| Individual itinerary | `[Itinerary Title] \| Guest [Country]` |
| Blog index | `[Country] Travel Blog \| Guest [Country]` |
| Travel Planning | `Plan Your [Country] Holiday \| Guest [Country]` |

---

## Build Order (for new sites)

Follow this sequence — it's the same sequence the Guest AU build used:

1. Initialise Next.js project with Tailwind + TypeScript
2. Set up global layout: nav, footer, brand colours in `tailwind.config.ts`
3. Build Home page
4. Build Travel Planning page with enquiry form
5. Build Itineraries parent + 4 category pages + all individual itinerary pages
6. Build Travel Information parent + 2 subpages
7. Build Blog index + individual blog pages
8. Add metadata to all pages
9. Create `README.md` with deploy instructions
10. Confirm `npm run build` passes with no errors (Railway-ready)

---

## Railway Deployment Notes

- Use `railway.json` or Nixpacks auto-detect for Next.js
- Railway injects `PORT` automatically — no config needed
- Each Guest site = its own Railway service (don't share)
- `README.md` must include: project overview, local dev (`npm install` / `npm run dev`), env vars, Railway deploy steps, GoDaddy DNS instructions
