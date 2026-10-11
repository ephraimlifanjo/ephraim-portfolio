import { access } from "node:fs/promises";

// Next.js with output: "export" writes the static website to /out.
// Never copy it into /public: that can create public/_next and break builds.
await access("out/index.html");
console.log("Static portfolio generated successfully in ./out.");
