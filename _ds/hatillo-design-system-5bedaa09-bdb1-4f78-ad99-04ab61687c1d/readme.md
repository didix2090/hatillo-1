# Hatillo Design System

**Hatillo** is the intelligent municipal assistant for the Municipio de Panamá — a
mobile-first, conversational product (chat + voice) that lets citizens ("contribuyentes")
pay municipal taxes, run trámites, and file street-level reports in one place. The
interface is Spanish-language and the default MVP scope is **pagos + trámites + reportes**.

This design system is a faithful recreation of the **Hatillo · Design System v1 —
Asistente Municipal** guidelines (Guidelines 2026).

## Sources
- `uploads/hatillo-design-system-v1.html` — the complete v1 spec (tokens, color audit,
  type scale, components, assistant surfaces, tone system, iconography). All values here
  are copied verbatim from that file. No Figma or codebase was provided.

## Font
**Headings use Sora; body uses Mirinda Sans.** Both are self-hosted from `/fonts`.
Headings (`--font-heading` = `'Sora'`) apply to every semantic `<h1>`–`<h6>` via a base
rule in `tokens/base.css`, to the `--text-display-*`/`--text-h1`/`--text-h2` scale tokens,
and to display-size numerals/titles (payment amounts, profile name). Everything else —
paragraph and label copy — stays on Mirinda Sans (`--font`).

The body typeface is **Mirinda Sans** (the uploaded files are named *Miranda Sans*; wired
under the `Mirinda Sans` family for continuity). It is **self-hosted** from `/fonts` via
`@font-face` rules in `tokens/fonts.css` — weights 400/500/600/700 (+ italics), with Bold
covering the 800 display weight. No CDN fallback font is needed anymore.

## Logo / brand mark ⚠️
The v1 spec renders an SVG isotype explicitly labeled *"aproximación pendiente de asset
oficial"*. The brand owner later described the mark as **a house with a negative "1"** and
an app icon (white isotype on a Blue tile). The prototype includes a **simple geometric
interpretation** of that description (`HatilloMark` in `ui_kits/asistente/Auth.jsx`) plus
the `hatillo®` wordmark. This is a placeholder interpretation — **provide the official
logo asset** to replace it. We do not reconstruct any real third-party logo from memory.

---

## CONTENT FUNDAMENTALS

**Language:** Panamanian Spanish, throughout. Everything is written for the citizen.

**Person & address:** Second person is the default. The product ships a **tone system**
with three treatments the user chooses at onboarding (and can change anytime):
- **Tú (cercano)** — the *default*. Warm, first-name, "nosotros" framing.
  *"¡Hola, Carlos! Tienes un saldo pendiente de $45.00… ¿Lo pagamos ahora?"*
- **Usted (formal)** — respectful, "Sr./Sra.", full sentences.
  *"Con gusto le ayudo, Sr. Carlos. Usted tiene un saldo pendiente de $45.00…"*
- **Directo** — terse, scannable, telegram-style.
  *"Carlos · Saldo pendiente $45.00 — impuesto de circulación, placa 123456. ¿Pagar?"*
  Personalization = **treatment × name × length**.

**Tone/vibe:** Helpful civic concierge — clear, reassuring, action-forward. Never
bureaucratic. Uses the person's name. Confirms and closes the loop ("Te aviso cuando
cambie de estado", "Guardamos tu conversación en el historial").

**Casing:** Sentence case for body and headings. **Uppercase + wide tracking (.12em)**
reserved for small labels/eyebrows ("TIPO DE REPORTE", section eyebrows). Buttons are
sentence case ("Empezar ahora", "Pagar con tarjeta").

**Copy patterns:** Questions to prompt action ("¿Qué necesitas hacer hoy?"), imperative
CTAs ("Pagar ahora", "Iniciar conversación"), short confirmations in toasts. Amounts are
`$45.00` (USD/Balboa, two decimals). Domain refs use prefixes: `#AO-20984` (Aviso de
Operación), `#R-4471` (reporte), `#PS-7781` (Paz y Salvo), `TXN-8830012` (transacción).

**Emoji:** Used *sparingly and purposefully* — a single pointer emoji (👇) to direct
attention to a card the assistant just produced. Not decorative, not in headings or
buttons. Otherwise the system relies on line icons, not emoji.

