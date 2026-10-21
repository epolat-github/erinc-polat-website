import type { MetadataRoute } from "next";
import projectsEn from "@/data/projects.en";
import projectsTr from "@/data/projects.tr";
import { languageAlternates, localizedUrl, siteLocales } from "@/utils/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    return siteLocales.flatMap((locale) => {
        const projects = locale === "tr" ? projectsTr : projectsEn;
        const paths = ["", "/projects", ...projects.map(({ slug }) => `/projects/${slug}`)];
        return paths.map((path) => ({
            url: localizedUrl(locale, path),
            alternates: { languages: languageAlternates(path) },
        }));
    });
}
