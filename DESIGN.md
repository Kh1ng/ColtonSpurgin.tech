---
name: Colton Spurgin Portfolio
description: A quiet, confident portfolio built around credible technical work.
colors:
  after-hours-navy: "#0B0D12"
  workbench-surface: "#151922"
  workbench-blue: "#3B82F6"
  instrument-cyan: "#06B6D4"
  task-light: "#F3F4F6"
  cool-steel: "#9CA3AF"
  button-text: "#FFFFFF"
  chip-surface: "rgba(255, 255, 255, 0.03)"
rounded:
  image: "6px"
  control: "8px"
  pill: "999px"
spacing:
  compact: "8px"
  standard: "16px"
  grid: "20px"
  section: "32px"
components:
  button-primary:
    backgroundColor: "{colors.workbench-blue}"
    textColor: "{colors.button-text}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  button-code:
    backgroundColor: "transparent"
    textColor: "{colors.task-light}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  card-project:
    backgroundColor: "{colors.workbench-surface}"
    textColor: "{colors.task-light}"
    rounded: "{rounded.control}"
    padding: "0"
  chip-tech:
    backgroundColor: "{colors.chip-surface}"
    textColor: "{colors.task-light}"
    rounded: "{rounded.pill}"
    padding: "4px 8px"
---

# Design System: Colton Spurgin Portfolio

## Overview

**Creative North Star: "The Night Shift Workbench"**

The incumbent system resembles a focused workspace after hours: dark navy surfaces, cool blue instruments, and only the controls needed to inspect the work. It should feel quiet and confident. Trust comes from clear evidence and restrained presentation, not decoration.

The palette, compact structure, and interaction model form the useful core of the current identity. Typography is provisional because the current serif mix came from browser defaults rather than a deliberate choice.

**Key Characteristics:**

- Near-black navy canvas with one blue signal color and a cyan hover accent.
- Compact cards and controls that keep project evidence close together.
- Subtle structural depth tied to surfaces and interaction states.
- Direct presentation with little ornamental content.

## Colors

The palette uses After-Hours Navy and Workbench Surface as its base, Workbench Blue for primary emphasis, Instrument Cyan for secondary interaction feedback, and cool neutrals for readable content.

### Primary

- **Workbench Blue:** Marks the name, links, and primary actions.

### Secondary

- **Instrument Cyan:** Appears as a restrained hover signal rather than a competing accent.

### Neutral

- **After-Hours Navy:** Fills the page background.
- **Workbench Surface:** Separates project cards from the page.
- **Task Light:** Carries primary text and icons.
- **Cool Steel:** Carries supporting copy and metadata.

### Named Rules

**The Signal Earns Attention Rule.** Reserve blue and cyan for identity, navigation, and actions. The dark neutral field should remain dominant.

## Typography

The current display name uses Georgia while most body content falls back to the browser's default serif. This pairing is implementation history, not a brand commitment. A redesign may replace it with a deliberate display and body system.

### Named Rules

**The No Accidental Fonts Rule.** Future typography must define both display and body roles explicitly before it becomes part of the design system.

## Layout

The home page centers one introduction within a full-height viewport. The project index uses a 72rem container with 32px outer padding and a 20px grid gap. It shifts from one column to two at 640px and three at 1024px. Long-form project material uses a narrower 64rem reading container.

Spacing is compact inside controls and cards, then expands between sections. Mobile adjustments begin at 820px and 520px. The project grid also refines card sizing at 1280px.

## Elevation & Depth

The system uses shadows as quiet structural separation. Cards and buttons receive a low ambient shadow at rest. Hover states increase lift only enough to confirm interactivity; depth should never become decorative or glossy.

### Shadow Vocabulary

- **Ambient Surface** (`0 6px 18px rgba(0, 0, 0, 0.45)`): Separates cards and controls from the navy canvas.
- **Interactive Lift** (`0 18px 42px rgba(0, 0, 0, 0.55)`): Confirms a project card hover.
- **Blue Response** (`0 10px 26px rgba(37, 99, 235, 0.28)`): Supports the primary action hover.

### Named Rules

**The Structural Shadow Rule.** Use elevation to explain layers or interaction. Do not add shadows to decorate empty space.

## Shapes

Cards and controls use gently curved 8px corners. Project images use 6px corners where they meet card surfaces. Technology labels use a full pill radius. Borders are faint and secondary to tonal layering.

## Components

### Buttons

- **Shape:** Compact controls with gently curved corners (8px).
- **Primary:** Workbench Blue with light text and a darker vertical gradient.
- **Hover / Focus:** Small upward movement and a restrained blue shadow. Future revisions must add a visible keyboard focus treatment.
- **Code:** Transparent with a faint neutral border and light text.

### Chips

- **Style:** Small technology labels use a nearly transparent light surface, light text, compact padding, and a pill silhouette.

### Cards / Containers

- **Corner Style:** Gently curved corners (8px) with clipped media.
- **Background:** Workbench Surface over After-Hours Navy.
- **Shadow Strategy:** Ambient at rest and slightly stronger on hover.
- **Border:** A faint white border separates adjacent dark values.
- **Internal Padding:** The card shell is flush; its body uses 16px.

### Social Links

Social links use large light icons without containers. Their color changes to Instrument Cyan on hover through the global link treatment.

## Do's and Don'ts

### Do:

- **Do** keep the dark neutral field dominant and reserve accent color for meaningful signals.
- **Do** use structural depth to distinguish surfaces and confirm interaction.
- **Do** keep project evidence scannable through compact cards, short labels, and predictable actions.

### Don't:

- **Don't** treat the current serif fonts as a permanent identity choice.
- **Don't** add extra accent hues without revisiting the palette as a system.
- **Don't** stack shadows, gradients, or borders when one structural cue already explains the layer.
