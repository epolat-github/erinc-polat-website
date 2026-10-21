"use client";

import { motion, MotionStyle, useReducedMotion } from "framer-motion";

interface FadeInItemType {
    children: React.ReactNode;
    delay?: number;
    once?: boolean;
    duration?: number;
    style?: MotionStyle;
}

const FadeInItem: React.FC<FadeInItemType> = ({
    children,
    delay,
    once = true,
    style,
    duration = 0.6,
}) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: reduceMotion ? 0.15 : duration,
                delay: reduceMotion ? 0 : delay,
                ease: "easeOut",
            }}
            viewport={{
                amount: 0.4,
                once,
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default FadeInItem;
