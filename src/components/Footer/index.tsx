"use client";

import { Stack, Typography } from "@mui/material";

import spacing from "@/utils/spacing";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { oswald } from "@/utils/fonts";
import Image from "next/image";
import { useTranslations } from "next-intl";
import colors from "@/utils/colors";
import FadeInItem from "@/components/FadeInItem";

const Footer = () => {
    const t = useTranslations("footer");
    const reduceMotion = useReducedMotion();

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    // Only the artwork moves; text and document layout stay stable during scroll.
    const backgroundScaleX = useTransform(scrollYProgress, [0, 1], [1 / 0.9, 1]);

    return (
        <Stack
            ref={targetRef}
            component="footer"
            sx={{
                backgroundColor: colors.background,
                px: "5%",
                py: "36px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Stack
                sx={{
                    minHeight: {
                        xs: "20vh",
                        sm: "30vh",
                        md: "40vh",
                    },
                    pb: "1rem",
                }}
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <motion.div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 16,
                        overflow: "hidden",
                        scaleX: reduceMotion ? 1 : backgroundScaleX,
                    }}
                >
                    <Image
                        src="/footer.webp"
                        alt=""
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            zIndex: 0,
                            filter: "blur(4px) brightness(80%)",
                        }}
                    />
                </motion.div>
                <Stack
                    sx={{
                        px: spacing.tiny,
                        flex: 1,
                        justifyContent: "center",
                        zIndex: 1,
                    }}
                >
                    <FadeInItem delay={0.5}>
                        <Typography
                            variant="h3"
                            component="p"
                            color={colors.background}
                            textAlign="center"
                            sx={{
                                fontSize: {
                                    xs: "1.5rem",
                                    sm: "2rem",
                                    md: "3rem",
                                },
                                lineHeight: 1.4,
                                fontFamily: oswald.style.fontFamily,
                            }}
                        >
                            {t("text")}
                        </Typography>
                    </FadeInItem>
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        zIndex: 1,
                    }}
                >
                    <Typography
                        color={colors.background}
                        textAlign="center"
                        variant="subtitle2"
                        component="p"
                    >
                        {t("copyright", {
                            year: new Date().getFullYear(),
                        })}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;
