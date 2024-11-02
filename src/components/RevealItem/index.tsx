import { motion } from "framer-motion";

interface RevealItemType {
    children: React.ReactNode;
    delay?: number;
    rotate?: string;
    once?: boolean;
}

const RevealItem: React.FC<RevealItemType> = ({
    children,
    delay,
    rotate = "5deg",
    once = true,
}) => {
    return (
        <div
            style={{
                overflow: "hidden",
            }}
        >
            <motion.div
                initial={{
                    y: "50%",
                    // rotate: rotate,
                    opacity: 0,
                }}
                whileInView={{
                    y: "0px",
                    // rotate: "0deg",
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                    delay,
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
