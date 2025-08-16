"use client";

import colors from "@/utils/colors";
import spacing from "@/utils/spacing";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import MiniGallerySelector from "../MiniGallerySelector";

import dynamic from "next/dynamic";

const Spinner3d = dynamic(() => import("../Spinner3d"), {
    ssr: false,
});

const IMAGES = [
    {
        uri: "/ring/ring-with-person.webp",
        alt: "Ring with person",
    },
    {
        uri: "/ring/ring-1.jpg",
        alt: "Ring with person",
    },
    {
        uri: "/ring/ring-2.webp",
        alt: "Ring with person",
    },
    {
        uri: "/ring/ring-2.webp",
        alt: "Ring with person",
        is3d: true,
    },
    {
        uri: "/ring/ring-2.webp",
        alt: "Ring with person",
        isAr: true,
    },
    // {
    //     uri: "/ring/ring-with-person.webp",
    //     alt: "Ring with person",
    // },
    // {
    //     uri: "/ring/ring-with-person.webp",
    //     alt: "Ring with person",
    // },
    // {
    //     uri: "/ring/ring-with-person.webp",
    //     alt: "Ring with person",
    // },
    // {
    //     uri: "/ring/ring-with-person.webp",
    //     alt: "Ring with person",
    // },
    // {
    //     uri: "/ring/ring-with-person.webp",
    //     alt: "Ring with person",
    // },
    // {
    //     uri: "/ring/ring-with-person.webp",
    //     alt: "Ring with person",
    // },
];

const ProductGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const selectedImage = IMAGES[selectedImageIndex];

    return (
        <Stack
            style={{
                flex: 1,
                height: "100%",
                gap: spacing.medium,
            }}
        >
            {/* BIG IMAGE */}
            <Box
                style={{
                    // height: "100%",
                    flex: 0.8,
                    width: "100%",
                    position: "relative",
                    borderRadius: spacing.big,
                    overflow: "hidden",
                }}
            >
                {selectedImage.is3d ? (
                    <Spinner3d />
                ) : selectedImage.isAr ? (
                    <a href="/wedding_ring.usdz" rel="ar" target="_blank">
                        <Image
                            src={selectedImage.uri}
                            alt={selectedImage.alt}
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </a>
                ) : (
                    <Image
                        src={selectedImage.uri}
                        alt={selectedImage.alt}
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                )}
            </Box>

            <MiniGallerySelector
                activeIndex={selectedImageIndex}
                images={IMAGES}
                onClick={(index: number) => setSelectedImageIndex(index)}
            />
        </Stack>
    );
};

export default ProductGallery;
