import BouncingBox from "@/components/BouncingBox";
import ScaleInBox from "@/components/ScaleInBox";
import { Stack, Theme, useMediaQuery } from "@mui/material";
import Image from "next/image";

const ProjectsOverview = () => {
    const matchesMd = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("md")
    );

    return (
        <Stack
            sx={{
                flex: 1,
                position: "relative",
            }}
        >
            <ScaleInBox
                style={{
                    zIndex: 2,
                    height: "100%",
                }}
                delay={0.3}
            >
                <Image
                    src="/welcomeSectionAssets/fitnlit.webp"
                    quality={100}
                    alt="FitNLit project screenshot"
                    fill
                    style={{
                        objectFit: "contain",
                    }}
                />
            </ScaleInBox>

            <ScaleInBox
                style={{
                    zIndex: 3,
                    top: "35%",
                    left: 20,
                    position: "absolute",
                }}
                delay={0.4}
            >
                <BouncingBox delay={0.2}>
                    <Image
                        src="/welcomeSectionAssets/actio.webp"
                        quality={100}
                        alt="Actio project screenshot"
                        width={175}
                        height={275}
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </BouncingBox>
            </ScaleInBox>

            <ScaleInBox
                style={{
                    top: -100,
                    left: matchesMd ? "20%" : "0%",
                    zIndex: 1,
                    position: "absolute",
                }}
                delay={0.1}
            >
                <BouncingBox duration={3}>
                    <Image
                        src="/welcomeSectionAssets/ihrhaus.webp"
                        quality={100}
                        width={matchesMd ? 400 : 300}
                        height={300}
                        alt="IhrHaus project screenshot"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </BouncingBox>
            </ScaleInBox>

            <ScaleInBox
                style={{
                    position: "absolute",
                    bottom: -100,
                    left: matchesMd ? "35%" : "0%",
                    zIndex: 1,
                }}
                delay={0.2}
            >
                <BouncingBox duration={4}>
                    <Image
                        src="/welcomeSectionAssets/zeynepdikdus.webp"
                        quality={100}
                        width={350}
                        height={250}
                        alt="Zeynep Dikdüş website project screenshot"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </BouncingBox>
            </ScaleInBox>
        </Stack>
    );
};

export default ProjectsOverview;
