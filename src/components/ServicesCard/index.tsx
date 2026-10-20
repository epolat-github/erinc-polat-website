import spacing from "@/utils/spacing";
import { oswald } from "@/utils/fonts";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import colors from "@/utils/colors";

interface ServicesCardProps {
    title: string;
    description: string;
    imageUrl: string;
    alt: string;
    sizes?: string;
}

const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    const {
        title, description, imageUrl, alt,
        sizes = "(min-width: 1200px) 608px, (min-width: 900px) calc(58.333vw - 101.333px), (min-width: 600px) calc(100vw - 112px), calc(100vw - 64px)",
    } = props;

    return (
        <Stack
            sx={{
                backgroundColor: colors.surface,
                borderRadius: spacing.small,
                p: { xs: spacing.tiny, sm: spacing.small },
                pb: 0,
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
                    minHeight: { xs: 220, sm: 240, md: 180 },
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
                        verticalAlign: "bottom",
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default ServicesCard;
