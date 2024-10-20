import { Box } from "@mui/material";
import { motion, MotionStyle } from "framer-motion";

interface BouncingBoxType {
    children: React.ReactNode;
    style?: MotionStyle;
    delay?: number;
    duration?: number;
}

const BouncingBox: React.FC<BouncingBoxType> = ({
    children,
    style,
    delay,
    duration = 2,
}) => {
    return (
        <Box
            component={motion.div}
            initial={{
                y: 8,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                ease: "linear",
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay,
            }}
            style={{
                ...style,
            }}
        >
            {children}
        </Box>
    );
};

export default BouncingBox;
