import colors from "@/utils/colors";
import { oswald } from "@/utils/fonts";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";

import spacing from "@/utils/spacing";
import ProcessCard from "../ProcessCard";
import { getTranslations } from "next-intl/server";

const ProcessSection = async () => {
    const t = await getTranslations("process_section");

    return (
        <Box
            id="process"
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
                        overflowWrap: "anywhere",
                    }}
                >
                    {t("title_regular_before_break")}
                    <br /> {t("title_regular_after_break")}{" "}
                    <span
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        {t("title_bold")}
                    </span>
                </Typography>

                <Grid2
                    container
                    spacing={2}
                    sx={{
                        minHeight: {
                            xs: "auto",
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
                    >
                        <ProcessCard
                            title={t("design_card_title")}
                            description={t("design_card_description")}
                            alt={t("design_card_alt")}
                            imageUrl="/services/design.webp"
                            mobileImageHeight={360}
                            imagePosition="bottom"
                            sizes="(min-width: 1200px) 408px, (min-width: 900px) calc(41.667vw - 90.667px), (min-width: 600px) calc(100vw - 112px), calc(100vw - 64px)"
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
                            <ProcessCard
                                title={t("development_card_title")}
                                description={t("development_card_description")}
                                alt={t("development_card_alt")}
                                imageUrl="/services/development.webp"
                                mobileImageScale={1.35}
                                sizes="(min-width: 1200px) 608px, (min-width: 900px) calc(58.333vw - 101.333px), (min-width: 600px) calc(135vw - 151.2px), calc(135vw - 86.4px)"
                                imagePosition="bottom"
                            />
                        </Grid2>
                        <Grid2 size={12} flex={1}>
                            <ProcessCard
                                title={t("improvement_card_title")}
                                description={t("improvement_card_description")}
                                alt={t("improvement_card_alt")}
                                imageUrl="/services/improvement.webp"
                            />
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default ProcessSection;
