# Theme and Brand Rollback Reference

This file is the recovery contract for the site's original theme. Read it before changing brand colors, theme tokens, typography, logo treatment, or color-dependent component styles.

## Baseline

- Baseline commit: `ae8543b135efe909a932fa519913882b645be8f0`
- Baseline meaning: the oldest Git-tracked state available before the current local accessibility/theme color edits.
- Do not run a broad `git restore .` or reset the repository. The worktree can contain unrelated user work.

## Selected future palette

The user selected the **Lacivert Otorite / Tuğla Kırmızısı** direction, with the soft surface changed from the first proposal to `#F0F3F6`:

| Role | Color |
| --- | --- |
| Ink | `#111827` |
| Primary navy | `#173B6C` |
| Secondary brick red | `#B94E3A` |
| Soft surface | `#F0F3F6` |
| Main background | `#FFFFFF` |

This palette was applied to the production site on 2026-10-20. The implementation commits begin with `f642969` and include the token, component, and asset commits recorded below.

The untouched original full logo is preserved at `public/logo-original.webp`.

## Current local runtime theme changes

The following uncommitted changes existed when this reference was created:

1. `src/utils/colors.ts`
   - Added `primaryText: "#147A52"`.
   - Added `onPrimary: "#342F2D"`.
   - Changed `gray` from `#8F9094` to `#68696D`.
2. `src/utils/theme.ts`
   - Changed the MUI primary token from `colors.primary` to `colors.primaryText`.
3. `src/components/WelcomeSection/index.tsx`
   - Changed the large name color from `colors.primary` to `colors.primaryText`.
   - Changed the primary CTA text from `#fff` to `colors.onPrimary`.
   - Added `colors.header` to the secondary CTA and added a gray hover background.
4. `src/components/ContactSection/ContactHeader/index.tsx`
   - Changed accent text from `colors.primary` to `colors.primaryText`.
5. `src/components/ContactSection/ContactForm/index.tsx`
   - Removed the explicit `color: "#fff"` from the submit button.

No other Git-tracked runtime file had a local color or theme diff at this point.

## Navy/brick implementation inventory

Implementation commits:

- `f642969` — palette contract test.
- `515aacb` — central runtime and MUI tokens.
- `c84a7e5` — brand-facing component migration.
- `7fc0ecf` — logo backup, deterministic recoloring scripts, and recolored assets.

Runtime and test files added or modified:

- `package.json`
- `src/utils/colors.ts`
- `src/utils/colors.test.ts`
- `src/utils/theme.ts`
- `src/components/WelcomeSection/index.tsx`
- `src/components/Navbar/index.tsx`
- `src/components/ServicesCard/index.tsx`
- `src/components/MyWorkCard/index.tsx`
- `src/components/MiniGallerySelector/index.tsx`
- `src/components/ProjectDetails/ChipRow/index.tsx`
- `src/components/ContactSection/index.tsx`
- `src/components/ContactSection/ContactForm/index.tsx`
- `src/components/ContactSection/ContactHeader/index.tsx`
- `src/components/Footer/index.tsx`
- `src/app/[locale]/layout.tsx`

Brand assets and tooling added or modified:

- `public/logo.webp`
- `public/logo-original.webp` — byte-identical backup of the pre-rebrand logo.
- `public/Small icon.webp`
- `public/Small icon.png`
- `src/app/icon.png`
- `scripts/recolor-brand-assets.mjs`
- `scripts/verify-brand-assets.mjs`

Design documentation modified:

- `DESIGN.md`
- `.impeccable/design.json`
- `THEME_ROLLBACK.md`

Pre-rebrand asset hashes:

```text
public/logo.webp       a9fbad3d2fff04cf8bff7f6b2e80276cf5daca931e74e7da026c15be341214f7
public/Small icon.webp 1c6aa34a054e1aaa3e62297d4feb7eb841712e0836d48b795bacf6b5ecb1407a
public/Small icon.png  fefe669ff1d89b60d203d2a77fcf794c81a88f73634b962599b5bb6e62f436e7
src/app/icon.png        b05d78f1ee132ddc0da13835258ccb698780db0ead9243e09c202eb221a4476f
```

`public/logo-original.webp` must continue to hash to:

```text
a9fbad3d2fff04cf8bff7f6b2e80276cf5daca931e74e7da026c15be341214f7
```

## Original runtime theme

The original `src/utils/colors.ts` was:

```ts
const colors = {
    background: "#fff",
    secondaryBackground: "#141414",
    header: "#342F2D",
    primary: "#3CCF91",
    // primary: "#52c7ea",
    // primary: "#9552EA",
    gray: "#8F9094",
};

export default colors;
```

The original MUI primary mapping in `src/utils/theme.ts` was:

```ts
palette: {
    primary: {
        main: colors.primary,
    },
},
```

The original component-level values were:

- `WelcomeSection`: large name uses `colors.primary`.
- `WelcomeSection`: primary CTA text uses `"#fff"`.
- `WelcomeSection`: secondary CTA has no explicit text color and no explicit hover rule.
- `ContactHeader`: accent text uses `colors.primary`.
- `ContactForm`: submit button contains `color: "#fff"`.

## Safe rollback procedure

First inspect the current state:

```bash
git status --short
git diff -- \
  src/utils/colors.ts \
  src/utils/theme.ts \
  src/components/WelcomeSection/index.tsx \
  src/components/ContactSection/ContactHeader/index.tsx \
  src/components/ContactSection/ContactForm/index.tsx
```

If those files contain later, unrelated work, restore only the theme values described above with a focused patch. Do not replace the full files.

If the listed files contain only theme work and a complete file-level rollback is explicitly desired, the exact baseline can be restored with:

```bash
git restore --source=ae8543b135efe909a932fa519913882b645be8f0 -- \
  src/utils/colors.ts \
  src/utils/theme.ts \
  src/components/WelcomeSection/index.tsx \
  src/components/ContactSection/ContactHeader/index.tsx \
  src/components/ContactSection/ContactForm/index.tsx
```

After either rollback method, run:

```bash
yarn tsc --noEmit
yarn build
```

Then visually verify the home page, contact section, primary CTA, secondary CTA, and responsive layouts.

To restore only the full logo immediately without touching any source code:

```bash
cp public/logo-original.webp public/logo.webp
```

To restore all tracked brand assets from the original baseline commit:

```bash
git restore --source=ae8543b135efe909a932fa519913882b645be8f0 -- \
  public/logo.webp \
  'public/Small icon.webp' \
  'public/Small icon.png' \
  src/app/icon.png
```

The backup `public/logo-original.webp` can remain in place after a rollback. Removing it is optional and requires an explicit request because it is the fastest recovery copy.

## Design-tooling metadata

The move from the old Impeccable format to the current format is separate from the runtime theme:

- Old tracked file deleted locally: `.impeccable.md`
- New local files: `DESIGN.md`, `PRODUCT.md`, `.impeccable/design.json`, `.codex/hooks.json`

Restoring the runtime theme does not require reverting these files. If the user explicitly asks to restore the old design-documentation format too, restore `.impeccable.md` from the baseline commit and review the new files individually before removing anything.

## Future-agent rule

When the selected navy/brick palette or any later identity is implemented:

1. Preserve the baseline commit and original values in this file.
2. Add every newly affected runtime asset or source file to the inventory.
3. Record logo replacements, generated assets, font changes, and deleted files explicitly.
4. Prefer a surgical reverse patch when unrelated work exists.
5. Never claim the original theme is recoverable until typecheck, build, and visual verification pass after a test rollback.
