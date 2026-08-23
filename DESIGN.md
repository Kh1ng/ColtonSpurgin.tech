---
name: Colton Spurgin Portfolio
description: A dark, direct portfolio with a split record layout and restrained teal state signals.
colors:
  deep-navy: "#020d1b"
  slate-navy: "#121c2a"
  cool-white: "#edf1f4"
  cool-gray: "#9aa4a9"
  quiet-teal: "#9fd3d4"
  signal-teal: "#7fc3bf"
  blue-gray-line: "#2f3946"
  teal-wash: "rgba(127, 195, 191, 0.075)"
typography:
  display:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 5rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  profile-name:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 3.2vw, 3.2rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.35rem)"
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  report-headline:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.55rem, 2.4vw, 2rem)"
    fontWeight: 620
  report-subhead:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
  title:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
  body:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.65
  profile-role:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.05rem, 1.45vw, 1.35rem)"
    lineHeight: 1.5
  intro-body:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.05rem, 1.35vw, 1.18rem)"
    lineHeight: 1.65
  experience-body:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.96rem"
    lineHeight: 1.6
  email-link:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)"
  label:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    lineHeight: 1.5
  technology-label:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.82rem"
  footer:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.85rem"
rounded:
  square: "0"
spacing:
  compact: "0.75rem"
  standard: "1rem"
  section: "clamp(2.5rem, 4vw, 3.5rem)"
  outer: "clamp(2.75rem, 4vw, 4rem)"
components:
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.cool-gray}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    height: "44px"
  navigation-link-active:
    textColor: "{colors.cool-white}"
  experience-row:
    backgroundColor: "transparent"
    textColor: "{colors.cool-white}"
    rounded: "{rounded.square}"
    padding: "1rem 0"
  experience-row-hover:
    backgroundColor: "{colors.teal-wash}"
  work-row:
    backgroundColor: "transparent"
    textColor: "{colors.cool-white}"
    rounded: "{rounded.square}"
    padding: "1.6rem 0"
  work-row-hover:
    backgroundColor: "{colors.teal-wash}"
---

# Design System: Colton Spurgin Portfolio

## Overview

**Creative North Star: "The Canon Portfolio"**

The system presents Colton as a record of current work and roles, not a campaign. A slate profile field fixes identity and navigation beside a deep navy reading field on desktop. Mobile restores one continuous document. Factual copy, text-first work records, and hairline separators carry the hierarchy without a logo, slogan, or card grid.

Color and state changes stay quiet. Teal marks links, metadata, icons, and current navigation. Rows receive a faint teal wash on hover or focus. The result is dark, confident, and structural without turning the portfolio into a themed interface.

**Key Characteristics:**

- Two flat navy fields form the desktop split.
- A system sans type ramp keeps biography, work, and technical reporting in one voice.
- Hairline dividers and tonal shifts replace shadows and floating containers.
- Teal appears as a state signal, not decoration.
- Text-first work records keep systems projects legible without forced thumbnails.

## Colors

Deep and slate navy fields hold the page. Cool white and gray separate primary facts from supporting copy, while two close teals handle identity and interaction.

### Primary

- **Quiet Teal:** Marks links, the profile role line, report metadata, and current navigation.
- **Signal Teal:** Marks experience icons, technology lines, text selection, and stronger interaction feedback.
- **Teal Wash:** Gives experience and work rows a low-contrast hover or focus field.

### Neutral

- **Deep Navy:** Fills the scrolling record and the long-form report.
- **Slate Navy:** Separates the profile field from the record without elevation.
- **Cool White:** Carries names, headings, row titles, and emphasized report text.
- **Cool Gray:** Carries biography, descriptions, inactive navigation, captions, and footer text.
- **Blue-Gray Line:** Draws all dividers, media borders, and the custom scrollbar.

### Named Rules

**The Signal State Rule.** Use teal for identity, links, metadata, icons, and interactive state. Keep the navy fields dominant and do not introduce a competing accent.

## Typography

**Display Font:** System sans with native platform fallbacks
**Body Font:** System sans with native platform fallbacks

**Character:** The same sans stack carries the portfolio and technical report. Tight display spacing gives names and report titles weight. Body text stays open and readable.

### Hierarchy

