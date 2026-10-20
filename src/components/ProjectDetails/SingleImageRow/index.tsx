"use client";

import FullScreenImageModal from "@/components/FullScreenImageModal";
import { semanticColors } from "@/utils/colors";
import { Box, BoxProps, ButtonBase } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface SingleImageRowType {
    imageUrl: string;
    alt: string;
    containerStyle?: BoxProps["sx"];
}

const SingleImageRow: React.FC<SingleImageRowType> = (props) => {
    const { imageUrl, alt, containerStyle } = props;

    const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

    return (
        <>
            <ButtonBase
                onClick={() => setIsFullScreenOpen(true)}
                sx={{
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        height: "clamp(220px, 56vw, 640px)",
                        width: "100%",
                        position: "relative",
                        backgroundColor: semanticColors.surface,
                        borderRadius: "12px",
                        overflow: "hidden",
                        ...containerStyle,
                    }}
                >
                    <Image
                        src={imageUrl}
                        quality={50}
                        alt={alt}
                        fill
                        sizes="(min-width: 1536px) 1040px, (min-width: 900px) calc(75vw - 112px), (min-width: 600px) calc(100vw - 48px), calc(100vw - 32px)"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </ButtonBase>
            <FullScreenImageModal
                imageUrl={imageUrl}
                isOpen={isFullScreenOpen}
                onClose={() => setIsFullScreenOpen(false)}
                alt={alt}
            />
        </>
    );
};

export default SingleImageRow;
