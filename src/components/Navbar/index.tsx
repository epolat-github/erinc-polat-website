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
} from "@mui/material";
import { Barlow_Semi_Condensed } from "next/font/google";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import spacing from "@/utils/spacing";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSelector from "../LanguageSelector";

const barlowSemiCondensed = Barlow_Semi_Condensed({
    subsets: ["latin", "latin-ext"],
    weight: "400",
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
    const router = useRouter();
    const pathname = usePathname();

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
                behavior: "smooth",
            });
        } else {
            router.push("/");
        }
    };

    const onClickOnMobile = (to: string) => {
        router.push(to);
        handleCloseNavMenu();
    };

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
                background: "transparent",
                backdropFilter: "blur(5px)",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* DESKTOP */}
                    <Stack
                        direction="row"
                        gap={2}
                        justifyContent="center"
                        flex={1}
                        alignItems="center"
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex",
                            },
                        }}
                    >
                        <ButtonBase
                            onClick={onHomeClick}
                            disableRipple
                            sx={{
                                paddingRight: spacing.tiny,
                            }}
                        >
                            <Image
                                src="/logo.webp"
                                alt="logo"
                                width={250}
                                height={90}
                                quality={100}
                                style={{
                                    width: 125,
                                    height: 45,
                                }}
                            />
                        </ButtonBase>
                        {sectionButtons.map((sectionButton) => (
                            <Button
                                LinkComponent={Link}
                                key={sectionButton.titleTranslationKey}
                                href={`/#${sectionButton.to}`}
                                disableRipple
                                sx={{
                                    minWidth: {
                                        md: 80,
                                        sm: 60,
                                        xs: 40,
                                    },
                                    textTransform: "none",
                                    fontFamily:
                                        barlowSemiCondensed.style.fontFamily,
                                    color: "#000",
                                    letterSpacing: 1.3,
                                    fontSize: 16,
                                    "&:hover": {
                                        background: "transparent",
                                    },
                                }}
                            >
                                {t(sectionButton.titleTranslationKey)}
                            </Button>
                        ))}

                        <LanguageSelector />
                    </Stack>

                    {/* MOBILE */}
                    <Stack
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "none",
                            },
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <ButtonBase onClick={onHomeClick} disableRipple>
                            <Image
                                src="/logo.webp"
                                alt="logo"
                                width={75}
                                height={25}
                            />
                        </ButtonBase>
                        <IconButton onClick={handleOpenNavMenu} disableRipple>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            sx={{
                                mt: "45px",
                                "& .MuiPaper-root": {
                                    boxShadow:
                                        "0px 10px 15px -3px rgba(0,0,0,0.1)",
                                    minWidth: 180,
                                    color: "rgb(55, 65, 81)",
                                    borderRadius: spacing.tiny,
                                },
                            }}
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "top",
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
                            <Stack alignItems="flex-end">
                                <LanguageSelector />
                            </Stack>

                            {sectionButtons.map((sectionButton, index) => (
                                <MenuItem
                                    component={motion.li}
                                    key={sectionButton.titleTranslationKey}
                                    onClick={() =>
                                        onClickOnMobile(`#${sectionButton.to}`)
                                    }
                                    disableRipple
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
                                    <Typography textAlign="center">
                                        {t(sectionButton.titleTranslationKey)}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
