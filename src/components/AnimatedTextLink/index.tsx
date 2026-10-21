"use client";

import { Box, Link, type LinkProps } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { ReactNode } from "react";
import { semanticColors } from "@/utils/colors";

export type AnimatedTextLinkProps = Omit<LinkProps, "children" | "href" | "underline"> & {
    children: ReactNode;
    href: string;
    icon?: ReactNode;
};

export default function AnimatedTextLink({
    children,
    href,
    icon = <ArrowForwardIcon sx={{ fontSize: 20 }} />,
    sx = [],
    ...props
}: AnimatedTextLinkProps) {
    return (
        <Link
            {...props}
            href={href}
            underline="none"
            sx={[
                {
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.25,
                    minHeight: 44,
                    maxWidth: "100%",
                    color: semanticColors.actionPrimaryText,
                    fontSize: "1rem",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 4,
                        height: 2,
                        backgroundColor: "currentColor",
                        transform: "scaleX(0)",
                        transformOrigin: "left center",
                        transition: "transform 280ms cubic-bezier(0.16, 1, 0.3, 1)",
                    },
                    "&:hover::after, &:focus-visible::after": {
                        transform: "scaleX(1)",
                    },
                    "@keyframes animatedTextLinkArrow": {
                        "0%, 100%": { transform: "translateX(0)" },
                        "50%": { transform: "translateX(3px)" },
                    },
                    "@media (prefers-reduced-motion: no-preference)": {
                        "&:hover .animated-text-link-icon, &:focus-visible .animated-text-link-icon": {
                            animation: "animatedTextLinkArrow 1600ms ease-in-out infinite",
                        },
                    },
                    "&:focus-visible": {
                        outline: `3px solid ${semanticColors.focusRing}`,
                        outlineOffset: 3,
                        borderRadius: "2px",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                        "&::after": { transition: "none" },
                    },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
            {icon != null && (
                <Box
                    component="span"
                    className="animated-text-link-icon"
                    aria-hidden="true"
                    sx={{ display: "inline-flex", flexShrink: 0 }}
                >
                    {icon}
                </Box>
            )}
        </Link>
    );
}
