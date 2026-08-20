import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { isSameOrigin } from "@/lib/auth";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(180),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(0).optional().default(""),
});

const requests = new Map();

function rateLimited(request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const current = requests.get(key) || [];
  const recent = current.filter((time) => now - time < 60 * 60 * 1000);
  if (recent.length >= 5) return true;
  recent.push(now);
  requests.set(key, recent);
  return false;
}

export async function POST(request) {
  if (!isSameOrigin(request)) return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  if (rateLimited(request)) return NextResponse.json({ error: "Too many messages. Try again later." }, { status: 429 });

  let data;
  try {
    data = schema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }

  if (data.website) return NextResponse.json({ ok: true });

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || process.env.ADMIN_EMAIL;
  if (!host || !user || !pass || !to) {
    return NextResponse.json(
      {
        error: "Email delivery is not configured yet.",
        fallbackEmail: to || "ephraimlifanjos@gmail.com",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") === "true",
    auth: { user, pass },
  });

  const from = process.env.CONTACT_FROM_EMAIL || user;
  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: `[Portfolio] ${data.subject}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>Email:</strong> ${escapeHtml(data.email)}</p><p>${escapeHtml(data.message).replaceAll("\n", "<br>")}</p>`,
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
