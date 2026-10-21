import { ButtonBase, Stack } from "@mui/material";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";
import spacing from "@/utils/spacing";

const LanguageSelector = () => {
    const locale = useLocale();
    const t = useTranslations("accessibility");
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (newLocale: "en" | "tr") => {
        router.replace(pathname, { locale: newLocale });
    };

    const renderLanguageButton = () => {
        const newLocale = locale === "en" ? "tr" : "en";

        // render language selectors
        return (
            <ButtonBase
                disableRipple
                sx={{ minWidth: 44, minHeight: 44 }}
                onClick={() => changeLanguage(newLocale)}
                aria-label={
                    newLocale === "tr"
                        ? t("switch_to_turkish")
                        : t("switch_to_english")
                }
            >
                <Image
                    width={30}
                    height={30}
                    src={`/flags/${locale}.webp`}
                    alt=""
                    style={{
                        objectFit: "contain",
                        borderRadius: spacing.small,
                        overflow: "hidden",
                    }}
                    sizes="30px"
                />
            </ButtonBase>
        );
    };

    return (
        <Stack
            direction="column"
            sx={{
                position: "relative",
            }}
        >
            {renderLanguageButton()}
        </Stack>
    );
};

export default LanguageSelector;