**Local specifics:** Payments support **Tarjeta** and **Yappy** (Panama's mobile-pay
rail). Domains reference real municipal concepts: impuesto de circulación (placa), IBI,
Aviso de Operación, Paz y Salvo municipal.

---

## VISUAL FOUNDATIONS

**Color.** Blue `#0051FF` drives every action and is the brand color. Mint `#04D69C` is a
vivid accent (and success family). Navy `#12295F` / Night `#0E1B2B` provide dark surfaces
and text. Concrete `#B8C2BB` and Fog `#E6EAED` are the neutral canvas; the page sits on a
cool off-white `#EEF1F4`. **Semantic set is deliberately minimal** — four roles
(primary/success/warning/error), each exactly one accent + one tinted surface, all audited
to WCAG AA. Fewer variations = more consistency.

**Imagery & backgrounds.** Predominantly flat, solid brand-color surfaces — no photography
in the core UI. The hero uses a solid Blue with a single soft **radial mint glow** in the
corner. No gradients on components; the only gradient in the spec is that decorative hero
glow (and a dark thumbnail placeholder for image attachments). Backgrounds are calm and
flat; color does the work.

**Type.** Mirinda Sans (→ Plus Jakarta Sans) for everything. Extrabold (800) for display,
Bold (700) for display-L/H1, Semibold (600) for H2, Regular (400) for body. Display sizes
carry tight tracking (-.02em); body is 16/1.5. Numbers use tabular figures.

**Spacing & layout.** Base-4 rhythm (4/8/12/16/24/32/48/64). Mobile screen margin 24.
Mobile-first, single-column. One primary button per screen.

**Corner radii — generous, inherited from branding.** `sm` 12 (inputs), `md` 16 (tiles),
`lg` 20 (cards), `xl` 28 (heroes/panels), `pill` 999 (buttons & chips). Buttons are always
fully pill-shaped.

