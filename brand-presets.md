# Brand Presets — Guest Website Family

Canonical brand tokens for every Guest-brand site. Use these verbatim in `tailwind.config.ts` and component styling. All values verified against live WordPress sources (see `brand-extraction-recipe.md` for the extraction method).

---

## Guest Australia — `guestaustralia.com`

**Verified:** April 2026 (post-rebuild)

### Colours

| Token | Hex | Usage |
|---|---|---|
| Primary CTA / Button | `#AC521C` | Warm terracotta/rust — all primary CTAs, button fills |
| Secondary Warm Accent | `#C6B29A` | Sandy beige — category CTA panels, soft backgrounds |
| Hero Overlay | `rgba(0,0,0,0.45)` | Dark gradient over photography |
| Background Base | `#FFFFFF` | Page background |
| Background Warm | `#F5F2EE` | Section dividers, subtle warm grey |
| Text Dark | `#343434` | Body copy, headings |
| Border / Input | `#ABB0B2` | Form fields, dividers |

### Typography

- **Body / UI:** Open Sans, Helvetica Neue, Arial, Helvetica (sans-serif)
- **Body size:** 14–16px
- **Headings:** Arial/Helvetica bold (system sans throughout — no serif)
- **Email inputs:** Open Sans 15px

### Iconography
Font Awesome Free v6 (loaded via CDN)

### Style Notes
- Full-width photographic hero with video background (autoplay, loop, muted); static image fallback (Uluru/Ayers Rock)
- Category cards: full-bleed photography + dark gradient overlay (top `rgba(0,0,0,0)` → bottom `rgba(0,0,0,0.45)`)
- CTA panels: solid `#C6B29A` background
- Buttons: `#AC521C` fill, white text, `border-radius: 3px`
- Button hover: darken to `#777` or darker terracotta
- Overall feel: **warm, earthy, photographic-led** — warmth comes from the landscape imagery, not strong brand colour
- Mobile nav: ShiftNav-style slide-out hamburger

### Logo
`https://guestaustralia.com/wp-content/themes/guest-au/images/logo.jpg`
Fetch and save to `/public/images/logo.jpg` during setup.

---

## Guest New Zealand — `guestnewzealand.com`

**Verified:** April 2026 (live CSS extraction — richer palette than AU)

Same theme structure as Guest AU, but NZ uses a fuller token set: sage-family greens + a gold accent + a rust accent (not a single secondary colour like AU).

### Colours

| Token | Hex | Usage |
|---|---|---|
| Primary CTA / Button | `#789653` | Sage green — all primary CTAs, button fills, links |
| Primary Hover | `#587235` | Dark green — button hover state |
| Background Light | `#F5F8EE` | Light sage tint — section backgrounds |
| Background Mid | `#E3E8D7` | Mid sage tint — card backgrounds, subtle dividers |
| Accent Gold | `#D6910F` | Gold — secondary accents, highlights, badges |
| Accent Gold Hover | `#C1820C` | Gold hover |
| Rust Accent | `#B55217` | Tertiary accent — icons, seasonal callouts |
| Body Text | `#555555` | Body copy (lighter than AU's `#343434`) |
| Hero Overlay | `rgba(0,0,0,0.45)` | Dark gradient over photography |
| Background Base | `#FFFFFF` | Page background |
| Border / Input | `#ABB0B2` | Form fields, dividers |

### Typography
Same as AU: Open Sans body, system sans headings.

### Iconography
Font Awesome Free v6.

### Style Notes
Identical to AU — swap terracotta for sage green and sandy beige for olive.
- Hero video: NZ landscape footage (Milford, Lake Tekapo, Queenstown are strong defaults)
- Category photography: NZ-specific (South Island / North Island / Family / Honeymoon)
- Overall feel: **fresh, natural, photographic-led** — greens come from the landscape.

### Logo
`https://guestnewzealand.com/wp-content/themes/guest-nz/images/logo.jpg`
Verify path with the curl-grep recipe before fetching — theme folder name may differ.

---

## Future Sister Site — Blank Preset

Use this template whenever a new Guest-brand site is added to the family.

### Colours

| Token | Hex | Usage |
|---|---|---|
| Primary CTA / Button | `#______` | — |
| Secondary Accent | `#______` | — |
| Hero Overlay | `rgba(0,0,0,0.45)` | Keep consistent across family |
| Background Base | `#FFFFFF` | Keep consistent |
| Background Soft | `#______` | Sibling tone to secondary accent |
| Text Dark | `#343434` | Keep consistent |
| Border / Input | `#ABB0B2` | Keep consistent |

### Typography
Default: Open Sans body + system sans headings (keeps family cohesion).
Only deviate with Michael's approval.

### Extraction Process
1. Run the curl-grep recipe in `brand-extraction-recipe.md` against the live site.
2. Identify the two lead colours (primary CTA + secondary accent).
3. Keep background/text/border tokens consistent with AU and NZ for visual family cohesion.
4. Record the new preset in this file under a new heading.

---

## Brand Consistency Rules Across the Family

These stay the same across all Guest sites — don't invent new values:

- **Hero overlay opacity:** `0.45`
- **Button border-radius:** `3px`
- **Text dark:** `#343434`
- **Form border:** `#ABB0B2`
- **Button hover:** darken primary by ~20%
- **Typography:** Open Sans body, system sans headings
- **Icons:** Font Awesome Free v6

Every Guest site should feel like a sibling. The landscape photography and accent palette are what tell them apart.
