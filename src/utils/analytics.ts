import { sendGAEvent } from "@next/third-parties/google";

type AnalyticsEvents = {
    generate_lead: Record<string, never>;
    contact_cta_click: { location: string };
    project_click: { project_slug: string; location: string };
    project_visit_click: { project_slug: string };
    section_view: { section_name: string };
    contact_form_error: {
        error_type: "client_validation" | "validation_error" | "delivery_error" | "unexpected_error";
    };
};

/** Send only curated metadata, never form values or error messages. */
export function trackEvent<Event extends keyof AnalyticsEvents>(
    event: Event,
    siteLocale: string,
    parameters: AnalyticsEvents[Event],
) {
    if (typeof window === "undefined") return;

    try {
        // Preserve early interactions until the asynchronously loaded Google tag runs.
        window.dataLayer ??= [];
        const debug = new URLSearchParams(window.location.search).get("analytics_debug") === "1";
        sendGAEvent("event", event, {
            ...parameters,
            site_locale: siteLocale,
            ...(debug ? { debug_mode: true } : {}),
        });
    } catch {
        // Analytics must never interrupt navigation or form submission.
    }
}
