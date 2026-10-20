---
name: Erinç Polat Portfolio
description: A modern, evidence-led portfolio for a multidisciplinary software developer.
colors:
  canvas: "#FFFFFF"
  surface-dark: "#111827"
  ink: "#111827"
  primary-navy: "#173B6C"
  secondary-brick: "#B94E3A"
  supporting-text: "#5E6673"
  soft-surface: "#F0F3F6"
  field-border: "#D8DEE8"
typography:
  display:
    fontFamily: "Roboto, sans-serif"
    fontSize: "clamp(3rem, 8vw, 8rem)"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Roboto, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  navigation:
    fontFamily: "Barlow Semi Condensed, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "1.3px"
rounded:
  sm: "12px"
  md: "16px"
spacing:
  tiny: "16px"
  small: "32px"
  medium: "64px"
  big: "96px"
components:
  button-accent:
    backgroundColor: "{colors.primary-navy}"
    textColor: "{colors.canvas}"
    height: "40px"
    padding: "8px 24px"
    boxShadow: "none"
  button-submit:
    backgroundColor: "{colors.primary-navy}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    height: "45px"
    boxShadow: "none"
  project-card:
    backgroundColor: "{colors.soft-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.tiny}"
  form-field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
---

# Design System: Erinç Polat Portfolio

## Overview

**Creative North Star: “Quiet technical confidence.”**

The interface is a clean, contemporary, light-first portfolio that earns attention through project imagery, generous whitespace, clear typography, and restrained motion. It should feel modern and technically capable without resembling a generic software dashboard or relying on visual hype.

The geometric POLAT logo establishes a navy-and-brick identity. Deep navy gives the interface authority and makes primary actions feel deliberate; brick adds entrepreneurial energy in restrained signals. White remains dominant so the work stays central and the identity feels established rather than loud.

**Key Characteristics:**

- Spacious, image-led compositions with strong text hierarchy.
- Authority navy for actions and emphasis, with restrained brick signals against white.
- Softly rounded project surfaces with subtle, low-contrast depth.
- Purposeful reveal and scroll motion that never competes with the work.
- Consistent Turkish and English layouts.

## Colors

The palette pairs authoritative navy with entrepreneurial brick, crisp ink typography, and quiet blue-gray surfaces.

### Primary

- **Authority Navy** (`#173B6C`): Primary actions, links, focus rings, and selected headline emphasis. Use white text on filled surfaces.
- **Entrepreneurial Brick** (`#B94E3A`): Logo signal, selected highlights, and restrained identity accents. Use white text when it carries normal-sized text.

### Neutral

- **Canvas White** (`#FFFFFF`): Main page and card background.
- **Authority Ink** (`#111827`): Headings, primary text, and reserved dark surfaces.
- **Supporting Slate** (`#5E6673`): Secondary and explanatory text on white.
- **Soft Surface** (`#F0F3F6`): Secondary actions, image framing, chips, and quiet card surfaces.
- **Field Border** (`#D8DEE8`): Default form-field and quiet component boundary.

### Named Rules

**The Navy Leads Rule.** Navy owns actions, links, focus, and primary emphasis. Brick is a controlled signal for the logo and selected highlights; it never competes with navy as a second primary CTA color.

**The Contrast Rule.** Use white on navy and brick. Supporting Slate is only used on white or equivalently light surfaces; Authority Ink carries primary text.

## Typography

**Display Font:** Roboto, sans-serif  
**Heading Font:** Oswald, sans-serif  
**Body Font:** Roboto, sans-serif  
**Navigation Font:** Barlow Semi Condensed, sans-serif

**Character:** Roboto keeps technical and project content direct and readable. Oswald gives selected section and footer headings a more authored editorial voice, while Barlow Semi Condensed makes the navigation compact and distinctive.

### Hierarchy

- **Display** (700, `clamp(3rem, 8vw, 8rem)`, 1): Name-level hero statements only.
- **Headline** (600, `clamp(2rem, 4vw, 3rem)`, 1.2): Major section and contact statements.
- **Title** (700, `1.5rem`, 1.3): Project and card titles.
- **Body** (400, `1rem`, 1.5): Explanatory copy and project descriptions.
- **Navigation** (400, `1rem`, `1.3px` tracking): Primary navigation labels.

## Layout

Use MUI's centered `lg` containers for primary content. The spatial rhythm follows four large MUI-based steps: 16px, 32px, 64px, and 96px. Sections should breathe on desktop and collapse deliberately on mobile rather than merely shrinking. Project imagery receives visual priority, and text blocks remain left-aligned except where footer composition calls for centered copy.

## Elevation & Depth

The system is flat by default. Depth appears selectively through soft multi-layer shadows on bento-style surfaces, a translucent blurred fixed navigation bar, image overlap, and motion. Avoid generic heavy card shadows.

