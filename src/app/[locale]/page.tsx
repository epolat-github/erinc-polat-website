import { Stack } from "@mui/material";

import WelcomeSection from "@/components/WelcomeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import colors from "@/utils/colors";
import WhoAmISection from "@/components/WhoAmISection";
import MyWorksSection from "@/components/MyWorksSection";
import ServicesSection from "@/components/ServicesSection";

const Home = () => {
    return (
        <Stack
            sx={{
                backgroundColor: colors.background,
                width: "100vw",
            }}
        >
            <WelcomeSection />
            <WhoAmISection />
            <ServicesSection />
            {/* <CustomersSection /> */}
            <MyWorksSection />
            {/* <BenefitsSection /> */}
            <ContactSection />
            <Footer />
        </Stack>
    );
};

export default Home;
