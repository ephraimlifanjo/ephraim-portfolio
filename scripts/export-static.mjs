import { cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

if (!existsSync("out")) {
  throw new Error("Next.js static export directory 'out' was not created.");
}

await rm("public", { recursive: true, force: true });
await cp("out", "public", { recursive: true });

console.log("Static portfolio exported to ./public for Vercel.");
