import { semanticColors } from "@/utils/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import AnimatedTextLink from "@/components/AnimatedTextLink";
import Image from "next/image";
import spacing from "@/utils/spacing";
import FlowPattern from "@/components/FlowPattern";
import FadeInItem from "../FadeInItem";
import RevealItem from "../RevealItem";
import { getTranslations } from "next-intl/server";

const capabilities = ["development", "ai_products", "agentic_coding"] as const;

const WhoAmISection = async () => {
    const t = await getTranslations("who_am_i_section");

    return (
        <Box
            component="section"
            id="about"
            aria-labelledby="about-heading"
            sx={{
                backgroundColor: semanticColors.background,
                scrollMarginTop: 96,
                position: "relative",
                isolation: "isolate",
            }}
        >
            <FlowPattern />
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    pt: { xs: spacing.big, md: spacing.big * 2 },
                }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems={{ xs: "stretch", md: "center" }}
                    gap={{ xs: spacing.small, md: spacing.medium }}
                >
                    <Stack sx={{ flex: 1, minWidth: 0 }} gap={3}>
                        <RevealItem distance={16}>
                            <Typography
                                component="h2"
                                id="about-heading"
                                sx={{
                                    color: semanticColors.textPrimary,
                                    fontSize: { xs: "2rem", sm: "2.75rem", lg: "3rem" },
                                    fontWeight: 700,
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.03em",
                                    textWrap: "balance",
                                }}
                            >
                                {t("title")}
                                <Box
                                    component="span"
                                    sx={{ display: "block", color: semanticColors.actionPrimaryText }}
                                >
                                    {t("title_emphasis")}
                                </Box>
                            </Typography>
                        </RevealItem>

                        <FadeInItem delay={0.08}>
                            <Typography
                                sx={{
                                    color: semanticColors.textMuted,
                                    fontSize: { xs: "1rem", sm: "1.125rem" },
                                    lineHeight: 1.75,
                                    maxWidth: "60ch",
                                }}
                            >
                                {t("introduction")}
                            </Typography>
                        </FadeInItem>

                        <FadeInItem delay={0.12}>
                            <AnimatedTextLink
                                href="#works"
                                sx={{ color: semanticColors.actionSecondary }}
                            >
                                {t("projects_cta")}
                            </AnimatedTextLink>
                        </FadeInItem>
                    </Stack>

                    <Box
                        sx={{
                            width: { xs: "100%", md: 320 },
                            maxWidth: 360,
                            flexShrink: 0,
                            alignSelf: "center",
                            position: "relative",
                            aspectRatio: "1 / 1",
                        }}
                    >
                        <FadeInItem style={{ position: "relative", height: "100%" }}>
                            <Image
                                src="/erinc-polat.webp"
                                alt={t("portrait_alt")}
                                fill
                                sizes="(min-width: 900px) 320px, (min-width: 392px) 360px, calc(100vw - 32px)"
                                style={{ objectFit: "contain" }}
                            />
                        </FadeInItem>
                    </Box>
                </Stack>

                <Box
                    component="ul"
                    sx={{
                        listStyle: "none",
                        p: 0,
                        mb: 0,
                        mt: { xs: spacing.small, md: spacing.medium },
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
                        columnGap: spacing.small,
                        rowGap: 3,
                    }}
                >
                    {capabilities.map((capability) => (
                        <Box
                            component="li"
                            key={capability}
                            sx={{ borderTop: `1px solid ${semanticColors.border}`, pt: 3 }}
                        >
                            <Typography
                                component="h3"
                                sx={{
                                    color: semanticColors.textPrimary,
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    lineHeight: 1.4,
                                    mb: 1.5,
                                    textWrap: "balance",
                                }}
                            >
                                {t(`${capability}_title`)}
                            </Typography>
                            <Typography sx={{ color: semanticColors.textMuted, lineHeight: 1.75 }}>
                                {t(`${capability}_description`)}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default WhoAmISection;
