# Claude Code Prompt Template — Guest Website

Use this template for **Mode B (Build from Scratch)**. Replace every `{{PLACEHOLDER}}` token with values from `brand-presets.md` and the site inputs confirmed with Michael. Save the filled prompt as a `.md` file Michael can paste straight into Claude Code.

---

## Placeholder tokens

| Token | Example (Guest NZ) |
|---|---|
| `{{SITE_NAME}}` | Guest New Zealand |
| `{{DOMAIN}}` | guestnewzealand.com |
| `{{COUNTRY}}` | New Zealand |
| `{{COUNTRY_SLUG}}` | new-zealand |
| `{{PRIMARY_COLOUR}}` | #789653 |
| `{{PRIMARY_COLOUR_NAME}}` | sage green |
| `{{SECONDARY_COLOUR}}` | #A3B18A |
| `{{SECONDARY_COLOUR_NAME}}` | olive green |
| `{{SOFT_BG}}` | #F4F5F0 |
| `{{HERO_IMAGE_DESCRIPTION}}` | Milford Sound / Lake Tekapo / NZ landscape |
| `{{LOGO_URL}}` | https://guestnewzealand.com/wp-content/themes/guest-nz/images/logo.jpg |
| `{{SISTER_SITE_1}}` | guestaustralia.com |
| `{{SISTER_SITE_2}}` | virtualjourneys.co.nz |
| `{{FOURTH_ITINERARY_CATEGORY}}` | New Zealand & Australia |
| `{{FOURTH_CATEGORY_SLUG}}` | new-zealand-and-australia |
| `{{PLACES_SUBPAGE_SLUG}}` | places-in-new-zealand |
| `{{CONTACT_EMAIL}}` | vrjourneysnz@gmail.com (or "deferred") |

---

## The Prompt (copy everything below the line)

---

