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

### Semantic UI Colors

Use the named `semanticColors` export from `src/utils/colors.ts` for functional UI colors. The default `colors` export remains compatible with existing brand and decorative consumers. `src/utils/theme.ts` maps these roles to MUI palette values; `CssBaseline` must render inside `ThemeProvider` so document defaults use the same palette.

| Role | Token | Value | MUI mapping |
| --- | --- | --- | --- |
| Page / field background | `background` | `#FFFFFF` | `background.default`, `background.paper` |
| Cards / gallery / icon surfaces | `surface` | `#F0F3F6` | Direct token in component styles |
| Primary text | `textPrimary` | `#111827` | `text.primary` |
| Muted text | `textMuted` | `#5E6673` | `text.secondary` |
| Field borders / dividers | `border` | `#D8DEE8` | `divider` |
| Primary action / text | `actionPrimary`, `onActionPrimary` | `#173B6C`, `#FFFFFF` | `primary.main`, `primary.contrastText` |
| Secondary action / text | `actionSecondary`, `onActionSecondary` | `#B94E3A`, `#FFFFFF` | `secondary.main`, `secondary.contrastText` |
| Keyboard focus | `focusRing` | `#173B6C` | 3px outline, 3px offset on `MuiButtonBase` |

Example: `import { semanticColors } from "@/utils/colors";` followed by `<Stack sx={{ bgcolor: semanticColors.surface, color: semanticColors.textPrimary }} />`. Prefer semantic roles over literal colors, `lightgray` or unrelated MUI gray indices. Forms keep MUI's `error.main` role for validation. The expanding-dot CTA retains its documented brick focus outline.

**Theme scope:** light only. MUI uses `palette.mode: "light"` and the document declares `colorScheme: "light"`. Dark mode and automatic system-theme switching are outside the current scope.

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
- **Focus:** `MuiButtonBase` supplies a visible 3px `semanticColors.focusRing` outline with a 3px offset; component-specific focus treatments may override it without removing visibility.

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

### AnimatedTextLink

A reusable text CTA with a left-to-right underline and subtle horizontal icon motion. Reuse it for this treatment rather than copying the styles into sections.

- **Path / import:** `src/components/AnimatedTextLink/index.tsx` / `@/components/AnimatedTextLink` (default export; named type `AnimatedTextLinkProps`).
- **Appearance:** Unfilled, intrinsic-width link with 16px semibold navy text, a default 20px right arrow, 10px text/icon gap, and a 44px minimum height.
- **Props:** Required `children` (link label/content) and `href` (destination); optional `icon` replaces the default right arrow, or `icon={null}` hides it. Standard MUI Link props are accepted except `underline`, which is owned by the animation; `sx` supports object, function and array overrides applied after the defaults. Use `target`, `rel` and accessible labels as appropriate for the destination.
- **Motion:** A 2px underline grows from the left over 280ms on hover or keyboard focus. The icon moves 3px horizontally and back in a repeating 1600ms ease-in-out cycle while hovered/focused and returns to rest afterward. Reduced motion shows the underline immediately and disables icon movement.
- **Accessibility / composition:** A client component rendering a native link by default; labels remain available to assistive technology, the decorative icon wrapper is `aria-hidden`, and keyboard focus retains a 3px navy outline with 3px offset. Server components can pass translated labels, destinations and icons as serializable/renderable props. No JavaScript animation state is required.
- **Current usage:** WhoAmISection project anchor (`href="#works"`) in both locales overrides `sx.color` with `semanticColors.actionSecondary` (brick). The underline and icon inherit this accent; the component default remains navy and its focus ring remains navy.

```tsx
import AnimatedTextLink from "@/components/AnimatedTextLink";

<AnimatedTextLink href="#works">Explore my work</AnimatedTextLink>
<AnimatedTextLink href="/projects" icon={null}>All projects</AnimatedTextLink>
```

### FlowPattern

