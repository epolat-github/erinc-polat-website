import { Container, Stack, Typography } from "@mui/material";
import colors from "@/utils/colors";
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

interface ContactHeaderType {
    scrollYProgress: MotionValue<number>;
}

const MotionStack = motion.create(Stack);

const ContactHeader: React.FC<ContactHeaderType> = ({ scrollYProgress }) => {
    const t = useTranslations("contact_header");

    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.2, 0]);
    const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

    return (
        <Container
            component={Stack}
            maxWidth="lg"
            sx={{
                minHeight: "60vh",
                justifyContent: "center",
                alignItems: "center",
                position: "sticky",
                top: 0,
                left: 0,
                zIndex: 0,
            }}
        >
            <Typography
                sx={{
                    position: "absolute",
                    fontSize: {
                        md: "25vw",
                        xs: "25vw",
                    },
                    fontWeight: "bold",
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: {
                        xs: "rgba(0, 0, 0, 0.05)",
                        md: "rgba(0, 0, 0, 0.07)",
                    },
                    color: "transparent",
                }}
            >
                {t("background_title")}
            </Typography>
            <MotionStack
                sx={{ width: "100%", minWidth: 0, overflowWrap: "anywhere" }}
                style={{
                    opacity,
                    y: translateY,
                }}
            >
                <Typography
                    color={colors.primaryText}
                    sx={{
                        fontSize: "1.3rem",
                    }}
                >
                    {t("small_title")}
                </Typography>
                <Typography
                    color={colors.header}
                    sx={{
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        fontSize: {
                            xs: "2rem",
                            md: "3rem",
                        },
                        fontWeight: 600,
                    }}
                >
                    {t("title")}
                </Typography>
                <Typography
                    color={colors.gray}
                    sx={{
                        letterSpacing: 2,
                        fontWeight: 500,
                    }}
                >
                    {t("subtitle")}
                </Typography>
            </MotionStack>
        </Container>
    );
};

export default ContactHeader;
