# Lacivert Otorite / Tuğla Kırmızısı Brand System

## Objective

Replace the portfolio's mint-and-warm-charcoal identity with a white-led navy-and-brick system that presents Erinç Polat as the owner of a capable software/product agency rather than a relaxed solo freelancer.

## Approved palette

| Role | Value | Purpose |
| --- | --- | --- |
| Ink | `#111827` | Headings, primary text, dark surfaces |
| Primary navy | `#173B6C` | Primary actions, emphasized text, focus states |
| Secondary brick | `#B94E3A` | Logo signal, restrained brand accents, selected highlights |
| Soft surface | `#F0F3F6` | Secondary buttons, cards, quiet grouped surfaces |
| Canvas | `#FFFFFF` | Main page and card background |
| Supporting text | `#5E6673` | Body and secondary copy on white |
| Border | `#D8DEE8` | Form and quiet component boundaries |

The previously proposed soft brick surface `#FBEFEB` is explicitly rejected. Use `#F0F3F6` instead.

## Visual character

The brand should feel established, selective, technically credible, and calm. Navy carries authority and product leadership. Brick supplies entrepreneurial energy and ownership without turning the interface into a loud startup aesthetic. White remains dominant so the existing portfolio imagery and generous spacing continue to lead.

## Usage rules

- Use navy for primary buttons, focus outlines, key links, and selected headline emphasis.
- Use brick as a secondary signal, not as a competing primary CTA color.
- Use white text on navy and brick surfaces.
- Use ink for headings and supporting text color `#5E6673` for body copy.
- Use `#F0F3F6` for quiet surfaces and secondary actions.
- Do not introduce gradients, neon treatments, or additional accent colors.
- Product-specific colors inside 3D/AR demonstrations are outside the brand-token migration unless they form part of the surrounding site chrome.

## Logo and icon treatment

Preserve the current geometric POLAT artwork exactly. Recolor its dark charcoal regions to ink `#111827` and its mint regions to brick `#B94E3A`. Apply the same mapping to the full logo, small icon variants, and application icon. Do not regenerate or reinterpret the logo geometry.

## Runtime scope

- Centralize the complete palette in `src/utils/colors.ts`.
- Map MUI primary, secondary, text, background, and divider roles in `src/utils/theme.ts`.
- Replace brand-relevant inline neutrals in navigation, cards, contact surfaces, and project chips with tokens.
- Leave photography, project screenshots, jewelry/AR material colors, modal overlays, and neutral 3D lighting untouched.
- Keep the site light-first; no dark mode is added.

## Accessibility

- Navy with white text must remain above WCAG AA for normal text.
- Brick with white text must remain above WCAG AA for normal text.
- Supporting text on white must remain above WCAG AA.
- Focus indication uses navy with visible separation from the component edge.
- The palette migration must not reintroduce horizontal overflow or reduce current responsive behavior.

## Documentation and rollback

Update `DESIGN.md` and `.impeccable/design.json` to make the approved palette authoritative. Update `THEME_ROLLBACK.md` with every runtime and asset file touched, while retaining the original baseline commit and original mint theme values.

## Acceptance criteria

1. No brand-facing mint `#3CCF91`/`#3CCF92` remains in runtime UI or brand assets.
2. The full logo and icons use ink plus brick without geometry changes.
3. Primary actions use navy with white text; secondary actions use the soft surface with ink text.
4. The homepage, navigation, cards, contact section, project pages, and mobile menu use the shared tokens consistently.
5. Type checking, linting, production build, deterministic palette checks, Impeccable detection, desktop visual review, and mobile visual review pass.
6. `THEME_ROLLBACK.md` remains sufficient to restore the pre-change theme without discarding unrelated work.
