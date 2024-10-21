"use client";

import colors from "@/utils/colors";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import spacing from "@/utils/spacing";
import DotPattern from "../DotPattern";

const WhoAmISection = () => {
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
                            <Typography
                                fontSize={24}
                                fontWeight="bold"
                                color="primary"
                                sx={{
                                    zIndex: 2,
                                }}
                            >
                                Who am I?
                            </Typography>

                            {/* <Box
                                component={motion.div}
                                initial={{
                                    width: 0,
                                }}
                                whileInView={{
                                    width: 80,
                                }}
                                transition={{
                                    ease: "easeOut",
                                    delay: 0.3,
                                    duration: 0.4,
                                }}
                                sx={{
                                    // width: 100,
                                    height: 45,
                                    backgroundColor: theme.palette.grey[200],
                                    position: "absolute",
                                    zIndex: 1,
                                    borderTopRightRadius: spacing.tiny,
                                    borderBottomRightRadius: spacing.tiny,
                                }}
                            /> */}
                        </Stack>

                        <Stack spacing={spacing.tiny}>
                            <Typography color={colors.gray}>
                                Hello, I’m Erinç Tuna Polat. I studied Computer
                                Engineering at TED University. Alongside my
                                major, I pursued a minor in psychology to better
                                understand the interaction between humans and
                                technology. I have been working in the software
                                development field for over seven years, and I
                                founded my own company to undertake a wide
                                variety of projects.
                            </Typography>
                            <Typography
                                color={colors.gray}
                                component={motion.p}
                            >
                                I have led various SaaS projects, including IoT
                                device integration, smart lock management, IP
                                camera-based security systems, and systems that
                                manage building access permissions. I developed
                                solutions for both web and mobile platforms
                                using React/Next.js, React Native/Expo and
                                Nodejs. I also optimized projects by managing
                                Docker and CI/CD processes, ensuring seamless
                                integration and continuous deployment.
                            </Typography>
                            <Typography
                                color={colors.gray}
                                component={motion.p}
                            >
                                Among my freelance projects are innovative
                                solutions like event management applications,
                                contactless receipt systems, and fitness
                                assistant apps. I have completed projects for
                                clients from Germany, Canada, and Türkiye across
                                various sectors. With my strong technical
                                expertise and the collaborative work I have done
                                with my teams, I strive to make a difference in
                                the tech world. I look forward to collaborating
                                with potential clients on new projects, helping
                                them accelerate their digital transformation
                                processes.
                            </Typography>
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
                                    md: 400
                                },
                                maxWidth: 400,
                                height: 400,
                                position: "relative",
                            }}
                        >
                            <Image
                                src="/erinc-polat.png"
                                alt="Image of Erinç Polat"
                                fill
                                quality={100}
                                style={{
                                    zIndex: 1,
                                }}
                            />
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
