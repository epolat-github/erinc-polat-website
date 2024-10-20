import "./global.css";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/utils/theme";
import { CssBaseline } from "@mui/material";
import Navbar from "@/components/Navbar";
import colors from "@/utils/colors";

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