- **Path / import:** `src/components/FlowPattern/index.tsx` / `@/components/FlowPattern` (default export).
- **Purpose:** Full-section square grid with subtle, paired heartbeat pulses traveling left-to-right and top-to-bottom along selected grid lines. No props; usage: `<FlowPattern />` inside a positioned section. Place content in a sibling with `position: relative` and `zIndex: 1`; the decorative layer uses `zIndex: 0` and the section should use `isolation: isolate`.
- **Appearance:** Transparent surface with 1px navy grid lines at 7.5% alpha. Cells are 64px below 900px and 96px above. An elliptical mask centered at 50% / 55% keeps the grid visible around the content and fades it toward all edges, following the supplied reference on the site's white background. An intersected vertical mask further fades the entire grid and its pulses below 40% of the section: 35% opacity at 60%, fully transparent from 76%. This keeps the capability divider lines distinct. The clipped layer spans the parent bounds and never intercepts pointer events or appears in the accessibility tree.
- **Motion:** Two horizontal and two vertical tracks align exactly with grid lines. Each sends paired 144px gradient segments, spaced 650ms apart, through a 10-second cycle: 4.8 seconds of forward travel followed by a pause. Tracks start at 0 / 4 seconds horizontally and 2 / 6 seconds vertically. Pulse peak alpha is 28%; the parent mask and traveling segment opacity keep the effect restrained. Only transforms and opacity animate; grid and foreground content remain stationary. Animation pauses offscreen and in hidden tabs. Reduced motion hides the pulse tracks and retains the static grid.
- **Current usage:** WhoAmISection covers its complete section with this layer; the former portrait-local DotPattern is removed. Other DotPattern consumers are unchanged.

```tsx
<Box component="section" sx={{ position: "relative", isolation: "isolate" }}>
    <FlowPattern />
    <Container sx={{ position: "relative", zIndex: 1 }}>{children}</Container>
</Box>
```

### Entrance and Floating Motion

Reuse these wrappers rather than duplicating their animation behavior:

- **FadeInItem** — `src/components/FadeInItem/index.tsx`: opacity entrance when 40% visible. Props: `children`, `delay`, `duration` (default 0.6 seconds), `once` (default true), and `style`. Reduced motion uses a 150ms fade without delay.
- **RevealItem** — `src/components/RevealItem/index.tsx`: clipped upward entrance. Props: `children`, `delay`, `duration` (default 0.6 seconds), `distance` (default `"50%"`), and `once` (default true). The legacy `rotate` prop is accepted but unused. Reduced motion removes translation and uses a 150ms fade without delay.
- **ScaleInBox** — `src/components/ScaleInBox/index.tsx`: gentle 0.96 → 1 scale and opacity entrance, with `cubic-bezier(0.16, 1, 0.3, 1)`. Props: `children`, `style`, `delay`, `duration` (default 0.6 seconds), `once` (default true), and `ready` (default true). Both viewport visibility and `ready` are required to reveal content. Reduced motion removes scaling and uses a 150ms fade without delay.
- **BouncingBox** — `src/components/BouncingBox/index.tsx`: a 6px ease-in-out floating cycle. Props: `children`, static CSS `style`, `delay` (default 0), and full-cycle `duration` (default 6 seconds). Animation pauses offscreen and while the document is hidden, preserving its phase. It is disabled below 900px and for reduced motion.

```tsx
<FadeInItem duration={0.6} delay={0.14}>{description}</FadeInItem>
<RevealItem duration={0.55} distance={10}>{action}</RevealItem>
<ScaleInBox ready={imageLoaded} duration={0.65}>{image}</ScaleInBox>
<BouncingBox duration={8}>{supportingImage}</BouncingBox>
```

**WelcomeSection choreography:** desktop text enters with 0–350ms delays; text fades last 550–600ms, project entrances last 650ms, and both CTAs share a 550ms reveal after 350ms (900ms total from their viewport trigger). Below 900px, entrance delays are zero. The primary project image is preloaded with responsive `sizes` only at widths of 900px and above; each project preview waits for its image load before revealing. FitNLit and IhrHaus stay still after entrance; only Actio and Zeynep Dikdüş float on desktop, over 8- and 10-second cycles. Project positioning uses CSS breakpoints to avoid a hydration-time layout switch.

### Footer

- **Path / import:** `src/components/Footer/index.tsx` / `@/components/Footer` (default export).
- **Purpose:** Localized closing statement and copyright over decorative artwork. No props; usage: `<Footer />`.
- **Motion:** Fixed 5% horizontal and 36px vertical padding keeps layout and text stable. Only the artwork scales horizontally from full width to its inset frame on scroll; reduced motion keeps it at its final scale. The heading reuses `FadeInItem`, including its delay-free 150ms reduced-motion fade.
- **Global motion:** `src/app/global.css` disables smooth scrolling and `.scale-on-hover` enlargement under `prefers-reduced-motion: reduce`. Programmatic home navigation uses CSS-controlled scroll behavior.

### Cards / Containers

