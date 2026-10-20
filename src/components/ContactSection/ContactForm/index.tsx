"use client";

import {
    Box,
    Button,
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
import { sendGAEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { oswald } from "@/utils/fonts";

type ContactField = "name" | "email" | "message";
type FieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [formStatus, setFormStatus] = useState("");

    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    const clearFieldError = (field: ContactField) => {
        setFormStatus("");
        setFieldErrors((currentErrors) => {
            if (!currentErrors[field]) return currentErrors;

            const nextErrors = { ...currentErrors };
            delete nextErrors[field];
            return nextErrors;
        });
    };

    const validateForm = (formData: FormData) => {
        const errors: FieldErrors = {};
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        if (!name) errors.name = t("name_required_error");
        if (!email) {
            errors.email = t("email_required_error");
        } else if (!EMAIL_PATTERN.test(email)) {
            errors.email = t("email_invalid_error");
        }
        if (!message) errors.message = t("message_required_error");

        return errors;
    };

    const sendEmailHandler = async (
        form: HTMLFormElement,
        formData: FormData,
    ) => {
        try {
            setIsSubmittingForm(true);
            setFormStatus("");

            sendGAEvent({
                event: "contact_email",
                value: JSON.stringify(formData),
            });

            const { error } = await sendEmail(formData);

            if (error) {
                console.log("error: ", error);

                if (error?.name === "validation_error") {
                    setFormStatus(t("validation_error_message"));
                    enqueueSnackbar(t("validation_error_message"), {
                        variant: "error",
                    });
                } else {
                    setFormStatus(t("generic_error_message"));
                    enqueueSnackbar(t("generic_error_message"), {
                        variant: "error",
                    });
                }
                return;
            }

            form.reset();
            setFieldErrors({});
            setFormStatus(t("success_message"));
            enqueueSnackbar(t("success_message"), {
                variant: "success",
            });

            console.log("success");
        } catch (err) {
            console.log("error from client: ", err);
            setFormStatus(t("generic_error_message"));
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
                backgroundColor: colors.background,
                zIndex: 1,
                position: "relative",
                paddingY: spacing.medium,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    backgroundColor: colors.background,
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
                            const form = e.currentTarget;
                            const formData = new FormData(form);
                            const errors = validateForm(formData);

                            if (Object.keys(errors).length > 0) {
                                setFieldErrors(errors);
                                setFormStatus(t("validation_error_message"));
                                const firstInvalidField = Object.keys(
                                    errors,
                                )[0] as ContactField;
                                const firstInvalidElement =
                                    form.elements.namedItem(
                                        firstInvalidField,
                                    ) as HTMLElement | null;
                                firstInvalidElement?.focus();
                                return;
                            }

                            setFieldErrors({});
                            void sendEmailHandler(form, formData);
                        }}
                        noValidate
                        sx={{
                            width: "100%",
                        }}
                        spacing={spacing.tiny}
                    >
                        <Stack spacing={0.5}>
                            <InputBase
                                name="name"
                                id="name"
                                aria-label={t("name_label")}
                                placeholder={t("name_placeholder")}
                                autoComplete="name"
                                required
                                aria-invalid={Boolean(fieldErrors.name)}
                                aria-describedby={
                                    fieldErrors.name ? "name-error" : undefined
                                }
                                onChange={() => clearFieldError("name")}
                                startAdornment={
                                    <InputAdornment
                                        position="start"
                                        aria-hidden="true"
                                    >
                                        <PersonOutlinedIcon />
                                    </InputAdornment>
                                }
                                sx={{
                                    borderStyle: "solid",
                                    borderColor: fieldErrors.name
                                        ? "error.main"
                                        : "lightgray",
                                    borderRadius: spacing.small,
                                    borderWidth: 1,
                                    px: spacing.tiny,
                                    py: spacing.tiny / 2,
                                    "&:focus-within": {
                                        outline: `3px solid ${theme.palette.primary.main}`,
                                        outlineOffset: 3,
                                        borderRadius: spacing.small,
                                    },
                                }}
                            />
                            {fieldErrors.name && (
                                <Typography
                                    id="name-error"
                                    color="error"
                                    variant="caption"
                                >
                                    {fieldErrors.name}
                                </Typography>
                            )}
                        </Stack>

                        <Stack spacing={0.5}>
                            <InputBase
                                name="email"
                                id="email"
                                aria-label={t("email_label")}
                                type="email"
                                placeholder={t("email_placeholder")}
                                autoComplete="email"
                                inputMode="email"
                                required
                                aria-invalid={Boolean(fieldErrors.email)}
                                aria-describedby={
                                    fieldErrors.email
                                        ? "email-error"
                                        : undefined
                                }
                                onChange={() => clearFieldError("email")}
                                startAdornment={
                                    <InputAdornment
                                        position="start"
                                        aria-hidden="true"
                                    >
                                        <EmailOutlinedIcon />
                                    </InputAdornment>
                                }
                                sx={{
                                    borderStyle: "solid",
                                    borderColor: fieldErrors.email
                                        ? "error.main"
                                        : "lightgray",
                                    borderRadius: spacing.small,
                                    borderWidth: 1,
                                    px: spacing.tiny,
                                    py: spacing.tiny / 2,
                                    "&:focus-within": {
                                        outline: `3px solid ${theme.palette.primary.main}`,
                                        outlineOffset: 3,
                                        borderRadius: spacing.small,
                                    },
                                }}
                            />
                            {fieldErrors.email && (
                                <Typography
                                    id="email-error"
                                    color="error"
                                    variant="caption"
                                >
                                    {fieldErrors.email}
                                </Typography>
                            )}
                        </Stack>

                        <Stack spacing={0.5}>
                            <InputBase
                                name="message"
                                id="message"
                                aria-label={t("message_label")}
                                placeholder={t("message_placeholder")}
                                required
                                multiline
                                rows={5}
                                aria-invalid={Boolean(fieldErrors.message)}
                                aria-describedby={
                                    fieldErrors.message
                                        ? "message-error"
                                        : undefined
                                }
                                onChange={() => clearFieldError("message")}
                                sx={{
                                    borderStyle: "solid",
                                    borderColor: fieldErrors.message
                                        ? "error.main"
                                        : "lightgray",
                                    borderRadius: spacing.small,
                                    borderWidth: 1,
                                    px: spacing.tiny,
                                    py: spacing.tiny / 2,
                                    "&:focus-within": {
                                        outline: `3px solid ${theme.palette.primary.main}`,
                                        outlineOffset: 3,
                                        borderRadius: spacing.small,
                                    },
                                }}
                            />
                            {fieldErrors.message && (
                                <Typography
                                    id="message-error"
                                    color="error"
                                    variant="caption"
                                >
                                    {fieldErrors.message}
                                </Typography>
                            )}
                        </Stack>
                        <Button
                            loading={isSubmittingForm}
                            type="submit"
                            variant="contained"
                            disableElevation
                            sx={{
                                height: 45,
                                borderRadius: "12px",
                            }}
                            color="primary"
                        >
                            {t("send_message_button_text")}
                        </Button>
                        <Typography
                            component="p"
                            role="status"
                            aria-live="polite"
                            aria-atomic="true"
                            sx={{
                                position: "absolute",
                                width: "1px",
                                height: "1px",
                                padding: 0,
                                margin: "-1px",
                                overflow: "hidden",
                                clip: "rect(0, 0, 0, 0)",
                                whiteSpace: "nowrap",
                                border: 0,
                            }}
                        >
                            {formStatus}
                        </Typography>
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
                            <Typography sx={{ overflowWrap: "anywhere" }}>erinc.polat@gmail.com</Typography>
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
