# Agentation.dev Design Reference

> A comprehensive analysis of the design system, typography, layout, color, animation, and interaction patterns used on agentation.dev.

---

## Overview

Agentation is a developer tool documentation site built with **Next.js** and hosted on **Vercel**. The design philosophy is minimal, refined, and quietly opinionated -- closer to a well-typeset technical document than a marketing site. It uses restrained color, generous whitespace, and careful typographic hierarchy to feel serious without being sterile. There is a warmth to it (the off-white background, the serif headlines, the ASCII bunny logo) that softens the technical density.

Created by Benji Taylor, Dennis Jin, and Alex Vanderzon, with help from Claude Code.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js |
| Hosting | Vercel |
| Typefaces | Inter (body), IBM Plex Serif (titles) |
| Icons | Dip |
| Monospace | SF Mono |
| License | PolyForm Shield |

---

## CSS Variables

```css
:root {
  --font-primary: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-title: "IBM Plex Serif", Georgia, "Times New Roman", serif;
  --body-color: #111;
  --body-bg: #fdfdfc;
  --heading-color: #111;
  --hyperlink-color: #2480ed;
  --selection-color: #111;
  --selection-bg: #ededed;
  --focus-color: rgba(0, 122, 255, 0.5);
}
```

---

## Color Palette

### Backgrounds
- **Page background:** `#fdfdfc` (rgb(253, 253, 252)) -- warm off-white, not pure white
- **Card/surface:** `#ffffff`
- **Demo browser bg:** `#f6f5f4` (rgb(246, 245, 244))
- **Terminal/popup bg (cream):** `#faf9f7` (rgb(250, 249, 247))
- **Dark surfaces (toolbar, popups):** `#1a1a1a` (rgb(26, 26, 26))
- **Inline code bg:** `rgba(0, 0, 0, 0.04)`
- **Subtle gray bg:** `rgba(0, 0, 0, 0.08)`

### Text Colors
- **Primary body:** `rgba(0, 0, 0, 0.8)` -- not pure black, slightly softened
- **Headings (H1):** `rgba(0, 0, 0, 0.85)`
- **Section headings (H2):** `rgba(0, 0, 0, 0.78)`
- **Subtitle/description:** `rgba(0, 0, 0, 0.65)`
- **Muted/secondary:** `rgba(0, 0, 0, 0.4)`
- **Nav inactive links:** `rgba(0, 0, 0, 0.35)`
- **Version badge:** `rgba(0, 0, 0, 0.25)`
- **GitHub icon:** `rgba(0, 0, 0, 0.2)`

### Accent Colors
- **Primary blue (links):** `#2480ed` (rgb(36, 128, 237))
- **Blue hover:** `#74b1fd` (rgb(116, 177, 253))
- **Marker blue:** `#3b82f6` (rgb(59, 130, 246))
- **Green (active tab, markers):** `#16a34a` / `#22c55e` / `#34c759`
- **Orange highlight (hero underline):** `#f4694c`
- **Orange marker:** `#f59e0b`
- **Red (macOS dot):** `#ff5f57`
- **Yellow (macOS dot):** `#febc2e`
- **Green (macOS dot):** `#28c840`

### Borders
- **Subtle borders:** `rgba(0, 0, 0, 0.06)` -- 1px solid
- **Dotted separator (colophon):** `rgba(0, 0, 0, 0.1)` -- 1px dotted
- **Section divider line (h2 ::after):** `rgba(0, 0, 0, 0.08)` -- 1px height
- **Footer top border:** `rgba(0, 0, 0, 0.06)` -- 1px solid

---

## Typography

