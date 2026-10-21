# Navy and Brick Brand System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved Lacivert Otorite / Tuğla Kırmızısı palette across runtime tokens, brand-facing components, logo assets, design documentation, and rollback documentation.

**Architecture:** Keep `src/utils/colors.ts` as the single runtime source of truth and map those tokens into MUI in `src/utils/theme.ts`. Migrate only brand-facing inline colors; preserve product-specific imagery, AR materials, overlays, and 3D lighting. Recolor the existing raster logo deterministically so its geometry is unchanged, then verify the palette with Node tests, asset inspection, Impeccable, build checks, and browser review.

**Tech Stack:** Next.js 16, React 19, TypeScript 5.9, MUI 6, Node 22 test runner, Sharp, Impeccable.

---

## File map

**Create**

- `src/utils/colors.test.ts` — exact token and WCAG contrast contract.
- `scripts/recolor-brand-assets.mjs` — deterministic charcoal/mint to ink/brick asset conversion.
- `scripts/verify-brand-assets.mjs` — rejects legacy mint and confirms target colors in brand assets.

**Modify**

- `package.json` — brand verification commands.
- `src/utils/colors.ts` — authoritative runtime palette.
- `src/utils/theme.ts` — MUI semantic palette mapping.
- `src/components/WelcomeSection/index.tsx` — hero action and secondary surface tokens.
- `src/components/Navbar/index.tsx` — navigation and mobile-menu tokens.
- `src/components/ServicesCard/index.tsx` — soft surface token.
- `src/components/MyWorkCard/index.tsx` — project surface token.
- `src/components/MiniGallerySelector/index.tsx` — border token.
- `src/components/ProjectDetails/ChipRow/index.tsx` — chip surface and text tokens.
- `src/components/ContactSection/index.tsx` — canvas token.
- `src/components/ContactSection/ContactForm/index.tsx` — form surface tokens.
- `src/components/Footer/index.tsx` — canvas and on-dark tokens.
- `src/app/[locale]/layout.tsx` — browser theme color.
- `public/logo.webp` — full logo recolor.
- `public/Small icon.webp` — compact logo recolor.
- `public/Small icon.png` — lossless compact-logo recolor.
- `src/app/icon.png` — application icon recolor.
- `DESIGN.md` — authoritative brand system narrative and tokens.
- `.impeccable/design.json` — Impeccable design-system mirror.
- `THEME_ROLLBACK.md` — complete post-implementation rollback inventory.

Do not alter `public/footer.webp`, project screenshots, portrait/service imagery, AR material colors, 3D model colors, or modal overlay colors.

### Task 1: Lock the palette contract with a failing test

**Files:**
- Create: `src/utils/colors.test.ts`
- Modify: `package.json:5-10`
- Test: `src/utils/colors.test.ts`

- [ ] **Step 1: Add the brand test command**

Add this script to `package.json`:

```json
"test:brand": "node --experimental-strip-types --test src/utils/colors.test.ts"
```

- [ ] **Step 2: Create the exact token and contrast test**

Create `src/utils/colors.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";

import colors from "./colors.ts";

const luminance = (hex: string) => {
    const channels = hex
        .replace("#", "")
        .match(/.{2}/g)!
        .map((channel) => Number.parseInt(channel, 16) / 255)
        .map((channel) =>
            channel <= 0.04045
                ? channel / 12.92
                : ((channel + 0.055) / 1.055) ** 2.4
        );

    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
};

const contrast = (foreground: string, background: string) => {
    const values = [luminance(foreground), luminance(background)].sort(
        (a, b) => b - a
    );
    return (values[0] + 0.05) / (values[1] + 0.05);
};

test("exports the approved navy and brick brand tokens", () => {
    assert.deepEqual(colors, {
        background: "#FFFFFF",
        surface: "#F0F3F6",
        secondaryBackground: "#111827",
        header: "#111827",
        primary: "#173B6C",
        secondary: "#B94E3A",
        primaryText: "#173B6C",
        onPrimary: "#FFFFFF",
        onSecondary: "#FFFFFF",
        gray: "#5E6673",
        border: "#D8DEE8",
    });
});

test("approved text pairs meet WCAG AA", () => {
    assert.ok(contrast(colors.onPrimary, colors.primary) >= 4.5);
    assert.ok(contrast(colors.onSecondary, colors.secondary) >= 4.5);
    assert.ok(contrast(colors.gray, colors.background) >= 4.5);
    assert.ok(contrast(colors.header, colors.background) >= 4.5);
});
```

