"use client";

import FullScreenImageModal from "@/components/FullScreenImageModal";
import { semanticColors } from "@/utils/colors";
import { Box, BoxProps, ButtonBase } from "@mui/material";
import Image from "next/image";
import { getLoadedPreview, getProjectImageSizes } from "@/utils/projectImageSizes";
import { useState } from "react";

interface SingleImageRowType {
    imageUrl: string;
    alt: string;
    containerStyle?: BoxProps["sx"];
    onImageOpen?: (imageUrl: string, previewUrl?: string) => void;
}

const SingleImageRow: React.FC<SingleImageRowType> = (props) => {
    const { imageUrl, alt, containerStyle, onImageOpen } = props;

    const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

    const [previewUrl, setPreviewUrl] = useState<string>();

    return (
        <>
            <ButtonBase
                onClick={(event) => {
                    const preview = getLoadedPreview(event.currentTarget);
                    if (onImageOpen) {
                        onImageOpen(imageUrl, preview);
                        return;
                    }
                    setPreviewUrl(preview);
                    setIsFullScreenOpen(true);
                }}
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
                        data-project-image-url={imageUrl}
                        quality={50}
                        alt={alt}
                        fill
                        sizes={getProjectImageSizes(imageUrl)}
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </ButtonBase>
            {!onImageOpen && (
                <FullScreenImageModal
                    imageUrl={imageUrl}
                    previewUrl={previewUrl}
                    isOpen={isFullScreenOpen}
                    onClose={() => setIsFullScreenOpen(false)}
                    alt={alt}
                />
            )}
        </>
    );
};

export default SingleImageRow;
