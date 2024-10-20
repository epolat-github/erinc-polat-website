"use client";

import colors from "@/utils/colors";
import { Box, Container, Stack, Typography } from "@mui/material";

import spacing from "@/utils/spacing";

const logos = [];

const CustomersSection = () => {
    return (
        <Box
            id="offers"
            sx={{
                backgroundColor: colors.background,
            }}
        >
            <Container
                component={Stack}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    pt: spacing.big,
                }}
                spacing={spacing.medium}
            >
                <Typography>Customers</Typography>

                <Stack direction="row">{}</Stack>
            </Container>
        </Box>
    );
};

export default CustomersSection;
