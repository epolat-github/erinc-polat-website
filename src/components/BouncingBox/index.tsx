"use client";

import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface BouncingBoxType {
    children: React.ReactNode;
    style?: React.CSSProperties;
    delay?: number;
    duration?: number;
}

const BouncingBox: React.FC<BouncingBoxType> = ({
    children,
    style,
    delay = 0,
    duration = 6,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);
    const [pageVisible, setPageVisible] = useState(true);

    useEffect(() => {
        const update = () => setPageVisible(!document.hidden);
        update();
        document.addEventListener("visibilitychange", update);
        return () => document.removeEventListener("visibilitychange", update);
    }, []);

    return (
        <Box
            ref={ref}
            sx={{
                "@keyframes projectFloat": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-6px)" },
                },
                animation: `projectFloat ${duration}s ease-in-out ${delay}s infinite`,
                animationPlayState: inView && pageVisible ? "running" : "paused",
                "@media (prefers-reduced-motion: reduce), (max-width: 899.95px)": {
                    animation: "none",
                },
            }}
            style={style}
        >
            {children}
        </Box>
    );
};

export default BouncingBox;
