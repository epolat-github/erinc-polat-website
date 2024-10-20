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
import React, { forwardRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";

import spacing from "@/utils/spacing";
import theme from "@/utils/theme";
import Image from "next/image";
import { sendEmail } from "../../../app/actions/sendEmail";
import { motion } from "framer-motion";

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
        url: "www.linkedin.com/in/erinç-polat-4bb7bb192",
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
    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    const sendEmailHandler = async (formData: FormData) => {
        try {
            const { error, data } = await sendEmail(formData);

            if (error) {
                // TODO show error notification
                console.log("error");
                return;
            }

            console.log("success");
        } catch (err) {
            console.log("error from client: ", err);
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
                            id="outlined-controlled"
                            label="Name"
                            variant="standard"
                            required
                        />
                        <TextField
                            name="email"
                            id="outlined-controlled"
                            label="Email"
                            required
                            variant="standard"
                        />
                        <TextField
                            name="message"
                            id="outlined-controlled"
                            label="Message"
                            variant="standard"
                            required
                            multiline
                            rows={4}
                        />
                        <Button
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
                        </Button>
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
