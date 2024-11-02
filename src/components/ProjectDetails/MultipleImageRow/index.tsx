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
                direction="row"
                spacing={spacing.tiny}
                sx={{
                    height: "60vh",
                    width: "100%",
                    ...containerStyle,
                }}
            >
                {images.map((image, index) => (
                    <ButtonBase
                        key={`image-${index}`}
                        onClick={() => setSelectedImage(image)}
                        sx={{ height: "100%", width: "100%" }}
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
