import "./global.css";
import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/utils/theme";
import { CssBaseline } from "@mui/material";
import Navbar from "@/components/Navbar";
import colors from "@/utils/colors";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
    colorScheme: "light",
    themeColor: "#fff",
};

export const metadata: Metadata = {
    title: "Erinç Polat, Freelance Software Developer",
    description:
        "Hello, I'm Erinç Polat. I build websites and mobile applications with special designs. You can find detailed information in my website.",
    keywords: [
        "Erinç",
        "Tuna",
        "Polat",
        "Erinç Tuna Polat",
        "mobile",
        "application",
        "development",
        "website",
        "engineer",
        "software",
        "developer",
    ],
    metadataBase: new URL("https://www.erincpolat.com"),
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="tr">
            <GoogleTagManager gtmId="G-JTWXYNF41H" />
            <GoogleAnalytics gaId="G-JTWXYNF41H" />

            <body
                style={{
                    background: colors.background,
                }}
            >
                <AppRouterCacheProvider>
                    <CssBaseline />

                    <ThemeProvider theme={theme}>
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;
