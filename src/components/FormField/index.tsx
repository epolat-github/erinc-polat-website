"use client";

import { InputAdornment, InputBase, Stack, Typography, type InputBaseProps } from "@mui/material";
import type { ReactNode } from "react";
import { semanticColors } from "@/utils/colors";
import spacing from "@/utils/spacing";

export type FormFieldProps = Omit<InputBaseProps, "error" | "startAdornment"> & {
    name: string;
    label: string;
    error?: string;
    icon?: ReactNode;
};

export default function FormField({
    name,
    id = name,
    label,
    error,
    icon,
    inputProps,
    sx = [],
    ...props
}: FormFieldProps) {
    const errorId = `${id}-error`;
    const describedBy = [inputProps?.["aria-describedby"], error ? errorId : undefined]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
        <Stack spacing={0.5}>
            <InputBase
                {...props}
                name={name}
                id={id}
                error={Boolean(error)}
                inputProps={{
                    ...inputProps,
                    "aria-label": label,
                    "aria-describedby": describedBy,
                }}
                startAdornment={icon != null ? (
                    <InputAdornment position="start" aria-hidden="true">
                        {icon}
                    </InputAdornment>
                ) : undefined}
                sx={[
                    {
                        borderStyle: "solid",
                        borderColor: error ? "error.main" : semanticColors.border,
                        borderRadius: spacing.small,
                        borderWidth: 1,
                        px: spacing.tiny,
                        py: spacing.tiny / 2,
                        "&:focus-within": {
                            outline: `3px solid ${semanticColors.focusRing}`,
                            outlineOffset: 3,
                        },
                    },
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]}
            />
            {error && (
                <Typography id={errorId} color="error" variant="caption">
                    {error}
                </Typography>
            )}
        </Stack>
    );
}
