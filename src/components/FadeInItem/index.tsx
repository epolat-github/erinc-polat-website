import { motion, MotionStyle } from "framer-motion";

interface FadeInItemType {
    children: React.ReactNode;
    delay?: number;
    once?: boolean;
    style?: MotionStyle;
}

const FadeInItem: React.FC<FadeInItemType> = ({
    children,
    delay,
    once = true,
    style,
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
                delay,
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
