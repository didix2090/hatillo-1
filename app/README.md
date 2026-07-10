# UI Kit — Asistente Municipal (Hatillo)

Interactive, full-bleed, responsive click-through of Hatillo's core product: a
mobile-first conversational assistant for the Municipio de Panamá. Built entirely on
the design-system components. Fills the whole viewport and reflows fluidly (mobile →
tablet → desktop) via `clamp()` typography, `auto-fit` grids, and a `useIsWide()` hook.

## Flow (connected)
1. **Onboarding (Get Started)** — blue hero (brand mark, orbit art, "Redescubre tu ciudad. Hatillo
   en tu bolsillo") + a bottom sheet (desktop: side card) with the sign-in options, phone-first:
   **Continuar con teléfono** (primary) · **Continuar con correo** · Apple · Google (icons).
2. **Teléfono** — minimal `PhoneField` ("¿Cuál es tu número?") with country flag/dial; typing a
   different `+dial` auto-switches the flag (`detectCountry`). → OTP.
3. **Selección de país** — `CountrySelector` (search + full flag list).
4. **Correo** — minimal email entry ("¿Cuál es tu correo?"). → OTP.
5. **OTP** — 6-box `OtpInput` with resend timer. Only for phone & email; Apple/Google skip it.
6. **Home** — bell-only header (red dot = novedad); protagonist Display title
   "¡Hola, {nombre}! ¿En qué te puedo ayudar hoy?"; **status bar** with a switchable
   Tweak (`homeStatus`): *Con deudas* (dark Night, mint "PENDIENTE" + "Pagar ahora") or
   *Al día* (success tint + "Ver constancia"); small scrollable chip row. No text input —
   the conversation opens from the nav's center FAB. Currency is always `$`.
7. **Chat** — name capture on first run, bubbles, `QuickReplies`, typing, `FeedbackButtons`.
   Embedded flows:
   - **Pago** → saldo `PaymentCard`s → `PaymentSheet` (card/Yappy) → `Receipt` + toast + Pagado.
   - **Trámite** → guided in-chat form (cédula · actividad · dirección) → `DomainCard`.
   - **Reporte** → photo → auto-analysis → confirm → mini-map pin → `DomainCard` + toast.
   - **FAQ** → `Accordion`.
8. **Voz** — full-screen `VoiceState` overlay.
9. **Historial** — grouped list + search + empty state.
10. **Perfil** — user, live **tone** preview (tú/usted/directo), payment methods, notifications, help.
Bottom nav: **Inicio · Historial · [FAB] · Perfil** — the elevated center FAB (blue,
sparkle) opens a new conversation, with a secondary mic for voice. Hidden inside chat & voice.

## Files
- `index.html` — loads the bundle + all screen scripts, renders `AppRoot`.
- `AppShell.jsx` — full-viewport shell + `useIsWide()`.
- `data.jsx` — sample saldos, chips, FAQs, historial, métodos (`window.HatilloData`).
- `Auth.jsx` — brand mark + Onboarding / Login / CountryPicker / Email / OTP.
- `ChatThread.jsx` — conversation thread, flow engine, PaymentSheet, mini-map.
- `Shell.jsx` — Home / Historial / Perfil tabs.
- `App.jsx` — router + Voice overlay.

## Notes
- **Brand mark** is a simple geometric interpretation of the described isotype (a house
  with a negative "1") — replace with the official asset.
- Provider buttons (Google/Apple) use neutral placeholder glyphs, not official logos.
- Namespace: `window.HatilloDesignSystem_5bedaa`.
