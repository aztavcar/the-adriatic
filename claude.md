# The Adriatic

A magazine-style static website covering politics, business, and culture from the Western Balkans and beyond. "A slower take on a fast world."

## Tech Stack

- **Jekyll 4.3** - Static site generator
- **SCSS** - Styling with custom component architecture
- **DigitalOcean App Platform** - Production hosting (planned)
- **GitHub Pages** - Development/staging hosting
- **Cloudinary** - Image hosting
- **Cloudflare Workers** - Likes API (`adriatic-likes.aztavcar.workers.dev`)
- **Upstash Redis** - Like count storage (Frankfurt, free tier)

## Project Structure

```
_posts/          # Articles (Markdown + YAML frontmatter)
_layouts/        # Page templates
  default.html   # Master template with nav, footer, scripts
  post.html      # Standard article layout
  opinion.html   # Opinion/editorial layout
_includes/       # Reusable components
  clock.html
  cookie-banner.html
  glass-cursor.html
_data/
  authors.yml    # Author bios (keyed by name)
references/
  skills/        # Design system references (agentation-design.md)
api/             # Likes API (Cloudflare Worker)
  likes-worker.js  # Worker source
  wrangler.toml    # Worker config
  README.md        # Setup instructions
_sass/           # Stylesheets
  _variables.scss
  _fonts.scss
  _responsive.scss
  _base.scss
  _main-content.scss
  components/
    _header.scss
    _sidebar.scss
    _footer.scss
    _article-card.scss
    _horizontal-card.scss
    _featured.scss
    _feature-hero.scss
    _clock.scss
    _search.scss
  pages/
    _post.scss
    _archive.scss
    _about.scss
    _mag.scss
    _newsletter.scss
    _legal.scss
assets/
  css/           # Compiled CSS
  js/
    external-links.js
  fonts/         # Custom typefaces (woff2 only: Adriatic Journal, Adriatic22)

# Root pages
index.html       # Homepage
about.html       # About page
archive.html     # Article archive
mag.html         # Magazine page
newsletter.html  # Newsletter signup
privacy.html     # Privacy policy
terms.html       # Terms of use
404.html         # Error page

# Internal pages (built but not linked, noindex/nofollow, sitemap: false)
navbar-redesign.html       # Navbar design sandbox
performance-report.html    # Performance optimization changelog (Feb 2026)
```

## Key Files

- `_config.yml` - Jekyll configuration
- `_sass/_responsive.scss` - All responsive breakpoints
- `_sass/_variables.scss` - CSS custom properties, colors, typography
- `_layouts/default.html` - Master template with nav, footer, scripts
- `_includes/glass-cursor.html` - Frosted glass cursor effect (CSS + JS self-contained)
- `_data/authors.yml` - Author bio lookup
- `references/skills/agentation-design.md` - Design system reference
- `references/skills/responsiveness.md` - Responsive design reference

## Responsive Breakpoints

- **Desktop**: Full layout
- **Tablet (≤1024px)**: 2-column grid
- **Mobile (≤768px)**: Single column, fixed header, hamburger menu
- **Extra-small (≤480px)**: Further optimizations

### Responsive Patterns (established conventions)

**Fluid typography:** Use `clamp(min, preferred, max)` instead of discrete media query overrides. Eliminates breakpoint jumps. Example: `.post-title { font-size: clamp(2rem, 3.5vw + 0.5rem, 4rem); }` — no 768px override needed.

**Fluid spacing:** Main container uses `padding: 0 clamp(1rem, 0.5rem + 2.5vw, 2rem)` — scales smoothly between mobile and desktop with no media query.

**Hover guards:** ALL hover effects are wrapped in `@media (hover: hover)` to prevent sticky hover on touch devices. This is applied site-wide. When adding new hover states, always use this pattern:
```scss
@media (hover: hover) {
  &:hover { ... }
}
```

