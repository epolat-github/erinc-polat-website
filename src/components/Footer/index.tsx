"use client";

import colors from "@/utils/colors";
import { Stack, Typography } from "@mui/material";

import spacing from "@/utils/spacing";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlowSemiCondensed = Barlow_Semi_Condensed({
    subsets: ["latin", "latin-ext"],
    weight: "400",
    style: "normal",
});

const Footer = () => {
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
                    backgroundColor: colors.primary,
                    borderRadius: borderRadius as any,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
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
                            fontFamily: barlowSemiCondensed.style.fontFamily,
                        }}
                    >
                        {"Let's bring your project come to life together!"}
                    </Typography>
                </Stack>

                <Stack direction="row">
                    <Typography
                        color="#fff"
                        textAlign="center"
                        variant="subtitle2"
                    >
                        {`Copyright © ${new Date().getFullYear()} - Erinç Polat - All Rights Reserved`}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;