- [ ] **Step 3: Run the test and confirm it fails for the current mint theme**

Run:

```bash
yarn test:brand
```

Expected: FAIL because `colors.ts` does not yet export the approved object.

- [ ] **Step 4: Commit the contract**

```bash
git add package.json src/utils/colors.test.ts
git commit -m "test: lock navy and brick brand palette"
```

### Task 2: Implement runtime tokens and MUI semantics

**Files:**
- Modify: `src/utils/colors.ts:1-13`
- Modify: `src/utils/theme.ts:12-34`
- Test: `src/utils/colors.test.ts`

- [ ] **Step 1: Replace `src/utils/colors.ts` with the approved tokens**

```ts
const colors = {
    background: "#FFFFFF",
    surface: "#F0F3F6",
    secondaryBackground: "#111827",
    header: "#111827",
    primary: "#173B6C",
    secondary: "#B94E3A",
    primaryText: "#173B6C",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    gray: "#5E6673",
    border: "#D8DEE8",
};

export default colors;
```

- [ ] **Step 2: Expand the MUI palette in `src/utils/theme.ts`**

Replace the current `palette` block with:

```ts
palette: {
    mode: "light",
    primary: {
        main: colors.primary,
        contrastText: colors.onPrimary,
    },
    secondary: {
        main: colors.secondary,
        contrastText: colors.onSecondary,
    },
    background: {
        default: colors.background,
        paper: colors.background,
    },
    text: {
        primary: colors.header,
        secondary: colors.gray,
    },
    divider: colors.border,
},
```

- [ ] **Step 3: Run the palette test**

Run:

```bash
yarn test:brand
```

Expected: 2 tests PASS.

- [ ] **Step 4: Run TypeScript validation**

Run:

```bash
yarn tsc --noEmit
```

Expected: exit code 0.

- [ ] **Step 5: Commit the token system**

```bash
git add src/utils/colors.ts src/utils/theme.ts
git commit -m "feat: add navy and brick theme tokens"
```

### Task 3: Migrate brand-facing components to shared tokens

**Files:**
- Modify: `src/components/WelcomeSection/index.tsx:71-150`
- Modify: `src/components/Navbar/index.tsx:1-225`
- Modify: `src/components/ServicesCard/index.tsx:1-26`
- Modify: `src/components/MyWorkCard/index.tsx:1-63`
- Modify: `src/components/MiniGallerySelector/index.tsx:1-55`
- Modify: `src/components/ProjectDetails/ChipRow/index.tsx:1-30`
- Modify: `src/components/ContactSection/index.tsx:1-30`
- Modify: `src/components/ContactSection/ContactForm/index.tsx:210-240`
- Modify: `src/components/Footer/index.tsx:1-120`
- Modify: `src/app/[locale]/layout.tsx:15-20`

- [ ] **Step 1: Apply hero button and surface tokens**

In `WelcomeSection`, keep the display name on `colors.primaryText`, keep the primary CTA on `colors.primary`/`colors.onPrimary`, and replace the secondary CTA styles with:

```ts
backgroundColor: colors.surface,
color: colors.header,
minWidth: 150,
height: 40,
"&:hover": {
    backgroundColor: colors.border,
},
```

Remove the now-unused `theme` import from this component.

- [ ] **Step 2: Tokenize the navigation**

Add:

```ts
import colors from "@/utils/colors";
```

Use `colors.header` for desktop navigation text and the menu icon. Use this mobile menu paper block:

```ts
"& .MuiPaper-root": {
    boxShadow: "0px 10px 15px -3px rgba(17,24,39,0.12)",
    minWidth: 180,
    color: colors.header,
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: spacing.tiny,
},
```

