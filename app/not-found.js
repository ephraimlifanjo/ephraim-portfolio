import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <p className="section-index">404 / NOT FOUND</p>
        <h1>This page isn&apos;t here. 👀</h1>
        <p>The link may be old, or the page may have moved.</p>
        <Link className="button button-dark" href="/">Back home →</Link>
      </div>
    </main>
  );
}