- **ProcessCard** — `src/components/ProcessCard/index.tsx`: title, description and contained image. Props: `title`, `description`, `imageUrl`, `alt`, optional `sizes` (defaults to the wider process column), optional `imagePosition` (`center` by default, or `bottom`), `mobileImageHeight` (image-area minimum height below 900px), and `mobileImageScale` (defaults to 1, anchored at the bottom below 900px). Usage: `<ProcessCard title={title} description={description} imageUrl="/services/design.webp" alt={alt} imagePosition="bottom" />`. Padding is 16px below 600px and 32px above. Design and Development use `imagePosition="bottom"`: contained images align to the bottom, bottom padding stays zero at every breakpoint, and artwork is clipped to the card corners. Below 900px, Design uses a 360px image area and Development scales its image 1.35× with matching `sizes`; desktop sizing is unchanged. Improvement keeps centered imagery and its existing size. Image minimum height is 220px / 240px / 180px at xs / sm / md; cards grow with text. `ProcessSection` keeps a 750px desktop minimum and no fixed mobile height.
- **MyWorkCard** — `src/components/MyWorkCard/index.tsx`: full-width project action with media height `clamp(220px, 40vw, 400px)` and wrapping text. Props: `title`, `description`, `images` (`url`, `alt`), `href`, optional `animationDirection` (`left` or `right`). Usage: `<MyWorkCard title={title} description={summary} images={images} href="/projects/fitnlit" />`.
- **SingleImageRow** — `src/components/ProjectDetails/SingleImageRow/index.tsx`: contained gallery image opening the existing fullscreen modal. Props: `imageUrl`, `alt`, optional `containerStyle` (`sx` override). Usage: `<SingleImageRow imageUrl={url} alt={alt} />`. Media height is `clamp(220px, 56vw, 640px)`.
- **MultipleImageRow** — `src/components/ProjectDetails/MultipleImageRow/index.tsx`: gallery images using the same fullscreen modal. Props: `images` (`url`, `alt`), optional `containerStyle` (`sx` override). Usage: `<MultipleImageRow images={images} />`. Below 600px images stack, each with height `clamp(220px, 75vw, 400px)`; above, they share a row with height `clamp(280px, 45vw, 640px)`.
- **WelcomeSection responsive behavior:** CTAs span the available width below 600px; above they wrap with a 150px minimum. A 40px minimum height allows multiline labels. The IhrHaus preview stays within its parent width.
- **ContactHeader** — `src/components/ContactSection/ContactHeader/index.tsx`: localized contact introduction. Prop: `scrollYProgress` (`MotionValue<number>`). Usage: `<ContactHeader scrollYProgress={scrollYProgress} />`. Text occupies the available width and wraps long words under text scaling. A module-level `motion.create(Stack)` wrapper accepts the opacity and vertical `MotionValue`s directly, without type assertions. The email in `ContactForm` also wraps to avoid overflow.

- **Corner Style:** 12px for bento surfaces and 16px for project media.
- **Background:** White or Soft Surface, chosen to keep imagery primary.
- **Shadow Strategy:** Flat project cards; Bento Ambient only on feature panels.
- **Internal Padding:** 16px for compact content, 32px for feature-card text regions.

### Server and Client Composition

- **ProcessSection** — `src/components/ProcessSection/index.tsx`: server-rendered process heading and card layout with `getTranslations`. No props; usage: `<ProcessSection />`. `ProcessCard` also stays on the server.
- **WhoAmISection** — `src/components/WhoAmISection/index.tsx`: server-rendered, localized introduction for prospective clients. No props; usage: `<WhoAmISection />`. A two-part `h2`, short introduction, project anchor link, and portrait precede three open, divider-led service columns: end-to-end development, AI-powered products/automation, and agentic coding with human engineering oversight. No individual project examples or metrics appear here. Desktop uses a flexible text column and 320px square portrait; below 900px the portrait follows the introduction and project action, and service columns stack. The portrait caps at 360px on mobile. The sole action reuses `AnimatedTextLink` to link to `#works`, with a section-specific `semanticColors.actionSecondary` override for 16px semibold brick text, a 20px right arrow, and a 44px minimum height. A 2px underline scales from left to right over 280ms on hover or keyboard focus; the arrow moves 3px horizontally and back in a repeating 1600ms ease-in-out cycle during the same interaction. Leaving hover/focus returns it to rest. Reduced motion makes the underline immediate and disables arrow movement. The link retains a visible focus outline, intrinsic width and an unfilled surface. The contact CTA is omitted from this section. The section retains `id="about"`, adds a named section landmark and 96px anchor offset, and uses semantic color tokens. Entrance and portrait motion stay in the existing `FadeInItem` and `RevealItem` client components; `FlowPattern` supplies a full-section square grid fading toward all edges, with paired heartbeat pulses traveling left-to-right and top-to-bottom along grid lines, paused offscreen/in hidden tabs and static for reduced motion, replacing the portrait-local DotPattern; CTA interaction styles live in `AnimatedTextLink`; service copy is visible without entrance animation. Copy lives under matching `who_am_i_section` keys in both locale files.
- **MyWorksSection** — `src/components/MyWorksSection/index.tsx`: server-rendered selected project layout and localized summaries. No props; usage: `<MyWorksSection />`. Full project data and locale selection stay on the server; cards receive serializable display props and `href`.
- **MyWorkCard** is an explicit client component for its entrance animation. Its required `href` is an unprefixed internal project path resolved through the existing locale-aware `Link`; it replaces the former navigation callback. This supports server composition and native link behavior. The project listing at `src/app/[locale]/projects/page.tsx` uses the same arrangement.
- **FadeInItem** and **RevealItem** explicitly declare their client boundary so server-rendered sections can pass content as children. Props, timings and reduced-motion behavior remain as documented above.

