"use client";

import colors from "@/utils/colors";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { Oswald } from "next/font/google";

import spacing from "@/utils/spacing";
import ServicesCard from "../ServicesCard";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const ServicesSection = () => {
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
                    Three Steps To Build A Product
                    <br /> That{" "}
                    <span
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        Stands Out Instantly
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
                            title="Design"
                            description="The initial step involves exploring and defining brand identities, crafting distinctive visual styles that help companies stand out in their market with a unique character and presence."
                            alt="Screenshot of an app that built by Erinç Polat"
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
                                title="Development"
                                description="As the process shifts from design to development, concepts are transformed into digital experiences, with websites, apps, and products crafted to convey compelling brand stories."
                                alt="Screenshots of the web designs that Erinç Polat made"
                                imageUrl="/services/development.webp"
                            />
                        </Grid2>
                        <Grid2 size={12} flex={1}>
                            <ServicesCard
                                title="Improvement"
                                description="Analytics support, service containerization, SEO/ASO, store testing and tracking setup, server configuration, and ongoing improvements are implemented."
                                alt="Logos of different technologies"
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
