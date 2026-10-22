"use client";

import spacing from "@/utils/spacing";
import { Box, ButtonBase, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { AssetImage } from "@/types/project.type";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { semanticColors } from "@/utils/colors";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useRef } from "react";

interface MyWorkCardType {
    title: string;
    description: string;
    images: AssetImage[];
    href: string;
    animationDirection?: "left" | "right";
    sizes?: string;
    titleComponent?: "h2" | "h3" | "h5";
    entranceDelay?: number;
    analyticsLocation?: "home_works" | "project_list";
}

const MyWorkCard: React.FC<MyWorkCardType> = (props) => {
    const {
        title,
        description,
        images,
        href,
        animationDirection = "left",
        sizes,
        titleComponent = "h3",
        entranceDelay = 0,
        analyticsLocation = "home_works",
    } = props;

    const t = useTranslations("my_work_card");

    const reduceMotion = useReducedMotion();
    const entranceRef = useRef<HTMLDivElement>(null);
    // Start once the stationary layout box has entered the viewport by 48px.
    const hasEntered = useInView(entranceRef, {
        once: true,
        amount: "some",
        margin: "0px 0px -48px 0px",
    });
    const initialX = (animationDirection === "left" ? -1 : 1) * 8;
    const imageCount = Math.max(images.length, 1);
    const imageSizes = sizes ?? `(min-width: 1200px) ${544 / imageCount}px, (min-width: 900px) calc((100vw - 112px) / ${2 * imageCount}), (min-width: 600px) calc((100vw - 48px) / ${imageCount}), calc((100vw - 32px) / ${imageCount})`;

    return (
        <Box ref={entranceRef} sx={{
            "--work-enter-x": { xs: "0px", md: `${initialX}px` },
            "--work-enter-y": { xs: "28px", md: "40px" },
            minWidth: 0,
        }}>
            <motion.div
                initial="rest"
                animate={hasEntered || reduceMotion ? "visible" : "rest"}
                variants={{
                    rest: {
                        x: reduceMotion ? 0 : "var(--work-enter-x)",
                        y: reduceMotion ? 0 : "var(--work-enter-y)",
                        opacity: reduceMotion ? 1 : 0,
                    },
                    visible: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: reduceMotion ? 0 : 0.7,
                            delay: reduceMotion ? 0 : entranceDelay,
                            ease: [0.22, 0.61, 0.36, 1],
                            opacity: {
                                duration: reduceMotion ? 0 : 0.45,
                                delay: reduceMotion ? 0 : entranceDelay,
                            },
                        },
                    },
                }}
            >
                <ButtonBase component={Link} href={href}
                    data-analytics-event="project_click"
                    data-analytics-project={href.split("/").filter(Boolean).at(-1)}
                    data-analytics-location={analyticsLocation}
                    disableRipple sx={{
                    width: "100%",
                    minWidth: 0,
                    borderRadius: 4,
                    "& .work-card-image, & .work-card-arrow": {
                        transition: "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                    },
                    "&.Mui-focusVisible .work-card-image": { transform: "scale(1.02)" },
                    "&.Mui-focusVisible .work-card-arrow": { transform: "translateX(3px)" },
                    "@media (hover: hover) and (pointer: fine)": {
                        "&:hover .work-card-image": { transform: "scale(1.02)" },
                        "&:hover .work-card-arrow": { transform: "translateX(3px)" },
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                        "& .work-card-image, & .work-card-arrow": {
                            transition: "none",
                            transform: "none !important",
                        },
                    },
                }}>
                    <Stack
                        sx={{
                            overflow: "hidden",
                            height: "100%",
                            width: "100%",
                            minWidth: 0,
                            overflowWrap: "anywhere",
                        }}
                        direction="column"
                    >
                        <Stack
                            sx={{
                                width: "100%",
                                aspectRatio: "7 / 5",
                                maxHeight: 400,
                                overflow: "hidden",
                                backgroundColor: semanticColors.surfaceSubtle,
                                borderRadius: 4,
                            }}
                            direction="row"
                        >
                            <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
                                {images.map(({ url, alt }, index) => (
                                    <Stack
                                        key={`project-image-${index}`}
                                        sx={{
                                            flex: 1,
                                            position: "relative",
                                        }}
                                    >
                                        <Image
                                            className="work-card-image"
                                            src={url}
                                            alt={alt}
                                            fill
                                            sizes={imageSizes}
                                            style={{
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>

                        <Stack
                            justifyContent="space-between"
                            sx={{
                                minHeight: { xs: 0, md: 200 },
                            }}
                        >
                            <Stack gap={spacing.tiny} p={spacing.tiny}>
                                <Typography
                                    variant="h5"
                                    component={titleComponent}
                                    fontWeight="bold"
                                    textAlign="start"
                                >
                                    {title}
                                </Typography>
                                <Divider sx={{ opacity: 0.6 }} />
                                <Typography textAlign="start">
                                    {description}
                                </Typography>
                            </Stack>

                            <Stack
                                sx={{
                                    alignItems: "flex-end",
                                    pr: spacing.tiny,
                                    mb: spacing.tiny / 3,
                                }}
                            >
                                <Stack
                                    component="span"
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        minHeight: 44,
                                        color: semanticColors.actionPrimaryText,
                                        fontSize: 16,
                                        fontWeight: 500,
                                    }}
                                >
                                    {t("cta_button_text")}
                                    <EastRoundedIcon className="work-card-arrow" aria-hidden="true" />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </ButtonBase>
            </motion.div>
        </Box>
    );
};

export default MyWorkCard;
