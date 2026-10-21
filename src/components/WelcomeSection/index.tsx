"use client";

import colors from "@/utils/colors";
import { Box, Button, Container, Stack, Typography, useMediaQuery, type Theme } from "@mui/material";
import spacing from "@/utils/spacing";
import DotPattern from "../DotPattern";
import ProjectsOverview from "./ProjectsOverview";
import RevealItem from "../RevealItem";
import FadeInItem from "../FadeInItem";
import { useTranslations } from "next-intl";

const WelcomeSection = () => {
    const t = useTranslations("welcome_section");
    const desktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
    const entranceDelay = (seconds: number) => desktop ? seconds : 0;

    return (
        <Box
            sx={{
                backgroundColor: colors.background,
                pb: { xs: spacing.big, md: 0 },
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    paddingTop: {
                        md: spacing.big * 2,
                        xs: spacing.big,
                    },
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                }}
            >
                <Stack flex={0.6} spacing={spacing.small}>
                    <Stack
                        sx={{
                            position: "relative",
                        }}
                    >
                        <DotPattern />
                        <FadeInItem
                            duration={0.6}
                            style={{
                                zIndex: 1,
                            }}
                        >
                            <Typography
                                color={colors.header}
                                fontWeight="500"
                                fontSize="2rem"
                            >
                                {t("top_text")}
                            </Typography>
                        </FadeInItem>
                        <FadeInItem
                            duration={0.6}
                            delay={entranceDelay(0.06)}
                            style={{
                                zIndex: 1,
                            }}
                        >
                            <Typography
                                fontWeight="bold"
                                color={colors.primaryText}
                                sx={{
                                    fontSize: {
                                        lg: "8rem",
                                        sm: "4rem",
                                        xs: "3rem",
                                    },
                                }}
                            >
                                Erinç Polat.
                            </Typography>
                        </FadeInItem>
                    </Stack>

                    <FadeInItem duration={0.6} delay={entranceDelay(0.14)}>
                        <Typography
                            variant="h5"
                            fontWeight="500"
                            color={colors.gray}
                        >
                            <span
                                style={{
                                    color: colors.header,
                                }}
                            >
                                {t("title")}
                            </span>{" "}
                            {t("description")}
                        </Typography>
                    </FadeInItem>

                    <Stack spacing={spacing.tiny}>
                        <FadeInItem duration={0.55} delay={entranceDelay(0.2)}>
                            <Typography variant="h6" color={colors.gray}>
                                🚀 {t("websites_text")}
                            </Typography>
                        </FadeInItem>
                        <FadeInItem duration={0.55} delay={entranceDelay(0.25)}>
                            <Typography variant="h6" color={colors.gray}>
                                📱 {t("mobile_text")}
                            </Typography>
                        </FadeInItem>
                        <FadeInItem duration={0.55} delay={entranceDelay(0.3)}>
                            <Typography variant="h6" color={colors.gray}>
                                ⚡️ {t("backend_text")}
                            </Typography>
                        </FadeInItem>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={{ xs: spacing.tiny, sm: spacing.small }}
                        useFlexGap
                        flexWrap="wrap"
                        sx={{
                            "& > div": {
                                width: { xs: "100%", sm: "auto" },
                                maxWidth: "100%",
                            },
                        }}
                    >
                        <RevealItem duration={0.55} distance={10} delay={entranceDelay(0.35)}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: colors.primary,
                                    color: colors.onPrimary,
                                    minWidth: { xs: 0, sm: 150 },
                                    width: "100%",
                                    minHeight: 40,
                                    whiteSpace: "normal",
                                }}
                                disableElevation
                                href="#contact"
                            >
                                {t("cta_button_text")}
                            </Button>
                        </RevealItem>

                        <RevealItem duration={0.55} distance={10} delay={entranceDelay(0.35)}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: colors.surface,
                                    color: colors.header,
                                    minWidth: { xs: 0, sm: 150 },
                                    width: "100%",
                                    minHeight: 40,
                                    whiteSpace: "normal",
                                    "&:hover": {
                                        backgroundColor: colors.border,
                                    },
                                }}
                                disableElevation
                                href="#about"
                            >
                                {t("secondary_button_text")}
                            </Button>
                        </RevealItem>
                    </Stack>
                </Stack>

                <Stack
                    sx={{
                        flex: 0.4,
                        minHeight: {
                            xs: 600,
                            md: "auto",
                        },
                        mt: {
                            xs: spacing.big,
                            md: 0,
                        },
                        display: {
                            sm: "flex",
                        },
                    }}
                >
                    <ProjectsOverview />
                </Stack>
            </Container>
        </Box>
    );
};

export default WelcomeSection;
