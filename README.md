# The Adriatic

A digital project covering politics, business, and culture from the Western Balkans and beyond. Built with Jekyll, hosted on Cloudinary, vibe coded with Claude.

## What this is

The Adriatic started as a side project—an experiment in building a magazine-style website from scratch. The content covers the Western Balkans and the world beyond, but the real point was learning to build something with personality: custom typography, playful interactions, and details that reward curiosity.

This repo contains the website: layouts, components, styles, and a few sample articles to show how it all fits together.

## Stack

- **Jekyll** — Static site generator
- **Cloudinary** — Image hosting (keeps the repo light)
- **Brevo** — Newsletter signup with reCAPTCHA
- **GitHub Pages** — Hosting
- **Claude** — Pair programming partner

## Features we built

**Cookie banner with personality** — Instead of a generic GDPR notice, we have Michael McGrath (the EU Commissioner responsible for GDPR) as our mascot. Hover his name for the full title. Swipe or drag to dismiss.

**Glass cursor effect** — Hover the footer CTA and your cursor becomes a frosted glass circle with "Read all about it here."

**Pixelation hover effect** — Article cards depixelate on hover using canvas manipulation.

**Custom typography** — Adriatic Journal for the masthead, Adriatic 22 for headlines, Inter for body text.

**Highlighter marks** — Yellow, green, and rose `<mark>` tags for editorial emphasis in articles.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Site runs at `http://localhost:4000`

## Project structure

```
_posts/          # Articles (markdown with YAML frontmatter)
_layouts/        # Page templates
_includes/       # Reusable components (cookie banner, glass cursor, etc.)
_sass/           # Styles organized by component
assets/          # Fonts, JS, compiled CSS
```

## Adding a new article

Create a file in `_posts/` with the format `YYYY-MM-DD-slug.md`:

```yaml
---
layout: post
title: "Your headline here"
date: 2026-01-24
author: "Author Name"
category: Politics
kicker: "The Section Name"
deck: "A one-sentence summary that appears below the headline."
image: https://res.cloudinary.com/dvyhebi2q/image/upload/...
image_caption: "Caption text"
image_credit: "Photographer or source"
---

Your article content in markdown...
```

## How this was built

This site was vibe coded over several sessions with Claude. We'd describe what we wanted—"a cookie banner but make it fun," "a frosted glass cursor effect"—and iterate until it felt right. Some features took multiple attempts. The Michael McGrath tooltip went through several drafts before we landed on "Yes, that's one portfolio."

The approach: start with the feeling you want, then figure out the implementation. Not the other way around.

---

Made with care in Ljubljana.
