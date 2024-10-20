import React, { useId } from "react";

interface DotPatternType {
    width?: any;
    height?: any;
    x?: any;
    y?: any;
    cx?: any;
    cy?: any;
    cr?: any;
    className?: string;
    gradient?: boolean;
    [key: string]: any;
    maskPercentage?: string;
    color?: string;
}

const DotPattern: React.FC<DotPatternType> = (props) => {
    const id = useId();

    const {
        width = 16,
        height = 16,
        x = 0,
        y = 0,
        cx = 1,
        cy = 1,
        cr = 1,
        gradient = true,
        className,
        maskPercentage = "115%",
        color = "rgba(163, 163, 163, 0.8)",
        ...rest
    } = props;

    return (
        <svg
            aria-hidden="true"
            style={{
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                height: "100%",
                width: "100%",
                fill: color,
                maskImage: `radial-gradient(circle at center, white, transparent ${maskPercentage})`,
            }}
            {...rest}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${id})`}
            />
        </svg>
    );
};

export default DotPattern;
