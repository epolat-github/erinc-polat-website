"use client";

import colors from "@/utils/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import spacing from "@/utils/spacing";
import DotPattern from "../DotPattern";
import FadeInItem from "../FadeInItem";
import RevealItem from "../RevealItem";
import { useTranslations } from "next-intl";

const WhoAmISection = () => {
    const t = useTranslations("who_am_i_section");

    return (
        <Box
            id="about"
            sx={{
                backgroundColor: colors.background,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    paddingTop: spacing.big * 2,
                }}
            >
                <Stack
                    direction={{
                        xs: "column",
                        md: "row",
                    }}
                    spacing={{
                        xs: spacing.medium,
                        md: 0,
                    }}
                >
                    {/* left section */}
                    <Stack
                        spacing={spacing.tiny}
                        flex={{
                            xs: 1,
                            md: 0.5,
                        }}
                    >
                        <Stack
                            sx={{
                                position: "relative",
                            }}
                        >
                            <RevealItem>
                                <Typography
                                    fontSize={24}
                                    fontWeight="bold"
                                    color="primary"
                                    sx={{
                                        zIndex: 2,
                                    }}
                                >
                                    {t("title")}
                                </Typography>
                            </RevealItem>
                        </Stack>

                        <Stack spacing={spacing.tiny}>
                            <FadeInItem delay={0.1}>
                                <Typography color={colors.gray}>
                                    {t("first_paragraph")}
                                </Typography>
                            </FadeInItem>
                            <FadeInItem delay={0.2}>
                                <Typography color={colors.gray}>
                                    {t("second_paragraph")}
                                </Typography>
                            </FadeInItem>

                            <FadeInItem delay={0.4}>
                                <Typography color={colors.gray}>
                                    {t("third_paragraph")}
                                </Typography>
                            </FadeInItem>
                        </Stack>
                    </Stack>

                    {/* right section */}
                    <Stack
                        flex={{
                            xs: 1,
                            md: 0.5,
                        }}
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Stack
                            sx={{
                                borderRadius: "50%",
                                width: {
                                    xs: "100%",
                                    md: 400,
                                },
                                maxWidth: 400,
                                height: {
                                    xs: 350,
                                    sm: 400,
                                },
                                position: "relative",
                            }}
                        >
                            <FadeInItem
                                style={{
                                    zIndex: 1,
                                }}
                                delay={0.3}
                            >
                                <Image
                                    src="/erinc-polat.webp"
                                    alt="Image of Erinç Polat"
                                    fill
                                    quality={100}
                                />
                            </FadeInItem>

                            <Box
                                sx={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    zIndex: 0,
                                }}
                            >
                                <DotPattern maskPercentage="130%" />
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default WhoAmISection;
