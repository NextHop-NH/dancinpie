# 🍕 DancinPie

A landing site for **DancinPie** — wood-fired pizza that makes you dance.

Static site, no build step, no dependencies. Just open it.

## Stack

- Plain HTML / CSS / JS (zero dependencies)
- Google Fonts: Fraunces (display) + Bricolage Grotesque (body)
- Menu data lives in `script.js` (`MENU` array) — edit there to change items/prices

## Run it

```bash
# any static server works, e.g.
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html`.

## Structure

```
dancinpie/
├── index.html      # markup + sections (hero, menu, story, visit, footer)
├── styles.css      # all styling + animations
├── script.js       # menu rendering, scroll reveals, footer year
├── assets/         # drop images/logo here
└── README.md
```

## Customise

- **Menu**: edit the `MENU` array in `script.js`
- **Colors / theme**: CSS variables at the top of `styles.css` (`:root`)
- **Hours / address / phone**: in the "Visit" section of `index.html`
- **Order button**: currently a demo — wire `#order .btn-solid` to your
  ordering platform (Glovo, Wolt, a form, etc.)

## Next ideas

- Real online-ordering integration
- Cart + checkout (would need a framework/backend)
- Photo gallery in `assets/`
- i18n: Macedonian / English toggle

---

Made with extra cheese.