### Font Stack
- **Primary (body):** Inter -- variable font, weights 400-600, used via `font-variation-settings`
- **Title/H1:** IBM Plex Serif -- weight 500, gives a literary/editorial feel
- **Monospace:** SF Mono (SFMono-Regular, ui-monospace, Consolas fallback)

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|------|--------|-------------|----------------|-------|
| H1 (hero) | IBM Plex Serif | 32px | 500 | 36.8px (1.15) | -0.16px | rgba(0,0,0,0.85) |
| H1 (page titles) | IBM Plex Serif | 20px | 500 | 28px (1.4) | -0.16px | rgba(0,0,0,0.85) |
| H2 (section headings) | Inter | 13px | 550 | normal | -0.08px | rgba(0,0,0,0.78) |
| H3 (subsections) | Inter | 13px | 550 | normal | -0.08px | rgba(0,0,0,0.78) |
| Body text | Inter | 14px | 450 | 23.2px (1.66) | normal | rgba(0,0,0,0.8) |
| Page subtitle | Inter | 14px | 450 | 23.2px | normal | rgba(0,0,0,0.65) |
| Nav links (inactive) | Inter | 12px | wght 450 | normal | normal | rgba(0,0,0,0.35) |
| Nav links (active) | Inter | 12px | wght 550 | normal | normal | rgba(0,0,0,0.8) |
| Nav section labels | Inter | ~11px | 450 | normal | normal | rgba(0,0,0,0.25) |
| FAQ question | Inter | 12px | 450 | normal | normal | rgba(0,0,0,0.55) |
| FAQ question (open) | Inter | 12px | 450 | normal | normal | rgba(0,0,0,0.8) |
| Blog post title (card) | Inter | 15px | 550 | normal | -0.08px | rgba(0,0,0,0.85) |
| Blog date | Inter | 12px | 450 | normal | normal | rgba(0,0,0,0.4) |
| Blog meta | Inter | 11px | 450 | normal | normal | rgba(0,0,0,0.4) |
| Inline code | SF Mono | 13px | 450 | inherited | normal | rgba(0,0,0,0.75) |
| Code blocks | SF Mono | 12px | normal | 18.6px (1.55) | normal | rgb(57,58,52) |
| Install snippet | SF Mono | 11px | normal | normal | normal | rgba(0,0,0,0.4) |
| Announcement | Inter | 11px | normal | normal | normal | rgba(0,0,0,0.4) |
| Buttons | Inter | 13px | 500 | normal | normal | varies |
| Footer | Inter | 12px | normal | normal | normal | rgba(0,0,0,0.4) |
| Version badge | Inter | 10px | 450 | normal | normal | rgba(0,0,0,0.25) |
| Tab buttons | Inter | 12px | 500 | normal | normal | varies |
| CTA links | Inter | 14px | 450 | normal | normal | #2480ed |

### Key Typographic Patterns
- **Font weight via variable font:** Uses `font-variation-settings: "wght" 450` and `"wght" 550` rather than fixed weights, allowing fluid weight transitions on hover
- **Negative letter-spacing on headings:** -0.16px on H1, -0.08px on H2 -- tightens headings without making them feel cramped
- **Bold lead-ins in lists:** Pattern of `**Bold term** -- description text` using weight 550 and color rgba(0,0,0,0.8)
- **Em dashes** used extensively for inline definitions/explanations (11+ on the homepage alone)

---

## Layout

### Overall Structure
- **Fixed left sidebar** + **scrollable content area** -- classic docs layout
- **Sidebar width:** ~76px (compact, text-only, no icons)
- **Sidebar position:** Fixed, top: 60px, left: ~21px
- **Content area (article):** max-width: 576px, padding: 64px 24px 48px, left margin of ~197px

### Spacing System
- **Section margin-top:** ~32px between major sections
- **Section heading margin-bottom:** 18px
- **Paragraph line-height:** 23.2px (1.66) creates comfortable reading rhythm
- **Content gap (hero demo):** 24px margin between hero demo and text
- **List item padding:** Default browser spacing

### Grid/Column Structure
No CSS grid -- simple single-column layout with fixed sidebar. Content is centered within the available space after sidebar.

### Breakpoints
- **900px:** Sidebar collapses, mobile nav activates
- **640px:** Hero demo adjusts sizing, reduced padding
- **600px:** Additional mobile adjustments

### Section Dividers
H2 headings use a **flex + ::after pseudo-element** pattern:

