# 🍕 Dancin' Pie

Landing + menu site for **Dancin' Pie** — Detroit & Tavern style pizza.
Built from a **Claude Design** handoff. Static, zero-dependency, no build step.

Navy `#16314E` + red `#C4202A` on warm cream, with the retro walking-slice
mascot, rounded **Fredoka** display type, and a MotoPizza-style menu layout.

## Sections

Sticky nav → split hero (mascot on a dashed-ring "plate" + floating pepperoni)
→ scrolling tavern marquee → **Detroit Square vs Tavern Thin** explainer →
**the menu** (9 pies) → two locations with hours → footer.

### Interactions
- **Bilingual EN / MK** toggle in the nav — full Macedonian translation, remembered
  in `localStorage` (defaults to browser language). All copy lives in the `I18N`
  dictionary in `script.js`; markup carries `data-i18n` / `data-i18n-html` hooks.
  Pizza names stay in English as brand/product names.
- **Filter tabs** — All / Detroit Square / Tavern Thin / Plant-Based
- **Solo ↔ Sharable** price toggle with a sliding knob (swaps every card's price)
- **Currency** — prices are stored in USD (`data-solo` / `data-share`); the MK
  site auto-converts to **denari (ден)** at the rate in `script.js` (`MKD_PER_USD`)
- Mobile hamburger menu

## Stack

- Plain HTML / CSS / JS — **zero dependencies, no build**
- Google Fonts: **Fredoka** (display), **Bricolage Grotesque** (labels/buttons), **DM Sans** (body)
- Brand logos are transparent PNGs in `assets/`

## Run it

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Or just double-click `index.html`.

## Structure

```
dancinpie/
├── index.html          # all sections + menu content (edit pizzas/prices here)
├── styles.css          # the Dancin' Pie visual system
├── script.js           # mobile nav, filter tabs, Solo/Sharable toggle
├── assets/
│   ├── logo-red.png    # primary two-tone mascot (nav + hero)
│   ├── logo-white.png  # mono mascot for dark sections (locations + footer)
│   └── logo-navy.png   # mono navy variant
└── README.md
```

## Make it your own

- **Menu** — each pizza is an `<article class="pz">` in `index.html`. Edit the
  name, description, ingredients, badges, and the `data-solo` / `data-share`
  prices (the toggle reads those numbers).
- **Menu photos** — live in `assets/menu/` as `pz1.webp`…`pz9.webp`, shown via
  `<img class="pz-photo">` (transparent, `object-fit: contain` on the card's
  cream). Drop in your own images with the same filenames to swap them.
- **Locations / hours** — in the `#locations` section of `index.html`.
- **Colors** — CSS variables at the top of `styles.css` (`:root`). `--accent`
  drives the primary buttons and the toggle knob.
- **Ordering** — the **Order Now / Order Pickup** buttons open the venue's
  Google Maps listing (`maps.app.goo.gl/…` in `index.html`). Nav/footer/social
  links are still `#` placeholders — point them at your real profiles.

### Layout variants (from the original design's "Tweaks" panel)

The `<body>` carries `data-hero`, `data-cards`, and `data-texture` attributes and
the matching CSS is included, so you can flip the look without writing CSS:

- `data-hero="center"` — centered hero instead of split
- `data-cards="ticket"` — text-only "menu ticket" cards (no photos), 2-up
- `data-cards="list"` — compact single-column list
- `data-texture="off"` — remove the pepperoni dot texture

## Notes

- Menu copy, prices, addresses and hours are tasteful **placeholders** — swap in
  the real details before launch.
- ⚠️ **Photo credit / copyright** — the menu photos in `assets/menu/` are
  **MotoPizza's** product images, pulled in as placeholders to populate the
  layout. Replace them with your own or properly licensed photography before any
  real/public use.
- Implemented faithfully from the design; the design tool's drag-to-drop photo
  slots and live "Tweaks" editor panel were intentionally left out (they're
  authoring tools, not part of the shipped site).

---

Made fresh in Detroit, Michigan. 🍕
