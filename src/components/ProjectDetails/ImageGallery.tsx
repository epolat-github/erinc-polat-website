"use client";

import { Stack } from "@mui/material";
import { useRef, useState } from "react";
import FullScreenImageModal from "@/components/FullScreenImageModal";
import SingleImageRow from "./SingleImageRow";
import MultipleImageRow from "./MultipleImageRow";
import type { AssetRow } from "@/types/project.type";
import colors from "@/utils/colors";
import spacing from "@/utils/spacing";

/** One viewer spans every row, in the same order as the project page. */
export default function ImageGallery({ assetRows }: { assetRows: AssetRow[] }) {
    const container = useRef<HTMLDivElement>(null);
    const images = assetRows.flatMap((row) =>
        row.type === "SINGLE" ? [row.image] : row.images
    );
    const [selection, setSelection] = useState<{ index: number; previewUrl?: string }>();
    const selectedImage = selection === undefined ? undefined : images[selection.index];

    const openImage = (imageUrl: string, previewUrl?: string) => {
        const index = images.findIndex((image) => image.url === imageUrl);
        if (index >= 0) setSelection({ index, previewUrl });
    };

    const navigate = (offset: number) => {
        setSelection((current) => {
            if (!current || images.length < 2) return current;
            const index = (current.index + offset + images.length) % images.length;
            const thumbnail = Array.from(container.current?.querySelectorAll("img") ?? [])
                .find((image) => image.dataset.projectImageUrl === images[index].url);
            const previewUrl = thumbnail?.complete && thumbnail.naturalWidth > 0
                ? thumbnail.currentSrc : undefined;
            return { index, previewUrl };
        });
    };

    return (
        <Stack
            ref={container}
            spacing={spacing.tiny}
            sx={{
                flex: 1,
                alignItems: "center",
                backgroundColor: colors.background,
                zIndex: 2,
            }}
        >
            {assetRows.map((row, index) =>
                row.type === "SINGLE" ? (
                    <SingleImageRow
                        key={index}
                        imageUrl={row.image.url}
                        alt={row.image.alt}
                        onImageOpen={openImage}
                    />
                ) : (
                    <MultipleImageRow
                        key={index}
                        images={row.images}
                        onImageOpen={openImage}
                    />
                )
            )}
            <FullScreenImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelection(undefined)}
                imageUrl={selectedImage?.url}
                alt={selectedImage?.alt}
                previewUrl={selection?.previewUrl}
                navigation={selection && images.length > 1 ? {
                    index: selection.index,
                    count: images.length,
                    onPrevious: () => navigate(-1),
                    onNext: () => navigate(1),
                } : undefined}
            />
        </Stack>
    );
}
