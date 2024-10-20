"use client";

import spacing from "@/utils/spacing";
import theme from "@/utils/theme";
import { Box, BoxProps, Stack } from "@mui/material";
import Image from "next/image";

interface MultipleImageRowType {
    images: Array<{
        url: string;
        alt: string;
    }>;
    containerStyle?: BoxProps["sx"];
}

const MultipleImageRow: React.FC<MultipleImageRowType> = (props) => {
    const { images, containerStyle } = props;

    return (
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
                <Box
                    key={`image-${index}`}
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
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Box>
            ))}
        </Stack>
    );
};

export default MultipleImageRow;
