"use client";

import theme from "@/utils/theme";
import { Box, BoxProps } from "@mui/material";
import Image from "next/image";

interface SingleImageRowType {
    imageUrl: string;
    alt: string;
    containerStyle?: BoxProps["sx"];
}

const SingleImageRow: React.FC<SingleImageRowType> = (props) => {
    const { imageUrl, alt, containerStyle } = props;

    return (
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
    );
};

export default SingleImageRow;