**Cards.** White surface, `1px solid --line` (#D5DCE2) border, `lg` (20px) radius. Resting
elevation is a soft downward shadow (`--shadow`); overlays/toasts use `--shadow-lg`. Chat
payment/receipt cards combine the border **and** `--shadow`.

**Borders & dividers.** Hairline `--line` for card borders and list dividers; dashed
`--line` for separators inside receipts and for system chips / empty states. Ghost button
uses a 2px Blue border.

**Shadows.** Two-step system only — `--shadow` (resting card) and `--shadow-lg` (lifted
overlay). No colored shadows except the voice orb's layered Blue focus rings
(`0 0 0 10px rgba(0,81,255,.16)`…) which act as a glow, not elevation.

**Transparency & blur.** Used for chrome: the sticky header is `rgba(page,.82)` with a
14px backdrop blur; hero pills are translucent white over Blue. UI content itself stays
opaque.

**Chat surfaces.** Assistant bubbles = Fog with a **3px mint left edge**, asymmetric radius
(`20 20 20 6`). User bubbles = solid Blue, mirrored radius (`20 20 6 20`). System messages
= centered dashed pill.

**Hover / press / states.** Buttons darken on interaction: primary `#0051FF` → hover
`#0043D6` → active `#0037B0`; disabled = Fog bg `#EEF1F4` / muted text `#7C8794`. Chips
hover to a Blue outline + Blue text. Fields focus to a Blue border + `0 0 0 3px
rgba(0,81,255,.14)` ring; error = red border + helper text. Loading = spinner in a slightly
darker primary.

**Animation.** Subtle and functional: `.15s ease` color transitions on interactive
elements; a short press scale. Product-specific loops — the typing indicator (dot blink),
the voice equalizer bars, and the button spinner. No bouncy or flashy motion.

**Badges.** Pill status chips with a leading colored dot, drawn from the semantic surfaces:
pending (warning), processing (primary), paid/done (success), overdue (error). Mapped per
domain — Pagos: Pendiente/Pagado/Vencido · Trámites: Pendiente/En proceso/Resuelto ·
Reportes: En proceso/Resuelto.

---

## ICONOGRAPHY

**Style:** Custom **line icons** on a 24px grid, **stroke 1.7**, `fill: none`, round
caps/joins, soft corners. Stroked in Navy on light surfaces, `currentColor` elsewhere.
They cover the MVP domains: pagos, trámites, reportes, placa, IBI, paz y salvo, cámara,
ubicación, adjuntar, historial, alertas, perfil — plus UI glyphs (mic, enviar, check,
cerrar, advertencia, info, útil, imagen, chat).

**Implementation:** The spec defines these as **inline SVG paths** (not an icon font, not a
third-party set). We ship them as the `Icon` component (`components/core/Icon.jsx`), which
holds the exact paths from the spec in `HATILLO_ICONS` and renders them at the brand stroke.
Add glyphs by extending that map — do **not** substitute a CDN icon set, since the brand
look depends on these specific hand-drawn paths.

**Emoji as icons:** Only the single directional 👇 in assistant copy (see Content
Fundamentals). No emoji in chrome, tiles, or buttons. No Unicode dingbats used as icons.

**Assets:** No raster logos/illustrations were provided; `assets/` is intentionally empty
until the official mark and any brand imagery are supplied.

---

---

## DESIGN PRINCIPLES (how to build with Hatillo)

**Make it tweakable.** Any prototype or mock built from this system should support Tweaks.
If the user names what to tweak, do that; otherwise expose a few high-impact values — key
brand color, a layout/state variant, a feature flag, headline copy. Keep the panel small,
titled "Tweaks", hidden when Tweaks is off. The `asistente` UI kit ships the reference
pattern (`TweaksPanel` + `useTweaks()` in `ui_kits/asistente/App.jsx`): sensible defaults,
`TweakRadio`/`TweakToggle`/`TweakSelect` grouped under `TweakSection`s. It already carries
tweaks for account state (Con deudas / Al día), the notification dot, Skeletons (loading),
and Sin conexión (offline). Reserve tweaks for what in-place editing can't do — behavior,
alternate treatments, one flag that flips copy/color across many elements.

**Hold the craft bar.** Even inside the brand, favor intentional composition (asymmetry,
overlap, generous negative space or controlled density) over timid, evenly-spaced defaults.
Use the brand's own atmosphere first: the hero mint glow, flat solid Blue/Navy/Night
surfaces, the isotipo, line icons. Motion belongs at high-impact moments — one orchestrated
load with staggered reveals beats scattered micro-interactions — and must respect
`prefers-reduced-motion`. Keep type on the Mirinda Sans scale (Display 800 protagonists,
Body 400/16, Etiqueta 700/12 uppercase). Match effort to the surface: a receipt is restraint
and precision; onboarding can be atmospheric. Never fall back to off-brand web tropes
(Inter/Arial, purple gradients, emoji cards, rounded-box-with-left-accent).

---

## Components

- **core/** — `Button`, `IconButton`, `Chip`, `Badge`, `Icon`
- **forms/** — `Field`, `PhoneField`, `OtpInput`, `CountrySelector`
- **feedback/** — `Alert`, `Toast`, `EmptyState`
- **chat/** — `ChatBubble`, `TypingIndicator`, `VoiceState`, `ToneToggle`, `QuickReplies`, `FeedbackButtons`
- **navigation/** — `BottomNav`
- **cards/** — `ServiceTile`, `PaymentCard`, `DomainCard`, `Accordion`, `Receipt`

Each component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one
`@dsCard` showcase HTML.

## Foundations (Design System tab cards)
- **Colors** — Brand palette, Semantic roles, Interactive states (`guidelines/color-*.card.html`)
- **Type** — Display & headings, Body & label (`guidelines/type-*.card.html`)
- **Spacing** — Spacing scale, Corner radii, Elevation (`guidelines/spacing-*.card.html`)
- **Brand** — Wordmark lockups, Voice & tone (`guidelines/brand-*.card.html`)

## UI Kits
- **ui_kits/asistente/** — Asistente Municipal, a full-bleed, responsive, interactive
  click-through of the whole product: onboarding → phone login (country picker, OTP,
  email) → home → chat with embedded **pago / trámite / reporte / FAQ** flows → voz →
  historial → perfil. See its `README.md`.

## Index (root manifest)
- `styles.css` — global entry (only `@import`s).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `components/` — reusable primitives (see above).
- `guidelines/` — foundation specimen cards.
- `ui_kits/` — full-product recreations.
- `SKILL.md` — Agent-Skill wrapper.
- `uploads/` — original v1 spec source.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated; do not edit.
