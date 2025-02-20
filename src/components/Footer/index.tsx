"use client";

import { Stack, Typography } from "@mui/material";

import spacing from "@/utils/spacing";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { useTranslations } from "next-intl";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const Footer = () => {
    const t = useTranslations("footer");

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const containerPaddingX = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "5%"]
    );
    const containerPaddingY = useTransform(
        scrollYProgress,
        [0, 1],
        ["12px", "36px"]
    );
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "16px"]);

    return (
        <Stack
            ref={targetRef}
            component={motion.footer}
            style={{
                backgroundColor: "#fff",
                paddingLeft: containerPaddingX as any,
                paddingRight: containerPaddingX as any,
                paddingTop: containerPaddingY as any,
                paddingBottom: containerPaddingY as any,
                position: "relative",
            }}
        >
            <Stack
                component={motion.div}
                sx={{
                    minHeight: {
                        xs: "20vh",
                        sm: "30vh",
                        md: "40vh",
                    },
                    pb: "1rem",
                }}
                style={{
                    // backgroundColor: colors.primary,
                    borderRadius: borderRadius as any,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Image
                    src="/footer.webp"
                    alt="abstract painting"
                    fill
                    style={{
                        objectFit: "cover",
                        zIndex: 0,
                        filter: "blur(4px) brightness(80%)",
                    }}
                />
                <Stack
                    component={motion.div}
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                    }}
                    sx={{
                        px: spacing.tiny,
                        flex: 1,
                        justifyContent: "center",
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="h3"
                        color="#fff"
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
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        zIndex: 1,
                    }}
                >
                    <Typography
                        color="#fff"
                        textAlign="center"
                        variant="subtitle2"
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
