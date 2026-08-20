import { NextResponse } from "next/server";
import { getSession, isSameOrigin } from "@/lib/auth";
import { getContent, writeContentLocally } from "@/lib/content";
import { commitJsonContent, hasGitHubPersistence } from "@/lib/github-content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function validContent(content) {
  return (
    content &&
    typeof content === "object" &&
    content.site &&
    content.seo &&
    content.copy &&
    Array.isArray(content.navigation) &&
    Array.isArray(content.projects) &&
    Array.isArray(content.skills) &&
    Array.isArray(content.experience) &&
    Array.isArray(content.services) &&
    Array.isArray(content.events) &&
    Array.isArray(content.socials)
  );
}

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ content: getContent(), persistence: hasGitHubPersistence() ? "github" : "local" });
}

export async function PUT(request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isSameOrigin(request)) return NextResponse.json({ error: "Invalid origin" }, { status: 403 });

  const text = await request.text();
  if (text.length > 1_000_000) {
    return NextResponse.json({ error: "Content payload is too large." }, { status: 413 });
  }

  let content;
  try {
    content = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!validContent(content)) {
    return NextResponse.json({ error: "Content structure is incomplete." }, { status: 400 });
  }

  if (hasGitHubPersistence() && process.env.NODE_ENV === "production") {
    const result = await commitJsonContent(content);
    return NextResponse.json({
      ok: true,
      persistence: "github",
      message: "Content committed to GitHub. Your connected deployment can rebuild from this commit.",
      commit: result?.commit?.html_url || null,
    });
  }

  writeContentLocally(content);
  return NextResponse.json({
    ok: true,
    persistence: "local",
    message: "Content saved to data/content.json.",
  });
}