- [ ] **Step 3: Tokenize cards and gallery framing**

Make these exact replacements and add `import colors from "@/utils/colors";` to each file:

```ts
// ServicesCard
backgroundColor: colors.surface,

// MyWorkCard
backgroundColor: colors.surface,

// MiniGallerySelector
borderColor: colors.border,

// ChipRow
backgroundColor: colors.surface,
color: colors.gray,
```

- [ ] **Step 4: Tokenize outer white surfaces**

In `ContactSection`, import `colors` and use:

```ts
backgroundColor: colors.background,
```

In `ContactForm`, replace the two form-container `backgroundColor: "#fff"` declarations near lines 220 and 230 with:

```ts
backgroundColor: colors.background,
```

In `Footer`, import `colors`, use `colors.background` for the outer footer background, and use `colors.onPrimary` for both text elements currently set to `#fff`. Do not recolor `footer.webp`.

In `src/app/[locale]/layout.tsx`, set:

```ts
themeColor: colors.background,
```

- [ ] **Step 5: Prove the runtime brand surface has no legacy mint literal**

Run:

```bash
rg -n "#3CCF9[12]|#147A52|#342F2D|#68696D" src --glob '*.{ts,tsx,css}'
```

Expected: no matches outside comments intentionally removed during this task.

- [ ] **Step 6: Run typecheck and lint**

```bash
yarn tsc --noEmit
yarn lint
```

Expected: both commands exit 0.

- [ ] **Step 7: Commit component migration**

```bash
git add src/components/WelcomeSection/index.tsx src/components/Navbar/index.tsx src/components/ServicesCard/index.tsx src/components/MyWorkCard/index.tsx src/components/MiniGallerySelector/index.tsx src/components/ProjectDetails/ChipRow/index.tsx src/components/ContactSection/index.tsx src/components/ContactSection/ContactForm/index.tsx src/components/Footer/index.tsx 'src/app/[locale]/layout.tsx'
git commit -m "feat: apply brand tokens across site chrome"
```

### Task 4: Recolor the existing logo and icons without changing geometry

**Files:**
- Create: `scripts/recolor-brand-assets.mjs`
- Create: `scripts/verify-brand-assets.mjs`
- Modify: `package.json:5-12`
- Modify: `public/logo.webp`
- Modify: `public/Small icon.webp`
- Modify: `public/Small icon.png`
- Modify: `src/app/icon.png`

- [ ] **Step 1: Add asset scripts to `package.json`**

```json
"brand:assets": "node scripts/recolor-brand-assets.mjs",
"test:brand-assets": "node scripts/verify-brand-assets.mjs"
```

- [ ] **Step 2: Create the deterministic recolor script**

Create `scripts/recolor-brand-assets.mjs`:

```js
import { rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = [
    "public/logo.webp",
    "public/Small icon.webp",
    "public/Small icon.png",
];

const sourceInk = [0x33, 0x33, 0x33];
const sourceMint = [0x3c, 0xcf, 0x91];
const targetInk = [0x11, 0x18, 0x27];
const targetBrick = [0xb9, 0x4e, 0x3a];

const distance = (data, offset, color) =>
    (data[offset] - color[0]) ** 2 +
    (data[offset + 1] - color[1]) ** 2 +
    (data[offset + 2] - color[2]) ** 2;

for (const asset of assets) {
    const image = sharp(asset).ensureAlpha();
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    for (let index = 0; index < data.length; index += 4) {
        if (data[index + 3] === 0) continue;

        const replacement =
            distance(data, index, sourceMint) < distance(data, index, sourceInk)
                ? targetBrick
                : targetInk;

        data[index] = replacement[0];
        data[index + 1] = replacement[1];
        data[index + 2] = replacement[2];
    }

    const extension = path.extname(asset);
    const temporary = `${asset}.brand-temp${extension}`;
    const output = sharp(data, { raw: info });

    if (extension === ".webp") {
        await output.webp({ lossless: true }).toFile(temporary);
    } else {
        await output.png().toFile(temporary);
    }

    await rename(temporary, asset);
}

await sharp("public/logo.webp")
    .resize(16, 16, {
        fit: "contain",
        background: "#FFFFFF",
    })
    .png()
    .toFile("src/app/icon.png");
```

