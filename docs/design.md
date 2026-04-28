# Design Philosophy

This document is for developers building apps on `@belak/ui`. It explains *why*
the library is shaped the way it is, so the apps that consume it feel like a
cohesive suite rather than a disjointed mess. Token names, scales, and semantic
role tables live in `src/css/tokens.css` and the [Modus palette
reference](modus-themes-palette.md).

## Why This Exists

`@belak/ui` maintains a consistent design language across personal projects. Not
because it's objectively the best approach, but because it reflects personal
preference and makes apps feel like they belong to the same family. Most app UIs
drift toward the templated admin dashboard or the AI-generated look. Both signal
that no decisions were made. Apps built on this library should feel like someone
did make decisions, and stands behind them.

## The Basics

**Modus foundations.** The Modus themes by Protesilaos Stavrou are the visual
baseline. WCAG AAA contrast, pure-black/pure-white surfaces, semantic-only
color, single-pixel borders, no gradients. This is the discipline the rest of
the library inherits. It is not a starting point to soften; it is the look.

**Serif-italic voice.** A serif italic, used sparingly, is the visual signature.
The interface is sans and quiet; the serif appears only when the app *speaks*.
Empty states, confirmations, error pages, success toasts. The serif is the
narrator, not a display family.

Color carries state. Typography carries voice.

## The Tone

The interface is serious and functional. Copy is plain and direct. Humor is a
punctuating note, not the baseline.

Where it lives: subtitles, empty states, success and error messages. Not in
primary headings or navigation. A page title is not a joke; the subtitle under
it might be. A toast confirmation can be funny; the button that triggered it
shouldn't try.

The tonal reference is the dry SF tradition (Douglas Adams, Terry Pratchett,
Robert Asprin, Brandon Sanderson's Wit): observational, never trying too hard,
comfortable with understatement, occasionally willing to have more edge.

Understatement is one form: *"Uploaded."* not *"Successfully uploaded!"* It
doesn't have to be flat, though. A well-placed absurd observation lands better
than forced brevity. No exclamation marks, no reassurance, no
self-congratulation. The specific copy belongs to each app; the posture is the
library's.

## The Details

- Color carries state. Typography carries voice. They don't overlap.
- Use the authentic Modus palette. WCAG AAA, no gradients, full borders over
  side-stripes. Modus is the baseline, not the ceiling.
- Soften with typography, copy, and tint. Not with illustrations, mascots, or
  pastels.
- Character belongs in empty states, success feedback, and microcopy. Not in
  persistent chrome.
- If a screen starts to look busy, remove something. Simpler is the point.
- Casual users see a clean, obvious UI. Power users find keyboard shortcuts,
  density, and speed on their own. Never the reverse.
- The library makes choices so apps stay cohesive. Those choices are not exposed
  as knobs.

## What to Avoid

- **Consumer cloud apps** (Google Drive, Dropbox). Pastels, cartoon mascots,
  gradient buttons.
- **Generic admin dashboards** (Material / Bootstrap defaults).
  Card-grid-of-stats, sparklines as decoration, template feel.
- **AI-generated apps / neon-on-dark dev tools.** Cyan-on-dark glow,
  purple-to-blue gradients, glowing accents, big rounded icons above every
  heading.
