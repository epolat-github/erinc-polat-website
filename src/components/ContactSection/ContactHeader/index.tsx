import { Container, Stack, Typography } from "@mui/material";
import colors from "@/utils/colors";
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface ContactHeaderType {
    scrollYProgress: MotionValue<number>;
}

const ContactHeader: React.FC<ContactHeaderType> = ({ scrollYProgress }) => {
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
                        md: "rgba(0, 0, 0, 0.1)",
                    },
                    color: "transparent",
                }}
            >
                Contact
            </Typography>
            <Stack
                component={motion.div}
                style={{
                    opacity: opacity as any,
                    //@ts-ignore
                    y: translateY as any,
                }}
            >
                <Typography
                    color={colors.primary}
                    sx={{
                        fontSize: "1.3rem",
                    }}
                >
                    {"Let's"}
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
                    Talk About Your Project.
                </Typography>
                <Typography
                    color={colors.gray}
                    sx={{
                        letterSpacing: 2,
                        fontWeight: 500,
                    }}
                >
                    {
                        "Feel free to ask me any questions. Let's talk about our future collaboration."
                    }
                </Typography>
            </Stack>
        </Container>
    );
};

export default ContactHeader;
