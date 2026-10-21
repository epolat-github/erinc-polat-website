"use client";

import { ButtonBase } from "@mui/material";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { semanticColors } from "@/utils/colors";

const LanguageSelector = () => {
    const locale = useLocale();
    const t = useTranslations("accessibility");
    const router = useRouter();
    const pathname = usePathname();

    const nextLocale = locale === "en" ? "tr" : "en";

    const changeLanguage = () => {
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <ButtonBase
            disableRipple
            onClick={changeLanguage}
            aria-label={
                nextLocale === "tr"
                    ? t("switch_to_turkish")
                    : t("switch_to_english")
            }
            sx={{
                minWidth: 44,
                minHeight: 44,
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: 600,
                color: semanticColors.textPrimary,
                borderRadius: 1,
                "&:hover": {
                    color: semanticColors.textPrimary,
                    backgroundColor: semanticColors.surface,
                },
            }}
        >
            {locale.toUpperCase()}
        </ButtonBase>
    );
};

export default LanguageSelector;
