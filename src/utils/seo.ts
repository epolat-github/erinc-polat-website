import type { Metadata } from "next";
import defaultSocialImage from "@/app/opengraph-image.jpg";
import dimensions from "@/data/project-image-dimensions.json";
import type { AssetImage } from "@/types/project.type";

export const siteUrl = "https://www.erincpolat.com";
export const siteLocales = ["en", "tr"] as const;

export function localizedUrl(locale: string, path = ""): string {
    return `${siteUrl}/${locale}${path}`;
}

export function languageAlternates(path = "") {
    return {
        en: localizedUrl("en", path),
        tr: localizedUrl("tr", path),
        "x-default": localizedUrl("en", path),
    };
}

interface PageMetadataOptions {
    locale: string;
    path?: string;
    title: string;
    description: string;
    image?: AssetImage;
}

/** Keep canonical, language variants and social cards tied to the same page. */
export function createPageMetadata({
    locale, path = "", title, description, image,
}: PageMetadataOptions): Metadata {
    const imageDimensions: Record<string, { width: number; height: number }> = dimensions;
    const socialImage = image ? {
        url: new URL(image.url, siteUrl).href,
        alt: image.alt,
        ...imageDimensions[image.url],
    } : {
        url: new URL(defaultSocialImage.src, siteUrl).href,
        width: defaultSocialImage.width,
        height: defaultSocialImage.height,
        alt: locale === "tr"
            ? "Freelance yazılım geliştirici Erinç Polat"
            : "Erinç Polat, freelance software developer",
    };

    return {
        title,
        description,
        alternates: {
            canonical: localizedUrl(locale, path),
            languages: languageAlternates(path),
        },
        openGraph: {
            type: "website",
            siteName: "Erinç Polat",
            title,
            description,
            url: localizedUrl(locale, path),
            locale: locale === "tr" ? "tr_TR" : "en_US",
            alternateLocale: locale === "tr" ? "en_US" : "tr_TR",
            images: [socialImage],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [socialImage],
        },
    };
}
