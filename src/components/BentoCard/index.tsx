import colors from "@/utils/colors";
import spacing from "@/utils/spacing";
import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import Grid, { GridSize } from "@mui/material/Grid2";

interface BentoCardType {
    asset?: React.ReactNode;
    title: string;
    description: string;
    icon?: React.ReactNode;
    size?: GridSize;
    sx?: SxProps<Theme>;
}

const BentoCard: React.FC<BentoCardType> = (props) => {
    const { asset, description, icon, title, size = 6, sx } = props;

    return (
        <Grid
            size={size}
            sx={{
                minHeight: 500,
                overflow: "hidden",
                borderRadius: "12px",
                backgroundColor: "white",
                boxShadow:
                    "0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)",
                transform: "translateZ(0)",
                ...sx,
            }}
        >
            <Stack
                flex={1}
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <Box
                    flex={0.8}
                    sx={{
                        position: "relative",
                    }}
                >
                    {asset}
                </Box>

                <Stack
                    flex={0.2}
                    sx={{
                        px: spacing.small,
                    }}
                >
                    <Typography
                        color={colors.header}
                        variant="caption"
                        fontWeight={600}
                        sx={{
                            fontSize: "1.5rem",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography color={colors.gray}>{description}</Typography>
                </Stack>
            </Stack>
        </Grid>
    );
};

export default BentoCard;
