import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell" style={{ minHeight: "100svh", display: "grid", placeItems: "center", textAlign: "center" }}>
      <div>
        <p className="kicker">404 · Lost in the stack 🧭</p>
        <h1 style={{ fontSize: "clamp(52px,10vw,100px)", letterSpacing: "-.07em", lineHeight: ".9", margin: 0 }}>This page isn’t here.</h1>
        <Link className="btn btn-primary" href="/" style={{ marginTop: 30 }}>Back home</Link>
      </div>
    </main>
  );
}
