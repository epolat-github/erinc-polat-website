import { useState } from "react";
import { Button, ClickAwayListener, Divider, Stack } from "@mui/material";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";
import spacing from "@/utils/spacing";

const LanguageSelector = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (newLocale: "en" | "tr") => {
        router.replace(pathname, { locale: newLocale });
    };

    const renderLanguageButton = () => {
        const newLocale = locale === "en" ? "tr" : "en";

        // render language selectors
        return (
            <Button
                disableRipple
                onClick={() => changeLanguage(newLocale)}
                sx={{
                    height: 25,
                }}
            >
                <Image
                    fill
                    src={`/flags/${locale}.webp`}
                    alt={`flag of ${locale}`}
                    style={{
                        objectFit: "contain",
                        borderRadius: spacing.small,
                        overflow: "hidden",
                    }}
                />
            </Button>
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
