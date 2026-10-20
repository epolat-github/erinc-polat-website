"use client";

import { Box, Button, type ButtonProps } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { ReactNode } from "react";
import colors from "@/utils/colors";

export type InteractiveHoverButtonProps = Omit<ButtonProps, "children" | "startIcon" | "endIcon"> & {
    children: ReactNode;
    icon?: ReactNode;
    pulse?: boolean;
};

// Motion adapted from Obsidian UI's Interactive Hover Button by Atharvsinh.
// Copyright (c) 2026 ObsidianUI. Licensed under MIT.
// Source: https://gitlab.com/Atharvsinh-codez/ObsidianUI
export default function InteractiveHoverButton({
    children,
    icon = <ArrowForwardIcon sx={{ fontSize: 18 }} />,
    pulse = true,
    sx = [],
    ...props
}: InteractiveHoverButtonProps) {
    return (
        <Button
            type="button"
            disableRipple
            {...props}
            sx={[
                {
                    flexShrink: 0,
                    position: "relative",
                    isolation: "isolate",
                    overflow: "hidden",
                    minHeight: 36,
                    px: { xs: 1.5, md: 2 },
                    py: 0.75,
                    borderRadius: 999,
                    backgroundColor: colors.background,
                    color: colors.secondary,
                    border: `1px solid ${colors.secondary}`,
                    fontFamily: "inherit",
                    fontSize: { xs: 12, md: 14 },
                    fontWeight: 600,
                    lineHeight: 1.5,
                    letterSpacing: 0.6,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    boxShadow: "none",
                    "@keyframes interactiveHoverButtonPulse": {
                        "0%, 100%": { scale: "1", opacity: 1 },
                        "50%": { scale: "1.3", opacity: 0.65 },
                    },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        left: { xs: 12, md: 16 },
                        top: "calc(50% - 4px)",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: colors.secondary,
                        transform: "scale(1)",
                        animation: pulse ? "interactiveHoverButtonPulse 2s ease-in-out infinite" : "none",
                        transition: "transform 550ms cubic-bezier(0.4,0,0.2,1)",
                        pointerEvents: "none",
                    },
                    "& .interactive-hover-button-label": {
                        position: "relative",
                        paddingLeft: "14px",
                        transition: "transform 400ms cubic-bezier(0.4,0,0.2,1), opacity 250ms ease",
                    },
                    "& .interactive-hover-button-overlay": {
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0.75,
                        color: colors.onSecondary,
                        opacity: 0,
                        transform: "translateX(32px)",
                        transition: "transform 450ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease",
                        pointerEvents: "none",
                    },
                    "&:hover": {
                        backgroundColor: colors.background,
                        boxShadow: "none",
                    },
                    "@media (hover: hover) and (pointer: fine)": {
                        "&:hover::before": {
                            animation: "none",
                            transform: "scale(45)",
                        },
                        "&:hover .interactive-hover-button-label": { transform: "translateX(48px)", opacity: 0 },
                        "&:hover .interactive-hover-button-overlay": { transform: "translateX(0)", opacity: 1, transitionDelay: "150ms" },
                    },
                    "&:focus-visible::before, &.Mui-focusVisible::before": {
                        animation: "none",
                        transform: "scale(45)",
                    },
                    "&:focus-visible .interactive-hover-button-label, &.Mui-focusVisible .interactive-hover-button-label": {
                        transform: "translateX(48px)",
                        opacity: 0,
                    },
                    "&:focus-visible .interactive-hover-button-overlay, &.Mui-focusVisible .interactive-hover-button-overlay": {
                        transform: "translateX(0)",
                        opacity: 1,
                        transitionDelay: "150ms",
                    },
                    "&:focus-visible, &.Mui-focusVisible": {
                        outline: `3px solid ${colors.secondary}`,
                        outlineOffset: 3,
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                        "&::before": { animation: "none" },
                        "&::before, & .interactive-hover-button-label, & .interactive-hover-button-overlay": {
                            transition: "none",
                        },
                    },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <Box component="span" className="interactive-hover-button-label">
                {children}
            </Box>
            <Box component="span" className="interactive-hover-button-overlay" aria-hidden="true">
                <span>{children}</span>
                {icon}
            </Box>
        </Button>
    );
}
