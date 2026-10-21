import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const designFile = new URL("DESIGN.md", root);
const sidecarFile = new URL(".impeccable/design.json", root);
const stateFile = new URL(".impeccable/design-sync-state.json", root);
const hash = (content) => createHash("sha256").update(content).digest("hex");

async function readOptional(file) {
    try {
        return await readFile(file, "utf8");
    } catch (error) {
        if (error.code === "ENOENT") return null;
        throw error;
    }
}

async function main() {
    const acknowledge = process.argv.includes("--ack");
    if (!acknowledge) {
        let input = "";
        for await (const chunk of process.stdin) input += chunk;
        const event = JSON.parse(input || "{}");
        // Never create a repeated Stop continuation loop.
        if (event.hook_event_name !== "Stop" || event.stop_hook_active) return;
    }

    const design = await readOptional(designFile);
    if (design === null) return;
    const sidecar = await readOptional(sidecarFile);

    if (acknowledge) {
        if (sidecar === null) throw new Error("Missing .impeccable/design.json");
        const parsed = JSON.parse(sidecar);
        if (parsed.schemaVersion !== 2 || !Array.isArray(parsed.components) || !parsed.narrative) {
            throw new Error("Expected a schemaVersion 2 design sidecar with components and narrative.");
        }
        // This receipt records an agent-reviewed synchronization, not just a file save.
        await writeFile(stateFile, JSON.stringify({
            designSha256: hash(design),
            sidecarSha256: hash(sidecar),
        }, null, 2) + "\n");
        return;
    }

    const savedState = await readOptional(stateFile);
    let state;
    try {
        state = JSON.parse(savedState || "null");
    } catch {
        state = null;
    }
    if (state?.designSha256 === hash(design) && sidecar !== null && state.sidecarSha256 === hash(sidecar)) return;

    console.log(JSON.stringify({
        decision: "block",
        reason: "Design sync check: DESIGN.md or .impeccable/design.json differs from the last reviewed synchronization (or its receipt is missing). Preserve DESIGN.md. Review the changed design guidance and relevant component code, update only .impeccable/design.json as needed, and validate it. Then run node " +
            JSON.stringify(fileURLToPath(new URL("scripts/check-design-sync.mjs", root))) +
            " --ack to record the reviewed synchronization. If already consistent, verify before acknowledging. Do not use Git or invoke Superpowers skills. If synchronization cannot be completed, explain the blocker; do not acknowledge unfinished work.",
    }));
}

main().catch((error) => {
    console.error(`Design sync check failed: ${error.message}`);
    process.exitCode = 1;
});