- [ ] **Step 3: Create the asset verification script before recoloring**

Create `scripts/verify-brand-assets.mjs`:

```js
import assert from "node:assert/strict";
import sharp from "sharp";

const assets = [
    "public/logo.webp",
    "public/Small icon.webp",
    "public/Small icon.png",
    "src/app/icon.png",
];

const near = (data, offset, color, tolerance = 12) =>
    Math.abs(data[offset] - color[0]) <= tolerance &&
    Math.abs(data[offset + 1] - color[1]) <= tolerance &&
    Math.abs(data[offset + 2] - color[2]) <= tolerance;

for (const asset of assets) {
    const { data } = await sharp(asset).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let brick = 0;
    let legacyMint = 0;

    for (let index = 0; index < data.length; index += 4) {
        if (data[index + 3] === 0) continue;
        if (near(data, index, [0xb9, 0x4e, 0x3a])) brick += 1;
        if (near(data, index, [0x3c, 0xcf, 0x91])) legacyMint += 1;
    }

    assert.ok(brick > 0, `${asset} does not contain the brick accent`);
    assert.equal(legacyMint, 0, `${asset} still contains the legacy mint accent`);
}

console.log("Brand assets use the approved brick accent.");
```

- [ ] **Step 4: Run verification first and confirm it fails**

```bash
yarn test:brand-assets
```

Expected: FAIL because the assets still contain mint and do not contain brick.

- [ ] **Step 5: Generate the recolored assets and verify them**

```bash
yarn brand:assets
yarn test:brand-assets
```

Expected: generation exits 0; verification prints `Brand assets use the approved brick accent.`

- [ ] **Step 6: Visually inspect the four resulting assets**

Open `public/logo.webp`, `public/Small icon.webp`, `public/Small icon.png`, and `src/app/icon.png`. Confirm unchanged geometry, transparent backgrounds on the logo assets, ink dark regions, and brick accent regions.

- [ ] **Step 7: Commit brand assets and their deterministic tooling**

```bash
git add package.json scripts/recolor-brand-assets.mjs scripts/verify-brand-assets.mjs public/logo.webp 'public/Small icon.webp' 'public/Small icon.png' src/app/icon.png
git commit -m "feat: recolor logo assets for navy and brick identity"
```

### Task 5: Make design and rollback documentation authoritative

**Files:**
- Modify: `DESIGN.md:1-160`
- Modify: `.impeccable/design.json`
- Modify: `THEME_ROLLBACK.md`

- [ ] **Step 1: Update `DESIGN.md` tokens and narrative**

Replace the old mint/warm-ink color keys with:

```yaml
colors:
  canvas: "#FFFFFF"
  surface-dark: "#111827"
  ink: "#111827"
  primary-navy: "#173B6C"
  secondary-brick: "#B94E3A"
  supporting-text: "#5E6673"
  soft-surface: "#F0F3F6"
  field-border: "#D8DEE8"
```

Update component references so primary and submit CTAs use navy/white, secondary actions use soft-surface/ink, focus uses navy, and fields use the new ink/border. Replace all Two-Green Rule language with the approved rule: navy leads actions and emphasis; brick is a restrained signal used for identity and selected highlights.

- [ ] **Step 2: Update `.impeccable/design.json`**

Mirror these canonical colors in `extensions.colorMeta`:

```json
{
  "canvas": { "role": "neutral", "displayName": "Canvas White", "canonical": "#FFFFFF", "tonalRamp": ["#FFFFFF", "#F0F3F6", "#D8DEE8"] },
  "ink": { "role": "neutral", "displayName": "Authority Ink", "canonical": "#111827", "tonalRamp": ["#7C8492", "#3D4656", "#111827", "#090D14"] },
  "primary-navy": { "role": "primary", "displayName": "Authority Navy", "canonical": "#173B6C", "tonalRamp": ["#DCE6F2", "#829CBB", "#173B6C", "#0F294C"] },
  "secondary-brick": { "role": "secondary", "displayName": "Entrepreneurial Brick", "canonical": "#B94E3A", "tonalRamp": ["#F3DCD7", "#D68B7D", "#B94E3A", "#853325"] },
  "supporting-text": { "role": "neutral", "displayName": "Supporting Slate", "canonical": "#5E6673", "tonalRamp": ["#BBC0C8", "#858C97", "#5E6673", "#3E4651"] }
}
```

