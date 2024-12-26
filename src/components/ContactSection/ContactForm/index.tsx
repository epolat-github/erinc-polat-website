"use client";

import {
    Box,
    Button,
    ButtonBase,
    Container,
    Grid2,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import colors from "@/utils/colors";
import React, { forwardRef, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";

import spacing from "@/utils/spacing";
import theme from "@/utils/theme";
import Image from "next/image";
import { sendEmail } from "../../../app/actions/sendEmail";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { sendGAEvent } from "@next/third-parties/google";

const CONTACT_DATA = [
    {
        text: "My Resume",
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
        text: "Connect on LinkedIn",
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
        text: "Follow on Instagram",
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
        text: "Follow on GitHub",
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
];

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
                    enqueueSnackbar(
                        "There's been a validation error. Please check the form again.",
                        {
                            variant: "error",
                        }
                    );
                } else {
                    enqueueSnackbar(
                        "There's been an error. Please contact me through my email 🙂",
                        {
                            variant: "error",
                        }
                    );
                }
                return;
            }

            enqueueSnackbar(
                "I've received your message. I will contact you in no time 🙂",
                {
                    variant: "success",
                }
            );

            console.log("success");
        } catch (err) {
            console.log("error from client: ", err);
            enqueueSnackbar(
                "There's been an error. Please contact me through my email 🙂",
                {
                    variant: "error",
                }
            );
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
                    >
                        Get In Touch.
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
                        spacing={spacing.small}
                    >
                        <TextField
                            name="name"
                            id="name"
                            label="Name"
                            variant="standard"
                            required
                        />
                        <TextField
                            name="email"
                            id="email"
                            label="Email"
                            required
                            variant="standard"
                        />
                        <TextField
                            name="message"
                            id="message"
                            label="Message"
                            variant="standard"
                            required
                            multiline
                            rows={4}
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
                            Send your message
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
                    >
                        Contact Info.
                    </Typography>

                    <Stack spacing={spacing.small}>
                        <Stack>
                            <Typography fontWeight="bold">
                                {"Let's Talk."}
                            </Typography>
                            <Typography>erinc.polat@gmail.com</Typography>
                        </Stack>

                        <Grid2 container rowSpacing={spacing.tiny}>
                            {CONTACT_DATA.map((contactData, index) => (
                                <Grid2 key={`contact-data-${index}`} size={12}>
                                    <ContactListRow
                                        text={contactData.text}
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
