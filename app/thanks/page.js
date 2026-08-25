import Link from "next/link";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Message sent",
  description: "Confirmation page for portfolio collaboration messages.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main>
      <section className="toolkit-hero shell" style={{ minHeight: "82svh", display: "grid", alignContent: "center" }}>
        <p className="kicker">✅ Message sent</p>
        <h1 style={{ maxWidth: 900 }}>Thanks for reaching out.</h1>
        <p>
          Your collaboration message has been submitted. I’ll reply by email as soon as I can.
        </p>
        <div className="toolkit-actions">
          <Link className="btn btn-primary" href="/"><FaArrowLeft /> Back home</Link>
          <a className="btn btn-ghost" href="mailto:ephraimlifanjos@gmail.com"><FaCheckCircle /> Email directly</a>
        </div>
      </section>
    </main>
  );
}