Update component CSS strings and narrative arrays so they contain no old mint or warm-charcoal literals.

- [ ] **Step 3: Extend `THEME_ROLLBACK.md`**

Add all runtime, documentation, script, and binary asset files from this plan to the post-implementation inventory. Record these pre-change asset hashes:

```text
public/logo.webp       a9fbad3d2fff04cf8bff7f6b2e80276cf5daca931e74e7da026c15be341214f7
public/Small icon.webp 1c6aa34a054e1aaa3e62297d4feb7eb841712e0836d48b795bacf6b5ecb1407a
public/Small icon.png  fefe669ff1d89b60d203d2a77fcf794c81a88f73634b962599b5bb6e62f436e7
src/app/icon.png        b05d78f1ee132ddc0da13835258ccb698780db0ead9243e09c202eb221a4476f
```

Keep baseline commit `ae8543b135efe909a932fa519913882b645be8f0` and the original theme snippets unchanged.

- [ ] **Step 4: Scan documentation for stale palette language**

```bash
rg -n "3CCF9|147A52|342F2D|mint|green|Two-Green" DESIGN.md .impeccable/design.json
```

Expected: no stale palette matches.

- [ ] **Step 5: Run Impeccable detection on changed UI files**

```bash
/Users/erincpolat/.agents/skills/impeccable/scripts/impeccable detect \
  src/components/WelcomeSection/index.tsx \
  src/components/Navbar/index.tsx \
  src/components/ServicesCard/index.tsx \
  src/components/MyWorkCard/index.tsx \
  src/components/MiniGallerySelector/index.tsx \
  src/components/ProjectDetails/ChipRow/index.tsx \
  src/components/ContactSection/index.tsx \
  src/components/ContactSection/ContactForm/index.tsx \
  src/components/Footer/index.tsx \
  --no-advisory
```

Expected: no anti-pattern findings.

- [ ] **Step 6: Commit design documentation**

```bash
git add DESIGN.md .impeccable/design.json THEME_ROLLBACK.md
git commit -m "docs: document navy and brick brand system"
```

### Task 6: Run complete verification and visual QA

**Files:**
- Verify all files changed in Tasks 1-5.

- [ ] **Step 1: Run deterministic checks**

```bash
yarn test:brand
yarn test:brand-assets
yarn tsc --noEmit
yarn lint
yarn build
git diff --check
```

Expected: every command exits 0. The existing Next.js metadata warning may remain only if it predates this task; no new warning is accepted.

- [ ] **Step 2: Start the development server**

```bash
yarn dev
```

Expected: the Next.js server starts and serves `/tr` and `/en`.

- [ ] **Step 3: Review desktop UI at 1440×900**

Verify the homepage, mobile/desktop navigation states, services, work cards, contact form, footer, projects index, and one project detail. Confirm white remains dominant, navy owns primary actions/emphasis, brick is restrained, and the recolored logo is sharp.

- [ ] **Step 4: Review mobile UI at 390×844**

Verify navigation menu, hero CTAs, service cards, contact form, project chips, and footer. Confirm no clipping, illegible text, or accidental color fallback.

- [ ] **Step 5: Verify horizontal overflow at both viewport sizes**

In each reviewed page, evaluate:

```js
document.documentElement.scrollWidth === document.documentElement.clientWidth
```

Expected: `true` on desktop and mobile.

- [ ] **Step 6: Review the final worktree diff**

```bash
git status --short
git diff --stat ae8543b135efe909a932fa519913882b645be8f0
git diff --check
```

Expected: only intentional theme, brand-asset, design-documentation, testing, and previously recorded local tooling changes appear; no whitespace errors.

