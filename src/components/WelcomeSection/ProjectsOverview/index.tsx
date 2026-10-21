"use client";

import BouncingBox from "@/components/BouncingBox";
import ScaleInBox from "@/components/ScaleInBox";
import { Box, Stack, useMediaQuery, type Theme } from "@mui/material";
import type { MotionStyle } from "framer-motion";
import Image, { getImageProps, type ImageProps } from "next/image";
import { type CSSProperties, useState } from "react";
import { useTranslations } from "next-intl";

const heroImage = {
    src: "/welcomeSectionAssets/fitnlit.webp",
    alt: "",
    fill: true,
    sizes: "(min-width: 1200px) 460px, (min-width: 900px) 40vw, calc(100vw - 32px)",
} satisfies ImageProps;
const { props: heroImageProps } = getImageProps(heroImage);

// Wait for each decoded image so a slow connection cannot skip its entrance.
const ProjectPreview = ({
    delay,
    style,
    floatDuration,
    imageStyle,
    ...imageProps
}: Omit<ImageProps, "style"> & {
    delay: number;
    style: MotionStyle;
    floatDuration?: number;
    imageStyle?: CSSProperties;
}) => {
    const [ready, setReady] = useState(false);
    const desktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
    const image = (
        <Image
            {...imageProps}
            alt={imageProps.alt}
            style={imageProps.fill ? { objectFit: "contain" } : {
                objectFit: "contain",
                maxWidth: "100%",
                height: imageProps.height,
                display: "block",
                ...imageStyle,
            }}
            onLoad={() => setReady(true)}
            onError={() => setReady(true)}
        />
    );

    return (
        <ScaleInBox delay={desktop ? delay : 0} duration={0.65} style={style} ready={ready}>
            {floatDuration ? (
                <BouncingBox duration={floatDuration} delay={1}>{image}</BouncingBox>
            ) : image}
        </ScaleInBox>
    );
};

const ProjectsOverview = () => {
    const t = useTranslations("welcome_section");
    return (
        <Stack sx={{ flex: 1, position: "relative", minHeight: { xs: 600, md: "auto" } }}>
            {/* The collage is below the text on mobile; reserve preload for desktop. */}
            <link
                rel="preload"
                as="image"
                imageSrcSet={heroImageProps.srcSet}
                imageSizes={heroImageProps.sizes}
                media="(min-width: 900px)"
            />
            <ProjectPreview
                style={{ zIndex: 2, position: "absolute", inset: 0 }}
                delay={0.14}
                {...heroImage}
                alt={t("fitnlit_alt")}
            />
            <ProjectPreview
                style={{ zIndex: 3, top: "35%", left: 20, position: "absolute" }}
                delay={0.24}
                floatDuration={8}
                src="/welcomeSectionAssets/actio.webp"
                alt={t("actio_alt")}
                width={175}
                height={275}
            />
            <Box sx={{
                position: "absolute",
                top: -100,
                left: { xs: 0, md: "auto" },
                right: { xs: "auto", md: 0 },
                zIndex: 1,
                width: { xs: 300, md: 400 },
                maxWidth: "100%",
            }}>
                <ProjectPreview
                    style={{ position: "relative" }}
                    delay={0.2}
                    src="/welcomeSectionAssets/ihrhaus.webp"
                    width={400}
                    height={300}
                    sizes="(min-width: 900px) 400px, (min-width: 332px) 300px, calc(100vw - 32px)"
                    alt={t("ihrhaus_alt")}
                />
            </Box>
            <Box sx={{
                position: "absolute",
                bottom: -100,
                left: { xs: 0, md: "auto" },
                right: { xs: "auto", md: 0 },
                zIndex: 1,
                width: 350,
                maxWidth: "calc(100vw - 32px)",
            }}>
                <ProjectPreview
                    style={{ position: "relative" }}
                    delay={0.3}
                    floatDuration={10}
                    src="/welcomeSectionAssets/zeynepdikdus.webp"
                    width={1282}
                    height={857}
                    imageStyle={{ width: "100%", height: "auto" }}
                    sizes="(max-width: 381px) calc(100vw - 32px), 350px"
                    alt={t("zeynep_alt")}
                />
            </Box>
        </Stack>
    );
};

export default ProjectsOverview;
