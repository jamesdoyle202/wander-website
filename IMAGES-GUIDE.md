# Image Guide — Which Photos Go Where

Put all images in the **`images/`** folder. Use these exact filenames, or update the `src` in each HTML file to match yours.

---

## Home Page (index.html)

| Filename | Where it appears |
|----------|------------------|
| **hero.jpg** | Big banner at the top — game art, cover, or hero shot |
| **gallery-1.jpg** | Left of the 3-image row — game art or scene |
| **gallery-2.jpg** | Middle of the 3-image row — character art or detail |
| **gallery-3.jpg** | Right of the 3-image row — board, pieces, or landscape |

---

## About Page (about.html)

| Filename | Where it appears |
|----------|------------------|
| **JenxWill.jpg** | First big photo — with caption below |
| **JamesxBen.jpg** | Second big photo — with caption below |
| **Isaac_garden.jpg** | Third big photo — with caption below |

---

## Process Page (process.html)

| Filename | Where it appears |
|----------|------------------|
| **process-1.jpg** | Concept & Design — sketches, notebooks, ideas |
| **process-2.jpg** | Art & World-Building — Jen’s art, illustrations in progress |
| **process-3.jpg** | Playtesting — playtesting, prototypes on the table |

---

## Quick Reference

```
images/
├── hero.jpg        ← Home: top banner
├── gallery-1.jpg   ← Home: gallery left
├── gallery-2.jpg   ← Home: gallery middle
├── gallery-3.jpg   ← Home: gallery right
├── about-1.jpg     ← About: first big photo
├── about-2.jpg     ← About: second big photo
├── process-1.jpg   ← Process: concept/sketches
├── process-2.jpg   ← Process: art in progress
└── process-3.jpg   ← Process: playtesting
```

**Using different filenames?** Update the `src` in the HTML. Example: if your hero is `wander-cover.png`, change `src="images/hero.jpg"` to `src="images/wander-cover.png"` in `index.html` line 31.
