"use client";

import colors from "@/utils/colors";
import {
    Box,
    Button,
    Container,
    Stack,
    Theme,
    Typography,
    useMediaQuery,
} from "@mui/material";
import spacing from "@/utils/spacing";
import DotPattern from "../DotPattern";
import theme from "@/utils/theme";
import ProjectsOverview from "./ProjectsOverview";
import RevealItem from "../RevealItem";
import FadeInItem from "../FadeInItem";

const WelcomeSection = () => {
    const matchesXsUp = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("xs")
    );

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
                        <FadeInItem>
                            <Typography
                                color={colors.header}
                                fontWeight="500"
                                fontSize="2rem"
                                sx={{
                                    zIndex: 1,
                                }}
                            >{`Hey there, I'm-`}</Typography>
                        </FadeInItem>
                        <FadeInItem delay={0.2}>
                            <Typography
                                fontWeight="bold"
                                color={colors.primary}
                                sx={{
                                    zIndex: 1,
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
                                Software Engineer.
                            </span>{" "}
                            A full-stack developer with an interest in
                            developing products.
                        </Typography>
                    </FadeInItem>

                    <Stack spacing={spacing.tiny}>
                        <FadeInItem delay={0.4}>
                            <Typography variant="h6" color={colors.gray}>
                                🚀 Customer-tailored websites
                            </Typography>
                        </FadeInItem>
                        <FadeInItem delay={0.5}>
                            <Typography variant="h6" color={colors.gray}>
                                📱 Cross-platform mobile applications
                            </Typography>
                        </FadeInItem>
                        <FadeInItem delay={0.6}>
                            <Typography variant="h6" color={colors.gray}>
                                ⚡️ Backend development
                            </Typography>
                        </FadeInItem>
                    </Stack>

                    <Stack direction="row" spacing={spacing.small}>
                        <RevealItem delay={0.7}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: colors.primary,
                                    color: "#fff",
                                    minWidth: 150,
                                    height: 40,
                                }}
                                disableElevation
                                href="#contact"
                            >
                                Inquire Now
                            </Button>
                        </RevealItem>

                        <RevealItem delay={0.9}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: theme.palette.grey[100],
                                    minWidth: 150,
                                    height: 40,
                                }}
                                disableElevation
                                href="#about"
                            >
                                See More
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
                            // xs: "none",
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