```css
h2 {
  display: flex;
  align-items: center;
  gap: 12px;
}
h2::after {
  content: "";
  flex-grow: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
}
```

This creates the signature heading-with-a-horizontal-line effect seen throughout the site.

---

## Components

### Sidebar Navigation
- Fixed position, minimal width (~76px)
- Grouped into sections: main pages, Tools, Resources
- Section labels in muted text rgba(0,0,0,0.25)
- Active link: weight 550, color rgba(0,0,0,0.8)
- Inactive link: weight 450, color rgba(0,0,0,0.35)
- Hover: color rgba(0,0,0,0.55), weight transitions to 550
- Transitions: `color 0.15s, font-variation-settings 0.25s`

### Logo
ASCII art bunny face made from text characters, followed by /agentation in the sidebar. Monospaced/system rendering. A playful, personality-rich mark.

### Buttons

| Variant | Background | Text Color | Border | Border Radius |
|---------|-----------|------------|--------|---------------|
| Primary | #111111 | #ffffff | none | 6px |
| Secondary | #ffffff | #111111 | 1px solid rgba(0,0,0,0.1) | 6px |
| Blue/Modal | #3c82f7 | #ffffff | none | 6px |
| Purple | #7c3aed | #ffffff | none | 6px |
| Tab (inactive) | #ffffff | rgba(0,0,0,0.5) | 1px solid rgba(0,0,0,0.1) | 6px (grouped) |
| Tab (active) | #16a34a | #ffffff | 1px solid transparent | 0px (middle) |

All buttons: font-size 12-13px, font-weight 500, padding 6-8px 12-14px.

### Inline Code

```css
code {
  font-family: "SF Mono", SFMono-Regular, ui-monospace, Consolas, monospace;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.75);
  padding: 1.6px 5.6px;
  border-radius: 4px;
}
```

### Code Blocks

```css
pre {
  font-family: "SF Mono", SFMono-Regular, ui-monospace, Consolas, monospace;
  font-size: 12px;
  line-height: 18.6px;
  color: rgb(57, 58, 52);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 14px 16px;
  overflow: hidden auto;
}
```

### Syntax Highlighting Colors (Prism-based, light theme)
- Plain text: rgb(57, 58, 52)
- Keywords: rgb(0, 0, 159) -- deep blue
- Strings: rgb(227, 17, 108) -- pink/magenta
- Functions: rgb(215, 58, 73) -- red
- Constants/properties: rgb(54, 172, 170) -- teal
- Comments: rgb(153, 153, 136) -- gray
- Attributes: rgb(0, 164, 219) -- cyan
- Tags: rgb(34, 132, 24) -- green


### FAQ Accordion
- Items separated by `1px solid rgba(0,0,0,0.06)` borders
- Question: 12px, weight 450, color rgba(0,0,0,0.55), padding: 10px 0
- Question (open): color rgba(0,0,0,0.8)
- Chevron icon rotates on open
- **Answer expand animation:** `grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)` -- CSS grid row transition (avoids height animation jank)
- Question color transition: `color 0.15s`
- Chevron rotation: `transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)`

### Blog Cards
- Featured image with rounded corners, no explicit card border
- Title: Inter 15px weight 550
- Date: Inter 12px weight 450, color rgba(0,0,0,0.4), preceded by bullet separator
- Description: Inter 14px weight 450, color rgba(0,0,0,0.65)
- Hover effect on card

### Footer
- Top border: `1px solid rgba(0,0,0,0.06)`
- Padding: 16px 24px 48px
- Font size: 12px, color rgba(0,0,0,0.4)
- Made by credits with linked author names
- Colophon link right-aligned

### CTA Links (Bottom of Pages)
- Color: #2480ed
- Font size: 14px, weight 450
- Arrow character appended, no underline

### Install Snippet (Hero)
- SF Mono 11px, color rgba(0,0,0,0.4)
- Copy button with clipboard icon
- Hover effect on the snippet container

---

## Animations and Transitions

