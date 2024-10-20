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
                <Stack flex={0.6} spacing={spacing.small} sx={{}}>
                    <Stack
                        sx={{
                            position: "relative",
                        }}
                    >
                        <DotPattern />
                        <Typography
                            color={colors.header}
                            fontWeight="500"
                            fontSize="2rem"
                            sx={{
                                zIndex: 1,
                            }}
                        >{`Hey there, I'm-`}</Typography>
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
                    </Stack>

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
                        A full-stack developer with an interest in developing
                        products.
                    </Typography>

                    <Stack spacing={spacing.tiny}>
                        <Typography variant="h6" color={colors.gray}>
                            🚀 Customer-tailored websites
                        </Typography>
                        <Typography variant="h6" color={colors.gray}>
                            📱 Cross-platform mobile applications
                        </Typography>
                        <Typography variant="h6" color={colors.gray}>
                            ⚡️ Backend development
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={spacing.small}>
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
                            xs: "none",
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
