import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../public/projects/', import.meta.url);
const entries = await readdir(root, { recursive: true, withFileTypes: true });
const dimensions = {};
for (const entry of entries.filter((entry) => entry.isFile()).sort((a, b) =>
    path.join(a.parentPath ?? a.path, a.name).localeCompare(path.join(b.parentPath ?? b.path, b.name)))) {
    if (!/\.(webp|png|jpe?g|avif)$/i.test(entry.name)) continue;
    const file = path.join(entry.parentPath ?? entry.path, entry.name);
    const { width, height } = await sharp(file).metadata();
    if (!width || !height) throw new Error(`Missing dimensions: ${file}`);
    dimensions[`/projects/${path.relative(fileURLToPath(root), file).split(path.sep).join('/')}`] = { width, height };
}
await writeFile(new URL('../src/data/project-image-dimensions.json', import.meta.url), `${JSON.stringify(dimensions, null, 2)}\n`);
console.log(`Updated dimensions for ${Object.keys(dimensions).length} project images.`);