### Core Easing Curves
- **Standard ease:** `0.15s` for most color/opacity transitions
- **Springy/bouncy:** `cubic-bezier(0.34, 1.56, 0.64, 1)` -- overshoots slightly, used for popup entrances and scale transforms
- **Smooth decelerate:** `cubic-bezier(0.16, 1, 0.3, 1)` -- FAQ accordion expand, feels natural
- **Smooth movement:** `cubic-bezier(0.4, 0, 0.2, 1)` -- cursor movement in hero demo
- **Elastic toolbar expand:** `cubic-bezier(0.19, 1, 0.22, 1)` -- toolbar width/border-radius transitions

### Transition Inventory

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Nav links | color | 0.15s | ease |
| Nav links | font-variation-settings | 0.25s | ease |
| Content links | color | 0.15s | ease |
| Buttons | background | 0.15s | ease |
| FAQ question | color | 0.15s | ease |
| FAQ chevron | transform | 0.25s | cubic-bezier(0.16, 1, 0.3, 1) |
| FAQ answer | grid-template-rows | 0.3s | cubic-bezier(0.16, 1, 0.3, 1) |
| Styled links | all | 0.2s | ease |
| Blog card | opacity/transform | hover | ease |

### Keyframe Animations
- **navVersionFadeIn:** Simple 0 to 1 opacity for version badge
- **progress-move:** Loading bar moves left to right with width pulsing 18% to 30% to 18%
- **pulse:** Opacity 1 to 0.4 to 1 for loading/blinking states

### Hero Demo Animation
The homepage hero features a **scripted, looping animated demo** that simulates the product workflow:
1. Cursor moving over UI elements
2. Toolbar expanding from collapsed circle to pill shape
3. Element highlight borders appearing
4. Annotation popup sliding in (scale + translateY, springy ease)
5. Marker numbers appearing (scale from 0.3 to 1, springy ease)
6. Area drag selection (dashed green border)
7. Text selection highlighting
8. Terminal/Claude Code window sliding in (opacity + translateY + scale)

