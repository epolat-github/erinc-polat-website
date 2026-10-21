import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const colors = require("./colors.ts").default as typeof import("./colors").default;
const semanticColors = require("./colors.ts").semanticColors as typeof import("./colors").semanticColors;

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

test("exports the approved green and brick brand tokens", () => {
    assert.deepEqual(colors, {
        background: "#FFFFFF",
        surface: "#F0F3F6",
        surfaceSubtle: "#F6F8FA",
        secondaryBackground: "#111827",
        header: "#111827",
        primary: "#3CCF91",
        secondary: "#B94E3A",
        primaryText: "#3CCF91",
        onPrimary: "#FFFFFF",
        onSecondary: "#FFFFFF",
        gray: "#5E6673",
        border: "#D8DEE8",
    });
});

test("secondary and neutral text pairs meet WCAG AA", () => {
    assert.ok(contrast(colors.onSecondary, colors.secondary) >= 4.5);
    assert.ok(contrast(colors.gray, colors.background) >= 4.5);
    assert.ok(contrast(colors.header, colors.background) >= 4.5);
});

test("neutral text and secondary labels remain legible across UI surfaces", () => {
    for (const surface of [semanticColors.background, semanticColors.surface]) {
        assert.ok(contrast(semanticColors.textPrimary, surface) >= 4.5);
        assert.ok(contrast(semanticColors.textMuted, surface) >= 4.5);
    }
    assert.ok(contrast(semanticColors.onActionSecondary, semanticColors.actionSecondary) >= 4.5);
});
