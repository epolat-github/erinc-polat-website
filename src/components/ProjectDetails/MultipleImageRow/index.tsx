"use client";

import FullScreenImageModal from "@/components/FullScreenImageModal";
import spacing from "@/utils/spacing";
import { semanticColors } from "@/utils/colors";
import { Box, BoxProps, ButtonBase, Stack } from "@mui/material";
import Image from "next/image";
import { getLoadedPreview, getProjectImageSizes } from "@/utils/projectImageSizes";
import { useState } from "react";

type Image = {
    url: string;
    alt: string;
};

interface MultipleImageRowType {
    images: Array<Image>;
    containerStyle?: BoxProps["sx"];
    onImageOpen?: (imageUrl: string, previewUrl?: string) => void;
}

const MultipleImageRow: React.FC<MultipleImageRowType> = (props) => {
    const { images, containerStyle, onImageOpen } = props;

    const [selectedImage, setSelectedImage] = useState<Image>();

    const [previewUrl, setPreviewUrl] = useState<string>();

    return (
        <>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={spacing.tiny}
                sx={{
                    height: { xs: "auto", sm: "clamp(280px, 45vw, 640px)" },
                    width: "100%",
                    ...containerStyle,
                }}
            >
                {images.map((image, index) => (
                    <ButtonBase
                        key={`image-${index}`}
                        onClick={(event) => {
                            const preview = getLoadedPreview(event.currentTarget);
                            if (onImageOpen) {
                                onImageOpen(image.url, preview);
                                return;
                            }
                            setPreviewUrl(preview);
                            setSelectedImage(image);
                        }}
                        sx={{
                            height: { xs: "clamp(220px, 75vw, 400px)", sm: "100%" },
                            width: "100%",
                            minWidth: 0,
                            flex: { sm: 1 },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "100%",
                                position: "relative",
                                backgroundColor: semanticColors.surfaceSubtle,
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={image.url}
                                data-project-image-url={image.url}
                                alt={image.alt}
                                quality={50}
                                fill
                                sizes={getProjectImageSizes(image.url, images.length, true)}
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </ButtonBase>
                ))}
            </Stack>
            {!onImageOpen && (
                <FullScreenImageModal
                    imageUrl={selectedImage?.url}
                    previewUrl={previewUrl}
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(undefined)}
                    alt={selectedImage?.alt}
                />
            )}
        </>
    );
};

export default MultipleImageRow;
