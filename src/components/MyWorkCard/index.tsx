import spacing from "@/utils/spacing";
import { Button, ButtonBase, Divider, Stack, Typography } from "@mui/material";
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
        <ButtonBase onClick={onClick} disableRipple>
            <Stack
                sx={{
                    overflow: "hidden",
                    height: "100%",
                }}
                direction="column"
            >
                <Stack
                    sx={{
                        width: "100%",
                        height: 400,
                        backgroundColor: "#F9F9F9",
                        borderRadius: 4
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

                <Stack
                    justifyContent="space-between"
                    sx={{
                        height: 220,
                    }}
                >
                    <Stack gap={spacing.tiny} p={spacing.tiny}>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            textAlign="start"
                        >
                            {title}
                        </Typography>
                        <Divider
                            sx={{
                                backgroundColor: "#ffffff29",
                                opacity: 0.6,
                            }}
                        />
                        <Typography textAlign="start">{description}</Typography>
                    </Stack>

                    <Stack
                        sx={{
                            alignItems: "flex-end",
                            pr: spacing.tiny,
                            mb: spacing.tiny / 3,
                        }}
                    >
                        <Button
                            component={"div"}
                            variant="text"
                            color="primary"
                            endIcon={<EastRoundedIcon />}
                            sx={{
                                fontSize: 16,
                                background: "transparent",
                            }}
                        >
                            Explore work
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </ButtonBase>
    );
};

export default MyWorkCard;
