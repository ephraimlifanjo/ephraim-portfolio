import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { getSession, isSameOrigin } from "@/lib/auth";
import { commitFileToGitHub, hasGitHubPersistence } from "@/lib/github-content";

export const runtime = "nodejs";

const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/avif", "avif"],
]);

export async function POST(request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isSameOrigin(request)) return NextResponse.json({ error: "Invalid origin" }, { status: 403 });

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  if (!allowedTypes.has(file.type)) return NextResponse.json({ error: "Unsupported image type." }, { status: 415 });
  if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "Image must be 5 MB or less." }, { status: 413 });

  const ext = allowedTypes.get(file.type);
  const name = `${Date.now()}-${crypto.randomBytes(5).toString("hex")}.${ext}`;
  const relativePath = `uploads/${name}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  if (hasGitHubPersistence() && process.env.NODE_ENV === "production") {
    await commitFileToGitHub({
      filePath: `public/${relativePath}`,
      contentBase64: buffer.toString("base64"),
      message: `content: upload ${name}`,
    });
    return NextResponse.json({ ok: true, url: `/${relativePath}`, persistence: "github" });
  }

  const destination = path.join(process.cwd(), "public", relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, buffer);
  return NextResponse.json({ ok: true, url: `/${relativePath}`, persistence: "local" });
}
