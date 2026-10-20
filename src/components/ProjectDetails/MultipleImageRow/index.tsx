"use client";

import FullScreenImageModal from "@/components/FullScreenImageModal";
import spacing from "@/utils/spacing";
import theme from "@/utils/theme";
import { Box, BoxProps, ButtonBase, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type Image = {
    url: string;
    alt: string;
};

interface MultipleImageRowType {
    images: Array<Image>;
    containerStyle?: BoxProps["sx"];
}

const MultipleImageRow: React.FC<MultipleImageRowType> = (props) => {
    const { images, containerStyle } = props;

    const [selectedImage, setSelectedImage] = useState<Image>();

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
                        onClick={() => setSelectedImage(image)}
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
                                backgroundColor: theme.palette.grey[100],
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                quality={50}
                                fill
                                sizes={`(min-width: 1536px) ${(1040 - (images.length - 1) * 16) / images.length}px, (min-width: 900px) calc((75vw - ${112 + (images.length - 1) * 16}px) / ${images.length}), (min-width: 600px) calc((100vw - ${48 + (images.length - 1) * 16}px) / ${images.length}), calc(100vw - 32px)`}
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </ButtonBase>
                ))}
            </Stack>
            <FullScreenImageModal
                imageUrl={selectedImage?.url}
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(undefined)}
                alt={selectedImage?.alt}
            />
        </>
    );
};

export default MultipleImageRow;
