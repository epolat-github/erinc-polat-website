import { Stack } from "@mui/material";

import WelcomeSection from "@/components/WelcomeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import colors from "@/utils/colors";
import WhoAmISection from "@/components/WhoAmISection";
import MyWorksSection from "@/components/MyWorksSection";
import ProcessSection from "@/components/ProcessSection";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/utils/seo";

export async function generateMetadata({ params }: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "home_metadata" });
    return createPageMetadata({
        locale,
        title: t("title"),
        description: t("description"),
    });
}

const Home = () => {
    return (
        <>
            <Stack
                component="main"
                sx={{
                    backgroundColor: colors.background,
                    width: "100%",
                }}
            >
                <WelcomeSection />
                <WhoAmISection />
                <ProcessSection />
                <MyWorksSection />
                <ContactSection />
            </Stack>
            <Footer />
        </>
    );
};

export default Home;
