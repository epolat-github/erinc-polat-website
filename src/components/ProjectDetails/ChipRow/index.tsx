import spacing from "@/utils/spacing";
import { Chip, ChipProps, Stack, StackProps } from "@mui/material";

interface ChipRowType {
    labels: string[];
    containerProps?: StackProps;
    chipProps?: ChipProps;
}

const ChipRow: React.FC<ChipRowType> = (props) => {
    const { labels, containerProps, chipProps } = props;

    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            gap={spacing.tiny / 2}
            {...containerProps}
        >
            {labels.map((label, index) => (
                <Chip
                    key={`label-${index}`}
                    label={label}
                    sx={{
                        borderRadius: "4px",
                        backgroundColor: "#f6f6f6",
                        color: "#6d6d6d"
                    }}
                    {...chipProps}
                />
            ))}
        </Stack>
    );
};

export default ChipRow;
