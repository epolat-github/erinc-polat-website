"use client";

import {
    Box,
    ButtonBase,
    Container,
    Grid2,
    InputAdornment,
    InputBase,
    Stack,
    Typography,
} from "@mui/material";
import colors from "@/utils/colors";
import React, { forwardRef, useState } from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import spacing from "@/utils/spacing";
import theme from "@/utils/theme";
import Image from "next/image";
import { sendEmail } from "../../../app/actions/sendEmail";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { sendGAEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const CONTACT_DATA = [
    {
        textTranslationKey: "resume_text",
        url: "/erinc-polat-resume.pdf",
        icon: (
            <InsertDriveFileRoundedIcon
                fontSize="small"
                sx={{
                    color: colors.header,
                }}
            />
        ),
    },
    {
        textTranslationKey: "linkedin_text",
        url: "https://www.linkedin.com/in/erinç-polat-4bb7bb192",
        icon: (
            <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn logo"
                width={22}
                height={20}
            />
        ),
    },
    {
        textTranslationKey: "instagram_text",
        url: "https://www.instagram.com/erincpolat",
        icon: (
            <InstagramIcon
                fontSize="small"
                sx={{
                    color: colors.header,
                }}
            />
        ),
    },
    {
        textTranslationKey: "github_text",
        url: "https://github.com/epolat-github",
        icon: (
            <Image
                src="/icons/github.svg"
                alt="GitHub logo"
                width={22}
                height={20}
            />
        ),
    },
] as const;

interface ContactListRowType {
    text: string;
    Icon: React.ReactNode;
    onClick: () => void;
}

const ContactListRow: React.FC<ContactListRowType> = (props) => {
    const { text, Icon, onClick } = props;

    return (
        <Stack direction="row">
            <ButtonBase onClick={onClick}>
                <Stack
                    sx={{
                        bgcolor: theme.palette.grey[100],
                        borderRadius: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 40,
                        height: 40,
                    }}
                >
                    {Icon}
                </Stack>
                <Typography
                    color={theme.palette.grey[800]}
                    sx={{
                        marginLeft: spacing.tiny,
                    }}
                >
                    {text}
                </Typography>
            </ButtonBase>
        </Stack>
    );
};

const ContactForm = forwardRef<HTMLDivElement>((props, ref) => {
    const t = useTranslations("contact_form");
    const { enqueueSnackbar } = useSnackbar();
    const [isSubmittingForm, setIsSubmittingForm] = useState(false);

    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    const sendEmailHandler = async (formData: FormData) => {
        try {
            setIsSubmittingForm(true);

            sendGAEvent({
                event: "contact_email",
                value: JSON.stringify(formData),
            });

            const { error, data } = await sendEmail(formData);

            if (error) {
                // TODO show error notification
                console.log("error");

                if (error?.name === "validation_error") {
                    enqueueSnackbar(t("validation_error_message"), {
                        variant: "error",
                    });
                } else {
                    enqueueSnackbar(t("generic_error_message"), {
                        variant: "error",
                    });
                }
                return;
            }

            enqueueSnackbar(t("success_message"), {
                variant: "success",
            });

            console.log("success");
        } catch (err) {
            console.log("error from client: ", err);
            enqueueSnackbar(t("generic_error_message"), {
                variant: "error",
            });
        } finally {
            setIsSubmittingForm(false);
        }
    };

    return (
        <Box
            component={motion.div}
            ref={ref}
            sx={{
                backgroundColor: "#fff",
                zIndex: 1,
                position: "relative",
                paddingY: spacing.medium,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    backgroundColor: "#fff",
                }}
                spacing={spacing.big}
                direction={{ xs: "column", sm: "row" }}
            >
                {/* contact form */}
                <Stack
                    flex={1}
                    spacing={{
                        xs: spacing.tiny,
                        sm: spacing.medium,
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={colors.header}
                        sx={{
                            fontFamily: oswald.style.fontFamily,
                        }}
                    >
                        {t("form_title")}
                    </Typography>

                    <Stack
                        component="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            sendEmailHandler(formData);
                        }}
                        sx={{
                            width: "100%",
                        }}
                        spacing={spacing.tiny}
                    >
                        <InputBase
                            name="name"
                            id="name"
                            placeholder={t("name_placeholder")}
                            required
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonOutlinedIcon />
                                </InputAdornment>
                            }
                            sx={{
                                outline: "none",
                                borderStyle: "solid",
                                borderColor: "lightgray",
                                borderRadius: spacing.small,
                                borderWidth: 1,
                                px: spacing.tiny,
                                py: spacing.tiny / 2,
                            }}
                        />
                        <InputBase
                            name="email"
                            id="email"
                            placeholder={t("email_placeholder")}
                            required
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon />
                                </InputAdornment>
                            }
                            sx={{
                                outline: "none",
                                borderStyle: "solid",
                                borderColor: "lightgray",
                                borderRadius: spacing.small,
                                borderWidth: 1,
                                px: spacing.tiny,
                                py: spacing.tiny / 2,
                            }}
                        />
                        <InputBase
                            name="message"
                            id="message"
                            placeholder={t("message_placeholder")}
                            required
                            multiline
                            rows={5}
                            sx={{
                                outline: "none",
                                borderStyle: "solid",
                                borderColor: "lightgray",
                                borderRadius: spacing.small,
                                borderWidth: 1,
                                px: spacing.tiny,
                                py: spacing.tiny / 2,
                            }}
                        />
                        <LoadingButton
                            loading={isSubmittingForm}
                            type="submit"
                            variant="contained"
                            disableElevation
                            sx={{
                                color: "#fff",
                                height: 45,
                                borderRadius: "12px",
                            }}
                            color="primary"
                        >
                            {t("send_message_button_text")}
                        </LoadingButton>
                    </Stack>
                </Stack>

                {/* contact info */}
                <Stack
                    flex={1}
                    spacing={{
                        xs: spacing.tiny,
                        sm: spacing.medium,
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={colors.header}
                        sx={{
                            fontFamily: oswald.style.fontFamily,
                        }}
                    >
                        {t("contact_info_title")}
                    </Typography>

                    <Stack spacing={spacing.small}>
                        <Stack>
                            <Typography fontWeight="bold">
                                {t("contact_info_subtitle")}
                            </Typography>
                            <Typography>erinc.polat@gmail.com</Typography>
                        </Stack>

                        <Grid2 container rowSpacing={spacing.tiny}>
                            {CONTACT_DATA.map((contactData, index) => (
                                <Grid2 key={`contact-data-${index}`} size={12}>
                                    <ContactListRow
                                        text={t(contactData.textTranslationKey)}
                                        onClick={() =>
                                            openLink(contactData.url)
                                        }
                                        Icon={contactData.icon}
                                    />
                                </Grid2>
                            ))}
                        </Grid2>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
});

export default ContactForm;
