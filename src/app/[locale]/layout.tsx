import "../global.css";
import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/utils/theme";
import { CssBaseline } from "@mui/material";
import Navbar from "@/components/Navbar";
import colors from "@/utils/colors";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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
    alternates: {
        canonical: "/",
        languages: {
            tr: "/tr",
            en: "/en",
        },
    },
};

const RootLayout = async ({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) => {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <GoogleAnalytics gaId="G-JTWXYNF41H" />

            <body
                style={{
                    background: colors.background,
                }}
            >
                <NextIntlClientProvider messages={messages}>
                    <AppRouterCacheProvider>
                        <CssBaseline />

                        <ThemeProvider theme={theme}>
                            <Navbar />
                            {children}
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
