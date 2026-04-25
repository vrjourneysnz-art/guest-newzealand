# Brand Extraction Recipe — Live WordPress Guest Sites

The reliable method for pulling colours, fonts, and styling details from any live Guest WordPress site. Use this to:

- **Verify** that a preset in `brand-presets.md` still matches reality before starting a rebuild
- **Onboard** a new Guest-brand site and add its preset to the family
- **Resolve** any "which colour is correct?" questions

---

## Why curl-grep, not web_fetch

Direct HTML/markdown extraction via `web_fetch` returns limited CSS detail — the tokens we need (hex values, rgba overlays, font stacks) live in inline styles and embedded CSS that get stripped during markdown conversion. A `curl | grep` against the live homepage surfaces them reliably.

Fetching the WordPress theme stylesheet directly (`/wp-content/themes/[theme]/style.css`) usually returns nothing usable for these sites — the homepage is the better target.

---

## The recipe

Run this in bash:

```bash
curl -s "https://[DOMAIN]/" | grep -E "(color|background|font|#[0-9a-fA-F]{3,6}|rgba|rgb\(|font-family|stylesheet)" | head -80
```

Replace `[DOMAIN]` with the target site (no trailing slash after `https://`).

### Examples

```bash
# Guest Australia
curl -s "https://guestaustralia.com/" | grep -E "(color|background|font|#[0-9a-fA-F]{3,6}|rgba|rgb\(|font-family|stylesheet)" | head -80

# Guest New Zealand
curl -s "https://guestnewzealand.com/" | grep -E "(color|background|font|#[0-9a-fA-F]{3,6}|rgba|rgb\(|font-family|stylesheet)" | head -80
```

---

## What to extract from the output

Scan the grep results for these signals, in this order:

| Target | Look for |
|---|---|
| **Primary CTA colour** | Hex in `background-color` or `background:` on button/CTA element classes (common class names: `.btn`, `.cta`, `.wpcf7-submit`, `button`) |
| **Secondary accent** | Hex in `background-color` on section/panel classes (e.g., `.cta-panel`, `.feature-section`) |
| **Overlay values** | `rgba(0,0,0,0.XX)` — used on hero/image card overlays |
| **Body font** | `font-family:` declaration on `body`, `html`, or `.site-content` |
| **Heading font** | `font-family:` on `h1`–`h6` or heading-specific classes |
| **Text colour** | `color:` on `body` or main text classes |
| **Input border colour** | `border-color:` on `input`, `.wpcf7-form-control`, or similar |
| **Logo URL** | `<img>` tag in nav area, usually under `/wp-content/themes/[theme]/images/logo.*` |

---

## Recording a new preset

After extraction, add the new site to `brand-presets.md` using this structure:

```markdown
## [Site Name] — `[domain]`

**Verified:** [Month Year]

### Colours

| Token | Hex | Usage |
|---|---|---|
| Primary CTA / Button | `#______` | — |
| Secondary Accent | `#______` | — |
| Hero Overlay | `rgba(0,0,0,0.45)` | Standard |
| Background Base | `#FFFFFF` | Standard |
| Background Soft | `#______` | Section dividers |
| Text Dark | `#343434` | Standard |
| Border / Input | `#ABB0B2` | Standard |

### Typography
[Note any deviations from Open Sans body / system sans headings]

### Logo
`https://[domain]/wp-content/themes/[theme-folder]/images/logo.[ext]`
```

Keep the "Hero Overlay", "Background Base", "Text Dark", and "Border / Input" tokens consistent with the family unless Michael explicitly wants a deviation — this keeps the three sites feeling like siblings.

---

## Troubleshooting

**grep returns nothing or very little:**
- The site may be behind Cloudflare or have aggressive caching. Try adding a user-agent:
  ```bash
  curl -s -A "Mozilla/5.0" "https://[domain]/" | grep -E "(color|background|font|#[0-9a-fA-F]{3,6}|rgba|rgb\()" | head -80
  ```

**Hex values look wrong (too many, or all the same):**
- Third-party embeds (Mailchimp, Font Awesome, social widgets) can flood the output. Narrow the grep to specific CSS properties:
  ```bash
  curl -s "https://[domain]/" | grep -oE "background-color: *#[0-9a-fA-F]{3,6}" | sort -u
  ```

**Can't find the logo path:**
- The logo may be a custom uploaded file, not a theme file. Look for `wp-content/uploads/` paths instead:
  ```bash
  curl -s "https://[domain]/" | grep -oE "wp-content/uploads/[^\"']+\\.(jpg|png|svg|webp)" | head -5
  ```

---

## When NOT to use this recipe

- **Non-WordPress sites.** The theme-folder conventions won't apply.
- **Already-rebuilt Next.js Guest sites.** Once a Guest site is on the Next.js stack, source-of-truth colours live in `tailwind.config.ts` — read that file directly, don't curl the rendered output.
- **When the preset in `brand-presets.md` is dated within the last 30 days and the site hasn't been rebuilt.** Trust the preset.
