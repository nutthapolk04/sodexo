# Schooney V3 Design System

A warm, earthy, playful-but-professional design system for **Schooney** — a Thai-first education / scholarship product. A neutral-heavy palette sits on warm earth surfaces, lifted by a single saturated brand gold (`#F6CF47`), rounded corners, and a Thai + Latin type pairing.

## Sources

- **Figma**: "SCH V3 Design System.fig" — pages `/Typography`, `/Color`, `/Spacing-Radius-Shadow`, `/Icon---Lucide`, `/Component`.
- **Prior build**: a complete earlier pass of this system was provided as a read-only mounted folder (`project/`) and ported here into the compiler structure (split tokens, real `export` components, bundle-loaded cards).
- **GitHub**: `pvrnh/sch-ds` — returned 409 (empty / no accessible branch) when last checked.

Do not assume the reader has access to these; they are recorded for traceability.

## Index / manifest

- `styles.css` — global entry point; `@import`s the four token files. Consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (spacing + radius + shadow + motion), `fonts.css`
- `components/core/` — reusable primitives: `Button`, `Input`, `Badge`, `Card`, `Avatar`, `Tabs`, `Alert`, `Icon` (each `.jsx` + `.d.ts` + `.prompt.md`, with `*.card.html` specimens)
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing) shown in the Design System tab
- `ui_kits/sch-web/` — interactive web product recreation (sign in → dashboard → scholarships)
- `fonts/` — webfont notes (loaded from Google Fonts — see Caveats)
- `assets/` — logos / imagery (lettermark is code-composed — see Iconography)
- `SKILL.md` — Agent Skills manifest for Claude Code compatibility

### Components
| Component | Purpose |
|---|---|
| `Button` | Primary action — 5 variants, 3 sizes, icons |
| `Input` | Labelled text field with icons, hint, error |
| `Badge` | Status / category chip — 8 variants |
| `Card` | Surface container — default / earth / brand / muted |
| `Avatar` | Circular initials chip on a user accent |
| `Tabs` | Segmented control |
| `Alert` | Inline notice — default / destructive |
| `Icon` | Lucide glyph wrapper (1.75 stroke) |

### UI kits
| Kit | Product | Screens | Entry |
|---|---|---|---|
| `sch-web` | Schooney web app | Sign in, Dashboard, Scholarships (+ nav placeholders) | `ui_kits/sch-web/index.html` |

---

## Content Fundamentals

Schooney is a Thai-first product (educational / scholarship). Copy is mixed Thai + English, with a tone that is **warm, direct, and gently playful** — a helpful advisor, never bureaucratic.

- **Voice**: second person ("you"), present tense, gently guiding. The product speaks as "we" only when needed and otherwise stays out of the way (e.g. *"We found 6 new opportunities that fit your profile. Have a look when you're ready."*).
- **Casing**: **sentence case** everywhere — labels, titles, buttons ("Create account", "Save changes", "New application"). Never Title Case. No ALL CAPS except tiny uppercase table column headers.
- **Greetings & encouragement**: friendly and concrete ("Good morning, Niran", "You're 2 steps away from unlocking 12 more matches"). Encouragement is tied to a real next step, not empty cheer.
- **Numerals**: Western digits; Thai Baht ฿ for amounts. Gregorian dates in UI.
- **Emoji**: **not** used as functional UI. The `❖` diamond in the Figma is a documentation marker only.
- **Label patterns**: short and literal — "Filters", "Sort", "View all", "In review", "Action needed", "Due soon".

## Visual Foundations

