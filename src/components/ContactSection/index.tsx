"use client";

import { Box } from "@mui/material";

import ContactHeader from "./ContactHeader";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "start start"],
    });

    return (
        <Box
            id="contact"
            sx={{
                backgroundColor: "#fff",
            }}
        >
            <ContactHeader scrollYProgress={scrollYProgress} />
            <ContactForm ref={targetRef} />
        </Box>
    );
};

export default ContactSection;
