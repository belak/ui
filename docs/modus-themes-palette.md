# Modus Themes Color Palette

Complete color reference for the [Modus Themes](https://protesilaos.com/emacs/modus-themes) by Protesilaos Stavrou. Modus themes comply with WCAG AAA standards for color contrast.

- **Modus Operandi**: light theme, pure white background
- **Modus Vivendi**: dark theme, pure black background

This document is a pure reference (color tables only). Usage rules and semantic role decisions live in [design.md](design.md).

All colors sourced from: <https://github.com/protesilaos/modus-themes/blob/main/modus-themes.el>

## Basic Colors

### Backgrounds and Foregrounds

| Name         | Light (Operandi) | Dark (Vivendi) | Usage                  |
| ------------ | ---------------- | -------------- | ---------------------- |
| bg-main      | `#ffffff`        | `#000000`      | Primary background     |
| bg-dim       | `#f2f2f2`        | `#1e1e1e`      | Secondary background   |
| bg-active    | `#c4c4c4`        | `#535353`      | Active/selected state  |
| bg-inactive  | `#e0e0e0`        | `#303030`      | Inactive state         |
| fg-main      | `#000000`        | `#ffffff`      | Primary text           |
| fg-dim       | `#595959`        | `#989898`      | Secondary/dimmed text  |
| fg-alt       | `#193668`        | `#c6daff`      | Alternative text       |
| border       | `#9f9f9f`        | `#646464`      | Border/separator       |
| border-light | `#c4c4c4`        | `#535353`      | Lighter border/divider |

## Foreground Accent Colors

### Common Accents

Each color has variants:

- Base color (semantic meaning)
- `-warmer` (orange/red undertone)
- `-cooler` (blue/purple undertone)
- `-faint` (less saturated)
- `-intense` (more saturated)

#### Red

| Variant     | Light (Operandi) | Dark (Vivendi) |
| ----------- | ---------------- | -------------- |
| red         | `#a60000`        | `#ff5f59`      |
| red-warmer  | `#972500`        | `#ff6b55`      |
| red-cooler  | `#a0132f`        | `#ff7f86`      |
| red-faint   | `#7f0000`        | `#ff9580`      |
| red-intense | `#d00000`        | `#ff6f6f`      |

#### Green

| Variant       | Light (Operandi) | Dark (Vivendi) |
| ------------- | ---------------- | -------------- |
| green         | `#006800`        | `#44bc44`      |
| green-warmer  | `#316500`        | `#70b900`      |
| green-cooler  | `#00663f`        | `#00c06f`      |
| green-faint   | `#2a5045`        | `#88ca9f`      |
| green-intense | `#008900`        | `#44df44`      |

#### Yellow

| Variant        | Light (Operandi) | Dark (Vivendi) |
| -------------- | ---------------- | -------------- |
| yellow         | `#6f5500`        | `#d0bc00`      |
| yellow-warmer  | `#884900`        | `#fec43f`      |
| yellow-cooler  | `#7a4f2f`        | `#dfaf7a`      |
| yellow-faint   | `#624416`        | `#d2b580`      |
| yellow-intense | `#808000`        | `#efef00`      |

#### Blue

| Variant      | Light (Operandi) | Dark (Vivendi) |
| ------------ | ---------------- | -------------- |
| blue         | `#0031a9`        | `#2fafff`      |
| blue-warmer  | `#3548cf`        | `#79a8ff`      |
| blue-cooler  | `#0000b0`        | `#00bcff`      |
| blue-faint   | `#003497`        | `#82b0ec`      |
| blue-intense | `#0000ff`        | `#338fff`      |

#### Magenta

| Variant         | Light (Operandi) | Dark (Vivendi) |
| --------------- | ---------------- | -------------- |
| magenta         | `#721045`        | `#feacd0`      |
| magenta-warmer  | `#8f0075`        | `#f78fe7`      |
| magenta-cooler  | `#531ab6`        | `#b6a0ff`      |
| magenta-faint   | `#7c318f`        | `#caa6df`      |
| magenta-intense | `#dd22dd`        | `#ff66ff`      |

#### Cyan

| Variant      | Light (Operandi) | Dark (Vivendi) |
| ------------ | ---------------- | -------------- |
| cyan         | `#005e8b`        | `#00d3d0`      |
| cyan-warmer  | `#3f578f`        | `#4ae2f0`      |
| cyan-cooler  | `#005f5f`        | `#6ae4b9`      |
| cyan-faint   | `#005077`        | `#9ac8e0`      |
| cyan-intense | `#008899`        | `#00eff0`      |

### Uncommon Accents

These exist in the full Modus palette but are not currently shipped as `@belak/ui` tokens:

| Name   | Light (Operandi) | Dark (Vivendi) |
| ------ | ---------------- | -------------- |
| rust   | `#8a290f`        | `#db7b5f`      |
| gold   | `#6c501c`        | `#c0965b`      |
| olive  | `#4c6000`        | `#9cbd6f`      |
| slate  | `#2f3f83`        | `#76afbf`      |
| indigo | `#4a3a8a`        | `#9099d9`      |
| maroon | `#731c52`        | `#cf7fa7`      |
| pink   | `#7b435c`        | `#d09dc0`      |

## Background Accent Colors

Background colors for highlights, buttons, and visual feedback. Each has three intensity levels:

- `-intense`: bright, high contrast (use for important highlights)
- `-subtle`: softer, medium contrast (use for backgrounds, hover states)
- `-nuanced`: very light, low contrast (use for subtle differentiation)

### Red Backgrounds

| Variant        | Light (Operandi) | Dark (Vivendi) | Usage                    |
| -------------- | ---------------- | -------------- | ------------------------ |
| bg-red-intense | `#ff8f88`        | `#9d1f1f`      | Error highlights, alerts |
| bg-red-subtle  | `#ffcfbf`        | `#620f2a`      | Error backgrounds        |
| bg-red-nuanced | `#ffe8e8`        | `#3a0c14`      | Subtle error indication  |

### Green Backgrounds

| Variant          | Light (Operandi) | Dark (Vivendi) | Usage                           |
| ---------------- | ---------------- | -------------- | ------------------------------- |
| bg-green-intense | `#8adf80`        | `#2f822f`      | Success highlights              |
| bg-green-subtle  | `#b3fabf`        | `#00422a`      | Success backgrounds, highlights |
| bg-green-nuanced | `#e0f6e0`        | `#092f1f`      | Subtle success indication       |

### Yellow Backgrounds

| Variant           | Light (Operandi) | Dark (Vivendi) | Usage                     |
| ----------------- | ---------------- | -------------- | ------------------------- |
| bg-yellow-intense | `#f3d000`        | `#7a6100`      | Warning highlights        |
| bg-yellow-subtle  | `#fff576`        | `#4a4000`      | Warning backgrounds       |
| bg-yellow-nuanced | `#f8f0d0`        | `#381d0f`      | Subtle warning indication |

### Blue Backgrounds

| Variant         | Light (Operandi) | Dark (Vivendi) | Usage                  |
| --------------- | ---------------- | -------------- | ---------------------- |
| bg-blue-intense | `#bfc9ff`        | `#1640b0`      | Info highlights        |
| bg-blue-subtle  | `#ccdfff`        | `#242679`      | Info backgrounds       |
| bg-blue-nuanced | `#ecedff`        | `#12154a`      | Subtle info indication |

### Magenta Backgrounds

| Variant            | Light (Operandi) | Dark (Vivendi) | Usage                     |
| ------------------ | ---------------- | -------------- | ------------------------- |
| bg-magenta-intense | `#dfa0f0`        | `#7030af`      | Special highlights        |
| bg-magenta-subtle  | `#ffddff`        | `#552f5f`      | Special backgrounds       |
| bg-magenta-nuanced | `#f8e6f5`        | `#2f0c3f`      | Subtle special indication |

### Cyan Backgrounds

| Variant         | Light (Operandi) | Dark (Vivendi) | Usage                    |
| --------------- | ---------------- | -------------- | ------------------------ |
| bg-cyan-intense | `#a4d5f9`        | `#2266ae`      | Accent highlights        |
| bg-cyan-subtle  | `#bfefff`        | `#004065`      | Accent backgrounds       |
| bg-cyan-nuanced | `#e0f2fa`        | `#042837`      | Subtle accent indication |

## References

- [Modus Themes Official Site](https://protesilaos.com/emacs/modus-themes)
- [Full Color Palette](https://protesilaos.com/emacs/modus-themes-colors)
- [GitHub Repository](https://github.com/protesilaos/modus-themes)
- [Source File](https://github.com/protesilaos/modus-themes/blob/main/modus-themes.el)
