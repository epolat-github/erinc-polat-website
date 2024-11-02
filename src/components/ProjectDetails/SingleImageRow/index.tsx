"use client";

import FullScreenImageModal from "@/components/FullScreenImageModal";
import theme from "@/utils/theme";
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
                        height: "60vh",
                        width: "100%",
                        position: "relative",
                        backgroundColor: theme.palette.grey[100],
                        borderRadius: "12px",
                        overflow: "hidden",
                        ...containerStyle,
                    }}
                >
                    <Image
                        src={imageUrl}
                        alt={alt}
                        fill
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
