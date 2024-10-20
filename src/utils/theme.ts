"use client";
import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import colors from "./colors";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

let theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        allVariants: {
            // color: "#fff",
        },
    },
    components: {
        MuiButtonBase: {
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