### Localization and Image Descriptions

- UI messages live in `src/locales/tr.json` and `src/locales/en.json` with matching keys and interpolation variables. The project-detail external CTA uses `project_details.visit_project` through server-side `getTranslations` with the route locale.
- **ProjectsOverview** — `src/components/WelcomeSection/ProjectsOverview/index.tsx`: no props; usage: `<ProjectsOverview />`. This client component reads the four preview alt descriptions from `welcome_section`. The resource-only hero preload shares image sizing props; the rendered preview overrides its alt with the localized message.
- `WhoAmISection` reads the portrait description from `who_am_i_section.portrait_alt`. Project feature and gallery image descriptions remain in their existing locale-specific `src/data/projects.tr.ts` and `src/data/projects.en.ts` records, describing the screen shown rather than repeating a generic image label. Cards, rows and modals receive the selected locale's `alt` unchanged.
- `FullScreenImageModal` preserves a supplied `alt`, including an intentional empty string; when absent it uses `accessibility.project_image`. The close control continues to use `accessibility.close_image`.
- **Navbar** — `src/components/Navbar/index.tsx`: no props; usage: `<Navbar />`. Desktop and mobile home controls use `navbar.home` for their accessible name, with an empty alt on the redundant logo image.
- Contact social icons have empty alts because adjacent localized link text already names each action. Decorative footer artwork also keeps an empty alt. Brand names remain unchanged between locales.

### Image Loading

- Active portfolio `fill` images declare `sizes` matching their layout: process columns, a portrait at 320px on desktop and capped at 360px on mobile, project cards divided by image count, gallery rows divided by image count, and a modal capped at 900px. Footer artwork uses `100vw` to cover its full-width transformed state.
- `ProcessCard` accepts an optional `sizes` override; `ProcessSection` supplies the narrower design-column width. Existing gallery `containerStyle` overrides should keep the declared image width in mind.
- Next Image uses default quality 75 for process artwork, portrait, hero previews, cards and modal. Gallery thumbnails retain quality 50, explicitly allowed alongside 75 in `next.config.mjs`. Source assets remain intact.
- Responsive device sizes include 320px and 480px, alongside Next's larger defaults, so small screens can select appropriately sized files.
- Only the main FitNLit hero preview has an image preload, restricted by `media="(min-width: 900px)"`. Its `srcset` and `sizes` are generated with `getImageProps` from the same props as the image. Below 900px the collage follows the text and uses lazy loading. Other portfolio imagery stays lazy loaded.
- **FullScreenImageModal** — `src/components/FullScreenImageModal/index.tsx`: contained image viewer. Props: `isOpen`, `onClose`, optional `imageUrl`, `alt`. Usage: `<FullScreenImageModal isOpen={open} onClose={close} imageUrl={url} alt={alt} />`. Image size follows the dialog width (`100vw - 64px`, capped at 900px), quality 75.

### ChipRow

- **Path / import:** `src/components/ProjectDetails/ChipRow/index.tsx` / `@/components/ProjectDetails/ChipRow` (default export).
- **Purpose:** Wrapping project tags with `semanticColors.surface` and `semanticColors.textMuted`.
- **Props:** `labels` (string array), optional `containerProps` (`StackProps`) and `chipProps` (`ChipProps`) for overrides.
- **Usage:** `<ChipRow labels={["React", "Next.js"]} />`.

### ContactForm

- **Path / import:** `src/components/ContactSection/ContactForm/index.tsx` / `@/components/ContactSection/ContactForm` (default export).
- **Purpose:** Localized contact fields, client validation, submission and contact links. No configuration props; optional forwarded `ref` identifies the section for the parent scroll behavior.
- **Colors:** Semantic background, text, icon surface and field border tokens; `focusRing` on focused fields; MUI `error.main` on invalid fields. Existing validation and submission behavior is retained.
- **Usage:** `<ContactForm ref={targetRef} />`.

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
