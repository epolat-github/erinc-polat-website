import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import { gzipSync } from "node:zlib";

const root = fileURLToPath(new URL("../", import.meta.url));
const results = {};

// Run after `npm run build`. Count shared chunks once within each route.
// This measures manifest references, not observed network transfer or Web Vitals.
for (const route of ["page", "projects/page", "projects/[slug]/page"]) {
    const context = {};
    const manifestPath = resolve(root, `.next/server/app/[locale]/${route}_client-reference-manifest.js`);
    runInNewContext(readFileSync(manifestPath, "utf8"), context);
    const manifest = Object.values(context.__RSC_MANIFEST)[0];
    const chunks = new Set(Object.values(manifest.clientModules)
        .flatMap((module) => module.chunks)
        .filter((chunk) => chunk.endsWith(".js")));
    let rawBytes = 0;
    let gzipBytes = 0;
    for (const chunk of chunks) {
        const content = readFileSync(resolve(root, ".next", chunk.replace(/^\/_next\//, "")));
        rawBytes += content.length;
        gzipBytes += gzipSync(content).length;
    }
    results[route] = { chunks: chunks.size, rawBytes, gzipBytes };
}

console.log(JSON.stringify(results, null, 2));
