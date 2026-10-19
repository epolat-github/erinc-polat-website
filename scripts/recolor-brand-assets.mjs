import { rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = [
    "public/logo.webp",
    "public/Small icon.webp",
    "public/Small icon.png",
];

const sourceInk = [0x33, 0x33, 0x33];
const sourceMint = [0x3c, 0xcf, 0x91];
const targetInk = [0x11, 0x18, 0x27];
const targetBrick = [0xb9, 0x4e, 0x3a];

const distance = (data, offset, color) =>
    (data[offset] - color[0]) ** 2 +
    (data[offset + 1] - color[1]) ** 2 +
    (data[offset + 2] - color[2]) ** 2;

for (const asset of assets) {
    const image = sharp(asset).ensureAlpha();
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    for (let index = 0; index < data.length; index += 4) {
        if (data[index + 3] === 0) continue;

        const replacement =
            distance(data, index, sourceMint) < distance(data, index, sourceInk)
                ? targetBrick
                : targetInk;

        data[index] = replacement[0];
        data[index + 1] = replacement[1];
        data[index + 2] = replacement[2];
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

await sharp("public/logo.webp")
    .resize(16, 16, {
        fit: "contain",
        background: "#FFFFFF",
    })
    .png()
    .toFile("src/app/icon.png");
