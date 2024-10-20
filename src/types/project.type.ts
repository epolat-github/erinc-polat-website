export interface AssetImage {
    url: string;
    alt: string;
}

interface AssetRowBase {
    type: "SINGLE" | "MULTIPLE";
}

interface AssetRowSingle extends AssetRowBase {
    type: "SINGLE";
    image: AssetImage;
}

interface AssetRowMultiple extends AssetRowBase {
    type: "MULTIPLE";
    images: AssetImage[];
}

export type AssetRow = AssetRowSingle | AssetRowMultiple;

export interface Project {
    slug: string;
    title: string;
    summary: string;
    featuredImages: AssetImage[];
    paragraphs: string[];
    assetRows: AssetRow[];
    tags: string[];
    projectUrl?: string;
}
