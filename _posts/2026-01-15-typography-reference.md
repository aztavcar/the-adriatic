---
layout: post
title: "Typography and image reference"
date: 2026-01-15
last_modified_at: 2026-01-15
category: living
category_display: Style guide
author: Editorial Team
image: /assets/images/placeholders/hero-horizontal.svg
image_caption: Horizontal hero image (16:9 aspect ratio, 1200×675px recommended)
image_credit: The Adriatic
description: >-
  A comprehensive reference for typography, image placement, and styling conventions used across The Adriatic.
hidden: true
---

This post serves as a living reference for the typographic and visual conventions used throughout The Adriatic. Use it to preview how content will appear before publishing.

## Heading level two

Heading two is set at 1.75rem with a top margin of 35px (2.1875rem) and bottom margin of 1rem. It's used for major section breaks within an article and provides clear visual hierarchy while maintaining the overall reading flow.

### Heading level three

Heading three is set at 1.25rem with generous margins. It works well for subsections within a larger topic. Use it sparingly to avoid fragmenting the text too much.

## Body text

The body text is set in our primary serif typeface at 1.25rem with a line-height of 1.5rem. The content column is constrained to 630px for optimal readability—roughly 65-75 characters per line, which research suggests is ideal for sustained reading.

Paragraphs are separated by 1rem spacing to give the eye rest between ideas. This creates a calm, unhurried reading experience that matches our editorial philosophy: "a slower take on a fast world."

## Inline images

Images can be inserted directly into the article body. They will be constrained to the content width (630px) and centred.

![Inline image example]({{ '/assets/images/placeholders/inline.svg' | relative_url }})

Images should include alt text for accessibility. The recommended dimensions for inline images are 800×500px, though they will scale responsively.

## Images with captions

For images that require attribution or explanatory text, use the figure/figcaption pattern:

<figure>
  <img src="{{ '/assets/images/placeholders/inline.svg' | relative_url }}" alt="Placeholder showing caption styling">
  <figcaption>Caption text appears below the image in a smaller, muted typeface, right-aligned. | The Adriatic</figcaption>
</figure>

Figcaptions use a pipe separator convention: `Caption text | Credit source`. The credit is automatically styled with reduced opacity.

## Text styling

**Bold text** is used for emphasis and key terms. *Italic text* works for titles, foreign words, or lighter emphasis. You can also combine ***bold and italic*** when needed.

Internal links appear in [accent red colour](#) using Inter font at a smaller size (0.8em). On hover, the colour fades to a lighter red.

External links are automatically wrapped in a blue highlight: [example external link](https://example.com). To change the highlight colour, use the `data-mark` attribute:

<a href="https://example.com" data-mark="yellow">yellow external link</a> — `data-mark="yellow"`

<a href="https://example.com" data-mark="green">green external link</a> — `data-mark="green"`

<a href="https://example.com" data-mark="rose">rose external link</a> — `data-mark="rose"`

## Highlighted text

Use the `<mark>` tag to highlight text with a realistic highlighter effect. Four colour variants are available:

<mark>Default blue highlight</mark> — used without a class

<mark class="yellow">Yellow highlight</mark> — `<mark class="yellow">`

<mark class="green">Green highlight</mark> — `<mark class="green">`

<mark class="rose">Light rose highlight</mark> — `<mark class="rose">`

Highlights can be combined with links for emphasis: <a href="#" class="plain"><mark class="rose">highlighted link example</mark></a>

Use the `plain` class on links to remove default styling when combining with marks: `<a href="#" class="plain"><mark class="yellow">link text</mark></a>`

## Blockquotes

> Blockquotes are styled with a red left border and Inter font (non-italic). They're ideal for pull quotes, citations, or highlighting key passages from sources.

Use blockquotes sparingly—they should draw attention to genuinely important statements rather than padding out the article.

## Lists

Unordered lists work well for collections of items:

- First item in the list
- Second item with more detail
- Third item to complete the set

Ordered lists are better for sequences or rankings:

1. The most important point
2. The second consideration
3. Supporting detail

## Hero image orientations

The hero image at the top of this article uses a **horizontal (landscape)** orientation. This is the default and works well for most articles.

For portrait-oriented subjects (people, buildings, book covers), use a **vertical** hero image by setting `image_orientation: portrait` in the front matter. The vertical placeholder is 675×900px (3:4 aspect ratio).

## Image specifications

| Image type | Dimensions | Aspect ratio | Use case |
|------------|-----------|--------------|----------|
| Hero (horizontal) | 1200×675 | 16:9 | Default article hero |
| Hero (vertical) | 675×900 | 3:4 | Portrait subjects |
| Inline | 800×500 | 16:10 | Within article body |

## Front matter reference

```yaml
---
layout: post
title: "Article title in sentence case"
date: 2026-01-15
category: politics          # politics, business, or living
kicker: "The Kicker"        # Custom eyebrow text (optional, overrides category)
author: Author Name
image: /assets/images/posts/article-name/hero.jpg
image_orientation: landscape  # or portrait (optional)
image_caption: Description of the image
image_credit: Photographer / Source
description: >-
  Brief deck summarising the article (15-30 words).
---
```

The `kicker` field allows custom eyebrow text above the headline (e.g., "The Davos Standoff", "Sanctions Scramble"). If not specified, the category name is displayed instead.

## Colour reference

- **Accent red**: #bd2d2d — used for categories, links, and interactive elements
- **Primary text**: #1a1a1a — near-black for body copy
- **Muted text**: #888888 — captions, metadata, secondary information
- **Background**: #faf0f0 — warm cream page background
- **Borders**: #e0d8d8 — subtle dividers and rules

---

*This reference document is maintained by the editorial team. Last updated: January 2026.*