- **Colour vibe**: warm earth neutrals (`#FCFCF9`, `#F3F3ED`, `#E6E1D6`) as surfaces; near-black `#1C1D1D` text; a single saturated **brand gold `#F6CF47`** for the primary action and key accents. A full secondary accent set (green-light, green-dark, red, blue, pink, yellow, purple) is reserved for badges, avatars and data — used sparingly inside the mostly-neutral canvas. Imagery, when present, skews warm and natural; no duotone or heavy grain.
- **Type**: display & headings in **Anuphan** (Thai+Latin, -0.02em tracking on large sizes); body / UI in **Inter**; forms / placeholders in **IBM Plex Sans Thai**; **Athiti** for poster-scale display. Weights 400/500/600/700. Mono is **Geist Mono** for token labels only.
- **Backgrounds**: solid warm-neutral. **No gradients, no patterns, no hand-drawn illustrations, no blur** in core UI. Full-bleed images live only in marketing/cover contexts.
- **Corners**: 6px (buttons, inputs, badges), 8px (small cards, tabs, icon tiles), 16px (large cards, dialogs, sign-in), fully round for avatars/dots. 80px pill token exists but is rarely used.
- **Borders**: 1px `--border-secondary` (`#E3E4EB`) hairline is the workhorse on cards, inputs, dividers. Inputs darken their border to `--text-primary` on focus; errors use 1px `--border-danger` (`#FF3737`). Documentation-only dashed `#9747FF` outlines from Figma are **not** product UI.
- **Shadows**: four tiers (`sm`, default, `md`, `lg`), all black at 5–10% opacity — **never coloured**. Default cards use `shadow-sm`; dialogs/sign-in use `shadow-md`. Earth/brand/muted cards carry no shadow.
- **Spacing**: 4px-based progression `spacing/0–8` → 0, 2, 4, 8, 12, 16, 24, 32, 48. Card padding 20px; page padding 32px; control gaps 8–14px.
- **Animation**: subtle and quick. `--duration-fast` 120ms for hover/border, `--duration` 180ms for surfaces, `--duration-slow` 260ms for sheets; all on `--ease` (`cubic-bezier(.4,0,.2,1)`). No bounces, no infinite decorative loops.
- **Hover / press**: buttons darken to a slightly deeper fill on hover (brand → `gold/300`); outline/ghost fill with `neutral/100`. Sidebar items fill with `neutral/50` (inactive) or `surface-primary` (active). Press = settle (no aggressive scale). Disabled = 40% opacity + `not-allowed`.
- **Transparency / blur**: avoided in core components; reserve for full-screen overlays only.
- **Cards**: white on the earth canvas, 16px radius, 1px hairline border, optional `shadow-sm`. Accent panels swap the fill (earth/brand/muted). **Never** a coloured left-border-only card.

## Iconography

- **Set**: **Lucide** ([lucide.dev](https://lucide.dev)) — loaded from CDN (`unpkg.com/lucide@latest`). The `Icon` component renders `<i data-lucide="…">`; call `window.lucide.createIcons()` after each render to hydrate.
- **Stroke**: 1.75 default (the Schooney standard), 2 acceptable at small sizes. Sizes 14 / 16 / 20 / 24.
- **Colour**: inherits `currentColor` — usually `--icon-primary` (`#1C1D1D`); destructive uses `--icon-danger`. Brand gold icons are rare and reserved for emphasis.
- **No icon font, no emoji-as-icon, no unicode-as-icon.** Icons seen in source components: `check-circle-2`, `alert-circle`, `calendar`, `chevron-down`, `chevron-right`, `chevrons-up-down`, `x`, `check`, `arrow-right`, `search`, `mail`, `lock`, `bell`, `plus`, `filter`, `graduation-cap`, `file-text`, `log-out`, `layout-dashboard`.
- **Logo**: Schooney uses a simple **"S" lettermark** in a rounded gold tile (code-composed via the `Logo` helper in the web kit) — no standalone logo file was present in the source. Drop a real SVG/PNG into `assets/` and swap the lettermark when available.

## Caveats

- **Fonts are substituted.** The self-hosted TTFs (`IBM_Plex_Sans_Thai`, `Sarabun`, `Prompt`, Anuphan/Athiti) were not delivered, so all fonts load from **Google Fonts**. Drop the original TTFs into `fonts/` and replace the `@import` in `tokens/fonts.css` with local `@font-face` rules when available. `Sarabun` and `Prompt` are not referenced by the Figma type spec.
- **No real logo / brand imagery.** The lettermark is composed in code. `assets/` is reserved for real marks.
- **Semantic token values** are inferred from Figma preview swatches where the source Table components don't expand every row.
- **Some web-kit screens are placeholders** (Messages, Calendar, Applications) — not defined in the source — included only to demonstrate navigation.
