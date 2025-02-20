"use client";

import colors from "@/utils/colors";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

// import Link from "next/link";
import spacing from "@/utils/spacing";
import MyWorkCard from "../MyWorkCard";
import projectsEn from "@/data/projects.en";
import projectsTr from "@/data/projects.tr";
// import { useRouter } from "next/navigation";
import { Oswald } from "next/font/google";
import { Link, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const MyWorksSection = () => {
    const t = useTranslations("my_works_section");
    const locale = useLocale();
    const router = useRouter();

    const projectsWithLocale = locale === "en" ? projectsEn : projectsTr;

    return (
        <Box
            id="works"
            sx={{
                backgroundColor: colors.background,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    paddingTop: spacing.big * 2,
                }}
            >
                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                    gap={spacing.medium}
                >
                    {/* LEFT COLUMN */}
                    <Stack
                        gap={spacing.medium}
                        flex={{
                            xs: 1,
                            sm: 0.5,
                        }}
                    >
                        <Stack
                            sx={{
                                alignItems: "flex-start",
                                minHeight: 150,
                            }}
                            gap={spacing.tiny}
                        >
                            <Typography
                                fontWeight={500}
                                variant="h3"
                                sx={{ fontFamily: oswald.style.fontFamily }}
                            >
                                {t("title")}
                            </Typography>

                            <Stack
                                sx={{
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography
                                    color={colors.gray}
                                    variant="subtitle1"
                                    fontSize={20}
                                >
                                    {t("description")}
                                </Typography>

                                <Button
                                    variant="text"
                                    color="primary"
                                    component={Link}
                                    href="/projects"
                                    endIcon={<EastRoundedIcon />}
                                    sx={{
                                        fontSize: 18,
                                        paddingLeft: 0,
                                        paddingTop: 0,
                                        background: "transparent",
                                    }}
                                >
                                    {t("cta_button_text")}
                                </Button>
                            </Stack>
                        </Stack>

                        <MyWorkCard
                            title={projectsWithLocale[0].title}
                            description={projectsWithLocale[0].summary}
                            images={projectsWithLocale[0].featuredImages}
                            onClick={() =>
                                router.push(
                                    `/projects/${projectsWithLocale[0].slug}`
                                )
                            }
                            animationDirection="left"
                        />
                        <MyWorkCard
                            title={projectsWithLocale[2].title}
                            description={projectsWithLocale[2].summary}
                            images={projectsWithLocale[2].featuredImages}
                            onClick={() =>
                                router.push(
                                    `/projects/${projectsWithLocale[2].slug}`
                                )
                            }
                            animationDirection="left"
                        />
                    </Stack>

                    {/* RIGHT COLUMN */}
                    <Stack
                        gap={spacing.medium}
                        flex={{
                            xs: 1,
                            sm: 0.5,
                        }}
                    >
                        <MyWorkCard
                            title={projectsWithLocale[1].title}
                            description={projectsWithLocale[1].summary}
                            images={projectsWithLocale[1].featuredImages}
                            onClick={() =>
                                router.push(
                                    `/projects/${projectsWithLocale[1].slug}`
                                )
                            }
                            animationDirection="right"
                        />
                        <MyWorkCard
                            title={projectsWithLocale[3].title}
                            description={projectsWithLocale[3].summary}
                            images={projectsWithLocale[3].featuredImages}
                            onClick={() =>
                                router.push(
                                    `/projects/${projectsWithLocale[3].slug}`
                                )
                            }
                            animationDirection="right"
                        />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default MyWorksSection;