Key hero demo timing:
- **Cursor movement:** `left 0.35s cubic-bezier(0.4, 0, 0.2, 1), top 0.35s cubic-bezier(0.4, 0, 0.2, 1)`
- **Toolbar expand:** `width 0.4s cubic-bezier(0.19, 1, 0.22, 1), border-radius 0.4s`
- **Popup entrance:** `opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)` -- bouncy scale
- **Terminal entrance:** `opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Marker appear:** `opacity 0.25s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)`
- **Element highlights:** `opacity 0.12s ease-out, transform 0.12s ease-out`

### Agentation Component Animations (the toolbar itself)
- **Popup enter:** scale(0.95) + translateY(4px) to scale(1) + translateY(0)
- **Popup exit:** reverse of enter
- **Shake animation:** Horizontal wiggle for error/attention states
- **Toolbar collapse:** Springy width/border-radius transition

---

## Hero Headline Treatment

The H1 "Point at bugs. Let AI fix them." uses two distinct highlight treatments:

### "Point at bugs." -- Translucent blue highlight
```css
background: linear-gradient(
  75deg,
  color(srgb 0.298 0.455 1 / 0.5),
  color(srgb 0.298 0.455 1 / 0.15) 4%,
  color(srgb 0.298 0.455 1 / 0.3) 96%,
  color(srgb 0.298 0.455 1 / 0.6)
);
padding: 1.28px 1.92px;
border-radius: 6.4px 4.8px;
```
This mimics a hand-drawn highlighter mark -- slightly uneven edges, gradient opacity.

### "fix them." -- Hand-drawn SVG underline
```css
background-image: url("data:image/svg+xml,...");
/* SVG path: M2 8 Q50 4 98 7 -- a wobbly quadratic curve */
/* Stroke: #f4694c (warm orange), width 4, round linecap */
padding-bottom: 2px;
```
The underline is an inline SVG of a slightly curved, hand-drawn line in warm orange.

---

## Shadow System

| Context | Shadow |
|---------|--------|
| Browser mockup | `0 0 0 1px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)` |
| Terminal window | `0 0 0 1px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.12), 0 12px 32px rgba(0,0,0,0.08)` |
| Dark toolbar | `0 2px 8px rgba(0,0,0,0.25), 0 4px 16px rgba(0,0,0,0.15)` |
| Annotation popup | `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)` |
| Markers | `0 2px 6px rgba(0,0,0,0.2)` |
| Cards | `0 1px 2px rgba(0,0,0,0.04)` |

Pattern: Shadows are layered (multiple values), very subtle on light surfaces, more pronounced on floating elements. Often includes a 1px ring shadow (`0 0 0 1px`) for crispness.

---

## Interaction Patterns

### Links
- **In-content links:** Color #2480ed, no underline by default, underline on hover
- **Hover color:** Slightly lighter blue
- **Transition:** `color 0.15s`
- **External indicator:** Arrow character on CTA links

### Nav Hover
- Uses **font-variation-settings** transition for weight change on hover -- the text smoothly bolds as you hover, a refined detail that avoids layout shift
- Color shifts from 0.35 opacity to 0.55 opacity

### FAQ Interaction
- Smooth CSS grid-based expand/collapse (not height animation -- grid-template-rows avoids layout jank)
- Chevron rotation with bouncy easing

### Install Snippet
- Entire container has hover state
- Copy icon transitions on click (check mark appears with 0.2s ease)

---

## Design Philosophy and Notable Patterns

1. **Opacity-based color system:** Nearly all colors are defined as `rgba(0, 0, 0, X)` rather than named colors or hex values. This creates a naturally cohesive palette that adapts to the warm off-white background.

2. **Serif + sans-serif pairing:** IBM Plex Serif for headlines creates an editorial quality that distinguishes the site from typical developer docs. The serif is used sparingly -- only H1 page titles -- while Inter handles everything else.

3. **Restrained sizing:** The type scale is deliberately small -- body text is 14px, section headings are 13px (same as body or smaller!). Hierarchy is achieved through weight and opacity rather than size jumps.

4. **Variable font exploitation:** font-variation-settings allows smooth weight transitions on hover that would be impossible with fixed font weights.

5. **Warm, not cold:** The #fdfdfc background, cream terminal surfaces, and soft shadows avoid the clinical feel of pure white developer tools.

6. **Hand-drawn touches:** The SVG underline on 'fix them.' and the uneven highlighter gradient on 'Point at bugs.' add personality. The ASCII bunny logo reinforces this character.

7. **Functional animation:** Animations serve purpose (demonstrating the product, smooth state changes) rather than decoration. Timing is fast (0.15s-0.3s) and easing curves are carefully chosen.

8. **Compact information density:** Lots of content in a narrow column (576px max), small text sizes, tight spacing -- but it reads well because of careful typographic choices and generous padding in the right places.

---

## Page Templates

### Documentation Page (Install, Features, Schema, MCP, API, Webhooks)
- H1 in IBM Plex Serif 20px
- Subtitle in Inter 14px rgba(0,0,0,0.65)
- Sections divided by H2 with horizontal line
- Content in single column, 576px max
- Optional in-page TOC in sidebar (sub-nav appears on longer pages like Features)

### Blog Index
- Page title 'Blog' in IBM Plex Serif
- Blog cards with featured image, title, date, excerpt
- Single column layout

### Blog Post
- Date and author meta at top (11px, rgba(0,0,0,0.4))
- Title in IBM Plex Serif 20px
- Subtitle in Inter 14px
- Body in Inter 14px, line-height 1.66
- In-content links in blue (#2480ed)

### Changelog
- Version number as H2 (13px Inter weight 550) with date inline
- Category labels (ADDED, FIXED, IMPROVED) in small caps style, muted color
- Bullet points for each change
- Inline code for technical terms (SF Mono, rgba(0,0,0,0.04) bg)

### FAQ
- Accordion pattern with CSS grid expand/collapse
- Grouped by category (Basics, Usage, Output)
- Category headers as H2 with horizontal line

### Colophon
- Smallest/most muted text (0.75rem, rgba(0,0,0,0.4))
- Table with dotted separators
- ASCII art bunny decoration
- Credits and tech stack