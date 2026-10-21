import dimensions from "@/data/project-image-dimensions.json";

const imageDimensions: Record<string, { width: number; height: number }> = dimensions;

export function getProjectImageRatio(imageUrl: string): number | undefined {
    const image = imageDimensions[imageUrl];
    return image ? image.width / image.height : undefined;
}

/** Account for contain's height limit before the browser applies its device pixel ratio. */
export function getProjectImageSizes(imageUrl: string, columns = 1, multiple = false): string {
    const ratio = getProjectImageRatio(imageUrl);
    const height = (mobile: boolean) => {
        const aspectRatio = ratio ?? 1;
        const [min, vw, max] = multiple
            ? mobile ? [220, 75, 400] : [280, 45, 640]
            : [220, 56, 640];
        return `clamp(${min * aspectRatio}px, ${vw * aspectRatio}vw, ${max * aspectRatio}px)`;
    };
    const slot = (width: string, mobile = false) => ratio
        ? `min(${width}, ${height(mobile)})` : width;
    const gap = (columns - 1) * 16;
    return [
        `(min-width: 1536px) ${slot(`${(1040 - gap) / columns}px`)}`,
        `(min-width: 900px) ${slot(`calc((75vw - ${112 + gap}px) / ${columns})`)}`,
        `(min-width: 600px) ${slot(`calc((100vw - ${48 + gap}px) / ${columns})`)}`,
        slot("calc(100vw - 32px)", true),
    ].join(", ");
}

export function getModalImageSizes(imageUrl: string, controlsHeight = 0): string {
    const ratio = getProjectImageRatio(imageUrl);
    return ratio
        ? `min(900px, calc(100vw - 64px), calc(${90 * ratio}vh - ${controlsHeight * ratio}px), calc(${100 * ratio}dvh - ${(64 + controlsHeight) * ratio}px))`
        : "(min-width: 964px) 900px, calc(100vw - 64px)";
}

/** Reuse the exact already-decoded resource, rather than requesting another thumbnail. */
export function getLoadedPreview(container: HTMLElement): string | undefined {
    const image = container.querySelector("img");
    return image?.complete && image.naturalWidth > 0 ? image.currentSrc : undefined;
}
