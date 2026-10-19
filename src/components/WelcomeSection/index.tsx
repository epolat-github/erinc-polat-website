"use client";

import colors from "@/utils/colors";
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import spacing from "@/utils/spacing";
import DotPattern from "../DotPattern";
import ProjectsOverview from "./ProjectsOverview";
import RevealItem from "../RevealItem";
import FadeInItem from "../FadeInItem";
import { useTranslations } from "next-intl";

const WelcomeSection = () => {
    const t = useTranslations("welcome_section");

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
                            delay={0.2}
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

                    <FadeInItem delay={0.3}>
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
                        <FadeInItem delay={0.4}>
                            <Typography variant="h6" color={colors.gray}>
                                🚀 {t("websites_text")}
                            </Typography>
                        </FadeInItem>
                        <FadeInItem delay={0.5}>
                            <Typography variant="h6" color={colors.gray}>
                                📱 {t("mobile_text")}
                            </Typography>
                        </FadeInItem>
                        <FadeInItem delay={0.6}>
                            <Typography variant="h6" color={colors.gray}>
                                ⚡️ {t("backend_text")}
                            </Typography>
                        </FadeInItem>
                    </Stack>

                    <Stack direction="row" spacing={spacing.small}>
                        <RevealItem delay={0.7}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: colors.primary,
                                    color: colors.onPrimary,
                                    minWidth: 150,
                                    height: 40,
                                }}
                                disableElevation
                                href="#contact"
                            >
                                {t("cta_button_text")}
                            </Button>
                        </RevealItem>

                        <RevealItem delay={0.9}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: colors.surface,
                                    color: colors.header,
                                    minWidth: 150,
                                    height: 40,
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
