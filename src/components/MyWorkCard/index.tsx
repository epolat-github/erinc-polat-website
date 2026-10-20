"use client";

import spacing from "@/utils/spacing";
import { Button, ButtonBase, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { AssetImage } from "@/types/project.type";
import { motion } from "framer-motion";
import { semanticColors } from "@/utils/colors";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface MyWorkCardType {
    title: string;
    description: string;
    images: AssetImage[];
    href: string;
    animationDirection?: "left" | "right";
}

const MyWorkCard: React.FC<MyWorkCardType> = (props) => {
    const {
        title,
        description,
        images,
        href,
        animationDirection = "left",
    } = props;

    const t = useTranslations("my_work_card");

    const initialX = (animationDirection === "left" ? -1 : 1) * 20;

    return (
        <div style={{ overflow: "hidden" }}>
            <motion.div
                initial={{
                    x: `${initialX}px`,
                    opacity: 0,
                }}
                whileInView={{
                    x: "0px",
                    opacity: 1,
                }}
                transition={{
                    duration: 0.7,
                    ease: "linear",
                }}
                viewport={{
                    amount: 0.4,
                    once: true,
                }}
            >
                <ButtonBase component={Link} href={href} disableRipple sx={{ width: "100%", minWidth: 0 }}>
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
                                height: "clamp(220px, 40vw, 400px)",
                                backgroundColor: semanticColors.surface,
                                borderRadius: 4,
                            }}
                            direction="row"
                        >
                            {images.map(({ url, alt }, index) => (
                                <Stack
                                    key={`project-image-${index}`}
                                    sx={{
                                        flex: 1,
                                        position: "relative",
                                    }}
                                >
                                    <Image
                                        src={url}
                                        alt={alt}
                                        fill
                                        sizes={`(min-width: 1200px) ${560 / images.length}px, (min-width: 600px) calc((100vw - 80px) / ${images.length}), calc((100vw - 32px) / ${images.length})`}
                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </Stack>
                            ))}
                        </Stack>

                        <Stack
                            justifyContent="space-between"
                            sx={{
                                minHeight: 220,
                            }}
                        >
                            <Stack gap={spacing.tiny} p={spacing.tiny}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    textAlign="start"
                                >
                                    {title}
                                </Typography>
                                <Divider />
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
                                <Button
                                    component={"div"}
                                    variant="text"
                                    color="primary"
                                    endIcon={<EastRoundedIcon />}
                                    sx={{
                                        fontSize: 16,
                                        background: "transparent",
                                    }}
                                >
                                    {t("cta_button_text")}
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </ButtonBase>
            </motion.div>
        </div>
    );
};

export default MyWorkCard;
