"use client";

import colors from "@/utils/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import spacing from "@/utils/spacing";
import DotPattern from "../DotPattern";
import BentoCard from "../BentoCard";

const BenefitsSection = () => {
    return (
        <Box
            id="offers"
            sx={{
                backgroundColor: colors.background,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    // minHeight: "100vh",
                    pt: spacing.big,
                }}
                spacing={spacing.medium}
            >
                <Stack spacing={spacing.tiny} alignItems="center">
                    <Typography
                        variant="h3"
                        fontWeight={600}
                        color={colors.header}
                    >
                        What Do I Offer?
                    </Typography>
                    <Typography
                        color={colors.gray}
                        sx={{
                            width: "50%",
                            textAlign: "center",
                            fontSize: "1.1rem",
                            fontWeight: 500,
                        }}
                    >
                        Combining creative solutions and technical expertise to
                        deliver your dream projects with maximum success
                    </Typography>
                </Stack>
                <Grid
                    container
                    spacing="1rem"
                    // gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                    // gridAutoRows="22rem"
                    sx={{
                        width: "100%",
                        // height: 150,
                        position: "relative",
                        px: spacing.medium,
                        py: spacing.tiny,
                    }}
                >
                    <DotPattern />
                    <BentoCard
                        title="Develop Mobile Application"
                        description="High quality IOS and Android mobile applications that inspire customers and users. You will describe your dream app, and I will design and build it with lightning fast performance and visuals."
                        asset={
                            <Stack
                                sx={{
                                    flex: 1,
                                    height: "100%",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src="/projects/Multiple Projects.png"
                                    alt="Project card"
                                    fill
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </Stack>
                        }
                    />
                    <BentoCard
                        title="Website Design"
                        description="I develop websites"
                    />
                    <BentoCard
                        size={8}
                        title="SaaS projects"
                        description="I develop SaaS projects"
                    />
                    <BentoCard
                        size={4}
                        title="Project Support"
                        description="Backend, database and server management support for you full-stack projects."
                    />
                </Grid>
            </Container>
        </Box>
    );
};

export default BenefitsSection;
