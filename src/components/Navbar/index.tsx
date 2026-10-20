"use client";

import {
    AppBar,
    Button,
    ButtonBase,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Barlow_Semi_Condensed } from "next/font/google";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import spacing from "@/utils/spacing";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSelector from "../LanguageSelector";
import colors from "@/utils/colors";
import InteractiveHoverButton from "../InteractiveHoverButton";

const barlowSemiCondensed = Barlow_Semi_Condensed({
    subsets: ["latin", "latin-ext"],
    weight: "600",
    style: "normal",
});

const sectionButtons = [
    {
        titleTranslationKey: "about",
        to: "about",
    },
    {
        titleTranslationKey: "process",
        to: "process",
    },
    {
        titleTranslationKey: "works",
        to: "works",
    },
    {
        titleTranslationKey: "contact",
        to: "contact",
    },
] as const;

const Navbar = () => {
    const t = useTranslations("navbar");
    const welcomeT = useTranslations("welcome_section");
    const router = useRouter();
    const pathname = usePathname();
    const isScrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 48,
    });

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const controls = useAnimationControls();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
        controls.start({
            translateY: 0,
            opacity: 1,
        });
    };

    const handleCloseNavMenu = async () => {
        await controls.start({
            translateY: -5,
            opacity: 0,
        });

        setAnchorElNav(null);
    };

    const onHomeClick = () => {
        if (pathname === "/") {
            window.scroll({
                top: 0,
                left: 0,
                // Let global CSS honor the user's reduced-motion preference.
                behavior: "auto",
            });
        } else {
            router.push("/");
        }
    };

    const onClickOnMobile = (to: string) => {
        router.push(to);
        handleCloseNavMenu();
    };

    const contactButton = (
        <InteractiveHoverButton
            LinkComponent={Link}
            href="/#contact"
            icon={<ArrowDownwardIcon sx={{ fontSize: 18 }} />}
            sx={{ fontFamily: barlowSemiCondensed.style.fontFamily }}
        >
            {welcomeT("cta_button_text")}
        </InteractiveHoverButton>
    );

    return (
        <AppBar
            component={motion.header}
            initial={{
                y: "-10%",
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
                backgroundColor: alpha(colors.background, 0.9),
                backdropFilter: "blur(24px)",
                borderBottom: `1px solid ${alpha(colors.border, 0.45)}`,
                boxShadow: `0 4px 20px ${alpha(colors.header, 0.025)}`,
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: 1240,
                    px: { xs: 3, lg: 6 },
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: {
                            xs: isScrolled ? 64 : 80,
                            sm: isScrolled ? 64 : 80,
                        },
                        transition:
                            "min-height 320ms cubic-bezier(0.22,1,0.36,1)",
                        "@media (prefers-reduced-motion: reduce)": {
                            transition: "none",
                        },
                    }}
                >
                    {/* DESKTOP */}
                    <Stack
                        direction="row"
                        gap={spacing.tiny}
                        justifyContent="space-between"
                        flex={1}
                        alignItems="center"
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <ButtonBase
                            onClick={onHomeClick}
                            aria-label={t("home")}
                            disableRipple
                            sx={{
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src="/logo.webp"
                                alt=""
                                width={250}
                                height={90}
                                quality={100}
                                style={{
                                    width: 125,
                                    height: 45,
                                }}
                            />
                        </ButtonBase>
                        <Stack
                            component="nav"
                            direction="row"
                            alignItems="center"
                            sx={{
                                gap: 0.5,
                                px: { sm: 1, md: 1.5 },
                                py: isScrolled ? 0.375 : 0.75,
                                transition:
                                    "padding 320ms cubic-bezier(0.22,1,0.36,1)",
                                "@media (prefers-reduced-motion: reduce)": {
                                    transition: "none",
                                },
                                borderRadius: 999,
                                backgroundColor: alpha(colors.surface, 0.8),
                                border: `1px solid ${alpha(colors.border, 0.6)}`,
                            }}
                        >
                            {sectionButtons.map((sectionButton) => (
                                <Button
                                    LinkComponent={Link}
                                    key={sectionButton.titleTranslationKey}
                                    href={`/#${sectionButton.to}`}
                                    disableRipple
                                    sx={{
                                        minWidth: 0,
                                        minHeight: 36,
                                        px: { sm: 1.5, md: 2 },
                                        py: 0.875,
                                        borderRadius: 999,
                                        textTransform: "none",
                                        fontFamily:
                                            barlowSemiCondensed.style.fontFamily,
                                        color: colors.gray,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        lineHeight: 1.5,
                                        whiteSpace: "nowrap",
                                        transition:
                                            "background-color 150ms ease, color 150ms ease",
                                        "&:hover": {
                                            color: colors.primary,
                                            backgroundColor: colors.background,
                                        },
                                        "&.Mui-focusVisible": {
                                            outline: `3px solid ${colors.primary}`,
                                            outlineOffset: 2,
                                        },
                                    }}
                                >
                                    {t(sectionButton.titleTranslationKey)}
                                </Button>
                            ))}
                            <Stack sx={{ px: 1 }}>
                                <LanguageSelector />
                            </Stack>
                        </Stack>

                        {contactButton}
                    </Stack>

                    {/* MOBILE */}
                    <Stack
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <ButtonBase onClick={onHomeClick} aria-label={t("home")} disableRipple>
                            <Image
                                src="/logo.webp"
                                alt=""
                                width={75}
                                height={25}
                            />
                        </ButtonBase>
                        <Stack direction="row" alignItems="center" gap={1.5}>
                            {contactButton}
                            <IconButton
                                onClick={handleOpenNavMenu}
                                disableRipple
                                aria-label={t("open_menu")}
                                aria-controls={
                                    anchorElNav
                                        ? "mobile-navigation-menu"
                                        : undefined
                                }
                                aria-expanded={Boolean(anchorElNav)}
                                aria-haspopup="menu"
                                sx={{
                                    color: colors.gray,
                                    backgroundColor: alpha(colors.surface, 0.8),
                                    border: `1px solid ${alpha(colors.border, 0.6)}`,
                                    "&:hover": {
                                        color: colors.primary,
                                        backgroundColor: alpha(colors.primary, 0.06),
                                    },
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Stack>
                        <Menu
                            id="mobile-navigation-menu"
                            sx={{
                                mt: 1.5,
                                "& .MuiPaper-root": {
                                    boxShadow:
                                        `0 10px 24px -3px ${alpha(colors.header, 0.12)}`,
                                    minWidth: 180,
                                    color: colors.gray,
                                    backgroundColor: alpha(colors.background, 0.95),
                                    backdropFilter: "blur(24px)",
                                    border: `1px solid ${alpha(colors.border, 0.8)}`,
                                    borderRadius: spacing.tiny,
                                },
                                "& .MuiMenu-list": {
                                    p: 1,
                                },
                            }}
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {sectionButtons.map((sectionButton, index) => (
                                <MenuItem
                                    component={motion.li}
                                    key={sectionButton.titleTranslationKey}
                                    onClick={() =>
                                        onClickOnMobile(`#${sectionButton.to}`)
                                    }
                                    disableRipple
                                    sx={{
                                        mt: 0.5,
                                        borderRadius: 999,
                                        "&:hover, &.Mui-focusVisible": {
                                            color: colors.primary,
                                            backgroundColor: colors.surface,
                                        },
                                    }}
                                    initial={{
                                        opacity: 0,
                                        translateY: -5,
                                    }}
                                    animate={controls}
                                    transition={{
                                        ease: "easeInOut",
                                        delay: (index + 0.1) * 0.1,
                                        duration: 0.1,
                                    }}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            fontFamily:
                                                barlowSemiCondensed.style
                                                    .fontFamily,
                                            fontSize: 14,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {t(sectionButton.titleTranslationKey)}
                                    </Typography>
                                </MenuItem>
                            ))}
                            <Stack
                                alignItems="flex-end"
                                sx={{ mr: spacing.tiny, mt: 1, mb: 0.5 }}
                            >
                                <LanguageSelector />
                            </Stack>
                        </Menu>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
