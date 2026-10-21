import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Page metadata owns hreflang; automatic headers include unprefixed 404 targets.
export default createMiddleware({ ...routing, alternateLinks: false });

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(tr|en)/:path*"],
};
