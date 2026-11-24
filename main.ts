const ENTRY = "All systems down — API, database, websockets. Can't reach monitoring to isolate cause. No ETA.";

console.assert(typeof ENTRY === "string", "ENTRY must be a string");
console.assert(!ENTRY.includes("\n"), "ENTRY must be a single line");
console.assert(ENTRY.length >= 1 && ENTRY.length <= 160, `ENTRY length ${ENTRY.length} must be 1–160`);

const fs = await import("node:fs");
const path = await import("node:path");

const outDir = "/output";
await fs.promises.mkdir(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
await fs.promises.writeFile(outPath, ENTRY, "utf8");

console.log(ENTRY);