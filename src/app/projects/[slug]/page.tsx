import { Box, Button, Container, Stack, Typography } from "@mui/material";

import colors from "@/utils/colors";
import spacing from "@/utils/spacing";
import ChipRow from "@/components/ProjectDetails/ChipRow";
import SingleImageRow from "@/components/ProjectDetails/SingleImageRow";
import MultipleImageRow from "@/components/ProjectDetails/MultipleImageRow";
import { Inter } from "next/font/google";
import projects from "@/data/projects";
import { notFound } from "next/navigation";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    weight: "500",
    style: "normal",
});

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

interface ProjectDetailsType {
    params: {
        slug: string;
    };
}

const ProjectDetails: React.FC<ProjectDetailsType> = ({ params }) => {
    const slug = params.slug;

    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        console.log("project not found: ", slug);
        notFound();
    }

    const { title, paragraphs, assetRows, tags, projectUrl } = project;

    return (
        <Box
            sx={{
                backgroundColor: colors.background,
            }}
        >
            <Container
                component={Stack}
                maxWidth="xl"
                sx={{
                    display: "flex",
                    // minHeight: "100vh",
                }}
                spacing={spacing.small}
            >
                <Stack
                    direction={{
                        xs: "column",
                        md: "row",
                    }}
                    spacing={spacing.medium}
                    sx={{
                        pb: spacing.medium,
                        paddingTop: {
                            xs: spacing.medium,
                            md: spacing.big * 1.5,
                        },
                    }}
                >
                    {/* Project details column */}
                    <Stack
                        sx={{
                            zIndex: 1,
                            maxWidth: {
                                md: "25vw",
                            },
                            height: {
                                md: "80vh",
                            },
                            position: "sticky",
                            top: {
                                xs: "1rem",
                                sm: "5rem",
                                md: "1rem",
                                lg: "5rem",
                            },
                            justifyContent: {
                                md: "space-between",
                            },
                        }}
                        gap={spacing.small}
                    >
                        <Stack spacing={spacing.tiny}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: inter.style.fontFamily,
                                    fontSize: {
                                        xs: "2rem",
                                        md: "2.5rem",
                                    },
                                }}
                            >
                                {title}
                            </Typography>

                            <ChipRow labels={tags} />
                        </Stack>

                        <Stack
                            spacing={spacing.tiny}
                            // sx={{
                            //     paddingBottom: {
                            //         xs: spacing.medium,
                            //         md: 0,
                            //     },
                            // }}
                        >
                            <Stack gap={spacing.tiny}>
                                {paragraphs.map((paragraph, index) => (
                                    <Typography key={`paragraph-${index}`}>
                                        {paragraph}
                                    </Typography>
                                ))}
                            </Stack>

                            {projectUrl && (
                                <Link
                                    href={projectUrl}
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                        alignSelf: "flex-end",
                                    }}
                                >
                                    <Button
                                        startIcon={
                                            <SubdirectoryArrowRightIcon />
                                        }
                                    >
                                        Go to project
                                    </Button>
                                </Link>
                            )}
                        </Stack>
                    </Stack>

                    {/* Project assets column */}
                    <Stack
                        sx={{
                            flex: 1,
                            alignItems: "center",
                            backgroundColor: "#fff",
                            zIndex: 2,
                        }}
                        spacing={spacing.tiny}
                    >
                        {assetRows.map((assetRow, index) => {
                            if (assetRow.type === "SINGLE") {
                                return (
                                    <SingleImageRow
                                        key={`asset-row-${index}`}
                                        imageUrl={assetRow.image.url}
                                        alt={assetRow.image.alt}
                                    />
                                );
                            }

                            if (assetRow.type === "MULTIPLE") {
                                return (
                                    <MultipleImageRow
                                        key={`asset-row-${index}`}
                                        images={assetRow.images}
                                    />
                                );
                            }

                            return null;
                        })}

                        {/* <SingleImageRow
                            imageUrl="/projects/fitnlit/fitnlit-multiple.png"
                            alt="Projcet image"
                        />

                        <MultipleImageRow
                            images={[
                                {
                                    url: "/projects/fitnlit/FitNLit Home.png",
                                    alt: "Project Image",
                                },
                                {
                                    url: "/projects/fitnlit/FitNLit Workouts.png",
                                    alt: "Project Image",
                                },
                            ]}
                        />

                        <MultipleImageRow
                            images={[
                                {
                                    url: "/projects/fitnlit/FitNLit Meal Detail.png",
                                    alt: "Project Image",
                                },
                                {
                                    url: "/projects/fitnlit/FitNLit Workouts.png",
                                    alt: "Project Image",
                                },
                            ]}
                        /> */}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default ProjectDetails;