```
You are building a complete Next.js website for {{SITE_NAME}} ({{DOMAIN}}),
a professional {{COUNTRY}} travel planning and itinerary service run by Michael Nees,
a local expert based in New Zealand with 30+ years experience in NZ and Australian tourism.

This new Next.js site will fully replace the existing WordPress site at {{DOMAIN}}.
Deploy target is Railway (same setup as the Virtual Journeys travel app and the
existing Guest Australia Next.js build). Domain is {{DOMAIN}} managed via GoDaddy DNS.

---

## TECH STACK

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Language: TypeScript
- Deployment: Railway
- Repo: connect to existing GitHub account
- Images: Next.js Image component with optimisation
- Forms: React Hook Form (email config {{CONTACT_EMAIL}} — placeholder handler if deferred)
- SEO: Next.js Metadata API (title, description, OG tags per page)

---

## BRAND & DESIGN

Colours (extracted from existing {{DOMAIN}} theme):
- Primary CTA / Button: {{PRIMARY_COLOUR}} ({{PRIMARY_COLOUR_NAME}})
- Secondary Accent: {{SECONDARY_COLOUR}} ({{SECONDARY_COLOUR_NAME}}) — used on category CTA panels
- Dark overlay on hero/image cards: rgba(0,0,0,0.45) gradient over photography
- Background: #FFFFFF (white) with soft sections at {{SOFT_BG}}
- Text dark: #343434
- Input/form borders: #ABB0B2

Typography:
- Body / UI: Open Sans, Helvetica Neue, Arial, Helvetica (sans-serif)
- Body size: 14–16px
- Headings: Arial/Helvetica bold (system sans throughout — no serif)
- Email input font: Open Sans 15px

Icons: Font Awesome Free v6 (loaded via CDN)

Style notes (must match the established Guest brand family):
- Full-width photographic hero with video background (autoplay, loop, muted)
  fallback to static image ({{HERO_IMAGE_DESCRIPTION}})
- Category feature cards use full-bleed photography with dark gradient overlay
  (rgba 0,0,0,0 top → 0.45 bottom) and white text over image
- CTA panels use the secondary accent ({{SECONDARY_COLOUR}}) as solid background
- Buttons: primary ({{PRIMARY_COLOUR}}) with white text, border-radius: 3px
- Button hover: darken primary by ~20%
- Overall feel: warm, photographic-led — landscape imagery does the heavy lifting,
  not the brand colour
- Mobile nav: ShiftNav-style slide-out hamburger

Logo: Fetch from {{LOGO_URL}} and save to /public/images/logo.jpg during build setup.

---

## SITE STRUCTURE & PAGES

Build the following pages using Next.js App Router file structure:

### 1. HOME PAGE — /
- Hero section with full-width background image (placeholder OK), headline:
  "{{COUNTRY}} Travel Planning — Get Your Trip of a Lifetime", subheadline:
  "Authentic, personalised journeys planned with a local expert"
- CTA buttons: "View Itineraries" → /itineraries | "Plan My Trip" → /travel-planning
- 3-column feature section: Honeymoon {{COUNTRY}} / Lifestyle Holidays / Family Holidays
  (each with icon, short description, link to category)
- "How It Works" section — 3 steps: View Itineraries → Receive Your Quote →
  Communicate with Michael
- Testimonials section — include these 3 real reviews:
  1. "Michael truly is the best! Planned an amazing 20 day trip to Australia and
     New Zealand... A truly seamless perfect family holiday" — Audrey Mothupi & Family
  2. "It was the trip of a lifetime! Sydney, Blue Mountains, Port Douglas/Great Barrier
     Reef, Uluru, and Melbourne all in 10 days" — Lisa Mansour & Family
  3. "Each and every accommodation was off the hook fabulous... I highly recommend
     Michael as a travel designer" — Mindy Ross, Lifestyle Traveller
- Sister sites section: links to {{SISTER_SITE_1}} and {{SISTER_SITE_2}}

### 2. TRAVEL PLANNING PAGE — /travel-planning
- Page headline: "Plan Your {{COUNTRY}} Holiday"
- Description of the planning service (personalised, expert-led, stress-free)
- Services overview: Standard Consultation (US$169) / Premium Consultation (US$399)
- Contact/Enquiry form with fields: Name, Email, Phone, Travel Dates,
  Number of Travellers, Holiday Type (dropdown: Lifestyle/Family/Honeymoon/Combined),
  Message. Form submits to placeholder handler — email integration {{CONTACT_EMAIL}}.
- Michael's expert profile snippet with link to full profile

### 3. ITINERARIES — /itineraries
Parent page with intro text and 4 category cards linking to subcategories.

#### 3a. Lifestyle Holidays — /itineraries/lifestyle
Category page listing itineraries as cards. Each itinerary = individual page at
/itineraries/lifestyle/[slug]. Use placeholder content: title, duration badge,
intro paragraph, day-by-day itinerary section (Day 1, Day 2… with placeholder text),
highlights list, CTA → /travel-planning

#### 3b. Family Holidays — /itineraries/family
Same structure as Lifestyle.

#### 3c. Honeymoon Packages — /itineraries/honeymoon
Same structure.

#### 3d. {{FOURTH_ITINERARY_CATEGORY}} — /itineraries/{{FOURTH_CATEGORY_SLUG}}
Same structure.

### 4. TRAVEL INFORMATION — /travel-information
Parent page with intro + 2 category cards.

#### 4a. Travel Tips — /travel-information/travel-tips
Page with practical travel tips placeholder content.

#### 4b. Places in {{COUNTRY}} — /travel-information/{{PLACES_SUBPAGE_SLUG}}
Page listing key places/regions with placeholder content.

### 5. TRAVEL BLOGS — /travel-blogs
Blog index listing 3 placeholder blog posts. Each post = individual page at
/travel-blogs/[slug] with title, featured image placeholder, intro, body, CTA.

---

## NAV & FOOTER

Nav (top of every page):
- Home
- Travel Planning
- Itineraries (dropdown with 4 category links)
- Travel Information (dropdown with 2 subpage links)
- Travel Blogs
- Mobile: hamburger menu with slide-out panel

Footer (bottom of every page):
- Copyright: © {{SITE_NAME}} — All rights reserved.
- Sister site links: {{SISTER_SITE_1}} | {{SISTER_SITE_2}}
- Contact info: michael@{{DOMAIN}}
- Newsletter signup placeholder (Mailchimp embed to be added later)

---

## SEO

Each page must have unique metadata using Next.js Metadata API:
- Home: "{{COUNTRY}} Travel Planning | {{SITE_NAME}}"
- Itineraries index: "{{COUNTRY}} Travel Itineraries | {{SITE_NAME}}"
- Each itinerary page: "[Itinerary Title] | {{SITE_NAME}}"
- Blog: "{{COUNTRY}} Travel Blog | {{SITE_NAME}}"
- Travel Planning: "Plan Your {{COUNTRY}} Holiday | {{SITE_NAME}}"

---

## RAILWAY DEPLOYMENT

- Create railway.json or use Nixpacks auto-detect for Next.js
- Add a README.md with: project overview, local dev instructions
  (npm install / npm run dev), environment variables needed,
  Railway deploy steps, GoDaddy DNS instructions (point A record or
  CNAME to Railway domain)
- PORT environment variable: Railway injects this automatically for Next.js

---

## BUILD ORDER

Please build in this order:
1. Initialise Next.js project with Tailwind CSS and TypeScript
2. Set up global layout: nav, footer, brand colours in tailwind.config
3. Build Home page
4. Build Travel Planning page with contact form
5. Build Itineraries parent + all 4 category pages + individual itinerary pages
6. Build Travel Information parent + 2 subpages
7. Build Blog index + individual blog pages
8. Add metadata to all pages
9. Create README.md with deploy instructions
10. Confirm Railway-ready build (npm run build passes with no errors)

Start with Step 1 and work through each step sequentially.
Confirm completion of each step before moving to the next.
```

---

## After Generation — Next Steps to tell Michael

| # | Step | Status |
|---|---|---|
| 1 | Paste prompt into Claude Code | Ready |
| 2 | Let it run all 10 steps sequentially | Claude Code will confirm each |
| 3 | When Railway preview URL is live, come back for GoDaddy DNS changeover | Deferred |
| 4 | Upload logo + hero imagery to `/public/images/` | After structure built |
| 5 | Replace itinerary + blog placeholder content | Manual |
| 6 | Wire contact form handler (Gmail or form service) | Deferred |
| 7 | Update sister sites to link back to new site once live | Post-launch |
