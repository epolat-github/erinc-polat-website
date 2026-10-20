"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealItemType {
    children: React.ReactNode;
    delay?: number;
    rotate?: string;
    once?: boolean;
    duration?: number;
    distance?: number | string;
}

const RevealItem: React.FC<RevealItemType> = ({
    children,
    delay,
    once = true,
    duration = 0.6,
    distance = "50%",
}) => {
    const reduceMotion = useReducedMotion();

    return (
        <div
            style={{
                overflow: "hidden",
            }}
        >
            <motion.div
                initial={{
                    y: reduceMotion ? 0 : distance,
                    opacity: 0,
                }}
                whileInView={{
                    y: "0px",
                    opacity: 1,
                }}
                transition={{
                    duration: reduceMotion ? 0.15 : duration,
                    delay: reduceMotion ? 0 : delay,
                    ease: "easeOut",
                }}
                viewport={{
                    once,
                }}
                style={{
                    transformOrigin: "left",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealItem;
