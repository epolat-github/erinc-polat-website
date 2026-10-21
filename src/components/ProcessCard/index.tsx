import spacing from "@/utils/spacing";
import { oswald } from "@/utils/fonts";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { semanticColors } from "@/utils/colors";

interface ProcessCardProps {
    title: string;
    description: string;
    imageUrl: string;
    alt: string;
    sizes?: string;
    imagePosition?: "center" | "bottom";
    mobileImageHeight?: number;
    mobileImageScale?: number;
}

const ProcessCard: React.FC<ProcessCardProps> = (props) => {
    const {
        title, description, imageUrl, alt, imagePosition = "center",
        mobileImageHeight, mobileImageScale = 1,
        sizes = "(min-width: 1200px) 608px, (min-width: 900px) calc(58.333vw - 101.333px), (min-width: 600px) calc(100vw - 112px), calc(100vw - 64px)",
    } = props;

    return (
        <Stack
            sx={{
                backgroundColor: semanticColors.surfaceSubtle,
                borderRadius: spacing.small,
                p: { xs: spacing.tiny, sm: spacing.small },
                pb: imagePosition === "bottom" ? { xs: 0, sm: 0 } : 0,
                overflow: "hidden",
                flex: 1,
                height: "100%",
                minWidth: 0,
                overflowWrap: "anywhere",
                justifyContent: "space-between",
            }}
            spacing={spacing.small}
        >
            <Stack spacing={spacing.tiny * 0.7}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: oswald.style.fontFamily,
                        fontWeight: "600",
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body1">{description}</Typography>
            </Stack>
            <Stack
                sx={{
                    flex: 1,
                    minHeight: { xs: mobileImageHeight ?? 220, sm: mobileImageHeight ?? 240, md: 180 },
                    ...(mobileImageScale !== 1 && {
                        "& img": {
                            transform: { xs: `scale(${mobileImageScale})`, md: "none" },
                            transformOrigin: "center bottom",
                        },
                    }),
                    position: "relative",
                }}
            >
                <Image
                    src={imageUrl || ""}
                    alt={alt}
                    fill
                    sizes={sizes}
                    style={{
                        objectFit: "contain",
                        objectPosition: `center ${imagePosition}`,
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default ProcessCard;
