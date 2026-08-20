import { ImageResponse } from "next/og";
import { getContent } from "@/lib/content";

export const alt = "Ephraim Lifanjo Sewa — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const content = getContent();
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#090a0b", color: "#f4f4ee", padding: 64, fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}><div style={{ width: 64, height: 64, borderRadius: 20, background: "#c8ff42", color: "#090a0b", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 24 }}>EL</div><div style={{ fontSize: 24, fontWeight: 700 }}>{content.site.name}</div></div>
        <div style={{ fontSize: 18, color: "#a7a79f" }}>Cameroon · Software Engineer</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ color: "#c8ff42", fontSize: 22, letterSpacing: 3 }}>WEB · MOBILE · BACKEND</div><div style={{ marginTop: 20, fontSize: 72, lineHeight: 1.02, fontWeight: 800, letterSpacing: -4, maxWidth: 980 }}>I build digital products that work.</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#8c8c86" }}><span>Portfolio · Projects · Events</span><span>{content.site.email}</span></div>
    </div>,
    size,
  );
}
