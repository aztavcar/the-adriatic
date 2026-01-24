# The Adriatic: Brand & Typography Guide

## About The Adriatic

**The Adriatic** is a publication covering politics, business, and culture across the Adriatic region, with a particular focus on the Western Balkans. The publication delivers thoughtful analysis and cultural commentary from a region often overlooked by international media.

### Editorial Mission

The Adriatic provides in-depth coverage of:
- **Politics**: Geopolitical analysis, governance, and regional dynamics
- **Business**: Economic developments, startups, and industry trends
- **Culture**: Arts, society, and cultural movements

### Brand Voice

"A slower take on a fast world." The Adriatic emphasizes long-form, considered journalism that prioritizes depth over speed. Essays, weekenders, and dispatches arrive in subscribers' inboxes every other Saturday.

### Geographic Focus

The publication centers on the Adriatic region, particularly:
- Slovenia
- Croatia
- Bosnia and Herzegovina
- Montenegro
- Albania
- Serbia
- The broader Western Balkans

---

## Design Philosophy

The design system emphasizes:
- **Editorial sophistication** through careful typography
- **Reading comfort** with generous spacing and optimal line lengths
- **Visual hierarchy** that guides readers through content
- **Warm, inviting aesthetics** via a cream-based color palette

---

## Typography System

The Adriatic uses a custom typeface stack designed for editorial excellence, combining serif and sans-serif fonts for distinct typographic roles.

### Primary Typeface Families

#### 1. **Adriatic22** (Custom Serif - Editorial)
**Role**: Body copy, article content, editorial text
**Character**: Refined, readable serif designed for long-form reading

**Weights Available**:
- Regular (400)
- Regular Italic
- Bold (700)
- Bold Italic

**Where It's Used**:
- Article body text (1.5rem / 24px)
- Post lead paragraphs (lede)
- Newsletter banners
- About page copy
- Category descriptions
- Quotes and pull quotes

**Technical Details**:
```css
font-family: 'Adriatic22', Georgia, serif;
font-weight: 400;
line-height: 1.25;
font-synthesis: none;
```

#### 2. **Shapa** (Serif - Headlines)
**Role**: Large display headlines, hero titles
**Character**: Bold, impactful serif for commanding attention

**Weights Available**:
- Light (300)
- Light Italic
- Regular (400)
- Regular Italic
- Bold (700)
- Bold Italic

**Where It's Used**:
- Hero article titles
- Post page headlines (2.5rem - 4rem / 40px - 64px)
- Article card titles
- Major section headings

**Technical Details**:
```css
font-family: 'Shapa', Georgia, serif;
font-weight: 700;
font-size: clamp(2.5rem, 1.5rem + 3vw, 4rem);
line-height: 1.05;
```

#### 3. **SajJY** (Sans-Serif - UI & Navigation)
**Role**: Interface elements, metadata, navigation
**Character**: Clean, modern sans-serif for functional text

**Weights Available**:
- UltraThin (100) + Italic
- Light (300) + Italic
- Regular (400) + Italic
- Bold (700) + Italic
- ExtraBold (800) + Italic

**Where It's Used**:
- Navigation links
- Category tags
- Buttons and CTAs
- Author bylines
- Reading time indicators
- Post metadata
- Footer links

**Technical Details**:
```css
font-family: 'SajJY', Verdana, sans-serif;
font-weight: 700;
font-size: 1rem;
```

#### 4. **Adriatic Journal** (Display - Branding)
**Role**: Wordmark, taglines, editorial voice
**Character**: Distinctive display font for brand identity

**Where It's Used**:
- Site wordmark/logo
- Masthead tagline ("on geopolitics and living in the Adriatic region")
- Special editorial callouts

#### 5. **Habi** (Serif - Alternative Body)
**Role**: Secondary body text, alternative reading face
**Character**: Elegant serif with distinct personality

**Weights Available**:
- Light (300) + Italic
- Regular (400) + Italic
- Bold (700) + Italic

**Where It's Used**:
- Alternative body copy
- Special editorial sections

#### 6. **Lado** (Condensed Sans - Navigation)
**Role**: Condensed navigation, section headers
**Character**: Narrow sans-serif for compact navigation

**Weights Available**:
- Light Condensed (300)
- Bold Condensed (700)

**Where It's Used**:
- Category page titles
- Compact navigation elements
- Section dividers

