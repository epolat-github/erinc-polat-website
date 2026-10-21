import { rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = [
    "public/logo.webp",
    "public/Small icon.webp",
    "public/Small icon.png",
];

const sourceBrick = [0xb9, 0x4e, 0x3a];
const targetPrimary = [0x3c, 0xcf, 0x91];

const distance = (data, offset, color) =>
    (data[offset] - color[0]) ** 2 +
    (data[offset + 1] - color[1]) ** 2 +
    (data[offset + 2] - color[2]) ** 2;

for (const asset of assets) {
    const image = sharp(asset).ensureAlpha();
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    for (let index = 0; index < data.length; index += 4) {
        if (data[index + 3] === 0) continue;

        if (distance(data, index, sourceBrick) > 12 ** 2) continue;

        data[index] = targetPrimary[0];
        data[index + 1] = targetPrimary[1];
        data[index + 2] = targetPrimary[2];
    }

    const extension = path.extname(asset);
    const temporary = `${asset}.brand-temp${extension}`;
    const output = sharp(data, {
        raw: {
            width: info.width,
            height: info.height,
            channels: info.channels,
        },
    });

    if (extension === ".webp") {
        await output.webp({ lossless: true }).toFile(temporary);
    } else {
        await output.png().toFile(temporary);
    }

    await rename(temporary, asset);
}

const faviconMark = await sharp("public/Small icon.png")
    .resize(52, 52, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

await sharp(Buffer.from(
    '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="white"/></svg>'
))
    .composite([{ input: faviconMark, left: 6, top: 6 }])
    .png()
    .toFile("src/app/icon.png");
