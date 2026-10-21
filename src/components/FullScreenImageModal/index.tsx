"use client";

import {
    Box,
    CircularProgress,
    Dialog,
    DialogContent,
    IconButton,
    Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useTranslations } from "next-intl";
import spacing from "@/utils/spacing";
import { useState } from "react";
import { getModalImageSizes } from "@/utils/projectImageSizes";

const navigationButtonSx = {
    color: "white",
    bgcolor: "rgba(0, 0, 0, 0.7)",
    width: 44,
    height: 44,
    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.85)" },
};

interface FullScreenImageModalType {
    onClose: () => void;
    imageUrl?: string;
    isOpen: boolean;
    alt?: string;
    previewUrl?: string;
    navigation?: {
        index: number;
        count: number;
        onPrevious: () => void;
        onNext: () => void;
    };
}

// Mounted inside Dialog so each opening starts with its own loading state.
const ModalImage = ({ imageUrl, previewUrl, alt, controlsHeight }: {
    imageUrl: string;
    previewUrl?: string;
    alt: string;
    controlsHeight: number;
}) => {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
    const t = useTranslations("accessibility");
    const loaded = status === "loaded";
    return (
        <>
            {!previewUrl && status !== "loaded" && (
                <Box sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "white" }}>
                    {status === "loading" ? (
                        <CircularProgress color="inherit" aria-label={t("loading_image")} />
                    ) : (
                        <Typography role="alert">{t("image_load_error")}</Typography>
                    )}
                </Box>
            )}
            {previewUrl && !loaded && (
                <Image
                    src={previewUrl}
                    alt=""
                    aria-hidden="true"
                    unoptimized
                    fill
                    style={{ objectFit: "contain" }}
                />
            )}
            <Image
                src={imageUrl}
                alt={alt}
                fill
                quality={90}
                sizes={getModalImageSizes(imageUrl, controlsHeight)}
                loading="eager"
                fetchPriority="high"
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                style={{
                    objectFit: "contain",
                    opacity: loaded ? 1 : 0,
                }}
            />
        </>
    );
};

const FullScreenImageModal: React.FC<FullScreenImageModalType> = (props) => {
    const { onClose, imageUrl, isOpen, alt, previewUrl, navigation } = props;
    const canNavigate = navigation && navigation.count > 1;
    const controlsHeight = canNavigate ? 56 : 0;
    const t = useTranslations("accessibility");

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            onKeyDown={(event) => {
                if (!isOpen || !canNavigate || event.altKey || event.ctrlKey ||
                    event.metaKey || event.shiftKey) return;
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                    event.preventDefault();
                    if (event.key === "ArrowLeft") navigation.onPrevious();
                    else navigation.onNext();
                }
            }}
            fullWidth
            maxWidth="md"
            PaperProps={{
                sx: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                },
            }}
            sx={{
                backdropFilter: "blur(4px)",
            }}
        >
            <IconButton
                onClick={onClose}
                aria-label={t("close_image")}
                sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 999,
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent
                sx={{
                    backgroundColor: "transparent",
                    padding: 0,
                    height: `min(calc(90vh - ${controlsHeight}px), calc(100dvh - ${64 + controlsHeight}px))`,
                    flexShrink: 0,
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        borderRadius: spacing.small,
                        overflow: "hidden",
                    }}
                >
                    {imageUrl && (
                        <ModalImage
                            key={imageUrl}
                            imageUrl={imageUrl}
                            previewUrl={previewUrl}
                            controlsHeight={controlsHeight}
                            alt={alt ?? t("project_image")}
                        />
                    )}
                </Box>
            </DialogContent>
            {canNavigate && (
                <Box sx={{
                    height: 56,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                }}>
                    <IconButton
                        onClick={navigation.onPrevious}
                        aria-label={t("previous_image")}
                        sx={navigationButtonSx}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    <Box
                        component="span"
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                        aria-label={t("image_position", { current: navigation.index + 1, total: navigation.count })}
                        sx={{
                            color: "white",
                            bgcolor: "rgba(0, 0, 0, 0.7)",
                            borderRadius: "12px",
                            px: 2,
                            py: 1,
                            fontVariantNumeric: "tabular-nums",
                        }}
                    >
                        {navigation.index + 1} / {navigation.count}
                    </Box>
                    <IconButton
                        onClick={navigation.onNext}
                        aria-label={t("next_image")}
                        sx={navigationButtonSx}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            )}
        </Dialog>
    );
};

export default FullScreenImageModal;
