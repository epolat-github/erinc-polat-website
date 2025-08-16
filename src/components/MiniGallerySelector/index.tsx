import spacing from "@/utils/spacing";
import { Box, ButtonBase, Stack } from "@mui/material";
import Image from "next/image";

interface MiniGallerySelectorProps {
    images: Array<{
        uri: string;
        alt: string;
        is3d?: boolean;
    }>;
    activeIndex: number;
    onClick: (index: number) => void;
}

const MiniGallerySelector: React.FC<MiniGallerySelectorProps> = ({
    activeIndex,
    images,
    onClick,
}) => {
    return (
        <Stack
            style={{
                width: "100%",
                overflow: "hidden",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                flexGrow: 0.2,
                gap: spacing.big,
                paddingTop: spacing.small,
                paddingBottom: spacing.small,
            }}
        >
            {images.map((image, index) => (
                <ButtonBase
                    key={`image-${index}`}
                    onClick={() => onClick(index)}
                    style={{
                        height: "90%",
                        width: "100%",
                        maxWidth: 150,
                        borderRadius: spacing.big * 2,
                        overflow: "hidden",
                        borderWidth: 1.3,
                        borderStyle: "solid",
                        borderColor: "#EDF2FA",
                        transition: "all 300ms",
                        position: "relative",
                        ...(activeIndex === index
                            ? {
                                  boxShadow:
                                      "0px 10px 15px -3px rgba(0,0,0,0.1)",
                              }
                            : {}),
                    }}
                >
                    <Box
                        style={{
                            height: "100%",
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        <Image
                            src={image.uri}
                            alt={image.alt}
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                    {image.is3d && (
                        <Image
                            src="/icons/360-degrees.png"
                            alt="360 degree icon"
                            width={50}
                            height={35}
                            style={{
                                objectFit: "contain",
                                position: "absolute",
                                top: spacing.small,
                                right: spacing.small,
                                opacity: 0.6,
                            }}
                        />
                    )}
                </ButtonBase>
            ))}
        </Stack>
    );
};

export default MiniGallerySelector;