**Viewport height:** Use `dvh` with `vh` fallback (two declarations, `dvh` second) for any viewport-dependent height on mobile. Example: `grid-template-rows: 70vh; grid-template-rows: 70dvh;`

**iOS input zoom:** Any `<input>` on mobile must have `font-size: 1rem` (16px) minimum to prevent Safari auto-zoom on focus.

**iOS scroll lock:** Mobile menu uses `position: fixed` + `top: -scrollY` technique instead of `overflow: hidden` on body. The `lockScroll()`/`unlockScroll()` helpers are in `default.html`.

**Navbar height variable:** `--navbar-height: 56px` in `:root`, overridden to `48px` at ≤768px. Used by `.mobile-menu { top: var(--navbar-height) }`. Update this variable if navbar padding changes.

**Line-height:** Use unitless values (e.g., `1.5`) not absolute rem values. Absolute values create wrong ratios when font-size changes across breakpoints.

## Design Tokens

### Colors
- Background: `#fdfdfc`
- Text: `#1a1a1a`
- Accent (red): `#bd2d2d`
- Border: `#d4cfc7`

### Layout
- Navbar height: `--navbar-height: 56px` (desktop), `48px` (mobile ≤768px)

### Typography
- Masthead: `Adriatic Journal`
- Body/Display: `Adriatic22`
- Sans-serif: `Inter`
- Monospace: `'SF Mono', 'Menlo', 'Monaco', 'Consolas', monospace` — used for utility labels, copy buttons, glass cursor text. 0.6875rem (11px) inline, 0.8125rem (13px) standalone.

## Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch via GitHub Actions.

## Known Issues & Fixes

### Sidebar overflow on tablet/mobile
**Problem:** The sidebar has `width: fit-content` by default, which can cause child elements with `flex: 1` or percentage widths to overflow the viewport.

**Fix:** At responsive breakpoints, add explicit width constraints:
```scss
.sidebar {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
```
This ensures the sidebar respects its padding and stays within viewport bounds.

### Mobile Menu (Hamburger)

