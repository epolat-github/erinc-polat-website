"use client";

import colors from "@/utils/colors";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { Oswald } from "next/font/google";

import spacing from "@/utils/spacing";
import ServicesCard from "../ServicesCard";
import { useTranslations } from "next-intl";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const ServicesSection = () => {
    const t = useTranslations("services_section");

    return (
        <Box
            id="services"
            sx={{
                backgroundColor: colors.background,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    paddingTop: spacing.big * 1.5,
                }}
                spacing={spacing.medium}
            >
                <Typography
                    variant="h3"
                    textAlign="center"
                    lineHeight={1.3}
                    sx={{
                        fontFamily: oswald.style.fontFamily,
                        letterSpacing: 1.2,
                    }}
                >
                    {t("title_regular_before_break")}
                    <br /> {t("title_regular_after_break")}{" "}
                    <span
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        {t("title_bold")}
                    </span>
                </Typography>

                <Grid2
                    container
                    spacing={2}
                    sx={{
                        height: {
                            xs: 1500,
                            md: 750,
                        },
                        width: "100%",
                    }}
                >
                    <Grid2
                        size={{
                            xs: 12,
                            md: 5,
                        }}
                        flex={1}
                    >
                        <ServicesCard
                            title={t("design_card_title")}
                            description={t("design_card_description")}
                            alt={t("design_card_alt")}
                            imageUrl="/services/design.webp"
                        />
                    </Grid2>
                    <Grid2
                        container
                        size={{
                            xs: 12,
                            md: 7,
                        }}
                        direction="column"
                        spacing={2}
                    >
                        <Grid2 size={12} flex={1}>
                            <ServicesCard
                                title={t("development_card_title")}
                                description={t("development_card_description")}
                                alt={t("development_card_alt")}
                                imageUrl="/services/development.webp"
                            />
                        </Grid2>
                        <Grid2 size={12} flex={1}>
                            <ServicesCard
                                title={t("improvement_card_title")}
                                description={t("improvement_card_description")}
                                alt={t("improvement_card_alt")}
                                imageUrl="/services/improvement.webp"
                            />
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default ServicesSection;
