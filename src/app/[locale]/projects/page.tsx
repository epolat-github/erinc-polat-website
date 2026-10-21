import { Box, Container, Grid2, Stack, Typography } from "@mui/material";

import colors, { semanticColors } from "@/utils/colors";
import spacing from "@/utils/spacing";
import MyWorkCard from "@/components/MyWorkCard";
import AnimatedTextLink from "@/components/AnimatedTextLink";
import Footer from "@/components/Footer";
import projectsEn from "@/data/projects.en";
import projectsTr from "@/data/projects.tr";
import { getLocale, getTranslations } from "next-intl/server";
import { oswald } from "@/utils/fonts";
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "projects" });

    return {
        title: t("metadata_title"),
        description: t("metadata_description"),
        alternates: {
            canonical: `/${locale}/projects`,
            languages: {
                tr: "/tr/projects",
                en: "/en/projects",
            },
        },
    };
}

const Projects = async () => {
    const [t, locale] = await Promise.all([
        getTranslations("projects"),
        getLocale(),
    ]);

    const projectsWithLocale = locale === "en" ? projectsEn : projectsTr;

    return (
        <>
            <Box
                component="main"
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
                            component="h1"
                            fontWeight="bold"
                            sx={{
                                fontFamily: oswald.style.fontFamily,
                            }}
                        >
                            {t("title")}
                        </Typography>
                        <Typography variant="subtitle1" component="p">{t("subtitle")}</Typography>
                    </Stack>

                    <Grid2
                        container
                        columnSpacing={spacing.small}
                        rowSpacing={spacing.medium}
                    >
                        {projectsWithLocale.map((project, index) => (
                            <Grid2
                                key={project.slug}
                                size={{
                                    xs: 12,
                                    sm: 6,
                                }}
                            >
                                <MyWorkCard
                                    titleComponent="h2"
                                    title={project.title}
                                    description={project.summary}
                                    images={project.featuredImages}
                                    href={`/projects/${project.slug}`}
                                    sizes={`(min-width: 1200px) ${560 / Math.max(project.featuredImages.length, 1)}px, (min-width: 600px) calc((100vw - 80px) / ${2 * Math.max(project.featuredImages.length, 1)}), calc((100vw - 32px) / ${Math.max(project.featuredImages.length, 1)})`}
                                    animationDirection={
                                        index % 2 ? "right" : "left"
                                    }
                                />
                            </Grid2>
                        ))}
                    </Grid2>

                    <Box component="section" aria-labelledby="projects-contact-title" sx={{ pt: spacing.small }}>
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            alignItems={{ xs: "flex-start", md: "center" }}
                            justifyContent="space-between"
                            gap={spacing.small}
                            sx={{
                                borderTop: `1px solid ${semanticColors.border}`,
                                pt: { xs: spacing.small, md: spacing.medium },
                            }}
                        >
                            <Stack spacing={spacing.tiny} sx={{ maxWidth: 640, minWidth: 0 }}>
                                <Typography
                                    id="projects-contact-title"
                                    component="h2"
                                    sx={{
                                        fontFamily: oswald.style.fontFamily,
                                        fontSize: { xs: "2rem", md: "2.5rem" },
                                        fontWeight: 600,
                                        lineHeight: 1.2,
                                        textWrap: "balance",
                                    }}
                                >
                                    {t("contact_title")}
                                </Typography>
                                <Typography sx={{ color: semanticColors.textMuted }}>
                                    {t("contact_description")}
                                </Typography>
                            </Stack>
                            <AnimatedTextLink href={`/${locale}/#contact`} sx={{ flexShrink: 0 }}>
                                {t("contact_cta")}
                            </AnimatedTextLink>
                        </Stack>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Projects;
