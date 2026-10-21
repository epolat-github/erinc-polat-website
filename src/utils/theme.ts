"use client";
import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { semanticColors } from "./colors";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: semanticColors.actionPrimary,
            dark: semanticColors.actionPrimary,
            contrastText: semanticColors.onActionPrimary,
        },
        secondary: {
            main: semanticColors.actionSecondary,
            contrastText: semanticColors.onActionSecondary,
        },
        background: {
            default: semanticColors.background,
            paper: semanticColors.background,
        },
        text: {
            primary: semanticColors.textPrimary,
            secondary: semanticColors.textMuted,
        },
        divider: semanticColors.border,
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "&:hover, &:active, &.Mui-focusVisible, &.Mui-disabled": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.Mui-focusVisible": {
                        outline: `3px solid ${semanticColors.focusRing}`,
                        outlineOffset: 3,
                    },
                },
            },
            defaultProps: {
                style: {
                    textTransform: "none",
                },
                disableRipple: true,
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
