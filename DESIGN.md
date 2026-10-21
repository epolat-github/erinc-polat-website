---
name: Erinç Polat Portfolio
description: A modern, evidence-led portfolio for a multidisciplinary software developer.
colors:
  canvas: "#FFFFFF"
  surface-dark: "#111827"
  ink: "#111827"
  primary-green: "#3CCF91"
  primary-text: "#3CCF91"
  secondary-brick: "#B94E3A"
  supporting-text: "#5E6673"
  soft-surface: "#F0F3F6"
  subtle-surface: "#F6F8FA"
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
    backgroundColor: "{colors.primary-green}"
    textColor: "{colors.canvas}"
    height: "40px"
    padding: "8px 24px"
    boxShadow: "none"
  button-submit:
    backgroundColor: "{colors.primary-green}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    height: "45px"
    boxShadow: "none"
  project-card:
    backgroundColor: "{colors.subtle-surface}"
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

The interface uses the exact primary green (#3CCF91) for actions, emphasis, links, and focus. The geometric POLAT logo retains its navy-and-brick artwork; brick remains a restrained secondary signal. White remains dominant so the work stays central and the identity feels established rather than loud.

**Key Characteristics:**

- Spacious, image-led compositions with strong text hierarchy.
- Primary green for actions and emphasis, with restrained brick signals against white.
- Softly rounded project surfaces with subtle, low-contrast depth.
- Purposeful reveal and scroll motion that never competes with the work.
- Consistent Turkish and English layouts.

## Colors

The palette pairs fresh green with entrepreneurial brick, crisp ink typography, and quiet blue-gray surfaces.

### Primary

- **Primary Green** (`#3CCF91`): Primary action fills and decorative emphasis. Use white text on filled surfaces; use green (`#3CCF91`) for links, headline emphasis, and focus rings.
- **Entrepreneurial Brick** (`#B94E3A`): Logo signal, selected highlights, and restrained identity accents. Use white text when it carries normal-sized text.

### Neutral

- **Canvas White** (`#FFFFFF`): Main page and card background.
- **Authority Ink** (`#111827`): Headings, primary text, and reserved dark surfaces.
- **Supporting Slate** (`#5E6673`): Secondary and explanatory text on white.
- **Soft Surface** (`#F0F3F6`): Secondary actions, image framing, chips, and quiet card surfaces.
- **Field Border** (`#D8DEE8`): Default form-field and quiet component boundary.

### Named Rules

The user pins all primary-green text, fills, hover fills, and focus rings to exactly `#3CCF91`; do not substitute a darker shade. This chosen green on light surfaces and white labels on green buttons are explicit user preferences that override the general contrast target.

**The Green Leads Rule.** Green owns actions, links, focus, and primary emphasis. Brick is a controlled signal for the logo and selected highlights; it never competes with green as a second primary CTA color.

**The Contrast Rule.** Use white on primary green and brick. Use green (`#3CCF91`) for text and focus on light surfaces. Supporting Slate is only used on white or equivalently light surfaces; Authority Ink carries primary text.

### Semantic UI Colors

Use the named `semanticColors` export from `src/utils/colors.ts` for functional UI colors. The default `colors` export remains compatible with existing brand and decorative consumers. `src/utils/theme.ts` maps these roles to MUI palette values; `CssBaseline` must render inside `ThemeProvider` so document defaults use the same palette.

| Role | Token | Value | MUI mapping |
| --- | --- | --- | --- |
| Page / field background | `background` | `#FFFFFF` | `background.default`, `background.paper` |
| Cards / gallery / icon surfaces | `surface` | `#F0F3F6` | Direct token in component styles |
| Process cards / project card media | `surfaceSubtle` | `#F6F8FA` | Direct token in component styles |
| Primary text | `textPrimary` | `#111827` | `text.primary` |
| Muted text | `textMuted` | `#5E6673` | `text.secondary` |
| Field borders / dividers | `border` | `#D8DEE8` | `divider` |
| Primary action / text | `actionPrimary`, `onActionPrimary` | `#3CCF91`, `#FFFFFF` | `primary.main`, `primary.contrastText` |
| Primary link / emphasis text | `actionPrimaryText` | `#3CCF91` | Direct token in component styles |
| Secondary action / text | `actionSecondary`, `onActionSecondary` | `#B94E3A`, `#FFFFFF` | `secondary.main`, `secondary.contrastText` |
| Keyboard focus | `focusRing` | `#3CCF91` | 3px outline, 3px offset on `MuiButtonBase` |

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
- **Primary CTA:** Primary Green background with white text, 40px height, compact rectangular shape.
- **Submit CTA:** Primary Green background with white text, 12px radius, 45px height.
- **Secondary CTA:** Soft Surface background with Authority Ink text and a Field Border hover.
- **Focus:** `MuiButtonBase` supplies a visible 3px `semanticColors.focusRing` outline with a 3px offset; component-specific focus treatments may override it without removing visibility.

### InteractiveHoverButton

A compact, shadow-free CTA with a pulsing dot that expands to fill the button on hover or keyboard focus. Reuse this component when a similar animated CTA is requested.

- **Path / import:** `src/components/InteractiveHoverButton/index.tsx` / `@/components/InteractiveHoverButton` (default export).
- **Appearance:** 36px minimum height, pill shape, white resting background, Entrepreneurial Brick text, border, and dot. On interaction, the brick dot fills the button and white text appears with an icon.
- **Motion:** A gentle 2-second dot pulse at rest; 550ms fill transition with the replacement label appearing after a 150ms delay. Pulse stops during interaction. Reduced-motion preferences disable pulse and transitions.
- **Props:** `children` supplies the label; `icon` replaces the default right arrow (use a downward arrow for a link to a lower page section); `pulse` defaults to `true` and can be disabled. Standard MUI Button props are supported, including `href`, `LinkComponent`, `onClick`, `disabled`, `type`, and `sx`; `startIcon` and `endIcon` are replaced by `icon`.
- **Accessibility:** Keyboard focus triggers the effect and retains a visible outline. The duplicate animated label and icon are hidden from assistive technology. The default button type is `button`.
- **Current usage:** Navbar contact CTA on desktop and mobile, with a downward arrow and the localized contact link. Its Barlow Semi Condensed font and responsive minimum height (44px below 900px, 36px above) are supplied by the navbar through `sx`. The shared component retains its 36px default.

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
- **Appearance:** Unfilled, intrinsic-width link with 16px semibold green text, a default 20px right arrow, 10px text/icon gap, and a 44px minimum height.
- **Props:** Required `children` (link label/content) and `href` (destination); optional `icon` replaces the default right arrow, or `icon={null}` hides it. Standard MUI Link props are accepted except `underline`, which is owned by the animation; `sx` supports object, function and array overrides applied after the defaults. Use `target`, `rel` and accessible labels as appropriate for the destination.
- **Motion:** A 2px underline grows from the left over 280ms on hover or keyboard focus. The icon moves 3px horizontally and back in a repeating 1600ms ease-in-out cycle while hovered/focused and returns to rest afterward. Reduced motion shows the underline immediately and disables icon movement.
- **Accessibility / composition:** A client component rendering a native link by default; labels remain available to assistive technology, the decorative icon wrapper is `aria-hidden`, and keyboard focus retains a 3px green outline with 3px offset. Server components can pass translated labels, destinations and icons as serializable/renderable props. No JavaScript animation state is required.
- **Current usage:** WhoAmISection project anchor (`href="#works"`) in both locales overrides `sx.color` with `semanticColors.actionSecondary` (brick). The underline and icon inherit this accent; the component default remains green and its focus ring remains green. The projects listing also reuses AnimatedTextLink in its closing contact section with the default green treatment and an explicit locale-prefixed home contact destination (`/${locale}/#contact`).

```tsx
import AnimatedTextLink from "@/components/AnimatedTextLink";

<AnimatedTextLink href="#works">Explore my work</AnimatedTextLink>
<AnimatedTextLink href="/projects" icon={null}>All projects</AnimatedTextLink>
```

### FlowPattern

- **Path / import:** `src/components/FlowPattern/index.tsx` / `@/components/FlowPattern` (default export).
- **Purpose:** Full-section square grid with subtle, paired heartbeat pulses traveling left-to-right and top-to-bottom along selected grid lines. No props; usage: `<FlowPattern />` inside a positioned section. Place content in a sibling with `position: relative` and `zIndex: 1`; the decorative layer uses `zIndex: 0` and the section should use `isolation: isolate`.
- **Appearance:** Transparent surface with 1px green grid lines at 7.5% alpha. Cells are 64px below 900px and 96px above. An elliptical mask centered at 50% / 55% keeps the grid visible around the content and fades it toward all edges, following the supplied reference on the site's white background. An intersected vertical mask further fades the entire grid and its pulses below 40% of the section: 35% opacity at 60%, fully transparent from 76%. This keeps the capability divider lines distinct. The clipped layer spans the parent bounds and never intercepts pointer events or appears in the accessibility tree.
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
- **Purpose:** Localized closing statement and copyright over decorative artwork. No props; usage: `<Footer />`. Reused by the home page and projects listing; the listing renders it after its `main` landmark and contact closing, at full page width.
- **Motion:** Fixed 5% horizontal and 36px vertical padding keeps layout and text stable. Only the artwork scales horizontally from full width to its inset frame on scroll; reduced motion keeps it at its final scale. The heading reuses `FadeInItem`, including its delay-free 150ms reduced-motion fade.
- **Global motion:** `src/app/global.css` disables smooth scrolling and `.scale-on-hover` enlargement under `prefers-reduced-motion: reduce`. Programmatic home navigation uses CSS-controlled scroll behavior.

### Cards / Containers

- **ProcessCard** — `src/components/ProcessCard/index.tsx`: title, description and contained image on `semanticColors.surfaceSubtle` (`#F6F8FA`). Props: `title`, `description`, `imageUrl`, `alt`, optional `sizes` (defaults to the wider process column), optional `imagePosition` (`center` by default, or `bottom`), `mobileImageHeight` (image-area minimum height below 900px), and `mobileImageScale` (defaults to 1, anchored at the bottom below 900px). Usage: `<ProcessCard title={title} description={description} imageUrl="/services/design.webp" alt={alt} imagePosition="bottom" />`. Padding is 16px below 600px and 32px above. Design and Development use `imagePosition="bottom"`: contained images align to the bottom, bottom padding stays zero at every breakpoint, and artwork is clipped to the card corners. Below 900px, Design uses a 360px image area and Development scales its image 1.35× with matching `sizes`; desktop sizing is unchanged. Improvement keeps centered imagery and its existing size. Image minimum height is 220px / 240px / 180px at xs / sm / md; cards grow with text. `ProcessSection` keeps a 750px desktop minimum and no fixed mobile height.
- **MyWorkCard** — `src/components/MyWorkCard/index.tsx`: a single full-width, locale-aware project link with contained imagery on `semanticColors.surfaceSubtle` (`#F6F8FA`), a 7:5 media frame capped at 400px, 16px corners and wrapping text. Props: `title`, `description`, `images` (`url`, `alt`), `href`, optional `animationDirection` (`left` by default, or `right`), optional `sizes` (Next Image source-size override), and optional `titleComponent` (`"h2" | "h5"`, defaults to `"h5"` to preserve existing consumers), and optional `entranceDelay` (seconds, defaults to 0; applies to translation and opacity, ignored for reduced motion). The title keeps its visual `h5` variant; the projects listing passes `titleComponent="h2"` under its page H1. The default `sizes` matches MyWorksSection: one column below 900px and two above with a 64px gutter; the project listing supplies its own sizing for its 600px breakpoint and 32px gutter. Entrance observes the stationary outer layout box with `useInView({ once: true, amount: "some", margin: "0px 0px -48px 0px" })`, using a fixed 48px bottom viewport inset rather than a percentage threshold. Once that box extends 48px into the viewport, the card enters from below over 700ms (40px desktop, 28px below 900px), with an 8px lateral offset on desktop following `animationDirection` and `cubic-bezier(0.22, 0.61, 0.36, 1)`. Opacity goes from 0 to 1 over 450ms as part of that entry. Once triggered, the sequence completes independently of scrolling and never resets. There is no separate image-scale entrance; imagery stays at its natural scale after arrival. Reduced motion shows the full card immediately without entrance movement or fading. Fine-pointer hover and keyboard focus scale imagery 1.02× and move the arrow 3px over 420ms with `cubic-bezier(0.22, 1, 0.36, 1)`; reduced motion disables these transforms/transitions. Only the media is clipped; the link's external 3px focus outline remains visible. The visual CTA is a noninteractive span, with no additional keyboard stop. Text has no minimum height below 900px and a 200px minimum above. Usage: `<MyWorkCard title={title} description={summary} images={images} href="/projects/fitnlit" titleComponent="h2" entranceDelay={0.32} animationDirection="left" />`.
- **SingleImageRow** — `src/components/ProjectDetails/SingleImageRow/index.tsx`: contained gallery image on `semanticColors.surfaceSubtle` (`#F6F8FA`, matching MyWorkCard) opening the existing fullscreen modal. Props: `imageUrl`, `alt`, optional `containerStyle` (`sx` override), `onImageOpen(imageUrl, previewUrl?)` to delegate to a shared viewer. Usage: `<SingleImageRow imageUrl={url} alt={alt} />`. Media height is `clamp(220px, 56vw, 640px)`. Source aspect ratio limits responsive download width to the actual contained image width. Clicking captures the loaded thumbnail for the modal preview. With `onImageOpen`, the row delegates opening and does not render its local modal.
- **MultipleImageRow** — `src/components/ProjectDetails/MultipleImageRow/index.tsx`: gallery images on `semanticColors.surfaceSubtle` (`#F6F8FA`, matching MyWorkCard) using the same fullscreen modal. Props: `images` (`url`, `alt`), optional `containerStyle` (`sx` override), `onImageOpen(imageUrl, previewUrl?)` to delegate to a shared viewer. Usage: `<MultipleImageRow images={images} />`. Below 600px images stack, each with height `clamp(220px, 75vw, 400px)`; above, they share a row with height `clamp(280px, 45vw, 640px)`. Each image’s responsive download width accounts for its source aspect ratio and frame height. Clicking captures the loaded thumbnail for the modal preview. With `onImageOpen`, the row delegates opening and does not render its local modal.
- **WelcomeSection responsive behavior:** CTAs span the available width below 600px with a 16px gap; above they wrap with a 150px minimum and a 32px gap. A 40px minimum height allows multiline labels. The IhrHaus preview stays within its parent width. Below 900px, the section adds 96px bottom padding to accommodate the collage's 100px bottom overflow and preserve separation from WhoAmISection; desktop bottom padding is zero.
- **ContactHeader** — `src/components/ContactSection/ContactHeader/index.tsx`: localized contact introduction. Prop: `scrollYProgress` (`MotionValue<number>`). Usage: `<ContactHeader scrollYProgress={scrollYProgress} />`. Text occupies the available width and wraps long words under text scaling. A module-level `motion.create(Stack)` wrapper accepts the opacity and vertical `MotionValue`s directly, without type assertions. The email in `ContactForm` also wraps to avoid overflow.

- **Corner Style:** 12px for bento surfaces and 16px for project media.
- **Background:** White or Soft Surface, chosen to keep imagery primary.
- **Shadow Strategy:** Flat project cards; Bento Ambient only on feature panels.
- **Internal Padding:** 16px for compact content, 32px for feature-card text regions.

### Server and Client Composition

- **Project details top spacing** — `src/app/[locale]/projects/[slug]/page.tsx`: the main content row uses 112px top padding below 900px to clear the fixed navbar’s initial 80px height and leave a 32px gap before the project title. Desktop retains 144px top padding. No new component or props; applies to every project and both locales.

- **Projects listing introduction** — `src/app/[locale]/projects/page.tsx`: server-rendered page header with a large Oswald H1 and introductory paragraph stacked at every viewport, separated by a 16px gap. Title sizes are 48px below 600px, 64px from 600px and 80px from 1200px, with weight 600, line-height 1.1 and -0.02em tracking; this is a page-specific heading treatment. Paragraph sizes are 18px / 20px / 22px at xs / sm / md, with a 48ch maximum width, line-height 1.5 and semanticColors.textMuted. No category row is rendered. Page top padding is 112px below 600px and 128px above, clearing the fixed navbar. The project grid follows with a 32px gap. No new reusable component or props; usage is built into Projects. Copy uses projects.title and projects.subtitle in both locales. Both texts reuse `RevealItem`: the title starts immediately (20px travel), the subtitle follows after 160ms (16px travel), each lasting 500ms. Listing cards use `entranceDelay={0.32}` to follow the text stagger after their existing viewport trigger. Reduced motion removes text translation and stagger delays, uses the shared 150ms text fade, and shows cards immediately.

- **Projects listing contact closing** — `src/app/[locale]/projects/page.tsx`: server-rendered section after the project grid; no new component or props. A named section landmark (`aria-labelledby="projects-contact-title"`) contains an Oswald H2, short localized paragraph and the existing AnimatedTextLink pointing to `/${locale}/#contact`. Usage is built into the Projects page. A quiet semantic border separates it from the list; content stacks below 900px and becomes a text/action row above. Heading sizes are 32px / 40px at xs / md; the link retains its 44px minimum height, shared focus and reduced-motion behavior. Copy lives under matching `projects.contact_title`, `contact_description` and `contact_cta` keys in both locales. The page container uses 32px bottom padding below 900px and 96px above; combined with the footer’s 36px top padding, the closing-to-artwork gap is 68px on mobile and 132px on desktop.

- **ProcessSection** — `src/components/ProcessSection/index.tsx`: server-rendered process heading and card layout with `getTranslations`. No props; usage: `<ProcessSection />`. `ProcessCard` also stays on the server.
- **WhoAmISection** — `src/components/WhoAmISection/index.tsx`: server-rendered, localized introduction for prospective clients. No props; usage: `<WhoAmISection />`. A two-part `h2`, short introduction, project anchor link, and portrait precede three open, divider-led service columns: end-to-end development, AI-powered products/automation, and agentic coding with human engineering oversight. No individual project examples or metrics appear here. Desktop uses a flexible text column and 320px square portrait; below 900px the portrait follows the introduction and project action, and service columns stack. The portrait caps at 360px on mobile. The sole action reuses `AnimatedTextLink` to link to `#works`, with a section-specific `semanticColors.actionSecondary` override for 16px semibold brick text, a 20px right arrow, and a 44px minimum height. A 2px underline scales from left to right over 280ms on hover or keyboard focus; the arrow moves 3px horizontally and back in a repeating 1600ms ease-in-out cycle during the same interaction. Leaving hover/focus returns it to rest. Reduced motion makes the underline immediate and disables arrow movement. The link retains a visible focus outline, intrinsic width and an unfilled surface. The contact CTA is omitted from this section. The section retains `id="about"`, adds a named section landmark and 96px anchor offset, and uses semantic color tokens. Entrance and portrait motion stay in the existing `FadeInItem` and `RevealItem` client components; `FlowPattern` supplies a full-section square grid fading toward all edges, with paired heartbeat pulses traveling left-to-right and top-to-bottom along grid lines, paused offscreen/in hidden tabs and static for reduced motion, replacing the portrait-local DotPattern; CTA interaction styles live in `AnimatedTextLink`; service copy is visible without entrance animation. Copy lives under matching `who_am_i_section` keys in both locale files.
- **MyWorksSection** — `src/components/MyWorksSection/index.tsx`: server-rendered selected project layout and localized summaries. No props; usage: `<MyWorksSection />`. Full project data and locale selection stay on the server; cards receive serializable display props and `href`. Uses a single column below 900px, preserving the staggered two-column desktop layout above. Gaps are 32px below 900px and 64px above; top padding is 64px below 600px, 96px at 600–899px and 192px on desktop. The heading block has no minimum height on small screens. The project-list CTA reuses `AnimatedTextLink` with an explicitly locale-prefixed destination, giving one keyboard stop, visible focus and the shared underline/arrow treatment.
- **MyWorkCard** is an explicit client component for its entrance animation. Its required `href` is an unprefixed internal project path resolved through the existing locale-aware `Link`; it replaces the former navigation callback. This supports server composition and native link behavior. The project listing at `src/app/[locale]/projects/page.tsx` uses the same arrangement.
- **FadeInItem** and **RevealItem** explicitly declare their client boundary so server-rendered sections can pass content as children. Props, timings and reduced-motion behavior remain as documented above.

### Localization and Image Descriptions

- UI messages live in `src/locales/tr.json` and `src/locales/en.json` with matching keys and interpolation variables. The project-detail external CTA uses `project_details.visit_project` through server-side `getTranslations` with the route locale.
- **ProjectsOverview** — `src/components/WelcomeSection/ProjectsOverview/index.tsx`: no props; usage: `<ProjectsOverview />`. This client component reads the four preview alt descriptions from `welcome_section`. The resource-only hero preload shares image sizing props; the rendered preview overrides its alt with the localized message.
- `WhoAmISection` reads the portrait description from `who_am_i_section.portrait_alt`. Project feature and gallery image descriptions remain in their existing locale-specific `src/data/projects.tr.ts` and `src/data/projects.en.ts` records, describing the screen shown rather than repeating a generic image label. Cards, rows and modals receive the selected locale's `alt` unchanged.
- `FullScreenImageModal` preserves a supplied `alt`, including an intentional empty string; when absent it uses `accessibility.project_image`. The close control continues to use `accessibility.close_image`.
- **Navbar** — `src/components/Navbar/index.tsx`: no props; usage: `<Navbar />`. Desktop and mobile home controls use `navbar.home` for their accessible name, with an empty alt on the redundant logo image. Both navigation menus target localized home sections through `/#about`, `/#process`, `/#works` and `/#contact`, including from nested project routes. The mobile home control, menu trigger and contact CTA have a 44px minimum hit-area height; the menu trigger is at least 44px wide. Logo artwork remains 75×25px on mobile.
- **LanguageSelector** — `src/components/LanguageSelector/index.tsx`: no props; usage: `<LanguageSelector />` in Navbar on desktop and in the mobile menu. A single text button displays the active locale as EN or TR; clicking switches to the other language while retaining the current pathname. Uses 14px semibold primary text, a localized accessible name identifying the target language, a minimum 44×44px hit area and the shared keyboard focus treatment.
- Contact social icons have empty alts because adjacent localized link text already names each action. Decorative footer artwork also keeps an empty alt. Brand names remain unchanged between locales.

### Image Loading

- **ImageGallery** — `src/components/ProjectDetails/ImageGallery.tsx`: client component composing the existing SingleImageRow and MultipleImageRow with one shared fullscreen viewer. Prop: `assetRows` (`AssetRow[]`). Usage: `<ImageGallery key={slug} assetRows={assetRows} />`. Retains the existing project assets Stack layout and page order, flattening all rows into one navigable sequence. Opens the clicked image, reuses loaded thumbnails on navigation, and wraps from the final image to the first and back. Only the selected full-quality image is mounted; no adjacent-image prefetch. The parent keys by project slug to reset selection between projects. Rows retain their local modal behavior when used without `onImageOpen`.

- Active portfolio `fill` images declare `sizes` matching their layout: process columns, a portrait at 320px on desktop and capped at 360px on mobile, project cards divided by image count, gallery rows divided by image count, and a modal capped at 900px. Footer artwork uses `100vw` to cover its full-width transformed state.
- `ProcessCard` accepts an optional `sizes` override; `ProcessSection` supplies the narrower design-column width. Existing gallery `containerStyle` overrides should keep the declared image width in mind.
- Next Image uses default quality 75 for process artwork, portrait, hero previews and cards. Modal images use quality 90. Gallery thumbnails retain quality 50, explicitly allowed alongside 75 and 90 in `next.config.mjs`. Source assets remain intact.
- Gallery and modal aspect ratios come from `src/data/project-image-dimensions.json`, generated from the original assets by `scripts/generate-project-image-dimensions.mjs`. Refresh with `yarn images:metadata`; `predev` and `prebuild` also refresh it. Unknown sources fall back to width-only sizing. Custom gallery `containerStyle` changes to media dimensions need corresponding sizing updates.
- Responsive device sizes include 320px and 480px, alongside Next's larger defaults, so small screens can select appropriately sized files.
- Only the main FitNLit hero preview has an image preload, restricted by `media="(min-width: 900px)"`. Its `srcset` and `sizes` are generated with `getImageProps` from the same props as the image. Below 900px the collage follows the text and uses lazy loading. Other portfolio imagery stays lazy loaded except the explicitly opened modal image.
- **FullScreenImageModal** — `src/components/FullScreenImageModal/index.tsx`: contained image viewer. Props: `isOpen`, `onClose`, optional `imageUrl`, `alt`, `previewUrl` (the loaded thumbnail’s exact `currentSrc`), `navigation` (`index`, `count`, `onPrevious`, `onNext`). Usage: `<FullScreenImageModal isOpen={open} onClose={close} imageUrl={url} previewUrl={previewUrl} alt={alt} />`. Reuses the loaded preview immediately until the quality-90 image finishes decoding; a failed full-size request leaves the preview visible. Only the opened modal loads its high-quality image, eagerly and with high fetch priority. Its positioned image frame is capped at 900px wide, `90vh` high and the viewport height minus 64px; `sizes` accounts for the source aspect ratio and both bounds while retaining browser DPR selection. When `navigation.count > 1`, a 56px footer outside the image holds 44×44px previous/next controls and a localized live position counter. Image height and responsive source sizing subtract the footer height. Left/right arrow keys navigate while open; modified shortcuts are ignored and Escape retains normal close behavior. Without navigation or with only one image, the footer is hidden. Navigation and loading/error messages use matching accessibility keys in both locales. If no loaded preview exists, a labeled progress indicator appears while loading; an error message replaces it if loading fails.

### ChipRow

- **Path / import:** `src/components/ProjectDetails/ChipRow/index.tsx` / `@/components/ProjectDetails/ChipRow` (default export).
- **Purpose:** Wrapping project tags with `semanticColors.surface` and `semanticColors.textMuted`.
- **Props:** `labels` (string array), optional `containerProps` (`StackProps`) and `chipProps` (`ChipProps`) for overrides.
- **Usage:** `<ChipRow labels={["React", "Next.js"]} />`.

### ContactForm

- **Path / import:** `src/components/ContactSection/ContactForm/index.tsx` / `@/components/ContactSection/ContactForm` (default export).
- **Purpose:** Localized contact fields, client validation, submission and contact links. Name, email and message inputs reuse `FormField` for shared styling, adornments, errors and accessibility; field-specific props, validation, status, first-error focus and submission remain in ContactForm. No configuration props; optional forwarded `ref` identifies the section for the parent scroll behavior.
- **Colors:** Semantic background, text, icon surface and field border tokens; `focusRing` on focused fields; MUI `error.main` on invalid fields. Existing validation and submission behavior is retained.
- **Usage:** `<ContactForm ref={targetRef} />`.

### FormField

- **Path / import:** `src/components/FormField/index.tsx` / `@/components/FormField` (default export; named type `FormFieldProps`).
- **Purpose:** Shared contact-input presentation: InputBase styling, optional decorative leading icon, error border/message and accessible input associations. Validation and submission stay with the owning form.
- **Props:** Required `name` and `label` (accessible input name); optional `id` defaults to `name`, `error` is a localized message string, and `icon` provides a leading adornment. Other MUI InputBase props, including `required`, `type`, `autoComplete`, `inputMode`, `multiline`, `rows`, `onChange`, `inputProps` and `sx`, are supported; `error` and `startAdornment` are owned by this component. `sx` overrides follow the defaults.
- **Appearance / accessibility:** Preserves the contact field's 1px border, 32px radius, 16px horizontal and 8px vertical padding, and 3px green focus outline with 3px offset. Errors use `error.main`; the message id is `${id}-error`. InputBase sets the native input's invalid state; accessible label and error description are applied to the actual input/textarea. Existing `inputProps["aria-describedby"]` ids are preserved alongside the error id. Icons are decorative.
- **Current usage:** ContactForm uses explicit name, email and five-row message fields. Field-specific input semantics remain visible at the call sites; shared presentation is implemented once.

```tsx
import FormField from "@/components/FormField";

<FormField name="email" label={t("email_label")} type="email" required
    error={fieldErrors.email} onChange={() => clearFieldError("email")} />
```

### Inputs / Fields

- **Style:** White background, 1px Field Border, Authority Ink text, 16px radius, and 16px horizontal padding.
- **Focus:** 3px Primary Green outline with a 3px offset.
- **Error:** MUI error color plus field-specific text and accessible field association.

### Navigation

The fixed navigation uses Barlow Semi Condensed at 16px with 1.3px tracking. It stays visually light over a subtle 5px backdrop blur. Desktop links remain quiet; mobile navigation moves into a compact elevated menu with an explicit accessible name and state.

## Do's and Don'ts

### Do:

- **Do** let project imagery and shipped work provide the visual proof.
- **Do** let Primary Green lead actions, links, and focus.
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
