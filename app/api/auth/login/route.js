import { NextResponse } from "next/server";
import { z } from "zod";
import {
  SESSION_COOKIE,
  authenticateAdmin,
  createSessionToken,
  isSameOrigin,
  sessionCookieOptions,
} from "@/lib/auth";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().email().max(160),
  password: z.string().min(8).max(200),
});

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function clientKey(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

function blocked(key) {
  const now = Date.now();
  const item = attempts.get(key);
  if (!item || now - item.startedAt > WINDOW_MS) {
    attempts.set(key, { count: 0, startedAt: now });
    return false;
  }
  return item.count >= MAX_ATTEMPTS;
}

function recordFailure(key) {
  const item = attempts.get(key) || { count: 0, startedAt: Date.now() };
  item.count += 1;
  attempts.set(key, item);
}

export async function POST(request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const key = clientKey(request);
  if (blocked(key)) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  let parsed;
  try {
    parsed = schema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 400 });
  }

  const admin = authenticateAdmin(parsed.email, parsed.password);
  if (!admin) {
    recordFailure(key);
    await new Promise((resolve) => setTimeout(resolve, 350));
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  attempts.delete(key);
  const response = NextResponse.json({ ok: true, email: admin.email });
  response.cookies.set(SESSION_COOKIE, createSessionToken(admin.email), sessionCookieOptions());
  return response;
}
