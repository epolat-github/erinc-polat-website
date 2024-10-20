import spacing from "@/utils/spacing";
import theme from "@/utils/theme";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { AssetImage } from "@/types/project.type";

interface MyWorkCardType {
    title: string;
    description: string;
    images: AssetImage[];
    onClick: () => void;
}

const MyWorkCard: React.FC<MyWorkCardType> = (props) => {
    const { title, description, images, onClick } = props;

    return (
        <Stack
            sx={{
                borderColor: theme.palette.grey[200],
                overflow: "hidden",
                borderRadius: 4,
                borderStyle: "solid",
                height: 550,
            }}
            direction="column"
        >
            <Stack
                sx={{
                    width: "100%",
                    height: "60%",
                }}
                direction="row"
            >
                {images.map(({ url, alt }, index) => (
                    <Stack
                        key={`project-image-${index}`}
                        sx={{
                            flex: 1,
                            position: "relative",
                        }}
                    >
                        <Image
                            src={url}
                            alt={alt}
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </Stack>
                ))}
            </Stack>

            <Stack height="40%" justifyContent="space-between">
                <Stack gap={spacing.tiny} p={spacing.tiny}>
                    <Typography variant="h5" fontWeight="bold">
                        {title}
                    </Typography>
                    <Divider
                        sx={{
                            backgroundColor: "#ffffff29",
                            opacity: 0.6,
                        }}
                    />
                    <Typography>{description}</Typography>
                </Stack>

                <Stack
                    sx={{
                        alignItems: "flex-end",
                        pr: spacing.tiny,
                        mb: spacing.tiny / 3,
                    }}
                >
                    <Button
                        variant="text"
                        color="primary"
                        endIcon={<EastRoundedIcon />}
                        sx={{
                            fontSize: 16,
                            background: "transparent",
                        }}
                        onClick={onClick}
                    >
                        Explore work
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default MyWorkCard;
