---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/pages/Welcome.jsx","src/pages/TravelingSalesman.jsx","src/index.css"]
---

# Portfolio redesign

Approved comp: `.impeccable/mocks/decision/reroll2-canon.webp`

## Composition

A sticky profile column occupies roughly 30% of the desktop viewport. The right side is one scrolling record: about, experience, selected work, then contact. The desktop comp is a structural reference, not permission to rasterize text or controls. Its tiny placeholder screenshots become real project thumbnails; its generic icons become accessible icons from the installed icon set. On mobile, the profile joins normal flow above the record.

## Visual system

- Ground: sampled `#020D1B`; left profile field: sampled `#121C2A`.
- Primary text: sampled `#EDF1F4`; muted text: sampled `#9AA4A9`.
- Accent: sampled teal range `#7FC3BF` to `#9FD3D4`.
- Dividers and quiet fields: sampled `#2F3946`.
- System sans; 44px desktop name, 22px descriptor, 18px body, 30px section heads, 15–16px supporting text.
- Corners stay square except 2px media crops. Lines are 1px. Elevation is tonal only; no shadows or floating cards.
- Interaction is a soft field wash plus color shift. Motion is 160–220ms with no overshoot and is disabled under reduced motion.

## Ingredient inventory

| Ingredient | Medium | Commitment |
| --- | --- | --- |
| Page ground and split desktop composition | semantic HTML/CSS | Full-height navy-black field; sticky left column and scrolling right record |
| Name, factual introduction, and social links | semantic HTML/CSS | Ordinary language, no slogan, no button |
| Section navigation | semantic anchors + CSS | About, Experience, Work, Contact; visible focus and current-section state |
| Experience rows | semantic HTML + installed React Icons | Three factual roles plus UWF education context; no invented employer names or metrics |
| Work rows | semantic HTML/CSS | Four rows with title, plain description, technologies, and honest link availability |
| Project thumbnails | existing-raster derivatives | Four 480×270 WebP files in `src/assets/portfolio/`, each with source provenance |
| Traveling Salesman report | semantic article HTML/CSS | Inherits the same type, color, focus, table, and responsive rules |
| Hover and focus states | CSS | Soft background wash; 2px focus ring; 44px minimum interactive targets |
| Responsive layout | CSS | Two columns above 900px; one-column document below; no horizontal overflow |

## Content boundaries

Keep internship and university research descriptions high-level. Do not invent organization names, outcomes, metrics, client claims, dates, or details absent from the repository and PRODUCT.md. Keep Bork, VeLLM, Traveling Salesman benchmarks, and Home lab descriptions factual. The logo is removed.
