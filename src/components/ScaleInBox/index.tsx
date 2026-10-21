import { motion, MotionStyle, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface ScaleInBoxType {
    children: React.ReactNode;
    style?: MotionStyle;
    delay?: number;
    duration?: number;
    once?: boolean;
    ready?: boolean;
}

const ScaleInBox: React.FC<ScaleInBoxType> = ({
    children,
    style,
    delay,
    duration = 0.6,
    once = true,
    ready = true,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once });
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            ref={ref}
            initial={{ scale: reduceMotion ? 1 : 0.96, opacity: 0 }}
            animate={{
                opacity: ready && inView ? 1 : 0,
                scale: reduceMotion || (ready && inView) ? 1 : 0.96,
            }}
            transition={{
                duration: reduceMotion ? 0.15 : duration,
                delay: reduceMotion ? 0 : delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default ScaleInBox;
