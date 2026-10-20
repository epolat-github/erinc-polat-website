"use client";

import React, { useEffect, useId, useRef } from "react";

interface DotPatternType extends Omit<React.SVGProps<SVGSVGElement>, "width" | "height" | "x" | "y"> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    maskPercentage?: string;
    color?: string;
}

const DotPattern: React.FC<DotPatternType> = ({
    width = 16,
    height = 16,
    x = 0,
    y = 0,
    cx = 1,
    cy = 1,
    cr = 1,
    className,
    maskPercentage = "115%",
    color = "rgba(163, 163, 163, 0.8)",
    style,
    ...rest
}) => {
    const id = useId();
    const svgRef = useRef<SVGSVGElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!svg || !canvas || !context || width <= 0 || height <= 0 || cr <= 0) return;

        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const pointer = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
        let points: { x: number; y: number; intensity: number }[] = [];
        let bounds = canvas.getBoundingClientRect();
        let cursor: { x: number; y: number } | null = null;
        let frame = 0;
        let previousTime = 0;
        let visible = true;
        const radius = 100;
        const enabled = () => !motion.matches && pointer.matches;

        const draw = (time: number) => {
            frame = 0;
            const elapsed = previousTime ? Math.min(time - previousTime, 50) : 16.67;
            previousTime = time;
            const ease = 1 - Math.exp(-elapsed / 85);
            let moving = false;
            context.clearRect(0, 0, bounds.width, bounds.height);
            for (const point of points) {
                let targetIntensity = 0;
                if (cursor) {
                    const distance = Math.hypot(point.x - cursor.x, point.y - cursor.y);
                    if (distance < radius) {
                        // Smooth falloff creates a rounded local swell without moving the grid.
                        const proximity = 1 - distance / radius;
                        targetIntensity = proximity * proximity * (3 - 2 * proximity);
                    }
                }
                point.intensity += (targetIntensity - point.intensity) * ease;
                const unsettled = Math.abs(targetIntensity - point.intensity) > 0.002;
                moving ||= unsettled;
                if (!unsettled) point.intensity = targetIntensity;

                const dotRadius = cr * (1 + point.intensity * 0.8);
                context.beginPath();
                context.arc(point.x, point.y, dotRadius, 0, Math.PI * 2);
                context.fillStyle = color;
                context.fill();
                if (point.intensity > 0) {
                    context.fillStyle = "#000000";
                    context.globalAlpha = point.intensity * 0.55;
                    context.fill();
                    context.globalAlpha = 1;
                }
            }
            if (moving) frame = requestAnimationFrame(draw);
            else previousTime = 0;
        };

        const schedule = () => {
            if (!frame && visible && !document.hidden && enabled()) {
                frame = requestAnimationFrame(draw);
            }
        };

        const reset = () => {
            cursor = null;
            cancelAnimationFrame(frame);
            frame = 0;
            previousTime = 0;
            for (const point of points) point.intensity = 0;
            canvas.style.opacity = "0";
            svg.style.opacity = "1";
        };

        const resize = () => {
            reset();
            bounds = canvas.getBoundingClientRect();
            if (!enabled() || !bounds.width || !bounds.height) return;
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(bounds.width * ratio);
            canvas.height = Math.round(bounds.height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            points = [];
            const startX = ((x + cx) % width + width) % width;
            const startY = ((y + cy) % height + height) % height;
            for (let py = startY - height; py < bounds.height + height; py += height) {
                for (let px = startX - width; px < bounds.width + width; px += width) {
                    points.push({ x: px, y: py, intensity: 0 });
                }
            }
            draw(performance.now());
            canvas.style.opacity = "1";
            svg.style.opacity = "0";
        };

        const onPointerMove = (event: PointerEvent) => {
            if (!enabled() || event.pointerType === "touch" || !visible || document.hidden) return;
            // Read viewport coordinates on movement so scrolling and layout shifts stay aligned.
            bounds = canvas.getBoundingClientRect();
            const px = event.clientX - bounds.left;
            const py = event.clientY - bounds.top;
            const nextCursor = px >= 0 && px <= bounds.width && py >= 0 && py <= bounds.height
                ? { x: px, y: py }
                : null;
            if (!cursor && !nextCursor) return;
            cursor = nextCursor;
            schedule();
        };
        const leave = () => { cursor = null; schedule(); };
        const onPointerOut = (event: PointerEvent) => { if (!event.relatedTarget) leave(); };
        const onVisibility = () => { if (document.hidden) reset(); else resize(); };
        const observer = new ResizeObserver(resize);
        const intersection = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (!visible) reset();
            else resize();
        });
        observer.observe(canvas);
        intersection.observe(canvas);
        motion.addEventListener("change", resize);
        pointer.addEventListener("change", resize);
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerout", onPointerOut);
        window.addEventListener("blur", leave);
        window.addEventListener("scroll", leave, { passive: true, capture: true });
        document.addEventListener("visibilitychange", onVisibility);
        resize();

        return () => {
            reset();
            observer.disconnect();
            intersection.disconnect();
            motion.removeEventListener("change", resize);
            pointer.removeEventListener("change", resize);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerout", onPointerOut);
            window.removeEventListener("blur", leave);
            window.removeEventListener("scroll", leave, true);
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, [width, height, x, y, cx, cy, cr, color]);

    const surfaceStyle: React.CSSProperties = {
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        height: "100%",
        width: "100%",
        maskImage: `radial-gradient(circle at center, white, transparent ${maskPercentage})`,
        ...style,
    };

    return (
        <>
            <svg ref={svgRef} aria-hidden="true" className={className} style={{ ...surfaceStyle, fill: color }} {...rest}>
                <defs>
                    <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x={x} y={y}>
                        <circle cx={cx} cy={cy} r={cr} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
            </svg>
            <canvas ref={canvasRef} aria-hidden="true" className={className} style={{ ...surfaceStyle, opacity: 0 }} />
        </>
    );
};

export default DotPattern;