**Architecture:**
- Hamburger button in `.nav-right` (after subscribe button), hidden on desktop via `display: none`
- At 768px breakpoint: `.nav-links` hidden, `.hamburger-btn` shown via `display: flex`
- `.mobile-menu` overlay is a sibling of `.sidebar`, uses `is-open` class to display
- Menu opens **below the navbar** (`top: var(--navbar-height)`, `z-index: 999` vs navbar's `1000`)
- When menu opens: `.sidebar` gets `menu-open` class, which swaps hamburger icon → X icon

**Key selectors:**
- `.hamburger-btn` - contains both `.hamburger-icon` and `.close-icon` SVGs
- `.sidebar.menu-open .hamburger-btn` - swaps icon visibility
- `.mobile-menu.is-open` - shows the overlay (`display: flex`)

**Navbar stays visible when menu is open:**
- Home icon, subscribe button, and hamburger/X button remain in fixed navbar
- About, Archive, Mag links shown centered (`font-size: 2rem`)
- "THE ADRIATIC" logo below nav links (`font-size: 2.5rem`, `bottom: 5rem`)
- Social icons at bottom of overlay (`bottom: 2rem`)

**JS toggle logic:**
- `openMenu()` / `closeMenu()` / `forceCloseMenu()` — sequential Web Animations API with Promise chains
- `openMenu()`: bg fade → links spring in (staggered) → footer springs in
- `closeMenu()`: footer out → links out (staggered) → bg out → cleanup
- `forceCloseMenu()`: cancels all running animations, snaps to closed state
- Prevents body scroll via `lockScroll()` / `unlockScroll()` (position: fixed technique for iOS)
- Closes on Escape key or clicking a nav link

### Mobile Masthead

**Desktop:** Single-line title using `{{ site.title }}` with `.adriatic-title-desktop`

**Mobile (≤768px):** Stacked "THE ADRIATIC" logo using `.adriatic-title-mobile`:
- Uses flexbox column layout
- Font size: `clamp(3.5rem, 14vw, 5.5rem)` at 768px, `clamp(2.5rem, 12vw, 4rem)` at 480px
- Styled like footer logo (masthead font, accent color)

### Homepage Article Sections

**Structure:** All secondary articles live in one unified `.secondary-articles` section:
- Posts 2-5: `.horizontal-card` (horizontal layout on desktop)
- Posts 6-8: `.horizontal-card.grid-card` inside `.secondary-grid` (3-column grid on desktop)

**Desktop:**
- Horizontal cards: image | title/author | date (3-column grid layout)
- Images align with left edge of container (no `margin-left`)
- Grid cards: 3-column grid with vertical card layout (date → image → title/author)
- Vertical dividers between grid cards

**Mobile (≤768px):** Everything becomes one continuous stacked list:
- All cards use identical layout: date → title/author → image (single column)
- Grid cards get explicit `order` properties to match horizontal cards
- Images: `aspect-ratio: 16/9`, `max-height: 200px` (180px at 480px)
- Border separators between all cards (no bottom border on last card)
- `.secondary-grid` flattens to `display: block`

### Newsletter Page

**SEO:** Title and description in frontmatter for `jekyll-seo-tag`:
```yaml
title: The Adriatic Newsletter
description: A biweekly newsletter with essays, analysis, and the occasional recommendation. A slower take on a fast world.
```

**Mobile fix:** iPhone mockup has large `box-shadow` that extends below the element. Extra bottom padding added to `.newsletter-container`:
- 768px: `padding-bottom: 5rem`
- 480px: `padding-bottom: 4.5rem`

### Copy Button Crossfade Pattern

A unified interaction pattern used across 5 locations: article pages (`post.html`, `opinion.html`), footer share button (mobile), about page "Send us a pitch" button, and glass cursor (desktop newsletter footer).

**Structure:** Single SVG with two `<g>` groups sharing the same space:
```html
<svg ...>
  <g class="icon-copy"><!-- clipboard icon --></g>
  <g class="icon-check"><!-- checkmark icon --></g>
</svg>
```

**CSS:** `.icon-copy` starts at `opacity: 1; transform: scale(1)`, `.icon-check` at `opacity: 0; transform: scale(0.8)`. Both transition `opacity 0.2s ease, transform 0.2s ease`. When parent gets `.copied` class, values swap.

**JS:** Click adds `.copied` class via `classList.add('copied')`, `setTimeout` removes it after 2000ms (article pages) or 5000ms (footer/about). No text swap — label stays static. Uses `navigator.clipboard.writeText()` with `document.execCommand('copy')` fallback.

**Copied state colors:** Green `#16a34a` for solid elements (border, text). Glass cursor uses `rgba(22,163,74,0.15)` background + `rgba(22,163,74,0.4)` border. About page button turns green background.

For text labels, dual overlapping spans (`.label-default` in flow, `.label-copied` absolutely positioned) crossfade via opacity. Used in footer copy button and about page button.

### Glass Cursor (Dual-Mode)

The glass cursor (`_includes/glass-cursor.html`) is a 120px frosted circle that follows the mouse on desktop. Disabled on touch devices.

**Two modes:**
- **Default:** Shows monospace text "Read all about it here" (`.glass-cursor-default`)
- **Copy mode:** Shows "Copy link" label + clipboard SVG (`.glass-cursor-copy`), triggered when hovering a `[data-copy-url]` element

Mode switching via `.copy-mode` class on `#glass-cursor`. `hideCursor()` removes both `is-visible` and `copy-mode`.

**Copied state:** `.copied` class turns circle green (background, border, box-shadow transitions). Icon crossfades from clipboard to checkmark. Resets after 5000ms.

### Subscribe Button Arrow Animation

The subscribe button in `.nav-right` uses a double-chevron SVG inside a pill container with a looping slide-through animation on hover.

**Structure:**
```
.subscribe-arrow (16×16 pill, border-radius: 50px, 1px solid rgba(255,255,255,0.24))
  └─ .arrow-mask (7×14px, overflow: hidden)
       └─ .arrow-clip (7×10px, overflow: hidden)
            └─ svg (double-chevron, 14×14 rendered from 24×24 viewBox)
```

**Animation:** `@keyframes slideOut` at `0.8s linear infinite`:
- 0→45%: slides right, fades out (`translate(100%)`)
- 45→46%: teleports left (`translate(-100%)`) while invisible
- 46→100%: slides back to center, fades in

The nested `overflow: hidden` containers clip the arrow during the teleport so it looks like a continuous conveyor belt. Only plays on `:hover` (guarded with `@media (hover: hover)`).

### Homepage Hover States

Article cards use **accent-red title color shift** on hover (not opacity dimming), all wrapped in `@media (hover: hover)`:
- `.feature-hero-container:hover .feature-headline` → `color: var(--adriatic-accent)`
- `.featured-hero-container:hover .featured-headline` → `color: var(--adriatic-accent)`
- `.horizontal-card:hover .horizontal-card-title` → `color: var(--adriatic-accent)`

All headlines use `font-weight: 400` (not 600) with `transition: color 0.15s`. All hover effects site-wide use `@media (hover: hover)` guards to prevent sticky hover on touch devices.

### About Page — Write for Us CTA

The about page has a `.contribute-cta` card with agentation-style design:
- Subtle border: `1px solid rgba(0,0,0,0.06)` + layered box-shadow
- "Send us a pitch" button (`.contribute-btn`): dark bg `#111`, white text, copies `info@isr.si` to clipboard on click
- Uses the copy button crossfade pattern (turns green on `.copied`)
- `.contribute-note` alongside button with muted text

### Author Bios

`_data/authors.yml` maps author names to bio strings. Used in `post.html` and `opinion.html` layouts to show author bios below articles. Keyed by exact author name matching the `author` frontmatter field.

### Legal Pages

**Pages:** `privacy.html` and `terms.html` — GDPR-compliant privacy policy and terms of use.

**Styling:** `_sass/pages/_legal.scss` — agentation-inspired design with:
- Max-width: 576px centered container
- Fluid padding: `clamp(1rem, 0.5rem + 2.5vw, 2rem)`
- H1: Adriatic Display, `clamp(2.5rem, 5vw, 3.5rem)`, weight 400
- H2: Adriatic Display, 1.5rem, weight 400, left-aligned
- Body: Inter, 0.875rem, weight 400, line-height 1.5
- Colors: opacity-based (`rgba(0,0,0,0.85)` headings, `rgba(0,0,0,0.8)` body, `rgba(0,0,0,0.4)` date)
- Links: `var(--adriatic-accent)` with 0.15s opacity transition on hover

**Organization name:** Always use "Institute for Strategic Solutions (ISR)" — the abbreviation is how the organization is known.

**Copyright footer:** `_layouts/default.html` includes `<div class="footer-bottom">` with centered copyright notice "© 2026 The Adriatic" and "Made with care in Ljubljana." Both use order properties to control stacking.

### Related Articles Hover

Related articles at the end of posts use a **push-right animation** on hover (not fade):
- Links have `display: inline-block` and `transform: translateX(0)` default state
- Hover: `transform: translateX(4px)` with `transition: transform 0.15s ease`
- Creates a subtle "pushed" effect while maintaining red accent color
- Wrapped in `@media (hover: hover)` guard

### Like Button

Article pages (`post.html`, `opinion.html`) have a like button next to the copy button in `.post-meta-actions`.

**Design:** Pill + pulse pop — soft bordered capsule (`border-radius: 100px`, `0.5px inset ring`) that tints red when liked, with heart scale bounce animation (135% → settle). Uses site accent red `#bd2d2d`.

**Two modes:**
- **Without API** (`LIKES_API = ''`): localStorage only. Likes persist per-browser but aren't shared.
- **With API** (`LIKES_API = 'https://adriatic-likes.aztavcar.workers.dev'`): Shared counts via Upstash Redis + Cloudflare Worker.

**Unlimited likes:** Each click = +1. No cap per user (intentional — allows manual inflation).

**Architecture:**
- `api/likes-worker.js` — Cloudflare Worker with GET/POST endpoints
- `api/wrangler.toml` — Worker config, CORS origins
- Upstash Redis stores `likes:total:{slug}` and `likes:user:{hash}:{slug}`
- IP-based user identification via SHA-256 hash (no login required)
- Optimistic UI updates with localStorage cache
- `LIKES_API` variable in both layouts — single URL change to activate/migrate
- Worker strips trailing slashes from `UPSTASH_REDIS_REST_URL` before building endpoints

**Copy button animation:** Flash-peak (bright green flash, scale 0.92) → spring back (overshoot to 1.06, settle). Haptic via `navigator.vibrate(10)` on Android.

### Design References

- `references/skills/agentation-design.md` — agentation.dev design philosophy: opacity-based colors, weight/opacity hierarchy, monospace rules, transition curves, shadow patterns, copy button crossfade. Consulted when generating or auditing CSS.
- `references/skills/responsiveness.md` — responsive design spec: fluid typography/spacing formulas, breakpoint conventions, touch targets, hover guards, viewport units, image patterns, navigation behavior, performance. Consulted when adding or auditing responsive styles.

## Article Frontmatter

```yaml
layout: post           # or opinion
title: "Article Title"
date: 2026-01-25
author: "Author Name"  # must match key in _data/authors.yml for bio
category: Politics
kicker: "Optional section name"
description: "SEO/social description"
image: https://cloudinary.url
image_caption: "Caption"
image_credit: "Photographer"
```

## SEO

- Uses `jekyll-seo-tag` plugin for meta tags
- Default og:image set in `_config.yml` via Cloudinary
- Twitter card: `summary_large_image`
- `fb:app_id` not configured (optional, but Facebook debugger flags it)

### Cloudinary Image Conventions

All Cloudinary image URLs **must** include `f_auto,q_auto` transforms. These go between `upload/` and the version string:

```
https://res.cloudinary.com/dvyhebi2q/image/upload/f_auto,q_auto,w_800/v123456/the-adriatic/...
```

- `f_auto` — auto-serves WebP/AVIF based on browser support
- `q_auto` — auto-compresses without visible quality loss
- `w_XXX` — width constraint (prevents oversized downloads)

**Width guidelines:**
- Cookie banner mascot: `w_240` (120px display, 2× retina)
- Footer stamps: `w_400`
- Article hero images: `w_1200` (default), with `srcset` variants at `w_400`, `w_800`, `w_1200`
- og:image / social sharing: `w_1200`
- 404 illustration: `w_600`

**Responsive `srcset` pattern** for article images:
```html
<img
  src="https://res.cloudinary.com/.../f_auto,q_auto,w_800/v123/image.jpg"
  srcset="
    https://res.cloudinary.com/.../f_auto,q_auto,w_400/v123/image.jpg 400w,
    https://res.cloudinary.com/.../f_auto,q_auto,w_800/v123/image.jpg 800w,
    https://res.cloudinary.com/.../f_auto,q_auto,w_1200/v123/image.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 800px"
  alt="..." loading="lazy">
```

Use `loading="eager"` for above-the-fold hero images, `loading="lazy"` for everything else.

### Windows/Cross-Platform Compatibility

**Problem:** Header masthead (`.adriatic-title`) overlaps with `.header-meta` on Windows due to ClearType font rendering differences. Windows calculates font bounding boxes differently than macOS.

**Fixes applied:**
1. Changed `line-height: 0.75` → `line-height: 1` on `.adriatic-title` with `margin-bottom: -0.15em` to compensate
2. Updated font stacks to include Windows fallbacks: `system-ui`, `Segoe UI`, `Roboto`
3. Bumped tight line-heights site-wide (0.75 → 0.85, 0.9 → 1)
4. Replaced `100vw` with `transform: translateX(-50%)` for full-width images (Windows shows scrollbars)

**Status:** Partially fixed. May need further testing on Windows.

**Testing:** Use BrowserStack (browserstack.com) to test on real Windows VMs from Mac.

**Potential remaining issues:**
- Custom font metrics (Adriatic Journal, Adriatic22) may render with different ascender/descender values on Windows
- Font hinting differences between platforms
- Consider adding `text-rendering: optimizeLegibility` or `-webkit-font-smoothing` for consistency

**Suspected root cause:** The custom fonts (Adriatic Journal, Adriatic22) may not be properly optimized for Windows. These fonts were likely designed/tested on Mac and may have:
- Missing or incomplete TrueType hinting instructions (Windows relies heavily on hinting, Mac ignores it)
- Different vertical metrics (ascender/descender/line-gap values) that Windows interprets more strictly
- No ClearType-optimized rendering hints

**Possible solutions if issue persists:**
1. Re-export fonts with proper TrueType hinting using FontForge or Glyphs
2. Use a font service (Google Fonts, Adobe Fonts) that handles cross-platform optimization
3. Add platform-specific CSS adjustments using `@supports` or user-agent detection
4. Increase spacing/margins as a fallback for Windows users

## Security

### Content-Security-Policy
CSP meta tag in `default.html` restricts script/style/font/image/connect sources to known domains. Uses `'unsafe-inline'` for scripts (10+ inline blocks; nonce-based CSP would require major refactoring). When migrating to App Platform, move CSP to HTTP header and add `frame-ancestors 'self'`.

### Build Exclusions
`_config.yml` excludes from `_site/`: `CLAUDE.md`, `claude.md`, `README.md`, `docs/`, `references/`, `api/`. Source maps disabled (`sourcemap: never`). Internal pages (navbar-redesign, performance-report) are built but use `noindex`/`nofollow` + `sitemap: false` to stay hidden.

### XSS Prevention
- `archive.html` search suggestions escape post titles/URLs via `escapeHTML()` before DOM injection
- `mag.html` carousel uses `textContent` instead of `innerHTML`
- `external-links.js` figcaption processor uses `createElement`/`textContent` instead of `innerHTML`
- `glass-cursor.html` uses `innerHTML` for `data-glass-cursor` attributes (accepted risk — developer-controlled)

### Likes API CORS
`api/wrangler.toml` sets `ALLOWED_ORIGIN` to `https://the-adriatic.github.io,http://127.0.0.1:4000`. Update when domain changes.

## TODO

- [ ] **Inline content components** — Design SCSS components for breaking up long articles without photos:
  - Pull quotes (large styled excerpts with subtle left border)
  - Stat/data callout boxes (monospace numbers, subtle borders)
  - Timelines (vertical line with date markers for historical/political pieces)
  - Definition boxes ("What is X?" sidebars with subtle background)
  - "At a glance" summary boxes (key points in list form)
  - Comparison tables (simple grid with agentation styling)
  - All should follow agentation design: opacity-based colors, subtle borders (`rgba(0,0,0,0.06)`), compact spacing, clean typography
- [ ] `mag.html`: Add "Advertise with us" section (reader demographics, advertiser value prop)
- [ ] `events.html`: Create events page?
- [ ] Test Windows rendering on BrowserStack and verify header fix
- [ ] Convert masthead title to SVG for consistent cross-platform rendering
- [ ] Add rate limiting to likes API (Cloudflare dashboard or Worker-level)
- [ ] Move CSP to HTTP header when migrating to DigitalOcean App Platform
- [ ] Self-host Google Fonts for SRI + performance (already have some woff2 files)
