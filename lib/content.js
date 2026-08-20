import fs from "node:fs";
import path from "node:path";

const contentPath = path.join(process.cwd(), "data", "content.json");

export function getContent() {
  const raw = fs.readFileSync(contentPath, "utf8");
  return JSON.parse(raw);
}

export function getProjectBySlug(slug) {
  return getContent().projects.find((project) => project.slug === slug) || null;
}

export function getEventBySlug(slug) {
  return getContent().events.find((event) => event.slug === slug) || null;
}

export function writeContentLocally(content) {
  fs.writeFileSync(contentPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}

export function contentFilePath() {
  return contentPath;
}
