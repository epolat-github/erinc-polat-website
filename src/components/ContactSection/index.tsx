"use client";

import { Box } from "@mui/material";

import ContactHeader from "./ContactHeader";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import ContactForm from "./ContactForm";
import { SnackbarProvider } from "notistack";

const ContactSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "start start"],
    });

    return (
        <SnackbarProvider
            anchorOrigin={{
                horizontal: "center",
                vertical: "bottom",
            }}
        >
            <Box
                id="contact"
                sx={{
                    backgroundColor: "#fff",
                }}
            >
                <ContactHeader scrollYProgress={scrollYProgress} />
                <ContactForm ref={targetRef} />
            </Box>
        </SnackbarProvider>
    );
};

export default ContactSection;
