import { Box, Container, Stack } from "@mui/material";

import colors from "@/utils/colors";
import spacing from "@/utils/spacing";

import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const ArDemo = () => {
    return (
        <Box
            sx={{
                backgroundColor: colors.background,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    paddingTop: spacing.big * 1.5,
                    paddingBottom: spacing.big,
                }}
                spacing={spacing.small}
            >
                <a id="ar-viewer" rel="ar" href="/wedding_ring.usdz">
                    <Image
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                        alt="ar image"
                        id="ar-image"
                        src="/pancakes_preview.png"
                    />
                </a>
            </Container>
        </Box>
    );
};

export default ArDemo;
