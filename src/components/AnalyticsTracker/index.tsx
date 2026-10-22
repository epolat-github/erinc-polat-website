"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/utils/analytics";

/** Delegation keeps server-rendered links native and requires no visual wrappers. */
export default function AnalyticsTracker() {
    const locale = useLocale();
    const pathname = usePathname();
    const sectionViews = useRef({ pathname, seen: new Set<string>() });

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (event.button !== 0 && event.button !== 1) return;
            const target = event.target;
            if (!(target instanceof Element)) return;
            const element = target.closest<HTMLElement>("[data-analytics-event]");
            if (!element) return;

            const { analyticsEvent, analyticsLocation, analyticsProject } = element.dataset;
            switch (analyticsEvent) {
                case "contact_cta_click":
                    if (analyticsLocation) {
                        trackEvent(analyticsEvent, locale, { location: analyticsLocation });
                    }
                    break;
                case "project_click":
                    if (analyticsProject && analyticsLocation) {
                        trackEvent(analyticsEvent, locale, {
                            project_slug: analyticsProject,
                            location: analyticsLocation,
                        });
                    }
                    break;
                case "project_visit_click":
                    if (analyticsProject) {
                        trackEvent(analyticsEvent, locale, { project_slug: analyticsProject });
                    }
                    break;
            }
        };

        document.addEventListener("click", handleClick, true);
        document.addEventListener("auxclick", handleClick, true);
        return () => {
            document.removeEventListener("click", handleClick, true);
            document.removeEventListener("auxclick", handleClick, true);
        };
    }, [locale]);

    useEffect(() => {
        if (sectionViews.current.pathname !== pathname) {
            sectionViews.current = { pathname, seen: new Set<string>() };
        }
        if (!("IntersectionObserver" in window)) return;

        const seen = sectionViews.current.seen;
        const observer = new IntersectionObserver((entries) => {
            if (document.visibilityState !== "visible") return;
            for (const entry of entries) {
                const section = (entry.target as HTMLElement).dataset.analyticsSection;
                if (!section || !entry.isIntersecting || entry.intersectionRatio < 0.5) continue;
                if (!seen.has(section)) {
                    seen.add(section);
                    trackEvent("section_view", locale, { section_name: section });
                }
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });

        const observeSections = () => {
            observer.disconnect();
            if (document.visibilityState === "visible") {
                document.querySelectorAll<HTMLElement>("[data-analytics-section]").forEach((section) => {
                    if (!seen.has(section.dataset.analyticsSection ?? "")) observer.observe(section);
                });
            }
        };
        observeSections();
        // Server-rendered page sections may arrive after the shared layout hydrates.
        const mutations = new MutationObserver(observeSections);
        mutations.observe(document.body, { childList: true, subtree: true });
        document.addEventListener("visibilitychange", observeSections);
        return () => {
            observer.disconnect();
            mutations.disconnect();
            document.removeEventListener("visibilitychange", observeSections);
        };
    }, [pathname, locale]);

    return null;
}