#### 7. **Maca** (Lightweight Display)
**Role**: Decorative, special uses
**Character**: Light, airy display font

**Weight**: Light (300)

**Where It's Used**:
- Special callouts
- Decorative elements

---

## Typography Hierarchy

### Scale System

The Adriatic uses a fluid typography scale based on CSS custom properties:

```css
--z-ds-fontsize-12: 0.75rem;   /* 12px */
--z-ds-fontsize-14: 0.875rem;  /* 14px */
--z-ds-fontsize-16: 1rem;      /* 16px - Base size */
--z-ds-fontsize-18: 1.125rem;  /* 18px */
--z-ds-fontsize-20: 1.25rem;   /* 20px */
--z-ds-fontsize-22: 1.375rem;  /* 22px */
--z-ds-fontsize-24: 1.5rem;    /* 24px */
--z-ds-fontsize-28: 1.75rem;   /* 28px */
--z-ds-fontsize-32: 2rem;      /* 32px */
--z-ds-fontsize-36: 2.25rem;   /* 36px */
--z-ds-fontsize-40: 2.5rem;    /* 40px */
--z-ds-fontsize-48: 3rem;      /* 48px */
--z-ds-fontsize-56: 3.5rem;    /* 56px */
--z-ds-fontsize-64: 4rem;      /* 64px */
--z-ds-fontsize-72: 4.5rem;    /* 72px */
--z-ds-fontsize-80: 5rem;      /* 80px */
```

### Responsive Typography

Many text elements use `clamp()` for fluid sizing:

```css
/* Post title - scales from 2.5rem to 4rem */
font-size: clamp(2.5rem, 1.5rem + 3vw, 4rem);

/* Article card title - scales from 1.5rem to 1.85rem */
font-size: clamp(1.5rem, 1.4vw + 1rem, 1.85rem);

/* Category title - scales from 3rem to 5rem */
font-size: clamp(3rem, 2rem + 3vw, 5rem);
```

### Usage by Content Type

#### Homepage Hero Article
- **Title**: Shapa Bold, 2.25-3.25rem, line-height 1.08
- **Category**: SajJY Regular, 1rem, uppercase
- **Summary**: Adriatic22 Regular, 1.35rem, line-height 1.25

#### Article Cards
- **Title**: Shapa Bold, 1.5-1.85rem, line-height 1.08
- **Category**: SajJY Bold, 1rem, red accent
- **Excerpt**: Adriatic22 Regular, 1.1rem, line-height 1.25
- **Reading Time**: SajJY Regular, 0.85rem, muted color

#### Post Page
- **Post Title**: Shapa Bold, 2.5-4rem, line-height 1.05
- **Lede (Introduction)**: Adriatic22 Regular, 1.25-1.6rem, line-height 1.5
- **Body Text**: Adriatic22 Regular, 1.5rem, line-height 1.25
- **Byline**: SajJY Bold, 0.85-1rem
- **Date**: SajJY Regular, 0.85-1rem

#### Navigation
- **Main Nav Links**: SajJY Regular, 1rem, weight 400
- **Active Nav**: SajJY Bold, 1rem, weight 700, red accent
- **Category Tags**: Adriatic22 Bold, 1.5rem (24px), weight 600

---

## Color Palette: Warm Cream Theme

The Adriatic uses a sophisticated neutral palette with warm undertones and a distinctive red accent.

### Primary Colors

```css
/* Background - Warm cream */
--z-ds-color-background: #faf0f0;

/* Elevated surfaces - Pure white */
--z-ds-color-background-elevated: #ffffff;

/* Primary text - Near black */
--z-ds-color-text-primary: #1a1a1a;

/* Secondary text - Medium gray */
--z-ds-color-text-secondary: #666666;

/* Muted text - Light gray */
--z-ds-color-text-muted: #888888;

/* Brand accent - Crimson red */
--z-ds-color-accent: #bd2d2d;

/* Borders - Warm gray */
--z-ds-color-border: #e0d8d8;

/* Subtle borders */
--z-ds-color-border-subtle: #ebe3e3;
```

### Color Usage

