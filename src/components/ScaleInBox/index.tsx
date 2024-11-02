import { motion, MotionStyle } from "framer-motion";

interface ScaleInBoxType {
    children: React.ReactNode;
    style?: MotionStyle;
    delay?: number;
    duration?: number;
    once?: boolean;
}

const ScaleInBox: React.FC<ScaleInBoxType> = ({
    children,
    style,
    delay,
    duration = 0.6,
    once = true,
}) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: duration,
                delay,
                ease: "easeOut",
            }}
            viewport={{
                once,
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default ScaleInBox;
