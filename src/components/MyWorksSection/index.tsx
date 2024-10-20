"use client";

import colors from "@/utils/colors";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import Link from "next/link";
import spacing from "@/utils/spacing";
import MyWorkCard from "../MyWorkCard";
import projects from "@/data/projects";
import { useRouter } from "next/navigation";

const MyWorksSection = () => {
    const router = useRouter();

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
                        >
                            <Typography fontWeight="bold" variant="h5">
                                All Creative Works.
                            </Typography>
                            <Typography
                                color={colors.gray}
                                variant="subtitle1"
                                fontSize={20}
                            >{`Here's some of my projects that I have worked on.`}</Typography>

                            <Button
                                variant="text"
                                color="primary"
                                component={Link}
                                href="/projects"
                                endIcon={<EastRoundedIcon />}
                                sx={{
                                    fontSize: 20,
                                    paddingLeft: 0,
                                    background: "transparent",
                                }}
                            >
                                Explore more
                            </Button>
                        </Stack>

                        <MyWorkCard
                            title={projects[0].title}
                            description={projects[0].summary}
                            images={projects[0].featuredImages}
                            onClick={() =>
                                router.push(`/projects/${projects[0].slug}`)
                            }
                        />
                        <MyWorkCard
                            title={projects[2].title}
                            description={projects[2].summary}
                            images={projects[2].featuredImages}
                            onClick={() =>
                                router.push(`/projects/${projects[2].slug}`)
                            }
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
                            title={projects[1].title}
                            description={projects[1].summary}
                            images={projects[1].featuredImages}
                            onClick={() =>
                                router.push(`/projects/${projects[1].slug}`)
                            }
                        />
                        <MyWorkCard
                            title={projects[3].title}
                            description={projects[3].summary}
                            images={projects[3].featuredImages}
                            onClick={() =>
                                router.push(`/projects/${projects[3].slug}`)
                            }
                        />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default MyWorksSection;
