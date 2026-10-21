const colors = {
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
};

// UI roles share the approved brand palette; the default export remains compatible
// with existing brand artwork and decorative consumers.
export const semanticColors = {
    background: colors.background,
    surface: colors.surface,
    surfaceSubtle: colors.surfaceSubtle,
    textPrimary: colors.header,
    textMuted: colors.gray,
    border: colors.border,
    actionPrimary: colors.primary,
    actionPrimaryText: colors.primaryText,
    onActionPrimary: colors.onPrimary,
    actionSecondary: colors.secondary,
    onActionSecondary: colors.onSecondary,
    focusRing: colors.primaryText,
} as const;

export default colors;
