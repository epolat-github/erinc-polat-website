"use client";

import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { semanticColors } from "@/utils/colors";

const tracks = [
    { direction: "horizontal", line: { xs: 3, md: 3 }, delay: 0 },
    { direction: "horizontal", line: { xs: 9, md: 6 }, delay: 4 },
    { direction: "vertical", line: { xs: 2, md: 4 }, delay: 2 },
    { direction: "vertical", line: { xs: 5, md: 10 }, delay: 6 },
] as const;

export default function FlowPattern() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);
    const [pageVisible, setPageVisible] = useState(true);
    const gridColor = alpha(semanticColors.actionPrimary, 0.075);
    const pulseColor = alpha(semanticColors.actionPrimary, 0.28);

    useEffect(() => {
        const onVisibilityChange = () => setPageVisible(!document.hidden);
        onVisibilityChange();
        document.addEventListener("visibilitychange", onVisibilityChange);
        return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    }, []);

    return (
        <Box
            ref={ref}
            aria-hidden="true"
            sx={{
                "--grid-size": { xs: "64px", md: "96px" },
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                overflow: "hidden",
                maskImage: "radial-gradient(ellipse at 50% 55%, black 15%, transparent 72%), linear-gradient(to bottom, black 40%, rgba(0, 0, 0, 0.35) 60%, transparent 76%)",
                maskComposite: "intersect",
                "@keyframes gridPulseHorizontal": {
                    "0%": { transform: "translateX(0)", opacity: 0 },
                    "8%": { opacity: 1 },
                    "40%": { opacity: 1 },
                    "48%, 100%": { transform: "translateX(calc(100% + 144px))", opacity: 0 },
                },
                "@keyframes gridPulseVertical": {
                    "0%": { transform: "translateY(0)", opacity: 0 },
                    "8%": { opacity: 1 },
                    "40%": { opacity: 1 },
                    "48%, 100%": { transform: "translateY(calc(100% + 144px))", opacity: 0 },
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
                    backgroundSize: "var(--grid-size) var(--grid-size)",
                }}
            />
            {tracks.map((track, index) => {
                const horizontal = track.direction === "horizontal";
                const position = {
                    xs: `calc(var(--grid-size) * ${track.line.xs})`,
                    md: `calc(var(--grid-size) * ${track.line.md})`,
                };

                return (
                    <Box
                        key={index}
                        sx={{
                            position: "absolute",
                            ...(horizontal
                                ? { left: 0, right: 0, top: position, height: "1px" }
                                : { top: 0, bottom: 0, left: position, width: "1px" }),
                            "@media (prefers-reduced-motion: reduce)": { display: "none" },
                        }}
                    >
                        {[0, 0.65].map((beatDelay) => (
                            <Box
                                key={beatDelay}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    opacity: 0,
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        ...(horizontal
                                            ? { left: -144, top: 0, width: 144, height: "1px" }
                                            : { top: -144, left: 0, height: 144, width: "1px" }),
                                        backgroundImage: `linear-gradient(${horizontal ? "90deg" : "180deg"}, transparent, ${pulseColor} 80%, transparent)`,
                                    },
                                    "@media (prefers-reduced-motion: no-preference)": {
                                        animation: `${horizontal ? "gridPulseHorizontal" : "gridPulseVertical"} 10s linear infinite`,
                                        animationDelay: `${track.delay + beatDelay}s`,
                                        animationPlayState: inView && pageVisible ? "running" : "paused",
                                    },
                                }}
                            />
                        ))}
                    </Box>
                );
            })}
        </Box>
    );
}
