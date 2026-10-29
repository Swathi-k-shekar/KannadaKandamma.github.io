# KannadaKandamma website refresh

This is a self-contained static-site bundle based on the supplied HTML, CSS, JavaScript, logo, and background images. Open `index.html` directly, or upload the folder contents to a static web host.

## Files

- `index.html` — page structure and the existing KannadaKandamma content
- `Homepage.css` — responsive Fire and Water styling
- `Homepage.js` — portfolio cards and safe handling of saved content
- `assets/logo.png` — KannadaKandamma logo, used in the header, hero artwork, footer, and favicon
- `assets/` — the supplied backgrounds for the home, portfolio, and contact sections

The portfolio presents five writing offerings: `WEBSERIES EDITION`, `MOVIESCRIPT`, `GENZ POEMS`, `SONGS`, and `NOVEL`. A sixth card links to the technical site supplied by the user: https://swathi-k-shekar.github.io/Swathi.github.io/

The existing contact links and localStorage key, `contentItemsDarkFantasy_v5`, are retained. Known starter entries from the earlier version are migrated to the new portfolio cards while other saved entries are preserved. Portfolio text is rendered as text rather than injected as HTML.
