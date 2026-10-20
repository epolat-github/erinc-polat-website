import colors from "@/utils/colors";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import spacing from "@/utils/spacing";
import MyWorkCard from "../MyWorkCard";
import projectsEn from "@/data/projects.en";
import projectsTr from "@/data/projects.tr";
import { oswald } from "@/utils/fonts";
import { Link } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";

const MyWorksSection = async () => {
    const [t, locale] = await Promise.all([
        getTranslations("my_works_section"),
        getLocale(),
    ]);

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

                                <Link href="/projects" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="text"
                                    color="primary"
                                    component="span"
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
                                </Link>
                            </Stack>
                        </Stack>

                        <MyWorkCard
                            title={projectsWithLocale[0].title}
                            description={projectsWithLocale[0].summary}
                            images={projectsWithLocale[0].featuredImages}
                            href={`/projects/${projectsWithLocale[0].slug}`}
                            animationDirection="left"
                        />
                        <MyWorkCard
                            title={projectsWithLocale[2].title}
                            description={projectsWithLocale[2].summary}
                            images={projectsWithLocale[2].featuredImages}
                            href={`/projects/${projectsWithLocale[2].slug}`}
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
                            href={`/projects/${projectsWithLocale[1].slug}`}
                            animationDirection="right"
                        />
                        <MyWorkCard
                            title={projectsWithLocale[3].title}
                            description={projectsWithLocale[3].summary}
                            images={projectsWithLocale[3].featuredImages}
                            href={`/projects/${projectsWithLocale[3].slug}`}
                            animationDirection="right"
                        />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default MyWorksSection;