- **Backgrounds**: Warm cream (#faf0f0) creates a softer, more inviting reading experience than stark white
- **Text**: Near-black (#1a1a1a) ensures excellent readability while being less harsh than pure black
- **Accent Red**: Used sparingly for:
  - Category tags
  - Active states
  - Hover effects
  - Subscribe buttons
  - Important CTAs

### Text Selection

Selected text appears with the brand red:
```css
::selection {
  background-color: #bd2d2d;
  color: #ffffff;
}
```

---

## Spacing System

The Adriatic uses a consistent spacing scale for vertical rhythm and horizontal spacing:

```css
--z-ds-space-xxxs: 0.25rem;  /* 4px */
--z-ds-space-xxs: 0.5rem;    /* 8px */
--z-ds-space-xs: 0.75rem;    /* 12px */
--z-ds-space-s: 1rem;        /* 16px */
--z-ds-space-m: 1.5rem;      /* 24px */
--z-ds-space-l: 2rem;        /* 32px */
--z-ds-space-xl: 3rem;       /* 48px */
--z-ds-space-xxl: 4rem;      /* 64px */
```

### Vertical Rhythm

Article content maintains consistent spacing:
- Paragraphs: 1.25rem bottom margin
- Headings: 3rem top margin, 2rem bottom margin
- Block elements: 2rem vertical spacing
- List items: 0.5rem spacing

---

## Font Loading Strategy

### Performance Optimization

The Adriatic implements progressive font loading to balance performance and design fidelity:

1. **Critical Fonts** (Inline in `<head>`):
   - Adriatic Journal (wordmark)
   - Lado Bold Condensed (navigation)

2. **Deferred Fonts** (Loaded after critical rendering):
   - All other typefaces load via `main.css`

3. **Font Display**: All fonts use `font-display: swap`
   ```css
   font-display: swap;
   ```
   This ensures text remains visible during font loading, preventing FOIT (Flash of Invisible Text).

### Font Formats

All fonts are served in modern formats:
- **WOFF2** (primary) - Best compression, modern browser support
- **WOFF** (fallback) - Broader compatibility

### Fallback Stack

Each custom font has carefully chosen fallbacks:
- **Adriatic22**: `Georgia, serif`
- **Shapa**: `Georgia, serif`
- **SajJY**: `Verdana, sans-serif`
- **Lado**: `Arial Narrow, sans-serif`
- **Adriatic Journal**: `Georgia, serif`

---

## Text Rendering

### Anti-aliasing

All text receives optimized rendering for clarity:

```css
html {
  font-synthesis: none;
  text-rendering: auto;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
}
```

### Font Synthesis Prevention

```css
* {
  font-synthesis: none;
}
```

This prevents browsers from generating fake bold/italic variants, ensuring only true font weights and styles are displayed.

---

## Editorial Style

### Publication Cadence

The Adriatic is a **yearly publication**. The homepage header displays the issue year (e.g., "ISSUE 2026"), not a specific date.

### Date Format

When dates appear in articles and metadata, The Adriatic uses **European date format** (day-month-year):
- **Correct**: 16 January 2026, 16/01/2026, 16.01.2026
- **Incorrect**: January 16, 2026 (American format)

When displaying article dates, use the format: `16 January 2026`

### Title Capitalisation

Article titles follow **sentence case** (only the first letter capitalised), not title case:
- **Correct**: "Building the future of technology in the Adriatic"
- **Incorrect**: "Building The Future Of Technology In The Adriatic"

Exceptions:
- Proper nouns retain their capitalisation (e.g., "Montenegro", "European Union")
- Acronyms remain uppercase (e.g., "EU", "NATO", "GDP")

This aligns with European editorial conventions and creates a more understated, sophisticated tone.

### Article Ledes

The lede (lead paragraph) introduces the article and hooks the reader. Guidelines:

- **Length**: 15–30 words (one to two sentences maximum)
- **Font**: Noto Sans Regular
- **Purpose**: Summarise the article's angle or provide context—not a teaser
- **Tone**: Informative and direct, matching the publication's understated voice

**Good example**: "From Ljubljana's startup scene to Zagreb's tech corridors, the Western Balkans is quietly becoming Europe's next innovation hub."

**Avoid**: Clickbait-style ledes, questions, or vague statements that don't convey substance.

### Category System

The Adriatic uses a **dual-category system** to organise content:

#### Internal Categories (`category`)

Three broad editorial categories for site organisation and filtering:

| Category | Description | Colour |
|----------|-------------|--------|
| **politics** | Geopolitical analysis, governance, elections | Crimson red (#bd2d2d) |
| **business** | Economic topics, startups, industry | Blue (#2d7abd) |
| **living** | Culture, society, travel, lifestyle | Green (#5a9a6e) |

#### Display Categories (`category_display`)

Visible labels that provide editorial context and hook the reader. These are thematic descriptors that give each article its angle:

**Examples from politics:**
- "Same as the old" (continuity in Albanian elections)
- "Another start-up party" (new political ventures)

**Examples from business:**
- "Tech" (technology and startups)
- "Infantilisation" (cultural critique of insurance industry)

**Examples from living:**
- "Overtourism" (Dalmatian coast challenges)
- "Infrastructure" (Belgrade water crisis)

#### Front Matter Structure

```yaml
---
layout: post
title: "Article title in sentence case"
date: 2026-01-10
category: politics          # Internal: politics, business, or living
category_display: Same as the old   # Visible: editorial hook
author: Author Name
excerpt: >-
  Brief lede summarising the article's angle (15-30 words).
---
```

#### Display Logic

The category shown to readers follows this priority:
1. If `category_display` exists → show it (e.g., "Tech", "Overtourism")
2. If no `category_display` → fall back to capitalised `category` (e.g., "Politics")

This allows evocative, article-specific labels while maintaining consistent internal organisation.

---

## Best Practices

### For Article Titles

1. Use Shapa Bold for maximum impact
2. Keep line-height tight (1.05-1.08) for headlines
3. Use responsive `clamp()` values for fluid sizing
4. Limit to 2-3 lines maximum for optimal reading
5. Follow sentence case capitalisation (see Editorial Style above)

### For Body Copy

1. Adriatic22 Regular at 1.5rem provides comfortable reading
2. Line-height of 1.25 balances readability and density
3. Max-width of 680px prevents lines from becoming too long
4. Adequate paragraph spacing (1.25rem) creates breathing room

### For UI Elements

1. SajJY provides clear, scannable interface text
2. Use Bold weight (700) for emphasis and active states
3. Small sizes (0.85-1rem) keep UI compact but readable
4. Uppercase sparingly for labels and categories

### For Navigation

1. SajJY Regular (400) for default nav items
2. SajJY Bold (700) for active/selected states
3. Red accent (#bd2d2d) indicates current page/section
4. Consistent sizing across all navigation contexts

---

## Accessibility

### Contrast Ratios

All text meets WCAG AA standards:
- Primary text (#1a1a1a) on cream background: **12.8:1** (AAA)
- Secondary text (#666666) on cream: **5.2:1** (AA)
- Red accent (#bd2d2d) on white: **7.1:1** (AAA)

### Focus States

All interactive elements have clear focus indicators:
```css
*:focus-visible {
  outline: 2px solid var(--z-ds-color-accent);
  outline-offset: 2px;
}
```

### Font Sizes

- Minimum body text: 1rem (16px)
- Article content: 1.5rem (24px) for enhanced readability
- All text scales with user preferences

---

## Implementation Notes

### File Organization

```
assets/
├── fonts/
│   ├── Adriatic22-Regular.woff2
│   ├── Adriatic22-Bold.woff2
│   ├── Shapa-Bold.woff2
│   ├── SajJY.woff2
│   └── [other font files...]
├── css/
│   └── main.css (all typography definitions)
└── images/
```

### CSS Architecture

1. **critical-css.html**: Inline critical styles (above-fold)
2. **main.css**: Full typography system, loaded after initial render

### Design Tokens

All sizes, colors, and spacing use CSS custom properties for consistency:

```css
:root {
  /* Typography scale */
  --z-ds-fontsize-16: 1rem;

  /* Colors */
  --z-ds-color-text-primary: #1a1a1a;

  /* Spacing */
  --z-ds-space-m: 1.5rem;
}
```

This creates a single source of truth for all design values.

---

## Resources

### Technical Stack

- **Jekyll**: Static site generator
- **Liquid**: Templating language
- **CSS Custom Properties**: Design token system
- **WOFF2/WOFF**: Modern font formats
- **Responsive Design**: Mobile-first approach

---

## Changelog

**Version 1.0** (Current)
- Warm cream theme implementation
- Full typography system with 7 typeface families
- Responsive fluid typography
- Optimized font loading strategy
- Comprehensive spacing and color system

---

*This document serves as the definitive reference for The Adriatic's visual identity and typographic system. All design decisions should align with these standards to maintain brand consistency.*
