---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/pages/Welcome.jsx","src/pages/TravelingSalesman.jsx","src/index.css"]
---

# Portfolio redesign

Approved comp: `.impeccable/mocks/decision/reroll2-canon.webp`

## Composition

A sticky profile column occupies roughly 30% of the desktop viewport. The right side is one scrolling record: interests, experience, selected work, then contact. The desktop comp is a structural reference, not permission to rasterize text or controls. Its generic icons become accessible icons from the installed icon set. On mobile, the profile joins normal flow above the record.

## Visual system

- Ground: sampled `#020D1B`; left profile field: sampled `#121C2A`.
- Primary text: sampled `#EDF1F4`; muted text: sampled `#9AA4A9`.
- Accent: sampled teal range `#7FC3BF` to `#9FD3D4`.
- Dividers and quiet fields: sampled `#2F3946`.
- System sans; 44px desktop name, 22px descriptor, 18px body, 30px section heads, 15–16px supporting text.
- Corners stay square. Lines are 1px. Elevation is tonal only; no shadows or floating cards.
- Interaction is a soft field wash plus color shift. Motion is 160–220ms with no overshoot and is disabled under reduced motion.

## Ingredient inventory

| Ingredient | Medium | Commitment |
| --- | --- | --- |
| Page ground and split desktop composition | semantic HTML/CSS | Full-height navy-black field; sticky left column and scrolling right record |
| Name, factual introduction, and social links | semantic HTML/CSS | Ordinary language, no slogan, no button |
| Section navigation | semantic anchors + CSS | Interests, Experience, Work, Contact; visible focus and current-section state |
| Experience rows | semantic HTML + installed React Icons | Lead software internship, Air Force medical service, and combined UWF education and research |
| Work rows | semantic HTML/CSS | Text-first records for Git Agent Harness, trainerd, Traveling Salesman benchmarks, and the home lab |
| Traveling Salesman report | semantic article HTML/CSS | Inherits the same type, color, focus, table, and responsive rules |
| Hover and focus states | CSS | Soft background wash; 2px focus ring; 44px minimum interactive targets |
| Responsive layout | CSS | Two columns above 900px; one-column document below; no horizontal overflow |

## Content boundaries

Do not invent organization names, outcomes, metrics, client claims, or dates. Keep Git Agent Harness, trainerd, Traveling Salesman benchmarks, and Home lab descriptions tied to their repositories. The logo stays removed.