- **Display** (650, responsive up to 5rem, 1.02 line height): Used for the Traveling Salesman report title. The profile name uses the same weight, spacing, and line height at a smaller responsive size.
- **Headline** (620, responsive up to 2.35rem, 1.15 line height): Used for portfolio section headings. Report section headings use a slightly smaller responsive range.
- **Title** (600, 1.05rem): Used for experience and work titles. Report table headings use the same weight.
- **Body** (regular, 1rem base, 1.65 line height): Used for biography and long-form content. Main portfolio paragraphs rise slightly with viewport width and stop at 68 characters.
- **Label** (regular, 0.82rem to 0.9rem, 1.5 line height): Used for technology lines, row descriptions, work links, captions, and footer text.

### Named Rules

**The One Sans System Rule.** Let every route inherit the root system stack. Create hierarchy with size, weight, spacing, and color instead of adding another typeface.

## Layout

Desktop uses a two-field grid capped at 100rem. The profile field occupies 29% with a 20rem minimum and stays fixed to the viewport. The record fills the remaining width, while each section stops at 58rem. The left field uses responsive outer padding. The right field uses the same vertical rhythm with a wider horizontal range.

The profile joins document flow at 900px. Navigation changes from a vertical rail to wrapped text links, then the record follows below it. Work rows move from two columns to one at 640px. Interactive links keep a 44px minimum target on every viewport.

The report uses a centered 72rem container and limits reading sections to 70 characters. Its table can scroll horizontally rather than compressing below its 32rem minimum width.

### Named Rules

**The Two-Field Rule.** Use one flat field for durable identity and one for the changing record. On narrow screens, keep their order and let both fields return to normal document flow.

## Elevation & Depth

The system uses no shadows. The slate profile field, deep navy record, 1px hairlines, and low-opacity interaction wash explain structure. Nothing floats above the page.

### Named Rules

**The Flat Record Rule.** Separate content with field color, hairlines, and spacing. Do not use gradients, shadows, or lifted cards.

## Shapes

The form language is square. Rows, links, and fields use no corner radius. Line icons use thin strokes and follow the same teal state language as text links.

### Named Rules

**The Plain Evidence Rule.** Present systems work through precise descriptions, technology labels, and direct links. Add imagery only when the project has a useful visual artifact.

## Components

### Navigation

- **Section links:** Vertical on desktop and inline below 900px. Each link has a 44px minimum height.
- **State:** Inactive links use Cool Gray. Hover, focus, and current-section states move to Cool White. The desktop hairline grows from 1.5rem to 2.4rem and turns Quiet Teal.
- **Focus:** Every link receives a 2px Quiet Teal outline with a 4px offset.

### Social Links

- **Style:** Small line icons sit beside plain labels without boxes or background fills.
- **State:** Links change from Cool Gray to Cool White on hover and focus.
- **Layout:** The group wraps when needed and sits at the bottom of the sticky profile on desktop.

### Experience Rows

- **Structure:** A thin teal icon precedes a factual title and short description.
- **Border:** Each row sits between 1px Blue-Gray hairlines.
- **State:** Hover adds the Teal Wash without movement or elevation.

### Work Rows

- **Structure:** A project summary, technology line, and honest link state share one text-first row.
- **Border:** Each row ends with a 1px Blue-Gray line.
- **State:** Hover and focus within add the Teal Wash. Links remain plain teal text with small external-link icons.
- **Responsive:** The row moves from two columns to one at 640px.

### Report Tables

- **Style:** Tables collapse borders and use tabular numerals. Headers use Cool White and body cells use Cool Gray.
- **Structure:** A 1px line separates every row. Captions align left and retain the body reading rhythm.
- **Overflow:** The wrapper scrolls horizontally when the viewport cannot hold the 32rem table width.

## Do's and Don'ts

### Do:

- **Do** keep the profile and record as flat, adjacent fields on desktop.
- **Do** use hairlines, spacing, and a faint teal wash to explain hierarchy and state.
- **Do** keep project evidence text-first and tied to source code or a useful report.
- **Do** use ordinary labels and direct self-representation throughout the portfolio.

### Don't:

- **Don't** add a logo, slogan, promotional hero, or generic call to action.
- **Don't** turn experience or work rows into rounded floating cards.
- **Don't** add shadows, gradients, neon, glass, or a themed interface.
- **Don't** use teal as a broad fill when a line, icon, or text state is enough.
- **Don't** force a thumbnail onto software that has no useful visual artifact.
