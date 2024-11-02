"use client";

import { Box, Container, Grid2, Stack, Typography } from "@mui/material";

import colors from "@/utils/colors";
import spacing from "@/utils/spacing";
import MyWorkCard from "@/components/MyWorkCard";
import { useRouter } from "next/navigation";
import projects from "@/data/projects";

const Projects = () => {
    const router = useRouter();

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
                    paddingTop: spacing.big * 1.5,
                    paddingBottom: spacing.big,
                }}
                spacing={spacing.small}
            >
                <Stack spacing={spacing.tiny}>
                    <Typography variant="h2" fontWeight="bold">
                        Projects
                    </Typography>
                    <Typography variant="subtitle1">
                        Here is an archive of my top projects. Feel free to
                        explore them.
                    </Typography>
                </Stack>

                <Grid2
                    container
                    columnSpacing={spacing.small}
                    rowSpacing={spacing.medium}
                >
                    {projects.map((project, index) => (
                        <Grid2
                            key={project.slug}
                            size={{
                                xs: 12,
                                sm: 6,
                            }}
                        >
                            <MyWorkCard
                                title={project.title}
                                description={project.summary}
                                images={project.featuredImages}
                                onClick={() =>
                                    router.push(`/projects/${project.slug}`)
                                }
                                animationDirection={
                                    index % 2 ? "right" : "left"
                                }
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
};

export default Projects;