### Shadow Vocabulary

- **Bento Ambient:** `0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)` for large feature surfaces.
- **Menu Lift:** `0 10px 15px -3px rgba(0,0,0,.1)` for the mobile navigation menu.

### Named Rules

**Flat by default.** Use shadow only to clarify layering, interaction, or a featured composition.

**No button shadows.** Buttons, including CTAs, navigation buttons, and icon buttons, must remain shadow-free in default, hover, pressed, focused, and disabled states. Do not use colored halos or elevation to attract attention to an action. Use color, contrast, borders, and spacing; retain visible focus outlines. This user preference also applies to future components and overrides generic button-elevation examples.

## Shapes

Cards and form fields use soft 12–16px corners. Project image surfaces use 16px corners; bento panels and the contact submit button use 12px. Circular geometry is reserved for icon controls and avatars. Avoid thick decorative borders and excessive pill shapes.

## Components

### Buttons

- **Elevation:** No box shadows in any state. MUI buttons use `disableElevation` by default; component-level styles must not reintroduce shadows.
- **Primary CTA:** Authority Navy background with white text, 40px height, compact rectangular shape.
- **Submit CTA:** Authority Navy background with white text, 12px radius, 45px height.
- **Secondary CTA:** Soft Surface background with Authority Ink text and a Field Border hover.
- **Focus:** Use a visible 3px Authority Navy outline with separation from the component edge.

### InteractiveHoverButton

A compact, shadow-free CTA with a pulsing dot that expands to fill the button on hover or keyboard focus. Reuse this component when a similar animated CTA is requested.

- **Path / import:** `src/components/InteractiveHoverButton/index.tsx` / `@/components/InteractiveHoverButton` (default export).
- **Appearance:** 36px minimum height, pill shape, white resting background, Entrepreneurial Brick text, border, and dot. On interaction, the brick dot fills the button and white text appears with an icon.
- **Motion:** A gentle 2-second dot pulse at rest; 550ms fill transition with the replacement label appearing after a 150ms delay. Pulse stops during interaction. Reduced-motion preferences disable pulse and transitions.
- **Props:** `children` supplies the label; `icon` replaces the default right arrow (use a downward arrow for a link to a lower page section); `pulse` defaults to `true` and can be disabled. Standard MUI Button props are supported, including `href`, `LinkComponent`, `onClick`, `disabled`, `type`, and `sx`; `startIcon` and `endIcon` are replaced by `icon`.
- **Accessibility:** Keyboard focus triggers the effect and retains a visible outline. The duplicate animated label and icon are hidden from assistive technology. The default button type is `button`.
- **Current usage:** Navbar contact CTA on desktop and mobile, with a downward arrow and the localized contact link. Its Barlow Semi Condensed font is supplied by the navbar through `sx`.

```tsx
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";
import { Link } from "@/i18n/routing";

<InteractiveHoverButton
    LinkComponent={Link}
    href="/#contact"
    icon={<ArrowDownwardIcon sx={{ fontSize: 18 }} />}
>
    {t("cta_button_text")}
</InteractiveHoverButton>
```

### Cards / Containers

- **Corner Style:** 12px for bento surfaces and 16px for project media.
- **Background:** White or Soft Surface, chosen to keep imagery primary.
- **Shadow Strategy:** Flat project cards; Bento Ambient only on feature panels.
- **Internal Padding:** 16px for compact content, 32px for feature-card text regions.

### Inputs / Fields

- **Style:** White background, 1px Field Border, Authority Ink text, 16px radius, and 16px horizontal padding.
- **Focus:** 3px Authority Navy outline with a 3px offset.
- **Error:** MUI error color plus field-specific text and accessible field association.

### Navigation

The fixed navigation uses Barlow Semi Condensed at 16px with 1.3px tracking. It stays visually light over a subtle 5px backdrop blur. Desktop links remain quiet; mobile navigation moves into a compact elevated menu with an explicit accessible name and state.

## Do's and Don'ts

### Do:

- **Do** let project imagery and shipped work provide the visual proof.
- **Do** let Authority Navy lead actions, links, and focus.
- **Do** use Entrepreneurial Brick sparingly for recognition and selected signals.
- **Do** preserve generous whitespace and clear bilingual hierarchy.
- **Do** keep motion smooth, controlled, and supportive of reading order.

### Don't:

- **Don't** add shadows, colored glows, or hover elevation to buttons or CTAs.
- **Don't** turn brick into a competing primary action color or use it decoratively everywhere.
- **Don't** fabricate testimonials, results, client claims, or project metrics.
- **Don't** introduce gratuitous gradients, neon effects, or generic technology-dashboard styling.
- **Don't** make every surface a card or use shadow as decoration.
- **Don't** let interactive or 3D elements compete with the portfolio and contact journey.
