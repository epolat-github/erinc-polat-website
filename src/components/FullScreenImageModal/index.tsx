import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import spacing from "@/utils/spacing";

interface FullScreenImageModalType {
    onClose: () => void;
    imageUrl?: string;
    isOpen: boolean;
    alt?: string;
}

const FullScreenImageModal: React.FC<FullScreenImageModalType> = (props) => {
    const { onClose, imageUrl, isOpen, alt } = props;

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
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
                    bgColor: "transparent",
                    height: "90vh",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: spacing.small,
                        overflow: "hidden",
                        bgColor: "red",
                    }}
                >
                    {imageUrl && (
                        <Image
                            src={imageUrl || ""}
                            alt={alt || "Full Screen Image"}
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default FullScreenImageModal;
