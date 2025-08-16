import { Box, Container, Stack } from "@mui/material";

import colors from "@/utils/colors";
import spacing from "@/utils/spacing";

import { Oswald } from "next/font/google";
import Image from "next/image";
import ProductGallery from "@/components/ProductGallery";
import ProductInformation from "@/components/ProductInformation";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const Marifet = () => {
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
                    flexDirection: "row",
                    paddingTop: spacing.big * 1.5,
                    // paddingBottom: spacing.big,
                    height: "95vh",
                    gap: spacing.medium,
                }}
                spacing={spacing.small}
            >
                <ProductGallery />
                {/* <ProductInformation /> */}
                {/* <a id="ar-viewer" rel="ar" href="/wedding_ring_opaque.usdz">
                    <Image
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                        alt="ar image"
                        id="ar-image"
                        src="/pancakes_preview.png"
                    />
                </a> */}
            </Container>
        </Box>
    );
};

export default Marifet;
