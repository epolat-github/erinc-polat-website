import assert from "node:assert/strict";
import sharp from "sharp";

const assets = [
    "public/logo.webp",
    "public/Small icon.webp",
    "public/Small icon.png",
    "src/app/icon.png",
];

const near = (data, offset, color, tolerance = 12) =>
    Math.abs(data[offset] - color[0]) <= tolerance &&
    Math.abs(data[offset + 1] - color[1]) <= tolerance &&
    Math.abs(data[offset + 2] - color[2]) <= tolerance;

for (const asset of assets) {
    const { data } = await sharp(asset)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });
    let brick = 0;
    let legacyMint = 0;

    for (let index = 0; index < data.length; index += 4) {
        if (data[index + 3] === 0) continue;
        if (near(data, index, [0xb9, 0x4e, 0x3a])) brick += 1;
        if (near(data, index, [0x3c, 0xcf, 0x91])) legacyMint += 1;
    }

    assert.ok(brick > 0, `${asset} does not contain the brick accent`);
    assert.equal(
        legacyMint,
        0,
        `${asset} still contains the legacy mint accent`
    );
}

console.log("Brand assets use the approved brick accent.");
