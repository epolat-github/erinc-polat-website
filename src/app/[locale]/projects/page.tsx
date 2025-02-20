"use client";

import { Box, Container, Grid2, Stack, Typography } from "@mui/material";

import colors from "@/utils/colors";
import spacing from "@/utils/spacing";
import MyWorkCard from "@/components/MyWorkCard";
import projects from "@/data/projects.en";
import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";
import { useRouter } from "@/i18n/routing";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const Projects = () => {
    const t = useTranslations("projects");
    const router = useRouter();

    return (
        <Box
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
                    paddingBottom: spacing.big,
                }}
                spacing={spacing.small}
            >
                <Stack spacing={spacing.tiny}>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{
                            fontFamily: oswald.style.fontFamily,
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography variant="subtitle1">{t("subtitle")}</Typography>
                </Stack>

                <Grid2
                    container
                    columnSpacing={spacing.small}
                    rowSpacing={spacing.medium}
                >
                    {projects.map((project, index) => (
                        <Grid2
                            key={project.slug}
                            size={{
                                xs: 12,
                                sm: 6,
                            }}
                        >
                            <MyWorkCard
                                title={project.title}
                                description={project.summary}
                                images={project.featuredImages}
                                onClick={() =>
                                    router.push(`/projects/${project.slug}`)
                                }
                                animationDirection={
                                    index % 2 ? "right" : "left"
                                }
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
};

export default Projects;
